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


(lib.berap4fatguystill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_34 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AgQAIQgEgEgBgEQAHgCAHgDQAHgDAEgCQAGgCADgHQADAFAFAIQACAGgCAHQAAAFgCADQgHAHgMgDQgKgDgGgIg");
	this.shape.setTransform(-5.4,-4.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAATQgKgDgGgIQgEgEgBgEIAOgFIALgFQAGgCADgHIAIANQACAGgCAHQAAAFgCADQgFAFgHAAIgHgBg");
	this.shape_1.setTransform(-5.4,-4.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.1,1,1).p("AgDASQACAAABABQAFABAEAAQAFgBAEgDQAAgBABAAQACgDAAgFQACgHgCgGQgFgIgDgFQgDAHgGACQgEACgHADQgHADgHACQABAEAEAEQAFAGAIAEQADgGgCgGQABgGACAAQAJgCAFAFQAFAEgCAJ");
	this.shape_2.setTransform(-5.4,-4.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgQAJQgEgEgBgFIAOgEIALgFQAGgCADgHIAIANQACAFgCAIQAAAFgCADIgBABQACgJgFgEQgFgFgJACQgCAAgBAGQACAGgDAGQgIgEgFgGg");
	this.shape_3.setTransform(-5.4,-4.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgGAKIgEgCQADgFgCgFQAAgGADAAQAIgEAGAHQAEAEgCAIQgDADgGAAIgBAAIgGAAg");
	this.shape_4.setTransform(-4.6,-3.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(0.1,1,1).p("AAUACQACAEAAAEQgIAAgIABQgGAAgFABQgGABgFAGQgBgDgBgDQADgGAEgEQACgDADgBQgHABgHgBQABgEACgDQABgFADgCQAIgFAKAGQAEACADACQAEAFADAFQABAAAAACgAgSANQgBgEgCgFQAAgDABgCAACgBIAAAAQgCAAgDAAQgBAAgCAAAAMgKQgBAGgHACQgBAAgBABQALAAAHAD");
	this.shape_5.setTransform(-4,-3.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgUADIABgGQAHACAHgBQgDACgCACIgHAKIgDgJgAADgDIACAAQAGgCACgGQAEAEADAGIABABQgHgCgLgBg");
	this.shape_6.setTransform(-4.1,-3.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTANIAHgKQADgDADgBIADAAIAEAAIABAAIgBAAIgEAAIgDAAQgHABgIgBIADgHQACgFADgCQAIgFAKAGIAGAEQgBAGgGACIgCABQAKAAAIADQACAEgBAEIgPABIgMABQgGABgFAGIgCgGg");
	this.shape_7.setTransform(-4,-3.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.1,1,1).p("AgLALQgEgFgDgFQgBgBAAgBQgCgEAAgEQAIAAAIgBQAGAAAFgBQAGgBAFgGQABADABADQABAEACAFQAAADgBACQgBAEgCADQgBAFgDACQgIAFgKgGQgEgCgDgCgAAHACQADgCACgCQAEgEADgGAgBACQgBABgBAAQgHACgBAGAgBACIAAAAQACAAADAAQABAAACAAAAVACQgHgBgHABAgTgBQAHADALAA");
	this.shape_8.setTransform(-4,-3.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgTACIgBgCQAHADALABIgCAAQgGACgCAGQgEgFgDgFgAAGADQADgCACgCIAHgKIADAJIgBAGQgHgCgHABg");
	this.shape_9.setTransform(-3.9,-3.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgEAPIgGgEQABgGAGgCIACgBQgKAAgIgDQgCgEABgEIAPgBIAMgBQAGgBAFgGIACAGIgHAKQgDACgDACIgDAAIgEAAIgBAAIABAAIAEAAIADAAQAHgBAIABIgDAHQgCAFgDACQgEADgEAAQgFAAgFgEg");
	this.shape_10.setTransform(-4.1,-3.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(0.1,1,1).p("AgBAGQgBABgBAAQgHACgBAGQgEgFgDgFQgBgBAAgCQgCgDAAgEQAIAAAIgBQAGAAAFgBQAGgBAFgGQABADABADQABAEACAEQAAADgBADQgHgBgHABAATgIQgDAGgEADQgCADgDACQgCAAgBAAQgDAAgCAAIAAAAAgTACQAHAEALAA");
	this.shape_11.setTransform(-4,-3.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAAALQgKgBgIgEQgCgEABgDIAPgBIAMgBQAGgBAFgFIACAFIgHAJQgDADgDACIgDAAIgFABg");
	this.shape_12.setTransform(-4.2,-4.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(0.1,1,1).p("AAHABQAAgBgBgBQgEgGgGgBQgBAAgBACQgCAIAFAGQABABACAAQAHgBAAgHg");
	this.shape_13.setTransform(-3.8,-4.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgDAIQgFgGACgIQABgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAGABAEAHIABACQAAAGgHABQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAg");
	this.shape_14.setTransform(-3.8,-4.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(0.1,1,1).p("AgUgBQABgEACgDQABgFADgCQAIgFAKAGQAEACADACQAEAFADAFQABAAAAACQgHgDgLAAAgSANQgBgEgCgFQAAgDABgCQAHABAHgBQgDABgCADQgEAEgDAGQABADABADQAFgGAGgBQAFgBAGAAQAIgBAIAAQAAgEgCgEAAMgKQgBAGgHACQgBAAgBABIAAAAQgCAAgDAAQgBAAgCAA");
	this.shape_15.setTransform(-4,-3.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgTANIAHgKQADgDADgBQgHABgIgBIADgHQACgFADgCQAIgFAKAGIAGAEQgBAGgGACIgCABIgBAAIgEAAIgDAAIADAAIAEAAIABAAQAKAAAIADQACAEgBAEIgPABIgMABQgGABgFAGIgCgGg");
	this.shape_16.setTransform(-4,-3.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(0.1,1,1).p("AgFgCQgDACgCACQgEAEgDAGQgBgEgCgFQAAgDABgDQAHACAHgBQACAAABAAQACAAADgBIAAAAQABAAABAAQAGgCACgGQAEAFADAFQAAABABAAQgHgCgLgB");
	this.shape_17.setTransform(-4.1,-3.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(0.1,1,1).p("AAUACQACAEAAAEQgIAAgIABQgGAAgFABQgGABgFAGQgBgDgBgDAgUgBQgBACAAADQACAFABAEQADgGAEgEQACgDADgBQgHABgHgBQABgEACgDQABgFADgCQAIgFAKAGQAEACADACQAEAFADAFQABAAAAACAAMgKQgBAGgHACQgBAAgBABIAAAAQgCAAgDAAQgBAAgCAAAACgBQALAAAHAD");
	this.shape_18.setTransform(-4,-3.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(0.1,1,1).p("AAUACQACAEAAAEQgIAAgIABQgGAAgFABQgGABgFAGQgBgDgBgDAgUgBQABgEACgDQABgFADgCQAIgFAKAGQAEACADACQAEAFADAFQABAAAAACAgGgBQgDABgCADQgEAEgDAGQgBgEgCgFQAAgDABgCQAHABAHgBgAACgBIAAAAQgCAAgDAAQgBAAgCAAAAMgKQgBAGgHACQgBAAgBABQALAAAHAD");
	this.shape_19.setTransform(-4,-3.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(0.1,1,1).p("AgVAAQAHgCAHgDQAHgDAEgCQAGgCADgHQADAFAFAIQACAGgCAHQAAAFgCADQgHAHgMgDQgKgDgGgIQgEgEgBgEg");
	this.shape_20.setTransform(-5.4,-4.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},2).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},2).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},2).to({state:[{t:this.shape_9},{t:this.shape_12},{t:this.shape_11}]},2).to({state:[{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_9},{t:this.shape_12},{t:this.shape_11}]},2).to({state:[{t:this.shape_16},{t:this.shape_6},{t:this.shape_15}]},1).to({state:[{t:this.shape_6},{t:this.shape_17}]},2).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_18}]},1).to({state:[{t:this.shape_14},{t:this.shape_13}]},2).to({state:[{t:this.shape_9},{t:this.shape_12},{t:this.shape_11}]},2).to({state:[{t:this.shape_6},{t:this.shape_17}]},1).to({state:[{t:this.shape_6},{t:this.shape_17}]},2).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_19}]},1).to({state:[{t:this.shape_1},{t:this.shape_20}]},2).to({state:[{t:this.shape_1},{t:this.shape_20}]},9).wait(1));

	// Layer 2
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(0.1,1,1).p("AAniJQABACABACQAAAHgCAJQgEAJgGAGQgCACgDgDAgBioQAKAAAJAEQAGAGAHAKQAFADADAIQAGgEAHgBQAIgFAIgCQAIgGAKAAQAIgFAKgBQAJgCAJABQAKAAAIgBQALACAJAGQAHAEAFAIQAGAFADAIQABABgCACQACAJgBAJQAAAAgBABQgDgBgEAAABzhoQAAgBAAAAQADgCACgCABzhoQgCABgBABQgIAFgDAGQgGAEgHADQAFAEAEAGQAIAGAFAGQAEACADACQAEAHAEAHQAFAJACAHQAEAJgCAKQAAAHgBAEQgBABAAAAAC0hsQAAAAABAAQAFAAAGABQAFACgBAFQAAABAAABQAAAAAAAAQABADABAAQADAEABAFQgCACAAABQgBACgBACQgDgDgDgCAC7g/QgBAAgBABQgHADgIgDQgJgDgHgGQgDgCgBgGQgBADgBAAQgEAKgHAEQgIAEgEgEQgHgIAFgJQADgGAEgHQgFABgDgEQgFgFgCgEAC7g/QABgIgFgCADGhPQgCADgDADQgBAGgFAEABqARQABgBACgBQAJgCAFgEQAFgDAEgDQAIgEAJAAQAKgBAHAEQAGAEAEAJQAEAGACAJQADAIgBAJQADAHgCAKQgCAJAAAHQABABAAABQABACABAEQAAABAAABQAAAKgFAJQgCABgFgBAiKAzQABABABAAQAIACAGAFQAKABAIAGQAHADAJADQAHAEAJAAQAKABAJABQAJAAAJABQAJABAJAAQAKAAAIAAQAKAAAGgFQABgBADAAQAIgDAIgGQAHgDAGgHQAHgHAHgGQAGgFAJgEQAIgEAIgEQAGgDAFgFQgGAGgBAKQgFAJgBAJQgCAJgDAJQAAAJACAJQADAKAFAGQgBADgFgBQgKgBgJABQgFAAgEAAQgLAAgKgCQgIACgGgBQgGACgGgCQgGAAgFABQgFgBgDABQgGgCgDACQgJABgJABQgIAEgFAEQAAgEAAgBQgHgIgHgEQgJgFgIgEQgIgCgJgCQgKABgKgCQgJAAgJgCQgJABgJABQgIADgGABQgBgBAAgBQAAgEABgGQAGgGADgFQAHgIAGgGQgBgBgBgCQgGgHgEgIQgEgJABgHQgBAAgBAAQgKgBgJgBQgJAAgIgCQgKgDgFgHQgGgGgEgIQgEgJACgJQABgKAFgHQADgJAEgHQAGgHAGgHQAIgFAGgFQAGgEAGgGQAIgFAHgGQAHgGAJgEQAIgEAFgDQABACAAACQADAIAFAGQAIACAHAAQAAABAAAAQADAJAJAFQAGADAIABQAJAFAKACQAKgBAKAAQAIgBAGgEABYhUQAAgBgBAAQgBgBgBgBQgIgGgLgCABxBHQgCAIACALQgBACAAABADRB2QAMgFgBAMQgBAJgIAEQgCABgCABQgFADgFAFQgDAGgDAFQgJADgHADQgGAFgHADQgGABgDAJQgGAEgGAAQgMAAgIgGQgHgDABgJQAAgIACgHQAFgGAAgIQACgNgFgHQgCgGgBgIQgFgHABgGQgKABgEAJAC6BYQAAAAABAAQAJABAAAHQAAABABABQAJADADAIQABAFgBAEQAAAEgCAEQgEAHgFgFAC3BQQgCgDgDgBQgIgFgLgBQgJACgBAJQgBAIAAAJQAAAJgBAJQAAAJgBAJQAAAKgGAFQgFAEgEAGADFBiQABALgEAEQgFAFgGgCADEhiQgGABgDADAiEiuQAAgHAAgKQACgKADgJQADgKAIgEQAHgEAIAAQAJgDAJAAQAIABAKAAQAKABAJAEQAIADAHAJQAFAFACAGQAEAGABAGQgIACgKABQgJAAgIACQgJADgGAEQgGAEgHAFQgGAFgDAFQgDgFgIgDQgDgBgCgBQgIgDgKgCQgEgBgDABgAhbifQAAABAAAAQgBABgBABQgEAFgHAFQgJAFgIABQgIABgJgBQgKAAgKgBQgJAAgHgFQgGgCADgGQAIgHAHgDQAKgCAIgFQAGgDAGAAAh7h8QgBgHADgJAhdicQABgBABgCAgLi4QABABADgBQAAAAABAAQAIADgBALQgBABgBABAgLi4QgJgBgDAGQgBACgBABQAAABAAABQgBABABABQAAgBAAAAIAAgBQgBgBgBgCQgJADgGAHAgYiqQAAAEAAAEAgYiqQABACAEABQAGABAFAAQABgJgHgEQgKAAgBAGQAAABABACgAgZisQAAABABABAgIimQADgBADAAQABgBAAAAAgTi+QADADAFADAhCiPQAFAAADgDQAHgHgGgFQAAgHgNAAQgHgCgEAJAhCiPQgEAAgFgCQgJgDADgKQAHgGAHAHQABADgBAHQAAABABADgAgygwIABAAQADABABABQABAMgGAFQgCACgCABQAJADgEAKQgEAJgHABQgDAAgCAAQgEgBgBgCAg/gsQAFgGAHACQAAAAABAAQAAAAAAAAQAEgFgGgIQABgGgFAAQgJADgEAFQgFAIgHAFQgLAEgFAGQgKAAgKgBQgJAAgJACQgIACgJABQgJABgIADAg2gaIAAAAQgIgEgEAEAhBgDQAGADABAJQABAFgFAAQgLAAgFgEQgEgFgDgDQgHAFgIABQgJAEgIACQgLACgHADQgKAAgIgCAh4DWQgBACgBABQgCgBgCgBQgDgGACgEQAAAAAAAAQABgDABgEQAAAAABAAQAIgFAKACQACAAACgCQABABADAAQAHgCAFgFQADgIgGgDQgIgFgJAAQgKgBgJgBQgKgBgKgBQgKAAgIgDQgKgDgFgDQgGgEgEgGQAAgIACgJQgBgLAEgIQADgIAFgIQAHgGAHgEQAAAAAAAAAg6CCQgEADgFADQgIAEgHABQgLAAgGgBAg6CCQALABAGAFQAHAGADAHQAEAJADAFQAAAFAGgBQAEADAEABQAEAEgEAKQgDAIgFADQgGAGgEAAQgGAHgIAFQgEACgEAFQgGAEgHAEQgHAEgKgBQgLgBgEgHQgBgCAAgCQAAAAAAAAQgBgFAEgHQABgKAKABAgqBuQgDAIgIAFQgCAEgDADAh4DWQgBgHAFgEAhgDcQgGACgGgFQAAAAgBAAQgEADgGgBQgBgDAAgCAhtDZQgEgEAFgK");
	this.shape_21.setTransform(-2,9.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgbAQQABgHgBgDQgHgGgHAGQAEgIAHABQANAAAAAHQAGAEgHAHQgDADgFABIgBgFgAAZgOQgKgBgBAGIAAAAIAAgCIACgEQAEgFAIABQABAAAAAAQABABAAAAQABAAAAgBQABAAAAAAIABgBQAJAEgBALIgCACIgCAAIgGABQACgIgIgEg");
	this.shape_22.setTransform(-6,-7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgdAQQgKgDAEgKQAHgFAHAGQABADgCAHIABAEIgIgCgAAZgFQgDgBgCgCIAAgDQABgGAKAAQAHAEgBAJIgCAAIgKgBg");
	this.shape_23.setTransform(-6.5,-6.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("AgnAtIgTgBQgKAAgHgFQgGgCAEgGQAIgHAGgDQAKgCAJgFQAFgCAGgBIADAAIAAAAIABAAIADAAQALACAHADIAFACQAHADADAGQgDgGgHgDIgFgCQgHgDgLgCIgDAAIgBAAIAAAAIgDAAIAAgQIAFgTQAEgKAHgEQAHgEAJAAQAHgDAJAAIATABQAKABAIAEQAJADAGAJQAFAFADAGQADAGABAGQgIACgJABQgJAAgIABQgKADgFAEIgNAJQgGAFgEAGIgBADQgEAFgHAEQgIAFgJABIgLABIgGgBg");
	this.shape_24.setTransform(-11.9,-9.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0000FF").s().p("AgOAsQgHgJgHgEIgRgJIgRgDQgKAAgKgCIgSgBIgSABIgOAEIgBgCIABgJIAJgKIANgOIACABQAIACAGAEQAKACAIAFIAQAGQAHADAJABIATABIASACIARABIATAAQAKgBAGgEIAEgCQAIgCAIgFQAHgEAGgHIAOgMQAGgFAJgEIAQgIQAGgDAFgFQgGAFgBAKQgFAJgBAJIgFARQAAAKACAIQADALAFAFQgBADgFAAIgTgBIgJABQgLAAgKgCQgIABgGgBQgGACgGgBQgGgBgFACQgFgCgEABQgGgCgDADIgRABQgIAEgFAFIAAgFg");
	this.shape_25.setTransform(-4.8,16.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFCC99").s().p("AhQDTQgLgBgEgHIgBgDIAAgBIAAAAIAAgBQAAgFADgGIAAAAQABgIAIgBIAAAAIAAAAIAAAAIACAAIgCAAIAAAAIAAAAIAAAAQgIABgBAIIAAAAQgDAGAAAFIAAABIAAAAIAAABQgGABgGgFIgBAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAgBQAAgDADgGQgDAGAAADQAAABAAABQABABAAAAQAAABAAAAQABABAAAAQgEADgGgBIgBgFIAAgCQAAgFAEgEQgEAEAAAFIAAACIgCADIgEgCQgDgFACgEIAAgBIACgHIABAAQAIgFAKACQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAgBIAEABQAHgCAFgFQADgIgGgDQgIgFgJAAIgTgCIgUgCQgKAAgIgDQgKgDgFgDQgGgEgEgGQAAgIACgJQgBgLAEgIQADgIAFgIIAOgKIAAAAIABACIAOgEIASgCIASACQAKACAKgBIARAEIARAJQAHAEAHAIQgDAIgIAFIgFAHIgJAGQgIAEgHABQgLAAgGgBQAGABALAAQAHgBAIgEIAJgGQALABAGAFQAHAGADAHIAHAOQAAAFAGgBIAIAEQAEAEgEAKQgDAIgFADQgGAGgEAAQgGAHgIAFIgIAHIgNAIQgHAEgIAAIgCgBgAhtDEIAAAAgAB5CgQgHgDABgJQAAgIACgHQAFgGAAgIQACgNgFgHIgDgOQgFgGABgHQgKABgEAJQgFgGgDgKQgCgJAAgJIAFgSQABgJAFgJQABgKAGgEIADgDQAJgCAFgEIAJgFIgJAFQgFAEgJACIgDADQgFADgGADIgQAIQgJAEgGAFIgOANQgGAHgHADQgIAGgIADIgEABQgGAFgKAAIgSAAIgSgBIgSgBIgTgCQgJAAgHgEIgQgGQgIgGgKgBQgGgFgIgBIgCgCIgCgDQgGgHgEgIQgEgJABgFIASABQAHgDALgCQAIgCAJgEQAIgBAHgFIAHAIQAFAEALAAQAEAAAAgEIAAgBQgBgKgGgDIAFAAQAHgBAEgJIABgFQAAgGgGgCIAEgDQAFgEAAgKIAAgDIgEgCIgBAAIABAAIAEACIAAADQAAAKgFAEIgEADQAGACAAAGIgBAFQgEAJgHABIgFAAQgEAAgBgDQABADAEAAQAGADABAKIAAABQAAAEgEAAQgLAAgFgEIgHgIQgHAFgIABQgJAEgIACQgLACgHADIgSgBIgCgBIgTgCQgJAAgIgCQgKgDgFgHQgGgHgEgIQgEgJACgJQABgKAFgHIAHgQIAMgOIAOgKQAGgEAGgGIAPgLQAHgGAJgEIANgHQgBgHADgJQAIgBAJgFQAHgEAEgFIACgDIAAAAQADgFAGgGIANgJQAGgEAJgDQAIgCAJAAQAKgBAIgCIAIAHQgJgCgDAGIgCAEIgCgCQgJADgGAHQAGgHAJgDIACAEIAAABIABADIAAAFIAAACIAAgCIAAgFQABABAEABQAGABAFAAIAGgBIABgBQAKAAAJAEQAGAGAHAKQAFAEADAHIACAEIAAACQAAAHgCAHQgEAJgGAGIgBABIgBAAIAAAAIgCgCIgBAAIABAAIACACIAAAAIABAAIABgBQAGgGAEgJQACgHAAgHIAAgCIgCgEQAGgDAHgCQAIgFAIgCQAIgGAKAAQAIgFAKgBQAJgCAJABIASgBQALACAJAGQAHAEAFAIQAGAFADAIQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQACAJgBAJIgBABIgHgBIAHABIABAAIALABQAFACgBAFIAAACIAAABQAAAAAAABQABAAAAABQAAAAAAAAQABAAAAAAQADAEABAFIgCADIgCAEIgGgFIAGAFIgFAGQgBAGgFAEIAAgDQAAgFgEgCQAEACAAAFIAAADIgCABQgHADgIgDQgJgDgHgGQgDgCgBgGQAAABgBABQAAAAAAABQgBAAAAAAQAAAAAAAAQgEAKgHAEQgIAEgEgEQgHgIAFgJIAHgNQgFABgDgEIgHgJIAAgBIAFgEIgFAEIAAABIgDACQgIAFgDAGIgNAHIgBgBIgCgCQgIgGgLgCQALACAIAGIACACIABABIAJAKQAIAGAFAGIAHAEIAIAOQAFAJACAHQAEAJgCAKIgBAMIgBACQAIgGAJAAQAKgBAHAFQAGAEAEAJQAEAFACAJQADAIgBAJQADAHgCAKIgCAQIABACIACAGIAAACIABgCQAJABAAAHIABACIAAAGQAAAGgDADIgBABQgCADgEAAIAAAAIgBAAIgDgBIADABIABAAIAAAAQAEAAACgDIABgBQADgDAAgGIAAgGQAJADADAIIAAAJQAMgFgBAMQgBAJgIAEIgEACQgFAEgFAEIgGALIgQAGQgGAFgHADQgGABgDAKQgGADgGAAQgMAAgIgGgACTBfIgBASQAAAKgGAFQgFAEgEAGQAEgGAFgEQAGgFAAgKIABgSIABgSIAAgEIABgNQABgJAJgCQALABAIAFQADACACACQgCgCgDgCQgIgFgLgBQgJACgBAJIgBANIAAAEIgBASgADKBuQABgBAAAAQABAAAAAAQABgBAAAAQABgBAAgBIABgBQACgDAAgFQAAAFgCADIgBABQAAABgBABQAAAAgBABQAAAAgBAAQAAAAgBABIAAAAIgBgBIgDgBIAAgBIAAABIADABIABABIAAAAgACzBZIABAAIABgBQAFgJAAgKQAAAKgFAJIgBABIgBAAIAAAAIgDAAIAAgBIgCAAIACAAIAAABIADAAIAAAAgABwBIIABgDIgBgKIABgJIgBAJIABAKIgBADgAg2gvIAAAAIAAAAQgIgEgEAEQACgCADAAQADAAAEACgAiHg4IgRADQgJABgIADQAIgDAJgBIARgDQAJgCAJAAIAUABQAFgGALgEQAHgFAFgIQAEgFAJgDQAEAAAAAFIAAABQAEAFAAAEIgCAEIgBAAIABAAIAAAAIACgEQAAgEgEgFIAAgBQAAgFgEAAQgJADgEAFQgFAIgHAFQgLAEgFAGIgUgBQgJAAgJACgAg/hBIABgBIAAAAIAAAAQAEgDAEAAIAAAAIAAAAIACAAIABAAIgBAAIgCAAIAAAAIAAAAQgEAAgEADIAAAAIAAAAIgBABgAhjh7QADAIAJAFQAGADAIABQAJAFAKACQAKgBAKAAQAIgBAGgEQgGAEgIABQgKAAgKABQgKgCgJgFQgIgBgGgDQgJgFgDgIIAAgBIAAAAIAAAAQgIAAgHgDQgFgGgDgIIgBgEIABAEQADAIAFAGQAHADAIAAIAAAAIAAAAIAAABgAC7hzQADgDAGgBQgGABgDADgAgaiIQAHAAAEgEIABgBQACgCAAgGIABgHIgBgHIgIgMQgDAGgGADIgMAEIgPAFQABAGAFAEQAGAHALADIABABIAGAAIAAAAIAAAAgAhRizQgDAKAJADIAJACQAFAAADgDQAHgHgGgFQAAgHgNAAIgCAAQgGAAgDAHgAg2gvIAAAAgADGhkIAAAAgAgaiIIgGAAIgBgBQgLgDgGgHQgFgEgBgGIAPgFIAMgEQAGgDADgGIAIAMIABAHIgBAHQAAAGgCACIgBABQgEAEgHAAIAAAAIAAAAgAAnieIAAAAgAgpiiIAAAAg");
	this.shape_26.setTransform(-2,11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]}).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.9,-14.7,46,48.4);


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


(lib.Background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#009933").ss(4,1,1).p("EAoDAWQMhQFAAAMAAAgsfMBQFAAAg");
	this.shape.setTransform(-2.3,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FED370","#FFFFCC"],[0,1],0,-172,0,172.1).s().p("EgoCAWQMAAAgsfMBQFAAAMAAAAsfg");
	this.shape_1.setTransform(-2.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-260.6,-144.4,516.6,288.8);


(lib.berap4fatguy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.berap4fatguystill();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,-5.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:26.8,x:6.8},17).to({scaleX:1,scaleY:1,rotation:-5.8,x:0},17).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.2,-15.7,48.5,50.7);


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
		var bgm = createjs.Sound.play('bgmPN',{loop:-1});
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
		
		 window.open ("predNoun_scene3.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("predNoun_scene1.html","_self");
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


// stage content:
(lib.predNoun_scene2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene2:0,scene2_repeat:34});

	// timeline functions:
	this.frame_3 = function() {
		playSound("letsreviewtheverbsofbe");
	}
	this.frame_33 = function() {
		/* _root.gonow = true;*/
	}
	this.frame_53 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(30).call(this.frame_33).wait(20).call(this.frame_53).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0099FF").s().p("AhHBPQgEgEAAgGIAAgNIABgMIAAgSIABgSIAAgTIgBgTIgBgTIgBgSQAAgGAFgFQAFgEAHgBQAIAAAJAOQAtBCAuApIAAgQIgBhDIgBgLIgBgLQAAgOAOAAQARgBAAA0IAAAQIgBBAIgBAQQgCAOgNAAQgIgBgJgHQgngkgxg/IAAAfIAAAZIAAAZQAAAdgOAAQgIAAgEgEg");
	this.shape.setTransform(276,29);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099FF").s().p("AgoBGQgbgVAAgyIAAgPIAAgPIAAgMIABgLQAAgIADgIQAEgJAHAAQAGAAAEAEQAFADgBAHIAAARIAAARIAAAPIgBAPQABAOADANQAEAQAJAGQAEAEAQAAQAbABAIgvQAGgXAAgsQgBgGAEgFQAEgHAJAAQAHAAAEAFQACAEAAAFQAAAogDAXQgHAhgQAYQgIAKgKAHQgNAIgNAAQgaAAgMgKg");
	this.shape_1.setTransform(259.7,29.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0099FF").s().p("Ag2BAQgXgUABgdQgBgiAXgdQAYggAkAAQAkAAASARQASAQAAAhQgBAigTAcQgYAhgkAAQgeAAgWgRgAgggeQgPAVAAAYQAAARANALQANAKATAAQAWAAAPgWQAOgVAAgYQAAgWgKgIQgKgIgXAAQgVAAgRAWg");
	this.shape_2.setTransform(243.6,29.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0099FF").s().p("AhHBPQgEgEAAgGIAAgNIABgMIAAgSIABgSIAAgTIgBgTIgBgTIgBgSQAAgGAFgFQAFgEAHgBQAIAAAJAOQAtBCAuApIAAgQIgBhDIgBgLIgBgLQAAgOAOAAQARgBAAA0IAAAQIgBBAIgBAQQgCAOgNAAQgIgBgJgHQgngkgxg/IAAAfIAAAZIAAAZQAAAdgOAAQgIAAgEgEg");
	this.shape_3.setTransform(226.8,29);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0099FF").s().p("AgvBOQgLgKAAghIACgoIACgpIgBgLIgBgKQAAgQAOAAQAFAAADADIAXgFIATgBQAaAAAQAGQAJADAAAKQAAAFgEAEQgEAFgGAAIgEgBQgRgEgQAAIgPABIgTAEIgBAoIAngEIAZgCQAGAAAEAEQAFAEAAAGQAAAMgNABIgZACIgrAEIAAAVQAAAUACADQABACAMAAIASgBIATAAIAGgBIAGAAQAGAAAEADQAFAEAAAHQAAALgMACQgKACgfAAQgiAAgKgJg");
	this.shape_4.setTransform(202.9,28.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0099FF").s().p("AgJBKQgFgEAAgGIABgEIAAgEIAAgPIgBgOIgCgkIgDglIgGAAQgWAAgOgEQgLgCAAgLQAAgFADgFQAFgFAHABIAQACIAQABIATAAIASgBIAXABIAYACQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAIgZgBIgZgBIADAqIACApIAAAKIABAKQAAAIgDAGQgEAIgIAAQgFAAgEgEg");
	this.shape_5.setTransform(188.8,28.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0099FF").s().p("AA0BNQgIAAgIgTQgGgMgDgQIgaADIgXACIgQAiQgFAIgIAAQgGAAgEgEQgFgEABgGQAAgFAOgfIgBgFQABgFAJgDQAOgYATgbQAYgnAGAAQAMAAADANIAHAhIAPBDIAFANQAEAJgBAFQAAAGgDAEQgEADgGAAIgBAAgAgHAKIANgCIAOgBIgGgiIgVAlg");
	this.shape_6.setTransform(173.7,29.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0099FF").s().p("AgtA+QgPgQAAgWQAAghAegkQAZgeAaAAIAIAAIAHABQAEgEAHAAQAKAAACAMQACAIAAAMQAAAFgDAEQgEAGgHAAQgJAAgFgKQgCgFgCgBIgIAAQgNAAgQAUQgXAbAAAYQAAALAHAIQAIAIAKAAQAJAAALgFIAPgKQAIgFAEAAQAGAAAFAEQAEAEAAAGQAAAGgGAEQgcAYgcAAQgXAAgQgRg");
	this.shape_7.setTransform(159.7,28.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0099FF").s().p("AgwBKQgEgEAAgFQAAgGAEgEQAFgEAGAAIAUgCIAAguQAAgbACgZIgXAAQgFAAgFgEQgEgEAAgGQAAgGAEgEQAEgDAFgBIAfAAQASAAAeAEQANACAAAMQAAAHgFADQgEAEgFAAIgagDQgCATAAAeIAAAuIAcAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgFAEgFAAIgSABIgSAAIgTACIgWABQgFAAgFgEg");
	this.shape_8.setTransform(147.3,29.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0099FF").s().p("AgfBTQgMgDgHgEQgGAAgEgEQgEgEAAgGIABgfIABgfIgBghIAAgiQAAgGAFgFQAGgGAGAAQADAAAOAHIATAIQAdAKAVAUQAZAZAAAcQAAASgIAQQgJAQgPAKQgRALgeAAQgIAAgJgCgAgjA0IAJAEIAMABQAVAAAKgGQAJgGAFgKQAGgKAAgLQAAgYgegTQgJgGghgNg");
	this.shape_9.setTransform(134.4,29.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0099FF").s().p("AgvBOQgLgKAAghIACgoIACgpIgBgLIgBgKQAAgQAOAAQAFAAADADIAXgFIATgBQAaAAAQAGQAJADAAAKQAAAFgEAEQgEAFgGAAIgEgBQgRgEgQAAIgPABIgTAEIgBAoIAngEIAZgCQAGAAAEAEQAFAEAAAGQAAAMgNABIgZACIgrAEIAAAVQAAAUACADQABACAMAAIASgBIATAAIAGgBIAGAAQAGAAAEADQAFAEAAAHQAAALgMACQgKACgfAAQgiAAgKgJg");
	this.shape_10.setTransform(120.2,28.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0099FF").s().p("Ag3BNQgEgEAAgGIAAgXIAAgXIAAhSQAAgHAEgFQAGgHAJABIAZACQAPABAJAGQArAWAAAgQAAAOgJAJQgJAKgSAHQAbAQAOAPQADAEAAAFQAAAGgEAEQgEAEgGAAQgGAAgEgEQgggdgkgLIABAhQAAAGgEAEQgEAEgGAAQgGAAgEgEgAgfADIAEAAQAaAAALgFQAFgDAEgEQAFgFAAgCQAAgLgPgLQgNgKgPgCIgMAAg");
	this.shape_11.setTransform(106.9,28.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0099FF").s().p("AgtBOQgFgEAAgGIAAgcIACguIADgvQAAgbAOABIAKgBIAPgBQATAAASANQATAPAAAVQAAAagUAOQgTAOgYAAIgJgBIgBAvQABAGgEAEQgEAEgGAAQgFAAgEgEgAgSgoIgCAkIAHABQAPAAAKgIQALgIAAgNQABgJgLgHQgKgGgLAAIgGAAIgEAAIAAAOg");
	this.shape_12.setTransform(94.4,28.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgvBOQgLgKAAghIACgoIACgpIgBgLIgBgKQAAgQAOAAQAFAAADADIAXgFIATgBQAaAAAQAGQAJADAAAKQAAAFgEAEQgEAFgGAAIgEgBQgRgEgQAAIgPABIgTAEIgBAoIAngEIAZgCQAGAAAEAEQAFAEAAAGQAAAMgNABIgZACIgrAEIAAAVQAAAUACADQABACAMAAIASgBIATAAIAGgBIAGAAQAGAAAEADQAFAEAAAHQAAALgMACQgKACgfAAQgiAAgKgJg");
	this.shape_13.setTransform(73.4,28.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAsBOQgFgEAAgFIgBgWIAAgXIAAgLQgQABgXAFIgnAHIgCAWIgBAVQAAAGgDADQgEAEgGAAQgHAAgDgEQgFgEAAgFIACgeIACgfIABglIABgmQAAgGADgEQAFgEAFAAQAGAAAEAEQAEAEAAAGIAAAXIgBAXIAAAKIgBAKIAngGQAXgFAQgBIACglQgBgIAFgKQAGgNAHAAQAFAAAFAEQAEADAAAHIAAACQgCAIAAAGIAAAJIgBAJIgBAdIgCAbIACAXIABAWQAAAGgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_14.setTransform(58.7,28.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgJBKQgFgEAAgGIABgEIAAgEIAAgPIgBgOIgCgkIgDglIgGAAQgWAAgOgEQgLgCAAgLQAAgFADgFQAFgFAHABIAQACIAQABIATAAIASgBIAXABIAYACQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAIgZgBIgZgBIADAqIACApIAAAKIABAKQAAAIgDAGQgEAIgIAAQgFAAgEgEg");
	this.shape_15.setTransform(43.2,28.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgKBaQgGgGAAgGQAAgGAFgFQAEgEAHAAQAFAAAGAIQAGAHAAAGQAAAGgFAEQgEAEgHAAQgFAAgGgIgAgIAzQgFgEABgGIAAgOIgBgNIABgwIAAgwQgBgHAFgEQAEgEAGAAQAGAAAEAEQAFAEAAAHIAAB7QAAAGgEAEQgFAEgGAAQgGAAgEgEg");
	this.shape_16.setTransform(408.2,144);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("Ag2BaQgMgMAAgmQAAgPACgfIACgvIgBgMIgBgMQAAgSAQAAQAFAAAFADIAagFIAVgCQAeAAASAHQALAEAAALQAAAGgFAFQgFAFgGAAIgGgBQgSgFgTAAIgRACQgKABgLADIgBAuIAsgEIAdgCQAGAAAFAEQAFAEAAAIQAAANgPABIgcADIgxAEIgBAYQAAAXADADQABACAOAAIAVAAIAVgBIAIAAIAHgBQAGAAAFAEQAGAEAAAIQAAANgOADQgMACgkAAQgmAAgMgKg");
	this.shape_17.setTransform(398.4,144.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("Ag5BZQgGgGAAgHIAAh7IAAgQQgBgJABgGQACgLATgCQAJgDAUAAQAVAAAVAOQAXARAAAZQAAAOgFAJQgDAHgKAIQALAFAJALQAKANAAAMQAAAQgRAOQgLAJgNAFQgaAKgqAAQgHAAgFgGgAgfA/QAUgBAXgHQAUgGAAgHQAAgJgNgHQgKgFgJgBIgfgBgAgfg+IAAAZIAAAZIAQAAQAjgCAAgYQAAgIgLgIQgJgIgNAAIgSAAg");
	this.shape_18.setTransform(383.4,144.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AgWBjQgEgEAAgHIAAgDQACgRABgOIAAg6IgIABIgHABQgHAAgFgFQgEgEgBgHQAAgLAMgDQAFgCAPAAIACgNQADgaAMgNQAMgQAcAAQAVAAABAPQgBAPgTAAQgOAAgHAKQgFAIgBAQIgBADIAWgCQAXAAgBAPQAAAQgXgBIgWABIgBAfIABAfQAAAWgDAMQgCANgMAAQgHAAgFgEg");
	this.shape_19.setTransform(358.8,144.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AgmAxQgRgQgBgbQgBgZAPgUQASgYAfAAQAXAAAOASQANARAAAZQAAAbgPATQgQAVgbAAQgVAAgQgPgAgQgTQgHALAAAOQAAAOAIAHQAGAGAIAAQAKAAAHgHQAJgIAAgNQACglgVAAQgOAAgIANg");
	this.shape_20.setTransform(346.4,147.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("Ag/BNQgOgLAAgPQAAgHAEgFQAFgFAIAAQALAAAEAKQAHAPAYAAQASAAAUgJQATgJAAgKQAAgQgMgEQgIgDgagBQgUAAgQgHQgWgJAAgTQABgWAYgTQAYgUAcAAQALAAARAGQAVAHAAAIQAAAGgEAFQgFAFgHAAQgFAAgLgDIgRgBQgPgBgNAIQgOAHAAAJQAAAEAFADQADACAJACIAdABQAaACAPANQARANAAAZQAAAegjAQQgaALghAAQgeAAgRgMg");
	this.shape_21.setTransform(321.6,144.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("Ag5BZQgGgGAAgHIAAh7IAAgQQgBgJABgGQACgLATgCQAJgDAUAAQAVAAAVAOQAXARAAAZQAAAOgFAJQgDAHgKAIQALAFAJALQAKANAAAMQAAAQgRAOQgLAJgNAFQgaAKgqAAQgHAAgFgGgAgfA/QAUgBAXgHQAUgGAAgHQAAgJgNgHQgKgFgJgBIgfgBgAgfg+IAAAZIAAAZIAQAAQAjgCAAgYQAAgIgLgIQgJgIgNAAIgSAAg");
	this.shape_22.setTransform(306.1,144.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("Ag/BYQgFgFAAgHIAAgaIABgaIAAheQAAgHAEgHQAGgIALABIAdACQAQACALAGQAyAaAAAlQAAAPgKALQgLAMgVAIQAfARAQASQAEAFAAAGQAAAGgFAFQgFAFgHAAQgGAAgFgFQgkgigpgMIABAlQAAAHgFAFQgFAEgHAAQgHAAgEgEgAgkAEIAGAAQAcAAANgHQAGgDAFgFQAFgFAAgCQAAgNgRgNQgOgLgSgCIgOgBg");
	this.shape_23.setTransform(290.7,144.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("Ag2BaQgMgMAAgmQAAgPACgfIACgvIgBgMIgBgMQAAgSAQAAQAFAAAFADIAagFIAVgCQAeAAASAHQALAEAAALQgBAGgEAFQgFAFgGAAIgGgBQgSgFgTAAIgRACQgKABgLADIgBAuIAsgEIAdgCQAGAAAFAEQAFAEAAAIQAAANgPABIgcADIgxAEIgBAYQAAAXADADQABACAOAAIAVAAIAVgBIAIAAIAHgBQAGAAAFAEQAGAEAAAIQAAANgPADQgLACgkAAQgmAAgMgKg");
	this.shape_24.setTransform(275.6,144.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0000").s().p("AgZBTQgOgigSg/IgJggQgHgWAAgIQAAgHAFgFQAFgEAHAAQALAAAFAMIAEAUIALAmQAJAgAJAaIAahGIALgcQAHgRAIgJQAFgGAHAAQAHAAAFAFQAFAFAAAGQAAAFgDAFQgHAJgFANIgIAXIggBQQgFAOgIAOQgFAKgJAAQgMAAgFgMg");
	this.shape_25.setTransform(259.7,144.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgnAzQgUgPAAgbQAAgdAPgUQASgXAdAAQATAAAOAHQASAIAAATQAAANgOAJQgHAFgUAIIgnARQAHAHAHADQAIACAKAAQAPAAALgGQAKgGAGAAQAMAAAAAMQAAANgTAJQgRAHgSAAQgcAAgRgNgAgQgbQgHAHgFAOIAagLQAQgHAJgGQgIgEgMgBQgKAAgJAIg");
	this.shape_26.setTransform(418.3,111.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAbBWQgDgKgCgRQgCgRAAgKIAAgJIABgJIgBgKQgBgFgFAAQgNgBgJALQgGAHgJAQQAAAqgEAJQgFAKgKAAQgGAAgFgFQgFgEAAgGIABgHQABgCAAgdIAAhNIABgFIAAgSIgBgLIgBgLQAAgGAFgEQAFgFAHAAQALAAAEANQACAGAAAPIAAAYIgBAXQAJgIAJgFQAJgEALAAQAUAAAJAMQAHAHABARIABAdIADAXQABANADAKIAAAEQAAAGgFAFQgFAEgGAAQgMABgEgMg");
	this.shape_27.setTransform(405.1,108.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgKBSQgFgFAAgGIABgMIAAgNIgDg8IgVgCQgPgCAAgNQAAgGAFgFQAEgFAHAAIAUABIgBgMIgBgLQAAgHAGgFQAEgDAHAAQARAAAAAcIAAAKIALgBQAOAAAEACQAKADAAALQAAAHgEAEQgGAFgGAAIgGAAIgGAAIgLABIACA8IAAAGIAAAHQABAagSAAQgFAAgFgDg");
	this.shape_28.setTransform(392.3,109.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAEAlQgDgLgDgcIgDAGIgSAtQgCAFgDADQgFAIgKAAQgGAAgGgKQgGgKgEgQQgEgOgHgwIgCgRQAAgGAFgEQAFgFAGAAQANAAADANIADAQIABAQIAFAdIAUg6QAFgPAMAAQANAAAEARIAGAfIAGAgIAThGQACgLAMAAQAHAAAFAFQAFAEAAAHIAAADQgNAugMAkQgEALgIALQgFAIgKAAQgOAAgJgdg");
	this.shape_29.setTransform(368.1,112);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgnAzQgUgPAAgbQAAgdAPgUQASgXAcAAQAVAAANAHQASAIAAATQAAANgOAJQgHAFgUAIIgnARQAHAHAHADQAIACAKAAQAPAAALgGQAKgGAFAAQANAAAAAMQAAANgTAJQgRAHgSAAQgbAAgSgNgAgQgbQgHAHgEAOIAagLQAPgHAJgGQgIgEgNgBQgJAAgJAIg");
	this.shape_30.setTransform(353,111.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgOBVQgFgFAAgGIAAgWIAAgVIABgaIABgZQAAgHAEgFQAFgEAHAAQAGAAAFAEQAEAFAAAHIgBAZIgBAaIAAAVIABAWQAAAGgFAFQgEAFgGAAQgHAAgFgFgAgKg7QgGgFAAgHQAAgHAGgGQAFgEAHAAQAHAAAGAEQAFAGAAAHQAAAHgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_31.setTransform(343.3,109);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgRA0IgmheIgCgGQAAgGAFgFQAGgEAGAAQAKAAAEAJQAHAOATAzIAQgnIAKgZQAGgKAJAAQAHABAFAEQAFAEAAAHQAAAEgTAqIgYA0QgBAFgFAFQgEADgFAAQgLAAgGgMg");
	this.shape_32.setTransform(334.1,111.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgoAzQgTgPAAgbQAAgdAQgUQARgXAcAAQAVAAANAHQASAIAAATQAAANgPAJQgGAFgUAIIgmARQAFAHAIADQAIACAJAAQAQAAALgGQAKgGAFAAQANAAAAAMQAAANgUAJQgQAHgTAAQgaAAgTgNgAgPgbQgIAHgEAOIAagLQAOgHAKgGQgIgEgNgBQgJAAgIAIg");
	this.shape_33.setTransform(321.2,111.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AguA9QgDgEAAgHIAAhMIAAgKIAAgLQAAgHAEgEQAEgFAIAAQANAAACAOQATgQAaAAQAYAAAAAfIgBAIQgBASgPAAQgPAAAAgPIgBgMQgZAEgLAXIAAA6QAAAHgEAEQgFAFgIAAQgHAAgEgFg");
	this.shape_34.setTransform(309.1,111.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AggA9QgSgHAAgMQAAgMAOAAQAFAAAKADQALAEAGAAQAWAAAAgJQAAgHgQgHQgYgLgGgDQgQgMgBgRQAAgXAZgIQAPgFAcAAQAMAAAGADQAIAEAAALQAAAVgLAAQgMAAgDgJIgJgCQgcABABAHQAAAFAQAIQAXAKAIAGQARALAAAQQAAAVgTAJQgPAJgVAAQgPAAgNgFg");
	this.shape_35.setTransform(286.7,111.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgMAZQgEgEAAgHIAEgdQACgNAMAAQAHAAAEAEQAEAEAAAGIgEAdQgBAFgDADQgFAGgFAAQgHAAgEgEg");
	this.shape_36.setTransform(278.1,101.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgKBSQgFgFAAgGIABgMIAAgNIgDg8IgWgCQgOgCAAgNQAAgGAFgFQAEgFAHAAIAUABIgBgMIgBgLQAAgHAGgFQAEgDAHAAQAQAAABAcIAAAKIALgBQAOAAAEACQAKADAAALQAAAHgEAEQgFAFgHAAIgGAAIgGAAIgLABIACA8IAAAGIAAAHQABAagSAAQgFAAgFgDg");
	this.shape_37.setTransform(269.9,109.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgoAzQgTgPAAgbQAAgdAPgUQASgXAcAAQAVAAANAHQASAIAAATQAAANgPAJQgGAFgUAIIgnARQAGAHAIADQAIACAKAAQAPAAALgGQAKgGAFAAQANAAAAAMQAAANgUAJQgQAHgSAAQgcAAgSgNgAgQgbQgHAHgEAOIAagLQAOgHAKgGQgIgEgNgBQgKAAgIAIg");
	this.shape_38.setTransform(257.4,111.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("Ag+BGIADglQADgyAAg+QAAgHAEgEQAFgFAHAAQAHAAAFAFQAEAEAAAHQAAA/gDAzIgCAdQAcgBAqgNIAGgBQAHAAAEAGQAFAFAAAGQAAAKgLAEQgNAGgdAFQgaAFgRAAQgdAAAAgag");
	this.shape_39.setTransform(244.6,109.1);

	this.instance = new lib.berap4fatguy();
	this.instance.parent = this;
	this.instance.setTransform(153.7,195.3,4.169,4.169);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(0.1,1,1).p("ABQITQp7AAnCicQjThJhwhXIkfgOIClifQgFgVAAgVQAAjbHCibQHCicJ7AAQJ8AAHBCcQHCCbAADbQAADbnCCcQnBCcp8AAg");
	this.shape_40.setTransform(330.6,128);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AvtF3QjThJhwhXIkfgOIClifQgEgVgBgVQAAjbHCibQHCicJ7ABQJ8gBHBCcQHDCbgBDbQABDbnDCcQnBCbp8ABQp7gBnCibg");
	this.shape_41.setTransform(330.6,128);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.instance},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(54));

	// Layer 1
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.instance_1 = new lib.Background();
	this.instance_1.parent = this;
	this.instance_1.setTransform(275.4,199.9);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.UI}]}).wait(54));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,201.6,534,398.7);
// library properties:
lib.properties = {
	id: 'B6CE93004592414DAF7650AA145729C3',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/High_Screaming_Gtr.mp3", id:"High_Screaming_Gtr"},
		{src:"sounds/letsreviewtheverbsofbe.mp3", id:"letsreviewtheverbsofbe"},
		{src:"sounds/right_answer.mp3", id:"right_answer"},
		{src:"sounds/bgmPN.mp3", id:"bgmPN"},
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
an.compositions['B6CE93004592414DAF7650AA145729C3'] = {
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