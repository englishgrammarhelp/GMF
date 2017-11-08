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


(lib.staticbuffyfArm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AhnB9QACgDACgCQAXgbAQgnQAAgFABgFQADgQAFgOQAJgeARgWQAIgKAJgJQAdgeAogWQAMgHAMgGQBKgiAVhJQABgEABgEQACgIADgHAFvg+QgEAPgFAPQgJAegMAcQgRArgVAoQgSAjglAdQgjAagpAUQgpAUgrAPAlPAoQApAKAlANQAUADAUAEQAsAJAhARQACACACABQASAKAPAQQAKAKAJANQAAABABABQAOAWAFAWAlugVQAAABABABQAMAfASAcAlugUQAAABABAAAlbAkQAGACAGAC");
	this.shape.setTransform(63.5,38.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AEBj7QABgCARgtQARguBBgZQADgBADgBQAHgCAHgCQAugKAxAPQAwAPAYAtQAWApgCAwQgBAxgPAuQgPAugtAOQgjAKgYAZAnGiNQgBgRAEgPQABgDACgEQARguAxACQAsACgGA4QAQgFATACQA1AFgeA4QgSAhAJA3QAAABAAAAAolhQQAAgDAAgDQgBglAVgcQAVgdAdABQAMAAANAFAolhQQABAIACAIQACAMAKAGAoWAZQgHgEgGgHQABgDACgDAojAOQgEgGgDgIQgVgqAagmACbD/QgcAWgdATQgaARgcAXQgJAHgIAHQgcAZgnAEQguAFghgaQglgdgdghQgdgigqgYQgpgYgegiQgbgfgjgWQgEgEgFgCQgTgKgSgCQgXgBgVgHQgWgIgUgNQgogaAOgo");
	this.shape_1.setTransform(56.4,38);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BE9670").s().p("Ah3FmQglgdgdghQgdgigqgYQgpgYgegiQgbgfgjgWIgJgGQgTgKgSgCQgXgBgVgHQgWgIgUgNQgogaAOgoIgHgOQgVgqAagmIAAgGQgBglAVgcQAVgdAdABQAMAAANAFIADABIADgHQARguAxACQAsACgGA4QAQgFATACQA1AFgeA4QgSAhAJA3IAAABIABACQAMAfASAbQApALAlANIAoAGQAsAJAhASIAEACQASALAPAPIAEgFQAXgaAOgoIACgKQADgPAFgPQAJgdARgXIARgSQAegeAogXIAYgMQBKgiAVhKIACgIIAEgPIASgvQARguBBgZIAGgCIAOgEQAugKAxAPQAwAPAYAtQAWApgCAwQgBAxgPAuQgPAugtAOQgjAKgYAZIAJgeIgJAeQgKAegLAcQgRArgVAoQgSAjglAdQgjAagpAUQgpAUgrAPQgcAWgdATQgbARgbAXIgRAOQgcAZgnAEIgQABQgkAAgbgWgAgOCVIACACQANAWAFAWQgFgWgNgWIgCgCQgIgMgKgLQAKALAIAMgAkIApIgMgDIAMADgAojAOQAGAHAHAEQgHgEgGgHIADgGIgDAGIAAAAgAoihAQACAMAKAGQgKgGgCgMIgDgQIADAQgAnGiNIAAgDQAAgPADgOQgDAOAAAPIAAADg");
	this.shape_2.setTransform(56.4,38);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.staticbuffyfArm, new cjs.Rectangle(-1,-1,114.9,78), null);


(lib.staticbuffybArm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("ACyhQQAPA8gYAsQgrBQhoAIQhlAHhDgwQg8gpAlhZQAOgaAOgb");
	this.shape.setTransform(19.2,42.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AIaCGQAWgFAQgOQAOgMAAgSQABgXgJgUQgBgCgBgDQAOgHgJgUQgCgEgCgEQgRgggjgWQgUgMgUAMQgBAAgCABQgcAUAdAhQAAAAAAABQAAAAAAAAQgBAAgBABQgWAOgGAYQgEAOACASQAsgCAcApQAHAKAEALQANAegLAiQgFAQgYgDQgRgCgNgHQgCAPgQAPQglAigtgYQgdgQAAgnQgVASgNgMQgUgRgagPQgtgZAfgsQASgYADgaQADgSgFgSQAPAKAMAOQAFAGAEAGQAFAHADAIApOA9QAIgNAHgMQAYgqAigjQAhgjAjggQAkghAogbQAogbAlgfQAkgdA1AFQAeACAdABQASABARABQAxADAwAIQAIABAIACQAjAGAjALQApAMAqAOQARAGAQAFQAdAJAcAIQAQAEAPAEQAgAJAbAKQArAQArATQApARAaAeAEVAGQgBgBgBgBQgBgBgCgBQgWgOgagHQgTgGgTgFQgcgHgdgEQgvgHgwAAQgRABgRAAQgdAAgdAAQgcgBgdgBQgQAMgRANQgLAKgMALQgZAWgYAXQgKAJgKAJQgQAQgOARQgNASgLATAFgC7QADgDADgDQAeggAMgjQAAgHADgGQAFgfgcALQgmAPgGAnAJEAlQgFgJgIgJQgIgLgKgGQgcgRghARQAAAAgBABAGTBlQgBAFgCAHQAAAAAAABQgBAIACALQAAAAAAAAQAqAAAVAZQAUAXgDAVAHIBSQAAgEgBgEQgEAAgFABQgiAFgJAVAiUg0QARACAQAB");
	this.shape_1.setTransform(64.1,25.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BE9670").s().p("Ao+DkQg8gqAmhZIAcg1IAOgaQAYgpAigkQAhgiAkggQAjghAogbQAogcAmgeQAjgdA1AEIA8AEIAjACQAxACAvAIIAQADQAjAHAjAKQApAMArAPIAhALIA5AQIAeAJQAgAJAcAKQArAQArASQAoASAaAeQgOAJAAAOQAAANAPASQgPgSAAgNQAAgOAOgJIADgCQAUgMAUANQAjAVARAiIAEAIQAJATgOAHIACAFQAJATAAAXQgBASgNAMQgRAPgVAFQAMAegKAhQgFARgYgDQgSgDgNgHIABgFQAAgTgSgUQgVgYgpgBIgBAAIgCgNIABgGQgMAkgeAgIgGAFIAGgFQAeggAMgkIgBAGIACANIABAAQApABAVAYQASAUAAATIgBAFQgCAQgPAOQgmAjgsgYQgegRAAgnQgVASgNgLQgTgRgbgPQgtgaAggrQARgYADgaQADgSgFgSQAPALAMAMIAKANQAEAHAEAIQgEgIgEgHIgKgNQgMgMgPgLIgCgBIgDgCQgVgPgbgIIglgKQgdgHgcgFQgvgHgxABIgiAAIg5AAIg5gCIghgCIAhACIghAaIgYAVIgxAtIgTASQgRAPgNARQgOASgLAUQALgUAOgSQAPA9gZAtQgqBQhpAIIgZABQhVAAg7gqgAGSBAQgmAOgGAnQAGgnAmgOIAAgBQAHgCAFAAIAAAAIAAAAQANAAgDAVIAAACQgDAFAAAHIAAgBIADgLQAJgWAigEIAJgBIACAIIgCgIIABAAIADAAIAAAAIABAAQAoAAAaAlIABACQAHAKAFALQgFgLgHgKIgBgCQgaglgoAAIgBAAIAAAAIgDAAIgBAAIAAgNQAAgKACgJQAGgZAWgMIACgCIgCACQgWAMgGAZQgCAJAAAKIAAANIgJABQgiAEgJAWIAAgCQADgVgNAAIAAAAIAAAAQgFAAgHACIAAABIAAAAgAI6gOQAKAGAJAKQAHAIAFAKQgFgKgHgIQgJgKgKgGQgcgTggATIgCAAIAAAAIABAAIABAAQAQgJAPAAQAPAAAOAJgAGoBUIAAAAgAHcA5IAAAAgAHcA5IAAAAgAhdhDIAAAAg");
	this.shape_2.setTransform(61.9,26.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.staticbuffybArm, new cjs.Rectangle(-0.2,-1,124.3,55.9), null);


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


(lib.Intransitive1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape.setTransform(229.2,6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("AgEA6QgDgCAAgDIAAgJIABgKIgCgvIgSgCQgIgBAAgHQAAgEACgCQADgCADAAIASABIgBgLIAAgLQAAgDACgCQADgDADAAQAHAAABAMIAAAIIAAAFIAAAFIAMgBIALAAQAFACAAAGQAAAEgCACQgDADgDAAIgEgBIgEAAIgMABIACAwIAAAEIAAAEQAAATgJAAQgCAAgCgDg");
	this.shape_1.setTransform(223,1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009900").s().p("AgXAkQgMgKAAgSQAAgQAMgSQAMgUAPABQAHAAALADQAMAFAAAHQAAADgCACQgCADgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBIgDgCQgGgEgKAAQgIAAgIAPQgIAOAAAJQAAALAIAGQAHAGAJAAQAFAAAGgDIAKgEIAEgCQACAAACADQADACAAADQAAAGgNAGQgLAEgIAAQgPABgMgLg");
	this.shape_2.setTransform(214.7,2.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009900").s().p("AgcAkQgNgLAAgSQAAgVALgPQAMgPASAAQAOAAAIAEQALAGAAAMQAAAIgKAHIgRAIIgfAPQAFAHAHAEQAHADAIAAQAGAAAHgCQAKgDADgEQACgFAEAAQADAAACADQADACgBADQABAJgPAGQgNAGgMAAQgSAAgMgJgAgQgWQgHAIgDAPIAZgLQAOgIAHgFQgIgHgMAAQgKAAgGAIg");
	this.shape_3.setTransform(205.8,2.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009900").s().p("AgaA7IgBgEQAAgDACgCQADgDAEAAQAEAAAGALIAFAIQADAEADAAQADAAADgFIACgIIgCgyIgDgtQAAgEADgDQABgEAFAAQACAAADACQADADAAACIADAvIACAzQAAALgHAKQgIAKgKAAQgRAAgMgcgAAGhGQgEgCAAgEQAAgEAEgDQADgDADAAQAEAAADADQADADAAAEQAAAEgDACQgDADgEAAQgDAAgDgDg");
	this.shape_4.setTransform(196.7,3.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#009900").s().p("AgZA+QgCAEgEAAQgDAAgCgCQgDgDAAgDIABgGIAAgGIgBgbIAAgZIAAgXIAAgXQAAgFACgEQADgFAFAAQAGAAAAAHIAAADIgBAEIAAASIAAAVQAHgFAHgCQAGgCAFgBQASAAALAOQAKAMAAATQAAASgMAOQgMANgRAAQgNAAgLgFgAgMgDIgMAHIAAAPIAAAMIAAAOIALAEQAFACAHAAQALAAAHgJQAIgHAAgNQAAgMgGgJQgHgIgLAAQgGAAgHAEg");
	this.shape_5.setTransform(189.2,0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#009900").s().p("AgYAjQgLgMgBgSQAAgTAKgOQALgQAUgBQARABAIAPQAHAMAAARQgBASgJANQgLAPgQgBQgOAAgKgKgAgOgQQgGAJAAAMQAAAMAHAGQAGAGAHgBQAIAAAGgFQAHgIAAgLQABgggSAAIgBAAQgLAAgGAMg");
	this.shape_6.setTransform(179.4,2.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#009900").s().p("AgEA6QgDgCAAgDIAAgJIABgKIgCgvIgSgCQgIgBAAgHQAAgEACgCQADgCADAAIASABIgBgLIAAgLQAAgDACgCQADgDADAAQAHAAABAMIAAAIIAAAFIAAAFIAMgBIALAAQAFACAAAGQAAAEgCACQgDADgDAAIgEgBIgEAAIgMABIACAwIAAAEIAAAEQAAATgJAAQgCAAgCgDg");
	this.shape_7.setTransform(165.9,1.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#009900").s().p("AgXAkQgMgKAAgSQAAgQAMgSQAMgUAOABQAJAAAKADQAMAFAAAHQAAADgCACQgCADgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBIgDgCQgGgEgLAAQgHAAgJAPQgHAOAAAJQAAALAHAGQAIAGAJAAQAFAAAGgDIAKgEIAEgCQACAAACADQADACAAADQAAAGgNAGQgLAEgIAAQgPABgMgLg");
	this.shape_8.setTransform(157.6,2.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#009900").s().p("AgbAkQgNgLgBgSQAAgVALgPQALgPATAAQAOAAAIAEQALAGAAAMQAAAIgKAHIgRAIIgfAPQAFAHAGAEQAIADAIAAQAGAAAHgCQAKgDADgEQADgFADAAQADAAACADQACACAAADQAAAJgOAGQgNAGgMAAQgSAAgLgJgAgQgWQgHAIgDAPIAZgLQAOgIAHgFQgIgHgMAAQgKAAgGAIg");
	this.shape_9.setTransform(148.7,2.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#009900").s().p("AgfAmIAAg5IAAgJIAAgHQAAgJAIAAQAIAAAAAOQAPgPATgBQAHABADAEQADAFAAALIAAAFQAAALgIAAQgHAAAAgIIAAgGIgBgHQgNACgHAFQgHAGgFALIAAAsQAAAJgIAAQgHAAAAgJg");
	this.shape_10.setTransform(140.1,2.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#009900").s().p("AgHA8QgCgCgBgEIAAgOIAAgQIAAgTIABgSQAAgFADgCQACgCADAAQADAAADACQACACAAAFIgBASIgBATIAAAQIAAAOQAAAEgBACQgDADgDgBQgDABgCgDgAgEgtQgDgDgBgEQABgEADgCQACgEAEAAQADAAADAEQADACAAAEQAAAEgDADQgDADgDAAQgEAAgCgDg");
	this.shape_11.setTransform(133.6,0.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#009900").s().p("AgdA5QgMgMAAgSQAAgXANgMQALgNASAAQAJAAAGADIAIAFQABgjABgMQACgHAGAAQAIAAAAAIQAAAMgEAnIgBAXQAAAcACAOIAAACQAAADgCACQgCADgDAAQgFAAgCgIQgHAFgGACQgHACgFAAQgRAAgMgLgAgTABQgHAJAAAQQAAALAIAIQAIAHAKAAQAFAAAFgCIAJgHIADgDIAAgOIAAgKIAAgJQgDgHgGgCQgFgEgHAAQgNAAgHAHg");
	this.shape_12.setTransform(126,0.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAbArIgGgHIgOAHQgGACgDAAQgTAAgKgLQgIgKAAgWQAAgSAOgPQAOgOASAAQAHAAAJADQAMAFAAAHIgCAEIgCAKIAAARQAAALACAGIAEAPIACAEIABABQAAADgCADQgDACgCAAQgCAAgEgDgAgNgUQgKALAAAMQABAOAFAHQAEAGAKABQAHgBAGgDIAIgGQgDgVAAgKIABgJIABgJIgGgBIgDgBQgLAAgKAKg");
	this.shape_13.setTransform(111.6,2.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgdA5QgMgMAAgSQABgXAMgMQALgNASAAQAJAAAGADIAHAFQACgjABgMQACgHAGAAQAIAAgBAIQAAAMgDAnIgBAXQAAAcACAOIAAACQAAADgCACQgCADgDAAQgFAAgCgIQgHAFgGACQgHACgFAAQgSAAgLgLgAgTABQgHAJAAAQQAAALAIAIQAIAHAKAAQAGAAAEgCIAJgHIADgDIAAgOIAAgKIAAgJQgDgHgGgCQgEgEgIAAQgNAAgHAHg");
	this.shape_14.setTransform(97.1,0.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgbAkQgNgLgBgSQAAgVALgPQALgPATAAQANAAAJAEQALAGAAAMQAAAIgKAHIgRAIIgfAPQAFAHAGAEQAIADAIAAQAFAAAJgCQAJgDADgEQADgFADAAQADAAACADQACACAAADQAAAJgOAGQgNAGgMAAQgSAAgLgJgAgQgWQgHAIgDAPIAZgLQAOgIAGgFQgHgHgMAAQgKAAgGAIg");
	this.shape_15.setTransform(87.6,2.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgcAkQgNgLABgSQAAgVAKgPQALgPATAAQANAAAJAEQALAGAAAMQAAAIgKAHIgRAIIgfAPQAEAHAIAEQAHADAIAAQAGAAAHgCQAKgDADgEQADgFADAAQADAAACADQADACgBADQABAJgQAGQgMAGgMAAQgSAAgMgJgAgQgWQgHAIgEAPIAagLQAOgIAHgFQgIgHgMAAQgJAAgHAIg");
	this.shape_16.setTransform(78.3,2.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAUAoIgCgSIgBgSIAAgHIAAgIQAAgSgHAAQgJAAgHALQgIAKgEAPIgBAIIAAAIIAAAHIABAIQAAAEgCACQgDACgDAAQgEAAgDgCQgBgCgBgEIAAgIIAAgHIAAgXIABgXIAAgIIAAgIQAAgEACgCQADgCADAAQAIAAABAKIAAAKQAOgSANAAQAOAAAFALQADAIABAPIAAAJIAAAGQAAAHACALIACASQgBAEgCACQgCACgEAAQgHAAgBgIg");
	this.shape_17.setTransform(69.3,2.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgEA6QgDgCAAgDIAAgJIABgKIgCgvIgSgCQgIgBAAgHQAAgEACgCQADgCADAAIASABIgBgLIAAgLQAAgDACgCQADgDADAAQAHAAABAMIAAAIIAAAFIAAAFIAMgBIALAAQAFACAAAGQAAAEgCACQgDADgDAAIgEgBIgEAAIgMABIACAwIAAAEIAAAEQAAATgJAAQgCAAgCgDg");
	this.shape_18.setTransform(55.5,1.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgYAjQgLgMgBgSQAAgTAKgOQALgQAUgBQARABAIAPQAHAMAAARQgBASgJANQgLAPgQgBQgOAAgKgKgAgOgQQgGAJAAAMQAAAMAHAGQAGAGAHgBQAIAAAGgFQAHgIAAgLQABgggSAAIgBAAQgLAAgGAMg");
	this.shape_19.setTransform(46.9,2.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAUAoIgCgSIgBgSIAAgHIAAgIQAAgSgHAAQgIAAgIALQgIAKgEAPIgBAIIAAAIIAAAHIABAIQAAAEgCACQgDACgEAAQgDAAgDgCQgCgCAAgEIAAgIIgBgHIABgXIABgXIAAgIIAAgIQAAgEACgCQADgCADAAQAIAAABAKIAAAKQAOgSANAAQAOAAAFALQADAIABAPIAAAJIAAAGQAAAHACALIABASQABAEgDACQgCACgEAAQgHAAgBgIg");
	this.shape_20.setTransform(38.3,2.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgXAuQgMgFAAgHQAAgEACgDQADgCAEAAQACAAAEAEQACACAHABIAKABQAGAAAFgBQAHgDABgFQgBgMgQgEIgHgBQgLgCgFgEQgGgEAAgJQAAgRAQgIIAPgFQALgDAFgCQADgCAEAAQADAAADADQACACAAAEIABAGIABAHQAAAEgCADQgCACgEAAQgFAAgCgDIgBgJIgTAGQgNAFAAAIIAFACQASADAJAFQAOAJAAAQQAAAOgMAGQgJAGgOAAQgLAAgLgEg");
	this.shape_21.setTransform(24.2,2.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgcAkQgNgLABgSQAAgVAKgPQALgPATAAQANAAAJAEQALAGAAAMQAAAIgKAHIgRAIIgfAPQAEAHAIAEQAHADAIAAQAGAAAHgCQAKgDADgEQADgFADAAQADAAACADQADACgBADQABAJgQAGQgMAGgMAAQgSAAgMgJgAgQgWQgHAIgEAPIAagLQAOgIAHgFQgIgHgMAAQgJAAgHAIg");
	this.shape_22.setTransform(15.8,2.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgYAjQgLgMgBgSQAAgTAKgOQALgQAUgBQARABAIAPQAHAMAAARQgBASgJANQgLAPgQgBQgOAAgKgKgAgOgQQgGAJAAAMQAAAMAHAGQAGAGAHgBQAIAAAGgFQAHgIAAgLQABgggSAAIgBAAQgLAAgGAMg");
	this.shape_23.setTransform(6.3,2.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgdA5QgMgMAAgSQAAgXAMgMQAMgNASAAQAKAAAEADIAIAFQABgjACgMQABgHAHAAQAHAAAAAIQABAMgEAnIgBAXQAAAcACAOIAAACQABADgCACQgDADgDAAQgFAAgDgIQgFAFgHACQgGACgHAAQgQAAgMgLgAgTABQgHAJAAAQQAAALAIAIQAIAHAJAAQAGAAAGgCIAJgHIACgDIAAgOIAAgKIAAgJQgDgHgGgCQgEgEgIAAQgNAAgHAHg");
	this.shape_24.setTransform(-3,0.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0033CC").s().p("AgoA/QgEgEAAgFIAAhXIgBgLIABgLQABgIANgBQAHgCAOAAQAPAAAOAKQARAMAAARQAAAKgDAHQgDAFgHAFQAIAEAGAIQAIAJAAAIQAAALgNAKQgIAHgIADQgTAHgdAAQgFAAgEgEgAgWAsQAPAAAPgFQAPgEAAgFQAAgGgKgFQgHgEgGgBIgWgBgAgWgrIABARIgBASIAMAAQAYgCAAgRQAAgFgHgGQgHgGgJAAIgNABg");
	this.shape_25.setTransform(-20.4,0.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0033CC").s().p("AgtA+QgDgDAAgFIABgTIAAgSIAAhCQgBgGAEgEQAEgGAHABIAVABQAMACAHAEQAkASAAAaQgBALgHAHQgHAJgPAFQAVANAMAMQADAEAAAEQAAAFgEADQgDADgFAAQgFAAgEgDQgZgYgdgJIABAbQABAFgEADQgEADgEAAQgFAAgEgDgAgZACIAEAAQAUAAAJgEQAEgCAEgDQADgEAAgCQAAgJgMgJQgKgIgMgBIgKgBg");
	this.shape_26.setTransform(-31.3,0.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0033CC").s().p("AgmBAQgJgJAAgaIACghIABghIgBgIIAAgJQAAgNALAAQAEAAADACIASgEIAQAAQAVAAAMAEQAIADAAAIQAAAEgDADQgEAEgFAAIgDAAQgOgEgMAAIgNABIgPADIgBAgIAggDIAUgBQAFAAADADQAEAEAAAEQAAAJgLABIgUADIgiACIgBASQAAAQACACQABABAKAAIAOAAIAQAAIAFgBIAEAAQAFAAAEACQAEADAAAGQAAAJgKACQgIACgaAAQgbgBgIgGg");
	this.shape_27.setTransform(-42,0.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0033CC").s().p("AgRA7QgKgYgNgsIgHgXQgEgQAAgFQAAgFADgEQAEgDAFAAQAHAAAEAJIADAOIAIAaIAMAqIATgyIAHgUQAFgLAGgHQADgEAGAAQAEAAAEAEQADACAAAGQAAADgCADQgEAHgEAIIgGARIgWA4IgKAVQgDAGgGAAQgJAAgDgIg");
	this.shape_28.setTransform(-53.2,0.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0033CC").s().p("AgmBAQgJgJAAgaIACghIABghIgBgIIAAgJQAAgNALAAQAEAAADACIASgEIAQAAQAVAAAMAEQAIADAAAIQAAAEgDADQgEAEgFAAIgDAAQgOgEgMAAIgNABIgPADIgBAgIAggDIAUgBQAFAAADADQAEAEAAAEQAAAJgLABIgUADIgiACIgBASQAAAQACACQABABAKAAIAOAAIAQAAIAFgBIAEAAQAFAAAEACQAEADAAAGQAAAJgKACQgIACgaAAQgbgBgIgGg");
	this.shape_29.setTransform(-71.4,0.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0033CC").s().p("AgRA7QgKgYgNgsIgHgXQgEgQAAgFQAAgFADgEQAEgDAFAAQAHAAAEAJIADAOIAIAaIAMAqIATgyIAHgUQAFgLAGgHQADgEAGAAQAEAAAEAEQADACAAAGQAAADgCADQgEAHgEAIIgGARIgWA4IgKAVQgDAGgGAAQgJAAgDgIg");
	this.shape_30.setTransform(-82.5,0.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0033CC").s().p("AgnA9QgDgEAAgEQAAgGAEgCQADgEAGAAIAPgCIAAglQAAgWACgUIgSAAQgFAAgDgDQgEgDAAgFQAAgEADgEQADgDAFAAIAYAAQAPAAAZADQAKACAAAKQAAAFgEADQgDACgEABIgWgDQgBAPAAAYIAAAmIAWgBQAFABAEADQADAEAAAEQAAAFgEADQgDADgFAAIgOABIgOAAIgQABIgRABQgFAAgEgCg");
	this.shape_31.setTransform(-93.1,0.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0033CC").s().p("AgHA9QgEgEAAgFIAAgDIABgEIgBgLIAAgMQAAgLgCgSIgDgeIgEAAQgSAAgLgDQgJgCAAgJQAAgEADgDQADgEAGAAIANABIANABIAPAAIAOAAIATABIATABQAFAAAEADQADADAAAFQAAAFgDADQgEADgFAAIgUgBIgUgBIACAiIACAhIABAIIAAAJQAAAGgDAFQgDAGgGAAQgEAAgDgCg");
	this.shape_32.setTransform(-103.4,0.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0033CC").s().p("AgnA9QgDgEAAgEQAAgGAEgCQADgEAGAAIAPgCIAAglQAAgWACgUIgSAAQgFAAgDgDQgEgDAAgFQAAgEADgEQADgDAFAAIAYAAQAPAAAZADQAKACAAAKQAAAFgEADQgDACgEABIgWgDQgBAPAAAYIAAAmIAWgBQAFABAEADQADAEAAAEQAAAFgEADQgDADgFAAIgOABIgOAAIgQABIgRABQgFAAgEgCg");
	this.shape_33.setTransform(-114.2,0.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0033CC").s().p("AgsA2QgKgIAAgKQAAgFADgEQADgDAGAAQAHAAAEAIQAEAKARAAQANAAAOgHQANgFAAgIQAAgLgIgDQgGgDgSAAQgOgBgMgEQgPgGAAgNQABgQARgNQARgOATgBQAIAAAMAFQAPAEAAAGQAAAFgDADQgDADgFAAIgMgBIgMgCQgLABgIAEQgKAGAAAFQAAADADADQADACAGAAIAUACQATABAKAJQAMAJAAASQAAAVgYALQgTAIgXAAQgVAAgMgJg");
	this.shape_34.setTransform(-124.6,1.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0033CC").s().p("Ag6BAQgDgEAAgEIAAgLIABgKIAAgOIABgPIgBgPIAAgPIgBgPIAAgPQAAgFADgEQAFgDAFAAQAHAAAHAKQAkA2AlAhIAAgNIgBg2IgBgJIAAgKQAAgLAMAAQAOAAAAAqIgBANIAAA0IgBAMQgDAMgKAAQgGAAgHgHQgggdgngzIAAAaIAAATIAAAUQAAAYgMABQgGgBgEgDg");
	this.shape_35.setTransform(-137.4,0.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0033CC").s().p("AAdAvQgEgJgDgOIgVACQgLABgIACIgNAbQgEAGgGAAQgEAAgEgDQgEgEAAgEQAAgFAMgYIgBgFQAAgEAIgCQAMgTAOgWQAUggAFABQAJAAADALIAFAaIANA2IAEAKQADAIAAADQAAAFgDADQgEADgEAAQgIAAgGgPgAgGAHIALgBIAMgBIgGgbIgRAdg");
	this.shape_36.setTransform(-150.6,0.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0033CC").s().p("AgtA+QgDgDAAgFIAAgTIAAgSIAAhCQABgGADgEQAEgGAIABIAUABQAMACAHAEQAjASAAAaQAAALgHAHQgIAJgOAFQAWANALAMQADAEAAAEQAAAFgDADQgEADgFAAQgEAAgEgDQgZgYgdgJIABAbQAAAFgEADQgDADgFAAQgFAAgEgDgAgZACIADAAQAVAAAJgEQAEgCADgDQAEgEAAgCQAAgJgMgJQgKgIgMgBIgKgBg");
	this.shape_37.setTransform(-162,0.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0033CC").s().p("AgHA9QgEgEAAgFIAAgDIABgEIgBgLIAAgMQAAgLgCgSIgDgeIgEAAQgSAAgLgDQgJgCAAgJQAAgEADgDQADgEAGAAIANABIANABIAPAAIAOAAIATABIATABQAFAAAEADQADADAAAFQAAAFgDADQgEADgFAAIgUgBIgUgBIACAiIACAhIABAIIAAAJQAAAGgDAFQgDAGgGAAQgEAAgDgCg");
	this.shape_38.setTransform(-173.4,0.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#0033CC").s().p("Ag6BAQgDgEAAgEIABgLIAAgKIABgOIAAgPIAAgPIAAgPIgBgPIgBgPQAAgFADgEQAFgDAFAAQAHAAAHAKQAkA2AmAhIAAgNIgBg2IgBgJIgBgKQAAgLAMAAQANAAAAAqIAAANIgBA0IgBAMQgCAMgKAAQgGAAgHgHQgggdgngzIgBAaIABATIAAAUQAAAYgMABQgGgBgEgDg");
	this.shape_39.setTransform(-186.3,0.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#0033CC").s().p("AgnA9QgDgEAAgEQAAgGAEgCQADgEAGAAIAPgCIAAglQAAgWACgUIgSAAQgFAAgDgDQgEgDAAgFQAAgEADgEQADgDAFAAIAYAAQAPAAAZADQAKACAAAKQAAAFgEADQgDACgEABIgWgDQgBAPAAAYIAAAmIAWgBQAFABAEADQADAEAAAEQAAAFgEADQgDADgFAAIgOABIgOAAIgQABIgRABQgFAAgEgCg");
	this.shape_40.setTransform(-198,0.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAUAoIgCgSIgCgSIABgHIAAgIQAAgSgGAAQgKAAgHALQgIAKgEAPIgBAIIgBAIIABAHIAAAIQAAAEgCACQgCACgDAAQgEAAgCgCQgCgCAAgEIgBgIIAAgHIABgXIABgXIAAgIIgBgIQAAgEACgCQADgCAEAAQAHAAABAKIAAAKQAOgSAOAAQANAAAFALQAEAIAAAPIAAAJIAAAGQAAAHACALIACASQAAAEgDACQgCACgEAAQgHAAgBgIg");
	this.shape_41.setTransform(-214.1,2.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAdArIgFgaIgXAEIgUAEIgPAhQgDAEgEAAQgDAAgDgDQgDgCAAgEQAAgDANgbQgBgCAAgDQAAgGAHgCQAKgRAOgXQATggAFABQAHAAACAJIAFAcIANA4IAEANIADAJQAAADgDADQgCACgDAAQgJAAgFgTgAgKAGIAdgGIgGgfg");
	this.shape_42.setTransform(-225,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Intransitive1_1, new cjs.Rectangle(-233.3,-13.8,466.6,27.7), null);


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


(lib.body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AhtiEQAihZAxhBQAxhDAKhSQAEglgGgqAiooeQgKBEg8AzQg2AuhFAxQhEAwhFA0Ahyh4QABgBABgBAIPCbQgCgEgCgDQg9gFgxgCQgogBgpgCQgIAAgIAAQgxgCgwgMQgwgLgtgFQgwgFgtgIQgtgJgrgJQgCgPgEgQAIPCbQgFAZgDAaQgDAVgCAVQgGAugXAnQgXAoghAfQgHAHgIAGQgbAXgfARQgkAVgfARQgiATgpAQQgsASgvgHQgwgGgpgTQgggQgQguQgPgqgJguQgHgngGgmQgBgJgCgJQgHguAAgxQABgvAGguQAAgCgBgCQAAgBAAgBAIQCeQAAgBgBgCAgzEhQgBgYgBgYQgBgxADgxQABgfgEgdAmRn6QgDgUADgCAoPlWQgEgGA0gI");
	this.shape.setTransform(-0.7,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AILFfQAFgXADgYQAHgygEgxQgEgxgWgsQgPgggTgdQgEgHgEgGQgBgDAAgCQgHgTgJgOQgZgngcglQgegngmgeQgmgegqgWQgpgVgogYQgmgWgjgVQgDgCgEgDQgDgCgCgCQgZgRghgKQgHgDgIgBQgDgBgEgBQgtgKgvgIQgqgHgrADQgGAAgFAAQguADguADQgSABgRABAh3BGQABgFACgFAhFDvQgBgNgDgNQgMgrgaglQgNgTgSgNAoWiVQAEAHgDgFQgEgFANAsQALApAIAgQAAADABADQALAsgDAwQgDArAUAZQAOARARAMQASANAXAIQAvAPAvgEQAwgFArgVQArgVAfgkQADgEADgEQALgOAKgPAk8lQQABgDACgCAmYlQQASABATgCQAdgCAdgC");
	this.shape_1.setTransform(0,-19.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().p("ABtIeQgwgGgpgUQgfgQgRguQgPgqgJguIgNhNIgCgwQgBgwADgxQABgggEgdIgBgEIAAgCQArAKAtAIQAtAIAwAFQAtAFAwAMQAwAMAxABIAQABIBRADQAxACA9AEIAEAHQgFAZgDAaIgFArQgGAtgXAoQgXAoghAeIgPANQgbAXgfARIhDAnQgiATgpAQQggAMgiAAQgNAAgMgBgAmegLQgWgIgTgMQgRgMgOgRQgUgaADgrQADgvgLguIgBgGQBFgzBEgwQBFgyA2gtQA8g0AKhEQArgCAqAHQAvAHAuALIAGABIAPAEQAGAqgEAmQgKBRgxBDQgxBBgiBZIgDAKIgCADIgVAcIgGAIQgfAlgrAVQgrAVgwAEIgVAAQglAAgkgLg");
	this.shape_2.setTransform(0.7,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BE9670").s().p("AIKFfIgCgEIgEgHQg9gEgxgCIhRgDIgQgBQgxgBgwgMQgwgMgtgFQgwgFgtgIQgtgIgrgKIgGgeIgBAAQgBgNgDgNQgMgsgaglQgNgTgSgNIAVgcIACgCIAEgKQAhhZAxhBQAxhDAKhRQAEgmgGgqQAhAKAZASIAFAEIAIAFIBIArQAoAXApAVQAqAXAmAeQAmAeAeAnQAcAkAZAoQAJAOAHASIACAGIAIAMQASAeAPAfQAWAtAEAxQAEAxgHAxQgDAZgFAXIgBAAgAoMhsQgNgsAEAFQABABAAAAQAAABAAAAQAAgBAAAAQgBgBgBgCQgEgHA0gIQA0gIAPg9QAPg9gDgUQgEgUADgCQASABATgCIA6gFIgDAGIADgGIAjgCIBcgFIALgBQgKBFg8AzQg2AthFAyQhEAwhFAzQgIgggLgog");
	this.shape_3.setTransform(0,-19.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.body, new cjs.Rectangle(-54.5,-55.3,109.1,110.7), null);


(lib.Background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#990066").ss(4,1,1).p("AAAWQMAAAgsf");
	this.shape.setTransform(-241.6,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#990066").ss(4,1,1).p("EglvgWPMBLfAAAMAAAAsfMhLfAAA");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#F0EBFA","#D1B5FD"],[0,1],0,148.9,0,-148.8).s().p("EglvAWQMAAAgsfMBLfAAAMAAAAsfg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-243.6,-144.4,487.2,288.8);


(lib.animbuffyhead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AD1hZQAAAEAAADQADAMAHAKQABABAAABQAaADA0ALQAAABAAABQAPAsgNA0QgWBUhZAeAEAg6QARAYAjAKAkEijQAJgEAKAAQAKABAHAGQAGAHAEAIQAEAJAEAIQABABABABQAAABAAAEQgCgBgBgCQgIgFgHgFQgIgFgJgDQgJgDgKABQgJACgIAEQgJAEgIAFQgIAGgHAGQADgGADgHQADgIAIgGQAGgGAIgFQAIgEAIgEgAkDguQACgBABAAQAGgBAGgBQASgBALAKQgBgVgLgTAk9gOQAAgBAAgBQgFgNABgDQABgDgBgJQAAgJAGgRQAGgRAOgKQAQgMAQAHQAGADACAEAk9gOQAHgFAFgGQAAAAAAgBQAJgIAKgFQABAAACgBQACgBADgBQAJgDAKgBQAMALgDAUQgBAPgPAIQgPAHgSAAQgDAAgEAAQABACABACQACAFADAGQABgBABgBQALgIANgFQAEgCAEgCQAMgFAMgFQACgBABAAQAKgDAKgEQAEgRgBgQAlJgIQAHgCAFgEAkyAPQgFgLgBgEQgDgGgCgIAj7CKQgGAEgHACQgGACgFACQgCAAgBAAQgOAGgSABQgYADgFgSQgCgFAAgGQAAgLAFgMQAGgPgBgPQAAgCAAgB");
	this.shape.setTransform(56.1,63.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AkrCNQgQAYgdgPQgtAxgPhHQgKAMgTgaQgegrAIg5QACgMgNgQQg2hEBAguQAQACABAFQgIhdBSgYQAogMAVAZQAOg8AngSQAYgLAiAFQALACAIAEQAGAEAEAGQACgFADgFQAmhJBMgUQAZgGAUAQQALAJAJAAQAOAAAMgKQBPhGA2BQQBjgjA7BQQAHAKgEAHQA7gJAMAmQAMAigRAiQgHANAhABQBGAAgNAyQgIAhgYAXQA6AWg4AyQgGAGgIAAQA5AWg7AqQgSANgPAHQAXA8hLAIQgZADgOgKQgCgBgBgCQgBAAAAgBQAAACAAABAkpBwIAAAAQATADACguQA1AZAEhOQBEArAthJQAFgIALAJQA6ArAvgQQAOgFANgJQgCAlAqgLQgPAZATALQAIghAvAKQAZAFgBAeQAAAXgMAOQABAFAEADQAvAnAKgeQgBgKADgMAkFEeQACgDgBgEQAAgBAAgCQgDgrgTghQgQgcgBgfAkpBwQgCANAAALQAAADAAACAk9BlQAMAKAIABAEmF9QgDgbgRgNQgBgBgCgCQgBAAAAAAQgCgBgBgBQgWAfggAbQgqAkhAgNQgtgKgbgSQAOgLAHgLQAWgigkgUQgrgXgnAeQgcAXgIAeQgOA6gzgeQghgTgVgYAE7CDQgFAagwgCQgrgCgEgZABuCDQAdgEAOgQABVBWQgCgOADgK");
	this.shape_1.setTransform(49.2,42.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BE9670").s().p("AA0DYQgugJgagTQAOgKAHgMQAWgigjgTQgtgYgnAfQgcAWgHAeQgOA7gzgeQghgUgVgYIANgFIgNAFIgLAEIgDAAQgOAGgSACQgYACgFgRQgCgGAAgGQAAgLAFgMQAGgPgBgPIAAgDQACgEAAgDIgBgDQgDgsgTggQgQgcgBgfIAAgEQAAgMACgMIAAAAQATACADguQA1AZADhNQBFAqAthKQAEgHAMAIQA6AsAvgQQAOgFAOgKQgDAmAqgKQgQAYATALQAIggAwAKQAYAFAAAdQgBAXgMAOQABAFAFAEQAuAmAKgeQAEAZAsACQAvACAFgaQAEAMAGAKIABACQAaADA0ALIAAACQAPAsgNA0QgWBUhZAeQgEgcgQgNIgEgCIgBgBIgDgCQgWAfggAcQgfAagqAAQgPAAgRgEgAkvgBIAFAOIAGAPIACAEIAFALIACgCQALgIANgFIAIgEIAYgKIADgBIAUgIQAEgQgBgQQgBgVgLgTQALATABAVQgLgKgSACIgMABIgDABIgTAFIgFABIgDACQgKAEgJAJIAAAAQgFAGgHAFIAAgBQgEgMAAgEIAAgBIAAgFIAAgHIAAgBQAAgJAGgQQAGgQAOgKIABgCQAJgGAJAAIABAAIABAAIAIABIACABIABAAQAGADACAEQgCgEgGgDIgBAAIgCgBIgIgBIgBAAIgBAAQgJAAgJAGIgBACQgOAKgGAQQgGAQAAAJIAAABIAAAHIAAAFIAAABQAAAEAEAMIAAABQgFADgHADQAHgDAFgDIAAAAgAFCgLQgjgKgRgYQARAYAjAKgAA2hFQAdgEAOgQQgOAQgdAEgAj2iVIgQAIQgIAEgGAGQgIAGgDAJQgDAGgDAGIAPgLQAIgGAJgEQAIgEAJgBQAKgCAJADQAJAEAIAFIAPAKIADACIAAgEIgCgDIgIgQQgEgJgGgGQgHgHgKAAQgKAAgJAEgAAdhxIAAgLQAAgHABgHQgBAHAAAHIAAALg");
	this.shape_2.setTransform(54.7,62.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AjzE2IgEgPQAHgFAEgGIABgBQAJgIAJgFIAEgBIAEgCIAUgEQALAKgCAVQgCAQgPAHQgPAIgSgBIgGABIgHgPgAmUDgQgKAMgTgaQgegrAIg5QACgMgNgRQg2hEBAgtQAQACABAFQgIhdBSgYQAogMAVAZQAOg8AngSQAYgLAiAFQALACAIAEQAGAEAEAGIAFgKQAmhJBMgUQAZgGAUAQQALAJAJAAQAOAAAMgKQBPhGA2BQQBjgjA7BQQAHAKgEAHQA7gJAMAmQAMAigRAiQgHANAhABQBGAAgNAyQgIAhgYAXQA6AVg4AyQgGAGgIAAQA5AXg7AqQgSANgPAHQAXA8hLAIQgZADgOgKIgDgDIgBgBIAAADIAAAHQgFAagwgCQgrgCgEgZIAAgFQAAgIACgJQgCAJAAAIIAAAFQgKAdgvgmQgEgDgBgFQAMgOAAgXQABgegZgFQgvgKgIAhQgTgMAPgYQgqALACgmQgNAKgOAFQgvAQg6gsQgLgJgFAIQgtBKhEgrQgEBOg1gZQgCAugTgDIAAAAQgIgBgMgKQAMAKAIABQgCAMAAAMIAAAFQgQAYgdgPQgSAUgNAAQgUAAgJgqgAkpDQIAAAAgAjnCzQADgIAHgGQAHgGAIgFIAQgIQAJgEAJAAQAKABAHAGQAGAHAEAIIAJARIABACIABAFIgEgDIgPgKQgHgFgKgDQgIgDgKABQgJACgJAEQgIAEgIAFIgQAMQAEgGADgHg");
	this.shape_3.setTransform(49.2,32.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.animbuffyhead, new cjs.Rectangle(-1,-1,100.3,86.1), null);


(lib.animbuffyfLeg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AAIgEQgCADgCACQgCACgCACQAAAAgBAAQgEAAgCgC");
	this.shape.setTransform(53.3,31.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AjjBTQAegTAagdQAegiAkgeQAlggAfghQAhgiAmgaQAngcAugSQAsgSAngQQAsgSApgXQAsgYAagmQAbgnAdggQAfgiAzARQAuAPAUAvQATAqgBAvQgCAkAHAeQAGAbAPAeQAWApABAxQAAAigGAfQgCgFgDgFAGSh6QgDACgCABQgnAagkAdQgjAeghAgQghAfggAfQggAfghAfQgiAfghAgQghAggfAhQgfAigjAeQgkAfgpAcQgoAcgtAOQgqAOgvACQgZACgXgFQgYgFgVgNQgogYgiggQgkgigbgpQgXgkgKgrQgLgsgLgtQgIgegGgeQAAgBAAAAQgCABgCAAQACgBACgCQAAABAAABQABAAABgBQgBABgBABAJuAEQAKAcgGAkQgGAmgoACQAHAbgSATQgPAQgQAKQgrAZgXgqQgBAVgLARQgaAqg1gOQgygOALg7QAHgoAogEQAmgWAJgtQAJgtgDgzQgEgvgkgYQARgLAQgIAjUhyQACgBACAAAjUhyQAAABAAACQAAADAAADQABACABADQAJAfABAjQABAxgSAqQgGANgEANQgKAegCAgQgEAmALAjAjXhyQABACAAABQABADABADAjXhyQgCABgDAAQgeAHgbAIQgrANgtAQQgDACgEABQgmANgkAQQgsATgtAQQguAOglAgQgDACgCACAjUhyQgCAAgBAA");
	this.shape_1.setTransform(74.5,43.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().p("AjWByQgEgYgDghIgCgSIADgRIAGglIAEgUQAGgSAIgSQAIgSAKgQIATgdQAJgOAMgPQALgNAOgNQANgNATgHQARgHASgDQATgCASAAQATAAASABQATACATAGQASAHARAJQARAIAOAOQANANALAPQALAPAKAQIAUAeQALARAFATIAIAhQAEATgCAQQgBAQABAOIgEAGIgEABIgDAAIgFABQgeAHgbAIQgrANgtAQIgHADQgmANgjAQQgsATgtAQQguAPglAgIgFAEIgEADQgCgYgNhUg");
	this.shape_2.setTransform(31.7,26.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BE9670").s().p("Al2GsQgYgFgVgNQgogYgiggQgkgigbgpQgXgkgKgrIgWhZQgIgegGgeIACgCIgCABIAAgCIAFgEQAlggAugOQAtgQAsgTQAkgQAmgNIAHgDQAtgQArgNQAbgIAegHIAFgBIABADIACAGIACAFQAJAfABAjQABAxgSAqIgKAaQAfgTAZgdQAegiAkgeQAlggAfghQAhgiAmgaQAngcAugSIBTgiQAsgSApgXQAsgYAagmQAbgnAdggQAfgiAzARQAuAPAUAvQATAqgBAvQgCAkAHAeQAGAbAPAeQAWApABAxQAAAigGAfIgFgKIAFAKQAKAcgGAkQgGAmgoACQAHAbgSATQgPAQgQAKQgrAZgXgqQgBAVgLARQgaAqg1gOQgygOALg7QAHgoAogEQAmgWAJgtQAJgtgDgzQgEgvgkgYQARgLAQgIQgQAIgRALIgFADQgnAagkAdQgjAeghAgIhBA+QggAfghAfIhDA/IhABBQgfAigjAeQgkAfgpAcQgoAcgtAOQgqAOgvACIgNABQgSAAgRgEgAjqDaQgIgbAAgcIABgSQACggAKgeQgKAegCAgIgBASQAAAcAIAbgAjYhvIgBAAIAAAAIgEgBIgBgBIABABIAEABIAAAAIABAAg");
	this.shape_3.setTransform(74.7,43.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.animbuffyfLeg, new cjs.Rectangle(9.4,-1,129,88.4), null);


(lib.animbuffybLeg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AHmnjQkqhGg1AGQg0AGgbgEQgcgDgQAFQANAcAQAfQAgA9ANBBQAAADABACQAGAjgFAjQgEAWgGAUQgBAGgCAEQgMAAgMgCQgQgDgOgGQgogSgsgWQgtgVgagmQAHAsARAmQATAoASArQAUAsAPAuQAQAvgHAvQgIAxARAsQARAuAXAnQAZAnAYApQAXApAYAzQAQAigCAUQAAAEAAAFQACA0gOAqQgQAxg0AEQgxADgvgJQgugJglgdQgngdgZgqQgNgXgRgPQgjghg2AFQgvADgugKQgvgLgWgmQgcgxAqgZQgYgMAEgcQAJg3AggOQgVgHAAgZQAAgxAigdQAggbAWAkQAZAmgBAzQAAAvAiAcQAkAeAvALQALACAJgHQAcgUgbgqQgSgagWgdQgGgJgGgJQgRgagNgVQgYgngdgjQgfgmgYgqQgZgpgPgvQgEgKgIgGQgJgGgBgHQgGgvABgwQAAgaAFgaQADgQAEgQQACgGACgHQAQgvAggmQAegiArgVQAqgUAvgHQAEgBAFAAQAsgFAtAIQAtAJAuAGQAhAEAfAB");
	this.shape.setTransform(48.6,57.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BE9670").s().p("ACDIyQgugJglgdQgngdgYgqQgNgXgRgPQgjghg2AFQgvADgugKQgvgLgWgmQgcgxAqgZQgYgMAEgcQAJg3AggOQgVgHAAgZQAAgxAigdQAggbAWAkQAZAmgBAzQAAAvAiAcQAkAeAvALQALACAJgHQAcgUgbgqQgSgagWgdIgMgSIgegvQgYgngdgjQgfgmgYgqQgZgpgPgvQgEgKgIgGQgJgGgBgHQgGgvABgwQAAgaAFgaQADgQAEgQIAEgNQAQgvAggmQAegiArgVQAqgUAvgHIAJgBQAsgFAsAIQAtAJAuAGQAhAEAgABQAMAcARAfQAgA9ANBBIABAFQAGAjgFAjQgEAWgGAUIgDAKQgMAAgMgCQgQgDgOgGIhVgoQgtgVgagmQAHAsARAmIAlBTQAUAsAPAuQAQAvgHAvQgIAxARAsQARAuAYAnQAZAnAYApQAXApAYAzQAQAigCAUIAAAJQACA0gOAqQgQAxg0AEIgYABQglAAgkgHg");
	this.shape_1.setTransform(30.8,57.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().p("Ah1DFIgKAAIgIAAQg0ACgzgGQgfgDgZgwQALACAMAAIAEgKQAFgUAEgWQAGgjgHgjIgBgFQgNhAggg9QgQgfgNgdQARgEAbADQAbADA1gGQA0gGEqBHQBDAXAEAnQAFAnALAiQALAigdAmQgcAngqAOQgsAQgmALQgpANgwAEQgYABgYAAIglgBgAE8hHIABgBIASAGIgTgFgAhyjFIAAAAIAEABIgEgBg");
	this.shape_2.setTransform(83.3,20.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.animbuffybLeg, new cjs.Rectangle(-1,-0.2,117.8,115.8), null);


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


(lib.buffyrunanim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frontArm
	this.instance = new lib.staticbuffyfArm();
	this.instance.parent = this;
	this.instance.setTransform(157.3,83.1,1,1,0,0,0,98.9,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:97.4,regY:16.5,scaleX:1,scaleY:1,rotation:13,x:155.8,y:84.1},3).to({regY:16.4,scaleX:1,scaleY:1,rotation:-106.4,x:174.6,y:58.8},4).to({regX:98.9,regY:15.6,scaleX:1,scaleY:1,rotation:-12,x:157.3,y:83.2},3).wait(1));

	// head
	this.instance_1 = new lib.animbuffyhead();
	this.instance_1.parent = this;
	this.instance_1.setTransform(140.8,66,1,1,0,0,0,82.7,66);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:82.6,scaleX:1,scaleY:1,rotation:-18,x:140.7},4).to({regX:82.7,scaleX:1,scaleY:1,rotation:32.4,x:162.5,y:38.8},3).to({scaleX:1,scaleY:1,rotation:3.8,x:140.8,y:66},3).wait(1));

	// frontLeg
	this.instance_2 = new lib.animbuffyfLeg();
	this.instance_2.parent = this;
	this.instance_2.setTransform(193.5,145.3,0.995,0.995,113.5,0,0,29.7,22.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:29.8,rotation:26.8,y:145.4},3).to({regX:29.7,scaleX:0.99,scaleY:0.99,rotation:127.6,x:202.9,y:125},4).to({regX:29.8,rotation:111.3,x:193.5,y:145.4},3).wait(1));

	// body
	this.instance_3 = new lib.body();
	this.instance_3.parent = this;
	this.instance_3.setTransform(188.1,110.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({rotation:8.5,x:202.7,y:90.1},4).to({rotation:0,x:188.1,y:110.9},3).wait(1));

	// backLeg
	this.instance_4 = new lib.animbuffybLeg();
	this.instance_4.parent = this;
	this.instance_4.setTransform(199,141.8,0.998,0.998,-33.1,0,0,89.4,26.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:89.5,regY:26.3,scaleX:1,scaleY:1,rotation:-9.8,y:141.7},3).to({regY:26.4,rotation:-97.6,x:208.9,y:122.1},4).to({regY:26.3,scaleX:1,scaleY:1,rotation:-63.2,x:198.9,y:141.7},3).wait(1));

	// backArm
	this.instance_5 = new lib.staticbuffybArm();
	this.instance_5.parent = this;
	this.instance_5.setTransform(156.1,66.1,0.999,0.999,24,0,0,9.1,40);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:39.9,scaleX:1,scaleY:1,rotation:-0.8,y:66},3).to({regX:9,scaleX:1,scaleY:1,rotation:167.9,x:177.6,y:41},4).to({regX:9.1,scaleX:1,scaleY:1,rotation:36.3,x:156.1,y:66.1},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(58,0,218.4,264.4);


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
		var bgm = createjs.Sound.play('bgmDir',{loop:-1});
		//var vo = createjs.Sound.play('VO');
		
		//volume vars -----------------------------------------
		var mute= false;
		bgm.volume = 0.05;
		var prev_vol = bgm.volume;
		
		//Menu function -----------------------------------------
		function openMenu(){
		
		 window.open ("../miniMenu/miniMenu.html","_self");
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
		
		 window.open ("direct_finish.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("direct_scene5.html","_self");
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


// stage content:
(lib.direct_scene6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene6:0,scene6repeat:130});

	// timeline functions:
	this.frame_2 = function() {
		playSound("Intransitive1");
	}
	this.frame_53 = function() {
		playSound("BuffyRuns");
	}
	this.frame_77 = function() {
		playSound("TheVerbRuns");
	}
	this.frame_129 = function() {
		/* _root.gonow = true;*/
	}
	this.frame_235 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(51).call(this.frame_53).wait(24).call(this.frame_77).wait(52).call(this.frame_129).wait(106).call(this.frame_235).wait(1));

	// Layer 8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgVA3QgDADgDAAQgDAAgCgBQgCgCAAgDIAAgGIAAgGIAAgXIgBgWIABgUIAAgVQAAgEABgEQADgEAEAAQAGAAAAAGIAAADIgBADIAAAQIAAATQAGgEAGgCQAGgDADAAQARAAAJAMQAJALAAAQQABARgLAMQgLALgPAAQgMAAgIgEgAgKgCIgLAGIAAAMIAAAMIAAAMIAKAEIAKABQAJAAAIgHQAGgIAAgLQAAgLgFgHQgHgHgKAAQgEAAgGAEg");
	this.shape.setTransform(355.1,120.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgcAiIAAgzIABgHIAAgHQAAgIAHAAQAGAAABAMQANgNARAAQAGAAADAEQACAEAAAKIAAAFQAAAJgGAAQgHAAAAgHIAAgFIAAgHQgMACgGAFQgHAFgEAJIABAoQAAAHgIAAQgGAAgBgHg");
	this.shape_1.setTransform(347.1,122.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgZAfQgLgJAAgQQAAgSAKgNQAKgOAQAAQAMAAAHAEQAKAFgBAKQABAIgJAGIgPAHIgbANQAEAHAGACQAHADAGABQAGgBAHgCQAIgCADgDQACgFACAAQAEAAACACQAAABAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgLAAQgPAAgLgJgAgPgTQgFAHgEANIAXgKQAMgGAGgFQgGgGgLAAQgIAAgHAHg");
	this.shape_2.setTransform(339.4,122.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgMA1QgJgWgLgpIgGgUQgEgPAAgFQAAgDACgCQACgCADAAQAGAAACAGIACANIAHAZQAHAaAHATIAAgBIATg0IAGgSQAEgLAFgFQADgDADAAQADAAACACQACACAAADQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgFAHgCAHIgGAQIgUA0IgIATQgBAEgEAAQgGAAgCgGg");
	this.shape_3.setTransform(330.7,120.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0000FF").s().p("AgEA0QgCgCAAgDIAAgIIAAgJIgBgqIgQgBQgHgBAAgGQAAgDACgCQACgCADAAIAPABIAAgKIAAgJQAAgDACgCQACgCADAAQAGgBABALIAAAHIAAAEIAAAFIAKgBIAKABQAFABAAAFQAAADgCACQgCACgEAAIgDAAIgEAAIgKABIACAqIAAAEIAAAEQAAAQgIAAQgCAAgCgCg");
	this.shape_4.setTransform(245.3,120.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0000FF").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_5.setTransform(238,122);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0000FF").s().p("AgYAfQgLgJAAgQQAAgSAJgNQAJgOARAAQALAAAJAEQAJAFAAAKQAAAIgJAGIgPAHIgbANQAEAHAGACQAGADAIABQAFgBAGgCQAJgCACgDQADgFACAAQADAAADACQAAABAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgKAAQgQAAgKgJgAgPgTQgFAHgEANIAXgKQANgGAFgFQgGgGgLAAQgJAAgGAHg");
	this.shape_6.setTransform(230.2,122.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0000FF").s().p("AgXA0IgBgDQAAgDADgCQACgCADAAQAEAAAFAJIAEAHQADAEADAAQADAAACgEIACgIIgCgsIgDgnQAAgEADgDQACgCADAAIAFABQAAAAABABQAAAAABABQAAABAAAAQAAABAAAAIADApIACAtQAAAKgGAIQgHAKgJAAQgPgBgLgYgAAFg9QgDgCAAgEQAAgEADgCQACgCAEgBQADABADACQADACAAAEQAAAEgDACQgDACgDABQgEgBgCgCg");
	this.shape_7.setTransform(222.1,122.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0000FF").s().p("AgVA3QgDADgDAAQgDAAgCgBQgCgCAAgDIAAgGIAAgGIAAgXIgBgWIABgUIAAgVQAAgEABgEQADgEAEAAQAGAAAAAGIAAADIgBADIAAAQIAAATQAGgEAGgCQAGgDADAAQARAAAJAMQAJALAAAQQABARgLAMQgLALgPAAQgMAAgIgEgAgKgCIgLAGIAAAMIAAAMIAAAMIAKAEIAKABQAJAAAIgHQAGgIAAgLQAAgLgFgHQgHgHgKAAQgEAAgGAEg");
	this.shape_8.setTransform(215.6,120.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0000FF").s().p("AAQAjQgJAFgLAAQgJgBgHgEQgHgFgBgIQgDgUAAgOQAAgKACgNQABgGAGAAQAEAAACACQACACAAADIgBALIgBALIAAAUIADAOIAFACIAEABQAJAAALgDIAAgPIAAgOQAAgPABgMQABgHAGABQADAAADACQACACAAACIgCAcIAAAPIAAAQIABAFIAAAFQAAADgCACQgCACgDAAQgGAAgCgHg");
	this.shape_9.setTransform(207.1,122.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0000FF").s().p("AgdAzQgNgHAAgKQgBgEADgBQACgCADAAQAEAAACAEQAEAFADACQAGAEAMAAQAKAAAKgFQANgGAAgLQAAgJgLgGQgJgEgMgBQgLAAgJgEQgKgGAAgLQAAgNAPgLQAOgKAOAAQAHAAAJADQAMADAAAFQAAAGgHAAIgKgBIgLgCQgLAAgIAGQgIAFAAAIQAAAHALACIAPACQAQABAKAJQAJAIAAAMQAAASgRAKQgOAJgRAAQgNAAgMgFg");
	this.shape_10.setTransform(198.1,120.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AggBBQgSgGAAgMQAAgEADgEQAEgEAFABQAEgBAGAGQACADAKACIANABQAJAAAIgCQALgEAAgIQAAgPgXgGIgLgCQgPgEgHgEQgJgGAAgNQgBgZAXgKQAIgEAOgEIAWgHQAFgDAFABQAGAAADADQADADAAAFIACAKIABAKQAAAGgDADQgEADgEABQgHgBgCgEQgCgDgCgJIgbAIQgRAHgBALIAHACQAaAEANAJQAUAMAAAWQgBAUgQAKQgOAHgUABQgPgBgOgFg");
	this.shape_11.setTransform(362.1,158.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAdA5IgEgaIgBgZIAAgKIAAgMQAAgZgJAAQgNAAgLAQQgLAOgGAVIgBALIgBALIABALIABALQAAAFgDADQgEADgFAAQgFAAgDgDQgDgDAAgFIgBgLIgBgLIACggIACghIgBgMIAAgLQAAgFADgDQAEgDAEAAQALAAABAPIABAOQATgbAUAAQATAAAHARQAFALABAWIAAALIAAAKQAAAKACAQQADAPAAAJQAAAGgEADQgDADgFAAQgKAAgBgLg");
	this.shape_12.setTransform(350.5,158.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAaA4QgPAIgSAAQgPAAgKgHQgLgIgCgOQgFgfAAgXQAAgQAEgVQABgKAKAAQAFAAADADQAEADAAAFIgCASIgCASIABAgQACAOACAIIAIAEIAHABQAPAAARgFIAAgYIAAgWQAAgZACgTQACgKAKAAQAFAAADADQAEADgBAFIgCAsIAAAZIAAAZIABAIIAAAIQAAAFgDADQgEADgEAAQgKAAgCgLg");
	this.shape_13.setTransform(337.8,158.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgsA2IAAhRIAAgMIAAgMQAAgMAKAAQAMAAAAAUQAWgWAbAAQAJAAAFAHQAEAIABAOIAAAIQgCAPgKAAQgLAAAAgMIAAgIIAAgKQgTACgKAJQgKAHgHAQIAAA/QAAAMgLAAQgLAAABgMg");
	this.shape_14.setTransform(326.1,158.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgfBbQgDgDAAgEQAAgMAZg4IgqhQIgFgJQgDgFAAgEQAAgEAEgEQADgEAFABQAFAAADADQAUAcAWAzIARgoQAKgVAIgQQAEgGAGAAQAFAAAEADQADAEAAAEIgBAHIgpBWQgPAggHAVIgIAYQgDAIgHAAQgFAAgEgEg");
	this.shape_15.setTransform(236.8,161.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgTBkQgDgDAAgFIAAgCQADgPAAgSIgBggIAAghIgSABQgMAAAAgMQAAgLAVgBIALAAIACgSQADgaAKgMQALgPAaAAQARAAAAALQAAALgQAAQgcAAgDAoIgBAHIAagBQATAAAAALQAAAJgKACIgJAAQgFAAgWACIgBAZIABAWIAAAWQAAAWgCANQgBAJgJAAQgFAAgEgDg");
	this.shape_16.setTransform(224.6,156.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgTBkQgDgDAAgFIAAgCQADgPAAgSIgBggIAAghIgSABQgMAAAAgMQAAgLAVgBIALAAIACgSQADgaAKgMQALgPAaAAQARAAAAALQAAALgQAAQgcAAgDAoIgBAHIAagBQATAAAAALQAAAJgKACIgJAAQgFAAgWACIgBAZIABAWIAAAWQAAAWgCANQgBAJgJAAQgFAAgEgDg");
	this.shape_17.setTransform(212.4,156.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAaA4QgPAIgSAAQgPAAgKgHQgLgIgCgOQgFgfAAgXQAAgQAEgVQABgKAKAAQAFAAADADQAEADAAAFIgCASIgCASIABAgQACAOACAIIAIAEIAHABQAPAAARgFIAAgYIAAgWQAAgZACgTQACgKAKAAQAFAAADADQAEADgBAFIgCAsIAAAZIAAAZIABAIIAAAIQAAAFgDADQgEADgEAAQgKAAgCgLg");
	this.shape_18.setTransform(200.3,158.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("Ag2BaQgFgFABgFIAAgiIACgvQACghAAgPIABggQABgGADgCQAQgFAVAAQATAAATAOQAWAQAAAYQAAAegYARQASAHAJAJQAJAJAAALQAAAOgQAOQgKAJgMAFQgaAKgpAAQgEAAgFgFgAgkAvIAAAYQAggBASgIQAIgDAIgHQAGgGAAgDQAAgFgOgHQgMgFgKgDIgMgCIgFAAIgEAAIgOgBIgBAbgAgehFIAAAUIgDAuIARABQASgBALgKQAMgKAAgRQAAgLgMgJQgNgKgMAAIgSABg");
	this.shape_19.setTransform(187,155.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(3,1,1).p("AglArIAADmAglkQIAAE7A4jArIX+AAAYlArI5KAA");
	this.shape_20.setTransform(280.2,169.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},77).wait(159));

	// Layer 10 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgluATUMAAAgmnMBLdAAAMAAAAmng");
	mask.setTransform(275.5,218.7);

	// Layer 9
	this.instance = new lib.buffyrunanim();
	this.instance.parent = this;
	this.instance.setTransform(-4,177.3,0.256,0.256,0,0,180,159.1,115);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:159.2,scaleX:0.49,scaleY:0.49,x:584.1,y:262.4},46).wait(4).to({scaleX:0.46,skewY:0,x:584.2},0).to({regX:159.1,regY:114.9,scaleX:0.24,scaleY:0.26,x:-11,y:145.3},42).wait(21).to({regY:115,scaleX:0.26,scaleY:0.26,skewY:180,x:-4,y:177.3},0).to({regX:159.2,scaleX:0.51,scaleY:0.51,x:596.9,y:265.5},49).wait(24).to({scaleX:0.46,scaleY:0.49,skewY:0,x:584.2,y:262.4},0).to({regX:159.1,regY:114.9,scaleX:0.24,scaleY:0.26,x:-11,y:145.3},42).wait(8));

	// Mick
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgJAKQgEgEgBgGQABgFAEgFQADgDAGAAQAGAAAEADQAFAFAAAFQAAAGgFAEQgEAEgGAAQgGAAgDgEg");
	this.shape_21.setTransform(337.1,370.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AggBBQgSgGAAgMQAAgFAEgDQADgEAFABQAEgBAFAGQADADAKACIANABQAJAAAIgCQALgEgBgHQABgQgXgGIgLgCQgPgEgHgFQgJgFAAgNQAAgZAWgKQAIgEAOgEIAWgHQAFgCAFgBQAGABADADQADADAAAFIACAKIABALQAAAFgDADQgEADgEABQgHgBgCgEQgCgDgCgKIgbAJQgRAHgBALIAHACQAaAEANAJQAUALAAAYQgBATgQAKQgOAHgUABQgPgBgOgFg");
	this.shape_22.setTransform(327.9,364.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAdA5IgEgaIgBgZIAAgKIAAgMQAAgZgJAAQgNAAgLAQQgLAOgGAVIgBALIgBALIABALIABALQAAAFgDADQgEADgFAAQgFAAgDgDQgDgDAAgFIgBgLIgBgLIACggIACghIgBgMIAAgLQAAgFADgDQAEgDAEAAQALAAABAPIABAOQATgbAUAAQATAAAHARQAFALABAWIAAALIAAAKQAAAKACAQQADAPAAAJQAAAGgEADQgDADgFAAQgKAAgBgLg");
	this.shape_23.setTransform(316.3,364.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAaA4QgPAIgSAAQgPAAgKgHQgLgIgCgOQgFgfAAgXQAAgQAEgVQABgKAKAAQAFAAADADQAEADAAAFIgCASIgCASIABAgQACAOACAIIAIAEIAHABQAPAAARgFIAAgYIAAgWQAAgZACgTQACgKAKAAQAFAAADADQAEADgBAFIgCAsIAAAZIAAAZIABAIIAAAIQAAAFgDADQgEADgEAAQgKAAgCgLg");
	this.shape_24.setTransform(303.6,364.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgsA2IAAhRIAAgMIAAgMQAAgMAKAAQAMAAAAAUQAWgWAbAAQAJAAAFAHQAEAIABAOIAAAIQgCAPgKAAQgLAAAAgMIAAgIIAAgKQgSACgLAJQgKAHgHAQIAAA/QAAAMgLAAQgLAAABgMg");
	this.shape_25.setTransform(291.9,364.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgfBcQgDgEAAgEQAAgMAZg4IgqhQIgFgJQgDgFAAgEQAAgEAEgEQADgEAFABQAFAAADADQAUAcAWAzIARgoQAKgVAIgPQAEgHAGAAQAFAAAEADQADAEAAAEIgBAHIgpBWQgPAggHAVIgIAXQgDAJgHAAQgFAAgEgDg");
	this.shape_26.setTransform(272.1,368);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgTBkQgDgDAAgFIAAgCQADgPAAgSIgBggIAAghIgSABQgMAAAAgMQAAgLAVgBIALAAIACgSQADgaAKgMQALgPAaAAQARAAAAALQAAALgQAAQgcAAgDAoIgBAHIAagBQATAAAAALQAAAJgKACIgJAAQgFAAgWACIgBAZIABAWIAAAWQAAAWgCANQgBAJgJAAQgFAAgEgDg");
	this.shape_27.setTransform(259.9,362.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgTBkQgDgDAAgFIAAgCQADgPAAgSIgBggIAAghIgSABQgMAAAAgMQAAgLAVgBIALAAIACgSQADgaAKgMQALgPAaAAQARAAAAALQAAALgQAAQgcAAgDAoIgBAHIAagBQATAAAAALQAAAJgKACIgJAAQgFAAgWACIgBAZIABAWIAAAWQAAAWgCANQgBAJgJAAQgFAAgEgDg");
	this.shape_28.setTransform(247.7,362.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAaA4QgPAIgSAAQgPAAgKgHQgLgIgCgOQgFgfAAgXQAAgQAEgVQABgKAKAAQAFAAADADQAEADAAAFIgCASIgCASIABAgQACAOACAIIAIAEIAHABQAPAAARgFIAAgYIAAgWQAAgZACgTQACgKAKAAQAFAAADADQAEADgBAFIgCAsIAAAZIAAAZIABAIIAAAIQAAAFgDADQgEADgEAAQgKAAgCgLg");
	this.shape_29.setTransform(235.6,364.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("Ag2BaQgEgFAAgFIAAgiIABgvQADghAAgPIACggQAAgGADgCQAQgFAUAAQAUAAATAOQAWAQAAAYQAAAegYARQASAHAJAJQAIAJAAALQAAAOgPAOQgLAJgLAFQgaAKgpAAQgFAAgEgFgAgkAvIAAAYQAggBARgIQAJgDAIgHQAGgGABgDQAAgFgPgHQgMgFgKgDIgMgCIgEAAIgFAAIgNgBIgCAbgAgfhFIAAAUIgCAuIASABQAQgBAMgKQAMgKAAgRQAAgLgMgJQgNgKgNAAIgSABg");
	this.shape_30.setTransform(222.3,361.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},53).wait(183));

	// Layer 5
	this.instance_1 = new lib.Intransitive1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(278.2,80.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(33).to({scaleX:0.8,scaleY:0.8,x:270.2,y:39.9},17).wait(186));

	// Layer 2
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.instance_2 = new lib.Background("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(275.4,199.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.UI}]}).wait(236));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,201.6,534,398.7);
// library properties:
lib.properties = {
	id: 'B874C5EC224BEE46BCD42CAFDE298F91',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/BuffyRuns.mp3", id:"BuffyRuns"},
		{src:"sounds/bgmDir.mp3", id:"bgmDir"},
		{src:"sounds/High_Screaming_Gtr.mp3", id:"High_Screaming_Gtr"},
		{src:"sounds/Intransitive1.mp3", id:"Intransitive1"},
		{src:"sounds/right_answer.mp3", id:"right_answer"},
		{src:"sounds/TheVerbRuns.mp3", id:"TheVerbRuns"},
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
an.compositions['B874C5EC224BEE46BCD42CAFDE298F91'] = {
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