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


(lib.static_whitebox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.482)").s().p("A/nKhIAA1FMA/QAAEIAAVFg");
	this.shape.setTransform(202.4,67.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,404.9,135.5);


(lib.static_rule1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNAMQgHgFAAgHQAAgFAHgGQAGgFAHAAQAJAAAGAFQAGAFAAAGQAAAHgGAFQgGAFgJAAQgHAAgGgFg");
	this.shape.setTransform(80.6,67.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AglBgQgEAFgIAAQgGAAgFgFQgFgEAAgHIABgJIAAgKIAAiOQgBgKAFgHQAFgJAJAAQAOAAAAAPIgBAFIAAAGIAAAwQAJgFAJgDQAIgCAIAAQAdAAATAVQARAUAAAdQAAAdgUAVQgUAVgdAAQgSAAgQgHgAgOgCQgIADgLAIIAAA1QARAIANAAQAPAAAKgLQAKgLAAgQQABgRgJgLQgJgKgOAAQgGAAgJAEg");
	this.shape_1.setTransform(67.4,58.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgyBCQgEgEAAgIIAAhSIABgLIAAgMQAAgHAFgFQADgFAJAAQAOAAACAPQAWgRAbAAQAaAAgBAiIAAAIQgBAUgRAAQgQAAAAgRIAAgNQgbAFgNAZIABA+QAAAIgGAFQgEAEgIAAQgIAAgFgFg");
	this.shape_2.setTransform(53.6,61.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgrA3QgVgQAAgdQAAggARgWQATgYAeAAQAXAAAOAHQATAJABAUQgBAOgPALQgHAFgWAIIgpATQAFAHAJADQAJADAKAAQARAAAMgHQAKgGAHAAQANAAAAANQAAAOgVAJQgSAIgUAAQgdAAgUgOgAgRgeQgIAIgFAQIAdgNQAPgHALgHQgJgFgOAAQgLAAgIAIg");
	this.shape_3.setTransform(39.7,61.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgSA5IgqhmIgCgHQAAgHAGgFQAGgEAGAAQALAAAFAKQAHAPAVA4IASgrIALgbQAFgLAKAAQAHAAAHAFQAEAFAAAGQAAAFgUAuIgbA4QAAAGgEAFQgFAEgGAAQgNAAgFgNg");
	this.shape_4.setTransform(26.5,61.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgyBCQgDgEAAgIIAAhSIAAgLIAAgMQAAgHAEgFQAFgFAIAAQAOAAACAPQAWgRAbAAQAaAAgBAiIAAAIQgBAUgRAAQgPAAgBgRIAAgNQgbAFgNAZIABA+QgBAIgFAFQgEAEgIAAQgIAAgFgFg");
	this.shape_5.setTransform(2.7,61.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AAfA6QgMAGgJADQgJADgFAAQgfAAgPgRQgPgQAAghQAAgdAWgWQAXgWAfAAQAMAAAPAHQAUAIAAALQAAAFgDADIgCANIgBARQAAAXADALIAGANIAFAMQAAAHgFAEQgFAFgHAAQgGAAgMgMgAgRgZQgNAOAAAQQAAARAGAJQAGAJAMAAQAHAAAHgDQAHgDAHgFQgEgdAAgPIAAgJIACgMIgEgCIgEAAQgQAAgNANg");
	this.shape_6.setTransform(-11,61.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgMBkQgEgFAAgIIAAiuQgBgHAGgFQAFgFAHAAQAHAAAEAFQAFAFABAHIAACoQgBAYgRAAQgGAAgGgFg");
	this.shape_7.setTransform(-21.9,58);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AAZA/QgQAGgQAAQgSAAgNgIQgNgIgDgRQgFggAAgYQAAgQAEgVQACgOAPAAQAHAAAFAEQAGAFAAAHIgCARIgCASIABAeQABAOADAIIAGADIAGAAQANAAARgEIAAgWIgBgUQAAgaADgTQACgPAPAAQAIAAAFAEQAFAFAAAHIgDAtIABAZIAAAZIAAAIIABAIQAAAHgGAFQgFAEgHAAQgLAAgFgJg");
	this.shape_8.setTransform(-32.2,61.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AhBBRQAAgHAFgEQAEgEAHAAIARACQAKACAJAAQARAAAJgMQAKgLABgYQgGAGgJADQgIAEgIAAQgaAAgQgRQgPgQgBgZQAAgiAWgWQAVgWAkAAQAMAAAJADQAJADAFAGQARACAAARQAAAJgEAPQgEAdgBAhQgCApgNASQgQAZgpAAQgyAAAAgUgAgTg5QgLANAAAVQABAPAFAHQAGAHALAAQAKAAAKgLQAKgMABgLQADgMADgaIgIgEIgJgBQgUAAgMAOg");
	this.shape_9.setTransform(-45.9,65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AAaA6IgDgaQgDgOAAgMIABgKIAAgMIABgEIAAgGQAAgLgFAAQgLAAgJAOQgLAOgFAVIgCALIAAAMIgCALIAAALQAAAHgFAFQgFAFgIAAQgIAAgFgFQgEgFgBgHIAAgLIgBgLIACgjIACghIAAgMIgBgLQAAgHAFgFQAFgFAIAAQAQAAACAUIAAABQASgSAUAAQAYAAAJAUQAGANAAAbIAAAJIgBAHQAAAKAEAQQACAPAAAKQAAAHgFAFQgFAFgHAAQgQAAgCgQg");
	this.shape_10.setTransform(-59.3,61.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgPBcQgFgEAAgIIgBgXIAAgYIABgcIABgbQAAgHAFgFQAFgFAIAAQAHAAAFAFQAEAFAAAHIgBAbIgBAcIAAAYIABAXQAAAIgFAEQgFAFgHAAQgHAAgFgFgAgLhAQgGgGAAgHQAAgIAGgGQAGgFAHAAQAIAAAGAFQAGAGAAAIQAAAHgGAGQgGAFgIAAQgHAAgGgFg");
	this.shape_11.setTransform(-69.6,58.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgjBCQgTgGAAgOQAAgNAPAAQAGAAALAEQALADAGAAQAZAAAAgLQAAgGgSgHQgZgMgIgEQgSgNAAgSQAAgZAbgKQAQgEAgAAQAMAAAHADQAIAEAAAMQAAAXgMAAQgNAAgDgLIgKgBQgeAAAAAJQAAAFASAJQAZALAJAGQASANAAAQQAAAXgUALQgQAIgXABQgRAAgOgGg");
	this.shape_12.setTransform(-80.1,61.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAfA6QgMAGgJADQgJADgFAAQgfAAgPgRQgPgQAAghQAAgdAWgWQAXgWAfAAQAMAAAPAHQAUAIAAALQAAAFgDADIgCANIgBARQAAAXADALIAGANIAFAMQAAAHgFAEQgFAFgHAAQgGAAgMgMgAgRgZQgNAOAAAQQAAARAGAJQAGAJAMAAQAHAAAHgDQAHgDAHgFQgEgdAAgPIAAgJIACgMIgEgCIgEAAQgQAAgNANg");
	this.shape_13.setTransform(173,23.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgjBCQgTgGAAgOQAAgNAPAAQAGAAALAEQALADAGAAQAZAAAAgLQAAgGgSgHQgZgMgIgEQgSgNAAgSQAAgZAbgKQAQgEAgAAQAMAAAHADQAIAEAAAMQAAAXgMAAQgNAAgDgLIgKgBQgeAAAAAJQAAAFASAJQAZALAJAGQASANAAAQQAAAXgUALQgQAIgXABQgRAAgOgGg");
	this.shape_14.setTransform(147.9,23.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgqA3QgWgQAAgdQAAggARgWQATgYAfAAQAVAAAPAHQATAJAAAUQAAAOgPALQgIAFgVAIIgpATQAFAHAJADQAJADAKAAQARAAAMgHQALgGAFAAQAOAAAAANQAAAOgVAJQgSAIgUAAQgeAAgSgOgAgQgeQgJAIgFAQIAcgNQARgHAJgHQgIgFgNAAQgMAAgHAIg");
	this.shape_15.setTransform(134.3,23.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgxBCQgFgEAAgIIAAhSIABgLIAAgMQAAgHAFgFQADgFAIAAQAOAAADAPQAWgRAbAAQAaAAgBAiIAAAIQgBAUgRAAQgQAAAAgRIAAgNQgbAFgNAZIABA+QAAAIgGAFQgEAEgIAAQgIAAgEgFg");
	this.shape_16.setTransform(121.2,23.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgPBcQgFgEAAgIIgBgXIAAgYIABgcIABgbQAAgHAFgFQAFgFAIAAQAHAAAFAFQAEAFAAAHIgBAbIgBAcIAAAYIABAXQAAAIgFAEQgFAFgHAAQgHAAgFgFgAgLhAQgGgGAAgHQAAgJAGgFQAGgFAHAAQAIAAAGAFQAGAFAAAJQAAAHgGAGQgGAFgIAAQgHAAgGgFg");
	this.shape_17.setTransform(111.4,20.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAZA/QgQAGgQAAQgSAAgNgIQgNgIgDgRQgFggAAgYQAAgQAEgVQACgOAPAAQAHAAAFAEQAGAFAAAHIgCARIgCASIABAeQABAOADAIIAGADIAGAAQANAAARgEIAAgWIgBgUQAAgaADgTQACgPAPAAQAIAAAFAEQAFAFAAAHIgDAtIABAZIAAAZIAAAIIABAIQAAAHgGAFQgFAEgHAAQgLAAgFgJg");
	this.shape_18.setTransform(100.6,23.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AANBSIAAgHIAEgkIgKABQgcAAgTgPQgUgQAAgbQAAglAWgXQAXgYAmAAQAHAAAEAEQAFgDAEAAQAIAAAFAFQAFAGAAAGQAAAlgEApIgGAtQgDAaAAAVQAAAHgFAFQgFAFgIAAQgRAAAAgVgAgQgzQgJAOAAATQAAANAIAGQAJAJAOgBQAJAAAEgJQAGgMAAggIACgbIgEAAIgIAAQgUADgLARg");
	this.shape_19.setTransform(86.8,26.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgrA3QgVgQAAgdQAAggARgWQATgYAeAAQAXAAAOAHQATAJABAUQgBAOgPALQgHAFgWAIIgpATQAFAHAJADQAJADAKAAQARAAAMgHQAKgGAHAAQANAAAAANQAAAOgVAJQgSAIgUAAQgdAAgUgOgAgRgeQgIAIgFAQIAdgNQAPgHALgHQgJgFgOAAQgLAAgIAIg");
	this.shape_20.setTransform(73,23.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgxBCQgEgEgBgIIAAhSIABgLIAAgMQAAgHAEgFQAFgFAHAAQAOAAADAPQAVgRAcAAQAaAAAAAiIAAAIQgCAUgQAAQgRAAABgRIgBgNQgbAFgNAZIAAA+QAAAIgEAFQgGAEgHAAQgIAAgEgFg");
	this.shape_21.setTransform(59.9,23.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgqA3QgWgQAAgdQAAggARgWQASgYAgAAQAVAAAPAHQAUAJAAAUQgBAOgPALQgIAFgVAIIgqATQAHAHAIADQAJADAKAAQARAAAMgHQALgGAFAAQAOAAAAANQAAAOgWAJQgRAIgUAAQgeAAgSgOgAgQgeQgJAIgFAQIAcgNQAQgHAKgHQgIgFgNAAQgMAAgHAIg");
	this.shape_22.setTransform(34.7,23.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgKBKQgFgFAAgHQAAgPgDgcQgDgbAAgPQAAgIgCgFQgPAJgOAUIgDACIAAAoIAAAJIgBAJQAAAHgFAEQgFAEgIAAQgLAAgDgKQgDgGAAgOIAAguIgBgTIAAgSQAAgMAEgJQAFgLAJAAQAHAAAGAFQAFAGAAAGIgBALQATgWARAAQAUAAAIAPQAIgHAJgDQAKgEALAAQAYAAAJAZQACAFAEAdQADAUAGAwQAAAHgFAFQgGAFgHAAQgOAAgDgPIgFglIgEgkQgDgXgGAAQgDAAgKAGIgPAKQAAAPADAaQAEAcAAAOQAAAHgFAFQgFAEgIAAQgGAAgFgEg");
	this.shape_23.setTransform(17.7,23.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAZA/QgQAGgQAAQgSAAgNgIQgNgIgDgRQgFggAAgYQAAgQAEgVQACgOAPAAQAHAAAFAEQAGAFAAAHIgCARIgCASIABAeQABAOADAIIAGADIAGAAQANAAARgEIAAgWIgBgUQAAgaADgTQACgPAPAAQAIAAAFAEQAFAFAAAHIgDAtIABAZIAAAZIAAAIIABAIQAAAHgGAFQgFAEgHAAQgLAAgFgJg");
	this.shape_24.setTransform(0.5,23.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgMBkQgEgFAAgIIAAiuQgBgHAGgFQAFgFAHAAQAHAAAEAFQAFAFABAHIAACoQgBAYgRAAQgGAAgGgFg");
	this.shape_25.setTransform(-9.8,19.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgpA1QgSgRgBgdQgBgcAQgWQATgaAiAAQAZAAAPAVQAOASAAAbQAAAdgQAUQgSAYgcAAQgYgBgRgQgAgSgVQgHAMAAAQQAAAPAJAHQAGAHAKAAQAKAAAIgIQAJgIABgPQABgogXAAIgBAAQgOAAgJAOg");
	this.shape_26.setTransform(-20.2,23.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgSA5IgqhmIgBgHQAAgHAFgFQAFgEAIAAQALAAAEAKQAIAPAUA4IASgrIALgbQAFgLALAAQAGAAAGAFQAGAFAAAGQAAAFgVAuIgaA4QgBAGgFAFQgEADgGAAQgMABgGgNg");
	this.shape_27.setTransform(-33,23.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgxBCQgFgEAAgIIAAhSIABgLIAAgMQAAgHAFgFQAEgFAHAAQAOAAADAPQAVgRAcAAQAZAAAAAiIAAAIQgBAUgRAAQgPAAAAgRIgBgNQgcAFgMAZIAAA+QAAAIgEAFQgGAEgHAAQgIAAgEgFg");
	this.shape_28.setTransform(-56.8,23.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgpA1QgSgRgBgdQgBgcAQgWQATgaAiAAQAZAAAPAVQAOASAAAbQAAAdgQAUQgSAYgcAAQgYgBgRgQgAgSgVQgHAMAAAQQAAAPAJAHQAGAHAKAAQAKAAAIgIQAJgIABgPQABgogXAAIgBAAQgOAAgJAOg");
	this.shape_29.setTransform(-70.3,23.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgTAbQgEgFAAgFQAAgDAIgQIALgUQAEgIAIAAQAHAAAEAFQAFAEAAAFQAAADgIAQIgKAUQgFAIgIAAQgHAAgFgEg");
	this.shape_30.setTransform(-94.3,30.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgLBZQgFgFAAgHIABgOIAAgNIgChBIgZgCQgPgCgBgPQAAgHAGgFQAEgFAIAAIAWACIgBgOIgBgMQABgHAEgFQAGgFAHAAQASAAAAAgIgBAKIAOgBQAOAAAFACQALAEgBAMQAAAHgEAFQgGAFgHAAIgGgBIgGAAIgMABIACBCIAAAGIAAAIQAAAdgSAAQgHAAgFgEg");
	this.shape_31.setTransform(-105.5,21.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAeBdQgEgKgCgTQgCgSAAgLIAAgKIAAgKIAAgLQgBgGgGAAQgOAAgKAMQgGAHgKASQAAAugFAJQgEALgLAAQgHAAgGgFQgFgFAAgHIABgGQABgDABggQgBgZABg7IAAgEIABgUIgBgLIgCgMQAAgHAGgFQAFgFAHAAQANAAAEAOQACAHAAAQIAAAaIgBAZQAJgKALgEQAJgFAMAAQAWAAAKANQAHAJABASIACAfIACAZIAFAZIAAAEQAAAHgFAFQgGAFgHAAQgNAAgDgNg");
	this.shape_32.setTransform(-118.9,19.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AhABRQAAgHADgEQAFgEAHAAIARACQALACAHAAQATAAAIgMQAKgLABgYQgGAGgJADQgIAEgJAAQgZAAgQgRQgPgQAAgZQgBgiAVgWQAXgWAkAAQALAAAJADQAJADAFAGQAQACAAARQAAAJgCAPQgFAdgCAhQgBApgMASQgRAZgqAAQgxAAABgUgAgTg5QgLANABAVQgBAPAGAHQAGAHALAAQAJAAALgLQAKgMACgLQACgMADgaIgJgEIgIgBQgUAAgMAOg");
	this.shape_33.setTransform(-133.7,26.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgPBcQgFgEAAgIIgBgXIAAgYIABgcIABgbQAAgHAFgFQAFgFAIAAQAHAAAFAFQAEAFAAAHIgBAbIgBAcIAAAYIABAXQAAAIgFAEQgFAFgHAAQgHAAgFgFgAgLhAQgGgGAAgHQAAgJAGgFQAGgFAHAAQAIAAAGAFQAGAFAAAJQAAAHgGAGQgGAFgIAAQgHAAgGgFg");
	this.shape_34.setTransform(-143.8,20.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgqA3QgWgQAAgdQAAggARgWQASgYAgAAQAVAAAPAHQAUAJgBAUQAAAOgPALQgIAFgVAIIgqATQAHAHAIADQAJADAKAAQARAAAMgHQALgGAFAAQAOAAAAANQAAAOgWAJQgRAIgUAAQgeAAgSgOgAgQgeQgJAIgFAQIAcgNQAQgHAKgHQgIgFgNAAQgMAAgHAIg");
	this.shape_35.setTransform(-155.2,23.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAEAoQgDgLgEgfIgDAGQgHAQgMAhQgCAFgEAEQgFAIgLAAQgGABgGgLQgHgLgFgSQgEgPgIg0IgCgSQAAgHAGgFQAFgEAHAAQAOAAADANIADASIACARIAFAgIAVg/QAGgRANAAQAOAAAFATIAGAhIAHAjIAUhMQACgLANAAQAIAAAFAFQAGAEAAAHIgBAEQgNAygOAnQgEAMgIAMQgGAIgKAAQgQAAgKgfg");
	this.shape_36.setTransform(-171.1,23.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgTAbQgEgFAAgFQAAgDAIgQIALgUQAEgIAIAAQAHAAAEAFQAFAEAAAFQAAADgIAQIgKAUQgFAIgIAAQgHAAgFgEg");
	this.shape_37.setTransform(130.5,-7.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgKBZQgGgFAAgHIAAgOIAAgNIgBhBIgZgCQgQgCAAgPQABgHAEgFQAFgFAIAAIAWACIgBgOIAAgMQAAgHAEgFQAGgFAHAAQASAAAAAgIAAAKIAMgBQAPAAAFACQAKAEAAAMQAAAHgEAFQgFAFgIAAIgGgBIgHAAIgLABIABBCIABAGIAAAIQAAAdgSAAQgHAAgEgEg");
	this.shape_38.setTransform(119.2,-17.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAaA6IgEgaQgBgOgBgMIABgKIAAgMIABgEIAAgGQAAgLgFAAQgLAAgKAOQgKAOgGAVIgBALIgBAMIgBALIAAALQAAAHgFAFQgFAFgIAAQgIAAgEgFQgGgFAAgHIAAgLIgBgLIACgjIABghIAAgMIAAgLQAAgHAFgFQAFgFAHAAQARAAABAUIAAABQATgSAUAAQAYAAAIAUQAHANAAAbIAAAJIAAAHQAAAKACAQQADAPAAAKQAAAHgFAFQgFAFgHAAQgQAAgCgQg");
	this.shape_39.setTransform(106.4,-15.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgqA3QgWgQAAgdQAAggARgWQATgYAfAAQAVAAAPAHQATAJAAAUQAAAOgPALQgIAFgVAIIgpATQAFAHAJADQAJADAKAAQARAAAMgHQALgGAFAAQAOAAAAANQAAAOgVAJQgSAIgUAAQgeAAgSgOgAgQgeQgJAIgFAQIAcgNQARgHAJgHQgIgFgNAAQgMAAgHAIg");
	this.shape_40.setTransform(92,-14.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgKBKQgFgFAAgHQAAgPgDgcQgDgbAAgPQAAgIgCgFQgPAJgOAUIgDACIAAAoIAAAJIgBAJQAAAHgFAEQgFAEgIAAQgLAAgDgKQgDgGAAgOIAAguIgBgTIAAgSQAAgMAEgJQAFgLAJAAQAHAAAGAFQAFAGAAAGIgBALQATgWARAAQAUAAAIAPQAIgHAJgDQAKgEALAAQAYAAAJAZQACAFAEAdQADAUAGAwQAAAHgFAFQgGAFgHAAQgOAAgDgPIgFglIgEgkQgDgXgGAAQgDAAgKAGIgPAKQAAAPADAaQAEAcAAAOQAAAHgFAFQgFAEgIAAQgGAAgFgEg");
	this.shape_41.setTransform(75.1,-14.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgqA3QgWgQAAgdQAAggARgWQATgYAfAAQAWAAAOAHQAUAJgBAUQAAAOgPALQgIAFgVAIIgqATQAHAHAIADQAJADAKAAQARAAAMgHQALgGAFAAQAOAAAAANQAAAOgWAJQgRAIgUAAQgdAAgTgOgAgQgeQgJAIgFAQIAcgNQARgHAJgHQgIgFgNAAQgMAAgHAIg");
	this.shape_42.setTransform(57.3,-14.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgyBCQgEgEABgIIAAhSIAAgLIAAgMQAAgHAFgFQADgFAJAAQAOAAACAPQAWgRAbAAQAaAAgBAiIAAAIQgBAUgRAAQgQAAAAgRIAAgNQgbAFgNAZIABA+QAAAIgGAFQgEAEgIAAQgIAAgFgFg");
	this.shape_43.setTransform(44.2,-14.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAZA/QgQAGgQAAQgSAAgNgIQgNgIgDgRQgFggAAgYQAAgQAEgVQACgOAPAAQAHAAAFAEQAGAFAAAHIgCARIgCASIABAeQABAOADAIIAGADIAGAAQANAAARgEIAAgWIgBgUQAAgaADgTQACgPAPAAQAIAAAFAEQAFAFAAAHIgDAtIABAZIAAAZIAAAIIABAIQAAAHgGAFQgFAEgHAAQgLAAgFgJg");
	this.shape_44.setTransform(30.8,-14.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgjBCQgTgGAAgOQAAgNAPAAQAGAAALAEQALADAGAAQAZAAAAgLQAAgGgSgHQgZgMgIgEQgSgNAAgSQAAgZAbgKQAQgEAgAAQAMAAAHADQAIAEAAAMQAAAXgMAAQgNAAgDgLIgKgBQgeAAAAAJQAAAFASAJQAZALAJAGQASANAAAQQAAAXgUALQgQAIgXABQgRAAgOgGg");
	this.shape_45.setTransform(17.7,-15);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAfA6QgMAGgJADQgJADgFAAQgfAAgPgRQgPgQAAghQAAgdAWgWQAXgWAfAAQAMAAAPAHQAUAIAAALQAAAFgDADIgCANIgBARQAAAXADALIAGANIAFAMQAAAHgFAEQgFAFgHAAQgGAAgMgMgAgRgZQgNAOAAAQQAAARAGAJQAGAJAMAAQAHAAAHgDQAHgDAHgFQgEgdAAgPIAAgJIACgMIgEgCIgEAAQgQAAgNANg");
	this.shape_46.setTransform(4.4,-14.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgrA3QgVgQAAgdQAAggARgWQASgYAfAAQAXAAAOAHQATAJAAAUQAAAOgPALQgHAFgWAIIgpATQAFAHAJADQAJADAKAAQARAAAMgHQAKgGAHAAQANAAAAANQAAAOgVAJQgSAIgUAAQgdAAgUgOgAgRgeQgIAIgFAQIAdgNQAPgHALgHQgJgFgOAAQgKAAgJAIg");
	this.shape_47.setTransform(-10.4,-14.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgKBKQgFgFAAgHQAAgPgDgcQgDgbAAgPQAAgIgCgFQgPAJgOAUIgDACIAAAoIAAAJIgBAJQAAAHgFAEQgFAEgIAAQgLAAgDgKQgDgGAAgOIAAguIgBgTIAAgSQAAgMAEgJQAFgLAJAAQAHAAAGAFQAFAGAAAGIgBALQATgWARAAQAUAAAIAPQAIgHAJgDQAKgEALAAQAYAAAJAZQACAFAEAdQADAUAGAwQAAAHgFAFQgGAFgHAAQgOAAgDgPIgFglIgEgkQgDgXgGAAQgDAAgKAGIgPAKQAAAPADAaQAEAcAAAOQAAAHgFAFQgFAEgIAAQgGAAgFgEg");
	this.shape_48.setTransform(-27.3,-14.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgTAbQgEgFAAgFQAAgDAIgQIALgUQAEgIAIAAQAHAAAEAFQAFAEAAAFQAAADgIAQIgKAUQgFAIgIAAQgHAAgFgEg");
	this.shape_49.setTransform(-55,-7.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AglBiQgFgFAAgHQAAgMAag6QgNgagfg2IgGgKQgDgFAAgFQAAgHAFgFQAFgGAIAAQAIAAAFAHQASAYAXAwIAQgkQAJgTAJgPQAFgJAKAAQAHAAAFAFQAGAFAAAHQAAAEgCAEIgsBZQgQAigIAVIgIAYQgFAMgLAAQgIAAgFgFg");
	this.shape_50.setTransform(-67.4,-11.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgqA3QgWgQAAgdQAAggARgWQASgYAgAAQAVAAAPAHQAUAJAAAUQAAAOgQALQgIAFgVAIIgqATQAHAHAIADQAJADAKAAQARAAAMgHQALgGAFAAQAOAAAAANQAAAOgWAJQgRAIgUAAQgeAAgSgOgAgRgeQgIAIgFAQIAcgNQAQgHAKgHQgIgFgNAAQgLAAgJAIg");
	this.shape_51.setTransform(-82,-14.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAaA6IgEgaQgBgOAAgMIAAgKIAAgMIABgEIAAgGQAAgLgFAAQgLAAgKAOQgKAOgGAVIgBALIgBAMIgBALIAAALQAAAHgFAFQgFAFgIAAQgHAAgFgFQgGgFAAgHIAAgLIgBgLIACgjIABghIAAgMIAAgLQAAgHAFgFQAFgFAHAAQARAAABAUIAAABQATgSATAAQAYAAAJAUQAHANAAAbIAAAJIAAAHQAAAKACAQQADAPAAAKQAAAHgFAFQgFAFgIAAQgPAAgCgQg");
	this.shape_52.setTransform(-95.7,-15.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgpA1QgSgRgBgdQgBgcAQgWQATgaAiAAQAZAAAPAVQAOASAAAbQAAAdgQAUQgSAYgcAAQgYgBgRgQgAgSgVQgHAMAAAQQAAAPAJAHQAGAHAKAAQAKAAAIgIQAJgIABgPQABgogXAAIgBAAQgOAAgJAOg");
	this.shape_53.setTransform(-109.7,-14.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgKBKQgFgFAAgHQAAgPgDgcQgDgbAAgPQAAgIgCgFQgPAJgOAUIgDACIAAAoIAAAJIgBAJQAAAHgFAEQgFAEgIAAQgLAAgDgKQgDgGAAgOIAAguIgBgTIAAgSQAAgMAEgJQAFgLAJAAQAHAAAGAFQAFAGAAAGIgBALQATgWARAAQAUAAAIAPQAIgHAJgDQAKgEALAAQAYAAAJAZQACAFAEAdQADAUAGAwQAAAHgFAFQgGAFgHAAQgOAAgDgPIgFglIgEgkQgDgXgGAAQgDAAgKAGIgPAKQAAAPADAaQAEAcAAAOQAAAHgFAFQgFAEgIAAQgGAAgFgEg");
	this.shape_54.setTransform(-126.2,-14.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgTAbQgEgFAAgFQAAgDAIgQIALgUQAEgIAIAAQAHAAAEAFQAFAEAAAFQAAADgIAQIgKAUQgFAIgIAAQgHAAgFgEg");
	this.shape_55.setTransform(169.6,-45.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgqA3QgWgQAAgdQAAggARgWQASgYAgAAQAVAAAPAHQAUAJAAAUQAAAOgQALQgIAFgVAIIgqATQAHAHAIADQAJADAKAAQARAAAMgHQALgGAFAAQAOAAAAANQAAAOgWAJQgRAIgUAAQgeAAgSgOgAgRgeQgIAIgFAQIAcgNQAQgHAKgHQgIgFgNAAQgLAAgJAIg");
	this.shape_56.setTransform(157,-53.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgKBKQgFgFAAgHQAAgPgDgcQgDgbAAgPQAAgIgCgFQgPAJgOAUIgDACIAAAoIAAAJIgBAJQAAAHgFAEQgFAEgIAAQgLAAgDgKQgDgGAAgOIAAguIgBgTIAAgSQAAgMAEgJQAFgLAJAAQAHAAAGAFQAFAGAAAGIgBALQATgWARAAQAUAAAIAPQAIgHAJgDQAKgEALAAQAYAAAJAZQACAFAEAdQADAUAGAwQAAAHgFAFQgGAFgHAAQgOAAgDgPIgFglIgEgkQgDgXgGAAQgDAAgKAGIgPAKQAAAPADAaQAEAcAAAOQAAAHgFAFQgFAEgIAAQgGAAgFgEg");
	this.shape_57.setTransform(140,-53.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgPBcQgFgEAAgIIgBgXIAAgYIABgcIABgbQAAgHAFgFQAFgFAIAAQAHAAAFAFQAEAFAAAHIgBAbIgBAcIAAAYIABAXQAAAIgFAEQgFAFgHAAQgHAAgFgFgAgLhAQgGgGAAgHQAAgJAGgFQAGgFAHAAQAIAAAGAFQAGAFAAAJQAAAHgGAGQgGAFgIAAQgHAAgGgFg");
	this.shape_58.setTransform(126.3,-56.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgKBZQgGgFAAgHIAAgOIAAgNIgChBIgYgCQgPgCAAgPQAAgHAEgFQAGgFAHAAIAVACIAAgOIAAgMQAAgHAEgFQAGgFAHAAQASAAAAAgIAAAKIAMgBQAPAAAGACQAJAEABAMQgBAHgFAFQgEAFgIAAIgGgBIgHAAIgLABIABBCIABAGIAAAIQAAAdgTAAQgFAAgFgEg");
	this.shape_59.setTransform(116.3,-55.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgYBrQgEgFAAgHIAAgDQADgSAAgQIAAg+IgJABIgHAAQgIAAgFgEQgFgFAAgHQAAgMANgEQAFgBAQgBIACgOQAEgdAMgNQANgSAfAAQAXAAAAARQAAAQgWAAQgPAAgHALQgFAIgCARIAAAEIAYgCQAYAAAAARQAAAQgaAAQgHgBgQACIgBAhIABAiQAAAXgEAOQgCAOgNAAQgHAAgGgFg");
	this.shape_60.setTransform(92.1,-56);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgpA1QgSgRgBgdQgBgcAQgWQATgaAiAAQAZAAAPAVQAOASAAAbQAAAdgQAUQgSAYgcAAQgYgBgRgQgAgSgVQgHAMAAAQQAAAPAJAHQAGAHAKAAQAKAAAIgIQAJgIABgPQABgogXAAIgBAAQgOAAgJAOg");
	this.shape_61.setTransform(78.7,-53);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgKBKQgFgFAAgHQAAgPgDgcQgDgbAAgPQAAgIgCgFQgPAJgOAUIgDACIAAAoIAAAJIgBAJQAAAHgFAEQgFAEgIAAQgLAAgDgKQgDgGAAgOIAAguIgBgTIAAgSQAAgMAEgJQAFgLAJAAQAHAAAGAFQAFAGAAAGIgBALQATgWARAAQAUAAAIAPQAIgHAJgDQAKgEALAAQAYAAAJAZQACAFAEAdQADAUAGAwQAAAHgFAFQgGAFgHAAQgOAAgDgPIgFglIgEgkQgDgXgGAAQgDAAgKAGIgPAKQAAAPADAaQAEAcAAAOQAAAHgFAFQgFAEgIAAQgGAAgFgEg");
	this.shape_62.setTransform(50.9,-53.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAZA/QgQAGgQAAQgSAAgNgIQgNgIgDgRQgFggAAgYQAAgQAEgVQACgOAPAAQAHAAAFAEQAGAFAAAHIgCARIgCASIABAeQABAOADAIIAGADIAGAAQANAAARgEIAAgWIgBgUQAAgaADgTQACgPAPAAQAIAAAFAEQAFAFAAAHIgDAtIABAZIAAAZIAAAIIABAIQAAAHgGAFQgFAEgHAAQgLAAgFgJg");
	this.shape_63.setTransform(33.7,-53.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgjBCQgTgGAAgOQAAgNAPAAQAGAAALAEQALADAGAAQAZAAAAgLQAAgGgSgHQgZgMgIgEQgSgNAAgSQAAgZAbgKQAQgEAgAAQAMAAAHADQAIAEAAAMQAAAXgMAAQgNAAgDgLIgKgBQgeAAAAAJQAAAFASAJQAZALAJAGQASANAAAQQAAAXgUALQgQAIgXABQgRAAgOgGg");
	this.shape_64.setTransform(20.6,-53.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgLBkQgGgFAAgIIAAiuQABgHAFgFQAFgFAGAAQAIAAAEAFQAGAFAAAHIAACoQAAAYgSAAQgGAAgFgFg");
	this.shape_65.setTransform(-0.5,-56.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAfA6QgMAGgJADQgJADgFAAQgfAAgPgRQgPgQAAghQAAgdAWgWQAXgWAfAAQAMAAAPAHQAUAIAAALQAAAFgDADIgCANIgBARQAAAXADALIAGANIAFAMQAAAHgFAEQgFAFgHAAQgGAAgMgMgAgRgZQgNAOAAAQQAAARAGAJQAGAJAMAAQAHAAAHgDQAHgDAHgFQgEgdAAgPIAAgJIACgMIgEgCIgEAAQgQAAgNANg");
	this.shape_66.setTransform(-11.1,-53.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgLBZQgFgFAAgHIAAgOIAAgNIgChBIgXgCQgRgCABgPQAAgHAEgFQAGgFAHAAIAVACIAAgOIgBgMQAAgHAGgFQAFgFAHAAQASAAAAAgIgBAKIANgBQAPAAAGACQAJAEABAMQAAAHgGAFQgEAFgIAAIgGgBIgHAAIgMABIACBCIABAGIAAAIQAAAdgTAAQgGAAgFgEg");
	this.shape_67.setTransform(-24.5,-55.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgpA1QgSgRgBgdQgBgcAQgWQATgaAiAAQAZAAAPAVQAOASAAAbQAAAdgQAUQgSAYgcAAQgYgBgRgQgAgSgVQgHAMAAAQQAAAPAJAHQAGAHAKAAQAKAAAIgIQAJgIABgPQABgogXAAIgBAAQgOAAgJAOg");
	this.shape_68.setTransform(-37.6,-53);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgLBZQgFgFAAgHIABgOIAAgNIgDhBIgXgCQgQgCgBgPQAAgHAGgFQAFgFAHAAIAVACIAAgOIgBgMQAAgHAGgFQAFgFAHAAQASAAAAAgIgBAKIAOgBQAOAAAGACQAKAEgBAMQABAHgGAFQgFAFgHAAIgGgBIgGAAIgNABIADBCIAAAGIAAAIQAAAdgSAAQgGAAgGgEg");
	this.shape_69.setTransform(-50.4,-55.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AAsBIQgGgPgFgUIgfADQgTACgLACIgUAqQgGAJgKAAQgGAAgGgFQgGgFAAgHQABgHASglIgCgIQABgGAMgDQASgeAWgiQAegwAIAAQAOAAAFARIAIApIASBSIAHARQAFALAAAGQgBAHgFAFQgFAFgHAAQgLgBgKgXgAgJAMQAGgCALAAIARgCIgIgqIgaAug");
	this.shape_70.setTransform(-77.4,-56);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgRAiQAAgHAFgFQAGgEAGAAQAUAAAAAdQAAAHgGAFQgFAFgIAAQgSAAAAgegAgNgaQgFgEAAgIIAAgEIgBgFQAAgGAGgFQAFgFAHAAQASAAAAAZQAAAIgFAEQgFAFgHAAQgHAAgGgFg");
	this.shape_71.setTransform(-103.5,-54.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("Ag6BhQgOgMAAgpQAAgRACghQADgiAAgRIgCgNIgBgOQAAgTASAAQAFAAAFADIAcgFQANgCALAAQAgAAATAHQAMAFAAALQAAAHgFAFQgFAGgHAAIgGgBQgUgFgUAAIgTABIgXAFIgCAyIAxgFIAfgCQAHAAAGAFQAFAEAAAIQAAAOgQACIgfADIg1AFIgBAaQAAAZADADQACACAOAAIAXgBIAYAAIAHgBIAHAAQAIAAAFAEQAGAEAAAJQAAAOgPADQgNACgnAAQgpAAgMgLg");
	this.shape_72.setTransform(-117,-56.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AhDBMIADgnQADg3AAhEQAAgGAFgFQAFgGAIAAQAIAAAEAGQAFAFABAGQAABFgEA3IgCAfQAeAAAugOIAFgBQAIAAAGAFQAEAGAAAHQAAAKgLAFQgPAHgfAFQgcAFgTAAQgfAAAAgcg");
	this.shape_73.setTransform(-132.3,-56);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgzBXQghgaAAg/IABgSIAAgSIABgPIAAgOQAAgKAEgJQAFgMAIAAQAHAAAGAEQAGAGAAAHIgBAVIAAAWIAAASIgBASQAAASAFARQAFATAKAJQAFADAVAAQAgABAMg5QAGgdAAg3QAAgGAEgHQAGgJAKAAQAJAAAEAHQAEAFAAAFQAAAygFAcQgHAqgVAdQgKANgNAIQgQAKgPAAQghAAgQgMg");
	this.shape_74.setTransform(-149.5,-55.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AhEBfQgGgFAAgIIABgcIAAgdIAAhlQAAgIAFgHQAHgJALABIAgADQARACAMAGQA2AbAAApQAAAQgLAMQgMANgWAJQAhATARATQAFAFAAAGQAAAHgGAGQgFAFgHAAQgHAAgGgGQgmgkgtgOIABApQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgnADIAGABQAfAAAOgHQAHgDAFgGQAFgFAAgDQAAgOgSgOQgQgMgTgCIgPgBg");
	this.shape_75.setTransform(-167,-56.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-187.7,-77.5,375.4,155);


(lib.static_human_scale = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AAAgyIAABl");
	this.shape.setTransform(18.9,24.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("ABTmgIiYAAIAAgeIE9AAIAAgmIgZAAIgRASIizgDIAAALIg4AAIAAgQIhEAAIgQgRIgDAAADmlFIAAgaIjMAAIgPAAIgvAAIgLAAIgoAAIAAAaIABAAIBsBvIAAHZIAAARIBYAUIACn6IAWgTgACNmZIBQAAIAAgRIAUAAIAAAkIhkAAIAAAUIg6AAIAAgUADVlFIARAAACNmZIAAATABTmgIAAgRIA5AAIABAYADVlFIhlBfIAAAUABjkiIhBAAIAAgXIBBAAgAAbnVIAAgWIg4AAIAAARAALmGIAAAnAAalfIAAgnAALmGIAPAAIA5AAIAAgaAgvmGIALAAIAvAAAgvmGIAAAnAgklfIAAgnAh0mGIBFAAAAWEDIgkgHIjuBNIEaBCIABABIDUhcIhtgWIAAAJIgYAFAhWlFIErAAACGjlIAAH/Aj7GTIAAAnIEzAyIDFhuIgEgSIjHBlQgjgVAYgcIgBAAIDBhVIAAAAQgVAkAngDADzEwIAFATIgRAIAAcGkIAKgEAAcGkIACgYIABAAAjNFoQAKAig4AJAj8FJIAAASIAvANIDpA8AAyHRIktg+");
	this.shape_1.setTransform(30.6,68.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF99").s().p("AgfAMIAAgXIBAAAIAAAXg");
	this.shape_2.setTransform(37.3,38.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("Aj7F0IAAgnIEtA+IDHhlIAEASIjFBugAAeFGIABgBIDUhbIAFATIgSAIIjABVIgKAEgAjNEiIgvgNIAAgSIEaBCIAAABIgCAYgAAeFFIkahCIDuhOIAkAIIAAAQIBYAVIAYgFIAAgJIBtAWIjUBbgAAeFFgABuDigAAWDNIAAgQIAAnZIhshvIErAAIhlBfIAAAUIgCH6gAAiloIBBAAIAAgXIhBAAgADVmLIkrAAIgBAAIAAgaIAoAAIALAAIAvAAIAPAAIDMAAIAAAagAhWmLg");
	this.shape_3.setTransform(30.6,75.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AA0HfQgWgNABgQQAAgKAJgLIAAAAIDAhVIAAABQgUAjAngDIjHBmIAAAAgAj5GhQA3gKgKghIDpA8IALgFIAAAAQgJALAAAKQgBAQAWANgABxjEIAXgUIgXAUIAAgVIBlheIASAAIhgBfIAAH/IAAAJIgZAGgAAMlRIAAgnIAQAAIAAAngAgtlRIAAgnIALAAIAAAngABUlkIAAgUIAAgaIAAgRIA6AAIAAAXIAAAUIABAUgAgbm9IAAgQIAAgRIA3AAIAAAXIAAAKg");
	this.shape_4.setTransform(30.5,67.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("ABLAzIAAgUIBRAAIAAgQIAUAAIAAAkgAgmAzIgQAAIgvAAIgLAAIhGAAIAAhlIADAAIAQARIBFAAIAAAQIA4AAIAAgKICyACIASgSIAZAAIAAAmIk+AAIAAAeICYAAIAAAag");
	this.shape_5.setTransform(37.2,24.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.3,18.2,52.6,100.4);


(lib.static_emptyCup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AhDkDQgJEICQD/");
	this.shape.setTransform(55.4,29.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AkTi0QgHgagIgcQgLgnASgYQAUgaAmgLQAlgLAlgNQAngNAlAEQAgAEAlAMQAmANARAdQAFALAHAFQAwgTAvgSQADgBACgBQD4DVh0E0QgBAEgBADQgCAAgCABQgBAAgCABQgBAAgCABQgCAAgCABQgCABgCAAQgBABgBAAQgIADgIACQh9AliEAIQgeACgfAAQgRAAgQAAQgDAagRAdQgTAfgaAdQgZgYgVghQgKgOgJgQQgQgegKgnQgIgmgLgmQgKgmgKglQgKgmgLgkQgLgngFgmQgFgjAOgZQAMgUAggLgAA9klQAHAFAIAAQgPAshCgCQgDgLgFgHQgDgDgDgDQgXgUgmgBQgfgBgjgEQglgDgkAUQgQAKgFASQgJAgAXAlQAPAgg6gIQgDgLgDgLABKiOIgJghAB1ieIgHgZACUikIgHgdAAoiIIgHgaAACiAIgGgaADAi1IgIgeAi0E3QgNgWgKgYQgRgjgJgoQgIgjgJgjQgKglgLgmQgLgmgHglQgIglAHgfQAEgRAOAKQAGAEACAIQAJAnAMAlQALAjAKAlQAKAlAKAmQAKAmAMAlQANAogJAgQgFASgDAQgAgNkIQhAASg/AZQgrASgrAVAiog1IgPg6AhMhfIgJgfAgthvIgJggAiGhuQACAQADAPQAEAWAEAVAipFJQgGgJgFgJAihFxQAGgmABgfQABgRADgT");
	this.shape_1.setTransform(33,36.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AigBoIgGgVIgOg2QgLgnASgYQAUgaAlgLQAmgLAlgNQAngNAjAFQAhADAkAMQAoANAQAeQAGAKAHAFQAGAFAIAAQgPArhCgCQgDgLgGgGIgFgGQgYgUgmgBQgdgBgjgDQgmgEgjAUQgRAKgFASQgIAfAWAlQANAagjAAIgVgCg");
	this.shape_2.setTransform(22,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,68.1,75.8);


(lib.static_dollarSign = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("ACEkBQA3BQA/ArQBPhGBTgkQgtiMhihKQhshSitASQgWADgVAEIg4jgIh8AAIBDD6QhCAWg8AhQiFBJgECkQgECmCGA2QB9AzCPgQIBKExQh1gfgih1QitgFiXgOQh8gMAxBWQA5BkCSA2QBKAbAjAGQBMBeClATQAZADAYABIAnCeICBAAIgqioQBDgNA9geQCUhJAZiYQAbiqiDhWQiDhUihARQgdADgaAAIhCkEQA/gJBCAggAiAjVQALgKAMgJIArCvQgpgZgdgqQglg1ApgkgAEIBoQAyAhgIBVQgMCJh8ARIhSlDQBoACBIAxg");
	this.shape.setTransform(52.4,73.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("ACELgIgnieQgYgBgZgDQilgThMheQgjgGhKgbQiSg2g5hkQgxhWB8ALQCXAOCtAGQAiB1B1AfIhKkxQiPAQh9g0QiGg2AEilQAEikCFhJQA8ghBCgWIhDj6IB8AAIA4DfIArgFQCtgUBsBTQBiBLAtCLQhTAkhPBFQg/gqg3hQQhCggg/AJIBCEEQAaAAAdgDQChgSCDBVQCDBWgbCqQgZCYiUBJQg9AehDANIAqCogACqF4QB8gRAMiJQAIhVgyghQhIgxhogCgAg+g4IgriwIgXATQgpAkAlA1QAdAqApAag");
	this.shape_1.setTransform(52.4,73.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,106.9,149.2);


(lib.static_cup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("ADXi3QgXA2AjgGAj6gfQA1AgBGAAQBCAABDgBQBGAABEAUQBPgCATg8Qgxgfg8AIADnBeQgSBAAmAaAj6gfQAAAAAAAAABmhEQhBgFg4gBQhGgBhAAMQgwAJgxAX");
	this.shape.setTransform(32.3,26.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("ADgAmQgBhBgIhDQgGgvgJguQApgNAcARQARAJAFATQALAngOAkQgMAhgJAdQgLAjgZASQgDACgEABQgJAEgLAAADoB3QAHgGALgCQAhgIAXgjQAVghAMgeQAOghgDgpQgDgngBgnQgBgngUgaQgSgYgpAAQgcABgcAAQgLAAgLAAAldkLQAdgSAlgMQARgGARgEQAhgJApABQAnACAnAAQAnAAAnAAQAmAAAngBQAogBAmAFQAjAFAVAUQAQAQACAiAkhkPQAZgGAagEQAmgHApACQAkABAkAAQAnAAAngBQAnAAAmACQAlACAcAPQAQAJgNAKQgFAFgJAAQgogCgmACQgmACglAAQgnAAgnAAQgnAAgnACQgqACgdgRQgQgKgPgHgAA8ikIA8AAABqh1QgQgCgPgBABNhBIAgAAABYATIAbAAABUgfIAhAAABWA6IAbAAABVCqIAeAAABXCKIAaAAABTBcIAiAAADgCEQACgIAGgFQAGA1AGA2QkPC6kQjGQgJiVAeiUQAKguANguQgZgJgYgZQgYgagVggAj7jlQgRgIgRgGQgegJgigPAk1kJQAKgDAKgDABaDYIAfAA");
	this.shape_1.setTransform(35,31.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(72,249,147,0.341)").s().p("AkOB3QgJiUAfiVIAAAAIACACIAAAAQAzAfBDAAIAAAAIACAAICGAAIACAAIABAAIABAAQBDAABDATQBPgCATg8QAIBCABBDQgJADgLAAQgTA/AnAaQACgHAGgGIAMBrQiEBbiEAAQiLAAiMhngACWB5IgfAAgACQBLIgeAAgACOArIgaAAgACSgCIgiAAgACOgkIgbAAgACQhLIgbAAgACSh+IghAAgACSh+QhDgThDAAIgBAAIgBAAIgCAAIiGAAIgCAAIAAAAQhDAAgzgfIAAAAIgCgCQAxgWAvgJQBAgNBHABQA4ABBBAGIAfACQA7gIAyAgQgTA8hPACIAAAAgACKigIggAAg");
	this.shape_2.setTransform(32.1,41);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag8BeQAMAAAIgDIAHgEQAagRAKglQAIgdANggQANgjgKgoQgFgSgRgKQgcgQgpAMQgjAHAXg3IAWAAIA3AAQApgBATAYQAUAaABAnQABAnACAnQADAogOAjQgMAegVAgQgWAjggAIQgLADgHAFQgHAGgCAHQgmgaAShAg");
	this.shape_3.setTransform(61.5,26.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.1,1,1).p("AgMi3QgXA2AjgGAADBeQgSBAAmAa");
	this.shape_4.setTransform(55.1,26.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(0.1,1,1).p("ADoB3QAHgGALgCQAhgIAXgjQAVghAMgeQAOghgDgpQgDgngBgnQgBgngUgaQgSgYgpAAQgcABgcAAQgLAAgLAAADgAmQgChwgWhxQApgNAcARQARAJAFATQALAngOAkQgMAhgJAdQgLAjgZASQgDACgEABQgJAEgLAAADSjrQgCgigQgQQgVgUgjgFQgmgFgoABQgnABgmAAQgnAAgnAAQgnAAgngCQgpgBghAJQgRAEgRAGQglAMgdASQAiAPAeAJQARAGARAIAkhkPQAZgGAagEQAmgHApACQAkABAkAAQAnAAAngBQAnAAAmACQAlACAcAPQAQAJgNAKQgFAFgJAAQgogCgmACQgmACglAAQgnAAgnAAQgnAAgnACQgqACgdgRQgQgKgPgHQgKADgKADAA8ikIA8AAABLh1IAfAAABNhBIAgAAABYATIAbAAABUgfIAhAAABVCqIAeAAABXCKIAaAAABTBcIAiAAABWA6IAbAAADgCEQACgIAGgFQAGA1AGA2QkPC6kQjGQgLjDA3jCQgZgJgYgZQgYgagVggABaDYIAfAA");
	this.shape_5.setTransform(35,31.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0)").s().p("Ai4AJQgQgJgPgHQAZgGAagEQAmgHAoACIBIABIBNgBQAoAAAmACQAmACAcAPQAQAIgNAKQgGAFgJAAQgngCgnACQgmACgmAAIhNAAQgnAAgnACIgIAAQglAAgZgPg");
	this.shape_6.setTransform(27.7,5.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag8BeQAMAAAIgDIAHgEQAagRAKglQAIgdANggQANgjgKgoQgFgSgRgKQgcgQgpAMQgjAHAXg3IAWAAIA3AAQApgBATAYQAUAaABAnQABAnACAnQADAogOAjQgMAegVAgQgWAjggAIQgLADgHAFQgHAGgCAHQgmgaAShAg");
	this.shape_7.setTransform(61.5,26.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Layer 2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.1,1,1).p("AkPARQAzgmBDgFQBBgFCGAFQCHAFBbAy");
	this.shape_8.setTransform(32.2,51.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,72.1,65.2);


(lib.static_beaker = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AkUkqIgCAGIAABRIACADAkUErQAag8BLgOIAAAAAkUBFIgBAHIAABUIABADAkUDPQA5gfA2gCQBQAABGAAQBEAABFgBQBHgBBAAEQAOABAIAQAiUDlQAuAFA2AAQBEAABFAAQBDAABCAOQApAJAQAc");
	this.shape.setTransform(44.1,51.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AEZlsQjkAmjDgmQhYgEAXg8QEFhSDtBSQAtAgg3AggAFFDfIAAoHIApg2QALgxgwgvQklhMkwBUQgVA+AVAoIAmAoIAAAcIAAAHQgBAAgBgBQg3gbhFAoQhKEABGCQQBKAzA3gLQABgBAAAAIAAADIAAAsIAABcQFACADriOgAigkQIAaAAQAKAsAGAqIAeAKAjoi0QABAAABAAIAAADIAAEVIAAAGQAAAAgBABQgfAKgvgmQgWiBAWhzQAlgVAoAGgAiGiGIAXAAQgDgagEgaIgkgMAhpg8IgbAAAhKiGIglAAQAEAlACAlIAbAAAiKANIAjAMIAlAMAhqBbIgWAAAhqBbQADghAAghQABgqgDgrAiBD/QAGgZAEgaQAEgbAEgcIAfAAAiBD/QANACAOACAhvCVQADgdACgdAhWBbIgUAAAiaFBIAqAUAjmDtQhnBkAzA2QFdC4Eui4QBEhvhwg5");
	this.shape_1.setTransform(39.5,48.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AkaEfQgzg3BnhjIAABcIADABQCWA7CDAAIAAAAIAAAAQCSAAB6hJIADgBIAAhcQBwA4hEBwQiXBbijAAQiiAAivhbgAA2EdQiDAAiWg7IgDgBQAag8BLgOIAAAAIAbADIgbgDIAAAAQhLAOgaA8IAAhcQA5ggA2gCIgKA0IAKg0ICVABICKgBQBHgCBAAFQAOABAIAQIAABcQgQgdgpgIQhCgOhDAAIiJgBQg2AAgugFQAuAFA2AAICJABQBDAABCAOQApAIAQAdIgDABQh6BJiSAAIAAAAIAAAAgAhwDtIgqgUgAjmDhgAFFDTIAAAAgAFFB3IAAAAgAh3BjIAAAAgAloAvQhGiPBKkBQBFgoA3AaIAABSQgogGglAWQgWBzAWCCQAvAkAfgKIAABUQgKACgLAAQgwAAg8gpg");
	this.shape_2.setTransform(39.5,58.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(1,1,1,0)").s().p("AkSE8IAAgDIgBAAIAAhUIABAAIAAgGIAAkVIAAgDIgDAAIAAhSIADABIAAgHIAAgcIgmgoQgVgoAVg+QEwhUElBMQAvAugKAyIgpA2IAAIHQgJgQgOgBQg/gEhIABIiJABIiWAAIAIg3IgIA3Qg2ACg4AfgAicEQIAgAAIggAAIAGg6QACghABghQgBAhgCAhIgWAAIAWAAIgGA6IAAAAgAiCDWIgUAAgAiTCUIAlAMIglgMIAAgTQAAghgCgiQACAiAAAhIAAATIAAAAgAiTCUIgjgMgAiVA+IAbAAIgbAAQgCglgEgkIAlAAIglAAQAEAkACAlIgbAAIAbAAIAAAAgAibgLIgHg0IgkgMIAkAMIAHA0IgXAAIAXAAIAAAAgAiEg1IgegKgAiyiVQAJArAHArQgHgrgJgrIgaAAgAj7kxQgXA8BYAEQDCAmDlgmQA3gggtggQh3gph9AAQh8AAiCApgAiVA+gAibgLg");
	this.shape_3.setTransform(43.9,36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,81,98.6);


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


(lib.blank_gr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("Aj+CqIAAlTIH9AAIAAFTg");
	this.shape.setTransform(32.5,17,1.275,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65,34);


(lib.Bk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("EAmQgXXMhMfAAAMAAAAuvMBMfAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#2D509F","#56BBFE"],[0,1],0,-150,0,150).s().p("EgmPAXYMAAAguvMBMfAAAMAAAAuvg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Bk, new cjs.Rectangle(-246.2,-151,492.6,302.2), null);


(lib.anim_money_strobe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AgMoGQgWADgVAEIg4jgIh8AAIBDD6QhCAWg8AhQiFBJgECkQgECmCGA2QB9AzCPgQIBKExQh1gfgih1QitgFiXgOQh8gMAxBWQA5BkCSA2QBKAbAjAGQBMBeClATQAZADAYABIAnCeICBAAIgqioQBDgNA9geQCUhJAZiYQAbiqiDhWQiDhUihARQgdADgaAAIhCkEQA/gJBCAgQA3BQA/ArQBPhGBTgkQgtiMhihKQhshSitASgAiAjVQALgKAMgJIArCvQgpgZgdgqQglg1ApgkgAEIBoQAyAhgIBVQgMCJh8ARIhSlDQBoACBIAxg");
	this.shape.setTransform(52.4,73.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("ACELgIgnieQgYgBgZgDQilgThMheQgjgGhKgbQiSg2g5hkQgxhWB8ALQCXAOCtAGQAiB1B1AfIhKkxQiPAQh9g0QiGg2AEilQAEikCFhJQA8ghBCgWIhDj6IB8AAIA4DfIArgFQCtgUBsBTQBiBLAtCLQhTAkhPBFQg/gqg3hQQhCggg/AJIBCEEQAaAAAdgDQChgSCDBVQCDBWgbCqQgZCYiUBJQg9AehDANIAqCogACqF4QB8gRAMiJQAIhVgyghQhIgxhogCgAg+g4IgriwIgXATQgpAkAlA1QAdAqApAag");
	this.shape_1.setTransform(52.4,73.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,153,0,0.753)").s().p("ACELgIgnieQgYgBgZgDQilgThMheQgjgGhKgbQiSg2g5hkQgxhWB8ALQCXAOCtAGQAiB1B1AfIhKkxQiPAQh9g0QiGg2AEilQAEikCFhJQA8ghBCgWIhDj6IB8AAIA4DfIArgFQCtgUBsBTQBiBLAtCLQhTAkhPBFQg/gqg3hQQhCggg/AJIBCEEQAaAAAdgDQChgSCDBVQCDBWgbCqQgZCYiUBJQg9AehDANIAqCogACqF4QB8gRAMiJQAIhVgyghQhIgxhogCgAg+g4IgriwIgXATQgpAkAlA1QAdAqApAag");
	this.shape_2.setTransform(52.4,73.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.1,1,1).p("AhvrfIh8AAIBDD6QhCAWg8AhQiFBJgECkQgECmCGA2QB9AzCPgQIBKExQh1gfgih1QitgFiXgOQh8gMAxBWQA5BkCSA2QBKAbAjAGQBMBeClATQAZADAYABIAnCeICBAAIgqioQBDgNA9geQCUhJAZiYQAbiqiDhWQiDhUihARQgdADgaAAIhCkEQA/gJBCAgQA3BQA/ArQBPhGBTgkQgtiMhihKQhshSitASQgWADgVAEgAiAjVQALgKAMgJIArCvQgpgZgdgqQglg1ApgkgAEIBoQAyAhgIBVQgMCJh8ARIhSlDQBoACBIAxg");
	this.shape_3.setTransform(52.4,73.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,153,0,0.502)").s().p("ACELgIgnieQgYgBgZgDQilgThMheQgjgGhKgbQiSg2g5hkQgxhWB8ALQCXAOCtAGQAiB1B1AfIhKkxQiPAQh9g0QiGg2AEilQAEikCFhJQA8ghBCgWIhDj6IB8AAIA4DfIArgFQCtgUBsBTQBiBLAtCLQhTAkhPBFQg/gqg3hQQhCggg/AJIBCEEQAaAAAdgDQChgSCDBVQCDBWgbCqQgZCYiUBJQg9AehDANIAqCogACqF4QB8gRAMiJQAIhVgyghQhIgxhogCgAg+g4IgriwIgXATQgpAkAlA1QAdAqApAag");
	this.shape_4.setTransform(52.4,73.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,153,0,0.251)").s().p("ACELgIgnieQgYgBgZgDQilgThMheQgjgGhKgbQiSg2g5hkQgxhWB8ALQCXAOCtAGQAiB1B1AfIhKkxQiPAQh9g0QiGg2AEilQAEikCFhJQA8ghBCgWIhDj6IB8AAIA4DfIArgFQCtgUBsBTQBiBLAtCLQhTAkhPBFQg/gqg3hQQhCggg/AJIBCEEQAaAAAdgDQChgSCDBVQCDBWgbCqQgZCYiUBJQg9AehDANIAqCogACqF4QB8gRAMiJQAIhVgyghQhIgxhogCgAg+g4IgriwIgXATQgpAkAlA1QAdAqApAag");
	this.shape_5.setTransform(52.4,73.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,153,0,0)").s().p("ACELgIgnieQgYgBgZgDQilgThMheQgjgGhKgbQiSg2g5hkQgxhWB8ALQCXAOCtAGQAiB1B1AfIhKkxQiPAQh9g0QiGg2AEilQAEikCFhJQA8ghBCgWIhDj6IB8AAIA4DfIArgFQCtgUBsBTQBiBLAtCLQhTAkhPBFQg/gqg3hQQhCggg/AJIBCEEQAaAAAdgDQChgSCDBVQCDBWgbCqQgZCYiUBJQg9AehDANIAqCogACqF4QB8gRAMiJQAIhVgyghQhIgxhogCgAg+g4IgriwIgXATQgpAkAlA1QAdAqApAag");
	this.shape_6.setTransform(52.4,73.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(0.1,1,1).p("ACEkBQA3BQA/ArQBPhGBTgkQgtiMhihKQhshSitASQgWADgVAEIg4jgIh8AAIBDD6QhCAWg8AhQiFBJgECkQgECmCGA2QB9AzCPgQIBKExQh1gfgih1QitgFiXgOQh8gMAxBWQA5BkCSA2QBKAbAjAGQBMBeClATQAZADAYABIAnCeICBAAIgqioQBDgNA9geQCUhJAZiYQAbiqiDhWQiDhUihARQgdADgaAAIhCkEQA/gJBCAggAiAjVQALgKAMgJIArCvQgpgZgdgqQglg1ApgkgAEIBoQAyAhgIBVQgMCJh8ARIhSlDQBoACBIAxg");
	this.shape_7.setTransform(52.4,73.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.1,1,1).p("Ag3n/Ig4jgIh8AAIBDD6QhCAWg8AhQiFBJgECkQgECmCGA2QB9AzCPgQIBKExQh1gfgih1QitgFiXgOQh8gMAxBWQA5BkCSA2QBKAbAjAGQBMBeClATQAZADAYABIAnCeICBAAIgqioQBDgNA9geQCUhJAZiYQAbiqiDhWQiDhUihARQgdADgaAAIhCkEQA/gJBCAgQA3BQA/ArQBPhGBTgkQgtiMhihKQhshSitASQgWADgVAEgAiAjVQALgKAMgJIArCvQgpgZgdgqQglg1ApgkgAEIBoQAyAhgIBVQgMCJh8ARIhSlDQBoACBIAxg");
	this.shape_8.setTransform(52.4,73.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},2).to({state:[{t:this.shape_4},{t:this.shape_3}]},2).to({state:[{t:this.shape_5},{t:this.shape_3}]},2).to({state:[{t:this.shape_6},{t:this.shape}]},2).to({state:[{t:this.shape_5},{t:this.shape_7}]},2).to({state:[{t:this.shape_4},{t:this.shape_3}]},2).to({state:[{t:this.shape_2},{t:this.shape_8}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,106.9,149.2);


(lib.anim_grnClock_hands = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AgKgBIAFABQAEAAACAAQAEABAEABQABAAABAAIgBAAIgPAAIgFgCAALACIAAAAIAAAAQAAAAAAAAg");
	this.shape.setTransform(0.1,3.6,1,1,90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgKgBIABAAIAFABIAGAAIAIACIABAAIgPAAg");
	this.shape_1.setTransform(0.1,3.5,1,1,90);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.1,1,1).p("AACgKIgBAFQgBAEAAACQAAAEgBAEQAAABAAABIAAAAIAAAAQAAAAAAAAIAAgBIAAgPIADgF");
	this.shape_2.setTransform(-0.3,3.4,1,1,30);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgBgEIADgGIAAABIgBAFIgBAGIgBAIIAAABg");
	this.shape_3.setTransform(-0.2,3.3,1,1,30);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.1,1,1).p("AAHgHIgDAEQgDADgBABQgDADgCADQgBABAAABIAAgBIAHgNIAGgD");
	this.shape_4.setTransform(0.2,1.6,1,1,120);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AABgEIAGgDIAAAAIgDAEIgEAEIgFAHIgBAAg");
	this.shape_5.setTransform(0.2,1.6,1,1,120);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.1,1,1).p("AgGAIIADgEQADgDABgBQADgDACgDQABgBAAgBIAAABIgHANIgGAD");
	this.shape_6.setTransform(1.4,1.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgGAIIADgEIAEgEIAFgHIABAAIgHAMIgGADg");
	this.shape_7.setTransform(1.3,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

	// Layer 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.1,1,1).p("AAJAFIAAABIgSgLIATAIg");
	this.shape_8.setTransform(1.4,2.5,1,1,150);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgJgFIATAIIgBACIAAABg");
	this.shape_9.setTransform(1.4,2.5,1,1,150);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(0.1,1,1).p("AgKgBIAVABIgVACg");
	this.shape_10.setTransform(1.2,1.8,1,1,-45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgKgBIAVABIgVACg");
	this.shape_11.setTransform(1.2,1.8,1,1,-45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(0.1,1,1).p("AgHAGIAPgOIgMARg");
	this.shape_12.setTransform(-0.4,2.2,1,1,-105);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgHAGIAPgOIgMARg");
	this.shape_13.setTransform(-0.4,2.2,1,1,-105);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(0.1,1,1).p("AABALIgCgVIADAAg");
	this.shape_14.setTransform(0.6,3.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgBgKIADAAIgBAVg");
	this.shape_15.setTransform(0.6,3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,1.4,4.7,4.3);


(lib.anim_gran_chimes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AAAhmIAAh2AAAhmQAEABACALQADANAAARQAAASgDAMQgCAMgEAAQgDAAgDgMQgDgMAAgSQAAgRADgNQADgMADAAgAgcA6IAAAAQAGAAAEANQAFAOAAATQAAATgFAOQgEANgGAAQgGAAgEgNQgEgOAAgTQAAgTAEgOQAEgMAGgBIAAkWAAeCOQAFACADAJQAFALAAARQAAARgFALQgFAMgHAAQgHAAgFgMQgFgLAAgRQAAgRAFgLQAFgMAHAAQACAAACABIAAlq");
	this.shape.setTransform(4.3,22.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AAOCWQgFgMAAgQQAAgRAFgMQAFgLAHAAIAEABQAFACADAIQAFAMAAARQAAAQgFAMQgFAMgHAAQgHAAgFgMgAgmBNQgEgNAAgTQAAgTAEgOQAEgMAGAAIAAAAQAGAAAEAMQAFAOAAATQAAATgFANQgEAOgGAAQgGAAgEgOgAgGhZQgDgMAAgSQAAgRADgNQADgMADAAIAAAAQAEABACALQADANAAARQAAASgDAMQgCAMgEAAQgDAAgDgMg");
	this.shape_1.setTransform(4.3,28);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.1,1,1).p("AgcgvIAAAAQAGAAAEAOQAFANAAAUQAAASgFANQgEANgGAAIAAAAQgGAAgEgNQgEgNAAgSQAAgUAEgNQAEgNAGgBIAAiOAAAARQAEABACALQADANAAARQAAASgDAMQgCAMgEAAQgDAAgDgMQgDgMAAgSQAAgRADgNQADgMADAAIAAAAIAAjOAAeBuQAFACADAJQAFAMAAARQAAAQgFAMQgFAMgHAAQgHAAgFgMQgFgMAAgQQAAgRAFgMQAFgLAHAAQACAAACAAIAAkr");
	this.shape_2.setTransform(4.3,19);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("AAOBrQgFgMAAgQQAAgRAFgMQAFgMAHAAIAEABQAFACADAJQAFAMAAARQAAAQgFAMQgFAMgHgBQgHABgFgMgAgGASQgDgNAAgQQAAgRADgNQADgMADAAIAAAAQAEABACALQADANAAARQAAAQgDANQgCAMgEAAQgDAAgDgMgAgcgaQgGAAgEgNQgEgOAAgSQAAgUAEgNQAEgNAGAAIAAAAQAGAAAEANQAFANAAAUQAAASgFAOQgEANgGAAg");
	this.shape_3.setTransform(4.3,26.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.1,1,1).p("AgdigIAAgpAgdigIABAAQAGABAEANQAEANAAATQAAATgEAOQgEANgGAAIgBAAQgFAAgFgNQgEgOAAgTQAAgTAEgNQAFgNAFgBgAAegwQAFACAEAJQAFAMAAAQQAAAQgFALQgEAJgFACQgBABgCAAQgHAAgFgMQgFgLAAgQQAAgQAFgMQAFgMAHAAQACAAABABIAAiZAABB2QADABADALQADAMAAASQAAARgDAMQgDANgEAAQgDAAgDgNQgCgMAAgRQAAgSACgMQADgMADAAIABAAIAAk/");
	this.shape_4.setTransform(4.3,20.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF00").s().p("AgGCpQgCgMAAgSQAAgRACgNQADgMADAAIABAAQADABADALQADANAAARQAAASgDAMQgDAMgEAAQgDAAgDgMgAAPgBQgFgMAAgQQAAgRAFgMQAFgLAHAAIADAAQAFADAEAIQAFAMAAARQAAAQgFAMQgEAIgFACIgDABQgHAAgFgLgAgdhYQgFgBgFgNQgEgNAAgTQAAgTAEgOQAFgNAFAAIABAAQAGAAAEANQAEAOAAATQAAATgEANQgEAOgGAAg");
	this.shape_5.setTransform(4.3,22.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.1,1,1).p("AgehNIAAhoAgehNIAAAAQAGAAAEAOQAFANAAATQAAATgFANQgEANgGAAIAAAAQgGAAgEgNQgEgNAAgTQAAgTAEgNQAEgNAGgBgAAcAsQACAAACABQAEACAEAJQAFAMAAAQQAAARgFALQgFAMgHAAQgHAAgFgMQgFgLAAgRQAAgQAFgMQAFgMAHAAIAAjhAgBBiIAAAAQADABADALQADAMAAASQAAARgDAMQgDANgDAAQgEAAgDgNQgDgMAAgRQAAgSADgMQADgMAEAAIAAkX");
	this.shape_6.setTransform(4.5,18.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFF00").s().p("AgIB1QgCgMgBgRQABgSACgMQADgMAEAAIAAAAQADABACALQADAMAAASQAAARgDAMQgCANgDAAQgEAAgDgNgAAQA8QgFgLAAgRQAAgQAFgMQAFgLAHAAIAEABQAEACAEAIQAFAMAAAQQAAARgFALQgFAMgHAAQgHAAgFgMgAgeglQgGAAgEgNQgEgOAAgTQAAgTAEgNQAEgNAGgBIAAAAQAHAAADAOQAFANAAATQAAATgFAOQgDANgHAAg");
	this.shape_7.setTransform(4.5,23.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.1,1,1).p("AAAgcIAAAAQAEABACALQADANAAAQQAAASgDAMQgCANgEAAQgDAAgDgNQgDgMAAgSQAAgQADgNQADgMADAAIAAipAgcAtIAAAAQAGAAAEANQAFAOAAATQAAATgFANQgEAOgGAAQgGAAgEgOQgEgNAAgTQAAgTAEgOQAEgMAGgBIAAjyAAeB3QAFACADAJQAFAMAAAQQAAARgFALQgFAMgHAAQgHAAgFgMQgFgLAAgRQAAgQAFgMQAFgMAHAAQACAAACABIAAk8");
	this.shape_8.setTransform(4.3,19.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFF00").s().p("AAOBlQgFgLAAgRQAAgQAFgMQAFgMAHAAIAEABQAFACADAJQAFAMAAAQQAAARgFALQgFAMgHAAQgHAAgFgMgAgmAnQgEgOAAgTQAAgSAEgNQAEgNAGgBIAAAAQAGAAAEAOQAFANAAASQAAATgFAOQgEANgGAAQgGAAgEgNgAgGgpQgDgMAAgRQAAgSADgMQADgMADAAIAAAAQAEABACALQADAMAAASQAAARgDAMQgCANgEAAQgDAAgDgNg");
	this.shape_9.setTransform(4.3,28.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,10.7,46.2);


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


(lib.anim_pouring = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_23 = function() {
		/* _root.v2f.start();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(67));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egl6AWrMAAAgtVMBL1AAAMAAAAtVg");
	mask.setTransform(55.6,148.7);

	// Layer 2
	this.instance = new lib.static_cup("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(350.2,59.9,1,1,0,0,0,35,31.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("ADPiuQgHgNgOgCQgKgDgNADQgVAFggAAQgdAAgdABQgcAAgcABQgeAAgeACQgcADgegFQgDAAgCABQgaADgbACQgdACgbAIQgaAIgYAJQAaABAaAIQABAAAAAAQAZAEAcgBQAdgBAcAEQAcAEAegBQAdgBAeABQABAAAAAAQAcABAaAEQAcAGAdABQAgABAYgNQAUgLARgOQAGgGACgMAj2C9QACABACABQD2hrEbAF");
	this.shape.setTransform(119.2,67.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AC8kMQgLADgKACQgMA6AhgOAEbBKQAFgHALgFQAegOAPgnQAOgjAGggQAGgkgLgoQgKgmgJgmQgJglgZgWQgXgTgoAIQgcAHgbAFQgIgggUgNQgYgPgjADQgnADgnAJQglAIgmAIQgmAIgmAIQgmAIgnAHQgoAHgfAPQgPAIgPAJQgiATgZAYQAlAHAeADQASACASAFAkyjIQAXgLAYgKQAkgOAogHQAjgGAjgIQAmgIAngIQAmgJAlgFQAlgGAfAJQARAFgKANQgFAGgJABQgnAHglAKQgkAJglAIQgmAIgmAIQgmAIgmAKQgpALgfgLQgSgHgPgDgAA4ioIA7gMAECgCQgJgrgNgqIAAAAQgHgWgHgVQgPgtgTgsQAmgUAfAKQATAGAIARQATAkgGAmQgGAjgCAeQgEAmgVAWQgDADgDACQgIAEgLACQgFBDArARQAAgIAGgGAlGi/QAKgFAKgEAlti4QAbAbAdAUQAcAUAbADQgEAwABAEIAAALIAAAgQAAAAABAAQAECnAiCAQABAAAAAAAkBgTQAAAAABgBQAAABAAAAAkBgzQAAAQABAPAB5AGIAagGABdhKIAfgHABrgqIAggHACVCaIAdgGACQB6IAagFACDBOIAhgHAB/AsIAagFACjDGIAfgGAjVEWQEvCGDijsIAAAAQgRgzgQgz");
	this.shape_1.setTransform(116.3,58.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(72,249,147,0.341)").s().p("AjyCnIADgBIACgBIAEgCIAFgCIADgBQDjhfECAAIAAAAIAAAAIAbAAIAAAAQiQCXivAAQhkAAhugxgACGBXIAfgGgAj2ClIgBAAQgiiAgEinIAAgBIgBgfIAAgLQAaABAaAIQgagIgagBQAYgJAagIQAbgIAdgCQAbgCAagEIAFAAQAeAFAcgDQAegCAeAAIA4gBIA6gBQAgAAAVgFQANgDAKACQAOADAHANIAAAAQANAqAJArQgIAFgLACQgFBDArARQABgIAFgGIAhBlIgbAAIAAAAIAAAAQkCAAjjBfIgDABIgFACIgEACIgCABIgDABIgEgCgAB4ArIAdgGgABzALIAagFgABmggIAhgHgABihCIAagFgABchoIAagGgABxiPQAbAAAWgMQAUgLARgOQAGgGACgMQgCAMgGAGQgRAOgUALQgWAMgbAAIAAAAIgBAAIgFAAIgBAAQgdgBgcgGQgagEgcgBIgBAAIAAAAIABAAQAcABAaAEQAcAGAdABIABAAIAFAAIABAAIAAAAgABOiZIAggHgAhJibIAEAAIAEAAIAFAAIAigBIAAAAIABAAIAJAAIAKABIgKgBIgJAAIgBAAIAAAAIgiABIgFAAIgEAAIgEAAIAAAAIAAAAQgaAAgYgDIgCAAIgDgBIgBAAQgTgCgUAAIgBAAIAAAAIgLAAIgLAAIAAAAIAAAAQgTAAgSgCIAAAAIgFgBIgBAAIABAAIAAAAIAFABIAAAAQASACATAAIAAAAIAAAAIALAAIALAAIAAAAIABAAQAUAAATACIABAAIADABIACAAQAYADAaAAIAAAAIAAAAgABAi5IAfgHgAEfBBIAAAAg");
	this.shape_2.setTransform(119.2,69.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(74,155,253,0.353)").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_3.setTransform(90.5,56.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZBmQALgCAIgGIAGgEQAVgXADgmQACgdAGgjQAGglgTglQgIgRgSgGQgfgKgmAVQghANAMg6IAVgEIA3gMQAngJAXAUQAZAVAJAmIATBLQALAngGAlQgGAfgOAkQgOAngfAPQgLAFgFAGQgFAHgBAIQgqgSAFhCg");
	this.shape_4.setTransform(142.8,49);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0)").s().p("AgZgOIAAAfIgBAAgAAZgQIACAAIgBABg");
	this.shape_5.setTransform(93.2,55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.1,1,1).p("AkziYQARgZAhABQAcABAeACIAAAAQAdgBAegDQAdgDAYgHQAcgJAdABQAcABAbAAQAegBAhADQAYgGAZADQAfAEAZgIQAHgBABABQAAABABAAIAAAAIgDAJQgEANgIAHQgPAQgigFQgegFgZAIQgWAHgggCQgdgBgeAAQgMAAgLAAQgRAAgQgBQgdgBgcADQgdACgXAGQgbAGgegCQgcgCgbgMgAjADIQACAAACABQDPiiEhgu");
	this.shape_6.setTransform(118.1,70.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(0.1,1,1).p("ACkj1QAggcAhADQATACAMAPQAaAgACAmQACAjAEAeQAEAmgQAaQgCADgDADQgGAHgLAEQAJBBAuAIQgCgHAEgIQAEgHAKgHQAagUAHgpQAGgmgBghQgBglgUgkQgSgigQgkQgRgjgdgQQgagOglARQgaAMgaALQgKAEgKAFQABA7AegUgAlyhgQAUgcAcgaQANgMAOgLQAbgVAmgQQAkgOAjgQQAkgQAkgPQAjgQAkgQQAjgRAlgLQAigLAbAKQAWAJAOAeAEIhLQgLgXgMgXQgMgWgOgXQgYgogbgnAk8h8QAUgQAWgOQAggVAmgPQAhgOAhgOQAkgQAjgQQAkgRAjgNQAjgNAgACQASABgIAPQgDAHgIADQglAPghARQgiARgjAPQgkAQgjAQQgkAPgjASQglATghgEQgTgDgQAAQgJAHgIAGAkJhlQgTAAgSABQgeAEgmAAABqiPQgPAFgOAFQgGACgGACAiBFDQAAAAgBAAQhEiFggiUQgIgjgGgkQgBgKgCgLQgbACgfgNQghgOgggVAh+FEQFEBECskVQABAAAAgBQgbgugbgvAEVgwQgGgNgHgOACfAZIAZgLACRgLIAZgLACXhFIgeANADLB/IAbgMACqA5IAfgOADABhIAYgKADiCnIAdgMAAtioIA3gYABkhUIAegN");
	this.shape_7.setTransform(111.8,58.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(72,249,147,0.341)").s().p("Ai9DCQDQiiEgguQiKDdjrAAQg6AAhBgNgACjAlIAcgMgAjADBIgBAAQhEiFggiTQgIgjgGglQAbAMAcACIAEABIADAAIAGAAIABAAIAAAAQAVAAATgFIABAAIABAAIABAAQAXgGAcgCIADgBQARgBASAAIAAAAIAAAAIARAAIADAAIAgABIAYAAQAdAAAdABIALABIAAAAIABAAQAZAAASgGQAPgFASAAIARABIAFABIABAAIAAAAIAOABIAAAAIAAAAQAUAAAMgKIAAAAIABgBIABgBQAHgHAFgNIACgJIAAAAIANAbQgGAHgLAEQAJBCAuAIQgCgIAEgHIA2BdIgBABQkgAujQCiIgDgBgACMgCIAbgMgACBggIAYgKgABrhIIAfgOgABghoIAYgLgABSiNIAYgLgAEzgOIAAAAgAjviQIgGAAIgDAAIgEgBQgcgCgbgMQARgZAhABIA5ADIABAAQAdgBAdgDQAegDAYgHQAbgJAeABIA3ABQAdgBAiADQAYgGAZADQAeAEAagIQAHgBABACIAAAAIAAAAIgCAJQgFANgHAHIgBABIgBABIAAAAQgMAKgUAAIAAAAIAAAAIgOgBIAAAAIgBAAIgFgBIgRgBQgSAAgPAFQgSAGgZAAIgBAAIAAAAIgLgBQgdgBgdAAIgYAAIgggBIgDAAIgRAAIAAAAIAAAAQgSAAgRABIgDABQgcACgXAGIgBAAIgBAAIgBAAQgTAFgVAAIAAAAIgBAAgAA6i6IAegNgADJjNIAAAAg");
	this.shape_8.setTransform(118.1,71.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0)").s().p("AikBVQgTgDgQAAQAUgQAWgOQAggVAlgPIBDgbIBGggQAkgRAkgNQAjgNAgACQASABgIAPQgDAGgIAEQglAPgiARQgjARgiAOIhGAgQgkAPgjASQgfAPgcAAIgLAAg");
	this.shape_9.setTransform(100.1,37.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAJBrQALgEAGgHIAFgGQAQgagFgmQgDgdgCgjQgCgmgaggQgLgPgTgCQghgDggAcQgeAUgBg7IAUgJIAzgXQAmgRAZAOQAdAQARAjIAiBGQATAkACAkQABAhgGAmQgHApgbAVQgJAHgEAHQgEAHACAIQgugIgJhCg");
	this.shape_10.setTransform(136.9,43.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(0.1,1,1).p("ADbi9QggACgcgCQgdgCgdAFQgaAFgeAEQgPADgPADQgcAEgdgBQgdgCgYAMIAAAAQgcgCgYACQgdADgcAEQgHABgHABQgWACgWAAQgbAAgdACQAeADAdADQAOABAOACQAPACAOADQAbAEAgAEIAAAAQAdgFAcgEQAbgDAdAAQAcAAAcAFQAVAEAXAGQAQAFAQgDQARgEAUgEQAUgFAMgIQAVgOAZgMQASgIANgKAh8C/QCzi6EIh4");
	this.shape_11.setTransform(116.5,74);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(0.1,1,1).p("ABWkxQAWgQAXgRQAhgZAdAJQAfAJAYAfQAXAfAZAeQAbAfAJAkQAIAgACAmQACAqgWAZQgHAJgCAIQAkAnAkAoQgBACAAACQhvEylMAAQgBAAAAAAQgCgCgCgCQgBgBAAgBQgCgCgCgCQgCgDgCgCQAAgBgBgBQgCgCgBgBQhThrg6h+QgBgDgCgEIgfhMIgBgBQAAgCgBgCQgaAIghgGQgjgHgkgNQANgfAXggQAKgOALgOQAWgaAigXQAggWAfgXQAggXAfgXQAggWAfgYQAggYAhgTQAfgRAcAEQAXAEAVAagABqkEQAjAgAgAiQAuAxAnA1QADgDABgDQAKgegMgkQgKgcgKgiQgKgkgfgaQgPgMgUACQggAEgaAiQgYAagOg6QAJgGAJgHAlRgoQAQgUATgSQAbgcAhgXQAegUAdgVQAfgXAggXQAggYAggVQAfgUAfgEQARgDgEAQQgCAHgHAFQggAWgeAZQgdAXgfAXQggAXgfAWQgfAXgfAZQggAaghADQgTACgQADgABOhZIAagTAAGifIAxgkAE5ggQgDAJADAHQgQABgNgIQgZgNgPgpQAKgHAEgIACJgbIAWgQACwAiIAcgUACfAEIAVgPAD/CBIAZgSADgBfIAYgRADOBEIAVgPABohCIAbgUAmAgCQAlgIAdgJQARgGASgDAlegXQAGgJAHgI");
	this.shape_12.setTransform(109.9,57.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(72,249,147,0.341)").s().p("Ah+DDIgEgEIgBgCIgEgFIgDgEIgCgCIgDgEQhThrg6h8IgDgHIgfhNIA7AGIAbAEIAeAEIA7AIIAAAAQAcgFAcgEQAcgDAcAAQAcAAAcAFQAVAEAYAGIABABIABAAQAIACAIAAIABAAIAAAAIAMgBIAlgIQAUgFANgIQAVgOAZgMQARgIAOgJQgOAJgRAIQgZAMgVAOQgNAIgUAFIglAIIgMABIAAAAIgBAAQgIAAgIgCIgBAAIgBgBQgYgGgVgEQgcgFgcAAQgcAAgcADQgcAEgcAFIAAAAIg7gIIgegEIgbgEIg7gGQAdgCAaAAQAXAAAVgCIAOgCIA6gHQAYgCAbACIAAAAQAZgMAdACQAcABAcgEIAfgGIA3gJQAegFAcACQAdACAfgCQANAHARAAQgDgIACgIIBIBQIgBADQkIB4iyC6IgCAAgACehCIAYgSgACNhdIAVgPgABuiAIAcgUgABdidIAWgQgAE+hvQhvExlLABQCyi6EIh4gAC9ggIAZgSg");
	this.shape_13.setTransform(116.5,73.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ABPCjQgZgNgPgpQAJgHAFgHIAEgHQAKgdgMgkQgKgcgKgiQgKgkgegaQgPgMgUACQggAEgaAiQgZAagNg6IASgNIAtghQAggYAeAIQAeAJAYAfQAXAfAZAeQAbAfAJAjQAIAgACAmQACAqgWAaQgHAIgCAJQgDAIADAHIgCAAQgPAAgMgHg");
	this.shape_14.setTransform(130.4,38.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(0.1,1,1).p("AkQhMQAbADAbACQAFABAFAAQAYACAXAEQAJACAFABIABAAQAcAUAggDQAdgCAcABQAdAAAegCQAegDAbgGQAbgGAbgJQAbgKAfACQAVABASgDQAIgBAHgCQAZgIAdgIQAMgDAAgKQACgZARABQgKgLgOAAQgDAAgDAAQgDAAgEAAIAvgwAlbhQQARgTAbgHQAcgHAdABQAdAAAdACIAAAAQABAAAAAAQAeACAagDQASgCARgCQAMgBALgCQAcgDAdABQAdAAAeAAQAdAAAegCQAYgCAVgNQATgMAZgEIAAAAQAiAFAeAAQAXAAAXAAADuhRIA/hDADuhRQiZB6huCb");
	this.shape_15.setTransform(111.7,74.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(0.1,1,1).p("AAQkvQASgVATgVQAbgfAeACQAgADAeAZQAeAZAeAZQAhAZAQAhQAOAdAKAlQALAogQAeQgFAKgBAJQAsAfAsAgQAAAAgBABQgEAdgGAdQhAERkpA/QgBgBgCgBQhyhchZh5QgWgegVgfQgCgDgCgEQgDgFgEgFQgXANgiABQgDAAgEAAQggAAgjgFQAHgiAPgkQAHgQAIgOQAQgfAcgdQAbgcAagdQAagdAagdQAagdAagdQAagfAdgZQAbgXAcgCQAYgBAZAVQgIAIgHAIQAZA2ATgfQASgmAfgLQASgGARAJQAlASARAiQAQAfAQAaQAUAggEAfQgBAEgBAEQgBgBgBgBQAAgBgBAAQgBgBgBgBIhXhEQgGgFgHgEQgEgDgEgDIg4glQgBAAgBgBQgEgCgEgCQgDgCgCgCADliCQgDAIgIAJQAjA4AtgLQgEgHAAgIAlXArQAMgWAOgVQAVghAcgdQAZgaAYgbQAagdAZgdQAbgeAbgbQAagaAegLQARgGgBAQQAAAHgGAHQgcAcgYAeQgYAegZAcQgaAdgaAdQgaAdgZAeQgaAgggAJQgSAGgPAGgAgfiQIAngtAA1hbIAWgYABThJIAWgZACvAJIAWgYACXgPIASgUADTAlIANgOIAFgGAEPBWIAVgXADqA8IAUgXAB8gqIASgUACJjLQgKgIgLgHAkfArQgRAIgQAJQgaAPgjAQAlgA+QAEgJAFgK");
	this.shape_16.setTransform(108.4,56.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(72,249,147,0.341)").s().p("AgUCuQBvibCYh6IAQgEIA1gPQAMgEABgKQACgXAOAAIABAAIAAAAIAAAAIABAAQhAEQkoA/IgDgCgAjggmQgWgdgVggIgEgGIgHgKQgXAMgiABIgHAAQASgTAbgHQAbgHAeAAIA5ACIAAACIABgCQAeACAbgCIAjgEIAWgDQAcgEAeABIA6ABQAeAAAdgDQAYgCAWgNQASgLAZgEIABAAQAiAFAdAAIAuAAIg/BDQiYB6hvCbQhzhchZh4gAhYhCIAHAAIAMgBIAigBIAAAAIAAAAIAGAAIAGAAIAFAAIAEAAIABAAIAAAAQAWAAAWgBIAEgBQAegCAcgGQAbgGAbgKQAWgIAYAAIABAAIAAAAIAIAAIACAAIACAAIAJABIAAAAIABAAQAOAAANgCQgNACgOAAIgBAAIAAAAIgJgBIgCAAIgCAAIgIAAIAAAAIgBAAQgYAAgWAIQgbAKgbAGQgcAGgeACIgEABQgWABgWAAIAAAAIgBAAIgEAAIgFAAIgGAAIgGAAIAAAAIAAAAIgiABIgMABIgHAAIAAAAIAAAAQgbAAgZgQIgBgBIAAgBIgOgCQgYgEgYgCIgJgBQgcgCgbgEQAbAEAcACIAJABQAYACAYAEIAOACIAAABIABABQAZAQAbAAIAAAAIAAAAgADzhvIAVgXgADOiKIAUgXgAC3ihIANgOgAEyiqIAIAAIAGAAQANAAAKALIgBAAIAAAAIAAAAIgBAAQgPAAgBAXQgBAKgMAEIg1APIgQAEg");
	this.shape_17.setTransform(111.2,76.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(74,155,253,0.353)").s().p("AAAAAIABAAIgBABIAAgBg");
	this.shape_18.setTransform(92.9,63.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(74,155,253,0.341)").s().p("AAAAAIAAAAIAAAAIAAABg");
	this.shape_19.setTransform(92.9,63.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0)").s().p("AgCgBIgHgFIATANIgMgIg");
	this.shape_20.setTransform(121.1,35.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AA/BrQAHgJAEgIIABgIQAFgfgUggQgQgZgQgfQgSgigjgSQgRgJgSAGQggALgSAmQgSAfgZg2IAOgQIAlgqQAbgfAeACQAhADAdAZQAdAZAfAZQAgAZARAhQAOAcAKAlQALAogQAeQgFAKgBAJQAAAIAEAHQgIACgHAAQgkAAgdgvg");
	this.shape_21.setTransform(123.9,34.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(0.1,1,1).p("AGMjnQhcBahBBlQgIANgIANQhEBygjCEAj0gcQgaANgcgCAmCAtQgaAzAwgKQAHAaAIAJQAYgdAAg4");
	this.shape_22.setTransform(103.5,70.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(0.1,1,1).p("AALj/QAKgqAcgQQARgKATAFQAnAKAYAeQAWAbAVAWQAaAcADAfQAAADgBAFQgBAJgGAKQAuAwAqgVQgGgFgBgJQgBgIADgLQAKghgTglQgSgigUgaQgXgdglgSQgjgRgigTQgigTghAFQgeAEgUAkQgNAYgOAYQgdgPgXAGQgcAIgVAcQgYAfgTAjQgTAigTAiQgUAhgTAiQgUAigUAgQgWAigJAiQgEAPgDAPIAAAAQAOgEAOgCQADgLAEgKQAOgkAVgjQATgdASggQAUghATgiQATgjAVggQAVgfAbgRQAPgKADARQABAHgEAIQgWAhgRAiQgSAigTAhQgTAigUAiQgTAggSAjQgMAXgQAPQAdgBAdADQAqAEArABQAaABAaAAQAMAAANAAQA3AAA5AAQBEAABDACQAKAAAKABQA8ABBRAAQgyARg6AFQgXABgaACQgqACgvABQhMABhLACQgQAAgQAAQgiAAgiABQgMAAgNAAQg5ABgsgWQgQAKgNAMQgXAVgeAWQAAAAAAAAQAmgCAjgIQAhgIAUgRQADADAEADIA8A6QABAAABABIAAAAAiJDSIAAAAQBdBSBoA8QACABACABQACABABABQACABACABQACABACABQACABADACQADABADACQADABACACQABAAABABQABAAACABQABABABAAQACABACACQACABADABQABAAABABQACgBACgBQDNhcA3izQAbhWgIhpQgCgBgBAAQgwgWgwgVABYhMIARgdAA3hXIAQgcADbiiQg6ghg9gaQgsgTgtgPAgmh6IAeg0AgZkgQgFAKgGAJQAkAwALgiAEyApIAPgbADDgOIARgdADtAFIANgWAEIAXIAPgZACGg2IAOgYACnghIAOgYAkxB+QANgJARgJQALgHAJgJQgVACgUAEQgFAOgEAOQgDAKgDALAlEBoQgBAAgBABQgxAQgRBEAlMC0QgBgiAIgmQAAgCABgC");
	this.shape_23.setTransform(104.1,55.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(72,249,147,0.341)").s().p("AB5COIgEgCIgEgDIgDgBIgDgBIgCgBIgEgDIgHgDIgEgDIgEgCIgEgCIgEgCIgDgCQhpg8hchRIAAAAIAAAAIAAgBIgCAAIg9g6IgGgGQgUARghAIQgjAIgmACIgBAAQAfgWAWgVQAOgMAPgKIACAAQAqAVA2AAIABAAIADAAIAZAAIBDgBIAhAAICWgDQAwgBAqgCQhEBygkCEIgDACIgDgBgAB/CNIAAAAgADnhpIAxgDQA6gFAygRQgyARg6AFIgxADIAQgaIgQAaQgqACgwABIiWADIghAAIhDABIgZAAIgDAAIgBAAQg2AAgqgVIgCAAIgFACIAAAAQgVAJgWAAIAAAAIgBAAIgEAAIgBAAQANgJAQgJQALgGAKgKQAcgBAdADQArAEArABIA0ABIAYAAIBxAAQBDAABEACIAUABQA7ABBSAAIAAABQg3CyjOBcQAkiEBEhygAlkgEQgwAJAagyQARhEAxgQIACADIAAgEIABAAIAbgGQAVgEAVgCQgKAKgLAGQgQAJgNAJIAIgcIgIAcIgGAVIAGgVIABAAIAEAAIABAAIAAAAQAWAAAVgJIAAAAIAFgCQgPAKgOAMQgWAVgfAWIABAAQAAA3gYAdQgIgJgHgZgAk+g2IAAgGQAAggAIgiQgIAiAAAgIAAAGgAk+g2IAAAAgADnhpIAAAAgAkihsIAAAAgAkihsIAAAAg");
	this.shape_24.setTransform(102.7,79.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(74,155,253,0.353)").s().p("AAAAAIAAAAIAAABIAAgBg");
	this.shape_25.setTransform(90.4,76.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(74,155,253,0.341)").s().p("AABABIAAAAIAAAAgAABABIgBgBIABAAIAAABgAABABg");
	this.shape_26.setTransform(90.3,76.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("ABQBkQAGgKABgJIABgIQgDgfgagcQgVgUgWgcQgXgdgngLQgTgFgQAKQgdARgKApQgMAhgjguIALgTIAbgxQAUgkAegEQAhgEAiASIBEAkQAlASAXAeQAUAZASAiQATAlgKAgQgDALABAJQACAIAFAGQgMAGgNAAQgeAAghgig");
	this.shape_27.setTransform(117.3,31.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(0.1,1,1).p("ADkiUQgzgBg0ADQhMAFg+gdIAAAAQgXgKgigIQhmgDgeAIQgcAHgYAJQgOAJgKAMQgZAfAGA2QgCBAgRA1QgJAdACAfQADAfgKAXQAHA/ABBGQABAwgeAVQATBKhPgDQAfgVgEg8QAJhJgegrQgYgkAXgYQArgvgIhJQgCgcALgVQAPgcACgpQADg4AOggQARgnAkgNQANgFAPgCADkiUQAFgMAFgLQAaACAZABQAwACAyABQg1AUhLgCQgPgBgQAAQglBagQBeAj3jHQARAAAQAAQAkAAA2AAIADAAQAFAAAFAAQAVAAAWAAQAjAAAiAAQAMAAANAAQBFAABBAOQAmAJAoAFQBAiPB0iAAlKCqQgFAKgHAI");
	this.shape_28.setTransform(96.8,87.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(0.1,1,1).p("ADwiWQACAIAHAFQgoAYgzgrQAFgKAAgJQAAgEAAgEQgGgegdgZQgXgUgZgZQgbgbgogGQgSgDgQAMQgaATgFArQgJAigogrQAEgKAFgKQALgaALgZQAQgmAegHQAfgIAkAPQAkAPAkAOQAnAOAaAaQAWAYAWAgQAWAjgGAhQgCAMACAIQAzAQA0ARQAAAFABAEQAbCdg6B4Qg6B6iRBTQgEgCgEgBIgBgBQgBAAgCgBQgCAAgCgBQgCgBgCgBIjriAQgDgDgEgCQgEgDgDgDAldDfQgCgRgBgTQAAgSACgTQABgEAAgFQACgMACgNQAGgiARglQARgjAQgiQAQgkAQgkQAQgjAPgkQAPglAVghQASgeAbgLQAWgIAfAMAlICnQADgQAEgQIAAgBQACgJACgJQAKglASglQAPggAPggQAQgkAPgkQAQgkASgiQARgiAZgTQAOgLAEAQQACAHgDAIQgSAkgOAjQgOAkgPAjQgQAjgQAjQgQAkgOAkQgLAegTASQgGAGgGAEQgQALgMALQgCAKgBALAhYhsIAYg3ACjivQgBgBgCgBQg8gZg+gTQgsgOgugKAAIhTIANgeAAqhMIANgeABag7IALgZAiRDuQgHgFgHgGIhEg0QgSATggAMQgiALgmAGADGgKIALgXADjAEIAMgaAEPASIAMgbAB9gpIALgZACbgZIAOgfAkUCWQgNAMgMANQgVAXgbAZ");
	this.shape_29.setTransform(104.2,54);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(72,249,147,0.341)").s().p("AmLFCQAfgVgEg8QAJhKgegrQgYgjAXgZQArgugIhIQgCgcALgWQAPgdACgoQADg4AOggQARgnAkgOQANgFAOgCIgGAgIAGggIAAAAIAiAAIBZAAIAEABIAAgBIAKAAIAqAAIBGAAIAZAAQBFAABBAPQAmAJAoAEIgKAYIAKgYQAZADAaABIBiADQgvAShAAAIgBAAIAAAAIgNgBIgDAAIgfAAQglBZgQBfIgDgBIgEgBIgEgCIjriAIgHgGIgIgFIhDg0QgTATggALQghAMgnAGQAcgZAVgXQALgNAOgMQgOAMgLANQgVAXgcAZQgCgRAAgTQAKgMAOgJQAXgIAdgIIABAAQAVgFA3AAIAAAAIAAAAIASAAIACAAIAiABQAjAIAVAKIAAAAIADABIAAAAQA1AXA9ABIABAAIAAAAIAWgBIAdgCIA0gBIAAAAIAAAAIALAAIADAAIAIABIgIgBIgDAAIgLAAIAAAAIAAAAIg0ABIgdACIgWABIAAAAIgBAAQg9gBg1gXIAAAAIgDgBIAAAAQgVgKgjgIIgigBIgCAAIgSAAIAAAAIAAAAQg3AAgVAFIgBAAQgdAIgXAIQAMgKAQgLIAMgLIgMALQgQALgMAKQgOAJgKAMQAAgSACgTIABgJIgBAJQgCATAAASQgaAgAHA1QgCBBgRA2QgKAcADAfQADAfgLAXQgEAKgHAIQAHgIAEgKQAIA+ABBHQABAwgeAVQASBHhJAAIgFAAgAjykMIAEgVIgEAVgADAhVIgBAAQAQhfAlhZIAfAAIADAAIANABIAAAAIABAAQBAAAAvgSQg6B5iRBUIgIgEgAkEjoIAAAAgAGTkeIAAAAgAjukhIAAAAg");
	this.shape_30.setTransform(95.2,99.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(255,255,255,0)").s().p("AgGgEIAGAEIAHAFIgNgJg");
	this.shape_31.setTransform(88.9,77.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("ABVBfQAFgLAAgJIAAgIQgGgegdgZQgXgSgZgZQgagbgogHQgTgCgQALQgaAUgGApQgIAjgogrIAJgUIAWgzQAQgmAegHQAfgHAkAOQAjAQAlANQAnAOAaAbQAWAXAVAfQAXAjgGAiQgCALACAIQACAIAGAFQgOAJgQAAQgbAAghgbg");
	this.shape_32.setTransform(111.5,28.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(0.1,1,1).p("Ak+iCQAOgHAPgEQAXgHAbgCQATgCAXgBQAwAAAkAIQAWAGASAIQALAFALAFQAsARAyALQBBANBTAAQgDAOgDAOQBVAAAugjQhDABg6AGQAsi5BnioAC5g0IAAAAQgyADg5gFQg7gGgygeQgNgHgPgGQgagJgfgEQgSgCgVAAQguABg4gCAClBNQAHhCANg/AlRGyQABgEAAgE");
	this.shape_33.setTransform(99.1,80.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(0.1,1,1).p("AC7oGQABAJgEALQA4AmAkgdQgHgEgDgIQgCgIAAgMQADgigaggQgZgegYgUQgdgYgogKQgmgKglgLQglgLgeALQgdAKgMAnQgIAbgJAbQgDAKgEALQAtAmAFgjQAAgrAZgWQANgNATABQApACAeAYQAbAWAZARQAfAWAJAdQABAEAAAEQg/gUhCgMQgugJgugGAEKn1QAzALAzAKQACABACAAQA5DEhSCWQgyBahlBJQgCACgCABIkLhrQgEgCgEgDQgDgBgCgBIhMgvQgQAVgfAPQggAPglAKQgkA7AJArQAIAogHE5QgCAiABAkQAAAAAAABQAAAXACAXQAGBGgIBEQgCAQAAAgAhNpNQgggJgVAKQgZANgPAhQgRAigLAnQgMAlgMAlQgMAlgMAlQgMAlgOAlQgNAlgCAiQAAAAAAABQgBASAAARQAAAnAIAiQAZgcASgZQAKgPANgOAkJh+QACgUACgUQABgGABgFQABgGAAgFQAGghAMghQANgiALgiQAMglALglQAMgmAOgjQAOgkAXgVQANgNAGAQQACAGgDAJQgNAlgKAlQgKAkgMAlQgMAlgMAlQgMAlgLAmQgCAIgDAHQgGASgLAOQgGAIgIAHQgOAMgLAMQgBALAAAKAACnGQgFAOgGAOQgDAHgCAHAg4mpIATg5ADDlvIAKghACjl9IAJgZABNmXIAKgfAB/mLIAIgZAArmaIAKgfAhLhKQgHgEgGgDADwllIAIgZAENlZIAKgdAE7lQIAJgdAkfiwIAAAAQg/ATAEBNQAEBMgPA5QgOA6AGBCQAFBBgHC8QgHC8gUBRAkYhDIAAAAQAAAAAAAA");
	this.shape_34.setTransform(96,85.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(72,249,147,0.341)").s().p("AlyG/QAVhRAGi8QAHi7gFhBQgFhBAOg7QAOg6gEhMQgEhNA/gTIAAAAIAAABIgBAdIAAAGQAAAnAIAiQgIgiAAgnIAAgGIABgdIAAgBQAOgHAQgFQAWgGAbgDQAUgCAWAAQAwAAAlAIQAVAFASAJIAWAJQArASAzALQBBANBUAAQA5gGBDgBIgBABIgBAAQgtAihRAAIgBAAIAAAAIgBAAIAAAAIgBAAIAHgcIgHAcIAAAAIgCAAIgmABIAAAAIAAAAQgcAAgdgCIgFgBIgFAAQg7gGgzgeQgNgIgOgFQgZgKgggDIgJgBIgagBIgBAAIgBAAIgCAAIgIAAIgJAAIAAAAIgBAAIgiAAIgBAAIgngBIgJAAQAKgOAHgSQgHASgKAOQgHAIgHAHQgOAMgLAMQABgUADgUIABgLIACgLIgCALIgBALQgDAUgBAUQALgMAOgMQAHgHAHgIIAJAAIAnABIABAAIAiAAIABAAIAAAAIAJAAIAIAAIACAAIABAAIABAAIAaABIAJABQAgADAZAKQAOAFANAIQAzAeA7AGIAFAAIAFABQAdACAcAAIAAAAIAAAAIAmgBIACAAIAAAAIABAAIAAAAIABAAIAAAAIABAAQBRAAAtgiIABAAIABgBQgyBbhkBJQAGhBANhAQgNBAgGBBIgEADIkMhsIgIgFIgFgCIhLgvQgRAVgeAPQggAPgmAKIAAAAQAZgcASgZQALgPAMgOQgMAOgLAPQgSAZgZAcIAAAAIAAAAQgkA7AJAsQAJAogHE4QgDAiABAkIAAABIACAuQAGBGgIBEQgCAQAAAgQgGAEgUAEQgUAFgPAAQgOAAgKgFgAjxllIABgVIgBAVgADdjdIAAAAgAkAk/gAjwl6IAAAAgAjJmhIAAAAg");
	this.shape_35.setTransform(93.6,110.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(74,155,253,0.341)").s().p("AgFBPQABBFgHBFIgBAHQAHjLAAA6gAAMjfIAAAAIABAAIgBAAg");
	this.shape_36.setTransform(66.7,101);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(255,255,255,0)").s().p("AgGgDIAFADIAIAEIgNgHg");
	this.shape_37.setTransform(87.8,77.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("ABZBZQADgLAAgJIgCgIQgIgdgggWQgZgQgagWQgegYgogCQgUgBgOANQgYAWgBAqQgFAjgsgmIAGgUIARg2QAMgnAdgKQAfgLAlALQAmALAkAKQAoAKAdAYQAZAUAYAdQAaAggCAiQgBAMADAIQADAIAGAEQgQAMgTAAQgZAAgfgVg");
	this.shape_38.setTransform(105.6,26.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(0.1,1,1).p("AjaB/QBBgBAyALQBDAOBEABQBGAABFgDQAQAAARAAQAAgPACgPIgBAAQhHAHhEgHQg6gGg9gEQhAgFg8gKQgYgEgUAAQgZAAgUAGQgQAFgMAKADMCVQgDA5AFA7ADOB3QAQjHBqi4ADOB3QBLgJAQA0QgtgLgwgCAlHCJQATgIAOgWQAAAAAAAAIAAAAAkmBrQAAACAAACQABAQACAQQABAEABAGQAEAXAKAnIAAABIgTgIAjwB8QAKAEAMgB");
	this.shape_39.setTransform(94.8,59.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(0.1,1,1).p("AE0lWIAHgeADzn1QA1AFA1AGIABAAQBiDtiCC+QglA1g2AwIAAAAQiUgWiKg7QgsgSgqgXQgOAXgdASQgeATgkAOAhsooQAFgbAGgbQAIgpAbgNQAdgOAmAHQAmAHAnAFQApAGAeAVQAbARAcAcQAdAdABAiQABAMAEAHQADAIAIADQgiAgg7gfQADgLgCgJQAAgEgCgEQgMgcghgSQgbgPgegTQgggUgnACQgTABgNAPQgWAYAEArQgBAkgxgiQADgLACgLgAhFmGIAMg7ABBmDIAGggAAemDIAGgfAgOmqQgFAPgEAPQgDAIgCAJAg/oUQAvABAuADQBDAGBBANACZlyIAFgbABzl8IAGgaADnljIAGgZAEGlaIAGgeAC6loIAHghAj1hHQgBgZABgaQAAgEAAgEQACgjAJgjQAIgjAIgjQAIgnAHgmQAIgnAKglQAKgkAUgYQAMgOAIAPQADAGgCAJQgKAmgGAmQgGAmgIAlQgIAmgIAmQgIAmgGAnQgCAPgEAMQgHAUgMAOQgCADgCACQgMAOgKAMQAAALABALAkRhzQAAgBAAAAQAAgBAAgBQAAgBAAAAQgBghAJgmQAJgmAIgmQAIgmAIgnQAIgmAIgmQAHgnANgkQALgiAYgQQAUgNAhAFAkOhTQAAABAAAAQAEAnAMAhQAWgfAPgbQAJgPALgPIAAAAAmHKeQALgCAHhmQAUkSgFhBQgGhCAPg6QAOg6gBg8QgBg9AfgMAkRgRQgkA5AJAtQAIAogGE5QgDAiABAjQAAABAAABQABAXAEAqQAEArgBAKQAAALgFAU");
	this.shape_40.setTransform(92.7,81.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(72,249,147,0.341)").s().p("AliGSQALgCAHhnQAUkRgFhAQgFhCAOg6QAOg6gBg9QgBg9AfgMQAUgJANgVIAAACIAAABQANgKAPgFQAUgGAZAAQAUAAAYAEQA8ALBAAEQA9AEA6AGQBEAHBIgHIAAAAIgCAfIgHgBIgGAAIAAAAIgBAAIgJAAIgKABQhFADhGgBQhFgBhCgOIgCgBIAAAAIAAAAIgCAAQgrgJg2AAIAAAAIAAAAIgMAAIgCABIACgBIAMAAIAAAAIAAAAQA2AAArAJIACAAIAAAAIAAAAIACABQBCAOBFABQBGABBFgDIAKgBIAJAAIABAAIAAAAIAGAAIAHABIACgfQBMgJAPA1QgtgMgwgBIgBAnQAAAmADAmIAAAAQiUgWiKg8QgrgTgrgWQgOAXgcASQgfATgkANQAWgeAPgbQAJgPALgPIAAAAIAAAAIgBAAIgBAAIAAAAIgBAAQgHAAgGgCIgBAAIgEgBIgBgBIABABIAEABIABAAQAGACAHAAIABAAIAAAAIABAAIABAAQgLAPgJAPQgPAbgWAeQgKgmgEgYIgCgKIgDggIADAgIAAABQAEAnAMAgIAAABIgTgHQgkA6AJAtQAJAngHE5QgDAiABAjIAAACQABAXAEAqQAEAqAAALQgBALgFAUQhFAFgYAKIgBgDgAjPk9IgBgWIABAWgAjQlTQAKgNANgNIADgFQAMgOAHgUQgHAUgMAOIgDAFQgNANgKANIgBgZIABgaIAAgIIAAAIIgBAaIABAZgAEFkxIABgnQAwABAtAMQglA1g2AxQgDgmAAgmgAjZkXIAAAAgAFjlLIAAAAgAjplfIAAAAg");
	this.shape_41.setTransform(89,108.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("ABbBTQADgMgCgJIgCgHQgMgdghgSQgbgNgdgTQgggVgoADQgTABgNAOQgWAZAEAqQgBAjgxgiIAFgVIALg2QAIgoAbgNQAdgPAnAHIBMANQApAFAeAVQAbASAcAbQAdAcABAiQABAMAEAIQADAHAIAEQgRAQgYAAQgXAAgdgPg");
	this.shape_42.setTransform(99.7,24.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(255,255,255,0)").s().p("AgFgQIAAgBIACAKQADAWAJAnQgKgggEgmgAgIgzIAAgCIAAAAIAAADIAAgBg");
	this.shape_43.setTransform(66.3,75.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(0.1,1,1).p("AgPASQAUgPALgU");
	this.shape_44.setTransform(62.2,75.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(0.1,1,1).p("AAmlaIAAAAQABAJACAIQAIAmAPAfAhAFaQABgEAAgEQAUkSgFhAQgFhBAOg7QAOg6AEg4QADg4AVgQABBkEQhBBKAJAsQAJAogHE4QgDAjABAjQAAABAAAAQABAWAEApQAAAAAAAAAhAFbIAAAA");
	this.shape_45.setTransform(60.2,108.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(72,249,147,0.341)").s().p("AhAFbIAAAAIABgIQAUkSgFhBQgFhBAOg6QAOg6AEg4QADg4AWgRQAVgPALgVIACABIAAAAIADARQAIAlAPAfIABABQhBBJAJAsQAJAogHE5QgDAiABAjIAAACQABAWAEAoIAAAAIhOAEg");
	this.shape_46.setTransform(60.2,108.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(0.1,1,1).p("ADiC2QgHjgBDjgIAAgDADjDOQAjACAagRQgfgGgfgDQAAAMABAMQgagCgdAAQgeAAgegBQgcgBgcgDQgbgCgagIQgZgIgWAAQgTgEgSgDQgMgBgLgBQgegBgbgBQgegBgjgDAkdC8QALgLANgIQASgKAWgFQAWgEAcABQApABAtADQAYABAaACIABAAQA/AFBDAKQAYAEAhAAQAlABAkAEADjEOQACgCACgCQgDgegBgeAkfC7QABgBAAgC");
	this.shape_47.setTransform(92.6,55);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(0.1,1,1).p("ABQn3QgBgEgCgDQgPgcgjgOQgbgMgggPQghgRgpAGQgTADgLAQQgTAbAIAqQAJgBAJgBIBFgDQAEgBAEAAQAEAAAEAAIBhADQACAAABAAQAMABAMABgAjCoFQADgcADgcQADgpAagQQAcgRAnADQAnADAnACQAoABAhARQAcAPAeAYQAhAaAFAiQABALAFAIQAEAHAIACQgeAkg+gZQACgLgDgJAhXmSQgDAQgDAPQgDATgDATAAvlyIACgbAgDlzIADghAiKlpIAGg7AgmlwIADgfAB3llIADgiABVlsIADgbAClllIADgaADFlgIADgdADzlgIADgfAChn3QAygBAzAAQADAAADAAQCFDyiJDYQgYAmghAkAhngUQAOAFAOAEQgIgCgJgDQgFgCgGgCIhOgbQgMAYgaAUQgdAVgiASQASghANgbQAHgRAKgQADMAgQgBACgCABQgCAAgCAAQgDgBgCAAQgCAAgDAAIkGgtAkXgYQgEgWgBgWQgBgEAAgEQgCgmAFgoQAFgkADgkQAEgnAEgmQAEgoAGgmQAGglARgaQALgPAJAOQAEAGgBAJQgGAngCAmQgCAmgEAmQgEAngEAnQgEAmgCAnQgBAWgGASQgCAGgCAFQgFAKgGAIQgLAPgIAOQABALACAKAiTn2QADAjg0gcQABgLABgLQghgCgSAPQgWASgIAjQgJAlgDAoQgDAngEAnQgEAngEAmQgEAngGAnQgFAoAFAiQABAHACAIQAAABAAACAlMKFQAAgBAAgBQAAgBgBgBQABACAAACg");
	this.shape_48.setTransform(94.9,78.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(72,249,147,0.341)").s().p("AkagHIgEgQQALgLAOgIQARgKAWgFQAXgEAbABIBWAEIAzADIAAAAQA/AFBDAKQAYAEAiAAQAkABAkADQAfAEAfAGIgFADQgVAMgbAAIgBAAIAAAAIgHAAIAHAAIAAAAIABAAQAbAAAVgMIAFgDQgYAlghAlIgEg7IgBgZIABAZQgZgCgeAAIg8gBIg4gEQgagCgbgIQgZgIgVAAIgmgHIgXgCIg5gCQgegBgigDIAEgMIgEAMQgFAKgGAIQgLAPgJANQgDgVgBgWQABAWADAVQAJgNALgPQAGgIAFgKQAiADAeABIA5ACIAXACIAmAHQAVAAAZAIQAbAIAaACIA4AEIA8ABQAeAAAZACIAEA7IgEAEIgCADIgFgBIgEAAIgFAAIkGguIgRgFIgLgEIhOgbQgMAXgaAVQgdAWgiARQASggAMgdQAIgPAJgQQgJAQgIAPQgMAdgSAgQgPgfgIglgAj9AWIgEgVIAEAVgADmA2IAAAAgADigFIAAAAgAjigtIAAAAg");
	this.shape_49.setTransform(92.7,76.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(74,155,253,0.341)").s().p("AgDAIIAAgDIACgEQAPgUgRAbgAgEAHIABgCIAAADg");
	this.shape_50.setTransform(64.3,72.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(255,255,255,0)").s().p("AgNgEIALAEIAQAEIgbgIg");
	this.shape_51.setTransform(86,77.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("ABdBMQACgMgDgJIgDgHQgPgbgjgPQgcgKgfgQQgigRgoAHQgTADgLAQQgTAZAIAqQADAkg0gdIACgVIAGg3QADgpAagQQAcgRAnADQAnADAnABQAoABAhASQAcAPAeAYQAhAZAFAhQABAMAFAHQAEAHAIADQgSAVgcAAQgUAAgagKg");
	this.shape_52.setTransform(93.7,22.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(0.1,1,1).p("AgOAPQASgNALgQ");
	this.shape_53.setTransform(61.4,76.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(0.1,1,1).p("Ag+E3QAPjcgFg6QgGhAAPg6QAOg6AEg4QADg4AWgRAA2k4IgZAGQAFAEABATQABATAOAPQAGANAHALQhCBJAIAsQAIAogGE5QgDAiABAi");
	this.shape_54.setTransform(60,106.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(72,249,147,0.341)").s().p("Ag+E3QAPjcgFg5QgGhBAPg6QAOg6AEg4QADg4AWgRQASgNALgRIADgGIAWAAIgZAGQAFAEABATQABATAOAPIANAYQhCBJAIAtQAIAogGE4QgDAiABAiQgvgMgUAKg");
	this.shape_55.setTransform(60,106.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(0.1,1,1).p("ADejyQACAAADgBQChDsiFDyQAAABAAABQgIAKgNABQgPAAgOABQgCgKgBgKQgIAAgGAAQgfgBgbACQgdADgcACQgdADgdAAQgcgBgeAAQgdAAgdgBQgbgBgeAAQgLAAgIAGQgIAFgMADQgNADgSAAQgMAHgPACQABgBABgBQARgdgCgqQgCgnAAgnQAAgnAAgnQAAglgCgmQgCgmACgoQAAgJgFgFQgKgNgJAQQgPAcgCAlQgCAmAAAnQABAnAAAnQAAAkgBAkQgCApAHAmQABAMADAMAjqjRQgBgcAAgcQAAgpAYgSQAagUAngBQAngBAngDQApgDAhAOQAeAMAhAVQAjAXAIAhQACALAGAHQAzgGAzgFAi6jHQgNgpARgcQAJgRATgFQAngLAkAOQAhAMAdAJQAjALASAZQACADABAEQAEAJAAALQBAATAagnQgIgCgFgGAi6jHQAHgBAHgBQASgEASgDQAEAAAFgBQARgDARgCQA7gHA7gCQACAAACAAQABAAABAAQABAAABAAQACAAABAAQACAAABAAAh0hpQgCAQgBAPQgCAQgBAPAhAhMIAAggAA7hVIAAgbAgehTIAAghAAUhXIAAgbABdhSIAAgiACLhWIAAgaACrhUIAAgeADZhZIAAgfAi/EFQAHgGAHgFQADgCAEgBQAdgCAbACQAdADAdgBQAcAAAcAAQAcAAAeAAQAeAAAdAAQAdAAAdAAQAPAAAPAAQAEAYAFAYQAAACABABQgDAAgDABQgGAAgGAAQgCAAgDAAQgCAAgDABQgCAAgCAAQgDAAgCAAQgCAAgCAAQgDAAgCAAQgDAAgDAAQh7ACh6gZQgugKgugNQgJAZgZAYQgaAYggAVQAPgiAJgeQAEgLAEgLQAOABANgCQADAAACAAQAEgBADAAQACgBACAAgAD/DrQAAAAAAAAQgdgEgYgCQgkjrA4jsAD/DtQgQAcgTAcQgCACgBACIgCADAjqjRQAAALAAALQA2AXgGgjAktENQgDgKgCgJQgJghABgpQACgnAAgnQAAgnAAgnQAAgmgBgnQgBgoAFgmQAFgjAUgVQAQgQAigCAijg7IAAg8AjDEGQACgBACAAIAAAAAkOEiQADAKADAKAj/EFQgDAFgDAFQAOgGANgBIAAAAAkFEPQgFAKgEAJQgDgOgDgNQALAAAKgCAjkD8QgDAGgDAG");
	this.shape_56.setTransform(93.1,48.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(72,249,147,0.341)").s().p("AkAAlQgOgQgBgSQgBgSgFgFIAZgGIAGAaIAJgRQANgGAOgBIAAAAIgIAWQgKAcgPAjQAPgjAKgcIAIgWIADAAIADAAIAAAAIABAAIASgBIACAAIAFgBIAHgBIADAAIAAAAIAOgMIAHgDIACAAIAXgBIABAAIAAAAIAcACIADAAIAHAAIAoACIAAAAIABAAIAEAAIAFAAIA3gBIA7AAIA8AAIA5AAIAeAAIAKAwIAAADIgGAAIgLABIgFAAIgFAAIgFAAIgEAAIgFAAIgFAAIgFAAQh8ACh6gYQgugJgugNQgJAZgYAWQgaAZghAVIgNgYgAjxAVIgFgVIAFAVgADkgoIgDgTIADATIgeAAIg5AAIg8AAIg7AAIg3ABIgFAAIgEAAIgBAAIAAAAIgogCIgHAAIgDAAIgcgCIAAAAIgBAAIgXABIgCAAIgHADIgOAMIgDAAIgHABIgFABIgCAAIgSABIgBAAIAAAAIgDAAIgDAAIAFgMIgFAMIAAAAQgOABgNAGIAGgKQAOgDAMgGQASAAANgDQANgDAHgGQAIgGALAAIA6ABIA5ACIA7AAQAdAAAcgCIA5gFQAcgCAeAAIAOABQAYABAdAFIAAABQgIALgNAAIgdABIAdgBQANAAAIgLQgQAdgTAbIgCADIgDABIgKgwgAj8gaQALAAAKgBIgGAKIgJARIgGgagAjSgYIAAAAgAjSgYgADkgoIAAAAg");
	this.shape_57.setTransform(90.7,77.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("Ai3BNIAAgWIAAg3QgBgpAYgTQAagUAngBQAngBAngCQAogDAjAOQAeAMAgAVQAjAWAIAgQADALAFAHQAGAHAHACQgaAmhAgSQAAgMgDgIIgEgHQgRgaglgKQgdgIgggNQgjgNgoAKQgSAFgKARQgQAcAMApQAEAVgSAAQgMAAgWgJg");
	this.shape_58.setTransform(87.9,22);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(0.1,1,1).p("AghgXQALgIAJgKQAFALAFALQAMAbAZAi");
	this.shape_59.setTransform(63.4,80.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(0.1,1,1).p("Ag/ECQALiwgEgyQgFhBAOg6QAOg6AEg4QADg4AXgQABAjUQhHA8AIArQAJAogHE4QgBARABAS");
	this.shape_60.setTransform(60.4,106.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(72,249,147,0.341)").s().p("Ag/ELQALiwgEgyQgFhAAOg7QAOg6AEg4QADg4AXgQQAKgJAJgKIAKAWQANAdAZAhQhHA8AIArQAJAogHE4QgBARABATQgRgOgxgHg");
	this.shape_61.setTransform(60.4,105.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(0.1,1,1).p("ABckIQAzgNA0gMQABAAAAAAQDaD1ifEkQgBABgBACQhpAThrAAQgqAAgrgDQgvgDgvgHQgGAagVAaQgXAcgdAZQAKglAGgeQADgSAGgRAkBjFQgDgbgEgcQgGgpAWgVQAXgXAmgGQAngGAmgIQAogIAkAKQAgAIAiAQQAlASAMAgQAFALAGAGQAGAGAHABQgUAphCgKQgCgMgEgIAjQjBQAtgPAugMQABAAAAAAIB8gZQABAAABAAQACgBABAAQgCgDgDgDQgTgXgmgGQgegFgigIQglgJgmAPQgRAIgIASQgMAeARAnQALAig5gQQgBgLgCgLAgmhiIgEggAALhsIgEgbAAyhvIgEgbABUhxIgFghADOiHIgEgfAChh8IgEgeACBh6IgDgaAjkEuQgIgTgGgUIAAgBQgBgBAAgCQgBgDgBgDQgLglgEgoQgEgkgEgkQgFgngGgmQgFgngDgmQgCglALgeQAGgRAMAMQAFAFACAJQADAnAHAmQAGAkAFAmQAFAnAFAmQAFAnAHAmQAGAkgIAbQgCAFgCAEQgHARgFAQQAEAKAEAKAkAEJQgEAHgFAGQgCgFgCgFQgNghgEgoQgEgngFgmQgFgngFgnQgFgmgFgmQgGgoAAgmQAAgkARgWQAOgTAhgGAh+htQAAAQABAPQAAAMABAMAing5IgIg8AhHhWIgEgg");
	this.shape_62.setTransform(88.6,48.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(0.1,1,1).p("AAqEYQgUgLgKgFQgKgFgNgEQgKgDggABQgFABgFAAQgCAAgBAAAjxERQAPgBAPgCQAVgDARgFQAWgHAbAAQAeACAZgCIABAAQACgBADAAAEAECQh6kJA+kQAjxEQIgOAD");
	this.shape_63.setTransform(88.5,47.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(255,255,255,0)").s().p("AAFDDIgBgDIgCgHQgKgkgEgpIgIhHIgKhNQgGgngCgmQgDgmALgdQAHgRAMALQAFAFABAJQADAoAGAlIAMBLIAJBNQAFAnAHAmQAHAjgJAcIgeACg");
	this.shape_64.setTransform(63.7,55.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AitBaIgDgVIgIg4QgFgoAVgVQAXgXAngGIBNgNQAngJAkAKQAfAIAjARQAmARAMAgQAEALAGAFQAGAGAIABQgVAphCgKQgBgLgFgIIgEgHQgVgWglgGQgegFghgIQglgJgmAQQgSAHgHARQgNAeASAnQAHAXgYAAQgLAAgSgFg");
	this.shape_65.setTransform(80.5,22.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(72,249,147,0.341)").s().p("AiPgCIgKgVIAKgNIADgGIAKAAIABADIgOADIAOgDIAAAAIANAnIgNgnIAdgCQAVgDASgGQAWgHAbABQAdACAZgDIAAAAIACAAIAEAAIAKgBQAggBAKADQAOAEAJAFIAeAQQgqAAgrgDQgvgEgugHQgGAagVAaQgXAbgdAZQAKgkAGgdQADgSAGgSQgGASgDASQgGAdgKAkQgZghgOgcgAhsATIgIgTIAIATgAhnggQgIARgFAPQAFgPAIgRIADgJIgDAJgAAqg5IAGAAIgGAAgAiBgng");
	this.shape_66.setTransform(77.3,79);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(0.1,1,1).p("Ajii2QgXglAJggQAFgSAQgKQAkgUAlADQAjAEAfABQAmABAXAUQADADADADQAFAHADALQBCACAPgsQgIAAgHgFQAygUAygTQABAAAAAAQD3DVh0E0QgBADgBAEQgCAAgCABQgBAAgCABQgBAAgCABQgCAAgCABQgCABgCAAQgBABgBAAQgIADgIACQh9AliEAIQgeACgfAAQgRAAgQAAQgDAagRAdQgTAfgaAdAA9klQgHgFgFgLQgRgdgmgNQglgMgggEQglgEgnANQglANglALQgmALgUAaQgSAYALAnQAIAcAHAaQADALADALQA6AIgPggAACiAIgGgaAAoiIIgHgaACUikIgHgdAB1ieIgHgZABKiOIgJghADAi1IgIgeAkTi0QggALgMAUQgOAZAFAjQAFAmALAnQALAkAKAmQAKAlAKAmQAKAmAJAmQAKAnAQAeQAJAQAKAOQABACACACQACADABADIAVAbQAEAFAEAEQADADADACAi0E3QgNgWgKgYQgRgjgJgoQgIgjgJgjQgKglgLgmQgLgmgHglQgIglAHgfQAEgRAOAKQAGAEACAIQAJAnAMAlQALAjAKAlQAKAlAKAmQAKAmAMAlQANAogJAgQgFASgDAQgAgthvIgJggAhMhfIgJgfAiGhuQACAQADAPQACAMADAMAiog1IgPg6AgNkIQhAASg/AZQgrASgrAVAiWEIQgDATgBARQgBAfgGAmAisFmQAAAAAAgBAi0FdQAEAEAEAEQADADADADIAFAGAipFJQgGgJgFgJ");
	this.shape_67.setTransform(83.9,49.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(0.1,1,1).p("AEnghQiHjwADkZIgBgEAkmIvQAIiHgEgrQgGhBAJgjQAKgiAVgcQAPgUgDAAQAGgFABgIQADgKAMgMQgJA/AEAaQADAYgFEP");
	this.shape_68.setTransform(83.8,71.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AigBoIgGgVIgOg2QgLgnASgYQAUgaAlgLQAmgLAlgNQAngNAjAFQAhADAkAMQAoANAQAeQAGAKAHAFQAGAFAIAAQgPArhCgCQgDgLgGgGIgFgGQgYgUgmgBQgdgBgjgDQgmgEgjAUQgRAKgFASQgIAfAWAlQANAagjAAIgVgCg");
	this.shape_69.setTransform(73,22.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(72,249,147,0.341)").s().p("Ag5AmQgFhAAJgiQAJgjAVgbQAQgUgDgBQAFgFACgIQACgJAMgNQgJA/ADAaQADAZgFENQgRgMgvAXQAIiGgEgsgAA2jXIAHAIIABAAIgIgIg");
	this.shape_70.setTransform(60.5,105.6);

	this.instance_1 = new lib.static_emptyCup("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(84,49.1,1,1,0,0,0,33,36.9);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance,this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},18).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]},1).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53}]},1).to({state:[{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59}]},1).to({state:[{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_1}]},15).wait(38));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:121.4},18).to({_off:true},1).wait(71));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(31).to({_off:false},0).to({rotation:105,x:83.9},6).to({x:-261.3,y:47.6},15).wait(38));

	// Layer 1
	this.instance_2 = new lib.static_beaker("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(39.6,131.8,1,1,0,0,0,39.5,48.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(0.1,1,1).p("AkVABQAJAZAlgFQAdgEAaACIAAAAQAhgCAdAAQAdAAAcAAQAdAAAcAAQAeAAAdAAQAeAAAeAAQAdAAAcAAQAbAAAagOQAVgMAcgDQgDgFgDgE");
	this.shape_71.setTransform(44.3,155.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(0.1,1,1).p("AjPmsQEFhSDtBSQAtAgg3AgQjkAmjDgmQhYgEAXg8gAFFDfIAAoHIApg2QALgxgwgvQklhMkwBUQgVA+AVAoIAmAoIAAAcIAAAHQgBAAgBgBIAABSQgogGglAVQgWBzAWCBQAvAmAfgKIABgHIAAAGQAAAAgBABIAABUIABACAhYiwIgegKQgGgqgKgsIgaAAAhviGIAlAAAhviGQgDgagEgaAiGiGIAXAAQAEAlACAlIAbAAAiajGIAkAMAjmkMIgCAGQg3gbhFAoQhKEABGCQQBKAzA3gLQABgBAAAAIAAADIAAAsQA5gfA2gCQAEgbAEgcQADgdACgdIgWAAAjoi0QABAAABAAIAAADgAiKANIAjAMQABgqgDgrIgbAAAhnAZQAAAhgDAhIAUAAAhQCVIgfAAAhCAlIglgMAjmixIAAEVAjmFJQAag8BLgOQAGgZAEgaAiaFBIAqAUAiBD/QANACAOACQAuAFA2AAQBEAABFAAQBDAABCAOQApAJAQAcIAAhcAjmDtQhnBkAzA2QFdC4Eui4QBEhvhwg5AjmFJIAAhcAE/DWQgHgHgJgBQg+gEhFABQgCAAgCAAQgeABgdAAQgoAAgnAAQhFAAhQAAAFFE7QjrCOlAiA");
	this.shape_72.setTransform(39.5,131.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(72,249,147,0.341)").s().p("AkVAhQAag7BLgOIAAAAQAhgDAcAAIA7AAIA4AAIA7AAIA7AAIA6ABQAbAAAagPQAWgNAbgCIAABbQgQgcgpgIQhCgOhDAAIiJgBQg2AAgugFIgbgDIAbADQAuAFA2AAICJABQBDAABCAOQApAIAQAcQh8BKiTAAQiEAAiYg8gAifAtIgqgUgAkVg6IAAAAIAAABQAIATAaAAIABAAIAAAAIALgBIACAAIADAAIADAAIAagCIABAAIAAAAIASABIACAAQhLAOgaA7gAjzgmQgaAAgIgTIAAgBIAAAAQA5ggA2gCIgKA0IgCAAIgSgBIAAAAIgBAAIgaACIgDAAIgDAAIgCAAIgLABIAAAAIgBAAgAiwgoIAKg0ICVABIBPAAIA7gBIAEAAQBFgBA+AEQAJABAHAHIAGAJQgbACgWANQgaAPgbAAIg6gBIg7AAIg7AAIg4AAIg7AAQgcAAghADgAiwgoIAAAAgAEWhIIAAAAgAimhcIAAAAg");
	this.shape_73.setTransform(44.3,161.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AkaEfQgzg3BnhjIAABcQFAB/DriNIAAhcQBwA4hEBwQiXBbijAAQiiAAivhbgAloAvQhGiPBKkBQBFgoA3AaIAABSQgogGglAWQgWBzAWCCQAvAkAfgKIAABUQgKACgLAAQgwAAg8gpg");
	this.shape_74.setTransform(39.5,142.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(0.1,1,1).p("AkVAVQAUgDAbgGQAcgGAbgGQAHAAAHgBQAVgEAWgCQAdgCAdgBQAcgCAegEQAbgEAdgDQAagDAZgBQAggDAdABQAdAAAegBQAggCAVANQgHALgOAAQgdgBgdAEQgdADgcACQgdADgdAHQgcAGgcADQgcADgbAAQgbABgcAAQgdAAgdAIQAAAAAAAAQAAAAAAAAQgNgDgNgCQgQgCgQABQgbABgdADQgMABgLgB");
	this.shape_75.setTransform(44.3,149.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(0.1,1,1).p("AjPmsQEFhSDtBSQAtAgg3AgQjkAmjDgmQhYgEAXg8gAFFDfIAAhGIAAnBIApg2QALgxgwgvQklhMkwBUQgVA+AVAoIAmAoIAAAcIAAAHQgBAAgBgBIAABSQgogGglAVQgWBzAWCBQAvAmAfgKIABgHIAAAGQAAAAgBABIAABUQABgBAAAAIAAADIgBgCAh2i6QgGgqgKgsIgaAAAiajGIAkAMQAEAaADAaIAlAAAhYiwIgegKAhviGIgXAAAjmkMIgCAGQg3gbhFAoQhKEABGCQQBKAzA3gLAjoi0QABAAABAAIAAADgAiEg8IAbAAIAbAAAiKANIAjAMQABgqgDgrQgCglgEglAhvCVQADgdACgdIgWAAAhnAZQAAAhgDAhIAUAAAhCAlIglgMAhvCVIAfAAAjmixIAAEVAh3DMQAAgDABgDQACgOACgOQABgKACgLAh3DMQANAAANAAQABAAAAAAQBBAAA5AAQAnAAAoAAQAdAAAegBQACAAACAAQBFgBA+AEQAOABAIAQIAABcQgQgcgpgJQhCgOhDAAQhFAAhEAAQg2AAgugFQgOgCgNgCIAAAAQAGgZAEgagAiaFBIAqAUAjmDtQhnBkAzA2QFdC4Eui4QBEhvhwg5AjmFJIAAhcQA5gfA2gCAjmDBIAAAJIAAAjAiBD/QhLAOgaA8QFACADriO");
	this.shape_76.setTransform(39.5,131.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(72,249,147,0.341)").s().p("AkVBAQAag8BLgNQhLANgaA8IAAhbIAAgkIAAgIQAUgDAbgGIA3gMIAOgCQAVgEAWgCIA6gDQAdgCAegEIA3gHIAzgEQAggDAdABQAdAAAegBQAfgCAWANQgHALgOAAIgIAAIgJAAQgVAAgUADIg5AGQgdADgdAHQgbAGgdADQgbADgcAAIg3ABQgdAAgcAIQAcgIAdAAIA3gBQAcAAAbgDQAdgDAbgGQAdgHAdgDIA5gGQAUgDAVAAIAJAAIAIAAQAOAAAHgLIAABHQgIgQgOgBIgJgBQgrgCguAAIgBAAIAAAAIgcAAIgEAAIgEAAIg7ABIhPAAIh6AAIAAgBIgBAAIAAAAQgNgDgMgCIAEgcIgEAcIgDAAIgSgBIgBAAIAAAAIgKAAIgBAAIg4AEIgJAAIgGABIgBAAIAAAAIgCAAIgFgBIAFABIACAAIAAAAIABAAIAGgBIAJAAIA4gEIABAAIAKAAIAAAAIABAAIASABIADAAIgBAFIAaABIABAAIB6AAIBPAAIA7gBIAEAAIAEAAIAcAAIAAAAIABAAQAuAAArACIAJABQAOABAIAQIAABbQgQgdgpgIQhCgNhDAAIiJgBQg2AAgugFIgbgDIAAAAIAKg0Qg2ACg5AgQA5ggA2gCIgKA0IAAAAIAbADQAuAFA2AAICJABQBDAABCANQApAIAQAdQh8BKiTAAQiEAAiYg8gAifBMIgqgUgAiLg8IAAAAgAEWhwg");
	this.shape_77.setTransform(44.3,158.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(74,155,253,0.341)").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_78.setTransform(30.2,152.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(0.1,1,1).p("AkWAJQAYgJAagFQAcgFAdgBQAJAAAIAAQAVgBAVgBQAagBAegBQAcAAAcAAQAeAAAegCQAegCAcgDQAbgCAcACQAfgBAdAAQAcABARAOQgcAGgbABQgeABgeABQgcABgdAAQgcAAgcgBQgdgBgbADQgbAEgcACQgcADgcAGQgTAEgVABQgJABgJgBQgdgBgeACQgcABgQgQg");
	this.shape_79.setTransform(44.2,143.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(0.1,1,1).p("AjPmsQEFhSDtBSQAtAgg3AgQjkAmjDgmQhYgEAXg8gAFFDfIAAh1IAAmSIApg2QALgxgwgvQklhMkwBUQgVA+AVAoIAmAoIAAAcIAAAHQgBAAgBgBIAABSQgogGglAVQgWBzAWCBQAvAmAfgKIABgHIAAAGQAAAAgBABIAAARIAABCIAAABQABgBAAAAIAAADIAAAsQA5gfA2gCQgEAagGAZIAAAAQANACAOACQAuAFA2AAQBEAABFAAQBDAABCAOQApAJAQAcIAAhcQBwA5hEBvQkuC4ldi4Qgzg2BnhkIAABcQAag8BLgOAhYiwIgegKQgGgqgKgsIgaAAAhviGIAlAAAhviGQgDgagEgaAiGiGIAXAAQAEAlACAlIgbAAAiajGIAkAMAjmkMIgCAGQg3gbhFAoQhKEABGCQQBKAzA3gLAjoi0QABAAABAAIAAADgAhnAZQABgqgDgrIAbAAAiKANIAjAMQAAAhgDAhIAUAAAhvCVQAAgFABgFQACgSABgSQABgGAAgGIgWAAAhCAlIglgMAhvCVIAfAAAjmixIAAEVAhdDMQgNgEgMgCQgBADAAADQANAAANAAQABAAAAAAQBBAAA5AAQAnAAAoAAQAdAAAegBQACAAACAAQBFgBA+AEQAOABAIAQAhvCVQgCALgBAKQgCAOgCAOAiaFBIAqAUAjmDBIgBgCAjmFJQFACADriO");
	this.shape_80.setTransform(39.5,131.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(72,249,147,0.341)").s().p("AkUBZQAZg8BLgOQhLAOgZA8IAAhbIAAgsIAAgDIgBAAIAAhCIAAABIABAAIABABQAOANAXAAIAAAAIAAAAIACAAIAAAAIADAAIACAAIAIgBIAHAAIARAAIABAAIAAAAIALAAIAMAAIADAAIACAAIAAAAIABAAIAFAAIAGAAIABAAIgBALIgDAVIgEAcIAEgcIADgVIAfAAIgfAAIABgLQAVgBAUgEQAbgGAcgDIA4gGIAFgBIABAAQAQgCARAAIAAAAIAAAAIANABIADAAQAcABAcAAIA6gBIA6gDQAcgBAdgGIAAB1QgJgQgOgBIgJgBQgqgDgvAAIAAAAIAAAAIgcABIgFAAIgEAAIg6ABIhPAAIh7AAIB7AAIBPAAIA6gBIAEAAIAFAAIAcgBIAAAAIAAAAQAvAAAqADIAJABQAOABAJAQIAABbQgRgdgpgIQhCgOhDAAIiJgBQg1AAgvgFIgbgDIAAAAIAKgzIgKAzIAAAAIAbADQAvAFA1AAICJABQBDAABCAOQApAIARAdQh8BKiUAAQiDAAiYg8gAieBlIgrgUgAkUgCQA4ggA2gCQg2ACg4AggAimgkIAbABIAAAAIgBgBQgMgDgNgCIgBAFgAiwAPgAjuhkQgXAAgOgNIgBgBIgBAAIAAgBQAXgKAagFQAcgFAdgBIARAAIAqgCIA4gCIA5AAQAeAAAdgCIA6gFQAcgCAbACIA7gBQAeABARAOQgdAGgcABIg6ADIg6ABQgcAAgcgBIgDAAIgNgBIAAAAIAAAAQgRAAgQACIgBAAIgFABIg4AGQgcADgbAGQgUAEgVABIADgjIgDAjIgBAAIgGAAIgFAAIgBAAIAAAAIgCAAIgDAAIgMAAIgLAAIAAAAIgBAAIgRAAIgHAAIgIABIgCAAIgDAAIAAAAIgCAAIAAAAIAAAAgAidhlIAAAAgAEXiFIAAAAg");
	this.shape_81.setTransform(44.2,155.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AkaEfQgzg3BnhjIAABcQFAB/DriNIAAhcQBwA4hEBwQiXBbijAAQiiAAivhbgAloAvQhGiPBKkBQBFgoA3AaIAABSQgogGglAWQgWBzAWCCQAvAkAfgKIAAASIAABCIAAAAQgKACgLAAQgwAAg8gpg");
	this.shape_82.setTransform(39.5,142.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(74,155,253,0.341)").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_83.setTransform(30.2,152.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(0.1,1,1).p("AjPmsQEFhSDtBSQAtAgg3AgQjkAmjDgmQhYgEAXg8gAFFAyIAAlaIApg2QALgxgwgvQklhMkwBUQgVA+AVAoIAmAoIAAAcIAAAHQgBAAgBgBIAABSQgogGglAVQgWBzAWCBQAvAmAfgKIABgHIAAAGQAAAAgBABAFFAyQhFAThSAXQAAAAAAAAQhOgPhPgCQhAgBg6AMQgMACgLADIAWAAIAUAAAFFAyQgrgUhIADQhBAFhMAAQhNAAhegMIAkALAh2i6QgGgqgKgsIgaAAAiajGIAkAMQAEAaADAaIAlAAAhYiwIgegKAhviGIgXAAAjmkMIgCAGQg3gbhFAoQhKEABGCQQBKAzA3gLIAAgBIAAhTAjoi0QABAAABAAIAAADgAjmBkIAAguAhnAZIAAABQAAAegCAeQgBADAAACAhnAZIAAAAIgjgMAiEg8IAbAAIAbAAAhnAZQABAAAAABIgBgBQABgqgDgrQgCglgEglAhvCVQAAgFABgFQACgSABgSQABgGAAgGAhQCVIgfAAAiABbQhHgJgfgcAjmixIAADnQA9gZBCgEAh3DMQAAgDABgDQACgOACgOQABgKACgLAh3DMQANAAANAAQABAAAAAAQBBAAA5AAQAnAAAoAAQAdAAAegBQACAAACAAQBFgBA+AEQAOABAIAQQBwA5hEBvQkuC4ldi4Qgzg2BnhkIAAgsIAAgDQAAAAgBABIABACAh2DGQAMACANAEAiBD/IAAAAQANACAOACQAuAFA2AAQBEAABFAAQBDAABCAOQApAJAQAcIAAhcIAAitAh3DMQgEAagGAZAiaFBIAqAUAjmDtIAABcQAag8BLgOAjmDtQA5gfA2gCAjmFJQFACADriO");
	this.shape_84.setTransform(39.5,131.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AkaEfQgzg3BnhjIAABcQFAB/DriNIAAhcQBwA4hEBwQiXBbijAAQiiAAivhbgAloAvQhGiPBKkBQBFgoA3AaIAABSQgogGglAWQgWBzAWCCQAvAkAfgKIAABUIAAAAQgKACgLAAQgwAAg8gpg");
	this.shape_85.setTransform(39.5,142.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(72,249,147,0.341)").s().p("AkUB6QAZg8BLgOIAAAAIAbADQAvAFA1AAICJABQBDAABCAOQApAIARAdQh8BKiUAAQiDAAiYg8gAieCGIgrgUgAkUB6IAAhcIAAgrIAAgDIgBAAIAAhUIABAAIAAgHIAAguQA8gYBDgEIAAAAIABAAQBeAMBMAAQBMAABBgEQBIgEAsAUIiXAqICXgqIAACtQgJgQgOAAIgJgBQgqgDgvAAIAAAAIAAAAIgcABIgFAAIgEAAIg6ABIhPAAIh7AAIB7AAIBPAAIA6gBIAEAAIAFAAIAcgBIAAAAIAAAAQAvABAqACIAJABQAOAAAJAQIAABcQgRgdgpgIQhCgOhDAAIiJgBQg1AAgvgFIgbgDIAAAAIAKgzQg2ACg4AfQA4gfA2gCIgKAzQhLAOgZA8IAAAAgAilgIIgBAFIAbABIAAAAIgBgBQgMgDgNgCIAEgcIADgVIgDAVIgEAcIAAAAgAieg5IAfAAIgfAAIABgLIADgjIACgMIAUAAIgUAAIAAgFIgXAFQhGgJgfgdQAfAdBGAJIAXAAIgCAMIgDAjIgBALIAAAAgAgdiDQBOABBPAPIAAABIAAgBIAAAAQhPgPhOgBIgGAAIgGAAIAAAAIgBAAQg6AAg0ALQACgfABgeQgBAegCAfQA0gLA6AAIABAAIAAAAIAGAAIAGAAgAhxipIgjgMgAiwAwgAiYhzgAiYh4IAAAAg");
	this.shape_86.setTransform(44.2,152.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(0.1,1,1).p("AjPmsQEFhSDtBSQAtAgg3AgQjkAmjDgmQhYgEAXg8gAFFgJIAAkfIApg2QALgxgwgvQklhMkwBUQgVA+AVAoIAmAoIAAAcIAAAHQgBAAgBgBIAABSQgogGglAVQgWBzAWCBQAvAmAfgKIABgHIAAAGQAAAAgBABAFFgJQgyAehBALQgQACgRABIAAAAQgzADg5AAQgTAAgUgBQgBAAAAAAQgBAAgBAAQhCgPhAgGQAAAEAAAFIABABIAkALAAeAlQgCAAgBAAAhngPQBZACBLAAQBOAABJABQBAgEAxAHAhYiwIgegKQgGgqgKgsIgaAAAhviGIAlAAAhviGQgDgagEgaAiGiGIAXAAQAEAlACAlIgbAAAiajGIAkAMAjmkMIgCAGQg3gbhFAoQhKEABGCQQBKAzA3gLIAAgBIAAhTAjoi0QABAAABAAIAAADgAjmBkIAAhSQA9giBCABIAAAAAhnAZIAAAAIgjgMQASABARACQAAgQAAgPQAAgWgCgXIAbAAAhnAZQABAAAAABAhqBbQAAgCABgDQACgeAAgeIAAgBAhvCVQAAgFABgFQACgSABgSQABgGAAgGIgWAAAhQCVIgfAAAhqBbIAUAAAiKANQgsAFgwAAAjmixIAADDAh2DGQACgOACgOQABgKACgLAh2DGQAMACANAEAh3DMQAAgDABgDAh3DMQANAAANAAQABAAAAAAQBBAAA5AAQAnAAAoAAQAdAAAegBQACAAACAAQBFgBA+AEQAOABAIAQIAABcQgQgcgpgJQhCgOhDAAQhFAAhEAAQg2AAgugFQgOgCgNgCIAAAAQAGgZAEgaQg2ACg5AfQhnBkAzA2QFdC4Eui4QBEhvhwg5IAAjoAiaFBIAqAUAjmDBIAAAsIAABcQFACADriOAjmDBIAAgDQAAAAgBABgAiBD/QhLAOgaA8");
	this.shape_87.setTransform(39.5,131.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(72,249,147,0.341)").s().p("AkUCOQAZg8BLgOQhLAOgZA8IAAhcIAAgsIAAgDIgBAAIAAhSIABgBIAAgGIAAhSQA8gjBCABIABAAICjACQBOAABJABQBAgEAyAHQgyAfhCALIghADIAhgCIAAgBQBCgLAygfIAADoQgJgQgOgBIgJAAQgqgDgvAAIAAAAIAAAAIgcAAIgFAAIgEAAIg6ABIhPAAIh7AAIB7AAIBPAAIA6gBIAEAAIAFAAIAcAAIAAAAIAAAAQAvAAAqADIAJAAQAOABAJAQIAABcQgRgcgpgJQhCgOhDAAIiJAAQg1AAgvgFIgbgEIAAAAIAKgzIgKAzIAAAAIAbAEQAvAFA1AAICJAAQBDAABCAOQApAJARAcQh8BLiUAAQiDAAiYg9gAieCaIgrgUgAkUAyQA4gfA2gCIAbAAIAAAAIgBAAQgMgEgNgCIAEgbIADgVIAfAAIgfAAIABgKIADgkIACgMIAAgFQACgeABgeIABAAIgBgBIAAgFIAAgEQBAAGBCAPQhCgPhAgGIAAgQIAAgQIAAAQIAAAQIgkgDIAkAMIAAAAIAAABQgBAegCAeIgXAFIAXAAIgCAMIgDAkIgBAKIgDAVIgEAbIgBAGQg2ACg4AfgACAheIAAAAIAAAAIAAAAIAAAAgAiEhfIgUAAgAAWiUQA5AAAzgDIAAAAIAAAAQgzADg5AAIgmgBIgDAAIACAAIABAAIAmABgAhxiVIgjgLgAkUioQAvAAAsgFQgsAFgvAAgAEXAkIAAAAgAiYhfgAgTiVIADAAIgBAAIgCAAgAgQiVIAAAAgAgTiVIAAAAgAi5itIAkADIAAAEIAAAFgAiViqIAAAAgAEXjEIAAAAg");
	this.shape_88.setTransform(44.2,150.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(0.1,1,1).p("AjPmsQEFhSDtBSQAtAgg3AgQjkAmjDgmQhYgEAXg8gAFFg3IAAjxIApg2QALgxgwgvQklhMkwBUQgVA+AVAoIAmAoIAAAcIAAAHQgBAAgBgBIAABSQgogGglAVQgWBzAWCBQAvAmAfgKQABgBAAAAIAAgGIAAiRQAQgaAkgGQAkgHAkAAIAAAAQgCgZgDgZIgXAAAhqhUQAnABAlAAQAjAAAkAAQAnAAAnAAQAnAAAnAAQAnAAAmADQAhADASAWQgiAMgoACQgnABglAEQgmAEgmABQgnABgnABQgkAAglAAQgaAAgZAAQgOAAgNAAQgoAAgjgJQgMgDgNgEAh2i6QgGgqgKgsIgaAAAiajGIAkAMAhviGQgDgagEgaIAeAKAhKiGIglAAAjmkMIgCAGQg3gbhFAoQhKEABGCQQBKAzA3gLIAAgBIAAhTIABgHAjoi0QABAAABAAIAAADgAhpg8IgbAAAhngdQgBgPgBgQIAbAAAhnAZIABABIAkALAhnAZIAAAAIgjgMAhnAZIAAABQAAAegCAeQgBADAAACIAUAAAhngdQAAAHAAAHQAAAPAAAQQAAAEAAAFAhnAZQABAAAAABAhvCVQAAgFABgFQACgSABgSQABgGAAgGIgWAAAhQCVIgfAAAhqhUQABAMAAAMAjmixIAACEAh2DGQAMACANAEAh2DGQACgOACgOQABgKACgLAh3DMQAAgDABgDAh3DMQANAAANAAQABAAAAAAQBBAAA5AAQAnAAAoAAQAdAAAegBQACAAACAAQBFgBA+AEQAOABAIAQIAAkWAiBD/IAAAAQANACAOACQAuAFA2AAQBEAABFAAQBDAABCAOQApAJAQAcIAAhcAh3DMQgEAagGAZAiaFBIAqAUAjmDBIAAAsQhnBkAzA2QFdC4Eui4QBEhvhwg5AjmDBIAAgDQAAAAgBABgAjmDtIAABcQAag8BLgOAjmDtQA5gfA2gCAjmFJQFACADriO");
	this.shape_89.setTransform(39.5,131.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(72,249,147,0.341)").s().p("AkUCxQAZg8BLgOQhLAOgZA8IAAhcIAAgsIAAgDIgBAAIAAhTIABAAIAAgHIAAiSIAZAIQAiAIAoAAIAbAAIABAPIAAAQIAAAPIAAAFIAAAFIgkgMIAkAMIAAAAIAAAAQgBAegCAfQACgfABgeIABAAIAjAMIgjgMIgBAAIAAgFIAAgFIAAgPIAAgQIgBgPIgBgeIABAeIgbAAQgoAAgigIIgZgIQAPgZAlgHQAjgHAkABIAAAAIBMAAIBIAAIBNAAIBOAAQAnAAAnAEQAgADATAVQgjANgoABQgmABgmAEQglAFgnABIhNABIhKAAIgzAAIAzAAIBKAAIBNgBQAngBAlgFQAmgEAmgBQAogBAjgNIAAEXQgJgQgOgBIgJgBQgqgCgvAAIAAAAIAAAAIgcAAIgFAAIgEAAIg6ABIhPAAIh7AAIB7AAIBPAAIA6gBIAEAAIAFAAIAcAAIAAAAIAAAAQAvAAAqACIAJABQAOABAJAQIAABcQgRgdgpgIQhCgOhDAAIiJgBQg1AAgvgFIgbgDIAAAAIAKg0Qg2ACg4AgQA4ggA2gCIgKA0IAAAAIAbADQAvAFA1AAICJABQBDAABCAOQApAIARAdQh8BKiUAAQiDAAiYg8gAieC9IgrgUgAilAuIgBAFIAbABIAAAAIgBgBQgMgDgNgCIAEgcIADgUIgDAUIgEAcIAAAAgAh/gCIgfAAIABgLIADgjIACgMIAUAAIgUAAIAAgFIgXAFIAXAAIgCAMIgDAjIgBALgACAg8IAAABIAAgBIAAAAIAAAAgACCh0IAhgCIAAgCIghAEgAh8jUIgbAAgAiXjUIgCgYIACAYIgbAAgAiwBngAiegCgAiYg8gAiWi2IAAAAg");
	this.shape_90.setTransform(44.2,147.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_2}]},18).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71}]},1).to({state:[{t:this.shape_74},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75}]},1).to({state:[{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_86},{t:this.shape_85},{t:this.shape_83},{t:this.shape_84}]},1).to({state:[{t:this.shape_88},{t:this.shape_85},{t:this.shape_83},{t:this.shape_87}]},1).to({state:[{t:this.shape_90},{t:this.shape_85},{t:this.shape_83},{t:this.shape_89}]},1).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,82.5,81,98.6);


(lib.anim_money_circles = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.static_dollarSign("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(235.2,72.2,0.199,0.199,0,0,0,52.5,73.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[235.1,72.2,234,56.2,205.6,44.7,175.9,32.9,134,32.9,92.2,32.9,62.6,44.7,45,51.8,37.8,60.6]}},4).to({guide:{path:[37.9,60.7,33,66.8,33,73.6,33,90.6,62.6,102.5,92.3,114.5,134.1,114.5,176,114.5,205.6,102.5,218.7,97.2,226,91]}},5).wait(1));

	// Layer 3
	this.instance_1 = new lib.static_dollarSign("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(152.6,33.4,0.199,0.199,0,0,0,52.5,73.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({guide:{path:[152.6,33.5,143.6,32.9,134,32.9,92.1,32.9,62.6,44.8,32.9,56.7,32.9,73.6,32.9,90.5,62.6,102.4,78.1,108.7,97.1,111.7]}},4).to({guide:{path:[97.2,111.8,114.3,114.5,134.1,114.5,176,114.5,205.6,102.5,235.3,90.6,235.3,73.6,235.3,56.8,205.6,44.9,191.7,39.3,175,36.3]}},5).wait(1));

	// Layer 1
	this.instance_2 = new lib.static_dollarSign("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(69,104.9,0.199,0.199,0,0,0,52.5,73.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({guide:{path:[69,104.9,65.7,103.7,62.6,102.5,32.9,90.5,32.9,73.6,32.9,56.7,62.6,44.9,92.1,32.9,134,32.9,150.3,32.9,164.8,34.7]}},4).to({guide:{path:[164.8,34.7,150.3,32.9,134,32.9,92.1,32.9,62.6,44.9,32.9,56.7,32.9,73.6,32.9,90,60.7,101.7]}},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(57.5,17.8,189.2,102.8);


(lib.anim_grnClock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.anim_gran_chimes();
	this.instance.parent = this;
	this.instance.setTransform(31.7,52.3,1,1,0,0,0,4.3,22.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5));

	// Layer 3
	this.instance_1 = new lib.anim_grnClock_hands();
	this.instance_1.parent = this;
	this.instance_1.setTransform(32.1,14.7,1,1,0,0,0,0.5,2.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("ACYloIAggPIh4hgIgXAVgAA9ldIAAAAQgBAAgBAAQgCABgDAAQgCABgCAAQgCABgCACQgCABgDACQAAAAAAABQgCABgBACQgCAEgBADQAAABgBABQAAADAAADQAAABAAABQAAACABACQAAAEACACQABADADACQAAABAAAAQABABABABIgWAYABHlbQgBAAAAAAQgEgBgEgBQgBAAAAAAIAAgiQgBAAgCAAQgLAAgKAEIANAgAA9l/QAMABALAFQAIAEAIAHQACACACADQAHAJAEAKQACAJAAAJQAAACAAACQgBAKgEAJQgEAKgIAIQgIAIgJAFQgKAEgMABQgBAAgCAAQgKAAgJgDQgKgDgIgHQgDgCgCgDQgGgGgEgHQgGgLAAgNQAAgCAAgCQAAgKACgJIAhANAAQluQAJgJAMgEAgjl9IBMhFAgellIgFgYIiAAAIAYAYgAAilAIgiAAAAGkoIAfgOABVk3QABgDABgEQAAgBAAgBQAAgBAAgBQAAgDgBgCQAAgCAAgBQgBgDgCgDQgBgBgBgCQgBgBgBgBQgBgBAAAAQgDgDgEgCAArkuQADADAEABQABABAAAAQAFABAFAAIAAAAQABAAABAAQAEAAAEgCQACgBACgBQACgBACgCQAAAAAAgBQACgCACgCQABgBABgCAB1lAIgeAAABwktIgbgKAA9koIAAAfABHkqIAMAcABPkvIAVAUABzlWIgdAMAAClXQAEgNAKgKIAZAaABUl5IgNAeABolpIgXAWAB2j2IAAAgIh2AAIABgggAAnkMIAMgdABAnXIiBAFIhiBVAB3iqIAAHnIh2AAIAAnngAiLFHIAAAGIBtAqIAArcAkBGBQArgOAVgsIA2AAIAAqsAhzHYQgGgOgHgNQg+gRhDgrIAIANQAzAoBTAigAhBGGQgSAjgtAUQDBAbDBgbQg3gXgDgnQgfgOgRgOIAAAUIi2AAAjBFHQBPAyAxANAECG9IgWAbIlfAAADIF/QiNAXh8gQACYFjIAArL");
	this.shape.setTransform(25.8,47.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C1E00").s().p("Ag6D0IAAnnIB1AAIAAHng");
	this.shape_1.setTransform(31.8,54.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("Ag6AQIACgfIBzAAIAAAfg");
	this.shape_2.setTransform(31.6,24.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AADAcIACAAQAEAAAEgCIAMAcQgKAEgMABgAgkAuIAWgYIgCgCIgBgBIgDgFIgCgFIgBgFIAAgCIAAgFIABgCIghgNQAEgNAKgKIAZAaIgDADIgDAHIADgHIADgDIAAgBIAFgDIAEgDIgNggQAKgEAKAAIADAAIAAAiIABAAIAIACIABAAIANgeQAIAEAIAHIAEAFIgXAWIACAEIADAFIAAADIABAEIAAACIAAACIgCAHIgCADIgEAEIgBABIgDADIgEACQgEACgEAAIgCAAIgBAAQgDAAgFgBIgBgBIgHgEIAHAEIABABIgMAdQgKgDgIgHgAAUgRIABABIACACIgCgCIgBgBIgHgFIAHAFgAgDgXIgEABIAEgBIAEgBIABAAIABAAIgBAAIgBAAIgEABgAAUAVIABgBIAEgEIACgDIAbAKQgEAKgIAIgAg6AEIAjAAIABAFIACAFIgfAOQgGgLgBgNgAAdACIgBgEIAAgDIAcgLQADAIAAAIIAAAEIgeAAIAAgCg");
	this.shape_3.setTransform(31.6,14.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AAAA7QgJAAgJgDIAMgdQAFABADAAIABAAIAAAfIgDAAgAANAaIAEgCIADgDIAWAUQgIAIgJAFgAgpApQgGgGgEgHIAfgOIADAFIABABIACACIgWAYIgFgFgAAbANIACgHIAAgCIAeAAQgBAKgEAJgAg6AEIAAgEQAAgJADgJIAhANIgBACIAAAFIAAACgAAZgKIgCgEIAXgWQAHAJADALIgcALIgDgFgAgpgpQAJgJAMgEIANAgIgEADIgFADIAAABgAAMgWIgIgCIgBAAIAAgiQAMABALAFIgNAeIgBAAg");
	this.shape_4.setTransform(31.6,14.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC6600").s().p("AiAHDQAtgTASgkQB8ARCNgXQADAmA2AXQhgAOhgAAQhgAAhhgOgAkBGHQArgOAVgrQBPAyAxAMQgSAkgtATQg+gQhDgsgAhBGMIAAAAgAgeF9IAArbIgFgYIBMhFIhMBFIiAAAIBihVICBgFIgXAVIBuBaIAALLIAAAUgAACFEIB1AAIAAnnIh1AAgAAAjPIB2AAIAAggIh0AAgAAll0QgMAEgJAJQgKAKgEANQgCAJAAAKIAAAEQAAANAGALQAEAHAGAGIAFAFQAIAHAKADQAJADAKAAIADAAQAMgBAKgEQAJgFAIgIQAIgIAEgKQAEgJABgKIAAgEQAAgJgDgJQgDgKgHgJIgEgFQgIgHgIgEQgLgGgMAAIgDAAQgLAAgKAEgAiLFUIAAgGIAAqsIBtAAIAALbg");
	this.shape_5.setTransform(25.8,46.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#723901").s().p("AhzHYIgNgcQDBAcDAgcIgVAcgAj4GOIgJgNQBDArA+AQIANAcQhSgigzgogAhBGFQgxgMhPgyIA2AAIAAAGIBtAqIC1AAIAAgUQASAOAfAPQhSAMhMAAQg2AAg1gHgAiLllIgYgYICAAAIAFAYgAApnCIAXgVIB4BgIghAQg");
	this.shape_6.setTransform(25.8,47.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,53.5,96.4);


(lib.anim_Cash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* _root.v1a.start();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(25));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egl1AOrIAA9VMBLgAAAIALAAIAAdVg");
	mask.setTransform(44.8,67.7);

	// Layer 1
	this.instance = new lib.anim_money_strobe();
	this.instance.parent = this;
	this.instance.setTransform(42.9,76.8,1,1,0,0,0,52.5,73.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	// Layer 2
	this.instance_1 = new lib.anim_money_circles();
	this.instance_1.parent = this;
	this.instance_1.setTransform(33.5,73.3,0.665,0.665,0,0,0,135.1,70.1);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:4.89,scaleY:4.89,y:73.2},11).to({regX:135,regY:70,scaleX:0.51,scaleY:0.51,x:33.4,y:73.3},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.5,3.2,124.5,147.3);


(lib.anim_weight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egl1AOrIAA9VMBLrAAAIAAdVg");
	mask.setTransform(41.8,38.1);

	// Layer 1
	this.instance = new lib.static_human_scale("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-273.9,79.2,0.593,0.593,-30,0,0,34.5,115.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:33.4,y:74},5).to({regX:34.4,regY:115.8,rotation:30,y:74.1},6).to({regX:30.6,regY:115.6,scaleY:0.59,rotation:0,x:31.1,y:74},5).to({regY:68.4,y:46},1).to({scaleX:1.65,scaleY:1.65},32).to({regX:30.7,regY:68.5,rotation:-15,x:31.3,y:46.1},5).to({rotation:30,x:31.2},14).to({regX:30.6,regY:68.4,rotation:0,x:31.1,y:46},6).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


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
		var bgm = createjs.Sound.play('bgmVN',{loop:-1});
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
		
		 window.open ("verbNum_singularPlural.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("verbNum_Intro.html","_self");
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


(lib.anim_grnClock_stage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		/* _root.v2c.start();*/
	}
	this.frame_45 = function() {
		/* _root.v2c.start();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(26).call(this.frame_45).wait(45));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgmAAOiIAA9DMBMBAAAIAAdDg");
	mask.setTransform(32.8,46.6);

	// Layer 1
	this.instance = new lib.anim_grnClock();
	this.instance.parent = this;
	this.instance.setTransform(-240.5,55.2,5.409,5.409,0,0,0,32.3,15.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:31.8,rotation:360,x:48.8,y:57.6},19).to({regX:25.8,regY:47.2,scaleX:2.4,scaleY:2.4,rotation:0,x:16.2,y:7.4},26).to({regY:47.3,scaleX:1.5,scaleY:1.5,rotation:360,x:17,y:43.6},23).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-210.4,-26.7,74.1,166.4);


(lib.Content_scene2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// artwork
	this.instance = new lib.anim_grnClock_stage();
	this.instance.parent = this;
	this.instance.setTransform(183.4,29,1,1,0,0,0,25.8,47.2);

	this.instance_1 = new lib.anim_Cash();
	this.instance_1.parent = this;
	this.instance_1.setTransform(198.9,35.5,1,1,0,0,0,52.5,73.6);

	this.instance_2 = new lib.anim_weight();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150.1,-9.3);

	this.instance_3 = new lib.anim_pouring();
	this.instance_3.parent = this;
	this.instance_3.setTransform(204.4,23.2,1,1,0,0,0,70,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance,p:{skewY:0,x:183.4}}]},90).to({state:[{t:this.instance_1}]},55).to({state:[{t:this.instance_1}]},54).to({state:[{t:this.instance_2}]},60).to({state:[{t:this.instance_3}]},59).to({state:[{t:this.instance,p:{skewY:180,x:197.1}}]},60).to({state:[{t:this.instance,p:{skewY:180,x:183.3}}]},66).wait(1));

	// examples
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLAJQgEgEAAgFQAAgEAEgEQAFgEAGAAQAHAAAFAEQAEAEAAAEQAAAFgEAEQgGAEgGAAQgGAAgFgEg");
	this.shape.setTransform(290.6,206.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAbBJQgHAEgHACIgOABQgVAAgPgOQgOgOAAgWQAAgaAOgPQAPgRAXAAQAHAAAGABQAFACAFAEQABgiACgMQABgMAMAAQAFAAAEAEQAEADgBAGIgCArQgCAbAAAOQAAAjACALIAAAEQAAAFgDAEQgEADgFAAQgIAAgDgHgAgUAFQgGAHgBASQAAAKAIAIQAIAHAKAAQAHAAAEgCIAJgGIADgDIAAgkQgDgGgGgCQgEgDgHAAQgOAAgIAIg");
	this.shape_1.setTransform(280.4,199.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgmAzQgDgEAAgFIAAg/IABgJIAAgJQAAgGADgDQADgEAGAAQALAAACALQAQgNAWAAQATAAAAAaIAAAHQgBAPgNAAQgMAAAAgNIgBgKQgUAEgKATIAAAwQAAAFgEAEQgDAEgHAAQgFAAgEgEg");
	this.shape_2.setTransform(270,202.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAXAtQgJAEgHACQgGADgEAAQgYAAgLgNQgMgNAAgZQAAgWASgRQAQgRAYAAQAJAAANAFQAOAHAAAIQAAAEgCACIgBAKIgBAOQAAARACAIIAFAKIAEAKQAAAFgEADQgEAEgFAAQgFAAgKgJgAgNgTQgKAKAAANQAAANAEAHQAGAGAJAAQAFAAAFgCQAFgCAFgEQgCgWAAgLIAAgHIABgKIgDgBIgDAAQgMAAgKAKg");
	this.shape_3.setTransform(259.6,202.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgfApQgOgNgBgXQgBgVANgRQAPgUAZAAQAUAAALAQQAKAOAAAVQAAAWgMAQQgNASgWAAQgSAAgNgNgAgNgQQgGAJAAAMQAAAMAHAGQAFAFAHAAQAHAAAHgGQAHgHAAgLQACgfgSAAQgLAAgHALg");
	this.shape_4.setTransform(248.6,202.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgcBKQgEAEgFAAQgFAAgEgEQgEgDAAgGIAAgHIABgGIAAhvQAAgGADgGQAEgHAHAAQAKAAAAALIAAAFIAAADIAAAmQAHgEAHgCQAGgCAFAAQAXAAAOAQQAOAQAAAWQAAAWgQAQQgPAQgWAAQgOAAgMgFgAgKgBQgHACgIAGIAAApQANAGAKAAQALAAAIgIQAIgJAAgMQAAgNgHgJQgGgHgMAAQgEAAgGADg");
	this.shape_5.setTransform(237.6,199.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgSBSQgEgDAAgGIAAgCQADgOAAgMIAAgwIgHABIgGAAQgGAAgDgDQgEgEAAgGQAAgJAJgDIARgBIACgLQACgWAJgLQALgNAXAAQASAAAAANQAAANgRAAQgLAAgGAIQgEAGgBANIAAADIASgBQATAAAAAMQAAANgUAAIgSAAIgBAaIABAaQAAASgDAKQgCALgJAAQgGAAgEgEg");
	this.shape_6.setTransform(226.5,200.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgmAzQgDgEAAgFIAAg/IABgJIAAgJQAAgGADgDQADgEAGAAQALAAACALQARgNAUAAQAUAAAAAaIAAAHQgBAPgNAAQgMAAAAgNIgBgKQgUAEgKATIAAAwQAAAFgEAEQgDAEgHAAQgFAAgEgEg");
	this.shape_7.setTransform(216.9,202.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAUAwQgNAFgMAAQgOAAgKgGQgKgHgCgNQgEgYAAgSQAAgNADgQQACgLALAAQAGAAAEAEQAEADAAAGIgCANIgBAOIABAXQABAKACAHIAEABIAFABQAKAAANgDIAAgRIgBgQQAAgUACgOQACgMALAAQAGAAAEAEQAEADAAAGIgCAiIAAATIAAAUIABAGIAAAGQAAAFgEAEQgEAEgGAAQgIAAgDgIg");
	this.shape_8.setTransform(206.6,202.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgbAzQgPgGAAgKQAAgKAMAAQAFAAAIADQAJADAEgBQATABAAgJQAAgFgOgGIgZgLQgNgKAAgNQAAgUAVgHQAMgEAYAAQAJAAAFADQAHADgBAJQAAARgJAAQgKABgCgJIgIgBQgWABAAAGQAAAEANAGQATAJAHAFQAPAJAAANQgBARgPAJQgNAHgRAAQgNAAgLgEg");
	this.shape_9.setTransform(196.5,202.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AADAfQgDgJgCgYIgDAFIgOAmQgCAEgDACQgEAHgIAAQgFAAgEgIQgGgJgDgNQgEgMgFgoIgCgNQAAgGAEgDQAEgEAGAAQAKAAADALIACANIACAOIADAXIARgwQAEgNAKAAQALAAADAPIAFAaIAGAaIAOg6QACgJALAAQAFAAAFAEQAEAEAAAFIgBADIgUBEQgDAJgHAJQgEAHgJAAQgLgBgIgXg");
	this.shape_10.setTransform(176.4,202.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AghAqQgQgMAAgXQAAgXANgRQAOgTAYAAQARAAALAFQAPAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAHADQAGADAHAAQAOAAAJgGQAIgFAFAAQAKAAAAAKQAAALgQAHQgOAGgQAAQgVAAgQgLgAgNgXQgGAGgEANIAWgKQANgGAHgFQgHgEgKAAQgIAAgHAGg");
	this.shape_11.setTransform(163.7,202.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAUAtIgDgUIgBgVIAAgHIABgJIAAgDIAAgFQAAgIgEAAQgJAAgGALQgJAKgEAQIgBAJIgBAJIAAAIIgBAJQAAAFgDAEQgEAEgGAAQgGAAgEgEQgDgEgBgFIAAgJIgBgIIABgbIACgZIgBgJIAAgJQAAgGAEgDQAEgEAGAAQAMAAABAPIAAACQAPgPAPAAQASAAAHAQQAFAKAAAVIAAAGIAAAGQAAAHACAMQACAMAAAIQAAAFgEAEQgEAEgFAAQgNAAgBgMg");
	this.shape_12.setTransform(153.2,202.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgcBMQgEgEAAgFQAAgKAVgsQgLgVgYgpIgEgHQgDgFAAgDQAAgGAFgEQADgEAGAAQAGAAAEAFQAOASASAlIAMgcIAOgZQAEgHAHAAQAGAAAEAEQAEADAAAGIgCAGIghBEQgNAagGARIgFASQgEAJgJAAQgGAAgEgDg");
	this.shape_13.setTransform(133.6,204.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgIA5QgDgEAAgGQAAgLgDgVQgCgVAAgLIgBgKQgMAGgLAQIgCACIAAAeIAAAHIgBAHQAAAFgEADQgEADgFAAQgJAAgDgHQgCgFAAgLIAAgjIAAgOIgBgPQAAgIAEgHQADgJAHAAQAGAAAEAEQAEAEAAAFIAAAJQAOgRANAAQAPAAAHALQAFgFAIgDQAHgCAIAAQATAAAHATQACAEACAWQADAPAFAlQAAAFgEAEQgEAEgGAAQgLAAgCgLIgEgdIgDgbQgDgSgEAAQgCAAgIAFIgMAHQAAALADAUQACAWAAAKQAAAGgDAEQgEADgGAAQgFAAgEgDg");
	this.shape_14.setTransform(120.5,202.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgmAzQgDgEAAgFIAAg/IAAgJIAAgJQABgGADgDQADgEAGAAQALAAACALQARgNAUAAQAUAAAAAaIAAAHQgBAPgNAAQgMAAAAgNIAAgKQgWAEgJATIAAAwQAAAFgDAEQgFAEgFAAQgHAAgDgEg");
	this.shape_15.setTransform(99.3,202.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgfApQgOgNgBgXQgBgVANgRQAPgUAZAAQAUAAALAQQAKAOAAAVQAAAWgMAQQgNASgWAAQgSAAgNgNgAgNgQQgGAJAAAMQAAAMAHAGQAFAFAHAAQAHAAAHgGQAHgHAAgLQACgfgSAAQgLAAgHALg");
	this.shape_16.setTransform(89,202.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgSBSQgEgDAAgGIAAgCQADgOAAgMIAAgwIgHABIgGAAQgGAAgDgDQgEgEAAgGQAAgJAJgDIARgBIACgLQACgWAJgLQALgNAXAAQASAAAAANQAAANgRAAQgLAAgGAIQgEAGgBANIAAADIASgBQATAAAAAMQAAANgUAAIgSAAIgBAaIABAaQAAASgDAKQgCALgJAAQgGAAgEgEg");
	this.shape_17.setTransform(78.7,200.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgIBEQgEgDgBgGIABgLIAAgKIgBgyIgTgBQgMgBAAgMQAAgGAEgDQADgEAGAAIARABIAAgKIgBgKQAAgFAEgEQAEgEAFABQAOgBAAAZIAAAIIAKgBQALAAAEABQAIADAAAKQAAAFgEAEQgEADgGAAIgFAAIgEAAIgJABIABAyIAAAFIAAAGQABAWgOABQgFAAgEgEg");
	this.shape_18.setTransform(354.6,170.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgMBHQgDgEAAgFIAAgSIgBgSIABgWIABgVQAAgFAEgEQAEgEAFAAQAGAAADAEQAEAEAAAFIgBAVIgBAWIABASIAAASQAAAFgEAEQgEAEgFAAQgGAAgEgEgAgIgxQgEgEAAgGQAAgGAEgEQAEgFAGAAQAGAAAFAFQAEAEAAAGQAAAGgEAEQgFAEgGAAQgGAAgEgEg");
	this.shape_19.setTransform(347.3,170.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAYAtQgKAEgGACQgHADgEAAQgYAAgLgNQgMgNAAgZQAAgWARgRQASgRAXAAQAJAAAMAFQAPAHAAAIQAAAEgCACIgCAKIAAAOQAAARADAIIAEAKIAEAKQAAAFgEADQgEAEgGAAQgEAAgJgJgAgNgTQgKAKAAANQAAANAFAHQAEAGAKAAQAFAAAGgCQAEgCAGgEQgDgWgBgLIABgHIACgKIgEgBIgDAAQgMAAgKAKg");
	this.shape_20.setTransform(338.8,172.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAEAfQgEgJgCgYIgCAFIgPAmQgBAEgEACQgEAHgIAAQgFAAgEgIQgGgJgDgNQgEgMgGgoIgBgNQAAgGAEgDQAEgEAGAAQALAAACALIACANIABAOIAFAXIAQgwQAEgNAKAAQALAAADAPIAFAaIAGAaIAPg6QACgJAKAAQAGAAADAEQAFAEAAAFIgBADIgUBEQgDAJgHAJQgFAHgHAAQgNgBgGgXg");
	this.shape_21.setTransform(326.4,172.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgfApQgOgNgBgXQgBgVANgRQAPgUAZAAQAUAAALAQQAKAOAAAVQAAAWgMAQQgNASgWAAQgSAAgNgNgAgNgQQgGAJAAAMQAAAMAHAGQAFAFAHAAQAHAAAHgGQAHgHAAgLQACgfgSAAQgLAAgHALg");
	this.shape_22.setTransform(305.5,172.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgIBEQgFgDABgGIAAgLIABgKIgDgyIgSgBQgMgBAAgMQAAgGADgDQAFgEAFAAIARABIgBgKIAAgKQAAgFAEgEQAEgEAGABQANgBAAAZIAAAIIAJgBQAMAAAEABQAIADAAAKQAAAFgEAEQgDADgGAAIgFAAIgGAAIgJABIACAyIABAFIAAAGQAAAWgPABQgEAAgEgEg");
	this.shape_23.setTransform(295.7,170.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AggAqQgRgMAAgXQAAgXANgRQAOgTAYAAQARAAAMAFQAOAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAGADQAHADAIAAQANAAAJgGQAIgFAFAAQAKAAAAAKQAAALgRAHQgNAGgPAAQgWAAgPgLgAgMgXQgHAGgEANIAWgKQAMgGAIgFQgHgEgKAAQgIAAgGAGg");
	this.shape_24.setTransform(276.6,172.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgIA5QgDgEAAgGQAAgLgDgVQgCgVAAgLIgBgKQgMAGgLAQIgCACIAAAeIAAAHIgBAHQAAAFgEADQgEADgFAAQgJAAgDgHQgCgFAAgLIAAgjIAAgOIgBgPQAAgIAEgHQADgJAHAAQAGAAAEAEQAEAEAAAFIAAAJQAOgRANAAQAPAAAHALQAFgFAIgDQAHgCAIAAQATAAAHATQACAEACAWQADAPAFAlQAAAFgEAEQgEAEgGAAQgLAAgCgLIgEgdIgDgbQgDgSgEAAQgCAAgIAFIgMAHQAAALADAUQACAWAAAKQAAAGgDAEQgEADgGAAQgFAAgEgDg");
	this.shape_25.setTransform(263.5,172.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgMBHQgDgEAAgFIAAgSIgBgSIABgWIABgVQAAgFAEgEQADgEAGAAQAGAAADAEQAEAEAAAFIgBAVIgBAWIABASIAAASQgBAFgDAEQgEAEgFAAQgFAAgFgEgAgIgxQgEgEgBgGQABgGAEgEQAEgFAGAAQAGAAAFAFQAEAEAAAGQAAAGgEAEQgFAEgGAAQgGAAgEgEg");
	this.shape_26.setTransform(253,170.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgIBEQgFgDABgGIAAgLIABgKIgDgyIgSgBQgMgBAAgMQAAgGADgDQAFgEAFAAIARABIgBgKIAAgKQAAgFAEgEQAEgEAGABQANgBAAAZIAAAIIAJgBQAMAAAEABQAIADAAAKQAAAFgEAEQgDADgGAAIgGAAIgFAAIgJABIACAyIABAFIAAAGQAAAWgPABQgEAAgEgEg");
	this.shape_27.setTransform(245.3,170.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgxA/QAAgGADgDQADgDAGAAIANABQAIACAGAAQAOAAAHgJQAGgIABgTQgFAEgGADQgGACgHABQgTAAgMgNQgMgNAAgTQAAgaAQgRQARgRAbAAQAKAAAGADQAHACAEAEQAMACAAANQAAAHgCALQgEAXgBAYQgBAhgJANQgNAUggAAQglAAAAgPgAgOgrQgJAKAAAPQAAAMAFAGQAEAEAJAAQAHAAAIgIQAIgIABgJIAEgeIgGgCIgHgBQgPAAgJALg");
	this.shape_28.setTransform(226.6,175);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAUAtIgCgUIgCgVIAAgHIABgJIAAgDIAAgFQAAgIgEAAQgJAAgHALQgHAKgFAQIgBAJIAAAJIgBAIIAAAJQAAAFgFAEQgEAEgFAAQgGAAgEgEQgEgEABgFIgBgJIgBgIIACgbIABgZIAAgJIgBgJQAAgGAEgDQAEgEAGAAQANAAABAPIAAACQAOgPAOAAQATAAAHAQQAFAKAAAVIAAAGIAAAGQAAAHACAMQACAMAAAIQAAAFgEAEQgEAEgFAAQgMAAgCgMg");
	this.shape_29.setTransform(216.3,172.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgfApQgOgNgBgXQgBgVANgRQAPgUAZAAQAUAAALAQQAKAOAAAVQAAAWgMAQQgNASgWAAQgSAAgNgNgAgNgQQgGAJAAAMQAAAMAHAGQAFAFAHAAQAHAAAHgGQAHgHAAgLQACgfgSAAQgLAAgHALg");
	this.shape_30.setTransform(205.6,172.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgIBNQgFgEAAgGIAAiGQAAgGAFgDQADgDAGAAQAFAAAEADQADADAAAGIAACBQAAASgNAAQgFAAgDgDg");
	this.shape_31.setTransform(197.7,169.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAXAtQgJAEgHACQgGADgEAAQgXAAgMgNQgMgNAAgZQAAgWASgRQAQgRAYAAQAJAAANAFQAOAHAAAIQAAAEgCACIgCAKIAAAOQAAARACAIIAFAKIAEAKQAAAFgEADQgEAEgFAAQgFAAgKgJgAgNgTQgKAKAAANQAAANAEAHQAGAGAJAAQAFAAAFgCQAGgCAEgEQgDgWAAgLIABgHIABgKIgDgBIgDAAQgMAAgKAKg");
	this.shape_32.setTransform(180.9,172.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF0000").s().p("AgbAzQgPgGAAgLQAAgJAMAAQAEAAAJADQAIACAGABQASAAAAgJQAAgEgOgGIgZgMQgNgKAAgNQAAgVAUgGQANgEAYAAQAJAAAFADQAHADAAAJQAAARgKAAQgKABgCgJIgIgBQgWABAAAGQAAAEANAHQAUAJAGAEQAOAJABANQAAARgQAJQgNAHgRAAQgNAAgLgEg");
	this.shape_33.setTransform(161.6,172.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF0000").s().p("AgLBHQgEgEAAgFIgBgSIAAgSIABgWIABgVQAAgFAEgEQADgEAHAAQAEAAAEAEQAEAEAAAFIgBAVIgBAWIAAASIAAASQAAAFgDAEQgEAEgFAAQgFAAgEgEgAgIgxQgFgEAAgGQAAgGAFgEQAFgFAEAAQAHAAAEAFQAFAEAAAGQAAAGgFAEQgEAEgHAAQgEAAgFgEg");
	this.shape_34.setTransform(154.3,170.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgbAzQgOgGAAgLQAAgJALAAQAFAAAIADQAJACAFABQASAAAAgJQAAgEgNgGIgZgMQgOgKAAgNQAAgVAUgGQANgEAYAAQAJAAAFADQAGADABAJQAAARgKAAQgJABgCgJIgIgBQgXABAAAGQAAAEANAHQAUAJAHAEQAOAJgBANQAAARgPAJQgMAHgSAAQgNAAgLgEg");
	this.shape_35.setTransform(137.6,172.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAXBIQgDgIgCgPIgBgWIAAgIIAAgHIAAgJQgBgEgEAAQgLAAgIAJQgEAFgIAOQAAAjgDAIQgEAIgJAAQgFAAgEgEQgEgEAAgFIABgFIABgbIAAhAIAAgDIABgQIgBgJIgBgIQAAgGAEgEQAEgDAGAAQAJAAAEAKQABAGAAAMIAAAUIgBATQAHgHAJgEQAHgDAJAAQARAAAHAJQAFAHACAOIABAYIACATIADATIAAAEQAAAFgEAEQgEADgFAAQgKAAgDgJg");
	this.shape_36.setTransform(127.3,169.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgIBEQgEgDgBgGIABgLIAAgKIgCgyIgSgBQgMgBAAgMQAAgGADgDQAEgEAGAAIARABIAAgKIgBgKQAAgFAEgEQAEgEAFABQAOgBAAAZIAAAIIAJgBQAMAAAEABQAIADAAAKQAAAFgEAEQgEADgGAAIgEAAIgGAAIgIABIABAyIAAAFIAAAGQABAWgOABQgFAAgEgEg");
	this.shape_37.setTransform(116.7,170.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAUAtIgCgUIgCgVIAAgHIABgJIAAgDIAAgFQAAgIgEAAQgIAAgIALQgHAKgFAQIgBAJIAAAJIgBAIIAAAJQAAAFgFAEQgEAEgFAAQgGAAgEgEQgEgEABgFIgBgJIgBgIIACgbIABgZIAAgJIgBgJQAAgGAEgDQAEgEAGAAQANAAABAPIAAACQAOgPAOAAQATAAAHAQQAFAKAAAVIAAAGIAAAGQAAAHACAMQACAMAAAIQAAAFgEAEQgEAEgGAAQgLAAgCgMg");
	this.shape_38.setTransform(106.9,172.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgfApQgOgNgBgXQgBgVANgRQAPgUAZAAQAUAAALAQQAKAOAAAVQAAAWgMAQQgNASgWAAQgSAAgNgNgAgNgQQgGAJAAAMQAAAMAHAGQAFAFAHAAQAHAAAHgGQAHgHAAgLQACgfgSAAQgLAAgHALg");
	this.shape_39.setTransform(96.2,172.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgIA5QgDgEAAgGQAAgLgDgVQgCgVAAgLIgBgKQgMAGgLAQIgCACIAAAeIAAAHIgBAHQAAAFgEADQgEADgFAAQgJAAgDgHQgCgFAAgLIAAgjIAAgOIgBgPQAAgIAEgHQADgJAHAAQAGAAAEAEQAEAEAAAFIAAAJQAOgRANAAQAPAAAHALQAFgFAIgDQAHgCAIAAQATAAAHATQACAEACAWQADAPAFAlQAAAFgEAEQgEAEgGAAQgLAAgCgLIgEgdIgDgbQgDgSgEAAQgCAAgIAFIgMAHQAAALADAUQACAWAAAKQAAAGgDAEQgEADgGAAQgFAAgEgDg");
	this.shape_40.setTransform(83.5,172.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AggAqQgRgMAAgXQAAgXANgRQAOgTAYAAQARAAAMAFQAOAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAGADQAHADAIAAQANAAAJgGQAIgFAFAAQAKAAAAAKQAAALgRAHQgNAGgPAAQgXAAgOgLgAgMgXQgHAGgEANIAWgKQAMgGAIgFQgGgEgLAAQgIAAgGAGg");
	this.shape_41.setTransform(61.1,172.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AghAqQgQgMAAgXQAAgXANgRQAOgTAYAAQARAAALAFQAPAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAHADQAGADAHAAQAOAAAJgGQAIgFAFAAQAKAAAAAKQAAALgQAHQgOAGgQAAQgVAAgQgLgAgNgXQgGAGgEANIAWgKQAMgGAIgFQgHgEgKAAQgIAAgHAGg");
	this.shape_42.setTransform(49.9,172.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgmAzQgDgEAAgFIAAg/IABgJIAAgJQgBgGAEgDQADgEAGAAQALAAACALQAQgNAWAAQATAAAAAaIAAAHQgBAPgNAAQgMAAAAgNIgBgKQgVAEgJATIAAAwQAAAFgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_43.setTransform(39.9,172.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAXBIQgDgIgCgPIgBgWIAAgIIAAgHIAAgJQgBgEgEAAQgLAAgIAJQgEAFgIAOQAAAjgDAIQgEAIgJAAQgFAAgEgEQgEgEAAgFIABgFIABgbIAAhAIAAgDIABgQIgBgJIgBgIQAAgGAEgEQAEgDAGAAQAJAAAEAKQABAGAAAMIAAAUIgBATQAHgHAJgEQAHgDAJAAQARAAAHAJQAFAHACAOIABAYIACATIADATIAAAEQAAAFgEAEQgEADgFAAQgKAAgDgJg");
	this.shape_44.setTransform(29.3,169.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgJBHQgEgEAAgFIAAgFIABgEIgBgNIAAgOQAAgNgDgWIgCgjIgFAAQgWAAgNgDQgLgDAAgKQAAgFAEgEQAEgFAGABIAQABIAQACIASgBIAQAAIAXABIAWABQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAIgYgBIgYgBIADAnQACAYAAAPIABAKIAAAKQAAAHgDAGQgEAIgHAAQgFAAgEgEg");
	this.shape_45.setTransform(16.5,169.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgNAaQAAgFAEgEQAFgDAEAAQAPAAAAAWQAAAGgEAEQgEADgGAAQgOAAAAgXgAgJgTQgEgEAAgGIgBgDIAAgDQAAgGAEgDQAEgEAGAAQANAAAAATQAAAGgDAEQgEADgGAAQgFAAgEgDg");
	this.shape_46.setTransform(94.6,141.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgbAzQgOgFAAgMQAAgJALAAQAEAAAJADQAJADAEAAQATgBAAgHQAAgGgNgFIgZgMQgOgKAAgNQAAgUAVgHQAMgEAYAAQAKAAAEACQAGAEAAAJQAAASgJAAQgKgBgBgHIgIgBQgXAAAAAGQAAAEANAHQATAIAIAFQANAKAAANQAAAQgPAJQgNAHgRAAQgNAAgLgEg");
	this.shape_47.setTransform(85.2,142.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AghAqQgQgMAAgXQAAgXANgRQAOgTAYAAQARAAALAFQAPAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAHADQAGADAHAAQAOAAAJgGQAIgFAFAAQAKAAAAAKQAAALgQAHQgOAGgQAAQgVAAgQgLgAgNgXQgGAGgEANIAWgKQAMgGAIgFQgHgEgKAAQgIAAgHAGg");
	this.shape_48.setTransform(74.7,142.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgIBNQgFgEAAgGIAAiGQAAgGAFgDQADgDAGAAQAFAAAEADQAEADgBAGIAACBQAAASgNAAQgFAAgDgDg");
	this.shape_49.setTransform(66.4,139.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgoBOQgDgDAAgGIAAgkIAAgmQAAgVgCgPIgCgTQAAgJAFgGQADgGAIAAQAFAAAEAEQAEADgBAGIAAABQAHgEAHgCQAFgCAHAAQAWABALASQAHAPABAWQAAAVgNAOQgNAQgWAAQgIAAgIgCIAAAnQgBAGgEADQgDAEgGAAQgGAAgEgEgAgEguQgHADgHAGIACAoQAIACAIAAQAKAAAFgGQAGgHAAgLQgBgMgBgGQgDgMgJABQgHAAgEACg");
	this.shape_50.setTransform(58.5,144.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgIA5QgDgEAAgGQAAgLgDgVQgCgVAAgLIgBgKQgMAGgLAQIgCACIAAAeIAAAHIgBAHQAAAFgEADQgEADgFAAQgJAAgDgHQgCgFAAgLIAAgjIAAgOIgBgPQAAgIAEgHQADgJAHAAQAGAAAEAEQAEAEAAAFIAAAJQAOgRANAAQAPAAAHALQAFgFAIgDQAHgCAIAAQATAAAHATQACAEACAWQADAPAFAlQAAAFgEAEQgEAEgGAAQgLAAgCgLIgEgdIgDgbQgDgSgEAAQgCAAgIAFIgMAHQAAALADAUQACAWAAAKQAAAGgDAEQgEADgGAAQgFAAgEgDg");
	this.shape_51.setTransform(45.4,142.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAYAtQgKAEgGACQgHADgEAAQgYAAgLgNQgMgNAAgZQAAgWARgRQASgRAXAAQAJAAAMAFQAPAHAAAIQAAAEgCACIgBAKIgBAOQAAARADAIIAEAKIAEAKQAAAFgEADQgEAEgGAAQgEAAgJgJgAgNgTQgKAKAAANQAAANAFAHQAEAGAKAAQAFAAAGgCQAFgCAFgEQgDgWAAgLIAAgHIACgKIgEgBIgDAAQgMAAgKAKg");
	this.shape_52.setTransform(32,142.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAbAzIgcgiIgYAXIgIAHQgEAFgGAAQgFAAgEgEQgEgEAAgFQAAgGAIgHIANgLIASgRIgLgPQgHgJgFgFQgGgFAAgFQAAgFAEgEQAEgEAGAAQAGAAANAOIAOAUIARgOQAKgJAFgGQAEgGAGAAQAGAAAEAEQAEADAAAFQAAAHgKAKIgOAMIgPAOIAdAjQAEAEAAAEQAAAFgEAEQgFAEgFAAQgFAAgFgFg");
	this.shape_53.setTransform(20.5,142.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgsBKQgMgJAAgfIADgnIACgnIgBgKIgBgKQAAgPANAAQAEAAAEACIAVgEIATgBQAZAAAPAFQAJAEAAAJQgBAFgDAEQgEAFgGgBIgEgBQgQgDgPAAIgPABIgRADIgBAnIAlgEIAYgCQAFAAAEAEQAEADAAAGQAAALgMACIgYABIgpAFIAAAUQAAASADADQAAABALAAIASAAIASAAIAGgBIAFAAQAGAAAEADQAFAEAAAGQAAALgLACQgLACgdAAQggAAgJgJg");
	this.shape_54.setTransform(8.7,140);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AghAqQgQgMAAgXQAAgXANgRQAPgTAXAAQARAAALAFQAPAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAHADQAGADAHAAQAOAAAJgGQAIgFAFAAQAKAAAAAKQAAALgRAHQgNAGgQAAQgVAAgQgLgAgNgXQgGAGgEANIAWgKQANgGAHgFQgGgEgLAAQgIAAgHAGg");
	this.shape_55.setTransform(220.7,202.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgcBMQgEgEAAgFQAAgKAUgsQgKgVgYgpIgEgHQgDgFAAgDQAAgGAEgEQAEgEAGAAQAHAAADAFQAOASASAlIAMgcIAOgZQAEgHAHAAQAFAAAFAEQAEADAAAGIgCAGIghBEQgMAagHARIgFASQgEAJgJAAQgFAAgFgDg");
	this.shape_56.setTransform(179.7,204.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgmAzQgDgEAAgFIAAg/IAAgJIAAgJQAAgGAEgDQADgEAGAAQALAAACALQARgNAUAAQAUAAAAAaIAAAHQgBAPgNAAQgMAAAAgNIAAgKQgWAEgJATIAAAwQAAAFgDAEQgFAEgFAAQgHAAgDgEg");
	this.shape_57.setTransform(169.6,202.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgIBEQgEgEgBgFIABgLIAAgKIgCgxIgSgCQgMgBAAgMQAAgFADgEQAEgEAGAAIARACIgBgLIAAgKQAAgFAEgEQAEgDAFgBQAOAAAAAZIAAAIIAJgBQAMAAAEACQAIACAAAJQAAAGgEADQgDAEgHAAIgEAAIgGAAIgJABIACAyIAAAFIAAAGQAAAXgNAAQgFgBgEgDg");
	this.shape_58.setTransform(160,200.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AggAqQgRgMAAgXQAAgXANgRQAOgTAYAAQARAAAMAFQAOAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAGADQAHADAHAAQAOAAAJgGQAIgFAFAAQAKAAAAAKQAAALgRAHQgNAGgQAAQgWAAgOgLgAgNgXQgGAGgEANIAWgKQANgGAHgFQgGgEgLAAQgIAAgHAGg");
	this.shape_59.setTransform(139.1,202.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AghAqQgQgMAAgXQAAgXANgRQAPgTAXAAQARAAAMAFQAOAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAGADQAHADAIAAQANAAAJgGQAIgFAFAAQAKAAAAAKQAAALgQAHQgOAGgPAAQgWAAgQgLgAgMgXQgHAGgEANIAWgKQAMgGAIgFQgHgEgKAAQgIAAgGAGg");
	this.shape_60.setTransform(332.7,172.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgIBEQgEgDgBgGIABgLIAAgKIgBgyIgTgBQgMgBAAgMQAAgGADgDQAEgEAGAAIARABIAAgKIgBgKQAAgFAEgEQAEgEAFABQAOgBAAAZIAAAIIAJgBQAMAAAEABQAIADAAAKQAAAFgEAEQgEADgGAAIgEAAIgGAAIgJABIACAyIAAAFIAAAGQABAWgOABQgFAAgEgEg");
	this.shape_61.setTransform(311.1,170.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgbAzQgPgGAAgLQAAgJAMAAQAFAAAIADQAJACAEABQATAAAAgJQAAgEgNgGIgZgMQgOgKAAgNQAAgVAVgGQAMgEAYAAQAKAAAEADQAGADAAAJQAAARgJAAQgKABgBgJIgJgBQgWABAAAGQAAAEANAHQATAJAIAEQANAJAAANQAAARgPAJQgNAHgRAAQgNAAgLgEg");
	this.shape_62.setTransform(254,172.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgdArQgQgNAAgVQAAgSAOgVQAPgYAUAAQALAAANAFQARAIAAAIQgBAFgDAEQgEADgFAAQgFAAgFgEQgGgEgMgBQgHABgIAPQgJANABAKQgBAKAIAGQAHAFALABQAGAAAJgGQAKgEADAAQAEAAAFADQADAFAAAEQAAAIgRAIQgOAGgJAAQgVAAgOgMg");
	this.shape_63.setTransform(233.5,172.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgIBEQgEgDAAgGIAAgLIAAgKIgBgyIgTgBQgMgBAAgMQAAgGAEgDQAEgEAFAAIARABIAAgKIgBgKQAAgFAEgEQAEgEAFABQAOgBAAAZIAAAIIAKgBQALAAAEABQAIADAAAKQAAAFgEAEQgEADgFAAIgGAAIgEAAIgJABIABAyIAAAFIAAAGQAAAWgOABQgEAAgEgEg");
	this.shape_64.setTransform(192.5,170.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FF0000").s().p("AgbAzQgPgGAAgLQAAgJAMAAQAEAAAJADQAJACAEABQATAAAAgJQAAgEgOgGIgZgMQgNgKAAgNQAAgVAUgGQANgEAYAAQAJAAAFADQAHADgBAJQABARgKAAQgKABgCgJIgIgBQgWABAAAGQAAAEANAHQAUAJAGAEQAPAJAAANQAAARgQAJQgMAHgSAAQgNAAgLgEg");
	this.shape_65.setTransform(174.1,172.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FF0000").s().p("AgMBHQgDgEAAgFIgBgSIAAgSIABgWIABgVQAAgFAEgEQADgEAHAAQAEAAAEAEQAEAEAAAFIgBAVIgBAWIAAASIAAASQAAAFgDAEQgEAEgFAAQgFAAgFgEgAgIgxQgFgEAAgGQAAgGAFgEQAFgFAEAAQAHAAAEAFQAFAEAAAGQAAAGgFAEQgEAEgHAAQgEAAgFgEg");
	this.shape_66.setTransform(166.8,170.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgbAzQgOgGAAgLQgBgJAMAAQAFAAAIADQAIACAGABQASAAAAgJQAAgEgOgGIgYgMQgOgKAAgNQAAgVAUgGQANgEAYAAQAJAAAFADQAGADABAJQAAARgKAAQgJABgDgJIgHgBQgXABAAAGQAAAEANAHQATAJAHAEQAOAJAAANQAAARgPAJQgMAHgSAAQgNAAgLgEg");
	this.shape_67.setTransform(150.1,172.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgmAzQgDgEAAgFIAAg/IABgJIAAgJQgBgGAEgDQADgEAGAAQALAAACALQAQgNAWAAQATAAAAAaIAAAHQgBAPgNAAQgMAAAAgNIgBgKQgVAEgJATIAAAwQAAAFgEAEQgDAEgHAAQgFAAgEgEg");
	this.shape_68.setTransform(140.8,172.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AAYAtQgJAEgIACQgGADgEAAQgXAAgMgNQgMgNAAgZQAAgWASgRQARgRAXAAQAJAAANAFQAOAHAAAIQAAAEgCACIgBAKIgBAOQAAARADAIIAEAKIAEAKQAAAFgEADQgEAEgGAAQgEAAgJgJgAgNgTQgKAKAAANQAAANAEAHQAGAGAJAAQAFAAAFgCQAFgCAFgEQgCgWAAgLIAAgHIABgKIgDgBIgDAAQgMAAgKAKg");
	this.shape_69.setTransform(130.3,172.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgIBNQgFgEAAgGIAAiGQAAgGAFgDQADgDAGAAQAFAAAEADQAEADgBAGIAACBQAAASgNAAQgFAAgDgDg");
	this.shape_70.setTransform(116.3,169.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AAbBJQgHAFgHABIgNABQgXAAgOgOQgPgOAAgXQAAgaAPgOQAPgRAXAAQAHAAAGABQAGACAEAEQABgiACgNQACgLAKAAQAHAAADAEQADADABAGIgCAqQgDAbAAAPQAAAjADALIAAAEQAAAFgFAEQgDADgGAAQgGAAgEgHgAgTAFQgIAHAAARQABALAHAHQAIAIALAAQAGAAAEgCIAJgGIADgDIAAgkQgDgGgFgCQgFgDgIAAQgNAAgHAIg");
	this.shape_71.setTransform(97.3,169.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgcBLQgEgDAAgGQAAgIAUguQgKgTgXgqIgGgHQgCgFAAgDQAAgGAEgEQAEgEAGAAQAGAAAEAFQAOATARAlIANgcIANgaQAFgHAHAAQAGAAAEAEQAEADAAAGIgBAGIgiBEQgMAagHARIgGASQgDAJgJAAQgGAAgEgEg");
	this.shape_72.setTransform(77.3,175);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgmAzQgDgEAAgFIAAg/IAAgJIAAgJQABgGADgDQADgEAGAAQALAAACALQARgNAUAAQAUAAAAAaIAAAHQgBAPgNAAQgMAAAAgNIgBgKQgUAEgKATIAAAwQAAAFgDAEQgFAEgGAAQgGAAgDgEg");
	this.shape_73.setTransform(57.8,172.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgxBOQgEgEAAgGIAAhuIABgMIAAgMQAAgFAEgEQADgEAGAAQAEAAADACIAVgDIAQgBQALAAARAFQAVAFAAAIQAAAFgEAEQgEAFgGAAIgFgBQgMgFgSAAIgNABIgRADIAAAgQAPgEAJAAQARAAAOACQANACAAALQAAAGgEADQgEADgGABIgPgBIgPgBQgHAAgRAEIAAA9QAAAGgFAEQgEAEgGAAQgGAAgDgEg");
	this.shape_74.setTransform(36.5,170.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgIBNQgFgEAAgGIAAiGQAAgGAFgDQADgDAGAAQAFAAAEADQAEADgBAGIAACBQAAASgNAAQgFAAgDgDg");
	this.shape_75.setTransform(66.4,139.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgKAJQgFgEAAgFQAAgEAFgEQAFgEAFAAQAHAAAEAEQAFAEAAAEQAAAFgFAEQgEAEgHAAQgFAAgFgEg");
	this.shape_76.setTransform(322.6,206.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgdArQgQgNAAgVQAAgTAOgUQAPgYAUAAQALAAANAFQARAIAAAIQgBAFgDAEQgEADgFAAQgFABgFgFQgGgFgMAAQgHAAgIAPQgJAOABAKQgBAKAIAGQAHAFALAAQAGAAAJgEQAKgGADABQAEgBAFAEQADAFAAAEQAAAIgRAHQgOAHgJAAQgVAAgOgMg");
	this.shape_77.setTransform(301.5,202.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AghAqQgQgMAAgXQAAgXANgRQAPgTAXAAQARAAALAFQAPAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAHADQAGADAIAAQANAAAJgGQAIgFAFAAQAKAAAAAKQAAALgQAHQgOAGgPAAQgXAAgPgLgAgMgXQgHAGgEANIAWgKQAMgGAIgFQgGgEgLAAQgIAAgGAGg");
	this.shape_78.setTransform(248,202.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgIBEQgEgEAAgFIAAgLIAAgKIgBgxIgTgCQgMgBAAgMQAAgFAEgEQADgEAGAAIARACIAAgLIgBgKQAAgFAEgEQAEgDAFgBQAOAAAAAZIAAAIIAKgBQALAAAEACQAIACAAAJQAAAGgEADQgEAEgFAAIgGAAIgEAAIgJABIABAyIAAAFIAAAGQABAXgOAAQgFgBgEgDg");
	this.shape_79.setTransform(226.4,200.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AAUAtIgDgUIgBgVIAAgHIAAgJIAAgDIABgFQAAgIgEAAQgIAAgIALQgHAKgFAQIgBAJIAAAJIgBAIIgBAJQAAAFgEAEQgDAEgGAAQgGAAgEgEQgEgEAAgFIgBgJIAAgIIABgbIACgZIAAgJIgBgJQAAgGAEgDQAEgEAGAAQAMAAACAPIAAACQAOgPAPAAQASAAAHAQQAFAKAAAVIAAAGIAAAGQAAAHACAMQACAMAAAIQAAAFgEAEQgEAEgGAAQgMAAgBgMg");
	this.shape_80.setTransform(207.9,202.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgIBEQgFgEABgFIAAgLIABgKIgCgxIgTgCQgMgBAAgMQAAgFAEgEQAEgEAFAAIARACIgBgLIAAgKQAAgFAEgEQAEgDAGgBQANAAAAAZIAAAIIAKgBQALAAAEACQAIACAAAJQAAAGgEADQgEAEgFAAIgGAAIgEAAIgJABIABAyIABAFIAAAGQgBAXgOAAQgEgBgEgDg");
	this.shape_81.setTransform(178.8,200.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AAXBIQgDgIgCgPIgBgWIAAgIIAAgHIAAgJQgBgEgEAAQgLAAgIAJQgEAFgIAOQAAAjgDAIQgEAIgJAAQgFAAgEgEQgEgEAAgFIABgFIABgbIAAhAIAAgDIABgQIgBgJIgBgIQAAgGAEgEQAEgDAGAAQAJAAAEAKQABAGAAAMIAAAUIgBATQAHgHAJgEQAHgDAJAAQARAAAHAJQAFAHACAOIABAYIACATIADATIAAAEQAAAFgEAEQgEADgFAAQgKAAgDgJg");
	this.shape_82.setTransform(158.1,199.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AAXBIQgDgIgCgPIgBgWIAAgIIAAgHIAAgJQgBgEgEAAQgLAAgIAJQgEAFgIAOQAAAjgDAIQgEAIgJAAQgFAAgEgEQgEgEAAgFIABgFIABgbIAAhAIAAgDIABgQIgBgJIgBgIQAAgGAEgEQAEgDAGAAQAJAAAEAKQABAGAAAMIAAAUIgBATQAHgHAJgEQAHgDAJAAQARAAAHAJQAFAHACAOIABAYIACATIADATIAAAEQAAAFgEAEQgEADgFAAQgKAAgDgJg");
	this.shape_83.setTransform(126.7,199.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgIBEQgFgEAAgFIABgLIABgKIgDgxIgSgCQgMgBAAgMQAAgFADgEQAEgEAGAAIARACIgBgLIAAgKQAAgFAEgEQAEgDAGgBQANAAAAAZIAAAIIAJgBQAMAAAEACQAIACAAAJQAAAGgEADQgDAEgHAAIgEAAIgGAAIgJABIACAyIABAFIAAAGQAAAXgPAAQgEgBgEgDg");
	this.shape_84.setTransform(116.1,200.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AAUAtIgCgUIgCgVIAAgHIABgJIAAgDIAAgFQAAgIgEAAQgJAAgGALQgJAKgEAQIgBAJIgBAJIAAAIIAAAJQAAAFgFAEQgEAEgFAAQgGAAgEgEQgDgEAAgFIgBgJIgBgIIACgbIABgZIAAgJIgBgJQAAgGAEgDQAEgEAGAAQANAAAAAPIAAACQAPgPAOAAQATAAAHAQQAFAKAAAVIAAAGIAAAGQAAAHACAMQACAMAAAIQAAAFgEAEQgEAEgFAAQgMAAgCgMg");
	this.shape_85.setTransform(97.6,202.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgLBHQgEgEAAgFIgBgSIAAgSIABgWIABgVQAAgFAEgEQAEgEAFAAQAFAAAEAEQAEAEAAAFIgBAVIgBAWIAAASIAAASQABAFgEAEQgEAEgFAAQgFAAgEgEgAgIgxQgFgEABgGQgBgGAFgEQAFgFAEAAQAHAAAFAFQAEAEAAAGQAAAGgEAEQgFAEgHAAQgEAAgFgEg");
	this.shape_86.setTransform(89.7,200);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FF0000").s().p("AgIBEQgEgEAAgFIAAgLIAAgKIgBgxIgTgCQgMgBAAgMQAAgFAEgEQADgEAGAAIARACIAAgLIgBgKQAAgFAEgEQAEgDAFgBQAOAAAAAZIAAAIIAKgBQALAAAEACQAIACAAAJQAAAGgEADQgEAEgFAAIgGAAIgEAAIgJABIABAyIAAAFIAAAGQABAXgOAAQgFgBgEgDg");
	this.shape_87.setTransform(73.4,200.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FF0000").s().p("AgSBSQgEgDAAgGIAAgCQADgOAAgMIAAgwIgHABIgGAAQgGAAgDgDQgEgEAAgGQAAgJAJgDIARgBIACgLQACgWAJgLQALgNAXAAQASAAAAANQAAANgRAAQgLAAgGAIQgEAGgBANIAAADIASgBQATAAAAAMQAAANgUAAIgSAAIgBAaIABAaQAAASgDAKQgCALgJAAQgGAAgEgEg");
	this.shape_88.setTransform(63.4,200.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FF0000").s().p("AghAqQgQgMAAgXQAAgXANgRQAPgTAXAAQARAAALAFQAPAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAHADQAGADAIAAQANAAAJgGQAIgFAFAAQAKAAAAAKQAAALgQAHQgOAGgPAAQgXAAgPgLgAgMgXQgHAGgEANIAWgKQAMgGAIgFQgGgEgLAAQgIAAgGAGg");
	this.shape_89.setTransform(52.7,202.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FF0000").s().p("AgIBNQgFgEAAgGIAAiGQAAgGAFgDQADgDAGAAQAFAAAEADQAEADgBAGIAACBQAAASgNAAQgFAAgDgDg");
	this.shape_90.setTransform(44.4,199.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FF0000").s().p("AgbAzQgOgGAAgLQAAgJALAAQAEAAAJADQAJACAFABQASAAAAgJQAAgEgNgGIgZgMQgOgKAAgNQAAgVAVgGQAMgEAYAAQAJAAAFADQAGADABAJQAAARgKAAQgJABgCgJIgIgBQgXABAAAGQAAAEANAHQAUAJAHAEQAOAJgBANQAAARgPAJQgNAHgRAAQgNAAgLgEg");
	this.shape_91.setTransform(355.1,172.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FF0000").s().p("AAYAtQgJAEgHACQgHADgEAAQgYAAgLgNQgMgNAAgZQAAgWARgRQASgRAXAAQAJAAAMAFQAPAHAAAIQAAAEgCACIgBAKIgBAOQAAARADAIIAEAKIAEAKQAAAFgEADQgEAEgGAAQgEAAgJgJgAgNgTQgKAKAAANQAAANAEAHQAFAGAKAAQAFAAAGgCQAFgCAEgEQgCgWAAgLIAAgHIACgKIgEgBIgDAAQgMAAgKAKg");
	this.shape_92.setTransform(344.9,172.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FF0000").s().p("AAEAfQgDgJgDgYIgCAFIgQAmQgBAEgCACQgFAHgIAAQgFAAgFgIQgFgJgDgNQgDgMgHgoIgBgNQAAgGAEgDQAEgEAGAAQAKAAADALIACANIABAOIAFAXIAQgwQAEgNAKAAQALAAADAPIAGAaIAEAaIAQg6QABgJALAAQAFAAAEAEQAFAEAAAFIAAADIgVBEQgDAJgHAJQgFAHgHAAQgNgBgGgXg");
	this.shape_93.setTransform(332.5,172.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgvAyQgKgVgBggQABgcAOgUQAQgaAdAAQAcAAAQAXQANATgBAbQABArgPAVQgPAWgdAAQggAAgPgcgAgXgjQgHANgBASQABAXAEAMQAHAWATAAQAPAAAIgPQAIgPAAgcQAAgXgHgMQgHgLgPAAQgOgBgLARg");
	this.shape_94.setTransform(310.7,169.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AguAyQgLgVAAggQAAgcANgUQARgaAdAAQAcAAAPAXQAOATAAAbQAAArgPAVQgPAWgdAAQggAAgOgcgAgWgjQgIANAAASQgBAXAFAMQAHAWATAAQAPAAAIgPQAIgPAAgcQAAgXgHgMQgHgLgPAAQgPgBgJARg");
	this.shape_95.setTransform(298.5,169.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgcBGQgPgHgFgOIAAgEQAAgGADgDQAFgDAFAAQAGAAAEAEIAHAKQAHAEALAAQAIAAAIgFQAGgGABgHQgBgZgfgDQgPgBAAgKQAAgIAMgEIAUgFQAGgCAEgDQACgDABgFQAAgOgWAAQgHAAgKAFQgJAGgDAAQgFAAgEgEQgFgEAAgFQAAgIARgIQAOgIAKAAQAVAAAOAKQAOAKAAAUQAAALgEAHQgEAIgJAEQAVAKAAAZQAAAUgPAOQgPAOgUAAQgQAAgMgHg");
	this.shape_96.setTransform(286.3,170);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgJBjQgBgDAAgEIAAgVIgIAAQgUAAgKgGQgKgEAAgIQAAgOAPAAQAEAAAKADIAMADIAHAAIAAgrQgSgBgMgGQgPgIAAgOQgBgQAOgNQANgNATgFIAAgQQAAgMAKAAQAJAAAAAMIAAAMQALABANAEQAQAGAAAGQAAAGgEAEQgEAEgGAAIgMgCIgOgCIAAAeIACAAQAWACAMAKQAOALABAVQAAASgQAMQgNAKgWAFIAAAYQAAALgKAAQgFAAgDgEgAAJAoQAWgIAAgLQAAgQgWgCgAgbggQABAIAQACIAAgZQgQAGgBAJg");
	this.shape_97.setTransform(273.3,170.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgIBEQgEgDgBgGIABgLIAAgKIgCgyIgSgBQgMgBAAgMQAAgGADgDQAEgEAGAAIARABIAAgKIgBgKQAAgFAEgEQAEgEAFABQAOgBAAAZIAAAIIAJgBQAMAAAEABQAIADAAAKQAAAFgEAEQgDADgHAAIgEAAIgGAAIgJABIACAyIAAAFIAAAGQAAAWgNABQgFAAgEgEg");
	this.shape_98.setTransform(253.1,170.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AAXAtQgIAEgIACQgGADgEAAQgYAAgLgNQgMgNAAgZQAAgWASgRQAQgRAYAAQAJAAANAFQAOAHAAAIQAAAEgCACIgBAKIgBAOQAAARACAIIAFAKIAEAKQAAAFgEADQgEAEgFAAQgFAAgKgJgAgNgTQgKAKAAANQAAANAEAHQAGAGAJAAQAFAAAFgCQAFgCAFgEQgCgWAAgLIAAgHIABgKIgDgBIgDAAQgMAAgKAKg");
	this.shape_99.setTransform(242.9,172.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AAXBIQgDgIgCgPIgBgWIAAgIIAAgHIAAgJQgBgEgEAAQgLAAgIAJQgEAFgIAOQAAAjgDAIQgEAIgJAAQgFAAgEgEQgEgEAAgFIABgFIABgbIAAhAIAAgDIABgQIgBgJIgBgIQAAgGAEgEQAEgDAGAAQAJAAAEAKQABAGAAAMIAAAUIgBATQAHgHAJgEQAHgDAJAAQARAAAHAJQAFAHACAOIABAYIACATIADATIAAAEQAAAFgEAEQgEADgFAAQgKAAgDgJg");
	this.shape_100.setTransform(231.7,169.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AAbBJQgHAFgHABIgOABQgVAAgPgOQgOgOAAgXQAAgaAOgOQAPgRAXAAQAHAAAGABQAFACAFAEQABgiACgNQABgLALAAQAGAAAEAEQADADAAAGIgCAqQgCAbAAAPQAAAjACALIAAAEQAAAFgDAEQgEADgFAAQgIAAgDgHgAgUAFQgGAHAAARQgBALAIAHQAIAIAKAAQAHAAAEgCIAJgGIADgDIAAgkQgDgGgGgCQgFgDgGAAQgOAAgIAIg");
	this.shape_101.setTransform(201.7,169.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgMBHQgDgEAAgFIAAgSIgBgSIABgWIABgVQAAgFAEgEQADgEAGAAQAGAAADAEQAEAEAAAFIgBAVIgBAWIABASIAAASQgBAFgDAEQgEAEgFAAQgFAAgFgEgAgIgxQgEgEgBgGQABgGAEgEQAEgFAGAAQAGAAAEAFQAFAEAAAGQAAAGgFAEQgEAEgGAAQgGAAgEgEg");
	this.shape_102.setTransform(172.5,170.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgmAzQgDgEAAgFIAAg/IAAgJIAAgJQABgGADgDQADgEAGAAQALAAACALQARgNAUAAQAUAAAAAaIAAAHQgBAPgNAAQgMAAAAgNIgBgKQgUAEgKATIAAAwQAAAFgEAEQgDAEgHAAQgFAAgEgEg");
	this.shape_103.setTransform(164.8,172.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgoBOQgEgDAAgGIAAglIAAglQAAgVgBgPIgCgTQAAgIAEgHQAFgGAHAAQAFAAAEAEQADAEAAAFIAAABQAHgEAHgCQAFgCAHAAQAWABALASQAHAPABAWQAAAVgNAOQgNAPgWAAQgIAAgJgBIAAAnQAAAGgDADQgEAEgGAAQgGAAgEgEgAgEguQgHADgHAGIABAoQAJACAIAAQAKAAAFgGQAFgHABgLQAAgNgCgFQgDgLgJgBQgHAAgEADg");
	this.shape_104.setTransform(154.6,174.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgmAzQgDgEAAgFIAAg/IAAgJIAAgJQAAgGAEgDQADgEAGAAQALAAACALQAQgNAWAAQATAAAAAaIAAAHQgBAPgNAAQgMAAAAgNIAAgKQgWAEgJATIAAAwQAAAFgDAEQgEAEgGAAQgHAAgDgEg");
	this.shape_105.setTransform(144.5,172.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AAUAwQgNAFgMAAQgOAAgKgGQgKgHgCgNQgEgYAAgSQAAgNADgQQACgLALAAQAGAAAEAEQAEADAAAGIgCANIgBAOIABAXQABAKACAHIAEABIAFABQAKAAANgDIAAgRIgBgQQAAgUACgOQACgMALAAQAGAAAEAEQAEADAAAGIgCAiIAAATIAAAUIABAGIAAAGQAAAFgEAEQgEAEgGAAQgIAAgDgIg");
	this.shape_106.setTransform(134.2,172.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AggAqQgRgMAAgXQAAgXANgRQAPgTAXAAQARAAALAFQAPAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAGADQAHADAHAAQAOAAAJgGQAIgFAFAAQAKAAAAAKQAAALgRAHQgNAGgQAAQgWAAgOgLgAgNgXQgGAGgEANIAWgKQANgGAHgFQgGgEgLAAQgIAAgHAGg");
	this.shape_107.setTransform(105,172.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AggAqQgRgMAAgXQAAgXANgRQAOgTAYAAQARAAAMAFQAOAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAGADQAHADAHAAQAOAAAJgGQAIgFAFAAQAKAAAAAKQAAALgRAHQgNAGgQAAQgWAAgOgLgAgNgXQgGAGgEANIAWgKQANgGAHgFQgGgEgLAAQgIAAgHAGg");
	this.shape_108.setTransform(84.2,172.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgcBLQgEgDAAgGQAAgIAUguQgKgTgYgqIgEgHQgDgFAAgDQAAgGAFgEQADgEAGAAQAGAAAEAFQAOATASAlIAMgcIAOgaQAEgHAHAAQAGAAAEAEQAEADAAAGIgCAGIghBEQgNAagGARIgFASQgEAJgJAAQgGAAgEgEg");
	this.shape_109.setTransform(50.8,175);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AAXBIQgDgIgCgPIgBgWIAAgIIAAgHIAAgJQgBgEgEAAQgLAAgIAJQgEAFgIAOQAAAjgDAIQgEAIgJAAQgFAAgEgEQgEgEAAgFIABgFIABgbIAAhAIAAgDIABgQIgBgJIgBgIQAAgGAEgEQAEgDAGAAQAJAAAEAKQABAGAAAMIAAAUIgBATQAHgHAJgEQAHgDAJAAQARAAAHAJQAFAHACAOIABAYIACATIADATIAAAEQAAAFgEAEQgEADgFAAQgKAAgDgJg");
	this.shape_110.setTransform(28.5,169.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AghAqQgQgMAAgXQAAgXANgRQAPgTAXAAQARAAAMAFQAOAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAHADQAGADAIAAQANAAAJgGQAIgFAFAAQAKAAAAAKQAAALgQAHQgOAGgPAAQgWAAgQgLgAgMgXQgHAGgEANIAWgKQAMgGAIgFQgHgEgKAAQgIAAgGAGg");
	this.shape_111.setTransform(230.1,202.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgIBNQgEgEgBgGIAAiGQABgGAEgDQAEgDAEAAQAGAAAEADQADADAAAGIAACBQAAASgNAAQgFAAgDgDg");
	this.shape_112.setTransform(221.8,199.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AADAfQgDgJgCgYIgDAFIgOAmQgCAEgDACQgEAHgIAAQgEAAgFgIQgGgJgDgNQgEgMgFgoIgCgNQAAgGAEgDQAEgEAGAAQAKAAADALIACANIACAOIADAXIARgwQAEgNAKAAQALAAADAPIAFAaIAGAaIAOg6QACgJALAAQAGAAAEAEQAEAEAAAFIgBADIgUBEQgDAJgHAJQgEAHgJAAQgMgBgHgXg");
	this.shape_113.setTransform(189.8,202.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AAYAtQgKAEgGACQgHADgEAAQgYAAgLgNQgMgNAAgZQAAgWARgRQASgRAXAAQAJAAAMAFQAPAHAAAIQAAAEgCACIgCAKIAAAOQAAARADAIIAEAKIAEAKQAAAFgEADQgEAEgGAAQgEAAgJgJgAgNgTQgKAKAAANQAAANAFAHQAEAGAKAAQAFAAAGgCQAEgCAGgEQgDgWgBgLIABgHIACgKIgEgBIgDAAQgMAAgKAKg");
	this.shape_114.setTransform(168.7,202.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgIBEQgFgDAAgGIABgLIAAgKIgCgyIgSgBQgMgBAAgMQAAgGADgDQAEgEAGAAIARABIgBgKIAAgKQAAgFAEgEQAEgEAGABQANgBAAAZIAAAIIAJgBQAMAAAEABQAIADAAAKQAAAFgEAEQgDADgHAAIgEAAIgGAAIgJABIACAyIAAAFIAAAGQAAAWgNABQgFAAgEgEg");
	this.shape_115.setTransform(343.2,170.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AADAfQgDgJgCgYIgDAFIgOAmQgCAEgDACQgEAHgIAAQgEAAgFgIQgGgJgDgNQgEgMgFgoIgCgNQAAgGAEgDQAEgEAGAAQAKAAADALIACANIACAOIADAXIARgwQAEgNAKAAQALAAADAPIAGAaIAFAaIAOg6QACgJALAAQAGAAAEAEQAEAEAAAFIgBADIgUBEQgDAJgHAJQgEAHgJAAQgMgBgHgXg");
	this.shape_116.setTransform(292.8,172.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AAXAtQgIAEgHACQgHADgEAAQgYAAgLgNQgMgNAAgZQAAgWARgRQARgRAYAAQAJAAAMAFQAPAHAAAIQAAAEgCACIgCAKIAAAOQAAARADAIIAEAKIAEAKQAAAFgEADQgEAEgFAAQgFAAgKgJgAgNgTQgKAKAAANQAAANAFAHQAEAGAKAAQAFAAAGgCQAEgCAGgEQgEgWAAgLIABgHIACgKIgEgBIgDAAQgMAAgKAKg");
	this.shape_117.setTransform(266.3,172.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgbAzQgPgGAAgLQAAgJAMAAQAFAAAIADQAJACAEABQATAAAAgJQAAgEgOgGIgZgMQgNgKAAgNQAAgVAUgGQANgEAYAAQAJAAAFADQAHADgBAJQABARgKAAQgKABgCgJIgIgBQgWABAAAGQAAAEANAHQAUAJAGAEQAPAJAAANQAAARgQAJQgMAHgSAAQgNAAgLgEg");
	this.shape_118.setTransform(245.2,172.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AAUAwQgNAFgMAAQgOAAgKgGQgKgHgCgNQgEgYAAgSQAAgNADgQQACgLALAAQAGAAAEAEQAEADAAAGIgCANIgBAOIABAXQABAKACAHIAEABIAFABQAKAAANgDIAAgRIgBgQQAAgUACgOQACgMALAAQAGAAAEAEQAEADAAAGIgCAiIAAATIAAAUIABAGIAAAGQAAAFgEAEQgEAEgGAAQgIAAgDgIg");
	this.shape_119.setTransform(214.4,172.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AAUAtIgDgUIgBgVIAAgHIAAgJIAAgDIABgFQAAgIgEAAQgJAAgGALQgJAKgEAQIgBAJIgBAJIAAAIIgBAJQAAAFgDAEQgFAEgFAAQgGAAgEgEQgDgEgBgFIgBgJIAAgIIABgbIACgZIgBgJIAAgJQAAgGAEgDQAEgEAGAAQAMAAABAPIAAACQAPgPAPAAQASAAAHAQQAFAKAAAVIAAAGIAAAGQAAAHACAMQACAMAAAIQAAAFgEAEQgEAEgGAAQgMAAgBgMg");
	this.shape_120.setTransform(195.6,172.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AAYAtQgJAEgIACQgGADgEAAQgXAAgMgNQgMgNAAgZQAAgWASgRQARgRAXAAQAJAAANAFQAOAHAAAIQAAAEgCACIgBAKIgBAOQAAARADAIIAEAKIAEAKQAAAFgEADQgEAEgGAAQgEAAgJgJgAgNgTQgKAKAAANQAAANAEAHQAGAGAJAAQAFAAAFgCQAFgCAFgEQgCgWAAgLIAAgHIACgKIgEgBIgDAAQgMAAgKAKg");
	this.shape_121.setTransform(184.8,172.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgIBEQgEgDgBgGIABgLIAAgKIgCgyIgSgBQgMgBAAgMQAAgGADgDQAEgEAGAAIARABIgBgKIAAgKQAAgFAEgEQAEgEAFABQAOgBAAAZIAAAIIAJgBQAMAAAEABQAIADAAAKQAAAFgEAEQgDADgHAAIgEAAIgGAAIgJABIACAyIAAAFIAAAGQAAAWgNABQgFAAgEgEg");
	this.shape_122.setTransform(165.8,170.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FF0000").s().p("AgbAzQgOgGAAgLQAAgJALAAQAEAAAJADQAJACAEABQATAAAAgJQAAgEgNgGIgZgMQgOgKAAgNQAAgVAVgGQAMgEAYAAQAKAAAEADQAGADAAAJQAAARgJAAQgKABgBgJIgIgBQgXABAAAGQAAAEANAHQATAJAIAEQANAJAAANQAAARgPAJQgNAHgRAAQgNAAgLgEg");
	this.shape_123.setTransform(126.6,172.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FF0000").s().p("AgMBHQgDgEAAgFIAAgSIgBgSIABgWIABgVQAAgFAEgEQAEgEAFAAQAGAAADAEQAEAEAAAFIgBAVIgBAWIABASIAAASQAAAFgEAEQgEAEgFAAQgGAAgEgEgAgIgxQgEgEAAgGQAAgGAEgEQAEgFAGAAQAGAAAFAFQAEAEAAAGQAAAGgEAEQgFAEgGAAQgGAAgEgEg");
	this.shape_124.setTransform(119.3,170.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgbAzQgPgGAAgLQAAgJAMAAQAEAAAJADQAJACAEABQATAAAAgJQAAgEgOgGIgZgMQgNgKAAgNQAAgVAUgGQANgEAYAAQAJAAAFADQAHADgBAJQABARgKAAQgKABgCgJIgIgBQgWABAAAGQAAAEANAHQAUAJAGAEQAPAJAAANQAAARgQAJQgMAHgSAAQgNAAgLgEg");
	this.shape_125.setTransform(102.6,172.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AAUAtIgCgUIgCgVIAAgHIABgJIAAgDIAAgFQAAgIgEAAQgJAAgGALQgJAKgEAQIgBAJIgBAJIAAAIIAAAJQAAAFgEAEQgFAEgFAAQgGAAgEgEQgDgEgBgFIAAgJIgBgIIABgbIACgZIgBgJIAAgJQAAgGAEgDQAEgEAGAAQAMAAABAPIAAACQAPgPAOAAQATAAAHAQQAFAKAAAVIAAAGIAAAGQAAAHACAMQACAMAAAIQAAAFgEAEQgEAEgFAAQgMAAgCgMg");
	this.shape_126.setTransform(92.8,172.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgIBEQgFgDAAgGIABgLIAAgKIgCgyIgSgBQgMgBAAgMQAAgGADgDQAFgEAFAAIARABIgBgKIAAgKQAAgFAEgEQAEgEAGABQANgBAAAZIAAAIIAJgBQAMAAAEABQAIADAAAKQAAAFgEAEQgDADgHAAIgEAAIgGAAIgJABIACAyIAAAFIAAAGQAAAWgNABQgFAAgEgEg");
	this.shape_127.setTransform(72.3,170.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AADAfQgDgJgCgYIgDAFIgOAmQgCAEgDACQgEAHgIAAQgEAAgFgIQgGgJgDgNQgEgMgFgoIgCgNQAAgGAEgDQAEgEAGAAQAKAAADALIACANIACAOIADAXIARgwQAEgNAKAAQALAAADAPIAFAaIAGAaIAOg6QACgJALAAQAGAAAEAEQAEAEAAAFIgBADIgUBEQgDAJgHAJQgEAHgJAAQgMgBgHgXg");
	this.shape_128.setTransform(41.7,172.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgKAJQgFgEAAgFQAAgEAFgEQAEgEAGAAQAHAAAEAEQAFAEAAAEQAAAFgFAEQgFAEgGAAQgGAAgEgEg");
	this.shape_129.setTransform(279.5,206.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgIBEQgEgEgBgFIABgLIAAgKIgBgxIgTgCQgMgBAAgMQAAgFADgEQAEgEAGAAIARACIAAgLIgBgKQAAgFAEgEQAEgDAFgBQAOAAAAAZIAAAIIAJgBQAMAAAEACQAIACAAAJQAAAGgEADQgEAEgGAAIgEAAIgGAAIgJABIACAyIAAAFIAAAGQABAXgOAAQgFgBgEgDg");
	this.shape_130.setTransform(270.6,200.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AAUAtIgCgUIgCgVIAAgHIABgJIAAgDIAAgFQAAgIgEAAQgJAAgHALQgHAKgFAQIgBAJIAAAJIgBAIIAAAJQAAAFgFAEQgEAEgFAAQgGAAgEgEQgEgEABgFIgBgJIgBgIIACgbIABgZIAAgJIgBgJQAAgGAEgDQAEgEAGAAQANAAABAPIAAACQAOgPAOAAQATAAAHAQQAFAKAAAVIAAAGIAAAGQAAAHACAMQACAMAAAIQAAAFgEAEQgEAEgGAAQgLAAgCgMg");
	this.shape_131.setTransform(260.8,202.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgMBHQgDgEAAgFIAAgSIgBgSIABgWIABgVQAAgFAEgEQADgEAHAAQAFAAADAEQAEAEAAAFIgBAVIgBAWIABASIAAASQgBAFgDAEQgEAEgFAAQgGAAgEgEgAgIgxQgEgEgBgGQABgGAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAGQAAAGgFAEQgEAEgGAAQgFAAgFgEg");
	this.shape_132.setTransform(226.1,200);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AggAqQgRgMAAgXQAAgXANgRQAOgTAYAAQARAAAMAFQAOAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAGADQAHADAIAAQANAAAJgGQAIgFAFAAQAKAAAAAKQAAALgQAHQgOAGgPAAQgWAAgPgLgAgMgXQgHAGgEANIAWgKQAMgGAIgFQgHgEgKAAQgIAAgGAGg");
	this.shape_133.setTransform(207.7,202.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgoBPQgDgEgBgGIAAglIAAglQAAgVgBgPIgBgUQAAgIADgGQAEgGAHAAQAGAAAEAEQADADABAGIAAABQAGgEAGgBQAGgCAHgBQAXAAAJAUQAJAOgBAXQAAAUgMAOQgNAPgWAAQgHAAgJgCIAAAoQgBAGgDAEQgFADgFAAQgGAAgEgDgAgFgtQgGADgGAFIABAnQAJADAHAAQAKAAAGgGQAEgHAAgKQABgNgCgFQgDgNgJAAQgGAAgGAEg");
	this.shape_134.setTransform(197.1,204.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AggAqQgRgMAAgXQAAgXANgRQAOgTAYAAQARAAAMAFQAOAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAGADQAHADAIAAQANAAAJgGQAIgFAFAAQAKAAAAAKQAAALgRAHQgNAGgPAAQgXAAgOgLgAgMgXQgHAGgEANIAWgKQAMgGAIgFQgGgEgLAAQgIAAgGAGg");
	this.shape_135.setTransform(174.1,202.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgbAzQgPgGAAgKQAAgKAMAAQAFAAAIADQAIADAGgBQASABAAgJQAAgFgOgGIgZgLQgNgKAAgNQAAgUAUgHQANgEAYAAQAKAAAEADQAHADAAAJQAAARgKAAQgKABgCgJIgIgBQgWABAAAGQAAAEANAGQATAJAHAFQAOAJABANQAAARgQAJQgMAHgSAAQgNAAgLgEg");
	this.shape_136.setTransform(155,202.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgLBHQgEgEAAgFIgBgSIAAgSIABgWIABgVQAAgFAEgEQAEgEAGAAQAEAAAEAEQAEAEAAAFIgBAVIgBAWIAAASIAAASQABAFgEAEQgEAEgFAAQgFAAgEgEgAgIgxQgFgEABgGQgBgGAFgEQAFgFAEAAQAHAAAEAFQAFAEAAAGQAAAGgFAEQgEAEgHAAQgEAAgFgEg");
	this.shape_137.setTransform(147.7,200);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgmAzQgDgEAAgFIAAg/IABgJIAAgJQAAgGADgDQADgEAGAAQALAAACALQAQgNAWAAQATAAAAAaIAAAHQgBAPgNAAQgMAAAAgNIAAgKQgVAEgKATIAAAwQAAAFgEAEQgEAEgFAAQgGAAgEgEg");
	this.shape_138.setTransform(110.4,202.3);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FF0000").s().p("AAbBJQgHAFgHABIgOABQgVAAgPgOQgPgOAAgXQAAgaAPgOQAPgRAXAAQAHAAAGABQAGACAEAEQABgiACgNQACgLALAAQAGAAADAEQADADABAGIgCAqQgDAbAAAPQAAAjADALIAAAEQAAAFgFAEQgDADgGAAQgGAAgEgHgAgTAFQgIAHAAARQABALAHAHQAIAIAKAAQAHAAAEgCIAJgGIADgDIAAgkQgDgGgFgCQgGgDgHAAQgNAAgHAIg");
	this.shape_139.setTransform(351.6,169.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FF0000").s().p("AggAqQgRgMAAgXQAAgXANgRQAOgTAYAAQARAAAMAFQAOAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAGADQAHADAIAAQANAAAJgGQAIgFAFAAQAKAAAAAKQAAALgRAHQgNAGgPAAQgXAAgOgLgAgMgXQgHAGgEANIAWgKQAMgGAIgFQgGgEgLAAQgIAAgGAGg");
	this.shape_140.setTransform(340.1,172.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FF0000").s().p("AgmAzQgDgEAAgFIAAg/IAAgJIAAgJQABgGADgDQADgEAGAAQALAAACALQARgNAUAAQAUAAAAAaIAAAHQgBAPgNAAQgMAAAAgNIgBgKQgUAEgKATIAAAwQAAAFgDAEQgFAEgGAAQgGAAgDgEg");
	this.shape_141.setTransform(330.1,172.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FF0000").s().p("AgMBHQgDgEAAgFIAAgSIgBgSIABgWIABgVQAAgFAEgEQADgEAHAAQAEAAAEAEQAEAEAAAFIgBAVIgBAWIAAASIAAASQAAAFgDAEQgEAEgFAAQgFAAgFgEgAgIgxQgFgEAAgGQAAgGAFgEQAFgFAEAAQAHAAAEAFQAFAEAAAGQAAAGgFAEQgEAEgHAAQgEAAgFgEg");
	this.shape_142.setTransform(322.5,170.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FF0000").s().p("AAUAwQgNAFgMAAQgOAAgKgGQgKgHgCgNQgEgYAAgSQAAgNADgQQACgLALAAQAGAAAEAEQAEADAAAGIgCANIgBAOIABAXQABAKACAHIAEABIAFABQAKAAANgDIAAgRIgBgQQAAgUACgOQACgMALAAQAGAAAEAEQAEADAAAGIgCAiIAAATIAAAUIABAGIAAAGQAAAFgEAEQgEAEgGAAQgIAAgDgIg");
	this.shape_143.setTransform(314.2,172.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FF0000").s().p("AAKA/IAAgFIADgcIgHABQgWAAgOgMQgQgMAAgVQAAgdARgRQASgSAdAAQAFAAADADQAEgDADAAQAGAAAEAFQAEAEAAAFQAAAcgEAgIgEAiQgDAUAAAQQABAGgEADQgEAEgFAAQgOAAAAgQgAgMgnQgGALgBAOQABAKAFAFQAHAGALAAQAGAAAEgHQAEgJAAgYIACgVIgEAAIgFgBQgQADgIANg");
	this.shape_144.setTransform(303.6,174.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FF0000").s().p("AghAqQgQgMAAgXQAAgXANgRQAOgTAYAAQARAAALAFQAPAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAHADQAGADAHAAQAOAAAJgGQAIgFAFAAQAKAAAAAKQAAALgQAHQgOAGgQAAQgVAAgQgLgAgNgXQgGAGgEANIAWgKQAMgGAIgFQgHgEgKAAQgIAAgHAGg");
	this.shape_145.setTransform(292.9,172.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FF0000").s().p("AgmAzQgDgEAAgFIAAg/IABgJIAAgJQgBgGAEgDQADgEAGAAQALAAACALQAQgNAWAAQATAAAAAaIAAAHQgBAPgNAAQgMAAAAgNIgBgKQgVAEgJATIAAAwQAAAFgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_146.setTransform(282.9,172.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AggAqQgRgMAAgXQAAgXANgRQAOgTAYAAQARAAAMAFQAOAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAGADQAHADAIAAQANAAAJgGQAIgFAFAAQAKAAAAAKQAAALgRAHQgNAGgPAAQgXAAgOgLgAgMgXQgHAGgEANIAWgKQAMgGAIgFQgGgEgLAAQgIAAgGAGg");
	this.shape_147.setTransform(229.9,172.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgIBEQgFgDABgGIAAgLIABgKIgCgyIgTgBQgMgBAAgMQAAgGAEgDQAEgEAFAAIARABIgBgKIAAgKQAAgFAEgEQAEgEAGABQANgBAAAZIAAAIIAKgBQALAAAEABQAIADAAAKQAAAFgEAEQgEADgFAAIgGAAIgEAAIgJABIABAyIABAFIAAAGQgBAWgOABQgEAAgEgEg");
	this.shape_148.setTransform(219.8,170.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AADAfQgDgJgCgYIgDAFIgOAmQgBAEgEACQgEAHgIAAQgFAAgEgIQgGgJgDgNQgEgMgFgoIgCgNQAAgGAEgDQAEgEAGAAQALAAACALIACANIABAOIAFAXIAQgwQAEgNAKAAQALAAADAPIAFAaIAGAaIAOg6QADgJAKAAQAGAAAEAEQAEAEAAAFIgBADIgUBEQgDAJgHAJQgFAHgHAAQgMgBgIgXg");
	this.shape_149.setTransform(197.2,172.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgbAzQgOgGAAgLQAAgJALAAQAEAAAJADQAJACAEABQATAAAAgJQAAgEgNgGIgZgMQgOgKAAgNQAAgVAVgGQAMgEAYAAQAJAAAFADQAGADAAAJQAAARgJAAQgJABgCgJIgIgBQgXABAAAGQAAAEANAHQAUAJAHAEQAOAJgBANQAAARgPAJQgNAHgRAAQgNAAgLgEg");
	this.shape_150.setTransform(162.9,172.4);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgbAzQgPgGAAgLQAAgJAMAAQAEAAAJADQAIACAGABQASAAAAgJQAAgEgOgGIgZgMQgNgKAAgNQAAgVAUgGQANgEAYAAQAJAAAFADQAHADAAAJQAAARgKAAQgKABgCgJIgIgBQgWABAAAGQAAAEANAHQAUAJAGAEQAOAJABANQAAARgQAJQgNAHgRAAQgNAAgLgEg");
	this.shape_151.setTransform(115.3,172.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AggAqQgRgMAAgXQAAgXANgRQAOgTAYAAQARAAAMAFQAOAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAGADQAHADAIAAQANAAAJgGQAIgFAFAAQAKAAAAAKQAAALgRAHQgNAGgPAAQgXAAgOgLgAgMgXQgHAGgEANIAWgKQAMgGAIgFQgGgEgLAAQgIAAgGAGg");
	this.shape_152.setTransform(104.8,172.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgdArQgQgNAAgVQAAgSAOgVQAPgYAUAAQALAAANAFQARAIAAAIQgBAFgDAEQgEADgFAAQgEAAgGgEQgGgEgMgBQgHABgIAPQgJANABAKQgBAKAIAGQAHAFALABQAGAAAJgGQAKgEADAAQAEAAAFADQADAFAAAEQAAAIgRAIQgOAGgJAAQgVAAgOgMg");
	this.shape_153.setTransform(94,172.4);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AAEAfQgDgJgDgYIgCAFIgQAmQgBAEgCACQgFAHgIAAQgEAAgGgIQgFgJgDgNQgDgMgHgoIgBgNQAAgGAEgDQAEgEAGAAQAKAAADALIACANIACAOIADAXIARgwQAEgNAKAAQALAAADAPIAGAaIAEAaIAQg6QABgJALAAQAFAAAEAEQAFAEAAAFIAAADIgVBEQgDAJgHAJQgEAHgIAAQgNgBgGgXg");
	this.shape_154.setTransform(32,172.6);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AAbAzIgcgiIgYAXIgIAHQgEAFgGAAQgFAAgEgEQgEgEAAgFQAAgGAIgHIANgLIASgRIgLgPQgHgJgFgFQgGgFAAgFQAAgFAEgEQAEgEAGAAQAGAAANAOIAOAUIARgOQAKgJAFgGQAEgGAGAAQAGAAAEAEQAEADAAAFQAAAHgKAKIgOAMIgPAOIAdAjQAEAEAAAEQAAAFgEAEQgFAEgFAAQgFAAgFgFg");
	this.shape_155.setTransform(20.5,142.2);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgbAzQgPgGAAgKQAAgKAMAAQAEAAAJADQAIADAGgBQASABAAgJQAAgFgOgGIgZgLQgNgKAAgNQAAgUAUgHQANgEAYAAQAJAAAFADQAHADAAAJQAAARgKAAQgKABgCgJIgIgBQgWABAAAGQAAAEANAGQAUAJAGAFQAOAJABANQAAARgQAJQgNAHgRAAQgNAAgLgEg");
	this.shape_156.setTransform(207.1,202.3);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgIBEQgEgEAAgFIAAgLIABgKIgCgxIgTgCQgMgBAAgMQAAgFAEgEQAEgEAFAAIARACIAAgLIgBgKQAAgFAEgEQAEgDAFgBQAOAAAAAZIAAAIIAKgBQALAAAEACQAIACAAAJQAAAGgEADQgEAEgFAAIgGAAIgEAAIgJABIABAyIAAAFIAAAGQAAAXgOAAQgEgBgEgDg");
	this.shape_157.setTransform(178.6,200.7);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgIBEQgFgEAAgFIABgLIAAgKIgCgxIgSgCQgMgBAAgMQAAgFADgEQAFgEAFAAIARACIgBgLIAAgKQAAgFAEgEQAEgDAGgBQANAAAAAZIAAAIIAJgBQAMAAAEACQAIACAAAJQAAAGgEADQgDAEgHAAIgEAAIgGAAIgJABIACAyIAAAFIAAAGQAAAXgNAAQgFgBgEgDg");
	this.shape_158.setTransform(160.5,200.7);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgMBHQgDgEAAgFIgBgSIAAgSIABgWIABgVQAAgFAEgEQADgEAHAAQAEAAAEAEQAEAEAAAFIgBAVIgBAWIABASIAAASQgBAFgDAEQgEAEgFAAQgFAAgFgEgAgIgxQgFgEAAgGQAAgGAFgEQAFgFAEAAQAHAAAEAFQAFAEAAAGQAAAGgFAEQgEAEgHAAQgEAAgFgEg");
	this.shape_159.setTransform(328.8,170.1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AADAfQgDgJgCgYIgDAFIgOAmQgCAEgDACQgEAHgIAAQgFAAgEgIQgGgJgDgNQgEgMgFgoIgCgNQAAgGAEgDQAEgEAGAAQAKAAADALIACANIABAOIAEAXIARgwQAEgNAKAAQALAAADAPIAFAaIAGAaIAOg6QACgJALAAQAFAAAFAEQAEAEAAAFIgBADIgUBEQgDAJgHAJQgEAHgJAAQgLgBgIgXg");
	this.shape_160.setTransform(319,172.6);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AghAqQgQgMAAgXQAAgXANgRQAPgTAXAAQARAAALAFQAPAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAHADQAGADAHAAQAOAAAJgGQAIgFAFAAQAKAAAAAKQAAALgRAHQgNAGgQAAQgVAAgQgLgAgNgXQgGAGgEANIAWgKQANgGAHgFQgGgEgLAAQgIAAgHAGg");
	this.shape_161.setTransform(297.7,172.4);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AAEAfQgDgJgDgYIgCAFIgPAmQgBAEgEACQgEAHgIAAQgFAAgFgIQgFgJgDgNQgEgMgGgoIgBgNQAAgGAEgDQAEgEAGAAQALAAACALIACANIABAOIAFAXIAQgwQAEgNAKAAQALAAADAPIAFAaIAGAaIAPg6QACgJAKAAQAGAAAEAEQAEAEAAAFIgBADIgUBEQgDAJgHAJQgFAHgHAAQgNgBgGgXg");
	this.shape_162.setTransform(285.5,172.6);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgLBHQgEgEAAgFIgBgSIAAgSIABgWIABgVQAAgFAEgEQAEgEAFAAQAFAAAEAEQAEAEAAAFIgBAVIgBAWIAAASIAAASQAAAFgDAEQgEAEgFAAQgGAAgDgEgAgIgxQgFgEABgGQgBgGAFgEQAEgFAFAAQAHAAAFAFQAEAEAAAGQAAAGgEAEQgFAEgHAAQgFAAgEgEg");
	this.shape_163.setTransform(240.6,170.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgIBEQgEgDAAgGIAAgLIABgKIgCgyIgTgBQgMgBAAgMQAAgGAEgDQAEgEAFAAIARABIAAgKIgBgKQAAgFAEgEQAEgEAFABQAOgBAAAZIAAAIIAKgBQALAAAEABQAIADAAAKQAAAFgEAEQgEADgFAAIgGAAIgEAAIgJABIABAyIAAAFIAAAGQAAAWgOABQgEAAgEgEg");
	this.shape_164.setTransform(192.1,170.8);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AAXBJQgFgJgJgMIgPgUIgNAJIgBAaQAAAFgEAEQgEAEgFAAQgPAAAAgRIACgXIABgXIABgfIAAggIAAgKIgBgKQAAgGADgEQAFgDAFAAQAGAAAEADQAEAEAAAGIABAKIAAAKIAAAcIgBAaQANgKAagbQAEgEAGAAQAFAAAEAEQAFAEAAAFQAAAFgEAEQgMAMgQAOIAVAaQAOAUAAAGQAAAGgDAEQgFADgFAAQgIAAgEgHg");
	this.shape_165.setTransform(149.6,169.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgJBNQgDgEAAgGIAAiGQAAgGADgDQAEgDAFAAQAGAAAEADQAEADAAAGIAACBQAAASgOAAQgFAAgEgDg");
	this.shape_166.setTransform(120.3,169.6);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgeArQgPgNAAgVQAAgSAOgVQAPgYAUAAQALAAANAFQARAIAAAIQgBAFgDAEQgEADgFAAQgEAAgGgEQgGgEgMgBQgGABgJAPQgJANABAKQgBAKAIAGQAHAFAKABQAHAAAJgGQAKgEADAAQAEAAAFADQADAFAAAEQAAAIgRAIQgOAGgKAAQgUAAgPgMg");
	this.shape_167.setTransform(112.4,172.4);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgJAVQgEgDAAgGIAEgYQABgLAKAAQAGAAADADQADAEAAAFIgDAYQgBAEgCADQgFAEgEAAQgFAAgDgDg");
	this.shape_168.setTransform(105.1,164.2);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AghAqQgQgMAAgXQAAgXANgRQAPgTAXAAQARAAALAFQAPAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAHADQAGADAHAAQAOAAAJgGQAIgFAFAAQAKAAAAAKQAAALgRAHQgNAGgQAAQgVAAgQgLgAgNgXQgGAGgEANIAWgKQANgGAHgFQgGgEgLAAQgIAAgHAGg");
	this.shape_169.setTransform(78.1,172.4);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AghAqQgQgMAAgXQAAgXANgRQAOgTAYAAQARAAALAFQAPAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAHADQAGADAHAAQAOAAAJgGQAIgFAFAAQAKAAAAAKQAAALgQAHQgOAGgQAAQgVAAgQgLgAgNgXQgGAGgEANIAWgKQAMgGAIgFQgHgEgKAAQgIAAgHAGg");
	this.shape_170.setTransform(74.7,142.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_54},{t:this.shape_53,p:{x:20.5,y:142.2}},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49,p:{x:66.4,y:139.7}},{t:this.shape_48,p:{x:74.7,y:142.5}},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45,p:{x:16.5}},{t:this.shape_44,p:{x:29.3,y:169.7}},{t:this.shape_43},{t:this.shape_42,p:{x:49.9,y:172.4}},{t:this.shape_41,p:{x:61.1,y:172.4}},{t:this.shape_40,p:{x:83.5,y:172.4}},{t:this.shape_39},{t:this.shape_38,p:{x:106.9}},{t:this.shape_37,p:{x:116.7}},{t:this.shape_36,p:{x:127.3,y:169.7}},{t:this.shape_35,p:{x:137.6}},{t:this.shape_34,p:{x:154.3}},{t:this.shape_33,p:{x:161.6}},{t:this.shape_32},{t:this.shape_31,p:{x:197.7}},{t:this.shape_30,p:{x:205.6}},{t:this.shape_29,p:{x:216.3,y:172.3}},{t:this.shape_28,p:{x:226.6}},{t:this.shape_27,p:{x:245.3}},{t:this.shape_26},{t:this.shape_25,p:{x:263.5,y:172.4}},{t:this.shape_24,p:{x:276.6,y:172.4}},{t:this.shape_23},{t:this.shape_22,p:{x:305.5}},{t:this.shape_21},{t:this.shape_20,p:{x:338.8,y:172.4}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17,p:{x:78.7,y:200.1}},{t:this.shape_16,p:{x:89,y:202.4}},{t:this.shape_15,p:{x:99.3,y:202.3}},{t:this.shape_14,p:{x:120.5,y:202.3}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11,p:{x:163.7,y:202.3}},{t:this.shape_10,p:{x:176.4,y:202.5}},{t:this.shape_9},{t:this.shape_8,p:{x:206.6,y:202.4}},{t:this.shape_7},{t:this.shape_6,p:{x:226.5}},{t:this.shape_5,p:{x:237.6}},{t:this.shape_4,p:{x:248.6,y:202.4}},{t:this.shape_3,p:{x:259.6}},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{x:290.6}}]},90).to({state:[{t:this.shape_54},{t:this.shape_53,p:{x:20.5,y:142.2}},{t:this.shape_52},{t:this.shape_14,p:{x:45.4,y:142.5}},{t:this.shape_50},{t:this.shape_75},{t:this.shape_48,p:{x:74.7,y:142.5}},{t:this.shape_47},{t:this.shape_46},{t:this.shape_74},{t:this.shape_30,p:{x:47.5}},{t:this.shape_73,p:{x:57.8,y:172.4}},{t:this.shape_37,p:{x:67.2}},{t:this.shape_72},{t:this.shape_71},{t:this.shape_22,p:{x:108.3}},{t:this.shape_70,p:{x:116.3,y:169.6}},{t:this.shape_49,p:{x:121.8,y:169.6}},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66,p:{x:166.8}},{t:this.shape_65,p:{x:174.1}},{t:this.shape_64},{t:this.shape_44,p:{x:203.1,y:169.7}},{t:this.shape_42,p:{x:214.2,y:172.4}},{t:this.shape_63,p:{x:233.5}},{t:this.shape_16,p:{x:243.9,y:172.5}},{t:this.shape_62,p:{x:254}},{t:this.shape_27,p:{x:263.8}},{t:this.shape_4,p:{x:282.2,y:172.5}},{t:this.shape_17,p:{x:292.5,y:170.2}},{t:this.shape_61},{t:this.shape_36,p:{x:321.7,y:169.7}},{t:this.shape_60,p:{x:332.7,y:172.4}},{t:this.shape_59,p:{x:139.1}},{t:this.shape_29,p:{x:150.2,y:202.2}},{t:this.shape_58},{t:this.shape_57,p:{x:169.6,y:202.3}},{t:this.shape_56},{t:this.shape_6,p:{x:198.9}},{t:this.shape_24,p:{x:209.5,y:202.3}},{t:this.shape_55,p:{x:220.7}},{t:this.shape,p:{x:230.8}}]},55).to({state:[{t:this.shape_54},{t:this.shape_53,p:{x:20.5,y:142.2}},{t:this.shape_52},{t:this.shape_14,p:{x:45.4,y:142.5}},{t:this.shape_50},{t:this.shape_49,p:{x:66.4,y:139.7}},{t:this.shape_48,p:{x:74.7,y:142.5}},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45,p:{x:15.7}},{t:this.shape_110},{t:this.shape_42,p:{x:39.6,y:172.4}},{t:this.shape_109},{t:this.shape_10,p:{x:72,y:172.6}},{t:this.shape_108},{t:this.shape_57,p:{x:94.9,y:172.4}},{t:this.shape_107,p:{x:105}},{t:this.shape_35,p:{x:124.1}},{t:this.shape_106,p:{x:134.2}},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103,p:{x:164.8}},{t:this.shape_102},{t:this.shape_62,p:{x:179.8}},{t:this.shape_11,p:{x:190.2,y:172.4}},{t:this.shape_101},{t:this.shape_37,p:{x:221.1}},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98,p:{x:253.1}},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86,p:{x:89.7,y:200}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_59,p:{x:137.7}},{t:this.shape_82},{t:this.shape_8,p:{x:168.8,y:202.4}},{t:this.shape_81,p:{x:178.8}},{t:this.shape_4,p:{x:197.2,y:202.4}},{t:this.shape_80,p:{x:207.9,y:202.2}},{t:this.shape_79},{t:this.shape_44,p:{x:237,y:199.6}},{t:this.shape_78},{t:this.shape_5,p:{x:268.4}},{t:this.shape_55,p:{x:279.7}},{t:this.shape_3,p:{x:291.1}},{t:this.shape_77},{t:this.shape_36,p:{x:312.7,y:199.6}},{t:this.shape_76,p:{x:322.6}}]},54).to({state:[{t:this.shape_54},{t:this.shape_53,p:{x:20.5,y:142.2}},{t:this.shape_52},{t:this.shape_14,p:{x:45.4,y:142.5}},{t:this.shape_50},{t:this.shape_70,p:{x:66.4,y:139.7}},{t:this.shape_42,p:{x:74.7,y:142.5}},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45,p:{x:27.9}},{t:this.shape_128},{t:this.shape_30,p:{x:53.6}},{t:this.shape_127},{t:this.shape_22,p:{x:82.1}},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_38,p:{x:145.6}},{t:this.shape_16,p:{x:155.7,y:172.5}},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_80,p:{x:225,y:172.3}},{t:this.shape_106,p:{x:235.2}},{t:this.shape_118},{t:this.shape_8,p:{x:255.3,y:172.5}},{t:this.shape_117,p:{x:266.3}},{t:this.shape_49,p:{x:274.4,y:169.6}},{t:this.shape_116},{t:this.shape_41,p:{x:305,y:172.4}},{t:this.shape_86,p:{x:313.8,y:170.1}},{t:this.shape_28,p:{x:321.6}},{t:this.shape_44,p:{x:332.9,y:169.7}},{t:this.shape_115},{t:this.shape_6,p:{x:129.2}},{t:this.shape_4,p:{x:139.5,y:202.4}},{t:this.shape_57,p:{x:149.8,y:202.3}},{t:this.shape_114},{t:this.shape_113},{t:this.shape_36,p:{x:202.5,y:199.6}},{t:this.shape_20,p:{x:213.7,y:202.3}},{t:this.shape_112},{t:this.shape_111},{t:this.shape_76,p:{x:240.2}}]},60).to({state:[{t:this.shape_54},{t:this.shape_155},{t:this.shape_52},{t:this.shape_25,p:{x:45.4,y:142.5}},{t:this.shape_50},{t:this.shape_49,p:{x:66.4,y:139.7}},{t:this.shape_42,p:{x:74.7,y:142.5}},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45,p:{x:18.2}},{t:this.shape_154},{t:this.shape_30,p:{x:43.8}},{t:this.shape_22,p:{x:62.9}},{t:this.shape_8,p:{x:73.4,y:172.5}},{t:this.shape_29,p:{x:84,y:172.3}},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_16,p:{x:134,y:172.5}},{t:this.shape_17,p:{x:144.3,y:170.2}},{t:this.shape_150},{t:this.shape_107,p:{x:173.4}},{t:this.shape_121},{t:this.shape_149},{t:this.shape_117,p:{x:209.6}},{t:this.shape_148},{t:this.shape_147},{t:this.shape_15,p:{x:240.6,y:172.4}},{t:this.shape_34,p:{x:256.9}},{t:this.shape_33,p:{x:264.2}},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_6,p:{x:89.8}},{t:this.shape_4,p:{x:100.1,y:202.4}},{t:this.shape_138},{t:this.shape_81,p:{x:128.4}},{t:this.shape_36,p:{x:139,y:199.6}},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_53,p:{x:185.7,y:202}},{t:this.shape_134},{t:this.shape_133},{t:this.shape_73,p:{x:218.5,y:202.3}},{t:this.shape_132},{t:this.shape_14,p:{x:236.6,y:202.3}},{t:this.shape_41,p:{x:249.7,y:202.3}},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129}]},59).to({state:[{t:this.shape_54},{t:this.shape_53,p:{x:20.5,y:142.2}},{t:this.shape_52},{t:this.shape_40,p:{x:45.4,y:142.5}},{t:this.shape_50},{t:this.shape_70,p:{x:66.4,y:139.7}},{t:this.shape_170},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45,p:{x:33.4}},{t:this.shape_44,p:{x:46.2,y:169.7}},{t:this.shape_103,p:{x:56.8}},{t:this.shape_24,p:{x:66.9,y:172.4}},{t:this.shape_169},{t:this.shape_22,p:{x:97.6}},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_16,p:{x:128.3,y:172.5}},{t:this.shape_63,p:{x:138.6}},{t:this.shape_165},{t:this.shape_66,p:{x:166.4}},{t:this.shape_65,p:{x:173.7}},{t:this.shape_164},{t:this.shape_36,p:{x:202.7,y:169.7}},{t:this.shape_48,p:{x:213.7,y:172.4}},{t:this.shape_98,p:{x:232.9}},{t:this.shape_163},{t:this.shape_25,p:{x:251.1,y:172.4}},{t:this.shape_42,p:{x:264.1,y:172.4}},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_31,p:{x:334}},{t:this.shape_49,p:{x:339.5,y:169.6}},{t:this.shape_14,p:{x:125.8,y:202.3}},{t:this.shape_55,p:{x:138.8}},{t:this.shape_60,p:{x:150,y:202.3}},{t:this.shape_158},{t:this.shape_157},{t:this.shape_4,p:{x:188.3,y:202.4}},{t:this.shape_156},{t:this.shape_8,p:{x:217.2,y:202.4}},{t:this.shape_73,p:{x:227.5,y:202.3}},{t:this.shape_6,p:{x:237}},{t:this.shape,p:{x:246.5}}]},60).wait(67));

	// rule
	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AgOANQgGgFAAgIQAAgFAGgGQAHgGAHAAQAKAAAFAGQAHAFAAAGQAAAIgHAFQgGAFgJAAQgHAAgHgFg");
	this.shape_171.setTransform(284.8,150.1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FF0000").s().p("AgnBkQgFAFgGAAQgIAAgEgFQgGgFAAgGIABgKIAAgKIAAiVQAAgJAFgIQAEgIAKgBQAOABABAPIgBAFIAAAFIAAAzQAJgFAKgDQAIgCAIAAQAfAAASAWQATAUgBAeQABAegVAWQgWAWgeAAQgSgBgRgGgAgOgCQgJADgLAIIAAA4QARAHANAAQAQABALgLQALgMAAgRQAAgRgJgLQgJgLgPAAQgHAAgIAEg");
	this.shape_172.setTransform(271,140.5);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FF0000").s().p("Ag0BFQgDgFAAgIIAAhVIAAgMIAAgNQAAgHAFgEQAEgGAIAAQAPABADAPQAWgSAcAAQAbAAAAAjIAAAJQgCAUgRAAQgQAAAAgRIgBgNQgdAFgMAZIAABBQAAAIgGAFQgFAFgHAAQgJAAgFgFg");
	this.shape_173.setTransform(256.8,144.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FF0000").s().p("AgsA5QgWgQAAgfQAAggARgXQAUgaAgAAQAXAAAPAIQAUAKAAAUQAAAOgRALQgHAGgWAJIgrAUQAGAGAJADQAJAEALAAQARAAAMgHQALgGAHAAQAOgBAAANQAAAPgXAKQgSAIgUAAQgfAAgUgPgAgRgfQgJAIgFARIAegNQAQgIALgHQgJgFgOAAQgMAAgIAIg");
	this.shape_174.setTransform(242.3,144);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FF0000").s().p("AgSA6IgshpIgCgHQAAgIAFgEQAHgFAHAAQALAAAFAKQAIAQAVA6IASgtIAMgcQAFgLALAAQAIAAAGAFQAFAFAAAHQAAAFgVAwIgcA6QgBAHgEAEQgFAEgGAAQgNAAgFgOg");
	this.shape_175.setTransform(228.6,143.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FF0000").s().p("AgzBFQgFgFAAgIIAAhVIAAgMIABgNQAAgHAFgEQAEgGAIAAQAPABACAPQAXgSAcAAQAaAAABAjIAAAJQgCAUgRAAQgQAAAAgRIgBgNQgdAFgNAZIAABBQAAAIgEAFQgGAFgIAAQgIAAgEgFg");
	this.shape_176.setTransform(203.9,144.1);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FF0000").s().p("AAgA9QgMAGgKADQgJACgFAAQggAAgQgRQgQgRAAghQAAggAYgWQAXgXAgABQAMgBARAIQAUAIAAALQAAAFgDAEIgCAMIgBATQAAAYADALIAGAOIAGAMQAAAHgGAFQgFAEgHAAQgGABgNgMgAgSgaQgNAOAAASQAAARAGAJQAGAJANAAQAHAAAIgDQAHgCAGgGQgEgeAAgQIABgKIACgLIgFgCIgEgBQgQAAgOAOg");
	this.shape_177.setTransform(189.7,144.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FF0000").s().p("AgMBnQgFgFAAgHIAAi1QAAgIAFgFQAGgFAHABQAHgBAFAFQAFAFAAAIIAACtQAAAagSAAQgHAAgFgGg");
	this.shape_178.setTransform(178.3,140.3);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FF0000").s().p("AAaBBQgQAHgRAAQgTgBgNgHQgOgJgDgSQgFggAAgaQAAgQAEgWQACgPAPAAQAIAAAGAFQAFAEAAAHIgCASIgCATIABAgQACAOACAIIAHADIAGABQANAAASgFIAAgWIgBgWQAAgbADgUQACgPAQAAQAIAAAFAFQAGAEgBAIIgCAuIAAAaIAAAaIAAAJIABAIQAAAHgFAFQgGAFgIAAQgLAAgFgKg");
	this.shape_179.setTransform(167.6,144.1);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FF0000").s().p("AhDBUQAAgHAEgEQAFgFAIAAIARACQAKADAKAAQASAAAKgMQAIgMACgaQgHAHgJAEQgIADgJAAQgaAAgQgRQgRgRAAgaQAAgkAWgWQAWgXAmAAQANAAAIADQAJADAGAHQARABAAASQAAAJgDAQQgFAfgBAhQgCArgNATQgRAagrAAQgzAAAAgVgAgUg7QgLANABAVQAAAQAFAIQAGAHAMAAQAKAAALgMQAKgLABgMIAHgnQgFgDgEgBIgJgCQgVAAgNAPg");
	this.shape_180.setTransform(153.4,147.5);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FF0000").s().p("AAbA9IgEgcQgCgOAAgNIABgLIAAgLIABgFIAAgGQAAgLgFAAQgMAAgKAOQgKAPgHAVIgBAMIAAAMIgBALIgBAMQAAAHgFAGQgGAFgIAAQgHAAgGgFQgFgFAAgIIAAgLIgBgMIACgkIABgiIAAgMIgBgMQAAgIAGgFQAFgFAIAAQARAAABAVIABABQATgTAUAAQAZAAAKAVQAGAOAAAcIAAAJIAAAIQAAAKADAQQACAQAAAKQAAAIgFAFQgFAFgIAAQgQAAgCgQg");
	this.shape_181.setTransform(139.4,143.8);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FF0000").s().p("AgQBgQgFgFAAgIIAAgYIgBgYIABgdIACgdQAAgIAFgEQAFgFAIAAQAHAAAFAFQAFAEAAAIIgBAdIgCAdIABAYIAAAYQAAAIgFAFQgFAFgHAAQgIAAgFgFgAgLhCQgHgGAAgIQAAgIAHgGQAGgGAHAAQAJAAAGAGQAGAGAAAIQAAAIgGAGQgGAFgJAAQgHAAgGgFg");
	this.shape_182.setTransform(128.7,140.9);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FF0000").s().p("AglBFQgTgIAAgOQAAgNAPAAQAGAAAMAEQALADAGAAQAaAAAAgKQAAgHgSgIQgagMgIgFQgTgNAAgSQAAgbAcgJQARgFAhAAQANAAAGADQAJAFAAAMQAAAYgNAAQgNAAgDgLIgKgBQgfAAAAAJQAAAFASAIQAaAMAJAHQATANAAARQAAAXgVAMQgRAJgYAAQgRAAgPgFg");
	this.shape_183.setTransform(117.9,143.9);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AAgA9QgMAGgKADQgJACgFAAQggAAgQgRQgQgRAAghQAAggAYgWQAXgXAgABQAMgBARAIQAUAIAAALQAAAFgDAEIgCAMIgBATQAAAYADALIAGAOIAGAMQAAAHgGAFQgFAEgHAAQgGABgNgMgAgSgaQgNAOAAASQAAARAGAJQAGAJANAAQAHAAAIgDQAHgCAGgGQgEgeAAgQIABgKIACgLIgFgCIgEgBQgQAAgOAOg");
	this.shape_184.setTransform(92.4,144.1);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AglBFQgTgIAAgOQAAgNAPAAQAGAAAMAEQALADAGAAQAaAAAAgKQAAgHgSgIQgagMgIgFQgTgNAAgSQAAgbAcgJQARgFAhAAQANAAAGADQAJAFAAAMQAAAYgNAAQgNAAgDgLIgKgBQgfAAAAAJQAAAFASAIQAaAMAJAHQATANAAARQAAAXgVAMQgRAJgYAAQgRAAgPgFg");
	this.shape_185.setTransform(354.7,104.3);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgsA5QgXgQABgfQAAggARgXQAUgaAgAAQAXAAAPAIQAUAKAAAUQAAAOgRAMQgHAFgWAJIgsAUQAHAGAJAEQAJADAKAAQASAAAMgHQALgGAHAAQAOgBAAANQAAAPgXAKQgSAIgVAAQgeAAgUgPgAgRgfQgJAIgFARIAdgNQARgIALgHQgJgFgOAAQgLAAgJAIg");
	this.shape_186.setTransform(340.6,104.4);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("Ag0BFQgDgFAAgIIAAhVIAAgMIAAgMQAAgIAEgEQAFgGAIAAQAOABADAPQAXgSAcAAQAbAAgBAjIAAAJQgBAUgRAAQgRAAAAgRIAAgNQgdAFgNAZIAABBQAAAIgEAFQgGAFgIAAQgIAAgFgFg");
	this.shape_187.setTransform(327,104.5);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AgQBgQgFgFAAgIIAAgYIgBgYIABgdIACgdQAAgIAFgEQAFgFAIAAQAHAAAFAFQAFAEAAAIIgBAdIgCAdIABAYIAAAYQAAAIgFAFQgFAFgHAAQgIAAgFgFgAgLhCQgHgGAAgIQAAgIAHgGQAGgGAHAAQAJAAAGAGQAGAGAAAIQAAAIgGAGQgGAFgJAAQgHAAgGgFg");
	this.shape_188.setTransform(316.8,101.3);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AAaBBQgQAHgRAAQgTgBgNgHQgOgJgDgSQgFggAAgaQAAgQAEgWQACgPAPAAQAIAAAGAFQAFAEAAAHIgCASIgCATIABAgQACAOACAIIAHADIAGABQANAAASgFIAAgWIgBgWQAAgbADgUQACgPAQAAQAIAAAFAFQAGAEgBAIIgCAuIAAAaIAAAaIAAAJIABAIQAAAHgFAFQgGAFgIAAQgLAAgFgKg");
	this.shape_189.setTransform(305.6,104.5);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AAOBVIAAgHIADgmIgJABQgeAAgUgPQgUgRAAgcQgBgnAYgYQAXgYApAAQAGAAAFAEQAFgDAEAAQAIAAAFAFQAFAGAAAHQAAAlgEAsIgGAvQgDAaAAAWQAAAIgGAFQgEAFgIAAQgTAAABgWgAAQhKQgVADgLASQgKAOAAAUQAAANAJAHQAJAJAPgBQAIAAAFgJQAGgNABghIABgcIgEAAIgHAAIgBAAg");
	this.shape_190.setTransform(291.2,107.6);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgsA5QgXgQAAgfQAAggASgXQAUgaAgAAQAXAAAPAIQAUAKAAAUQAAAOgQAMQgIAFgWAJIgsAUQAHAGAJAEQAJADAKAAQASAAANgHQAKgGAHAAQANgBAAANQAAAPgVAKQgTAIgVAAQgeAAgUgPgAgRgfQgJAIgFARIAdgNQASgIAKgHQgJgFgOAAQgMAAgIAIg");
	this.shape_191.setTransform(276.9,104.4);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("Ag0BFQgDgFAAgIIAAhVIAAgMIAAgMQAAgIAEgEQAFgGAIAAQAOABAEAPQAVgSAdAAQAaAAAAAjIAAAJQgBAUgRAAQgQAAgBgRIAAgNQgdAFgMAZIAABBQgBAIgFAFQgFAFgHAAQgJAAgFgFg");
	this.shape_192.setTransform(263.3,104.5);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgsA5QgWgQgBgfQABggARgXQATgaAhAAQAXAAAPAIQAUAKAAAUQAAAOgQAMQgIAFgWAJIgrAUQAGAGAJAEQAJADALAAQARAAANgHQALgGAGAAQANgBAAANQABAPgXAKQgSAIgUAAQgfAAgUgPgAgRgfQgJAIgFARIAegNQARgIAKgHQgJgFgOAAQgLAAgJAIg");
	this.shape_193.setTransform(237.1,104.4);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AgLBNQgFgGAAgHQAAgPgDgeQgDgcAAgPQAAgIgCgFQgPAJgQAUIgCADIAAApIgBAKIAAAJQAAAHgGAEQgFAEgIAAQgLAAgEgJQgDgHAAgPIAAgvIAAgUIgBgTQAAgMAFgKQAFgMAJAAQAHAAAGAHQAGAFAAAHIgBALQAUgWASAAQAUgBAIAPQAIgGAKgEQAKgDALAAQAagBAJAaQACAGAEAeQAEAUAFAyQABAIgGAEQgFAFgIABQgPAAgDgPIgFgnIgEgmQgEgXgFAAQgDAAgLAGQgLAGgFAFQAAAPAEAaQADAdAAAPQAAAHgFAGQgFAEgIAAQgHAAgFgEg");
	this.shape_194.setTransform(219.5,104.5);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AAaBBQgQAHgRAAQgTgBgNgHQgOgJgDgSQgFggAAgaQAAgQAEgWQACgPAPAAQAIAAAGAFQAFAEAAAHIgCASIgCATIABAgQACAOACAIIAHADIAGABQANAAASgFIAAgWIgBgWQAAgbADgUQACgPAQAAQAIAAAFAFQAGAEgBAIIgCAuIAAAaIAAAaIAAAJIABAIQAAAHgFAFQgGAFgIAAQgLAAgFgKg");
	this.shape_195.setTransform(201.6,104.5);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AgMBnQgFgFAAgHIAAi1QAAgIAFgFQAGgFAHABQAHgBAFAFQAFAFAAAIIAACtQAAAagSAAQgHAAgFgGg");
	this.shape_196.setTransform(190.9,100.7);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AgqA3QgUgSgBgfQgBgcARgXQAUgaAjAAQAbAAAPAVQAOATAAAcQAAAdgQAWQgTAYgdAAQgZAAgRgRgAgSgWQgIANAAAPQAAAQAJAJQAHAGAKAAQAKAAAIgHQAKgKABgPQABgqgYAAQgPAAgJAPg");
	this.shape_197.setTransform(180,104.5);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AgTA6IgshpIgBgHQAAgIAGgEQAFgFAIAAQALAAAFAKQAHAQAWA6IASgtIAMgcQAGgLAKAAQAHAAAHAFQAFAFAAAHQAAAFgVAwIgcA6QgBAHgEAEQgFAEgGAAQgNAAgGgOg");
	this.shape_198.setTransform(166.8,104.3);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AgzBFQgEgFAAgIIAAhVIAAgMIAAgMQAAgIAEgEQAFgGAIAAQAOABADAPQAXgSAcAAQAbAAgBAjIAAAJQgBAUgRAAQgRAAAAgRIAAgNQgdAFgNAZIAABBQAAAIgEAFQgGAFgIAAQgIAAgEgFg");
	this.shape_199.setTransform(142.1,104.5);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AgqA3QgUgSgBgfQgBgcARgXQAUgaAjAAQAbAAAPAVQAOATAAAcQAAAdgQAWQgTAYgdAAQgZAAgRgRgAgSgWQgIANAAAPQAAAQAJAJQAHAGAKAAQAKAAAIgHQAKgKABgPQABgqgYAAQgPAAgJAPg");
	this.shape_200.setTransform(128,104.5);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgTAbQgFgEAAgGQAAgDAJgQIALgVQAEgIAIAAQAHAAAGAEQAEAFAAAFQAAADgJARIgKAUQgFAJgIAAQgIAAgEgFg");
	this.shape_201.setTransform(103.1,112.3);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AgLBcQgGgFAAgHIAAgOIABgPIgChDIgZgCQgRgCAAgPQABgIAFgFQAEgFAIAAIAXACIgBgOIAAgNQgBgIAGgFQAGgEAHAAQATAAAAAgIgBALIANgBQAQAAAFACQALAEAAAMQAAAIgGAFQgFAFgHAAIgHgBIgHAAIgMABIACBFIAAAGIAAAIQABAegUAAQgGAAgFgEg");
	this.shape_202.setTransform(91.4,102.2);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AAfBgQgEgKgCgTQgDgTAAgMIABgKIAAgKIAAgLQgBgHgGAAQgPAAgKANQgHAHgKATQAAAvgFAKQgFAKgLAAQgHAAgGgEQgGgFAAgIIACgHIABgjQgBgbABg8IABgFIAAgUIgBgMIgBgNQAAgHAFgFQAGgFAHAAQANAAAFAPQACAHAAARIAAAbIgBAZQAJgJAMgFQAJgFANAAQAXAAAJANQAIAJABATIACAhIADAZQABAPADALIABAFQAAAHgGAFQgGAFgHAAQgNAAgEgOg");
	this.shape_203.setTransform(77.5,100.8);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AhDBUQAAgHAEgEQAFgFAIAAIARACQAKADAKAAQASAAAJgMQAJgMACgaQgHAHgIAEQgJADgJAAQgaAAgQgRQgRgRAAgaQAAgkAWgWQAXgXAlAAQAMAAAKADQAIADAGAHQARABAAASQAAAJgDAQQgFAfgCAhQgBArgNATQgRAagrAAQgzAAAAgVgAgUg7QgLANABAVQAAAQAFAIQAGAHAMAAQAKAAALgMQAKgLABgMIAGgnQgEgDgFgBIgIgCQgWAAgMAPg");
	this.shape_204.setTransform(62.1,107.9);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AgQBgQgFgFAAgIIAAgYIgBgYIABgdIACgdQAAgIAFgEQAFgFAIAAQAHAAAFAFQAFAEAAAIIgBAdIgCAdIABAYIAAAYQAAAIgFAFQgFAFgHAAQgIAAgFgFgAgLhCQgHgGAAgIQAAgIAHgGQAGgGAHAAQAJAAAGAGQAGAGAAAIQAAAIgGAGQgGAFgJAAQgHAAgGgFg");
	this.shape_205.setTransform(51.6,101.3);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AgsA5QgWgQAAgfQAAggARgXQAUgaAgAAQAXAAAPAIQAUAKAAAUQAAAOgRAMQgHAFgWAJIgrAUQAGAGAJAEQAJADALAAQARAAAMgHQALgGAHAAQAOgBAAANQAAAPgXAKQgSAIgUAAQgfAAgUgPgAgRgfQgJAIgFARIAegNQAQgIALgHQgJgFgOAAQgMAAgIAIg");
	this.shape_206.setTransform(39.8,104.4);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AAfBKQgRAAgJggQgEgMgEggIgDAGIgUAzQgCAGgEADQgFAJgLAAQgHABgHgMQgHgLgFgSQgDgRgJg2QgCgLAAgHQAAgHAGgFQAFgFAIAAQAOAAAEAOIADASIABATIAGAgQAJgaANgnQAFgRAOAAQAPAAAFATQADANADAWIAHAkIAVhPQADgMANAAQAIAAAGAFQAFAFAAAHIgBAEQgOA0gOApQgDAMgJAMQgGAJgKAAIgBAAg");
	this.shape_207.setTransform(23.3,104.6);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AgTAbQgFgEAAgGQAAgDAJgQIALgVQAEgIAJAAQAGAAAGAEQAEAFAAAFQAAADgJARIgKAUQgFAJgIAAQgIAAgEgFg");
	this.shape_208.setTransform(323.2,72.7);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AgLBcQgGgFAAgHIAAgOIABgPIgChDIgZgCQgQgCgBgPQABgIAEgFQAFgFAIAAIAXACIgBgOIAAgNQgBgIAGgFQAFgEAIAAQATAAgBAgIAAALIANgBQAQAAAFACQALAEAAAMQAAAIgGAFQgFAFgHAAIgHgBIgHAAIgMABIACBFIAAAGIAAAIQABAegUAAQgGAAgFgEg");
	this.shape_209.setTransform(311.6,62.6);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AAbA9IgEgcQgCgOAAgNIABgLIAAgLIABgFIAAgGQAAgLgFAAQgMAAgKAOQgKAPgHAVIgBAMIAAAMIgBALIgBAMQAAAHgFAGQgGAFgIAAQgHAAgGgFQgFgFAAgIIAAgLIgBgMIACgkIABgiIAAgMIgBgMQAAgIAGgFQAFgFAIAAQARAAABAVIABABQATgTAUAAQAZAAAKAVQAGAOAAAcIAAAJIAAAIQAAAKADAQQACAQAAAKQAAAIgFAFQgFAFgIAAQgQAAgCgQg");
	this.shape_210.setTransform(298.2,64.6);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AgsA5QgWgQgBgfQAAggASgXQATgaAhAAQAXAAAPAIQAUAKAAAUQAAAOgQAMQgIAFgWAJIgsAUQAHAGAJAEQAJADAKAAQASAAANgHQALgGAGAAQANgBAAANQAAAPgVAKQgTAIgVAAQgeAAgUgPgAgRgfQgJAIgFARIAdgNQASgIAKgHQgJgFgOAAQgLAAgJAIg");
	this.shape_211.setTransform(283.3,64.8);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AgLBNQgFgGAAgHQAAgPgDgeQgDgcAAgPQAAgIgCgFQgPAJgQAUIgCADIAAApIgBAKIAAAJQAAAHgGAEQgFAEgIAAQgLAAgEgJQgDgHAAgPIAAgvIAAgUIgBgTQAAgMAFgKQAFgMAJABQAHgBAGAHQAGAFAAAHIgBALQAUgWASAAQAUgBAIAPQAIgGAKgEQAKgDALAAQAagBAJAaQACAGAEAeQAEAUAFAyQABAIgGAFQgFAEgIABQgPAAgDgPIgFgnIgEgmQgEgXgFAAQgDAAgLAGQgLAGgFAFQAAAPAEAaQADAdAAAPQAAAHgFAGQgFAEgIAAQgHAAgFgEg");
	this.shape_212.setTransform(265.7,64.9);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AgsA5QgXgQAAgfQAAggASgXQAUgaAgAAQAXAAAPAIQAUAKAAAUQAAAOgQAMQgIAFgWAJIgsAUQAHAGAJAEQAJADAKAAQASAAANgHQAKgGAHAAQANgBAAANQAAAPgVAKQgTAIgVAAQgeAAgUgPgAgRgfQgJAIgFARIAdgNQASgIAKgHQgJgFgOAAQgLAAgJAIg");
	this.shape_213.setTransform(247.2,64.8);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("Ag0BFQgDgFAAgIIAAhVIAAgMIAAgNQAAgHAEgEQAFgGAIAAQAOABAEAPQAVgSAdAAQAaAAAAAjIAAAJQgBAUgRAAQgQAAgBgRIAAgNQgdAFgMAZIAABBQgBAIgFAFQgFAFgHAAQgJAAgFgFg");
	this.shape_214.setTransform(233.6,64.9);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AAaBBQgQAHgRAAQgTgBgNgHQgOgJgDgSQgFggAAgaQAAgQAEgWQACgPAPAAQAIAAAGAFQAFAEAAAHIgCASIgCATIABAgQACAOACAIIAHADIAGABQANAAASgFIAAgWIgBgWQAAgbADgTQACgQAQAAQAIAAAFAFQAGAEgBAIIgCAuIAAAaIAAAaIAAAJIABAIQAAAHgFAFQgGAFgIAAQgLAAgFgKg");
	this.shape_215.setTransform(219.7,64.9);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AglBFQgTgIAAgOQAAgNAPAAQAGAAAMAEQALADAGAAQAaAAAAgKQAAgHgSgIQgagMgIgFQgTgNAAgSQAAgbAcgJQARgFAhAAQANAAAGADQAJAFAAAMQAAAYgNAAQgNAAgDgLIgKgBQgfAAAAAJQAAAFASAIQAaAMAJAHQATANAAARQAAAXgVAMQgRAJgYAAQgRAAgPgFg");
	this.shape_216.setTransform(206.1,64.7);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AAgA9QgMAGgKADQgJACgFAAQggAAgQgRQgQgRAAghQAAgfAYgXQAXgXAgAAQAMAAARAIQAUAIAAALQAAAFgDAEIgCAMIgBATQAAAYADALIAGAOIAGAMQAAAHgGAFQgFAEgHAAQgGABgNgMgAgSgaQgNAOAAASQAAARAGAJQAGAJANAAQAHAAAIgDQAHgDAGgFQgEgeAAgQIABgKIACgLIgFgCIgEgBQgQAAgOAOg");
	this.shape_217.setTransform(192.3,64.9);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AgsA5QgWgQAAgfQAAggARgXQATgaAhAAQAXAAAPAIQAUAKAAAUQAAAOgRAMQgHAFgWAJIgrAUQAGAGAJAEQAJADALAAQARAAAMgHQALgGAHAAQAOgBAAANQAAAPgXAKQgSAIgUAAQgfAAgUgPgAgRgfQgJAIgFARIAegNQARgIAKgHQgJgFgOAAQgMAAgIAIg");
	this.shape_218.setTransform(176.9,64.8);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AgLBNQgFgGAAgHQAAgPgDgeQgDgcAAgPQAAgIgCgFQgPAJgQAUIgCADIAAApIgBAKIAAAJQAAAHgGAEQgFAEgIAAQgLAAgEgJQgDgHAAgPIAAgvIAAgUIgBgTQAAgMAFgKQAFgMAJABQAHgBAGAHQAGAFAAAHIgBALQAUgWASAAQAUgBAIAPQAIgGAKgEQAKgDALAAQAagBAJAaQACAGAEAeQAEAUAFAyQABAIgGAFQgFAEgIABQgPAAgDgPIgFgnIgEgmQgEgXgFAAQgDAAgLAGQgLAGgFAFQAAAPAEAaQADAdAAAPQAAAHgFAGQgFAEgIAAQgHAAgFgEg");
	this.shape_219.setTransform(159.3,64.9);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AgTAbQgFgEAAgGQAAgDAJgQIALgVQAEgIAIAAQAHAAAGAEQAEAFAAAFQAAADgJARIgKAUQgFAJgIAAQgIAAgEgFg");
	this.shape_220.setTransform(130.5,72.7);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AgmBmQgGgFAAgIQAAgMAcg8QgOgcggg3IgGgLQgEgGAAgFQAAgHAGgFQAFgGAIAAQAIAAAFAHQATAZAYAyIARgmQAJgTAJgPQAGgKAKAAQAHAAAGAFQAGAFAAAHQAAAEgCAFIguBdQgRAigIAXIgIAYQgFANgMAAQgIAAgFgFg");
	this.shape_221.setTransform(117.6,68.3);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AgsA5QgXgQABgfQAAggARgXQAUgaAgAAQAXAAAPAIQAUAKAAAUQAAAOgRAMQgHAFgWAJIgsAUQAHAGAJAEQAJADAKAAQASAAAMgHQALgGAHAAQAOgBAAANQAAAPgXAKQgSAIgVAAQgeAAgUgPgAgRgfQgJAIgFARIAdgNQARgIALgHQgJgFgOAAQgLAAgJAIg");
	this.shape_222.setTransform(102.5,64.8);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AAbA9IgEgcQgCgOAAgNIABgLIAAgLIABgFIAAgGQAAgLgFAAQgMAAgKAOQgKAPgHAVIgBAMIAAAMIgBALIgBAMQAAAHgFAGQgGAFgIAAQgHAAgGgFQgFgFAAgIIAAgLIgBgMIACgkIABgiIAAgMIgBgMQAAgIAGgFQAFgFAIAAQARAAABAVIABABQATgTAUAAQAZAAAKAVQAGAOAAAcIAAAJIAAAIQAAAKADAQQACAQAAAKQAAAIgFAFQgFAFgIAAQgQAAgCgQg");
	this.shape_223.setTransform(88.2,64.6);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AgqA3QgUgSgBgfQgBgcARgXQAUgaAjAAQAbAAAPAVQAOATAAAcQAAAdgQAWQgTAYgdAAQgZAAgRgRgAgSgWQgIANAAAPQAAAQAJAJQAHAGAKAAQAKAAAIgHQAKgKABgPQABgqgYAAQgPAAgJAPg");
	this.shape_224.setTransform(73.7,64.9);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AgLBNQgFgGAAgHQAAgPgDgeQgDgcAAgPQAAgIgCgFQgPAJgQAUIgCADIAAApIgBAKIAAAJQAAAHgGAEQgFAEgIAAQgLAAgEgJQgDgHAAgPIAAgvIAAgUIgBgTQAAgMAFgKQAFgMAJABQAHgBAGAHQAGAFAAAHIgBALQAUgWASAAQAUgBAIAPQAIgGAKgEQAKgDALAAQAagBAJAaQACAGAEAeQAEAUAFAyQABAIgGAFQgFAEgIABQgPAAgDgPIgFgnIgEgmQgEgXgFAAQgDAAgLAGQgLAGgFAFQAAAPAEAaQADAdAAAPQAAAHgFAGQgFAEgIAAQgHAAgFgEg");
	this.shape_225.setTransform(56.6,64.9);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AgTAbQgFgEAAgGQAAgDAIgQIAMgVQAEgIAIAAQAIAAAFAEQAEAFAAAFQAAADgJARIgKAUQgEAJgKAAQgGAAgFgFg");
	this.shape_226.setTransform(363.9,33.1);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AgsA5QgWgQgBgfQAAggASgXQATgaAhAAQAXAAAPAIQAUAKAAAUQAAAOgQALQgIAGgWAJIgsAUQAHAGAJADQAJAEAKAAQASAAANgHQALgGAGAAQANgBAAANQAAAPgVAKQgTAIgVAAQgeAAgUgPgAgRgfQgJAIgFARIAdgNQASgIAKgHQgJgFgOAAQgLAAgJAIg");
	this.shape_227.setTransform(350.8,25.2);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AgLBNQgFgGAAgHQAAgPgDgeQgDgcAAgPQAAgIgCgFQgPAJgQAUIgCADIAAApIgBAKIAAAJQAAAHgGAEQgFAEgIAAQgLAAgEgJQgDgHAAgPIAAgwIAAgTIgBgTQAAgMAFgKQAFgMAJABQAHgBAGAHQAGAFAAAHIgBALQAUgWASAAQAUgBAIAPQAIgGAKgEQAKgDALAAQAagBAJAaQACAGAEAeQAEAUAFAyQABAIgGAEQgFAFgIABQgPAAgDgPIgFgnIgEgmQgEgXgFAAQgDAAgLAGQgLAGgFAFQAAAPAEAaQADAdAAAPQAAAHgFAGQgFAEgIAAQgHAAgFgEg");
	this.shape_228.setTransform(333.2,25.3);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AgQBgQgFgFAAgIIAAgYIgBgYIABgdIACgdQAAgIAFgEQAFgFAIAAQAHAAAFAFQAFAEAAAIIgBAdIgCAdIABAYIAAAYQAAAIgFAFQgFAFgHAAQgIAAgFgFgAgLhCQgHgGAAgIQAAgIAHgGQAGgGAHAAQAJAAAGAGQAGAGAAAIQAAAIgGAGQgGAFgJAAQgHAAgGgFg");
	this.shape_229.setTransform(319,22.1);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AgLBcQgGgFAAgHIABgOIAAgPIgChDIgZgCQgRgCAAgPQAAgIAGgFQAEgFAIAAIAXACIgBgOIgBgNQAAgIAGgFQAFgEAIAAQASAAABAgIgBALIANgBQAPAAAGACQALAEAAAMQgBAIgEAFQgFAFgIAAIgHgBIgHAAIgMABIACBFIAAAGIAAAIQAAAegSAAQgHAAgFgEg");
	this.shape_230.setTransform(308.6,23);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AgZBvQgFgFAAgGIABgEQADgTAAgRIAAhBIgJABIgIABQgIABgFgFQgFgFgBgIQAAgMANgEQAHgBAQgBIACgPQAEgeANgOQANgSAgAAQAYAAABASQAAARgXAAQgQAAgHALQgGAIgCASIAAADIAagBQAYAAAAARQAAASgagBQgJgBgQACIAAAjIAAAjQAAAYgDAOQgDAOgNAAQgIAAgGgFg");
	this.shape_231.setTransform(283.5,22.3);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AgqA3QgUgSgBgfQgBgcARgXQAUgaAjAAQAbAAAPAVQAOATAAAcQAAAdgQAWQgTAYgdAAQgZAAgRgRgAgSgWQgIANAAAPQAAAQAJAJQAHAGAKAAQAKAAAIgHQAKgKABgPQABgqgYAAQgPAAgJAPg");
	this.shape_232.setTransform(269.5,25.3);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AgLBNQgFgGAAgHQAAgPgDgeQgDgcAAgPQAAgIgCgFQgPAJgQAUIgCADIAAApIgBAKIAAAJQAAAHgGAEQgFAEgIAAQgLAAgEgJQgDgHAAgPIAAgwIAAgTIgBgTQAAgMAFgKQAFgMAJABQAHgBAGAHQAGAFAAAHIgBALQAUgWASAAQAUgBAIAPQAIgGAKgEQAKgDALAAQAagBAJAaQACAGAEAeQAEAUAFAyQABAIgGAEQgFAFgIABQgPAAgDgPIgFgnIgEgmQgEgXgFAAQgDAAgLAGQgLAGgFAFQAAAPAEAaQADAdAAAPQAAAHgFAGQgFAEgIAAQgHAAgFgEg");
	this.shape_233.setTransform(240.6,25.3);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AAaBBQgQAHgRAAQgTgBgNgHQgOgJgDgSQgFggAAgaQAAgQAEgWQACgPAPAAQAIAAAGAFQAFAEAAAHIgCASIgCATIABAgQACAOACAIIAHADIAGABQANAAASgFIAAgWIgBgWQAAgbADgTQACgQAQAAQAIAAAFAFQAGAEgBAIIgCAuIAAAaIAAAaIAAAJIABAIQAAAHgFAFQgGAFgIAAQgLAAgFgKg");
	this.shape_234.setTransform(222.7,25.3);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AglBFQgTgIAAgOQAAgNAPAAQAGAAAMAEQALADAGAAQAaAAAAgKQAAgHgSgIQgagMgIgFQgTgNAAgSQAAgbAcgJQARgFAhAAQANAAAGADQAJAFAAAMQAAAYgNAAQgNAAgDgLIgKgBQgfAAAAAJQAAAFASAIQAaAMAJAHQATANAAARQAAAXgVAMQgRAJgYAAQgRAAgPgFg");
	this.shape_235.setTransform(209.1,25.1);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AgMBnQgFgFAAgHIAAi1QAAgIAFgFQAGgFAHABQAHgBAFAFQAFAFAAAIIAACtQAAAagSAAQgHAAgFgGg");
	this.shape_236.setTransform(187.1,21.5);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AAgA9QgMAGgKADQgJACgFAAQggAAgQgRQgQgRAAghQAAggAYgWQAXgXAgAAQAMAAARAIQAUAIAAALQAAAFgDAEIgCAMIgBATQAAAYADALIAGAOIAGAMQAAAHgGAFQgFAEgHAAQgGABgNgMgAgSgaQgNAOAAASQAAARAGAJQAGAJANAAQAHAAAIgDQAHgDAGgFQgEgeAAgQIABgKIACgLIgFgCIgEgBQgQAAgOAOg");
	this.shape_237.setTransform(176.2,25.3);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AgLBcQgGgFAAgHIAAgOIABgPIgDhDIgYgCQgQgCAAgPQAAgIAEgFQAFgFAIAAIAWACIAAgOIAAgNQAAgIAFgFQAFgEAIAAQATAAgBAgIAAALIAOgBQAPAAAFACQAKAEABAMQAAAIgGAFQgEAFgIAAIgHgBIgGAAIgNABIACBFIAAAGIAAAIQABAegUAAQgGAAgFgEg");
	this.shape_238.setTransform(162.3,23);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AgqA3QgUgSgBgfQgBgcARgXQAUgaAjAAQAbAAAPAVQAOATAAAcQAAAdgQAWQgTAYgdAAQgZAAgRgRgAgSgWQgIANAAAPQAAAQAJAJQAHAGAKAAQAKAAAIgHQAKgKABgPQABgqgYAAQgPAAgJAPg");
	this.shape_239.setTransform(148.6,25.3);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AgLBcQgGgFAAgHIAAgOIABgPIgDhDIgYgCQgQgCAAgPQAAgIAEgFQAGgFAHAAIAWACIAAgOIgBgNQABgIAFgFQAGgEAHAAQASAAAAAgIAAALIAOgBQAPAAAFACQAKAEAAAMQAAAIgEAFQgGAFgIAAIgGgBIgGAAIgNABIADBFIAAAGIAAAIQAAAegUAAQgGAAgFgEg");
	this.shape_240.setTransform(135.4,23);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AAuBLQgHgPgFgVIggADQgUABgLACQgGAPgPAdQgGAJgKAAQgHAAgGgEQgGgGAAgHQAAgHATgnIgBgIQAAgFANgEQASggAXgiQAggzAIAAQAOAAAFASIAJArIATBVIAHASQAFALAAAGQAAAHgGAGQgGAEgHAAQgKAAgLgYgAgJANIARgDIATgBIgJgsIgbAwg");
	this.shape_241.setTransform(107.3,22.2);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AgSAkQAAgIAGgFQAGgFAGABQAVgBgBAfQABAHgGAFQgFAGgJgBQgTABAAgfgAgNgbQgFgFAAgHIgBgEIAAgGQgBgGAGgFQAFgGAJAAQASABAAAaQAAAHgFAFQgFAFgIAAQgIAAgFgFg");
	this.shape_242.setTransform(80.2,23.5);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("Ag9BlQgOgNAAgrQAAgRADgjQACgjAAgSIgBgNIgBgOQAAgUASAAQAGAAAEADQAQgEANgBQAOgCALAAQAiAAAUAHQAMAFAAAMQAAAHgFAFQgFAGgJAAIgFgBQgVgFgVAAIgTABIgZAFIgBA0IAzgFIAfgCQAJAAAFAFQAGAFgBAIQABAOgSADIgfACIg3AFIgBAbQAAAaADAEQACABAPAAIAXAAIAZAAIAHgBIAIgBQAIAAAFAEQAGAFAAAJQAAAPgPADQgNACgpAAQgrAAgNgLg");
	this.shape_243.setTransform(66.1,21.8);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AhFBPIACgqQAEg4AAhGQgBgHAGgFQAFgGAIAAQAIAAAFAGQAFAFABAHQgBBGgDA7IgDAgQAfAAAwgQIAHAAQAHAAAFAGQAFAFABAHQAAAMgMAEQgPAIghAFQgdAFgTAAQggAAAAgdg");
	this.shape_244.setTransform(50.3,22.2);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("Ag0BaQgjgbAAhBIABgTIAAgTIABgPIAAgPQAAgKAEgKQAFgMAJAAQAHAAAGAFQAGAFAAAHIAAAXIAAAWIgBATIgBATQAAATAFARQAFAUALAIQAGAFAVAAQAhAAAMg7QAHgeAAg4QAAgIAEgHQAGgJALAAQAJAAAEAHQAEAFAAAGQAAA0gFAdQgHAsgWAdQgKANgNAJQgRALgQAAQgiAAgQgNg");
	this.shape_245.setTransform(32.3,22.4);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AhHBjQgFgGgBgHIABgeIAAgdIAAhqQAAgIAGgHQAGgJAMABIAhACQASACANAHQA3AcAAAqQAAASgLAMQgMANgYAJQAkAUARAUQAFAFgBAHQABAHgGAGQgGAFgHAAQgHAAgGgGQgoglgvgPIABArQAAAHgEAGQgGAFgIAAQgIAAgFgFgAgoAEIAGAAQAgAAAOgHQAIgDAFgGQAFgGAAgDQAAgOgSgOQgRgNgTgCIgQgBg");
	this.shape_246.setTransform(14.2,21.8);

	this.instance_4 = new lib.static_rule1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(187.7,77.5);
	this.instance_4._off = true;

	this.text = new cjs.Text("RULE: A total sum of time, money, measurement, weight, or volume requires a singular verb. ", "bold 14px 'Comic Sans MS'");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 371;
	this.text.parent = this;
	this.text.setTransform(133.9,-108.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171}]}).to({state:[{t:this.instance_4}]},75).to({state:[{t:this.text}]},5).wait(365));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(75).to({_off:false},0).to({_off:true,x:133.9,y:-108.8,text:"RULE: A total sum of time, money, measurement, weight, or volume requires a singular verb. ",font:"bold 14px 'Comic Sans MS'",color:"#000000",textAlign:NaN,lineHeight:21.6,lineWidth:371},5).wait(365));

	// block
	this.instance_5 = new lib.static_whitebox("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(190.3,82.3,1.18,1.388,0,0,0,202.5,67.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(75).to({regY:-4.2,scaleX:1,x:186.8,y:-17.6},0).to({regY:0.8,scaleY:0.13,y:-105.6,alpha:0},5).wait(5).to({regY:150,y:-86.4},0).to({regY:136.4,scaleY:0.74,x:186.5,y:224,alpha:1},5).wait(355));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.7,-11.8,477.9,188.1);


// stage content:
(lib.verbNum_singular = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{singular:0,scene2_restart:448});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
		playSound("atotalsumoftime");
	}
	this.frame_58 = function() {
		playSound("departure");
	}
	this.frame_73 = function() {
		playSound("f_blip");
	}
	this.frame_183 = function() {
		playSound("f_blip");
	}
	this.frame_273 = function() {
		playSound("f_blip");
	}
	this.frame_363 = function() {
		playSound("f_blip");
	}
	this.frame_445 = function() {
		playSound("f_blip");
	}
	this.frame_447 = function() {
		/* _root.gonow = true;*/
	}
	this.frame_456 = function() {
		this.gotoAndPlay("scene2_restart");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(58).call(this.frame_58).wait(15).call(this.frame_73).wait(110).call(this.frame_183).wait(90).call(this.frame_273).wait(90).call(this.frame_363).wait(82).call(this.frame_445).wait(2).call(this.frame_447).wait(9).call(this.frame_456).wait(1));

	// content
	this.instance = new lib.Content_scene2();
	this.instance.parent = this;
	this.instance.setTransform(271.7,184.5,1,1,0,0,0,187.7,77.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(457));

	// main
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,53.9,1,1,0,0,0,54,40.5);

	this.instance_1 = new lib.Bk("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275,191);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.UI}]}).wait(457));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,200.6,534,398.7);
// library properties:
lib.properties = {
	id: '824836D18D792541A6A2FE6D98E12B8E',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/atotalsumoftime.mp3", id:"atotalsumoftime"},
		{src:"sounds/boo.mp3", id:"boo"},
		{src:"sounds/departure.mp3", id:"departure"},
		{src:"sounds/f_blip.mp3", id:"f_blip"},
		{src:"sounds/ohbaby.mp3", id:"ohbaby"},
		{src:"sounds/perc_techno.mp3", id:"perc_techno"},
		{src:"sounds/real_disco.mp3", id:"real_disco"},
		{src:"sounds/relax.mp3", id:"relax"},
		{src:"sounds/s_coolcheer.mp3", id:"s_coolcheer"},
		{src:"sounds/_1a.mp3", id:"_1a"},
		{src:"sounds/_2a.mp3", id:"_2a"},
		{src:"sounds/_2b.mp3", id:"_2b"},
		{src:"sounds/_2c.mp3", id:"_2c"},
		{src:"sounds/_2d.mp3", id:"_2d"},
		{src:"sounds/_2f.mp3", id:"_2f"},
		{src:"sounds/_3b.mp3", id:"_3b"},
		{src:"sounds/_4d.mp3", id:"_4d"},
		{src:"sounds/_5a.mp3", id:"_5a"},
		{src:"sounds/bgmVN.mp3", id:"bgmVN"},
		{src:"sounds/whistles_crowd.mp3", id:"whistles_crowd"}
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
an.compositions['824836D18D792541A6A2FE6D98E12B8E'] = {
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