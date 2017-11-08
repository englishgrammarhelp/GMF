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


(lib.Tween43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHAHQgEgDAAgEQAAgDAEgDQADgDAEAAQAGAAADADQADADAAADQAAAEgEADQgDADgFAAQgEAAgDgDg");
	this.shape.setTransform(182.5,27.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("AgnAwQgJgHAAgJQAAgFADgDQADgDAFAAQAGAAADAHQAFAJAOAAQAMAAAMgFQAMgHAAgGQAAgJgIgDQgFgDgPABQgNgBgKgEQgOgFABgMQAAgOAPgMQAPgMARAAQAHAAALAEQANAEAAAFQAAADgDADQgDAEgEAAIgLgBIgKgCQgKAAgHAFQgJAEAAAFQAAADADACIAIADIARABQARAAAJAJQALAIAAAPQAAATgWAKQgQAHgUAAQgTAAgLgIg");
	this.shape_1.setTransform(174.1,22.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009900").s().p("AgGA1QgDgDAAgEIAAgDIAAgDIAAgKIgBgLIgBgZIgCgbIgEAAQgQAAgKgCQgIgCAAgIQAAgDADgDQADgEAFAAIALACIAMAAIANAAIANAAIAQABIARABQAFAAADACQACADAAAEQAAAFgCADQgDACgFAAIgSAAIgRgBIACAeIABAdIABAHIAAAHQAAAGgCAEQgDAGgGAAQgDAAgDgDg");
	this.shape_2.setTransform(163.7,22.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009900").s().p("AgzA4QgDgDAAgEIABgJIAAgJIABgNIAAgNIAAgMIAAgOIgBgNIgBgOQAAgEAEgDQADgEAFAAQAGAAAGAKQAgAvAhAdIAAgLIgBgwIgBgIIAAgIQAAgKAKAAQAMAAAAAlIAAALIAAAuIgCALQgBAKgJAAQgGAAgGgGQgcgZgjgtIAAAWIAAARIAAASQAAAWgKAAQgFAAgEgEg");
	this.shape_3.setTransform(152.4,22.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009900").s().p("AghA4QgIgHAAgYIABgdIABgdIAAgHIgBgIQAAgLAKAAQAEAAACABIAQgCIAOgBQASAAALADQAHADAAAHQAAAEgDADQgCADgFAAIgDgBQgMgCgLAAIgLABIgNACIgBAdIAcgDIARgBQAFAAADACQADADAAAFQAAAHgJABIgSACIgeADIgBAPQAAAPACABQABABAIAAIANAAIANAAIAFgBIAEAAQAEAAADACQAEADAAAFQAAAIgJACQgHABgWAAQgYABgHgHg");
	this.shape_4.setTransform(141.8,22.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#009900").s().p("AAoAwIgFgSQgDgNgEgYIgLAeIgEAOQgDAIgDAFQgEAHgGAAQgGAAgEgJIgFgNIgKgnIgJAjIgCARQgDAKgJAAQgFAAgCgDQgDgDAAgEQAAgMAFgRIAIgcIAEgWQAEgQADgFQAFgFAFAAQAHAAADAHQADAGADAUQADATAHAVQAHgVAIgaIADgRQAFgKAIAAQAHAAAFAMIADASQAEAfAHAWIAGAYQAAAFgDADQgEACgEAAQgHAAgEgLg");
	this.shape_5.setTransform(130.4,22.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#009900").s().p("AghA4QgIgHAAgYIABgdIABgdIAAgHIgBgIQAAgLAKAAQAEAAACABIAQgCIAOgBQASAAALADQAHADAAAHQAAAEgDADQgCADgFAAIgDgBQgMgCgLAAIgLABIgNACIgBAdIAcgDIARgBQAFAAADACQADADAAAFQAAAHgJABIgSACIgeADIgBAPQAAAPACABQABABAIAAIANAAIANAAIAFgBIAEAAQAEAAADACQAEADAAAFQAAAIgJACQgHABgWAAQgYABgHgHg");
	this.shape_6.setTransform(119.2,22.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#009900").s().p("AgmAsIACgXQABgfAAgnQAAgEAEgDQACgDAEAAQAFAAADADQADADAAAEQAAAngCAgIgCASQASAAAagJIADAAQAFAAACAEQADADAAADQAAAGgGADQgJAEgSADQgPADgLAAQgSAAAAgQg");
	this.shape_7.setTransform(110.4,22.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#009900").s().p("AghA3QgCgCAAgEIAAgVIABggIACgiQAAgTAKABIAHgBIALgBQANABANAIQAOALAAAPQAAATgPAKQgNAKgRAAIgHgBIAAAiQAAAEgCACQgDADgFAAQgEAAgDgDgAgNgcIgBAZIAFABQAKAAAIgFQAIgHAAgJQAAgGgIgFQgHgFgIAAIgDAAIgEAAIAAALg");
	this.shape_8.setTransform(102.1,22.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#009900").s().p("AAnAwIgDgSQgEgNgEgYIgLAeIgFAOQgCAIgDAFQgEAHgGAAQgHAAgEgJIgDgNIgLgnIgJAjIgDARQgCAKgJAAQgFAAgDgDQgCgDAAgEQAAgMAFgRIAIgcIAFgWQACgQAFgFQAEgFAFAAQAHAAADAHQADAGADAUQAEATAGAVQAHgVAHgaIAFgRQADgKAJAAQAIAAADAMIAEASQAEAfAHAWIAGAYQAAAFgDADQgDACgFAAQgIAAgEgLg");
	this.shape_9.setTransform(91.6,22.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#009900").s().p("AgmAtQgQgNAAgVQAAgYAPgVQASgXAZAAQAaAAANAMQAMAMAAAXQAAAYgOAUQgRAYgZAAQgWAAgPgNgAgXgVQgLAPAAARQAAAMAKAIQAJAHAOAAQAPAAALgQQAKgOAAgSQAAgPgHgGQgHgGgRAAQgPAAgMAQg");
	this.shape_10.setTransform(78.8,22.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#009900").s().p("AggAsQgLgLAAgQQAAgXAWgaQASgWASAAIAGABIAFAAQADgDAEAAQAIAAACAJIABAOQAAAEgCADQgDAEgFAAQgHAAgDgHQgCgEgBAAIgGgBQgJAAgLAPQgRATAAARQAAAIAFAGQAGAGAHAAQAGAAAIgEIALgHQAGgEADAAQAEAAADADQADADAAAEQAAAEgEAEQgUARgUAAQgQAAgMgNg");
	this.shape_11.setTransform(68.2,22.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#009900").s().p("AghA4QgIgHAAgYIABgdIABgdIAAgHIgBgIQAAgLAKAAQAEAAACABIAQgCIAOgBQASAAALADQAHADAAAHQAAAEgDADQgCADgFAAIgDgBQgMgCgLAAIgLABIgNACIgBAdIAcgDIARgBQAFAAADACQADADAAAFQAAAHgJABIgSACIgeADIgBAPQAAAPACABQABABAIAAIANAAIANAAIAFgBIAEAAQAEAAADACQAEADAAAFQAAAIgJACQgHABgWAAQgYABgHgHg");
	this.shape_12.setTransform(52.6,22.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#009900").s().p("AgGA1QgDgDAAgEIAAgDIAAgDIAAgKIgBgLIgBgZIgCgbIgEAAQgQAAgKgCQgIgCAAgIQAAgDADgDQADgEAFAAIALACIAMAAIANAAIANAAIAQABIARABQAFAAADACQACADAAAEQAAAFgCADQgDACgFAAIgSAAIgRgBIACAeIABAdIABAHIAAAHQAAAGgCAEQgDAGgGAAQgDAAgDgDg");
	this.shape_13.setTransform(42.5,22.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#009900").s().p("AAlA3QgFAAgGgNQgEgJgDgLIgSACIgQABIgMAZQgDAFgGAAQgEAAgDgDQgEgDAAgEQAAgEALgVIgBgEQABgEAGgCIAXgkQASgcAEAAQAIAAADAKIAEAXIALAwIAEAJQADAGAAAEQAAAEgDADQgDACgEAAIgBAAgAgFAHIAJgBIALgBIgFgYIgPAag");
	this.shape_14.setTransform(31.7,22.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#009900").s().p("AggAsQgLgLAAgQQAAgXAWgaQASgWASAAIAGABIAFAAQADgDAEAAQAIAAACAJIABAOQAAAEgCADQgDAEgFAAQgHAAgDgHQgCgEgBAAIgGgBQgJAAgLAPQgRATAAARQAAAIAFAGQAGAGAHAAQAGAAAIgEIALgHQAGgEADAAQAEAAADADQADADAAAEQAAAEgEAEQgUARgUAAQgQAAgMgNg");
	this.shape_15.setTransform(21.7,22.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#009900").s().p("AgiA1QgDgDAAgEQAAgEADgDQADgCAFgBIAOgBIAAghQAAgTACgSIgQAAQgFAAgDgCQgDgDAAgFQAAgEADgDQADgCAEAAIAVgBQANAAAWADQAJACAAAIQAAAFgDACQgDADgEAAIgTgCIgBAiIAAAiIAUAAQAEAAADACQADADAAAFQAAAEgDADQgDACgFAAIgMAAIgNAAIgNACIgPABQgFAAgDgDg");
	this.shape_16.setTransform(12.8,22.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#009900").s().p("AgWA7QgIgCgGgDQgEAAgCgDQgEgDAAgEIABgWIABgWIgBgXIAAgZQAAgEAEgEQAEgEAFAAQACAAAJAFIAOAGQAVAHAPAOQASASAAAUQgBAMgFAMQgGAMgMAHQgMAIgVAAQgFAAgHgCgAgYAlIAGADIAIABQAPAAAHgFQAHgEADgHQAEgHAAgIQAAgRgVgNQgHgFgWgJg");
	this.shape_17.setTransform(3.6,22.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#009900").s().p("AghA4QgIgHAAgYIABgdIABgdIAAgHIgBgIQAAgLAKAAQAEAAACABIAQgCIAOgBQASAAALADQAHADAAAHQAAAEgDADQgCADgFAAIgDgBQgMgCgLAAIgLABIgNACIgBAdIAcgDIARgBQAFAAADACQADADAAAFQAAAHgJABIgSACIgeADIgBAPQAAAPACABQABABAIAAIANAAIANAAIAFgBIAEAAQAEAAADACQAEADAAAFQAAAIgJACQgHABgWAAQgYABgHgHg");
	this.shape_18.setTransform(-6.5,22.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#009900").s().p("AgnA3QgDgDAAgEIAAgRIAAgQIAAg6QAAgFADgEQAEgFAHABIASABQAKABAGAEQAgAQAAAXQAAAKgHAGQgHAHgNAFQAUALAKAMQACADAAADQAAAEgDADQgDADgEAAQgEAAgEgDQgWgVgZgIIAAAYQAAAEgCADQgDADgFAAQgEAAgDgDgAgWACIADAAQASAAAIgDIAHgFQADgDAAgCQAAgIgKgIQgJgHgLgBIgJgBg");
	this.shape_19.setTransform(-16.1,22.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#009900").s().p("AghA3QgCgCAAgEIAAgVIACggIABgiQAAgTAKABIAHgBIALgBQAOABAMAIQAOALAAAPQAAATgPAKQgNAKgRAAIgGgBIgBAiQAAAEgCACQgEADgDAAQgFAAgDgDgAgNgcIgBAZIAFABQAKAAAIgFQAIgHAAgJQAAgGgIgFQgHgFgIAAIgDAAIgEAAIAAALg");
	this.shape_20.setTransform(-25,22.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgXAfQgLgKAAgRQgBgQAKgMQALgPATAAQAOAAAJAMQAIAKAAAQQAAAQgJAMQgKANgRAAQgNAAgKgJgAgJgMQgFAHAAAJQAAAIAFAFQAEAEAFAAQAGAAAEgFQAGgFAAgIQABgXgNAAQgIAAgFAIg");
	this.shape_21.setTransform(-39.6,24.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AADAXQgCgHgCgRIgCAEIgLAbQgBAEgCACQgEAEgFAAQgEAAgEgFQgEgHgDgKIgHgnIgBgKQAAgEADgDQADgCAFAAQAIAAABAHIADAKIABALIACARIANgkQADgJAHAAQAIAAADAKIADAUIAFAUIALgsQACgGAHAAQAEAAAEACQACAEAAADIAAACQgHAdgJAWQgCAHgEAHQgEAFgGAAQgJAAgFgSg");
	this.shape_22.setTransform(-48.5,24.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgGAzQgDgDAAgEIAAgIIAAgHIgBglIgOgCQgJAAAAgJQAAgEADgDQADgDAEABIAMAAIAAgIIAAgHQAAgEADgCQADgEAEAAQAKAAAAATIAAAGIAHAAIAMAAQAGACAAAHQAAAFgDADQgDACgFAAIgDAAIgEAAIgHAAIACAmIAAAEIAAAEQAAAQgLAAQgDABgDgDg");
	this.shape_23.setTransform(-57.2,23.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgNA+QgDgDAAgEIAAgCQACgKAAgJIAAgkIgFABIgEAAQgFAAgDgDQgDgCAAgFQAAgGAHgDIANgBIABgIQACgQAHgIQAIgKARAAQAOAAAAAJQAAAKgNAAQgJAAgEAGQgDAFgBAJIAAADIAOgBQAOAAAAAJQAAAKgPgBIgOABIAAATIAAATQAAAOgBAIQgCAHgHAAQgEAAgDgCg");
	this.shape_24.setTransform(-71.1,22.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgXAfQgLgKAAgRQgBgQAKgMQALgPATAAQAOAAAJAMQAIAKAAAQQAAAQgJAMQgKANgRAAQgNAAgKgJgAgJgMQgFAHAAAJQAAAIAFAFQAEAEAFAAQAGAAAEgFQAGgFAAgIQABgXgNAAQgIAAgFAIg");
	this.shape_25.setTransform(-78.9,24.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAUA3QgEADgGABIgKABQgRAAgKgLQgMgKAAgRQAAgUAMgKQALgNARAAQAGAAADACQAFABADACQABgZABgKQABgIAJAAQAEAAADACQADAEgBADIgBAhIgCAeQAAAbACAIIAAACQAAAEgDADQgDADgEAAQgFAAgDgFgAgOADQgGAGABANQAAAIAFAGQAGAFAIAAQAEAAAEgCIAGgEIADgCIAAgbQgDgFgEgBQgDgCgGAAQgJAAgGAFg");
	this.shape_26.setTransform(-93.7,22.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAPAiIgCgPIgBgQIAAgFIAAgGIAAgDIABgEQAAgFgDAAQgHAAgFAHQgGAIgDAMIgBAGIAAAHIgBAHIAAAGQAAAEgDADQgDADgEAAQgFAAgDgDQgCgDAAgEIgBgGIAAgHIABgUIABgSIAAgHIgBgHQAAgEADgDQADgCAFgBQAJAAABAMIAAABQALgLAKAAQAOAAAGAMQADAHAAAQIAAAFIAAAEQAAAFACAKIABAOQAAAEgDADQgDADgEAAQgJAAgBgJg");
	this.shape_27.setTransform(-101.9,24.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgXAfQgLgKAAgRQgBgQAKgMQALgPATAAQAOAAAJAMQAIAKAAAQQAAAQgJAMQgKANgRAAQgNAAgKgJgAgJgMQgFAHAAAJQAAAIAFAFQAEAEAFAAQAGAAAEgFQAGgFAAgIQABgXgNAAQgIAAgFAIg");
	this.shape_28.setTransform(-110,24.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgWAgQgMgJAAgQQAAgOALgPQALgSAPAAQAIAAAKAEQAMAFAAAHQAAADgCADQgDADgEAAQgDAAgFgDQgEgEgJAAQgFAAgGALQgHALAAAHQAAAHAGAFQAFAEAIAAQAFAAAHgEIAJgDQAEAAADACQADADAAAEQAAAGgNAFQgLAFgHAAQgPAAgLgJg");
	this.shape_29.setTransform(-117.8,24.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgYAgQgMgKAAgQQgBgSAKgNQALgOASAAQAMAAAIAEQALAGAAALQAAAIgJAGQgEADgMAEIgXAMQADAEAFABQAFACAFAAQAKAAAHgEQAGgEAEABQAHgBABAIQAAAIgNAFQgKAFgMAAQgQAAgLgIgAgJgRQgFAFgDAJIARgHQAIgFAGgDQgFgDgHAAQgHgBgEAFg");
	this.shape_30.setTransform(-125.8,24.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgUAmQgLgEAAgIQAAgHAJAAIAKACIAJACQAOAAAAgGQAAgEgKgEQgOgHgEgCQgLgHAAgLQAAgOAQgFQAJgDASAAQAHAAAEACQAEACAAAHQAAANgHAAQgHAAgBgGIgGAAQgRAAAAAEQAAADAKAFQAOAHAFADQALAHAAAKQAAAMgMAHQgJAFgNAAQgKAAgIgDg");
	this.shape_31.setTransform(-133.6,24.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgZAgQgMgKABgQQAAgSAJgNQALgOARAAQANAAAJAEQAKAGABALQgBAIgIAGQgFADgMAEIgYAMQAEAEAFABQAFACAFAAQAKAAAHgEQAGgEAEABQAHgBAAAIQAAAIgMAFQgKAFgMAAQgQAAgMgIgAgJgRQgFAFgDAJIARgHQAJgFAFgDQgEgDgJAAQgFgBgFAFg");
	this.shape_32.setTransform(-148,24.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AARA2QgCgGgBgLIgBgRIAAgGIAAgFIAAgHQgBgCgDAAQgIgBgGAHQgDAEgGAKQAAAbgDAGQgCAFgHAAQgEAAgDgDQgDgCAAgFIABgDIABgUIAAgwIAAgCIAAgMIAAgGIgBgIQAAgDADgDQADgDAEAAQAHAAADAIQABAFAAAIIAAAPIgBAPQAGgGAGgCQAFgDAHAAQANAAAFAHQAEAFABAKIABASIABAPIADAOIAAADQAAADgDADQgDADgEAAQgIAAgCgHg");
	this.shape_33.setTransform(-156.3,22.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgGAzQgDgDAAgEIAAgIIAAgHIgBglIgOgCQgJAAAAgJQAAgEADgDQADgDAEABIAMAAIAAgIIAAgHQAAgEADgCQADgEAEAAQAKAAAAATIAAAGIAHAAIAMAAQAGACAAAHQAAAFgDADQgDACgFAAIgDAAIgEAAIgHAAIACAmIAAAEIAAAEQAAAQgLAAQgDABgDgDg");
	this.shape_34.setTransform(-164.2,23.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgUAmQgLgEAAgIQAAgHAJAAIAKACIAJACQAOAAAAgGQAAgEgKgEQgOgHgEgCQgLgHAAgLQAAgOAQgFQAJgDASAAQAHAAAEACQAEACAAAHQAAANgHAAQgHAAgBgGIgGAAQgRAAAAAEQAAADAKAFQAOAHAFADQALAHAAAKQAAAMgMAHQgJAFgNAAQgKAAgIgDg");
	this.shape_35.setTransform(-178,24.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgIA1QgDgDAAgEIAAgNIgBgOIABgQIABgPQAAgFADgCQADgDAEAAQADAAADADQADACAAAFIgBAPIAAAQIAAAOIAAANQAAAEgDADQgDADgDAAQgEAAgDgDgAgGgkQgDgEAAgEQAAgFADgDQAEgDADAAQAFAAAEADQADADAAAFQAAAEgDAEQgEADgFAAQgDAAgEgDg");
	this.shape_36.setTransform(-183.5,22.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#00E600").s().p("AgOBrQgGgGAAgJIABgGIABgGIgBgVIgBgUQAAgUgEggIgEg1IgHAAQghAAgUgFQgQgEAAgPQABgIAEgGQAHgHAKABIAXACIAYACIAaAAIAagBIAiACIAhABQAJAAAGAGQAFAGABAIQgBAJgFAFQgGAGgJAAIgkgBQgXgCgNAAIAFA8QACAkAAAWIABAPIABAPQABALgFAJQgGALgLAAQgHAAgHgFg");
	this.shape_37.setTransform(215.2,-10.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#00E600").s().p("AhmBxQgGgGAAgIIABgSIABgSIAAgaIABgaIgBgbIAAgbIgCgbIgCgaQAAgJAJgHQAGgGALAAQAKAAANASQBCBfBAA7IABgWQAAhHgBgaIgCgPIgCgQQAAgVAWAAQAYAAAABKIgBAXIgBBcQAAAHgDAQQgCATgTAAQgKAAgNgMQg5gzhFhaIgBAtIAAAjIABAjQAAArgVAAQgLAAgGgGg");
	this.shape_38.setTransform(192.4,-10.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#00E600").s().p("AhEBwQgPgOAAgwQAAgTACgnQADgnAAgTIgBgQIgCgPQAAgWAVAAQAGAAAGAEQARgFAPgCQAPgCANAAQAlAAAWAJQANAFAAANQAAAIgFAGQgGAGgJAAIgGAAQgYgHgWAAIgXACIgaAFIgCA6IA4gFIAkgDQAJAAAGAFQAGAGAAAJQAAAQgTADIgjADIg9AFIgBAeQAAAdADAEQACACAQAAIAbgBIAbAAIAJgBIAIgBQAJAAAGAFQAHAGAAAJQAAARgRADQgPADgtAAQgwAAgPgNg");
	this.shape_39.setTransform(171.2,-10.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#00E600").s().p("ABPBgIgIgkQgHgagIgxIgWA9IgJAbQgFAQgGAKQgIAOgMAAQgOAAgIgQIgIgcQgLglgKgoIgSBGIgGAhQgFAVgQAAQgKAAgHgHQgEgGAAgIQAAgYAKgiIAQg3IAIguQAHgfAIgKQAHgKAMAAQANAAAHANQAFANAIAnQAGAnANArQAPgrAOg0IAJgiQAIgUAQAAQARAAAHAYQADAKAEAaQAJA+ANAsQANAugBAEQABAIgIAGQgGAFgIAAQgQAAgIgWg");
	this.shape_40.setTransform(148.4,-9.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#00E600").s().p("AhEBwQgPgOAAgwQAAgTACgnQADgnAAgTIgBgQIgCgPQAAgWAVAAQAGAAAGAEQARgFAPgCQAPgCANAAQAlAAAWAJQANAFAAANQAAAIgFAGQgGAGgJAAIgGAAQgYgHgWAAIgXACIgaAFIgCA6IA4gFIAkgDQAJAAAGAFQAGAGAAAJQAAAQgTADIgjADIg9AFIgBAeQAAAdADAEQACACAQAAIAbgBIAbAAIAJgBIAIgBQAJAAAGAFQAHAGAAAJQAAARgRADQgPADgtAAQgwAAgPgNg");
	this.shape_41.setTransform(126,-10.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#00E600").s().p("AhNBYIADguQADg/AAhOQAAgIAGgGQAGgGAJAAQAJAAAFAGQAGAGAAAIQAABPgEBAIgCAkQAiAAA2gRIAGgBQAJAAAGAHQAFAGAAAHQAAANgNAGQgRAHgkAGQggAGgVAAQgkAAAAggg");
	this.shape_42.setTransform(108.4,-9.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#00E600").s().p("AhBBvQgGgFAAgIIAAgpQAAgXACgrQADgtABgXQAAgmAVACQAFgCAJAAIAVgBQAcAAAZATQAcAVAAAdQAAAmgdAVQgbAUgjAAIgNgCIgBBEQABAIgGAFQgGAGgIAAQgIAAgFgGgAgag5IgDAzIAKABQAVAAAQgLQAQgMAAgTQAAgMgQgKQgOgJgQAAIgIAAIgGAAIAAAVg");
	this.shape_43.setTransform(91.8,-10.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#00E600").s().p("ABPBgIgIgkQgHgagIgxIgWA9IgJAbQgFAQgGAKQgIAOgMAAQgPAAgHgQIgIgcQgLglgKgoIgSBGIgGAhQgGAVgQAAQgJAAgHgHQgEgGAAgIQAAgYAKgiIAQg3IAJguQAGgfAIgKQAHgKAMAAQAOAAAGANQAFANAIAnQAGAnAMArQAQgrAOg0IAJgiQAIgUAQAAQARAAAHAYQADAKAEAaQAJA+ANAsQAMAuAAAEQAAAIgGAGQgHAFgIAAQgQAAgIgWg");
	this.shape_44.setTransform(70.7,-9.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#00E600").s().p("AhNBaQghgaAAgrQAAgwAfgqQAjgtA0gBQA0AAAZAYQAaAXAAAwQAAAwgdApQghAug1ABQgrAAgegagAgvgrQgVAeAAAiQAAAZATAPQASAOAbAAQAgABAVggQAUgdAAgjQAAgggOgLQgNgLgiAAQgfgBgYAgg");
	this.shape_45.setTransform(45.2,-9.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#00E600").s().p("AhBBZQgVgXAAgfQAAgwAqgzQAlgsAlAAIAMABIAJABQAGgGAJAAQAPAAAEARQACAMAAARQAAAHgEAGQgFAIgLAAQgNAAgHgOQgCgHgDgBQgDgBgJAAQgSAAgYAdQghAnAAAjQAAAQAKALQALAMAPAAQANAAAPgIQAGgDARgLQALgIAGAAQAJAAAGAGQAGAGAAAIQAAAJgIAGQgoAigpAAQghAAgXgYg");
	this.shape_46.setTransform(24.1,-10.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#00E600").s().p("AhEBwQgPgOAAgwQAAgTACgnQADgnAAgTIgBgQIgCgPQAAgWAVAAQAGAAAGAEQARgFAPgCQAPgCANAAQAlAAAWAJQANAFAAANQAAAIgFAGQgGAGgJAAIgGAAQgYgHgWAAIgXACIgaAFIgCA6IA4gFIAkgDQAJAAAGAFQAGAGAAAJQAAAQgTADIgjADIg9AFIgBAeQAAAdADAEQACACAQAAIAbgBIAbAAIAJgBIAIgBQAJAAAGAFQAHAGAAAJQAAARgRADQgPADgtAAQgwAAgPgNg");
	this.shape_47.setTransform(-7.3,-10.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#00E600").s().p("AggBoQgRgrgWhPIgMgoQgJgbABgLQgBgIAHgGQAGgFAIgBQAOAAAGAPIAGAZIAOAwQALApALAgIAhhYIANgjQAIgVAKgKQAHgIAKAAQAHAAAHAFQAGAGAAAIQAAAGgDAGQgJAMgGAQIgLAdIgnBlQgHARgKASQgGALgLAAQgPAAgHgOg");
	this.shape_48.setTransform(-27,-9.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#00E600").s().p("AhFBqQgGgGAAgIQAAgIAHgGQAGgGAJAAIAcgCIAAhCQAAgnADgkIggABQgJAAgGgGQgGgGAAgIQAAgJAGgFQAFgFAIgBQAMgBAfAAQAbAAAsAGQASADAAARQAAAKgHAFQgGAFgHAAIgmgEQgCAaAAAsIgBBCIAogBQAJAAAGAGQAGAGAAAIQAAAJgGAFQgGAGgJAAIgZABIgZAAQgJAAgUADQgUACgKAAQgJAAgGgGg");
	this.shape_49.setTransform(-45.7,-10);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#00E600").s().p("AgNBrQgHgGAAgJIAAgGIABgGIgBgVIgBgUQAAgUgCggIgFg1IgIAAQggAAgTgFQgRgEABgPQAAgIAEgGQAHgHAKABIAXACIAXACIAbAAIAagBIAhACIAiABQAJAAAFAGQAHAGgBAIQABAJgHAFQgFAGgJAAIgkgBQgXgCgMAAIADA8QADAkABAWIABAPIABAPQgBALgEAJQgGALgLAAQgHAAgGgFg");
	this.shape_50.setTransform(-64,-10.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#00E600").s().p("AhBBZQgVgXAAgfQAAgwAqgzQAlgsAlAAIAMABIAJABQAGgGAJAAQAPAAAEARQACAMAAARQAAAHgEAGQgFAIgLAAQgNAAgHgOQgCgHgDgBQgDgBgJAAQgSAAgYAdQghAnAAAjQAAAQAKALQALAMAPAAQANAAAPgIQAGgDARgLQALgIAGAAQAJAAAGAGQAGAGAAAIQAAAJgIAGQgoAigpAAQghAAgXgYg");
	this.shape_51.setTransform(-83.7,-10.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#00E600").s().p("AhEBwQgPgOAAgwQAAgTACgnQADgnAAgTIgBgQIgCgPQAAgWAVAAQAGAAAGAEQARgFAPgCQAPgCANAAQAlAAAWAJQANAFAAANQAAAIgFAGQgGAGgJAAIgGAAQgYgHgWAAIgXACIgaAFIgCA6IA4gFIAkgDQAJAAAGAFQAGAGAAAJQAAAQgTADIgjADIg9AFIgBAeQAAAdADAEQACACAQAAIAbgBIAbAAIAJgBIAIgBQAJAAAGAFQAHAGAAAJQAAARgRADQgPADgtAAQgwAAgPgNg");
	this.shape_52.setTransform(-102.1,-10.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#00E600").s().p("Ag/BlQgegVAAgcQAAgXAVAAQAUAAAAAXQAAAIAPAKQAPAKANAAQAGAAACgTIACguQACggAAgyIAAgKIgDAAIgRAAIgRAAQgJAAgGgGQgGgFAAgJQAAgUAaAAIAPAAIAOAAIAbgBIAcgBQAnAAAAAWQAAAIgFAGQgGAGgJAAIgJAAIgJgBIgLAAIgBALQAABogOAwQgLAjgcAAQgbAAgbgTg");
	this.shape_53.setTransform(-121.7,-9.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#00E600").s().p("AhIBvQgHgHAAgJIAAiZIAAgUQgBgMABgIQACgOAYgCQALgEAaAAQAaAAAaASQAeAVAAAfQAAARgHALQgEAKgMAKQAOAHALAOQAMAPAAAPQAAAUgVARQgOAMgQAGQghANg0AAQgJAAgHgIgAgnBOQAZgBAdgJQAagHgBgIQAAgMgQgIQgNgHgLgCIgngBgAgnhNIAAAeIAAAfQANACAHgBQAsgDAAgeQAAgKgNgKQgNgKgPAAIgXABg");
	this.shape_54.setTransform(-140.7,-10.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#00E600").s().p("AhNBaQghgaAAgrQAAgwAfgqQAjgtA0gBQA0AAAZAYQAaAXAAAwQAAAwgdApQghAug1ABQgrAAgegagAgvgrQgVAeAAAiQAAAZATAPQASAOAbAAQAgABAVggQAUgdAAgjQAAgggOgLQgNgLgiAAQgfgBgYAgg");
	this.shape_55.setTransform(-162.7,-9.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAeBDIgEgeQgCgQAAgOIAAgMIABgNIAAgFIAAgHQAAgMgFAAQgNAAgLAQQgMAQgHAYIgBANIgBANIgBANIgBAMQAAAJgGAGQgGAFgIAAQgJAAgGgFQgGgGAAgIIAAgNIgBgNIACgoIACgmIgBgOIAAgNQAAgIAGgGQAGgFAIAAQATAAACAXIAAABQAVgVAXAAQAcAAAKAXQAHAQAAAeIAAALIAAAIQAAAMADASQADASAAALQAAAIgFAGQgGAFgJAAQgSAAgCgSg");
	this.shape_56.setTransform(-195.4,-6.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAzBTQgIgRgFgXIgkAEQgWABgMACQgHARgRAgQgGALgLAAQgJAAgGgGQgGgFAAgJQAAgHAVgsQgCgFAAgDQABgIANgDQAVgjAagnQAjg3AJgBQAQAAAFAUIAKAvIAVBfIAIAUQAFANAAAGQAAAIgGAGQgHAFgIABQgLgBgMgbgAgLANIAUgCIAUgBIgJgxIgfA0g");
	this.shape_57.setTransform(-214.5,-9.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-264.8,-34.3,529.7,68.7);


(lib.Symbol94 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* a = new Sound(_root);
		_parent.volu = "volume";
		stop();
		*/
	}
	this.frame_1 = function() {
		/* my_vol = (50 + getProperty(_parent.vol.slidin, _x)) * 2;
		_parent.volu = my_vol;
		a.setVolume(my_vol);
		*/
	}
	this.frame_2 = function() {
		/* gotoAndStop(2);
		play();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol88 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("Ag1ADIA3hUIA1BSIg0BRQgcgtgcgig");
	this.shape.setTransform(0.3,4.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.1,-4,10.9,16.4);


(lib.Symbol87 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AEJAFIAAgJIAKAAIAAAJgAD1AFIAAgJIAKAAIAAAJgADhAFIAAgJIAKAAIAAAJgADNAFIAAgJIAKAAIAAAJgAC5AFIAAgJIAKAAIAAAJgAClAFIAAgJIAKAAIAAAJgACRAFIAAgJIAKAAIAAAJgAB9AFIAAgJIAKAAIAAAJgABpAFIAAgJIAKAAIAAAJgABVAFIAAgJIAKAAIAAAJgABBAFIAAgJIAKAAIAAAJgAAtAFIAAgJIAKAAIAAAJgAAZAFIAAgJIAKAAIAAAJgAAFAFIAAgJIAKAAIAAAJgAgOAFIAAgJIAKAAIAAAJgAgiAFIAAgJIAKAAIAAAJgAg2AFIAAgJIAKAAIAAAJgAhKAFIAAgJIAKAAIAAAJgAheAFIAAgJIAKAAIAAAJgAhyAFIAAgJIAKAAIAAAJgAiGAFIAAgJIAKAAIAAAJgAiaAFIAAgJIAKAAIAAAJgAiuAFIAAgJIAKAAIAAAJgAjCAFIAAgJIAKAAIAAAJgAjWAFIAAgJIAKAAIAAAJgAjqAFIAAgJIAKAAIAAAJgAj+AFIAAgJIAKAAIAAAJgAkSAFIAAgJIAKAAIAAAJg");
	this.shape.setTransform(509.5,543.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(482,543,55,1);


(lib.skiptomenu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AAUAqQgLAGgNAAQgMAAgHgFQgJgGgBgLQgEgXAAgRQAAgMADgQQABgHAHAAQAEAAACACQADACAAAEIgCANIgBAOIABAYQACAKACAHIAFACIAGABQALAAANgEIAAgSIgBgQQAAgTACgOQABgIAIAAQADAAACADQADACAAAEIgBAhIAAASIAAATIAAAGIAAAGQAAADgDADQgCACgDAAQgIAAgBgIg");
	this.shape.setTransform(16.7,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AAVArIgCgTIgBgUIAAgHIAAgIQAAgTgHAAQgKAAgIAMQgIAKgEAQIgBAIIgBAJIABAIIABAHQAAAEgDADQgCACgEAAQgEAAgCgCQgDgDAAgEIAAgHIgBgIIABgZIACgZIgBgIIAAgJQAAgDADgCQACgDAEAAQAIAAABAMIAAAKQAPgUAOAAQAOAAAGANQAEAHAAARIAAAJIAAAHIACATQACALAAAIQAAAEgDACQgCACgEAAQgIAAgBgIg");
	this.shape_1.setTransform(7.5,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgdAmQgOgLAAgTQAAgXALgPQANgRATAAQAOAAAJAFQAMAGAAAMQAAAKgKAGQgFAEgOAFIggARQAFAHAHADQAHAEAJAAQAGAAAIgCQALgDADgEQADgGADABQADAAADACQACACAAAEQAAAJgQAHQgNAGgNAAQgTAAgMgKgAgRgXQgHAJgEAPIAbgLQAPgJAHgFQgIgHgNAAQgKAAgHAIg");
	this.shape_2.setTransform(-2.2,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgEA0QgDgDAAgEIgCgfIgCgfQAAgJgDgFQgGADgGAGIgKAMIgFAFIgBAPIgBAPIABAHIABAHQAAAEgDACQgDADgDAAQgKAAAAgXIABgQIABgOIgBgOIgBgOQAAgUAJAAQAEAAACADQADADAAADIAAAFIgBAGIABAJQAEgJAJgIQAJgIAGAAQAOAAAEAOQAFgGAHgEQAGgDAJAAQAPAAAFAQQABADADAWIAGAxQAAAEgCACQgDADgEAAQgHAAgBgIIgEgbIgDgbQAAgGgCgFQgDgIgEAAQgDAAgJAFQgJAFgCADIAAARIADAWQACAOAAAJQAAAEgDADQgCACgEAAQgDAAgCgCg");
	this.shape_3.setTransform(-14.1,0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("Akah8II1AAIAAD5Io1AAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AkaB9IAAj5II1AAIAAD5g");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAWAuQgMAHgPAAQgNAAgIgGQgJgGgCgMQgEgaAAgTQAAgNADgRQACgIAHAAQAFAAACACQADADAAAEIgBAOIgCAPIABAbQABALADAHIAGADIAGABQAMAAAOgEIAAgUIAAgSQAAgUACgQQABgJAIAAQAEAAADADQADADAAAEIgCAkIAAAUIAAAVIABAHIAAAGQAAAEgDADQgDACgEAAQgHAAgCgJg");
	this.shape_6.setTransform(18.3,0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAXAvIgCgVIgCgVIABgIIAAgKQAAgVgIAAQgKAAgJANQgJAMgFARIgBAJIgBAKIABAIIAAAJQAAAEgCADQgDADgEAAQgEAAgDgDQgDgDAAgEIAAgJIgBgIIACgbIABgbIAAgKIgBgJQAAgEADgDQADgCAEAAQAJAAABAMIAAAMQAQgWAQAAQAQAAAGAOQAEAJAAARIAAAKIAAAIQAAAIACANQADANAAAIQAAAEgDADQgDACgEAAQgIAAgCgJg");
	this.shape_7.setTransform(8.2,0.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AghAqQgOgMAAgWQAAgYAMgRQANgTAWAAQAPAAALAGQAMAGAAAOQAAAKgLAIQgEADgQAHIgkARQAFAIAIAEQAJAEAJAAQAHAAAJgCQALgEADgFQAEgFADAAQAEAAADADQACACAAAEQAAAKgRAIQgPAHgOAAQgVAAgOgLgAgTgZQgIAJgEARIAegNQAQgIAIgHQgJgHgOAAQgLAAgIAJg");
	this.shape_8.setTransform(-2.4,0.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgFA5QgCgDAAgEQAAgMgDgXQgCgVAAgMQAAgKgDgGQgHADgHAHIgLANIgFAGIgBAQIgBARIABAIIABAHQAAAEgDADQgDADgEAAQgLAAAAgZIABgRIABgRIgBgPIgBgQQAAgWAKAAQAEAAADAEQADADAAAEIAAAGIgBAFIAAALQAFgLAKgIQAKgIAHAAQAPAAAFAPQAFgHAHgEQAIgDAJAAQAQAAAGARIAEAbIAHA2QAAAEgCADQgDADgFAAQgHAAgCgJQgCgKgBgUIgEgdIgDgNQgDgIgEAAQgEAAgJAGQgKAFgDAEIABASIADAZQACAPAAAKQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_9.setTransform(-15.6,0.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(2,1,1).p("AE3CJIptAAIAAkRIJtAAg");
	this.shape_10.setTransform(0,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00FFFF").s().p("Ak2CJIAAkRIJtAAIAAERg");
	this.shape_11.setTransform(0,0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAUAqQgLAGgNAAQgMAAgHgFQgJgGgBgLQgEgXAAgRQAAgMADgQQABgHAHAAQAEAAACACQADACAAAEIgCANIgBAOIABAYQACAKACAHIAFACIAGABQALAAANgEIAAgSIgBgQQAAgTACgOQABgIAIAAQADAAACADQADACAAAEIgBAhIAAASIAAATIAAAGIAAAGQAAADgDADQgCACgDAAQgIAAgBgIg");
	this.shape_12.setTransform(16.7,1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAVArIgCgUIgBgSIAAgIIAAgIQAAgTgHAAQgKAAgIALQgIALgEAPIgBAJIgBAIIABAIIABAJQAAADgDADQgCACgEAAQgEAAgCgCQgDgDAAgDIAAgJIgBgIIABgYIACgYIgBgJIAAgIQAAgEADgDQACgCAEAAQAIAAABALIAAAKQAPgTAOAAQAOAAAGAMQAEAIAAARIAAAIIAAAIIACATQACALAAAHQAAAEgDADQgCACgEAAQgIAAgBgIg");
	this.shape_13.setTransform(7.5,0.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgdAmQgOgLAAgUQAAgVALgQQANgRATAAQAOAAAJAFQAMAGAAANQAAAIgKAIQgFADgOAGIggAPQAFAIAHAEQAHADAJAAQAGAAAIgCQALgDADgFQADgEADgBQADAAADADQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEARIAbgNQAPgHAHgGQgIgHgNAAQgKAAgHAJg");
	this.shape_14.setTransform(-2.2,0.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgEA0QgDgDAAgEIgCgfIgCgfQAAgJgDgFQgGADgGAGIgKAMIgFAFIgBAPIgBAPIABAHIABAHQAAAEgDACQgDADgDAAQgKAAAAgXIABgQIABgOIgBgOIgBgOQAAgUAJAAQAEAAACADQADADAAADIAAAFIgBAGIABAJQAEgJAJgIQAJgIAGAAQAOAAAEAOQAFgGAHgEQAGgDAJAAQAPAAAFAQQABADADAWIAGAxQAAAEgCACQgDADgEAAQgHAAgBgIIgEgbIgDgbQAAgGgCgFQgDgIgEAAQgDAAgJAFQgJAFgCADIAAARIADAWQACAOAAAJQAAAEgDADQgCACgEAAQgDAAgCgCg");
	this.shape_15.setTransform(-14.1,1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(2,1,1).p("AEbh8IAAD5Io1AAIAAj5g");

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0066CC").s().p("AkaB9IAAj5II1AAIAAD5g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.2,-16.9,58.6,30.5);


(lib.Painting = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0033FF").s().p("AABGAIABgPQABgIACgGQADgIAEgGIAJgNQgPAFgLgFQhOgeBjgeQA4gQAGg2QAjkvj6i9QhAAWhBgQQhBgRgog1IAIgJQAXAEAWAHQAhAMAggGQATgEAPANIAHAIQAfADAggJQAfgHAfgKIAxAaQALgVAYgCQAGAAAHACQAEABADADIAGAGQAkgLAlgIQA2gPA2gMIBVAvIACAEIgDAFQATAOAFAWQACAKAAALQAAAFgCAFIgEAMQAkgDAWAaQAKALgJAQQgPAZgcgGQgJgBgIgDIgCgGQg6g+g9CPQg9COCoFCQgVAGgTgOIgNgLIgGgGIgGgHQgNATgVAIIgUAHIgLAAIgMgBIgPgaIgIgBIgWAaQgdAegpAGIgjgEgAAfjrQAWgegGgmIgKAEQgVAIgQgPQgeAWgkgJgAD7jwIAEADQATgQgDgZIgBgKIgPgBgABclDIAKA2QAhgIAZgXQARgPAQgSIgGgIg");
	this.shape.setTransform(31.2,-18.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0033FF").s().p("AAMDOQAAgRAIgYQAIgZAAgMQAAgFgFgIQgEAKgCAYIgEACQgLgXgCgJIgGAaIgHABQgCgCAAgHQAAgGAKgsIAAgCQgMAjgLATIgFAAQgCgEAAgFQAAgUAfg6IAAgDQgLANgHASIgEACQgGgGACgOIgBgBQgLADgMAMQgJgCAAgHQAAgGA/hRIAAgCIgdgDQgCgDAAgEQAAgLASgSIgIgIQgLAKgHATQgKAcgDADIgFAAQgCgDAAgIQAAgUA0hGIACgEQgrATgEAWQgLgCAAgWQAAgQAcgvQAjg5AlAAQAJAAAEADIg8A4QgmAkgBAWIABABQAQgKAtgZQAFgEAAALIgcAkQAJgDAWgPIAJADQggA0gRARIgCACIAcgCIAcBZIADgGQABgEAGAAQAXAAgGA1QgHAwgBAZQAFACgKAAQgGAAgBgDIgCgGQgCAFAAAXQABAVgJAIQADgKgVgCgAgVAaQgIAQgHAJQAMgJAEgRg");
	this.shape_1.setTransform(-10.5,5.4,0.85,1.951,-90,0,0,2.9,-0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0033FF").s().p("AghBCIgFgLIAig2IghAMIgIgCIAEgeIgFADIgGABIgWAHQAFglAfgVIAHAFIAAAKIAZgKIAIAEIgEAQQgHARgOANQAugaA0AHIgCAMQg+AaglA7g");
	this.shape_2.setTransform(-47.7,-48.5,0.775,0.815,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0033FF").s().p("AhEAUQgMgPgHgSIgEgOIAFgJQAVAJAKAUIAFAMIABgYQAhAOAhAXIgVgjIAFgKIAfAKIgogdIABgLIAHgDIBcA3IgBAFQgTAJgVgBIgGgBIgMgEIAbAnIgDAIQgtgFgmgaQAEANADAOQABAHAAAIQgegPgUgag");
	this.shape_3.setTransform(-49.6,-4.6,0.775,0.815,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0033FF").s().p("ABZBtQhjhxiTgJIgFgUIgKAAIgKgHIgDgPIAGgFQASgOAXgIQgDgEgCgFQgFgLAAgMQgBgNAOgDQBBAuAyA/QBPBmB6AZIAFAEIgCAUQgWABgWAAIgBAAQgeAAgUgWg");
	this.shape_4.setTransform(10,-35.1,0.775,0.815,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0033FF").s().p("AEqCoQg6hZhZg1IgFAIQAfAwgEA4QgBANgIAHQggAZgRgtQgMghgXgYQgyg3hFAoQh8BIiDg2QgDgIAFgHQAqg3BRACQhOgOhCgwIgCgNQgBgPAKgFQBFgmBUAyQgTgNgNgUQgagpAegYQARgOALARQA3BeBjgsQAdgQAhgIQBWgWAwBHQAcApAhAlQBLBSgVBiIgHABQgFAAgCgEg");
	this.shape_5.setTransform(-18.1,-16.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0033FF").s().p("ABlBZQgbgMgGgeQgFgWgCgVQgbALgdAJQgjANgngBIgZgCQgkgJgUgfQgRgXAAgdQAAgdAcgGQAegEAPAaQAJARAFARQATACATgFQAkgHAggLQAZgHAagEQAOgDAOAFQASAHAHASQADAIAAAIQABAPAFAOQAEALAGAJIALAQQAEAFACAIQACAGgBAIQgBAMgJAGQgOALgQAAQgMAAgOgGg");
	this.shape_6.setTransform(-27.7,-39.1,0.775,0.815,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0033FF").s().p("AAeB+QgYgBgSgMQgRgKgJgSQgJgUAIgTIAOgdQAOgdAagOIgNgLQgLgJgOgFQgQgGgSADQgHgBgGgDQgWgHACgZQABgTAQgHQAYgKAbAAQAOACAOAEQAzALAXAvQAGANAEANQADAKgCAKQgIAkggATQANASAIAUIADALQACAQgKAJIgMAKQgIAEgKAAIgHgBg");
	this.shape_7.setTransform(-38.8,-41.6,0.775,0.815,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0033FF").s().p("AggAVQgGgJABgKQgBgLAKgMQALgQATgBQAkAAAAAnQAAAmgmAAQgWAAgKgSg");
	this.shape_8.setTransform(-45.2,-55.1,0.775,0.815,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(2,1,1).p("AJzmqIAANVIzlAAIAAtVg");
	this.shape_9.setTransform(5.9,-15.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ApxGrIAAtVITjAAIAANVg");
	this.shape_10.setTransform(5.9,-15.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(2,1,1).p("Ah0lkIFJLJIhgAAIlJrJg");
	this.shape_11.setTransform(30.1,28.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#996633").s().p("AB1FlIlJrJIBgAAIFJLJg");
	this.shape_12.setTransform(30.1,28.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(2,1,1).p("AjkFjIForFIBhAAIloLFg");
	this.shape_13.setTransform(-20,28.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#996633").s().p("AjkFjIForFIBhAAIloLFg");
	this.shape_14.setTransform(-20,28.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Painting, new cjs.Rectangle(-57.8,-59.2,127.3,124.7), null);


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


(lib.GalsArm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AAjhzQABgBABAAQADgCACgBQAQgKAQgKQAUgNAOATQAMAQAMAOQADAEgCABIgBAAQAAABAAAAQgDAAgIgCQgTgFgTAFQgDABgBAEQgBAEAAAEAgIhlQgPgCgQgFQgDgBgDgBQgSgGgTgFQgUgEgHgWQAPgGARABQAUACASAIQASAIATAEQABAAABAAQARAEASALAkhBAQgBAQABAPQABATgDASQgCAKACACQABAAABAAQANgIAOgGQARgHARgIQASgIARgIQAQgIAQgJQANgGAMgHQADgBADgCQABgBABAAQAPgIAPgJQAQgJASgJQAOgGALgKQADgCADgDQAHgHAIgFQABgCAAgFQACgUgCgTQgBgUgBgTQAHgDAGgDIABgBQADgBACgBQAEgCAEgCQAOgGANgIABIACQAAABgBAAQgIADgHABQgJADgKABQgHAAgHAAQgBABgBABQgLALgKAJQgCACgCACQgPALgRAIQgCABgBAAQgRAIgQAIQgRAJgRAKQgBABgBABQgKAGgKAGQgEADgFADQgPAKgPAJQgQAJgPAJQgQAJgRAKQgPAJgPAJQgPALgQAKQgPAKgSAHQgTAHgRgKQgMgHAFgNQAAgBAAAAQgDgGgCgJQAAgGgBgFQgBgFAAgEQgBgKgBgJQgCgTgBgSQgBgRgBgRQgBgTACgSQACgRAEgRQAEgSADgSQADgTAEgRQAAAAAAgBQABgEABgDQADgOAEgNQADgGACgHQABgDABgDQADgJACgIQAGgSAkg0QAlg0AJBsQgDARgEASQgDARgEAPACEhhQAAAAAAAAQAEABAEABQAPAFAOAEQASAGASAGQARAGASACQATADATADQAKABABAJIAAAAQABAEgCAFQgBAHgEACQgHADgKgCQgLgCgLgBQgSgBgSgEQgSgFgRgFQgCgBgCAAQgPgFgOgHQgBAAgBgBQgPgHgOAEAA+hVQAIABAHACQALADAKAFQAHADAEAFQAHAJgGANQABADAAADQABASgJAMQgBABgBABQgEAEAAAEQgBANgLAJQgXAVADgaQABgIAFgHQABAAAAgBQAAAAAAgBQABgCAAgCABpgmQgQgLgSgIAA6giQASAFAQAJQAJAFACAHAFAhBQAJgFAHgHQACgCACgCQABgBABgCQAFgIADgJQACgJgBgKQgCgIACgJQACgIAFgHQAFgHAGgGQAGgHAFgFQABgCACAAQgGAFgBAGQgCAHAAAHQAAAIADAIQAEAIABAJQAAALgDALQgBAHgCAGQgBADgBACQgBACgBACQgFAKgLADQgIACgJABQgCABgDAAQgFACgGABQgBAAgBAAQgKADgLABQgEAAgFADQAEgGAIgDQAJgCAIgEgAkKhWQgBACgBACQgFASgFATQgFASgDATQgCAMAAAOQABATgCATQAAAEAAAE");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0033FF").s().p("AgeA0QAIgEAIgHIAEgFIACgCQAFgJACgJQACgJgBgIQgBgIABgKQACgIAFgHIAKgMIALgMQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQgGAEgBAHQgCAGAAAIQgBAIAEAIQAEAHABAKQAAAKgDALIgDANIgCAEIgCAFQgFAKgLACIgQAEIgGABIgKADIgCAAg");
	this.shape_1.setTransform(35.2,-11.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AjtDdQgLgHAEgNIABgBQgEgGgBgJIgCgLIgBgJIgCgTIgCglIgCgiQgBgTACgSQABgRAEgRIAHgkIAHgkIABgBIABgHIAIgbIAEgNIACgGIAGgRQAGgSAkg0QAkg0AJBsIgGAjIgIAgIAAAAIgBAEIgKAlQgFASgDATQgDAMABAOQAAATgBATIgBAIIAAAAQgBAQABAPQACATgEASQgBAKABACIACAAQANgIAOgGIAjgPIAigQIAggRIAZgNIAHgDIACgBIAcgRIAigSQAOgGALgKIAGgFIAQgMIAAgHQACgUgBgTIgDgnIAOgGIAAgBIAGgCIAIgEIAcgOIACgBIAEgDIAhgUQATgNAPATIAXAeQAEAEgDABIAAAAIgBABQgDAAgIgCQgSgFgTAFQgEABgBAEIgBAIIAAAEIgQgDIAQADQALADAKAFQAHADADAFQAHAJgGANIgEAGIAFAAQACASgKAMQgCgHgIgFQgRgJgSgFQASAFARAJQAIAFACAHIgCACQgDAEAAAEQgBANgLAJQgYAVAEgaQABgIAFgHIAAgBIABgBIgCABIgPAEQgJADgJABIgOAAIgCACQgLALgLAJIgFAEQgPALgRAIIgDABIggAQIgiATIgDACIgSAMIgJAGIgfATIgeASIgiATIgdASIgfAVQgQAKgRAHQgIADgIAAQgLAAgKgGgADFACIABgCIgBgCIABACIgBACgADmgmQgQgLgTgIQATAIAQALg");
	this.shape_2.setTransform(-12.4,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("ACxA8QgLgCgMgBQgSgBgRgEIgkgKIgEgBIgcgMIgDgBQgPgHgOAEQgDgFgHgDQgJgFgLgDIAAgEIABgHQABgEAEgBQASgFASAFQAIACADAAIABAAIAIACIAcAIIAkAMQARAGASACIAnAGQAJABACAJIAAAAQAAAEgBAFQgCAHgEACQgEACgGAAIgGgBgAhigJQgPgDgQgEIgGgCQgSgGgSgFQgUgEgIgWQAQgGAQABQAUACASAIQASAIAUAEIACAAQARAEATALIgcAOIgIAEIgGACg");
	this.shape_3.setTransform(9,-9.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.1,1,1).p("AA+hVQAIABAHACQALADAKAFQAHADAEAFQAOgEAPAHQABABABAAQAOAHAPAFQACAAACABQARAFASAFQASAEASABQALABALACQAKACAHgDQAEgCABgHQACgFgBgEIAAAAQgBgJgKgBQgTgDgTgDQgSgCgRgGQgSgGgSgGQgOgEgPgFQgEgBgEgBQAAAAAAAAABOhWQAAgEABgEQABgEADgBQATgFATAFQAIACADAAQAAAAAAgBIABAAQACgBgDgEQgMgOgMgQQgOgTgUANQgQAKgQAKQgCABgDACQgBAAgBABQgNAIgOAGQgEACgEACQgCABgDABIgBABQgGADgHADQABATABAUQACATgCAUQAAAFgBACQgIAFgHAHQgDADgDACQgLAKgOAGQgSAJgQAJQgPAJgPAIQgBAAgBABQgDACgDABQgMAHgNAGQgQAJgQAIQgRAIgSAIQgRAIgRAHQgOAGgNAIQgBAAgBAAQgCgCACgKQADgSgBgTQgBgPABgQAA6giQASAFAQAJQAJAFACAHQAJgMgBgSQAAgDgBgDQAGgNgHgJABpgmQgQgLgSgIABIACQAAABAAAAQAAABgBAAQgFAHgBAIQgDAaAXgVQALgJABgNQAAgEAEgEQABgBABgBAFBgsQgKgCgLgBQgDgBgFgCQAEAGAHACQAJADAIAEQAJAFAHAHQACACACACQABACABABQAFAIADAIQACAKgBAJQgCAJACAJQACAIAFAHQAFAHAGAGQAGAHAFAGQABABACAAQgGgEgBgGQgCgHAAgIQAAgIADgIQAEgIABgKQAAgLgDgKQgBgHgCgGQgBgCgBgDQgBgCgBgCQgFgKgLgDQgIgCgJgCQgCAAgDgBQgFgBgGgBQgBAAgBgBgAkKhWQAEgPADgRQAEgSADgRQgJhsglA0QgkA0gGASQgCAIgDAJQgBADgBADQgCAHgDAGQgEANgDAOQgBADgBAEQAAABAAAAQgEARgDATQgDASgEASQgEARgCARQgCASABATQABARABARQABASACATQABAJABAKQAAAEABAFQABAFAAAGQACAJADAGQAAAAAAABQgFANAMAHQARAKATgHQASgHAPgKQAQgKAPgLQAPgJAPgJQARgKAQgJQAPgJAQgJQAPgJAPgKQAFgDAEgDQAKgGAKgGQABgBABgBQARgKARgJQAQgIARgIQABAAACgBQARgIAPgLQACgCACgCQAKgJALgLQABgBABgBQAHAAAHAAQAKgBAJgDQAHgBAIgDQABAAAAgBQABgCAAgCAkhBAQAAgEAAgEQACgTgBgTQAAgOACgMQADgTAFgSQAFgTAFgSQABgCABgCAAjhzQgSgLgRgEQgBAAgBAAQgTgEgSgIQgSgIgUgCQgRgBgPAGQAHAWAUAEQATAFASAGQADABADABQAQAFAPAC");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0033FF").s().p("AAcA8IgLgMIgKgNQgFgHgCgIQgBgJABgJQABgJgBgJQgDgJgFgIIgCgDIgFgFQgHgGgIgFIABgJIACABIAKACIAGABIAQAEQALACAEAKIADAFIACAFIADANQADALgBAKQAAAKgEAIQgDAHAAAJQAAAHACAHQABAGAGAFQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBg");
	this.shape_5.setTransform(35.2,1.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCC99").s().p("AjtDdQgLgHAEgNIABgBQgEgGgBgJIgCgLIgBgJIgCgTIgCglIgCgiQgBgTACgSQABgRAEgRIAHgkIAHgkIABgBIABgHIAIgbIAEgNIACgGIAGgRQAGgSAkg0QAkg0AJBsIgGAjIgIAgIAAAAIgBAEIgKAlQgFASgDATQgDAMABAOQAAATgBATIgBAIIAAAAQgBAQABAPQACATgEASQgBAKABACIACAAQANgIAOgGIAjgPIAigQIAggRIAZgNIAHgDIACgBIAcgRIAigSQAOgGALgKIAGgFIAQgMIAAgHQACgUgBgTIgDgnIAOgGIAAgBIAGgCIAIgEIAcgOIACgBIAEgDIAhgUQATgNAPATIAXAeQAEAEgDABIAAAAIgBABQgDAAgIgCQgSgFgTAFQgEABgBAEIgBAIIAAAEQALADAKAFQAHADADAFQAHAJgGANIgEAGIAFAAQACASgKAMQgCgHgIgFQgRgJgSgFQASAFARAJQAIAFACAHIgCACQgDAEAAAEQgBANgLAJQgYAVAEgaQABgIAFgHIAAgBIABgBIgCABIgPAEQgJADgJABIgOAAIgCACQgLALgLAJIgFAEQgPALgRAIIgDABIggAQIgiATIgDACIgSAMIgJAGIgfATIgeASIgiATIgdASIgfAVQgQAKgRAHQgIADgIAAQgLAAgKgGgADFACIABgCIgBgCIABACIgBACgADmgmQgQgLgTgIQATAIAQALgADKhSIgQgDIAQADg");
	this.shape_6.setTransform(-12.4,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(0.1,1,1).p("AA+hVQAIABAHACQALADAKAFQAHADAEAFQAOgEAPAHQABABABAAQAOAHAPAFQACAAACABQARAFASAFQASAEASABQALABALACQAKACAHgDQAEgCABgHQACgFgBgEIAAAAQgBgJgKgBQgTgDgTgDQgSgCgRgGQgSgGgSgGQgOgEgPgFQgEgBgEgBQAAAAAAAAABOhWQAAgEABgEQABgEADgBQATgFATAFQAIACADAAQAAAAAAgBIABAAQACgBgDgEQgMgOgMgQQgOgTgUANQgQAKgQAKQgCABgDACQgBAAgBABQgNAIgOAGQgEACgEACQgCABgDABIgBABQgGADgHADQABATABAUQACATgCAUQAAAFgBACQgIAFgHAHQgDADgDACQgLAKgOAGQgSAJgQAJQgPAJgPAIQgBAAgBABQgDACgDABQgMAHgNAGQgQAJgQAIQgRAIgSAIQgRAIgRAHQgOAGgNAIQgBAAgBAAQgCgCACgKQADgSgBgTQgBgPABgQAA6giQASAFAQAJQAJAFACAHQAJgMgBgSQAAgDgBgDQAGgNgHgJABpgmQgQgLgSgIABIACQAAABAAAAQAAABgBAAQgFAHgBAIQgDAaAXgVQALgJABgNQAAgEAEgEQABgBABgBAFAhBQAJgFAHgHQACgCACgCQABgBABgCQAFgIADgJQACgJgBgKQgCgIACgJQACgIAFgHQAFgHAGgGQAGgHAFgFQABgCACAAQgGAFgBAGQgCAHAAAHQAAAIADAIQAEAIABAJQAAALgDALQgBAHgCAGQgBADgBACQgBACgBACQgFAKgLADQgIACgJABQgCABgDAAQgFACgGABQgBAAgBAAQgKADgLABQgEAAgFADQAEgGAIgDQAJgCAIgEgAkKhWQAEgPADgRQAEgSADgRQgJhsglA0QgkA0gGASQgCAIgDAJQgBADgBADQgCAHgDAGQgEANgDAOQgBADgBAEQAAABAAAAQgEARgDATQgDASgEASQgEARgCARQgCASABATQABARABARQABASACATQABAJABAKQAAAEABAFQABAFAAAGQACAJADAGQAAAAAAABQgFANAMAHQARAKATgHQASgHAPgKQAQgKAPgLQAPgJAPgJQARgKAQgJQAPgJAQgJQAPgJAPgKQAFgDAEgDQAKgGAKgGQABgBABgBQARgKARgJQAQgIARgIQABAAACgBQARgIAPgLQACgCACgCQAKgJALgLQABgBABgBQAHAAAHAAQAKgBAJgDQAHgBAIgDQABAAAAgBQABgCAAgCAkhBAQAAgEAAgEQACgTgBgTQAAgOACgMQADgTAFgSQAFgTAFgSQABgCABgCAAjhzQgSgLgRgEQgBAAgBAAQgTgEgSgIQgSgIgUgCQgRgBgPAGQAHAWAUAEQATAFASAGQADABADABQAQAFAPAC");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0033FF").s().p("AgeA1QAIgGAHgGIAFgEIACgDQAFgJADgIQABgJgBgJQgBgJABgIQACgIAFgIIAKgMIALgNQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQgGAFgBAFQgCAIAAAHQAAAIADAIQAEAHAAAKQABAKgDALIgDAMIgCAGIgDAEQgEAKgLADIgQADIgGABIgKADIgCAAg");
	this.shape_8.setTransform(35.2,-11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_3},{t:this.shape_5},{t:this.shape_4}]},9).to({state:[{t:this.shape_6},{t:this.shape_3},{t:this.shape_8},{t:this.shape_7}]},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.3,-23.7,78.6,47.4);


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


(lib.Symbol90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_6 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(6).call(this.frame_6).wait(1));

	// Level 1
	this.instance = new lib.Symbol88("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,4,1,0.111);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance.cache(-7,-6,15,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleY:0.14,y:3.9},0).wait(1).to({scaleY:0.21,y:3.6},0).wait(1).to({scaleY:0.33,y:3},0).wait(1).to({scaleY:0.51,y:2.2},0).wait(1).to({scaleY:0.73,y:1.2},0).wait(1).to({scaleY:1,y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.1,3.6,10.9,1.8);


(lib.Symbol89 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_7 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(1));

	// Level 1
	this.instance = new lib.Symbol88("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleY:0.76,y:1.1},0).wait(1).to({scaleY:0.56,y:2},0).wait(1).to({scaleY:0.4,y:2.7},0).wait(1).to({scaleY:0.27,y:3.3},0).wait(1).to({scaleY:0.18,y:3.7},0).wait(1).to({scaleY:0.13,y:3.9},0).wait(1).to({scaleY:0.11,y:4},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.1,-4,10.9,16.4);


(lib.Paintinglady = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.GalsArm();
	this.instance.parent = this;
	this.instance.setTransform(23.6,-11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:12.8,x:19.2,y:-6.6},5).to({scaleX:1,scaleY:1,rotation:20.5,x:15.4,y:-3.8},3).to({regX:-28.8,regY:-14.4,scaleX:1,scaleY:1,rotation:23.1,x:-5.1,y:-26.3},1).to({scaleX:1,scaleY:1,rotation:13.1,y:-26.2},3).to({rotation:5.3,x:-5.2},2).to({scaleX:1,scaleY:1,rotation:2,x:-4.4,y:-26.1},3).to({regX:-29.6,rotation:1,x:-5.9},1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:23.6,y:-11.8},1).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,1,1).p("AgDgBQADACAEAB");
	this.shape.setTransform(-16.3,60.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AHNoVQgBAJgCAKQAfglgOgvQgNgsgogTQgIgDgIgEQgIgFgHgDQARgEAQADQAMABAMAFQARAHAIAPQgFgQgOgMQgGgFgHgDQgJgGgJgFQAbgPAbAPQgRgXgkgJQgbgHgaAHQAxgdA0AIQgmgUgtARQgMAGgLAFQALgqAugUQhCAHglA3QANg0AvgdQhFALgRBKQgDAMABANIAAAAQgMgJgRgEQgdgGgdAJQgbAJgUAUQgSASgMAVQgCADgCAEQgHANADAOIgBAAQgLAIgNAGQgEACgEACQAFAIgFAPQgIAZAMAXQAHAMALAAQAFAMAFAMQAFAOAMAHQABABAAAAQABABABAAQgBgBAAgBQgFgSAEgTQAFgcAWgJQgGgJADgLQALgpA0gBQAVgBABAUQAJABAIgDIAAAAQARgHADgaQAEgjAdgCQAYAZABAeQABAcgOAVQAjgOALgkQAGAkgPAqQAXgPACgfQAIAYgCAZQAYgVgGgnQAWAWADAgQAPgRgDgWQALASgBAWIAAAAQgJAHgHAGQgHAGgFAIQgDgGgMgDQgcgGgLAVQAAAFgDgBQgCAAgFgEQgFgIgLgHQgXgRgXgRQgYgTgUgZAFJq0QgQgPAFgTAEkrIQAHAFAFAHQgKAFgCgRgADfqdQgLAUACAVADwqGQgDAJgDAIADNqsQgVAVAIAcAC3qvQgYAYALAbACkokQAZAYAagRADlpFQgJgGgKAAQgEANADAMAC3o+QAOgNANAAAD2pPQAAABAAABQgBAHAAAIQAAAAAAABQAcANAVATQAWATAZAPQAJAGAJAGQgDAHgLAFQgWALAGAWQAFAOAPACQAFABAFAAQACAAACAAQAOgBAMgIIABAAQAGgDAFgFQARgOALgSQACgDABgDIAAAAQABgBAAgBQAAAAAAgBQAEgJgEgGAD1o9QAAAJgEAGAFwqWQAaAOAaAPQANAHAHANAFom4QgGgDgFgHQgHgJAGgJQAFgIAJgDQAJgDAIgFQABAAABgBQAHgEAHgEQAJgFAJACQAHABAEAFAFcqWQAZARALAbAFTqzQgBgUAOgLAGRnWQgGgEgHADQgJACgCAJQAAADADAAQALAAAGgIQACgCACgDgAGGm6QAKAGAHAGQAHAGAFAGQAIAJgIAJQgEAEgGABQgJACgJAAQgCAAgCgBQgIgDgIgDQgFgDgFgDQgJADgGAFQgHAFgGAHQgHAGgJAGQgIAFgKACQgJACgKABQgDAAgDAAAFpmWQgDgDgDgDAEBm0QgBAIgBAIQAAACAAADQAAAFAAAEQAAAJABAIQABADABADAD/mfQAJgEAGgGQAHgGAIgCQAJgDAFAHQACACAAAEQABAJgGAIQgGAGgHAEQgIAEgJACQgGADgCAEQAAACABABQACAFADAEQAEAFAGACQgHAAgHgCQgIgCgJgBQgIAAgIgCQgJgBgKgBQgKgBgIgFQgKgFgHAGQgIAGgGAIQgDAFACAEQgGASACATQABASgBASQgCATgBASQAAAUAFASQAAABAAACQAFARACASQACATgHARQgIASgOAOQgNAOgNAMQgOANgKAIIgBAAIhDh9QgMgWAAAAQgBgCgBgBAAQkEQgBADAAAEIAAAAQAAAEAPAIQBiAqAUgDQADgBAFgBAEQCkQALgCANAAQATAAATAAQASABATAAQATABARAJQANAHADAUQAEAVgLARQgKAOgHAOQgLANgMANQgLAMgMAMQgNANgNAOQgNAOgMAQQgKAOgJAPQgKASgOANQgNANgJAQQgKAQgKAPQgKAQgKAQQgKARgNAPQgLANgJAPQgKARgLARQgMASAKAQQAEAGAIABQASAFATgBQATgBASgHQATgGARgHQARgIAFgUQAGgaAPATQAJAMgCAKQAHgCAHAIQADADAAADQABAAAAABQADAAAEAEQAFAEAAAJQADABACADQAIAHgDAIQgHASgUgGQgBABAAAAQgPAJgPAHQgRAJgUABQgUABgTgEQgTgFgTgGQgTgGgTAIQgQAIgPANQgPAOgTAAQgFAAgFAAQgOgBgNgEQgWgGADgUAA6CdQATAEAUgDQASgDASgCQARgDARgDQASgDATgCQATgBATgEQAagEABAWQAAAGADADABwC7QATgBASgCQAUgCATgCQASgCASgDQASgDATgFQAFgCAGgBADrD9QAIgCAJgBQASgCASgEQAFgBAFgBQAOgDAOgDQAOgDAMgHAEqDyQgIAPgNALQgPANgNAOQgNAPgLAQQgLAPgIARQgIAQgGARQgGAQgHASQgGASgJARQgIARgFATQgFARgKAPQgLAPgIARQgIAPgLAOQgLAOgLAOQgEAFgEAEQgBABgBABQgHAJgIAJQgLALgKAMIAAAAQgBAAgBgBQgHgCgIACQgRADgTAIQABAIABAIQADATABASQAEgDAFgCQAAABAAAAQACACAAADQAAAIAGAGQASAUAdgLQAGgDAEACQADACABAFQABAGgFAAQggABgaANQgNAGgFAQQgCAIgIAEQgTAJgVgCQgbgCgcAAQgSAAgSgFQgdgIgfAAQgXABgWgBQgcAAgcAAQgMAAgLAAQgMgBgIgGQgEgEgDgGQgDgHgMgDQgJAFgSgJQgXgKgRgSQgCgCgCgCQgFgEgGgBQgDAAgCgBQACABABABQAFACAIACQgZgGAEAAQADAAACAAQgHgCADAAQACAAACAAQACgBACAAQAPgCAOgHQAPgJAQgHIAAAAQgBgTABgUQABgTACgUQACgRABgSQABgRACgSQABgTACgUQACgTABgUQAAgTgCgUQgCgSgEgRQgEgTgDgTQgDgSgEgSQgFgQgCgRAB/ENQAGgBAGgBQATgDATgCQATgBATgEQAKgDAKgBQgKAQgLAMQgMAMgMALQgOANgNAOQgMANgMAOQgLAOgNANQgNANgNAPQgMAOgKAPQgKAOgJAOQgKAPgJAPQgLARgLAQQgJAQgKAQQgEAHgKAGAEtKTQAIgSAKABQABAAABABAEhKGQAGgNAHgDQAAAAABAAAE2KhQALgTAMAGIAAAAAE8KzQgBAAAAAAQgDgBgCgCABqqXQgEgagTgWQgUgVgZgJQgagKgbADQgdAEgUAaQgMAJgKAMQgJAJgIALQgFAHgDAIQgCAGAAAHQAFgIAFgEQgCAGgCAHQgFASgBAXQAAALACALQACAHADAGQAAgHABgIQADgJAGgGQgFAeAPAdQAGAMAKAKQADgEAAgHQAAgKAHgGQgCAdAWAVQAIgKAEgGQALAYAUATQALAKAMAHQAEgTABgVQABgKAEgJQAHAHAFAJQADAHAFAGQAEgZgBgbQgBgrAagZIABAAQABABABABAAaqrQgYgJgWALQgbANgTAXQgKANgHAPABqqXQgNACgJAUQgMAXAXAMACAqOQgMgKgKABABEqaQgOgWgVgQQgYgTgcADQgQACgQAEAAOqTQgXAAgRASQgUAWgIAdAAmqIQgWAPgKAZQgLAbABAeAAyp4QgMAWgCAYQgCATACATACCpgQgVATADAcACInaQAAABAAAAQADAWgIASQgJARgPAIQgQAHgQAJQgPAJgMANQgLANgEARQgFATgFATQgEATgCASQgBADAAACQgEAEgDAEQgHgZgRAPIAAAAQAAAAAAABQgBAAAAAAIAAAAIAAAAQAAAAAAgBQgOACgIgFQgJgGgDgJQgNghAZgcQgIATANAOQAGAFAEAHQAHAMAAAWIAAAAAg7kDQgQAJgNAOQgOAOgSAFQgMAEgKgHQACAaAcAJQARAGARgIQATgJAFgVQAFgXAUgNQADgBADAAQgJgHgIgBQgJgCgKAFgAgCjiQgLABgGgGQgIgKADgIQAAgCABgCQAAAAAAAAIAAAAQACgDACgDQABgBACgBAjmA2IAAAAQALgGAMgGQARgJAPgMQAOgKANgLQAPgMAPgOQAOgMAKgPQAKgOAMgMQANgNAKgOQALgQAKgQQAJgRAHgSQAGgRAKgOIAAAAQgJgMADgKAAJj8QgIAMgDANQAAABAAAAABWg2IgBAAIAAAAABWg1QhrB7gFAFQgOAKgMAMQgOAOgPAOQgNAMgMAMQgBABgBABQgFAGgFAJIAAABQgDAGgEAHQgCAEgCADQgEAGgEAGQgMAOgQAJQgIAFgHADAh8C+QAUABATgBQATgCATACQARABASgBQAPgBARgDQARgDASgDQAEAAAEgBAh2CmQASgCARgCQASgBATgCQATgCATgDQATgEATgEQASgDAHAPQABADABADQACAIAEAHABjESQABgCABgCQAHgSACgTQADgTAAgUQAAgEgBgDQgDgRgRAEQgPADgOACAleEKQgIgJgEgMQgFgTACgTQACgTAKgQQAKgRAMgPQANgPANgOQAMgNANgMQANgOARgIQAAgDAHgCQAGgCAHgDQgLAQAGAUQAFATAMAQQALAQASAEQATAEATgBQASAAAbABAh8C+QgBAKgDAKQgFATgJARAh9C0QABAFAAAFAgMFLQgBACgCABQgNALgWgDQgRgCgRgBQgSgBgRAAQgSAAgSAAQgSgBgSABQgTAAgSACQgSABgRgBQgTgBgTgEQgUgEgTgBQgSgBgQgGQgTgHgSgJQgEgCgBgDQgBgDADgDQAKgPATgHQARgHASgBAgTEvQgGABgGABQgSACgSACQgSACgRgBQgSgBgRACQgRABgRADQgRADgQgBQgSgCgRAAQgSAAgRgEQgSgGgQgIQgRgJgQgMQgFgFgEgFABjESQABgBABAAQANgCANgCAgaH6QAJgFAEgHQAIgRAMgOQANgOAOgPQAOgOAIgSQAIgQAIgSQAIgSAHgSQAGgSAKgQQAKgQAOgNAgTEvQANgCAMgDQAQgDAQgEQASgDATgDQAIgBADABQAIgDAFgIAgMFLQAAACAAABQgBAMAAAMQgBASgBASQgBATgBASQgBAUgEATQgEASAAASQAAACAAABQABAUAAATQgBAPAAAPQAAADAAACQAAAJAAAIQAAAKAAAKQABATABATQAAALABAKAgMFLQACgDAAgEQABgDgBgDQgBgJgIgGAkUF4QAEAOADAPQADARAAASAl3FmQAIAOADAQQADAPADAQQAEATADASQADAUACATQABATAAASQgBATgIARQgIATgDATQgDARALARQAEAGgBAHAk4GaQACAQABAPQABAQAAAQQAAAPAAAOQAAAQgBAPQgBAUAFATQABADACADQAOAPgNASQgLARACATQABAOAQAFQAHAWgEASQgCAKAEAHAlKFkQAAAJAAAJAhrL9QgBAKgJAKQAAgKgFgJQgGgMgIgHQgDAUgTALQgGAEgFAEQgBgFgBgFQgEgQAGgQQACgEABgFQgEACgDADIAAAAQgNAKgIAPQgHAMgDANQgMgFgFgQQgIAEgJAKQgEgTACgTQABgJAEgFQgGAEgFAEIAAAAQgLAJgJALQgHAJgHAHQgDgLgCgLQgCgHgBAAQgBAVgUANQgHgJgBgNQAAgJAAgDQgHAEgHALQgLgEgDgMQgCgMACgNQgLAGgEAMQgEALgHACQgBgKgEgJQgGgMgFgLQgDgFgCgFQABAFABAGQAAABAAAAQABAUgPAMAmYLkQAAgPgBgOAAJLEQAFgSAMgPQACgDACgCQAAAAAAgBAgSJcQARAJAQAHQATAHAUABQAGAAAGAAAA/KvQgCANAMAAAjaJ/QAAASABASQABAUAAATAi6K1QAAALADALAgRLcQgKAGgGAKQgDAHgFABQgCgEgCgFQgCAMgGALQgDAGgDAEQgCgFAAgEQgDgNAAgMQgBgHABgGQAAgDABgCQgDADgDADQgQATgDAZQgCAKACAJQgKgLgGgNQgCgEgBgEQABgCAAgDACMpZQgHANABAP");
	this.shape_1.setTransform(-14,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0033FF").s().p("AhnFJQgRgBgSAAQgRAAgRgFQgSgFgQgJQgSgJgPgMQgGgEgEgFQgHgKgEgMQgGgSADgTQACgTAKgRQAJgRANgOIAagdIAZgaQANgNAQgIQABgDAHgDIANgFQgLAQAFAUQAGAUALAQQALAPATAEQASAEATAAIAuAAIgDADQgFAFgEAKIAAAAIgHAOIAAAHIAAADIAHAAIAGAAIABAAIAAAAIAMAAIAMgBQATgBATABQARABASgBQARgBAQgDIAjgFIAIgCIAdgEQASgEADARIAAAHQAAATgCAUQgDATgHARIgCAEQgFAJgIADQgDgBgIABIglAGIggAHIgZAFIgNABIgkAFQgRACgRgBQgRgBgSABQgRACgRADQgMABgLAAIgKAAgAgaDfQgGATgJARQAJgRAGgTQADgKAAgKQAAAKgDAKgAgbDIIgIALQgMAPgRAJIgPAIIAPgIQARgJAMgPIAIgLIAEgHIgEAHgAgKDLIgGAAIgHAAIAAgDIAAgHIAHgOIAAAAIAhgEIAlgDQAUgCATgEIAmgHQATgEAGAPIACAGQACAJAEAGIgIACIgjAFQgQADgRABQgSABgRgBQgTgBgTABIgMABIgMAAIAAAAIgBAAgACkC/IAAAAgAC7gpIAAgBIAAABIAAgBIhDh8IgMgXIgDgCIAAgBQgJgLADgKQgMAAgFgGQgIgJACgJIACgDIAAgBIAAAAIAEgFIACgCIABgBIAAAAIAAAAIABAAQARgPAIAZIAGgIIgBAGIAAABQABAEAOAIQBjAqATgEIAJgCQAEASADASQACASgIARQgIASgOAPIgaAaIgYAVIAAAAgABjjXIAAACIAAgCQAEgNAIgLQgIALgEANgAgKisQgcgJgDgaQAKAHAMgEQATgGANgOQAMgNARgJQAJgFAJABQAJACAIAHQgDgBgDACQgTANgGAXQgFAUgSAJQgKAFgKAAQgGAAgHgCgAA+j9QgIgFgEgJQgMgiAYgbQgHASANAOQAFAGAEAGQAIANgBAVIAAABIgGAAQgKAAgGgEg");
	this.shape_2.setTransform(-24.1,-1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CC00").s().p("ACIA5QgbgCgcAAQgSAAgRgFQgegJgeABIgtAAIg4gBIgXAAQgLAAgIgHQgFgEgCgFQgEgHgLgEQgJAFgSgIQgXgLgRgRIgFgDQgFgEgGgBIgEgBIgBgDIAFAAQAOgCAOgIQAPgJARgGQABAOgBAPIAEADQAPgNgBgTIADgCIALAWQAEAKABAKQAHgDAEgLQAFgLAKgGQgCAMADAMQADAMAKAFQAHgMAHgDIABAMQABALAGAJQAVgNAAgTQABAAACAHIAFAVIAPgQQAJgKAKgJIAGAGQgBATADASQAJgKAIgEQAFAPALAFQADgMAHgLQAJgPANgKIAEAEQgHAPAEAQIACAKIAMgIQASgMAEgSQAIAHAGALQAFAIgBALQAJgKACgJIACAHQAGANAKALQgBgJABgKQAEgZAQgTIAFgFIgBAFIAAANQABAMACALIACAKIAGgLQAHgKABgLIAEAJQAFgCAEgGQAFgLAKgGIAKgDIABAFQABAIAGAFQATATAdgKQAGgCADACQAEABABAGQABAEgGAAQgfACgcANQgMAFgFARQgDAIgIADQgQAIgSAAIgGAAg");
	this.shape_3.setTransform(-34.6,76.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#996600").s().p("ABwDxIgCgHIAAgEIAAgCIAAACIAAAEQgBAJgKALQABgLgFgJQgGgMgIgGQgEATgSALIgMAJIgCgKQgEgRAHgQIACgJIgGAFIAAAAQgNALgJAPQgHALgDANQgMgFgEgQQgIAEgJALQgDgTABgUQABgIAEgFIgKAHIgBABQgKAIgJALIgPARIgFgXQgCgGgBgBQAAAVgVANQgGgJgBgMIgBgNQgHAEgHALQgKgEgDgMQgDgMACgMQgKAFgFAMQgEALgHADQgBgLgEgJIgLgWIgFgLIACALIAAACQABATgPANIgEgDQABgPgBgOIAAAAQgCgUABgUIAEgmIADgkIACgjIAEglQACgUAAgUQAAgTgBgUQgCgRgEgSQgFgTgDgTQgCgSgFgSQgEgPgDgSIAHgBQgBgDADgEQALgPASgHQARgGASgCQAEAGAGAEQAPAMASAJQAQAJASAFQARAFARAAQASAAAQABQARABAQgCQARgEARgBQASgCARABQASABARgBIAkgFIANgCQAIAHABAJIAAAGQgBAEgCADIgCADIgCABIAAAAQgKAHgPAAIgBAAIAAAAIgGAAIgCAAIgigEIgjgBIgkAAQgSgBgSABIgkACIgCAAIgSABIgBAAIAAAAIgHAAIgHgBQgTgBgTgDQgTgFgUgBQgRgBgRgGQgTgHgRgIQgFgCgBgDQABADAFACQARAIATAHQARAGARABQAUABATAFQATADATABIAHABIAHAAIAAAAIABAAIASgBIACAAIAkgCQASgBASABIAkAAIAjABIAiAEIACAAIAGAAIAAAAIABAAQAPAAAKgHIAAAAIACgBIACgDIAAADIgBAXIgBAkIgDAlQgBAUgEAUQgEARABATIAAACQABAUgBASIgBAfIAAAEIAAARIABAUIABAnIACAVIACAQIADAkQgJAGgGALQgEAGgFACIgEgJQgBALgHALIgGAKIgCgJQgCgMgBgNIAAgNIABgFIgFAGQgQATgEAZQgBAKABAJQgKgLgGgNgAhHDAQgCgFAAgGIABgGIABgNQAAgNgEgOQgQgGgCgOIAAgFQAAgQAKgPQAGgIAAgJQAAgIgHgIIgEgGQgEgPAAgQIABgHIABgfIAAgdQAAgPgCgQIgDggIADAgQACAQAAAPIAAAdIgBAfIgBAHQAAAQAEAPIAEAGQAHAIAAAIQAAAJgGAIQgKAPAAAQIAAAFQACAOAQAGQAEAOAAANIgBANIgBAGQAAAGACAFgAAhC3QgDgLAAgKQAAAKADALgAAACQIABAnIgBgnIgBgkIABAkgAiIB5IAAgCQAAgGgDgFQgKgNAAgOIABgGQAEgUAIgSQAHgSABgSIAAgMIAAgYIgFgoIgHglIgGgfQgDgQgJgOQAJAOADAQIAGAfIAHAlIAFAoIAAAYIAAAMQgBASgHASQgIASgEAUIgBAGQAAAOAKANQADAFAAAGIAAACgAgxhbIAAgEQAAgQgDgPQgCgPgFgOQAFAOACAPQADAPAAAQIAAAEgAhxidIAAgSIAAASg");
	this.shape_4.setTransform(-35.7,53.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgVATIgBgQIAAgIQAIgFAHgGQAGgGAIgCQAIgCAGAGQACADAAADQAAAKgGAGQgFAHgIADQgHAEgIADQgGACgCAFIgCgHg");
	this.shape_5.setTransform(13.9,-40.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgLAFQACgIAJgDQAGgCAGADIAAABIgEAEQgGAIgKAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAgBAAAAg");
	this.shape_6.setTransform(24.9,-46.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdAbQgFgEgGgHQgHgJAHgIQAFgHAIgDQAJgDAJgFIACgBIANgJQAIgFAKADQAGABAFAFIAJACIAAABIgBABIAAAAIgEAHQgLAQgQAPQgGAEgGAEIAAAAQgLAHgPABIgDAAgAAAgEQgKADgBAIQAAAAAAABQAAAAABABQAAAAABAAQAAABABAAQAJAAAHgIIADgEIABgBQgEgCgDAAIgFABg");
	this.shape_7.setTransform(25,-46.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AAIBPQgOgCgEgOQgGgWAVgLQAKgFAEgHIgSgMQgYgOgWgTQgWgTgbgNIAAgBIAAgPIAAgCQAKABAHgDIABAAQAUAZAXATIAuAiQAKAGAGAIQAEAEADABQABAAAAgBQABAAAAAAQAAgBABgBQAAAAAAgBQALgVAbAGQAMACAEAGQAEAGgEAKIgJgDQgFgFgGgBQgKgCgIAFIgOAIIgCABQgJAFgJADQgIADgFAIQgHAJAHAJQAGAHAFADIAAAHIgLgBg");
	this.shape_8.setTransform(20.1,-51.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCC99").s().p("Ag0K/QgPgBgNgEQgWgHADgTIgCgCQAEgSANgQIADgEIABgBIAVgYIAPgRIABgCIAIgKIAXgcQALgNAGgQQAIgRALgPQALgOAEgSQAFgSAJgSQAIgRAHgSIANgiQAGgQAHgQQAIgRALgQQAMgQANgPQANgOAOgMQAOgLAIgQIAbgGQAOgDAMgGQgMAGgOADIgbAGIgLADIgkAGIgQACIgVAEQgTAEgTACQgTABgTADIgLACIALgCQATgDATgBQATgCATgEIAVgEQgKAQgMANIgYAXIgbAbIgXAaIgYAbIgZAcQgMAOgKAPIgUAdIgTAeIgVAhIgUAfQgFAHgKAHIABgeQABgUgBgTIAAgDQAIgFAEgIQAJgQANgPIAagcQAOgOAJgSIAPgiQAJgSAGgTQAGgSALgPQAJgQAOgOIgZAFIgBgEQAHgRADgTQABgUAAgTIAAgHIAkgEIAngEIAkgEIAlgJIALgCQAMgCAMgBIAmABIAlABQATAAARAJQANAIAEAUQADAUgLARIgRAdIgWAZIgXAYIgaAbQgOAPgLAPQgLAOgJAQQgJARgPAOQgNANgJAPIgTAgIgUAgQgKARgNAOQgMANgJAQQgJARgLAQQgNATALAPQAEAGAHACQASAEATgBQAUgBASgGIAjgOQARgHAFgVQAGgaAPATQAJANgBAJIgCABQgHADgGANQAGgNAHgDIACgBQAGgBAIAHQACADABADIgBABIABAAQAEABAEADQAEAEABAKIAFADQAHAHgDAIQgGATgVgGIgBAAIAAAAQgOAJgPAIQgSAJgUABQgTABgUgFIgmgKQgTgGgSAIQgRAHgOAOQgOAOgUAAIgFAAIgEAAgAgmKWQgKAAAAgLIAAgCIAAACQAAALAKAAgADLKNIgFgDIAFADgADGJ7IABgBIAAgBQAIgNAJAAIAAAAIAAAAIAFABIAAAAIABABIgBgBIAAAAIgFgBIAAAAIAAAAQgJAAgIANIAAABIgBABgAC9JtIACgDQAHgOAIAAIABAAIAAAAIAAAAIAAAAIABAAIgBAAIAAAAIAAAAIAAAAIgBAAQgIAAgHAOIgCADgAiIJsIgBgmIgBgUQAEADAEABQARAIASAHQATAHATABIANABIgPARIgVAYIAAAAIgDgBQgHgCgHABQgTAEgSAIIgCgVgAgTCIIgdAEQgEgGgCgJIgCgGIADAAQAUAEATgEIAjgFIAigFQATgEASgBQAUgCATgDQAZgEABAWQABAFACAEIgLACIglAJIgkAEIgnAEIgkAEQgCgRgSAEgAkHBuQgTAAgSgEQgTgEgLgPQgLgQgGgUQgFgUALgQIgBAAIAXgLQARgJAPgLIAcgWIAdgaQAOgMALgPQAKgPAMgMQAMgMAKgPQAMgPAJgRQAKgRAHgSQAGgRAKgNIADACIAMAXIBDB8IAAABIAAAAIAAAAQhrB8gGAEQgNALgNAMIgcAbIgZAYIguAAgAhRkXQgOgIgBgEIAAgBIABgGIABgFIAHglIAJgmQAEgRALgNQAMgOAQgIQAPgJAQgIQAPgHAIgRQAJgTgDgVIABAAIABABIAAgCQgFgSADgUQAFgbAWgKIACACIABABQANALAOABIAAAAIABAAQAKAAALgHQgLAHgKAAIgBAAIAAAAQgOgBgNgLIgBgBIgCgCQgGgIADgLQAMgqAzgBQAWAAAAAUIAAABIAAAPIAAACQAbAMAWATQAWAUAZAPIASALQgEAHgKAFQgWALAGAWQAEAPAPACIALAAIADAAQAOgBANgHIAAAAIASAMIAMAMQAHAJgHAIQgEAFgGABQgJACgKgBIgDgBIgRgGIgJgFIgGgGIAGAGQgJACgGAFIgOAMQgHAHgIAFQgJAFgJADQgKACgKAAIgFAAQgGgCgEgFIgFgIIgCgDQACgFAHgCQAIgDAIgEQAIgDAFgHQAGgHAAgKQAAgDgCgDQgGgGgIACQgJACgGAGQgHAGgIAFIAAgGIACgQIgCAQIAAAGIAAAJIABAQIABAHIACADIAFAIQAEAFAGACQgIABgGgCIgRgDIgRgCIgSgDQgKgBgJgFQgJgFgIAHQgIAGgFAHQgEAFACAFQgGARACAUQACASgCASQgCASAAATQgBATAFASIABADIgJACIgDAAQgYAAhagmgACBpVQAEgGABgIQgBAIgEAGgABipYQgCgGAAgFQAAgHADgIIABAAIABAAQAHABAHAEIABABIABAAIgBAAIgBgBQgHgEgHgBIgBAAIgBAAQgOABgOAMQAOgMAOgBQgDAIAAAHQAAAFACAGgAD6m8IAAAAgAEJoWQgDAAgEgFQgGgHgKgIIgvgiQgXgSgVgaQASgGADgbQADgiAegDQAYAaABAdQAAAcgOAVQAkgOAKgkQAGAlgPAqQAXgPADgfQAHAXgBAZQAYgVgGgnQAWAXADAfQAOgQgCgXQALATgCAVIAAABIgPAMQgIAHgEAIQgEgHgMgCQgbgGgLAVQAAABgBABQAAAAAAABQgBAAAAABQgBAAAAAAIAAAAg");
	this.shape_9.setTransform(-2.8,3.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF9900").s().p("AizCnQgVgSgLgZIgMAQQgWgVACgdQgHAHAAAJQAAAHgDAFQgKgKgGgNQgPgcAFgeQgGAFgDAJIgBAQIgEgOQgDgKAAgMQABgWAFgSIAEgNQgFAEgFAIQABgHABgFQADgJAFgHIARgUQAKgLAMgKQAUgZAdgFQAcgDAaAKQAZAJAUAVQATAWAEAbQAKgCAMAKQANgVARgSQAUgTAagKQAdgJAdAHQARADAMAKIAAgBQgBgNADgMQARhKBFgLQgvAdgNA0QAlg3BCgHQguAUgLAqIAXgKQAtgSAmAUQg0gIgxAdQAagGAbAGQAkAJARAXQgbgPgbAPIASALIANAIQAPAMAEAQQgIgPgRgGQgLgFgMgCQgRgCgRADIAPAIIAQAHQAoATANArQAOAvgfAlQADgJAAgJIAAgBQABgWgLgSQADAWgPARQgDgggWgWQAGAngYAVQACgZgIgYQgCAggXAOQAPgqgGgkQgLAkgjAOQAOgVgBgcQgBgegYgYQgdACgEAiQgCAagSAHIAAAAQgHADgKAAQAAgUgWAAQgzABgLApQgDALAGAJQgWAKgFAbQgDATAEATIAAABIgCgBQgLgIgGgOIgKgXQgLgBgHgMQgMgXAIgZQAGgOgGgJIAIgEIgIAEIgCgCIAAAAQgbAZABAsQABAagEAZQgFgFgDgIQgFgIgHgIQgEAJgBAKQgBAVgEATQgMgHgLgKgAiSBaIgBgVIABgRQACgYAMgWQgMAWgCAYIgBARIABAVgAi7BXIAAgEQAAgcALgZQAKgZAWgOQgWAOgKAZQgLAZAAAcIAAAEgAhGBNIAAgHQAAgXASgRQgSARAAAXIAAAHgAgwBBIAAgFQAAgMAGgKQgGAKAAAMIAAAFgAjRgCQgUAVgIAdQAIgdAUgVQARgRAYgBQgYABgRARgAhXAgQgPgHAAgNQAAgHAEgHQAKgUAMgBQgMABgKAUQgEAHAAAHQAAANAPAHgAg+ASQgMAIgNAGQANgGAMgIIAAAAIgBgHQAAgKAFgIIAEgIIgEAIQgFAIAAAKIABAHgADtAFQANAIAHAMQgHgMgNgIIg0gbIA0AbgAjLgqQgbANgTAXQgKAMgHAQQAHgQAKgMQATgXAbgNIAEgBQALgFALAAIAAAAIABAAQAKAAAKAEQgKgEgKAAIgBAAIAAAAQgLAAgLAFIgEABgADJAVQgLgbgZgQQAZAQALAbgAAfAKIAAgHQAAgQAJgRQgJARAAAQIAAAHgAAzAJIAGgPIgGAPgAAJAEQgCgHAAgHQAAgTAPgQQgPAQAAATQAAAHACAHgAgMACQgDgHAAgJQAAgRAPgRQgPARAAARQAAAJADAHgAiVhBQAVAQAOAWQgOgWgVgQIgBgBQgUgPgYAAIAAAAIAAAAIgHAAIgBAAQgQACgQAEQAQgEAQgCIABAAIAHAAIAAAAIAAAAQAYAAAUAPIABABgACcgzIAAgDQAAgSANgLQgNALAAASIAAADgACSg0QgMgMAAgOIABgIIgBAIQAAAOAMAMgAB5g8QgFgHgHgFQADAQAJgEg");
	this.shape_10.setTransform(4.3,-63.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(0.5,1,1).p("AgLgDIAJgBQAKAAAEAI");
	this.shape_11.setTransform(24.6,-46.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(0.1,1,1).p("AHNoVQgBAJgCAKQAfglgOgvQgNgsgogTQgIgDgIgEQgIgFgHgDQARgEAQADQAMABAMAFQARAHAIAPQgFgQgOgMQgGgFgHgDQgJgGgJgFQAbgPAbAPQgRgXgkgJQgbgHgaAHQAxgdA0AIQgmgUgtARQgMAGgLAFQALgqAugUQhCAHglA3QANg0AvgdQhFALgRBKQgDAMABANIAAAAQAHAFAFAHQgKAFgCgRQgMgJgRgEQgdgGgdAJQgbAJgUAUQgSASgMAVQgCADgCAEQgHANADAOIgBAAQgLAIgNAGQgEACgEACQAFAIgFAPQgIAZAMAXQAHAMALAAQAFAMAFAMQAFAOAMAHQABABAAAAQABABABAAQgBgBAAgBQgFgSAEgTQAFgcAWgJQgGgJADgLQALgpA0gBQAVgBABAUQAJABAIgDIAAAAQARgHADgaQAEgjAdgCQAYAZABAeQABAcgOAVQAjgOALgkQAGAkgPAqQAXgPACgfQAIAYgCAZQAYgVgGgnQAWAWADAgQAPgRgDgWQALASgBAWIAAAAQgJAHgHAGQgHAGgFAIQgDgGgMgDQgcgGgLAVQAAAFgDgBQgCAAgFgEQgFgIgLgHQgXgRgXgRQgYgTgUgZAFJq0QgQgPAFgTADfqdQgLAUACAVADwqGQgDAJgDAIAC3qvQgYAYALAbADNqsQgVAVAIAcADlpFQgJgGgKAAQgEANADAMAC3o+QAOgNANAAACkokQAZAYAagRAD2pPQAAABAAABQgBAHAAAIQAAAAAAABQAcANAVATQAWATAZAPQAJAGAJAGQgDAHgLAFQgWALAGAWQAFAOAPACQAFABAFAAQACAAACAAQAOgBAMgIIABAAQAGgDAFgFQARgOALgSQACgDABgDIAAAAQABgBAAgBQAAAAAAgBQAEgJgEgGAD1o9QAAAJgEAGAFwqWQAaAOAaAPQANAHAHANAFom4QgGgDgFgHQgHgJAGgJQAFgIAJgDQAJgDAIgFQABAAABgBQAHgEAHgEQAJgFAJACQAHABAEAFAFcqWQAZARALAbAFTqzQgBgUAOgLAGRnWIAAAAAGGm6QAKAGAHAGQAHAGAFAGQAIAJgIAJQgEAEgGABQgJACgJAAQgCAAgCgBQgIgDgIgDQgFgDgFgDQgJADgGAFQgHAFgGAHQgHAGgJAGQgIAFgKACQgJACgKABQgDAAgDAAQgGgCgEgFQgDgEgCgFQgBgBAAgCAFpmWQgDgDgDgDAD/mfQAAgDAAgCQABgIABgIAD/mfQAAAFAAAEQAAAJABAIQABADABADQACgEAGgDQAJgCAIgEQAHgEAGgGQAGgIgBgJQAAgEgCgCQgFgHgJADQgIACgHAGQgGAGgJAEgAESlsQgHAAgHgCQgIgCgJgBQgIAAgIgCQgJgBgKgBQgKgBgIgFQgKgFgHAGQgIAGgGAIQgDAFACAEQgGASACATQABASgBASQgCATgBASQAAAUAFASQAAABAAACQAFARACASQACATgHARQgIASgOAOQgNAOgNAMQgOANgKAIIgBAAIhDh9QgMgWAAAAQgBgCgBgBIAAAAQgJgMADgKQAAAAAAgBQADgNAIgMQgHgZgRAPIAAAAQAAAAAAABQgBAAAAAAIAAAAQgCABgBABQgCADgCADIAAAAQAAAAAAAAQgBACAAACQgDAIAIAKQAGAGALgBACcjMQgFABgDABQgUADhigqQgPgIAAgEIAAAAQAAgEABgDQAAgCABgDQACgSAEgTQAFgTAFgTQAEgRALgNQAMgNAPgJQAQgJAQgHQAPgIAJgRQAIgSgDgWQAAAAAAgBAEQCkQALgCANAAQATAAATAAQASABATAAQATABARAJQANAHADAUQAEAVgLARQgKAOgHAOQgLANgMANQgLAMgMAMQgNANgNAOQgNAOgMAQQgKAOgJAPQgKASgOANQgNANgJAQQgKAQgKAPQgKAQgKAQQgKARgNAPQgLANgJAPQgKARgLARQgMASAKAQQAEAGAIABQASAFATgBQATgBASgHQATgGARgHQARgIAFgUQAGgaAPATQAJAMgCAKQAHgCAHAIQADADAAADQABAAAAABQADAAAEAEQAFAEAAAJQADABACADQAIAHgDAIQgHASgUgGQgBABAAAAQgPAJgPAHQgRAJgUABQgUABgTgEQgTgFgTgGQgTgGgTAIQgQAIgPANQgPAOgTAAQgFAAgFAAQgOgBgNgEQgWgGADgUAEQCkQgGABgFACQgTAFgSADQgSADgSACQgTACgUACQgSACgTABQABADAAAEQAAAUgDATQgCATgHASQgBACgBACQABgBABAAQANgCANgCQAGgBAGgBQATgDATgCQATgBATgEQAKgDAKgBQAIgCAJgBQASgCASgEQAFgBAFgBQAOgDAOgDQAOgDAMgHAA6CdQATAEAUgDQASgDASgCQARgDARgDQASgDATgCQATgBATgEQAagEABAWQAAAGADADAEqDyQgIAPgNALQgPANgNAOQgNAPgLAQQgLAPgIARQgIAQgGARQgGAQgHASQgGASgJARQgIARgFATQgFARgKAPQgLAPgIARQgIAPgLAOQgLAOgLAOQgEAFgEAEQgBABgBABQgHAJgIAJQgLALgKAMQAAABAAAAQgCACgCADQgMAPgFASAgaJCQAKgGAEgHQAKgQAJgQQALgQALgRQAJgPAKgPQAJgOAKgOQAKgPAMgOQANgPANgNQANgNALgOQAMgOAMgNQANgOAOgNQAMgLAMgMQALgMAKgQAEtKTQAIgSAKABQABAAABABAEvJ2QgBAAAAAAQgHADgGANAFNKUIAAAAQgMgGgLATAE2KwQACACADABQAAAAABAAABqqXQgEgagTgWQgUgVgZgJQgagKgbADQgdAEgUAaQgMAJgKAMQgJAJgIALQgFAHgDAIQgCAGAAAHQAFgIAFgEQgCAGgCAHQgFASgBAXQAAALACALQACAHADAGQAAgHABgIQADgJAGgGQgFAeAPAdQAGAMAKAKQADgEAAgHQAAgKAHgGQgCAdAWAVQAIgKAEgGQALAYAUATQALAKAMAHQAEgTABgVQABgKAEgJQAHAHAFAJQADAHAFAGQAEgZgBgbQgBgrAagZIABAAQABABABABAAaqrQgYgJgWALQgbANgTAXQgKANgHAPABqqXQgNACgJAUQgMAXAXAMACAqOQgMgKgKABAAOqTQgXAAgRASQgUAWgIAdABEqaQgOgWgVgQQgYgTgcADQgQACgQAEAAmqIQgWAPgKAZQgLAbABAeAAyp4QgMAWgCAYQgCATACATACCpgQgVATADAcAgQkGIAAAAQAAgWgHgMQgEgHgGgFQgNgOAIgTQgZAcANAhQADAJAJAGQAIAFAOgCgAg7kDQgQAJgNAOQgOAOgSAFQgMAEgKgHQACAaAcAJQARAGARgIQATgJAFgVQAFgXAUgNQADgBADAAQgJgHgIgBQgJgCgKAFgAgQkFIAAAAQAAAAAAgBAAQkEQgEAEgDAEAjmA2IAAAAQALgGAMgGQARgJAPgMQAOgKANgLQAPgMAPgOQAOgMAKgPQAKgOAMgMQANgNAKgOQALgQAKgQQAJgRAHgSQAGgRAKgOABWg2IgBAAIAAAAABWg1QhrB7gFAFQgOAKgMAMQgOAOgPAOQgNAMgMAMQgBABgBABQgFAGgFAJIAAABQgDAGgEAHQgCAEgCADQgEAGgEAGQgMAOgQAJQgIAFgHADAh8C+QAUABATgBQATgCATACQARABASgBQAPgBARgDQARgDASgDQAEAAAEgBQgEgHgCgIQgBgDgBgDQgHgPgSADQgTAEgTAEQgTADgTACQgTACgSABQgRACgSACABwC7QgDgRgRAEQgPADgOACAleEKQgIgJgEgMQgFgTACgTQACgTAKgQQAKgRAMgPQANgPANgOQAMgNANgMQANgOARgIQAAgDAHgCQAGgCAHgDQgLAQAGAUQAFATAMAQQALAQASAEQATAEATgBQASAAAbABAiOD2QAJgRAFgTQADgKABgKAh9C0QABAFAAAFAgMFLQgBACgCABQgNALgWgDQgRgCgRgBQgSgBgRAAQgSAAgSAAQgSgBgSABQgTAAgSACQgSABgRgBQgTgBgTgEQgUgEgTgBQgSgBgQgGQgTgHgSgJQgEgCgBgDQgBgDADgDQAKgPATgHQARgHASgBAgTEvQgGABgGABQgSACgSACQgSACgRgBQgSgBgRACQgRABgRADQgRADgQgBQgSgCgRAAQgSAAgRgEQgSgGgQgIQgRgJgQgMQgFgFgEgFAB/ENQgOANgKAQQgKAQgGASQgHASgIASQgIASgIAQQgIASgOAOQgOAPgNAOQgMAOgIARQgEAHgJAFQAAgSAEgSQAEgTABgUQABgSABgTQABgSABgSQAAgMABgMQAAgBAAgCQACgDAAgEQABgDgBgDQgBgJgIgGABjESQgFAIgIADQgDgBgIABQgTADgSADQgQAEgQADQgMADgNACAmnEwQACARAFAQQAEASADASQADATAEATQAEARACASQACAUAAATQgBAUgCATQgCAUgBATQgCASgBARQgBASgCARQgCAUgBATQgBAUABATIAAAAQgQAHgPAJQgOAHgPACQgCAAgCABQgCAAgCAAQgDAAAHACQACABADAAQAGABAFAEQACACACACQARASAXAKQASAJAJgFQAMADADAHQADAGAEAEQAIAGAMABQALAAAMAAQAcAAAcAAQAWABAXgBQAfAAAdAIQASAFASAAQAcAAAbACQAVACATgJQAIgEACgIQAFgQANgGQAagNAggBQAFAAgBgGQgBgFgDgCQgEgCgGADQgdALgSgUQgGgGAAgIQAAgDgCgCQAAAAAAgBQgFACgEADQgKAGgGAKQgDAHgFABQgCgEgCgFQgCAMgGALQgDAGgDAEQgCgFAAgEQgDgNAAgMQgBgHABgGQAAgDABgCQgDADgDADQgQATgDAZQgCAKACAJQgKgLgGgNQgCgEgBgEQABgCAAgDAkUF4QAEAOADAPQADARAAASAl3FmQAIAOADAQQADAPADAQQAEATADASQADAUACATQABATAAASQgBATgIARQgIATgDATQgDARALARQAEAGgBAHAk4GaQACAQABAPQABAQAAAQQAAAPAAAOQAAAQgBAPQgBAUAFATQABADACADQAOAPgNASQgLARACATQABAOAQAFQAHAWgEASQgCAKAEAHAlKFkQAAAJAAAJAmYLkQAAgPgBgOAhrL9QgBAKgJAKQAAgKgFgJQgGgMgIgHQgDAUgTALQgGAEgFAEQgBgFgBgFQgEgQAGgQQACgEABgFQgEACgDADIAAAAQgNAKgIAPQgHAMgDANQgMgFgFgQQgIAEgJAKQgEgTACgTQABgJAEgFQgGAEgFAEIAAAAQgLAJgJALQgHAJgHAHQgDgLgCgLQgCgHgBAAQgBAVgUANQgHgJgBgNQAAgJAAgDQgHAEgHALQgLgEgDgMQgCgMACgNQgLAGgEAMQgEALgHACQgBgKgEgJQgGgMgFgLQgDgFgCgFQABAFABAGQAAABAAAAQABAUgPAMAnZLjQACABABABQAFACAIACQgZgGAEAAQADAAACAAgAgaH6QAAACAAABQABAUAAATQgBAPAAAPQAAADAAACQAAAJAAAIQAAAKAAAKQABATABATQAAALABAKAAeKdIAAAAQgBAAgBgBQgHgCgIACQgRADgTAIQABAIABAIQADATABASAgSJcQARAJAQAHQATAHAUABQAGAAAGAAAA/KvQgCANAMAAAjaJ/QAAASABASQABAUAAATAi6K1QAAALADALACMpZQgHANABAP");
	this.shape_12.setTransform(-14,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#996600").s().p("ABwDxIgCgHIAAgEIAAgCIAAACIAAAEQgBAJgKALQABgLgFgJQgGgMgIgGQgEATgSALIgMAJIgCgKQgEgRAHgQIACgJIgGAFIAAAAQgNALgJAPQgHALgDANQgMgFgEgQQgIAEgJALQgDgTABgUQABgIAEgFIgKAHIgBABQgKAIgJALIgPARIgFgXQgCgGgBgBQAAAVgVANQgGgJgBgMIgBgNQgHAEgHALQgKgEgDgMQgDgMACgMQgKAFgFAMQgEALgHADQgBgLgEgJIgLgWIgFgLIACALIAAACQABATgPANIgEgDQABgPgBgOIAAAAQgCgUABgUIAEgmIADgkIACgjIAEglQACgUAAgUQAAgTgBgUQgCgRgEgSQgFgTgDgTQgCgSgFgSQgEgPgDgSIAHgBQgBgDADgEQALgPASgHQARgGASgCQAEAGAGAEQAPAMASAJQAQAJASAFQARAFARAAQASAAAQABQARABAQgCQARgEARgBQASgCARABQASABARgBIAkgFIANgCQAIAHABAJIAAAGQgBAEgCADIAAADIgBAXIgBAkIgDAlQgBAUgEAUQgEARABATIAAACQABAUgBASIgBAfIAAAEIAAARIABAUIABAnIACAVIACAQIADAkQgJAGgGALQgEAGgFACIgEgJQgBALgHALIgGAKIgCgJQgCgMgBgNIAAgNIABgFIgFAGQgQATgEAZQgBAKABAJQgKgLgGgNgAhHDAQgCgFAAgGIABgGIABgNQAAgNgEgOQgQgGgCgOIAAgFQAAgQAKgPQAGgIAAgJQAAgIgHgIIgEgGQgEgPAAgQIABgHIABgfIAAgdQAAgPgCgQIgDggIADAgQACAQAAAPIAAAdIgBAfIgBAHQAAAQAEAPIAEAGQAHAIAAAIQAAAJgGAIQgKAPAAAQIAAAFQACAOAQAGQAEAOAAANIgBANIgBAGQAAAGACAFgAAhC3QgDgLAAgKQAAAKADALgAAACQIABAnIgBgnIgBgkIABAkgAiIB5IAAgCQAAgGgDgFQgKgNAAgOIABgGQAEgUAIgSQAHgSABgSIAAgMIAAgYIgFgoIgHglIgGgfQgDgQgJgOQAJAOADAQIAGAfIAHAlIAFAoIAAAYIAAAMQgBASgHASQgIASgEAUIgBAGQAAAOAKANQADAFAAAGIAAACgAgxhbIAAgEQAAgQgDgPQgCgPgFgOQAFAOACAPQADAPAAAQIAAAEgAhxidIAAgSIAAASgACvi8QAPAAAKgHIAAAAIACgBIACgDIgCADIgCABIAAAAQgKAHgPAAIgBAAIAAAAIgGAAIgCAAIgigEIgjgBIgkAAQgSgBgSABIgkACIgCAAIgSABIgBAAIAAAAIgHAAIgHgBQgTgBgTgDQgTgFgUgBQgRgBgRgGQgTgHgRgIQgFgCgBgDQABADAFACQARAIATAHQARAGARABQAUABATAFQATADATABIAHABIAHAAIAAAAIABAAIASgBIACAAIAkgCQASgBASABIAkAAIAjABIAiAEIACAAIAGAAIAAAAIABAAg");
	this.shape_13.setTransform(-35.7,53.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0033FF").s().p("AhnFJQgRgBgSAAQgRAAgRgFQgSgFgQgJQgSgJgPgMQgGgEgEgFQgHgKgEgMQgGgSADgTQACgTAKgRQAJgRANgOIAagdIAZgaQANgNAQgIQABgDAHgDIANgFQgLAQAFAUQAGAUALAQQALAPATAEQASAEATAAIAuAAIgDADQgFAFgEAKIAAAAIgHAOIAAAHIAAADIAHAAIAGAAIABAAIAAAAIAMAAIAMgBQATgBATABQARABASgBQARgBAQgDIAjgFIAIgCIAdgEQASgEADARIAAAHQAAATgCAUQgDATgHARIgCAEQgFAJgIADQgDgBgIABIglAGIggAHIgZAFIgNABIgkAFQgRACgRgBQgRgBgSABQgRACgRADQgMABgLAAIgKAAgAgaDfQgGATgJARQAJgRAGgTQADgKAAgKQAAAKgDAKgAgbDIIgIALQgMAPgRAJIgPAIIAPgIQARgJAMgPIAIgLIAEgHIgEAHgAgKDLIgGAAIgHAAIAAgDIAAgHIAHgOIAAAAIAhgEIAlgDQAUgCATgEIAmgHQATgEAGAPIACAGQACAJAEAGIgIACIgjAFQgQADgRABQgSABgRgBQgTgBgTABIgMABIgMAAIAAAAIgBAAgACkC/IAAAAgAC7gpIAAgBIhDh8IgMgXIgDgCIAAgBQgJgLADgKIAAgCQAEgNAIgLIAGgIIgBAGIAAABQABAEAOAIQBjAqATgEIAJgCQAEASADASQACASgIARQgIASgOAPIgaAaIgYAVIAAgBIAAABIAAAAgAgKisQgcgJgDgaQAKAHAMgEQATgGANgOQAMgNARgJQAJgFAJABQAJACAIAHQgDgBgDACQgTANgGAXQgFAUgSAJQgKAFgKAAQgGAAgHgCgABSjbQgIgJACgJIACgDIAAgBIAAAAIAEgFIACgCIABgBIAAAAIAAAAIABAAQARgPAIAZQgIALgEANIAAACIgCAAQgKAAgFgGgAA+j9QgIgFgEgJQgMgiAYgbQgHASANAOQAFAGAEAGQAIANgBAVIAAABIgGAAQgKAAgGgEg");
	this.shape_14.setTransform(-24.1,-1.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgdAbQgFgEgGgHQgHgJAHgIQAFgHAIgDQAJgDAJgFIACgBIANgJQAIgFAKADQAGABAFAFIAJACIAAABIgBABIAAAAIgEAHQgLAQgQAPQgGAEgGAEIAAAAQgLAHgPABIgDAAgAALgDIAAABIABgBIAAAAIgBAAg");
	this.shape_15.setTransform(25,-46.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFCC99").s().p("Ag0K/QgPgBgNgEQgWgHADgTIgCgCQAEgSANgQIADgEIABgBIAVgYIAPgRIABgCIAIgKIAXgcQALgNAGgQQAIgRALgPQALgOAEgSQAFgSAJgSQAIgRAHgSIANgiQAGgQAHgQQAIgRALgQQAMgQANgPQANgOAOgMQAOgLAIgQIAbgGQAOgDAMgGQgMAGgOADIgbAGIgLADIgkAGIgQACIgVAEQgTAEgTACQgTABgTADIgLACIgZAFIgBgEQAHgRADgTQABgUAAgTIAAgHIAkgEIAngEIAkgEIAlgJIALgCQAMgCAMgBIAmABIAlABQATAAARAJQANAIAEAUQADAUgLARIgRAdIgWAZIgXAYIgaAbQgOAPgLAPQgLAOgJAQQgJARgPAOQgNANgJAPIgTAgIgUAgQgKARgNAOQgMANgJAQQgJARgLAQQgNATALAPQAEAGAHACQASAEATgBQAUgBASgGIAjgOQARgHAFgVQAGgaAPATQAJANgBAJQAGgBAIAHQACADABADIgBABIgBAAIAAAAIAAAAIAAAAIgBAAQgIAAgHAOIgCADIACgDQAHgOAIAAIABAAIAAAAIAAAAIAAAAIABAAIABAAQAEABAEADQAEAEABAKIAFADQAHAHgDAIQgGATgVgGIgBAAIAAAAQgOAJgPAIQgSAJgUABQgTABgUgFIgmgKQgTgGgSAIQgRAHgOAOQgOAOgUAAIgFAAIgEAAgAgmKWQgKAAAAgLIAAgCIAAACQAAALAKAAgADLKNIgFgDIAFADgADGJ7IABgBIAAgBQAIgNAJAAIAAAAIAAAAIAFABIAAAAIABABIgBgBIAAAAIgFgBIAAAAIAAAAQgJAAgIANIAAABIgBABgAC+JQQgHADgGANQAGgNAHgDIACgBIgCABgAiIJsIgBgmIgBgUQAEADAEABQARAIASAHQATAHATABIANABIgPARIgVAYIAAAAIgDgBQgHgCgHABQgTAEgSAIIgCgVgAiJH+QABgUgBgTIAAgDQAIgFAEgIQAJgQANgPIAagcQAOgOAJgSIAPgiQAJgSAGgTQAGgSALgPQAJgQAOgOIALgCQATgDATgBQATgCATgEIAVgEQgKAQgMANIgYAXIgbAbIgXAaIgYAbIgZAcQgMAOgKAPIgUAdIgTAeIgVAhIgUAfQgFAHgKAHIABgegAABCVQgCgRgSAEIgdAEQgEgGgCgJIgCgGIADAAQAUAEATgEIAjgFIAigFQATgEASgBQAUgCATgDQAZgEABAWQABAFACAEIgLACIglAJIgkAEIgnAEIgkAEIAAAAgAkHBuQgTAAgSgEQgTgEgLgPQgLgQgGgUQgFgUALgQIgBAAIAXgLQARgJAPgLIAcgWIAdgaQAOgMALgPQAKgPAMgMQAMgMAKgPQAMgPAJgRQAKgRAHgSQAGgRAKgNIADACIAMAXIBDB8IAAABIAAAAIAAAAQhrB8gGAEQgNALgNAMIgcAbIgZAYIguAAgAhRkXQgOgIgBgEIAAgBIABgGIABgFIAHglIAJgmQAEgRALgNQAMgOAQgIQAPgJAQgIQAPgHAIgRQAJgTgDgVIABAAIABABIAAgCQgFgSADgUQAFgbAWgKQgGgIADgLQAMgqAzgBQAWAAAAAUIAAABIAAAPIAAACQAbAMAWATQAWAUAZAPIASALQgEAHgKAFQgWALAGAWQAEAPAPACIALAAIADAAQAOgBANgHIAAAAIASAMIAMAMQAHAJgHAIQgEAFgGABQgJACgKgBIgDgBIgRgGIgJgFIgGgGIAGAGQgJACgGAFIgOAMQgHAHgIAFQgJAFgJADQgKACgKAAIgFAAQgGgCgEgFIgFgIIgCgDQACgFAHgCQAIgDAIgEQAIgDAFgHQAGgHAAgKQAAgDgCgDQgGgGgIACQgJACgGAGQgHAGgIAFIAAgGIACgQIgCAQIAAAGIAAAJIABAQIABAHIACADIAFAIQAEAFAGACQgIABgGgCIgRgDIgRgCIgSgDQgKgBgJgFQgJgFgIAHQgIAGgFAHQgEAFACAFQgGARACAUQACASgCASQgCASAAATQgBATAFASIABADIgJACIgDAAQgYAAhagmgABTo8QAKAAALgHQgLAHgKAAIgBAAIAAAAQgOgBgNgLIgBgBIgCgCIACACIABABQANALAOABIAAAAIABAAgACBpVQAEgGABgIQgBAIgEAGgABipYQgCgGAAgFQAAgHADgIIABAAIABAAQAHABAHAEIABABIABAAIgBAAIgBgBQgHgEgHgBIgBAAIgBAAQgOABgOAMQAOgMAOgBQgDAIAAAHQAAAFACAGgACSmlIAAAAgAD6m8IAAAAgAEJoWQgDAAgEgFQgGgHgKgIIgvgiQgXgSgVgaQASgGADgbQADgiAegDQAYAaABAdQAAAcgOAVQAkgOAKgkQAGAlgPAqQAXgPADgfQAHAXgBAZQAYgVgGgnQAWAXADAfQAOgQgCgXQALATgCAVIAAABIgPAMQgIAHgEAIQgEgHgMgCQgbgGgLAVQAAABgBABQAAAAAAABQgBAAAAABQgBAAAAAAIAAAAg");
	this.shape_16.setTransform(-2.8,3.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF9900").s().p("AizCnQgVgSgLgZIgMAQQgWgVACgdQgHAHAAAJQAAAHgDAFQgKgKgGgNQgPgcAFgeQgGAFgDAJIgBAQIgEgOQgDgKAAgMQABgWAFgSIAEgNQgFAEgFAIQABgHABgFQADgJAFgHIARgUQAKgLAMgKQAUgZAdgFQAcgDAaAKQAZAJAUAVQATAWAEAbQAKgCAMAKQANgVARgSQAUgTAagKQAdgJAdAHQARADAMAKQADAQAJgEQgFgHgHgFIAAgBQgBgNADgMQARhKBFgLQgvAdgNA0QAlg3BCgHQguAUgLAqIAXgKQAtgSAmAUQg0gIgxAdQAagGAbAGQAkAJARAXQgbgPgbAPIASALIANAIQAPAMAEAQQgIgPgRgGQgLgFgMgCQgRgCgRADIAPAIIAQAHQAoATANArQAOAvgfAlQADgJAAgJIAAgBQABgWgLgSQADAWgPARQgDgggWgWQAGAngYAVQACgZgIgYQgCAggXAOQAPgqgGgkQgLAkgjAOQAOgVgBgcQgBgegYgYQgdACgEAiQgCAagSAHIAAAAQgHADgKAAQAAgUgWAAQgzABgLApQgDALAGAJQgWAKgFAbQgDATAEATIAAABIgCgBQgLgIgGgOIgKgXQgLgBgHgMQgMgXAIgZQAGgOgGgJIAIgEIgIAEIgCgCIAAAAQgbAZABAsQABAagEAZQgFgFgDgIQgFgIgHgIQgEAJgBAKQgBAVgEATQgMgHgLgKgAiSBaIgBgVIABgRQACgYAMgWQgMAWgCAYIgBARIABAVgAi7BXIAAgEQAAgcALgZQAKgZAWgOQgWAOgKAZQgLAZAAAcIAAAEgAhGBNIAAgHQAAgXASgRQgSARAAAXIAAAHgAgwBBIAAgFQAAgMAGgKQgGAKAAAMIAAAFgAjRgCQgUAVgIAdQAIgdAUgVQARgRAYgBQgYABgRARgAhXAgQgPgHAAgNQAAgHAEgHQAKgUAMgBQgMABgKAUQgEAHAAAHQAAANAPAHgAg+ASQgMAIgNAGQANgGAMgIIAAAAIgBgHQAAgKAFgIIAEgIIgEAIQgFAIAAAKIABAHgADtAFQANAIAHAMQgHgMgNgIIg0gbIA0AbgAjLgqQgbANgTAXQgKAMgHAQQAHgQAKgMQATgXAbgNIAEgBQALgFALAAIAAAAIABAAQAKAAAKAEQgKgEgKAAIgBAAIAAAAQgLAAgLAFIgEABgADJAVQgLgbgZgQQAZAQALAbgAAfAKIAAgHQAAgQAJgRQgJARAAAQIAAAHgAAzAJIAGgPIgGAPgAAJAEQgCgHAAgHQAAgTAPgQQgPAQAAATQAAAHACAHgAgMACQgDgHAAgJQAAgRAPgRQgPARAAARQAAAJADAHgAiVhBQAVAQAOAWQgOgWgVgQIgBgBQgUgPgYAAIAAAAIAAAAIgHAAIgBAAQgQACgQAEQAQgEAQgCIABAAIAHAAIAAAAIAAAAQAYAAAUAPIABABgACcgzIAAgDQAAgSANgLQgNALAAASIAAADgACSg0QgMgMAAgOIABgIIgBAIQAAAOAMAMg");
	this.shape_17.setTransform(4.3,-63.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_8},{t:this.shape_15},{t:this.shape_5},{t:this.shape_14},{t:this.shape_13},{t:this.shape_3},{t:this.shape_12},{t:this.shape},{t:this.shape_11}]},9).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.8,-83.3,124.8,166.6);


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


(lib.VolumeButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// B
	this.instance = new lib.Symbol89();
	this.instance.parent = this;

	this.instance_1 = new lib.Symbol90();
	this.instance_1.parent = this;

	this.instance_2 = new lib.Symbol88("synched",0);
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.1,-4,10.9,16.4);


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
		var bgm = createjs.Sound.play('bgmCom',{loop:-1});
		
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
		
		 window.open ("com_scene01.html","_self");
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


(lib.title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		playSound("anobjectivecomplementisthesecond");
	}
	this.frame_69 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(65).call(this.frame_69).wait(1));

	// Shimmy
	this.instance = new lib.Paintinglady();
	this.instance.parent = this;
	this.instance.setTransform(258.4,150.1,1.014,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(70));

	// Layer 9
	this.instance_1 = new lib.Painting();
	this.instance_1.parent = this;
	this.instance_1.setTransform(155.1,162.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(70));

	// ObjComp
	this.instance_2 = new lib.Tween43("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(207.9,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.9,-10.9,529.7,243.4);


(lib.Symbol92 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Level 1
	this.instance = new lib.VolumeButton();
	this.instance.parent = this;
	this.instance.setTransform(0,-4);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.VolumeButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol92, new cjs.Rectangle(-5.1,-8,10.9,16.4), null);


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


(lib.Symbol93 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Level 1
	this.slidin = new lib.Symbol92();
	this.slidin.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.slidin).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol93, new cjs.Rectangle(-5.1,-8,10.9,16.4), null);


(lib.VolumeControl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Level 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3366").s().p("AgTAZQgJgHAAgNQAAgOAHgLQAIgLANAAQAJAAAHADQAHAEAAAJQAAAGgHAEIgMAGIgVALQADAEAFADQAFACAFAAIAKgBQAHgCACgDQAAgBABgBQAAAAABgBQAAAAABAAQAAAAABAAIAEABQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAGgKAFQgJAEgJAAQgMAAgIgHgAgLgPQgFAGgCAKIASgIQAJgFAFgEQgFgEgJAAQgGAAgFAFg");
	this.shape.setTransform(-5.2,-29.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF3366").s().p("AgCAiQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIgBgVIgCgUQAAgGgCgDQgEABgEAFIgHAHIgDAEIgBAJIAAALIAAAEIABAFIgCAEQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAQgHAAAAgPIABgLIABgJIgBgKIAAgJQAAgNAFAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABABQAAAAABABQAAAAAAABQAAAAABABQAAABAAAAIgBADIAAAEIAAAGQADgGAGgFQAGgFAEAAQAJAAADAJQADgEAEgCQAFgDAGAAQAJAAAEALIACAQIAFAhQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgFAAgBgFIgCgTIgCgRIgCgIQgCgFgCAAQgCAAgGAEIgIAFIABALIABAPIABAPQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape_1.setTransform(-13.2,-29.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3366").s().p("AANAcQgHAEgJAAQgHAAgFgDQgGgEgBgHQgCgQAAgLIABgSQABgGAFAAQAAABABAAQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAABIgBAIIgBAJIABAPIACAMIAEACIADAAQAHAAAJgCIAAgNIAAgKIABgVQAAgGAFAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABIgBAWIAAAMIAAAMIABAEIAAAEQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQgFABgBgGg");
	this.shape_2.setTransform(-21,-29.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF3366").s().p("AgGArIABgWIABgVIAAgUIAAgWQAAgFAFgBQAGABAAAFIAAAWIgBAUIgBAdIAAAOQgBAFgEAAQgGAAAAgFg");
	this.shape_3.setTransform(-25.8,-31.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF3366").s().p("AgRAZQgHgIgBgOQAAgMAHgKQAIgMAOAAQALAAAGALQAFAIAAAMQAAANgHAJQgHAKgMAAQgJAAgIgHgAgKgLQgDAHAAAHQAAAJAEAEQAEAEAFAAQAFAAAFgEQAFgFAAgIQABgWgNAAQgIAAgFAIg");
	this.shape_4.setTransform(-30.6,-29.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF3366").s().p("AgKArQgHgSgJggIgEgRQgEgMAAgDQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAFAAABAEIADALIAFAUQAFAUAGAQIABgBIAOgpIAFgPQAEgIADgFQACgCACAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABIAAADIgHAMIgEANIgQApIgGAPQgBADgDAAQgFAAgCgEg");
	this.shape_5.setTransform(-37.2,-30.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Level 4
	this.numeros = new lib.Symbol94();
	this.numeros.parent = this;
	this.numeros.setTransform(4.1,-22.1);

	this.timeline.addTween(cjs.Tween.get(this.numeros).wait(1));

	// Level 2
	this.vol = new lib.Symbol93();
	this.vol.parent = this;
	this.vol.setTransform(4.1,-22.1);
	this.vol.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 51, 102, 0)];
	this.vol.cache(-7,-10,15,20);

	this.timeline.addTween(cjs.Tween.get(this.vol).wait(1));

	// Level 1
	this.instance = new lib.Symbol87("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-527.9,-565.1);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 51, 102, 0)];
	this.instance.cache(480,541,59,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.VolumeControl, new cjs.Rectangle(-45.9,-41.8,55.8,28.1), null);


// stage content:
(lib.com_scene0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene0:0,scene0_repeat:68});

	// timeline functions:
	this.frame_0 = function() {
		/* 
		*/
	}
	this.frame_67 = function() {
		/* _root.gonow = true;*/
	}
	this.frame_79 = function() {
		/* gotoAndPlay("scene0_repeat");
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(67).call(this.frame_67).wait(12).call(this.frame_79).wait(1));

	// Actions
	this.instance = new lib.skiptomenu();
	this.instance.parent = this;
	this.instance.setTransform(514.1,20.3);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.skiptomenu(), 3);

	this.s = new lib.VolumeControl();
	this.s.parent = this;
	this.s.setTransform(473.1,48.5);
	this.s.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 51, 102, 0)];
	this.s.cache(-48,-44,60,32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.s},{t:this.instance}]},79).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EglPAWdMAAAgs5MBKfAAAMAAAAs5g");
	mask.setTransform(275.9,180.6);

	// Scene
	this.instance_1 = new lib.title();
	this.instance_1.parent = this;
	this.instance_1.setTransform(279.8,184.1,1,1,0,0,0,208.6,116.4);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80));

	// Layer 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("EAkaAVfMhIzAAAMAAAgq9MBIzAAAg");
	this.shape.setTransform(277,181.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D2F4FF").s().p("EgkZAVfMAAAgq9MBIzAAAMAAAAq9g");
	this.shape_1.setTransform(277,181.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(80));

	// buttons
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.timeline.addTween(cjs.Tween.get(this.UI).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(312.5,201.6,504,398.7);
// library properties:
lib.properties = {
	id: '8733D4F8D605CD498141828FC56C03C3',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/anobjectivecomplementisthesecond.mp3", id:"anobjectivecomplementisthesecond"},
		{src:"sounds/wrong_answer.mp3", id:"wrong_answer"},
		{src:"sounds/High_Screaming_Gtr.mp3", id:"High_Screaming_Gtr"},
		{src:"sounds/right_answer.mp3", id:"right_answer"},
		{src:"sounds/bgmCom.mp3", id:"bgmCom"}
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
an.compositions['8733D4F8D605CD498141828FC56C03C3'] = {
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