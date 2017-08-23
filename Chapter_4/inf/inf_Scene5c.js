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


(lib.Tween25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIBoQgFgHAAgFQAAgGADgCQAEgEAFAAQAEAAAGAGQAFAHAAAFQAAAFgEAEQgDADgGAAQgEAAgFgGgAgJAxIAAgRIgBgQIABg4IAAg6QAAgLALAAQAMAAAAALIAACTQAAALgMAAQgLAAAAgLg");
	this.shape.setTransform(77.1,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag9BlQgFgFAAgGIAAgmQAAgTACgiIADg3IACgkQABgGADgCQASgGAXAAQAWAAAVAQQAZASAAAbQAAAigaASQATAJAKAKQAKAKAAAMQAAAQgRAPQgMALgNAFQgdAMguAAQgGAAgFgGgAgoA0IAAAcQAjgCAUgIQAKgEAIgHQAIgHAAgEQAAgGgRgIQgMgFgMgDIgNgDIgGABIgFAAIgPgBIgBAdgAgihOIgBAXIgCAzIAUABQATgBAMgLQAOgMAAgSQAAgNgOgKQgOgLgOAAIgUABg");
	this.shape_1.setTransform(66.3,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhCBSQgbgYAAgmQAAgsAbgmQAegpAsAAQArAAAVAUQAWAUAAAsQAAAsgYAlQgdAqgsAAQglAAgagWgAgugsQgVAeAAAiQAAAaATAQQASAPAbAAQAfAAAVghQASgcAAgjQAAgggOgNQgNgMggAAQgfAAgXAgg");
	this.shape_2.setTransform(46.5,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag1BbQgZgSAAgYQAAgRANAAQANAAAAAQQAAALAQALQAPAKANAAQAKAAAEhCQACgeAAgwIgBgOIgHAAIgPAAIgQgBQgGAAgEgDQgDgEAAgGQAAgOASAAIANABIANAAIAYgBIAZgBQAeAAAAAPQAAAGgDAEQgEAEgGAAIgIgBIgJgBIgPABIABAPQAABhgOAtQgIAegVAAQgXAAgWgRg");
	this.shape_3.setTransform(26.8,1.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJBhQgEgEAAgGIABgGIAAgGIAAgTIgBgUQAAgSgDgiQgEglAAgQIgMABQgdAAgQgFQgLgCAAgLQAAgFADgEQAEgFAHABIAVACIAVABIAYAAIAXAAIAeABIAeACQAGAAAEAEQAEADAAAGQAAAGgEAEQgEAEgGAAIgegCIgegBIgJAAIADA7QADAlAAAVIABAOIABAOQAAAJgDAHQgDAIgIAAQgFAAgEgDg");
	this.shape_4.setTransform(1.6,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAuBFIgJgqQgNABgWAGIgiAHQgGARgQAhQgFAHgHABQgFgBgEgDQgEgEAAgGQAAgGATgqQgCgEAAgEQAAgLANgCQAPgcAXgkQAegzAIAAQAKAAAEAPIAJAtIATBaIAIAVQADAKAAAEQAAAGgEAEQgEADgFAAQgMAAgJgegAgQAJIAvgJIgKgyg");
	this.shape_5.setTransform(-18.8,1.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag5BlQgNgLAAgrIABgSIABgWQgCgDAAgDQAAgEADgDQACgmAAgSIgBgPIgBgOQAAgQANAAQAFAAAEAEQAQgEAOgCQAOgCAMAAQAgAAATAHQAJAEAAAJQAAAFgEAEQgEAFgFAAIgEgBQgXgGgUAAQgLAAgMACQgNACgOAEIABAOQAAASgDAgIA5gGIAfgCQAGAAAEADQAEAEAAAGQAAALgMACIgfADIg8AFIgBASIAAAPQAAAeAEAFQADADARAAIAYAAIAZgBIAIAAIAHgBQAOAAAAANQAAAMgLACQgMACgpAAQgpAAgLgLg");
	this.shape_6.setTransform(-36.5,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhDBkQgDgEAAgGIgBgfIgBgfQAAgMACgXQADgYAAgMIgBgUIgCgUQAAgHAFgGQAFgHAJABIAfACQASACAMAHQA1AcAAApQAAAUgSAPQgPAMgWAHQApAWAVAYQADAEAAAFQAAAGgEAEQgEAEgFAAQgFAAgFgFQgrgrg1gPIABAaIABAaQAAAGgEAEQgDAEgGAAQgGAAgEgEgAgpg6IAAAQIgBAaIgDAZIAGAAIAGAAQAhAAAQgIQAHgEAHgGQAHgIAAgFQAAgSgVgQQgSgOgVgDIgUgBg");
	this.shape_7.setTransform(-53.5,1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhDBaQgQgSAAglQAAghAQgkQAQgkAagWQAQgPATAAQALAAAUAIQAYAJAAAMQAAAFgEAEQgEAFgFAAQgEAAgEgDQgVgNgNAAQgKAAgKAKQgGAGgKANQgfApAAAtQAAAZAIAKQAJALAWAAQAWAAASgPQASgQAHgdQgkACgaAMIgFABQgGABgEgFQgDgEgBgFQAAgIAIgEQAbgQBGgBQAFABAFAEQADACAAAGQAAAJgHADQgJAogZAZQgaAYgjAAQggAAgRgSg");
	this.shape_8.setTransform(-71.2,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.7,-20.8,165.4,41.6);


(lib.trgt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.392)").s().p("AjHDIIAAmPIGPAAIAAGPg");
	this.shape.setTransform(20,20);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.trgt, new cjs.Rectangle(0,0,40,40), null);


(lib.target = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AjHDIIAAmPIGPAAIAAGPg");
	this.shape.setTransform(-61.6,20);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.target, new cjs.Rectangle(-81.6,0,40,40), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(66,66,66,0.247)").ss(1.5,1,1).p("AjbikIG3AAIAAFJIm3AAg");
	this.shape.setTransform(22,16.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.247)").s().p("AjbClIAAlJIG3AAIAAFJg");
	this.shape_1.setTransform(22,16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,46,34.9);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(66,66,66,0.247)").ss(1.5,1,1).p("Ah8ikID5AAIAAFJIj5AAg");
	this.shape.setTransform(12.5,16.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.247)").s().p("Ah8ClIAAlJID5AAIAAFJg");
	this.shape_1.setTransform(12.5,16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,27,34.9);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(66,66,66,0.247)").ss(1.5,1,1).p("AkSikIIlAAIAAFJIolAAg");
	this.shape.setTransform(27.5,16.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.247)").s().p("AkSClIAAlJIIlAAIAAFJg");
	this.shape_1.setTransform(27.5,16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,57,34.9);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(66,66,66,0.247)").ss(1.5,1,1).p("Ai5ikIFzAAIAAFJIlzAAg");
	this.shape.setTransform(18.6,16.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.247)").s().p("Ai5ClIAAlJIFzAAIAAFJg");
	this.shape_1.setTransform(18.6,16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,39.2,34.9);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgcA8QgCgCAAgEIABgdIAAgcIgBgdIgCgPQAAgFACgEQADgFAEAAQADABACACQABACAAACIAAADIAAAEQAGgFAGgCQAFgCAFAAQAPAAAHANQAGALAAASQAAAPgJAJQgJAMgPAAQgGAAgJgDIAAAjQAAAEgCACQgCABgDAAQgEAAgCgBgAgGgmIgKAIIABAiQAIADAHAAQAJAAAFgHQAEgFAAgJQAAgNgDgIQgDgGgHAAQgGAAgFADg");
	this.shape.setTransform(15.4,24.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgHA1IABgbIAAgaIAAgZIABgbQAAgHAGAAQAIAAAAAHIgBAbIAAAZIgBAlIgBAQQAAAIgGgBQgHAAAAgHg");
	this.shape_1.setTransform(9.3,20.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgZAfQgKgIgBgRQAAgSAJgNQALgOAQAAQAMAAAHAEQAJAFAAALQAAAHgIAGIgPAHIgbANQAEAHAGACQAHAEAGAAQAGAAAHgCQAIgDADgDQACgEACgBQAEABACACQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgLAAQgPAAgLgJgAgPgTQgFAHgEANIAXgKQAMgGAGgFQgGgGgLAAQgJAAgGAHg");
	this.shape_2.setTransform(3.3,22.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAUA4IgDgRIgBgSIAAgGIAAgFQAAgNgHgBQgJAAgHAIIgKARQAAAbgCAGQgCAEgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgKIAAg1IAAgNIAAgHIgBgGQAAgEACgCQACgCADAAQAGAAABAHIABAMIAAARIAAAQIAAAGQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAFAAAMIABAOIABAQIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgFg");
	this.shape_3.setTransform(-5.2,20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-11.6,7.5,33.2,24.9), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape.setTransform(16,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgEA2QgDgCAAgDIABgEIAAgDIAAgLIgBgLIgBgcIgCgeIgHABQgQAAgJgDQgGgBAAgGQAAgDACgCQACgDADAAIAMACIAMAAIANAAIANAAIAQABIARABQADAAACACQACACAAADQAAADgCADQgCACgDAAIgRgBIgQgBIgGAAIACAhIACAgIABAIIAAAHQAAAFgCAEQgCAFgEAAQgCAAgCgCg");
	this.shape_1.setTransform(7.8,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,22.3,24.9), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgTAoQgMgDAAgIQAAgDADgCQABgCAEAAQACAAADAEQACABAGABIAIABQAFAAAFgBQAHgCAAgFQAAgKgOgDIgGgDQgKgBgEgDQgGgDAAgJQAAgPAPgHIANgEIANgFIAHgBQADAAACACQACACAAAEIABAFIABAGQAAAEgCACQgCACgEAAQgDAAgCgCIgCgIIgRAEQgKAGAAAGIADACQARACAHAGQANAGAAAPQAAAMgLAGQgIAFgNAAQgJAAgIgEg");
	this.shape.setTransform(9.7,14.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgGA1QgCgCAAgEIAAgMIgBgOIABgRIABgQQAAgDACgDQACgBADAAQACAAACABQACADAAADIgBAQIAAARIAAAOIAAAMQAAAEgCACQgCACgCAAQgDAAgCgCgAgEgnQgCgDAAgDQAAgEACgDQADgCACAAQAEAAACACQADADAAAEQAAADgDADQgCACgEAAQgCAAgDgCg");
	this.shape_1.setTransform(4.3,13.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,15.7,24.9), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AASAkIgCgQIgBgRIAAgFIAAgHQAAgQgFAAQgJAAgGAJQgHAKgEAMIAAAHIgBAHIABAHIAAAHQAAADgCACQgCACgDAAQgDAAgCgCQgCgCAAgDIgBgHIAAgHIABgUIABgUIAAgHIgBgIQAAgCADgDQACgCADAAQAGAAABAKIAAAIQANgQAMAAQALAAAFALQADAGAAAOIAAAIIAAAFIACAQIABAQQAAACgCACQgCADgDAAQgGAAgBgHg");
	this.shape.setTransform(21.5,14.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAQAjQgJAEgLAAQgJABgHgEQgHgFgBgJQgDgTAAgPQAAgKACgMQABgHAGAAQAEAAACACQACACAAADIgBALIgBALIAAAUIADAOIAFACIAEABQAJAAALgDIAAgPIAAgNQAAgQABgMQABgGAGAAQADAAADABQACADAAADIgCAbIAAAPIAAAQIABAFIAAAEQAAAEgCACQgCACgDAAQgGAAgCgHg");
	this.shape_1.setTransform(13.6,15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgLA/QgCgCAAgDIAAgCQABgJAAgMIAAgUIAAgUIgLABQgIAAAAgHQAAgHANgBIAHAAIABgLQACgQAGgIQAHgJAQAAQALAAAAAHQAAAHgKAAQgSAAgCAYIAAAFIAQgBQAMAAAAAHQAAAGgGABIgGAAIgRABIAAAQIAAANIAAAOQAAAOgBAIQAAAFgGAAQgDAAgCgBg");
	this.shape_2.setTransform(5.7,13.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,27.5,24.9), null);


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


(lib.QuizB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.733)","rgba(255,255,255,0.271)"],[0,1],-256,0,256,0).s().p("Egn/AC5IAAlxMBP/AAAIAAFxg");
	this.shape.setTransform(0.1,-124.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("EAoTgYDIAAfuMhQgAAAIAA/ugEAoTAYEMhQlAAAIAAvHMBQlAAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#F4FF91","#FFFFFF"],[0,1],0,-62.4,0,62.4).s().p("EgoSAHkIAAvHMBQlAAAIAAPHg");
	this.shape_2.setTransform(0,105.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FDABFE","#FEE4AB"],[0,1],0,-100.2,0.1,100.2).s().p("EgoQAP4IAA/vMBQhAAAIAAfvg");
	this.shape_3.setTransform(0.3,-52.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-259.3,-155.5,518.8,311.1);


(lib.Directions2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6600CC").s().p("AgGBQQgEgFAAgEQAAgEADgCQADgDAEAAQADAAAEAFQAEAFAAAEQAAAEgDADQgDADgEAAQgDAAgEgGgAgHAlIAAgMIAAgNIAAgrIAAgtQAAgJAJAAQAJAAAAAJIAABxQAAAKgJAAQgJAAAAgKg");
	this.shape.setTransform(103.1,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6600CC").s().p("AgjBPQgNgCAAgIQAAgKAJAAIAMACQAJACAKAAQATAAAIgTQAFgMAAgbQgGALgHAFQgIAFgJAAQgSAAgMgMQgMgNAAgUQAAgbAQgRQARgSAbAAQAKAAAGADQAGACAEAFQALAAAAANQAAAHgCAMIgDATIgCAiQgBAVgEANQgEAQgKAIQgNAKgWgBQgOAAgJgCgAgSgyQgKALAAATQAAAPAGAHQAGAHALAAQAJAAAKgLQAJgLABgKIAFgjQgEgDgFgCQgEgBgFAAQgTAAgKAOg");
	this.shape_1.setTransform(95.1,6.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6600CC").s().p("AAZAyIgDgXIgBgWIAAgJIABgKQAAgWgJAAQgLAAgKAOQgJAMgFASIgBAKIgBAKIABAKIAAAJQAAAEgCADQgDADgFAAQgEAAgDgDQgDgDAAgEIAAgJIgBgKIACgcIABgdIAAgKIgBgKQAAgEADgDQADgDAEAAQAKAAABAOIAAAMQARgXARAAQARAAAGAOQAFAKAAATIAAAKIAAAIQAAAJACAOQACANAAAIQAAAFgCADQgDADgFAAQgJAAgBgKg");
	this.shape_2.setTransform(84.4,3.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6600CC").s().p("AgJBKQgDgCAAgFIAAgSIgBgTIABgYIABgXQAAgFADgCQADgEAEAAQAEAAACAEQADACAAAFIgBAXIgBAYIABATIAAASQAAAFgDACQgDADgDAAQgFAAgCgDgAgGg4QgEgEAAgEQAAgFAEgEQAEgDAEAAQAFAAADADQAEAEAAAFQAAAEgEAEQgDAEgFAAQgEAAgEgEg");
	this.shape_3.setTransform(75.9,0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6600CC").s().p("AgFA9QgDgDAAgFQAAgMgCgYQgDgYAAgMQAAgLgDgGQgHADgIAIIgMANIgFAHIgBARIgBARIABAJIABAIQAAAEgDADQgEADgEAAQgLAAAAgaIABgTIABgRIgBgQIgBgRQAAgXAKAAQAEAAAEADQADAEAAAEIAAAGIgBAGIAAALQAGgLAKgJQAKgJAIAAQAQAAAFAQQAFgHAIgEQAIgEAKAAQARAAAGATQACAEADAZIAHA5QAAAFgDACQgDADgEAAQgJAAgBgJIgEgfIgDgfIgEgOQgDgJgEAAQgEAAgLAGQgJAGgDAEQgBAJABAKIADAaQACARAAAKQAAAFgDADQgDACgEAAQgDAAgDgCg");
	this.shape_4.setTransform(64.8,3.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6600CC").s().p("AgFA9QgDgDAAgFQAAgMgCgYQgDgYAAgMQAAgLgDgGQgHADgIAIIgMANIgFAHIgBARIgBARIABAJIABAIQAAAEgDADQgEADgEAAQgLAAAAgaIABgTIABgRIgBgQIgBgRQAAgXAKAAQAEAAAEADQADAEAAAEIAAAGIgBAGIAAALQAGgLAKgJQAKgJAIAAQAQAAAFAQQAFgHAIgEQAIgEAKAAQARAAAGATQACAEADAZIAHA5QAAAFgDACQgDADgEAAQgJAAgBgJIgEgfIgDgfIgEgOQgDgJgEAAQgEAAgLAGQgJAGgDAEQgBAJABAKIADAaQACARAAAKQAAAFgDADQgDACgEAAQgDAAgDgCg");
	this.shape_5.setTransform(48.5,3.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6600CC").s().p("AAhA1IgHgIIgSAIQgHADgEgBQgYAAgLgNQgKgMAAgbQAAgYARgRQARgSAWAAQAKAAAKAEQAOAHABAIQAAACgCACIgCANIgBAWQAAAMACAIIAGASIADAFIABACQAAAFgEACQgDADgDAAQgCAAgFgEgAgRgZQgLANAAAQQAAARAGAIQAGAIAMAAQAIAAAHgDIALgIQgDgagBgOIABgJIACgLIgGgDIgFgBQgPAAgMANg");
	this.shape_6.setTransform(34.8,3.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6600CC").s().p("AgnAvIAAhHIAAgKIABgLQAAgJAJgBQAKABAAAQQATgSAXgBQAJAAAEAHQAEAGAAANIAAAHQgBANgJgBQgJABAAgKIgBgIIAAgJQgQADgJAGQgJAIgGANIAAA3QAAALgKAAQgJAAAAgLg");
	this.shape_7.setTransform(24.7,3.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6600CC").s().p("AgjBPQgNgCAAgIQAAgKAJAAIAMACQAJACAKAAQATAAAIgTQAFgMAAgbQgGALgHAFQgIAFgJAAQgSAAgMgMQgMgNAAgUQAAgbAQgRQARgSAbAAQAKAAAGADQAGACAEAFQALAAAAANQAAAHgCAMIgDATIgCAiQgBAVgEANQgEAQgKAIQgNAKgWgBQgOAAgJgCgAgSgyQgKALAAATQAAAPAGAHQAGAHALAAQAJAAAKgLQAJgLABgKIAFgjQgEgDgFgCQgEgBgFAAQgTAAgKAOg");
	this.shape_8.setTransform(13.6,6.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6600CC").s().p("AAhA1IgHgIIgRAIQgIADgEgBQgYAAgLgNQgLgMAAgbQAAgYASgRQARgSAXAAQAIAAAMAEQANAHAAAIQAAACgCACIgBANIgBAWQAAAMACAIIAHASIACAFIAAACQAAAFgCACQgDADgEAAQgCAAgFgEgAgQgZQgMANAAAQQAAARAGAIQAGAIAMAAQAIAAAIgDIAKgIQgEgaABgOIAAgJIACgLIgHgDIgEgBQgPAAgLANg");
	this.shape_9.setTransform(2.8,3.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6600CC").s().p("AgJBKQgDgCAAgFIAAgSIgBgTIABgYIABgXQAAgFADgCQADgEAEAAQAEAAACAEQADACAAAFIgBAXIgBAYIABATIAAASQAAAFgDACQgDADgDAAQgFAAgCgDgAgGg4QgEgEAAgEQAAgFAEgEQAEgDAEAAQAFAAADADQAEAEAAAFQAAAEgEAEQgDAEgFAAQgEAAgEgEg");
	this.shape_10.setTransform(-5.3,0.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6600CC").s().p("AggBTQgLgDgGgFIgBAAQgEAAgDgDQgDgDAAgEIABggIAAghIAAgiIAAgkQAAgFAEgEQAEgFAFAAQACAAAOAHIATAJQAbAKAVAUQAYAYAAAdQAAARgIAQQgJAQgOAKQgPALgeAAQgHAAgKgCgAgmgcIABAdIgCA4IACABQAJAGANAAQAXAAAKgHQAKgHAHgLQAFgMABgMQAAgcgggUQgKgHglgRg");
	this.shape_11.setTransform(-15.7,1.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6600CC").s().p("AgjAsQgPgMAAgYQAAgZANgSQAOgUAXAAQAQAAALAGQAOAHAAAPQAAAKgMAIIgWALIgmASQAFAJAJAEQAJAEAKAAQAHAAAKgCQAMgEAEgFQADgGAEAAQADAAADADQADADAAADQAAAMgSAIQgQAHgPAAQgWAAgPgMgAgUgbQgJAKgEASIAggOQARgJAIgGQgIgIgQAAQgMAAgIAJg");
	this.shape_12.setTransform(-35.5,3.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6600CC").s().p("AgdAtQgOgNAAgWQAAgUANgWQAQgZASAAQAKAAAMAFQAQAGAAAJQAAAEgCADQgDADgEAAQgDAAgCgCIgEgEQgGgEgOAAQgJAAgLASQgJARAAAMQAAANAJAIQAJAHAMAAQAHAAAGgDIAMgGIAFgCQAEAAACADQADADAAAEQAAAIgQAHQgOAGgJAAQgUAAgOgNg");
	this.shape_13.setTransform(-46.8,3.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6600CC").s().p("AgJBKQgDgCAAgFIAAgSIgBgTIABgYIABgXQAAgFADgCQADgEAEAAQAEAAACAEQADACAAAFIgBAXIgBAYIABATIAAASQAAAFgDACQgDADgDAAQgFAAgCgDgAgGg4QgEgEAAgEQAAgFAEgEQAEgDAEAAQAFAAADADQAEAEAAAFQAAAEgEAEQgDAEgFAAQgEAAgEgEg");
	this.shape_14.setTransform(-55,0.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6600CC").s().p("AgGBIQgDgDAAgEIABgLIAAgMIgCg7IgXgCQgJgBAAgJQAAgEADgDQACgDAFAAIAVACIAAgOIgBgNQAAgEADgDQADgDAFAAQAIAAABAPIABAJIgBAGIAAAHIAPgCQALAAADABQAGACAAAIQAAAEgDADQgCADgFAAIgFAAIgFgBIgOACIACA8IAAAEIAAAFQABAXgMAAQgDAAgDgDg");
	this.shape_15.setTransform(-63.1,1.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6600CC").s().p("AgdAtQgOgNAAgWQAAgUANgWQAQgZASAAQAKAAAMAFQAQAGAAAJQAAAEgCADQgDADgEAAQgDAAgCgCIgEgEQgGgEgOAAQgJAAgLASQgJARAAAMQAAANAJAIQAJAHAMAAQAHAAAGgDIAMgGIAFgCQAEAAACADQADADAAAEQAAAIgQAHQgOAGgJAAQgUAAgOgNg");
	this.shape_16.setTransform(-73.4,3.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6600CC").s().p("AAhA1IgHgIIgRAIQgIADgEgBQgYAAgLgNQgLgMAAgbQABgYARgRQARgSAXAAQAJAAAKAEQAPAHAAAIQAAACgDACIgBANIgBAWQAAAMACAIIAGASIADAFIAAACQAAAFgDACQgDADgDAAQgCAAgFgEgAgRgZQgLANAAAQQAAARAGAIQAGAIALAAQAKAAAGgDIALgIQgDgagBgOIABgJIACgLIgGgDIgFgBQgPAAgMANg");
	this.shape_17.setTransform(-84.2,3.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#6600CC").s().p("AgnAvIAAhHIAAgKIABgLQAAgJAJgBQAKABAAAQQATgSAXgBQAJAAAEAHQAEAGAAANIAAAHQgBANgJgBQgJABAAgKIgBgIIAAgJQgQADgJAGQgJAIgGANIAAA3QAAALgKAAQgJAAAAgLg");
	this.shape_18.setTransform(-94.3,3.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#6600CC").s().p("AgrBPQgCgDAAgEIAAgeIABgqIADgqIAAgOIABgPQACgJAIABIAJgBIAPgBQASAAAQANQASAOAAAUQAAAZgTAPQgRANgXAAIgNgBIgBA2QAAAEgCADQgDADgEAAQgEAAgDgDgAgWg9IgBATIgCApIAMABQAQAAAMgIQANgKAAgQQAAgLgNgJQgLgHgMAAIgIAAIgGAAg");
	this.shape_19.setTransform(-105,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.7,-16.6,225.4,33.3);


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


(lib.ButtonBackground = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(0.1,1,1).p("AEtC6IpZAAIAAlzIJZAAg");
	this.shape.setTransform(31.2,19);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AksC6IAAlzIJZAAIAAFzg");
	this.shape_1.setTransform(31.2,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,-0.6,62.2,39.2);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAgBAIgEgdQgBgPAAgOIAAgLIABgNQAAgcgLAAQgPAAgMARQgNAQgGAYIgCANIAAANIAAALIABAMQAAAGgDAEQgEAEgGAAQgFAAgEgEQgDgEAAgGIgBgMIgBgLIACglIACgmIAAgMIgBgNQAAgFADgEQAEgEAGAAQAMAAABARIABAQQAVgeAXAAQAVAAAIATQAGAMABAZIAAANIAAALQAAALACARQADASAAALQAAAFgDAEQgEAEgGAAQgMAAgBgNg");
	this.shape.setTransform(37.2,25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAeA/QgRAIgVAAQgRAAgLgHQgNgIgCgRQgFgiAAgbQAAgSAEgXQABgLAMAAQAFgBAEAEQAEAEgBAFIgBAUIgCAUQAAAWABAPQABAPAEAKIAIAEIAIABQARAAAUgGIAAgbIAAgYQAAgcACgWQABgMALABQAHgBADAEQAEADAAAGIgDAyIAAAcIAAAcIABAJIABAJQAAAFgEAEQgEADgGAAQgKAAgCgMg");
	this.shape_1.setTransform(22.9,25.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgVBwQgEgDAAgFIAAgDQAEgRAAgUIgBgkIAAglIgVABQgNAAAAgNQAAgNAXAAIANgBIACgUQADgdAMgOQAMgRAdAAQATAAAAANQAAANgRAAQggAAgEAsIAAAIIAdgCQAVAAAAAOQAAAJgKACIgLABQgGAAgZABIgBAeIABAYIAAAYQAAAZgCAOQgBALgKAAQgGAAgEgEg");
	this.shape_2.setTransform(8.7,22.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.instance = new lib.Symbol15();
	this.instance.parent = this;
	this.instance.setTransform(23.5,22.6,1,1,0,0,0,22,16.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,46.5,41.6), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgyBrQgEgEAAgFIAAg1IAAg0IgCg0IgCgbQAAgJAEgHQAEgIAHAAQAFAAAEAEQADAEAAAFIAAAEIgBAIQALgIALgEQAKgEAJAAQAbAAANAYQAKATAAAfQAAAcgQASQgQAUgbAAQgMAAgQgEIAAA/QAAAFgEAEQgDAEgGAAQgGAAgDgEgAgMhFQgHAEgKAKQABAeAAAgQAPAFANAAQARAAAIgMQAIgKAAgRQAAgYgGgLQgGgMgMAAQgLAAgKAFg");
	this.shape.setTransform(47.2,28.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgOBfIABgvIACgwIAAgvIABgwQAAgNAMAAQANAAAAANIgBAwIAAAvIgCBBIgBAfQgCANgKAAQgNAAAAgOg");
	this.shape_1.setTransform(36.2,21.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgtA5QgUgQAAgeQAAgiARgWQASgaAeAAQAVAAAOAIQARAIAAAUQAAANgPALQgHAEgVAJIgxAYQAHALALAGQALAFAOAAQAJAAAMgDQAQgFAEgGQAFgIAFABQAEAAAEADQAEADAAAFQAAAPgYAKQgUAJgTAAQgdAAgTgPgAgbgiQgKAMgGAYIApgTQAXgLAKgIQgLgLgUAAQgQAAgLANg");
	this.shape_2.setTransform(25.3,25.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAkBkQgDgLgCgUQgDgTAAgMIAAgLIAAgLQAAgXgMAAQgQAAgMAOQgIAIgLAWQAAAygFAJQgDAIgIAAQgFAAgEgDQgFgEAAgFIACgGIACgTIAAgUIAAhgIABgVIgBgOQgBgFAAgHQAAgGAEgDQADgEAGAAQALAAABAMQADAMAAALIgBAdQgCAOABAPIAAAMQALgPAMgIQALgGAOAAQAWAAAIANQAGAKABAXIABAaIACAbIAFAbIAAAEQAAAGgDADQgFAEgFAAQgJgBgDgJg");
	this.shape_3.setTransform(10.1,21.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.instance = new lib.Symbol13();
	this.instance.parent = this;
	this.instance.setTransform(28.3,22.6,1,1,0,0,0,27.5,16.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(-0.2,0,57,41.6), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgnA4QgRgTgBgeQgBgdAQgXQASgaAgAAQAbAAANAYQALATgBAcQAAAcgPAVQgRAXgaAAQgXAAgQgQgAgXgaQgIAPAAASQAAATAKALQAJAIAMAAQAMAAAKgKQALgLABgTQACgygeAAQgSAAgLATg");
	this.shape.setTransform(27.3,25.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgJBhQgEgEAAgGIABgGIAAgGIAAgTIgBgUQAAgSgDgiQgEglAAgQIgMABQgdAAgQgFQgLgCAAgLQAAgFADgEQAEgFAHABIAVACIAVABIAYAAIAXAAIAeABIAeACQAGAAAEAEQAEADAAAGQAAAGgEAEQgEAEgGAAIgegCIgegBIgJAAIADA7QADAlAAAVIABAOIABAOQAAAJgDAHQgDAIgIAAQgFAAgEgDg");
	this.shape_1.setTransform(12.4,21.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.instance = new lib.Symbol12();
	this.instance.parent = this;
	this.instance.setTransform(20,22.6,1,1,0,0,0,18.6,16.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,39.5,41.6), null);


(lib.item2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgkBJQgUgHAAgNQAAgFAEgEQAEgEAFAAQAEAAAHAGQADADALACQAJACAGAAQAKAAAIgDQANgEAAgIQAAgSgZgGIgNgEQgSgDgHgFQgLgHAAgPQAAgbAagMQAIgEARgEIAZgJQAFgCAGAAQAGAAAEADQADAEAAAGIACALIABALQAAAGgDAEQgEAEgFAAQgIAAgDgFQgCgEgBgKIgeAJQgVAIAAANIAIACQAdAFAPAKQAWANAAAaQAAAVgTALQgPAJgXAAQgRAAgQgGg");
	this.shape.setTransform(15.8,24.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgMBfQgEgDAAgGIAAgXIgBgZIACgeIABgeQAAgGAEgEQADgEAGABQAFgBADAEQAEAEAAAGIgBAeIgCAeIABAZIAAAXQAAAGgDADQgEAEgFAAQgFAAgEgEgAgIhIQgEgEAAgGQAAgHAEgFQAFgEAFAAQAHAAAEAEQAFAFAAAHQAAAGgFAEQgEAFgHgBQgFABgFgFg");
	this.shape_1.setTransform(6.1,21.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.instance = new lib.Symbol14();
	this.instance.parent = this;
	this.instance.setTransform(12.8,22.6,1,1,0,0,0,12.5,16.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.item2, new cjs.Rectangle(-0.7,0,27,41.6), null);


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


(lib.blank_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.blank_gr("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(32.6,17,1,1,0,0,0,32.5,17);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.blank_1, new cjs.Rectangle(0.1,0,65,34), null);


(lib.congrats = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{start:0});

	// timeline functions:
	this.frame_19 = function() {
		this.gotoAndPlay('start');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// Layer 1
	this.instance = new lib.Tween25("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(82.7,20.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.1,regY:-0.6,scaleX:1.21,scaleY:1.21,x:82.3,y:20.1},9).to({regY:-0.5,scaleX:1,scaleY:1,y:20.3},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,165.4,41.6);


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


// stage content:
(lib.inf_Scene5c = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene5b:0});

	// timeline functions:
	this.frame_0 = function() {
		createjs.Touch.enable(stage);
		//Menu button -----------------------------------------
		this.btn_menu.addEventListener("click", openMenu.bind(this));
		
		//volume buttons -----------------------------------------
		this.vol_dwn.addEventListener("click", volDwn.bind(this));
		this.vol_up.addEventListener("click", volUp.bind(this));
		this.vol_mute.addEventListener("click", volMute.bind(this));
		
		//Nav buttons -----------------------------------------
		this.btn_goNext.addEventListener("click", openNext.bind(this));
		this.btn_goBack.addEventListener("click", openPrev.bind(this));
		this.btn_goNext.mouseEnabled = false;
		
		
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
		
		 window.open ("inf_Scene6.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("inf_Scene5b.html","_self");
		}
		
		this.item1.addEventListener("pressmove", click1.bind(this));
		this.item2.addEventListener("pressmove", click2.bind(this));
		this.item3.addEventListener("pressmove", click3.bind(this));
		this.item4.addEventListener("pressmove", click4.bind(this));
		
		var _1stHit = false;
		var _2ndHit = false;
		var _3rdHit = false;
		var _4thHit = false;
		
		
		//Drag n Drop
		var hit = false;
		function checkCollision(obj_1,obj_2) {
		
		    obj1x = obj_1.x;
		    obj1y = obj_1.y;
		    obj1w = obj_1.nominalBounds.width;
		    obj1h = obj_1.nominalBounds.height;
		
		    obj2x = obj_2.x;
		    obj2y = obj_2.y;
		    obj2w = obj_2.nominalBounds.width;
		    obj2h = obj_2.nominalBounds.height;
		
		    if (    obj1x >= obj2x + obj2w
		        ||  obj1x + obj1w <= obj2x
		        ||  obj1y >= obj2y + obj2h
		        ||  obj1y + obj1h <= obj2y) {
				console.log(hit);
				hit = false;
					
		    } 
			else {
				
				hit = true;
				obj_1.x = obj_2.x;
				obj_1.y = obj_2.y;
				console.log(hit);
				
		    }
		}
		
		function click1(evt)
		{
			checkCollision(evt.currentTarget,this.target1);
			
			if(!hit){
			evt.currentTarget.x = stage.mouseX / stage.scaleX;
			evt.currentTarget.y = stage.mouseY / stage.scaleY;
			console.log("click");
			}
			else if (hit){
				_1stHit = true;
				console.log("1st hit");
				evt.currentTarget.mouseEnabled = false;
				evt.currentTarget.visible = false;
				this.correct1.visible = true;
			}
			
			if (_1stHit & _2ndHit & _3rdHit & _4thHit )
			{
				console.log("yay!");
				this.btn_goNext.mouseEnabled = true;
				this.btn_goNext.visible = true;
				this.congrats.visible = true;
			}
		
		}
		
		function click2(evt)
		{
			checkCollision(evt.currentTarget,this.target2);
			
			if(!hit){
			evt.currentTarget.x = stage.mouseX / stage.scaleX;
			evt.currentTarget.y = stage.mouseY / stage.scaleY;
			console.log("click");
			}
			else if (hit){
				_2ndHit = true;
				console.log("2nd hit");
				evt.currentTarget.mouseEnabled = false;
				evt.currentTarget.visible = false;
				this.correct2.visible = true;
			}
		
			if (_1stHit & _2ndHit & _3rdHit & _4thHit )
			{
				console.log("yay!");
				this.btn_goNext.mouseEnabled = true;
				this.btn_goNext.visible = true;
				this.congrats.visible = true;
			}
		
			
		}
		
		function click3(evt)
		{
			checkCollision(evt.currentTarget,this.target3);
			
			if(!hit){
			evt.currentTarget.x = stage.mouseX / stage.scaleX;
			evt.currentTarget.y = stage.mouseY / stage.scaleY;
			console.log("click");
			}
			else if (hit){
				_3rdHit = true;
				console.log("3rd hit");
				evt.currentTarget.mouseEnabled = false;
				evt.currentTarget.visible = false;
				this.correct3.visible = true;
			}
			
			if (_1stHit & _2ndHit & _3rdHit & _4thHit )
			{
				console.log("yay!");
				this.btn_goNext.mouseEnabled = true;
				this.btn_goNext.visible = true;
				this.congrats.visible = true;
			}
		
			
		}
		
		
		function click4(evt)
		{
			checkCollision(evt.currentTarget,this.target4);
			
			if(!hit){
			evt.currentTarget.x = stage.mouseX / stage.scaleX;
			evt.currentTarget.y = stage.mouseY / stage.scaleY;
			console.log("click");
			}
			else if (hit){
				_4thHit = true;
				console.log("4th hit");
				evt.currentTarget.mouseEnabled = false;
				evt.currentTarget.visible = false;
				this.correct4.visible = true;
			}
			
			if (_1stHit & _2ndHit & _3rdHit & _4thHit )
			{
				console.log("yay!");
				this.btn_goNext.mouseEnabled = true;
				this.btn_goNext.visible = true;
				this.congrats.visible = true;
			}
		
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// items
	this.item1 = new lib.Symbol11();
	this.item1.parent = this;
	this.item1.setTransform(359.4,295.1,1,1,0,0,0,23.1,20.8);

	this.item2 = new lib.item2();
	this.item2.parent = this;
	this.item2.setTransform(300.8,295.1,1,1,0,0,0,12.5,20.8);

	this.item4 = new lib.Symbol10();
	this.item4.parent = this;
	this.item4.setTransform(232.5,295.1,1,1,0,0,0,28.2,20.8);

	this.item3 = new lib.Symbol9();
	this.item3.parent = this;
	this.item3.setTransform(140.2,295.1,1,1,0,0,0,19.5,20.8);

	this.target3 = new lib.target();
	this.target3.parent = this;
	this.target3.setTransform(81.9,108.8,0.6,0.6,0,0,0,20.2,20.4);
	this.target3.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.target3},{t:this.item3},{t:this.item4},{t:this.item2},{t:this.item1}]}).wait(1));

	// Directions
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLAMQgEgFAAgHQAAgGAEgFQAFgEAGAAQAHAAAFAEQAEAFAAAGQAAAHgEAFQgFAEgHAAQgGAAgFgEg");
	this.shape.setTransform(360.9,76.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAgBAIgDgdQgCgPAAgOIAAgLIABgNQAAgcgLAAQgPAAgMARQgNAQgGAYIgCANIAAANIAAALIABAMQABAGgEAEQgEAEgFAAQgHAAgDgEQgEgEAAgGIAAgMIgBgLIACglIACgmIAAgMIgCgNQABgFAEgEQADgEAGAAQAMAAABARIAAAQQAWgeAXAAQAVAAAJATQAFAMAAAZIAAANIAAALQABALADARQACASAAALQAAAFgDAEQgEAEgGAAQgMAAgBgNg");
	this.shape_1.setTransform(350.7,70.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAdA/QgQAJgVAAQgRAAgLgIQgMgJgDgQQgFgiAAgbQAAgSAEgXQACgMALAAQAFAAAEAEQADAEAAAGIgBATIgCAUQAAAWACAPQAAAPADAKIAJAEIAIABQARAAAUgGIgBgbIAAgYQAAgdADgUQABgMALAAQAGAAAEADQAEAEAAAFIgDAyIAAAcIAAAcIABAJIAAAJQABAFgEAEQgEAEgFgBQgKAAgEgMg");
	this.shape_2.setTransform(336.3,70.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgVBxQgDgEgBgFIAAgDQADgRAAgUIAAgkIAAgmIgVACQgNAAAAgNQAAgNAXAAIANgBIACgUQADgdALgOQANgRAdAAQATAAAAANQAAAMgRAAQggABgEAsIAAAIIAdgCQAVABAAANQAAAJgKACIgLABQgGgBgZACIgBAdIABAZIAAAZQAAAZgCANQgCALgJAAQgGAAgEgDg");
	this.shape_3.setTransform(322.2,67.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgkBJQgUgHAAgNQAAgFAEgEQAEgEAFAAQAEAAAHAGQADADALACQAJACAGAAQAKAAAIgDQANgEAAgIQAAgSgZgGIgNgEQgSgDgHgFQgLgHAAgPQAAgbAagMQAIgEARgEIAZgJQAFgCAGAAQAGAAAEADQADAEAAAGIACALIABALQAAAGgDAEQgEAEgFAAQgIAAgDgFQgCgEgBgKIgeAJQgVAIAAANIAIACQAdAFAPAKQAWANAAAaQAAAVgTALQgPAJgXAAQgRAAgQgGg");
	this.shape_4.setTransform(300.5,69.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgMBfQgEgDAAgGIAAgXIgBgYIACgfIABgeQAAgGAEgEQADgDAGAAQAFAAADADQAEAEAAAGIgBAeIgCAfIABAYIAAAXQAAAGgDADQgEAEgFAAQgFAAgEgEgAgIhIQgEgEAAgHQAAgGAEgFQAFgEAFAAQAHAAAEAEQAFAFAAAGQAAAHgFAEQgEAEgHAAQgFAAgFgEg");
	this.shape_5.setTransform(290.8,67.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgyBrQgEgEAAgFIAAg1IAAg0IgCg0IgCgbQAAgJAEgHQAEgIAHAAQAFAAAEAEQADAEAAAFIAAAEIgBAIQALgIALgEQAKgEAJAAQAbAAANAYQAKATAAAfQAAAcgQASQgQAUgbAAQgMAAgQgEIAAA/QAAAFgEAEQgDAEgGAAQgGAAgDgEgAgMhFQgHAEgKAKQABAeAAAgQAPAFANAAQARAAAIgMQAIgKAAgRQAAgYgGgLQgGgMgMAAQgLAAgKAFg");
	this.shape_6.setTransform(271.6,73.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgOBfIACgvIABgwIABgvIAAgwQAAgNAMAAQANAAAAANIAAAwIgBAvIgCBBIgBAfQgBANgLAAQgNAAAAgOg");
	this.shape_7.setTransform(260.6,66.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgtA5QgUgQAAgeQAAgiARgWQASgaAeAAQAVAAAOAIQARAIAAAUQAAANgPAKQgHAGgVAJIgxAXQAHALALAFQALAGAOAAQAJAAAMgDQAQgEAEgIQAFgGAFAAQAEgBAEAEQAEAEAAAEQAAAPgYAKQgUAJgTAAQgdAAgTgPgAgbgiQgKAMgGAYIApgSQAXgMAKgIQgLgLgUAAQgQAAgLANg");
	this.shape_8.setTransform(249.7,70.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAkBjQgDgKgCgUQgDgTAAgNIABgKIAAgLQAAgXgNAAQgQAAgNAOQgHAIgLAWQAAAygFAJQgDAJgIAAQgFAAgFgFQgDgDAAgGIABgFIABgTIAAgUIABhfIABgXIgBgMQgCgHABgGQAAgFADgEQAEgDAFgBQAMAAACAMQABANABAKIgBAdQgCAOABAOIAAANQALgPAMgIQALgGAOgBQAWAAAJAOQAFALABAXIABAZIADAbIAEAbIAAAEQAAAFgDAEQgEADgGAAQgJAAgDgKg");
	this.shape_9.setTransform(234.5,66.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgnA4QgRgTgBgeQgBgdAQgXQASgaAgAAQAbAAANAYQALATgBAcQAAAcgPAVQgRAXgaAAQgXAAgQgQgAgXgaQgIAPAAASQAAATAKALQAJAIAMAAQAMAAAKgKQALgLABgTQACgygeAAQgSAAgLATg");
	this.shape_10.setTransform(211.1,70.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgJBhQgEgEAAgGIABgGIAAgGIAAgTIgBgUQAAgSgDgiQgEglAAgQIgMABQgdAAgQgFQgLgCAAgLQAAgFADgEQAEgFAHABIAVACIAVABIAYAAIAXAAIAeABIAeACQAGAAAEAEQAEADAAAGQAAAGgEAEQgEAEgGAAIgegCIgegBIgJAAIADA7QADAlAAAVIABAOIABAOQAAAJgDAHQgDAIgIAAQgFAAgEgDg");
	this.shape_11.setTransform(196.2,67.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(3,1,1).p("Aqjh1IAAFnIopAAIkZAAICNiMICMCMA1YjlInmAAIkTkkA1YBmIAAlLA3lDyInCAAAqjIKIAAkYAsyjlIomAAEAhTADyMgr2AAAAH3hCIEBEX");
	this.shape_12.setTransform(260.4,159.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Highlight
	this.target1 = new lib.trgt();
	this.target1.parent = this;
	this.target1.setTransform(402.3,164.1,1,1,0,0,0,19.9,20);
	this.target1.visible = false;

	this.target2 = new lib.trgt();
	this.target2.parent = this;
	this.target2.setTransform(254.7,164.1,1,1,0,0,0,19.9,20);
	this.target2.visible = false;

	this.target4 = new lib.trgt();
	this.target4.parent = this;
	this.target4.setTransform(124.7,116.6,1,1,0,0,0,19.9,20);
	this.target4.visible = false;

	this.target3_1 = new lib.trgt();
	this.target3_1.parent = this;
	this.target3_1.setTransform(70.7,112.5,1,1,0,0,0,19.9,20);
	this.target3_1.visible = false;

	this.congrats = new lib.congrats();
	this.congrats.parent = this;
	this.congrats.setTransform(247.8,293.5,1,1,0,0,0,82.7,20.8);
	this.congrats.shadow = new cjs.Shadow("rgba(0,0,255,1)",0,0,8);
	this.congrats.visible = false;

	this.correct4 = new lib.Symbol8();
	this.correct4.parent = this;
	this.correct4.setTransform(133.3,112.8,1,1,0,0,0,16.9,12.6);
	this.correct4.visible = false;

	this.correct3 = new lib.Symbol7();
	this.correct3.parent = this;
	this.correct3.setTransform(71.5,112.7,1,1,45,0,0,16.9,12.5);
	this.correct3.visible = false;

	this.correct2 = new lib.Symbol6();
	this.correct2.parent = this;
	this.correct2.setTransform(270.4,166.6,1,1,0,0,0,19.1,12.5);
	this.correct2.visible = false;

	this.correct1 = new lib.Symbol5();
	this.correct1.parent = this;
	this.correct1.setTransform(425.1,167.6,1,1,0,0,0,30.1,12.5);
	this.correct1.visible = false;

	this.instance = new lib.Directions2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(247.4,21.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.correct1},{t:this.correct2},{t:this.correct3},{t:this.correct4},{t:this.congrats},{t:this.target3_1},{t:this.target4},{t:this.target2},{t:this.target1}]}).wait(1));

	// background
	this.instance_1 = new lib.QuizB("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(273.2,192.1);

	this.text = new cjs.Text("", "18px 'ComicSansMS'");
	this.text.textAlign = "center";
	this.text.lineHeight = 27;
	this.text.lineWidth = 325;
	this.text.parent = this;
	this.text.setTransform(275.5,352.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.instance_1}]}).wait(1));

	// main
	this.vol_mute = new lib.vol_mute();
	this.vol_mute.parent = this;
	this.vol_mute.setTransform(525.7,17.4,1,1,0,0,0,15,14.1);
	new cjs.ButtonHelper(this.vol_mute, 0, 1, 2, false, new lib.vol_mute(), 3);

	this.btn_goBack = new lib.goNext();
	this.btn_goBack.parent = this;
	this.btn_goBack.setTransform(55.9,350.7,1,1,0,0,180);
	new cjs.ButtonHelper(this.btn_goBack, 0, 1, 2, false, new lib.goNext(), 3);

	this.btn_goNext = new lib.goNext();
	this.btn_goNext.parent = this;
	this.btn_goNext.setTransform(492.3,350.7);
	this.btn_goNext.visible = false;
	new cjs.ButtonHelper(this.btn_goNext, 0, 1, 2, false, new lib.goNext(), 3);

	this.vol_up = new lib.vol_pos();
	this.vol_up.parent = this;
	this.vol_up.setTransform(487.2,17.9,1,1,0,0,0,9,7);
	new cjs.ButtonHelper(this.vol_up, 0, 1, 2, false, new lib.vol_pos(), 3);

	this.vol_dwn = new lib.vol_neg();
	this.vol_dwn.parent = this;
	this.vol_dwn.setTransform(465.3,17.9,1,1,0,0,0,9,7);
	new cjs.ButtonHelper(this.vol_dwn, 0, 1, 2, false, new lib.vol_neg(), 3);

	this.btn_menu = new lib.menu_main();
	this.btn_menu.parent = this;
	this.btn_menu.setTransform(404.4,17.9,1,1.143,0,0,0,23.4,10.5);
	new cjs.ButtonHelper(this.btn_menu, 0, 1, 2, false, new lib.menu_main(), 3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(1.5,1,1).p("AAYBrQgBgLgUgUQgQgRgKAAIAAh1QAKAAASgTQATgTAAgKg");
	this.shape_13.setTransform(446.2,17.6,0.687,0.681);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AADBMQgQgRgKAAIAAh1QAKgBASgSQATgTAAgJIAADTQgBgKgUgUg");
	this.shape_14.setTransform(446.2,17.6,0.687,0.681);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(1.5,1,1).p("AgEghIAJAAQADAAAAACIAAA/QAAACgDAAIgJAAQgDAAAAgCIAAg/QAAgCADAAg");
	this.shape_15.setTransform(441.7,17.7,1,1.003);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgEAiQgBAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBIAAg/QAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAABAAIAJAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIAAA/QAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAg");
	this.shape_16.setTransform(441.7,17.7,1,1.003);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(1.5,1,1).p("AkZh3IIzAAQAwAAAAAwIAACPQAAAwgwAAIozAAQgwAAAAgwIAAiPQAAgwAwAAg");
	this.shape_17.setTransform(469.2,17.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AkYB4QgxAAAAgwIAAiPQAAgwAxAAIIxAAQAxAAAAAwIAACPQAAAwgxAAg");
	this.shape_18.setTransform(469.2,17.9);

	this.instance_2 = new lib.Copyright("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(275,393.5);

	this.btn_goNext_1 = new lib.goNext();
	this.btn_goNext_1.parent = this;
	this.btn_goNext_1.setTransform(494,352.3);
	this.btn_goNext_1.visible = false;
	new cjs.ButtonHelper(this.btn_goNext_1, 0, 1, 2, false, new lib.goNext(), 3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(1.5,1,1).p("AAHAAQAAAKgHAGQgCAEgEACIAAgqQAEABACAEQACACACADQADAFAAAFg");
	this.shape_19.setTransform(450.7,17.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgGgVQAEACACAEIABABIADADQADAGAAAFQAAAJgGAGIgBABQgCAEgEABg");
	this.shape_20.setTransform(447.5,17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.btn_goNext_1},{t:this.instance_2},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.btn_menu},{t:this.vol_dwn},{t:this.vol_up},{t:this.btn_goNext},{t:this.btn_goBack},{t:this.vol_mute}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,202.3,534.9,400.6);
// library properties:
lib.properties = {
	id: 'FD572FA8549A6742A29F005073A406FE',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/bgmusic.mp3", id:"bgmusic"},
		{src:"sounds/_0.mp3", id:"_0"},
		{src:"sounds/_3a.mp3", id:"_3a"},
		{src:"sounds/_4b.mp3", id:"_4b"},
		{src:"sounds/wrong_answer.mp3", id:"wrong_answer"},
		{src:"sounds/SENameofIdea.mp3", id:"SENameofIdea"},
		{src:"sounds/_7a.mp3", id:"_7a"},
		{src:"sounds/highclick.mp3", id:"highclick"},
		{src:"sounds/lowclick.mp3", id:"lowclick"},
		{src:"sounds/parrotmove1.mp3", id:"parrotmove1"},
		{src:"sounds/parrotmove2.mp3", id:"parrotmove2"},
		{src:"sounds/SENameOfPerson.mp3", id:"SENameOfPerson"},
		{src:"sounds/_6b.mp3", id:"_6b"},
		{src:"sounds/_2a.mp3", id:"_2a"}
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
an.compositions['FD572FA8549A6742A29F005073A406FE'] = {
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