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


(lib.StaceHead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("Ag6AoQABgJAEgHQALgTAggKQANgFALgGIABAAQAbgNAGgNQACAGgFAZIgCAJQgCAeASAJIgPgBIgRgBQgwgBggAIIgFABIAAgDg");
	this.shape.setTransform(8.3,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAhAGQgCgFgDgCQgEgFgJABQAIgQAIgHIABgBQAFgDAEAAQAFAAADAFQADAFAAAIIAAAJQgBARgIALQgLANgYABQAVgRAEgOgAgrgQQgFAAgDABIAAAAQABgLAHgFQAGgEAJgBIAAAFQABAQgDALQgBgMgMAAg");
	this.shape_1.setTransform(2.3,-7.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFDBC8").s().p("AgqCDQgFAAgFgCQgJgDgMgBIABgCQg0gMgKgqQgGgWAFgdQADgPAFgPQALAAANAMQgPgTgCgTIgBgHIAIgDQAPgEAcAEQAgADALgLQAGAdARAHIAHABQASgEANgNQAOgMAJgUQAEgIACgHQACgLgDgIQgFgPgXgIQgJAAgJACQgGADgGAEIgIAHIgFAEIgHAFIABgFQAAgOgLgIIgVgQQASgDAZgQIAHgFIAEAAQBaAEAeA/IABACIAEAKQAUA9gtBRQgYAVgXAOQgNAIgMAFQgVAKgSADIgMACQAAALgNAXQgFAKgBAHIgBAAgAhNA1IgNACQgdAGgIAGQAZAPAngLIALgEQAwgRgXgUQgNASglAFg");
	this.shape_2.setTransform(3.5,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF66").s().p("ADFC9IgNgaIgPgBIgLgOIAGghIABgBIALg4IAQhOQAHgmgIgfIgCgJQgMgigggYQgugFgEgaQCHgiBBBgQABANgBAUIgBAJQgFAqgSBCIgGAXQgFARgCAQQgMBJAkAsIgOAEQgLACgKAAQgbAAgXgPgAknBcQBCgGArg0QAPgSAYgtIAXgvIAAAAQAKgTALgRQAjg1AsgXQAdgOAhgBIAFAAQARAAASADQgIAXgVABIgLgBIgLgDQgdAJgdAgIgPASIgIAMQglAwgRALQAEAFACAGQAEAKABANQAAAOgEARQgEAPgHATIgDAFQABAIAEAIQAGANANAOIAIALQAJAPgDANQgtgEgegBQg3gCgUATQg8gdgIgbg");
	this.shape_3.setTransform(-0.9,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ACXDVIgHgBIABAAIgDAAQgHAAgFAFIgPgaQAhAWAmgJIAOgEQgkgsAMhJQACgQAFgRIAGgXQAShCAFgqIABgJQABgUgBgNQhBhgiHAiQAFAaAtAFQAgAYAMAiIACAJQAIAfgHAmIgQBOIgLA4IgBABIgGAhIALAOIgdABIgEgEIAPABQgSgJADgfIABgJQAFgYgCgHQgGAOgaANIgCAAQgKAFgOAGQggAKgLAUQgDAHgBAJIgbAEQACgHAFgKQANgXAAgLIALgCQAUgEAVgJQALgGANgHQAXgOAYgVQAthRgUg9IgEgKIgBgCQgfg/hYgEIgFAAIgIAFQgYAQgSADIAVAQQALAIAAAOIgBAFIAHgFIAEgEIAKgHQAGgEAGgDQAIgCAKAAQAWAIAFAPQADAIgDALQgBAHgEAIQgKAUgMAMQgNANgTAEIgIgBQgQgHgHgdQgKALgggDQgcgFgPAFIgIADIAAAHQADATAPASQgNgLgMAAQgFAPgCAPQgFAdAFAWQALAqA0AMIgBACQgTgCgZACIgBgEQgDgHgGgGIgIgLQgNgOgGgNIgCgVQAHgTAEgPQAEgRAAgOQAAgNgFgKQgCgGgEgFQARgLAlgwIAIgMIAPgSQAdggAegJIALADIALABQAVgBAIgXQgSgDgRAAIgFAAQghABgeAOQgsAXgjA1QgLARgKATIAAAAIgXAvIgBgXQgBgJABgIQALgVALgSIADgFQAthFA2gYQAUgJAUgDQAMgBALAAIACAAQAfABAeANQBtAJAVAGQA2ARAbA3QABAKgCAQIgBALQgFAngPBBIgJAjIgDAOQgSBVAjA1IAEAGIgRAAQgXAAgbgFgAgVhLQADADABAFQgDAOgVARQAYgBALgNQAHgLABgSIAAgJQgBgIgBgFQgDgFgGAAQgEAAgEADIgCABQgHAHgJAQIADAAQAHAAAEAEgAhRhOQAEgLgBgQIgBgFQgJABgFAEQgHAFgCALIAAAAQADgBAGAAQALAAABAMgAimBFQAJgGAdgGIANgCQAkgFANgSQAYAUgwARIgLAEQgRAEgOAAQgTAAgPgIg");
	this.shape_4.setTransform(7.3,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAhAGQgBgFgDgCQgFgFgJABQAJgQAHgHIACgBQAEgDAEAAQAGAAADAFQACAFABAIIAAAJQgBARgIALQgLANgYABQAVgRADgOgAgzgPQABgLAIgFQAFgEAJgBIABAFQACAfgQANQgOgIAEgUg");
	this.shape_5.setTransform(2.2,-7.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFDBC8").s().p("AgqCDQgFAAgFgCQgJgDgMgBIABgCQg0gMgKgqQgGgWAFgdQADgPAFgPQALAAANAMQgPgTgCgTIgBgHIAIgDQAPgEAcAEQAgADALgLQAGAdARAHIAHABQASgEANgNQAOgMAJgUQAEgIACgHQACgLgDgIQgFgPgXgIQgJAAgJACQgGADgGAEIgIAHIgFAEIgHAFIABgFQAAgOgLgIIgVgQQASgDAZgQIAHgFIAEAAQBaAEAeA/IABACIAEAKQAUA9gtBRQgYAVgXAOQgNAIgMAFQgVAKgSADIgMACQAAALgNAXQgFAKgBAHIgBAAgAh0AaQgKAfBRAAQAiAAAYgPQAUgMAAgJQAAgDgHgGQgFACgDAFQgDAIgEADQgPANhGAAQgCAAgigUQgGAAAAADg");
	this.shape_6.setTransform(3.5,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("ACXDVIgHgBIABAAIgDAAQgHAAgFAFIgPgaQAhAWAmgJIAOgEQgkgsAMhJQACgQAFgRIAGgXQAShCAFgqIABgJQABgUgBgNQhBhgiHAiQAFAaAtAFQAgAYAMAiIACAJQAIAfgHAmIgQBOIgLA4IgBABIgGAhIALAOIgdABIgEgEIAPABQgSgJADgfIABgJQAFgYgCgHQgGAOgaANIgCAAQgKAFgOAGQggAKgLAUQgDAHgBAJIgbAEQACgHAFgKQANgXAAgLIALgCQAUgEAVgJQALgGANgHQAXgOAYgVQAthRgUg9IgEgKIgBgCQgfg/hYgEIgFAAIgIAFQgYAQgSADIAVAQQALAIAAAOIgBAFIAHgFIAEgEIAKgHQAGgEAGgDQAIgCAKAAQAWAIAFAPQADAIgDALQgBAHgEAIQgKAUgMAMQgNANgTAEIgIgBQgQgHgHgdQgKALgggDQgcgFgPAFIgIADIAAAHQADATAPASQgNgLgMAAQgFAPgCAPQgFAdAFAWQALAqA0AMIgBACQgTgCgZACIgBgEQgDgHgGgGIgIgLQgNgOgGgNIgCgVQAHgTAEgPQAEgRAAgOQAAgNgFgKQgCgGgEgFQARgLAlgwIAIgMIAPgSQAdggAegJIALADIALABQAVgBAIgXQgSgDgRAAIgFAAQghABgeAOQgsAXgjA1QgLARgKATIAAAAIgXAvIgBgXQgBgJABgIQALgVALgSIADgFQAthFA2gYQAUgJAUgDQAMgBALAAIACAAQAfABAeANQBtAJAVAGQA2ARAbA3QABAKgCAQIgBALQgFAngPBBIgJAjIgDAOQgSBVAjA1IAEAGIgRAAQgXAAgbgFgAgVhLQADADABAFQgDAOgVARQAYgBALgNQAHgLABgSIAAgJQgBgIgBgFQgDgFgGAAQgEAAgEADIgCABQgHAHgJAQIADAAQAHAAAEAEgAhdhpQgHAFgCALQgEAVAOAIQAQgOgCgfIgBgFQgJABgFAEgAibAcQAAgDAHAAQAhAUADAAQBGAAAQgNQAEgDADgIQACgFAGgCQAGAGAAADQAAAJgUAMQgZAPgiAAQhQAAAJgfg");
	this.shape_7.setTransform(7.3,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFDBC8").s().p("AgqCDQgFAAgFgCQgJgDgMgBIABgCQg0gMgKgqQgGgWAFgdQADgPAFgPQALAAANAMQgPgTgCgTIgBgHIAIgDQAMgEAVACIALgfIALAAQAIABAOAJQADAAADgFQgCgRgfgCIABgCIACgFQALgYALgLIgJgGQASgDAZgQIAHgFIAEAAQBaAEAeA/IABACIAEAKQAUA9gtBRQgYAVgXAOQgNAIgMAFQgVAKgSADIgMACQAAALgNAXQgFAKgBAHIgBAAgAh0AaQgHAWAmAGQAQADAYAAIARgBQAXgDASgLQAUgMAAgJQAAgDgHgGQgFACgDAFQgDAIgEADQgIAHgXADIgWADIggAAQgCAAgigUQgGAAAAADgAgGhTQgFABAAAGIAAAEQAEAEACAAQAyAAAKAKIADAHQABAEAGAAQAEAAAEgEIAAgEQgMgdgoAAQgXAAgEABg");
	this.shape_8.setTransform(3.5,0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("ACXDVIgHgBIABAAIgDAAQgHAAgFAFIgPgaQAhAWAmgJIAOgEQgkgsAMhJQACgQAFgRIAGgXQAShCAFgqIABgJQABgUgBgNQhBhgiHAiQAFAaAtAFQAgAYAMAiIACAJQAIAfgHAmIgQBOIgLA4IgBABIgGAhIALAOIgdABIgEgEIAPABQgSgJADgfIABgJQAFgYgCgHQgGAOgaANIgCAAQgKAFgOAGQggAKgLAUQgDAHgBAJIgbAEQACgHAFgKQANgXAAgLIALgCQAUgEAVgJQALgGANgHQAXgOAYgVQAthRgUg9IgEgKIgBgCQgfg/hYgEIgFAAIgIAFQgYAQgSADIAIAGQgKALgLAYIgDAFIAAACQAeACACARQgCAFgEAAQgOgJgHgBIgLAAIgLAfQgVgCgMAEIgIADIAAAHQADATAPASQgNgLgMAAQgFAPgCAPQgFAdAFAWQALAqA0AMIgBACQgTgCgZACIgBgEQgDgHgGgGIgIgLQgNgOgGgNIgCgVQAHgTAEgPQAEgRAAgOQAAgNgFgKQgCgGgEgFQARgLAlgwIAIgMIAPgSQAdggAegJIALADIALABQAVgBAIgXQgSgDgRAAIgFAAQghABgeAOQgsAXgjA1QgLARgKATIAAAAIgXAvIgBgXQgBgJABgIQALgVALgSIADgFQAthFA2gYQAUgJAUgDQAMgBALAAIACAAQAfABAeANQBtAJAVAGQA2ARAbA3QABAKgCAQIgBALQgFAngPBBIgJAjIgDAOQgSBVAjA1IAEAGIgRAAQgXAAgbgFgAh7A4QgmgGAGgWQAAgDAHAAQAhAUADAAIAgAAIAWgDQAXgDAJgHQAEgDADgIQACgFAGgCQAGAGAAADQAAAJgUAMQgSALgYADIgRABQgXAAgQgDgAATgxIgDgHQgJgKgyAAQgDAAgDgEIgBgEQAAgGAFgBQAEgBAYAAQAoAAALAdIAAAEQgEAEgDAAQgGAAgCgEg");
	this.shape_9.setTransform(7.3,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFCC00").s().p("Ag6AoQABgJAEgHQALgTAggKQANgFALgGIABAAQAbgNAGgNQACAGgFAZIgCAJQgCAeASAJIgPgBIgRgBQgwgBggAIIgFABIAAgDg");
	this.shape_10.setTransform(8.3,12.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFF66").s().p("ADFC9IgNgaIgPgBIgLgOIAGghIABgBIALg4IAQhOQAHgmgIgfIgCgJQgMgigggYQgugFgEgaQCHgiBBBgQABANgBAUIgBAJQgFAqgSBCIgGAXQgFARgCAQQgMBJAkAsIgOAEQgLACgKAAQgbAAgXgPgAknBcQBCgGArg0QAPgSAYgtIAXgvIAAAAQAKgTALgRQAjg1AsgXQAdgOAhgBIAFAAQARAAASADQgIAXgVABIgLgBIgLgDQgdAJgdAgIgPASIgIAMQglAwgRALQAEAFACAGQAEAKABANQAAAOgEARQgEAPgHATIgDAFQABAIAEAIQAGANANAOIAIALQAJAPgDANQgtgEgegBQg3gCgUATQg8gdgIgbg");
	this.shape_11.setTransform(-0.9,0.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAhAHIAAgBQgBgFgDgCQgFgFgJABIACgDQAIgOAGgGIACgBQAEgDAEAAQAGAAADAFQACAFABAIIAAAIIAAABQgBAIgCAHQgCAHgEAGQgLANgYABQATgQAFgOgAg0gFIABgKIABgEIAAgCIADgFIAFgFQAFgEAJgBIABAFQAAAKgBAHQgBAIgCAGQgEAHgGAGQgKgGgBgMg");
	this.shape_12.setTransform(2.2,-7.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFDBC8").s().p("AgqCDQgFAAgFgCQgJgDgMgBIABgCQg0gMgKgqQgGgWAFgdQADgPAFgPQALAAANAMQgPgTgCgTIgBgHIAIgDIABAAIABAAIAWgCIATACQAgADALgLQAGAdARAHIAHABQASgEANgNQALgKAIgNIAEgJIACgFIAEgKQACgLgDgIQgFgPgXgIQgJAAgJACQgGADgGAEIgIAHIgFAEIgHAFIABgFQAAgOgLgIIgVgQQASgDAZgQIAHgFIAEAAQBaAEAeA/IABACIAEAKQAUA9gtBRQgYAVgXAOQgNAIgMAFQgVAKgSADIgMACQAAALgNAXQgFAKgBAHIgBAAgAh0AaQgCAEABAEQACAPAeAFIAEABIAeACIAGAAIARgBQAXgDASgLQAUgMAAgJQAAgDgHgGQgFACgDAFQgDAIgEADQgIAHgXADIgCABIgDAAIgLABIgNABIgVAAIgCAAIgCAAQgCAAgigUQgGAAAAADg");
	this.shape_13.setTransform(3.5,0.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("ACXDVIgHgBIABAAIgDAAQgHAAgFAFIgPgaQAhAWAmgJIAOgEQgkgsAMhJQACgQAFgRIAGgXQAShCAFgqIABgJQABgUgBgNQhBhgiHAiQAFAaAtAFQAgAYAMAiIACAJQAIAfgHAmIgQBOIgLA4IgBABIgGAhIALAOIgdABIgEgEIAPABQgSgJADgfIABgJQAFgYgCgHQgGAOgaANIgCAAQgKAFgOAGQggAKgLAUQgDAHgBAJIgbAEQACgHAFgKQANgXAAgLIALgCQAUgEAVgJQALgGANgHQAXgOAYgVQAthRgUg9IgEgKIgBgCQgfg/hYgEIgFAAIgIAFQgYAQgSADIAVAQQALAIAAAOIgBAFIAHgFIAEgEIAKgHQAGgEAGgDQAIgCAKAAQAWAIAFAPQADAIgDALIgDAKIgCAFIgFAJQgIANgJAKQgNANgTAEIgIgBQgQgHgHgdQgKALgggDIgTgCIgWACIgBAAIgBAAIgIADIAAAHQADATAPASQgNgLgMAAQgFAPgCAPQgFAdAFAWQALAqA0AMIgBACQgTgCgZACIgBgEQgDgHgGgGIgIgLQgNgOgGgNIgCgVQAHgTAEgPQAEgRAAgOQAAgNgFgKQgCgGgEgFQARgLAlgwIAIgMIAPgSQAdggAegJIALADIALABQAVgBAIgXQgSgDgRAAIgFAAQghABgeAOQgsAXgjA1QgLARgKATIAAAAIgXAvIgBgXQgBgJABgIQALgVALgSIADgFQAthFA2gYQAUgJAUgDQAMgBALAAIACAAQAfABAeANQBtAJAVAGQA2ARAbA3QABAKgCAQIgBALQgFAngPBBIgJAjIgDAOQgSBVAjA1IAEAGIgRAAQgXAAgbgFgAgVhLQADADABAFIAAACQgFANgTAQQAYgBALgNQAEgGACgHQABgHABgJIAAgBIAAgIQgBgIgBgFQgDgFgGAAQgEAAgEADIgCABQgGAGgIAOIgCADIADAAQAHAAAEAEgAhdhpIgFAFIgDAFIAAACIgBAEIgBAKQABANAKAGQAHgGADgIQADgGAAgIQABgHAAgKIgBgFQgJABgFAEgAhZA7IgfgCIgDgBQgfgFgCgPQAAgEABgEQAAgDAHAAQAhAUADAAIACAAIABAAIAWAAIANgBIALgBIADAAIACgBQAXgDAJgHQAEgDADgIQACgFAGgCQAGAGAAADQAAAJgUAMQgSALgYADIgRABIgFAAg");
	this.shape_14.setTransform(7.3,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AgHAIIAAgBQgDgLABgDIAPgBIACABIADAHIgEADQgFAEACACIgLgBg");
	this.shape_15.setTransform(0.3,5.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAhAGQgCgFgDgCQgEgFgJABQAIgQAIgHIABgBQAFgDAEAAQAFAAADAFQADAFAAAIIAAAJQgBARgIALQgLANgYABQAVgRAEgOgAgegEQgBgMgMAAQgFAAgDABIAAAAQABgLAHgFQAGgEAJgBIAAAFIgBAVIgBAGg");
	this.shape_16.setTransform(2.3,-7.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFDBC8").s().p("AgqCDQgFAAgFgCQgJgDgMgBIABgCQg0gMgKgqQgGgWAFgdQADgPAFgPQALAAANAMQgPgTgCgTIgBgHIAIgDQAPgEAcAEQAgADALgLQAGAdARAHIAHABQASgEANgNQAOgMAJgUQAEgIACgHQACgLgDgIQgFgPgXgIQgJAAgJACQgGADgGAEIgIAHIgFAEIgHAFIABgFQAAgOgLgIIgVgQQASgDAZgQIAHgFIAEAAQBaAEAeA/IABACIAEAKQAUA9gtBRQgYAVgXAOQgNAIgMAFQgVAKgSADIgMACQAAALgNAXQgFAKgBAHIgBAAgAhyAeIAAAOQgCALAFAFQAJALAuAAQA5AAAAglQAAgIgGgGQAAABgFAAIgBANQgFgIgQAAQgYAAAAAWIAAAJIgeAAQgHAAgFgOQgGgPgEAAQgGAAAAACgAgZAoQAHAAgFABg");
	this.shape_17.setTransform(3.5,0.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("ACXDVIgHgBIABAAIgDAAQgHAAgFAFIgPgaQAhAWAmgJIAOgEQgkgsAMhJQACgQAFgRIAGgXQAShCAFgqIABgJQABgUgBgNQhBhgiHAiQAFAaAtAFQAgAYAMAiIACAJQAIAfgHAmIgQBOIgLA4IgBABIgGAhIALAOIgdABIgEgEIAPABQgSgJADgfIABgJQAFgYgCgHQgGAOgaANIgCAAQgKAFgOAGQggAKgLAUQgDAHgBAJIgbAEQACgHAFgKQANgXAAgLIALgCQAUgEAVgJQALgGANgHQAXgOAYgVQAthRgUg9IgEgKIgBgCQgfg/hYgEIgFAAIgIAFQgYAQgSADIAVAQQALAIAAAOIgBAFIAHgFIAEgEIAKgHQAGgEAGgDQAIgCAKAAQAWAIAFAPQADAIgDALQgBAHgEAIQgKAUgMAMQgNANgTAEIgIgBQgQgHgHgdQgKALgggDQgcgFgPAFIgIADIAAAHQADATAPASQgNgLgMAAQgFAPgCAPQgFAdAFAWQALAqA0AMIgBACQgTgCgZACIgBgEQgDgHgGgGIgIgLQgNgOgGgNIgCgVQAHgTAEgPQAEgRAAgOQAAgNgFgKQgCgGgEgFQARgLAlgwIAIgMIAPgSQAdggAegJIALADIALABQAVgBAIgXQgSgDgRAAIgFAAQghABgeAOQgsAXgjA1QgLARgKATIAAAAIgXAvIgBgXQgBgJABgIQALgVALgSIADgFQAthFA2gYQAUgJAUgDQAMgBALAAIACAAQAfABAeANQBtAJAVAGQA2ARAbA3QABAKgCAQIgBALQgFAngPBBIgJAjIgDAOQgSBVAjA1IAEAGIgRAAQgXAAgbgFgAgVhLQADADABAFQgDAOgVARQAYgBALgNQAHgLABgSIAAgJQgBgIgBgFQgDgFgGAAQgEAAgEADIgCABQgHAHgJAQIADAAQAHAAAEAEgAhRhOIAAAAIACgGIABgVIgBgFQgJABgFAEQgHAFgCALIAAAAQADgBAGAAQALAAABAMgAiWA+QgFgFACgLIAAgOQAAgCAHAAQAEAAAFAPQAGAOAGAAIAfAAIgBgJQAAgWAYAAQAQAAAFAIIABgNQAGAAAAgBQAGAGAAAIQAAAlg6AAQguAAgJgLgAhQArQgBADADAMIAAACIANABQgCgCAFgFIAEgDIgEgIQAFgBgGAAg");
	this.shape_18.setTransform(7.3,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFDBC8").s().p("AgqCDQgFAAgFgCQgJgDgMgBIABgCQg0gMgKgqQgGgWAFgdQADgPAFgPQALAAANAMQgPgTgCgTIgBgHIAIgDQAPgEAcAEQAgADALgLQAGAdARAHIAHABQASgEANgNQAOgMAJgUQAEgIACgHQACgLgDgIQgFgPgXgIQgJAAgJACQgGADgGAEIgIAHIgFAEIgHAFIABgFQAAgOgLgIIgVgQQASgDAZgQIAHgFIAEAAQBaAEAeA/IABACIAEAKQAUA9gtBRQgYAVgXAOQgNAIgMAFQgVAKgSADIgMACQAAALgNAXQgFAKgBAHIgBAAgAhNA1IgNACQgdAGgIAGQAZAPAngLIALgEQAwgRgXgUQgNASglAFg");
	this.shape_19.setTransform(3.5,0.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("ACXDVIgHgBIABAAIgDAAQgHAAgFAFIgPgaQAhAWAmgJIAOgEQgkgsAMhJQACgQAFgRIAGgXQAShCAFgqIABgJQABgUgBgNQhBhgiHAiQAFAaAtAFQAgAYAMAiIACAJQAIAfgHAmIgQBOIgLA4IgBABIgGAhIALAOIgdABIgEgEIAPABQgSgJADgfIABgJQAFgYgCgHQgGAOgaANIgCAAQgKAFgOAGQggAKgLAUQgDAHgBAJIgbAEQACgHAFgKQANgXAAgLIALgCQAUgEAVgJQALgGANgHQAXgOAYgVQAthRgUg9IgEgKIgBgCQgfg/hYgEIgFAAIgIAFQgYAQgSADIAVAQQALAIAAAOIgBAFIAHgFIAEgEIAKgHQAGgEAGgDQAIgCAKAAQAWAIAFAPQADAIgDALQgBAHgEAIQgKAUgMAMQgNANgTAEIgIgBQgQgHgHgdQgKALgggDQgcgFgPAFIgIADIAAAHQADATAPASQgNgLgMAAQgFAPgCAPQgFAdAFAWQALAqA0AMIgBACQgTgCgZACIgBgEQgDgHgGgGIgIgLQgNgOgGgNIgCgVQAHgTAEgPQAEgRAAgOQAAgNgFgKQgCgGgEgFQARgLAlgwIAIgMIAPgSQAdggAegJIALADIALABQAVgBAIgXQgSgDgRAAIgFAAQghABgeAOQgsAXgjA1QgLARgKATIAAAAIgXAvIgBgXQgBgJABgIQALgVALgSIADgFQAthFA2gYQAUgJAUgDQAMgBALAAIACAAQAfABAeANQBtAJAVAGQA2ARAbA3QABAKgCAQIgBALQgFAngPBBIgJAjIgDAOQgSBVAjA1IAEAGIgRAAQgXAAgbgFgAgVhLQADADABAFQgDAOgVARQAYgBALgNQAHgLABgSIAAgJQgBgIgBgFQgDgFgGAAQgEAAgEADIgCABQgHAHgJAQIADAAQAHAAAEAEgAhdhpQgHAFgCALQgEAVAOAIQAQgOgCgfIgBgFQgJABgFAEgAimBFQAJgGAdgGIANgCQAkgFANgSQAYAUgwARIgLAEQgRAEgOAAQgTAAgPgIg");
	this.shape_20.setTransform(7.3,0);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFCC00").s().p("Ag6AoQABgJAEgHQALgTAggKQANgFALgGIABAAQAbgNAGgNQACAGgFAZIgCAJQgCAeASAJIgPgBIgRgBQgwgBggAIIgFABIAAgDg");
	this.shape_21.setTransform(8.3,12.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAhAGQgBgFgDgCQgFgFgJABQAJgQAHgHIACgBQAEgDAEAAQAGAAADAFQACAFABAIIAAAJQgBARgIALQgLANgYABQAVgRADgOgAgzgPQABgLAIgFQAFgEAJgBIABAFQACAfgQANQgOgIAEgUg");
	this.shape_22.setTransform(2.2,-7.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFDBC8").s().p("AgqCDQgFAAgFgCQgJgDgMgBIABgCQg0gMgKgqQgGgWAFgdQADgPAFgPQALAAANAMQgPgTgCgTIgBgHIAIgDQAPgEAcAEQAgADALgLQAGAdARAHIAHABQASgEANgNQAOgMAJgUQAEgIACgHQACgLgDgIQgFgPgXgIQgJAAgJACQgGADgGAEIgIAHIgFAEIgHAFIABgFQAAgOgLgIIgVgQQASgDAZgQIAHgFIAEAAQBaAEAeA/IABACIAEAKQAUA9gtBRQgYAVgXAOQgNAIgMAFQgVAKgSADIgMACQAAALgNAXQgFAKgBAHIgBAAgAhNA1IgNACQgdAGgIAGQAZAPAngLIALgEQAwgRgXgUQgNASglAFg");
	this.shape_23.setTransform(3.5,0.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFF66").s().p("ADFC9IgNgaIgPgBIgLgOIAGghIABgBIALg4IAQhOQAHgmgIgfIgCgJQgMgigggYQgugFgEgaQCHgiBBBgQABANgBAUIgBAJQgFAqgSBCIgGAXQgFARgCAQQgMBJAkAsIgOAEQgLACgKAAQgbAAgXgPgAknBcQBCgGArg0QAPgSAYgtIAXgvIAAAAQAKgTALgRQAjg1AsgXQAdgOAhgBIAFAAQARAAASADQgIAXgVABIgLgBIgLgDQgdAJgdAgIgPASIgIAMQglAwgRALQAEAFACAGQAEAKABANQAAAOgEARQgEAPgHATIgDAFQABAIAEAIQAGANANAOIAIALQAJAPgDANQgtgEgegBQg3gCgUATQg8gdgIgbg");
	this.shape_24.setTransform(-0.9,0.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("ACXDVIgHgBIABAAIgDAAQgHAAgFAFIgPgaQAhAWAmgJIAOgEQgkgsAMhJQACgQAFgRIAGgXQAShCAFgqIABgJQABgUgBgNQhBhgiHAiQAFAaAtAFQAgAYAMAiIACAJQAIAfgHAmIgQBOIgLA4IgBABIgGAhIALAOIgdABIgEgEIAPABQgSgJADgfIABgJQAFgYgCgHQgGAOgaANIgCAAQgKAFgOAGQggAKgLAUQgDAHgBAJIgbAEQACgHAFgKQANgXAAgLIALgCQAUgEAVgJQALgGANgHQAXgOAYgVQAthRgUg9IgEgKIgBgCQgfg/hYgEIgFAAIgIAFQgYAQgSADIAVAQQALAIAAAOIgBAFIAHgFIAEgEIAKgHQAGgEAGgDQAIgCAKAAQAWAIAFAPQADAIgDALQgBAHgEAIQgKAUgMAMQgNANgTAEIgIgBQgQgHgHgdQgKALgggDQgcgFgPAFIgIADIAAAHQADATAPASQgNgLgMAAQgFAPgCAPQgFAdAFAWQALAqA0AMIgBACQgTgCgZACIgBgEQgDgHgGgGIgIgLQgNgOgGgNIgCgVQAHgTAEgPQAEgRAAgOQAAgNgFgKQgCgGgEgFQARgLAlgwIAIgMIAPgSQAdggAegJIALADIALABQAVgBAIgXQgSgDgRAAIgFAAQghABgeAOQgsAXgjA1QgLARgKATIAAAAIgXAvIgBgXQgBgJABgIQALgVALgSIADgFQAthFA2gYQAUgJAUgDQAMgBALAAIACAAQAfABAeANQBtAJAVAGQA2ARAbA3QABAKgCAQIgBALQgFAngPBBIgJAjIgDAOQgSBVAjA1IAEAGIgRAAQgXAAgbgFgAgVhLQADADABAFQgDAOgVARQAYgBALgNQAHgLABgSIAAgJQgBgIgBgFQgDgFgGAAQgEAAgEADIgCABQgHAHgJAQIADAAQAHAAAEAEgAhdhpQgHAFgCALQgEAVAOAIQAQgOgCgfIgBgFQgJABgFAEgAimBFQAJgGAdgGIANgCQAkgFANgSQAYAUgwARIgLAEQgRAEgOAAQgTAAgPgIg");
	this.shape_25.setTransform(7.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_3},{t:this.shape_6},{t:this.shape_5},{t:this.shape}]},19).to({state:[{t:this.shape_9},{t:this.shape_3},{t:this.shape_8},{t:this.shape}]},25).to({state:[{t:this.shape_9},{t:this.shape_11},{t:this.shape_8},{t:this.shape_10},{t:this.shape_7},{t:this.shape_3},{t:this.shape_6},{t:this.shape_5},{t:this.shape}]},3).to({state:[{t:this.shape_14},{t:this.shape_11},{t:this.shape_13},{t:this.shape_10},{t:this.shape_12},{t:this.shape_9},{t:this.shape_3},{t:this.shape_8},{t:this.shape}]},2).to({state:[{t:this.shape_14},{t:this.shape_3},{t:this.shape_13},{t:this.shape},{t:this.shape_12}]},4).to({state:[{t:this.shape_18},{t:this.shape_3},{t:this.shape_17},{t:this.shape_16},{t:this.shape},{t:this.shape_15}]},29).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_11},{t:this.shape_19},{t:this.shape_5},{t:this.shape_10},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},17).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.4,-21.8,60.9,43.7);


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


(lib.WhiteSheet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EggOAQLMAAAggVMBAaAAAIAAP3IADAAIAADcIgDAAIAANCg");
	this.shape.setTransform(206.3,103.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.WhiteSheet, new cjs.Rectangle(0,0,412.6,207), null);


(lib.ProgressiveFormDef = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJAKQgFgEAAgGQAAgFAFgFQAEgDAFAAQAGAAAEADQAFAFAAAFQAAAGgFAEQgEAEgGAAQgFAAgEgEg");
	this.shape.setTransform(436.5,99);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgoBbQgPgDAAgJQAAgLAKAAIAOACQAKACAMAAQAWAAAIgWQAGgOAAgeQgGAMgJAGQgJAGgKAAQgVAAgNgPQgOgOAAgWQAAggASgTQATgUAgAAQAKAAAIADQAHADAEAFQANAAAAAOQAAAIgDAOIgDAXIgDAmQAAAXgFAPQgFATgLAJQgOALgaAAQgQAAgKgCgAgVg6QgLAOAAAWQAAAQAGAIQAHAJANAAQALAAALgNQAKgMABgNQADgMADgbIgKgGQgFgBgGAAQgVAAgMAPg");
	this.shape_1.setTransform(426.8,96.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAdA5IgEgaIgBgZIAAgKIAAgMQAAgZgJAAQgNAAgLAQQgLAOgGAVIgBALIgBALIABALIABALQAAAFgDADQgEADgFAAQgFAAgDgDQgDgDAAgFIgBgLIgBgLIACggIACghIgBgMIAAgLQAAgFADgDQAEgDAEAAQALAAABAPIABAOQATgbAUAAQATAAAHARQAFALABAWIAAALIAAAKQAAAKACAQQADAPAAAJQAAAGgEADQgDADgFAAQgKAAgBgLg");
	this.shape_2.setTransform(414.6,93.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgLBVQgDgDAAgFIAAgWIgBgVIABgbIACgaQAAgGADgDQADgDAFAAQAEAAADADQAEADAAAGIgCAaIgBAbIABAVIAAAWQAAAFgDADQgDADgEAAQgGAAgDgDgAgHhAQgEgEAAgFQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAFgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_3.setTransform(404.9,90.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAdA5IgEgaIgBgZIAAgKIAAgMQAAgZgJAAQgNAAgLAQQgLAOgGAVIgBALIgBALIABALIABALQAAAFgDADQgEADgFAAQgFAAgDgDQgDgDAAgFIgBgLIgBgLIACggIACghIgBgMIAAgLQAAgFADgDQAEgDAEAAQALAAABAPIABAOQATgbAUAAQATAAAHARQAFALABAWIAAALIAAAKQAAAKACAQQADAPAAAJQAAAGgEADQgDADgFAAQgKAAgBgLg");
	this.shape_4.setTransform(395.3,93.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgnAyQgSgOAAgbQgBgdAQgUQAPgXAbAAQATAAAMAGQAPAJAAARQAAALgNAKQgGAEgTAIIgsAVQAHAKAKAFQAJAEANAAQAHAAAMgCQANgEAFgGQAEgHAEAAQAEAAAEADQADAEAAADQgBANgUAKQgTAIgQAAQgaAAgQgOgAgXgeQgKALgFAVIAkgQQAVgLAIgHQgJgKgSAAQgOAAgJAMg");
	this.shape_5.setTransform(382.4,93.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgsBfQgEgDAAgFIAAgvIAAguIgCguIgBgYQAAgJADgGQAEgGAGAAQAFAAADADQADADAAAFIAAADIgBAIQAKgHAKgEQAIgEAIAAQAYABAMAVQAIARAAAcQAAAYgOAQQgOASgYgBQgLABgOgEIAAA4QAAAFgDADQgDADgFAAQgGAAgCgDgAgKg9QgHADgJAJQABAbAAAcQANAFAMAAQAPAAAHgLQAHgJAAgOQAAgWgFgLQgFgKgLAAQgKAAgIAFg");
	this.shape_6.setTransform(369.3,96.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgtBfQgDgDAAgFIABgvIAAguIgDguIgBgYQAAgJADgGQADgGAHAAQAFAAADADQADADAAAFIAAADIgBAIQAKgHAKgEQAIgEAIAAQAYABAMAVQAIARAAAcQAAAYgOAQQgOASgYgBQgLABgOgEIAAA4QAAAFgDADQgEADgEAAQgFAAgEgDgAgKg9QgHADgJAJQACAbgBAcQAOAFALAAQAPAAAIgLQAGgJAAgOQAAgWgFgLQgFgKgLAAQgKAAgIAFg");
	this.shape_7.setTransform(356.5,96.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAlA8QgFgEgCgFIgUAKQgJADgEAAQgcAAgMgPQgMgPAAgeQAAgcATgTQAUgVAaAAQAKAAANAGQAQAGAAAKQAAADgDACIgBAPIgBAZQAAAOACAIQABAGAGAQIADAFIAAADQAAAEgDADQgDADgEAAQgDAAgGgFgAgTgcQgNAOAAATQAAATAHAJQAGAKAOAAQAKABAIgFQAEgCAIgGQgEgfAAgPIABgLIACgNIgIgDIgFgBQgRAAgNAPg");
	this.shape_8.setTransform(343.8,93.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAgBYQgDgJgCgSQgCgRAAgLIAAgJIAAgKQAAgVgLABQgOAAgLAMQgGAHgLATQAAAtgDAJQgEAGgHABQgEAAgEgEQgEgDAAgFIABgFIACgRIAAgRIAAhWIABgTIgBgLQgBgGAAgFQAAgGADgCQAEgDAFAAQAJAAACAKQACALAAAJIgBAaIgBAaIAAAKQAKgNALgGQAKgHAMAAQAUAAAHAMQAFAJABAVIABAWIACAZIAEAYIABADQAAAFgEADQgDAEgFgBQgJABgCgKg");
	this.shape_9.setTransform(330.9,90.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgfBcQgDgEAAgEQAAgMAZg4IgqhQIgFgJQgDgFAAgEQAAgEAEgEQADgDAFAAQAFAAADADQAUAcAWAzIARgoQAKgVAIgPQAEgHAGAAQAFAAAEADQADAEAAAEIgBAHIgpBWQgPAggHAVIgIAXQgDAJgHAAQgFAAgEgDg");
	this.shape_10.setTransform(310.1,96.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgMBVIABgrIABgqIABgqIAAgqQAAgMALAAQALAAAAAMIAAAqIgBAqIgBA6IgBAbQgCAMgJAAQgLAAAAgMg");
	this.shape_11.setTransform(300.9,90.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgMBVIABgrIABgqIABgqIAAgqQAAgMALAAQALAAAAAMIAAAqIgBAqIgBA6IgBAbQgCAMgJAAQgLAAAAgMg");
	this.shape_12.setTransform(294.4,90.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAlA8QgFgEgCgFIgUAKQgJADgEAAQgcAAgMgPQgMgPAAgeQAAgcATgTQAUgVAaAAQAKAAANAGQAQAGAAAKQAAADgDACIgBAPIgBAZQAAAOACAIQABAGAGAQIADAFIAAADQAAAEgDADQgDADgEAAQgDAAgGgFgAgTgcQgNAOAAATQAAATAHAJQAGAKAOAAQAKABAIgFQAEgCAIgGQgEgfAAgPIABgLIACgNIgIgDIgFgBQgRAAgNAPg");
	this.shape_13.setTransform(284.9,93.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAaA4QgPAIgSAAQgPAAgKgHQgLgIgCgOQgFgfAAgXQAAgQAEgVQABgKAKAAQAFAAADADQAEADAAAFIgCASIgCASIABAgQACAOACAIIAIAEIAHABQAPAAARgFIAAgYIAAgWQAAgZACgTQACgKAKAAQAFAAADADQAEADgBAFIgCAsIAAAZIAAAZIABAIIAAAIQAAAFgDADQgEADgEAAQgKAAgCgLg");
	this.shape_14.setTransform(272.6,93.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgHBTQgDgDAAgFIAAgNIABgOIgDhEIgagCQgKgBAAgKQAAgFADgEQADgDAFAAIAZACIgBgQIAAgPQAAgEADgDQADgEAFAAQAKABACAQIAAALIAAAHIAAAHIAQgCQANAAADACQAHABAAAJQAAAFgDAEQgDADgFAAIgGAAIgGgBIgQACIADBEIAAAGIAAAGQAAAagMgBQgEAAgEgCg");
	this.shape_15.setTransform(260.6,91.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AghAzQgQgPgBgZQABgXAPgZQARgcAWAAQALAAAOAGQATAGgBAKQAAAEgDAEQgDADgEABQgDAAgCgCIgGgFQgGgFgQAAQgLAAgMAWQgKATAAANQAAAQAKAIQAKAJAPAAQAGAAAIgEIAOgHIAFgCQAEAAADADQAEAEAAAEQAAAJgSAIQgRAHgJAAQgYAAgQgPg");
	this.shape_16.setTransform(248.9,93.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAlA8QgFgEgCgFIgUAKQgJADgEAAQgcAAgMgPQgMgPAAgeQAAgcATgTQAUgVAaAAQAKAAANAGQAQAGAAAKQAAADgDACIgBAPIgBAZQAAAOACAIQABAGAGAQIADAFIAAADQAAAEgDADQgDADgEAAQgDAAgGgFgAgTgcQgNAOAAATQAAATAHAJQAGAKAOAAQAKABAIgFQAEgCAIgGQgEgfAAgPIABgLIACgNIgIgDIgFgBQgRAAgNAPg");
	this.shape_17.setTransform(236.5,93.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AggBBQgSgGAAgMQAAgFAEgDQADgEAFABQAEgBAGAGQACADAKACIANABQAJAAAIgCQAKgEABgHQAAgQgXgGIgLgCQgQgEgGgEQgKgGABgNQgBgZAXgKQAIgEAOgEIAWgHQAFgCAFgBQAFABAEADQADADAAAFIACAKIABALQAAAFgEADQgDADgEABQgHgBgCgEQgDgDgBgJIgbAIQgRAHgBALIAHACQAaAEANAJQAUALgBAYQAAATgQAKQgOAHgUABQgPgBgOgFg");
	this.shape_18.setTransform(217.1,93);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgLBVQgDgDAAgFIAAgWIgBgVIABgbIACgaQAAgGADgDQADgDAFAAQAEAAADADQAEADAAAGIgCAaIgBAbIABAVIAAAWQAAAFgDADQgDADgEAAQgGAAgDgDgAgHhAQgEgEAAgFQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAFgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_19.setTransform(208.4,90.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAdA5IgEgaIgBgZIAAgKIAAgMQAAgZgJAAQgNAAgLAQQgLAOgGAVIgBALIgBALIABALIABALQAAAFgDADQgEADgFAAQgFAAgDgDQgDgDAAgFIgBgLIgBgLIACggIACghIgBgMIAAgLQAAgFADgDQAEgDAEAAQALAAABAPIABAOQATgbAUAAQATAAAHARQAFALABAWIAAALIAAAKQAAAKACAQQADAPAAAJQAAAGgEADQgDADgFAAQgKAAgBgLg");
	this.shape_20.setTransform(191.6,93.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgiAyQgQgRgBgbQgBgZAOgUQARgYAcAAQAXAAANAVQAJASAAAYQgBAZgNASQgPAVgYAAQgTAAgOgOgAgUgXQgHANgBAQQAAARAJAKQAIAHAKAAQAMAAAIgIQAKgKABgRQACgsgaAAIgBAAQgQAAgJAQg");
	this.shape_21.setTransform(178.6,93.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgLBVQgDgDAAgFIAAgWIgBgVIABgbIACgaQAAgGADgDQADgDAFAAQAEAAADADQAEADAAAGIgCAaIgBAbIABAVIAAAWQAAAFgDADQgDADgEAAQgGAAgDgDgAgHhAQgEgEAAgFQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAFgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_22.setTransform(169.4,90.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgHBTQgDgDAAgFIAAgNIABgOIgDhEIgagCQgKgBAAgKQAAgFADgEQADgDAFAAIAZACIgBgQIAAgPQAAgEADgDQADgEAFAAQAKABACAQIAAALIAAAHIAAAHIAQgCQANAAADACQAHABAAAJQAAAFgDAEQgDADgFAAIgGAAIgGgBIgQACIADBEIAAAGIAAAGQAAAagMgBQgEAAgEgCg");
	this.shape_23.setTransform(160.1,91.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AghAzQgRgPAAgZQAAgXAQgZQASgcAUAAQAMAAAOAGQATAGgBAKQAAAEgCAEQgDADgFABQgDAAgDgCIgEgFQgHgFgRAAQgKAAgMAWQgLATABANQgBAQALAIQAKAJAPAAQAHAAAHgEIAOgHIAFgCQAEAAADADQADAEAAAEQABAJgTAIQgQAHgJAAQgYAAgQgPg");
	this.shape_24.setTransform(148.4,93.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAlA8QgFgEgCgFIgUAKQgJADgEAAQgcAAgMgPQgMgPAAgeQAAgcATgTQAUgVAaAAQAKAAANAGQAQAGAAAKQAAADgDACIgBAPIgBAZQAAAOACAIQABAGAGAQIADAFIAAADQAAAEgDADQgDADgEAAQgDAAgGgFgAgTgcQgNAOAAATQAAATAHAJQAGAKAOAAQAKABAIgFQAEgCAIgGQgEgfAAgPIABgLIACgNIgIgDIgFgBQgRAAgNAPg");
	this.shape_25.setTransform(136,93.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgoAyQgRgOgBgbQABgdAPgUQAQgXAaAAQATAAAMAGQAPAJAAARQAAALgNAKQgGAEgTAIIgrAVQAGAKAKAFQAKAEALAAQAJAAAKgCQAPgEADgGQAEgHAFAAQAEAAAEADQACAEAAADQAAANgUAKQgSAIgSAAQgZAAgRgOgAgYgeQgJALgFAVIAkgQQAUgLAKgHQgLgKgRAAQgOAAgKAMg");
	this.shape_26.setTransform(116.3,93.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAgBYQgDgJgCgSQgCgRAAgLIAAgJIAAgKQAAgVgLABQgOAAgLAMQgGAHgLATQAAAtgDAJQgEAGgHABQgEAAgEgEQgEgDAAgFIABgFIACgRIAAgRIAAhWIABgTIgBgLQgBgGAAgFQAAgGADgCQAEgDAFAAQAJAAACAKQACALAAAJIgBAaIgBAaIAAAKQAKgNALgGQAKgHAMAAQAUAAAHAMQAFAJABAVIABAWIACAZIAEAYIABADQAAAFgEADQgDAEgFgBQgJABgCgKg");
	this.shape_27.setTransform(102.8,90.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgHBTQgDgDAAgFIAAgNIABgOIgDhEIgagCQgKgBAAgKQAAgFADgEQADgDAFAAIAZACIgBgQIAAgPQAAgEADgDQADgEAFAAQAKABACAQIAAALIAAAHIAAAHIAQgCQANAAADACQAHABAAAJQAAAFgDAEQgDADgFAAIgGAAIgGgBIgQACIADBEIAAAGIAAAGQAAAagMgBQgEAAgEgCg");
	this.shape_28.setTransform(90,91.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgHBTQgDgDAAgFIAAgNIABgOIgDhEIgagCQgKgBAAgKQAAgFADgEQADgDAFAAIAZACIgBgQIAAgPQAAgEADgDQADgEAFAAQAKABACAQIAAALIAAAHIAAAHIAQgCQANAAADACQAHABAAAJQAAAFgDAEQgDADgFAAIgGAAIgGgBIgQACIADBEIAAAGIAAAGQAAAagMgBQgEAAgEgCg");
	this.shape_29.setTransform(71.5,91.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAlA8QgFgEgCgFIgUAKQgJADgEAAQgcAAgMgPQgMgPAAgeQAAgcATgTQAUgVAaAAQAKAAANAGQAQAGAAAKQAAADgDACIgBAPIgBAZQAAAOACAIQABAGAGAQIADAFIAAADQAAAEgDADQgDADgEAAQgDAAgGgFgAgTgcQgNAOAAATQAAATAHAJQAGAKAOAAQAKABAIgFQAEgCAIgGQgEgfAAgPIABgLIACgNIgIgDIgFgBQgRAAgNAPg");
	this.shape_30.setTransform(59.8,93.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAgBYQgDgJgCgSQgCgRAAgLIAAgJIAAgKQAAgVgLABQgOAAgLAMQgGAHgLATQAAAtgDAJQgEAGgHABQgEAAgEgEQgEgDAAgFIABgFIACgRIAAgRIAAhWIABgTIgBgLQgBgGAAgFQAAgGADgCQAEgDAFAAQAJAAACAKQACALAAAJIgBAaIgBAaIAAAKQAKgNALgGQAKgHAMAAQAUAAAHAMQAFAJABAVIABAWIACAZIAEAYIABADQAAAFgEADQgDAEgFgBQgJABgCgKg");
	this.shape_31.setTransform(46.9,90.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgHBTQgDgDAAgFIAAgNIABgOIgDhEIgagCQgKgBAAgKQAAgFADgEQADgDAFAAIAZACIgBgQIAAgPQAAgEADgDQADgEAFAAQAKABACAQIAAALIAAAHIAAAHIAQgCQANAAADACQAHABAAAJQAAAFgDAEQgDADgFAAIgGAAIgGgBIgQACIADBEIAAAGIAAAGQAAAagMgBQgEAAgEgCg");
	this.shape_32.setTransform(34.1,91.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgoBbQgPgDAAgJQAAgLAKAAIAOACQAKACAMAAQAWAAAIgWQAGgOAAgeQgGAMgJAGQgJAGgKAAQgVAAgNgPQgOgOAAgWQAAggASgTQATgUAgAAQAKAAAIADQAHACAEAGQANAAAAAOQAAAIgDAOIgDAXIgDAmQAAAYgFAOQgFATgLAJQgOALgaAAQgQAAgKgCgAgVg6QgLAOAAAWQAAARAGAHQAHAJANAAQALAAALgNQAKgNABgMQADgMADgbIgKgGQgFgBgGAAQgVAAgMAPg");
	this.shape_33.setTransform(431.1,61.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAdA5IgEgaIgBgZIAAgKIAAgMQAAgZgJAAQgNAAgLAQQgLAOgGAVIgBALIgBALIABALIABALQAAAFgDADQgEADgFAAQgFAAgDgDQgDgDAAgFIgBgLIgBgLIACggIACghIgBgMIAAgLQAAgFADgDQAEgDAEAAQALAAABAPIABAOQATgbAUAAQATAAAHARQAFALABAWIAAALIAAAKQAAAKACAQQADAPAAAJQAAAGgEADQgDADgFAAQgKAAgBgLg");
	this.shape_34.setTransform(418.9,57.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgLBVQgDgEAAgEIAAgWIgBgVIABgbIACgbQAAgFADgDQADgEAFABQAEgBADAEQAEADAAAFIgCAbIgBAbIABAVIAAAWQAAAEgDAEQgDADgEAAQgGAAgDgDgAgHhAQgEgEAAgFQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAFgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_35.setTransform(409.2,55.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgMBVIABgrIABgqIABgqIAAgqQAAgMALAAQALAAAAAMIAAAqIgBAqIgBA6IgBAbQgCAMgJAAQgLAAAAgMg");
	this.shape_36.setTransform(402.3,54.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgnAyQgTgOABgaQgBgeAPgUQARgXAaAAQATAAAMAGQAPAJAAARQAAALgNAKQgGAEgTAIIgsAVQAHAKAKAFQAJAFANgBQAHAAAMgCQANgEAFgGQAEgHAEAAQAEAAADADQAEAEAAADQAAAOgWAJQgRAIgRAAQgaAAgQgOgAgXgfQgKAMgFAVIAkgQQAVgLAIgHQgJgKgSAAQgOAAgJALg");
	this.shape_37.setTransform(392.7,58.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgnAyQgTgOABgaQAAgeAOgUQARgXAaAAQATAAAMAGQAPAJAAARQAAALgNAKQgGAEgTAIIgsAVQAHAKAKAFQAJAFAMgBQAJAAALgCQANgEAFgGQAEgHAEAAQAEAAADADQAEAEAAADQAAAOgWAJQgRAIgSAAQgZAAgQgOgAgYgfQgJAMgEAVIAkgQQAUgLAIgHQgKgKgRAAQgOAAgKALg");
	this.shape_38.setTransform(379.5,58.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgTBkQgDgDAAgFIAAgCQADgPAAgSIgBggIAAghIgSABQgMAAAAgMQAAgLAVgBIALAAIACgSQADgaAKgMQALgPAaAAQARAAAAALQAAALgQAAQgcAAgDAoIgBAHIAagBQATAAAAALQAAAJgKACIgJAAQgFAAgWACIgBAZIABAWIAAAWQAAAWgCANQgBAJgJAAQgFAAgEgDg");
	this.shape_39.setTransform(366.4,55.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgnAyQgTgOABgaQAAgeAOgUQAQgXAbAAQATAAAMAGQAPAJAAARQAAALgNAKQgGAEgTAIIgrAVQAGAKAKAFQAJAFAMgBQAJAAAKgCQAOgEAEgGQAFgHAEAAQAEAAADADQADAEABADQAAAOgWAJQgRAIgSAAQgZAAgQgOgAgYgfQgJAMgEAVIAkgQQATgLAJgHQgKgKgRAAQgOAAgKALg");
	this.shape_40.setTransform(347,58.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAgBYQgDgJgCgSQgCgRAAgLIAAgJIAAgKQAAgVgLABQgOAAgLAMQgGAHgLATQAAAtgDAJQgEAHgHAAQgEAAgEgEQgEgDAAgEIABgGIACgRIAAgSIAAhUIABgUIgBgLQgBgGAAgFQAAgFADgDQAEgDAFAAQAJAAACAKQACALAAAJIgBAaIgBAaIAAAKQAKgNALgGQAKgHAMAAQAUAAAHAMQAFAJABAVIABAWIACAYIAEAZIABADQAAAFgEADQgDAEgFgBQgJAAgCgJg");
	this.shape_41.setTransform(333.5,54.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgHBSQgDgCAAgFIAAgNIABgOIgDhDIgagDQgKgBAAgKQAAgFADgEQADgDAFAAIAZACIgBgQIAAgOQAAgGADgCQADgEAFAAQAKAAACARIAAALIAAAGIAAAIIAQgCQANAAADACQAHABAAAJQAAAFgDAEQgDADgFAAIgGAAIgGgBIgQADIADBDIAAAGIAAAGQAAAZgMAAQgEAAgEgDg");
	this.shape_42.setTransform(320.7,56.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgfBcQgDgEAAgEQAAgMAZg4IgqhQIgFgJQgDgFAAgEQAAgFAEgDQADgDAFgBQAFAAADAEQAUAcAWAzIARgoQAKgVAIgPQAEgHAGAAQAFAAAEADQADAEAAAEIgBAHIgpBWQgPAggHAWIgIAWQgDAJgHAAQgFAAgEgDg");
	this.shape_43.setTransform(301.4,61.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgoAyQgRgOgBgaQABgeAPgUQAQgXAaAAQATAAAMAGQAPAJAAARQAAALgNAKQgGAEgTAIIgrAVQAGAKAKAFQAKAFAMgBQAIAAAKgCQAPgEADgGQAEgHAFAAQAEAAAEADQACAEAAADQAAAOgUAJQgSAIgRAAQgaAAgRgOgAgYgfQgJAMgFAVIAkgQQAUgLAKgHQgLgKgRAAQgOAAgKALg");
	this.shape_44.setTransform(289.1,58.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgMA2IgSgwIgVg1IgBgEQAAgGAEgDQADgDAFAAQAHAAADAHIAdBRQAJgTANgjIAKgaQAEgIAGAAQAFAAAEAEQADADAAAFQAAAEgTAuIgYA2QAAALgKAAQgJAAgDgKg");
	this.shape_45.setTransform(276.7,58);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAdA5IgEgaIgBgZIAAgKIAAgMQAAgZgJAAQgNAAgLAQQgLAOgGAVIgBALIgBALIABALIABALQAAAFgDADQgEADgFAAQgFAAgDgDQgDgDAAgFIgBgLIgBgLIACggIACghIgBgMIAAgLQAAgFADgDQAEgDAEAAQALAAABAPIABAOQATgbAUAAQATAAAHARQAFALABAWIAAALIAAAKQAAAKACAQQADAPAAAJQAAAGgEADQgDADgFAAQgKAAgBgLg");
	this.shape_46.setTransform(264.7,57.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgiAyQgQgRgBgbQgBgZAOgUQARgYAcAAQAXAAANAVQAJASAAAYQgBAZgNASQgPAVgYAAQgTAAgOgOgAgUgXQgIANAAAQQAAARAJAKQAIAHAKAAQAMAAAIgIQAKgKABgRQACgsgaAAIgBAAQgQAAgJAQg");
	this.shape_47.setTransform(251.7,58.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AghAzQgQgPgBgZQABgXAPgZQARgcAWAAQALAAAOAGQATAGgBAKQAAAEgDAEQgDADgEABQgDAAgCgCIgGgFQgGgFgQAAQgLAAgMAVQgKAUAAANQAAAQAKAIQAKAJAPAAQAGAAAIgEIAOgHIAFgCQAEAAADADQAEAEAAAEQAAAJgSAIQgRAHgJAAQgYAAgQgPg");
	this.shape_48.setTransform(239.5,58.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgiAyQgQgRgBgbQgBgZAOgUQARgYAcAAQAXAAANAVQAJASAAAYQgBAZgNASQgPAVgYAAQgTAAgOgOgAgUgXQgIANAAAQQAAARAJAKQAJAHAJAAQAMAAAIgIQAKgKABgRQACgsgaAAIgBAAQgQAAgJAQg");
	this.shape_49.setTransform(219.6,58.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgHBSQgDgCAAgFIAAgNIABgOIgDhDIgagDQgKgBAAgKQAAgFADgEQADgDAFAAIAZACIgBgQIAAgOQAAgGADgCQADgEAFAAQAKAAACARIAAALIAAAGIAAAIIAQgCQANAAADACQAHABAAAJQAAAFgDAEQgDADgFAAIgGAAIgGgBIgQADIADBDIAAAGIAAAGQAAAZgMAAQgEAAgEgDg");
	this.shape_50.setTransform(207.8,56.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgpBQQgRgRAAgZQAAggARgSQAQgSAaAAQAOAAAHAEIALAIQACgyACgRQACgKAIAAQALAAAAALQAAARgEA3IgBAiQgBAnAEAUIAAACQAAAFgDADQgEADgDAAQgIAAgDgKQgJAGgJADQgJADgJAAQgYAAgQgQgAgbACQgJAMAAAXQAAAPAKALQALALAOAAQAJAAAHgEIANgJIADgEIAAgUIAAgOIAAgOQgEgJgIgEQgHgFgLAAQgSAAgKALg");
	this.shape_51.setTransform(188,54.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgnAyQgSgOAAgaQAAgeAPgUQAPgXAbAAQATAAAMAGQAPAJAAARQAAALgNAKQgGAEgTAIIgsAVQAHAKAKAFQAJAFANgBQAHAAAMgCQAOgEAEgGQADgHAFAAQAEAAAEADQACAEAAADQAAAOgUAJQgTAIgQAAQgaAAgQgOgAgXgfQgKAMgFAVIAkgQQAVgLAJgHQgKgKgSAAQgOAAgJALg");
	this.shape_52.setTransform(174.6,58.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AggBBQgSgGAAgMQAAgFADgDQAEgDAFAAQAEAAAFAFQADACAKACIANACQAJAAAHgCQALgEAAgHQAAgQgWgGIgLgCQgQgEgGgFQgJgFgBgNQAAgZAYgKQAGgDAPgFIAWgHQAFgCAGgBQAFABADADQADADAAAFIABALIACAKQAAAFgDADQgEADgFAAQgGAAgDgEQgBgDgBgKIgbAJQgTAHABALIAGACQAaAFAOAIQASALABAYQAAATgRAKQgOAHgUABQgPAAgOgGg");
	this.shape_53.setTransform(161.7,57.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAaA4QgPAIgSAAQgPAAgKgHQgLgIgCgOQgFgfAAgXQAAgQAEgVQABgKAKAAQAFAAADADQAEADAAAFIgCASIgCASIABAgQACAOACAIIAIAEIAHABQAPAAARgFIAAgYIAAgWQAAgZACgTQACgKAKAAQAFAAADADQAEADgBAFIgCAsIAAAZIAAAZIABAIIAAAIQAAAFgDADQgEADgEAAQgKAAgCgLg");
	this.shape_54.setTransform(150,58.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("Ag2BaQgFgFABgFIAAgiIABgvQADghAAgPIABggQABgGADgCQAQgFAVAAQATAAATAOQAWAQAAAYQAAAegYARQASAHAJAJQAIAJAAALQAAAOgPAOQgLAJgLAFQgaAKgpAAQgFAAgEgFgAgkAvIAAAYQAfgBATgIQAIgDAIgHQAGgGAAgDQAAgFgOgHQgMgFgKgDIgMgCIgFAAIgEAAIgOgBIgBAbgAgehFIAAAUIgDAuIASABQAQgBAMgKQAMgKAAgRQAAgLgMgJQgNgKgMAAIgSABg");
	this.shape_55.setTransform(129.5,55);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("Ag7BZQgDgEAAgFIgBgbIgBgcQAAgLACgUQADgVAAgLIgBgSIgCgRQAAgHAEgFQAFgGAHAAIAdACQAQACAKAGQAvAaAAAkQAAASgQAMQgNALgTAGQAkAUASAVQADAEAAAEQAAAFgDAEQgEAEgFAAQgEAAgEgEQgngngugNIABAXIAAAXQAAAFgDAEQgEADgFAAQgFAAgDgDgAglg0IABAPIgBAXIgDAWIAFAAIAGAAQAdAAAOgIQAHgCAFgGQAHgHAAgEQAAgQgTgOQgQgNgSgCIgSgCg");
	this.shape_56.setTransform(114.1,55.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgzBaQgLgKAAgmIABgQIAAgTIgBgGQAAgDACgDQADgiAAgQIgBgNIgCgNQAAgOAMAAQAFAAAEAEQAOgEAMgCQANgCAKAAQAcAAARAHQAIADAAAIQAAAFgDAEQgEAEgFAAIgDgBQgUgGgSAAQgKAAgKACQgMACgNADIABANIgCAsIAzgFIAbgCQAFAAAEADQADAEAAAFQAAAKgKABIgcADIg1AFIgBAPIAAAOQAAAaADAFQADADAQAAIAVAAIAWgBIAGgBIAHAAQANAAAAAMQAAAKgKACQgLACgkAAQgkAAgLgKg");
	this.shape_57.setTransform(99.1,55.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgVBVQgOgjgRhCIgJggQgHgZAAgHQAAgFADgEQAEgDAFAAQAJAAACAKIAFAUIALAoQALAqALAgIAAgCIAfhUIAKgdQAGgRAIgJQAEgFAFAAQAFAAAEAEQADAEAAAFQAAADgCAEQgHAKgFAMIgJAaIgfBUQgGAPgHAPQgDAHgHAAQgJAAgEgKg");
	this.shape_58.setTransform(84.2,55.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgnAyQgTgOABgaQAAgeAOgUQAQgXAbAAQATAAAMAGQAPAJAAARQAAALgNAKQgGAEgTAIIgrAVQAGAKAKAFQAJAFAMgBQAJAAAKgCQAOgEAEgGQAFgHAEAAQAEAAADADQADAEABADQAAAOgWAJQgRAIgSAAQgZAAgQgOgAgYgfQgJAMgEAVIAkgQQATgLAJgHQgKgKgRAAQgOAAgKALg");
	this.shape_59.setTransform(62.2,58.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAgBYQgDgJgCgSQgCgRAAgLIAAgJIAAgKQAAgVgLABQgOAAgLAMQgGAHgLATQAAAtgDAJQgEAHgHAAQgEAAgEgEQgEgDAAgEIABgGIACgRIAAgSIAAhUIABgUIgBgLQgBgGAAgFQAAgFADgDQAEgDAFAAQAJAAACAKQACALAAAJIgBAaIgBAaIAAAKQAKgNALgGQAKgHAMAAQAUAAAHAMQAFAJABAVIABAWIACAYIAEAZIABADQAAAFgEADQgDAEgFgBQgJAAgCgJg");
	this.shape_60.setTransform(48.6,54.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgHBSQgDgCAAgFIAAgNIABgOIgDhDIgagDQgKgBAAgKQAAgFADgEQADgDAFAAIAZACIgBgQIAAgOQAAgGADgCQADgEAFAAQAKAAACARIAAALIAAAGIAAAIIAQgCQANAAADACQAHABAAAJQAAAFgDAEQgDADgFAAIgGAAIgGgBIgQADIADBDIAAAGIAAAGQAAAZgMAAQgEAAgEgDg");
	this.shape_61.setTransform(35.8,56.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FF0000").s().p("Ag2BaQgEgFgBgFIAAgiIACgvQADghAAgPIACggQAAgGADgCQAQgFAUAAQAUAAATAOQAWAQAAAYQAAAegXARQARAHAJAJQAJAJgBALQAAAOgPAOQgLAJgLAFQgZAKgpAAQgFAAgFgFgAgjAvIAAAYQAfgBARgIQAJgDAHgHQAIgGAAgDQgBgFgPgHQgLgFgKgDIgMgCIgEAAIgFAAIgNgBIgBAbgAgfhFIAAAUIgCAuIASABQAQgBALgKQANgKAAgRQAAgLgNgJQgMgKgNAAIgSABg");
	this.shape_62.setTransform(421.5,19.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF0000").s().p("Ag7BZQgDgEAAgFIgBgbIgBgcQAAgLACgUQADgVAAgLIgBgSIgCgRQAAgHAEgFQAFgGAHAAIAdACQAQACAKAGQAvAaAAAkQAAASgQAMQgNALgTAGQAkAUASAVQADAEAAAEQAAAFgDAEQgEAEgFAAQgEAAgEgEQgngngugNIABAXIAAAXQAAAFgDAEQgEADgFAAQgFAAgDgDgAglg0IABAPIgBAXIgDAWIAFAAIAGAAQAdAAAOgIQAHgCAFgGQAHgHAAgEQAAgQgTgOQgQgNgSgCIgSgCg");
	this.shape_63.setTransform(406.1,19.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FF0000").s().p("AgzBaQgLgKAAgmIABgQIAAgTIgBgGQAAgDACgDQADgiAAgQIgBgNIgCgNQAAgOAMAAQAFAAAEAEQAOgEAMgCQANgCAKAAQAcAAARAHQAIADAAAIQAAAFgDAEQgEAEgFAAIgDgBQgUgGgSAAQgKAAgKACQgMACgNADIABANIgCAsIAzgFIAbgCQAFAAAEADQADAEAAAFQAAAKgKABIgcADIg1AFIgBAPIAAAOQAAAaADAFQADADAQAAIAVAAIAWgBIAGgBIAHAAQANAAAAAMQAAAKgKACQgLACgkAAQgkAAgLgKg");
	this.shape_64.setTransform(391.1,19.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FF0000").s().p("AgVBVQgOgjgRhCIgJggQgHgZAAgHQAAgFADgEQAEgDAFAAQAJAAACAKIAFAUIALAoQALAqALAgIAAgCIAfhUIAKgdQAGgRAIgJQAEgFAFAAQAFAAAEAEQADAEAAAFQAAADgCAEQgHAKgFAMIgJAaIgfBUQgGAPgHAPQgDAHgHAAQgJAAgEgKg");
	this.shape_65.setTransform(376.2,19.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FF0000").s().p("AgnAyQgSgOgBgaQABgeAPgVQAPgWAbAAQATAAAMAGQAPAJAAARQAAALgNAKQgGAEgTAIIgsAVQAHAKAKAFQAJAFANgBQAHAAAMgDQAOgDAEgGQADgHAFAAQAEAAAEAEQACADABADQgBAOgUAJQgTAIgQAAQgaAAgQgOgAgXgfQgKALgFAWIAkgQQAVgLAJgHQgKgKgSAAQgOAAgJALg");
	this.shape_66.setTransform(354.2,22.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FF0000").s().p("AAgBYQgDgJgCgSQgCgRAAgLIAAgJIAAgKQAAgUgLAAQgOAAgLAMQgGAHgLATQAAAtgDAIQgEAIgHAAQgEAAgEgDQgEgEAAgEIABgGIACgRIAAgSIAAhUIABgUIgBgLQgBgGAAgFQAAgFADgEQAEgCAFAAQAJgBACALQACALAAAJIgBAaIgBAaIAAAJQAKgMALgGQAKgHAMAAQAUAAAHANQAFAIABAVIABAWIACAYIAEAZIABADQAAAFgEADQgDADgFAAQgJAAgCgJg");
	this.shape_67.setTransform(340.6,19.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FF0000").s().p("AgHBSQgDgDAAgEIAAgNIABgOIgDhDIgagDQgKgBAAgKQAAgFADgEQADgDAFAAIAZACIgBgQIAAgOQAAgGADgCQADgDAFgBQAKAAACARIAAALIAAAGIAAAIIAQgCQANAAADABQAHADAAAIQAAAFgDAEQgDADgFAAIgGAAIgGgBIgQADIADBDIAAAGIAAAGQAAAZgMAAQgEAAgEgDg");
	this.shape_68.setTransform(327.8,20.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FF0000").s().p("AgTBkQgDgDAAgFIAAgCQADgPAAgSIgBggIAAghIgSABQgMAAAAgMQAAgLAVgBIALAAIACgSQADgaAKgMQALgPAaAAQARAAAAALQAAALgQAAQgcAAgDAoIgBAHIAagBQATAAAAALQAAAJgKACIgJAAQgFAAgWACIgBAZIABAWIAAAWQAAAWgCANQgBAJgJAAQgFAAgEgDg");
	this.shape_69.setTransform(308.8,20);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FF0000").s().p("AgiAyQgQgRgBgbQgBgZAOgUQARgYAcAAQAXAAANAVQAJASAAAYQgBAZgNASQgPAVgYAAQgTAAgOgOgAgUgXQgIANAAAQQAAARAJAKQAIAHAKAAQAMAAAIgIQAKgKABgRQACgsgaAAIgBAAQgQAAgJAQg");
	this.shape_70.setTransform(296.4,22.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FF0000").s().p("AgGBFQgDgDAAgGQAAgOgDgbQgDgbAAgOQAAgNgDgHQgJAEgIAJIgOAPIgGAHIgBAUIgCAUIACAKIABAJQAAAFgEADQgEAEgEAAQgNAAAAgeIABgVIABgUIgBgTIgBgTQAAgaAMAAQAEAAAEAEQAEAEAAAEIAAAHIgBAHIAAANQAGgNAMgKQAMgKAJAAQARAAAHASQAGgIAJgFQAJgEAMAAQATAAAHAVQABAEAEAdIAIBCQAAAFgDADQgDADgFAAQgKAAgCgKIgEgkIgEgjQgBgIgDgIQgEgLgFAAQgEAAgMAIQgLAGgDAFIAAAWIADAeQADASAAAMQAAAGgEADQgDADgFAAQgDAAgEgDg");
	this.shape_71.setTransform(274,22.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FF0000").s().p("AgtA2IAAhRIAAgMIABgMQAAgMAKAAQALAAABAUQAWgWAaAAQAKAAAFAHQAFAIgBAOIAAAIQgBAPgLAAQgKAAAAgMIAAgIIAAgKQgTACgJAJQgLAHgHAQIAAA/QAAAMgMAAQgJAAgBgMg");
	this.shape_72.setTransform(259.1,22.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FF0000").s().p("AgiAyQgQgRgBgbQgBgZAOgUQARgYAcAAQAXAAANAVQAJASAAAYQgBAZgNASQgPAVgYAAQgTAAgOgOgAgUgXQgIANAAAQQAAARAJAKQAIAHAKAAQAMAAAJgIQAJgKABgRQACgsgaAAIgBAAQgQAAgJAQg");
	this.shape_73.setTransform(246.5,22.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FF0000").s().p("Ag4BfQgDgDAAgFIAAhGIABhEIAAgPIAAgQQAAgFADgEQADgEAGAAQADABADACIAbgEIATgCQANAAASAFQAXAFAAAIQAAAFgDAEQgDAEgFAAIgFgBQgOgGgYABIgRABIgXADIgBAzQAXgGALAAQARAAAUACQALABAAALQAAAFgEAEQgDACgFAAIgSgBIgSAAQgIAAgaAGIgBBRQAAAFgDADQgEADgFAAQgFAAgDgDg");
	this.shape_74.setTransform(233.9,19.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FF0000").s().p("AgoAyQgSgOAAgaQAAgeAPgVQAQgWAbAAQATAAAMAGQAPAJAAARQAAALgNAKQgGAEgTAIIgrAVQAGAKAKAFQAJAFAMgBQAJAAAKgDQAOgDAEgGQAEgHAFAAQAEAAADAEQADADAAADQABAOgWAJQgSAIgRAAQgZAAgRgOgAgYgfQgJALgEAWIAkgQQATgLAJgHQgKgKgRAAQgOAAgKALg");
	this.shape_75.setTransform(212.4,22.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FF0000").s().p("AgNA2IgRgwIgVg1IgBgEQAAgGADgDQAEgDAFAAQAHAAADAHIAdBRQAIgTAOgjIAKgaQADgIAHAAQAFAAADAEQAEAEAAAEQAAAFgTAtIgYA2QAAALgKAAQgJAAgEgKg");
	this.shape_76.setTransform(199.9,22.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FF0000").s().p("AgLBVQgDgEAAgEIAAgVIgBgWIABgbIACgbQAAgFADgDQADgEAFABQAEgBADAEQAEADAAAFIgCAbIgBAbIABAWIAAAVQAAAEgDAEQgDADgEAAQgGAAgDgDgAgHhAQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_77.setTransform(190.8,19.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FF0000").s().p("AggBBQgSgGAAgMQAAgFADgDQAEgDAFgBQAEABAFAFQADACAKACIANACQAJAAAHgDQALgDAAgHQAAgQgWgGIgLgDQgQgDgGgFQgKgFAAgOQAAgYAYgKQAGgEAPgEIAWgHQAFgCAGgBQAFABADADQADADAAAGIABAKIACAKQAAAEgDAEQgEADgFAAQgGAAgCgEQgCgDgBgKIgbAIQgTAIABALIAGACQAaAFAOAIQASALABAYQAAATgRAKQgOAIgUAAQgPAAgOgGg");
	this.shape_78.setTransform(181,22.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FF0000").s().p("AggBBQgSgGAAgMQAAgFADgDQAEgDAFgBQAEABAFAFQADACAKACIANACQAJAAAHgDQALgDAAgHQAAgQgWgGIgLgDQgQgDgGgFQgKgFAAgOQAAgYAYgKQAGgEAPgEIAWgHQAFgCAGgBQAFABADADQADADAAAGIABAKIACAKQAAAEgDAEQgEADgFAAQgGAAgDgEQgBgDgBgKIgbAIQgTAIABALIAGACQAaAFAOAIQASALABAYQAAATgRAKQgOAIgUAAQgPAAgOgGg");
	this.shape_79.setTransform(169.3,22.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FF0000").s().p("AgnAyQgSgOAAgaQgBgeAQgVQAPgWAbAAQATAAAMAGQAPAJAAARQAAALgNAKQgGAEgTAIIgsAVQAHAKAKAFQAJAFANgBQAHAAAMgDQANgDAFgGQAEgHAEAAQAEAAAEAEQADADAAADQgBAOgUAJQgTAIgQAAQgaAAgQgOgAgXgfQgKALgFAWIAkgQQAVgLAIgHQgJgKgSAAQgOAAgJALg");
	this.shape_80.setTransform(157.4,22.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FF0000").s().p("AgsA2IAAhRIAAgMIAAgMQAAgMAKAAQAMAAAAAUQAWgWAbAAQAJAAAFAHQAEAIABAOIAAAIQgCAPgKAAQgLAAAAgMIAAgIIAAgKQgSACgLAJQgKAHgHAQIAAA/QAAAMgLAAQgLAAABgMg");
	this.shape_81.setTransform(145.2,22.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FF0000").s().p("AgoBbQgPgDAAgJQAAgLAKAAIAOACQAKADAMgBQAWAAAIgWQAGgOAAgeQgGAMgJAGQgJAGgKAAQgVAAgNgPQgOgOAAgWQAAggASgTQATgUAgAAQAKAAAIADQAHACAEAHQANAAAAANQAAAJgDAOIgDAVIgDAnQAAAYgFAOQgFATgLAJQgOALgaAAQgQAAgKgCgAgVg6QgLAOAAAVQAAASAGAHQAHAJANAAQALAAALgNQAKgNABgLQADgNADgbIgKgFQgFgCgGAAQgVAAgMAPg");
	this.shape_82.setTransform(132.5,25.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FF0000").s().p("AgiAyQgQgRgBgbQgBgZAOgUQARgYAcAAQAYAAAMAVQAJASAAAYQgBAZgNASQgPAVgYAAQgTAAgOgOgAgUgXQgIANAAAQQAAARAJAKQAIAHAKAAQAMAAAIgIQAKgKACgRQABgsgaAAIgBAAQgQAAgJAQg");
	this.shape_83.setTransform(119.9,22.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FF0000").s().p("AgtA2IAAhRIAAgMIABgMQAAgMAKAAQALAAABAUQAWgWAaAAQAKAAAFAHQAFAIgBAOIAAAIQgBAPgLAAQgKAAAAgMIAAgIIAAgKQgTACgJAJQgLAHgHAQIAAA/QAAAMgMAAQgJAAgBgMg");
	this.shape_84.setTransform(108.4,22.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FF0000").s().p("AgxBaQgDgDAAgFIAAgjQAAgQACgfIADgwIAAgQQAAgMABgFQADgLAJACIAKgCIARAAQAVAAASAOQAVAQAAAXQAAAdgWAQQgUAPgaAAIgPgBIgBA+QAAAFgDADQgDADgEAAQgFAAgDgDgAgThGIgHAAIAAAWIgCAvIANABQASAAAOgJQAPgMAAgSQAAgNgOgKQgNgJgOAAIgKABg");
	this.shape_85.setTransform(96.2,19.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgoAyQgRgOgBgaQABgeAPgVQAQgWAaAAQATAAAMAGQAPAJAAARQAAALgNAKQgGAEgTAIIgrAVQAGAKAKAFQAKAFAMgBQAIAAAKgDQAPgDADgGQAEgHAFAAQAEAAAEAEQACADAAADQAAAOgUAJQgSAIgRAAQgaAAgRgOgAgYgfQgJALgFAWIAkgQQAUgLAKgHQgLgKgRAAQgOAAgKALg");
	this.shape_86.setTransform(76.3,22.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AAgBYQgDgJgCgSQgCgRAAgLIAAgJIAAgKQAAgUgLAAQgOAAgLAMQgGAHgLATQAAAtgDAIQgEAIgHAAQgEAAgEgDQgEgEAAgEIABgGIACgRIAAgSIAAhUIABgUIgBgLQgBgGAAgFQAAgFADgEQAEgCAFAAQAJgBACALQACALAAAJIgBAaIgBAaIAAAJQAKgMALgGQAKgHAMAAQAUAAAHANQAFAIABAVIABAWIACAYIAEAZIABADQAAAFgEADQgDADgFAAQgJAAgCgJg");
	this.shape_87.setTransform(62.7,19.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgIBWQgDgDAAgGIAAgFIABgFIgBgRIgBgSQABgQgDgeIgEgvIgKAAQgaAAgOgDQgKgDAAgJQAAgFADgEQAEgEAFABIATACIATABIAVAAIAVAAIAbABIAaABQAFAAAEAEQADADAAAFQAAAFgDAEQgEADgFAAIgagBIgbgBIgJAAQAAAQADAkQADAhAAATIABAMIABANQgBAIgCAFQgDAIgHAAQgDAAgFgDg");
	this.shape_88.setTransform(48.5,19.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ProgressiveFormDef, new cjs.Rectangle(24.5,0,418.7,108.4), null);


(lib.PresentProgressiveDef = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJAKQgFgEAAgGQAAgFAFgFQAEgDAFAAQAGAAAEADQAFAFgBAFQABAGgFAEQgEAEgGAAQgFAAgEgEg");
	this.shape.setTransform(308.9,99);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AggBBQgSgGAAgMQAAgFAEgDQADgEAFABQADgBAHAGQACADAKACIANABQAJAAAHgCQAMgEAAgHQgBgQgWgGIgLgCQgQgEgGgEQgKgGAAgNQAAgZAYgKQAGgEAPgEIAWgHQAFgCAFgBQAFABAEADQADADAAAFIABAKIACALQAAAFgEADQgCADgGABQgGgBgDgEQgCgDgBgJIgbAIQgRAHAAALIAGACQAaAEANAJQAUALgBAYQAAATgQAKQgOAHgUABQgPgBgOgFg");
	this.shape_1.setTransform(299.7,93);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AggBBQgSgGAAgMQAAgFAEgDQADgEAFABQADgBAHAGQACADAKACIANABQAJAAAHgCQAMgEAAgHQgBgQgWgGIgLgCQgQgEgGgEQgKgGAAgNQAAgZAYgKQAGgEAPgEIAWgHQAFgCAGgBQAEABAEADQADADAAAFIABAKIACALQAAAFgEADQgCADgGABQgGgBgDgEQgCgDgBgJIgbAIQgRAHAAALIAGACQAaAEANAJQATALAAAYQAAATgQAKQgOAHgUABQgPgBgOgFg");
	this.shape_2.setTransform(288,93);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgoAyQgRgOgBgbQABgdAPgUQAQgXAaAAQATAAAMAGQAPAJAAARQAAALgNAKQgGAEgTAIIgrAVQAGAKAKAFQAKAEALAAQAJAAAKgCQAPgEADgGQAEgHAFAAQAEAAAEADQACAEAAADQAAANgUAKQgSAIgSAAQgZAAgRgOgAgXgeQgKALgFAVIAkgQQAUgLAKgHQgLgKgRAAQgOAAgJAMg");
	this.shape_3.setTransform(276.1,93.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgtA2IAAhRIAAgMIABgMQAAgMAKAAQAMAAAAAUQAWgWAaAAQAKAAAFAHQAFAIgBAOIAAAIQAAAPgLAAQgLAAABgMIAAgIIgBgKQgSACgLAJQgKAHgHAQIAAA/QAAAMgMAAQgKAAAAgMg");
	this.shape_4.setTransform(263.9,93.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgoBbQgPgDAAgJQAAgLAKAAIAOACQAKACAMAAQAWAAAIgWQAGgOAAgeQgGAMgJAGQgJAGgKAAQgVAAgNgPQgOgOAAgWQAAggASgTQATgUAgAAQAKAAAIADQAHADAEAFQANAAAAAOQAAAIgDAOIgDAXIgDAmQAAAXgFAPQgFATgLAJQgOALgaAAQgQAAgKgCgAgVg6QgLAOAAAWQAAAQAGAIQAHAJANAAQALAAALgNQAKgMABgNQADgMADgbIgKgGQgFgBgGAAQgVAAgMAPg");
	this.shape_5.setTransform(251.2,96.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgiAyQgQgRgBgbQgBgZAOgUQARgYAcAAQAXAAANAVQAJASAAAYQgBAZgNASQgPAVgYAAQgTAAgOgOgAgUgXQgIANAAAQQAAARAJAKQAJAHAJAAQAMAAAIgIQAKgKABgRQACgsgaAAIgBAAQgQAAgJAQg");
	this.shape_6.setTransform(238.5,93.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgsA2IAAhRIAAgMIAAgMQAAgMAKAAQAMAAAAAUQAWgWAbAAQAJAAAFAHQAEAIABAOIAAAIQgBAPgMAAQgJAAgBgMIAAgIIAAgKQgTACgKAJQgKAHgHAQIAAA/QAAAMgLAAQgKAAAAgMg");
	this.shape_7.setTransform(227,93.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgtBfQgDgDAAgFIAAgvIAAguIgBguIgCgYQAAgJADgGQAEgGAGAAQAFAAADADQADADAAAFIgBADIAAAIQAKgHAJgEQAJgEAIAAQAYABALAVQAJARAAAcQAAAYgNAQQgPASgYgBQgKABgOgEIgBA4QAAAFgDADQgEADgFAAQgEAAgEgDgAgLg9QgFADgKAJQACAbAAAcQANAFALAAQAOAAAJgLQAGgJAAgOQAAgWgFgLQgFgKgLAAQgJAAgKAFg");
	this.shape_8.setTransform(214.6,96.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAdA5IgEgaIgBgZIAAgKIAAgMQAAgZgJAAQgNAAgLAQQgLAOgGAVIgBALIgBALIABALIABALQAAAFgDADQgEADgFAAQgFAAgDgDQgDgDAAgFIgBgLIgBgLIACggIACghIgBgMIAAgLQAAgFADgDQAEgDAEAAQALAAABAPIABAOQATgbAUAAQATAAAHARQAFALABAWIAAALIAAAKQAAAKACAQQADAPAAAJQAAAGgEADQgDADgFAAQgKAAgBgLg");
	this.shape_9.setTransform(194.9,93.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgLBVQgDgDAAgFIAAgWIgBgVIABgbIACgaQAAgGADgDQADgDAFAAQAEAAADADQAEADAAAGIgCAaIgBAbIABAVIAAAWQAAAFgDADQgDADgEAAQgGAAgDgDgAgHhAQgEgEAAgFQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAFgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_10.setTransform(185.2,90.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AggBBQgSgGAAgMQAAgFAEgDQADgEAFABQADgBAHAGQACADAKACIANABQAJAAAHgCQAMgEAAgHQgBgQgWgGIgLgCQgQgEgGgEQgKgGAAgNQAAgZAYgKQAGgEAPgEIAWgHQAFgCAFgBQAFABAEADQADADAAAFIABAKIACALQAAAFgEADQgCADgGABQgGgBgDgEQgCgDAAgJIgbAIQgSAHAAALIAGACQAaAEANAJQAUALgBAYQAAATgQAKQgOAHgUABQgPgBgOgFg");
	this.shape_11.setTransform(168.3,93);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgLBVQgDgDAAgFIAAgWIgBgVIABgbIACgaQAAgGADgDQADgDAFAAQAEAAADADQAEADAAAGIgCAaIgBAbIABAVIAAAWQAAAFgDADQgDADgEAAQgGAAgDgDgAgHhAQgEgEAAgFQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAFgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_12.setTransform(159.6,90.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAdA5IgEgaIgBgZIAAgKIAAgMQAAgZgJAAQgNAAgLAQQgLAOgGAVIgBALIgBALIABALIABALQAAAFgDADQgEADgFAAQgFAAgDgDQgDgDAAgFIgBgLIgBgLIACggIACghIgBgMIAAgLQAAgFADgDQAEgDAEAAQALAAABAPIABAOQATgbAUAAQATAAAHARQAFALABAWIAAALIAAAKQAAAKACAQQADAPAAAJQAAAGgEADQgDADgFAAQgKAAgBgLg");
	this.shape_13.setTransform(406.6,57.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgiAyQgQgRgBgbQgBgZAOgUQARgYAcAAQAXAAANAVQAJASAAAYQAAAZgNASQgQAVgYAAQgTAAgOgOgAgUgXQgIANAAAQQAAARAJAKQAIAHAKAAQAMAAAIgIQAKgKABgRQACgsgaAAIgBAAQgQAAgJAQg");
	this.shape_14.setTransform(393.6,58.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgLBVQgDgEAAgEIAAgWIgBgVIABgbIACgbQAAgFADgDQADgEAFABQAEgBADAEQAEADAAAFIgCAbIgBAbIABAVIAAAWQAAAEgDAEQgDADgEAAQgGAAgDgDgAgHhAQgEgEAAgFQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAFgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_15.setTransform(384.3,55.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgHBSQgDgCAAgFIAAgNIABgOIgDhDIgagDQgKgBAAgKQAAgFADgEQADgDAFAAIAZACIgBgQIAAgOQAAgGADgCQADgEAFAAQAKAAACARIAAALIAAAGIAAAIIAQgCQANAAADACQAHABAAAJQAAAFgDAEQgDADgFAAIgGAAIgGgBIgQADIADBDIAAAGIAAAGQAAAZgMAAQgEAAgEgDg");
	this.shape_16.setTransform(375,56.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AghAzQgQgPAAgZQAAgXAPgZQARgcAWAAQALAAAPAGQASAGAAAKQgBAEgDAEQgDADgEABQgDAAgCgCIgGgFQgGgFgQAAQgLAAgMAVQgKAUAAANQAAAQAKAIQAKAJAPAAQAGAAAJgEIANgHIAFgCQAEAAADADQAEAEAAAEQgBAJgRAIQgQAHgKAAQgYAAgQgPg");
	this.shape_17.setTransform(363.3,58.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAlA8QgFgFgCgEIgUAKQgJADgEAAQgcAAgMgQQgMgOAAgeQAAgcATgTQAUgVAaAAQAKAAANAGQAQAGAAAKQAAADgDACIgBAOIgBAaQAAAOACAIQABAGAGAQIADAFIAAADQAAAEgDADQgDADgEAAQgDAAgGgFgAgTgcQgNAOAAATQAAATAHAJQAGAKAOAAQAKABAIgFQAEgCAIgGQgEgfAAgPIABgLIACgNIgIgDIgFgBQgRAAgNAPg");
	this.shape_18.setTransform(350.9,58.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgnAyQgTgOABgaQAAgeAOgUQAQgXAbAAQATAAAMAGQAPAJAAARQAAALgNAKQgGAEgTAIIgrAVQAGAKAKAFQAJAFAMgBQAJAAAKgCQAOgEAEgGQAFgHAEAAQAEAAADADQADAEABADQAAAOgWAJQgRAIgSAAQgZAAgQgOgAgYgfQgJAMgEAVIAkgQQATgLAJgHQgKgKgRAAQgOAAgKALg");
	this.shape_19.setTransform(331.3,58.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAgBYQgDgJgCgSQgCgRAAgLIAAgJIAAgKQAAgVgLABQgOAAgLAMQgGAHgLATQAAAtgDAJQgEAHgHAAQgEAAgEgEQgEgDAAgEIABgGIACgRIAAgSIAAhUIABgUIgBgLQgBgGAAgFQAAgFADgDQAEgDAFAAQAJAAACAKQACALAAAJIgBAaIgBAaIAAAKQAKgNALgGQAKgHAMAAQAUAAAHAMQAFAJABAVIABAWIACAYIAEAZIABADQAAAFgEADQgDAEgFgBQgJAAgCgJg");
	this.shape_20.setTransform(317.7,54.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgHBSQgDgCAAgFIAAgNIABgOIgDhDIgagDQgKgBAAgKQAAgFADgEQADgDAFAAIAZACIgBgQIAAgOQAAgGADgCQADgEAFAAQAKAAACARIAAALIAAAGIAAAIIAQgCQANAAADACQAHABAAAJQAAAFgDAEQgDADgFAAIgGAAIgGgBIgQADIADBDIAAAGIAAAGQAAAZgMAAQgEAAgEgDg");
	this.shape_21.setTransform(304.9,56.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgoBbQgPgDAAgJQAAgLAKAAIAOACQAKACAMAAQAWAAAIgWQAGgOAAgeQgGAMgJAGQgJAGgKAAQgVAAgNgPQgOgOAAgWQAAggASgTQATgUAgAAQAKAAAIADQAHACAEAGQANAAAAAOQAAAIgDAOIgDAXIgDAmQAAAYgFAOQgFATgLAJQgOALgaAAQgQAAgKgCgAgVg6QgLAOAAAWQAAARAGAHQAHAJANAAQALAAALgNQAKgNABgMQADgMADgbIgKgGQgFgBgGAAQgVAAgMAPg");
	this.shape_22.setTransform(285.6,61.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAdA5IgEgaIgBgZIAAgKIAAgMQAAgZgJAAQgNAAgLAQQgLAOgGAVIgBALIgBALIABALIABALQAAAFgDADQgEADgFAAQgFAAgDgDQgDgDAAgFIgBgLIgBgLIACggIACghIgBgMIAAgLQAAgFADgDQAEgDAEAAQALAAABAPIABAOQATgbAUAAQATAAAHARQAFALABAWIAAALIAAAKQAAAKACAQQADAPAAAJQAAAGgEADQgDADgFAAQgKAAgBgLg");
	this.shape_23.setTransform(273.4,57.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgLBVQgDgEAAgEIAAgWIgBgVIABgbIACgbQAAgFADgDQADgEAFABQAEgBADAEQAEADAAAFIgCAbIgBAbIABAVIAAAWQAAAEgDAEQgDADgEAAQgGAAgDgDgAgHhAQgEgEAAgFQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAFgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_24.setTransform(263.7,55.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgHBSQgDgCAAgFIAAgNIABgOIgDhDIgagDQgKgBAAgKQAAgFADgEQADgDAFAAIAZACIgBgQIAAgOQAAgGADgCQADgEAFAAQAKAAACARIAAALIAAAGIAAAIIAQgCQANAAADACQAHABAAAJQAAAFgDAEQgDADgFAAIgGAAIgGgBIgQADIADBDIAAAGIAAAGQAAAZgMAAQgEAAgEgDg");
	this.shape_25.setTransform(254.4,56.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAlA8QgFgFgCgEIgUAKQgJADgEAAQgcAAgMgQQgMgOAAgeQAAgcATgTQAUgVAaAAQAKAAANAGQAQAGAAAKQAAADgDACIgBAOIgBAaQAAAOACAIQABAGAGAQIADAFIAAADQAAAEgDADQgDADgEAAQgDAAgGgFgAgTgcQgNAOAAATQAAATAHAJQAGAKAOAAQAKABAIgFQAEgCAIgGQgEgfAAgPIABgLIACgNIgIgDIgFgBQgRAAgNAPg");
	this.shape_26.setTransform(242.7,58.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AghAzQgQgPAAgZQAAgXAPgZQARgcAVAAQAMAAAPAGQARAGABAKQAAAEgDAEQgDADgFABQgEAAgCgCIgEgFQgIgFgQAAQgKAAgMAVQgLAUAAANQAAAQALAIQAKAJAOAAQAHAAAJgEIANgHIAFgCQAEAAAEADQACAEAAAEQAAAJgSAIQgPAHgLAAQgXAAgQgPg");
	this.shape_27.setTransform(230.4,58.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgLBVQgDgEAAgEIAAgWIgBgVIABgbIACgbQAAgFADgDQADgEAFABQAEgBADAEQAEADAAAFIgCAbIgBAbIABAVIAAAWQAAAEgDAEQgDADgEAAQgGAAgDgDgAgHhAQgEgEAAgFQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAFgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_28.setTransform(221,55.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgpBQQgQgRAAgZQAAggAQgSQAQgSAaAAQAOAAAHAEIALAIQACgyACgRQACgKAIAAQAMAAAAALQgBARgFA3IAAAiQAAAnADAUIAAACQAAAFgDADQgDADgFAAQgHAAgEgKQgIAGgJADQgJADgJAAQgYAAgQgQgAgbACQgKAMABAXQAAAPAKALQALALAOAAQAJAAAHgEQAEgCAJgHIADgEIAAgUIAAgOIAAgOQgEgJgIgEQgHgFgLAAQgSAAgKALg");
	this.shape_29.setTransform(210.3,54.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAdA5IgEgaIgBgZIAAgKIAAgMQAAgZgJAAQgNAAgLAQQgLAOgGAVIgBALIgBALIABALIABALQAAAFgDADQgEADgFAAQgFAAgDgDQgDgDAAgFIgBgLIgBgLIACggIACghIgBgMIAAgLQAAgFADgDQAEgDAEAAQALAAABAPIABAOQATgbAUAAQATAAAHARQAFALABAWIAAALIAAAKQAAAKACAQQADAPAAAJQAAAGgEADQgDADgFAAQgKAAgBgLg");
	this.shape_30.setTransform(197.3,57.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgLBVQgDgEAAgEIAAgWIgBgVIABgbIACgbQAAgFADgDQADgEAFABQAEgBADAEQAEADAAAFIgCAbIgBAbIABAVIAAAWQAAAEgDAEQgDADgEAAQgGAAgDgDgAgHhAQgEgEAAgFQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAFgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_31.setTransform(187.6,55.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgjBYQgEAFgFAAQgEAAgDgDQgEgDAAgFIAAgJIAAgJIAAglIgBgkIAAggIAAghQAAgHADgGQAFgHAHAAQAIAAAAAKIAAAFIgBAFIgBAaIAAAeQAKgHAKgEQAJgDAHAAQAZAAAQATQAPARAAAbQAAAagRATQgSATgZAAQgRAAgPgHgAgSgFIgRALIAAAUIAAASIAAAUIAQAGQAHACAJAAQAQAAALgMQALgLAAgSQAAgSgJgLQgJgMgQAAQgJAAgKAFg");
	this.shape_32.setTransform(170,54.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgtA2IAAhRIAAgMIABgMQAAgMAKAAQAMAAAAAUQAWgWAaAAQAKAAAFAHQAFAIgBAOIAAAIQAAAPgLAAQgLAAABgMIAAgIIgBgKQgSACgLAJQgKAHgHAQIAAA/QAAAMgMAAQgKAAAAgMg");
	this.shape_33.setTransform(157.2,58.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgnAyQgTgOABgaQgBgeAPgUQARgXAaAAQATAAAMAGQAPAJAAARQAAALgNAKQgGAEgTAIIgsAVQAHAKAKAFQAJAFANgBQAHAAAMgCQANgEAFgGQAEgHAEAAQAEAAADADQAEAEAAADQAAAOgWAJQgRAIgRAAQgaAAgQgOgAgXgfQgKAMgFAVIAkgQQAVgLAIgHQgJgKgSAAQgOAAgJALg");
	this.shape_34.setTransform(144.7,58.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgNA2IgRgwIgVg1IgBgEQAAgGADgDQAEgDAFAAQAHAAADAHIAeBRQAHgTAOgjIAKgaQAEgIAGAAQAFAAADAEQAEADAAAFQAAAEgTAuIgYA2QAAALgKAAQgIAAgFgKg");
	this.shape_35.setTransform(132.3,58);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgnAyQgTgOABgaQgBgeAPgUQARgXAaAAQATAAAMAGQAPAJAAARQAAALgNAKQgGAEgTAIIgsAVQAHAKAKAFQAJAFANgBQAHAAAMgCQANgEAFgGQAEgHAEAAQAEAAADADQAEAEAAADQAAAOgWAJQgRAIgRAAQgaAAgQgOgAgXgfQgKAMgEAVIAjgQQAVgLAIgHQgJgKgSAAQgOAAgJALg");
	this.shape_36.setTransform(112.8,58.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAgBYQgDgJgCgSQgCgRAAgLIAAgJIAAgKQAAgVgLABQgOAAgLAMQgGAHgLATQAAAtgDAJQgEAHgHAAQgEAAgEgEQgEgDAAgEIABgGIACgRIAAgSIAAhUIABgUIgBgLQgBgGAAgFQAAgFADgDQAEgDAFAAQAJAAACAKQACALAAAJIgBAaIgBAaIAAAKQAKgNALgGQAKgHAMAAQAUAAAHAMQAFAJABAVIABAWIACAYIAEAZIABADQAAAFgEADQgDAEgFgBQgJAAgCgJg");
	this.shape_37.setTransform(99.2,54.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgHBSQgDgCAAgFIAAgNIABgOIgDhDIgagDQgKgBAAgKQAAgFADgEQADgDAFAAIAZACIgBgQIAAgOQAAgGADgCQADgEAFAAQAKAAACARIAAALIAAAGIAAAIIAQgCQANAAADACQAHABAAAJQAAAFgDAEQgDADgFAAIgGAAIgGgBIgQADIADBDIAAAGIAAAGQAAAZgMAAQgEAAgEgDg");
	this.shape_38.setTransform(86.4,56.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AggBBQgSgGAAgMQAAgFADgDQAEgDAFAAQAEAAAFAFQADACAKACIANACQAJAAAHgCQAMgEgBgHQABgQgXgGIgLgCQgPgEgHgFQgJgFAAgNQAAgZAWgKQAIgDAOgFIAWgHQAFgCAGgBQAFABADADQADADAAAFIABALIACAKQAAAFgDADQgDADgFAAQgHAAgCgEQgCgDgBgKIgbAJQgTAHAAALIAHACQAaAFAOAIQASALABAYQAAATgRAKQgOAHgUABQgPAAgOgGg");
	this.shape_39.setTransform(67.5,57.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgLBVQgDgEAAgEIAAgWIgBgVIABgbIACgbQAAgFADgDQADgEAFABQAEgBADAEQAEADAAAFIgCAbIgBAbIABAVIAAAWQAAAEgDAEQgDADgEAAQgGAAgDgDgAgHhAQgEgEAAgFQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAFgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_40.setTransform(58.8,55.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF0000").s().p("AgzBaQgLgKAAgmIABgQIAAgTIgBgGQAAgDACgDQADgiAAgQIgBgNIgCgNQAAgOAMAAQAFAAAEAEQAOgEAMgCQANgCAKAAQAcAAARAHQAIADAAAIQAAAFgDAEQgEAEgFAAIgDgBQgUgGgSAAQgKAAgKACQgMACgNADIABANIgCAsIAzgFIAbgCQAFAAAEADQADAEAAAFQAAAKgKABIgcADIg1AFIgBAPIAAAOQAAAaADAFQADADAQAAIAVAAIAWgBIAGgBIAHAAQANAAAAAMQAAAKgKACQgLACgkAAQgkAAgLgKg");
	this.shape_41.setTransform(440.1,19.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF0000").s().p("AguBRQgWgKgBgRQAAgFAEgDQADgEAFAAQAGAAAEAHQAGAJAFADQAKAHATAAQARAAAQgIQAUgKAAgSQAAgPgRgJQgOgHgUgBQgTAAgNgHQgQgJAAgSQAAgVAXgRQAXgQAXAAQALAAAPAEQATAFAAAIQAAAKgLAAIgQgDQgMgCgGAAQgSAAgMAJQgOAJAAANQAAAKASAEQAGABASABQAbACAPAPQAOANAAATQAAAcgaARQgXAOgcAAQgWAAgRgIg");
	this.shape_42.setTransform(424,20.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF0000").s().p("AhOBbQgDgDgBgFIABgPIABgPIAAgWIABgWIgBgWIAAgXIgBgWIgCgWQABgGAEgEQAEgFAHAAQAFAAAKAOQAdAsAXAdQAbAhAhAfIAAgPIAAgOQAAgzgEgeIgDgMQgDgIABgFQAAgOAMAAQAUAAABBNIgBAlIgBAnIgCATQgBAMgLAAQgHAAgIgJQgwgtg8hUIgBAbIAAAaIAAAdIABAdQgBAggMAAQgGAAgEgFg");
	this.shape_43.setTransform(406.2,19.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF0000").s().p("AgzBaQgLgKAAgmIABgQIAAgTIgBgGQAAgDACgDQADgiAAgQIgBgNIgCgNQAAgOAMAAQAFAAAEAEQAOgEAMgCQANgCAKAAQAcAAARAHQAIADAAAIQAAAFgDAEQgEAEgFAAIgDgBQgUgGgSAAQgKAAgKACQgMACgNADIABANIgCAsIAzgFIAbgCQAFAAAEADQADAEAAAFQAAAKgKABIgcADIg1AFIgBAPIAAAOQAAAaADAFQADADAQAAIAVAAIAWgBIAGgBIAHAAQANAAAAAMQAAAKgKACQgLACgkAAQgkAAgLgKg");
	this.shape_44.setTransform(389.3,19.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF0000").s().p("AgIBWQgDgDAAgGIAAgFIABgFIgBgRIgBgSQAAgQgCgeIgEgvIgKAAQgaAAgOgDQgKgDAAgJQAAgFADgEQAEgEAFABIATACIATABIAVAAIAVAAIAbABIAaABQAFAAAEAEQADADAAAFQAAAFgDAEQgEADgFAAIgagBIgbgBIgIAAQgBAQADAkQADAhAAATIABAMIABANQgBAIgCAFQgDAIgHAAQgDAAgFgDg");
	this.shape_45.setTransform(374.3,19.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FF0000").s().p("AgzBaQgLgKAAgmIABgQIAAgTIgBgGQAAgDACgDQADgiAAgQIgBgNIgCgNQAAgOAMAAQAFAAAEAEQAOgEAMgCQANgCAKAAQAcAAARAHQAIADAAAIQAAAFgDAEQgEAEgFAAIgDgBQgUgGgSAAQgKAAgKACQgMACgNADIABANIgCAsIAzgFIAbgCQAFAAAEADQADAEAAAFQAAAKgKABIgcADIg1AFIgBAPIAAAOQAAAaADAFQADADAQAAIAVAAIAWgBIAGgBIAHAAQANAAAAAMQAAAKgKACQgLACgkAAQgkAAgLgKg");
	this.shape_46.setTransform(350.8,19.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF0000").s().p("AgVBVQgOgjgRhCIgJggQgHgZAAgHQAAgFADgEQAEgDAFAAQAJAAACAKIAFAUIALAoQALAqALAgIAAgCIAfhUIAKgdQAGgRAIgJQAEgFAFAAQAFAAAEAEQADAEAAAFQAAADgCAEQgHAKgFAMIgJAaIgfBUQgGAPgHAPQgDAHgHAAQgJAAgEgKg");
	this.shape_47.setTransform(335.9,19.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FF0000").s().p("AgyBWQgEgDAAgFQAAgGAEgDQACgDAGAAIAYgDQACgKAAgMIgBgTIgBgUQABgaADgpIgQABIgPAAQgFAAgEgDQgDgEAAgFQABgLAKAAIAkgBQAWAAAkAEQAKACAAALQAAAGgFADQgDACgEABIgTgCIgTgDQgDAiAAAfIAAAUIABAUIgBAUIAlAAQAFAAADAEQAEACAAAGQAAAFgEAEQgDADgFAAIgTAAIgUAAIgWACIgXADQgGgBgCgDg");
	this.shape_48.setTransform(320.9,19.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF0000").s().p("AguBRQgWgKgBgRQAAgFAEgDQADgEAFAAQAGAAAEAHQAGAJAFADQAKAHATAAQARAAAQgIQAUgKAAgSQAAgPgRgJQgOgHgUgBQgTAAgNgHQgQgJAAgSQAAgVAXgRQAXgQAXAAQALAAAPAEQATAFAAAIQAAAKgLAAIgQgDQgMgCgGAAQgSAAgMAJQgOAJAAANQAAAKASAEQAGABASABQAbACAPAPQAOANAAATQAAAcgaARQgXAOgcAAQgWAAgRgIg");
	this.shape_49.setTransform(306.1,20.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FF0000").s().p("AguBRQgWgKgBgRQAAgFAEgDQADgEAFAAQAGAAAEAHQAGAJAFADQAKAHATAAQARAAAQgIQAUgKAAgSQAAgPgRgJQgOgHgUgBQgTAAgNgHQgQgJAAgSQAAgVAXgRQAXgQAXAAQALAAAPAEQATAFAAAIQAAAKgLAAIgQgDQgMgCgGAAQgSAAgMAJQgOAJAAANQAAAKASAEQAGABASABQAbACAPAPQAOANAAATQAAAcgaARQgXAOgcAAQgWAAgRgIg");
	this.shape_50.setTransform(289.4,20.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF0000").s().p("AgzBaQgLgKAAgmIABgQIAAgTIgBgGQAAgDACgDQADgiAAgQIgBgNIgCgNQAAgOAMAAQAFAAAEAEQAOgEAMgCQANgCAKAAQAcAAARAHQAIADAAAIQAAAFgDAEQgEAEgFAAIgDgBQgUgGgSAAQgKAAgKACQgMACgNADIABANIgCAsIAzgFIAbgCQAFAAAEADQADAEAAAFQAAAKgKABIgcADIg1AFIgBAPIAAAOQAAAaADAFQADADAQAAIAVAAIAWgBIAGgBIAHAAQANAAAAAMQAAAKgKACQgLACgkAAQgkAAgLgKg");
	this.shape_51.setTransform(273.8,19.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF0000").s().p("Ag7BZQgDgEAAgFIgBgbIgBgcQAAgLACgUQADgVAAgLIgBgSIgCgRQAAgHAEgFQAFgGAHAAIAdACQAQACAKAGQAvAaAAAkQAAASgQAMQgNALgTAGQAkAUASAVQADAEAAAEQAAAFgDAEQgEAEgFAAQgEAAgEgEQgngngugNIABAXIAAAXQAAAFgDAEQgEADgFAAQgFAAgDgDgAglg0IABAPIgBAXIgDAWIAFAAIAGAAQAdAAAOgIQAHgCAFgGQAHgHAAgEQAAgQgTgOQgQgNgSgCIgSgCg");
	this.shape_52.setTransform(258.7,19.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF0000").s().p("Ag8BQQgOgQAAghQAAgeAOgfQAPggAWgUQAPgNAQAAQALAAARAHQAVAIAAAKQAAAFgDAEQgEAEgFAAQgCAAgFgDQgSgLgMAAQgIAAgJAJIgOARQgbAkAAAoQAAAWAGAKQAIAJAUAAQAUAAAPgNQAQgOAHgaQghABgWALIgFABQgFAAgEgDQgDgEAAgFQAAgHAGgDQAZgOA+gBQAFAAADAEQAEACAAAFQAAAIgHADQgHAkgXAVQgYAWgeAAQgdAAgPgQg");
	this.shape_53.setTransform(242.9,19.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FF0000").s().p("Ag7BJQgYgVAAgiQAAgnAYghQAbglAnAAQAmAAAUARQATASAAAnQAAAogWAgQgaAlgnAAQggAAgYgTgAgpgnQgSAbAAAeQAAAXARAOQAQANAXAAQAcAAASgcQARgaAAgfQAAgcgMgLQgNgLgcAAQgcAAgUAcg");
	this.shape_54.setTransform(225.1,19.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF0000").s().p("Ag7BZQgDgEAAgFIgBgbIgBgcQAAgLACgUQADgVAAgLIgBgSIgCgRQAAgHAEgFQAFgGAHAAIAdACQAQACAKAGQAvAaAAAkQAAASgQAMQgNALgTAGQAkAUASAVQADAEAAAEQAAAFgDAEQgEAEgFAAQgEAAgEgEQgngngugNIABAXIAAAXQAAAFgDAEQgEADgFAAQgFAAgDgDgAglg0IABAPIgBAXIgDAWIAFAAIAGAAQAdAAAOgIQAHgCAFgGQAHgHAAgEQAAgQgTgOQgQgNgSgCIgSgCg");
	this.shape_55.setTransform(208.1,19.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FF0000").s().p("AgxBaQgDgDAAgFIAAgjQAAgQACgfIADgwIAAgQQAAgMABgFQADgLAJACIAKgCIARAAQAVAAASAOQAVAQAAAXQAAAdgWAQQgUAPgaAAIgPgBIgBA+QAAAFgDADQgDADgEAAQgFAAgDgDgAgThGIgHAAIAAAWIgCAvIANABQASAAAOgJQAPgMAAgSQAAgNgOgKQgNgJgOAAIgKABg");
	this.shape_56.setTransform(194.3,19.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FF0000").s().p("AgIBWQgDgDAAgGIAAgFIABgFIgBgRIgBgSQAAgQgCgeIgEgvIgKAAQgaAAgOgDQgKgDAAgJQAAgFADgEQAEgEAFABIATACIATABIAVAAIAVAAIAbABIAaABQAFAAAEAEQADADAAAFQAAAFgDAEQgEADgFAAIgagBIgbgBIgJAAQAAAQADAkQADAhAAATIABAMIABANQgBAIgCAFQgDAIgHAAQgDAAgFgDg");
	this.shape_57.setTransform(173.6,19.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FF0000").s().p("AhOBbQgDgDAAgFIABgPIAAgPIABgWIAAgWIAAgWIgBgXIgBgWIgCgWQAAgGAFgEQAFgFAFAAQAHAAAJAOQAdAsAXAdQAbAhAhAfIAAgPIAAgOQAAgzgEgeIgDgMQgDgIAAgFQAAgOANAAQAVAAgBBNIAAAlIAAAnIgCATQgCAMgLAAQgHAAgIgJQgwgtg9hUIAAAbIgBAaIABAdIAAAdQAAAggMAAQgGAAgEgFg");
	this.shape_58.setTransform(155,19.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF0000").s().p("AgzBaQgLgKAAgmIABgQIAAgTIgBgGQAAgDACgDQADgiAAgQIgBgNIgCgNQAAgOAMAAQAFAAAEAEQAOgEAMgCQANgCAKAAQAcAAARAHQAIADAAAIQAAAFgDAEQgEAEgFAAIgDgBQgUgGgSAAQgKAAgKACQgMACgNADIABANIgCAsIAzgFIAbgCQAFAAAEADQADAEAAAFQAAAKgKABIgcADIg1AFIgBAPIAAAOQAAAaADAFQADADAQAAIAVAAIAWgBIAGgBIAHAAQANAAAAAMQAAAKgKACQgLACgkAAQgkAAgLgKg");
	this.shape_59.setTransform(138.1,19.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FF0000").s().p("AguBRQgWgKgBgRQAAgFAEgDQADgEAFAAQAGAAAEAHQAGAJAFADQAKAHATAAQARAAAQgIQAUgKAAgSQAAgPgRgJQgOgHgUgBQgTAAgNgHQgQgJAAgSQAAgVAXgRQAXgQAXAAQALAAAPAEQATAFAAAIQAAAKgLAAIgQgDQgMgCgGAAQgSAAgMAJQgOAJAAANQAAAKASAEQAGABASABQAbACAPAPQAOANAAATQAAAcgaARQgXAOgcAAQgWAAgRgIg");
	this.shape_60.setTransform(122.1,20.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FF0000").s().p("AgzBaQgLgKAAgmIABgQIAAgTIgBgGQAAgDACgDQADgiAAgQIgBgNIgCgNQAAgOAMAAQAFAAAEAEQAOgEAMgCQANgCAKAAQAcAAARAHQAIADAAAIQAAAFgDAEQgEAEgFAAIgDgBQgUgGgSAAQgKAAgKACQgMACgNADIABANIgCAsIAzgFIAbgCQAFAAAEADQADAEAAAFQAAAKgKABIgcADIg1AFIgBAPIAAAOQAAAaADAFQADADAQAAIAVAAIAWgBIAGgBIAHAAQANAAAAAMQAAAKgKACQgLACgkAAQgkAAgLgKg");
	this.shape_61.setTransform(106.5,19.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FF0000").s().p("Ag7BZQgDgEAAgFIgBgbIgBgcQAAgLACgUQADgVAAgLIgBgSIgCgRQAAgHAEgFQAFgGAHAAIAdACQAQACAKAGQAvAaAAAkQAAASgQAMQgNALgTAGQAkAUASAVQADAEAAAEQAAAFgDAEQgEAEgFAAQgEAAgEgEQgngngugNIABAXIAAAXQAAAFgDAEQgEADgFAAQgFAAgDgDgAglg0IABAPIgBAXIgDAWIAFAAIAGAAQAdAAAOgIQAHgCAFgGQAHgHAAgEQAAgQgTgOQgQgNgSgCIgSgCg");
	this.shape_62.setTransform(91.3,19.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF0000").s().p("AgxBaQgDgDAAgFIAAgjQAAgQACgfIADgwIAAgQQAAgMABgFQADgLAJACIAKgCIARAAQAVAAASAOQAVAQAAAXQAAAdgWAQQgUAPgaAAIgPgBIgBA+QAAAFgDADQgDADgEAAQgFAAgDgDgAgThGIgHAAIAAAWIgCAvIANABQASAAAOgJQAPgMAAgSQAAgNgOgKQgNgJgOAAIgKABg");
	this.shape_63.setTransform(77.5,19.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgoAyQgSgOAAgaQAAgeAPgVQAQgWAbAAQATAAAMAGQAPAJAAARQAAALgNAKQgGAEgTAIIgrAVQAGAKAKAFQAJAFAMgBQAJAAAKgDQAOgDAEgGQAEgHAFAAQAEAAADAEQADADAAADQABAOgWAJQgSAIgRAAQgZAAgRgOgAgYgfQgJALgEAWIAkgQQATgLAJgHQgKgKgRAAQgOAAgKALg");
	this.shape_64.setTransform(57.6,22.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAgBYQgDgJgCgSQgCgRAAgLIAAgJIAAgKQAAgUgLAAQgOAAgLAMQgGAHgLATQAAAtgDAIQgEAIgHAAQgEAAgEgDQgEgEAAgEIABgGIACgRIAAgSIAAhUIABgUIgBgLQgBgGAAgFQAAgFADgEQAEgCAFAAQAJgBACALQACALAAAJIgBAaIgBAaIAAAJQAKgMALgGQAKgHAMAAQAUAAAHANQAFAIABAVIABAWIACAYIAEAZIABADQAAAFgEADQgDADgFAAQgJAAgCgJg");
	this.shape_65.setTransform(44,19.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgHBWQgEgDAAgGIAAgFIABgFIgBgRIgBgSQAAgQgCgeIgDgvIgLAAQgaAAgOgDQgKgDAAgJQAAgFADgEQADgEAGABIATACIATABIAVAAIAUAAIAbABIAbABQAFAAADAEQAEADAAAFQAAAFgEAEQgDADgFAAIgbgBIgbgBIgIAAQAAAQAEAkQACAhAAATIABAMIAAANQAAAIgCAFQgDAIgHAAQgDAAgEgDg");
	this.shape_66.setTransform(29.8,19.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.PresentProgressiveDef, new cjs.Rectangle(18.5,0,430.8,108.4), null);


(lib.FormulaProgressive_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AguBTQgLgKAAgiIABgPIAAgSIgBgFQAAgDACgDIACguIgBgLIgBgMQAAgNALAAQAFAAADAEQANgEALgCQAMgBAJAAQAaAAAPAGQAIADAAAHQAAAEgDAEQgDADgFABIgDgBQgSgFgRgBQgJAAgKACIgWAFIABALIgCAqIAugFIAagCQAEAAAEADQADADAAAFQAAAIgKACIgaACIgwAEIgBAPIAAANQAAAYADADQADAEAOAAIATAAIAUgBIAHAAIAGgCQALAAAAAMQAAAJgJACQgKABghAAQghAAgJgIg");
	this.shape.setTransform(382.7,50.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgtBUQgHgEAAgMIACgkQADgwAAg8QAAgEADgEQADgDAFAAQAEAAADADQADAEAAAEQAAA9gCAxIgCAQIgBAQQAdAAApgNIAEgBQAEAAADAEQADADAAAEQAAAHgHADQgMAGgaAFQgXAEgPAAQgLAAgEgEg");
	this.shape_1.setTransform(369.8,51.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgtBTQgDgDAAgEIAAggIACgsQADgeAAgOIAAgPQAAgKABgFQADgKAIACIAJgCIAQgBQATAAARAOQATAPAAAVQAAAagUAPQgTAOgYAAIgNgBIgBA5QAAAEgDADQgCADgFAAQgEAAgDgDgAgRhAIgGABIAAAUIgDAqIAMABQARAAANgIQANgKAAgRQAAgMgNgJQgMgIgNAAIgIAAg");
	this.shape_2.setTransform(357.9,50.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgvBPQgCgDAAgFQAAgEACgEQADgDAFAAQAHAAAQgCIABgUIAAgSIgBgSQAAgYADglIgOAAIgOABQgEAAgEgDQgDgEAAgEQAAgKAKgBIAggBQAVAAAgAEQAKACAAAKQAAAFgEADQgDACgEAAIgSgBIgRgCQgCAfgBAbIABATIAAATIAAASIAiAAQAEAAAEADQACADAAAFQAAAEgCADQgEAEgEAAIgSAAIgSAAIgVACIgVACQgFAAgDgDg");
	this.shape_3.setTransform(346.1,51.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgsBCQgPgQAAgXQAAgjAfgnQAZggAZABIAKAAIAHACQAEgGAGAAQAHAAACAJQACAJAAANQAAAFgCADQgDAEgGAAQgHAAgDgIQgDgHgDgCQgCgBgJAAQgPAAgSAYQgaAgAAAcQAAAOAJAJQAJALANAAQAKAAALgFIATgOQAGgEADAAQAFAAADADQADAEAAAEQAAAFgEAEQgcAZgcAAQgWAAgQgRg");
	this.shape_4.setTransform(333.6,50.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AguBPQgEgDAAgFQAAgEAEgEQADgDAEAAQAHAAAQgCIABgUIgBgSIAAgSQAAgYADglIgOAAIgOABQgFAAgDgDQgDgEAAgEQAAgKAKgBIAhgBQAUAAAhAEQAJACAAAKQAAAFgEADQgDACgEAAIgRgBIgSgCQgDAfAAAbIABATIABATIgBASIAhAAQAFAAADADQADADAAAFQAAAEgDADQgDAEgFAAIgSAAIgSAAIgTACIgWACQgEAAgDgDg");
	this.shape_5.setTransform(320.8,51.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgHBPQgDgDAAgFIAAgFIABgFIgBgQIAAgPQAAgQgDgbQgDgeAAgNIgKAAQgXAAgOgDQgIgCAAgJQAAgEADgEQADgDAFAAIARACIARABIAUAAIASAAIAZABIAZABQAEAAADADQADADAAAFQAAAFgDADQgDADgEAAIgZgBIgYgBIgIAAIADAwQACAeAAARIABALIABAMQAAAHgDAGQgDAHgGAAQgDAAgEgDg");
	this.shape_6.setTransform(308.2,50.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("Ag2BRQgDgDAAgFIgBgZIgBgZIACgdQADgTAAgKIgBgQIgBgQQAAgGADgFQAEgGAHABIAaACQAPACAJAFQAsAXAAAhQAAARgPALQgMAKgSAGQAhASARATQADAEAAAEQAAAEgEAEQgDADgEAAQgEAAgEgEQgjgjgrgMIABAVIAAAVQAAAFgDADQgDAEgEAAQgFAAgDgEgAgigvIABANIgBAVIgCAUIAEAAIAFABQAbAAANgIQAGgCAFgFQAGgGAAgFQAAgPgRgMQgPgMgRgCIgQgBg");
	this.shape_7.setTransform(293.1,50.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AAmA4IgIgiIgcAFIgbAHIgTApQgDAFgGAAQgFAAgDgCQgEgEAAgFQAAgEARgiQgCgEAAgDQAAgJAKgCQAMgWAUgeQAYgpAGAAQAIAAADAMIAHAkIARBKIAGARQADAJAAACQAAAFgDADQgEADgEAAQgKAAgHgZgAgNAIQANgEAZgEIgIgog");
	this.shape_8.setTransform(277.8,51.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgtBTQgDgDAAgEIAAggIACgsQADgeAAgOIAAgPQAAgKABgFQADgKAIACIAJgCIAQgBQATAAARAOQATAPAAAVQAAAagUAPQgTAOgYAAIgNgBIgBA5QAAAEgDADQgCADgFAAQgEAAgDgDgAgRhAIgGABIAAAUIgDAqIAMABQARAAANgIQANgKAAgRQAAgMgNgJQgMgIgNAAIgIAAg");
	this.shape_9.setTransform(264.3,50.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgHBPQgDgDAAgFIAAgFIABgFIgBgQIAAgPQAAgQgDgbQgDgeAAgNIgKAAQgXAAgOgDQgIgCAAgJQAAgEADgEQADgDAFAAIARACIARABIAUAAIASAAIAZABIAZABQAEAAADADQADADAAAFQAAAFgDADQgDADgEAAIgZgBIgYgBIgIAAIADAwQACAeAAARIABALIABAMQAAAHgDAGQgDAHgGAAQgDAAgEgDg");
	this.shape_10.setTransform(245.4,50.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AhHBTQgEgDABgEIABgOIAAgNIAAgVIABgUIgBgTIAAgWIgBgVIgBgTQgBgFAFgEQAEgEAFgBQAHAAAIANQAaAoAVAaQAZAfAeAdIAAgOIAAgNQAAgvgDgbIgDgMQgDgHAAgFQAAgMAMAAQASAAABBGIAAAiIgBAkIgCARQgCALgJAAQgGAAgIgHQgsgqg4hNIAAAYIgBAYIABAbIAAAbQABAdgMAAQgGAAgDgFg");
	this.shape_11.setTransform(228.3,51);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AguBTQgLgKAAgiIABgPIAAgSIgBgFQAAgDACgDIACguIgBgLIgBgMQAAgNALAAQAFAAADAEQANgEALgCQAMgBAJAAQAaAAAPAGQAIADAAAHQAAAEgDAEQgDADgFABIgDgBQgSgFgRgBQgJAAgKACIgWAFIABALIgCAqIAugFIAagCQAEAAAEADQADADAAAFQAAAIgKACIgaACIgwAEIgBAPIAAANQAAAYADADQADAEAOAAIATAAIAUgBIAHAAIAGgCQALAAAAAMQAAAJgJACQgKABghAAQghAAgJgIg");
	this.shape_12.setTransform(212.9,50.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AgrBKQgUgJAAgQQAAgFADgCQADgDAFAAQAFAAAEAGQAGAIAEADQAJAGASAAQAPAAAOgHQATgKAAgQQAAgOgQgHQgNgHgSgBQgRAAgMgGQgPgJAAgQQAAgTAWgQQAVgPAVAAQAKAAANAEQASAEAAAIQAAAJgKAAIgPgCQgLgDgGAAQgQABgLAIQgMAIAAAMQAAAJAQADQAGACAQABQAYACAOANQANAMAAASQAAAZgYAQQgUANgbAAQgTAAgRgIg");
	this.shape_13.setTransform(198.2,51.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AguBTQgLgKAAgiIABgPIAAgSIgBgFQAAgDACgDIACguIgBgLIgBgMQAAgNALAAQAFAAADAEQANgEALgCQAMgBAJAAQAaAAAPAGQAIADAAAHQAAAEgDAEQgDADgFABIgDgBQgSgFgRgBQgJAAgKACIgWAFIABALIgCAqIAugFIAagCQAEAAAEADQADADAAAFQAAAIgKACIgaACIgwAEIgBAPIAAANQAAAYADADQADAEAOAAIATAAIAUgBIAHAAIAGgCQALAAAAAMQAAAJgJACQgKABghAAQghAAgJgIg");
	this.shape_14.setTransform(183.9,50.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("Ag2BRQgDgDAAgFIgBgZIgBgZIACgdQADgTAAgKIgBgQIgBgQQAAgGADgFQAEgGAHABIAaACQAPACAJAFQAsAXAAAhQAAARgPALQgMAKgSAGQAhASARATQADAEAAAEQAAAEgEAEQgDADgEAAQgEAAgEgEQgjgjgrgMIABAVIAAAVQAAAFgDADQgDAEgEAAQgFAAgDgEgAgigvIABANIgBAVIgCAUIAEAAIAFABQAbAAANgIQAGgCAFgFQAGgGAAgFQAAgPgRgMQgPgMgRgCIgQgBg");
	this.shape_15.setTransform(170,50.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AgtBTQgDgDAAgEIAAggIACgsQADgeAAgOIAAgPQAAgKABgFQADgKAIACIAJgCIAQgBQATAAARAOQATAPAAAVQAAAagUAPQgTAOgYAAIgNgBIgBA5QAAAEgDADQgCADgFAAQgEAAgDgDgAgRhAIgGABIAAAUIgDAqIAMABQARAAANgIQANgKAAgRQAAgMgNgJQgMgIgNAAIgIAAg");
	this.shape_16.setTransform(157.3,50.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgkAvQgQgOAAgYQAAgbANgTQAPgVAYAAQARAAAMAHQANAHAAAPQAAALgMAJQgFAEgSAHIgoATQAGAJAJAFQAJAEALAAQAIAAAKgDQAMgDAEgGQADgGAEAAQAFAAACADQADADAAAEQAAAMgTAIQgQAIgQAAQgXAAgPgMgAgVgcQgKAKgDAUIAggPQATgKAIgHQgJgIgQAAQgNAAgIAKg");
	this.shape_17.setTransform(139.1,53.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAdBRQgCgJgCgQQgCgPAAgKIAAgJIAAgIQAAgUgKAAQgNAAgKAMQgGAGgJASQAAApgEAHQgDAHgGAAQgFAAgDgDQgDgDAAgEIABgFQABgDAAgNIAAgQIABhNIAAgSIgBgLIgBgKQAAgEADgDQAEgDAEAAQAJAAABAJQACALAAAIIgBAXIAAAYIAAAJQAJgLAKgGQAJgGALAAQASAAAHALQAEAJABASIABAVIACAWQABAMADAKIAAADQAAAFgDADQgDACgFAAQgIAAgCgIg");
	this.shape_18.setTransform(126.6,50.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgGBMQgDgDAAgFIAAgLIAAgNIgCg+IgYgCQgJgBAAgJQAAgFADgDQADgDAEAAIAXACIgBgPIAAgNQAAgFADgDQADgCAEAAQAJAAACAPIAAAKIAAAGIAAAHIAPgCQALAAAEABQAGACAAAIQAAAFgDADQgDADgEAAIgGAAIgFgBIgPACIACA+IAAAGIABAFQAAAYgMgBQgDAAgDgCg");
	this.shape_19.setTransform(114.9,51.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgHApQgDgCAAgFIAAgMIgBgNIgSABQgRAAAAgKQABgGAFgBQADgBAIAAIASgBIAAgMIABgOQACgEACgCQACgCADAAQAEAAACADQADADABAEIgBAGIgBAGIABAMIAIAAIAGAAIAHAAQASAAAAAJQgBAEgCADQgCADgEAAIgFgBIgDAAIgLAAIgLAAIAAAZQAAAKgJAAQgEAAgCgDg");
	this.shape_20.setTransform(97.8,52);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AguBTQgLgJAAgjIABgPIAAgSIgBgFQAAgDACgCIACgvIgBgLIgBgMQAAgNALAAQAFABADADQANgEALgCQAMgBAJAAQAaAAAPAGQAIACAAAIQAAAFgDADQgDADgFAAIgDAAQgSgGgRAAQgJABgKACIgWAEIABALIgCAqIAugFIAagCQAEAAAEADQADADAAAFQAAAJgKABIgaACIgwAEIgBAPIAAANQAAAXADAFQADADAOAAIATAAIAUgBIAHAAIAGgBQALAAAAALQAAAJgJABQgKACghAAQghABgJgJg");
	this.shape_21.setTransform(381.7,18.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AgyBTQgEgFAAgEIAAgfIACgrIADgtQgBgJACgUQAAgFADgCQAPgFASAAQASAAASANQAUAPAAAWQAAAbgWAQQARAGAIAIQAIAJAAAKQAAANgPAMQgJAIgLAFQgXAJgmAAQgEAAgFgEgAggArIAAAWQAcgBAQgHQAIgDAHgGQAGgGAAgCQAAgFgNgHQgLgEgJgDIgLgCIgEAAIgEAAIgNgBIAAAZgAgcg/IAAASIgCArIAQABQAPgCALgIQALgKAAgPQAAgKgMgJQgLgJgMAAIgQABg");
	this.shape_22.setTransform(368.1,18.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AgQBcQgEgDAAgFIAAgCQACgNAAgRIAAgdIAAgfIgQABQgMABAAgLQAAgLATAAIALAAIACgRQACgYAJgLQALgNAXAAQAQgBAAALQAAALgPAAQgagBgCAlIgBAGIAYgBQARAAAAALQAAAHgJACIgIABIgZABIAAAYIAAAUIAAATQAAAVgCALQgBAJgIAAQgEAAgDgDg");
	this.shape_23.setTransform(348.3,18.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("AggAuQgOgPgBgaQAAgWAMgTQAPgWAaAAQAWAAALAUQAJAQgBAWQAAAXgMAQQgOAUgWAAQgSAAgNgNgAgTgVQgHAMAAAOQAAAQAJAJQAHAHAJAAQALAAAIgIQAJgJAAgQQACgogYAAQgPAAgJAPg");
	this.shape_24.setTransform(337,21);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0000").s().p("AgFA/QgDgDAAgFQAAgNgDgZQgDgZAAgNQAAgLgDgGQgHADgIAIIgNAOIgFAHIgCASIgBASIABAJIABAJQAAAEgDADQgDADgFAAQgMAAAAgbIABgUIACgSIgBgRIgBgRQAAgYALAAQAEAAADADQAEAEAAAEIgBAGIAAAHIAAALQAFgLALgJQALgKAIAAQARAAAFARQAGgIAIgEQAIgEALAAQASAAAGAUQACADADAbIAHA8QABAFgEADQgDADgEAAQgJAAgCgKIgEghIgDggQgBgIgDgHQgEgJgEAAQgEAAgLAGIgNAKIAAAVIAEAbQACARAAALQAAAFgDADQgDADgFAAQgEAAgCgDg");
	this.shape_25.setTransform(316.5,21);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF0000").s().p("AgpAyIAAhLIABgLIAAgLQAAgKAJAAQALAAAAASQAUgUAZAAQAIAAAFAGQAEAHAAANIAAAHQgBAOgKAAQgJAAAAgKIgBgIIAAgJQgRACgJAIQgKAGgGAOIAAA7QAAAKgKAAQgKAAAAgKg");
	this.shape_26.setTransform(302.8,21);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF0000").s().p("AgfAuQgPgPgBgaQAAgWAMgTQAPgWAaAAQAWAAALAUQAJAQgBAWQAAAXgMAQQgNAUgXAAQgSAAgMgNgAgTgVQgHAMAAAOQAAAQAJAJQAHAHAJAAQALAAAIgIQAJgJAAgQQACgogYAAQgPAAgJAPg");
	this.shape_27.setTransform(291.3,21);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF0000").s().p("AgQBcQgEgDAAgFIAAgCQACgNAAgRIAAgdIAAgfIgQABQgMABAAgLQAAgLATAAIALAAIACgRQACgYAJgLQALgNAXAAQAQgBAAALQAAALgPAAQgagBgCAlIgBAGIAYgBQARAAAAALQAAAHgJACIgIABIgZABIAAAYIAAAUIAAATQAAAVgCALQgBAJgIAAQgEAAgDgDg");
	this.shape_28.setTransform(279.9,18.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgkAvQgRgOAAgYQAAgbAOgTQAOgVAZAAQARAAALAHQAOAHAAAPQAAALgMAJQgGAEgRAHIgoATQAGAJAJAFQAJAEALAAQAIAAAJgDQANgDAEgGQAEgGADAAQAEAAAEADQACADAAAEQAAAMgTAIQgRAIgPAAQgXAAgPgMgAgVgcQgJAKgFAUIAhgPQATgKAIgHQgJgIgQAAQgNAAgIAKg");
	this.shape_29.setTransform(262.2,20.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgGBLQgDgCAAgFIAAgMIAAgMIgCg9IgYgDQgJgBAAgJQAAgFADgDQADgDAEAAIAXACIgBgPIAAgNQAAgEADgEQADgCAEgBQAJAAACAQIAAAKIAAAGIAAAGIAPgBQALAAAEABQAGACAAAIQAAAFgDADQgDADgEAAIgGAAIgFgBIgPACIACA/IAAAEIABAGQAAAXgMAAQgDAAgDgDg");
	this.shape_30.setTransform(250.7,19.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAiA3IgHgIIgSAIQgIADgEAAQgZAAgMgOQgLgNAAgcQAAgZASgSQASgTAYAAQAJABAMAEQAOAGAAAIQAAAEgCACIgBANIgBAXQAAAOACAHIAGATIADAGIABABQAAAFgDADQgDACgEAAQgCABgGgFgAgRgaQgNANAAARQAAASAHAIQAGAKAMgBQAKAAAHgDIALgIQgEgcAAgOIABgKIACgLIgHgEIgFgBQgPAAgMAOg");
	this.shape_31.setTransform(240,21);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgKBOQgCgDAAgFIgBgTIAAgUIABgZIABgYQAAgFADgDQADgDAFAAQADAAADADQADADAAAFIgBAYIgBAZIAAAUIAAATQAAAFgCADQgEADgDAAQgFAAgDgDgAgGg6QgDgEgBgFQABgFADgEQAEgEAEAAQAFAAAEAEQADAEABAFQgBAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_32.setTransform(231.5,18.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgpAyIAAhLIABgLIAAgLQAAgKAJAAQALAAAAASQAUgUAZAAQAIAAAFAGQAEAHAAANIAAAHQgBAOgKAAQgJAAAAgKIgBgIIAAgJQgRACgJAIQgKAGgGAOIAAA7QAAAKgKAAQgKAAAAgKg");
	this.shape_33.setTransform(223.2,21);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgpBXQgDgDAAgFIAAgrIAAgpIgBgrIgCgWQAAgIADgFQADgGAGAAQAEAAADADQADADAAAEIAAADIgBAHQAJgHAJgDQAIgDAHAAQAWAAAKATQAJAQAAAZQAAAXgNAPQgNAQgWAAQgKAAgNgEIAAAzQAAAFgDADQgDADgFAAQgEAAgDgDgAgKg4QgFADgJAIIABAyQAMAFALAAQANAAAHgKQAGgIAAgOQAAgTgEgKQgFgKgKAAQgJAAgIAFg");
	this.shape_34.setTransform(211.9,23.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgfAuQgPgPgBgaQAAgWAMgTQAPgWAaAAQAWAAALAUQAJAQgBAWQAAAXgMAQQgNAUgXAAQgRAAgNgNgAgTgVQgHAMAAAOQAAAQAJAJQAHAHAJAAQALAAAIgIQAJgJAAgQQACgogYAAQgPAAgJAPg");
	this.shape_35.setTransform(200,21);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgpAyIAAhLIABgLIAAgLQAAgKAJAAQALAAAAASQAUgUAZAAQAIAAAFAGQAEAHAAANIAAAHQgBAOgKAAQgJAAAAgKIgBgIIAAgJQgRACgJAIQgKAGgGAOIAAA7QAAAKgKAAQgKAAAAgKg");
	this.shape_36.setTransform(189.4,21);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgpBXQgDgDAAgFIAAgrIAAgpIgBgrIgCgWQAAgIADgFQADgGAGAAQAEAAADADQADADAAAEIAAADIgBAHQAJgHAJgDQAIgDAHAAQAWAAAKATQAJAQAAAZQAAAXgNAPQgNAQgWAAQgKAAgNgEIAAAzQAAAFgDADQgDADgFAAQgEAAgDgDgAgKg4QgFADgJAIIABAyQAMAFALAAQANAAAHgKQAGgIAAgOQAAgTgEgKQgFgKgKAAQgJAAgIAFg");
	this.shape_37.setTransform(178.1,23.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgpBXQgDgDAAgFIAAgrIAAgpIgBgrIgCgWQAAgIADgFQADgGAGAAQAEAAADADQADADAAAEIAAADIgBAHQAJgHAJgDQAIgDAHAAQAWAAAKATQAJAQAAAZQAAAXgNAPQgNAQgWAAQgKAAgNgEIAAAzQAAAFgDADQgDADgFAAQgEAAgDgDgAgKg4QgFADgJAIIABAyQAMAFALAAQANAAAHgKQAGgIAAgOQAAgTgEgKQgFgKgKAAQgJAAgIAFg");
	this.shape_38.setTransform(166.3,23.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAiA3IgHgIIgSAIQgIADgEAAQgZAAgMgOQgLgNAAgcQAAgZASgSQASgTAYAAQAJABAMAEQAOAGAAAIQAAAEgCACIgBANIgBAXQAAAOACAHIAGATIADAGIABABQAAAFgDADQgDACgEAAQgCABgGgFgAgRgaQgNANAAARQAAASAHAIQAGAKAMgBQAKAAAHgDIALgIQgEgcAAgOIABgKIACgLIgHgEIgFgBQgPAAgMAOg");
	this.shape_39.setTransform(154.7,21);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgkAvQgQgOgBgYQAAgbAOgTQAPgVAYAAQARAAAMAHQANAHAAAPQAAALgMAJQgGAEgRAHIgoATQAGAJAJAFQAJAEALAAQAIAAAKgDQAMgDAEgGQADgGAEAAQAFAAADADQACADAAAEQAAAMgTAIQgRAIgPAAQgXAAgPgMgAgVgcQgJAKgFAUIAhgPQATgKAIgHQgJgIgQAAQgNAAgIAKg");
	this.shape_40.setTransform(136.7,20.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAdBRQgCgJgCgQQgCgPAAgKIAAgJIAAgIQAAgUgKAAQgNAAgKAMQgGAGgJASQAAApgEAHQgDAHgGAAQgFAAgDgDQgDgDAAgEIABgFQABgDAAgNIAAgQIABhNIAAgSIgBgLIgBgKQAAgEADgDQAEgDAEAAQAJAAABAJQACALAAAIIgBAXIAAAYIAAAJQAJgLAKgGQAJgGALAAQASAAAHALQAEAJABASIABAVIACAWQABAMADAKIAAADQAAAFgDADQgDACgFAAQgIAAgCgIg");
	this.shape_41.setTransform(124.3,18);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgHBPQgDgDAAgFIAAgFIABgFIgBgQIAAgPQAAgQgDgbQgDgeAAgNIgKAAQgXAAgOgDQgIgCAAgJQAAgEADgEQADgDAFAAIARACIARABIAUAAIASAAIAZABIAZABQAEAAADADQADADAAAFQAAAFgDADQgDADgEAAIgZgBIgYgBIgIAAIADAwQACAeAAARIABALIABAMQAAAHgDAGQgDAHgGAAQgDAAgEgDg");
	this.shape_42.setTransform(111.2,18.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#9900FF").s().p("AgGAzQgDgDAAgFIAAgGIgBgGQAAgEADgDQAEgDADAAQANAAAAAWQgBAFgDADQgDADgFAAQgDAAgEgDgAgIgaQgCgEAAgEIgBgEIAAgEQgBgFAEgDQADgDAFAAQAKAAAAATQAAAEgDAEQgDADgEAAQgEAAgEgDg");
	this.shape_43.setTransform(92.9,19.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#9900FF").s().p("AAiA3IgHgIIgSAIQgIADgEAAQgZAAgMgOQgLgNAAgcQAAgZASgSQASgTAYAAQAJABAMAEQAOAGAAAIQAAAEgCACIgBANIgBAXQAAAOACAHIAGATIADAGIABABQAAAFgDADQgDACgEAAQgCABgGgFgAgRgaQgNANAAARQAAASAHAIQAGAKAMgBQAKAAAHgDIALgIQgEgcAAgOIABgKIACgLIgHgEIgFgBQgPAAgMAOg");
	this.shape_44.setTransform(84.1,21);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#9900FF").s().p("AgMBOIACgnIABgnIABgmIAAgnQAAgLAJAAQAMAAgBALIAAAnIgBAmIgBA1IgBAZQgBALgJAAQgLAAAAgLg");
	this.shape_45.setTransform(75.5,17.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#9900FF").s().p("AAZA0QgOAHgRAAQgOgBgJgGQgKgHgCgNQgEgcgBgWQABgPADgSQABgKAJAAQAFABADADQADADAAAEIgBAQIgCAQIABAeQABANADAIIAHACIAGABQAOABAQgFIAAgWIAAgUQAAgXABgRQABgKAKAAQAFAAACADQADADAAAFIgCAoIAAAXIABAWIAAAIIAAAHQAAAFgCADQgDACgFAAQgJABgBgKg");
	this.shape_46.setTransform(66.8,21);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#9900FF").s().p("AgFA/QgDgDAAgFQAAgNgDgZQgDgZAAgNQAAgLgDgGQgHADgIAIIgNAOIgFAHIgCASIgBASIABAJIABAJQAAAEgDADQgDADgFAAQgMAAAAgbIABgUIACgSIgBgRIgBgRQAAgYALAAQAEAAADADQAEAEAAAEIgBAGIAAAHIAAALQAFgLALgJQALgKAIAAQARAAAFARQAGgIAIgEQAIgEALAAQASAAAGAUQACADADAbIAHA8QABAFgEADQgDADgEAAQgJAAgCgKIgEghIgDggQgBgIgDgHQgEgJgEAAQgEAAgLAGIgNAKIAAAVIAEAbQACARAAALQAAAFgDADQgDADgFAAQgEAAgCgDg");
	this.shape_47.setTransform(52.6,21);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#9900FF").s().p("AgpAyIAAhLIABgLIAAgLQAAgKAJAAQALAAAAASQAUgUAZAAQAIAAAFAGQAEAHAAANIAAAHQgBAOgKAAQgJAAAAgKIgBgIIAAgJQgRACgJAIQgKAGgGAOIAAA7QAAAKgKAAQgKAAAAgKg");
	this.shape_48.setTransform(39,21);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#9900FF").s().p("AggAuQgOgPgBgaQAAgWANgTQAOgWAaAAQAWAAALAUQAJAQgBAWQAAAXgMAQQgOAUgWAAQgSAAgNgNgAgTgVQgGAMAAAOQgBAQAJAJQAHAHAJAAQALAAAIgIQAJgJABgQQABgogYAAQgPAAgJAPg");
	this.shape_49.setTransform(27.5,21);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#9900FF").s().p("AgzBXQgDgDgBgFIACg/IAAg/IAAgOIAAgOQAAgFADgDQADgEAFAAQADAAADACIAYgDIARgBQANAAAPADQAXAFAAAIQAAAFgEADQgDAEgEAAIgFgBQgMgFgXAAIgPABIgWADIAAAuQAVgFAKAAQAQAAASACQAKABAAAKQAAAFgDADQgEACgEAAIgRgBIgQAAQgHAAgYAFIgBBKQAAAFgDADQgDADgEAAQgGAAgCgDg");
	this.shape_50.setTransform(15.9,18.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.FormulaProgressive_1, new cjs.Rectangle(3.1,0,390.5,67.3), null);


(lib.Scarf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFDBC8").s().p("AgCAAIACgBIADADIgFgCg");
	this.shape.setTransform(17.3,7.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("ABhCWQgFAAgFgEQgQgLgRgGQgdgIgiAMQgSAGgRAJQAAhRgThQQgEgTAIgRQAIgTANgMQgxAbAOA2QALApAIAqQgugEgrARQAzg3gOhJQgGgdANgaQAJgPASgFQAfgHAagNQARgJAMgOIAKARQgRAQAFAUIABADIAFADIAPAQIACAEQgGAPgMAPQAGApArAJQArAIAOAlIABAHQACAJABAJQAAAmARAggAAdAtQAFARAKAGQgHgQgJglQgEANAFARgAgPhFQgUAfAAApQgBAuAcATQAEgFgJgLQgNgPgCgIQgEgWAJgcQAMggADgOQgBgDgEAAIgCABg");
	this.shape_1.setTransform(15.8,16.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgyBkQgEgEgFABQgxgHgxAVQAGgRANgPQAfgmgGguQgFgnAGgmQABgGAEgEQAegcAogKQAfgHAOgaQAIAGAHAHQAGAGAFAIIAAAQQgKAEgFALIgEAEIgBAAIAAAEIAAABIABACIgCAAIgBgCQgFgVARgPIgKgRQgMANgRAJQgaANgfAIQgSAEgJAQQgNAaAGAdQAOBJgzA3QArgSAuAFQgIgqgLgqQgOg1AxgbQgNAMgIASQgIARAEAUQATBPAABRQARgIASgHQAigMAdAIQARAGAQAMQAFADAFAAIAvAAQgRggAAglQgBgJgCgJIgBgHQgOgmgrgHQgrgJgGgpQAMgQAGgOIgCgEIAEADIAEACIgBADQgHAPgDARQgBAKAGAFQAhAXAmAQQAJAEAGAIQAIALAFAMQAGAaAEAaQADAYALAXQgfALgfgIQgXgIgTgOQgKgFgMADQgsAJgqAWgAAdAtQgFgRAEgOQAJAlAHAQQgKgFgFgRgAgjADQAAgqAUgfQAGgBABAEQgDAOgMAfQgJAdAEAVQACAJANAPQAJAKgEAFQgcgSABgug");
	this.shape_2.setTransform(15.8,16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scarf, new cjs.Rectangle(0,0,31.5,32.8), null);


(lib.Card8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgtAOIgcgnQAlAaAMApQAUABATgJIAhgOQgCgRgPgPQAJgBAMASQANAVAJAEQg8AYgiAFQgIgUgRgZgAAcAJQgKgLAHgHQALAHACASQgYALgOADQAFgRAXgEgAgSAOQACgJAMACQAEAOgOAJQgGgJACgHgAAAACIAAgCQAAgKALgBIgBgBQAAgJAEAAQAEAAAAAFIgBAIIAAAAIgBAFQAAAIgJAAQgHgBAAgCgAgygTQAGgGAEAEQAIAFACAAQABAIgLACQgLgFABgIgAgRgWQASgCABACQgKAIgFAAQgFAAABgIgAgkgpQAEgBADABIAFACQgFADgfALQANgPALgBgAACgmQgXgDAAgFQAAgEAKgEQAKgEAFAAIATAaIAAADQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgFgIgMgCg");
	this.shape.setTransform(9.1,4.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgOBDQgQgEgXgtQgYgugNgHQAEAAAkgNIgBgCIADABQACACAggOQAegPAKAbQAaAyAnAhQgUAAgkATQgcAOgPAAIgGAAgAgtAMQARAZAIAUQAigGA8gYQgJgDgNgVQgMgSgJAAQAPAQACAQIghAPQgTAJgUgBQgMgpglgbIAcAogAAcAHQgXAEgFAQQAOgCAYgLQgCgSgLgHQgHAHAKALgAgSALQgCAIAGAIQAOgJgEgOIgDAAQgJAAgCAHgAAKgPIABACQgLAAAAALIAAACQAAACAHAAQAJAAAAgHIABgFIAAAAIABgIQAAgFgEAAQgEAAAAAIgAgygVQgBAHALAGQALgDgBgHQgCAAgIgGIgDgBQgEAAgDAEgAgRgZQgBARAUgRIgFgBIgOABgAgkgsQgLACgNAOQAfgKAFgDIgFgDIgEAAIgDAAgAgLg4QgKAEAAAEQAAAFAXADQAMACAFAIQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABAAIAAgEIgTgZQgFAAgKAEg");
	this.shape_1.setTransform(9.1,5.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Card8, new cjs.Rectangle(0,-1.6,18.2,13.5), null);


(lib.card7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag2AqIgBAAQgKgZAQgVQAQgZAOgcIADgGIA/AHIAGABIAHADIgGAXQgDAQgNAYQgNAYgJANIgMAQQgegHgcgPgAgUAzIABAAIgBAAIAAAAIAAgBIgBAAIABABgAgbAGQgCACgHABQgGgBAAAGQAAAHAKAAQgBAFgGACQAHAEAIAAQAAAAABAAQAAAAABgBQAAAAAAAAQAAgBAAAAIgBgHIAAgDQAEAAAEACQAEAAAAgEQgCgCgCgJIgFgKIgHAJgAASgOQgGAAgFADQgGADAAAIQAAAFAKABQgEAIgHACIASAFQABAAABAAQAAAAAAAAQABgBAAAAQAAgBAAAAIgCgGIAAgEIAMADQAFAAAAgHQAAgEgCgCQgHgEAAgBQgEgLgDgEQgDACABAFgAgDgrQgCACgHAAQgGABAAAFQAAAHAJAAQgBAFgGABQAHAFAIAAQABAAAAAAQAAAAAAgBQAAAAABAAQAAgBAAgBIgBgGIAAgEQAEABADACQAFAAAAgFQgDgBgCgIIgFgLIgFAJg");
	this.shape.setTransform(9.2,7.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgTA6QgegOgfgLIAOgPQAOgPALgPQASgbADggQAUAHAWAAQAeACAdAEIgEAcQgFAYgMAVQgQAegUAbQgWgFgVgJgAgIg4QgNAbgRAZQgPAWAKAZIAAAAQAcAPAeAHIAMgQQAKgNANgYQANgYADgQIAFgXIgGgDIgHgBIg/gHIgDAGgAgIA0IAAAAIABAAIgBAAgAgJAzIAAAAIABABIgBgBgAgcAcQAGgBABgFQgJAAAAgHQAAgGAGAAQAHAAACgCIAGgJIAFAKQACAJACABQAAAFgEAAQgDgCgEgBIgBAEIACAGQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQgIAAgHgFgAALARQAHgCAFgIQgKgBAAgGQAAgHAFgDQAFgDAHgBQgCgFAEgBQACAEAEAKQABACAGAEQACABAAAFQAAAHgFAAIgLgEIAAAFIACAFQAAABAAABQgBAAAAABQAAAAgBAAQAAAAgBAAIgTgFgAgEgVQAFgBABgFQgJAAAAgHQAAgGAGAAQAGAAACgCIAHgKIAFALQACAJACABQAAAFgEAAQgEgCgEgBIAAAEIABAGQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAQgIAAgGgFg");
	this.shape_1.setTransform(8.1,7.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.card7, new cjs.Rectangle(0,0,16.2,14.5), null);


(lib.Card6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6699").s().p("AgyAaIAphVIA8AHQgYA4gMA4g");
	this.shape.setTransform(5.2,6.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag/AZIAvheIBQAGQgjBCgHBDgAg2AWIBCAiQAMg4AYg4Ig8gHg");
	this.shape_1.setTransform(5.5,6.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Card6, new cjs.Rectangle(-0.8,-0.3,12.8,14.1), null);


(lib.Card4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AggAYQAOgYAEgZIABgGQACgMgCgMIAFADIADAAQAKADAPgGQAdgNAJAAQAJApgZBQQg8ADgpANIAbgtgAgDgnQgEAogdA0QAQgKA0AAIAUhiQgkAMgTAEgAAGAQQAAAJgQAFQABgOAPAAgAAAAFQgJgIAVgDQgDAOgFAAQgCAAgCgDgAATAAIAEgIQACgFAHABQgCAMgJAAIgCAAgAgDgMQACgPANgCQgDARgKAAIgCAAgAATgWIADgNQAEABAGAFQgBAHgIAAIgEAAg");
	this.shape.setTransform(6,6.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKglQATgEAjgNIgUBiQgzABgQAKQAdg1AEgngAgRAfQARgEgBgJIgBAAQgOAAgBANgAgHAHQAIAJAEgUQgVADAJAIgAAPgGIgEAIQAMACABgOIgCgBQgEAAgDAFgAgKgKQALACAEgTQgNACgCAPgAALgVQANACAAgIQgFgFgEgCIgEANg");
	this.shape_1.setTransform(6.8,6.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Card4, new cjs.Rectangle(0,0,12.1,13.9), null);


(lib.Card3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgmBLQgOgXgDgpQgDgoAKghQAPAFAagJIAEgBIAGgCQAXgGAKAAIADATIAAAHIACAtIAAAAIACARIADAOIADALIAAABIACAFIAFAMIgHACIgLADIgGACIgMADQgiAKgTAAIgFgBgAgDg5QgZAGgOAGQgJBjAaAMIAkgGIAJgBIAMgEIAGgDIAIgGIgBgCIgEgGIgFgLIgDgOIgBgFIgBgMIAAgBIAAgsIAAgHIgBgJIghAIgAgUAbQgCgEACgEQACgFAIgEQANgIAHAFQADACACAEIACADQABASgeACQgGgEgCgFgAgUgDQgGgFAAgOQABgNAGgHQATADAKAQIAAABIAAAAQgEAKgUAIIgFABIgBAAg");
	this.shape.setTransform(5.6,7.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqgtQAOgGAYgGIAigIIAAAJIABAHIgBAsIAAABIACAMIAAAFIAEAPIAEAKIAEAHIACABIgIAGIgGADIgMAEIgJACIglAFQgagMAKhjgAgKAKQgIAEgCAFQgCAEACAFQACAEAFAFQAegDgBgRIgBgEQgCgEgDgCQgDgCgEAAQgFAAgIAFgAgagWQgBAOAHAFIABAAIAEgBQAUgHAFgLIAAAAIAAgBQgLgQgSgDQgHAHAAANg");
	this.shape_1.setTransform(5.7,7.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Card3, new cjs.Rectangle(0,0,11.3,15.1), null);


(lib.Card2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6699").s().p("AgYAMQAUgNARggQAGADARACQARACAVgNIgDALIgRAUQgSATgZAWIhUAHQAegOATgOg");
	this.shape.setTransform(8.9,4.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhUAtIA2giIADgCIAMgJIALgJIADgDQAFgHAEgHIABgBIAEgIIAAAAIAAgCIABgDQAIAEAJABIAKAAQATAAAYgLQACAJgEAKQgCAGgFAGIgDADIgJAJIgMAKIgOAPIgCACQgIAJgCAGQgdAFgXACIgTABIgKAAQgQAAgMgCgAgTANQgTAOgeAOIBUgHQAYgWATgTIARgUIACgLQgVANgRgCQgRgCgFgDQgSAggTANg");
	this.shape_1.setTransform(8.5,4.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Card2, new cjs.Rectangle(0,0,17,9.5), null);


(lib.card1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgSA9IgBAAQAMg6g2gfIgJgFIgIgEIAIgBIAJgDQAOgFAVgJQAhgQAQABQAgADALAvQAGAWAGAzIABAMIgJgBQgHAAgrAFIgUACQgUAAACgKgAgRABQANAZgFAjQAlgDAqgCIgLhFQgIgkgcgLQgZAMg5ANIAAAAQAXAAATAkg");
	this.shape.setTransform(7.9,7.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6699").s().p("AgWABQgTgkgXAAQA5gNAZgMQAcALAIAjIALBGQgqACglADQAGgjgOgZg");
	this.shape_1.setTransform(8.4,7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.card1, new cjs.Rectangle(0,0,15.9,14.2), null);


(lib.BunnyHeadsNodding = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgmCXQgCAAgGAKIgZgNIAAAAIgDgBIgHgEIAGgBIAAAAIgDgJIgEgGIgHgFQgQgKAGgVQg4gBgYhRQA8AFAUA9QAGgCAJgJQAJgIAIgBQgagYgLgOQgTgZAKggQAmAMAIAIQAMAMAKAgQAJAgAJAIQAIgUAUAQIAVARQALAHAFAAQAGALAAANIABAJQAAAFgMAMIgFAAIgBAAIgFgHIgCgYIgEACIgCAWIABAHIgPgJIgCAEIAIAJIAFAHIgVAGIgWAMQgDgNgDABgAgSB6IAAABIAEABIAEgBIANAAIABgBIgHgBgAgPBtQACAEAVAFIACgBIgXgJIgBAAgAgVBHQABAZAQgCQgEgXgMAAIgBAAgAheALQAJASAMgEQgQgHgHgmQgHAPAJAQgAA3BwIABgBIgBAKIgCABIACgKgABABHQgXAFgSgBIAEgGIACgFQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAIAIgIIAMgPIgFgDQgKgHgFgIQgEgKgBgGQAJgUAGgHQgigBgXgHIgUgIIgBAAQgTgKgKgQIAAgCIAAgBIgBAAQgEgHgCgIIAPgBIABABIACgBQA5ABApAwIAAADIACgCIABgBQAHgFAGgDIABAAIABAAIgFgSIAAgBIgBgCIgDgPQgHghAGgRQAKgfANABQAMACAHAWQAGATABAQIgDAYQgFASgPALIAVALQALAHABAGQgGgKgKADQABAGgEAHQAGADAKAHQAMgnA9AwQgNAfgUAFQAEgNgBgQQgDAAgDAEQgCAEgBAGQgBAQgDADQgEgCgHADIgBAAIgGABQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAQARgRAGgOIADgJQgJgCgNAWQgNAWgTgCIgCAAQAEANAHAGIAGAGIAAAAIAAAAIAAAAIgDAAQgRAAAAAEIABACIAKgCIAAABIAAABIgDAAIABAAIgaAEQABAFgEABIAAgMgAgbgtIAaAJQgCgKgSgFQgTgGgEgGQABAMAQAGgAA4hQQADAHAFAGQgFgOAEgXQAFgWAAgHQgTAgAHAVgAAhA4IAAAAIgBABIABgBgAA/idIAAAAIAAABgABEihIABgBIABAAIgCABg");
	this.shape.setTransform(19,16.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgiCfIAXgFIgFgHIgJgJIACgFIAQAJIgBgHIACgWIAEgCIACAZIAEAGIAAABIABAAIAFAAQAMgNAAgEIgBgKQAAgNgHgKQgEgBgKgHIgWgRQgUgPgJAUQgIgIgJghQgKgggMgMQgIgIgmgMQgKAgATAZQALAPAaAXQgIABgJAJQgJAJgHABQgTg8g8gGQAYBSA3AAQgFAVAQAKIAHAFIAEAGIADAJIAAABIgGABIAAgBIAEgCIgMgHQgTgOgCgWQhCAAgNhjQA4AEAYAhQAIAMAFAOQAGgBAHgGQgMgMgJgMQgjgtAXgnQA4AMAkBZQAFgEAKACQAMAEAGgCQADALAKAQIABAAQASACAXgGIAAAMIgIAdIgBABIgCAJIgEAIIgLAKQgPANgTAAQgHAAgIgCgAgpCEIAAgCIAPgBIAIABIgBABIgOABIgEABIgEgBgAgmB2IABgCIABAAIAYAJIgCACQgWgGgCgDgAgsBPQANAAAEAXIgCAAQgPAAAAgXgABRBLIAAAAIAAAAIAAAAIgHgGQgGgGgEgNIACAAQATACANgVQANgXAJACIgDAJQgGAPgRAQQAAABABAAQAAAAAAABQAAAAABAAQAAABAAAAIAGgCIAAAAQAHgDAEACQAEgDABgQQABgGACgEQADgDADgBQABAQgEANQAUgFANgfQg9gwgMAmQgKgGgHgDQAEgHAAgGQAKgDAGAKQgBgFgLgHIgVgLQAPgMAFgRIACgZQAAgPgGgTQgHgXgMgBQgNgCgKAfQgGASAGAgIAEAQIABADIAFARIgBAAIgBABQgGACgHAFIgCACIgBgCQgogvg7gCIgCAAIgQABQADAIAEAHIABADQAKAQATAKIABAAIAUAIQAYAIAhAAQgGAHgJAUIgCAFQACAGAFAGQAFAHAKAHIAFADIgMAPIgIAIQgBABAAAAQAAAAAAABQgBAAAAAAQAAABAAAAIgBABIAEgIIABAAIABgDIAEgGIADgGIgGgFQgMgKgEgIQgCgXALgJQg+gTgJgFQglgSgDglQBgACAcAoQAHgDADAAQgQgeAHgjQAFgYAQgOIAAAAQAEgBABgEIABgBIAMgGQAWAKACAsQAAAngOASIgEAEQAvAsAqgbQANAAAAANQAGgBAOgJQALgHANAAQgHAOgRAAQACADAOABQAMAAgBAJIgOABQgSABgCABQABAHATgFQgDAJgKgDQgMgDgEAEQgFAPgTARQgPANgHAKIgEAIQgCABgDgJIgCgGQgHAEgHACQgKACgJgBQADAIAFAFgAh1AUQgJgSAHgOQAHAnAPAGIgDABQgJAAgIgOgAgyglQgQgFgBgNQAEAGATAGQASAFACAKgAAhhHQgHgWATgfQAAAHgFAWQgEAWAFAPQgFgGgDgHg");
	this.shape_1.setTransform(21.3,16.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BunnyHeadsNodding, new cjs.Rectangle(0,0,42.6,33.2), null);


(lib.Bun2Arm2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRAPQgKgDgKABQgHgJAAgMIgCgKIADgBIAHAEIAFAAQgIAGAFADQAZADAYAFQAOABASgGQABATgHAEIg6gFg");
	this.shape.setTransform(4.7,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgoANIgEgFQAKgBAKADIA5AFQAHgEgBgTQgSAHgNgBQgYgGgagDQgEgDAIgGQAoAOApgIQAIARgOASg");
	this.shape_1.setTransform(5.4,2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Bun2Arm2, new cjs.Rectangle(0,0,10,4.6), null);


(lib.Bun1Arm1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AANAnQgQgDgQgJIgIgEIgHgFIAAAAQgJgIAAgHIABAAIAcAQIAIAEIATAKIAHAEQARADAAgUQgOgEgMgJQgQgLgHgTIgEgOIABAAQAAgGAEADIAGAFIADAMQADAJAGAIIABAAIAFAFIgBAAIAHAFIAYAIQACAQgIALIgCABQgFACgFAAQgGAAgGgDg");
	this.shape.setTransform(5.5,4.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAmAnIACAAIAAAAgAAXAkIgHgDIgTgKIgIgFIgcgPQAYgBgHgjIAJgFIABAAIgBABIAEAOQAGASARAMQAMAJAOAEQAAARgMAAIgFgBgAAKgGQgGgIgEgJIgCgNIAEgCIABAKQABANAHAJg");
	this.shape_1.setTransform(5.2,4.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Bun1Arm1, new cjs.Rectangle(1.2,0,8.7,8.5), null);


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


(lib.Bk1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#03AB4A").ss(1,1,1).p("AsgAgIAhAAQARgBAQgBQAygBAygCQBIgDBHgDQGEgQFbAJQA6ABA4ACQC+AHCUgNQAtgDApgGIAKgCIAngFIAXgDQABAAABgBIAAAAIAngGQEagoBoALQCjASDsAvQDLApIKA/EglkgB8QGTBxC8AhQCEAYC4AAQATAAATAAQBbgBBagCQAEAAAEAAQBIgBBHgBQATgBASAAQArgBArgBQAHAAAGAA");
	this.shape.setTransform(-0.4,35.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("EglkgFIIAAIqIAAT8MBLJAAAIAAwBIAAqjIAA0XMhLJAAAg");
	this.shape_1.setTransform(-0.4,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#008424").ss(1,1,1).p("AO4BZIgEAAQkxgBg8gCQg0gCg0gCQglgCgmgCQhlgJhlgJQlRgclSgWQhSgIhSgEQhTgFhUgCQg9gBg+AAQiCAAiCAGQhCAEhCAEQiyASivgMQjRgNoLhVAPMBZQgKAAgKAAEAllAAqQobATkgACQhzAAhzAIQgFAAgEABQhqAHhqAFQg/ADg+ABQgTABgTAAQgGAAgGAA");
	this.shape_2.setTransform(-0.4,-24);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#006666","#45FF24"],[0,1],3.5,142.5,3.5,-113.6).s().p("EglkAJ+IAAz7QGTBxC8AiQCEAYC5AAIAlAAIC1gDIAIAAICPgCIAlgBIBWgCIANAAIC/gGIAhAAIAtgBIgMgBIBkgDICQgGQGDgPFbAIIByADQC+AHCUgMQAtgEApgGIAKgCIAogGIAWgDIACAAIAAgBIAngFQEagpBoALQCjASDsAwQDLApIKA/IAAQBgEAiKgAoIAAgFIgCAAg");
	this.shape_3.setTransform(-0.4,86.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#60ECFF","#FFFFFF"],[0,0.506],3.9,-84.6,3.9,155.8).s().p("EAiIASGIACAAIAAAFgAO4C9IAMAAIAIAAIgUAAgAO0C9QkxgBg8gCIhngFIhMgEIjKgRQlRgclSgXQhSgHhSgFQhTgFhUgCQg9gCg+AAQiCAAiCAHQhCADhBAFQizASivgLQjRgPoLhVIAAyTMBLJAAAIAAUWQobAUkgABQhzABhzAIIgJAAQhqAIhqAEIh9AFIgmABIgMAAgAGvCdIAEABIgEgDg");
	this.shape_4.setTransform(-0.4,-34);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#009933").s().p("AaQErQjsgwijgSQhogLkaAoIgnAGIAAAAIgCAAIgLABIgLADIgoAGIgBAAIgKgBIABADQgpAFgtAEQiUANi+gHIhygDQlbgJmDAQIiQAGIhkADIAMAAIgtACIAhgCIghACIghAAIi/AGIgNAAIhWACIglABIiPACIgIAAIi1ADIglAAQi5AAiEgYQi8gimThxIAAorQILBVDRAPQCvALCzgSQBBgFBCgEQCCgGCCAAQA+AAA9ABQBUADBTAEQBSAFBSAIQFSAWFRAcIDKASIBMAEIBnAEQA8ADExAAIAEAAIAUAAIgIAAIAmgBIB9gEQBqgEBqgIIAJgBQBzgIBzAAQEggCIbgTIAAKiQoKg/jLgpgAP/hPIABAAIgBgBgANWEMIACAAIAAAAIAAAAIgBABIgBgBgANYEMg");
	this.shape_5.setTransform(-0.4,7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-242.4,-151.7,484.1,303.5);


(lib.ProgressiveFormLesson = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.ProgressiveFormDef();
	this.instance.parent = this;
	this.instance.setTransform(205.1,100.2,0.988,0.988,0,0,0,233.8,54.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(58).to({regY:54.2,scaleX:0.88,scaleY:0.88,y:47.6},9).wait(52).to({alpha:0},9).wait(172));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgFAGQgDgCAAgEQAAgDADgCQACgDADAAQAEAAACADQADACAAADQAAAEgDACQgCADgEAAQgDAAgCgDg");
	this.shape.setTransform(343,258);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgEA0QgCgCAAgDIAAgIIAAgIIgBgrIgQAAQgHgCAAgGQAAgDACgCQACgDADAAIAPACIAAgKIAAgJQAAgDACgCQACgCADAAQAGAAABALIAAAGIAAAEIAAAFIAKgCIAKABQAFACAAAFQAAAEgCACQgCABgEABIgDAAIgEAAIgKAAIACArIAAADIAAAEQAAAPgIAAQgCAAgCgBg");
	this.shape_1.setTransform(337.6,253.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_2.setTransform(330.2,254.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_3.setTransform(322.5,254.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_4.setTransform(310.3,254.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgGA1QgCgCAAgDIAAgOIgBgNIABgRIABgQQAAgEACgCQACgCADAAQACAAACACQACACAAAEIgBAQIAAARIAAANIAAAOQAAADgCACQgCACgCAAQgDAAgCgCgAgEgnQgCgDAAgEQAAgDACgCQADgDACAAQAEAAACADQADACAAADQAAAEgDADQgCACgEAAQgCAAgDgCg");
	this.shape_5.setTransform(304.5,252.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgZA5QgJgCAAgGQAAgGAHAAIAJABQAFABAIAAQANAAAFgOQAEgJAAgSQgEAHgFAEQgFAEgHAAQgNAAgIgJQgJgKABgNQgBgUALgMQAMgMAUAAQAGAAAFACQAEABADAEQAIAAAAAIIgBAOIgDAOIgBAYQAAAOgDAKQgDAMgIAFQgIAHgQAAQgKAAgHgBgAgNgkQgGAJAAANQAAALADAEQAFAFAHAAQAHAAAHgHQAHgIABgHIACgZIgGgDQgDgCgDAAQgNAAgIAKg");
	this.shape_6.setTransform(298.2,256.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_7.setTransform(290.5,254.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgDArQgCgCAAgDIgCgaIgCgZQAAgIgCgFQgFADgGAFIgIAKIgEAEIgBAMIgBANIABAGIABAGQAAADgCACQgDACgDAAQgIAAAAgTIABgNIABgMIgBgMIgBgLQAAgRAIAAQADAAACACQACADAAADIAAAEIAAAFIAAAHQAEgHAHgHQAHgGAGAAQALAAADALQAEgFAGgDQAGgCAHAAQAMAAAEANIADAUQADAMADAdQAAADgCACQgCACgEAAQgGAAgBgGIgCgXIgDgVQAAgGgCgEQgDgHgDAAQgCAAgIAFQgHAEgCACIAAAOIADATIABATQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_8.setTransform(280.9,254.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgcAiIAAgzIABgHIAAgIQAAgHAHAAQAGAAABANQANgOARAAQAGAAADAFQACAEAAAIIAAAGQAAAJgGAAQgHAAAAgHIAAgFIAAgGQgMABgGAFQgHAFgEAJIABAoQAAAHgIAAQgGAAgBgHg");
	this.shape_9.setTransform(267.1,254.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgZAgQgLgKAAgQQAAgSAJgNQALgOAQAAQAMAAAHAEQAJAFAAAKQAAAIgIAGIgPAHIgbANQAEAGAGADQAHADAGAAQAGAAAHgCQAIgBADgFQACgEACAAQAEAAABACQABABAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgLAAQgPAAgLgIgAgPgTQgFAHgEANIAXgKQAMgGAGgFQgGgGgLAAQgJAAgGAHg");
	this.shape_10.setTransform(259.4,254.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAUA3IgDgRIgBgRIAAgGIAAgGQAAgMgHAAQgJgBgHAIIgKAQQAAAdgCAEQgCAFgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgLIAAg1IAAgLIAAgIIgBgHQAAgDACgCQACgCADAAQAGAAABAGIABAOIAAAPIAAAQIAAAHQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAGAAAMIABAOIABAPIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgGg");
	this.shape_11.setTransform(250.9,252.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AglAyQgJgKAAgUQAAgTAJgTQAJgVAPgMQAJgIAJAAQAHAAALAFQANAFAAAGQAAADgCADQgDACgDAAIgEgCQgLgHgIAAQgFAAgFAFIgJALQgRAXAAAZQAAANAEAGQAFAGAMAAQAMAAAKgIQALgJADgRQgUABgOAHIgDABQgDABgCgDQgCgDAAgDQAAgEAEgCQAOgJAoAAQADABABACQACABAAADQAAAEgEADQgEAWgOANQgPAOgTAAQgRAAgKgKg");
	this.shape_12.setTransform(237,252.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AgwA5QgDgCAAgDIABgKIAAgJIABgOIAAgNIAAgOIAAgOIgBgOIgBgOQAAgDADgDQADgDADAAQAEAAAGAJQASAbAOASQARAVAVATIAAgJIgBgJQAAgggCgTIgCgHIgBgIQAAgJAHAAQANAAAAAwIAAAXIAAAYIgCAMQgBAIgGAAQgEAAgGgGQgegcglg0IgBARIAAAPIAAATIABASQAAAUgIAAQgEAAgCgDg");
	this.shape_13.setTransform(225.9,252.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AgfA2QgDgCAAgDQAAgEADgCQACgCADAAIAQgBIAAgOIAAgNIAAgLQAAgRABgZIgJAAIgKAAQgDAAgCgBQgCgCAAgEQAAgHAHgBIAWAAQAOAAAVADQAHABAAAHQAAADgCACQgCACgEAAIgLgBIgMgBIgBAoIAAAMIAAANIAAANIAWgBQAEAAACACQACADAAADQAAACgCADQgCACgEAAIgMAAIgMAAIgNACIgPABQgDAAgCgCg");
	this.shape_14.setTransform(215.7,252.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AgeAtQgKgLAAgQQAAgYAVgaQASgVAQAAIAHAAIAFABQACgEAEAAQAFAAACAHIABAOQAAADgCADQgCADgDAAQgFAAgCgGQgCgFgCgBIgIAAQgKAAgMAQQgSAWAAASQAAAKAGAGQAGAHAJAAQAHAAAHgDIANgJQAEgDADAAQADAAACACQACADAAADQAAADgDACQgTASgTAAQgPAAgLgMg");
	this.shape_15.setTransform(207.2,252.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AgfA2QgCgCAAgDQAAgEACgCQACgCADAAIAPgBIABgOIAAgNIgBgLQAAgRACgZIgJAAIgKAAQgDAAgCgBQgCgCAAgEQAAgHAHgBIAWAAQANAAAXADQAGABAAAHQAAADgDACQgCACgCAAIgMgBIgMgBIgBAoIAAAMIAAANIAAANIAWgBQAEAAABACQACADAAADQAAACgCADQgBACgEAAIgMAAIgMAAIgOACIgOABQgDAAgCgCg");
	this.shape_16.setTransform(198.5,252.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AgEA2QgDgCAAgDIABgEIAAgDIAAgLIgBgLIgBgcIgCgeIgHABQgQAAgJgDQgGgBAAgGQAAgDACgCQACgDADAAIAMACIAMAAIANAAIANAAIAQABIARABQADAAACACQACACAAADQAAADgCADQgCACgDAAIgRgBIgQgBIgGAAIACAhIACAgIABAIIAAAHQAAAFgCAEQgCAFgEAAQgCAAgCgCg");
	this.shape_17.setTransform(189.9,252.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AgeAtQgKgLAAgQQAAgYAVgaQASgVAQAAIAHAAIAFABQACgEAEAAQAFAAACAHIABAOQAAADgCADQgCADgDAAQgFAAgCgGQgCgFgCgBIgIAAQgKAAgMAQQgSAWAAASQAAAKAGAGQAGAHAJAAQAHAAAHgDIANgJQAEgDADAAQADAAACACQACADAAADQAAADgDACQgTASgTAAQgPAAgLgMg");
	this.shape_18.setTransform(179.8,252.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AAaAmIgFgXIgUAEIgSAEIgNAcQgCAEgEAAQgDAAgCgCQgDgCAAgDQAAgEALgXIgBgFQAAgGAHgBIAVgjQARgcAEAAQAGAAACAIIAFAZIAKAyIAFALIACAIQAAADgCACQgDACgDAAQgGAAgFgRgAgIAFIAZgFIgGgbg");
	this.shape_19.setTransform(169.5,252.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AgkA4QgDgDAAgDIAAgRIgBgRIACgTIABgUIAAgLIgBgLQAAgFACgDQADgEAFABIASABQAKABAFAEQAeAQAAAXQAAALgKAHQgIAHgMAEQAXAMALANQACADAAACQAAAEgDACQgCACgDAAQgDAAgCgCQgYgYgdgJIABAPIAAAOQAAADgCADQgCACgDAAQgDAAgCgCgAgXggIABAJIgBAPIgCANIAEAAIADAAQASAAAJgFQAEgBAEgEQADgEAAgCQAAgLgLgIQgKgJgLgBIgLgBg");
	this.shape_20.setTransform(159.6,252.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AgeA4IgCgEIAAgWIABgeIACgeIAAgKIABgLQACgGAFABIAGgBIALAAQAMAAAMAJQANAJAAAPQAAASgOAKQgMAKgRAAIgIgBIgBAnIgBAEQgDADgDAAQgCAAgCgDgAgQgrIAAAOIgCAcIAIABQAMAAAIgGQAJgGAAgMQABgIgJgGQgIgFgJgBIgFAAIgFABg");
	this.shape_21.setTransform(150.9,252.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AgdAzQgNgHAAgKQgBgEADgBQACgCADAAQAEAAACAEQAEAFADACQAGAEAMAAQAKAAAKgFQANgGAAgLQAAgJgLgGQgJgEgMgBQgLAAgJgEQgKgGAAgLQAAgNAPgLQAOgKAOAAQAHAAAJADQAMADAAAFQAAAGgHAAIgKgBIgLgCQgLAAgIAGQgIAFAAAIQAAAHALACIAPACQAQABAKAJQAJAIAAAMQAAASgRAKQgOAJgRAAQgNAAgMgFg");
	this.shape_22.setTransform(137.3,253.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AAaAmIgFgXIgUAEIgSAEIgNAcQgCAEgEAAQgDAAgCgCQgDgCAAgDQAAgEALgXIgBgFQAAgGAHgBIAVgjQARgcAEAAQAGAAACAIIAFAZIAKAyIAFALIACAIQAAADgCACQgDACgDAAQgGAAgFgRgAgIAFIAZgFIgGgbg");
	this.shape_23.setTransform(126.4,252.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("AARA6QgDgDAAgDIgFgOIgFggQgEgTAAgLQgHAYgHAPQgJAUgDALIABADQAAAEgDACQgCACgEAAQgKAAAAgJIgCgJIgIgkIgQg0IgBgCQAAgIAIABQAFAAACAFIAGAPQAEAOAEASIAIAfQAHgSAIgZIAHgWQAHgQAFAAQAFAAACAFQADAHADAXIAFAcIAGAdIAZg/IADgOQACgIADgFQADgEAEAAQAIAAAAAHIgDAIIgDAIIgEAMIgVA1IgLAZQgCAEgGAAQgDAAgCgBg");
	this.shape_24.setTransform(113.6,253);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgZAgQgKgKgBgQQABgSAIgNQALgOAQAAQAMAAAHAEQAJAFAAAKQAAAIgHAGIgQAHIgbANQAEAGAGADQAHADAGAAQAFAAAIgCQAIgBACgFQADgEADAAQADAAABACQABABAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgLAAQgPAAgLgIgAgOgTQgHAHgCANIAWgKQAMgGAGgFQgGgGgLAAQgIAAgGAHg");
	this.shape_25.setTransform(97,254.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_26.setTransform(88.9,254.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_27.setTransform(81.2,254.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgEA0QgCgCAAgDIAAgIIAAgIIgBgrIgQAAQgHgCAAgGQAAgDACgCQACgDADAAIAPACIAAgKIAAgJQAAgDACgCQACgCADAAQAGAAABALIAAAGIAAAEIAAAFIAKgCIAKABQAFACAAAFQAAAEgCACQgCABgEABIgDAAIgEAAIgKAAIACArIAAADIAAAEQAAAPgIAAQgCAAgCgBg");
	this.shape_28.setTransform(73.8,253.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgdAzQgNgHAAgKQgBgEADgBQACgCADAAQAEAAACAEQAEAFADACQAGAEAMAAQAKAAAKgFQANgGAAgLQAAgJgLgGQgJgEgMgBQgLAAgJgEQgKgGAAgLQAAgNAPgLQAOgKAOAAQAHAAAJADQAMADAAAFQAAAGgHAAIgKgBIgLgCQgLAAgIAGQgIAFAAAIQAAAHALACIAPACQAQABAKAJQAJAIAAAMQAAASgRAKQgOAJgRAAQgNAAgMgFg");
	this.shape_29.setTransform(65.2,253.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgFAGQgCgCAAgEQAAgCACgDQACgCADAAQADAAADACQACADAAACQAAAEgCACQgDADgDAAQgDAAgCgDg");
	this.shape_30.setTransform(354.8,255.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AASA0QgDgHgHgJIgLgRIgNAJIgBAVQAAADgBACQgCACgDAAQgHAAAAgKIABgRIAAgRIABgWIAAgYIAAgHIgBgHQAAgEACgBQACgCADAAQADAAACACQACABAAAEIAAAHIABAHIgBAWIAAAXQAJgHAIgHIAPgQQACgCADAAQACAAADACQACACAAADQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQgJAKgMAKIAPAVQAKAOAAAEQAAADgCACQgCACgDAAQgEAAgCgEg");
	this.shape_31.setTransform(349.6,250.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgSAeQgKgJAAgOQgBgNAKgPQAKgRAMABQAHAAAIACQAKAEAAAGQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAIgDgBIgDgCQgEgEgJAAQgGAAgHANQgGALAAAIQAAAIAGAFQAGAGAIAAQAEAAAEgCIAIgFIADgBQABAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAEgKAFQgJAFgGgBQgNABgJgJg");
	this.shape_32.setTransform(341.9,252.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgGAyQgCgCAAgEIAAgLIAAgNIABgQIAAgPQAAgDACgCQACgCADAAQAAAAAAAAQABAAABABQAAAAABAAQAAABABAAQACACAAADIgBAPIgBAQIABANIAAALQAAAEgCACQgCACgCAAQgDAAgCgCgAgDglQgDgCAAgEQAAgDADgCQACgDACAAQAEAAACADQACACAAADQAAAEgCACQgCADgEgBQgCABgCgDg");
	this.shape_33.setTransform(336.4,250.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgaAfIAAgvIAAgGIABgHQAAgHAGAAQAGAAAAALQANgMAPAAQAGAAADAEQADAEAAAIIgBAFQAAAJgGAAQgGAAAAgHIAAgFIgBgGQgKACgGAFQgGAEgEAJIAAAkQAAAHgHAAQgGAAAAgHg");
	this.shape_34.setTransform(331.2,252.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgEAwQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAgBIABgHIAAgIIgCgnIgPgBQgGgBAAgGQAAgDACgCQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAIAOABIAAgJIgBgJQAAAAAAgBQAAAAABgBQAAAAAAgBQABgBAAAAQACgCADAAQAFAAACAKIAAAGIAAAEIAAAEIAJgBIAKABQAEACAAAEQAAAEgCACQgCACgDAAIgDgBIgEAAIgJABIABAnIAAAEIAAADQABAPgIAAQgCAAgCgCg");
	this.shape_35.setTransform(324.3,250.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgXAuQgKgJAAgPQAAgSAKgLQAJgLAPABQAIgBAEADIAHAFQABgdABgKQABgGAFAAQAGAAAAAGIgCAqIgBATQgBAYADALIAAABQAAABAAABQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAgBAAQgDAAgCgGQgGADgFADQgFABgFAAQgOAAgJgKgAgPABQgGAHAAANQAAAJAHAHQAFAGAJAAQAFAAAEgCIAHgFIACgCIAAgNIAAgIIAAgHQgDgGgDgCQgFgDgGAAQgLABgFAFg");
	this.shape_36.setTransform(312.7,250.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgaAfIAAgvIAAgGIABgHQAAgHAGAAQAGAAAAALQANgMAPAAQAGAAADAEQADAEAAAIIgBAFQAAAJgGAAQgGAAAAgHIAAgFIgBgGQgKACgGAFQgGAEgEAJIAAAkQAAAHgHAAQgGAAAAgHg");
	this.shape_37.setTransform(305.4,252.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAWAjIgFgFIgLAGIgIABQgQAAgHgJQgHgIAAgSQAAgPAMgMQALgMAPAAQAGAAAHADQAJAEAAAGIgBACIgBAJIAAAPQgBAIACAFIAEAMIACADIAAABQAAABAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAJAAAKQAAALAEAGQAEAFAIAAQAFAAAFgCIAHgFQgDgSAAgIIABgHIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_38.setTransform(298.3,252.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgSAeQgKgJAAgOQAAgNAJgPQAKgRAMABQAHAAAIACQAKAEAAAGQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAIgDgBIgDgCQgEgEgJAAQgGAAgHANQgGALAAAIQAAAIAGAFQAGAGAIAAQAEAAAEgCIAIgFIAEgBQAAAAABAAQAAAAABABQAAAAABAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAEgKAFQgJAFgGgBQgNABgJgJg");
	this.shape_39.setTransform(291.1,252.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgaAfIAAgvIAAgGIABgHQAAgHAGAAQAGAAAAALQANgMAPAAQAGAAADAEQADAEAAAIIgBAFQAAAJgGAAQgGAAAAgHIAAgFIgBgGQgKACgGAFQgGAEgEAJIAAAkQAAAHgHAAQgGAAAAgHg");
	this.shape_40.setTransform(280.1,252.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgWAeQgLgJAAgPQAAgRAIgMQAKgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgLAEIgZANQAEAFAFADQAGADAGAAQAFAAAHgCQAHgCADgEQACgDADAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAHgMAGQgLAEgKAAQgOAAgJgHgAgNgRQgGAGgCAMIAUgJQAMgGAFgEQgGgGgKAAQgIAAgFAHg");
	this.shape_41.setTransform(272.9,252);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AATA0IgDgQIgBgQIAAgGIAAgFQAAgMgHAAQgIAAgGAHQgEAEgGALQAAAagCAFQgCAEgEAAQgDAAgCgCQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIABgDIABgKIAAgKIAAgyIAAgLIAAgHIgBgGQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABAAABgBQAAAAABAAQAGAAABAGIABAMIgBAPIAAAPIAAAGQAFgHAHgEQAFgEAHAAQAMAAAEAIQADAFAAALIABANIABAOIADAOIAAACQAAADgCACQgCACgDAAQgFAAgBgFg");
	this.shape_42.setTransform(264.9,250.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF0000").s().p("AgiAvQgJgJAAgTQAAgSAJgSQAIgSANgMQAJgIAJAAQAGAAAKAEQANAFAAAGQAAADgDACQgCACgCABIgFgCQgKgHgHAAQgFAAgFAGIgIAJQgQAVAAAYQAAAMAEAGQAEAFAMAAQAMAAAIgIQAKgIAEgPQgUABgMAHIgDAAQgDAAgCgCQgCgCAAgDQAAgEAEgCQANgIAlAAQACAAADACQACABAAADQgBAEgDACQgEAVgOAMQgNANgSAAQgRAAgIgJg");
	this.shape_43.setTransform(252,250.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF0000").s().p("AgtA1QgCgCAAgDIAAgIIABgJIAAgNIAAgNIAAgMIAAgOIgBgNIgBgMQAAgEADgCQADgDADAAQAEAAAFAIQARAaANARQAQATATASIAAgJIAAgIQAAgdgCgSIgCgHIgCgIQAAgIAIAAQAMAAAAAtIgBAVIAAAXIgBALQgBAHgGAAQgEAAgFgFQgcgagjgxIAAAQIgBAOIABARIAAARQAAATgHAAQgEAAgCgDg");
	this.shape_44.setTransform(241.6,250.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF0000").s().p("AgdAyQgCgCAAgDQAAgDACgCQACgCADAAIAOgBIABgNIAAgLIgBgMQAAgPACgXIgJAAIgJAAQgDAAgCgCQgCgCAAgDQAAgGAHgBIAVAAQAMAAAVADQAGAAAAAHQAAADgDACQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAIgLgBIgLgCIgCAlIAAAMIABAMIgBAMIAWgBQADAAACACQABACAAADQAAADgBACQgCACgDAAIgMABIgLAAIgNABIgNABQgDAAgCgCg");
	this.shape_45.setTransform(232.1,250.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FF0000").s().p("AgVA3QgHgCgEgDIgBAAQgDAAgCgCQgCgCAAgDIABgVIABgWIgBgXIAAgYQAAgCADgEQADgDADAAIAKAFIANAGQASAGAOAOQAQAQAAATQAAALgGALQgFALgKAGQgKAIgTAAQgFAAgHgCgAgZgSIAAATIgBAlIACABQAGAEAJAAQAOAAAIgFQAGgFAEgHQAEgIAAgIQAAgSgVgOQgGgFgZgLg");
	this.shape_46.setTransform(223.5,250.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF0000").s().p("AgdApQgJgLgCgSIgBgiIAAgQIABgJQACgEAFgBQAGAAAAAMIAAAoQAAAoAcABQAbAAAAhFIAAgHIAAgFQAAgEACgDQACgEADgBQAHABAAAIIAAAJIAAAIQAABOgpAAQgUABgKgMg");
	this.shape_47.setTransform(213.2,250.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FF0000").s().p("AAYAkIgFgWIgSAEIgRADIgMAaQgCAEgEAAQgCAAgDgCQgCgCAAgDQAAgDALgWQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgFAHgCQAIgOAMgTQAPgaAEAAQAFABACAHIAFAXIAKAvIAEALIACAHQAAACgCACQgDACgCABQgHAAgEgQgAgIAFIAYgFIgFgZg");
	this.shape_48.setTransform(202.7,250.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF0000").s().p("AgdA2QgEgDAAgIIACgXQABgdAAgnQAAgDACgCQACgCADAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQACACAAADQAAAngCAeIgBALIAAAKQASAAAagIIACgBQADAAACADQACABAAADQAAAFgFABQgHAEgRADQgOADgKAAQgHAAgDgCg");
	this.shape_49.setTransform(194,250.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FF0000").s().p("AgcA1QgCgCAAgDIAAgUIABgcIACgbIAAgKIABgKQABgGAFABIAHgBIAJAAQAMAAALAIQAMAKAAANQAAARgNAJQgLAJgQAAIgIgBIAAAkQAAADgCACQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABgBAAQAAAAgBgBQgBAAAAAAQgBAAAAAAQgBgBAAAAgAgOgoIgBANIgBAbIAHAAQALAAAIgFQAIgHAAgKQAAgIgIgFQgHgFgIgBIgFAAIgEABg");
	this.shape_50.setTransform(186.4,250.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF0000").s().p("AgcA1QgCgCAAgDIAAgUIABgcIACgbIAAgKIABgKQABgGAFABIAHgBIAJAAQAMAAALAIQAMAKAAANQAAARgNAJQgLAJgQAAIgIgBIAAAkQAAADgCACQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABgBAAQAAAAgBgBQgBAAAAAAQgBAAAAAAQgBgBAAAAgAgOgoIgBANIgBAbIAHAAQALAAAIgFQAIgHAAgKQAAgIgIgFQgHgFgIgBIgFAAIgEABg");
	this.shape_51.setTransform(179.1,250.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF0000").s().p("AAYAkIgFgWIgSAEIgRADIgMAaQgCAEgEAAQgCAAgDgCQgCgCAAgDQAAgDALgWQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgFAHgCQAIgOAMgTQAPgaAEAAQAFABACAHIAFAXIAKAvIAEALIACAHQAAACgCACQgDACgCABQgHAAgEgQgAgIAFIAYgFIgFgZg");
	this.shape_52.setTransform(170.2,250.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF0000").s().p("AgdA0QgHgGAAgWIABgJIAAgLIgBgEQAAAAAAAAQAAgBABAAQAAgBAAAAQAAAAABgBIABgdIgBgHIAAgIQAAgIAGAAQADAAACACIAQgDIANgBQAQAAAKADQAFACAAAFQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgCACgDAAIgCAAQgMgDgKAAIgMABIgOADIABAHIgCAaIAdgDIARgBQADAAACACQACACAAADQAAAFgHABIgQABIgeADIgBAJIAAAIQAAAPACADQACACAJAAIAMAAIAMAAIAFgBIADAAQAIAAAAAHQAAAGgGABQgHABgUAAQgVAAgGgGg");
	this.shape_53.setTransform(156.8,250.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FF0000").s().p("AgiA0QgCgCAAgDIgBgQIAAgRIABgRIABgTIAAgKIgBgLQAAgEADgCQACgEAFAAIAQACQAKABAFADQAcAPAAAVQAAAKgJAHQgJAHgKADQAUAMALAMQABABAAAAQAAABAAAAQABABAAABQAAAAAAABQAAADgCACQgCACgDAAQgDAAgCgCQgXgXgagHIABANIAAAOQgBADgBACQgCACgDAAQgDAAgCgCgAgVgeIABAIIgBAOIgCANIADAAIADAAQARAAAIgFIAHgEQAEgEAAgDQAAgJgLgJQgIgHgMgBIgJgBg");
	this.shape_54.setTransform(148,250.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF0000").s().p("AAYAkIgFgWIgSAEIgRADIgMAaQgCAEgEAAQgCAAgDgCQgCgCAAgDQAAgDALgWQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgFAHgCQAIgOAMgTQAPgaAEAAQAFABACAHIAFAXIAKAvIAEALIACAHQAAACgCACQgDACgCABQgHAAgEgQgAgIAFIAYgFIgFgZg");
	this.shape_55.setTransform(138.2,250.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgSAmQgLgEAAgGQAAgDACgDQACgCADABQACAAAEADQABACAGABIAIABQAEgBAFgBQAGgCAAgEQAAgKgNgDIgGgCQgJgBgEgDQgFgDAAgHQAAgPANgGIAMgEIANgFIAGgBQADAAACACQACACAAADIABAGIABAFQAAADgCADQgCABgDAAQgEAAgBgCIgCgHIgQAEQgKAFAAAGIAEABQAPADAHAFQAMAGAAAOQAAALgKAGQgIAEgLAAQgJAAgIgDg");
	this.shape_56.setTransform(125.4,251.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgEAwQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAgBIABgHIAAgIIgCgnIgPgBQgGgBAAgGQAAgDACgCQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAIAOABIAAgJIgBgJQAAAAAAgBQABAAAAgBQAAAAAAgBQABgBAAAAQACgCADAAQAFAAACAKIAAAGIAAAEIAAAEIAJgBIAKABQAEACAAAEQAAAEgCACQgCACgDAAIgDgBIgEAAIgJABIABAnIAAAEIAAADQABAPgIAAQgCAAgCgCg");
	this.shape_57.setTransform(118.8,250.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgGAyQgCgCAAgEIAAgLIAAgNIABgQIAAgPQAAgDACgCQACgCADAAQAAAAAAAAQABAAABABQAAAAABAAQAAABABAAQACACAAADIgBAPIgBAQIABANIAAALQAAAEgCACQgCACgCAAQgDAAgCgCgAgDglQgDgCAAgEQAAgDADgCQACgDACAAQAEAAACADQACACAAADQAAAEgCACQgCADgEgBQgCABgCgDg");
	this.shape_58.setTransform(113.7,250.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgUAzQgCADgDAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBgCAAgDIAAgFIAAgGIAAgVIgBgVIAAgTIAAgTQAAgEACgDQACgEAEAAQAFAAAAAGIAAACIgBADIAAAPIAAASQAGgEAGgCQAFgDAEAAQAOAAAJAMQAJAJAAAQQAAAPgKALQgKALgOAAQgLAAgIgEgAgKgCIgKAFIAAAMIAAALIAAALIAJAEQAEABAGAAQAJAAAGgHQAGgHABgKQAAgKgGgHQgFgHgJAAQgFAAgGAEg");
	this.shape_59.setTransform(107.7,250.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgUAzQgDADgDAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQgBAAAAAAQgCgCABgDIAAgFIAAgGIAAgVIgBgVIAAgTIAAgTQAAgEACgDQACgEAEAAQAFAAAAAGIAAACIgBADIAAAPIAAASQAGgEAFgCQAGgDADAAQAPAAAJAMQAJAJAAAQQAAAPgKALQgKALgOAAQgLAAgIgEgAgKgCIgKAFIAAAMIAAALIAAALIAJAEQAEABAGAAQAJAAAGgHQAHgHAAgKQgBgKgFgHQgFgHgKAAQgEAAgGAEg");
	this.shape_60.setTransform(99.4,250.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AAWAjIgFgFIgLAGIgIABQgQAAgHgJQgHgIAAgSQAAgPAMgMQALgMAPAAQAGAAAHADQAJAEAAAGIgBACIgBAJIAAAPQgBAIACAFIAEAMIACADIAAABQAAABAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAJAAAKQAAALAEAGQAEAFAIAAQAFAAAFgCIAHgFQgDgSAAgIIABgHIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_61.setTransform(91.5,252.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgaAfIAAgvIAAgGIABgHQAAgHAGAAQAGAAAAALQANgMAPAAQAGAAADAEQADAEAAAIIgBAFQAAAJgGAAQgGAAAAgHIAAgFIgBgGQgKACgGAFQgGAEgEAJIAAAkQAAAHgHAAQgGAAAAgHg");
	this.shape_62.setTransform(84.7,252.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgWAeQgLgJAAgPQAAgRAJgMQAJgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgLAEIgaANQAEAFAGADQAGADAHAAQAEAAAHgCQAHgCADgEQACgDADAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABQAAAHgMAGQgKAEgKAAQgPAAgJgHgAgNgRQgGAGgCAMIAUgJQAMgGAFgEQgGgGgKAAQgIAAgFAHg");
	this.shape_63.setTransform(73.3,252);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AATA0IgDgQIgBgQIAAgGIAAgFQAAgMgHAAQgIAAgGAHQgEAEgGALQAAAagCAFQgCAEgEAAQgDAAgCgCQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAAAIABgDIABgKIAAgKIAAgyIAAgLIAAgHIgBgGQAAgBAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABAAABgBQAAAAABAAQAGAAABAGIABAMIgBAPIAAAPIAAAGQAFgHAHgEQAFgEAHAAQAMAAAEAIQADAFAAALIABANIABAOIADAOIAAACQAAADgCACQgCACgDAAQgFAAgBgFg");
	this.shape_64.setTransform(65.3,250.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgEAyQgCgCAAgDIAAgDIABgDIgBgKIAAgKIgCgaIgCgcIgGAAQgPAAgIgCQgGgBAAgGQAAgDABgCQADgCADAAIALABIALABIANAAIALAAIAPABIAQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIgQAAIgPgBIgFAAIACAfIABAdIABAHIAAAIQABAEgCAEQgCAEgEAAQgCAAgCgCg");
	this.shape_65.setTransform(57.1,250.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},138).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]},57).wait(105));

	// Layer 3
	this.instance_1 = new lib.FormulaProgressive_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(205.4,151.2,1,1,0,0,0,198.3,33.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(67).to({_off:false},0).wait(61).to({regX:198.4,scaleX:0.64,scaleY:0.64,x:204.3,y:-10.9},8).wait(164));

	// Layer 1
	this.instance_2 = new lib.WhiteSheet();
	this.instance_2.parent = this;
	this.instance_2.setTransform(206.3,103.5,1,1,0,0,0,206.3,103.5);
	this.instance_2.alpha = 0.84;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(119).to({alpha:0},9).wait(172));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,0,414.3,207);


(lib.Stace_Scarf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_22 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(22).call(this.frame_22).wait(1));

	// Layer 2
	this.instance = new lib.Scarf();
	this.instance.parent = this;
	this.instance.setTransform(18.2,18.8,1,1,45,0,0,18.2,7.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({rotation:0},7).to({regX:18.3,regY:7.8,rotation:15,x:18.4,y:18.9},7).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFDBC8").s().p("AiNBZQANABAygCQgHgIgYADIghAFIgHgHIAAAAQAdgFAYgPIAEgDIgRAEIgDgEIALgTQAjgDAXAaIALANQA7gEA6gNQAUgDAUAAQgcgwgpgmIgegbQgDgRAGgKQAGgLANgCIAIAAIAkAnQASAWAMAbQAQAfANAiQgJAVgYAFQg+ALg+ABQg+ABhSAFQAOgGgFgEg");
	this.shape.setTransform(32.4,9.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiaBdQBSgFA+gBQA+gBA+gLQAYgEAJgWQgNgigQgfQgMgagSgXIgkgnIAPAAIAVAPQAGAFABACQAbA8AeA5QAPAdgjAMQhEAYhIgDQg7gBhRAIQADgGgJgFgAiRBTIgBgBIAhgFQAYgDAGAIIgtABIgRAAgAibBDIAJAAIAGgCIAbgJIARgEIgEADQgYAPgdAFQgDgDABgFgAgvA5QgXgbgjADIgLAUIgPgFIgEABIAAgQQAvgSAXAQQAXARASAJQASAJAvgLQAjgHAdgJIgPgTQgWgdgggcIgOgMIAAgPIAeAbQApAmAcAwQgUAAgUADQg6AOg7ADIgLgMg");
	this.shape_1.setTransform(32.8,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.3,0,60.8,45.9);


(lib.Cards = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// card2
	this.instance = new lib.Card2();
	this.instance.parent = this;
	this.instance.setTransform(27.5,3,0.91,1.205,45,0,0,8.4,4.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({regX:8.3,scaleX:1.06,scaleY:1.48,rotation:-60,x:22.3,y:9.9},5).to({regX:8.4,scaleX:1,scaleY:1,rotation:0,x:25.2,y:24.8},5).to({regY:4.8,rotation:75,x:13.5,y:52.1},8).to({regX:8.9,regY:6.6,rotation:15,x:31.1,y:76.5},5).to({regX:9,rotation:45,x:29.6,y:85.4},5).wait(49).to({regX:8.4,regY:4.7,scaleX:0.91,scaleY:1.21,x:27.5,y:3},0).wait(11));

	// card1
	this.instance_1 = new lib.card1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(31.1,0.2,0.862,1,165,0,0,8.1,7.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({regX:8,regY:7.1,rotation:75,x:20.8,y:8.5},5).to({regY:7,rotation:0,x:29.7,y:37},5).to({rotation:105,x:20.9,y:61.9},8).to({rotation:135,x:18,y:82.2},5).wait(54).to({regX:8.1,regY:7.2,rotation:165,x:31.1,y:0.2},0).wait(11));

	// card4
	this.instance_2 = new lib.Card3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(29.1,-0.2,1,1,165,0,0,5.7,7.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({rotation:105,x:20.6,y:3.2},5).to({regY:7.5,rotation:0,x:20.5,y:15.1},5).to({rotation:-60,x:37.5,y:44.7},8).to({rotation:-135,x:20.3,y:77.1},5).to({rotation:-105,x:20.9,y:81.8},5).wait(49).to({regY:7.6,rotation:-195,x:29.1,y:-0.2},0).wait(11));

	// card5
	this.instance_3 = new lib.Card4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(31,-0.5,1,1,150,0,0,6,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12).to({regY:6.9,rotation:90,x:15.9,y:-2.3},5).to({rotation:0,x:7,y:6.9},5).to({rotation:75,x:16.4,y:44.9},8).to({regX:7.5,regY:5.5,rotation:135,x:18.6,y:72.1},5).to({rotation:75,x:27.8,y:79.8},5).wait(49).to({regX:6,regY:7,rotation:150,x:31,y:-0.5},0).wait(11));

	// card6
	this.instance_4 = new lib.Card6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(31.1,0.3,0.938,1,0,0,180,5.4,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({x:20.8,y:5.2},5).to({scaleX:1,skewY:0,x:12.4,y:41},5).to({rotation:90,x:5.5,y:67.8},8).to({rotation:60,x:8.7,y:83.8},5).wait(5).to({_off:true},49).wait(11));

	// card7
	this.instance_5 = new lib.card7();
	this.instance_5.parent = this;
	this.instance_5.setTransform(27.8,-0.2,0.702,1.194,105,0,0,8,7.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(12).to({regX:8.1,regY:7.2,rotation:135,x:20.8,y:4.4},5).to({scaleX:1,scaleY:1,rotation:0,x:12,y:40.9},5).to({regX:6.7,regY:7.8,rotation:-75,x:28.2,y:62.1},8).to({rotation:30,x:38.9,y:82.4},5).to({rotation:45,x:37.3,y:82.6},5).to({_off:true},49).wait(11));

	// card8
	this.instance_6 = new lib.Card8();
	this.instance_6.parent = this;
	this.instance_6.setTransform(29.1,-0.2,0.787,1.133,180,0,0,9.1,5.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(12).to({regX:9,rotation:60,x:16.3,y:14.2},5).to({regX:9.1,scaleX:1,scaleY:1,rotation:0,x:13,y:52.5},5).to({regY:6,x:28,y:79},8).to({regY:5,rotation:-15,x:35.2,y:83.1},5).wait(5).to({_off:true},49).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(18,-9.5,21.7,22);


(lib.BunnyHeads = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.BunnyHeadsNodding();
	this.instance.parent = this;
	this.instance.setTransform(27.7,28.4,1,1,0,0,0,27.7,28.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({rotation:-7.5,x:28.1,y:27.6},8).wait(9).to({rotation:22.5,x:28.5,y:32.2},16).wait(7).to({x:28.8,y:33.1},0).to({rotation:0,x:27.7,y:28.4},13).wait(1).to({rotation:-7.5,x:28.1,y:27.6},5).to({rotation:0,x:27.7,y:28.4},5).wait(1).to({rotation:-7.5,x:28.1,y:27.6},5).to({rotation:0,x:27.7,y:28.4},5).wait(1).to({rotation:-7.5,x:28.1,y:27.6},5).to({rotation:0,x:27.7,y:28.4},5).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42.6,33.2);


(lib.BunnyClap2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgtBHIAAgCIAAAAQAGgFgFgRQgEgRADgDQAMANgCAWQAAAKgCAHgAACAZQgLgJAAgNQAFAHARAMQAPAMgLAJQgBgJgOgJgAgFgWQANgGAnAKQgCAEgKAAQgNAAgbgIgAAkhEQgHAKgpAQQAMgRAkgJgAgcg3IAHgXQAEAAAAAGQgBAWgHAAQgDAAAAgFg");
	this.shape.setTransform(16.2,7.2);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(63).to({_off:false},0).to({_off:true},3).wait(2).to({_off:false},0).to({_off:true},2).wait(3).to({_off:false},0).to({_off:true},3).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},2).wait(3).to({_off:false},0).to({_off:true},3).wait(2).to({_off:false},0).to({_off:true},3).wait(6));

	// Layer 2
	this.instance = new lib.Bun1Arm1();
	this.instance.parent = this;
	this.instance.setTransform(1.6,2.7,0.999,0.999,26,0,0,1.4,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(56).to({scaleX:1,scaleY:1,rotation:0},4).wait(3).to({rotation:-15,y:2.8},0).wait(3).to({rotation:0,y:2.7},0).wait(2).to({rotation:-15,y:2.8},0).wait(2).to({rotation:0,y:2.7},0).wait(3).to({rotation:-15,y:2.8},0).wait(3).to({rotation:0,y:2.7},0).wait(2).to({rotation:-15,y:2.8},0).wait(1).to({rotation:0,y:2.7},0).wait(2).to({rotation:-15,y:2.8},0).wait(2).to({rotation:0,y:2.7},0).wait(3).to({rotation:-15,y:2.8},0).wait(3).to({rotation:0,y:2.7},0).wait(2).to({rotation:-15,y:2.8},0).wait(3).to({rotation:0,y:2.7},0).to({scaleX:1,scaleY:1,rotation:26},5).wait(1));

	// Layer 1
	this.instance_1 = new lib.Bun2Arm2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(6,2.8,0.998,0.998,41.8,0,0,0.5,1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(56).to({scaleX:1,scaleY:1,rotation:0,x:6.1},4).wait(3).to({scaleX:1,scaleY:1,rotation:25.8,x:5.4,y:1.6},0).wait(3).to({scaleX:1,scaleY:1,rotation:0,x:6.1,y:2.8},0).wait(2).to({scaleX:1,scaleY:1,rotation:25.8,x:5.4,y:1.6},0).wait(2).to({scaleX:1,scaleY:1,rotation:0,x:6.1,y:2.8},0).wait(3).to({scaleX:1,scaleY:1,rotation:25.8,x:5.4,y:1.6},0).wait(3).to({scaleX:1,scaleY:1,rotation:0,x:6.1,y:2.8},0).wait(2).to({scaleX:1,scaleY:1,rotation:25.8,x:5.4,y:1.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:6.1,y:2.8},0).wait(2).to({scaleX:1,scaleY:1,rotation:25.8,x:5.4,y:1.6},0).wait(2).to({scaleX:1,scaleY:1,rotation:0,x:6.1,y:2.8},0).wait(3).to({scaleX:1,scaleY:1,rotation:25.8,x:5.4,y:1.6},0).wait(3).to({scaleX:1,scaleY:1,rotation:0,x:6.1,y:2.8},0).wait(2).to({scaleX:1,scaleY:1,rotation:25.8,x:5.4,y:1.6},0).wait(3).to({scaleX:1,scaleY:1,rotation:0,x:6.1,y:2.8},0).to({scaleX:1,scaleY:1,rotation:41.8,x:6},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,0.8,15.8,11.4);


(lib.BunnyClap1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag5ATIAAgJIADgBQAHAAABAjIAAALQAAAAgBAAQAAABgBAAQAAAAAAAAQgBAAgBAAgAgcAHQAAgEADAAQALAAAXApQAAAFgEAAgAhvAVIAagWQAEAAAAACQAAADgKAKQgLAKgFAAgABtgQIADgMIgCANIgBgBgAgGgkIAAgFIAXgOQAFAAAAADQAAACgLAIQgLAHgDAAIgDgBg");
	this.shape.setTransform(17,8.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag5ATIAAgJIAEgBQAGAAACAjIgBALQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAgAgcAHQAAgEAEAAQAKAAAYApQAAAFgEAAgAhvAVIAagWQAFAAAAACQAAADgKAKQgLAKgGAAgABwgZIAAABIAAABIgBAAIABgCgAgGgkIAAgFIAYgOQAFAAAAADQAAACgLAIQgMAHgCAAIgEgBg");
	this.shape_1.setTransform(16.9,8.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag4ATIAAgJIAEgBQAGAAACAjIgBALQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAgAgbAHQAAgEAEAAQAKAAAYApQAAAFgEAAgAhuAVIAagWQAFAAAAACQAAADgKAKQgLAKgGAAgABvgQIAAAAIAAABgAgFgkIAAgFIAYgOQAFAAAAADQAAACgLAIQgMAHgCAAIgEgBg");
	this.shape_2.setTransform(16.8,8.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgMATIAAgJIADgBQAHAAABAjIAAALQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAgAAQAHQAAgEADAAQALAAAYApQAAAFgEAAgAhCAVIAagWQAEAAAAACQAAADgKAKQgLAKgFAAgAAmgkIAAgFIAYgOQAFAAAAADQAAACgLAIQgLAHgEAAIgDgBg");
	this.shape_3.setTransform(12.5,8.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},59).to({state:[]},3).to({state:[{t:this.shape}]},2).to({state:[]},2).to({state:[{t:this.shape_1}]},3).to({state:[]},3).to({state:[{t:this.shape}]},2).to({state:[]},1).to({state:[{t:this.shape_2}]},2).to({state:[]},2).to({state:[{t:this.shape_3}]},3).to({state:[]},3).to({state:[{t:this.shape_3}]},2).to({state:[]},3).wait(10));

	// Layer 2
	this.instance = new lib.Bun1Arm1();
	this.instance.parent = this;
	this.instance.setTransform(1.6,2.7,0.999,0.999,26,0,0,1.4,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(53).to({scaleX:1,scaleY:1,rotation:0},3).wait(3).to({rotation:-15,y:2.8},0).wait(3).to({rotation:0,y:2.7},0).wait(2).to({rotation:-15,y:2.8},0).wait(2).to({rotation:0,y:2.7},0).wait(3).to({rotation:-15,y:2.8},0).wait(3).to({rotation:0,y:2.7},0).wait(2).to({rotation:-15,y:2.8},0).wait(1).to({rotation:0,y:2.7},0).wait(2).to({rotation:-15,y:2.8},0).wait(2).to({rotation:0,y:2.7},0).wait(3).to({rotation:-15,y:2.8},0).wait(3).to({rotation:0,y:2.7},0).wait(2).to({rotation:-15,y:2.8},0).wait(3).to({rotation:0,y:2.7},0).to({scaleX:1,scaleY:1,rotation:26},8).wait(2));

	// Layer 1
	this.instance_1 = new lib.Bun2Arm2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(6,2.8,0.998,0.998,41.8,0,0,0.5,1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(53).to({scaleX:1,scaleY:1,rotation:0,x:6.1},3).wait(3).to({scaleX:1,scaleY:1,rotation:25.8,x:5.4,y:1.6},0).wait(3).to({scaleX:1,scaleY:1,rotation:0,x:6.1,y:2.8},0).wait(2).to({scaleX:1,scaleY:1,rotation:25.8,x:5.4,y:1.6},0).wait(2).to({scaleX:1,scaleY:1,rotation:0,x:6.1,y:2.8},0).wait(3).to({scaleX:1,scaleY:1,rotation:25.8,x:5.4,y:1.6},0).wait(3).to({scaleX:1,scaleY:1,rotation:0,x:6.1,y:2.8},0).wait(2).to({scaleX:1,scaleY:1,rotation:25.8,x:5.4,y:1.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:6.1,y:2.8},0).wait(2).to({scaleX:1,scaleY:1,rotation:25.8,x:5.4,y:1.6},0).wait(2).to({scaleX:1,scaleY:1,rotation:0,x:6.1,y:2.8},0).wait(3).to({scaleX:1,scaleY:1,rotation:25.8,x:5.4,y:1.6},0).wait(3).to({scaleX:1,scaleY:1,rotation:0,x:6.1,y:2.8},0).wait(2).to({scaleX:1,scaleY:1,rotation:25.8,x:5.4,y:1.6},0).wait(3).to({scaleX:1,scaleY:1,rotation:0,x:6.1,y:2.8},0).to({scaleX:1,scaleY:1,rotation:41.8,x:6},8).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,0.8,15.8,11.4);


(lib.BunnyClap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.BunnyClap2();
	this.instance.parent = this;
	this.instance.setTransform(19.5,2.4,1,1,0,0,0,7.8,4.5);

	this.instance_1 = new lib.BunnyClap1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(7.8,12.4,1,1,0,0,0,7.8,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BunnyClap, new cjs.Rectangle(-1.4,-1.3,27.4,21.5), null);


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
		var bgm = createjs.Sound.play('bgmP',{loop:-1});
		//var vo = createjs.Sound.play('VO');
		
		//volume vars -----------------------------------------
		var mute= false;
		bgm.volume = 0.5;
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
		
		 window.open ("pro_Scene3.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("pro_Scene1.html","_self");
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


(lib.Stace_scarf_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Stace_Scarf();
	this.instance.parent = this;
	this.instance.setTransform(37.6,3.1,0.999,0.999,66.9,0,0,37.6,3.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({scaleX:1,scaleY:1,rotation:0},7).wait(71).to({scaleX:1,scaleY:1,rotation:66.9},8).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-34.7,57.3,54.8);


(lib.fcb_states = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{up:0,press:1,uncheckedDisabled:2,checkedDisabled:3,checkedPress:4,checkedEnabled:5});

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


(lib.Buffy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Stace_scarf_anim();
	this.instance.parent = this;
	this.instance.setTransform(104.4,7,1.466,1.466,0,0,0,24.2,21.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3
	this.instance_1 = new lib.BunnyHeads();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-102.3,9.8,1.885,1.885,0,0,0,21.4,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 5
	this.instance_2 = new lib.BunnyClap();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-95.7,38.9,1.885,1.885,0,0,0,14.5,8.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 6
	this.instance_3 = new lib.Cards();
	this.instance_3.parent = this;
	this.instance_3.setTransform(42.6,-5.8,1.466,1.466,0,0,0,18.8,29.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Layer 7
	this.instance_4 = new lib.StaceHead();
	this.instance_4.parent = this;
	this.instance_4.setTransform(113.7,-39.1,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Layer 8
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#006666","#45FF24"],[0,1],-112.5,92.4,-112.5,-95.3).s().p("AhvALQAGgLABgGQANgEAGAMQgDAWgVADQgFgJADgHgAgbgCQgIgEAGgFQAIgIgBgGQAIALAOABQAPACAGgPQAFANgFAfQglgggLAMgAA4ALQgTgFgLgIQAIgHABgHQAcAXAGgJQAGANgNAAIgGAAgABYgVQAXATACAKQgZgGAAgXg");
	this.shape.setTransform(161.9,81.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#60ECFF","#FFFFFF"],[0,0.506],71.3,-188.8,71.3,37.8).s().p("AAAgDIADAEIgFADIACgHg");
	this.shape_1.setTransform(-71.2,75.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF66").s().p("AgKgJIALAAIAKATQgLgIgKgLg");
	this.shape_2.setTransform(127.2,-25.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3399FF").s().p("AhRCNIgLgkIAAgCQgJghgDgYIgBgSQARAKAVAGQAfAJAlACQAZABAVgCQAngEAegNQAlAcANBoIADAcQgOABAAgNIAAgDQgKAehEAYQgIABgDgHQgEgIgsgcIAQAnIgFADQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAIAAABQgOAGgjABQgWAAgJABIgchrgAhlikQAKgSAJACQgLgIABgHQAEgLACgMQgUgBgEAUQgDAMgCAbQgjgFgSgnIAmgrQAzAbB+AKIAjACQgFAIgKAkIgUAEQgsAJgiAAQgqAAgcgNg");
	this.shape_3.setTransform(111.3,5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFDBC8").s().p("AHMKIQgihFhMiCIgHgOQhQiIgkhMQgRgHgIgGIgEgDQgWg/gCgpIAAgBIAEAAQAXAAAdgNIAVgLIAFAIQAMAVgBApQgBA4AJAXQANAfA4AgQAXAeALAvIAQBTIACAPQAIAeAgAoIAMAOQAqAxAIAZQgSAZgUAAgACbJ/QgEgLgGABQgGAKgQAHQgSAGgNgJQAegMAVgKQAfgQAPgPQAGhHgNhMQgFgegIgeIgGgQQgchXgOg3IgEgSQgIgEgCgJIgFgGQgRgRgRguIgDgMQAJABASABQAmAAARgIIADAAIAAACQAFAUAEAjIANAhQAKAIADAMQAEAOgFAVQAlA4gMCIQgCAZgEAcQAOANAOAqQANAoARAMQgGAMgWACQgUAAgFAPQgJACgEgHQgHgIgEgBQgKAHgJAWQgHAAgDgJgACPBgQAAgBABAAQAAgBAAAAQABgBAAAAQAAAAAAgBIACABIgCABIgCACgAB2hgQgXgBgTgEQgogJgTgWIgHijQAoASBxgPIAQgDQgKAVADAgIABAFIAAABQAEAiAYAnIAOAWQAKAQACAAQgWAXgqAFQgMACgPAAIgSgBgABKiZIAIAJQAHAAAAgGQgEgJgGgBQgFAAAAAHgAkYmhQgkhwg3gbQgRADgNABQglACgGgPQALgIASgVQABAFAJALQAGAIgCAKQA3gYAcAiQAXgdAJgPQARgdgQgYQAEADARADQAQABADAIQACAgglAoQACA8AjBPQAnBaAkgRQAXgIAygxQAugsAjgKQgJgPApAEQAnABAUAKQACgNAPgFQANgFADgEQAJABAHACIAIABIAEAeIABAAQgBAFACADQAMgDALgBQAkgFAfAJQAVAHASAOQALAGAJALIgOAHQgaANgHAMQgJADgEAEIgGgEIgCAAQgaAGggAAQgaABgfgEQhIgJgigWQANgIgDgNQh9BthSAkIgIAIQglgggmh2gAlbpDQANgRAogRQgCAUgWAYQgLgDgSgHgAnxphIA6AAQABANgTADIgLABIgDABQgcAAACgSg");
	this.shape_4.setTransform(99.6,19.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#006666","#45FF24"],[0,1],123.4,145,123.4,-96.3).s().p("ADMAMQgCgGABgBQAMgDAFAKIABAGQADAQgJAHQgJgUgCgJgABxAjQgCgJALgCIAYAAIgQALgABJAiIAGgKQAUgEANAPgAAhAhQAHgFANACIgBAEgAisAeIgCgEQgFgMAKgDQAMAFALAPgAi/AeIgEgFIgEgFIgBgFIAAgGQAMALAHAKgADqANIAAgCQAUgFANAIgAj0gMIgJgBIgDgFQgEgEgEABIgCgTQAGAHAJAHIAUAQQgGgCgHAAg");
	this.shape_5.setTransform(-123.8,69.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Au0KSIgFgBQgEglAdAGIgUglQgSAFASAaQgPgJgkAKQgaAIgJgcQgEAAgDATQgOgWgWADQAUgJgGgYQgFgaAJgJQARAEAGAmQAGAlAWABQgVgVABgWQAuAfAXAFQgJgPgfgXQgZgSgEgYQgLhRB4hCIAxgbQBJgnACAAIABgWQAQAIAhAMQABgQALgFIAkgBIABAAQgEAvgBABIgDAEIAdABQgDAFgDAJIAAADIgJAoQgVAoAAAdIAAAOIgKAAQgQgKgIgNIgzgQQAOAQgKASQhBAJgcAbQDOgwAGBpQgQAohDARIhuAeQAfgTgfg/QgKALAKAaQAJAYgPAIQgPgNgEgZQgPAKAVApIgDACQgGAFgOAAQgPAAgZgGgArpE6IgDAFQACACACAEIAAgOIgBADgApjJsQgBgZgMAAQAHgJAYABQAXACAIAGQgPAZgZAAIgJAAgAqnJlQAJgSAWgEQAYgEgGAhQgvgEgCgDgAq0HpIACAAIgGgFIABgEIADgdIAhAMIAGADQAHABgBAMQAqA7grAgQgLgOghhDgAorH2QAngDBJgKQgPAYgoAKQgKABgIAAQgdAAgKgWgAp3HaIABgEQgBgGgHgFIgFgJIgEgIIAAADQgOgPgVAAIgGAAIAEgLIAZhAIAFgMIAIAAIgBgBIgBgCIAEgDQANgIAMgJQATgQANgRIABgCIAPgZQAGgMADgMIAEgOIAAhBIAQAAIAVgNIAZAbIAYAaQAiAnAFAuQADAfgKAjQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAIgHAHQgNALgWAJQgHgRgRgGQgGgDgHgBIgfAAIABACQgMAAgLACQgoAHghAdIgXAVIgDAEIABAAIAKAFQArgpA8gNIAjgCQAOAEAGAPQAKAUgLANIgFAEQAFALAJgIQAJgMAIAEQAFAbgkAdQgSgPgSACQgLABAFAJQAGAKAGgBQgIAQgkgQQgJABAFALQAEAKAGADQgCAFgdAGIgUgngAnUHXQAZhFgPgLIgEgCIAJgEQAogQBSAhQgZArg/AGQAKAaAigNQAsgOASAIQgcAUgqAAIhVgHgAOkoHIgCgCQgpg2gcgPQApgZAcgUQAXgQAOgMQAdAEAiBTQARAWAfAaQABABgJASQgGASAOACQguAcgaALQghgQgpg1gAQLoQQgCAWARgCQABgUgPAAIgBAAgAO9ojQAYADAjAVQAFgGgFgMQgIgPACgKQgigSgcgGQAAAOAJAdgAN8pFQAEAQANgBQACgOADgBQALAJAEgNQgTgRgPgDQgIAKAFAOg");
	this.shape_6.setTransform(-39.2,6.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AQ8LUQgmAAgKgQQgKAHALAKQAJAKgFACQgUgMgOgCQgGgBgCAHQgCAIgEAAQgpgLgIgcQACgNAXgGQgSAfAlASQAMgsAHgTQAMABgFAUQgGAVAJAGQAMABgCgWQgCgZAGgCQAFAWAYAfQAGgEAEgGIAEgHIABgEQACgHAAgHQADgcAPgPQANAPgYAhIAFABQAcAFAjgZQgEgKgBgKQgBgHABgHQAIACAFAMIACAGQAVgPgHhIQgCgbgHghIgGgYQgIgigNgoQgchTgLgmIgEgRIAAgBIgBgCIgBgGIgCABIgGgKQgQgbgMgZIgEgLQgMgdgDgQQgGgugIgTQgDgVgFgOIgDgHQgEgHgEgFIgCgGIACAAIgGgnQgCgJgDgFIgDgFIgCgMQAAgLAHgDIgBAAQADhOAAgkIAAgMQAAgSgCgDQgGgPgQgLQgrgegEgHQgPAGgwAiQglAagdgDQBRgkB+htQAEANgNAIQAiAWBIAJQAeAEAbgBQAfAAAagGIACAAIAGAEIgDAGQgGADgCAHQgGAEAAAKQgGAJgEANIgNAtQgGANgBAOIABAJQAEAmApAvIALANIAAAAQArBdANA2QAEATABAOQABAIgZAQIACAQQABATgBAlQgBAvAJAaQALAgA+AoQAhArAPBJQADARABAhIABAOQAEAPANATQAMASAUAUQAjAlAKAXIADAHQAKABgGgYQAEgBADABQAJADAEAQQAEgBADgOQABgMALACQACANgHAMIAdAOQABgQgOgTIgFgHQgJgPADgPQAZAmAJAYQAJgDAFgGQABAGgIAIQgGAFAIAFQALgNAmAhQAFgggFgNQgGAPgPgBQgPgCgIgLQAMgNgMgZQANAJALAiQAhgWgNgMQAJgFAJAXQAKAYAKACQAPADAKgKQAKgNAJAAQABAQANACQAIABAWgFQgCAIAHAHQgBALgSADQgTACgBAIQgLAAgOgUQgHAAgCANQgCAMgIAAQgLgIgfAFQgaADgJgTQgCAYgSgFQgBgPAGgKQgJAHgjAIQgeAGgIAOQgEgFgIAAQgPgCgcAIIgBABIgNAEQgfAEgLgZQgBgBgaAMQgOAGABgVQATARAVghQAOAYAKABIAAgTIgDgCQgLgGgKgCQgegJgXAXQgQADACgRQgRAVALADQgKANgYgbQgFAUgTgGQgDAGAJAHQAGAFgHACQgRgBAFgLQAHgNgFgFQgIgGgDAGQgFALgMgBIgQgOIAAAAIAAAAIgLAKIgIAEIgbABQgHgBgGAKIgDAFQgOABgEgGQgCgEABgGQgKABgDAJQgBAEABAGIADATQgNgXgkAAgAXrKnQgBAHgGALQgDAHAFAJQAVgDADgWQgFgJgJAAIgFAAgASTCoQACApAXA/IADADQAIAGARAHQAkBMBQCIIAIAOQBLCCAiBFIABAAQAUAAASgZQgJgZgqgxIgLgOQghgogHgeIgDgPIgPhTQgLgvgYgeQg3gggNgfQgKgXACg4QAAgpgLgVIgFgIIgVALQgdANgXAAIgFAAIAAABgASBLAQADAJAGAAQAKgWAJgHQAFABAGAIQAFAHAIgCQAFgPAVAAQAWgCAGgMQgSgMgNgoQgOgqgOgNQAEgcACgZQAMiIglg4QAFgVgDgOQgDgMgKgIIgNghQgFgjgEgUIgBgCIgCAAQgSAIglAAQgSgBgKgBIAEAMQARAuAQASIAGAFQACAJAHAEIAFASQAOA3AcBXIAFAQQAIAeAFAeQAOBMgHBHQgOAPgfAQQgWAKgdAMQAMAJATgGQAQgHAGgKIAAAAQAGAAAEAKgAZuKsQALAIATAFQAVADgIgQQgGAKgcgZQgBAHgIAIgASsFBQAYArAECCIABAPQAEBqAnAoQgGADADAOQACAJAGANQAMADAGgMQAGgMAKACQAEATAKAAQAIgPgDgKQgFgSAAgLQAIAAAIAGQgMgfAQgIQAHAHgIAjQgHAdAXAGQAJgIAPgRQACARANgGQAKgFAHACQAEAAACACQgthYgkhEQhDh6gog3QgOgUgLAAQgFAAgEAFgAbFK2QgCgKgXgTQAAAXAZAGgAPxggQADAYAJAhIAAABIALAlIAbBrQAKgCAWAAQAkAAANgHIADgCIABgBIgBgBIAFgCIgQgoQArAcAEAJQADAGAJgBQBDgXAKgeIAAADQABAMAOAAIgDgcQgOhogkgcQgfAOgmADQgWACgYgBQgmgBgfgKQgVgGgSgKIACASgAP3hDQATAWAnAJQATAEAYABQAZACAUgDQAqgFAVgXQgBAAgLgQIgOgWQgYgngEgiIAAgBIAAgFQgDggAJgVIgPADQhyAPgogSgAP0jzQA0AZBhgVIAUgEQAJgkAGgHIgjgCQh/gLgzgbIgnArQASAoAkAEQACgaADgMQAEgVATACQgBAMgEAKQgBAHALAIIgCAAQgIAAgJAQgAM+LoQgMgDgEABIgKgiQAFACAHARQAGANAQgDQgCAHgEAAIgCAAgAOQLcQgQgEAAgKIgYAOQgNgLADgNQALgCAEARQAEggAKgHQAOAtAdgBQgFAFgIAAIgJgBgAL/LQQAEgOANACQACAMgGAMIgCAAQgPAAAEgMgAM8K6QgCgfARACQgcAYAcAFQgCAEgDAAQgEAAgGgEgAb6KPQASALABAcQgigSAPgVgAQdKkQgBgPADgGQAFABAFAmQgKgBgCgRgAVUJ3QgHAlgMABQACgjARgDgAURJuQALAAACATQABARgEAHQgKgNAAgegAVjJ9IgJgeQANAEAIATQAHATgEAKQgLgEgEgSgA1mJSQgLgPgMgFQgLADAFAMIACAEQAEAJgHACQgCgFgEgGQgGgKgNgLQgKgIgOgIIgGgEIgVgQQgIgHgGgHQgGgIgDgIQABgIAGABIADABQAKAFgCAGQAjg9AVgBQADhTBQgtQAmgQAjgSQAygbAughIAAAWQgDAAhIAnIgxAbQh5BCAMBRQAEAYAYASQAfAXAKAPQgYgFgtgfQgCAWAVAVQgWgBgFglQgHgmgQgEQgJAJAFAaQAFAYgTAJQAWgEAOAXQACgTAEAAQAJAcAagIQAkgKAQAJQgSgaASgGIAUAmQgdgGAEAlIAFABQAuALAOgKIACgCQgVgpAQgKQAEAZAOANQAQgIgJgYQgKgaAKgLQAfA/gfATIBugeQBDgRAQgoQgHhpjOAwQAdgbBAgJQALgSgOgQIAyAQQAJANAQAJIAKABIAAgOQAAgdAVgpIAIgnIABgEQACgIAEgFIgdgBIADgEQABgBAEgvIAhAtIABAAIACgDIABgCIA2gmIADgEIABgCIALgKIAgh2IgBBAIgDAPQgEAMgGAMIgPAZIgBACQgNARgTAPQgLAKgOAIIgEADIACACIAAABIgIAAIgEAMIgaBAIgDALIAFAAQAWAAAOAPIAAgDIADAIIAFAJQAIAFAAAGIAAAEIAUAnQAcgGADgFQgHgDgDgLQgGgKAJgBQAlAQAIgQQgHABgFgKQgFgJAKgBQASgCASAPQAlgdgGgbQgHgEgKAMQgJAHgFgKIAFgEQALgNgJgVQgHgPgNgDIgjABQg8AOgsApIgKgFIAAAAIACgEIAXgVQAigdAogHQALgCALAAIAAgCIAeAAQAIABAFACQARAHAHARQAWgJAOgMIAHgGQAAAAABgBQAAAAABAAQAAAAABAAQAAgBABAAQAKgjgEgfQgEgugjgnIgYgaIgZgbIAfAVQBBApAIBMIABAZIgBAuIAAABQACADAFAEQAMAIAaADQAmAFAIAMIABAEIAOAOQgGARgNAJQAKAJAnAEQgCAXgbAJIgjANIgLAEQAJA0gDAEQAJAFAQABQANAEAAAVIgEgCQgMgGg1gXQgDgHAcgGQgLgSAGgSQgIgEgJAAQgagBgoAVQgdAQgXAFQgVAEgQgEIgDgBIgCAAIgCgCIgBgCIgfgGIgCAFIgYAAQgJAAgDAMQgDAQgEADQASAOA/AEIgTAmQgFAKAAAMQAAAKAFALIgUgUIgDgCQgMgIgUAFIAAACQgBASANAYQgegMgiANQgrARgYAAQAGgMAegKQAcgKAEgRIgmAAIgYAAQgLACACAJIABABIgBgBQgOgPgUAEIgFAKQgMAYALADQgJAPgIgQQgGgNADgNIAAgEQgNgCgHAFQgKAIAGAaQgFgVgigCQgigBgHAYQgEgOgagDQgigGgFgDQgJAGAGAPQAHAUgEAKQgLgogPgVgAwII4QgBABABAGQADAJAIAUQAJgHgCgQIgCgGQgDgHgIAAIgFAAgAvpIsQAfAFASgeQgIgHgXgBQgZgBgGAJIAAAAQALAAACAZgAwPIPQgWAEgJASQADADAuAEQAGgegTAAIgFABgAw7GoQAiBEAKAOQAsgggrg7QACgMgHgBIgGgDIgigMIgCAdIgBAEIAFAEIgBAAIgBAAgAuyG2QANAcAsgHQApgKAOgZQhJALgnADgAtLFAIgJAFIADABQAQAMgaBFIBWAHQApAAAdgUQgTgIgsAOQghANgKgaQA/gGAZgrQg4gXgkAAQgRAAgNAFgA3HJeQgSg1gIgLIAEgBQAFgBADAEIAEAFQADAHACALQAIAkAUgEQAEAPADAjQgQgCgOgpgA44I4QgNAhgYgCQAFgOgNgaQgRggAAgQQAWAJAPAwQAFgBAHgFQALgEgEgRQgFgOgIgDQAXgHAFA1QAGA/AKAJQgGAEgFAAQgUAAAGhOgAXwJ+QgEgEgDgKQgFgZgCgHQASAEAGAnQgEADgDAAIgDAAgA7OIeQAQAIARAeQAPAEADgWQAFAFgNAbQgNAZAVALQgfgBgUhXgA8MITQAPAFAGAgQAGAjALAIIgFABQgbAAgGhRgA4VJDQAEgeAKgHQAAgLgRgJQgOgJAAgNQAtAJAFA7QgYgOAFA5QgSgBAEgfgAsUIgQAHgqgWgJQAGgLAJAKIAIAIQAGAGACAAQgEAjAEA6QgXgNAHgqgAuHJLQgBgfgKgHQAXgNAIgxIASAAQgdA5ARAkQgJgIgDAHQgDAIgHAAIgEAAgArOIqQAGgXgEgHQAKACAQAkQgQgKAAABIADAbQgTgIAEgSgAtOH6QAJAAADAyQgOgHACgrgAqOH0QATgBAAAmQgMgLgHgagApKHgQALgBADAVQABAGAFgGQANgBgIAgQgJgEgQgvgAqbHVQADgUAFgFQAJAFAAANQAAAMgJATQgJgEABgUgAp8HNQgDgKAbhwIAAABQgUBnAKAlQgKgDgEgQgAxzD/IADgFIACgDIgBAOQgBgEgDgCgAsGD0QAAgLACgBIADAFIADAFIgIAHIAAgFgAQvhYQAAgHAFAAQAGABAFAJQgBAGgHAAIgIgJgALElOQggh1gzgKQAFgHAAgIQg9ABgbgHIgDgCIgGgHQAAgHAFgGIABgBQAHgKABgEIgIAAIgngBQgVgGAGgcQAbgIAbAHIAEABIgEgLQgIgTgYgaIgzg2QAjgNAwggIAwghQAUAVAjA3QAhA0AXAWQASgJATAKIAeASQAEAmggAsQACBqBFBdQAsgUBYhSIgmgbQgWgRgIgSQBXgDA1hqIADgIQgBAGABAIIABASQgTAjgLAOQgiApgzAEQAGAVAvAXQAPgPArABIA6AFQACgLgGgLIAHAKIABADQASgCAPACQgDAEgMAFQgQAFgBANQgVgKgngBQgpgEAJAPQgkAKguAsQgxAxgYAIQgkARgnhaQgihPgCg8QAlgogDggQgCgIgQgBQgRgDgEgDQAQAYgRAdQgJAPgXAdQgdgig2AYQACgKgHgIQgIgLgBgFQgSAVgLAIQAFAPAmgCQAMgBARgDQA3AbAlBwQAlB2AmAgIACACQg2gRggh1gAKJoCQASAHAMADQAWgYACgUQgpARgNARgAIbq7QgcATgpAZQAcAQApA2IACACQAqA0AhARQAagMAtgcQgOgCAGgSQAJgRgBgBQgfgagRgWQghhTgdgEQgPAMgXAQgAIQoPIALgBQAUgDgBgNIg7AAQgBATAegCgATzlmQgTgOgVgHQgegJgkAFQgLABgMADQgCgDABgFIAUgEIAAADIAEgCQAZgFAmABIANAAIADACIAWAAQALANALAIIAMAVQgDACgCAEIgEADQgKgLgKgGgAQRncIACgFIACARQgEgGAAgGgAKEpQQARgBgCAUIgDABQgOAAACgUgAI3pjQgKgeABgOQAcAGAiATQgCAKAHAPQAFAMgFAGQgigVgYgDgAGTpeQADgKAYgBQAVgBAKAHQgUAJgSAAQgLAAgJgEgAL9ptQATgLAoACQgBANgXACIgDABQgVAAgLgHgAH1qGQgEgNAHgLQAPAEATARQgEANgLgKQgDABgCAPIgBAAQgMAAgEgQgAFxqYQABgMAWABQAUAAAKAFQgWAKgOAAQgKAAgHgEgALhq/QAYgCAJAMQghAHgZADQABgSAYgCgAFdrqQAZAHA1AMQgRADgNAAQgkAAgMgWgALMrgIADgDIADAAQgBADABAEIgGgEgAJqrfIAEAAIABABIgFgBgAJTroIAPABIAEAHIgTgIg");
	this.shape_7.setTransform(-0.1,12.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Buffy, new cjs.Rectangle(-180.6,-76,361,163.6), null);


// stage content:
(lib.pro_Scene2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene2:0,scene2_repeat:250});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_1 = function() {
		playSound("progressiveformoftheverbis");
	}
	this.frame_66 = function() {
		playSound("multi_bells");
	}
	this.frame_81 = function() {
		playSound("formula1");
	}
	this.frame_94 = function() {
		playSound("progressiveformula");
	}
	this.frame_150 = function() {
		playSound("stacewaspraticinghermagicact");
	}
	this.frame_199 = function() {
		playSound("rabbitsareappluading");
	}
	this.frame_205 = function() {
		playSound("stace_magic");
	}
	this.frame_240 = function() {
		playSound("rabbits_applause");
	}
	this.frame_249 = function() {
		/* _root.gonow = true;*/
	}
	this.frame_260 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(65).call(this.frame_66).wait(15).call(this.frame_81).wait(13).call(this.frame_94).wait(56).call(this.frame_150).wait(49).call(this.frame_199).wait(6).call(this.frame_205).wait(35).call(this.frame_240).wait(9).call(this.frame_249).wait(11).call(this.frame_260).wait(1));

	// Layer 8
	this.instance = new lib.ProgressiveFormLesson();
	this.instance.parent = this;
	this.instance.setTransform(273.5,195.5,1.126,1.126,0,0,0,206.3,103.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(261));

	// content
	this.instance_1 = new lib.Buffy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(274.9,195.5,1.025,1.025);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgyBTQgEgFAAgEIAAgfIACgrIADgsQgBgKACgUQAAgGADgBQAPgFASAAQASAAASANQAUAPAAAWQAAAbgWAQQARAGAIAIQAIAJAAAKQAAANgPAMQgJAIgLAFQgXAJgmAAQgEAAgFgEgAggArIAAAWQAcgBAQgHQAIgCAHgHQAGgGAAgCQAAgGgNgGQgLgEgJgDIgLgCIgEAAIgEAAIgNgBIAAAZgAgcg/IAAATIgCAqIAQABQAPgCALgIQALgKAAgPQAAgKgMgJQgLgJgMAAIgQABg");
	this.shape.setTransform(363,21.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag2BRQgDgDAAgFIgBgZIgBgZIACgdQADgTAAgKIgBgQIgBgQQAAgGADgFQAEgGAHABIAaACQAPACAJAFQAsAXAAAhQAAARgPALQgMAKgSAGQAhASARATQADAEAAAEQAAAEgEAEQgDADgEAAQgEAAgEgEQgjgjgrgMIABAVIAAAVQAAAFgDADQgDAEgEAAQgFAAgDgEgAgigvIABANIgBAVIgCAUIAEAAIAFABQAbAAANgIQAGgCAFgFQAGgGAAgFQAAgPgRgMQgPgMgRgCIgQgBg");
	this.shape_1.setTransform(348.8,21.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AguBTQgLgKAAgiIABgPIAAgSIgBgFQAAgDACgDIACguIgBgLIgBgMQAAgNALAAQAFAAADAEQANgEALgCQAMgBAJAAQAaAAAPAGQAIADAAAHQAAAFgDADQgDADgFABIgDgBQgSgGgRAAQgJAAgKADIgWAEIABALIgCAqIAugFIAagCQAEAAAEADQADADAAAFQAAAJgKABIgaACIgwAEIgBAPIAAANQAAAYADADQADAEAOAAIATAAIAUgBIAHAAIAGgBQALAAAAALQAAAJgJACQgKABghAAQghAAgJgIg");
	this.shape_2.setTransform(335.1,21.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgTBOQgNgggPg9IgJgdQgGgWgBgHQABgFADgDQADgDAEAAQAJAAACAJIAEASIAKAlQALAnAJAdIABgCIAchNIAJgaQAGgQAHgIQAEgFAEAAQAEAAAEAEQAEADgBAFQAAADgBADQgIAKgDALIgIAXIgdBOQgGANgHANQgCAHgGAAQgJAAgDgJg");
	this.shape_3.setTransform(321.5,21.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgkAvQgQgOAAgYQAAgbANgTQAOgVAZAAQARAAAMAHQANAHAAAPQAAALgMAJQgGAEgQAHIgpATQAGAJAKAFQAIAEALAAQAHAAALgDQAMgDAEgGQADgGAFAAQADAAADADQAEADAAAEQgBAMgTAIQgQAIgQAAQgXAAgPgMgAgWgcQgIAKgEAUIAggPQATgKAIgHQgJgIgQAAQgNAAgJAKg");
	this.shape_4.setTransform(301.3,24.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAdBRQgCgJgCgQQgCgPAAgKIAAgJIAAgIQAAgUgKAAQgNAAgKAMQgGAGgJASQAAApgEAHQgDAHgGAAQgFAAgDgDQgDgDAAgEIABgFQABgDAAgNIAAgQIABhNIAAgSIgBgLIgBgKQAAgEADgDQAEgDAEAAQAJAAABAJQACALAAAIIgBAXIAAAYIAAAJQAJgLAKgGQAJgGALAAQASAAAHALQAEAJABASIABAVIACAWQABAMADAKIAAADQAAAFgDADQgDACgFAAQgIAAgCgIg");
	this.shape_5.setTransform(288.8,21.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgGBLQgDgCAAgFIAAgLIAAgNIgCg9IgYgDQgJgBAAgJQAAgFADgDQADgDAEAAIAXACIgBgPIAAgNQAAgFADgDQADgCAEAAQAJAAACAPIAAAKIAAAGIAAAGIAPgBQALAAAEABQAGACAAAIQAAAFgDADQgDADgEAAIgGAAIgFgBIgPACIACA/IAAAEIABAGQAAAXgMAAQgDAAgDgDg");
	this.shape_6.setTransform(277.1,22.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgQBcQgEgDAAgFIABgCQACgOAAgQIAAgdIAAgfIgSABQgLABABgLQgBgLAUAAIAKAAIABgQQADgYAKgMQAJgOAYAAQAPAAAAALQABALgOAAQgagBgEAlIAAAGIAYgBQARAAAAALQAAAHgIACIgJABIgZABIgBAYIABAUIAAATQAAAUgCAMQgBAJgIgBQgFAAgCgCg");
	this.shape_7.setTransform(259.6,22);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AggAuQgOgPgBgaQAAgWAMgTQAPgWAaAAQAWAAALAUQAJAPgBAXQAAAXgMAQQgOAUgWAAQgSAAgNgNgAgTgVQgHAMAAAOQAAAQAJAJQAHAHAJAAQALAAAIgIQAJgJAAgQQACgogYAAQgPAAgJAPg");
	this.shape_8.setTransform(248.3,24.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("ABCBRQgDgGgDgMIgDgSQgFgRgKg6IgVBAIgGAUIgJAVQgEAHgGABQgHgBgDgGIgFgLIgDgNQgLgmgIgqIgEATIgOA4QgBAKgEAUQgDAIgIAAQgFAAgDgEQgDgDAAgEQAAgTAHgaIANgqIAFgiQAFgXAGgIQAEgGAGAAQAHAAAEAIQAEAJAFAeQAFAjANApQAOgpAMgtIADgQQACgJADgGQAEgIAHAAQAKAAAFASQABAGADAUQAGAvAKAjIAFASQAEAOAAAEQAAAFgDADQgEADgEAAQgGAAgEgGg");
	this.shape_9.setTransform(226.6,22);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ag2BRQgDgDAAgFIgBgZIgBgZIACgdQADgTAAgKIgBgQIgBgQQAAgGADgFQAEgGAHABIAaACQAPACAJAFQAsAXAAAhQAAARgPALQgMAKgSAGQAhASARATQADAEAAAEQAAAEgEAEQgDADgEAAQgEAAgEgEQgjgjgrgMIABAVIAAAVQAAAFgDADQgDAEgEAAQgFAAgDgEgAgigvIABANIgBAVIgCAUIAEAAIAFABQAbAAANgIQAGgCAFgFQAGgGAAgFQAAgPgRgMQgPgMgRgCIgQgBg");
	this.shape_10.setTransform(210.1,21.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag1BDQgXgUAAgfQAAgkAWgeQAZghAkgBQAjAAARAQQASAQAAAlQAAAjgVAfQgXAigkAAQgegBgUgRgAglgkQgRAYAAAcQAAAWAPANQAPALAVAAQAaAAAQgaQAQgYAAgbQAAgbgLgJQgMgLgZAAQgaAAgSAag");
	this.shape_11.setTransform(194.3,22);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ag0BXQgDgDAAgFIABg/IABg/IAAgOIAAgOQAAgFADgDQADgEAEAAQAEAAADACIAYgDIASgBQAMAAAPADQAXAFgBAIQAAAFgDADQgDAEgEAAIgEgBQgNgFgWAAIgQABIgVADIAAAuQAUgFAKAAQAQAAASACQAKABAAAKQAAAFgDADQgDACgFAAIgRgBIgQAAQgHAAgYAFIgBBKQAAAFgDADQgDADgFAAQgEAAgEgDg");
	this.shape_12.setTransform(179.4,21.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AguBTQgLgKAAgiIABgPIAAgSIgBgFQAAgDACgDIACguIgBgLIgBgMQAAgNALAAQAFAAADAEQANgEALgCQAMgBAJAAQAaAAAPAGQAIADAAAHQAAAFgDADQgDADgFABIgDgBQgSgGgRAAQgJAAgKADIgWAEIABALIgCAqIAugFIAagCQAEAAAEADQADADAAAFQAAAJgKABIgaACIgwAEIgBAPIAAANQAAAYADADQADAEAOAAIATAAIAUgBIAHAAIAGgBQALAAAAALQAAAJgJACQgKABghAAQghAAgJgIg");
	this.shape_13.setTransform(158.9,21.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgTBOQgNgggQg9IgIgdQgHgWAAgHQAAgFAEgDQADgDAFAAQAHAAADAJIAEASIAKAlQALAnAKAdIAAgCIAchNIAJgaQAGgQAHgIQAEgFAEAAQAFAAADAEQADADAAAFQAAADgCADQgGAKgEALIgJAXIgcBOQgFANgHANQgDAHgGAAQgJAAgDgJg");
	this.shape_14.setTransform(145.3,21.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AguBPQgDgDgBgFQABgEADgEQADgDAEAAQAHAAAQgCIABgUIgBgSIAAgSQAAgYADglIgOAAIgOABQgEAAgEgDQgDgEAAgEQAAgKAKgBIAhgBQAUAAAhAEQAJACAAAKQAAAFgEADQgDACgEAAIgRgBIgSgCQgCAfAAAbIAAATIABATIgBASIAhAAQAFAAADADQADADABAFQgBAEgDADQgDAEgFAAIgSAAIgSAAIgUACIgVACQgEAAgDgDg");
	this.shape_15.setTransform(131.5,21.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgrBKQgUgJAAgQQAAgFADgCQADgDAFAAQAFAAAEAGQAGAIAEADQAJAGASAAQAPAAAOgHQATgKAAgQQAAgOgQgHQgNgHgSgBQgRAAgMgGQgPgJAAgQQAAgTAWgQQAVgPAVAAQAKAAANAEQASAEAAAIQAAAJgKAAIgPgCQgLgDgGAAQgQABgLAIQgMAIAAAMQAAAJAQADQAGACAQABQAYACAOANQANAMAAASQAAAZgYAQQgUANgbAAQgTAAgRgIg");
	this.shape_16.setTransform(117.9,22.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgrBKQgUgJAAgQQAAgFADgCQADgDAFAAQAFAAAEAGQAGAIAEADQAJAGASAAQAPAAAOgHQATgKAAgQQAAgOgQgHQgNgHgSgBQgRAAgMgGQgPgJAAgQQAAgTAWgQQAVgPAVAAQAKAAANAEQASAEAAAIQAAAJgKAAIgPgCQgLgDgGAAQgQABgLAIQgMAIAAAMQAAAJAQADQAGACAQABQAYACAOANQANAMAAASQAAAZgYAQQgUANgbAAQgTAAgRgIg");
	this.shape_17.setTransform(102.7,22.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AguBTQgLgKAAgiIABgPIAAgSIgBgFQAAgDACgDIACguIgBgLIgBgMQAAgNALAAQAFAAADAEQANgEALgCQAMgBAJAAQAaAAAPAGQAIADAAAHQAAAFgDADQgDADgFABIgDgBQgSgGgRAAQgJAAgKADIgWAEIABALIgCAqIAugFIAagCQAEAAAEADQADADAAAFQAAAJgKABIgaACIgwAEIgBAPIAAANQAAAYADADQADAEAOAAIATAAIAUgBIAHAAIAGgBQALAAAAALQAAAJgJACQgKABghAAQghAAgJgIg");
	this.shape_18.setTransform(88.4,21.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("Ag2BRQgDgDAAgFIgBgZIgBgZIACgdQADgTAAgKIgBgQIgBgQQAAgGADgFQAEgGAHABIAaACQAPACAJAFQAsAXAAAhQAAARgPALQgMAKgSAGQAhASARATQADAEAAAEQAAAEgEAEQgDADgEAAQgEAAgEgEQgjgjgrgMIABAVIAAAVQAAAFgDADQgDAEgEAAQgFAAgDgEgAgigvIABANIgBAVIgCAUIAEAAIAFABQAbAAANgIQAGgCAFgFQAGgGAAgFQAAgPgRgMQgPgMgRgCIgQgBg");
	this.shape_19.setTransform(74.5,21.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("Ag2BJQgNgOAAgeQAAgcANgcQANgeAVgSQANgMAPAAQAKAAAQAGQATAIAAAKQAAAEgDADQgEAEgEAAQgDAAgEgDQgQgKgLAAQgIAAgJAIIgMAQQgZAhAAAlQAAAUAHAIQAGAJASAAQATAAANgMQAPgNAGgYQgdACgUAKIgGABQgEAAgDgEQgDgDAAgFQAAgFAGgEQAWgNA5AAQAEAAADADQAEACAAAFQAAAHgHADQgGAhgVAUQgVATgdAAQgaAAgNgPg");
	this.shape_20.setTransform(60,21.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("Ag2BDQgWgUAAgfQAAgkAWgeQAYghAlgBQAiAAASAQQASAQAAAlQAAAjgVAfQgXAigjAAQgfgBgVgRgAglgkQgRAYAAAcQAAAWAPANQAPALAWAAQAZAAAQgaQAQgYAAgbQAAgbgLgJQgLgLgaAAQgaAAgSAag");
	this.shape_21.setTransform(43.7,22);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("Ag2BRQgDgDAAgFIgBgZIgBgZIACgdQADgTAAgKIgBgQIgBgQQAAgGADgFQAEgGAHABIAaACQAPACAJAFQAsAXAAAhQAAARgPALQgMAKgSAGQAhASARATQADAEAAAEQAAAEgEAEQgDADgEAAQgEAAgEgEQgjgjgrgMIABAVIAAAVQAAAFgDADQgDAEgEAAQgFAAgDgEgAgigvIABANIgBAVIgCAUIAEAAIAFABQAbAAANgIQAGgCAFgFQAGgGAAgFQAAgPgRgMQgPgMgRgCIgQgBg");
	this.shape_22.setTransform(28.1,21.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgtBTQgDgDAAgEIAAggIACgsQADgeAAgOIAAgPQAAgKABgFQADgKAIACIAJgCIAQgBQATAAARAOQATAPAAAVQAAAagUAPQgTAOgYAAIgNgBIgBA5QAAAEgDADQgCADgFAAQgEAAgDgDgAgRhAIgGABIAAAUIgDAqIAMABQARAAANgIQANgKAAgRQAAgMgNgJQgMgIgNAAIgIAAg");
	this.shape_23.setTransform(15.4,21.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1}]}).wait(261));

	// main
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,53.9,1,1,0,0,0,54,40.5);

	this.instance_2 = new lib.Bk1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(275,192.8,1,1,0,0,0,-0.1,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.UI}]}).wait(261));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,200.6,534,398.7);
// library properties:
lib.properties = {
	id: 'A5B516CB6C80CD43AE758821D758768E',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/flute_lick.mp3", id:"flute_lick"},
		{src:"sounds/formula1.mp3", id:"formula1"},
		{src:"sounds/FormulaFuturePerfect.mp3", id:"FormulaFuturePerfect"},
		{src:"sounds/FormulaFutureProgressive.mp3", id:"FormulaFutureProgressive"},
		{src:"sounds/FormulaPastParticiple.mp3", id:"FormulaPastParticiple"},
		{src:"sounds/FormulaPresent.mp3", id:"FormulaPresent"},
		{src:"sounds/FormulaProgressive.mp3", id:"FormulaProgressive"},
		{src:"sounds/FutureProgressiveTense.mp3", id:"FutureProgressiveTense"},
		{src:"sounds/guitar_se1.mp3", id:"guitar_se1"},
		{src:"sounds/multi_bells.mp3", id:"multi_bells"},
		{src:"sounds/PresentProgressiveTense.mp3", id:"PresentProgressiveTense"},
		{src:"sounds/Progressive.mp3", id:"Progressive"},
		{src:"sounds/progressiveformoftheverbis.mp3", id:"progressiveformoftheverbis"},
		{src:"sounds/progressiveformula.mp3", id:"progressiveformula"},
		{src:"sounds/ProgressiveFormoftheVerb.mp3", id:"ProgressiveFormoftheVerb"},
		{src:"sounds/ProIsSawingTwiggs.mp3", id:"ProIsSawingTwiggs"},
		{src:"sounds/bgmP.mp3", id:"bgmP"},
		{src:"sounds/rabbitsareappluading.mp3", id:"rabbitsareappluading"},
		{src:"sounds/rabbits_applause.mp3", id:"rabbits_applause"},
		{src:"sounds/SlimWasRiding.mp3", id:"SlimWasRiding"},
		{src:"sounds/stacewaspraticinghermagicact.mp3", id:"stacewaspraticinghermagicact"},
		{src:"sounds/stace_magic.mp3", id:"stace_magic"},
		{src:"sounds/StaceisPracticingHerMagicAct.mp3", id:"StaceisPracticingHerMagicAct"},
		{src:"sounds/TheAudienceWillBeParticipating.mp3", id:"TheAudienceWillBeParticipating"},
		{src:"sounds/TheKidsSHallBePresenting.mp3", id:"TheKidsSHallBePresenting"},
		{src:"sounds/ThePastProgressiveTense.mp3", id:"ThePastProgressiveTense"},
		{src:"sounds/ThePythonWasSleepimg.mp3", id:"ThePythonWasSleepimg"},
		{src:"sounds/TheRabbitsareApplauding.mp3", id:"TheRabbitsareApplauding"},
		{src:"sounds/TwiggsisWondering.mp3", id:"TwiggsisWondering"}
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
an.compositions['A5B516CB6C80CD43AE758821D758768E'] = {
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