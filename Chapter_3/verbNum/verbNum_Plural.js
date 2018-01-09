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


(lib.static_whitebox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.482)").s().p("A/nKhIAA1FMA/QAAEIAAVFg");
	this.shape.setTransform(202.4,67.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,404.9,135.5);


(lib.static_rule3b_example1b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHAHQgDgDAAgEQAAgCADgDQADgDAEAAQAFAAADACQADADAAADQAAAEgDADQgEACgEAAQgEAAgDgCg");
	this.shape.setTransform(141.7,16.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgjAsQAAgEADgCQACgDAEAAIAJACIALABQAIAAAFgHQAFgGABgNQgDAEgFABQgFACgDAAQgOAAgJgJQgIgIAAgNQAAgTALgLQAMgMATAAQAGAAAFABQAEACADADQAJABAAAJIgBANQgDAQAAARQgBAWgHAKQgJANgWAAQgbAAAAgKgAgKgeQgFAHAAALQAAAIADAEQADADAGAAQAEAAAGgFQAFgGACgGIACgVIgEgCIgFgBQgKAAgHAIg");
	this.shape_1.setTransform(134.9,14.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAOAfIgCgOIgBgOIAAgFIAAgGIAAgDIABgDQAAgFgDAAQgGAAgEAHQgGAIgDAKIgBAGIAAAHIgBAFIAAAGQAAAEgDADQgDADgEAAQgDAAgDgDQgDgDAAgEIgBgFIAAgGIABgTIABgSIAAgGIgBgGQAAgEAEgCQACgDAEAAQAJAAAAALIABABQAKgKAKAAQANAAAFAKQADAIAAAOIAAAFIAAADIABAOIACAOQAAAEgDACQgDADgEAAQgIAAgBgJg");
	this.shape_2.setTransform(127.7,13);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgIAyQgDgDAAgEIAAgMIAAgNIAAgPIACgOQAAgEACgDQADgCAEAAQADAAACACQADADAAAEIAAAOIgBAPIAAANIABAMQgBAEgDADQgCACgDAAQgEAAgDgCgAgGgiQgCgDAAgEQAAgEACgDQADgDAEAAQAEAAAEADQADADAAAEQAAAEgDADQgEADgEAAQgEAAgDgDg");
	this.shape_3.setTransform(122.2,11.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgSAkQgLgEAAgHQAAgIAIABIAKABQAFACAEAAQANABAAgGQAAgEgKgDIgRgJQgKgHAAgJQAAgOAPgFQAIgCARAAQAHAAADACQAEACAAAGQAAAMgGAAQgHABgBgGIgGAAQgPgBAAAFQAAADAJAEQANAGAFADQAKAHAAAJQAAALgLAHQgJAEgMAAQgJABgHgDg");
	this.shape_4.setTransform(116.5,13);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgIAyQgCgDAAgEIAAgMIgBgNIABgPIABgOQAAgEACgDQADgCAEAAQADAAACACQADADAAAEIAAAOIgBAPIAAANIABAMQAAAEgEADQgCACgDAAQgEAAgDgCgAgGgiQgCgDAAgEQAAgEACgDQADgDAEAAQAFAAADADQADADAAAEQAAAEgDADQgDADgFAAQgEAAgDgDg");
	this.shape_5.setTransform(111.5,11.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgaAkQgCgDAAgEIAAgrIAAgHIAAgGQAAgEADgCQACgDAEAAQAIAAABAIQALgJAPAAQAOAAgBASIAAAEQgBALgIAAQgJAAAAgJIAAgHQgPADgGANIAAAhQAAAEgDADQgCACgEAAQgFAAgCgCg");
	this.shape_6.setTransform(106.1,13.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgcA3QgCgDAAgEIAAgZIAAgaIgBgaIgBgNQAAgGACgEQAEgEAFAAQADAAADACQACADABADIAAABIAJgEQADgBAFAAQAQAAAGANQAGAKAAAQQAAAOgJAKQgJALgPAAIgLgCIAAAcQgBAEgCADQgCACgFAAQgEAAgDgCgAgDggQgEACgFAEIABAcQAGACAFAAQAHAAAEgEQADgFAAgIIAAgMQgCgJgHAAQgEAAgEACg");
	this.shape_7.setTransform(98.9,14.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgaAkQgCgDgBgEIAAgrIABgHIAAgGQAAgEADgCQABgDAFAAQAHAAACAIQALgJAOAAQAOAAABASIAAAEQgBALgJAAQgJAAAAgJIAAgHQgPADgGANIAAAhQAAAEgDADQgCACgFAAQgEAAgCgCg");
	this.shape_8.setTransform(91.8,13.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAOAiQgJADgIAAQgKAAgHgEQgHgEgBgKQgDgRAAgMQAAgJACgLQABgIAIAAQAEAAADACQADADAAAEIgBAJIgBAKIAAAQIACALIAEABIADABQAGAAAJgCIAAgMIAAgLQAAgOACgKQABgIAIAAQAEAAADACQADADgBAEIgBAYIAAANIAAANIABAFIAAAEQAAAEgDACQgDADgEAAQgGAAgCgFg");
	this.shape_9.setTransform(84.6,13.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgSAkQgLgEAAgHQAAgIAIABIAKABQAFACAEAAQANABAAgGQAAgEgKgDIgRgJQgKgHAAgJQAAgOAPgFQAIgCARAAQAHAAADACQAEACAAAGQAAAMgGAAQgHABgBgGIgGAAQgPgBAAAFQAAADAJAEQANAGAFADQAKAHAAAJQAAALgLAHQgJAEgMAAQgJABgHgDg");
	this.shape_10.setTransform(77.5,13);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgSAkQgLgEAAgHQAAgIAIABIAKABQAFACAEAAQANABAAgGQAAgEgKgDIgRgJQgKgHAAgJQAAgOAPgFQAIgCARAAQAHAAADACQAEACAAAGQAAAMgGAAQgHABgBgGIgGAAQgPgBAAAFQAAADAJAEQANAGAFADQAKAHAAAJQAAALgLAHQgJAEgMAAQgJABgHgDg");
	this.shape_11.setTransform(64.7,13);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AAQAfIgLAFIgHACQgQAAgJgJQgHgJgBgSQAAgPANgMQAMgMAPAAQAHAAAJAEQAKAEAAAGQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAIgBAHIgBAKQAAAMACAFIADAIIACAGQAAAEgCACQgDADgEAAQgCAAgIgHgAgJgNQgHAHABAJQAAAJADAFQADAEAGAAIAIgBIAHgEIgDgYIABgFIABgGIgDgBIgCAAQgIAAgHAHg");
	this.shape_12.setTransform(57.5,13.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AACAWIgDgXIgCADIgKAbIgDAEQgDAFgFAAQgEAAgEgGQgDgGgDgJIgGgkIgBgKQAAgDADgDQADgCAEAAQAHAAACAHIABAJIABAKIADAQIAMghQADgJAGAAQAIAAACAKIADASIAEASIALgoQABgGAIAAQADAAAEACQACADAAAEIAAACIgPAvQgCAGgEAHQgEAEgFAAQgJAAgFgQg");
	this.shape_13.setTransform(48.8,13.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAQAyQgCgFgBgKIgBgQIAAgFIAAgGIAAgFQgBgDgDAAQgHAAgFAGIgJANQAAAZgCAFQgDAFgGAAQgEAAgDgCQgDgDAAgDIABgEIABgTIAAgsIAAgDIABgKIgBgHIgBgGQAAgEADgCQADgDAEAAQAHAAACAHIABANIAAAOIAAANQAFgFAFgCQAFgDAGAAQAMAAAFAHQAEAFABAJIABARIABANIACAOIABACQAAAEgDADQgDACgEAAQgHAAgCgHg");
	this.shape_14.setTransform(34,11.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgVAeQgKgJAAgPQAAgMAJgPQALgRAOAAQAHABAJADQAMAFAAAGQAAAEgCACQgDADgEAAQgDAAgEgEQgEgDgIAAQgEAAgHAKQgGAKAAAHQAAAHAGAEQAFAEAHAAQAEAAAHgEIAIgDQAEAAADADQACACAAAEQAAAGgLAEQgLAGgGAAQgOAAgLgJg");
	this.shape_15.setTransform(26.1,13.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AARAfIgMAFIgGACQgRAAgIgJQgJgJABgSQgBgPAMgMQAMgMAQAAQAHAAAIAEQALAEAAAGQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAIAAAHIgBAKQAAAMACAFIADAIIADAGQgBAEgCACQgDADgDAAQgDAAgHgHgAgJgNQgGAHAAAJQgBAJADAFQAEAEAGAAIAHgBIAHgEIgBgYIAAgFIAAgGIgBgBIgCAAQgJAAgHAHg");
	this.shape_16.setTransform(18.8,13.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgXAeQgLgJAAgQQAAgQAJgMQALgNAPAAQANAAAHAEQAKAFAAAKQAAAIgHAGIgQAGIgWALQADADAFACQAFACAEAAQAJAAAHgEQAFgDAEAAQAHAAAAAHQAAAHgLAFQgKAEgLAAQgPAAgLgHgAgIgPQgFAEgDAIIAQgGQAIgEAFgEQgEgDgIAAQgFAAgEAFg");
	this.shape_17.setTransform(10.8,13);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgTA0QgDACgDAAQgEAAgDgCQgCgDAAgDIAAgFIAAgFIAAhNQAAgFACgEQADgEAFAAQAIAAAAAIIgBACIAAADIAAAaIAKgEIAIgBQAQAAAKALQAIAKABAQQAAAQgLALQgLALgPAAQgJAAgJgDgAgGgBIgLAFIAAAeQAJAEAHAAQAIAAAFgGQAGgGAAgJQAAgJgFgGQgFgFgHAAQgDAAgEACg");
	this.shape_18.setTransform(2.8,11.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgWAeQgMgJAAgQQAAgQAJgMQAKgNAQAAQAMAAAJAEQAJAFABAKQgBAIgHAGIgQAGIgWALQADADAFACQAEACAGAAQAIAAAHgEQAFgDAEAAQAHAAAAAHQAAAHgLAFQgKAEgKAAQgQAAgKgHgAgJgPQgEAEgDAIIAQgGQAIgEAGgEQgFgDgIAAQgFAAgFAFg");
	this.shape_19.setTransform(-11.4,13);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAQAyQgCgFgBgKIgBgQIAAgFIAAgGIAAgFQgBgDgDAAQgHAAgFAGIgJANQAAAZgCAFQgDAFgGAAQgEAAgDgCQgDgDAAgDIABgEIABgTIAAgsIAAgDIABgKIgBgHIgBgGQAAgEADgCQADgDAEAAQAHAAACAHIABANIAAAOIAAANQAFgFAFgCQAFgDAGAAQAMAAAFAHQAEAFABAJIABARIABANIACAOIABACQAAAEgDADQgDACgEAAQgHAAgCgHg");
	this.shape_20.setTransform(-19.2,11.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgFAvQgDgCAAgEIAAgHIAAgHIgBgjIgMgBQgKgBABgIQAAgDACgDQADgDAEAAIALABIAAgHIAAgHQAAgEADgDQACgCAEAAQAJAAAAARIAAAGIAHgBQAJAAACABQAFACABAHQgBAEgCACQgCADgFAAIgDAAIgEAAIgGAAIABAjIABADIAAAEQAAAQgLAAQgDAAgCgDg");
	this.shape_21.setTransform(-26.6,11.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAOAfIgCgOIgBgOIABgFIAAgGIAAgDIAAgDQAAgFgDAAQgGAAgFAHQgFAIgDAKIgBAGIAAAHIgBAFIAAAGQAAAEgDADQgDADgEAAQgEAAgDgDQgCgDAAgEIAAgFIgBgGIABgTIABgSIAAgGIgBgGQAAgEADgCQADgDAEAAQAJAAAAALIABABQAKgKAKAAQANAAAEAKQAEAIAAAOIAAAFIAAADIABAOIACAOQAAAEgDACQgDADgEAAQgIAAgBgJg");
	this.shape_22.setTransform(-39.6,13);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgVAdQgKgJgBgRQAAgOAIgMQALgOARABQAOgBAIALQAHALAAAOQAAAPgIALQgKAMgPAAQgMAAgJgIgAgJgKQgEAGAAAHQAAAJAFAEQADAEAFgBQAFAAAFgDQAFgFAAgJQABgUgNAAQgHgBgFAJg");
	this.shape_23.setTransform(-47.1,13.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgSAkQgLgEAAgHQAAgIAIABIAKABQAFACAEAAQANABAAgGQAAgEgKgDIgRgJQgKgHAAgJQAAgOAPgFQAIgCARAAQAHAAADACQAEACAAAGQAAAMgGAAQgHABgBgGIgGAAQgPgBAAAFQAAADAJAEQANAGAFADQAKAHAAAJQAAALgLAHQgJAEgMAAQgJABgHgDg");
	this.shape_24.setTransform(-60.2,13);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgGA2QgDgDAAgEIAAheQAAgEADgCQAEgCACAAQAFAAACACQADACgBAEIAABaQAAANgJAAQgDAAgDgCg");
	this.shape_25.setTransform(-65.5,11.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AARAfIgMAFIgGACQgRAAgIgJQgJgJABgSQgBgPAMgMQAMgMAQAAQAHAAAIAEQALAEAAAGQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAIgBAHIAAAKQAAAMACAFIADAIIADAGQgBAEgCACQgDADgDAAQgDAAgHgHgAgJgNQgGAHgBAJQAAAJADAFQAEAEAGAAIAHgBIAHgEIgBgYIAAgFIAAgGIgBgBIgCAAQgJAAgHAHg");
	this.shape_26.setTransform(-71.2,13.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgXAeQgLgJAAgQQAAgQAJgMQALgNAPAAQANAAAHAEQAKAFAAAKQAAAIgHAGIgQAGIgWALQADADAFACQAFACAEAAQAJAAAHgEQAFgDAEAAQAHAAAAAHQAAAHgLAFQgKAEgLAAQgPAAgLgHgAgIgPQgFAEgDAIIAQgGQAIgEAFgEQgEgDgIAAQgFAAgEAFg");
	this.shape_27.setTransform(-79.2,13);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgSAkQgLgEAAgHQAAgIAIABIAKABQAFACAEAAQANABAAgGQAAgEgKgDIgRgJQgKgHAAgJQAAgOAPgFQAIgCARAAQAHAAADACQAEACAAAGQAAAMgGAAQgHABgBgGIgGAAQgPgBAAAFQAAADAJAEQANAGAFADQAKAHAAAJQAAALgLAHQgJAEgMAAQgJABgHgDg");
	this.shape_28.setTransform(-86.5,13);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgMA6QgDgDAAgDIAAgCIACgTIAAghIgFABIgEAAQgEAAgDgCQgCgDAAgEQAAgGAGgCIAMgBIABgIQACgPAGgIQAHgJARAAQAMAAAAAJQAAAJgLAAQgJAAgDAGQgDAEgBAJIAAACIANgBQANAAAAAJQAAAJgOAAIgNAAIAAASIAAASQAAANgBAHQgCAHgHAAQgDAAgDgCg");
	this.shape_29.setTransform(-99.5,11.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgVAdQgKgJgBgRQAAgOAIgMQALgOARABQAOgBAIALQAHALAAAOQAAAPgIALQgKAMgPAAQgMAAgJgIgAgJgKQgEAGAAAHQAAAJAFAEQADAEAFgBQAFAAAFgDQAFgFAAgJQABgUgNAAQgHgBgFAJg");
	this.shape_30.setTransform(-106.8,13.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgaAkQgDgDABgEIAAgrIAAgHIAAgGQAAgEACgCQACgDAFAAQAIAAABAIQALgJAPAAQANAAAAASIAAAEQgBALgIAAQgJAAAAgJIAAgHQgOADgHANIAAAhQAAAEgDADQgCACgEAAQgFAAgCgCg");
	this.shape_31.setTransform(-119.6,13.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgWAeQgMgJAAgQQAAgQAJgMQALgNAPAAQAMAAAJAEQAJAFABAKQgBAIgHAGIgQAGIgWALQADADAFACQAEACAGAAQAIAAAHgEQAGgDADAAQAHAAAAAHQAAAHgLAFQgKAEgKAAQgQAAgKgHgAgJgPQgEAEgDAIIAQgGQAIgEAGgEQgFgDgIAAQgFAAgFAFg");
	this.shape_32.setTransform(-127.2,13);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgTA0QgDACgDAAQgEAAgDgCQgCgDAAgDIAAgFIAAgFIAAhNQAAgFACgEQADgEAFAAQAHAAABAIIgBACIAAADIAAAaIAKgEIAIgBQAPAAALALQAIAKABAQQAAAQgLALQgLALgPAAQgKAAgIgDgAgHgBIgKAFIAAAeQAJAEAHAAQAHAAAGgGQAGgGAAgJQAAgJgFgGQgFgFgHAAQgDAAgFACg");
	this.shape_33.setTransform(-135.1,11.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgFAoQgDgDAAgEIgBgXIgCgWIgBgHQgIAFgIALIgBABIAAAVIAAAFIAAAFQAAADgDACQgDACgEAAQgGAAgCgFIgBgLIAAgYIgBgKIAAgKQAAgGACgFQADgGAFAAQAEAAADADQADADAAADIgBAGQAKgMAJAAQALAAAEAIQAEgDAFgCQAFgCAGAAQANAAAFANIADATIAFAkQAAAEgDACQgCADgEAAQgIAAgCgIIgCgUIgCgTQgCgMgDAAIgHADIgJAFIACAWIACAWQAAAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape_34.setTransform(-144.6,13.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAOAiQgJADgIAAQgKAAgHgEQgHgEgBgKQgDgRAAgMQAAgJACgLQABgIAIAAQAEAAADACQADADAAAEIgBAJIgBAKIAAAQIACALIAEABIADABQAGAAAJgCIAAgMIAAgLQAAgOACgKQABgIAIAAQAEAAADACQADADgBAEIgBAYIAAANIAAANIABAFIAAAEQAAAEgDACQgDADgEAAQgGAAgCgFg");
	this.shape_35.setTransform(-153.9,13.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAOAfIgCgOIgBgOIABgFIAAgGIAAgDIAAgDQAAgFgDAAQgGAAgFAHQgFAIgDAKIgBAGIAAAHIgBAFIAAAGQAAAEgDADQgDADgEAAQgEAAgDgDQgCgDAAgEIAAgFIgBgGIABgTIABgSIAAgGIgBgGQAAgEADgCQADgDAEAAQAJAAAAALIABABQAKgKAKAAQANAAAEAKQAEAIAAAOIAAAFIAAADIABAOIACAOQAAAEgDACQgDADgEAAQgIAAgBgJg");
	this.shape_36.setTransform(-161.1,13);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgXAeQgLgJAAgQQAAgQAKgMQAKgNAQAAQALAAAIAEQALAFgBAKQABAIgJAGIgPAGIgWALQADADAFACQAFACAEAAQAKAAAGgEQAGgDADAAQAHAAAAAHQAAAHgMAFQgJAEgLAAQgPAAgLgHgAgIgPQgFAEgCAIIAPgGQAIgEAFgEQgEgDgHAAQgGAAgEAFg");
	this.shape_37.setTransform(-174.9,13);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAQAyQgCgFgBgKIgBgQIAAgFIAAgGIAAgFQgBgDgDAAQgHAAgFAGIgJANQAAAZgCAFQgDAFgGAAQgEAAgDgCQgDgDAAgDIABgEIABgTIAAgsIAAgDIABgKIgBgHIgBgGQAAgEADgCQADgDAEAAQAHAAACAHIABANIAAAOIAAANQAFgFAFgCQAFgDAGAAQAMAAAFAHQAEAFABAJIABARIABANIACAOIABACQAAAEgDADQgDACgEAAQgHAAgCgHg");
	this.shape_38.setTransform(-182.7,11.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgFAyQgEgDAAgEIABgDIAAgDIAAgJIgBgKIgBgYIgCgYIgEAAQgPAAgJgDQgIgBAAgIQAAgDADgDQADgDAEAAIALABIALABIANAAIALAAIAQABIAPAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAIgQgBIgRgBIACAcIABAbIABAHIAAAHQAAAFgCAEQgDAFgFAAQgDAAgCgCg");
	this.shape_39.setTransform(-191.7,11.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgJASQAAgDADgDQADgCADAAQALAAAAAPQAAAEgDADQgDACgEAAQgKAAAAgQgAgGgNQgDgDAAgEIAAgCIgBgDQAAgDADgDQADgCAEAAQAJAAAAANQAAAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape_40.setTransform(-138.6,-9.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgXAeQgLgJAAgQQAAgQAJgMQALgNAPAAQANAAAHAEQALAFAAAKQgBAIgHAGIgQAGIgWALQADADAFACQAEACAFAAQAJAAAHgEQAFgDAEAAQAHAAAAAHQAAAHgLAFQgKAEgLAAQgPAAgLgHgAgJgPQgEAEgDAIIAQgGQAIgEAGgEQgFgDgIAAQgFAAgFAFg");
	this.shape_41.setTransform(-145.7,-8.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgFA2QgDgDAAgEIAAheQAAgEADgCQACgCAEAAQAEAAACACQADACAAAEIAABaQAAANgKAAQgDAAgCgCg");
	this.shape_42.setTransform(-151.5,-10.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgcA3QgDgDAAgEIABgZIAAgaIgBgaIgBgNQAAgGACgEQAEgEAEAAQAEAAADACQACADAAADIAAABIAJgEQAEgBAFAAQAPAAAIANQAFAKAAAQQAAAOgJAKQgIALgQAAIgMgCIAAAcQABAEgDADQgDACgEAAQgEAAgDgCgAgDggQgFACgEAEIABAcQAGACAFAAQAHAAAEgEQADgFAAgIIgBgMQgCgJgGAAQgFAAgDACg");
	this.shape_43.setTransform(-157,-6.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgFAoQgDgDAAgEIgBgXIgCgWIgBgHQgIAFgIALIgBABIAAAVIAAAFIAAAFQAAADgDACQgDACgEAAQgGAAgCgFIgBgLIAAgYIgBgKIAAgKQAAgGACgFQADgGAFAAQAEAAADADQADADAAADIgBAGQAKgMAJAAQALAAAEAIQAEgDAFgCQAFgCAGAAQANAAAFANIADATIAFAkQAAAEgDACQgCADgEAAQgIAAgCgIIgCgUIgCgTQgCgMgDAAIgHADIgJAFIACAWIACAWQAAAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape_44.setTransform(-166.2,-8.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AARAfIgMAFIgGACQgRAAgIgJQgJgJABgSQgBgPAMgMQAMgMAQAAQAHAAAIAEQALAEAAAGQAAABAAAAQAAABAAABQgBAAAAAAQAAABgBAAIgBAHIAAAKQAAAMACAFIADAIIADAGQgBAEgCACQgDADgDAAQgDAAgHgHgAgJgNQgGAHgBAJQAAAJADAFQAEAEAGAAIAHgBIAHgEIgBgYIAAgFIAAgGIgBgBIgCAAQgJAAgHAHg");
	this.shape_45.setTransform(-175.6,-8.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AATAkIgTgYIgSAQIgFAFQgDADgEAAQgDAAgDgCQgDgDAAgEQAAgEAGgFIAJgHIAMgMIgHgLIgJgKQgEgDABgDQgBgEADgDQADgCAEAAQAEAAAJAJIAKAOIAMgJQAHgHADgEQADgEAFAAQADAAADACQADADAAADQAAAFgHAHIgKAJIgKAJIAUAZQACADAAACQAAAEgDADQgCACgEAAQgEAAgDgDg");
	this.shape_46.setTransform(-183.7,-8.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgfA0QgHgHAAgWIABgaIABgcIAAgHIgBgHQAAgKAKAAQADAAACABIAPgCIANgBQARAAAKADQAGADAAAGQAAAEgCACQgDAEgEAAIgDgBQgLgDgKAAIgKABIgNACIAAAbIAZgCIARgBQAEAAADACQADADAAAEQAAAHgJABIgQACIgdACIAAAOQAAAOABACIAJAAIAMAAIANAAIAEAAIAEgBQAEAAACACQAEADAAAFQAAAHgIACQgHABgVAAQgWAAgHgGg");
	this.shape_47.setTransform(-192,-10.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-198.6,-22.5,397.3,45.1);


(lib.static_rule3b_example1a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNAMQgHgFAAgHQAAgFAHgGQAGgFAHAAQAJAAAGAFQAGAFAAAGQAAAHgGAFQgGAFgJAAQgHAAgGgFg");
	this.shape.setTransform(267.4,106.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhABRQAAgHADgEQAFgEAIAAIAQACQALACAIAAQARAAAKgMQAIgLACgYQgHAGgIADQgIAEgJAAQgZAAgPgRQgRgQABgZQAAgiAUgWQAXgWAkAAQAMAAAIADQAJADAFAGQAQACAAARQAAAJgDAPQgEAdgCAhQgBApgMASQgRAZgqAAQgwAAAAgUgAgTg5QgKANAAAVQgBAPAGAHQAGAHALAAQAKAAAKgLQAKgMACgLQACgMADgaIgIgEIgIgBQgVAAgMAOg");
	this.shape_1.setTransform(254.9,104.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAaA6IgEgaQgBgOgBgMIABgKIAAgMIABgEIAAgGQAAgLgFAAQgLAAgKAOQgKAOgGAVIgBALIgBAMIgBALIAAALQAAAHgFAFQgFAFgIAAQgIAAgEgFQgGgFAAgHIAAgLIgBgLIACgjIABghIAAgMIAAgLQAAgHAFgFQAFgFAHAAQARAAABAUIAAABQATgSAUAAQAYAAAIAUQAHANAAAbIAAAJIAAAHQAAAKACAQQADAPAAAKQAAAHgFAFQgFAFgHAAQgQAAgCgQg");
	this.shape_2.setTransform(241.4,100.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgPBcQgFgEAAgIIgBgXIAAgYIABgcIABgbQAAgHAFgFQAFgFAIAAQAHAAAFAFQAEAFAAAHIgBAbIgBAcIAAAYIABAXQAAAIgFAEQgFAFgHAAQgHAAgFgFgAgLhAQgGgFAAgIQAAgJAGgEQAGgGAHAAQAIAAAGAGQAGAEAAAJQAAAIgGAFQgGAFgIAAQgHAAgGgFg");
	this.shape_3.setTransform(231.1,97.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgjBCQgTgGAAgPQAAgMAPAAQAGAAALAEQALADAGAAQAZAAAAgLQAAgGgSgHQgZgMgIgEQgSgNAAgSQAAgaAbgIQAQgGAgAAQAMABAHADQAIAEAAAMQAAAXgMAAQgNAAgDgKIgKgCQgeAAAAAJQAAAFASAJQAZALAJAGQASANAAAQQAAAXgUALQgQAJgXAAQgRAAgOgGg");
	this.shape_4.setTransform(220.7,100.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgPBcQgFgEAAgIIgBgXIAAgYIABgcIABgbQAAgHAFgFQAFgFAIAAQAHAAAFAFQAEAFAAAHIgBAbIgBAcIAAAYIABAXQAAAIgFAEQgFAFgHAAQgHAAgFgFgAgLhAQgGgFAAgIQAAgJAGgEQAGgGAHAAQAIAAAGAGQAGAEAAAJQAAAIgGAFQgGAFgIAAQgHAAgGgFg");
	this.shape_5.setTransform(211.2,97.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgyBCQgEgEABgIIAAhSIAAgLIAAgMQAAgHAFgFQADgFAJAAQAOAAACAPQAWgRAbAAQAaAAgBAiIAAAIQgBAUgRAAQgQAAAAgRIAAgNQgbAFgNAZIABA+QAAAIgGAFQgEAEgIAAQgIAAgFgFg");
	this.shape_6.setTransform(201.2,100.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag0BmQgFgFAAgIIAAgvIAAgxQAAgbgCgUIgBgZQAAgLAEgHQAFgJAKAAQAHAAAFAFQAEAFAAAHIAAABQAJgFAJgCQAHgDAJAAQAdAAAOAZQAJATABAdQAAAbgQATQgRATgdAAQgKAAgMgCIAAAzQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgHg8QgIAEgIAHQABAaAAAaQAMADAKAAQANAAAHgIQAGgIABgPQgBgRgBgGQgDgQgNAAQgIAAgIAEg");
	this.shape_7.setTransform(188,103.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgyBCQgDgEAAgIIAAhSIAAgLIAAgMQAAgHAEgFQAFgFAIAAQAOAAACAPQAWgRAbAAQAZAAABAiIAAAIQgCAUgQAAQgQAAgBgRIAAgNQgcAFgMAZIAAA+QAAAIgEAFQgFAEgIAAQgIAAgFgFg");
	this.shape_8.setTransform(174.8,100.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAZA/QgQAGgQAAQgSAAgNgIQgNgIgDgRQgFggAAgYQAAgQAEgVQACgOAPAAQAHAAAFAEQAGAFAAAHIgCARIgCASIABAeQABAOADAIIAGADIAGAAQANAAARgEIAAgWIgBgUQAAgaADgTQACgPAPAAQAIAAAFAEQAFAFAAAHIgDAtIABAZIAAAZIAAAIIABAIQAAAHgGAFQgFAEgHAAQgLAAgFgJg");
	this.shape_9.setTransform(161.5,100.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgjBCQgTgGAAgPQAAgMAPAAQAGAAALAEQALADAGAAQAZAAAAgLQAAgGgSgHQgZgMgIgEQgSgNAAgSQAAgaAbgIQAQgGAgAAQAMABAHADQAIAEAAAMQAAAXgMAAQgNAAgDgKIgKgCQgeAAAAAJQAAAFASAJQAZALAJAGQASANAAAQQAAAXgUALQgQAJgXAAQgRAAgOgGg");
	this.shape_10.setTransform(148.3,100.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgjBCQgTgGAAgPQAAgMAPAAQAGAAALAEQALADAGAAQAZAAAAgLQAAgGgSgHQgZgMgIgEQgSgNAAgSQAAgaAbgIQAQgGAgAAQAMABAHADQAIAEAAAMQAAAXgMAAQgNAAgDgKIgKgCQgeAAAAAJQAAAFASAJQAZALAJAGQASANAAAQQAAAXgUALQgQAJgXAAQgRAAgOgGg");
	this.shape_11.setTransform(124.4,100.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AAfA6QgMAGgJADQgJADgFAAQgfAAgPgRQgPgQAAghQAAgdAWgWQAXgWAfAAQAMAAAPAHQAUAIAAALQAAAFgDADIgCANIgBARQAAAXADALIAGANIAFAMQAAAHgFAEQgFAFgHAAQgGAAgMgMgAgRgZQgNAOAAAQQAAARAGAJQAGAJAMAAQAHAAAHgDQAHgDAHgFQgEgdAAgPIAAgJIACgMIgEgCIgEAAQgQAAgNANg");
	this.shape_12.setTransform(111.1,100.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AAEAoQgDgLgEgfIgDAGQgHAQgMAhQgCAFgEAEQgFAIgLAAQgGABgGgLQgHgLgFgSQgEgPgIg0IgCgSQAAgHAGgFQAFgEAHAAQAOAAADANIADASIACARIAFAgIAVg/QAGgRANAAQAOAAAFATIAGAhIAHAjIAUhMQACgLANAAQAIAAAFAFQAGAEAAAHIgBAEQgNAygOAnQgEAMgIAMQgGAIgKAAQgQAAgKgfg");
	this.shape_13.setTransform(95,101.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAeBdQgEgKgCgTQgCgSAAgLIAAgKIAAgKIAAgLQgBgGgGAAQgOAAgKAMQgGAHgKASQAAAugFAJQgEALgLAAQgHAAgGgFQgFgFAAgHIABgGQABgDABggQgBgZABg7IAAgEIABgUIgBgLIgCgMQAAgHAGgFQAFgFAHAAQANAAAEAOQACAHAAAQIAAAaIgBAZQAJgKALgEQAJgFAMAAQAWAAAKANQAHAJABASIACAfIACAZIAFAZIAAAEQAAAHgFAFQgGAFgHAAQgNAAgDgNg");
	this.shape_14.setTransform(67.5,97.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgnA4QgUgRAAgbQAAgZASgbQAUgeAaAAQAOAAARAGQAWAJgBAMQAAAGgEAFQgEAFgIAAQgFAAgHgFQgJgHgPAAQgJABgLASQgLATAAANQAAANAKAHQAJAIAOAAQAJgBAMgGQAMgHAEAAQAGABAFAEQAFAFAAAHQAAAKgVAJQgUAJgMAAQgbAAgTgPg");
	this.shape_15.setTransform(52.9,100.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAfA6QgMAGgJADQgJADgFAAQgfAAgPgRQgPgQAAghQAAgdAWgWQAXgWAfAAQAMAAAPAHQAUAIAAALQAAAFgDADIgCANIgBARQAAAXADALIAGANIAFAMQAAAHgFAEQgFAFgHAAQgGAAgMgMgAgRgZQgNAOAAAQQAAARAGAJQAGAJAMAAQAHAAAHgDQAHgDAHgFQgEgdAAgPIAAgJIACgMIgEgCIgEAAQgQAAgNANg");
	this.shape_16.setTransform(39.3,100.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgqA3QgWgQAAgdQAAggARgWQATgYAfAAQAVAAAPAHQATAJAAAUQAAAOgPALQgIAFgVAIIgpATQAFAHAJADQAJADAKAAQARAAAMgHQALgGAFAAQAOAAAAANQAAAOgVAJQgSAIgUAAQgeAAgSgOgAgQgeQgJAIgFAQIAcgNQARgHAJgHQgIgFgNAAQgMAAgHAIg");
	this.shape_17.setTransform(24.5,100.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AglBgQgEAFgIAAQgGAAgFgFQgFgEAAgHIABgJIAAgKIAAiOQgBgKAFgHQAFgJAJAAQAOAAAAAPIgBAFIAAAGIAAAwQAJgFAJgDQAIgCAIAAQAdAAATAVQARAUAAAdQAAAdgUAVQgUAVgdAAQgSAAgQgHgAgOgCQgIADgLAIIAAA1QARAIANAAQAPAAAKgLQAKgLAAgQQABgRgJgLQgJgKgOAAQgGAAgJAEg");
	this.shape_18.setTransform(9.8,97.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgqA3QgWgQAAgdQAAggARgWQASgYAgAAQAVAAAPAHQAUAJAAAUQAAAOgQALQgIAFgVAIIgqATQAHAHAIADQAJADAKAAQARAAAMgHQALgGAFAAQAOAAAAANQAAAOgWAJQgRAIgUAAQgeAAgSgOgAgRgeQgIAIgFAQIAcgNQAQgHAKgHQgIgFgNAAQgLAAgJAIg");
	this.shape_19.setTransform(345.5,62.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAeBdQgEgKgCgTQgCgSAAgLIAAgKIAAgKIAAgLQgBgGgGAAQgOAAgKAMQgGAHgKASQAAAugFAJQgEALgLAAQgHAAgGgFQgFgFAAgHIABgGQABgDABggQgBgZABg7IAAgEIABgUIgBgLIgCgMQAAgHAGgFQAFgFAHAAQANAAAEAOQACAHAAAQIAAAaIgBAZQAJgKALgEQAJgFAMAAQAWAAAKANQAHAJABASIACAfIACAZIAFAZIAAAEQAAAHgFAFQgGAFgHAAQgNAAgDgNg");
	this.shape_20.setTransform(331.2,59.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgKBZQgGgFAAgHIAAgOIAAgNIgChBIgYgCQgPgCAAgPQAAgHAEgFQAFgFAIAAIAWACIgBgOIAAgMQAAgHAEgFQAGgFAHAAQASAAAAAgIAAAKIAMgBQAPAAAFACQALAEAAAMQgBAHgFAFQgEAFgIAAIgGgBIgHAAIgLABIABBCIABAGIAAAIQAAAdgTAAQgFAAgFgEg");
	this.shape_21.setTransform(317.3,60.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAaA6IgEgaQgCgOAAgMIABgKIAAgMIABgEIAAgGQAAgLgFAAQgLAAgKAOQgKAOgFAVIgCALIgBAMIgBALIAAALQAAAHgFAFQgFAFgIAAQgIAAgEgFQgGgFAAgHIAAgLIgBgLIACgjIABghIAAgMIAAgLQAAgHAFgFQAFgFAHAAQARAAABAUIAAABQATgSAUAAQAXAAAJAUQAHANAAAbIAAAJIgBAHQAAAKADAQQADAPAAAKQAAAHgFAFQgFAFgHAAQgQAAgCgQg");
	this.shape_22.setTransform(293.3,62.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgpA1QgSgRgBgdQgBgcAQgWQATgaAiAAQAZAAAPAVQAOASAAAbQAAAcgQAVQgSAYgcAAQgYgBgRgQgAgSgVQgHAMAAAQQAAAPAJAHQAGAHAKAAQAKAAAIgIQAJgIABgPQABgogXAAIgBAAQgOAAgJAOg");
	this.shape_23.setTransform(279.3,62.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgjBCQgTgGAAgPQAAgMAPAAQAGAAALAEQALADAGAAQAZAAAAgLQAAgGgSgHQgZgMgIgEQgSgNAAgSQAAgaAbgIQAQgGAgAAQAMABAHADQAIAEAAAMQAAAXgMAAQgNAAgDgKIgKgCQgeAAAAAJQAAAFASAJQAZALAJAGQASANAAAQQAAAXgUALQgQAJgXAAQgRAAgOgGg");
	this.shape_24.setTransform(254.9,62.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgMBkQgEgFAAgIIAAiuQAAgHAFgFQAFgFAHAAQAHAAAEAFQAGAFAAAHIAACoQAAAYgSAAQgGAAgGgFg");
	this.shape_25.setTransform(245.1,59);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAfA6QgMAGgJADQgJADgFAAQgfAAgPgRQgPgQAAghQAAgdAWgWQAXgWAfAAQAMAAAPAHQAUAIAAALQAAAFgDADIgCANIgBARQAAAXADALIAGANIAFAMQAAAHgFAEQgFAFgHAAQgGAAgMgMgAgRgZQgNAOAAAQQAAARAGAJQAGAJAMAAQAHAAAHgDQAHgDAHgFQgEgdAAgPIAAgJIACgMIgEgCIgEAAQgQAAgNANg");
	this.shape_26.setTransform(234.5,62.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgrA3QgVgQAAgdQAAggARgWQATgYAeAAQAXAAAOAHQATAJABAUQAAAOgQALQgHAFgWAIIgqATQAGAHAJADQAJADAKAAQARAAAMgHQAKgGAHAAQANAAAAANQAAAOgWAJQgRAIgUAAQgdAAgUgOgAgRgeQgIAIgFAQIAdgNQAPgHALgHQgJgFgOAAQgKAAgJAIg");
	this.shape_27.setTransform(219.8,62.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgjBCQgTgGAAgPQAAgMAPAAQAGAAALAEQALADAGAAQAZAAAAgLQAAgGgSgHQgZgMgIgEQgSgNAAgSQAAgaAbgIQAQgGAgAAQAMABAHADQAIAEAAAMQAAAXgMAAQgNAAgDgKIgKgCQgeAAAAAJQAAAFASAJQAZALAJAGQASANAAAQQAAAXgUALQgQAJgXAAQgRAAgOgGg");
	this.shape_28.setTransform(206.2,62.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgXBrQgFgFgBgHIAAgDQAEgSAAgQIAAg+IgJABIgHAAQgIAAgFgEQgFgFAAgHQAAgMAMgEQAGgBARgBIABgOQAEgdAMgNQAOgSAeAAQAXAAAAARQAAAQgWAAQgPAAgHALQgFAIgCARIAAAEIAYgCQAYAAAAARQAAAQgaAAQgHgBgQACIgBAhIABAiQgBAXgDAOQgCAOgNAAQgHAAgFgFg");
	this.shape_29.setTransform(182,59.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgpA1QgSgRgBgdQgBgcAQgWQATgaAiAAQAZAAAPAVQAOASAAAbQAAAcgQAVQgSAYgcAAQgYgBgRgQgAgSgVQgHAMAAAQQAAAPAJAHQAGAHAKAAQAKAAAIgIQAJgIABgPQABgogXAAIgBAAQgOAAgJAOg");
	this.shape_30.setTransform(168.6,62.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgyBCQgDgEAAgIIAAhSIAAgLIAAgMQAAgHAEgFQAFgFAIAAQAOAAACAPQAWgRAbAAQAZAAABAiIAAAIQgCAUgQAAQgQAAgBgRIAAgNQgcAFgMAZIAAA+QAAAIgEAFQgFAEgIAAQgIAAgFgFg");
	this.shape_31.setTransform(144.7,62.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgqA3QgWgQAAgdQAAggARgWQATgYAeAAQAWAAAPAHQATAJAAAUQAAAOgPALQgIAFgVAIIgpATQAFAHAJADQAJADAKAAQARAAAMgHQALgGAFAAQAOAAAAANQAAAOgVAJQgSAIgUAAQgdAAgTgOgAgQgeQgJAIgFAQIAcgNQARgHAJgHQgIgFgOAAQgLAAgHAIg");
	this.shape_32.setTransform(130.7,62.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AglBgQgEAFgIAAQgGAAgFgFQgFgEAAgHIABgJIAAgKIAAiOQgBgKAFgHQAFgJAJAAQAOAAAAAPIgBAFIAAAGIAAAwQAJgFAJgDQAIgCAIAAQAdAAATAVQARAUAAAdQAAAdgUAVQgUAVgdAAQgSAAgQgHgAgOgCQgIADgLAIIAAA1QARAIANAAQAPAAAKgLQAKgLAAgQQABgRgJgLQgJgKgOAAQgGAAgJAEg");
	this.shape_33.setTransform(116,59.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgKBKQgFgFAAgHQAAgPgDgcQgDgbAAgPQAAgIgCgFQgPAJgOAUIgDACIAAAoIAAAJIgBAJQAAAHgFAEQgFAEgIAAQgLAAgDgKQgDgGAAgOIAAguIgBgTIAAgSQAAgMAEgJQAFgLAJAAQAHAAAGAFQAFAGAAAGIgBALQATgWARAAQAUAAAIAPQAIgHAJgDQAKgEALAAQAYAAAJAZQACAFAEAdQADAUAGAwQAAAHgFAFQgGAFgHAAQgOAAgDgPIgFglIgEgkQgDgXgGAAQgDAAgKAGIgPAKQAAAPADAaQAEAcAAAOQAAAHgFAFQgFAEgIAAQgGAAgFgEg");
	this.shape_34.setTransform(98.4,62.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAZA/QgQAGgQAAQgSAAgNgIQgNgIgDgRQgFggAAgYQAAgQAEgVQACgOAPAAQAHAAAFAEQAGAFAAAHIgCARIgCASIABAeQABAOADAIIAGADIAGAAQANAAARgEIAAgWIgBgUQAAgaADgTQACgPAPAAQAIAAAFAEQAFAFAAAHIgDAtIABAZIAAAZIAAAIIABAIQAAAHgGAFQgFAEgHAAQgLAAgFgJg");
	this.shape_35.setTransform(81.2,62.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAaA6IgDgaQgCgOAAgMIAAgKIABgMIAAgEIAAgGQAAgLgFAAQgLAAgJAOQgLAOgGAVIgBALIAAAMIgBALIgBALQAAAHgFAFQgFAFgIAAQgHAAgGgFQgEgFAAgHIgBgLIgBgLIACgjIABghIAAgMIAAgLQAAgHAFgFQAFgFAIAAQAQAAACAUIAAABQASgSATAAQAYAAAKAUQAGANAAAbIAAAJIAAAHQAAAKADAQQACAPAAAKQAAAHgFAFQgFAFgIAAQgPAAgCgQg");
	this.shape_36.setTransform(67.9,62.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgqA3QgWgQAAgdQAAggARgWQASgYAgAAQAVAAAPAHQAUAJAAAUQAAAOgQALQgIAFgVAIIgqATQAHAHAIADQAJADAKAAQARAAAMgHQALgGAFAAQAOAAAAANQAAAOgWAJQgRAIgUAAQgeAAgSgOgAgRgeQgIAIgFAQIAcgNQAQgHAKgHQgIgFgNAAQgLAAgJAIg");
	this.shape_37.setTransform(42.2,62.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAeBdQgEgKgCgTQgCgSAAgLIAAgKIAAgKIAAgLQgBgGgGAAQgOAAgKAMQgGAHgKASQAAAugFAJQgEALgLAAQgHAAgGgFQgFgFAAgHIABgGQABgDABggQgBgZABg7IAAgEIABgUIgBgLIgCgMQAAgHAGgFQAFgFAHAAQANAAAEAOQACAHAAAQIAAAaIgBAZQAJgKALgEQAJgFAMAAQAWAAAKANQAHAJABASIACAfIACAZIAFAZIAAAEQAAAHgFAFQgGAFgHAAQgNAAgDgNg");
	this.shape_38.setTransform(27.9,59.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgLBcQgHgFABgHIAAgFIABgGIgBgSIgBgRQAAgRgCgdIgEguIgHAAQgcAAgRgEQgOgDABgNQAAgHAEgFQAFgGAJAAIAUADIAUABIAXAAIAXgBIAdACIAcABQAIAAAFAFQAGAFAAAHQAAAIgGAFQgFAFgIAAIgegCIgfgBIAEAzQACAgAAATIABANIABANQgBAJgDAIQgGAKgJAAQgGAAgFgFg");
	this.shape_39.setTransform(11.2,59.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgRAiQAAgHAFgFQAGgEAGAAQAUAAAAAdQAAAHgGAFQgFAFgIAAQgSAAAAgegAgNgaQgFgEAAgIIAAgEIgBgFQAAgGAGgFQAFgFAHAAQASAAAAAZQAAAIgFAEQgFAFgHAAQgHAAgGgFg");
	this.shape_40.setTransform(109.6,22.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgrA3QgVgQAAgdQAAggARgWQATgYAeAAQAXAAAOAHQATAJABAUQgBAOgPALQgHAFgWAIIgpATQAFAHAJADQAJADAKAAQARAAAMgHQAKgGAHAAQANAAAAANQAAAOgVAJQgSAIgUAAQgdAAgUgOgAgRgeQgIAIgFAQIAdgNQAPgHALgHQgJgFgOAAQgLAAgIAIg");
	this.shape_41.setTransform(96.4,24.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgMBkQgEgFAAgIIAAiuQgBgHAGgFQAFgFAHAAQAHAAAEAFQAFAFABAHIAACoQgBAYgRAAQgGAAgGgFg");
	this.shape_42.setTransform(85.6,20.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("Ag0BmQgFgFAAgIIAAgvIAAgxQAAgbgBgUIgDgZQAAgLAFgHQAFgJAKAAQAHAAAFAFQAFAFgBAHIAAABQAJgFAIgCQAIgDAJAAQAdAAANAZQALATgBAdQABAbgRATQgQATgdAAQgKAAgMgCIAAAzQAAAIgFAFQgFAFgHAAQgIAAgFgFgAgHg8QgHAEgJAHQABAaABAaQALADAKAAQANAAAHgIQAGgIAAgPQABgRgCgGQgEgQgMAAQgIAAgIAEg");
	this.shape_43.setTransform(75.4,27.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgKBKQgFgFAAgHQAAgPgDgcQgDgbAAgPQAAgIgCgFQgPAJgOAUIgDACIAAAoIAAAJIgBAJQAAAHgFAEQgFAEgIAAQgLAAgDgKQgDgGAAgOIAAguIgBgTIAAgSQAAgMAEgJQAFgLAJAAQAHAAAGAFQAFAGAAAGIgBALQATgWARAAQAUAAAIAPQAIgHAJgDQAKgEALAAQAYAAAJAZQACAFAEAdQADAUAGAwQAAAHgFAFQgGAFgHAAQgOAAgDgPIgFglIgEgkQgDgXgGAAQgDAAgKAGIgPAKQAAAPADAaQAEAcAAAOQAAAHgFAFQgFAEgIAAQgGAAgFgEg");
	this.shape_44.setTransform(58.4,24.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAfA6QgMAGgJADQgJADgFAAQgfAAgPgRQgPgQAAghQAAgdAWgWQAXgWAfAAQAMAAAPAHQAUAIAAALQAAAFgDADIgCANIgBARQAAAXADALIAGANIAFAMQAAAHgFAEQgFAFgHAAQgGAAgMgMgAgRgZQgNAOAAAQQAAARAGAJQAGAJAMAAQAHAAAHgDQAHgDAHgFQgEgdAAgPIAAgJIACgMIgEgCIgEAAQgQAAgNANg");
	this.shape_45.setTransform(40.9,24.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAkBDQgMgNgZggIggAeIgKAKQgGAFgHABQgHgBgFgFQgFgEAAgHQAAgHAKgKIARgOIAYgXIgOgUQgJgMgIgGQgGgGAAgGQAAgHAFgFQAFgFAHAAQAJAAAQASIATAaIAWgSQANgMAGgIQAFgIAJAAQAHAAAFAFQAFAFAAAHQAAAHgNANIgSARIgUASIAnAuQAEAGAAAEQAAAHgFAFQgGAFgGAAQgIAAgFgGg");
	this.shape_46.setTransform(25.9,23.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("Ag6BhQgOgMAAgpQAAgRACghQADgiAAgRIgCgNIgBgOQAAgTASAAQAFAAAFADIAcgFQANgCALAAQAgAAATAHQAMAFAAALQAAAHgFAFQgFAGgHAAIgGgBQgUgFgUAAIgTABIgXAFIgCAyIAxgFIAfgCQAHAAAGAFQAFAEAAAIQAAAOgQACIgfADIg1AFIgBAaQAAAZADADQACACAOAAIAXgBIAYAAIAHgBIAHAAQAIAAAFAEQAGAEAAAJQAAAOgPADQgNACgnAAQgpAAgMgLg");
	this.shape_47.setTransform(10.5,21.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,397.3,116.8);


(lib.static_rule3b_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHAHQgDgDAAgEQAAgCADgDQADgDAEAAQAFAAADACQADADAAADQAAAEgDADQgEACgEAAQgEAAgDgCg");
	this.shape.setTransform(80.7,16.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgTA0QgDACgEAAQgDAAgCgCQgEgDAAgDIABgFIAAgFIAAhNQAAgFADgEQACgEAFAAQAHAAAAAIIAAACIAAADIAAAaIAJgEIAIgBQAQAAAKALQAKAKgBAQQAAAQgKALQgLALgPAAQgJAAgJgDgAgHgBIgKAFIAAAeQAJAEAHAAQAIAAAFgGQAGgGAAgJQAAgJgEgGQgGgFgIAAQgCAAgFACg");
	this.shape_1.setTransform(73.5,11.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgaAkQgCgDAAgEIAAgrIAAgHIAAgGQAAgEADgCQACgDAEAAQAIAAABAIQALgJAPAAQAOAAgBASIAAAEQgBALgIAAQgJAAAAgJIAAgHQgOADgHANIAAAhQAAAEgDADQgCACgEAAQgFAAgCgCg");
	this.shape_2.setTransform(66.1,13.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgXAeQgLgJAAgQQAAgQAJgMQALgNAPAAQANAAAHAEQALAFAAAKQgBAIgHAGIgQAGIgWALQADADAFACQAEACAFAAQAJAAAHgEQAFgDAEAAQAHAAAAAHQAAAHgLAFQgKAEgLAAQgPAAgLgHgAgJgPQgEAEgDAIIAQgGQAIgEAGgEQgFgDgIAAQgFAAgFAFg");
	this.shape_3.setTransform(58.6,13);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgJAeIgXg2IgBgEQAAgDADgDQADgCAEAAQAGAAACAFIAPAmIAKgXIAGgPQACgFAGAAQAEAAADADQADACAAAEQAAACgLAZIgPAeQAAADgCACQgDACgDAAQgGAAgDgHg");
	this.shape_4.setTransform(51.5,13);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgaAkQgCgDAAgEIAAgrIAAgHIAAgGQAAgEACgCQADgDAEAAQAIAAABAIQALgJAPAAQAOAAgBASIAAAEQgBALgIAAQgJAAAAgJIAAgHQgOADgHANIAAAhQAAAEgDADQgCACgEAAQgFAAgCgCg");
	this.shape_5.setTransform(38.7,13.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AAQAfIgKAFIgIACQgQAAgJgJQgHgJgBgSQAAgPANgMQAMgMAQAAQAGAAAJAEQAKAEAAAGQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAIgCAHIAAAKQAAAMACAFIADAIIACAGQABAEgDACQgDADgEAAQgCAAgIgHgAgJgNQgHAHAAAJQABAJADAFQADAEAHAAIAHgBIAHgEIgDgYIABgFIAAgGIgCgBIgBAAQgJAAgHAHg");
	this.shape_6.setTransform(31.3,13.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgGA2QgDgDAAgEIAAheQAAgEADgCQAEgCACAAQAFAAACACQADACgBAEIAABaQAAANgJAAQgDAAgDgCg");
	this.shape_7.setTransform(25.4,11.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AAOAiQgJADgIAAQgKAAgHgEQgHgEgBgKQgDgRAAgMQAAgJACgLQABgIAIAAQAEAAADACQADADAAAEIgBAJIgBAKIAAAQIACALIAEABIADABQAGAAAJgCIAAgMIAAgLQAAgOACgKQABgIAIAAQAEAAADACQADADgBAEIgBAYIAAANIAAANIABAFIAAAEQAAAEgDACQgDADgEAAQgGAAgCgFg");
	this.shape_8.setTransform(19.8,13.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgjAsQAAgEADgCQACgDAEAAIAJACIAKABQAKAAAEgHQAFgGABgNQgDAEgFABQgFACgDAAQgOAAgJgJQgIgIAAgNQAAgTALgLQAMgMATAAQAHAAAEABQAEACADADQAKABgBAJIgBANQgDAQAAARQgBAWgHAKQgJANgWAAQgbAAAAgKgAgKgeQgFAHgBALQABAIADAEQADADAGAAQAFAAAFgFQAGgGABgGIACgVIgEgCIgFgBQgKAAgHAIg");
	this.shape_9.setTransform(12.4,14.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AAOAfIgCgOIgBgOIAAgFIAAgGIAAgDIABgDQAAgFgDAAQgGAAgFAHQgFAIgDAKIgBAGIAAAHIgBAFIAAAGQAAAEgDADQgCADgFAAQgDAAgEgDQgCgDAAgEIgBgFIAAgGIABgTIABgSIAAgGIgBgGQAAgEAEgCQACgDAEAAQAJAAAAALIABABQAKgKAKAAQANAAAFAKQADAIAAAOIAAAFIAAADIABAOIACAOQAAAEgDACQgDADgEAAQgIAAgBgJg");
	this.shape_10.setTransform(5.2,13);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgIAyQgDgDAAgEIAAgMIAAgNIAAgPIABgOQAAgEADgDQACgCAFAAQADAAACACQADADAAAEIgBAOIAAAPIAAANIAAAMQAAAEgDADQgCACgDAAQgEAAgDgCgAgFgiQgDgDAAgEQAAgEADgDQADgDADAAQAFAAADADQADADAAAEQAAAEgDADQgDADgFAAQgDAAgDgDg");
	this.shape_11.setTransform(-0.3,11.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgSAkQgLgEAAgHQAAgIAIABIAKABQAFACAEAAQANABAAgGQAAgEgKgDIgRgJQgKgHAAgJQAAgOAPgFQAIgCARAAQAHAAADACQAEACAAAGQAAAMgGAAQgHABgBgGIgGAAQgPgBAAAFQAAADAJAEQANAGAFADQAKAHAAAJQAAALgLAHQgJAEgMAAQgJABgHgDg");
	this.shape_12.setTransform(-6,13);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAQAfIgKAFIgHACQgRAAgJgJQgHgJgBgSQABgPAMgMQALgMARAAQAGAAAIAEQALAEAAAGQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAIgBAHIAAAKQAAAMACAFIADAIIACAGQABAEgDACQgDADgEAAQgCAAgIgHgAgJgNQgHAHAAAJQAAAJAEAFQADAEAHAAIAHgBIAGgEIgCgYIABgFIAAgGIgCgBIgBAAQgJAAgHAHg");
	this.shape_13.setTransform(-19.2,13.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgSAkQgLgEAAgHQAAgIAIABIAKABQAFACAEAAQANABAAgGQAAgEgKgDIgRgJQgKgHAAgJQAAgOAPgFQAIgCARAAQAHAAADACQAEACAAAGQAAAMgGAAQgHABgBgGIgGAAQgPgBAAAFQAAADAJAEQANAGAFADQAKAHAAAJQAAALgLAHQgJAEgMAAQgJABgHgDg");
	this.shape_14.setTransform(-32.7,13);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgWAeQgMgJAAgQQAAgQAKgMQAJgNARAAQALAAAJAEQAKAFgBAKQABAIgJAGIgPAGIgWALQADADAFACQAFACAFAAQAJAAAGgEQAGgDADAAQAHAAAAAHQAAAHgMAFQgJAEgKAAQgQAAgKgHgAgJgPQgEAEgCAIIAPgGQAIgEAFgEQgEgDgHAAQgGAAgFAFg");
	this.shape_15.setTransform(-40,13);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgaAkQgDgDABgEIAAgrIAAgHIAAgGQAAgEACgCQACgDAFAAQAHAAACAIQALgJAPAAQANAAAAASIAAAEQAAALgJAAQgJAAAAgJIAAgHQgOADgHANIAAAhQAAAEgDADQgDACgDAAQgFAAgCgCg");
	this.shape_16.setTransform(-47.1,13.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgIAyQgCgDAAgEIAAgMIgBgNIABgPIABgOQAAgEACgDQADgCAEAAQADAAACACQADADAAAEIAAAOIgBAPIAAANIABAMQAAAEgEADQgCACgDAAQgEAAgDgCgAgGgiQgCgDAAgEQAAgEACgDQADgDAEAAQAFAAADADQADADAAAEQAAAEgDADQgDADgFAAQgEAAgDgDg");
	this.shape_17.setTransform(-52.3,11.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAOAiQgJADgIAAQgKAAgHgEQgHgEgBgKQgDgRAAgMQAAgJACgLQABgIAIAAQAEAAADACQADADAAAEIgBAJIgBAKIAAAQIACALIAEABIADABQAGAAAJgCIAAgMIAAgLQAAgOACgKQABgIAIAAQAEAAADACQADADgBAEIgBAYIAAANIAAANIABAFIAAAEQAAAEgDACQgDADgEAAQgGAAgCgFg");
	this.shape_18.setTransform(-58.2,13.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAHAsIAAgEIACgTIgFAAQgPAAgKgIQgLgIAAgOQAAgVAMgMQANgMAUAAQADAAADABQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQAEAAADADQADADAAADQAAAUgCAWIgEAYIgBAZQAAAEgDADQgDACgEAAQgJAAAAgLgAgIgbQgFAHAAALQAAAGAEAEQAFAEAHAAQAFAAACgFQADgGABgRIAAgPIgCAAIgEAAQgKACgGAJg");
	this.shape_19.setTransform(-65.7,14.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgXAeQgLgJAAgQQAAgQAKgMQAKgNAQAAQAMAAAHAEQALAFgBAKQABAIgJAGIgPAGIgWALQADADAFACQAFACAEAAQAKAAAGgEQAGgDADAAQAHAAAAAHQAAAHgMAFQgJAEgLAAQgPAAgLgHgAgIgPQgFAEgCAIIAPgGQAIgEAFgEQgEgDgHAAQgGAAgEAFg");
	this.shape_20.setTransform(-73.1,13);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgaAkQgCgDgBgEIAAgrIABgHIAAgGQAAgEACgCQADgDAEAAQAHAAACAIQALgJAOAAQAPAAAAASIAAAEQgBALgJAAQgJAAAAgJIAAgHQgPADgGANIAAAhQAAAEgDADQgDACgEAAQgEAAgCgCg");
	this.shape_21.setTransform(-80.2,13.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgGA2QgCgDAAgEIAAheQAAgEACgCQADgCADAAQAEAAADACQACACAAAEIAABaQAAANgJAAQgDAAgDgCg");
	this.shape_22.setTransform(175.9,-10.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAQAfIgLAFIgHACQgQAAgIgJQgIgJAAgSQAAgPALgMQANgMAPAAQAHAAAJAEQAKAEAAAGQAAABAAAAQAAABAAABQgBAAAAAAQAAABAAAAIgBAHIgBAKQAAAMACAFIADAIIADAGQAAAEgDACQgDADgDAAQgEAAgHgHgAgJgNQgGAHAAAJQAAAJACAFQAEAEAGAAIAHgBIAIgEIgCgYIAAgFIABgGIgCgBIgDAAQgIAAgHAHg");
	this.shape_23.setTransform(170.2,-8.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgFAwQgDgDAAgDIAAgIIAAgIIgBgiIgMgBQgJgBAAgIQAAgEADgDQACgCAEAAIAMABIAAgIIgBgGQAAgEADgDQADgCAEAAQAJAAAAARIAAAFIAHAAQAHAAADABQAGACAAAGQAAAFgDACQgDADgEgBIgDAAIgDAAIgHABIABAjIAAAEIAAADQABAQgLAAQgCAAgDgCg");
	this.shape_24.setTransform(163,-9.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgVAdQgKgJgBgRQAAgNAIgNQALgOARAAQAOAAAIAMQAHAJAAAPQAAAPgIALQgKANgPAAQgMAAgJgJgAgJgLQgEAHAAAHQAAAJAFAEQADADAFABQAFAAAFgFQAFgEAAgIQABgWgNAAQgHABgFAHg");
	this.shape_25.setTransform(155.9,-8.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgFAwQgDgDAAgDIAAgIIAAgIIgBgiIgMgBQgJgBAAgIQAAgEADgDQACgCAEAAIAMABIAAgIIgBgGQAAgEADgDQADgCAEAAQAJAAgBARIAAAFIAIAAQAHAAADABQAGACAAAGQAAAFgDACQgCADgFgBIgDAAIgDAAIgHABIABAjIAAAEIAAADQABAQgLAAQgCAAgDgCg");
	this.shape_26.setTransform(149,-9.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAQAfIgLAFIgHACQgQAAgJgJQgHgJgBgSQAAgPANgMQAMgMAPAAQAHAAAJAEQAKAEAAAGQAAABAAAAQAAABAAABQgBAAAAAAQAAABAAAAIgBAHIgBAKQAAAMACAFIADAIIACAGQAAAEgCACQgDADgEAAQgCAAgIgHgAgJgNQgHAHABAJQAAAJADAFQADAEAGAAIAIgBIAHgEIgDgYIABgFIABgGIgDgBIgCAAQgIAAgHAHg");
	this.shape_27.setTransform(135.8,-8.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgjAsQABgEACgCQADgDADAAIAJACIAKABQAKAAAFgHQAEgGABgNQgEAEgEABQgEACgEAAQgOAAgJgJQgIgIAAgNQAAgTALgLQAMgMATAAQAGAAAFABQAFACADADQAJABAAAJIgCANQgDAQgBARQAAAWgHAKQgJANgWAAQgbAAAAgKgAgJgeQgHAHAAALQAAAIAEAEQADADAGAAQAFAAAFgFQAFgGACgGIADgVIgGgCIgDgBQgLAAgGAIg");
	this.shape_28.setTransform(122,-6.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAOAfIgCgOIgBgOIABgFIAAgGIAAgDIAAgDQAAgFgDAAQgGAAgFAHQgFAIgDAKIgBAGIAAAHIgBAFIAAAGQAAAEgDADQgDADgEAAQgEAAgDgDQgCgDAAgEIAAgFIgBgGIABgTIABgSIAAgGIgBgGQAAgEADgCQADgDAEAAQAJAAAAALIABABQAKgKAKAAQANAAAEAKQAEAIAAAOIAAAFIAAADIACAOIABAOQAAAEgDACQgDADgEAAQgIAAgBgJg");
	this.shape_29.setTransform(114.8,-8.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgIAyQgCgDgBgEIAAgMIAAgNIAAgPIABgOQABgEACgDQACgCAFAAQADAAACACQADADAAAEIgBAOIAAAPIAAANIAAAMQAAAEgCADQgDACgDAAQgEAAgDgCgAgFgiQgEgDAAgEQAAgEAEgDQADgDADAAQAEAAADADQAEADAAAEQAAAEgEADQgDADgEAAQgDAAgDgDg");
	this.shape_30.setTransform(109.3,-10.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAOAfIgCgOIgBgOIABgFIAAgGIAAgDIAAgDQAAgFgDAAQgGAAgFAHQgFAIgDAKIgBAGIAAAHIgBAFIAAAGQAAAEgDADQgDADgEAAQgEAAgDgDQgCgDAAgEIAAgFIgBgGIABgTIABgSIAAgGIgBgGQAAgEADgCQADgDAEAAQAJAAAAALIABABQAKgKAKAAQANAAAEAKQAEAIAAAOIAAAFIAAADIACAOIABAOQAAAEgDACQgDADgEAAQgIAAgBgJg");
	this.shape_31.setTransform(103.5,-8.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AARAfIgLAFIgHACQgRAAgIgJQgJgJAAgSQABgPALgMQAMgMARAAQAGAAAIAEQALAEAAAGQAAABAAAAQAAABAAABQgBAAAAAAQAAABgBAAIgBAHIAAAKQAAAMACAFIADAIIACAGQAAAEgCACQgDADgEAAQgDAAgGgHgAgJgNQgGAHgBAJQAAAJAEAFQADAEAHAAIAHgBIAGgEIgCgYIABgFIAAgGIgCgBIgBAAQgJAAgHAHg");
	this.shape_32.setTransform(95.9,-8.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgWAeQgMgJAAgQQAAgQAJgMQALgNAPAAQAMAAAJAEQAJAFABAKQgBAIgHAGIgQAGIgWALQADADAFACQAEACAGAAQAIAAAHgEQAGgDADAAQAHAAAAAHQAAAHgLAFQgKAEgKAAQgQAAgKgHgAgJgPQgEAEgDAIIAQgGQAIgEAGgEQgFgDgIAAQgFAAgFAFg");
	this.shape_33.setTransform(87.9,-8.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgFAoQgDgDAAgEIgBgXIgCgWIgBgHQgIAFgIALIgBABIAAAVIAAAFIAAAFQAAADgDACQgDACgEAAQgGAAgCgFIgBgLIAAgYIgBgKIAAgKQAAgGACgFQADgGAFAAQAEAAADADQADADAAADIgBAGQAKgMAJAAQALAAAEAIQAEgDAFgCQAFgCAGAAQANAAAFANIADATIAFAkQAAAEgDACQgCADgEAAQgIAAgCgIIgCgUIgCgTQgCgMgDAAIgHADIgJAFIACAWIACAWQAAAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape_34.setTransform(78.8,-8.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAFAQQgCgCAAgEIADgKIADgJQACgHAGAAQAEABADACQADACAAADIgDAKIgEALQgCAFgGAAQgEAAgDgCgAgXAQQgDgCAAgEIADgKIAEgKQACgHAHAAQAEAAADACQACADAAADQAAADgDAGIgEAMQgDAGgGAAQgDAAgDgCg");
	this.shape_35.setTransform(64.2,-14.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgaAkQgCgDgBgEIAAgrIABgHIAAgGQAAgEACgCQACgDAFAAQAHAAACAIQALgJAOAAQAPAAAAASIAAAEQgCALgIAAQgJAAAAgJIAAgHQgPADgGANIAAAhQAAAEgDADQgDACgEAAQgEAAgCgCg");
	this.shape_36.setTransform(57.9,-8.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgWAeQgMgJAAgQQAAgQAKgMQAJgNARAAQALAAAJAEQAKAFAAAKQAAAIgJAGIgPAGIgWALQADADAFACQAEACAGAAQAIAAAHgEQAFgDAEAAQAHAAAAAHQAAAHgMAFQgJAEgKAAQgQAAgKgHgAgJgPQgEAEgCAIIAPgGQAIgEAGgEQgFgDgHAAQgGAAgFAFg");
	this.shape_37.setTransform(50.3,-8.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgTA0QgDACgEAAQgDAAgDgCQgDgDAAgDIABgFIAAgFIAAhNQAAgFACgEQADgEAFAAQAHAAAAAIIAAACIAAADIAAAaIAJgEIAIgBQAQAAALALQAJAKgBAQQAAAQgKALQgLALgPAAQgJAAgJgDgAgHgBIgKAFIAAAeQAJAEAHAAQAHAAAGgGQAGgGAAgJQAAgJgEgGQgGgFgIAAQgCAAgFACg");
	this.shape_38.setTransform(42.4,-10.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgFAoQgDgDAAgEIgBgXIgCgWIgBgHQgIAFgIALIgBABIAAAVIAAAFIAAAFQAAADgDACQgDACgEAAQgGAAgCgFIgBgLIAAgYIgBgKIAAgKQAAgGACgFQADgGAFAAQAEAAADADQADADAAADIgBAGQAKgMAJAAQALAAAEAIQAEgDAFgCQAFgCAGAAQANAAAFANIADATIAFAkQAAAEgDACQgCADgEAAQgIAAgCgIIgCgUIgCgTQgCgMgDAAIgHADIgJAFIACAWIACAWQAAAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape_39.setTransform(32.9,-8.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAOAiQgJADgIAAQgKAAgHgEQgHgFgBgIQgDgRAAgNQAAgJACgMQABgHAIAAQAEAAADADQADACAAAEIgBAJIgBAKIAAAPIACANIAEABIADAAQAGAAAJgCIAAgMIAAgKQAAgPACgKQABgIAIAAQAEAAADADQADACgBAEIgBAYIAAANIAAANIABAFIAAAEQAAAEgDADQgDACgEAAQgGAAgCgFg");
	this.shape_40.setTransform(23.6,-8.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAOAfIgCgOIgBgOIAAgFIAAgGIAAgDIABgDQAAgFgDAAQgGAAgFAHQgFAIgDAKIgBAGIAAAHIgBAFIAAAGQAAAEgDADQgCADgFAAQgDAAgEgDQgCgDAAgEIgBgFIAAgGIABgTIABgSIAAgGIgBgGQAAgEAEgCQACgDAEAAQAJAAAAALIABABQAKgKAKAAQANAAAFAKQADAIAAAOIAAAFIAAADIABAOIACAOQAAAEgDACQgDADgEAAQgIAAgBgJg");
	this.shape_41.setTransform(16.4,-8.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgXAeQgLgJAAgQQAAgQAJgMQALgNAQAAQAMAAAHAEQAKAFAAAKQAAAIgIAGIgPAGIgWALQADADAFACQAFACAEAAQAKAAAGgEQAGgDADAAQAHAAAAAHQAAAHgMAFQgJAEgLAAQgPAAgLgHgAgIgPQgFAEgDAIIAQgGQAIgEAFgEQgEgDgHAAQgGAAgEAFg");
	this.shape_42.setTransform(2.6,-8.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAQAyQgCgFgBgKIgBgQIAAgFIAAgGIAAgFQgBgDgDAAQgHAAgFAGIgJANQAAAZgCAFQgDAFgGAAQgEAAgDgCQgDgDAAgDIABgEIABgTIAAgsIAAgDIABgKIgBgHIgBgGQAAgEADgCQADgDAEAAQAHAAACAHIABANIAAAOIAAANQAFgFAFgCQAFgDAGAAQAMAAAFAHQAEAFABAJIABARIABANIACAOIABACQAAAEgDADQgDACgEAAQgHAAgCgHg");
	this.shape_43.setTransform(-5.2,-10.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgFAwQgDgDAAgDIAAgIIAAgIIgBgiIgNgBQgIgBgBgIQABgEADgDQACgCAEAAIAMABIAAgIIgBgGQAAgEADgDQACgCAFAAQAJAAAAARIAAAFIAHAAQAHAAADABQAGACgBAGQAAAFgCACQgDADgEgBIgDAAIgDAAIgHABIABAjIAAAEIAAADQABAQgLAAQgCAAgDgCg");
	this.shape_44.setTransform(-12.6,-9.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAJAMIgEgMQgDgGAAgDQAAgDADgDQADgCADAAQAHAAABAHIAFAKIADAKQAAAEgDACQgDACgDAAQgHAAgCgGgAgTANIgEgLIgDgKQAAgDADgCQADgCADgBQAHAAACAHIAEAJIACAKQAAAEgCACQgDACgEAAQgFAAgDgFg");
	this.shape_45.setTransform(-19.1,-14.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAOAfIgCgOIgBgOIAAgFIAAgGIAAgDIABgDQAAgFgDAAQgGAAgEAHQgGAIgDAKIgBAGIAAAHIgBAFIAAAGQAAAEgDADQgDADgEAAQgDAAgDgDQgDgDAAgEIgBgFIAAgGIABgTIABgSIAAgGIgBgGQAAgEAEgCQACgDAEAAQAJAAAAALIABABQAKgKAKAAQANAAAFAKQADAIAAAOIAAAFIAAADIABAOIACAOQAAAEgDACQgDADgEAAQgIAAgBgJg");
	this.shape_46.setTransform(-31.6,-8.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgVAdQgKgJgBgRQAAgNAIgNQALgOARAAQAOAAAIAMQAHAJAAAPQAAAPgIALQgKANgPAAQgMAAgJgJgAgJgLQgEAHAAAHQAAAJAFAEQADADAFABQAFAAAFgFQAFgEAAgIQABgWgNAAQgHABgFAHg");
	this.shape_47.setTransform(-39.2,-8.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgIAyQgDgDABgEIAAgMIgBgNIABgPIABgOQgBgEADgDQADgCAEAAQADAAADACQACADAAAEIAAAOIgBAPIAAANIABAMQAAAEgDADQgDACgDAAQgEAAgDgCgAgGgiQgDgDAAgEQAAgEADgDQAEgDADAAQAFAAACADQAEADAAAEQAAAEgEADQgCADgFAAQgDAAgEgDg");
	this.shape_48.setTransform(-44.5,-10.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgSAkQgLgEAAgIQAAgGAIgBIAKADQAFACAEAAQANgBAAgFQAAgDgKgFIgRgIQgKgGAAgKQAAgOAPgEQAIgEARAAQAHAAADACQAEADAAAGQAAANgGAAQgHgBgBgFIgGgBQgPABAAAEQAAADAJAEQANAGAFADQAKAHAAAJQAAAMgLAFQgJAGgMAAQgJgBgHgCg");
	this.shape_49.setTransform(-50.1,-8.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgSAkQgLgEAAgIQAAgGAIgBIAKADQAFACAEAAQANgBAAgFQAAgDgKgFIgRgIQgKgGAAgKQAAgOAPgEQAIgEARAAQAHAAADACQAEADAAAGQAAANgGAAQgHgBgBgFIgGgBQgPABAAAEQAAADAJAEQANAGAFADQAKAHAAAJQAAAMgLAFQgJAGgMAAQgJgBgHgCg");
	this.shape_50.setTransform(-56.9,-8.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgXAeQgLgJAAgQQAAgQAJgMQALgNAPAAQANAAAHAEQALAFAAAKQgBAIgHAGIgQAGIgWALQADADAFACQAEACAFAAQAJAAAHgEQAFgDAEAAQAHAAAAAHQAAAHgLAFQgKAEgLAAQgPAAgLgHgAgJgPQgEAEgDAIIAQgGQAIgEAGgEQgFgDgIAAQgFAAgFAFg");
	this.shape_51.setTransform(-64.3,-8.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgaAkQgDgDAAgEIAAgrIABgHIAAgGQAAgEADgCQACgDAEAAQAIAAABAIQALgJAOAAQAOAAAAASIAAAEQAAALgJAAQgJAAAAgJIAAgHQgPADgGANIAAAhQAAAEgDADQgDACgEAAQgEAAgCgCg");
	this.shape_52.setTransform(-71.3,-8.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgcA3QgCgDAAgEIAAgZIAAgaIgBgaIgBgNQAAgGADgEQACgEAGAAQADAAADACQACADABADIAAABIAJgEQADgBAFAAQAPAAAHANQAGAKAAAQQAAAOgJAKQgJALgPAAIgLgCIAAAcQgBAEgCADQgCACgFAAQgEAAgDgCgAgDggQgEACgFAEIABAcQAGACAFAAQAHAAAEgEQADgFABgIIgBgMQgCgJgHAAQgEAAgEACg");
	this.shape_53.setTransform(-78.5,-6.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AATAkIgTgYIgRAQIgGAFQgDADgDAAQgEAAgDgCQgDgDAAgEQAAgEAFgFIAJgHIAOgMIgIgLIgJgKQgEgDAAgDQAAgEADgDQADgCADAAQAGAAAIAJIAKAOIALgJQAIgHADgEQADgEAEAAQAEAAADACQADADAAADQAAAFgHAHIgKAJIgLAJIAVAZQACADABACQAAAEgDADQgDACgEAAQgEAAgDgDg");
	this.shape_54.setTransform(-86.4,-8.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgXAeQgLgJAAgQQAAgQAJgMQALgNAPAAQANAAAHAEQAKAFAAAKQAAAIgIAGIgPAGIgWALQADADAFACQAFACAEAAQAKAAAGgEQAGgDADAAQAHAAAAAHQAAAHgMAFQgJAEgLAAQgPAAgLgHgAgIgPQgFAEgDAIIAQgGQAIgEAFgEQgEgDgIAAQgFAAgEAFg");
	this.shape_55.setTransform(-94.6,-8.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgWAeQgMgJAAgQQAAgQAKgMQAJgNARAAQALAAAJAEQAKAFAAAKQAAAIgJAGIgPAGIgWALQADADAFACQAEACAGAAQAIAAAHgEQAFgDAEAAQAHAAAAAHQAAAHgMAFQgJAEgKAAQgQAAgKgHgAgJgPQgEAEgCAIIAPgGQAIgEAGgEQgFgDgHAAQgGAAgFAFg");
	this.shape_56.setTransform(-108.5,-8.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAQAyQgCgFgBgKIgBgQIAAgFIAAgGIAAgFQgBgDgDAAQgHAAgFAGIgJANQAAAZgCAFQgDAFgGAAQgEAAgDgCQgDgDAAgDIABgEIABgTIAAgsIAAgDIABgKIgBgHIgBgGQAAgEADgCQADgDAEAAQAHAAACAHIABANIAAAOIAAANQAFgFAFgCQAFgDAGAAQAMAAAFAHQAEAFABAJIABARIABANIACAOIABACQAAAEgDADQgDACgEAAQgHAAgCgHg");
	this.shape_57.setTransform(-116.3,-10.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgFAyQgEgDAAgEIABgDIAAgDIAAgJIgBgKIgBgYIgCgYIgEAAQgPAAgJgDQgIgBAAgIQAAgDADgDQADgDAEAAIALABIALABIANAAIALAAIAQABIAPAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAIgQgBIgRgBIACAcIABAbIABAHIAAAHQAAAFgCAEQgDAFgFAAQgDAAgCgCg");
	this.shape_58.setTransform(-125.3,-10.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgJASQAAgDADgDQADgCADAAQALAAAAAPQAAAEgDADQgDACgEAAQgKAAAAgQgAgGgNQgDgDAAgEIAAgCIgBgDQAAgDADgDQADgCAEAAQAJAAAAANQAAAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape_59.setTransform(-139.2,-9.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgfA0QgHgHAAgWIABgaIABgcIAAgHIgBgHQAAgKAKAAQADAAACABIAPgCIANgBQARAAAKADQAGADAAAGQAAAEgCACQgDAEgEAAIgDgBQgLgDgKAAIgKABIgNACIAAAbIAZgCIARgBQAEAAADACQADADAAAEQAAAHgJABIgQACIgdACIAAAOQAAAOABACIAJAAIAMAAIANAAIAEAAIAEgBQAEAAACACQAEADAAAFQAAAHgIACQgHABgVAAQgWAAgHgGg");
	this.shape_60.setTransform(-146.5,-10.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgjApIABgWQACgcAAgkQAAgEACgDQADgDAEAAQAEAAADADQADADAAAEQAAAkgCAdIgBARQAQAAAYgIIAEAAQADAAADADQADADAAADQgBAGgGADQgIAEgQADQgOACgLAAQgQAAAAgPg");
	this.shape_61.setTransform(-154.7,-10);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgbAvQgSgOAAgiIAAgJIABgKIAAgIIAAgIQABgFACgFQACgGAEAAQAFAAACACQADADABAEIAAALIAAAMIgBAJIgBAKQAAAJADAJQADALAGAEQACACALABQARAAAHgfQADgPAAgdQAAgEACgEQADgEAGAAQAEAAACADQACADAAADQAAAbgCAPQgEAWgLAPQgFAHgHAFQgJAFgIAAQgSAAgIgGg");
	this.shape_62.setTransform(-163.9,-9.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgkAzQgDgDAAgEIAAgPIAAgPIAAg3QAAgEADgEQAEgEAGAAIARACQAJABAGADQAdAPAAAWQAAAJgGAFQgHAHgMAFQASAKAKALQACACAAAEQAAAEgDACQgCADgFAAQgDAAgDgDQgVgTgYgIIABAWQAAAEgDADQgCADgEAAQgFAAgCgDgAgUACIADAAQAQAAAIgDIAGgFQADgDAAgBQAAgIgKgHQgIgHgLgBIgHAAg");
	this.shape_63.setTransform(-173.3,-10.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-186.2,-22.5,372.4,45.1);


(lib.static_rule3b_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNAMQgHgFAAgHQAAgFAHgGQAGgFAHAAQAJAAAGAFQAGAFAAAGQAAAHgGAFQgGAFgJAAQgHAAgGgFg");
	this.shape.setTransform(149.6,48.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AglBgQgFAFgHAAQgGAAgFgFQgFgEAAgHIAAgJIAAgKIAAiOQABgKAEgHQAFgJAJAAQAOAAAAAPIAAAFIgBAGIAAAwQAKgFAIgDQAJgCAHAAQAeAAASAVQARAUAAAdQAAAdgUAVQgUAVgdAAQgSAAgQgHgAgNgCQgKADgKAIIAAA1QASAIAMAAQAPAAAKgLQALgLgBgQQAAgRgIgLQgIgKgPAAQgGAAgIAEg");
	this.shape_1.setTransform(136.4,39.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgyBCQgDgEAAgIIAAhSIAAgLIAAgMQAAgHAEgFQAFgFAIAAQAOAAACAPQAWgRAbAAQAZAAABAiIAAAIQgCAUgQAAQgQAAAAgRIgBgNQgcAFgMAZIAAA+QAAAIgEAFQgFAEgIAAQgIAAgFgFg");
	this.shape_2.setTransform(122.6,42.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgqA3QgWgQAAgdQAAggARgWQATgYAfAAQAVAAAPAHQATAJAAAUQAAAOgPALQgIAFgVAIIgpATQAFAHAJADQAJADAKAAQARAAAMgHQALgGAFAAQAOAAAAANQAAAOgVAJQgSAIgUAAQgeAAgSgOgAgQgeQgJAIgFAQIAcgNQARgHAJgHQgIgFgNAAQgMAAgHAIg");
	this.shape_3.setTransform(108.7,42.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgSA4IgqhlIgCgHQABgHAFgEQAGgFAGgBQAMABAEAJQAIAQAUA3IASgqIALgbQAFgLALAAQAHAAAFAFQAGAFgBAGQABAFgVAuIgaA4QgBAGgFAEQgEAFgGAAQgMgBgGgNg");
	this.shape_4.setTransform(95.5,42.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgyBCQgDgEAAgIIAAhSIAAgLIAAgMQAAgHAEgFQAEgFAIAAQAOAAADAPQAVgRAcAAQAaAAAAAiIAAAIQgCAUgQAAQgRAAABgRIgBgNQgbAFgNAZIAAA+QAAAIgEAFQgGAEgHAAQgIAAgFgFg");
	this.shape_5.setTransform(71.7,42.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AAfA6QgMAGgJADQgJADgFAAQgfAAgPgRQgPgQAAghQAAgdAWgWQAXgWAfAAQAMAAAPAHQAUAIAAALQAAAFgDADIgCANIgBARQAAAXADALIAGANIAFAMQAAAHgFAEQgFAFgHAAQgGAAgMgMgAgRgZQgNAOAAAQQAAARAGAJQAGAJAMAAQAHAAAHgDQAHgDAHgFQgEgdAAgPIAAgJIACgMIgEgCIgEAAQgQAAgNANg");
	this.shape_6.setTransform(58,42.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgLBkQgFgFgBgIIAAiuQAAgHAGgFQAFgFAGAAQAIAAAFAFQAEAFAAAHIAACoQAAAYgRAAQgHAAgEgFg");
	this.shape_7.setTransform(47.1,38.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AAZA/QgQAGgQAAQgSAAgNgIQgNgIgDgRQgFggAAgYQAAgQAEgVQACgOAPAAQAHAAAFAEQAGAFAAAHIgCARIgCASIABAeQABAOADAIIAGADIAGAAQANAAARgEIAAgWIgBgUQAAgaADgTQACgPAPAAQAIAAAFAEQAFAFAAAHIgDAtIABAZIAAAZIAAAIIABAIQAAAHgGAFQgFAEgHAAQgLAAgFgJg");
	this.shape_8.setTransform(36.8,42.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AhABRQAAgHADgEQAFgEAIAAIAQACQALACAIAAQARAAAKgMQAIgLACgYQgHAGgIADQgIAEgJAAQgZAAgPgRQgRgQABgZQAAgiAUgWQAXgWAkAAQAMAAAIADQAJADAFAGQAQACAAARQAAAJgDAPQgEAdgCAhQgBApgMASQgRAZgqAAQgwAAAAgUgAgTg5QgKANAAAVQgBAPAGAHQAGAHALAAQAKAAAKgLQAKgMACgLQACgMADgaIgIgEIgIgBQgVAAgMAOg");
	this.shape_9.setTransform(23.1,45.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AAaA6IgEgaQgCgOAAgMIABgKIAAgMIABgEIAAgGQAAgLgFAAQgLAAgKAOQgKAOgGAVIgBALIgBAMIgBALIAAALQAAAHgFAFQgFAFgIAAQgIAAgEgFQgGgFAAgHIAAgLIgBgLIACgjIABghIAAgMIAAgLQAAgHAFgFQAFgFAHAAQARAAABAUIAAABQATgSAUAAQAYAAAIAUQAHANAAAbIAAAJIAAAHQAAAKACAQQADAPAAAKQAAAHgFAFQgFAFgHAAQgQAAgCgQg");
	this.shape_10.setTransform(9.7,42.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgPBcQgFgFAAgHIgBgXIAAgYIABgcIABgbQAAgIAFgEQAFgFAIAAQAHAAAFAFQAEAEAAAIIgBAbIgBAcIAAAYIABAXQAAAHgFAFQgFAFgHAAQgHAAgFgFgAgLhAQgGgGAAgHQAAgIAGgGQAGgFAHAAQAIAAAGAFQAGAGAAAIQAAAHgGAGQgGAFgIABQgHgBgGgFg");
	this.shape_11.setTransform(-0.6,39.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgjBCQgTgHAAgNQAAgNAPAAQAGAAALAEQALADAGAAQAZAAAAgKQAAgHgSgIQgZgLgIgFQgSgMAAgSQAAgZAbgKQAQgEAgAAQAMgBAHAEQAIAEAAAMQAAAXgMAAQgNAAgDgLIgKgBQgeAAAAAJQAAAFASAJQAZALAJAGQASANAAARQAAAWgUALQgQAIgXABQgRgBgOgFg");
	this.shape_12.setTransform(-11.1,42.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAfA6QgMAGgJADQgJADgFAAQgfAAgPgRQgPgQAAghQAAgdAWgWQAXgWAfAAQAMAAAPAHQAUAIAAALQAAAFgDADIgCANIgBARQAAAXADALIAGANIAFAMQAAAHgFAEQgFAFgHAAQgGAAgMgMgAgRgZQgNAOAAAQQAAARAGAJQAGAJAMAAQAHAAAHgDQAHgDAHgFQgEgdAAgPIAAgJIACgMIgEgCIgEAAQgQAAgNANg");
	this.shape_13.setTransform(-35.6,42.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgjBCQgTgHAAgNQAAgNAPAAQAGAAALAEQALADAGAAQAZAAAAgKQAAgHgSgIQgZgLgIgFQgSgMAAgSQAAgZAbgKQAQgEAgAAQAMgBAHAEQAIAEAAAMQAAAXgMAAQgNAAgDgLIgKgBQgeAAAAAJQAAAFASAJQAZALAJAGQASANAAARQAAAWgUALQgQAIgXABQgRgBgOgFg");
	this.shape_14.setTransform(-60.7,42.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgrA3QgVgQAAgdQAAggARgWQASgYAfAAQAXAAAOAHQATAJAAAUQAAAOgPALQgHAFgWAIIgpATQAFAHAJADQAJADAKAAQARAAAMgHQAKgGAHAAQANAAAAANQAAAOgVAJQgSAIgUAAQgdAAgUgOgAgRgeQgIAIgFAQIAdgNQAPgHALgHQgJgFgOAAQgKAAgJAIg");
	this.shape_15.setTransform(-74.3,42.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgxBCQgFgEAAgIIAAhSIABgLIAAgMQAAgHAFgFQAEgFAHAAQAOAAADAPQAVgRAcAAQAZAAAAAiIAAAIQgBAUgRAAQgPAAAAgRIgBgNQgcAFgMAZIAAA+QAAAIgEAFQgGAEgHAAQgIAAgEgFg");
	this.shape_16.setTransform(-87.4,42.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgPBcQgFgFAAgHIgBgXIAAgYIABgcIABgbQAAgIAFgEQAFgFAIAAQAHAAAFAFQAEAEAAAIIgBAbIgBAcIAAAYIABAXQAAAHgFAFQgFAFgHAAQgHAAgFgFgAgLhAQgGgGAAgHQAAgIAGgGQAGgFAHAAQAIAAAGAFQAGAGAAAIQAAAHgGAGQgGAFgIABQgHgBgGgFg");
	this.shape_17.setTransform(-97.2,39.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAZA/QgQAGgQAAQgSAAgNgIQgNgIgDgRQgFggAAgYQAAgQAEgVQACgOAPAAQAHAAAFAEQAGAFAAAHIgCARIgCASIABAeQABAOADAIIAGADIAGAAQANAAARgEIAAgWIgBgUQAAgaADgTQACgPAPAAQAIAAAFAEQAFAFAAAHIgDAtIABAZIAAAZIAAAIIABAIQAAAHgGAFQgFAEgHAAQgLAAgFgJg");
	this.shape_18.setTransform(-108,42.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AANBSIAAgHIAEgkIgKABQgcAAgTgPQgUgQAAgbQAAglAWgXQAXgYAmAAQAHAAAEAEQAFgDAEAAQAIAAAFAFQAFAGAAAGQAAAlgEApIgGAtQgDAaAAAVQAAAHgFAFQgFAFgIAAQgRAAAAgVgAgQgzQgJAOAAATQAAANAIAGQAJAJAOgBQAJAAAEgJQAGgMAAggIACgbIgEAAIgIAAQgUADgLARg");
	this.shape_19.setTransform(-121.8,45.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgrA3QgVgQAAgdQAAggARgWQASgYAgAAQAVAAAPAHQAUAJAAAUQAAAOgQALQgHAFgWAIIgqATQAHAHAIADQAJADAKAAQARAAAMgHQAKgGAGAAQAOAAAAANQAAAOgWAJQgRAIgUAAQgdAAgUgOgAgRgeQgIAIgFAQIAcgNQAQgHAKgHQgIgFgNAAQgLAAgJAIg");
	this.shape_20.setTransform(-135.6,42.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgyBCQgDgEAAgIIAAhSIAAgLIAAgMQAAgHAEgFQAFgFAIAAQAOAAACAPQAWgRAbAAQAZAAABAiIAAAIQgCAUgQAAQgQAAgBgRIAAgNQgcAFgMAZIAAA+QAAAIgEAFQgFAEgIAAQgIAAgFgFg");
	this.shape_21.setTransform(-148.7,42.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgLBkQgGgFAAgIIAAiuQABgHAFgFQAFgFAGAAQAIAAAFAFQAEAFAAAHIAACoQAAAYgRAAQgHAAgEgFg");
	this.shape_22.setTransform(149.6,0.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAfA6QgMAGgJADQgJADgFAAQgfAAgPgRQgPgQAAghQAAgdAWgWQAXgWAfAAQAMAAAPAHQAUAIAAALQAAAFgDADIgCANIgBARQAAAXADALIAGANIAFAMQAAAHgFAEQgFAFgHAAQgGAAgMgMgAgRgZQgNAOAAAQQAAARAGAJQAGAJAMAAQAHAAAHgDQAHgDAHgFQgEgdAAgPIAAgJIACgMIgEgCIgEAAQgQAAgNANg");
	this.shape_23.setTransform(139,4.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgLBZQgFgFAAgHIABgOIAAgNIgDhBIgXgCQgQgCgBgPQAAgHAGgFQAFgFAHAAIAVACIAAgOIgBgMQAAgHAGgFQAFgFAHAAQASAAAAAgIgBAKIAOgBQAOAAAGACQAKAEgBAMQABAHgGAFQgFAFgHAAIgGgBIgGAAIgNABIADBCIAAAGIAAAIQAAAdgSAAQgGAAgGgEg");
	this.shape_24.setTransform(125.6,2.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgpA2QgSgTgBgcQgBgcAQgWQATgZAigBQAZABAPATQAOATAAAbQAAAcgQAVQgSAYgcAAQgYAAgRgQgAgSgVQgHAMAAAQQAAAPAJAHQAGAHAKAAQAKAAAIgIQAJgIABgPQABgogXAAIgBAAQgOAAgJAOg");
	this.shape_25.setTransform(112.4,4.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgLBZQgFgFAAgHIABgOIAAgNIgChBIgYgCQgQgCgBgPQAAgHAGgFQAEgFAIAAIAWACIgBgOIgBgMQABgHAEgFQAGgFAHAAQASAAAAAgIgBAKIAOgBQAOAAAFACQALAEgBAMQAAAHgEAFQgGAFgHAAIgGgBIgGAAIgMABIACBCIAAAGIAAAIQAAAdgSAAQgHAAgFgEg");
	this.shape_26.setTransform(99.7,2.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAfA6QgMAGgJADQgJADgFAAQgfAAgPgRQgPgQAAghQAAgdAWgWQAXgWAfAAQAMAAAPAHQAUAIAAALQAAAFgDADIgCANIgBARQAAAXADALIAGANIAFAMQAAAHgFAEQgFAFgHAAQgGAAgMgMgAgRgZQgNAOAAAQQAAARAGAJQAGAJAMAAQAHAAAHgDQAHgDAHgFQgEgdAAgPIAAgJIACgMIgEgCIgEAAQgQAAgNANg");
	this.shape_27.setTransform(75.1,4.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AhABRQAAgHADgEQAFgEAIAAIAQACQALACAHAAQATAAAJgMQAIgLACgYQgHAGgIADQgIAEgJAAQgZAAgPgRQgRgQABgZQAAgiAUgWQAXgWAkAAQAMAAAIADQAJADAFAGQAQACAAARQAAAJgDAPQgEAdgCAhQgBApgMASQgRAZgqAAQgwAAAAgUgAgTg5QgKANAAAVQgBAPAGAHQAGAHALAAQAJAAALgLQAKgMACgLQACgMADgaIgJgEIgHgBQgVAAgMAOg");
	this.shape_28.setTransform(49.6,7.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAaA6IgEgaQgBgOAAgMIAAgKIAAgMIABgEIAAgGQAAgLgFAAQgLAAgKAOQgKAOgGAVIgBALIgBAMIgBALIAAALQAAAHgFAFQgFAFgIAAQgHAAgFgFQgGgFAAgHIAAgLIgBgLIACgjIABghIAAgMIAAgLQAAgHAFgFQAFgFAHAAQARAAABAUIAAABQATgSATAAQAYAAAJAUQAHANAAAbIAAAJIAAAHQAAAKACAQQADAPAAAKQAAAHgFAFQgFAFgIAAQgPAAgCgQg");
	this.shape_29.setTransform(36.1,4.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgPBcQgFgFAAgHIgBgXIAAgYIABgcIABgbQAAgIAFgEQAFgFAIAAQAHAAAFAFQAEAEAAAIIgBAbIgBAcIAAAYIABAXQAAAHgFAFQgFAFgHAAQgHAAgFgFgAgLhAQgGgGAAgHQAAgIAGgGQAGgFAHAAQAIAAAGAFQAGAGAAAIQAAAHgGAGQgGAFgIABQgHgBgGgFg");
	this.shape_30.setTransform(25.8,1.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAaA6IgDgaQgCgOAAgMIAAgKIABgMIAAgEIAAgGQAAgLgFAAQgLAAgJAOQgLAOgGAVIgBALIAAAMIgBALIgBALQAAAHgFAFQgFAFgIAAQgHAAgGgFQgEgFAAgHIgBgLIgBgLIACgjIABghIAAgMIAAgLQAAgHAFgFQAFgFAIAAQAQAAACAUIAAABQASgSATAAQAYAAAKAUQAGANAAAbIAAAJIAAAHQAAAKADAQQACAPAAAKQAAAHgFAFQgFAFgIAAQgPAAgCgQg");
	this.shape_31.setTransform(15.2,4.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAfA6QgMAGgJADQgJADgFAAQgfAAgPgRQgPgQAAghQAAgdAWgWQAXgWAfAAQAMAAAPAHQAUAIAAALQAAAFgDADIgCANIgBARQAAAXADALIAGANIAFAMQAAAHgFAEQgFAFgHAAQgGAAgMgMgAgRgZQgNAOAAAQQAAARAGAJQAGAJAMAAQAHAAAHgDQAHgDAHgFQgEgdAAgPIAAgJIACgMIgEgCIgEAAQgQAAgNANg");
	this.shape_32.setTransform(1.1,4.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgrA3QgVgQAAgdQAAggARgWQASgYAfAAQAXAAAOAHQATAJAAAUQAAAOgPALQgIAFgVAIIgpATQAFAHAJADQAJADAKAAQARAAAMgHQAKgGAHAAQANAAAAANQAAAOgVAJQgSAIgUAAQgeAAgTgOgAgQgeQgJAIgFAQIAdgNQAQgHAKgHQgJgFgOAAQgLAAgHAIg");
	this.shape_33.setTransform(-13.6,4.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgKBKQgFgFAAgHQAAgPgDgcQgDgbAAgPQAAgIgCgFQgPAJgOAUIgDACIAAAoIAAAJIgBAJQAAAHgFAEQgFAEgIAAQgLAAgDgKQgDgGAAgOIAAguIgBgTIAAgSQAAgMAEgJQAFgLAJAAQAHAAAGAFQAFAGAAAGIgBALQATgWARAAQAUAAAIAPQAIgHAJgDQAKgEALAAQAYAAAJAZQACAFAEAdQADAUAGAwQAAAHgFAFQgGAFgHAAQgOAAgDgPIgFglIgEgkQgDgXgGAAQgDAAgKAGIgPAKQAAAPADAaQAEAcAAAOQAAAHgFAFQgFAEgIAAQgGAAgFgEg");
	this.shape_34.setTransform(-30.6,4.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAJAdQgEgEAAgGIAFgTIAHgTQAEgKAMAAQAGAAAFAEQAGAEAAAGQAAADgGAQIgHAUQgFAJgKAAQgHAAgGgEgAgsAdQgFgEAAgGQAAgFAFgOIAIgVQADgLANAAQAIAAAEAEQAGAEAAAGQgBAFgFAOIgIAWQgEAKgMAAQgHAAgFgEg");
	this.shape_35.setTransform(-57.8,-6.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgyBCQgDgEAAgIIAAhSIAAgLIAAgMQAAgHAEgFQAFgFAIAAQAOAAACAPQAWgRAbAAQAZAAABAiIAAAIQgCAUgQAAQgQAAgBgRIAAgNQgcAFgMAZIABA+QgBAIgFAFQgEAEgIAAQgIAAgFgFg");
	this.shape_36.setTransform(-69.4,4.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgrA3QgVgQAAgdQAAggARgWQASgYAfAAQAXAAAOAHQATAJAAAUQAAAOgPALQgIAFgVAIIgpATQAFAHAJADQAJADAKAAQARAAAMgHQAKgGAHAAQANAAAAANQAAAOgVAJQgSAIgUAAQgeAAgTgOgAgQgeQgJAIgFAQIAdgNQAQgHAKgHQgJgFgOAAQgLAAgHAIg");
	this.shape_37.setTransform(-83.4,4.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AglBgQgEAFgIAAQgGAAgFgFQgFgEAAgHIABgJIAAgKIAAiOQgBgKAFgHQAFgJAJAAQAOAAAAAPIgBAFIAAAGIAAAwQAJgFAJgDQAIgCAHAAQAfAAASAVQARAUAAAdQAAAdgUAVQgVAVgcAAQgSAAgQgHgAgOgCQgJADgKAIIAAA1QARAIANAAQAPAAAKgLQALgLAAgQQAAgRgJgLQgJgKgPAAQgFAAgJAEg");
	this.shape_38.setTransform(-98.1,0.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgKBKQgFgFAAgHQAAgPgDgcQgDgbAAgPQAAgIgCgFQgPAJgOAUIgDACIAAAoIAAAJIgBAJQAAAHgFAEQgFAEgIAAQgLAAgDgKQgDgGAAgOIAAguIgBgTIAAgSQAAgMAEgJQAFgLAJAAQAHAAAGAFQAFAGAAAGIgBALQATgWARAAQAUAAAIAPQAIgHAJgDQAKgEALAAQAYAAAJAZQACAFAEAdQADAUAGAwQAAAHgFAFQgGAFgHAAQgOAAgDgPIgFglIgEgkQgDgXgGAAQgDAAgKAGIgPAKQAAAPADAaQAEAcAAAOQAAAHgFAFQgFAEgIAAQgGAAgFgEg");
	this.shape_39.setTransform(-115.7,4.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAZA/QgQAGgQAAQgSAAgNgIQgNgIgDgRQgFggAAgYQAAgQAEgVQACgOAPAAQAHAAAFAEQAGAFAAAHIgCARIgCASIABAeQABAOADAIIAGADIAGAAQANAAARgEIAAgWIgBgUQAAgaADgTQACgPAPAAQAIAAAFAEQAFAFAAAHIgDAtIABAZIAAAZIAAAIIABAIQAAAHgGAFQgFAEgHAAQgLAAgFgJg");
	this.shape_40.setTransform(-132.9,4.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAaA6IgEgaQgBgOAAgMIAAgKIABgMIAAgEIAAgGQAAgLgFAAQgLAAgKAOQgKAOgGAVIgBALIgBAMIAAALIgBALQAAAHgFAFQgFAFgIAAQgHAAgGgFQgEgFAAgHIgBgLIgBgLIACgjIABghIAAgMIAAgLQAAgHAFgFQAFgFAHAAQARAAABAUIAAABQATgSATAAQAYAAAJAUQAHANAAAbIAAAJIAAAHQAAAKACAQQADAPAAAKQAAAHgFAFQgFAFgIAAQgPAAgCgQg");
	this.shape_41.setTransform(-146.2,4.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgqA3QgWgQAAgdQAAggARgWQATgYAfAAQAWAAAOAHQAUAJgBAUQAAAOgPALQgIAFgVAIIgqATQAHAHAIADQAJADAKAAQARAAAMgHQALgGAFAAQAOAAAAANQAAAOgWAJQgRAIgUAAQgdAAgTgOgAgQgeQgJAIgFAQIAcgNQARgHAJgHQgIgFgNAAQgMAAgHAIg");
	this.shape_42.setTransform(163.9,-34);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAeBdQgEgKgCgTQgCgSAAgLIAAgKIAAgKIAAgLQgBgGgGAAQgOAAgKAMQgGAHgKASQAAAugFAJQgEALgLAAQgHAAgGgFQgFgFAAgHIABgGQABgDABggQgBgZABg7IAAgEIABgUIgBgLIgCgMQAAgHAGgFQAFgFAHAAQANAAAEAOQACAHAAAQIAAAaIgBAZQAJgKALgEQAJgFAMAAQAWAAAKANQAHAJABASIACAfIACAZIAFAZIAAAEQAAAHgFAFQgGAFgHAAQgNAAgDgNg");
	this.shape_43.setTransform(149.6,-37.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgKBZQgGgFAAgHIAAgOIAAgNIgChBIgXgCQgRgCABgPQAAgHAEgFQAGgFAHAAIAVACIAAgOIgBgMQAAgHAGgFQAFgFAHAAQASAAAAAgIAAAKIAMgBQAPAAAGACQAJAEABAMQAAAHgGAFQgEAFgIAAIgGgBIgHAAIgMABIACBCIABAGIAAAIQAAAdgTAAQgGAAgEgEg");
	this.shape_44.setTransform(135.7,-36.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AARAXIgIgWQgGgOAAgFQABgGAFgEQAFgEAGAAQAOAAACALIAIAVQAGAOAAAFQAAAGgFAEQgFAEgHAAQgMAAgEgKgAgkAYIgHgUQgGgQAAgDQAAgGAGgEQAEgEAHAAQAMAAAEAKIAHATIAFATQABAGgGAEQgFAEgHAAQgKAAgFgJg");
	this.shape_45.setTransform(123.7,-44.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAaA6IgDgaQgDgOAAgMIABgKIAAgMIABgEIAAgGQAAgLgFAAQgLAAgJAOQgLAOgFAVIgCALIAAAMIgCALIAAALQAAAHgFAFQgFAFgIAAQgIAAgFgFQgEgFgBgHIAAgLIgBgLIACgjIACghIAAgMIgBgLQAAgHAFgFQAFgFAIAAQAQAAACAUIAAABQASgSAUAAQAYAAAJAUQAGANAAAbIAAAJIgBAHQAAAKAEAQQACAPAAAKQAAAHgFAFQgFAFgHAAQgQAAgCgQg");
	this.shape_46.setTransform(100.4,-34.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgpA2QgSgTgBgcQgBgcAQgWQATgZAigBQAZABAPATQAOATAAAbQAAAcgQAVQgSAYgcAAQgYAAgRgQgAgSgVQgHAMAAAQQAAAPAJAHQAGAHAKAAQAKAAAIgIQAJgIABgPQABgogXAAIgBAAQgOAAgJAOg");
	this.shape_47.setTransform(86.5,-33.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgPBcQgFgFAAgHIgBgXIAAgYIABgcIABgbQAAgIAFgEQAFgFAIAAQAHAAAFAFQAEAEAAAIIgBAbIgBAcIAAAYIABAXQAAAHgFAFQgFAFgHAAQgHAAgFgFgAgLhAQgGgGAAgHQAAgIAGgGQAGgFAHAAQAIAAAGAFQAGAGAAAIQAAAHgGAGQgGAFgIABQgHgBgGgFg");
	this.shape_48.setTransform(76.5,-37);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgjBCQgTgHAAgNQAAgNAPAAQAGAAALAEQALADAGAAQAZAAAAgKQAAgHgSgIQgZgLgIgFQgSgMAAgSQAAgZAbgKQAQgEAgAAQAMgBAHAEQAIAEAAAMQAAAXgMAAQgNAAgDgLIgKgBQgeAAAAAJQAAAFASAJQAZALAJAGQASANAAARQAAAWgUALQgQAIgXABQgRgBgOgFg");
	this.shape_49.setTransform(66,-34.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgjBCQgTgHAAgNQAAgNAPAAQAGAAALAEQALADAGAAQAZAAAAgKQAAgHgSgIQgZgLgIgFQgSgMAAgSQAAgZAbgKQAQgEAgAAQAMgBAHAEQAIAEAAAMQAAAXgMAAQgNAAgDgLIgKgBQgeAAAAAJQAAAFASAJQAZALAJAGQASANAAARQAAAWgUALQgQAIgXABQgRgBgOgFg");
	this.shape_50.setTransform(53.4,-34.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgrA3QgVgQAAgdQAAggARgWQATgYAeAAQAXAAAOAHQATAJABAUQAAAOgQALQgHAFgWAIIgqATQAGAHAJADQAJADAKAAQARAAAMgHQAKgGAHAAQANAAAAANQAAAOgWAJQgRAIgUAAQgdAAgUgOgAgRgeQgIAIgFAQIAdgNQAPgHALgHQgJgFgOAAQgKAAgJAIg");
	this.shape_51.setTransform(39.8,-34);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgxBCQgEgEAAgIIAAhSIAAgLIAAgMQAAgHAEgFQAEgFAIAAQAOAAADAPQAVgRAcAAQAaAAAAAiIAAAIQgCAUgQAAQgRAAABgRIgBgNQgbAFgNAZIAAA+QAAAIgEAFQgGAEgHAAQgIAAgEgFg");
	this.shape_52.setTransform(26.7,-34);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("Ag0BmQgFgFAAgIIAAgvIAAgxQAAgbgBgUIgCgZQgBgLAFgHQAGgJAJAAQAHAAAFAFQAFAFAAAHIAAABQAIgFAIgCQAIgDAJAAQAdAAANAZQALATgBAdQABAbgRATQgRATgcAAQgKAAgMgCIAAAzQAAAIgFAFQgFAFgHAAQgIAAgFgFgAgGg8QgIAEgJAHQABAaABAaQALADAKAAQANAAAHgIQAHgIgBgPQAAgRgBgGQgEgQgMAAQgIAAgHAEg");
	this.shape_53.setTransform(13.4,-31);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAkBDQgMgNgZggIggAeIgKAKQgGAFgHAAQgHAAgFgEQgFgGAAgGQAAgIAKgJIARgOIAYgXIgOgUQgJgMgIgGQgGgFAAgHQAAgHAFgFQAFgFAHAAQAJAAAQASIATAaIAWgSQANgMAGgIQAFgIAJAAQAHAAAFAFQAFAFAAAGQAAAJgNANIgSAQIgUASIAnAvQAEAFAAAEQAAAHgFAFQgGAFgGAAQgIAAgFgGg");
	this.shape_54.setTransform(-1.4,-34.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgqA3QgWgQAAgdQAAggARgWQATgYAfAAQAWAAAOAHQAUAJgBAUQAAAOgPALQgIAFgVAIIgqATQAHAHAIADQAJADAKAAQARAAAMgHQALgGAFAAQAOAAAAANQAAAOgWAJQgRAIgUAAQgdAAgTgOgAgQgeQgJAIgFAQIAcgNQARgHAJgHQgIgFgNAAQgMAAgHAIg");
	this.shape_55.setTransform(-16.5,-34);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgrA3QgVgQAAgdQAAggARgWQASgYAfAAQAXAAAOAHQATAJAAAUQAAAOgPALQgHAFgWAIIgpATQAFAHAJADQAJADAKAAQARAAAMgHQAKgGAHAAQANAAAAANQAAAOgVAJQgSAIgUAAQgdAAgUgOgAgRgeQgIAIgFAQIAdgNQAPgHALgHQgJgFgOAAQgKAAgJAIg");
	this.shape_56.setTransform(-42.3,-34);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAeBdQgEgKgCgTQgCgSAAgLIAAgKIAAgKIAAgLQgBgGgGAAQgOAAgKAMQgGAHgKASQAAAugFAJQgEALgLAAQgHAAgGgFQgFgFAAgHIABgGQABgDABggQgBgZABg7IAAgEIABgUIgBgLIgCgMQAAgHAGgFQAFgFAHAAQANAAAEAOQACAHAAAQIAAAaIgBAZQAJgKALgEQAJgFAMAAQAWAAAKANQAHAJABASIACAfIACAZIAFAZIAAAEQAAAHgFAFQgGAFgHAAQgNAAgDgNg");
	this.shape_57.setTransform(-56.7,-37.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgMBcQgFgFgBgHIABgFIABgGIgBgSIgBgRQAAgRgDgdIgDguIgHAAQgcAAgRgEQgOgDAAgNQAAgHAFgFQAFgGAJAAIAUADIAUABIAYAAIAVgBIAdACIAeABQAHAAAFAFQAFAFABAHQgBAIgFAFQgFAFgHAAIgggCIgegBIADAzQADAgAAATIABANIABANQgBAJgEAIQgEAKgKAAQgGAAgGgFg");
	this.shape_58.setTransform(-73.3,-37.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgRAiQAAgHAFgFQAGgEAGAAQAUAAAAAdQAAAIgGAEQgFAFgIAAQgSAAAAgegAgNgaQgFgEAAgIIAAgEIgBgFQAAgGAGgFQAFgFAHAAQASAAAAAZQAAAIgFAEQgFAFgHAAQgHAAgGgFg");
	this.shape_59.setTransform(-99.2,-35.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("Ag6BhQgOgMAAgpQAAgRACghQADgiAAgRIgCgNIgBgOQAAgTASAAQAFAAAFADIAcgFQANgCALAAQAgAAATAHQAMAFAAALQAAAHgFAFQgFAGgHAAIgGgBQgUgFgUAAIgTABIgXAFIgCAyIAxgFIAfgCQAHAAAGAFQAFAEAAAIQAAAOgQACIgfADIg1AFIgBAaQAAAZADADQACACAOAAIAXgBIAYAAIAHgBIAHAAQAIAAAFAEQAGAEAAAJQAAAOgPADQgNACgnAAQgpAAgMgLg");
	this.shape_60.setTransform(-112.8,-37.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AhDBMIADgnQADg3AAhDQAAgIAFgEQAFgGAIAAQAHAAAFAGQAGAEAAAIQgBBEgDA4IgDAeQAfAAAugOIAFgBQAIAAAGAFQAEAGAAAGQAAALgLAFQgPAHgfAFQgcAFgSAAQggAAAAgcg");
	this.shape_61.setTransform(-128,-36.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgzBXQghgaAAg/IABgSIAAgSIABgOIAAgPQAAgKAEgJQAFgMAIAAQAHAAAGAEQAGAGAAAHIgBAVIAAAWIAAASIgBASQAAASAFAQQAFAVAKAHQAFAFAVAAQAgAAAMg5QAGgeAAg2QAAgGAEgHQAGgJAKAAQAJAAAEAGQAEAGAAAFQAAAygFAcQgHArgVAcQgKAMgNAJQgQAKgPAAQghAAgQgMg");
	this.shape_62.setTransform(-145.3,-36.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AhEBfQgGgFAAgIIABgcIAAgdIAAhlQAAgIAFgHQAHgJALABIAgADQARACAMAGQA2AbAAApQAAAQgLAMQgMANgWAJQAhATARATQAFAFAAAGQAAAHgGAGQgFAFgHAAQgHAAgGgGQgmgkgtgOIABApQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgnADIAGABQAfAAAOgHQAHgDAFgGQAFgFAAgDQAAgOgSgOQgQgMgTgCIgPgBg");
	this.shape_63.setTransform(-162.8,-37.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-186.2,-58.3,372.4,116.8);


(lib.static_rule3a_example1b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHAHQgDgDAAgEQAAgCADgDQADgDAEAAQAFAAADACQADADAAADQAAAEgDADQgEACgEAAQgEAAgDgCg");
	this.shape.setTransform(168.1,16.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAOAfIgCgOIgBgOIAAgFIAAgGIAAgDIABgDQAAgFgDAAQgGAAgEAHQgGAIgDAKIgBAGIAAAHIAAAFIgBAGQAAAEgDADQgDADgEAAQgEAAgCgDQgDgDAAgEIgBgFIAAgGIABgTIABgSIAAgGIgBgGQABgEADgCQACgDAEAAQAJAAABALIAAABQAKgKAKAAQANAAAFAKQADAIAAAOIAAAFIAAADIABAOIACAOQAAAEgDACQgCADgEAAQgJAAgBgJg");
	this.shape_1.setTransform(161.5,13);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgVAdQgKgJgBgRQAAgOAIgMQALgOARABQAOgBAIALQAHALAAAOQAAAPgIALQgKAMgPAAQgMAAgJgIgAgJgKQgEAGAAAHQAAAJAFAEQADAEAFgBQAFAAAFgDQAFgFAAgJQABgUgNAAQgHgBgFAJg");
	this.shape_2.setTransform(154,13.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgIAyQgDgDABgEIAAgMIgBgNIABgPIAAgOQABgEACgDQACgCAFAAQADAAADACQACADAAAEIgBAOIAAAPIAAANIAAAMQAAAEgCADQgDACgDAAQgEAAgDgCgAgGgiQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQAEADAAAEQAAAEgEADQgDADgEAAQgEAAgDgDg");
	this.shape_3.setTransform(148.7,11.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgFAvQgDgCAAgEIAAgHIABgHIgCgjIgNgBQgJgBAAgIQAAgDADgDQADgDAEAAIALABIAAgHIAAgHQAAgEADgDQACgCAEAAQAKAAAAARIAAAGIAGgBQAJAAACABQAFACAAAHQABAEgDACQgDADgEAAIgDAAIgEAAIgGAAIABAjIABADIAAAEQgBAQgJAAQgDAAgDgDg");
	this.shape_4.setTransform(143.2,11.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgIAyQgCgDgBgEIAAgMIAAgNIAAgPIABgOQAAgEADgDQADgCAEAAQADAAACACQADADAAAEIgBAOIAAAPIAAANIAAAMQAAAEgDADQgCACgDAAQgEAAgDgCgAgFgiQgDgDgBgEQABgEADgDQADgDADAAQAEAAADADQAEADAAAEQAAAEgEADQgDADgEAAQgDAAgDgDg");
	this.shape_5.setTransform(138.2,11.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgFAvQgDgCAAgEIAAgHIAAgHIgBgjIgNgBQgIgBgBgIQABgDADgDQACgDAEAAIAMABIAAgHIgBgHQAAgEADgDQACgCAFAAQAJAAAAARIAAAGIAHgBQAHAAADABQAGACgBAHQAAAEgCACQgDADgEAAIgDAAIgDAAIgHAAIABAjIAAADIAAAEQABAQgKAAQgDAAgDgDg");
	this.shape_6.setTransform(132.7,11.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgWAeQgMgJAAgQQAAgQAJgMQAKgNAQAAQAMAAAJAEQAJAFABAKQgBAIgHAGIgQAGIgWALQADADAFACQAEACAGAAQAIAAAHgEQAGgDADAAQAHAAAAAHQAAAHgLAFQgKAEgKAAQgQAAgKgHgAgJgPQgEAEgDAIIAQgGQAIgEAGgEQgFgDgIAAQgFAAgFAFg");
	this.shape_7.setTransform(125.4,13);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgcA3QgDgDAAgEIABgZIAAgaIgBgaIgBgNQAAgGACgEQAEgEAFAAQADAAADACQACADAAADIAAABIAJgEQAEgBAFAAQAPAAAIANQAFAKAAAQQAAAOgJAKQgIALgQAAIgMgCIAAAcQABAEgDADQgDACgEAAQgEAAgDgCgAgDggQgFACgEAEIABAcQAGACAFAAQAHAAAEgEQADgFAAgIIgBgMQgCgJgGAAQgFAAgDACg");
	this.shape_8.setTransform(117.9,14.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgFAoQgDgDAAgEIgBgXIgCgWIgBgHQgIAFgIALIgBABIAAAVIAAAFIAAAFQAAADgDACQgDACgEAAQgGAAgCgFIgBgLIAAgYIgBgKIAAgKQAAgGACgFQADgGAFAAQAEAAADADQADADAAADIgBAGQAKgMAJAAQALAAAEAIQAEgDAFgCQAFgCAGAAQANAAAFANIADATIAFAkQAAAEgDACQgCADgEAAQgIAAgCgIIgCgUIgCgTQgCgMgDAAIgHADIgJAFIACAWIACAWQAAAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape_9.setTransform(108.7,13.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgVAdQgKgJgBgRQAAgOAIgMQALgOARABQAOgBAIALQAHALAAAOQAAAPgIALQgKAMgPAAQgMAAgJgIgAgJgKQgEAGAAAHQAAAJAFAEQADAEAFgBQAFAAAFgDQAFgFAAgJQABgUgNAAQgHgBgFAJg");
	this.shape_10.setTransform(99.4,13.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgVAeQgKgJAAgPQAAgMAJgPQALgRAOAAQAHABAJADQAMAFAAAGQAAAEgCACQgDADgEAAQgDAAgEgEQgEgDgIAAQgEAAgHAKQgGAKAAAHQAAAHAGAEQAFAEAHAAQAEAAAHgEIAIgDQAEAAADADQACACAAAEQAAAGgLAEQgLAGgGAAQgOAAgLgJg");
	this.shape_11.setTransform(92.1,13.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgXAeQgLgJAAgQQAAgQAKgMQAKgNAQAAQAMAAAHAEQALAFgBAKQABAIgJAGIgPAGIgWALQADADAFACQAFACAEAAQAKAAAGgEQAGgDADAAQAHAAAAAHQAAAHgMAFQgJAEgLAAQgPAAgLgHgAgIgPQgFAEgCAIIAPgGQAIgEAFgEQgEgDgHAAQgGAAgEAFg");
	this.shape_12.setTransform(78.5,13);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAQAyQgCgFgBgKIgBgQIAAgFIAAgGIAAgFQgBgDgDAAQgHAAgFAGIgJANQAAAZgCAFQgDAFgGAAQgEAAgDgCQgDgDAAgDIABgEIABgTIAAgsIAAgDIABgKIgBgHIgBgGQAAgEADgCQADgDAEAAQAHAAACAHIABANIAAAOIAAANQAFgFAFgCQAFgDAGAAQAMAAAFAHQAEAFABAJIABARIABANIACAOIABACQAAAEgDADQgDACgEAAQgHAAgCgHg");
	this.shape_13.setTransform(70.8,11.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgFAvQgDgCAAgEIAAgHIABgHIgCgjIgNgBQgIgBgBgIQAAgDAEgDQACgDAEAAIAMABIAAgHIgBgHQAAgEADgDQADgCAEAAQAIAAABARIAAAGIAHgBQAHAAADABQAGACgBAHQAAAEgCACQgDADgEAAIgDAAIgDAAIgHAAIABAjIAAADIAAAEQABAQgKAAQgDAAgDgDg");
	this.shape_14.setTransform(63.3,11.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgaAkQgCgDAAgEIAAgrIAAgHIAAgGQAAgEADgCQACgDAEAAQAIAAABAIQALgJAPAAQAOAAgBASIAAAEQgBALgIAAQgJAAAAgJIAAgHQgPADgGANIAAAhQAAAEgDADQgCACgEAAQgFAAgCgCg");
	this.shape_15.setTransform(50.7,13.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgVAdQgKgJgBgRQAAgOAIgMQALgOARABQAOgBAIALQAHALAAAOQAAAPgIALQgKAMgPAAQgMAAgJgIgAgJgKQgEAGAAAHQAAAJAFAEQADAEAFgBQAFAAAFgDQAFgFAAgJQABgUgNAAQgHgBgFAJg");
	this.shape_16.setTransform(43.4,13.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgMA6QgDgDAAgDIAAgCIACgTIAAghIgFABIgEAAQgEAAgDgCQgCgDAAgEQAAgGAGgCIAMgBIABgIQACgPAGgIQAHgJARAAQAMAAAAAJQAAAJgLAAQgJAAgDAGQgDAEgBAJIAAACIANgBQANAAAAAJQAAAJgOAAIgNAAIAAASIAAASQAAANgBAHQgCAHgHAAQgDAAgDgCg");
	this.shape_17.setTransform(36.2,11.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgWAeQgMgJAAgQQAAgQAJgMQALgNAPAAQAMAAAJAEQAJAFABAKQgBAIgHAGIgQAGIgWALQADADAFACQAEACAGAAQAIAAAHgEQAGgDADAAQAHAAAAAHQAAAHgLAFQgKAEgKAAQgQAAgKgHgAgJgPQgEAEgDAIIAQgGQAIgEAGgEQgFgDgIAAQgFAAgFAFg");
	this.shape_18.setTransform(22.7,13);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgFAvQgDgCAAgEIAAgHIAAgHIgBgjIgMgBQgKgBABgIQAAgDACgDQADgDAEAAIALABIAAgHIAAgHQAAgEADgDQADgCADAAQAKAAgBARIAAAGIAIgBQAHAAADABQAFACABAHQgBAEgCACQgCADgFAAIgDAAIgDAAIgHAAIABAjIAAADIAAAEQAAAQgKAAQgDAAgCgDg");
	this.shape_19.setTransform(15.6,11.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AARAfIgMAFIgGACQgRAAgIgJQgJgJABgSQgBgPAMgMQAMgMAQAAQAHAAAIAEQALAEAAAGQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAIAAAHIgBAKQAAAMACAFIADAIIADAGQgBAEgCACQgDADgDAAQgDAAgHgHgAgJgNQgGAHAAAJQgBAJADAFQAEAEAGAAIAHgBIAHgEIgBgYIAAgFIAAgGIgBgBIgCAAQgJAAgHAHg");
	this.shape_20.setTransform(8.4,13.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgGA2QgCgDAAgEIAAheQAAgEACgCQADgCAEAAQAEAAACACQACACABAEIAABaQAAANgKAAQgDAAgDgCg");
	this.shape_21.setTransform(2.5,11.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AgXAeQgLgJAAgQQAAgQAJgMQALgNAPAAQANAAAHAEQAKAFAAAKQAAAIgHAGIgQAGIgWALQADADAFACQAFACAEAAQAJAAAHgEQAFgDAEAAQAHAAAAAHQAAAHgLAFQgKAEgLAAQgPAAgLgHgAgIgPQgFAEgDAIIAQgGQAIgEAFgEQgEgDgIAAQgFAAgEAFg");
	this.shape_22.setTransform(-9.5,13);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AgaAkQgDgDAAgEIAAgrIABgHIAAgGQAAgEADgCQACgDAEAAQAHAAACAIQALgJAOAAQAOAAABASIAAAEQgBALgJAAQgJAAAAgJIAAgHQgPADgGANIAAAhQAAAEgDADQgDACgEAAQgEAAgCgCg");
	this.shape_23.setTransform(-16.5,13.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("AgXAeQgLgJAAgQQAAgQAKgMQAKgNAQAAQAMAAAHAEQALAFgBAKQABAIgJAGIgPAGIgWALQADADAFACQAFACAEAAQAKAAAGgEQAGgDADAAQAHAAAAAHQAAAHgMAFQgJAEgLAAQgPAAgLgHgAgIgPQgFAEgCAIIAPgGQAIgEAFgEQgEgDgHAAQgGAAgEAFg");
	this.shape_24.setTransform(-24.1,13);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0000").s().p("AACAWIgDgXIgCADIgKAbIgDAEQgDAFgFAAQgEAAgEgGQgDgGgDgJIgGgkIgBgKQAAgDADgDQADgCAEAAQAHAAACAHIABAJIABAKIADAQIAMghQADgJAGAAQAIAAACAKIADASIAEASIALgoQABgGAIAAQADAAAEACQACADAAAEIAAACIgPAvQgCAGgEAHQgEAEgFAAQgJAAgFgQg");
	this.shape_25.setTransform(-32.6,13.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgSAkQgLgEAAgHQAAgIAIABIAKABQAFACAEAAQANABAAgGQAAgEgKgDIgRgJQgKgHAAgJQAAgOAPgFQAIgCARAAQAHAAADACQAEACAAAGQAAAMgGAAQgHABgBgGIgGAAQgPgBAAAFQAAADAJAEQANAGAFADQAKAHAAAJQAAALgLAHQgJAEgMAAQgJABgHgDg");
	this.shape_26.setTransform(-47,13);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgaAkQgCgDAAgEIAAgrIAAgHIAAgGQAAgEACgCQADgDAEAAQAIAAABAIQALgJAPAAQAOAAgBASIAAAEQgBALgIAAQgJAAAAgJIAAgHQgOADgHANIAAAhQAAAEgDADQgCACgEAAQgFAAgCgCg");
	this.shape_27.setTransform(-53.6,13.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgXAeQgLgJAAgQQAAgQAJgMQALgNAPAAQANAAAHAEQALAFAAAKQgBAIgHAGIgQAGIgWALQADADAFACQAEACAFAAQAJAAAHgEQAFgDAEAAQAHAAAAAHQAAAHgLAFQgKAEgLAAQgPAAgLgHgAgJgPQgEAEgDAIIAQgGQAIgEAGgEQgFgDgIAAQgFAAgFAFg");
	this.shape_28.setTransform(-61.1,13);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgMA6QgDgDAAgDIAAgCIACgTIAAghIgFABIgEAAQgEAAgDgCQgCgDAAgEQAAgGAGgCIAMgBIABgIQACgPAGgIQAHgJARAAQAMAAAAAJQAAAJgLAAQgJAAgDAGQgDAEgBAJIAAACIANgBQANAAAAAJQAAAJgOAAIgNAAIAAASIAAASQAAANgBAHQgCAHgHAAQgDAAgDgCg");
	this.shape_29.setTransform(-68.6,11.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgaAkQgCgDAAgEIAAgrIAAgHIAAgGQAAgEADgCQACgDAEAAQAIAAABAIQALgJAPAAQAOAAgBASIAAAEQgBALgIAAQgJAAAAgJIAAgHQgPADgGANIAAAhQAAAEgDADQgCACgEAAQgFAAgCgCg");
	this.shape_30.setTransform(-75.3,13.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAOAiQgJADgIAAQgKAAgHgEQgHgEgBgKQgDgRAAgMQAAgJACgLQABgIAIAAQAEAAADACQADADAAAEIgBAJIgBAKIAAAQIACALIAEABIADABQAGAAAJgCIAAgMIAAgLQAAgOACgKQABgIAIAAQAEAAADACQADADgBAEIgBAYIAAANIAAANIABAFIAAAEQAAAEgDACQgDADgEAAQgGAAgCgFg");
	this.shape_31.setTransform(-82.5,13.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgSAkQgLgEAAgHQAAgIAIABIAKABQAFACAEAAQANABAAgGQAAgEgKgDIgRgJQgKgHAAgJQAAgOAPgFQAIgCARAAQAHAAADACQAEACAAAGQAAAMgGAAQgHABgBgGIgGAAQgPgBAAAFQAAADAJAEQANAGAFADQAKAHAAAJQAAALgLAHQgJAEgMAAQgJABgHgDg");
	this.shape_32.setTransform(-89.6,13);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgMA6QgDgDAAgDIAAgCIACgTIAAghIgFABIgEAAQgEAAgDgCQgCgDAAgEQAAgGAGgCIAMgBIABgIQACgPAGgIQAHgJARAAQAMAAAAAJQAAAJgLAAQgJAAgDAGQgDAEgBAJIAAACIANgBQANAAAAAJQAAAJgOAAIgNAAIAAASIAAASQAAANgBAHQgCAHgHAAQgDAAgDgCg");
	this.shape_33.setTransform(-102.6,11.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgVAdQgKgJgBgRQAAgOAIgMQALgOARABQAOgBAIALQAHALAAAOQAAAPgIALQgKAMgPAAQgMAAgJgIgAgJgKQgEAGAAAHQAAAJAFAEQADAEAFgBQAFAAAFgDQAFgFAAgJQABgUgNAAQgHgBgFAJg");
	this.shape_34.setTransform(-109.8,13.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgaAkQgDgDABgEIAAgrIAAgHIAAgGQAAgEACgCQACgDAFAAQAHAAACAIQALgJAPAAQANAAAAASIAAAEQAAALgJAAQgJAAAAgJIAAgHQgOADgHANIAAAhQAAAEgDADQgDACgDAAQgFAAgCgCg");
	this.shape_35.setTransform(-122.7,13.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgWAeQgMgJAAgQQAAgQAJgMQAKgNAQAAQAMAAAJAEQAJAFABAKQgBAIgHAGIgQAGIgWALQADADAFACQAEACAGAAQAIAAAHgEQAFgDAEAAQAHAAAAAHQAAAHgLAFQgKAEgKAAQgQAAgKgHgAgJgPQgEAEgDAIIAQgGQAIgEAGgEQgFgDgIAAQgFAAgFAFg");
	this.shape_36.setTransform(-130.2,13);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgTA0QgDACgEAAQgDAAgDgCQgDgDAAgDIABgFIAAgFIAAhNQAAgFACgEQADgEAFAAQAHAAAAAIIAAACIAAADIAAAaIAJgEIAIgBQAQAAALALQAJAKAAAQQAAAQgLALQgLALgPAAQgJAAgJgDgAgHgBIgKAFIAAAeQAJAEAHAAQAHAAAGgGQAGgGAAgJQAAgJgFgGQgEgFgJAAQgCAAgFACg");
	this.shape_37.setTransform(-138.2,11.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgFAoQgDgDAAgEIgBgXIgCgWIgBgHQgIAFgIALIgBABIAAAVIAAAFIAAAFQAAADgDACQgDACgEAAQgGAAgCgFIgBgLIAAgYIgBgKIAAgKQAAgGACgFQADgGAFAAQAEAAADADQADADAAADIgBAGQAKgMAJAAQALAAAEAIQAEgDAFgCQAFgCAGAAQANAAAFANIADATIAFAkQAAAEgDACQgCADgEAAQgIAAgCgIIgCgUIgCgTQgCgMgDAAIgHADIgJAFIACAWIACAWQAAAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape_38.setTransform(-147.7,13.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAOAiQgJADgIAAQgKAAgHgEQgHgEgBgKQgDgRAAgMQAAgJACgLQABgIAIAAQAEAAADACQADADAAAEIgBAJIgBAKIAAAQIACALIAEABIADABQAGAAAJgCIAAgMIAAgLQAAgOACgKQABgIAIAAQAEAAADACQADADgBAEIgBAYIAAANIAAANIABAFIAAAEQAAAEgDACQgDADgEAAQgGAAgCgFg");
	this.shape_39.setTransform(-157,13.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAOAfIgCgOIgBgOIABgFIAAgGIAAgDIAAgDQAAgFgDAAQgGAAgFAHQgFAIgDAKIgBAGIAAAHIgBAFIAAAGQAAAEgDADQgDADgEAAQgDAAgEgDQgCgDAAgEIgBgFIAAgGIABgTIABgSIAAgGIgBgGQAAgEADgCQADgDAEAAQAJAAAAALIABABQAKgKAKAAQANAAAFAKQADAIAAAOIAAAFIAAADIABAOIACAOQAAAEgDACQgCADgFAAQgIAAgBgJg");
	this.shape_40.setTransform(-164.1,13);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAYAnQgDgIgDgLIgRACIgPACIgLAWQgDAFgGAAQgDAAgEgCQgDgDAAgEQAAgDAKgVIAAgDQAAgEAHgCIAVgiQAQgZAEAAQAIAAACAJIAEAVIAKAsIAEAJQACAGABAEQAAADgDADQgDACgEAAQgFAAgGgMgAgEAGIAIAAIAKgBIgFgXIgNAYg");
	this.shape_41.setTransform(-179.1,11.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgJASQAAgDADgDQADgCADAAQALAAAAAPQAAAEgDADQgDACgEAAQgKAAAAgQgAgGgNQgDgDAAgEIAAgCIgBgDQAAgDADgDQADgCAEAAQAJAAAAANQAAAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape_42.setTransform(-126.2,-9.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgXAeQgLgJAAgQQAAgQAJgMQALgNAPAAQANAAAHAEQAKAFAAAKQAAAIgIAGIgPAGIgWALQADADAFACQAFACAEAAQAKAAAGgEQAGgDADAAQAHAAAAAHQAAAHgMAFQgJAEgLAAQgPAAgLgHgAgIgPQgFAEgDAIIAQgGQAIgEAFgEQgEgDgIAAQgFAAgEAFg");
	this.shape_43.setTransform(-133.3,-8.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgFA2QgEgDAAgEIAAheQAAgEAEgCQACgCADAAQAEAAADACQACACAAAEIAABaQABANgKAAQgDAAgCgCg");
	this.shape_44.setTransform(-139.1,-10.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgcA3QgCgDAAgEIAAgZIAAgaIgBgaIgBgNQAAgGADgEQACgEAGAAQADAAADACQACADABADIAAABIAJgEQADgBAFAAQAPAAAHANQAGAKAAAQQAAAOgJAKQgJALgPAAIgLgCIAAAcQgBAEgCADQgCACgFAAQgEAAgDgCgAgDggQgEACgFAEIABAcQAGACAFAAQAHAAAEgEQADgFABgIIgBgMQgCgJgHAAQgEAAgEACg");
	this.shape_45.setTransform(-144.6,-6.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgFAoQgDgDAAgEIgBgXIgCgWIgBgHQgIAFgIALIgBABIAAAVIAAAFIAAAFQAAADgDACQgDACgEAAQgGAAgCgFIgBgLIAAgYIgBgKIAAgKQAAgGACgFQADgGAFAAQAEAAADADQADADAAADIgBAGQAKgMAJAAQALAAAEAIQAEgDAFgCQAFgCAGAAQANAAAFANIADATIAFAkQAAAEgDACQgCADgEAAQgIAAgCgIIgCgUIgCgTQgCgMgDAAIgHADIgJAFIACAWIACAWQAAAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape_46.setTransform(-153.8,-8.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAQAfIgLAFIgHACQgQAAgIgJQgIgJAAgSQAAgPALgMQANgMAPAAQAHAAAJAEQAKAEAAAGQAAABAAAAQAAABAAABQgBAAAAAAQAAABAAAAIgBAHIgBAKQAAAMACAFIADAIIADAGQAAAEgDACQgDADgDAAQgEAAgHgHgAgJgNQgGAHAAAJQAAAJACAFQAEAEAGAAIAHgBIAIgEIgCgYIAAgFIABgGIgCgBIgDAAQgIAAgHAHg");
	this.shape_47.setTransform(-163.2,-8.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AATAkIgTgYIgSAQIgFAFQgDADgDAAQgFAAgCgCQgDgDAAgEQAAgEAFgFIAJgHIAOgMIgIgLIgJgKQgDgDAAgDQAAgEACgDQADgCAEAAQAEAAAJAJIAKAOIAMgJQAHgHADgEQADgEAFAAQADAAADACQADADAAADQAAAFgHAHIgKAJIgKAJIAUAZQADADgBACQAAAEgCADQgDACgEAAQgEAAgDgDg");
	this.shape_48.setTransform(-171.3,-8.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgfA0QgHgHAAgWIABgaIABgcIAAgHIgBgHQAAgKAKAAQADAAACABIAPgCIANgBQARAAAKADQAGADAAAGQAAAEgCACQgDAEgEAAIgDgBQgLgDgKAAIgKABIgNACIAAAbIAZgCIARgBQAEAAADACQADADAAAEQAAAHgJABIgQACIgdACIAAAOQAAAOABACIAJAAIAMAAIANAAIAEAAIAEgBQAEAAACACQAEADAAAFQAAAHgIACQgHABgVAAQgWAAgHgGg");
	this.shape_49.setTransform(-179.6,-10.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-186.2,-22.5,372.4,45.1);


(lib.static_rule3a_example1a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNAMQgHgFAAgHQAAgFAHgGQAGgFAHAAQAJAAAGAFQAGAFAAAGQAAAHgGAFQgGAFgJAAQgHAAgGgFg");
	this.shape.setTransform(126.6,48.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAaA6IgEgaQgBgOAAgMIAAgKIAAgMIABgEIAAgGQAAgLgFAAQgLAAgKAOQgKAOgGAVIgBALIgBAMIgBALIAAALQAAAHgFAFQgFAFgIAAQgHAAgFgFQgGgFAAgHIAAgLIgBgLIACgjIABghIAAgMIAAgLQAAgHAFgFQAFgFAHAAQARAAABAUIAAABQATgSATAAQAYAAAJAUQAHANAAAbIAAAJIAAAHQAAAKACAQQADAPAAAKQAAAHgFAFQgFAFgIAAQgPAAgCgQg");
	this.shape_1.setTransform(114.4,42.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgpA2QgSgTgBgcQgBgcAQgWQATgZAigBQAZABAPATQAOATAAAbQAAAcgQAWQgSAXgcAAQgYAAgRgQgAgSgVQgHAMAAAQQAAAPAJAHQAGAHAKAAQAKAAAIgHQAJgJABgPQABgogXAAIgBAAQgOAAgJAOg");
	this.shape_2.setTransform(100.5,42.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgPBcQgFgFAAgHIgBgXIAAgYIABgcIABgbQAAgIAFgEQAFgFAIAAQAHAAAFAFQAEAEAAAIIgBAbIgBAcIAAAYIABAXQAAAHgFAFQgFAFgHAAQgHAAgFgFgAgLhAQgGgGAAgHQAAgIAGgGQAGgFAHAAQAIAAAGAFQAGAGAAAIQAAAHgGAGQgGAFgIABQgHgBgGgFg");
	this.shape_3.setTransform(90.5,39.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgKBZQgGgFAAgHIAAgOIAAgNIgBhBIgZgCQgQgCAAgPQABgHAFgFQAEgFAIAAIAWACIgBgOIAAgMQAAgHAEgFQAGgFAHAAQASAAAAAgIAAAKIAMgBQAPAAAFACQAKAEAAAMQAAAHgEAFQgGAFgHAAIgGgBIgHAAIgLABIACBCIAAAGIAAAIQAAAdgSAAQgHAAgEgEg");
	this.shape_4.setTransform(80.4,40.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgPBcQgFgFAAgHIgBgXIAAgYIABgcIABgbQAAgIAFgEQAFgFAIAAQAHAAAFAFQAEAEAAAIIgBAbIgBAcIAAAYIABAXQAAAHgFAFQgFAFgHAAQgHAAgFgFgAgLhAQgGgGAAgHQAAgIAGgGQAGgFAHAAQAIAAAGAFQAGAGAAAIQAAAHgGAGQgGAFgIABQgHgBgGgFg");
	this.shape_5.setTransform(70.9,39.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgLBZQgFgFAAgHIABgOIAAgNIgChBIgYgCQgQgCgBgPQAAgHAGgFQAEgFAIAAIAVACIAAgOIgBgMQABgHAFgFQAFgFAHAAQASAAAAAgIgBAKIAOgBQAOAAAFACQALAEgBAMQAAAHgEAFQgGAFgHAAIgGgBIgGAAIgNABIADBCIAAAGIAAAIQAAAdgSAAQgGAAgGgEg");
	this.shape_6.setTransform(60.9,40.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgqA3QgWgQAAgdQAAggARgWQASgYAgAAQAVAAAPAHQAUAJgBAUQABAOgQALQgIAFgVAIIgqATQAHAHAIADQAJADAKAAQARAAAMgHQALgGAFAAQAOAAAAANQAAAOgWAJQgRAIgUAAQgeAAgSgOgAgQgeQgJAIgFAQIAcgNQAQgHAKgHQgIgFgNAAQgMAAgHAIg");
	this.shape_7.setTransform(47.3,42.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag0BmQgFgFAAgIIAAgvIAAgxQAAgbgCgUIgBgZQgBgLAFgHQAGgJAJAAQAHAAAFAFQAEAFABAHIAAABQAIgFAJgCQAHgDAJAAQAdAAANAZQAKATAAAdQAAAbgPATQgSATgcAAQgKAAgMgCIAAAzQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGg8QgJAEgIAHQACAagBAaQAMADAKAAQANAAAHgIQAHgIAAgPQAAgRgCgGQgDgQgNAAQgIAAgHAEg");
	this.shape_8.setTransform(33.4,45.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgKBKQgFgFAAgHQAAgPgDgcQgDgbAAgPQAAgIgCgFQgPAJgOAUIgDACIAAAoIAAAJIgBAJQAAAHgFAEQgFAEgIAAQgLAAgDgKQgDgGAAgOIAAguIgBgTIAAgSQAAgMAEgJQAFgLAJAAQAHAAAGAFQAFAGAAAGIgBALQATgWARAAQAUAAAIAPQAIgHAJgDQAKgEALAAQAYAAAJAZQACAFAEAdQADAUAGAwQAAAHgFAFQgGAFgHAAQgOAAgDgPIgFglIgEgkQgDgXgGAAQgDAAgKAGIgPAKQAAAPADAaQAEAcAAAOQAAAHgFAFQgFAEgIAAQgGAAgFgEg");
	this.shape_9.setTransform(16.4,42.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgpA2QgSgTgBgcQgBgcAQgWQATgZAigBQAZABAPATQAOATAAAbQAAAcgQAWQgSAXgcAAQgYAAgRgQgAgSgVQgHAMAAAQQAAAPAJAHQAGAHAKAAQAKAAAIgHQAJgJABgPQABgogXAAIgBAAQgOAAgJAOg");
	this.shape_10.setTransform(-0.9,42.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgnA3QgUgQAAgcQAAgYASgaQAUggAaAAQAOAAARAHQAVAKABALQgBAGgEAFQgFAFgHAAQgFAAgHgGQgIgFgQAAQgIgBgMAUQgLASAAAMQAAAOAJAIQAKAGAOABQAJAAALgHQANgGADgBQAHAAAFAGQAFAFAAAGQAAAKgVAJQgUAKgMgBQgbABgTgRg");
	this.shape_11.setTransform(-14.5,42.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgrA3QgVgQAAgdQAAggARgWQASgYAfAAQAXAAAOAHQATAJAAAUQAAAOgPALQgHAFgWAIIgpATQAFAHAJADQAJADAKAAQARAAAMgHQAKgGAHAAQANAAAAANQAAAOgVAJQgSAIgUAAQgdAAgUgOgAgRgeQgIAIgFAQIAdgNQAPgHALgHQgJgFgOAAQgKAAgJAIg");
	this.shape_12.setTransform(-39.6,42.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAeBdQgEgKgCgTQgCgSAAgLIAAgKIAAgKIAAgLQgBgGgGAAQgOAAgKAMQgGAHgKASQAAAugFAJQgEALgLAAQgHAAgGgFQgFgFAAgHIABgGQABgDABggQgBgZABg7IAAgEIABgUIgBgLIgCgMQAAgHAGgFQAFgFAHAAQANAAAEAOQACAHAAAQIAAAaIgBAZQAJgKALgEQAJgFAMAAQAWAAAKANQAHAJABASIACAfIACAZIAFAZIAAAEQAAAHgFAFQgGAFgHAAQgNAAgDgNg");
	this.shape_13.setTransform(-54,39);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgLBZQgFgFAAgHIABgOIAAgNIgChBIgYgCQgQgCgBgPQAAgHAGgFQAEgFAIAAIAVACIAAgOIgBgMQABgHAFgFQAFgFAHAAQASAAAAAgIgBAKIAOgBQAOAAAFACQALAEgBAMQAAAHgEAFQgGAFgHAAIgGgBIgGAAIgNABIADBCIAAAGIAAAIQAAAdgSAAQgGAAgGgEg");
	this.shape_14.setTransform(-67.8,40.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgyBCQgDgEAAgIIAAhSIAAgLIAAgMQAAgHAEgFQAEgFAIAAQAOAAADAPQAVgRAcAAQAaAAAAAiIAAAIQgCAUgQAAQgRAAABgRIgBgNQgbAFgNAZIAAA+QAAAIgEAFQgGAEgHAAQgIAAgFgFg");
	this.shape_15.setTransform(-91.2,42.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgpA2QgSgTgBgcQgBgcAQgWQATgZAigBQAZABAPATQAOATAAAbQAAAcgQAWQgSAXgcAAQgYAAgRgQgAgSgVQgHAMAAAQQAAAPAJAHQAGAHAKAAQAKAAAIgHQAJgJABgPQABgogXAAIgBAAQgOAAgJAOg");
	this.shape_16.setTransform(-104.7,42.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgYBrQgEgFgBgHIAAgDQAEgSAAgQIAAg+IgJABIgHAAQgIAAgFgEQgFgFAAgHQAAgMAMgEQAGgBARgBIABgOQAEgdAMgNQAOgSAeAAQAXAAAAARQAAAQgWAAQgPAAgHALQgFAIgCARIAAAEIAYgCQAYAAAAARQAAAQgaAAQgHgBgQACIgBAhIABAiQgBAXgDAOQgCAOgNAAQgHAAgGgFg");
	this.shape_17.setTransform(-118.1,39.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgrA3QgVgQAAgdQAAggARgWQASgYAgAAQAVAAAPAHQAUAJAAAUQAAAOgQALQgHAFgWAIIgqATQAHAHAIADQAJADAKAAQARAAAMgHQAKgGAGAAQAOAAAAANQAAAOgWAJQgRAIgUAAQgdAAgUgOgAgRgeQgIAIgFAQIAcgNQAQgHAKgHQgIgFgNAAQgLAAgJAIg");
	this.shape_18.setTransform(-143.3,42.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgLBZQgFgFAAgHIABgOIAAgNIgChBIgYgCQgQgCgBgPQAAgHAGgFQAEgFAIAAIAVACIAAgOIgBgMQABgHAFgFQAFgFAHAAQASAAAAAgIgBAKIAOgBQAOAAAFACQALAEgBAMQAAAHgEAFQgGAFgHAAIgGgBIgGAAIgNABIADBCIAAAGIAAAIQAAAdgSAAQgGAAgGgEg");
	this.shape_19.setTransform(-156.5,40.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAfA6QgMAGgJADQgJADgFAAQgfAAgPgRQgPgQAAghQAAgdAWgWQAXgWAfAAQAMAAAPAHQAUAIAAALQAAAFgDADIgCANIgBARQAAAXADALIAGANIAFAMQAAAHgFAEQgFAFgHAAQgGAAgMgMgAgRgZQgNAOAAAQQAAARAGAJQAGAJAMAAQAHAAAHgDQAHgDAHgFQgEgdAAgPIAAgJIACgMIgEgCIgEAAQgQAAgNANg");
	this.shape_20.setTransform(-169.8,42.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgLBkQgGgFAAgIIAAiuQABgHAFgFQAFgFAGAAQAIAAAFAFQAEAFAAAHIAACoQAAAYgRAAQgHAAgEgFg");
	this.shape_21.setTransform(-180.7,38.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AgrA3QgVgQAAgdQAAggARgWQASgYAfAAQAXAAAOAHQATAJAAAUQAAAOgPALQgHAFgWAIIgpATQAFAHAJADQAJADAKAAQARAAAMgHQAKgGAHAAQANAAAAANQAAAOgVAJQgSAIgUAAQgdAAgUgOgAgRgeQgIAIgFAQIAdgNQAPgHALgHQgJgFgOAAQgKAAgJAIg");
	this.shape_22.setTransform(139.9,4.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AgxBCQgFgEAAgIIAAhSIABgLIAAgMQAAgHAFgFQAEgFAHAAQAOAAADAPQAVgRAcAAQAZAAAAAiIAAAIQgBAUgRAAQgPAAAAgRIgBgNQgcAFgMAZIAAA+QAAAIgEAFQgGAEgHAAQgIAAgEgFg");
	this.shape_23.setTransform(126.8,4.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("AgqA3QgWgQAAgdQAAggARgWQASgYAgAAQAVAAAPAHQAUAJAAAUQAAAOgQALQgIAFgVAIIgqATQAHAHAIADQAJADAKAAQARAAAMgHQALgGAFAAQAOAAAAANQAAAOgWAJQgRAIgUAAQgeAAgSgOgAgRgeQgIAIgFAQIAcgNQAQgHAKgHQgIgFgNAAQgLAAgJAIg");
	this.shape_24.setTransform(112.9,4.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0000").s().p("AAEAoQgDgLgEgfIgDAGQgHAQgMAhQgCAFgEAEQgFAIgLAAQgGABgGgLQgHgLgFgSQgEgPgIg0IgCgSQAAgHAGgFQAFgEAHAAQAOAAADANIADASIACARIAFAgIAVg/QAGgRANAAQAOAAAFATIAGAhIAHAjIAUhMQACgLANAAQAIAAAFAFQAGAEAAAHIgBAEQgNAygOAnQgEAMgIAMQgGAIgKAAQgQAAgKgfg");
	this.shape_25.setTransform(97,4.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgjBDQgTgIAAgNQAAgNAPAAQAGAAALAEQALADAGAAQAZAAAAgKQAAgHgSgIQgZgLgIgFQgSgMAAgSQAAgZAbgKQAQgEAgAAQAMgBAHAEQAIAEAAAMQAAAXgMAAQgNAAgDgLIgKgBQgeAAAAAJQAAAFASAJQAZALAJAGQASANAAARQAAAWgUALQgQAIgXABQgRgBgOgEg");
	this.shape_26.setTransform(70.2,4.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgxBCQgEgEgBgIIAAhSIABgLIAAgMQAAgHAEgFQAFgFAHAAQAOAAADAPQAVgRAcAAQAaAAAAAiIAAAIQgCAUgQAAQgRAAABgRIgBgNQgbAFgNAZIAAA+QAAAIgEAFQgGAEgHAAQgIAAgEgFg");
	this.shape_27.setTransform(58.1,4.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgqA3QgWgQAAgdQAAggARgWQASgYAgAAQAVAAAPAHQAUAJAAAUQgBAOgPALQgIAFgVAIIgqATQAHAHAIADQAJADAKAAQARAAAMgHQALgGAFAAQAOAAAAANQAAAOgWAJQgRAIgUAAQgeAAgSgOgAgQgeQgJAIgFAQIAcgNQAQgHAKgHQgIgFgNAAQgMAAgHAIg");
	this.shape_28.setTransform(44.1,4.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgXBrQgFgFgBgHIAAgDQAEgSAAgQIAAg+IgJABIgHAAQgIAAgFgEQgFgFAAgHQAAgMAMgEQAGgBARgBIABgOQAEgdAMgNQAOgSAeAAQAXAAAAARQAAAQgVAAQgQAAgHALQgFAIgCARIAAAEIAYgCQAYAAAAARQAAAQgaAAQgHgBgRACIAAAhIAAAiQAAAXgDAOQgCAOgNAAQgHAAgFgFg");
	this.shape_29.setTransform(30.3,1.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgxBCQgFgEAAgIIAAhSIABgLIAAgMQAAgHAFgFQAEgFAHAAQAOAAADAPQAWgRAbAAQAZAAAAAiIAAAIQgBAUgRAAQgPAAAAgRIgBgNQgcAFgMAZIAAA+QABAIgGAFQgFAEgHAAQgIAAgEgFg");
	this.shape_30.setTransform(17.8,4.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAZA/QgQAGgQAAQgSAAgNgIQgNgIgDgRQgFggAAgYQAAgQAEgVQACgOAPAAQAHAAAFAEQAGAFAAAHIgCARIgCASIABAeQABAOADAIIAGADIAGAAQANAAARgEIAAgWIgBgUQAAgaADgTQACgPAPAAQAIAAAFAEQAFAFAAAHIgDAtIABAZIAAAZIAAAIIABAIQAAAHgGAFQgFAEgHAAQgLAAgFgJg");
	this.shape_31.setTransform(4.5,4.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgjBDQgTgIAAgNQAAgNAPAAQAGAAALAEQALADAGAAQAZAAAAgKQAAgHgSgIQgZgLgIgFQgSgMAAgSQAAgZAbgKQAQgEAgAAQAMgBAHAEQAIAEAAAMQAAAXgMAAQgNAAgDgLIgKgBQgeAAAAAJQAAAFASAJQAZALAJAGQASANAAARQAAAWgUALQgQAIgXABQgRgBgOgEg");
	this.shape_32.setTransform(-8.7,4.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgXBrQgGgFAAgHIAAgDQADgSABgQIAAg+IgJABIgHAAQgIAAgFgEQgFgFAAgHQAAgMAMgEQAGgBARgBIACgOQADgdAMgNQAOgSAeAAQAXAAAAARQAAAQgVAAQgQAAgHALQgFAIgCARIAAAEIAYgCQAYAAAAARQAAAQgaAAQgHgBgRACIAAAhIAAAiQAAAXgDAOQgCAOgNAAQgHAAgFgFg");
	this.shape_33.setTransform(-32.8,1.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgpA2QgSgTgBgcQgBgcAQgWQATgZAigBQAZABAPATQAOATAAAbQAAAcgQAVQgSAYgcAAQgYAAgRgQgAgSgVQgHAMAAAQQAAAPAJAHQAGAHAKAAQAKAAAIgIQAJgIABgPQABgogXAAIgBAAQgOAAgJAOg");
	this.shape_34.setTransform(-46.3,4.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgxBCQgEgEgBgIIAAhSIABgLIAAgMQAAgHAEgFQAFgFAHAAQAOAAADAPQAVgRAcAAQAaAAAAAiIAAAIQgCAUgQAAQgRAAABgRIgBgNQgbAFgNAZIAAA+QAAAIgEAFQgGAEgHAAQgIAAgEgFg");
	this.shape_35.setTransform(-70.2,4.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgqA3QgWgQAAgdQAAggARgWQASgYAgAAQAVAAAPAHQAUAJgBAUQAAAOgPALQgIAFgVAIIgqATQAHAHAIADQAJADAKAAQARAAAMgHQALgGAFAAQAOAAAAANQAAAOgWAJQgRAIgUAAQgeAAgSgOgAgQgeQgJAIgFAQIAcgNQAQgHAKgHQgIgFgNAAQgMAAgHAIg");
	this.shape_36.setTransform(-84.1,4.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AglBgQgEAFgIAAQgGAAgFgFQgFgEAAgHIAAgJIAAgKIAAiOQAAgKAFgHQAFgJAJAAQAOAAAAAPIAAAFIgBAGIAAAwQAKgFAIgDQAIgCAIAAQAdAAATAVQARAUAAAdQAAAdgUAVQgUAVgdAAQgSAAgQgHgAgOgCQgJADgKAIIAAA1QASAIAMAAQAPAAAKgLQALgLgBgQQAAgRgIgLQgJgKgOAAQgGAAgJAEg");
	this.shape_37.setTransform(-98.9,0.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgKBKQgFgFAAgHQAAgPgDgcQgDgbAAgPQAAgIgCgFQgPAJgOAUIgDACIAAAoIAAAJIgBAJQAAAHgFAEQgFAEgIAAQgLAAgDgKQgDgGAAgOIAAguIgBgTIAAgSQAAgMAEgJQAFgLAJAAQAHAAAGAFQAFAGAAAGIgBALQATgWARAAQAUAAAIAPQAIgHAJgDQAKgEALAAQAYAAAJAZQACAFAEAdQADAUAGAwQAAAHgFAFQgGAFgHAAQgOAAgDgPIgFglIgEgkQgDgXgGAAQgDAAgKAGIgPAKQAAAPADAaQAEAcAAAOQAAAHgFAFQgFAEgIAAQgGAAgFgEg");
	this.shape_38.setTransform(-116.5,4.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAZA/QgQAGgQAAQgSAAgNgIQgNgIgDgRQgFggAAgYQAAgQAEgVQACgOAPAAQAHAAAFAEQAGAFAAAHIgCARIgCASIABAeQABAOADAIIAGADIAGAAQANAAARgEIAAgWIgBgUQAAgaADgTQACgPAPAAQAIAAAFAEQAFAFAAAHIgDAtIABAZIAAAZIAAAIIABAIQAAAHgGAFQgFAEgHAAQgLAAgFgJg");
	this.shape_39.setTransform(-133.7,4.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAaA6IgDgaQgCgOgBgMIABgKIABgMIAAgEIAAgGQAAgLgFAAQgLAAgJAOQgLAOgFAVIgCALIAAAMIgBALIgBALQAAAHgFAFQgFAFgIAAQgIAAgFgFQgEgFAAgHIgBgLIgBgLIACgjIACghIAAgMIgBgLQAAgHAFgFQAFgFAIAAQAQAAACAUIAAABQASgSATAAQAZAAAJAUQAGANAAAbIAAAJIgBAHQAAAKAEAQQACAPAAAKQAAAHgFAFQgFAFgIAAQgPAAgCgQg");
	this.shape_40.setTransform(-147,4.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAsBIQgGgPgFgUIgfADQgTACgLACIgUAqQgFAJgLAAQgGAAgGgFQgFgFgBgHQAAgHATglIgCgIQABgGAMgDQASgeAWgiQAfgwAHAAQAOAAAFARIAIApIASBSIAHARQAFALgBAGQAAAHgEAFQgHAFgHAAQgJgBgLgXgAgJAMQAGgCALAAIARgCIgIgqIgaAug");
	this.shape_41.setTransform(-174.8,1.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgRAiQAAgHAFgFQAGgEAGAAQAUAAAAAdQAAAIgGAEQgFAFgIAAQgSAAAAgegAgNgaQgFgEAAgIIAAgEIgBgFQAAgGAGgFQAFgFAHAAQASAAAAAZQAAAIgFAEQgFAFgHAAQgHAAgGgFg");
	this.shape_42.setTransform(-76.6,-35.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgrA3QgVgQAAgdQAAggARgWQATgYAeAAQAXAAAOAHQATAJABAUQAAAOgQALQgHAFgWAIIgqATQAGAHAJADQAJADAKAAQARAAAMgHQAKgGAHAAQANAAAAANQAAAOgWAJQgRAIgUAAQgdAAgUgOgAgRgeQgIAIgFAQIAdgNQAPgHALgHQgJgFgOAAQgKAAgJAIg");
	this.shape_43.setTransform(-89.8,-34);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgMBkQgEgFAAgIIAAiuQgBgHAGgFQAFgFAHAAQAHAAAEAFQAFAFABAHIAACoQAAAYgSAAQgGAAgGgFg");
	this.shape_44.setTransform(-100.6,-37.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("Ag0BmQgFgFAAgIIAAgvIAAgxQAAgbgBgUIgCgZQgBgLAFgHQAGgJAJAAQAHAAAFAFQAFAFAAAHIAAABQAIgFAIgCQAIgDAJAAQAdAAANAZQALATgBAdQABAbgRATQgRATgcAAQgKAAgMgCIAAAzQAAAIgFAFQgFAFgHAAQgIAAgFgFgAgGg8QgIAEgJAHQABAaABAaQALADAKAAQANAAAHgIQAHgIgBgPQAAgRgBgGQgEgQgMAAQgIAAgHAEg");
	this.shape_45.setTransform(-110.8,-31);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgKBKQgFgFAAgHQAAgPgDgcQgDgbAAgPQAAgIgCgFQgPAJgOAUIgDACIAAAoIAAAJIgBAJQAAAHgFAEQgFAEgIAAQgLAAgDgKQgDgGAAgOIAAguIgBgTIAAgSQAAgMAEgJQAFgLAJAAQAHAAAGAFQAFAGAAAGIgBALQATgWARAAQAUAAAIAPQAIgHAJgDQAKgEALAAQAYAAAJAZQACAFAEAdQADAUAGAwQAAAHgFAFQgGAFgHAAQgOAAgDgPIgFglIgEgkQgDgXgGAAQgDAAgKAGIgPAKQAAAPADAaQAEAcAAAOQAAAHgFAFQgFAEgIAAQgGAAgFgEg");
	this.shape_46.setTransform(-127.8,-34);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAfA6QgMAGgJADQgJADgFAAQgfAAgPgRQgPgQAAghQAAgdAWgWQAXgWAfAAQAMAAAPAHQAUAIAAALQAAAFgDADIgCANIgBARQAAAXADALIAGANIAFAMQAAAHgFAEQgFAFgHAAQgGAAgMgMgAgRgZQgNAOAAAQQAAARAGAJQAGAJAMAAQAHAAAHgDQAHgDAHgFQgEgdAAgPIAAgJIACgMIgEgCIgEAAQgQAAgNANg");
	this.shape_47.setTransform(-145.3,-34);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAkBDQgMgNgZggIggAeIgKAKQgGAFgHAAQgHAAgFgEQgFgGAAgGQAAgIAKgJIARgOIAYgXIgOgUQgJgMgIgGQgGgFAAgHQAAgHAFgFQAFgFAHAAQAJAAAQASIATAaIAWgSQANgMAGgIQAFgIAJAAQAHAAAFAFQAFAFAAAGQAAAJgNANIgSAQIgUASIAnAvQAEAFAAAEQAAAHgFAFQgGAFgGAAQgIAAgFgGg");
	this.shape_48.setTransform(-160.3,-34.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("Ag6BhQgOgMAAgpQAAgRACghQADgiAAgRIgCgNIgBgOQAAgTASAAQAFAAAFADIAcgFQANgCALAAQAgAAATAHQAMAFAAALQAAAHgFAFQgFAGgHAAIgGgBQgUgFgUAAIgTABIgXAFIgCAyIAxgFIAfgCQAHAAAGAFQAFAEAAAIQAAAOgQACIgfADIg1AFIgBAaQAAAZADADQACACAOAAIAXgBIAYAAIAHgBIAHAAQAIAAAFAEQAGAEAAAJQAAAOgPADQgNACgnAAQgpAAgMgLg");
	this.shape_49.setTransform(-175.7,-37.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-186.2,-58.3,372.4,116.8);


(lib.static_rule3a_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIAIQgEgEAAgEQAAgDAEgEQAEgCAEAAQAGAAADACQAEADAAAEQAAAEgEAEQgEACgFAAQgEAAgEgCg");
	this.shape.setTransform(84,18.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgWA7QgDADgEAAQgFAAgDgDQgDgDAAgEIABgFIAAgGIAAhYQAAgFACgFQADgFAGAAQAJAAAAAJIgBADIAAADIAAAeQAGgDAFgCQAFgBAEAAQATAAALANQALAMAAARQAAATgNAMQgMANgSAAQgLAAgJgEgAgIgBQgFABgHAFIAAAhQALAFAHAAQAJAAAHgHQAGgGAAgLQAAgKgFgGQgGgGgJAAQgDAAgFACg");
	this.shape_1.setTransform(75.9,12.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgeApQgCgDAAgEIAAgyIAAgIIAAgHQAAgEACgDQADgDAFAAQAIAAACAJQANgLARAAQAPAAAAAVIAAAFQAAAMgKAAQgLAAABgKIAAgIQgRADgIAPIABAnQgBAEgDADQgDADgEAAQgFAAgDgDg");
	this.shape_2.setTransform(67.4,14.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgZAhQgOgJAAgSQAAgTALgOQALgOATAAQANAAAKADQALAHAAALQAAAKgJAGIgSAIIgZALQAEAEAFADQAFABAGABQALgBAGgDQAHgFAEAAQAIAAAAAJQAAAJgNAFQgLAEgMAAQgSABgLgKgAgJgSQgGAFgDAKIASgIQAJgFAHgEQgGgDgIABQgHgBgEAFg");
	this.shape_3.setTransform(58.8,14.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgLAjIgag+IgBgFQAAgEAEgDQADgDAFAAQAGAAADAGIARAsIALgaIAHgRQADgGAGAAQAFAAADADQAEADAAAEQAAADgNAcIgQAiQgBAEgDACQgCADgEAAQgHAAgEgIg");
	this.shape_4.setTransform(50.7,14.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgHA+QgDgDAAgFIAAhrQAAgFAEgDQADgCADAAQAFAAADACQADADAAAFIAABmQAAAQgLgBQgEAAgDgCg");
	this.shape_5.setTransform(37.4,12.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AATAkIgNAFQgFACgDAAQgTAAgJgKQgKgKAAgVQAAgRAOgNQAOgOASAAQAIAAAKAEQALAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgCAIIAAAMQAAANACAHIAEAIIADAIQAAAEgEACQgDADgEAAQgDAAgIgHgAgKgPQgIAIAAAKQAAALAEAFQADAFAIAAQAEAAAEgCQAEgBAEgDQgCgSAAgJIAAgGIABgHIgDgBIgCgBQgJAAgIAJg");
	this.shape_6.setTransform(30.9,14.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgeApQgCgDAAgEIAAgyIAAgIIAAgHQAAgEACgDQADgDAFAAQAIAAACAJQANgLARAAQAPAAAAAVIAAAFQgBAMgKAAQgKAAAAgKIAAgIQgQADgIAPIAAAnQABAEgEADQgDADgFAAQgEAAgDgDg");
	this.shape_7.setTransform(22.7,14.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AAPAnQgJADgKAAQgLAAgIgEQgIgGgCgKQgDgTAAgPQAAgKADgNQABgJAJAAQAFAAADADQADADAAAEIgBALIgBALIABASIABAOIAFABIADABQAHAAALgDIAAgNIAAgNQAAgQABgLQABgKAKAAQAFAAADADQADADAAAFIgBAbIAAAPIAAAQIAAAFIAAAEQAAAFgDADQgDADgFAAQgGAAgEgGg");
	this.shape_8.setTransform(14.5,14.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgHA+QgDgDAAgFIAAhrQAAgFAEgDQADgCADAAQAFAAADACQADADAAAFIAABmQAAAQgLgBQgEAAgDgCg");
	this.shape_9.setTransform(8.1,12.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AggA/QgDgDAAgFIAAgdIAAgeIgBgdIgBgPQAAgHADgEQADgGAGAAQAFAAACADQADADAAAEIAAABQAGgDAFgBQAEgCAGAAQARAAAJAQQAGALAAASQAAARgKALQgLAMgRAAIgNgCIAAAgQAAAFgDADQgDADgFAAQgFAAgDgDgAgDgkQgGACgFAEIABAgQAHACAGAAQAIAAAEgFQAFgFAAgJIgBgOQgDgKgHAAQgGAAgDADg");
	this.shape_10.setTransform(1.9,16.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AATAkIgNAFQgFACgDAAQgTAAgJgKQgKgKAAgVQAAgRAOgNQAOgOASAAQAIAAAKAEQALAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgCAIIAAAMQAAANACAHIAEAIIADAIQAAAEgEACQgDADgEAAQgDAAgIgHgAgKgPQgIAIAAAKQAAALAEAFQADAFAIAAQAEAAAEgCQAEgBAEgDQgCgSAAgJIAAgGIABgHIgDgBIgCgBQgJAAgIAJg");
	this.shape_11.setTransform(-13.9,14.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgVApQgMgEAAgJQAAgHAKgBIAKACQAHADADAAQAPAAAAgGQAAgEgLgFIgUgKQgLgIAAgKQAAgQARgGQAKgDATAAQAHAAAEACQAGADgBAHQAAAOgHABQgIgBgCgGIgGgBQgSAAAAAGQAAACALAGIAVAKQALAIAAALQAAANgMAGQgKAGgOAAQgKAAgJgDg");
	this.shape_12.setTransform(-29.3,14.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgaAhQgNgJAAgSQAAgTALgOQALgOASAAQAOAAAKADQALAHAAALQAAAKgKAGIgRAIIgaALQAEAEAFADQAGABAGABQALgBAGgDQAHgFAEAAQAIAAAAAJQAAAJgNAFQgLAEgMAAQgSABgMgKgAgJgSQgGAFgDAKIASgIQAJgFAHgEQgGgDgJABQgFgBgFAFg");
	this.shape_13.setTransform(-37.7,14.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgeApQgDgDABgEIAAgyIAAgIIAAgHQAAgEACgDQADgDAFAAQAIAAACAJQANgLARAAQAPAAAAAVIAAAFQAAAMgLAAQgKAAAAgKIAAgIQgQADgIAPIAAAnQABAEgEADQgDADgFAAQgEAAgDgDg");
	this.shape_14.setTransform(-45.8,14.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgJA5QgDgDAAgFIAAgOIAAgOIAAgSIABgQQAAgFADgDQADgDAEAAQAFAAACADQADADAAAFIgBAQIAAASIAAAOIAAAOQAAAFgDADQgDADgEAAQgEAAgDgDgAgGgnQgEgDAAgFQAAgFAEgDQADgEAFAAQAFAAADAEQADADABAFQgBAFgDADQgDADgFAAQgFAAgDgDg");
	this.shape_15.setTransform(-51.8,12.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAPAnQgKADgJAAQgLAAgHgEQgJgGgCgKQgDgTAAgPQAAgKADgNQABgJAJAAQAFAAADADQADADAAAEIgBALIgBALIABASIABAOIAFABIADABQAIAAAKgDIAAgNIAAgNQAAgQABgLQABgKAKAAQAFAAADADQADADAAAFIgCAbIAAAPIAAAQIABAFIAAAEQAAAFgDADQgDADgFAAQgHAAgDgGg");
	this.shape_16.setTransform(-58.5,14.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAIAyIAAgEIACgWIgGAAQgRAAgLgJQgNgKAAgQQAAgXAOgOQAOgOAXAAQAEAAADACQADgCADAAQAEAAADADQAEAEAAAEQAAAWgDAaIgEAbQgCAQAAANQAAAEgDADQgDADgEAAQgLAAAAgNgAgJgfQgGAJAAALQAAAIAFAEQAFAFAJAAQAFgBADgFQADgHABgUIAAgQIgCAAIgFgBQgMADgGAKg");
	this.shape_17.setTransform(-67,16.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgZAhQgOgJAAgSQAAgTAKgOQAMgOATAAQAOAAAIADQAMAHAAALQAAAKgJAGIgSAIIgZALQADAEAGADQAFABAGABQAKgBAHgDQAHgFAEAAQAIAAAAAJQAAAJgNAFQgLAEgMAAQgSABgLgKgAgKgSQgFAFgDAKIARgIQAKgFAGgEQgFgDgIABQgHgBgFAFg");
	this.shape_18.setTransform(-75.5,14.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgeApQgDgDAAgEIAAgyIAAgIIABgHQAAgEADgDQACgDAFAAQAJAAABAJQANgLARAAQAQAAAAAVIAAAFQgCAMgJAAQgKAAAAgKIAAgIQgRADgIAPIABAnQgBAEgDADQgDADgEAAQgGAAgCgDg");
	this.shape_19.setTransform(-83.5,14.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgWA8QgEgDAAgEQAAgHARgkIgbgxIgEgGQgCgDAAgDQAAgEADgEQADgDAFAAQAFAAADADQALAPAOAeIAKgWQAFgMAGgJQADgFAGAAQAEAAAEACQADADAAAFIgBAFIgbA3QgKAUgFANIgEAPQgDAHgHAAQgFAAgDgDg");
	this.shape_20.setTransform(183.6,-7.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAQAkIgCgQIgCgQIABgGIAAgHIAAgDIABgEQAAgGgEAAQgGAAgGAJQgHAIgDAMIAAAIIgBAHIgBAGIAAAHQAAAFgDACQgEADgEAAQgEAAgEgDQgDgCAAgFIAAgHIAAgGIAAgWIABgUIAAgHIAAgHQAAgEADgDQADgEAFAAQAKAAABANIAAABQAMgMALAAQAPAAAFANQAEAIAAARIAAAFIAAAEQAAAGACAKIABAPQAAAFgCACQgEADgEAAQgKAAgBgJg");
	this.shape_21.setTransform(175.1,-9.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AATAkIgNAFQgFACgDAAQgTAAgJgKQgKgKAAgVQAAgRAOgNQAOgOASAAQAIAAAKAEQALAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgCAIIAAAMQAAANACAHIAEAIIADAIQAAAEgEACQgDADgEAAQgDAAgIgHgAgKgPQgIAIAAAKQAAALAEAFQADAFAIAAQAEAAAEgCQAEgBAEgDQgCgSAAgJIAAgGIABgHIgDgBIgCgBQgJAAgIAJg");
	this.shape_22.setTransform(166.4,-9.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgGAtQgDgDAAgEIgCgbIgCgZIgBgIQgJAGgJAMIgBACIAAAXIgBAGIAAAGQAAAEgDACQgDACgFABQgHAAgCgGQgCgEAAgIIAAgdIAAgLIAAgLQAAgIACgFQADgHAGAAQAEAAAEADQADADAAAFIgBAHQAMgOALgBQAMAAAEAKQAFgFAGgCQAGgCAHAAQAPABAFAPIAEAVIAFApQABAEgEAEQgDACgFAAQgJAAgBgJIgDgXIgDgVQgCgOgDAAIgIAEIgKAFIACAZQADARAAAJQAAAEgDADQgDADgFAAQgEAAgDgDg");
	this.shape_23.setTransform(155.8,-9.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgnAyQAAgFACgCQADgCAFgBIAKACIALABQALAAAFgHQAGgHABgPQgEAEgFACQgFACgFAAQgQAAgJgKQgKgKAAgPQAAgWANgNQANgNAWAAQAHAAAGACQAFABADAFQAKABAAAKIgBAPQgEASAAATQgBAagIALQgKAPgZAAQgeAAAAgMgAgLgiQgHAHAAANQAAAJAEAFQADADAHAAQAGAAAGgGQAGgHABgGIAEgYIgGgCIgFgBQgMAAgHAJg");
	this.shape_24.setTransform(138.2,-7.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAQAkIgDgQIgBgQIABgGIAAgHIAAgDIAAgEQABgGgEAAQgHAAgFAJQgGAIgEAMIgBAIIAAAHIgBAGIAAAHQAAAFgDACQgDADgFAAQgFAAgDgDQgCgCAAgFIgBgHIAAgGIABgWIABgUIAAgHIgBgHQAAgEADgDQADgEAFAAQAKAAABANIAAABQAMgMALAAQAPAAAFANQAEAIAAARIAAAFIAAAEIACAQIABAPQAAAFgCACQgEADgEAAQgKAAgBgJg");
	this.shape_25.setTransform(129.9,-9.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgJA5QgDgDAAgFIAAgOIAAgOIAAgSIABgQQAAgFADgDQADgDAEAAQAEAAADADQADADAAAFIgBAQIAAASIAAAOIAAAOQAAAFgCADQgEADgEAAQgEAAgDgDgAgHgnQgDgDAAgFQAAgFADgDQAFgEADAAQAGAAADAEQADADABAFQgBAFgDADQgDADgGAAQgDAAgFgDg");
	this.shape_26.setTransform(123.6,-11.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAQAkIgDgQIAAgQIAAgGIAAgHIAAgDIAAgEQAAgGgDAAQgGAAgGAJQgHAIgDAMIAAAIIgBAHIAAAGIgBAHQAAAFgDACQgEADgEAAQgEAAgDgDQgDgCgBgFIAAgHIgBgGIABgWIACgUIAAgHIgBgHQAAgEADgDQAEgEAEAAQAKAAABANIAAABQALgMAMAAQAOAAAHANQADAIAAARIAAAFIAAAEIACAQIACAPQAAAFgEACQgDADgFAAQgJAAgBgJg");
	this.shape_27.setTransform(117,-9.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AATAkIgNAFQgFACgDAAQgTAAgJgKQgKgKAAgVQAAgRAOgNQAOgOASAAQAIAAAKAEQALAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgCAIIAAAMQAAANACAHIAEAIIADAIQAAAEgEACQgDADgEAAQgDAAgIgHgAgKgPQgIAIAAAKQAAALAEAFQADAFAIAAQAEAAAEgCQAEgBAEgDQgCgSAAgJIAAgGIABgHIgDgBIgCgBQgJAAgIAJg");
	this.shape_28.setTransform(108.3,-9.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgZAhQgOgJAAgSQAAgTAKgOQAMgOATAAQAOAAAIADQAMAHAAALQAAAKgJAGIgSAIIgZALQADAEAGADQAFABAGAAQAKAAAHgDQAHgFAEAAQAIAAAAAIQAAAKgNAFQgLAEgMAAQgSABgLgKgAgJgSQgGAFgDAKIASgIQAJgFAGgEQgFgDgIABQgHgBgEAFg");
	this.shape_29.setTransform(99.2,-9.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgGAtQgDgDAAgEIgCgbIgCgZIgBgIQgJAGgJAMIgBACIAAAXIgBAGIAAAGQAAAEgDACQgDACgFABQgHAAgCgGQgCgEAAgIIAAgdIAAgLIAAgLQAAgIACgFQADgHAGAAQAEAAAEADQADADAAAFIgBAHQAMgOALgBQAMAAAEAKQAFgFAGgCQAGgCAHAAQAPABAFAPIAEAVIAFApQABAEgEAEQgDACgFAAQgJAAgBgJIgDgXIgDgVQgCgOgDAAIgIAEIgKAFIACAZQADARAAAJQAAAEgDADQgDADgFAAQgEAAgDgDg");
	this.shape_30.setTransform(88.8,-9.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAGASQgDgDAAgDIADgMIAEgLQADgHAHAAQAEAAAEADQADACAAAEIgEAMIgEAMQgDAFgHAAQgEAAgDgCgAgbASQgDgDAAgDQAAgDAEgJIAEgMQACgHAIAAQAFAAADACQADADAAADQAAADgEAJIgEANQgDAGgHAAQgFAAgDgCg");
	this.shape_31.setTransform(72,-16.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgeApQgDgDABgEIAAgyIAAgIIAAgHQAAgEACgDQADgDAFAAQAIAAACAJQANgLARAAQAPAAAAAVIAAAFQAAAMgLAAQgKAAABgKIAAgIQgRADgIAPIAAAnQAAAEgDADQgDADgEAAQgFAAgDgDg");
	this.shape_32.setTransform(64.8,-9.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgaAhQgNgJAAgSQAAgTALgOQALgOASAAQAOAAAKADQALAHAAALQAAAKgJAGIgSAIIgZALQAEAEAEADQAGABAGAAQALAAAGgDQAHgFAEAAQAIAAAAAIQAAAKgNAFQgLAEgMAAQgSABgMgKgAgJgSQgGAFgDAKIASgIQAJgFAHgEQgGgDgJABQgFgBgFAFg");
	this.shape_33.setTransform(56.2,-9.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgWA7QgDADgEAAQgFAAgDgDQgDgDAAgEIABgFIAAgGIAAhYQAAgFACgFQADgFAGAAQAJAAAAAJIgBADIAAADIAAAeQAGgDAFgCQAFgBAEAAQATAAALANQALAMAAARQAAATgNAMQgMANgSAAQgLAAgJgEgAgIgBQgFABgHAFIAAAhQALAFAHAAQAJAAAHgHQAGgGAAgLQAAgKgFgGQgGgGgJAAQgDAAgFACg");
	this.shape_34.setTransform(47.1,-11.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgGAtQgDgDAAgEIgCgbIgCgZIgBgIQgJAGgJAMIgBACIAAAXIgBAGIAAAGQAAAEgDACQgDACgFABQgHAAgCgGQgCgEAAgIIAAgdIAAgLIAAgLQAAgIACgFQADgHAGAAQAEAAAEADQADADAAAFIgBAHQAMgOALgBQAMAAAEAKQAFgFAGgCQAGgCAHAAQAPABAFAPIAEAVIAFApQABAEgEAEQgDACgFAAQgJAAgBgJIgDgXIgDgVQgCgOgDAAIgIAEIgKAFIACAZQADARAAAJQAAAEgDADQgDADgFAAQgEAAgDgDg");
	this.shape_35.setTransform(36.3,-9.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAQAnQgKADgKAAQgLAAgIgEQgIgGgCgKQgDgTAAgPQAAgKACgNQACgJAJAAQAFAAADADQADADAAAEIgBALIgCALIABASQABAJACAFIADABIAEABQAIAAAKgDIAAgNIAAgNQAAgQACgLQABgKAJAAQAFAAADADQADADAAAFIgBAbIAAAPIAAAQIAAAFIAAAEQAAAFgDADQgDADgFAAQgGAAgDgGg");
	this.shape_36.setTransform(25.7,-9.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAQAkIgDgQIgBgQIABgGIAAgHIAAgDIAAgEQAAgGgDAAQgGAAgGAJQgGAIgEAMIgBAIIAAAHIgBAGIAAAHQAAAFgDACQgEADgEAAQgFAAgDgDQgCgCAAgFIgBgHIAAgGIABgWIAAgUIAAgHIAAgHQAAgEADgDQADgEAFAAQAKAAABANIAAABQAMgMALAAQAPAAAFANQAEAIAAARIAAAFIAAAEIACAQIABAPQAAAFgCACQgEADgEAAQgKAAgBgJg");
	this.shape_37.setTransform(17.5,-9.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AATAkIgNAFQgFACgDAAQgTAAgJgKQgKgKAAgVQAAgRAOgNQAOgOASAAQAIAAAKAEQALAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgCAIIAAAMQAAANACAHIAEAIIADAIQAAAEgEACQgDADgEAAQgDAAgIgHgAgKgPQgIAIAAAKQAAALAEAFQADAFAIAAQAEAAAEgCQAEgBAEgDQgCgSAAgJIAAgGIABgHIgDgBIgCgBQgJAAgIAJg");
	this.shape_38.setTransform(1.9,-9.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAKAOIgFgNQgDgJAAgDQAAgDADgDQADgCAFAAQAIAAABAHIAFAMQAEAJAAADQAAADgDADQgEACgEAAQgHAAgDgGgAgWAPIgEgMIgEgMQAAgEAEgCQADgDAEAAQAHAAACAHIAFALIADAMQAAADgDADQgDACgEAAQgHAAgDgFg");
	this.shape_39.setTransform(-6.3,-16.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAQAkIgCgQIgCgQIABgGIAAgHIAAgDIABgEQAAgGgEAAQgGAAgGAJQgHAIgDAMIAAAIIgBAHIgBAGIAAAHQAAAFgDACQgEADgEAAQgEAAgEgDQgDgCAAgFIAAgHIAAgGIAAgWIABgUIAAgHIAAgHQAAgEADgDQADgEAFAAQAKAAABANIAAABQAMgMALAAQAPAAAFANQAEAIAAARIAAAFIAAAEQAAAGACAKIABAPQAAAFgCACQgEADgFAAQgJAAgBgJg");
	this.shape_40.setTransform(-20.6,-9.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgZAhQgLgLgBgSQAAgQAKgOQALgQAVAAQAPAAAJANQAJALAAARQAAARgKANQgLAOgRAAQgPAAgKgKgAgLgMQgEAHAAAJQAAAJAFAFQAEAEAGAAQAGAAAFgEQAFgGABgJQABgYgOAAQgJAAgGAJg");
	this.shape_41.setTransform(-29.2,-9.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgJA5QgDgDAAgFIAAgOIAAgOIAAgSIABgQQAAgFADgDQADgDAEAAQAEAAAEADQACADAAAFIgBAQIAAASIAAAOIAAAOQAAAFgCADQgDADgEAAQgFAAgDgDgAgHgnQgDgDAAgFQAAgFADgDQAFgEADAAQAGAAADAEQAEADAAAFQAAAFgEADQgDADgGAAQgDAAgFgDg");
	this.shape_42.setTransform(-35.4,-11.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgVApQgMgEAAgJQAAgHAKgBIAKACQAGADAEAAQAPAAAAgGQAAgEgLgFIgUgKQgKgIgBgKQAAgQARgGQAKgDATAAQAHAAAFACQAEADAAAHQAAAOgHABQgIgBgCgGIgFgBQgTAAAAAGQAAACALAGIAUAKQAMAIAAALQAAANgMAGQgLAGgNAAQgLAAgIgDg");
	this.shape_43.setTransform(-41.8,-9.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgVApQgMgEAAgJQAAgHAJgBIALACQAGADAEAAQAPAAAAgGQAAgEgLgFIgTgKQgMgIAAgKQABgQAQgGQAKgDATAAQAIAAAEACQAEADAAAHQABAOgIABQgIgBgBgGIgGgBQgTAAABAGQAAACAKAGIAUAKQAMAIAAALQAAANgNAGQgKAGgNAAQgKAAgJgDg");
	this.shape_44.setTransform(-49.6,-9.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgZAhQgOgJAAgSQAAgTAKgOQAMgOATAAQAOAAAIADQAMAHAAALQAAAKgKAGIgRAIIgZALQADAEAGADQAFABAGAAQAKAAAIgDQAGgFAEAAQAIAAAAAIQAAAKgNAFQgLAEgMAAQgSABgLgKgAgKgSQgFAFgDAKIARgIQAKgFAGgEQgFgDgIABQgGgBgGAFg");
	this.shape_45.setTransform(-58,-9.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgeApQgDgDAAgEIAAgyIAAgIIABgHQAAgEADgDQACgDAFAAQAJAAABAJQANgLARAAQAQAAAAAVIAAAFQgCAMgJAAQgLAAAAgKIAAgIQgQADgIAPIABAnQAAAEgEADQgDADgFAAQgFAAgCgDg");
	this.shape_46.setTransform(-66.1,-9.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgfA/QgDgDAAgFIAAgdIAAgeIgCgdIgBgPQAAgHADgEQADgGAGAAQAEAAADADQAEADAAAEIAAABQAEgDAGgBQAEgCAFAAQASAAAIAQQAHALAAASQAAARgKALQgLAMgRAAIgNgCIAAAgQAAAFgDADQgDADgFAAQgEAAgDgDgAgEgkQgEACgGAEIABAgQAHACAGAAQAIAAAFgFQADgFAAgJIgBgOQgCgKgIAAQgFAAgEADg");
	this.shape_47.setTransform(-74.2,-7.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAWApIgWgcIgUATIgGAGQgEAEgEgBQgEAAgDgCQgEgEAAgEQAAgEAHgGIAKgJIAPgOIgJgMQgFgHgFgEQgEgDAAgEQAAgEADgEQADgDAEAAQAGAAAKALIALARIAOgMQAIgHADgFQAEgFAFAAQAEAAAEADQADADAAAEQAAAGgIAHIgMAKIgMALIAYAdQADADAAADQAAAEgEADQgDADgEAAQgFAAgDgEg");
	this.shape_48.setTransform(-83.4,-9.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgZAhQgOgJAAgSQAAgTAKgOQAMgOATAAQAOAAAIADQAMAHAAALQAAAKgKAGIgRAIIgZALQADAEAGADQAFABAGAAQAKAAAIgDQAGgFAEAAQAIAAAAAIQAAAKgNAFQgLAEgMAAQgSABgLgKgAgKgSQgFAFgDAKIARgIQAKgFAGgEQgFgDgIABQgGgBgGAFg");
	this.shape_49.setTransform(-92.7,-9.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgZAhQgOgJAAgSQAAgTALgOQALgOASAAQAOAAAKADQALAHAAALQAAAKgJAGIgSAIIgZALQAEAEAFADQAFABAGAAQALAAAGgDQAHgFAEAAQAIAAAAAIQAAAKgNAFQgLAEgMAAQgSABgLgKgAgJgSQgGAFgDAKIASgIQAJgFAHgEQgGgDgJABQgGgBgEAFg");
	this.shape_50.setTransform(-108.6,-9.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AASA5IgDgSIgCgSIABgGIAAgGIAAgHQgBgCgDAAQgJgBgGAIQgEADgGALQAAAdgDAFQgDAHgGAAQgFAAgDgDQgEgDAAgEIABgFIABgVIAAgzIABgCIAAgMIgBgIIAAgHQAAgFADgDQADgCAEAAQAIAAADAIQABAFAAAJIAAAQIgBAQQAGgGAHgDQAFgCAIAAQANgBAGAIQAEAFABALIABATIACAPIACAQIABADQAAAEgEADQgDADgEAAQgIAAgDgIg");
	this.shape_51.setTransform(-117.4,-11.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgHA5QgEgDAAgFIABgDIAAgDIAAgLIgBgMIgBgbIgDgcIgEAAQgRAAgKgCQgJgDAAgHQAAgFADgDQADgDAFAAIANABIAMABIAPAAIANAAIASABIASAAQAEAAADADQAEAEAAADQAAAFgEADQgDADgEAAIgTgBIgTgBIACAhIABAeIABAIIAAAIQAAAGgCAEQgDAHgGAAQgEgBgDgCg");
	this.shape_52.setTransform(-127.7,-11.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgKAVQAAgFADgCQAEgDADAAQAMAAAAASQAAAEgDADQgDADgFAAQgLAAAAgSgAgHgQQgDgDAAgEIgBgDIAAgCQAAgFADgDQADgCAFAAQALAAAAAPQAAAEgDADQgEADgEAAQgEAAgDgDg");
	this.shape_53.setTransform(-143.7,-10.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgjA8QgJgHAAgaIACgeIABggIgBgIIAAgIQgBgMALAAQADAAAEACIARgDIAOgBQAUgBAMAFQAHADAAAHQAAAEgDADQgDAEgFAAIgDAAQgNgEgMAAIgLABIgPADIgBAeIAegCIATgCQAFAAADADQADADAAAFQABAIgKACIgTABIghADIgBAQQAAAQACABQACABAIAAIAOAAIAPAAIAEgBIAFAAQAEAAADACQAEAEAAAFQAAAIgJACQgIACgYAAQgZAAgHgHg");
	this.shape_54.setTransform(-152,-11.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgoAvIABgZQACghAAgqQAAgDADgEQADgDAEAAQAFAAADADQADAEAAADQAAAqgCAjIgBATQATgBAbgIIAEgBQAFAAADADQACAEABAEQgBAHgGADQgKADgSAEQgSADgKAAQgUAAABgRg");
	this.shape_55.setTransform(-161.4,-11.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgfA1QgUgQAAgmIAAgLIABgLIAAgJIAAgJQAAgGACgGQADgHAGAAQAEAAADADQAEADAAAEIAAAOIAAANIgBALIAAALQAAALADAKQADAMAGAFQAEACAMABQAUAAAHgkQADgRAAghQAAgEADgFQAEgFAGAAQAFAAADAEQACADAAADQAAAfgDASQgEAZgNASQgGAHgIAGQgKAGgJAAQgUAAgKgIg");
	this.shape_56.setTransform(-172,-11.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgpA6QgEgDAAgEIAAgSIAAgRIAAg+QAAgFAEgEQADgGAIABIATABQALACAHADQAhARAAAZQAAAKgHAHQgHAIgOAFQAVAMAKAMQADADAAAEQAAAEgDAEQgEADgEAAQgEAAgEgEQgYgWgbgIIABAZQAAAEgDADQgDADgFAAQgEAAgDgDgAgXACIADAAQAUAAAHgDQAFgCADgEQADgDAAgCQAAgJgLgIQgKgHgLgCIgJAAg");
	this.shape_57.setTransform(-182.8,-11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-193.4,-25.3,386.8,50.6);


(lib.static_rule3a_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNAMQgHgFAAgHQAAgFAHgGQAGgFAHAAQAJAAAGAFQAGAFAAAGQAAAHgGAFQgGAFgJAAQgHAAgGgFg");
	this.shape.setTransform(136.4,48.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AglBgQgFAFgGAAQgIAAgEgFQgFgEAAgHIAAgJIAAgKIAAiOQABgKAEgHQAFgJAJAAQAOAAAAAPIAAAFIgBAGIAAAwQAJgFAJgDQAJgCAGAAQAfAAASAVQARAUAAAdQAAAdgUAVQgUAVgdAAQgSAAgQgHgAgNgCQgKADgKAIIAAA1QASAIAMAAQAPAAALgLQAKgLgBgQQAAgRgIgLQgIgKgQAAQgFAAgIAEg");
	this.shape_1.setTransform(123.2,39.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgxBCQgEgEAAgIIAAhSIAAgLIAAgMQAAgHAEgFQAEgFAIAAQAOAAADAPQAVgRAcAAQAaAAAAAiIAAAIQgCAUgQAAQgRAAABgRIgBgNQgbAFgNAZIAAA+QAAAIgEAFQgGAEgHAAQgIAAgEgFg");
	this.shape_2.setTransform(109.5,42.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgqA3QgWgQAAgdQAAggARgWQATgYAfAAQAWAAAOAHQAUAJgBAUQAAAOgPALQgIAFgVAIIgqATQAHAHAIADQAJADAKAAQARAAAMgHQALgGAFAAQAOAAAAANQAAAOgWAJQgRAIgUAAQgdAAgTgOgAgQgeQgJAIgFAQIAcgNQARgHAJgHQgIgFgNAAQgMAAgHAIg");
	this.shape_3.setTransform(95.5,42.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgSA4IgqhlIgCgHQABgHAFgEQAGgFAGgBQAMABAEAJQAIAQAUA3IASgqIALgbQAFgLALAAQAGAAAGAFQAGAFAAAGQAAAFgVAuIgaA4QgBAGgFAEQgEAFgGAAQgMgBgGgNg");
	this.shape_4.setTransform(82.3,42.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgMBkQgEgFAAgIIAAiuQgBgHAGgFQAFgFAHAAQAHAAAEAFQAFAFABAHIAACoQgBAYgRAAQgGAAgGgFg");
	this.shape_5.setTransform(60.9,38.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AAfA6QgMAGgJADQgJADgFAAQgfAAgPgRQgPgQAAghQAAgdAWgWQAXgWAfAAQAMAAAPAHQAUAIAAALQAAAFgDADIgCANIgBARQAAAXADALIAGANIAFAMQAAAHgFAEQgFAFgHAAQgGAAgMgMgAgRgZQgNAOAAAQQAAARAGAJQAGAJAMAAQAHAAAHgDQAHgDAHgFQgEgdAAgPIAAgJIACgMIgEgCIgEAAQgQAAgNANg");
	this.shape_6.setTransform(50.3,42.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgyBCQgEgEAAgIIAAhSIABgLIAAgMQAAgHAFgFQADgFAJAAQAOAAACAPQAWgRAbAAQAaAAgBAiIAAAIQgBAUgRAAQgQAAAAgRIAAgNQgbAFgNAZIABA+QAAAIgGAFQgEAEgIAAQgIAAgFgFg");
	this.shape_7.setTransform(37,42.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AAZA/QgQAGgQAAQgSAAgNgIQgNgIgDgRQgFggAAgYQAAgQAEgVQACgOAPAAQAHAAAFAEQAGAFAAAHIgCARIgCASIABAeQABAOADAIIAGADIAGAAQANAAARgEIAAgWIgBgUQAAgaADgTQACgPAPAAQAIAAAFAEQAFAFAAAHIgDAtIABAZIAAAZIAAAIIABAIQAAAHgGAFQgFAEgHAAQgLAAgFgJg");
	this.shape_8.setTransform(23.6,42.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgLBkQgFgFgBgIIAAiuQAAgHAGgFQAFgFAGAAQAIAAAFAFQAEAFAAAHIAACoQAAAYgRAAQgHAAgEgFg");
	this.shape_9.setTransform(13.3,38.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("Ag0BmQgFgFAAgIIAAgvIAAgxQAAgbgCgUIgCgZQABgLAEgHQAGgJAJAAQAHAAAFAFQAEAFAAAHIAAABQAJgFAIgCQAIgDAJAAQAdAAAOAZQAJATABAdQgBAbgPATQgRATgdAAQgKAAgMgCIAAAzQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgHg8QgHAEgJAHQABAaAAAaQAMADAKAAQANAAAHgIQAGgIABgPQgBgRgBgGQgEgQgMAAQgIAAgIAEg");
	this.shape_10.setTransform(3.1,45.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAfA6QgMAGgJADQgJADgFAAQgfAAgPgRQgPgQAAghQAAgdAWgWQAXgWAfAAQAMAAAPAHQAUAIAAALQAAAFgDADIgCANIgBARQAAAXADALIAGANIAFAMQAAAHgFAEQgFAFgHAAQgGAAgMgMgAgRgZQgNAOAAAQQAAARAGAJQAGAJAMAAQAHAAAHgDQAHgDAHgFQgEgdAAgPIAAgJIACgMIgEgCIgEAAQgQAAgNANg");
	this.shape_11.setTransform(-22.4,42.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgjBCQgTgHAAgNQAAgNAPAAQAGAAALAEQALADAGAAQAZAAAAgKQAAgHgSgIQgZgLgIgFQgSgMAAgSQAAgZAbgKQAQgEAgAAQAMgBAHAEQAIAEAAAMQAAAXgMAAQgNAAgDgLIgKgBQgeAAAAAJQAAAFASAJQAZALAJAGQASANAAARQAAAWgUALQgQAIgXABQgRgBgOgFg");
	this.shape_12.setTransform(-47.5,42.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgqA3QgWgQAAgdQAAggARgWQATgYAfAAQAWAAAOAHQAUAJgBAUQAAAOgPALQgIAFgVAIIgqATQAHAHAIADQAJADAKAAQARAAAMgHQALgGAFAAQAOAAAAANQAAAOgWAJQgRAIgUAAQgdAAgTgOgAgQgeQgJAIgFAQIAcgNQARgHAJgHQgIgFgNAAQgMAAgHAIg");
	this.shape_13.setTransform(-61.1,42.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgyBCQgEgEAAgIIAAhSIABgLIAAgMQAAgHAFgFQADgFAJAAQAOAAACAPQAWgRAbAAQAaAAgBAiIAAAIQgBAUgRAAQgQAAAAgRIAAgNQgbAFgNAZIABA+QAAAIgGAFQgEAEgIAAQgIAAgFgFg");
	this.shape_14.setTransform(-74.2,42.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgPBcQgFgFAAgHIgBgXIAAgYIABgcIABgbQAAgIAFgEQAFgFAIAAQAHAAAFAFQAEAEAAAIIgBAbIgBAcIAAAYIABAXQAAAHgFAFQgFAFgHAAQgHAAgFgFgAgLhAQgGgGAAgHQAAgIAGgGQAGgFAHAAQAIAAAGAFQAGAGAAAIQAAAHgGAGQgGAFgIABQgHgBgGgFg");
	this.shape_15.setTransform(-84,39.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAZA/QgQAGgQAAQgSAAgNgIQgNgIgDgRQgFggAAgYQAAgQAEgVQACgOAPAAQAHAAAFAEQAGAFAAAHIgCARIgCASIABAeQABAOADAIIAGADIAGAAQANAAARgEIAAgWIgBgUQAAgaADgTQACgPAPAAQAIAAAFAEQAFAFAAAHIgDAtIABAZIAAAZIAAAIIABAIQAAAHgGAFQgFAEgHAAQgLAAgFgJg");
	this.shape_16.setTransform(-94.8,42.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AANBSIAAgHIAEgkIgKABQgcAAgTgPQgUgQAAgbQAAglAWgXQAXgYAmAAQAHAAAEAEQAFgDAEAAQAIAAAFAFQAFAGAAAGQAAAlgEApIgGAtQgDAaAAAVQAAAHgFAFQgFAFgIAAQgRAAAAgVgAgQgzQgJAOAAATQAAANAIAGQAJAJAOgBQAJAAAEgJQAGgMAAggIACgbIgEAAIgIAAQgUADgLARg");
	this.shape_17.setTransform(-108.6,45.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgrA3QgVgQAAgdQAAggARgWQASgYAfAAQAXAAAOAHQATAJAAAUQAAAOgPALQgHAFgWAIIgpATQAFAHAJADQAJADAKAAQARAAAMgHQAKgGAHAAQANAAAAANQAAAOgVAJQgSAIgUAAQgdAAgUgOgAgRgeQgIAIgFAQIAdgNQAPgHALgHQgJgFgOAAQgKAAgJAIg");
	this.shape_18.setTransform(-122.4,42.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgxBCQgFgEAAgIIAAhSIABgLIAAgMQAAgHAFgFQAEgFAHAAQAOAAADAPQAVgRAcAAQAZAAAAAiIAAAIQgBAUgRAAQgPAAAAgRIgBgNQgcAFgMAZIAAA+QAAAIgEAFQgGAEgHAAQgIAAgEgFg");
	this.shape_19.setTransform(-135.5,42.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AglBiQgFgFAAgHQAAgMAag6QgNgagfg2IgGgKQgDgFAAgFQAAgHAFgFQAFgGAIAAQAIAAAFAHQASAYAXAwIAQgkQAJgTAJgPQAFgJAKAAQAHAAAFAFQAGAFAAAHQAAAEgCAEIgsBZQgQAigIAVIgIAYQgFAMgLAAQgIAAgFgFg");
	this.shape_20.setTransform(134.6,7.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAaA6IgEgaQgCgOAAgMIABgKIAAgMIABgEIAAgGQAAgLgFAAQgLAAgKAOQgKAOgGAVIgBALIgBAMIgBALIAAALQAAAHgFAFQgFAFgIAAQgIAAgEgFQgGgFAAgHIAAgLIgBgLIACgjIABghIAAgMIAAgLQAAgHAFgFQAFgFAHAAQARAAABAUIAAABQATgSAUAAQAYAAAIAUQAHANAAAbIAAAJIAAAHQAAAKACAQQADAPAAAKQAAAHgFAFQgFAFgHAAQgQAAgCgQg");
	this.shape_21.setTransform(120.8,4.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAfA6QgMAGgJADQgJADgFAAQgfAAgPgRQgPgQAAghQAAgdAWgWQAXgWAfAAQAMAAAPAHQAUAIAAALQAAAFgDADIgCANIgBARQAAAXADALIAGANIAFAMQAAAHgFAEQgFAFgHAAQgGAAgMgMgAgRgZQgNAOAAAQQAAARAGAJQAGAJAMAAQAHAAAHgDQAHgDAHgFQgEgdAAgPIAAgJIACgMIgEgCIgEAAQgQAAgNANg");
	this.shape_22.setTransform(106.7,4.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgKBKQgFgFAAgHQAAgPgDgcQgDgbAAgPQAAgIgCgFQgPAJgOAUIgDACIAAAoIAAAJIgBAJQAAAHgFAEQgFAEgIAAQgLAAgDgKQgDgGAAgOIAAguIgBgTIAAgSQAAgMAEgJQAFgLAJAAQAHAAAGAFQAFAGAAAGIgBALQATgWARAAQAUAAAIAPQAIgHAJgDQAKgEALAAQAYAAAJAZQACAFAEAdQADAUAGAwQAAAHgFAFQgGAFgHAAQgOAAgDgPIgFglIgEgkQgDgXgGAAQgDAAgKAGIgPAKQAAAPADAaQAEAcAAAOQAAAHgFAFQgFAEgIAAQgGAAgFgEg");
	this.shape_23.setTransform(89.6,4.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AhBBRQABgHAEgEQAEgEAHAAIARACQALACAHAAQATAAAIgMQAKgLABgYQgHAGgIADQgIAEgIAAQgaAAgQgRQgQgQAAgZQAAgiAWgWQAWgWAjAAQAMAAAJADQAJADAFAGQAQACAAARQABAJgDAPQgGAdgBAhQgBApgNASQgQAZgpAAQgyAAAAgUgAgTg5QgLANAAAVQAAAPAGAHQAGAHALAAQAJAAALgLQAKgMABgLQADgMADgaIgJgEIgIgBQgUAAgMAOg");
	this.shape_24.setTransform(61,7.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAaA6IgDgaQgCgOAAgMIAAgKIABgMIAAgEIAAgGQAAgLgFAAQgLAAgJAOQgLAOgFAVIgCALIAAAMIgBALIgBALQAAAHgFAFQgFAFgIAAQgHAAgGgFQgEgFAAgHIgBgLIgBgLIACgjIACghIAAgMIgBgLQAAgHAFgFQAFgFAIAAQAQAAACAUIAAABQASgSATAAQAYAAAKAUQAGANAAAbIAAAJIgBAHQABAKADAQQACAPAAAKQAAAHgFAFQgFAFgIAAQgPAAgCgQg");
	this.shape_25.setTransform(47.5,4.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgPBcQgFgFAAgHIgBgXIAAgYIABgcIABgbQAAgIAFgEQAFgFAIAAQAHAAAFAFQAEAEAAAIIgBAbIgBAcIAAAYIABAXQAAAHgFAFQgFAFgHAAQgHAAgFgFgAgLhAQgGgGAAgHQAAgIAGgGQAGgFAHAAQAIAAAGAFQAGAGAAAIQAAAHgGAGQgGAFgIABQgHgBgGgFg");
	this.shape_26.setTransform(37.2,1.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAaA6IgDgaQgDgOAAgMIABgKIAAgMIABgEIAAgGQAAgLgFAAQgLAAgJAOQgLAOgFAVIgCALIAAAMIgCALIAAALQAAAHgFAFQgFAFgIAAQgIAAgFgFQgEgFgBgHIAAgLIgBgLIACgjIACghIAAgMIgBgLQAAgHAFgFQAFgFAIAAQAQAAACAUIAAABQASgSAUAAQAYAAAJAUQAGANAAAbIAAAJIgBAHQAAAKAEAQQACAPAAAKQAAAHgFAFQgFAFgHAAQgQAAgCgQg");
	this.shape_27.setTransform(26.6,4.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAfA6QgMAGgJADQgJADgFAAQgfAAgPgRQgPgQAAghQAAgdAWgWQAXgWAfAAQAMAAAPAHQAUAIAAALQAAAFgDADIgCANIgBARQAAAXADALIAGANIAFAMQAAAHgFAEQgFAFgHAAQgGAAgMgMgAgRgZQgNAOAAAQQAAARAGAJQAGAJAMAAQAHAAAHgDQAHgDAHgFQgEgdAAgPIAAgJIACgMIgEgCIgEAAQgQAAgNANg");
	this.shape_28.setTransform(12.5,4.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgqA3QgWgQAAgdQAAggARgWQASgYAgAAQAVAAAPAHQAUAJgBAUQAAAOgPALQgIAFgVAIIgqATQAHAHAIADQAJADAKAAQARAAAMgHQALgGAFAAQAOAAAAANQAAAOgWAJQgRAIgUAAQgeAAgSgOgAgQgeQgJAIgFAQIAcgNQAQgHAKgHQgIgFgNAAQgMAAgHAIg");
	this.shape_29.setTransform(-2.2,4.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgKBKQgFgFAAgHQAAgPgDgcQgDgbAAgPQAAgIgCgFQgPAJgOAUIgDACIAAAoIAAAJIgBAJQAAAHgFAEQgFAEgIAAQgLAAgDgKQgDgGAAgOIAAguIgBgTIAAgSQAAgMAEgJQAFgLAJAAQAHAAAGAFQAFAGAAAGIgBALQATgWARAAQAUAAAIAPQAIgHAJgDQAKgEALAAQAYAAAJAZQACAFAEAdQADAUAGAwQAAAHgFAFQgGAFgHAAQgOAAgDgPIgFglIgEgkQgDgXgGAAQgDAAgKAGIgPAKQAAAPADAaQAEAcAAAOQAAAHgFAFQgFAEgIAAQgGAAgFgEg");
	this.shape_30.setTransform(-19.2,4.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAJAdQgEgEgBgGIAGgTIAHgTQAEgKAMAAQAHAAAFAEQAFAEAAAGQAAADgGAQIgHAUQgFAJgLAAQgHAAgFgEgAgsAdQgFgEAAgGQAAgFAFgOIAJgVQADgLANAAQAHAAAEAEQAFAEABAGQAAAFgGAOIgIAWQgEAKgMAAQgHAAgFgEg");
	this.shape_31.setTransform(-46.4,-6.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgxBCQgEgEgBgIIAAhSIABgLIAAgMQAAgHAEgFQAFgFAHAAQAOAAADAPQAVgRAcAAQAaAAAAAiIAAAIQgCAUgQAAQgRAAABgRIgBgNQgbAFgNAZIAAA+QAAAIgEAFQgGAEgHAAQgIAAgEgFg");
	this.shape_32.setTransform(-58,4.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgqA3QgWgQAAgdQAAggARgWQASgYAgAAQAVAAAPAHQAUAJgBAUQAAAOgPALQgIAFgVAIIgqATQAHAHAIADQAJADAKAAQARAAAMgHQALgGAFAAQAOAAAAANQAAAOgWAJQgRAIgUAAQgeAAgSgOgAgQgeQgJAIgFAQIAcgNQAQgHAKgHQgIgFgNAAQgMAAgHAIg");
	this.shape_33.setTransform(-72,4.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AglBgQgEAFgIAAQgGAAgFgFQgFgEAAgHIAAgJIAAgKIAAiOQAAgKAFgHQAFgJAJAAQAOAAAAAPIAAAFIgBAGIAAAwQAKgFAIgDQAIgCAIAAQAdAAATAVQARAUAAAdQAAAdgUAVQgUAVgdAAQgSAAgQgHgAgOgCQgJADgKAIIAAA1QASAIAMAAQAPAAAKgLQALgLgBgQQAAgRgIgLQgJgKgOAAQgGAAgJAEg");
	this.shape_34.setTransform(-86.7,0.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgKBKQgFgFAAgHQAAgPgDgcQgDgbAAgPQAAgIgCgFQgPAJgOAUIgDACIAAAoIAAAJIgBAJQAAAHgFAEQgFAEgIAAQgLAAgDgKQgDgGAAgOIAAguIgBgTIAAgSQAAgMAEgJQAFgLAJAAQAHAAAGAFQAFAGAAAGIgBALQATgWARAAQAUAAAIAPQAIgHAJgDQAKgEALAAQAYAAAJAZQACAFAEAdQADAUAGAwQAAAHgFAFQgGAFgHAAQgOAAgDgPIgFglIgEgkQgDgXgGAAQgDAAgKAGIgPAKQAAAPADAaQAEAcAAAOQAAAHgFAFQgFAEgIAAQgGAAgFgEg");
	this.shape_35.setTransform(-104.3,4.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAZA/QgQAGgQAAQgSAAgNgIQgNgIgDgRQgFggAAgYQAAgQAEgVQACgOAPAAQAHAAAFAEQAGAFAAAHIgCARIgCASIABAeQABAOADAIIAGADIAGAAQANAAARgEIAAgWIgBgUQAAgaADgTQACgPAPAAQAIAAAFAEQAFAFAAAHIgDAtIABAZIAAAZIAAAIIABAIQAAAHgGAFQgFAEgHAAQgLAAgFgJg");
	this.shape_36.setTransform(-121.5,4.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAaA6IgDgaQgCgOgBgMIABgKIABgMIAAgEIAAgGQAAgLgFAAQgLAAgJAOQgLAOgFAVIgCALIAAAMIgBALIgBALQAAAHgFAFQgFAFgIAAQgIAAgFgFQgEgFAAgHIgBgLIgBgLIACgjIACghIAAgMIgBgLQAAgHAFgFQAFgFAIAAQAQAAACAUIAAABQASgSATAAQAZAAAJAUQAGANAAAbIAAAJIgBAHQAAAKAEAQQACAPAAAKQAAAHgFAFQgFAFgIAAQgPAAgCgQg");
	this.shape_37.setTransform(-134.8,4.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAfA6QgMAGgJADQgJADgFAAQgfAAgPgRQgPgQAAghQAAgdAWgWQAXgWAfAAQAMAAAPAHQAUAIAAALQAAAFgDADIgCANIgBARQAAAXADALIAGANIAFAMQAAAHgFAEQgFAFgHAAQgGAAgMgMgAgRgZQgNAOAAAQQAAARAGAJQAGAJAMAAQAHAAAHgDQAHgDAHgFQgEgdAAgPIAAgJIACgMIgEgCIgEAAQgQAAgNANg");
	this.shape_38.setTransform(150.6,-34);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AARAXIgIgWQgGgOABgFQAAgGAEgEQAFgEAHAAQANAAADALIAIAVQAGAOAAAFQAAAGgFAEQgGAEgGAAQgMAAgEgKgAgkAYIgIgUQgFgQAAgDQAAgGAFgEQAGgEAGAAQAMAAAEAKIAGATIAHATQAAAGgGAEQgFAEgHAAQgLAAgEgJg");
	this.shape_39.setTransform(137.4,-44.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAaA6IgDgaQgCgOAAgMIAAgKIABgMIAAgEIAAgGQAAgLgFAAQgLAAgJAOQgLAOgGAVIgBALIAAAMIgBALIgBALQAAAHgFAFQgFAFgIAAQgHAAgGgFQgEgFAAgHIgBgLIgBgLIACgjIACghIAAgMIgBgLQAAgHAFgFQAFgFAIAAQAQAAACAUIAAABQASgSATAAQAYAAAKAUQAGANAAAbIAAAJIgBAHQABAKADAQQACAPAAAKQAAAHgFAFQgFAFgIAAQgPAAgCgQg");
	this.shape_40.setTransform(114.1,-34.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgpA2QgSgTgBgcQgBgcAQgWQATgZAigBQAZABAPATQAOATAAAbQAAAcgQAVQgSAYgcAAQgYAAgRgQgAgSgVQgHAMAAAQQAAAPAJAHQAGAHAKAAQAKAAAIgIQAJgIABgPQABgogXAAIgBAAQgOAAgJAOg");
	this.shape_41.setTransform(100.2,-33.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgPBcQgFgFAAgHIgBgXIAAgYIABgcIABgbQAAgIAFgEQAFgFAIAAQAHAAAFAFQAEAEAAAIIgBAbIgBAcIAAAYIABAXQAAAHgFAFQgFAFgHAAQgHAAgFgFgAgLhAQgGgGAAgHQAAgIAGgGQAGgFAHAAQAIAAAGAFQAGAGAAAIQAAAHgGAGQgGAFgIABQgHgBgGgFg");
	this.shape_42.setTransform(90.2,-37);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgjBCQgTgHAAgNQAAgNAPAAQAGAAALAEQALADAGAAQAZAAAAgKQAAgHgSgIQgZgLgIgFQgSgMAAgSQAAgZAbgKQAQgEAgAAQAMgBAHAEQAIAEAAAMQAAAXgMAAQgNAAgDgLIgKgBQgeAAAAAJQAAAFASAJQAZALAJAGQASANAAARQAAAWgUALQgQAIgXABQgRgBgOgFg");
	this.shape_43.setTransform(79.7,-34.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgjBCQgTgHAAgNQAAgNAPAAQAGAAALAEQALADAGAAQAZAAAAgKQAAgHgSgIQgZgLgIgFQgSgMAAgSQAAgZAbgKQAQgEAgAAQAMgBAHAEQAIAEAAAMQAAAXgMAAQgNAAgDgLIgKgBQgeAAAAAJQAAAFASAJQAZALAJAGQASANAAARQAAAWgUALQgQAIgXABQgRgBgOgFg");
	this.shape_44.setTransform(67.1,-34.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgqA3QgWgQAAgdQAAggARgWQASgYAgAAQAVAAAPAHQAUAJAAAUQAAAOgQALQgIAFgVAIIgqATQAHAHAIADQAJADAKAAQARAAAMgHQALgGAFAAQAOAAAAANQAAAOgWAJQgRAIgUAAQgeAAgSgOgAgRgeQgIAIgFAQIAcgNQAQgHAKgHQgIgFgNAAQgLAAgJAIg");
	this.shape_45.setTransform(53.5,-34);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgyBCQgDgEAAgIIAAhSIAAgLIAAgMQAAgHAEgFQAFgFAIAAQAOAAACAPQAWgRAbAAQAZAAABAiIAAAIQgCAUgQAAQgQAAgBgRIAAgNQgcAFgMAZIABA+QgBAIgFAFQgEAEgIAAQgIAAgFgFg");
	this.shape_46.setTransform(40.4,-34);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("Ag0BmQgFgFAAgIIAAgvIAAgxQAAgbgCgUIgBgZQgBgLAFgHQAGgJAJAAQAHAAAFAFQAEAFABAHIAAABQAIgFAJgCQAHgDAJAAQAdAAANAZQAKATAAAdQAAAbgPATQgSATgcAAQgKAAgMgCIAAAzQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGg8QgJAEgIAHQACAagBAaQAMADAKAAQANAAAHgIQAHgIAAgPQAAgRgCgGQgDgQgNAAQgIAAgHAEg");
	this.shape_47.setTransform(27.1,-31);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAkBDQgMgNgZggIggAeIgKAKQgGAFgHAAQgHAAgFgEQgFgGAAgGQAAgIAKgJIARgOIAYgXIgOgUQgJgMgIgGQgGgFAAgHQAAgHAFgFQAFgFAHAAQAJAAAQASIATAaIAWgSQANgMAGgIQAFgIAJAAQAHAAAFAFQAFAFAAAGQAAAJgNANIgSAQIgUASIAnAvQAEAFAAAEQAAAHgFAFQgGAFgGAAQgIAAgFgGg");
	this.shape_48.setTransform(12.3,-34.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgrA3QgVgQAAgdQAAggARgWQASgYAfAAQAXAAAOAHQATAJAAAUQAAAOgPALQgIAFgVAIIgpATQAFAHAJADQAJADAKAAQARAAAMgHQAKgGAHAAQANAAAAANQAAAOgVAJQgSAIgUAAQgeAAgTgOgAgQgeQgJAIgFAQIAdgNQAQgHAKgHQgJgFgOAAQgLAAgHAIg");
	this.shape_49.setTransform(-2.8,-34);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgrA3QgVgQAAgdQAAggARgWQATgYAeAAQAXAAAOAHQATAJABAUQAAAOgQALQgHAFgWAIIgqATQAGAHAJADQAJADAKAAQARAAAMgHQAKgGAHAAQANAAAAANQAAAOgWAJQgRAIgUAAQgdAAgUgOgAgRgeQgIAIgFAQIAdgNQAPgHALgHQgJgFgOAAQgKAAgJAIg");
	this.shape_50.setTransform(-28.6,-34);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAeBdQgEgKgCgTQgCgSAAgLIAAgKIAAgKIAAgLQgBgGgGAAQgOAAgKAMQgGAHgKASQAAAugFAJQgEALgLAAQgHAAgGgFQgFgFAAgHIABgGQABgDABggQgBgZABg7IAAgEIABgUIgBgLIgCgMQAAgHAGgFQAFgFAHAAQANAAAEAOQACAHAAAQIAAAaIgBAZQAJgKALgEQAJgFAMAAQAWAAAKANQAHAJABASIACAfIACAZIAFAZIAAAEQAAAHgFAFQgGAFgHAAQgNAAgDgNg");
	this.shape_51.setTransform(-43,-37.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgMBcQgFgFAAgHIAAgFIABgGIgBgSIgBgRQAAgRgDgdIgDguIgHAAQgcAAgRgEQgNgDAAgNQgBgHAFgFQAFgGAJAAIAUADIAUABIAYAAIAVgBIAeACIAdABQAHAAAFAFQAGAFAAAHQAAAIgGAFQgFAFgHAAIgggCIgegBIADAzQADAgAAATIABANIABANQAAAJgFAIQgEAKgKAAQgGAAgGgFg");
	this.shape_52.setTransform(-59.6,-37.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgRAiQAAgHAFgFQAGgEAGAAQAUAAAAAdQAAAIgGAEQgFAFgIAAQgSAAAAgegAgNgaQgFgEAAgIIAAgEIgBgFQAAgGAGgFQAFgFAHAAQASAAAAAZQAAAIgFAEQgFAFgHAAQgHAAgGgFg");
	this.shape_53.setTransform(-85.5,-35.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("Ag6BhQgOgMAAgpQAAgRACghQADgiAAgRIgCgNIgBgOQAAgTASAAQAFAAAFADIAcgFQANgCALAAQAgAAATAHQAMAFAAALQAAAHgFAFQgFAGgHAAIgGgBQgUgFgUAAIgTABIgXAFIgCAyIAxgFIAfgCQAHAAAGAFQAFAEAAAIQAAAOgQACIgfADIg1AFIgBAaQAAAZADADQACACAOAAIAXgBIAYAAIAHgBIAHAAQAIAAAFAEQAGAEAAAJQAAAOgPADQgNACgnAAQgpAAgMgLg");
	this.shape_54.setTransform(-99.1,-37.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AhDBMIADgnQADg3AAhDQAAgIAFgEQAFgGAHAAQAJAAAEAGQAGAEgBAIQAABEgDA4IgDAeQAfAAAugOIAGgBQAIAAAEAFQAFAGAAAGQAAALgLAFQgPAHggAFQgbAFgSAAQggAAAAgcg");
	this.shape_55.setTransform(-114.3,-36.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgzBXQghgaAAg/IABgSIAAgSIABgOIAAgPQAAgKAEgJQAFgMAIAAQAHAAAGAEQAGAGAAAHIgBAVIAAAWIAAASIgBASQAAASAFAQQAFAVAKAHQAFAFAVAAQAgAAAMg5QAGgeAAg2QAAgGAEgHQAGgJAKAAQAJAAAEAGQAEAGAAAFQAAAygFAcQgHArgVAcQgKAMgNAJQgQAKgPAAQghAAgQgMg");
	this.shape_56.setTransform(-131.6,-36.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AhEBfQgGgFAAgIIABgcIAAgdIAAhlQAAgIAFgHQAHgJALABIAgADQARACAMAGQA2AbAAApQAAAQgLAMQgMANgWAJQAhATARATQAFAFAAAGQAAAHgGAGQgFAFgHAAQgHAAgGgGQgmgkgtgOIABApQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgnADIAGABQAfAAAOgHQAHgDAFgGQAFgFAAgDQAAgOgSgOQgQgMgTgCIgPgBg");
	this.shape_57.setTransform(-149.1,-37.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-186.2,-58.3,372.5,116.8);


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


(lib.Content_scene4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_75 = function() {
		/* _root.v2a.start();*/
	}
	this.frame_93 = function() {
		/* _root.v2b.start();*/
	}
	this.frame_115 = function() {
		/* _root.v2d.start();*/
	}
	this.frame_213 = function() {
		/* _root.v2a.start();*/
	}
	this.frame_240 = function() {
		/* _root.v2b.start();*/
	}
	this.frame_266 = function() {
		/* _root.v2d.start();*/
	}
	this.frame_295 = function() {
		/* _root.v4d.start();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(75).call(this.frame_75).wait(18).call(this.frame_93).wait(22).call(this.frame_115).wait(98).call(this.frame_213).wait(27).call(this.frame_240).wait(26).call(this.frame_266).wait(29).call(this.frame_295).wait(129));

	// example2
	this.instance = new lib.static_rule3b_example1a("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(192.7,107.8,1,1,0,0,0,198.6,58.4);
	this.instance._off = true;

	this.text = new cjs.Text("Example:\nThe number of seals on the beach was surprising. ", "bold 14px 'Comic Sans MS'");
	this.text.lineHeight = 22;
	this.text.lineWidth = 393;
	this.text.parent = this;
	this.text.setTransform(0,-1.4);

	this.instance_1 = new lib.static_rule3b_example1b("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(196.6,43.1,1,1,0,0,0,0,24);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},240).to({state:[{t:this.instance}]},26).to({state:[{t:this.text,p:{x:0,y:-1.4}}]},7).to({state:[{t:this.instance_1}]},22).to({state:[{t:this.text,p:{x:-3.9,y:153}}]},5).wait(124));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(240).to({_off:false},0).wait(26).to({regX:199.4,regY:-0.8,x:193.5,y:48.6},0).to({_off:true,regX:0,regY:0,x:0,y:-1.4,text:"Example:\nThe number of seals on the beach was surprising. ",font:"bold 14px 'Comic Sans MS'",color:"#000000",textAlign:0,lineHeight:21.6,lineWidth:393},7).wait(151));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(295).to({_off:false},0).to({_off:true,regY:0,x:-3.9,y:153,text:"Example:\nThe number of seals on the beach was surprising. ",font:"bold 14px 'Comic Sans MS'",color:"#000000",textAlign:0,lineHeight:21.6,lineWidth:393},5).wait(124));

	// example1
	this.instance_2 = new lib.static_rule3a_example1a("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(189.8,76.4);

	this.instance_3 = new lib.static_rule3a_example1b("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(189.8,9.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2,p:{regY:0,y:76.4}}]},93).to({state:[{t:this.instance_2,p:{regY:-56.8,y:19.6}}]},22).to({state:[]},40).to({state:[{t:this.instance_3}]},140).to({state:[{t:this.instance_3}]},5).wait(124));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(295).to({_off:false},0).to({alpha:1},5).wait(124));

	// rule3b
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNAMQgHgFAAgHQAAgFAHgGQAGgFAHAAQAJAAAGAFQAGAFAAAGQAAAHgGAFQgGAFgJAAQgHAAgGgFg");
	this.shape.setTransform(340.2,128.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AglBgQgFAFgGAAQgIAAgEgFQgFgEAAgHIAAgJIAAgKIAAiOQABgKAEgHQAFgJAJAAQAOAAAAAPIAAAFIgBAGIAAAwQAJgFAJgDQAJgCAGAAQAfAAASAVQARAUAAAdQAAAdgUAVQgUAVgdAAQgSAAgQgHgAgNgCQgJADgLAIIAAA1QARAIANAAQAPAAALgLQAKgLAAgQQAAgRgJgLQgJgKgPAAQgFAAgIAEg");
	this.shape_1.setTransform(327,119.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgxBCQgEgEgBgIIAAhSIABgLIAAgMQAAgHAFgFQAEgFAHAAQAOAAADAPQAVgRAcAAQAaAAAAAiIAAAIQgCAUgQAAQgRAAABgRIgBgNQgbAFgNAZIAAA+QAAAIgEAFQgGAEgHAAQgIAAgEgFg");
	this.shape_2.setTransform(313.2,122.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgqA3QgWgQAAgdQAAggARgWQASgYAgAAQAVAAAPAHQAUAJAAAUQAAAOgQALQgIAFgVAIIgqATQAHAHAIADQAJADAKAAQARAAAMgHQALgGAFAAQAOAAAAANQAAAOgWAJQgRAIgUAAQgeAAgSgOgAgQgeQgJAIgFAQIAcgNQAQgHAKgHQgIgFgNAAQgMAAgHAIg");
	this.shape_3.setTransform(299.3,122.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgSA4IgqhlIgBgHQAAgHAFgEQAFgFAIgBQALABAEAJQAIAQAUA3IASgqIALgbQAFgLALAAQAGAAAGAFQAGAFAAAGQAAAFgVAuIgaA4QgBAGgEAEQgFAFgGAAQgMgBgGgNg");
	this.shape_4.setTransform(286.1,122.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgxBCQgFgEAAgIIAAhSIABgLIAAgMQAAgHAFgFQAEgFAHAAQAOAAADAPQAVgRAcAAQAZAAAAAiIAAAIQgBAUgRAAQgPAAAAgRIgBgNQgcAFgMAZIAAA+QAAAIgEAFQgGAEgHAAQgIAAgEgFg");
	this.shape_5.setTransform(262.3,122.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AAfA6QgMAGgJADQgJADgFAAQgfAAgPgRQgPgQAAghQAAgdAWgWQAXgWAfAAQAMAAAPAHQAUAIAAALQAAAFgDADIgCANIgBARQAAAXADALIAGANIAFAMQAAAHgFAEQgFAFgHAAQgGAAgMgMgAgRgZQgNAOAAAQQAAARAGAJQAGAJAMAAQAHAAAHgDQAHgDAHgFQgEgdAAgPIAAgJIACgMIgEgCIgEAAQgQAAgNANg");
	this.shape_6.setTransform(248.6,122.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgLBkQgGgFAAgIIAAiuQABgHAFgFQAFgFAGAAQAIAAAEAFQAGAFgBAHIAACoQABAYgSAAQgHAAgEgFg");
	this.shape_7.setTransform(237.7,119);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AAZA/QgQAGgQAAQgSAAgNgIQgNgIgDgRQgFggAAgYQAAgQAEgVQACgOAPAAQAHAAAFAEQAGAFAAAHIgCARIgCASIABAeQABAOADAIIAGADIAGAAQANAAARgEIAAgWIgBgUQAAgaADgTQACgPAPAAQAIAAAFAEQAFAFAAAHIgDAtIABAZIAAAZIAAAIIABAIQAAAHgGAFQgFAEgHAAQgLAAgFgJg");
	this.shape_8.setTransform(227.4,122.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AhABRQAAgHADgEQAFgEAHAAIARACQALACAHAAQATAAAIgMQAKgLABgYQgGAGgJADQgIAEgJAAQgZAAgQgRQgPgQAAgZQgBgiAWgWQAWgWAkAAQALAAAJADQAJADAFAGQAQACAAARQAAAJgCAPQgFAdgCAhQgBApgMASQgRAZgqAAQgxAAABgUgAgTg5QgLANABAVQgBAPAGAHQAGAHALAAQAJAAALgLQAKgMACgLQACgMADgaIgJgEIgIgBQgUAAgMAOg");
	this.shape_9.setTransform(213.7,126);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AAaA6IgDgaQgCgOAAgMIAAgKIABgMIAAgEIAAgGQAAgLgFAAQgLAAgJAOQgLAOgGAVIgBALIgBAMIAAALIgBALQAAAHgFAFQgFAFgIAAQgHAAgGgFQgEgFAAgHIgBgLIgBgLIACgjIABghIAAgMIAAgLQAAgHAFgFQAFgFAHAAQARAAABAUIAAABQATgSATAAQAYAAAJAUQAHANAAAbIAAAJIAAAHQAAAKACAQQADAPAAAKQAAAHgFAFQgFAFgIAAQgPAAgCgQg");
	this.shape_10.setTransform(200.3,122.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgPBcQgFgFAAgHIgBgXIAAgYIABgcIABgbQAAgIAFgEQAFgFAIAAQAHAAAFAFQAEAEAAAIIgBAbIgBAcIAAAYIABAXQAAAHgFAFQgFAFgHAAQgHAAgFgFgAgLhAQgGgGAAgHQAAgIAGgGQAGgFAHAAQAIAAAGAFQAGAGAAAIQAAAHgGAGQgGAFgIABQgHgBgGgFg");
	this.shape_11.setTransform(190,119.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgjBCQgTgHAAgNQAAgNAPAAQAGAAALAEQALADAGAAQAZAAAAgKQAAgHgSgIQgZgLgIgFQgSgMAAgSQAAgZAbgKQAQgEAgAAQAMgBAHAEQAIAEAAAMQAAAXgMAAQgNAAgDgLIgKgBQgeAAAAAJQAAAFASAJQAZALAJAGQASANAAARQAAAWgUALQgQAIgXABQgRgBgOgFg");
	this.shape_12.setTransform(179.5,122.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAfA6QgMAGgJADQgJADgFAAQgfAAgPgRQgPgQAAghQAAgdAWgWQAXgWAfAAQAMAAAPAHQAUAIAAALQAAAFgDADIgCANIgBARQAAAXADALIAGANIAFAMQAAAHgFAEQgFAFgHAAQgGAAgMgMgAgRgZQgNAOAAAQQAAARAGAJQAGAJAMAAQAHAAAHgDQAHgDAHgFQgEgdAAgPIAAgJIACgMIgEgCIgEAAQgQAAgNANg");
	this.shape_13.setTransform(155,122.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgjBCQgTgHAAgNQAAgNAPAAQAGAAALAEQALADAGAAQAZAAAAgKQAAgHgSgIQgZgLgIgFQgSgMAAgSQAAgZAbgKQAQgEAgAAQAMgBAHAEQAIAEAAAMQAAAXgMAAQgNAAgDgLIgKgBQgeAAAAAJQAAAFASAJQAZALAJAGQASANAAARQAAAWgUALQgQAIgXABQgRgBgOgFg");
	this.shape_14.setTransform(129.9,122.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgqA3QgWgQAAgdQAAggARgWQATgYAeAAQAWAAAPAHQATAJAAAUQAAAOgPALQgIAFgVAIIgpATQAFAHAJADQAJADAKAAQARAAAMgHQALgGAFAAQAOAAAAANQAAAOgVAJQgSAIgUAAQgeAAgSgOgAgQgeQgJAIgFAQIAcgNQARgHAJgHQgIgFgOAAQgLAAgHAIg");
	this.shape_15.setTransform(116.3,122.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgxBCQgFgEAAgIIAAhSIABgLIAAgMQAAgHAFgFQADgFAIAAQAOAAADAPQAWgRAbAAQAaAAgBAiIAAAIQgBAUgRAAQgQAAAAgRIAAgNQgbAFgNAZIABA+QAAAIgGAFQgEAEgIAAQgIAAgEgFg");
	this.shape_16.setTransform(103.2,122.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgPBcQgFgFAAgHIgBgXIAAgYIABgcIABgbQAAgIAFgEQAFgFAIAAQAHAAAFAFQAEAEAAAIIgBAbIgBAcIAAAYIABAXQAAAHgFAFQgFAFgHAAQgHAAgFgFgAgLhAQgGgGAAgHQAAgIAGgGQAGgFAHAAQAIAAAGAFQAGAGAAAIQAAAHgGAGQgGAFgIABQgHgBgGgFg");
	this.shape_17.setTransform(93.4,119.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAZA/QgQAGgQAAQgSAAgNgIQgNgIgDgRQgFggAAgYQAAgQAEgVQACgOAPAAQAHAAAFAEQAGAFAAAHIgCARIgCASIABAeQABAOADAIIAGADIAGAAQANAAARgEIAAgWIgBgUQAAgaADgTQACgPAPAAQAIAAAFAEQAFAFAAAHIgDAtIABAZIAAAZIAAAIIABAIQAAAHgGAFQgFAEgHAAQgLAAgFgJg");
	this.shape_18.setTransform(82.6,122.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AANBSIAAgHIAEgkIgKABQgcAAgTgPQgUgQAAgbQAAglAWgXQAXgYAmAAQAHAAAEAEQAFgDAEAAQAIAAAFAFQAFAGAAAGQAAAlgEApIgGAtQgDAaAAAVQAAAHgFAFQgFAFgIAAQgRAAAAgVgAgQgzQgJAOAAATQAAANAIAGQAJAJAOgBQAJAAAEgJQAGgMAAggIACgbIgEAAIgIAAQgUADgLARg");
	this.shape_19.setTransform(68.8,125.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgrA3QgVgQAAgdQAAggARgWQATgYAeAAQAXAAAOAHQATAJABAUQgBAOgPALQgHAFgWAIIgpATQAFAHAJADQAJADAKAAQARAAAMgHQAKgGAHAAQANAAAAANQAAAOgVAJQgSAIgUAAQgdAAgUgOgAgRgeQgIAIgFAQIAdgNQAPgHALgHQgJgFgOAAQgKAAgJAIg");
	this.shape_20.setTransform(55,122.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgxBCQgEgEgBgIIAAhSIABgLIAAgMQAAgHAEgFQAFgFAHAAQAOAAADAPQAVgRAcAAQAaAAAAAiIAAAIQgCAUgQAAQgRAAABgRIgBgNQgbAFgNAZIAAA+QAAAIgEAFQgGAEgHAAQgIAAgEgFg");
	this.shape_21.setTransform(41.9,122.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgLBkQgGgFAAgIIAAiuQABgHAFgFQAFgFAGAAQAIAAAEAFQAGAFAAAHIAACoQAAAYgSAAQgGAAgFgFg");
	this.shape_22.setTransform(340.2,80.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAfA6QgMAGgJADQgJADgFAAQgfAAgPgRQgPgQAAghQAAgdAWgWQAXgWAfAAQAMAAAPAHQAUAIAAALQAAAFgDADIgCANIgBARQAAAXADALIAGANIAFAMQAAAHgFAEQgFAFgHAAQgGAAgMgMgAgRgZQgNAOAAAQQAAARAGAJQAGAJAMAAQAHAAAHgDQAHgDAHgFQgEgdAAgPIAAgJIACgMIgEgCIgEAAQgQAAgNANg");
	this.shape_23.setTransform(329.6,84.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgKBZQgGgFAAgHIAAgOIAAgNIgChBIgXgCQgRgCABgPQAAgHAEgFQAGgFAHAAIAVACIAAgOIAAgMQgBgHAGgFQAFgFAHAAQASAAAAAgIgBAKIANgBQAPAAAGACQAJAEABAMQAAAHgGAFQgEAFgIAAIgGgBIgHAAIgMABIACBCIABAGIAAAIQAAAdgTAAQgGAAgEgEg");
	this.shape_24.setTransform(316.2,82.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgpA2QgSgTgBgcQgBgcAQgWQATgZAigBQAZABAPATQAOATAAAbQAAAcgQAVQgSAYgcAAQgYAAgRgQgAgSgVQgHAMAAAQQAAAPAJAHQAGAHAKAAQAKAAAIgIQAJgIABgPQABgogXAAIgBAAQgOAAgJAOg");
	this.shape_25.setTransform(303,84.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgLBZQgFgFAAgHIABgOIAAgNIgDhBIgXgCQgQgCgBgPQAAgHAGgFQAFgFAHAAIAVACIAAgOIgBgMQAAgHAGgFQAFgFAHAAQASAAAAAgIgBAKIAOgBQAOAAAGACQAKAEAAAMQAAAHgGAFQgFAFgHAAIgGgBIgGAAIgNABIADBCIAAAGIAAAIQAAAdgSAAQgGAAgGgEg");
	this.shape_26.setTransform(290.3,82.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAfA6QgMAGgJADQgJADgFAAQgfAAgPgRQgPgQAAghQAAgdAWgWQAXgWAfAAQAMAAAPAHQAUAIAAALQAAAFgDADIgCANIgBARQAAAXADALIAGANIAFAMQAAAHgFAEQgFAFgHAAQgGAAgMgMgAgRgZQgNAOAAAQQAAARAGAJQAGAJAMAAQAHAAAHgDQAHgDAHgFQgEgdAAgPIAAgJIACgMIgEgCIgEAAQgQAAgNANg");
	this.shape_27.setTransform(265.7,84.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AhABRQAAgHAEgEQAEgEAHAAIARACQAKACAIAAQATAAAIgMQAKgLABgYQgGAGgJADQgIAEgIAAQgaAAgQgRQgPgQAAgZQgBgiAWgWQAWgWAjAAQANAAAIADQAJADAFAGQAQACAAARQAAAJgCAPQgGAdgBAhQgBApgMASQgRAZgpAAQgyAAABgUgAgTg5QgLANAAAVQAAAPAGAHQAGAHALAAQAJAAALgLQAKgMACgLQACgMADgaIgJgEIgIgBQgUAAgMAOg");
	this.shape_28.setTransform(240.2,87.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAaA6IgDgaQgCgOAAgMIAAgKIABgMIAAgEIAAgGQAAgLgFAAQgLAAgJAOQgLAOgGAVIgBALIAAAMIgBALIgBALQAAAHgFAFQgFAFgIAAQgHAAgGgFQgEgFAAgHIgBgLIgBgLIACgjIABghIAAgMIAAgLQAAgHAFgFQAFgFAIAAQAQAAACAUIAAABQASgSATAAQAYAAAKAUQAGANAAAbIAAAJIAAAHQAAAKADAQQACAPAAAKQAAAHgFAFQgFAFgIAAQgPAAgCgQg");
	this.shape_29.setTransform(226.7,84.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgPBcQgFgFAAgHIgBgXIAAgYIABgcIABgbQAAgIAFgEQAFgFAIAAQAHAAAFAFQAEAEAAAIIgBAbIgBAcIAAAYIABAXQAAAHgFAFQgFAFgHAAQgHAAgFgFgAgLhAQgGgGAAgHQAAgIAGgGQAGgFAHAAQAIAAAGAFQAGAGAAAIQAAAHgGAGQgGAFgIABQgHgBgGgFg");
	this.shape_30.setTransform(216.4,81.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAaA6IgDgaQgCgOgBgMIABgKIABgMIAAgEIAAgGQAAgLgFAAQgLAAgJAOQgLAOgFAVIgCALIAAAMIgBALIgBALQAAAHgFAFQgFAFgIAAQgIAAgFgFQgEgFAAgHIgBgLIgBgLIACgjIACghIAAgMIgBgLQAAgHAFgFQAFgFAIAAQAQAAACAUIAAABQASgSATAAQAZAAAJAUQAGANAAAbIAAAJIgBAHQAAAKAEAQQACAPAAAKQAAAHgFAFQgFAFgIAAQgPAAgCgQg");
	this.shape_31.setTransform(205.8,84.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAfA6QgMAGgJADQgJADgFAAQgfAAgPgRQgPgQAAghQAAgdAWgWQAXgWAfAAQAMAAAPAHQAUAIAAALQAAAFgDADIgCANIgBARQAAAXADALIAGANIAFAMQAAAHgFAEQgFAFgHAAQgGAAgMgMgAgRgZQgNAOAAAQQAAARAGAJQAGAJAMAAQAHAAAHgDQAHgDAHgFQgEgdAAgPIAAgJIACgMIgEgCIgEAAQgQAAgNANg");
	this.shape_32.setTransform(191.7,84.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgqA3QgWgQAAgdQAAggARgWQATgYAfAAQAWAAAOAHQAUAJgBAUQAAAOgPALQgIAFgVAIIgqATQAHAHAIADQAJADAKAAQARAAAMgHQALgGAFAAQAOAAAAANQAAAOgWAJQgRAIgUAAQgdAAgTgOgAgQgeQgJAIgFAQIAcgNQARgHAJgHQgIgFgNAAQgMAAgHAIg");
	this.shape_33.setTransform(177,84.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgKBKQgFgFAAgHQAAgPgDgcQgDgbAAgPQAAgIgCgFQgPAJgOAUIgDACIAAAoIAAAJIgBAJQAAAHgFAEQgFAEgIAAQgLAAgDgKQgDgGAAgOIAAguIgBgTIAAgSQAAgMAEgJQAFgLAJAAQAHAAAGAFQAFAGAAAGIgBALQATgWARAAQAUAAAIAPQAIgHAJgDQAKgEALAAQAYAAAJAZQACAFAEAdQADAUAGAwQAAAHgFAFQgGAFgHAAQgOAAgDgPIgFglIgEgkQgDgXgGAAQgDAAgKAGIgPAKQAAAPADAaQAEAcAAAOQAAAHgFAFQgFAEgIAAQgGAAgFgEg");
	this.shape_34.setTransform(160,84.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAJAdQgEgEAAgGIAFgTIAHgTQAEgKAMAAQAHAAAEAEQAGAEAAAGQAAADgGAQIgHAUQgFAJgLAAQgHAAgFgEgAgsAdQgFgEAAgGQAAgFAFgOIAIgVQADgLAOAAQAGAAAFAEQAFAEABAGQAAAFgGAOIgIAWQgEAKgMAAQgHAAgFgEg");
	this.shape_35.setTransform(132.8,73.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgyBCQgDgEAAgIIAAhSIAAgLIAAgMQAAgHAEgFQAEgFAIAAQAOAAADAPQAVgRAcAAQAaAAAAAiIAAAIQgCAUgQAAQgRAAABgRIgBgNQgbAFgNAZIAAA+QAAAIgEAFQgGAEgHAAQgIAAgFgFg");
	this.shape_36.setTransform(121.2,84.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgqA3QgWgQAAgdQAAggARgWQATgYAfAAQAWAAAOAHQAUAJgBAUQAAAOgPALQgIAFgVAIIgqATQAHAHAIADQAJADAKAAQARAAAMgHQALgGAFAAQAOAAAAANQAAAOgWAJQgRAIgUAAQgdAAgTgOgAgQgeQgJAIgFAQIAcgNQARgHAJgHQgIgFgNAAQgMAAgHAIg");
	this.shape_37.setTransform(107.2,84.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AglBgQgEAFgIAAQgGAAgFgFQgFgEAAgHIAAgJIAAgKIAAiOQAAgKAFgHQAFgJAJAAQAOAAAAAPIgBAFIAAAGIAAAwQAKgFAIgDQAIgCAIAAQAdAAATAVQARAUAAAdQAAAdgUAVQgUAVgdAAQgSAAgQgHgAgOgCQgJADgKAIIAAA1QASAIAMAAQAPAAAKgLQAKgLAAgQQABgRgJgLQgJgKgOAAQgGAAgJAEg");
	this.shape_38.setTransform(92.5,80.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgKBKQgFgFAAgHQAAgPgDgcQgDgbAAgPQAAgIgCgFQgPAJgOAUIgDACIAAAoIAAAJIgBAJQAAAHgFAEQgFAEgIAAQgLAAgDgKQgDgGAAgOIAAguIgBgTIAAgSQAAgMAEgJQAFgLAJAAQAHAAAGAFQAFAGAAAGIgBALQATgWARAAQAUAAAIAPQAIgHAJgDQAKgEALAAQAYAAAJAZQACAFAEAdQADAUAGAwQAAAHgFAFQgGAFgHAAQgOAAgDgPIgFglIgEgkQgDgXgGAAQgDAAgKAGIgPAKQAAAPADAaQAEAcAAAOQAAAHgFAFQgFAEgIAAQgGAAgFgEg");
	this.shape_39.setTransform(74.9,84.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAZA/QgQAGgQAAQgSAAgNgIQgNgIgDgRQgFggAAgYQAAgQAEgVQACgOAPAAQAHAAAFAEQAGAFAAAHIgCARIgCASIABAeQABAOADAIIAGADIAGAAQANAAARgEIAAgWIgBgUQAAgaADgTQACgPAPAAQAIAAAFAEQAFAFAAAHIgDAtIABAZIAAAZIAAAIIABAIQAAAHgGAFQgFAEgHAAQgLAAgFgJg");
	this.shape_40.setTransform(57.7,84.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAaA6IgDgaQgCgOAAgMIAAgKIABgMIAAgEIAAgGQAAgLgFAAQgLAAgJAOQgLAOgGAVIgBALIAAAMIgBALIgBALQAAAHgFAFQgFAFgIAAQgHAAgGgFQgEgFAAgHIgBgLIgBgLIACgjIACghIAAgMIgBgLQAAgHAFgFQAFgFAIAAQAQAAACAUIAAABQASgSATAAQAYAAAKAUQAGANAAAbIAAAJIgBAHQABAKADAQQACAPAAAKQAAAHgFAFQgFAFgIAAQgPAAgCgQg");
	this.shape_41.setTransform(44.4,84.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgqA3QgWgQAAgdQAAggARgWQASgYAgAAQAVAAAPAHQAUAJAAAUQAAAOgQALQgIAFgVAIIgqATQAHAHAIADQAJADAKAAQARAAAMgHQALgGAFAAQAOAAAAANQAAAOgWAJQgRAIgUAAQgeAAgSgOgAgRgeQgIAIgFAQIAcgNQAQgHAKgHQgIgFgNAAQgLAAgJAIg");
	this.shape_42.setTransform(354.5,46.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAeBdQgEgKgCgTQgCgSAAgLIAAgKIAAgKIAAgLQgBgGgGAAQgOAAgKAMQgGAHgKASQAAAugFAJQgEALgLAAQgHAAgGgFQgFgFAAgHIABgGQABgDABggQgBgZABg7IAAgEIABgUIgBgLIgCgMQAAgHAGgFQAFgFAHAAQANAAAEAOQACAHAAAQIAAAaIgBAZQAJgKALgEQAJgFAMAAQAWAAAKANQAHAJABASIACAfIACAZIAFAZIAAAEQAAAHgFAFQgGAFgHAAQgNAAgDgNg");
	this.shape_43.setTransform(340.2,42.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgKBZQgGgFAAgHIAAgOIAAgNIgChBIgYgCQgPgCAAgPQAAgHAEgFQAFgFAIAAIAWACIgBgOIAAgMQAAgHAEgFQAGgFAHAAQASAAAAAgIAAAKIAMgBQAPAAAFACQALAEAAAMQgBAHgFAFQgEAFgIAAIgGgBIgHAAIgLABIABBCIABAGIAAAIQAAAdgTAAQgFAAgFgEg");
	this.shape_44.setTransform(326.3,43.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AARAXIgIgWQgFgOgBgFQAAgGAGgEQAEgEAIAAQANAAADALIAHAVQAGAOAAAFQAAAGgFAEQgGAEgGAAQgMAAgEgKgAgkAYIgHgUQgGgQAAgDQAAgGAGgEQAEgEAHAAQAMAAAEAKIAHATIAFATQAAAGgFAEQgFAEgHAAQgLAAgEgJg");
	this.shape_45.setTransform(314.3,35.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAaA6IgEgaQgCgOAAgMIABgKIAAgMIABgEIAAgGQAAgLgFAAQgLAAgKAOQgKAOgFAVIgCALIgBAMIgBALIAAALQAAAHgFAFQgFAFgIAAQgIAAgEgFQgGgFAAgHIAAgLIgBgLIACgjIABghIAAgMIAAgLQAAgHAFgFQAFgFAHAAQARAAABAUIAAABQATgSAUAAQAXAAAJAUQAHANAAAbIAAAJIgBAHQAAAKADAQQADAPAAAKQAAAHgFAFQgFAFgHAAQgQAAgCgQg");
	this.shape_46.setTransform(291,45.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgpA2QgSgTgBgcQgBgcAQgWQATgZAigBQAZABAPATQAOATAAAbQAAAcgQAVQgSAYgcAAQgYAAgRgQgAgSgVQgHAMAAAQQAAAPAJAHQAGAHAKAAQAKAAAIgIQAJgIABgPQABgogXAAIgBAAQgOAAgJAOg");
	this.shape_47.setTransform(277.1,46.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgPBcQgFgFAAgHIgBgXIAAgYIABgcIABgbQAAgIAFgEQAFgFAIAAQAHAAAFAFQAEAEAAAIIgBAbIgBAcIAAAYIABAXQAAAHgFAFQgFAFgHAAQgHAAgFgFgAgLhAQgGgGAAgHQAAgIAGgGQAGgFAHAAQAIAAAGAFQAGAGAAAIQAAAHgGAGQgGAFgIABQgHgBgGgFg");
	this.shape_48.setTransform(267.1,43.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgjBCQgTgHAAgNQAAgNAPAAQAGAAALAEQALADAGAAQAZAAAAgKQAAgHgSgIQgZgLgIgFQgSgMAAgSQAAgZAbgKQAQgEAgAAQAMgBAHAEQAIAEAAAMQAAAXgMAAQgNAAgDgLIgKgBQgeAAAAAJQAAAFASAJQAZALAJAGQASANAAARQAAAWgUALQgQAIgXABQgRgBgOgFg");
	this.shape_49.setTransform(256.6,46);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgjBCQgTgHAAgNQAAgNAPAAQAGAAALAEQALADAGAAQAZAAAAgKQAAgHgSgIQgZgLgIgFQgSgMAAgSQAAgZAbgKQAQgEAgAAQAMgBAHAEQAIAEAAAMQAAAXgMAAQgNAAgDgLIgKgBQgeAAAAAJQAAAFASAJQAZALAJAGQASANAAARQAAAWgUALQgQAIgXABQgRgBgOgFg");
	this.shape_50.setTransform(244,46);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgrA3QgVgQAAgdQAAggARgWQASgYAfAAQAXAAAOAHQATAJAAAUQAAAOgPALQgHAFgWAIIgpATQAFAHAJADQAJADAKAAQARAAAMgHQAKgGAHAAQANAAAAANQAAAOgVAJQgSAIgUAAQgdAAgUgOgAgRgeQgIAIgFAQIAdgNQAPgHALgHQgJgFgOAAQgKAAgJAIg");
	this.shape_51.setTransform(230.4,46.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgxBCQgFgEAAgIIAAhSIABgLIAAgMQAAgHAFgFQAEgFAHAAQAOAAADAPQAVgRAcAAQAZAAAAAiIAAAIQgBAUgRAAQgPAAAAgRIgBgNQgcAFgMAZIAAA+QAAAIgEAFQgGAEgHAAQgIAAgEgFg");
	this.shape_52.setTransform(217.3,46.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("Ag0BmQgFgFAAgIIAAgvIAAgxQAAgbgBgUIgDgZQAAgLAFgHQAGgJAJAAQAHAAAFAFQAFAFgBAHIAAABQAJgFAIgCQAIgDAJAAQAdAAAOAZQAKATgBAdQAAAbgQATQgQATgdAAQgKAAgMgCIAAAzQAAAIgFAFQgFAFgHAAQgIAAgFgFgAgHg8QgHAEgJAHQACAaAAAaQALADAKAAQANAAAHgIQAGgIAAgPQABgRgCgGQgDgQgNAAQgIAAgIAEg");
	this.shape_53.setTransform(204,49.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAkBDQgMgNgZggIggAeIgKAKQgGAFgHAAQgHAAgFgEQgFgGAAgGQAAgIAKgJIARgOIAYgXIgOgUQgJgMgIgGQgGgFAAgHQAAgHAFgFQAFgFAHAAQAJAAAQASIATAaIAWgSQANgMAGgIQAFgIAJAAQAHAAAFAFQAFAFAAAGQAAAJgNANIgSAQIgUASIAnAvQAEAFAAAEQAAAHgFAFQgGAFgGAAQgIAAgFgGg");
	this.shape_54.setTransform(189.2,45.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgqA3QgWgQAAgdQAAggARgWQASgYAgAAQAVAAAPAHQAUAJAAAUQAAAOgQALQgIAFgVAIIgqATQAHAHAIADQAJADAKAAQARAAAMgHQALgGAFAAQAOAAAAANQAAAOgWAJQgRAIgUAAQgeAAgSgOgAgRgeQgIAIgFAQIAcgNQAQgHAKgHQgIgFgNAAQgLAAgJAIg");
	this.shape_55.setTransform(174.1,46.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgqA3QgWgQAAgdQAAggARgWQATgYAfAAQAVAAAPAHQATAJAAAUQAAAOgPALQgIAFgVAIIgpATQAFAHAJADQAJADAKAAQARAAAMgHQALgGAFAAQAOAAAAANQAAAOgVAJQgSAIgUAAQgeAAgSgOgAgQgeQgJAIgFAQIAcgNQARgHAJgHQgIgFgNAAQgMAAgHAIg");
	this.shape_56.setTransform(148.3,46.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAeBdQgEgKgCgTQgCgSAAgLIAAgKIAAgKIAAgLQgBgGgGAAQgOAAgKAMQgGAHgKASQAAAugFAJQgEALgLAAQgHAAgGgFQgFgFAAgHIABgGQABgDABggQgBgZABg7IAAgEIABgUIgBgLIgCgMQAAgHAGgFQAFgFAHAAQANAAAEAOQACAHAAAQIAAAaIgBAZQAJgKALgEQAJgFAMAAQAWAAAKANQAHAJABASIACAfIACAZIAFAZIAAAEQAAAHgFAFQgGAFgHAAQgNAAgDgNg");
	this.shape_57.setTransform(133.9,42.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgLBcQgHgFAAgHIABgFIABgGIgBgSIgBgRQAAgRgCgdIgEguIgGAAQgdAAgQgEQgOgDgBgNQABgHAEgFQAFgGAJAAIAUADIAVABIAWAAIAXgBIAcACIAdABQAIAAAGAFQAEAFAAAHQAAAIgEAFQgGAFgIAAIgegCIgfgBIAEAzQACAgAAATIABANIAAANQAAAJgDAIQgGAKgJAAQgGAAgFgFg");
	this.shape_58.setTransform(117.3,42.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgRAiQAAgHAFgFQAGgEAGAAQAUAAAAAdQAAAIgGAEQgFAFgIAAQgSAAAAgegAgNgaQgFgEAAgIIAAgEIgBgFQAAgGAGgFQAFgFAHAAQASAAAAAZQAAAIgFAEQgFAFgHAAQgHAAgGgFg");
	this.shape_59.setTransform(91.4,44.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("Ag6BhQgOgMAAgpQAAgRACghQADgiAAgRIgCgNIgBgOQAAgTASAAQAFAAAFADIAcgFQANgCALAAQAgAAATAHQAMAFAAALQAAAHgFAFQgFAGgHAAIgGgBQgUgFgUAAIgTABIgXAFIgCAyIAxgFIAfgCQAHAAAGAFQAFAEAAAIQAAAOgQACIgfADIg1AFIgBAaQAAAZADADQACACAOAAIAXgBIAYAAIAHgBIAHAAQAIAAAFAEQAGAEAAAJQAAAOgPADQgNACgnAAQgpAAgMgLg");
	this.shape_60.setTransform(77.8,42.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AhDBMIADgnQADg3AAhDQAAgIAFgEQAFgGAIAAQAIAAAEAGQAFAEABAIQAABEgEA4IgCAeQAeAAAugOIAFgBQAIAAAGAFQAEAGAAAGQAAALgLAFQgPAHgfAFQgcAFgTAAQgfAAAAgcg");
	this.shape_61.setTransform(62.6,43.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgzBXQghgaAAg/IABgSIAAgSIABgOIAAgPQAAgKAEgJQAFgMAIAAQAHAAAGAEQAGAGAAAHIgBAVIAAAWIAAASIgBASQAAASAFAQQAFAVAKAHQAFAFAVAAQAgAAAMg5QAGgeAAg2QAAgGAEgHQAGgJAKAAQAJAAAEAGQAEAGAAAFQAAAygFAcQgHArgVAcQgKAMgNAJQgQAKgPAAQghAAgQgMg");
	this.shape_62.setTransform(45.3,43.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AhEBfQgGgFAAgIIABgcIAAgdIAAhlQAAgIAFgHQAHgJALABIAgADQARACAMAGQA2AbAAApQAAAQgLAMQgMANgWAJQAhATARATQAFAFAAAGQAAAHgGAGQgFAFgHAAQgHAAgGgGQgmgkgtgOIABApQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgnADIAGABQAfAAAOgHQAHgDAFgGQAFgFAAgDQAAgOgSgOQgQgMgTgCIgPgBg");
	this.shape_63.setTransform(27.8,42.9);

	this.instance_4 = new lib.static_rule3b_1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(190.6,80.1);
	this.instance_4._off = true;

	this.text_1 = new cjs.Text("RULE: The expression “the number” meaning a total requires a singular verb. ", "bold 16px 'Comic Sans MS'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 24;
	this.text_1.lineWidth = 368;
	this.text_1.parent = this;
	this.text_1.setTransform(184.2,-68.2);

	this.instance_5 = new lib.static_rule3b_2("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(182.6,-23.7,1,1,0,0,0,-1.6,24);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},160).to({state:[{t:this.instance_4}]},53).to({state:[{t:this.text_1,p:{x:184.2,y:-68.2}}]},8).to({state:[{t:this.instance_5}]},74).to({state:[{t:this.text_1,p:{x:184,y:93.9}}]},5).wait(124));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(213).to({_off:false},0).to({_off:true,x:184.2,y:-68.2,text:"RULE: The expression “the number” meaning a total requires a singular verb. ",font:"bold 16px 'Comic Sans MS'",color:"#000000",textAlign:NaN,lineHeight:24.3,lineWidth:368},8).wait(203));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(295).to({_off:false},0).to({_off:true,regX:0,regY:0,x:184,y:93.9,text:"RULE: The expression “the number” meaning a total requires a singular verb. ",font:"bold 16px 'Comic Sans MS'",color:"#000000",textAlign:NaN,lineHeight:24.3,lineWidth:368},5).wait(124));

	// whiteBlockB
	this.instance_6 = new lib.static_whitebox("single",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(188.9,-16.3,1,0.471,0,0,0,202.4,136.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(295).to({_off:false},0).to({regY:134.8,scaleY:0.44,y:146},5).wait(124));

	// rule3a
	this.instance_7 = new lib.static_rule3a_1("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(186.2,58.4);

	this.text_2 = new cjs.Text("RULE: The expression “a number” meaning many requires a plural verb. ", "bold 16px 'Comic Sans MS'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 24;
	this.text_2.lineWidth = 383;
	this.text_2.parent = this;
	this.text_2.setTransform(188.2,-71.5);

	this.instance_8 = new lib.static_rule3a_2("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(188.2,-48.2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[{t:this.instance_7}]},74).to({state:[{t:this.text_2}]},10).to({state:[{t:this.instance_8}]},71).to({state:[{t:this.instance_8}]},4).to({state:[]},1).to({state:[{t:this.instance_8}]},135).to({state:[{t:this.instance_8}]},5).wait(124));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(74).to({startPosition:0},0).to({_off:true,x:188.2,y:-71.5,text:"RULE: The expression “a number” meaning many requires a plural verb. ",font:"bold 16px 'Comic Sans MS'",color:"#000000",textAlign:NaN,lineHeight:24.3,lineWidth:383},10).wait(340));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(155).to({_off:false},0).to({alpha:0},4).to({_off:true},1).wait(135).to({_off:false},0).to({alpha:1},5).wait(124));

	// whiteBlockA
	this.instance_9 = new lib.static_whitebox("single",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-50,-4.3,1.2,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(74).to({startPosition:0},0).to({scaleX:1.01,scaleY:0.45,x:-16,y:-80.1},10).wait(71).to({startPosition:0},0).to({scaleX:1.2,scaleY:1,x:-50,y:13.9},4).wait(54).to({startPosition:0},0).to({scaleY:0.54,skewX:-0.5,y:-79.6},8).wait(74).to({startPosition:0},0).to({scaleX:1,scaleY:0.46,x:-13.5,y:-76.6},5).wait(124));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.9,-4.3,485.8,135.5);


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
		
		 window.open ("verbNum_Summary.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("verbNum_singularPlural.html","_self");
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


// stage content:
(lib.verbNum_plural = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{plural:0,scene4_restart:362});

	// timeline functions:
	this.frame_0 = function() {
		playSound("theexpressionanumber");
	}
	this.frame_74 = function() {
		playSound("departure");
	}
	this.frame_93 = function() {
		playSound("f_blip");
	}
	this.frame_167 = function() {
		playSound("theexpressionthenumber");
	}
	this.frame_214 = function() {
		playSound("departure");
	}
	this.frame_239 = function() {
		playSound("f_blip");
	}
	this.frame_295 = function() {
		playSound("departure");
	}
	this.frame_361 = function() {
		/* _root.gonow = true;*/
	}
	this.frame_370 = function() {
		/* gotoAndPlay("scene4_restart");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(74).call(this.frame_74).wait(19).call(this.frame_93).wait(74).call(this.frame_167).wait(47).call(this.frame_214).wait(25).call(this.frame_239).wait(56).call(this.frame_295).wait(66).call(this.frame_361).wait(9).call(this.frame_370).wait(1));

	// content
	this.instance = new lib.Content_scene4();
	this.instance.parent = this;
	this.instance.setTransform(268.2,181.8,1,1,0,0,0,186.2,58.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(371));

	// main
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,53.9,1,1,0,0,0,54,40.5);

	this.instance_1 = new lib.Bk();
	this.instance_1.parent = this;
	this.instance_1.setTransform(275,191);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.UI}]}).wait(371));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,200.6,534,398.7);
// library properties:
lib.properties = {
	id: 'EADBE943FDB1FD47B35CF2289801B7EA',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
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
		{src:"sounds/theexpressionanumber.mp3", id:"theexpressionanumber"},
		{src:"sounds/theexpressionthenumber.mp3", id:"theexpressionthenumber"},
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
an.compositions['EADBE943FDB1FD47B35CF2289801B7EA'] = {
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