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


(lib.Tween36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,1,1).p("Ag2gWQgCACgEAAQgEAAgDgBQgEgCgBgDQAAgEAAgDQAAgEACgDQABgEAEgCQADgBADgCQAEgCAEAAQACAAABACQABADgBACAgzgrQgCABgCACQgDACgCADQgDADACAEQABADACABAgxgqQAFADAGADQADACADACQAHAFAGAEQACABABABAAPAXQgFgCgFgDQgGgFgJgFQgIgFgIgDQgBgBAAAAQgEgCgEgEQgGgEgFgEQgEgDgEgDAgPgUQAHAGAJAFQAHADAHADQAEACADABAA9A0QgEgDgDgCQgEgCgDgCQAAAAAAAAQgDgCgDgCQgGgEgHgFQgEgCgEgCQgBgBgCgBAAoALQADACADADQAFADAHAFQAHAEAHADQAAABABAAAAYABQAEADAEADQACACACAB");
	this.shape.setTransform(-0.3,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#993300").s().p("AAzAvIgGgEIgBAAIgFgEIgOgJIgHgEIgEgCIgCgBIAAAAIgKgFIgOgKIgRgJIAAAAIgIgGIgLgIIgJgGIAAAAIgFABQgEAAgEgBQgDgCgBgDQgBgEABgDQgBgEACgDQACgEADgCIAHgDQADgCAEAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABQABADAAACIgDABIACABIAKAGIAHAEIANAJIADACIAAABQAHAGAKAFIAOAHIAHACIABABQADAEAFACIACACIAEADIgBgCIADABIAHAFIAMAIIANAHIABABIAGANIgVAAIADAHIgHgFgAhAgcQABADADABQgDgBgBgDIAAgCQAAgDACgCIAFgFIAEgDIgEADIgFAFQgCACAAADIAAACg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.5,-6.1,16.6,12.4);


(lib.Tween34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,1,1).p("AhCg8QgBgBgBAAQgGgDgGgCQgHgDgHgDAhqg0QADACADACQAGAEAGAEQAIAEAFADQAGAEAGAEAgugxQgDgBgDgCQgGgFgHgDAgbgkQgGgEgGgEQgEgCgDgCAg9gYQAGAEAFAEQAAAAABABQAGAEAGAEQAGAFAHADQAAABABAAAAogCQgGgCgFgDQgHgEgHgDQgHgDgHgEQgHgDgGgEQgHgFgGgDABoAuQgEgCgDgEQgGgFgGgGQgFgFgHgFQgHgEgGgEQgFgEgEgDQgCgCgBgBIgBAAQgCgBgDAAABNBFQAAgBAAgBQABgFACgEQACgDADgDQADgDAEgCQAFgCAEAAQACAAABABABNBFIAAAAQAAAGAIgCQAFgCAEgDQAHgEAEgIQAEgJgFgBAgVAEQAEADAEAEQAFAFAHADQAGACAGAEQAHAEAFAFQABAAACABQAEAEAFAEQAGAEAGAGQACABACACQABAAAAABQABAAABABQAFACAFADQAGADAHAD");
	this.shape.setTransform(0.2,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#993300").s().p("ABPBFIAAAAIAAgBIAAgBQAAgFADgEIAFgGQADgDADgCIAFgBIAAAAIACgBIACAAIAAAAIABAAIAAAAIADABIgDgBIAAAAIgBAAIAAAAIgCAAIgCABIAAAAIgFABQgDACgDADIgFAGQgDAEAAAFIAAABIAAABIgNgGIgKgFIgCgBIgCgBIgDgDIgMgKIgKgIIgCgBIgMgJQgGgEgHgCQgGgDgFgFIgIgHIgBgBIgBgBIAAAAIgCgBIgNgIIgMgIIAAgBIgLgIIgBAAIgBgBIgMgIIgNgHIgMgIIgGgEIgEgHIAVAAIgFgNIAOAGIAMAFIACABIAAAAQAIADAGAFIAFADIAAABIAIAEIAMAIQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAABAAIAMAIIANAHIAPAHIAOAHIAKAFIADACIAFABIAAAAIAEADIAJAHIANAIQAHAFAFAFIALALIAIAGQAFABgEAJQgFAIgGAEQgEADgFACIgEAAQgFAAABgEg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-8.3,23.4,16.6);


(lib.Tween32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,1,1).p("AATgHQAEADAEACQAFADAHADAAAgSQAIADAGAEQADACACACABtAoQADACACABIAAAAQACABACACQAEADAFADQAGAFAHAEQAHAFAFAFQAGAGAFAFQAEADAEADQgBgBgCAAQgEAAgGACQgDACgDACQgDAEgCADQgDAEAAAFQAAABAAAAQgHgCgGgEQgFgCgFgCQgBgBgBAAQgBgBgBgBQgBgBgCgCQgGgFgGgEQgFgEgFgEQgBgBgBgBQgFgEgHgEQgGgEgHgCQgHgDgFgFQgEgEgEgDACrBYQAFABgEAJQgFAHgGAFQgEADgFABQgJACABgFIAAgBAApAFQAGADAGAEQAHAFAHADQAIADAHAEQAHADAHAEQAFADAFACAArAsQgBgBgBAAQgGgEgHgFQgFgEgHgFQAAAAAAAAQgGgEgFgEAibhVQgCACgDAAQgFAAgDgBQgEgCAAgDQgBgEABgDQgBgEACgEQACgDADgCQADgCAEgBQADgCAEAAQACAAABACQABADgBACAiWhpQAFADAGADQADACADACQAHAFAGAEQACABACABQAAAAAAABQAHAGAKAEQAHADAIAEQADACADACQABABABAAQgBgBAAgBAhTgmQgBAAgBgBQgFgCgFgDQgHgFgIgFQgJgGgIgEQAAAAgBAAQgEgCgEgEQgFgEgGgEQgEgDgEgDAh0hUQAAAAAAAAAiXhqIgBAAQgCABgBABQgDADgDADQgCADABAEQABADADABAhCg1QgBgBgBgBQgFgCgDgEQAEADAEADQACABADACQABABACAAAg/g0QABAAACABQADACAEADQAFADAGAFQAHAEAHADQAHAEAIADQAGACAGADQABAAAAAAAADAQQgFgEgGgEQgFgDgIgFQgGgCgGgFQgHgEgGgEQgDgCgEgCQAAgBAAAAQgDgBgCgCQgHgEgHgFQgEgCgDgCQgCgBgCgBQgBgBgBAA");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#993300").s().p("ACQBvIAAgBIgNgGIgKgEIgCgBIgCgCIgDgDIgMgJIgKgIIgCgCIgMgIQgGgEgHgCQgHgDgFgFIgIgHIgBgCIgBAAIAAAAIgCgBIgNgJIgMgJIAAAAIgLgIIgBAAIgBgBIgLgIIgNgIIgMgHIgNgIIgHgEIAAgBIgFgDIgOgJIgHgEIgEgCIgCgBIAAAAIgKgFIgPgKIgRgKIgBAAIgIgGIgLgIIgIgGIAAgBIgFACQgFAAgDgBQgEgCAAgDQgBgEABgDQgBgEACgEQACgDADgCIAHgDQADgCAEAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABQABADgBACIgCABIABABIALAGIAGAEIANAJIAEACIAAABIAAgBIAAAAIAAABQAHAGAKAEIAPAHIAGAEIACABQADAEAFACIACACIAEADIgBgCIADABIgDgBIAAAAIADABIAHAFIALAIIAOAHIAPAHIAMAFIABAAIAAABQAIADAGAEIAFAEIAAAAIAIAFIAMAGQAAABAAAAQABAAAAAAQAAAAAAAAQAAAAABAAIAMAHIAOAIIAPAHIAOAHIAKAFIADABIAFADIAAAAIAEADIAJAGIANAJQAHAFAFAFIALALIAIAGIgDgBIAAAAIgBAAIAAAAIAAAAQgEAAgFACQgDACgDACIgFAHQgDAEAAAFIAAABIAAAAIAAAAIAAgBQAAgFADgEIAFgHQADgCADgCQAFgCAEAAIAAAAIAAAAIABAAIAAAAIADABQAFABgEAJQgFAHgGAFQgEADgFABIgEABQgEAAAAgEgAiihbQABADADABQgDgBgBgDIgBgCQAAgDACgCIAGgGIADgCIABAAIgBAAIgDACIgGAGQgCACAAADIABACgAg/g0IAAAAgAhMg9IAAAAgAhOg+IABgBIABACIgCgBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.4,-12.4,36.8,25);


(lib.Tween29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgRA1QgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgHAOghIgYguIgDgFIgCgFQAAgDACgCQABgBAAAAQABAAAAgBQABAAABAAQAAAAABAAQADAAACACQALAQANAeIAKgXIAKgWQADgDADAAQADAAACACQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAIgBAEIgXAyQgJATgEAMIgEANQgCAFgEAAQgDAAgCgCg");
	this.shape.setTransform(5.2,4.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgHAyIABgaIABgYIAAgYIAAgYQAAgIAGAAQAHAAAAAIIgBAYIAAAYIgBAhIAAARQgBAGgFABQgHgBAAgGg");
	this.shape_1.setTransform(-0.2,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgKA6QgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAIAAgCQABgIAAgLIAAgTIAAgSIgLAAQgHAAAAgGQAAgHAMAAIAHgBIABgKQACgPAGgHQAGgJAPAAQAKAAAAAHQAAAGgJAAQgRAAgCAXIAAAEIAPAAQALAAAAAGQAAAFgFABIgGABIgQABIAAAOIAAANIAAAMQAAANgBAIQAAAFgGAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_2.setTransform(-5.8,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.2,-11.7,22.5,23.6);


(lib.Tween22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


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


(lib.s4_s3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* gotoAndPlay(1);
		*/
	}
	this.frame_4 = function() {
		/* gotoAndPlay(1);
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(13));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgRBEIgCgEQAAgDAEgDIAGgFQAPgQAAgjQAAgMgEgOQgDgQgHgJIgHgGQgEgFAAgCQAAgBAAAAQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABgBQABAAAAAAIAFACQAMAKAIAVQAIATAAASQAAAzgcAQIgFACIgEgCg");
	this.shape.setTransform(168.5,-37.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgWAeQgLgJAAgPQAAgRAJgMQAJgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgMAEIgZANQAFAFAFADQAGADAHAAQAEAAAGgCQAIgCADgEQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAAHgMAGQgKAEgKAAQgPAAgJgHgAgOgRQgFAGgDAMIAVgJQAMgGAFgEQgGgGgKAAQgIAAgGAHg");
	this.shape_1.setTransform(162.1,-36.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgHAxIABgYIABgZIAAgYIAAgZQAAgGAGAAQAHAAAAAGIgBAZIAAAYIgBAiIAAAPQgBAIgFgBQgHABAAgIg");
	this.shape_2.setTransform(156.2,-38.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgZA4QgCgCAAgDIAAgcIAAgaIgBgbIgCgOQABgFACgDQACgEADAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAIAAACIAAAEQAGgEAFgCQAFgCAFAAQAOAAAHANQAEAJAAARQABANgJAKQgIAKgOAAQgGAAgIgCIAAAhQAAADgCACQgCABgDAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAAAAAgAgGgjIgJAHIABAgQAHACAHAAQAIAAAFgGQAEgEAAgJQAAgNgDgGQgDgGgGAAQgGAAgFADg");
	this.shape_3.setTransform(150.6,-35.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgGAxQgCgCAAgCIAAgNIAAgMIABgQIAAgPQAAgDACgCQACgCADAAQAAAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADIgBAPIgBAQIABAMIAAANQAAACgCACQgCACgCAAQgDAAgCgCgAgDglQgDgCAAgDQAAgEADgCQACgCACgBQAEABACACQACACAAAEQAAADgCACQgCACgEABQgCgBgCgCg");
	this.shape_4.setTransform(145,-38.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgTAeQgKgJAAgPQAAgNAKgPQAKgQAMAAQAHAAAIAEQALADgBAHQAAAAAAABQAAAAAAABQAAAAgBABQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgEgBIgDgDQgEgDgJAAQgGAAgHAMQgGAMAAAHQAAAKAGAFQAGAEAIAAQAEAAAFgCIAIgEIADgBQAAAAABAAQAAAAABAAQAAABABAAQABAAAAABQAAAAABABQAAABAAAAQAAABAAAAQABABAAAAQAAAGgLAEQgJAEgGABQgNAAgKgJg");
	this.shape_5.setTransform(139.3,-36.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgGAxQgCgCAAgCIAAgNIAAgMIABgQIAAgPQAAgDACgCQACgCADAAQAAAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADIgBAPIgBAQIABAMIAAANQAAACgCACQgCACgCAAQgDAAgCgCgAgDglQgDgCAAgDQAAgEADgCQACgCACgBQAEABACACQACACAAAEQAAADgCACQgCACgEABQgCgBgCgCg");
	this.shape_6.setTransform(133.9,-38.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgEAwQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIABgIIAAgIIgCgnIgPgBQgGgBAAgGQAAgDACgCQABAAAAgBQABAAAAgBQABAAAAAAQABAAABAAIAOABIAAgJIgBgJQAAAAAAgBQABAAAAgBQAAAAAAgBQABgBAAAAQACgCADAAQAFAAACAKIAAAGIAAAEIAAAEIAJgBIAKABQAEACAAAFQAAACgCACQgCACgDAAIgDAAIgEAAIgJABIABAnIAAADIAAAEQABAPgIAAQgCAAgCgCg");
	this.shape_7.setTransform(128.5,-37.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgaAfIAAgvIAAgGIABgHQAAgHAGAAQAGAAAAALQANgMAPAAQAGAAADAEQADAEAAAIIgBAFQAAAJgGAAQgGAAAAgHIAAgFIgBgGQgKACgGAFQgGAEgEAJIAAAkQAAAHgHAAQgGAAAAgHg");
	this.shape_8.setTransform(122,-36.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAWAjIgFgFIgLAFIgIACQgQAAgHgJQgHgJAAgRQAAgPAMgMQALgMAPAAQAGAAAHADQAJAEAAAFIgBAEIgBAJIAAANQgBAJACAFIAEAMIACAEIAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAIAAALQAAALAEAFQAEAGAIAAQAFAAAFgCIAHgGQgDgRAAgJIABgGIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_9.setTransform(114.9,-36.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgcA1QgCgCAAgDIAAgUIABgcIACgcIAAgJIABgKQABgGAFABIAHgBIAJgBQAMAAALAJQAMAKAAANQAAARgNAJQgLAJgQAAIgIgBIAAAkQAAADgCACQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABgBAAQAAAAgBgBQgBAAAAAAQgBAAAAAAQgBgBAAAAgAgOgoIgBAMIgBAcIAHAAQALAAAIgFQAIgGAAgLQAAgIgIgGQgHgEgIAAIgFAAIgEAAg");
	this.shape_10.setTransform(107.7,-38.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgEAwQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIABgIIAAgIIgCgnIgPgBQgGgBAAgGQAAgDACgCQABAAAAgBQABAAAAgBQABAAAAAAQABAAABAAIAOABIAAgJIgBgJQAAAAAAgBQAAAAABgBQAAAAAAgBQABgBAAAAQACgCADAAQAFAAACAKIAAAGIAAAEIAAAEIAJgBIAKABQAEACAAAFQAAACgCACQgCACgDAAIgDAAIgEAAIgJABIABAnIAAADIAAAEQABAPgIAAQgCAAgCgCg");
	this.shape_11.setTransform(96.5,-37.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgSAmQgLgDAAgIQAAgDACgBQACgCADAAQACAAAEADQABACAGAAIAIABQAEAAAFgBQAGgCAAgFQAAgIgNgEIgGgBQgJgCgEgDQgFgDAAgIQAAgOANgGIAMgFIANgEIAGgBQADAAACACQACACAAADIABAFIABAHQAAACgCACQgCACgDABQgEAAgBgDIgCgIIgQAFQgKAFAAAGIAEABQAPADAHAFQAMAGAAANQAAAMgKAFQgIAFgLAAQgJAAgIgDg");
	this.shape_12.setTransform(89.6,-37.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAWAjIgFgFIgLAFIgIACQgQAAgHgJQgHgJAAgRQAAgPAMgMQALgMAPAAQAGAAAHADQAJAEAAAFIgBAEIgBAJIAAANQgBAJACAFIAEAMIACAEIAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAIAAALQAAALAEAFQAEAGAIAAQAFAAAFgCIAHgGQgDgRAAgJIABgGIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_13.setTransform(82.8,-36.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgcA1QgCgCAAgDIAAgUIABgcIACgcIAAgJIABgKQABgGAFABIAHgBIAJgBQAMAAALAJQAMAKAAANQAAARgNAJQgLAJgQAAIgIgBIAAAkQAAADgCACQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABgBAAQAAAAgBgBQgBAAAAAAQgBAAAAAAQgBgBAAAAgAgOgoIgBAMIgBAcIAHAAQALAAAIgFQAIgGAAgLQAAgIgIgGQgHgEgIAAIgFAAIgEAAg");
	this.shape_14.setTransform(75.7,-38.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAJBEQgcgQAAgzQAAgSAHgTQAJgVAMgKIAFgCQAAAAABAAQABABAAAAQABAAAAAAQAAABABAAQAAABABAAQAAABAAAAQABABAAABQAAAAAAABQAAACgEAFIgHAGQgHAJgEAQQgDAOAAAMQAAAjAOAQIAHAFQAEADAAADQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQgBAAAAAAIgFgCg");
	this.shape_15.setTransform(69.6,-37.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgFAGQgCgDAAgDQAAgDACgCQACgCADgBQADABADACQACACAAADQAAADgCADQgDADgDgBQgDABgCgDg");
	this.shape_16.setTransform(56.7,-33.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgaAfIAAgvIAAgGIABgHQAAgHAGAAQAGAAAAALQANgMAPAAQAGAAADAEQADAEAAAIIgBAFQAAAJgGAAQgGAAAAgHIAAgFIgBgGQgKACgGAFQgGAEgEAJIAAAkQAAAHgHAAQgGAAAAgHg");
	this.shape_17.setTransform(51.8,-36.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgXAeQgKgJAAgPQAAgRAIgMQAKgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgMAEIgYANQAEAFAFADQAGADAGAAQAFAAAGgCQAJgCACgEQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAAAQABABAAABQAAAAAAABQAAAHgMAGQgKAEgLAAQgOAAgKgHgAgOgRQgFAGgDAMIAWgJQALgGAFgEQgGgGgKAAQgIAAgGAHg");
	this.shape_18.setTransform(44.5,-36.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AATA0IgDgQIgBgQIAAgGIAAgFQAAgMgHAAQgIAAgGAHQgEAEgGALQAAAagCAFQgCAEgEAAQgDAAgCgCQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIABgDIABgKIAAgKIAAgyIAAgLIAAgHIgBgGQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAGAAABAGIABAMIgBAPIAAAPIAAAGQAFgHAHgEQAFgEAHAAQAMAAAEAIQADAFAAALIABANIABAOIADAOIAAACQAAADgCACQgCACgDAAQgFAAgBgFg");
	this.shape_19.setTransform(36.6,-38.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgSAeQgLgJABgPQAAgNAJgPQAKgQAMAAQAGAAAJAEQAKADAAAHQAAAAAAABQAAAAAAABQAAAAgBABQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgEgBIgDgDQgEgDgJAAQgGAAgHAMQgGAMAAAHQAAAKAGAFQAGAEAIAAQAEAAAEgCIAIgEIAEgBQAAAAABAAQAAAAABAAQAAABABAAQABAAAAABQAAAAABABQAAABAAAAQAAABAAAAQAAABAAAAQAAAGgKAEQgJAEgGABQgNAAgJgJg");
	this.shape_20.setTransform(28.9,-36.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgEAwQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIABgIIAAgIIgCgnIgPgBQgGgBAAgGQAAgDACgCQABAAAAgBQABAAAAgBQABAAAAAAQABAAABAAIAOABIAAgJIgBgJQAAAAAAgBQABAAAAgBQAAAAAAgBQABgBAAAAQACgCADAAQAFAAACAKIAAAGIAAAEIAAAEIAJgBIAKABQAEACAAAFQAAACgCACQgCACgDAAIgDAAIgEAAIgJABIABAnIAAADIAAAEQABAPgIAAQgCAAgCgCg");
	this.shape_21.setTransform(21.9,-37.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgGAxQgCgCAAgCIAAgNIAAgMIABgQIAAgPQAAgDACgCQACgCADAAQAAAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADIgBAPIgBAQIABAMIAAANQAAACgCACQgCACgCAAQgDAAgCgCgAgDglQgDgCAAgDQAAgEADgCQACgCACgBQAEABACACQACACAAAEQAAADgCACQgCACgEABQgCgBgCgCg");
	this.shape_22.setTransform(16.8,-38.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgaA4QgCgCAAgDIAAgcIAAgaIgBgbIAAgOQAAgFABgDQACgEAFAAQAAAAABAAQAAAAABAAQAAABABAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAIAAACIAAAEQAGgEAGgCQAEgCAFAAQAOAAAGANQAFAJABARQgBANgHAKQgJAKgOAAQgGAAgIgCIAAAhQAAADgCACQgCABgDAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAgAgFgjIgJAHIAAAgQAIACAGAAQAIAAAFgGQAEgEAAgJQAAgNgDgGQgDgGgGAAQgFAAgFADg");
	this.shape_23.setTransform(11.1,-35.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgWAeQgLgJAAgPQAAgRAIgMQAKgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgLAEIgZANQADAFAGADQAGADAGAAQAFAAAHgCQAHgCADgEQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAABAAQAAABAAABQAAAAAAABQAAAHgMAGQgLAEgKAAQgOAAgJgHgAgNgRQgGAGgCAMIAUgJQAMgGAFgEQgGgGgKAAQgIAAgFAHg");
	this.shape_24.setTransform(-0.6,-36.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AATA0IgDgQIgBgQIAAgGIAAgFQAAgMgHAAQgIAAgGAHQgEAEgGALQAAAagCAFQgCAEgEAAQgDAAgCgCQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIABgDIABgKIAAgKIAAgyIAAgLIAAgHIgBgGQAAgBAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAGAAABAGIABAMIgBAPIAAAPIAAAGQAFgHAHgEQAFgEAHAAQAMAAAEAIQADAFAAALIABANIABAOIADAOIAAACQAAADgCACQgCACgDAAQgFAAgBgFg");
	this.shape_25.setTransform(-8.6,-38.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgEAwQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIABgIIAAgIIgCgnIgPgBQgGgBAAgGQAAgDACgCQABAAAAgBQABAAAAgBQABAAAAAAQABAAABAAIAOABIAAgJIgBgJQAAAAAAgBQAAAAABgBQAAAAAAgBQABgBAAAAQACgCADAAQAFAAACAKIAAAGIAAAEIAAAEIAJgBIAKABQAEACAAAFQAAACgCACQgCACgDAAIgDAAIgEAAIgJABIABAnIAAADIAAAEQABAPgIAAQgCAAgCgCg");
	this.shape_26.setTransform(-16,-37.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgEAwQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIABgIIAAgIIgCgnIgPgBQgGgBAAgGQAAgDACgCQABAAAAgBQABAAAAgBQABAAAAAAQABAAABAAIAOABIAAgJIgBgJQAAAAAAgBQAAAAABgBQAAAAAAgBQABgBAAAAQACgCADAAQAFAAACAKIAAAGIAAAEIAAAEIAJgBIAKABQAEACAAAFQAAACgCACQgCACgDAAIgDAAIgEAAIgJABIABAnIAAADIAAAEQABAPgIAAQgCAAgCgCg");
	this.shape_27.setTransform(-26.8,-37.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgSAmQgLgDAAgIQAAgDACgBQACgCADAAQACAAAEADQABACAGAAIAIABQAEAAAFgBQAGgCAAgFQAAgIgNgEIgGgBQgJgCgEgDQgFgDAAgIQAAgOANgGIAMgFIANgEIAGgBQADAAACACQACACAAADIABAFIABAHQAAACgCACQgCACgDABQgEAAgBgDIgCgIIgQAFQgKAFAAAGIAEABQAPADAHAFQAMAGAAANQAAAMgKAFQgIAFgLAAQgJAAgIgDg");
	this.shape_28.setTransform(-33.7,-37.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAWAjIgFgFIgLAFIgIACQgQAAgHgJQgHgJAAgRQAAgPAMgMQALgMAPAAQAGAAAHADQAJAEAAAFIgBAEIgBAJIAAANQgBAJACAFIAEAMIACAEIAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAIAAALQAAALAEAFQAEAGAIAAQAFAAAFgCIAHgGQgDgRAAgJIABgGIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_29.setTransform(-40.5,-36.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgaA4QgBgCAAgDIAAgcIAAgaIgBgbIgBgOQAAgFACgDQABgEAEAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAIAAACIAAAEQAGgEAFgCQAFgCAFAAQAOAAAHANQAEAJAAARQAAANgIAKQgIAKgOAAQgGAAgIgCIAAAhQAAADgCACQgCABgDAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAgAgGgjIgJAHIABAgQAHACAHAAQAJAAAEgGQAEgEAAgJQAAgNgDgGQgDgGgGAAQgFAAgGADg");
	this.shape_30.setTransform(-47.7,-35.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AARAhIgCgPIgBgPIAAgFIAAgHQAAgPgFAAQgIAAgGAKQgGAIgEALIAAAHIgBAHIABAGIAAAGQAAADgCACQgCACgDAAQgDAAgCgCQgBgCAAgDIgBgGIAAgGIABgTIABgTIAAgHIgBgGQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAGAAABAJIAAAIQAMgPALAAQALAAAEAJQADAHAAAMIAAAHIAAAGIACAOIABAPQAAADgCACQgCACgDAAQgGAAAAgHg");
	this.shape_31.setTransform(-59.3,-36.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAFAUIgEgQIgBgOIgGAMIgKAcIgCAEQgDAEgEAAQgFAAgFgUIgFgcIgCgKIgBgLQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQADgCACAAQAGAAABAFIACAKIAAAKIAEAeQAIgUAIgcQACgHAFAAQAGAAACAIIAEAZIAFAaIAEgTIAJgkQACgEAEAAQAEAAACACQAAAAAAABQABAAAAABQAAAAAAABQABABAAAAIgBAEIgOAxQgCAGgEAHQgDADgEAAQgHAAgEgSg");
	this.shape_32.setTransform(-67.9,-36.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgTAdQgKgKAAgPQAAgPAIgLQAJgOAQgBQAOAAAHANQAGAKgBAOQAAAOgHALQgJAMgOAAQgLABgIgJgAgLgNQgFAIAAAJQAAAJAGAGQAEAEAGABQAGAAAGgGQAFgFABgKQABgZgQAAQgJgBgFAKg");
	this.shape_33.setTransform(-76.5,-36.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgHAxIABgYIABgZIAAgYIAAgZQAAgGAGAAQAHAAAAAGIgBAZIAAAYIgBAiIAAAPQgBAIgFgBQgHABAAgIg");
	this.shape_34.setTransform(-82,-38.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgKA6QgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAgCQABgIAAgLIAAgTIAAgSIgLAAQgHAAAAgGQAAgHAMAAIAHgBIABgKQACgPAGgHQAGgJAPAAQAKAAAAAHQAAAGgJAAQgRAAgCAXIAAAEIAPAAQALAAAAAGQAAAFgFABIgGABIgQABIAAAOIAAANIAAAMQAAANgBAIQAAAFgGAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_35.setTransform(-87.6,-38.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgSAmQgLgDAAgIQAAgDACgBQACgCADAAQACAAAEADQABACAGAAIAIABQAEAAAFgBQAGgCAAgFQAAgIgNgEIgGgBQgJgCgEgDQgFgDAAgIQAAgOANgGIAMgFIANgEIAGgBQADAAACACQACACAAADIABAFIABAHQAAACgCACQgCACgDABQgEAAgBgDIgCgIIgQAFQgKAFAAAGIAEABQAPADAHAFQAMAGAAANQAAAMgKAFQgIAFgLAAQgJAAgIgDg");
	this.shape_36.setTransform(-98.8,-37.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAWAjIgFgFIgLAFIgIACQgQAAgHgJQgHgJAAgRQAAgPAMgMQALgMAPAAQAGAAAHADQAJAEAAAFIgBAEIgBAJIAAANQgBAJACAFIAEAMIACAEIAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAIAAALQAAALAEAFQAEAGAIAAQAFAAAFgCIAHgGQgDgRAAgJIABgGIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_37.setTransform(-105.6,-36.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AATA0IgDgQIgBgQIAAgGIAAgFQAAgMgHAAQgIAAgGAHQgEAEgGALQAAAagCAFQgCAEgEAAQgDAAgCgCQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAAAIABgDIABgKIAAgKIAAgyIAAgLIAAgHIgBgGQAAgBAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAGAAABAGIABAMIgBAPIAAAPIAAAGQAFgHAHgEQAFgEAHAAQAMAAAEAIQADAFAAALIABANIABAOIADAOIAAACQAAADgCACQgCACgDAAQgFAAgBgFg");
	this.shape_38.setTransform(-113.1,-38.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgEAwQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIABgIIAAgIIgCgnIgPgBQgGgBAAgGQAAgDACgCQABAAAAgBQABAAAAgBQABAAAAAAQABAAABAAIAOABIAAgJIgBgJQAAAAAAgBQABAAAAgBQAAAAAAgBQABgBAAAAQACgCADAAQAFAAACAKIAAAGIAAAEIAAAEIAJgBIAKABQAEACAAAFQAAACgCACQgCACgDAAIgDAAIgEAAIgJABIABAnIAAADIAAAEQABAPgIAAQgCAAgCgCg");
	this.shape_39.setTransform(-124.8,-37.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAWAjIgFgFIgLAFIgIACQgQAAgHgJQgHgJAAgRQAAgPAMgMQALgMAPAAQAGAAAHADQAJAEAAAFIgBAEIgBAJIAAANQgBAJACAFIAEAMIACAEIAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAIAAALQAAALAEAFQAEAGAIAAQAFAAAFgCIAHgGQgDgRAAgJIABgGIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_40.setTransform(-131.6,-36.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgUAzQgCADgDAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBgCgBgDIAAgFIAAgGIAAgVIAAgVIAAgTIAAgTQAAgEACgDQACgEAEAAQAFAAAAAGIAAACIAAADIAAAPIgBASQAGgEAGgCQAFgDAEAAQAOAAAKAMQAIAJAAAQQAAAPgKALQgKALgOAAQgKAAgJgEgAgKgCIgKAFIAAAMIAAALIAAALIAKAEQAEABAFAAQAJAAAGgHQAGgHAAgKQAAgKgEgHQgGgHgJAAQgFAAgGAEg");
	this.shape_41.setTransform(-139.2,-38.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AARAhIgCgPIgBgPIAAgFIAAgHQAAgPgFAAQgIAAgGAKQgGAIgEALIAAAHIgBAHIABAGIAAAGQAAADgCACQgCACgDAAQgDAAgCgCQgBgCAAgDIgBgGIAAgGIABgTIABgTIAAgHIgBgGQAAgBAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAGAAABAJIAAAIQAMgPALAAQALAAAEAJQADAHAAAMIAAAHIAAAGIACAOIABAPQAAADgCACQgCACgDAAQgGAAAAgHg");
	this.shape_42.setTransform(-151.2,-36.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgXAeQgKgJAAgPQAAgRAJgMQAJgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgMAEIgZANQAFAFAFADQAGADAHAAQAEAAAGgCQAIgCADgEQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAAHgMAGQgKAEgKAAQgPAAgKgHgAgOgRQgFAGgDAMIAVgJQAMgGAFgEQgGgGgKAAQgIAAgGAHg");
	this.shape_43.setTransform(-158.7,-36.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AASA0QgDgHgHgJIgLgRIgNAJIgBAVQAAADgBACQgCACgDAAQgHAAAAgKIABgRIAAgRIABgWIAAgYIAAgHIgBgHQAAgEACgBQACgCADAAQADAAACACQACABAAAEIAAAHIABAHIgBAWIAAAXQAJgHAIgHIAPgQQACgCADAAQACAAADACQACACAAADQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQgJAKgMAKIAPAVQAKAOAAAEQAAADgCACQgCACgDAAQgEAAgCgEg");
	this.shape_44.setTransform(-166.1,-38.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgTAdQgKgKAAgPQAAgPAIgLQAJgOAQgBQAOAAAHANQAGAKgBAOQAAAOgHALQgJAMgOAAQgLABgIgJgAgLgNQgFAIAAAJQAAAJAGAGQAEAEAGABQAGAAAGgGQAFgFABgKQABgZgQAAQgJgBgFAKg");
	this.shape_45.setTransform(-174.1,-36.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgaAfIAAgvIAAgGIABgHQAAgHAGAAQAGAAAAALQANgMAPAAQAGAAADAEQADAEAAAIIgBAFQAAAJgGAAQgGAAAAgHIAAgFIgBgGQgKACgGAFQgGAEgEAJIAAAkQAAAHgHAAQgGAAAAgHg");
	this.shape_46.setTransform(-180.8,-36.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgUAzQgCADgDAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBgCgBgDIAAgFIAAgGIAAgVIAAgVIAAgTIAAgTQAAgEACgDQACgEAEAAQAFAAAAAGIAAACIgBADIAAAPIAAASQAGgEAGgCQAFgDAEAAQAOAAAJAMQAJAJAAAQQAAAPgKALQgKALgOAAQgKAAgJgEgAgKgCIgKAFIAAAMIAAALIAAALIAJAEQAFABAFAAQAJAAAGgHQAGgHAAgKQABgKgGgHQgFgHgJAAQgFAAgGAEg");
	this.shape_47.setTransform(-188.3,-38.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgWAeQgLgJAAgPQAAgRAIgMQAKgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgLAEIgZANQAEAFAFADQAGADAGAAQAFAAAHgCQAHgCADgEQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAAAQABABAAABQAAAAAAABQAAAHgMAGQgLAEgKAAQgOAAgJgHgAgNgRQgGAGgCAMIAUgJQAMgGAFgEQgGgGgKAAQgIAAgFAHg");
	this.shape_48.setTransform(-200.5,-36.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AATA0IgDgQIgBgQIAAgGIAAgFQAAgMgHAAQgIAAgGAHQgEAEgGALQAAAagCAFQgCAEgEAAQgDAAgCgCQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIABgDIABgKIAAgKIAAgyIAAgLIAAgHIgBgGQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAGAAABAGIABAMIgBAPIAAAPIAAAGQAFgHAHgEQAFgEAHAAQAMAAAEAIQADAFAAALIABANIABAOIADAOIAAACQAAADgCACQgCACgDAAQgFAAgBgFg");
	this.shape_49.setTransform(-208.5,-38.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgEAyQgCgCAAgDIAAgDIAAgDIAAgKIgBgKIgBgaIgCgcIgGAAQgPAAgIgCQgGgBAAgGQAAgDABgCQADgCADAAIALABIALABIANAAIALAAIAQABIAPAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIgPAAIgQgBIgFAAIACAfIACAdIAAAHIAAAIQAAAEgBAEQgCAEgEAAQgCAAgCgCg");
	this.shape_50.setTransform(-216.7,-38.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF0000").s().p("AARAhIgCgPIgBgPIAAgFIAAgHQAAgPgFAAQgIAAgGAKQgGAIgEALIAAAHIgBAHIABAGIAAAGQAAADgCACQgCACgDAAQgDAAgCgCQgBgCAAgDIgBgGIAAgGIABgTIABgTIAAgHIgBgGQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAGAAABAJIAAAIQAMgPALAAQALAAAEAJQADAHAAAMIAAAHIAAAGIACAOIABAPQAAADgCACQgCACgDAAQgGAAAAgHg");
	this.shape_51.setTransform(-59.3,-36.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF0000").s().p("AAFAUIgEgQIgBgOIgGAMIgKAcIgCAEQgDAEgEAAQgFAAgFgUIgFgcIgCgKIgBgLQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQADgCACAAQAGAAABAFIACAKIAAAKIAEAeQAIgUAIgcQACgHAFAAQAGAAACAIIAEAZIAFAaIAEgTIAJgkQACgEAEAAQAEAAACACQAAAAAAABQABAAAAABQAAAAAAABQABABAAAAIgBAEIgOAxQgCAGgEAHQgDADgEAAQgHAAgEgSg");
	this.shape_52.setTransform(-67.9,-36.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF0000").s().p("AgTAdQgKgKAAgPQAAgPAIgLQAJgOAQgBQAOAAAHANQAGAKgBAOQAAAOgHALQgJAMgOAAQgLABgIgJgAgLgNQgFAIAAAJQAAAJAGAGQAEAEAGABQAGAAAGgGQAFgFABgKQABgZgQAAQgJgBgFAKg");
	this.shape_53.setTransform(-76.5,-36.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FF0000").s().p("AgHAxIABgYIABgZIAAgYIAAgZQAAgGAGAAQAHAAAAAGIgBAZIAAAYIgBAiIAAAPQgBAIgFgBQgHABAAgIg");
	this.shape_54.setTransform(-82,-38.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF0000").s().p("AgKA6QgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAgCQABgIAAgLIAAgTIAAgSIgLAAQgHAAAAgGQAAgHAMAAIAHgBIABgKQACgPAGgHQAGgJAPAAQAKAAAAAHQAAAGgJAAQgRAAgCAXIAAAEIAPAAQALAAAAAGQAAAFgFABIgGABIgQABIAAAOIAAANIAAAMQAAANgBAIQAAAFgGAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_55.setTransform(-87.6,-38.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FF0000").s().p("AgSAmQgLgDAAgIQAAgDACgBQACgCADAAQACAAAEADQABACAGAAIAIABQAEAAAFgBQAGgCAAgFQAAgIgNgEIgGgBQgJgCgEgDQgFgDAAgIQAAgOANgGIAMgFIANgEIAGgBQADAAACACQACACAAADIABAFIABAHQAAACgCACQgCACgDABQgEAAgBgDIgCgIIgQAFQgKAFAAAGIAEABQAPADAHAFQAMAGAAANQAAAMgKAFQgIAFgLAAQgJAAgIgDg");
	this.shape_56.setTransform(-98.8,-37.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FF0000").s().p("AAWAjIgFgFIgLAFIgIACQgQAAgHgJQgHgJAAgRQAAgPAMgMQALgMAPAAQAGAAAHADQAJAEAAAFIgBAEIgBAJIAAANQgBAJACAFIAEAMIACAEIAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAIAAALQAAALAEAFQAEAGAIAAQAFAAAFgCIAHgGQgDgRAAgJIABgGIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_57.setTransform(-105.6,-36.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FF0000").s().p("AATA0IgDgQIgBgQIAAgGIAAgFQAAgMgHAAQgIAAgGAHQgEAEgGALQAAAagCAFQgCAEgEAAQgDAAgCgCQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAAAIABgDIABgKIAAgKIAAgyIAAgLIAAgHIgBgGQAAgBAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAGAAABAGIABAMIgBAPIAAAPIAAAGQAFgHAHgEQAFgEAHAAQAMAAAEAIQADAFAAALIABANIABAOIADAOIAAACQAAADgCACQgCACgDAAQgFAAgBgFg");
	this.shape_58.setTransform(-113.1,-38.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37,p:{x:-105.6}},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33,p:{x:-76.5}},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_33,p:{x:-174.1}},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_37,p:{x:-131.6}},{t:this.shape_39},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37,p:{x:-105.6}},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33,p:{x:-76.5}},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-224.2,-50.8,397.2,23.6);


(lib.s4_s2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		/* gotoAndPlay(1);
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(13));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgRBEIgCgEQAAgDAEgDIAGgFQAPgQAAgjQAAgMgEgOQgDgQgHgJIgHgGQgEgFAAgCQAAgBAAAAQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAgBABAAQABAAAAAAIAFACQAMAKAIAVQAIATAAASQAAAzgcAQIgFACIgEgCg");
	this.shape.setTransform(50.2,-30.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgEAwQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAgBIABgHIAAgIIgCgnIgPgBQgGgBAAgGQAAgDACgCQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAIAOACIAAgKIgBgIQAAgBAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQACgCADAAQAFAAACAKIAAAGIAAAEIAAAFIAJgCIAKABQAEABAAAFQAAAEgCABQgCACgDAAIgDAAIgEAAIgJABIABAoIAAACIAAAEQABAPgIAAQgCAAgCgCg");
	this.shape_1.setTransform(44.1,-30.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgSAmQgLgDAAgIQAAgCACgCQACgDADAAQACAAAEAEQABABAGABIAIABQAEABAFgCQAGgCAAgFQAAgIgNgEIgGgBQgJgCgEgDQgFgDAAgHQAAgPANgGIAMgFIANgEIAGgBQADAAACACQACACAAADIABAGIABAGQAAADgCABQgCACgDAAQgEAAgBgCIgCgIIgQAFQgKAFAAAGIAEABQAPADAHAFQAMAGAAANQAAAMgKAFQgIAFgLAAQgJAAgIgDg");
	this.shape_2.setTransform(37.3,-30.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAWAjIgFgFIgLAGIgIABQgQAAgHgJQgHgJAAgRQAAgQAMgLQALgMAPAAQAGAAAHADQAJAEAAAFIgBADIgBAJIAAAOQgBAJACAFIAEAMIACADIAAABQAAABAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBABQAAAAgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAIAAALQAAALAEAFQAEAGAIAAQAFAAAFgCIAHgFQgDgSAAgIIABgHIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_3.setTransform(30.5,-29.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgcA1QgCgCAAgDIAAgUIABgcIACgcIAAgJIABgKQABgGAFABIAHgBIAJgBQAMAAALAJQAMAJAAAOQAAARgNAJQgLAJgQAAIgIgBIAAAkQAAADgCACQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAgAgOgoIgBAMIgBAcIAHAAQALAAAIgFQAIgGAAgLQAAgIgIgGQgHgEgIAAIgFAAIgEAAg");
	this.shape_4.setTransform(23.3,-31.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAJBEQgcgQAAgzQAAgSAHgTQAJgVAMgKIAFgCQAAAAABAAQABAAAAABQABAAAAAAQAAABABAAQAAABABAAQAAABAAAAQAAABABABQAAAAAAABQAAACgEAFIgHAGQgHAJgEAQQgDAOAAAMQAAAjAOAQIAHAFQAEADAAADQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQgBAAAAAAIgFgCg");
	this.shape_5.setTransform(17.2,-30.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgFAGQgCgCAAgEQAAgDACgCQACgCADgBQADABADACQACACAAADQAAAEgCACQgDACgDABQgDgBgCgCg");
	this.shape_6.setTransform(4.4,-26.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgWAeQgLgJAAgPQAAgRAIgMQAKgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgLAEIgZANQADAFAGADQAGADAGAAQAFAAAHgCQAHgCADgEQACgDADAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAAAQABABAAABQAAAAAAABQAAAHgMAGQgLAEgKAAQgOAAgJgHgAgNgRQgGAGgCAMIAUgJQAMgGAFgEQgGgGgKAAQgIAAgFAHg");
	this.shape_7.setTransform(-1.1,-29.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgEAwQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAgBIABgHIAAgIIgCgnIgPgBQgGgBAAgGQAAgDACgCQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAIAOACIAAgKIgBgIQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQACgCADAAQAFAAACAKIAAAGIAAAEIAAAFIAJgCIAKABQAEABAAAFQAAAEgCABQgCACgDAAIgDAAIgEAAIgJABIABAoIAAACIAAAEQABAPgIAAQgCAAgCgCg");
	this.shape_8.setTransform(-8.4,-30.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAWAjIgFgFIgLAGIgIABQgQAAgHgJQgHgJAAgRQAAgQAMgLQALgMAPAAQAGAAAHADQAJAEAAAFIgBADIgBAJIAAAOQgBAJACAFIAEAMIACADIAAABQAAABAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBABQAAAAgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAIAAALQAAALAEAFQAEAGAIAAQAFAAAFgCIAHgFQgDgSAAgIIABgHIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_9.setTransform(-15.2,-29.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgHAxIABgZIABgYIAAgYIAAgZQAAgGAGgBQAHABAAAGIgBAZIAAAYIgBAhIAAAQQgBAIgFgBQgHABAAgIg");
	this.shape_10.setTransform(-20.7,-31.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgZA4QgCgCAAgDIAAgcIAAgaIgCgbIgBgOQAAgFADgDQACgEADAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABQABABAAAAIAAACIgBAEQAGgEAFgCQAFgCAFAAQAOAAAHANQAEAJAAARQABANgJAKQgIAKgOAAQgGAAgIgCIAAAhQAAADgCACQgCABgDAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAAAAAgAgGgjIgJAHIABAgQAIACAGAAQAIAAAFgGQAEgEAAgJQAAgNgDgGQgDgGgGAAQgGAAgFADg");
	this.shape_11.setTransform(-26.3,-28.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgXAeQgKgJAAgPQAAgRAJgMQAJgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgMAEIgZANQAEAFAGADQAGADAHAAQAEAAAGgCQAJgCACgEQACgDADAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAAHgMAGQgKAEgKAAQgPAAgKgHgAgOgRQgFAGgDAMIAWgJQALgGAFgEQgGgGgKAAQgIAAgGAHg");
	this.shape_12.setTransform(-38,-29.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgDAoQgCgCAAgDIgCgYIgBgYQAAgHgCgEQgFACgFAFIgIAJIgEAFIAAALIgBAMIABAFIAAAGQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQgCACgDAAQgHAAAAgRIAAgNIABgLIgBgLIAAgLQAAgPAHAAQACAAADACQACADAAACIgBAEIAAAEIAAAIQAEgIAHgGQAHgGAEAAQALAAADALQAEgFAFgCQAFgDAHAAQAMAAAEAMIACAUIAFAmQABADgCACQgCABgDAAQgGAAgBgGIgCgVIgDgUQAAgFgCgEQgCgGgDAAQgDAAgHAEQgGAEgCACIAAANIACARIABASQAAADgBACQgCACgDAAQgCAAgCgCg");
	this.shape_13.setTransform(-47.4,-29.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgTAdQgKgJAAgRQAAgOAIgMQAJgOAQABQAOAAAHAMQAGAKgBAOQAAAOgHAMQgJAMgOgBQgLAAgIgIgAgLgNQgFAIAAAIQAAAKAGAGQAEAFAGAAQAGgBAGgFQAFgFABgKQABgagQAAQgJAAgFAKg");
	this.shape_14.setTransform(-56.7,-29.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AATA0IgDgQIgBgQIAAgGIAAgFQAAgMgHAAQgIAAgGAHQgEAEgGALQAAAagCAFQgCAEgEAAQgDAAgCgCQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIABgDIABgKIAAgKIAAgyIAAgLIAAgHIgBgGQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAGAAABAGIABAMIgBAPIAAAPIAAAGQAFgHAHgEQAFgEAHAAQAMAAAEAIQADAFAAALIABANIABAOIADAOIAAACQAAADgCACQgCACgDAAQgFAAgBgFg");
	this.shape_15.setTransform(-64.2,-31.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgSAmQgLgDAAgIQAAgCACgCQACgDADAAQACAAAEAEQABABAGABIAIABQAEABAFgCQAGgCAAgFQAAgIgNgEIgGgBQgJgCgEgDQgFgDAAgHQAAgPANgGIAMgFIANgEIAGgBQADAAACACQACACAAADIABAGIABAGQAAADgCABQgCACgDAAQgEAAgBgCIgCgIIgQAFQgKAFAAAGIAEABQAPADAHAFQAMAGAAANQAAAMgKAFQgIAFgLAAQgJAAgIgDg");
	this.shape_16.setTransform(-76.1,-30.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgSAmQgLgDAAgIQAAgCACgCQACgDADAAQACAAAEAEQABABAGABIAIABQAEABAFgCQAGgCAAgFQAAgIgNgEIgGgBQgJgCgEgDQgFgDAAgHQAAgPANgGIAMgFIANgEIAGgBQADAAACACQACACAAADIABAGIABAGQAAADgCABQgCACgDAAQgEAAgBgCIgCgIIgQAFQgKAFAAAGIAEABQAPADAHAFQAMAGAAANQAAAMgKAFQgIAFgLAAQgJAAgIgDg");
	this.shape_17.setTransform(-82.9,-30.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgTAdQgKgJAAgRQAAgOAIgMQAJgOAQABQAOAAAHAMQAGAKgBAOQAAAOgHAMQgJAMgOgBQgLAAgIgIgAgLgNQgFAIAAAIQAAAKAGAGQAEAFAGAAQAGgBAGgFQAFgFABgKQABgagQAAQgJAAgFAKg");
	this.shape_18.setTransform(-90,-29.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgaAfIAAgvIAAgGIABgHQAAgHAGAAQAGAAAAALQANgMAPAAQAGAAADAEQADAEAAAIIgBAFQAAAJgGAAQgGAAAAgHIAAgFIgBgGQgKACgGAFQgGAEgEAJIAAAkQAAAHgHAAQgGAAAAgHg");
	this.shape_19.setTransform(-96.7,-29.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgTAeQgJgJgBgPQAAgNAKgOQAKgQAMgBQAGAAAJADQALAFAAAGQAAAAgBABQAAAAAAABQAAAAgBABQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgDgBIgDgCQgEgEgJAAQgGAAgHANQgGALAAAHQAAAJAGAGQAGAEAIAAQAEAAAEgCIAJgEIACgBQABAAABAAQAAAAABABQAAAAABAAQAAAAABABQAAAAABABQAAABAAAAQAAABAAAAQABABAAAAQAAAFgLAFQgJAFgGAAQgNAAgKgJg");
	this.shape_20.setTransform(-103.8,-29.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAWAjIgFgFIgLAGIgIABQgQAAgHgJQgHgJAAgRQAAgQAMgLQALgMAPAAQAGAAAHADQAJAEAAAFIgBADIgBAJIAAAOQgBAJACAFIAEAMIACADIAAABQAAABAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBABQAAAAgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAIAAALQAAALAEAFQAEAGAIAAQAFAAAFgCIAHgFQgDgSAAgIIABgHIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_21.setTransform(-111,-29.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAFAUIgEgQIgBgOIgGAMIgKAcIgCAEQgDAEgEAAQgFAAgFgUIgFgcIgCgKIgBgLQAAAAABgBQAAgBAAAAQAAgBABAAQAAgBABAAQACgCACAAQAGAAABAFIABAKIABAKIAFAeIAPgwQACgHAFAAQAFAAACAIIAFAZIAEAaIAGgTIAJgkQABgEAEAAQADAAADACQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAIAAAEIgOAxQgCAGgEAHQgDADgEAAQgHAAgEgSg");
	this.shape_22.setTransform(-123.6,-29.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgXAeQgKgJAAgPQAAgRAJgMQAJgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgMAEIgZANQAEAFAGADQAGADAHAAQAEAAAGgCQAJgCACgEQACgDADAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAAHgMAGQgKAEgKAAQgPAAgKgHgAgOgRQgFAGgDAMIAWgJQALgGAFgEQgGgGgKAAQgIAAgGAHg");
	this.shape_23.setTransform(-132.1,-29.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgHAxIABgZIABgYIAAgYIAAgZQAAgGAGgBQAHABAAAGIgBAZIAAAYIgBAhIAAAQQgBAIgFgBQgHABAAgIg");
	this.shape_24.setTransform(-138,-31.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgKA6QgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAgCQABgIAAgLIAAgTIAAgSIgLAAQgHAAAAgGQAAgHAMAAIAHgBIABgKQACgPAGgHQAGgJAPAAQAKAAAAAHQAAAGgJAAQgRAAgCAXIAAAEIAPAAQALAAAAAGQAAAFgFABIgGABIgQABIAAAOIAAANIAAAMQAAANgBAIQAAAFgGAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_25.setTransform(-143.6,-31.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgEAwQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAgBIABgHIAAgIIgCgnIgPgBQgGgBAAgGQAAgDACgCQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAIAOACIAAgKIgBgIQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQACgCADAAQAFAAACAKIAAAGIAAAEIAAAFIAJgCIAKABQAEABAAAFQAAAEgCABQgCACgDAAIgDAAIgEAAIgJABIABAoIAAACIAAAEQABAPgIAAQgCAAgCgCg");
	this.shape_26.setTransform(-154.5,-30.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAWAjIgFgFIgLAGIgIABQgQAAgHgJQgHgJAAgRQAAgQAMgLQALgMAPAAQAGAAAHADQAJAEAAAFIgBADIgBAJIAAAOQgBAJACAFIAEAMIACADIAAABQAAABAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBABQAAAAgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAIAAALQAAALAEAFQAEAGAIAAQAFAAAFgCIAHgFQgDgSAAgIIABgHIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_27.setTransform(-161.4,-29.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgUAzQgCADgEAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQgBAAAAAAQgBgCAAgDIAAgFIAAgGIAAgVIgBgVIAAgTIAAgTQAAgEACgDQACgEAEAAQAFAAAAAGIAAACIgBADIAAAPIAAASQAGgEAFgCQAGgDADAAQAPAAAJAMQAJAJAAAQQAAAPgKALQgKALgOAAQgKAAgJgEgAgKgCIgKAFIAAAMIAAALIAAALIAJAEQAEABAGAAQAJAAAGgHQAHgHAAgKQgBgKgFgHQgFgHgKAAQgEAAgGAEg");
	this.shape_28.setTransform(-168.9,-31.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgHAxIABgZIABgYIAAgYIAAgZQAAgGAGgBQAHABAAAGIgBAZIAAAYIgBAhIAAAQQgBAIgFgBQgHABAAgIg");
	this.shape_29.setTransform(-179.4,-31.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgHAxIABgZIABgYIAAgYIAAgZQAAgGAGgBQAHABAAAGIgBAZIAAAYIgBAhIAAAQQgBAIgFgBQgHABAAgIg");
	this.shape_30.setTransform(-183.2,-31.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAWAjIgFgFIgLAGIgIABQgQAAgHgJQgHgJAAgRQAAgQAMgLQALgMAPAAQAGAAAHADQAJAEAAAFIgBADIgBAJIAAAOQgBAJACAFIAEAMIACADIAAABQAAABAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBABQAAAAgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAIAAALQAAALAEAFQAEAGAIAAQAFAAAFgCIAHgFQgDgSAAgIIABgHIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_31.setTransform(-188.7,-29.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgUAzQgDADgDAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQgBAAAAAAQgCgCABgDIAAgFIAAgGIAAgVIgBgVIAAgTIAAgTQAAgEACgDQACgEAEAAQAFAAAAAGIAAACIgBADIAAAPIAAASQAGgEAFgCQAGgDADAAQAPAAAJAMQAJAJAAAQQAAAPgKALQgKALgOAAQgLAAgIgEgAgKgCIgKAFIAAAMIAAALIAAALIAJAEQAEABAGAAQAJAAAGgHQAHgHAAgKQgBgKgFgHQgFgHgKAAQgEAAgGAEg");
	this.shape_32.setTransform(-196.3,-31.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgWAeQgLgJAAgPQAAgRAJgMQAJgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgMAEIgZANQAEAFAGADQAGADAHAAQAEAAAHgCQAHgCADgEQACgDADAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAAHgMAGQgLAEgJAAQgPAAgJgHgAgNgRQgGAGgDAMIAVgJQAMgGAFgEQgGgGgKAAQgIAAgFAHg");
	this.shape_33.setTransform(-204.3,-29.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgSAmQgLgDAAgIQAAgCACgCQACgDADAAQACAAAEAEQABABAGABIAIABQAEABAFgCQAGgCAAgFQAAgIgNgEIgGgBQgJgCgEgDQgFgDAAgHQAAgPANgGIAMgFIANgEIAGgBQADAAACACQACACAAADIABAGIABAGQAAADgCABQgCACgDAAQgEAAgBgCIgCgIIgQAFQgKAFAAAGIAEABQAPADAHAFQAMAGAAANQAAAMgKAFQgIAFgLAAQgJAAgIgDg");
	this.shape_34.setTransform(-211.8,-30.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAWAjIgFgFIgLAGIgIABQgQAAgHgJQgHgJAAgRQAAgQAMgLQALgMAPAAQAGAAAHADQAJAEAAAFIgBADIgBAJIAAAOQgBAJACAFIAEAMIACADIAAABQAAABAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBABQAAAAgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAIAAALQAAALAEAFQAEAGAIAAQAFAAAFgCIAHgFQgDgSAAgIIABgHIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_35.setTransform(-218.6,-29.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgUAzQgDADgDAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQgBAAAAAAQgBgCAAgDIAAgFIAAgGIAAgVIgBgVIAAgTIAAgTQAAgEACgDQACgEAEAAQAFAAAAAGIAAACIAAADIAAAPIgBASQAGgEAFgCQAGgDADAAQAPAAAKAMQAIAJAAAQQAAAPgKALQgKALgOAAQgKAAgJgEgAgKgCIgKAFIAAAMIAAALIAAALIAKAEQADABAGAAQAJAAAGgHQAHgHgBgKQAAgKgEgHQgGgHgKAAQgEAAgGAEg");
	this.shape_36.setTransform(-226.2,-31.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgXAeQgKgJAAgPQAAgRAJgMQAJgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgMAEIgZANQAFAFAFADQAGADAHAAQAEAAAGgCQAIgCADgEQACgDADAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAAHgMAGQgKAEgKAAQgPAAgKgHgAgOgRQgFAGgDAMIAVgJQAMgGAFgEQgGgGgKAAQgIAAgGAHg");
	this.shape_37.setTransform(-238.4,-29.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AATA0IgDgQIgBgQIAAgGIAAgFQAAgMgHAAQgIAAgGAHQgEAEgGALQAAAagCAFQgCAEgEAAQgDAAgCgCQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAAAIABgDIABgKIAAgKIAAgyIAAgLIAAgHIgBgGQAAgBAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAGAAABAGIABAMIgBAPIAAAPIAAAGQAFgHAHgEQAFgEAHAAQAMAAAEAIQADAFAAALIABANIABAOIADAOIAAACQAAADgCACQgCACgDAAQgFAAgBgFg");
	this.shape_38.setTransform(-246.3,-31.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgEAyQgCgCAAgDIAAgDIABgDIgBgKIAAgKIgCgaIgCgcIgGAAQgPAAgJgCQgFgBAAgGQAAgDACgCQACgCADAAIALABIALABIAMAAIAMAAIAPABIAQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIgQAAIgPgBIgFAAIACAfIABAdIABAHIAAAIQAAAEgBAEQgCAEgEAAQgCAAgCgCg");
	this.shape_39.setTransform(-254.6,-31.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF0000").s().p("AAFAUIgEgQIgBgOIgGAMIgKAcIgCAEQgDAEgEAAQgFAAgFgUIgFgcIgCgKIgBgLQAAAAABgBQAAgBAAAAQAAgBABAAQAAgBABAAQACgCACAAQAGAAABAFIABAKIABAKIAFAeIAPgwQACgHAFAAQAFAAACAIIAFAZIAEAaIAGgTIAJgkQABgEAEAAQADAAADACQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAIAAAEIgOAxQgCAGgEAHQgDADgEAAQgHAAgEgSg");
	this.shape_40.setTransform(-123.6,-29.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF0000").s().p("AgXAeQgKgJAAgPQAAgRAJgMQAJgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgMAEIgZANQAEAFAGADQAGADAHAAQAEAAAGgCQAJgCACgEQACgDADAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAAHgMAGQgKAEgKAAQgPAAgKgHgAgOgRQgFAGgDAMIAWgJQALgGAFgEQgGgGgKAAQgIAAgGAHg");
	this.shape_41.setTransform(-132.1,-29.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF0000").s().p("AgHAxIABgZIABgYIAAgYIAAgZQAAgGAGgBQAHABAAAGIgBAZIAAAYIgBAhIAAAQQgBAIgFgBQgHABAAgIg");
	this.shape_42.setTransform(-138,-31.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF0000").s().p("AgKA6QgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAgCQABgIAAgLIAAgTIAAgSIgLAAQgHAAAAgGQAAgHAMAAIAHgBIABgKQACgPAGgHQAGgJAPAAQAKAAAAAHQAAAGgJAAQgRAAgCAXIAAAEIAPAAQALAAAAAGQAAAFgFABIgGABIgQABIAAAOIAAANIAAAMQAAANgBAIQAAAFgGAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_43.setTransform(-143.6,-31.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgRBEIgCgEQAAgDAEgDIAGgFQAPgQAAgjQAAgMgEgOQgDgQgHgJIgHgGQgEgFAAgCQAAgBAAAAQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABgBQABAAAAAAIAFACQAMAKAIAVQAIATAAASQAAAzgcAQIgFACIgEgCg");
	this.shape_44.setTransform(64.2,-37.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgEAwQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIABgIIAAgIIgCgnIgPgBQgGgBAAgGQAAgDACgCQABAAAAgBQABAAAAgBQABAAAAAAQABAAABAAIAOABIAAgJIgBgJQAAAAAAgBQAAAAABgBQAAAAAAgBQABgBAAAAQACgCADAAQAFAAACAKIAAAGIAAAEIAAAEIAJgBIAKABQAEACAAAFQAAACgCACQgCACgDAAIgDAAIgEAAIgJABIABAnIAAADIAAAEQABAPgIAAQgCAAgCgCg");
	this.shape_45.setTransform(58.1,-37.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgSAmQgLgDAAgIQAAgDACgBQACgCADAAQACAAAEADQABACAGAAIAIABQAEAAAFgBQAGgCAAgFQAAgIgNgEIgGgBQgJgCgEgDQgFgDAAgIQAAgOANgGIAMgFIANgEIAGgBQADAAACACQACACAAADIABAFIABAHQAAACgCACQgCACgDABQgEAAgBgDIgCgIIgQAFQgKAFAAAGIAEABQAPADAHAFQAMAGAAANQAAAMgKAFQgIAFgLAAQgJAAgIgDg");
	this.shape_46.setTransform(51.3,-37.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAWAjIgFgFIgLAFIgIACQgQAAgHgJQgHgJAAgRQAAgPAMgMQALgMAPAAQAGAAAHADQAJAEAAAFIgBAEIgBAJIAAANQgBAJACAFIAEAMIACAEIAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAIAAALQAAALAEAFQAEAGAIAAQAFAAAFgCIAHgGQgDgRAAgJIABgGIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_47.setTransform(44.5,-36.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgcA1QgCgCAAgDIAAgUIABgcIACgcIAAgJIABgKQABgGAFABIAHgBIAJgBQAMAAALAJQAMAKAAANQAAARgNAJQgLAJgQAAIgIgBIAAAkQAAADgCACQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABgBAAQAAAAgBgBQgBAAAAAAQgBAAAAAAQgBgBAAAAgAgOgoIgBAMIgBAcIAHAAQALAAAIgFQAIgGAAgLQAAgIgIgGQgHgEgIAAIgFAAIgEAAg");
	this.shape_48.setTransform(37.3,-38.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAJBEQgcgQAAgzQAAgSAHgTQAJgVAMgKIAFgCQAAAAABAAQAAABABAAQABAAAAAAQAAABABAAQAAABABAAQAAABAAAAQABABAAABQAAAAAAABQAAACgEAFIgHAGQgHAJgEAQQgDAOAAAMQAAAjAOAQIAHAFQAEADAAADQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAQAAAAgBAAQgBABAAAAQgBAAAAAAIgFgCg");
	this.shape_49.setTransform(31.2,-37.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgFAGQgCgDAAgDQAAgDACgCQACgCADgBQADABADACQACACAAADQAAADgCADQgDADgDgBQgDABgCgDg");
	this.shape_50.setTransform(18.4,-33.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgXAeQgKgJAAgPQAAgRAIgMQAKgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgMAEIgZANQAFAFAFADQAGADAHAAQAEAAAGgCQAJgCACgEQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAAAAAQABABAAABQAAAAAAABQAAAHgMAGQgKAEgKAAQgPAAgKgHgAgOgRQgFAGgDAMIAWgJQALgGAFgEQgGgGgKAAQgIAAgGAHg");
	this.shape_51.setTransform(12.9,-36.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgEAwQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIABgIIAAgIIgCgnIgPgBQgGgBAAgGQAAgDACgCQABAAAAgBQABAAAAgBQABAAAAAAQABAAABAAIAOABIAAgJIgBgJQAAAAAAgBQABAAAAgBQAAAAAAgBQABgBAAAAQACgCADAAQAFAAACAKIAAAGIAAAEIAAAEIAJgBIAKABQAEACAAAFQAAACgCACQgCACgDAAIgDAAIgEAAIgJABIABAnIAAADIAAAEQABAPgIAAQgCAAgCgCg");
	this.shape_52.setTransform(5.6,-37.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAWAjIgFgFIgLAFIgIACQgQAAgHgJQgHgJAAgRQAAgPAMgMQALgMAPAAQAGAAAHADQAJAEAAAFIgBAEIgBAJIAAANQgBAJACAFIAEAMIACAEIAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAIAAALQAAALAEAFQAEAGAIAAQAFAAAFgCIAHgGQgDgRAAgJIABgGIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_53.setTransform(-1.2,-36.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgHAxIABgYIABgZIAAgYIAAgZQAAgGAGAAQAHAAAAAGIgBAZIAAAYIgBAiIAAAPQgBAIgFgBQgHABAAgIg");
	this.shape_54.setTransform(-6.7,-38.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgaA4QgCgCAAgDIAAgcIAAgaIgBgbIAAgOQAAgFABgDQACgEAFAAQAAAAABAAQAAAAABAAQAAABABAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAIAAACIAAAEQAGgEAGgCQAEgCAFAAQAOAAAGANQAFAJABARQgBANgHAKQgJAKgOAAQgGAAgIgCIAAAhQAAADgCACQgCABgDAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAgAgFgjIgJAHIAAAgQAIACAGAAQAIAAAFgGQAEgEAAgJQAAgNgDgGQgDgGgGAAQgFAAgFADg");
	this.shape_55.setTransform(-12.3,-35.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgWAeQgLgJAAgPQAAgRAIgMQAKgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgLAEIgZANQADAFAGADQAGADAGAAQAFAAAHgCQAHgCADgEQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAAAQABABAAABQAAAAAAABQAAAHgMAGQgLAEgKAAQgOAAgJgHgAgNgRQgGAGgCAMIAUgJQAMgGAFgEQgGgGgKAAQgIAAgFAHg");
	this.shape_56.setTransform(-24,-36.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgTAdQgKgKAAgPQAAgPAIgLQAJgOAQgBQAOAAAHANQAGAKgBAOQAAAOgHALQgJAMgOAAQgLABgIgJgAgLgNQgFAIAAAJQAAAJAGAGQAEAEAGABQAGAAAGgGQAFgFABgKQABgZgQAAQgJgBgFAKg");
	this.shape_57.setTransform(-42.7,-36.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgSAmQgLgDAAgIQAAgDACgBQACgCADAAQACAAAEADQABACAGAAIAIABQAEAAAFgBQAGgCAAgFQAAgIgNgEIgGgBQgJgCgEgDQgFgDAAgIQAAgOANgGIAMgFIANgEIAGgBQADAAACACQACACAAADIABAFIABAHQAAACgCACQgCACgDABQgEAAgBgDIgCgIIgQAFQgKAFAAAGIAEABQAPADAHAFQAMAGAAANQAAAMgKAFQgIAFgLAAQgJAAgIgDg");
	this.shape_58.setTransform(-62.1,-37.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgSAmQgLgDAAgIQAAgDACgBQACgCADAAQACAAAEADQABACAGAAIAIABQAEAAAFgBQAGgCAAgFQAAgIgNgEIgGgBQgJgCgEgDQgFgDAAgIQAAgOANgGIAMgFIANgEIAGgBQADAAACACQACACAAADIABAFIABAHQAAACgCACQgCACgDABQgEAAgBgDIgCgIIgQAFQgKAFAAAGIAEABQAPADAHAFQAMAGAAANQAAAMgKAFQgIAFgLAAQgJAAgIgDg");
	this.shape_59.setTransform(-68.9,-37.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgTAdQgKgKAAgPQAAgPAIgLQAJgOAQgBQAOAAAHANQAGAKgBAOQAAAOgHALQgJAMgOAAQgLABgIgJgAgLgNQgFAIAAAJQAAAJAGAGQAEAEAGABQAGAAAGgGQAFgFABgKQABgZgQAAQgJgBgFAKg");
	this.shape_60.setTransform(-76,-36.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgTAeQgKgJABgPQAAgNAJgPQAKgQAMAAQAGAAAJAEQAKADAAAHQAAAAAAABQAAAAAAABQAAAAgBABQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgEgBIgDgDQgEgDgJAAQgGAAgHAMQgGAMAAAHQAAAKAGAFQAGAEAIAAQAEAAAFgCIAHgEIAEgBQAAAAABAAQAAAAABAAQAAABABAAQABAAAAABQAAAAABABQAAABAAAAQAAABAAAAQAAABAAAAQABAGgLAEQgJAEgGABQgNAAgKgJg");
	this.shape_61.setTransform(-89.8,-36.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AAWAjIgFgFIgLAFIgIACQgQAAgHgJQgHgJAAgRQAAgPAMgMQALgMAPAAQAGAAAHADQAJAEAAAFIgBAEIgBAJIAAANQgBAJACAFIAEAMIACAEIAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAIAAALQAAALAEAFQAEAGAIAAQAFAAAFgCIAHgGQgDgRAAgJIABgGIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_62.setTransform(-97,-36.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAEAUIgCgQIgCgOIgGAMIgJAcIgDAEQgCAEgFAAQgFAAgFgUIgFgcIgCgKIAAgLQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQACgCAEAAQAFAAABAFIACAKIABAKIADAeQAIgUAIgcQADgHAEAAQAFAAADAIIAEAZIAFAaIAEgTIAJgkQABgEAGAAQACAAACACQABAAAAABQABAAAAABQAAAAAAABQABABAAAAIgBAEIgOAxQgCAGgFAHQgCADgEAAQgHAAgFgSg");
	this.shape_63.setTransform(-109.6,-36.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgWAeQgLgJAAgPQAAgRAIgMQAKgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgLAEIgZANQADAFAGADQAGADAGAAQAFAAAHgCQAHgCADgEQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAAAQABABAAABQAAAAAAABQAAAHgMAGQgLAEgKAAQgOAAgJgHgAgNgRQgGAGgCAMIAUgJQAMgGAFgEQgGgGgKAAQgIAAgFAHg");
	this.shape_64.setTransform(-118.1,-36.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgHAxIABgYIABgZIAAgYIAAgZQAAgGAGAAQAHAAAAAGIgBAZIAAAYIgBAiIAAAPQgBAIgFgBQgHABAAgIg");
	this.shape_65.setTransform(-124,-38.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgKA6QgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgCQABgIAAgLIAAgTIAAgSIgLAAQgHAAAAgGQAAgHAMAAIAHgBIABgKQACgPAGgHQAGgJAPAAQAKAAAAAHQAAAGgJAAQgRAAgCAXIAAAEIAPAAQALAAAAAGQAAAFgFABIgGABIgQABIAAAOIAAANIAAAMQAAANgBAIQAAAFgGAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_66.setTransform(-129.6,-38.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgEAwQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIABgIIAAgIIgCgnIgPgBQgGgBAAgGQAAgDACgCQABAAAAgBQABAAAAgBQABAAAAAAQABAAABAAIAOABIAAgJIgBgJQAAAAAAgBQABAAAAgBQAAAAAAgBQABgBAAAAQACgCADAAQAFAAACAKIAAAGIAAAEIAAAEIAJgBIAKABQAEACAAAFQAAACgCACQgCACgDAAIgDAAIgEAAIgJABIABAnIAAADIAAAEQABAPgIAAQgCAAgCgCg");
	this.shape_67.setTransform(-140.5,-37.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAWAjIgFgFIgLAFIgIACQgQAAgHgJQgHgJAAgRQAAgPAMgMQALgMAPAAQAGAAAHADQAJAEAAAFIgBAEIgBAJIAAANQgBAJACAFIAEAMIACAEIAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAIAAALQAAALAEAFQAEAGAIAAQAFAAAFgCIAHgGQgDgRAAgJIABgGIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_68.setTransform(-147.4,-36.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgUAzQgCADgDAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBgCgBgDIAAgFIAAgGIAAgVIAAgVIAAgTIAAgTQAAgEACgDQACgEAEAAQAFAAAAAGIAAACIAAADIAAAPIgBASQAGgEAGgCQAFgDAEAAQAOAAAKAMQAIAJAAAQQAAAPgKALQgKALgOAAQgKAAgJgEgAgKgCIgKAFIAAAMIAAALIAAALIAKAEQAEABAFAAQAJAAAGgHQAGgHAAgKQAAgKgEgHQgGgHgJAAQgFAAgGAEg");
	this.shape_69.setTransform(-154.9,-38.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgHAxIABgYIABgZIAAgYIAAgZQAAgGAGAAQAHAAAAAGIgBAZIAAAYIgBAiIAAAPQgBAIgFgBQgHABAAgIg");
	this.shape_70.setTransform(-165.4,-38.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgHAxIABgYIABgZIAAgYIAAgZQAAgGAGAAQAHAAAAAGIgBAZIAAAYIgBAiIAAAPQgBAIgFgBQgHABAAgIg");
	this.shape_71.setTransform(-169.2,-38.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AAWAjIgFgFIgLAFIgIACQgQAAgHgJQgHgJAAgRQAAgPAMgMQALgMAPAAQAGAAAHADQAJAEAAAFIgBAEIgBAJIAAANQgBAJACAFIAEAMIACAEIAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAIAAALQAAALAEAFQAEAGAIAAQAFAAAFgCIAHgGQgDgRAAgJIABgGIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_72.setTransform(-174.7,-36.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgUAzQgDADgDAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQgBAAAAAAQgCgCAAgDIAAgFIAAgGIAAgVIAAgVIAAgTIAAgTQAAgEACgDQACgEAEAAQAFAAAAAGIAAACIAAADIAAAPIgBASQAGgEAGgCQAFgDADAAQAPAAAKAMQAIAJAAAQQAAAPgKALQgKALgOAAQgLAAgIgEgAgKgCIgKAFIAAAMIAAALIAAALIAKAEQAEABAFAAQAJAAAGgHQAGgHAAgKQAAgKgEgHQgGgHgKAAQgEAAgGAEg");
	this.shape_73.setTransform(-182.3,-38.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgXAeQgKgJAAgPQAAgRAIgMQAKgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgLAEIgZANQAEAFAFADQAGADAGAAQAFAAAGgCQAJgCACgEQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAAAQABABAAABQAAAAAAABQAAAHgMAGQgLAEgKAAQgOAAgKgHgAgOgRQgFAGgCAMIAVgJQALgGAFgEQgGgGgKAAQgIAAgGAHg");
	this.shape_74.setTransform(-190.3,-36.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgSAmQgLgDAAgIQAAgDACgBQACgCADAAQACAAAEADQABACAGAAIAIABQAEAAAFgBQAGgCAAgFQAAgIgNgEIgGgBQgJgCgEgDQgFgDAAgIQAAgOANgGIAMgFIANgEIAGgBQADAAACACQACACAAADIABAFIABAHQAAACgCACQgCACgDABQgEAAgBgDIgCgIIgQAFQgKAFAAAGIAEABQAPADAHAFQAMAGAAANQAAAMgKAFQgIAFgLAAQgJAAgIgDg");
	this.shape_75.setTransform(-197.8,-37.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAWAjIgFgFIgLAFIgIACQgQAAgHgJQgHgJAAgRQAAgPAMgMQALgMAPAAQAGAAAHADQAJAEAAAFIgBAEIgBAJIAAANQgBAJACAFIAEAMIACAEIAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAIAAALQAAALAEAFQAEAGAIAAQAFAAAFgCIAHgGQgDgRAAgJIABgGIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_76.setTransform(-204.6,-36.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgUAzQgCADgDAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBgCgBgDIAAgFIAAgGIAAgVIAAgVIAAgTIAAgTQAAgEACgDQACgEAEAAQAFAAAAAGIAAACIgBADIAAAPIAAASQAGgEAGgCQAFgDAEAAQAOAAAJAMQAJAJAAAQQAAAPgKALQgKALgOAAQgKAAgJgEgAgKgCIgKAFIAAAMIAAALIAAALIAJAEQAFABAFAAQAJAAAGgHQAGgHAAgKQABgKgGgHQgFgHgJAAQgFAAgGAEg");
	this.shape_77.setTransform(-212.2,-38.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgWAeQgLgJAAgPQAAgRAIgMQAKgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgLAEIgZANQAEAFAFADQAGADAGAAQAFAAAHgCQAHgCADgEQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAAAQABABAAABQAAAAAAABQAAAHgMAGQgLAEgKAAQgOAAgJgHgAgNgRQgGAGgCAMIAUgJQAMgGAFgEQgGgGgKAAQgIAAgFAHg");
	this.shape_78.setTransform(-224.4,-36.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgEAyQgCgCAAgDIAAgDIAAgDIAAgKIgBgKIgBgaIgCgcIgGAAQgPAAgIgCQgGgBAAgGQAAgDABgCQADgCADAAIALABIALABIANAAIALAAIAQABIAPAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIgPAAIgQgBIgFAAIACAfIACAdIAAAHIAAAIQAAAEgBAEQgCAEgEAAQgCAAgCgCg");
	this.shape_79.setTransform(-240.6,-38.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38,p:{x:-246.3,y:-31.7}},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29,p:{x:-179.4}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24,p:{x:-138}},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19,p:{x:-96.7,y:-29.8}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15,p:{x:-64.2,y:-31.7}},{t:this.shape_14},{t:this.shape_13,p:{x:-47.4,y:-29.8}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_39},{t:this.shape_38,p:{x:-246.3,y:-31.7}},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_29,p:{x:-183.2}},{t:this.shape_24,p:{x:-179.4}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19,p:{x:-96.7,y:-29.8}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15,p:{x:-64.2,y:-31.7}},{t:this.shape_14},{t:this.shape_13,p:{x:-47.4,y:-29.8}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_79},{t:this.shape_15,p:{x:-232.3,y:-38.7}},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_19,p:{x:-82.7,y:-36.8}},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_38,p:{x:-50.2,y:-38.7}},{t:this.shape_57},{t:this.shape_13,p:{x:-33.4,y:-36.8}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},2).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-262,-43.8,316.7,23.6);


(lib.s4_s1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		/* gotoAndPlay(1);
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(13));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgRBEIgCgEQAAgDAEgDIAGgFQAPgQAAgjQAAgMgEgOQgDgQgHgJIgHgGQgEgFAAgCQAAgBAAAAQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABgBQABAAAAAAIAFACQAMAKAIAVQAIATAAASQAAAzgcAQIgFACIgEgCg");
	this.shape.setTransform(70.5,-37.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgEAwQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIABgIIAAgIIgCgnIgPgBQgGgBAAgGQAAgDACgCQABAAAAgBQABAAAAgBQABAAAAAAQABAAABAAIAOABIAAgJIgBgJQAAAAAAgBQAAAAABgBQAAAAAAgBQABgBAAAAQACgCADAAQAFAAACAKIAAAGIAAAEIAAAEIAJgBIAKABQAEACAAAFQAAACgCACQgCACgDAAIgDAAIgEAAIgJABIABAnIAAADIAAAEQABAPgIAAQgCAAgCgCg");
	this.shape_1.setTransform(64.4,-37.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AARAhIgCgPIgBgPIAAgFIAAgHQAAgPgFAAQgIAAgGAKQgGAIgEALIAAAHIgBAHIABAGIAAAGQAAADgCACQgCACgDAAQgDAAgCgCQgBgCAAgDIgBgGIAAgGIABgTIABgTIAAgHIgBgGQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAGAAABAJIAAAIQAMgPALAAQALAAAEAJQADAHAAAMIAAAHIAAAGIACAOIABAPQAAADgCACQgCACgDAAQgGAAAAgHg");
	this.shape_2.setTransform(57.6,-36.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgWAeQgLgJAAgPQAAgRAIgMQAKgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgLAEIgZANQAEAFAFADQAGADAGAAQAFAAAHgCQAHgCADgEQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAAAQABABAAABQAAAAAAABQAAAHgMAGQgLAEgKAAQgOAAgJgHgAgNgRQgGAGgCAMIAVgJQALgGAFgEQgGgGgKAAQgIAAgFAHg");
	this.shape_3.setTransform(50.1,-36.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgSAmQgLgDAAgIQAAgDACgBQACgCADAAQACAAAEADQABACAGAAIAIABQAEAAAFgBQAGgCAAgFQAAgIgNgEIgGgBQgJgCgEgDQgFgDAAgIQAAgOANgGIAMgFIANgEIAGgBQADAAACACQACACAAADIABAFIABAHQAAACgCACQgCACgDABQgEAAgBgDIgCgIIgQAFQgKAFAAAGIAEABQAPADAHAFQAMAGAAANQAAAMgKAFQgIAFgLAAQgJAAgIgDg");
	this.shape_4.setTransform(42.6,-37.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgXAeQgKgJAAgPQAAgRAJgMQAJgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgMAEIgZANQAFAFAFADQAGADAHAAQAEAAAGgCQAIgCADgEQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAAHgMAGQgKAEgKAAQgPAAgKgHgAgNgRQgGAGgDAMIAVgJQAMgGAFgEQgGgGgKAAQgIAAgFAHg");
	this.shape_5.setTransform(35.7,-36.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgaAfIAAgvIAAgGIABgHQAAgHAGAAQAGAAAAALQANgMAPAAQAGAAADAEQADAEAAAIIgBAFQAAAJgGAAQgGAAAAgHIAAgFIgBgGQgKACgGAFQgGAEgEAJIAAAkQAAAHgHAAQgGAAAAgHg");
	this.shape_6.setTransform(28.5,-36.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgcA1QgCgCAAgDIAAgUIABgcIACgcIAAgJIABgKQABgGAFABIAHgBIAJgBQAMAAALAJQAMAKAAANQAAARgNAJQgLAJgQAAIgIgBIAAAkQAAADgCACQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABgBAAQAAAAgBgBQgBAAAAAAQgBAAAAAAQgBgBAAAAgAgOgoIgBAMIgBAcIAHAAQALAAAIgFQAIgGAAgLQAAgIgIgGQgHgEgIAAIgFAAIgEAAg");
	this.shape_7.setTransform(21.4,-38.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAJBEQgcgQAAgzQAAgSAHgTQAJgVAMgKIAFgCQAAAAABAAQAAABABAAQAAAAABAAQAAABABAAQAAABABAAQAAABAAAAQABABAAABQAAAAAAABQAAACgEAFIgHAGQgHAJgEAQQgDAOAAAMQAAAjAOAQIAHAFQAEADAAADQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgFgCg");
	this.shape_8.setTransform(15.3,-37.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgFAGQgCgDAAgDQAAgDACgCQACgCADgBQADABADACQACACAAADQAAADgCADQgDADgDgBQgDABgCgDg");
	this.shape_9.setTransform(2.4,-33.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgSAmQgLgDAAgIQAAgDACgBQACgCADAAQACAAAEADQABACAGAAIAIABQAEAAAFgBQAGgCAAgFQAAgIgNgEIgGgBQgJgCgEgDQgFgDAAgIQAAgOANgGIAMgFIANgEIAGgBQADAAACACQACACAAADIABAFIABAHQAAACgCACQgCACgDABQgEAAgBgDIgCgIIgQAFQgKAFAAAGIAEABQAPADAHAFQAMAGAAANQAAAMgKAFQgIAFgLAAQgJAAgIgDg");
	this.shape_10.setTransform(-2.9,-37.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgXAeQgKgJAAgPQAAgRAIgMQAKgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgLAEIgZANQAEAFAFADQAGADAGAAQAFAAAGgCQAJgCACgEQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAAAQABABAAABQAAAAAAABQAAAHgMAGQgLAEgKAAQgOAAgKgHgAgOgRQgFAGgCAMIAVgJQALgGAFgEQgGgGgKAAQgIAAgGAHg");
	this.shape_11.setTransform(-9.8,-36.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgYAvQgJgKAAgPQAAgTAJgJQALgMAOAAQAIAAAEADIAGAFQABgdACgKQAAgGAGAAQAGAAAAAGIgCArIgCATQAAAXADALIAAACQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQAAABgBAAQgBAAAAAAQgBABAAAAQgBAAgBAAQgEAAgCgGQgFADgFADQgFABgFAAQgOAAgKgJgAgPACQgGAGAAAOQAAAJAGAGQAHAGAIAAQAFAAAEgCIAIgGIABgCIAAgLIAAgJIAAgIQgCgFgFgCQgEgDgGABQgLgBgFAHg");
	this.shape_12.setTransform(-17.9,-38.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAPAhQgIAEgLAAQgJAAgFgEQgHgEgBgJQgCgSgBgNQAAgJACgMQACgGAFAAQADAAACACQACACAAADIgBAKIgBAKIABATIACANIAFACIADAAQAJAAAKgDIAAgOIAAgMIABgZQABgHAFAAQADAAADACQAAABAAAAQABABAAAAQAAABAAABQABAAAAABIgBAaIAAAOIAAAOIAAAFIAAAFQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQgCACgDAAQgFAAgCgGg");
	this.shape_13.setTransform(-25.6,-36.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgEAwQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIABgIIAAgIIgCgnIgPgBQgGgBAAgGQAAgDACgCQABAAAAgBQABAAAAgBQABAAAAAAQABAAABAAIAOABIAAgJIgBgJQAAAAAAgBQABAAAAgBQAAAAAAgBQABgBAAAAQACgCADAAQAFAAACAKIAAAGIAAAEIAAAEIAJgBIAKABQAEACAAAFQAAACgCACQgCACgDAAIgDAAIgEAAIgJABIABAnIAAADIAAAEQABAPgIAAQgCAAgCgCg");
	this.shape_14.setTransform(-32.6,-37.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgGAxQgCgCAAgCIAAgNIAAgMIABgQIAAgPQAAgDACgCQACgCADAAQAAAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADIgBAPIgBAQIABAMIAAANQAAACgCACQgCACgCAAQgDAAgCgCgAgDglQgDgCAAgDQAAgEADgCQACgCACgBQAEABACACQACACAAAEQAAADgCACQgCACgEABQgCgBgCgCg");
	this.shape_15.setTransform(-37.7,-38.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgEAwQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIABgIIAAgIIgCgnIgPgBQgGgBAAgGQAAgDACgCQABAAAAgBQABAAAAgBQABAAAAAAQABAAABAAIAOABIAAgJIgBgJQAAAAAAgBQAAAAABgBQAAAAAAgBQABgBAAAAQACgCADAAQAFAAACAKIAAAGIAAAEIAAAEIAJgBIAKABQAEACAAAFQAAACgCACQgCACgDAAIgDAAIgEAAIgJABIABAnIAAADIAAAEQABAPgIAAQgCAAgCgCg");
	this.shape_16.setTransform(-43.1,-37.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgHAxIABgYIABgZIAAgYIAAgZQAAgGAGAAQAHAAAAAGIgBAZIAAAYIgBAiIAAAPQgBAIgFgBQgHABAAgIg");
	this.shape_17.setTransform(-48.3,-38.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAWAjIgFgFIgLAFIgIACQgQAAgHgJQgHgJAAgRQAAgPAMgMQALgMAPAAQAGAAAHADQAJAEAAAFIgBAEIgBAJIAAANQgBAJACAFIAEAMIACAEIAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAIAAALQAAALAEAFQAEAGAIAAQAFAAAFgCIAHgGQgDgRAAgJIABgGIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_18.setTransform(-53.8,-36.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AATA0IgDgQIgBgQIAAgGIAAgFQAAgMgHAAQgIAAgGAHQgEAEgGALQAAAagCAFQgCAEgEAAQgDAAgCgCQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIABgDIABgKIAAgKIAAgyIAAgLIAAgHIgBgGQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAGAAABAGIABAMIgBAPIAAAPIAAAGQAFgHAHgEQAFgEAHAAQAMAAAEAIQADAFAAALIABANIABAOIADAOIAAACQAAADgCACQgCACgDAAQgFAAgBgFg");
	this.shape_19.setTransform(-65.6,-38.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgXA1QgJgCABgFQAAgGAFAAIAIABIAOABQALAAAGgNQADgIAAgRQgEAHgFADQgFADgFAAQgNAAgHgIQgIgIAAgNQAAgSAKgMQALgLASAAQAGAAAEABQAFACACADQAHABABAHIgCANIgBANIgDAWQAAAOgCAJQgDALgHAFQgIAGgPAAIgPgBgAgMghQgGAIAAAMQAAAKAEAEQAEAFAHAAQAGAAAGgHQAGgHABgHIADgXIgFgDIgHgBQgLAAgIAJg");
	this.shape_20.setTransform(-73.5,-35);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgGAxQgCgCAAgCIAAgNIAAgMIABgQIAAgPQAAgDACgCQACgCADAAQAAAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADIgBAPIgBAQIABAMIAAANQAAACgCACQgCACgCAAQgDAAgCgCgAgDglQgDgCAAgDQAAgEADgCQACgCACgBQAEABACACQACACAAAEQAAADgCACQgCACgEABQgCgBgCgCg");
	this.shape_21.setTransform(-79,-38.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AATA0IgDgQIgBgQIAAgGIAAgFQAAgMgHAAQgIAAgGAHQgEAEgGALQAAAagCAFQgCAEgEAAQgDAAgCgCQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIABgDIABgKIAAgKIAAgyIAAgLIAAgHIgBgGQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAGAAABAGIABAMIgBAPIAAAPIAAAGQAFgHAHgEQAFgEAHAAQAMAAAEAIQADAFAAALIABANIABAOIADAOIAAACQAAADgCACQgCACgDAAQgFAAgBgFg");
	this.shape_22.setTransform(-85,-38.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AARAhIgCgPIgBgPIAAgFIAAgHQAAgPgFAAQgIAAgGAKQgGAIgEALIAAAHIgBAHIABAGIAAAGQAAADgCACQgCACgDAAQgDAAgCgCQgBgCAAgDIgBgGIAAgGIABgTIABgTIAAgHIgBgGQAAgBAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAGAAABAJIAAAIQAMgPALAAQALAAAEAJQADAHAAAMIAAAHIAAAGIACAOIABAPQAAADgCACQgCACgDAAQgGAAAAgHg");
	this.shape_23.setTransform(-96.9,-36.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgGAxQgCgCAAgCIAAgNIAAgMIABgQIAAgPQAAgDACgCQACgCADAAQAAAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADIgBAPIgBAQIABAMIAAANQAAACgCACQgCACgCAAQgDAAgCgCgAgDglQgDgCAAgDQAAgEADgCQACgCACgBQAEABACACQACACAAAEQAAADgCACQgCACgEABQgCgBgCgCg");
	this.shape_24.setTransform(-102.5,-38.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgaAfIAAgvIAAgGIABgHQAAgHAGAAQAGAAAAALQANgMAPAAQAGAAADAEQADAEAAAIIgBAFQAAAJgGAAQgGAAAAgHIAAgFIgBgGQgKACgGAFQgGAEgEAJIAAAkQAAAHgHAAQgGAAAAgHg");
	this.shape_25.setTransform(-112,-36.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgWAeQgLgJAAgPQAAgRAJgMQAJgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgMAEIgZANQAEAFAGADQAGADAHAAQAEAAAHgCQAHgCADgEQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAAHgMAGQgLAEgJAAQgPAAgJgHgAgNgRQgGAGgDAMIAVgJQAMgGAFgEQgGgGgKAAQgIAAgFAHg");
	this.shape_26.setTransform(-119.2,-36.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AATA0IgDgQIgBgQIAAgGIAAgFQAAgMgHAAQgIAAgGAHQgEAEgGALQAAAagCAFQgCAEgEAAQgDAAgCgCQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAAAIABgDIABgKIAAgKIAAgyIAAgLIAAgHIgBgGQAAgBAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAGAAABAGIABAMIgBAPIAAAPIAAAGQAFgHAHgEQAFgEAHAAQAMAAAEAIQADAFAAALIABANIABAOIADAOIAAACQAAADgCACQgCACgDAAQgFAAgBgFg");
	this.shape_27.setTransform(-127.2,-38.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgEAwQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAAAIABgIIAAgIIgCgnIgPgBQgGgBAAgGQAAgDACgCQABAAAAgBQABAAAAgBQABAAAAAAQABAAABAAIAOABIAAgJIgBgJQAAAAAAgBQAAAAABgBQAAAAAAgBQABgBAAAAQACgCADAAQAFAAACAKIAAAGIAAAEIAAAEIAJgBIAKABQAEACAAAFQAAACgCACQgCACgDAAIgDAAIgEAAIgJABIABAnIAAADIAAAEQABAPgIAAQgCAAgCgCg");
	this.shape_28.setTransform(-134.6,-37.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgaAfIAAgvIAAgGIABgHQAAgHAGAAQAGAAAAALQANgMAPAAQAGAAADAEQADAEAAAIIgBAFQAAAJgGAAQgGAAAAgHIAAgFIgBgGQgKACgGAFQgGAEgEAJIAAAkQAAAHgHAAQgGAAAAgHg");
	this.shape_29.setTransform(-141.1,-36.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAWAjIgFgFIgLAFIgIACQgQAAgHgJQgHgJAAgRQAAgPAMgMQALgMAPAAQAGAAAHADQAJAEAAAFIgBAEIgBAJIAAANQgBAJACAFIAEAMIACAEIAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAIAAALQAAALAEAFQAEAGAIAAQAFAAAFgCIAHgGQgDgRAAgJIABgGIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_30.setTransform(-148.2,-36.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgKA6QgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgCQABgIAAgLIAAgTIAAgSIgLAAQgHAAAAgGQAAgHAMAAIAHgBIABgKQACgPAGgHQAGgJAPAAQAKAAAAAHQAAAGgJAAQgRAAgCAXIAAAEIAPAAQALAAAAAGQAAAFgFABIgGABIgQABIAAAOIAAANIAAAMQAAANgBAIQAAAFgGAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_31.setTransform(-155.5,-38.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgRA1QgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgHAOghIgYguIgDgFIgCgFQAAgDACgCQABgBAAAAQABgBAAAAQABAAABAAQAAAAABAAQADAAACACQALAQANAeIAKgXIAKgWQADgDADAAQADAAACACQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAIgBAEIgXAyQgJATgEAMIgEANQgCAFgEAAQgDAAgCgCg");
	this.shape_32.setTransform(-167,-35);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgHAxIABgYIABgZIAAgYIAAgZQAAgGAGAAQAHAAAAAGIgBAZIAAAYIgBAiIAAAPQgBAIgFgBQgHABAAgIg");
	this.shape_33.setTransform(-172.3,-38.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgKA6QgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAgCQABgIAAgLIAAgTIAAgSIgLAAQgHAAAAgGQAAgHAMAAIAHgBIABgKQACgPAGgHQAGgJAPAAQAKAAAAAHQAAAGgJAAQgRAAgCAXIAAAEIAPAAQALAAAAAGQAAAFgFABIgGABIgQABIAAAOIAAANIAAAMQAAANgBAIQAAAFgGAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_34.setTransform(-177.9,-38.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgSAmQgLgDAAgIQAAgDACgBQACgCADAAQACAAAEADQABACAGAAIAIABQAEAAAFgBQAGgCAAgFQAAgIgNgEIgGgBQgJgCgEgDQgFgDAAgIQAAgOANgGIAMgFIANgEIAGgBQADAAACACQACACAAADIABAFIABAHQAAACgCACQgCACgDABQgEAAgBgDIgCgIIgQAFQgKAFAAAGIAEABQAPADAHAFQAMAGAAANQAAAMgKAFQgIAFgLAAQgJAAgIgDg");
	this.shape_35.setTransform(-189.1,-37.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgHAxIABgYIABgZIAAgYIAAgZQAAgGAGAAQAHAAAAAGIgBAZIAAAYIgBAiIAAAPQgBAIgFgBQgHABAAgIg");
	this.shape_36.setTransform(-194.3,-38.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgHAxIABgYIABgZIAAgYIAAgZQAAgGAGAAQAHAAAAAGIgBAZIAAAYIgBAiIAAAPQgBAIgFgBQgHABAAgIg");
	this.shape_37.setTransform(-198.1,-38.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAWAjIgFgFIgLAFIgIACQgQAAgHgJQgHgJAAgRQAAgPAMgMQALgMAPAAQAGAAAHADQAJAEAAAFIgBAEIgBAJIAAANQgBAJACAFIAEAMIACAEIAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAIAAALQAAALAEAFQAEAGAIAAQAFAAAFgCIAHgGQgDgRAAgJIABgGIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_38.setTransform(-203.6,-36.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgUAzQgCADgDAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBgCgBgDIAAgFIAAgGIAAgVIAAgVIAAgTIAAgTQAAgEACgDQACgEAEAAQAFAAAAAGIAAACIAAADIAAAPIgBASQAGgEAGgCQAFgDAEAAQAOAAAKAMQAIAJAAAQQAAAPgKALQgKALgOAAQgKAAgJgEgAgKgCIgKAFIAAAMIAAALIAAALIAKAEQAEABAFAAQAJAAAGgHQAGgHAAgKQAAgKgEgHQgGgHgJAAQgFAAgGAEg");
	this.shape_39.setTransform(-211.2,-38.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgXAeQgKgJAAgPQAAgRAIgMQAKgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgMAEIgYANQAEAFAFADQAGADAGAAQAFAAAGgCQAJgCACgEQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAAAQABABAAABQAAAAAAABQAAAHgMAGQgKAEgLAAQgOAAgKgHgAgOgRQgFAGgDAMIAWgJQALgGAFgEQgGgGgKAAQgIAAgGAHg");
	this.shape_40.setTransform(-219.2,-36.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgSAmQgLgDAAgIQAAgDACgBQACgCADAAQACAAAEADQABACAGAAIAIABQAEAAAFgBQAGgCAAgFQAAgIgNgEIgGgBQgJgCgEgDQgFgDAAgIQAAgOANgGIAMgFIANgEIAGgBQADAAACACQACACAAADIABAFIABAHQAAACgCACQgCACgDABQgEAAgBgDIgCgIIgQAFQgKAFAAAGIAEABQAPADAHAFQAMAGAAANQAAAMgKAFQgIAFgLAAQgJAAgIgDg");
	this.shape_41.setTransform(-226.7,-37.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAWAjIgFgFIgLAFIgIACQgQAAgHgJQgHgJAAgRQAAgPAMgMQALgMAPAAQAGAAAHADQAJAEAAAFIgBAEIgBAJIAAANQgBAJACAFIAEAMIACAEIAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAIAAALQAAALAEAFQAEAGAIAAQAFAAAFgCIAHgGQgDgRAAgJIABgGIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_42.setTransform(-233.5,-36.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgfA0QgDgCAAgDIAAgUIACgbIABgdIABgSQAAgDACgBQAJgDAMgBQALAAALAJQANAJAAAOQAAASgOAJQALAEAFAFQAFAGAAAGQAAAJgJAHQgGAFgHADQgPAHgXAAQgDAAgDgEgAgUAbIAAAOQASgBAKgEQAFgCAEgEQAEgDAAgCQAAgDgIgEIgNgFIgGgBIgDAAIgDAAIgIAAIAAAPgAgRgoIAAAMIgCAaIALABQAJAAAGgGQAIgGAAgKQAAgGgIgGQgHgFgHgBIgKABg");
	this.shape_43.setTransform(-241.2,-38.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF0000").s().p("AgRA1QgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgHAOghIgYguIgDgFIgCgFQAAgDACgCQABgBAAAAQABgBAAAAQABAAABAAQAAAAABAAQADAAACACQALAQANAeIAKgXIAKgWQADgDADAAQADAAACACQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAIgBAEIgXAyQgJATgEAMIgEANQgCAFgEAAQgDAAgCgCg");
	this.shape_44.setTransform(-167,-35);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF0000").s().p("AgHAxIABgYIABgZIAAgYIAAgZQAAgGAGAAQAHAAAAAGIgBAZIAAAYIgBAiIAAAPQgBAIgFgBQgHABAAgIg");
	this.shape_45.setTransform(-172.3,-38.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FF0000").s().p("AgKA6QgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAgCQABgIAAgLIAAgTIAAgSIgLAAQgHAAAAgGQAAgHAMAAIAHgBIABgKQACgPAGgHQAGgJAPAAQAKAAAAAHQAAAGgJAAQgRAAgCAXIAAAEIAPAAQALAAAAAGQAAAFgFABIgGABIgQABIAAAOIAAANIAAAMQAAANgBAIQAAAFgGAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_46.setTransform(-177.9,-38.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:-194.3}},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33,p:{x:-172.3}},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_36,p:{x:-198.1}},{t:this.shape_33,p:{x:-194.3}},{t:this.shape_35},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:-194.3}},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33,p:{x:-172.3}},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-248,-50.8,323,23.6);


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


(lib.IrregularVerbsDef = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHAIQgDgDAAgFQAAgDADgEQAEgDADAAQAFAAADADQADAEAAADQAAAFgDADQgDADgFAAQgDAAgEgDg");
	this.shape.setTransform(410.6,51.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeA8QgNgMAAgUQAAgYANgNQAMgOATABQAKAAAGACIAIAHQABgmACgNQABgHAHAAQAIAAAAAIQAAAMgEAqIgBAZQAAAdADAPIAAACQAAAEgCACQgDACgDAAQgFAAgDgIQgGAGgHABQgHADgGAAQgSAAgMgMgAgUACQgHAIAAASQAAALAIAJQAIAHALABQAGAAAFgEIAKgGIADgEIgBgOIAAgLIABgKQgEgHgFgDQgGgDgIAAQgNAAgIAIg");
	this.shape_1.setTransform(403,44.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AghAoIAAg8IAAgJIAAgJQAAgJAIAAQAJAAAAAPQAQgQAUAAQAHAAAEAFQADAFAAALIAAAGQAAALgIAAQgIAAAAgIIAAgHIgBgHQgNACgIAGQgIAGgFALIAAAvQAAAJgIAAQgIAAAAgJg");
	this.shape_2.setTransform(393.7,47);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgZAlQgMgMgBgUQAAgTAKgPQAMgSAVAAQASAAAJAQQAHANAAASQAAASgKAPQgMAPgRAAQgPAAgKgLgAgPgRQgGAKAAAMQAAAMAHAIQAGAFAIABQAIAAAHgHQAHgHABgNQABghgUAAQgMAAgHAMg");
	this.shape_3.setTransform(384.3,47.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAFAaIgDgVIgCgTIgHAQIgOAkQAAAEgDACQgDAFgFAAQgHAAgGgaQgDgOgDgWIgCgNIgCgOQAAgDADgDQADgCADAAQAGAAACAHIACANIACANIAEAmQAKgaALgjQADgKAGAAQAHAAADALIAFAgIAGAhIAHgYIALgvQACgFAGAAQAEAAACADQADACAAAEIgBAEQgHAcgLAjQgCAIgGAJQgEAEgEAAQgKAAgGgXg");
	this.shape_4.setTransform(373.6,47.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgFA+QgCgCAAgEIAAgKIAAgKIgBgyIgUgBQgIgCAAgHQAAgEACgDQADgCAEAAIASABIAAgMIAAgLQgBgDADgDQADgCADAAQAHAAACANIAAAIIAAAFIAAAFIAMgBIAMABQAFABAAAHQAAAEgCACQgDADgEAAIgEAAIgEAAIgMABIABAzIAAAEIAAAEQABATgJAAQgDAAgDgCg");
	this.shape_5.setTransform(357.7,45.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAVArIgCgTIgBgTIAAgIIAAgIQAAgTgHAAQgKAAgIAMQgIAKgEAQIgBAIIgBAJIABAIIABAIQAAAEgDACQgCACgEAAQgEAAgCgCQgDgCAAgEIAAgIIgBgIIABgZIACgZIgBgIIAAgJQAAgDADgCQACgDAEAAQAIAAABAMIAAAKQAPgUAOAAQAOAAAGANQAEAIAAAQIAAAJIAAAHIACATQACALAAAIQAAAEgDACQgCACgEAAQgIAAgBgIg");
	this.shape_6.setTransform(349,46.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgdAmQgOgLAAgTQAAgXALgPQANgRATAAQAOAAAJAFQAMAGAAAMQAAAKgKAGQgFAEgOAFIggAQQAFAIAHADQAHAEAJAAQAGAAAIgCQALgDADgEQADgGADAAQADABADACQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEAQIAbgLQAPgJAHgFQgIgHgNAAQgKAAgHAJg");
	this.shape_7.setTransform(339.4,47);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AghAoIAAg8IAAgJIAAgJQAAgJAIAAQAJAAAAAPQAQgQAUAAQAHAAAEAFQADAFAAALIAAAGQAAALgIAAQgIAAAAgIIAAgHIgBgHQgNACgIAGQgIAGgFALIAAAvQAAAJgIAAQgIAAAAgJg");
	this.shape_8.setTransform(330.2,47);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgdAmQgOgLAAgTQAAgXALgPQANgRATAAQAOAAAJAFQAMAGAAAMQAAAKgKAGQgFAEgOAFIggAQQAFAIAHADQAHAEAJAAQAGAAAIgCQALgDADgEQADgGADAAQADABADACQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEAQIAbgLQAPgJAHgFQgIgHgNAAQgKAAgHAJg");
	this.shape_9.setTransform(320.9,47);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgNBLQgDgCAAgEIAAgCQACgLAAgNIAAgYIAAgZIgOABQgJAAAAgJQAAgIAQgBIAIAAIABgNQACgUAIgJQAIgLATAAQANAAAAAIQAAAJgLAAQgWAAgCAdIgBAGIAUgBQAOAAAAAIQAAAHgHABIgHAAIgUACIgBATIAAAQIABAQQAAARgCAJQgBAHgGAAQgEAAgCgCg");
	this.shape_10.setTransform(311.1,45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgNBLQgDgCAAgEIABgCQABgLAAgNIAAgYIAAgZIgOABQgJAAAAgJQAAgIAPgBIAJAAIABgNQACgUAIgJQAIgLATAAQANAAAAAIQAAAJgLAAQgWAAgCAdIAAAGIATgBQAOAAAAAIQAAAHgHABIgHAAIgUACIgBATIABAQIAAAQQAAARgCAJQAAAHgHAAQgEAAgCgCg");
	this.shape_11.setTransform(302,45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgHA/QgDgCAAgEIgBgPIAAgRIABgUIABgTQAAgEADgDQACgCADAAQADAAADACQACADAAAEIgBATIgBAUIABARIAAAPQAAAEgCACQgCADgEAAQgDAAgCgDgAgFgwQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDg");
	this.shape_12.setTransform(295.2,44.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgeA8QgNgMAAgUQAAgYANgNQAMgOATABQAKAAAGACIAIAHQABgmACgNQABgHAHAAQAIAAAAAIQAAAMgEAqIgBAZQAAAdADAPIAAACQAAAEgCACQgDACgDAAQgFAAgDgIQgGAGgHABQgHADgGAAQgSAAgMgMgAgUACQgHAIAAASQAAALAIAJQAIAHALABQAGAAAFgEIAKgGIADgEIgBgOIAAgLIABgKQgEgHgFgDQgGgDgIAAQgNAAgIAIg");
	this.shape_13.setTransform(287.2,44.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAcAtIgGgGIgPAGQgGACgDABQgVAAgJgMQgJgLAAgWQAAgUAOgPQAPgQATAAQAIAAAJAEQAMAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgCALIAAATQAAALABAGIAGAPIACAFIAAACQAAADgCACQgDADgDAAQgCAAgEgEgAgOgVQgKALAAAOQAAAOAFAHQAFAHAKABQAIAAAGgDIAJgHQgDgXAAgLIAAgIIACgKIgGgCIgEgBQgMAAgKALg");
	this.shape_14.setTransform(272,47.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgeBEQgLgCAAgHQAAgIAIAAIAKACQAIABAJAAQAPAAAHgQQAEgLABgWQgFAJgHAEQgGAEgIAAQgQAAgKgKQgKgLAAgRQABgXANgPQAOgPAXAAQAIAAAGACQAFACADAFQAKAAAAAKIgCARIgCAQIgCAdQgBARgDAMQgEAOgIAHQgMAIgSAAQgMAAgIgCgAgPgrQgJAKABAQQAAANAEAFQAFAHAJAAQAJAAAIgJQAIgJABgKIADgdQgDgDgEgBQgDgCgEAAQgRAAgIAMg");
	this.shape_15.setTransform(257.1,49.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAVArIgCgTIgBgTIAAgIIAAgIQAAgTgHAAQgKAAgIAMQgIAKgEAQIgBAIIgBAJIABAIIABAIQAAAEgDACQgCACgEAAQgEAAgCgCQgDgCAAgEIAAgIIgBgIIABgZIACgZIgBgIIAAgJQAAgDADgCQACgDAEAAQAIAAABAMIAAAKQAPgUAOAAQAOAAAGANQAEAIAAAQIAAAJIAAAHIACATQACALAAAIQAAAEgDACQgCACgEAAQgIAAgBgIg");
	this.shape_16.setTransform(247.9,46.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgIA/QgCgCAAgEIgBgPIAAgRIABgUIABgTQAAgEADgDQACgCADAAQAEAAACACQACADAAAEIgBATIgBAUIABARIAAAPQAAAEgCACQgDADgDAAQgDAAgDgDgAgFgwQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDg");
	this.shape_17.setTransform(240.7,44.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgYAxQgNgFAAgJQAAgEADgCQACgCAEgBQADAAAEAFQACABAHACIAKABQAHAAAFgBQAJgDAAgGQAAgMgRgEIgIgCQgMgDgFgDQgHgEAAgKQAAgSARgIIAQgGIARgFQADgCAFAAQADAAADADQACACAAAEIABAHIABAIQAAAEgCADQgCACgEAAQgFAAgCgDQgBgCgBgIIgVAGQgNAGAAAIIAFACQAUADAJAGQAPAIAAASQAAAOgNAIQgKAGgPAAQgLAAgLgEg");
	this.shape_18.setTransform(233.3,46.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAUAqQgLAGgNAAQgMAAgHgFQgJgGgBgLQgEgXAAgRQAAgMADgQQABgHAHAAQAEAAACACQADACAAAEIgCANIgBAOIABAYQACAKACAHIAFACIAGABQALAAANgEIAAgSIgBgQQAAgTACgOQABgIAIAAQADAAACADQADACAAAEIgBAhIAAASIAAATIAAAGIAAAGQAAADgDADQgCACgDAAQgIAAgBgIg");
	this.shape_19.setTransform(224.6,47);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgXBFQgCgDAAgDQAAgJATgqIggg8IgEgGQgCgEAAgDQAAgEADgCQACgDAEAAQAEAAACADQAPAVAQAmIANgeIAOgbQADgFAEAAQAEAAADACQACADAAADIgBAFIgeBBQgMAYgFAQIgFARQgDAGgFAAQgEAAgDgCg");
	this.shape_20.setTransform(209.5,49.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgaBCQgDAEgEAAQgDAAgCgCQgDgCAAgEIAAgHIABgHIgBgcIgBgbIAAgXIAAgZQAAgFADgEQACgGAGAAQAHAAgBAHIAAAEIgBAEIAAATIAAAWQAHgFAIgCQAGgDAFAAQAUAAAMAPQAKANABATQgBAUgNAOQgNAOgRAAQgOAAgLgFgAgNgDIgNAIIAAAPIAAAOIAAAOIAMAFQAFACAIgBQALABAIgKQAIgJAAgNQAAgNgGgJQgIgIgMAAQgFAAgIAEg");
	this.shape_21.setTransform(200,44.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgdAmQgOgLAAgTQAAgXALgPQANgRATAAQAOAAAJAFQAMAGAAAMQAAAKgKAGQgFAEgOAFIggAQQAFAIAHADQAHAEAJAAQAGAAAIgCQALgDADgEQADgGADAAQADABADACQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEAQIAbgLQAPgJAHgFQgIgHgNAAQgKAAgHAJg");
	this.shape_22.setTransform(184.3,47);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgJBAIABggIAAggIABgfIABggQgBgJAIAAQAJAAAAAJIgBAgIAAAfIgCArIAAAVQgBAJgHAAQgIAAAAgJg");
	this.shape_23.setTransform(176.8,44.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AghBHQgDgCAAgEIAAgjIAAgiIgBgjIgBgSQAAgGACgFQADgFAFAAQAEAAACADQACACAAAEIgBACIAAAFQAHgFAIgCQAGgDAGAAQASAAAJAQQAGANAAAVQAAASgKAMQgLANgSAAQgIAAgLgDIAAAqQABAEgDACQgDADgDAAQgEAAgCgDgAgIguQgEADgHAHIABAoQAJAEAJAAQALAAAGgIQAFgGAAgLQAAgQgEgIQgEgIgIAAQgHAAgHADg");
	this.shape_24.setTransform(169.6,49.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgHA/QgDgCAAgEIAAgPIgBgRIABgUIABgTQAAgEADgDQACgCAEAAQADAAACACQACADAAAEIAAATIgCAUIABARIAAAPQAAAEgDACQgBADgDAAQgFAAgBgDgAgFgwQgDgDAAgEQAAgEADgDQAEgDACAAQAEAAAEADQADADAAAEQAAAEgDADQgEADgEAAQgCAAgEgDg");
	this.shape_25.setTransform(162.3,44.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgYAmQgNgLAAgTQAAgRAMgTQANgVAQABQAIAAALADQAOAGAAAIQAAACgCADQgDADgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAgBgBIgDgDQgFgEgMAAQgIAAgJAQQgIAPAAAJQAAAMAIAHQAHAGALAAQAFAAAGgDIALgFIADgBQAEgBACADQACADAAADQAAAHgOAFQgLAFgIABQgRAAgMgMg");
	this.shape_26.setTransform(155,47);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgIA/QgCgCAAgEIAAgPIgBgRIABgUIABgTQAAgEACgDQADgCAEAAQADAAACACQACADAAAEIAAATIgBAUIAAARIAAAPQAAAEgDACQgCADgCAAQgFAAgCgDgAgFgwQgDgDAAgEQAAgEADgDQAEgDACAAQAEAAAEADQADADAAAEQAAAEgDADQgEADgEAAQgCAAgEgDg");
	this.shape_27.setTransform(148,44.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgEA+QgDgCAAgEIAAgKIAAgKIgCgyIgTgBQgIgCAAgHQAAgEACgDQADgCADAAIATABIAAgMIgBgLQABgDACgDQACgCAEAAQAHAAACANIAAAIIAAAFIAAAFIAMgBIAMABQAFABAAAHQAAAEgCACQgDADgEAAIgEAAIgEAAIgMABIABAzIAAAEIAAAEQABATgKAAQgCAAgCgCg");
	this.shape_28.setTransform(141,45.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AghAoIAAg8IAAgJIAAgJQAAgJAIAAQAJAAAAAPQAQgQAUAAQAHAAAEAFQADAFAAALIAAAGQAAALgIAAQgIAAAAgIIAAgHIgBgHQgNACgIAGQgIAGgFALIAAAvQAAAJgIAAQgIAAAAgJg");
	this.shape_29.setTransform(132.7,47);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAcAtIgGgGIgPAGQgGACgDABQgVAAgJgMQgJgLAAgWQAAgUAOgPQAPgQATAAQAIAAAJAEQAMAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgCALIAAATQAAALABAGIAGAPIACAFIAAACQAAADgCACQgDADgDAAQgCAAgEgEgAgOgVQgKALAAAOQAAAOAFAHQAFAHAKABQAIAAAGgDIAJgHQgDgXAAgLIAAgIIACgKIgGgCIgEgBQgMAAgKALg");
	this.shape_30.setTransform(123.6,47.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AghBHQgDgCABgEIAAgjIAAgiIgBgjIgCgSQAAgGACgFQADgFAFAAQADAAACADQADACAAAEIAAACIgBAFQAIgFAGgCQAHgDAGAAQASAAAJAQQAGANAAAVQAAASgKAMQgLANgSAAQgHAAgLgDIAAAqQgBAEgCACQgCADgEAAQgEAAgCgDgAgHguQgFADgHAHIABAoQAKAEAIAAQALAAAGgIQAFgGAAgLQAAgQgEgIQgEgIgIAAQgHAAgGADg");
	this.shape_31.setTransform(114.3,49.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgFA+QgCgCAAgEIAAgKIABgKIgCgyIgUgBQgIgCAAgHQAAgEADgDQACgCAEAAIASABIAAgMIAAgLQAAgDACgDQADgCADAAQAHAAACANIAAAIIAAAFIAAAFIAMgBIAMABQAFABAAAHQAAAEgCACQgDADgDAAIgFAAIgEAAIgMABIACAzIAAAEIAAAEQAAATgJAAQgDAAgDgCg");
	this.shape_32.setTransform(99.7,45.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgYAxQgNgFAAgJQAAgEADgCQACgCAEgBQADAAAEAFQACABAHACIAKABQAHAAAFgBQAJgDAAgGQAAgMgRgEIgIgCQgMgDgFgDQgHgEAAgKQAAgSARgIIAQgGIARgFQADgCAFAAQADAAADADQACACAAAEIABAHIABAIQAAAEgCADQgCACgEAAQgFAAgCgDQgBgCgBgIIgVAGQgNAGAAAIIAFACQAUADAJAGQAPAIAAASQAAAOgNAIQgKAGgPAAQgLAAgLgEg");
	this.shape_33.setTransform(90.8,46.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAcAtIgGgGIgPAGQgGACgDABQgVAAgJgMQgJgLAAgWQAAgUAOgPQAPgQATAAQAIAAAJAEQAMAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgCALIAAATQAAALABAGIAGAPIACAFIAAACQAAADgCACQgDADgDAAQgCAAgEgEgAgOgVQgKALAAAOQAAAOAFAHQAFAHAKABQAIAAAGgDIAJgHQgDgXAAgLIAAgIIACgKIgGgCIgEgBQgMAAgKALg");
	this.shape_34.setTransform(82.1,47.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AghBHQgDgCAAgEIAAgjIAAgiIgBgjIgBgSQAAgGACgFQADgFAFAAQAEAAACADQACACAAAEIAAACIgBAFQAHgFAIgCQAGgDAGAAQASAAAIAQQAHANAAAVQAAASgKAMQgLANgSAAQgIAAgLgDIAAAqQABAEgDACQgDADgDAAQgEAAgCgDgAgIguQgEADgHAHIABAoQAJAEAJAAQALAAAGgIQAFgGAAgLQAAgQgEgIQgEgIgIAAQgHAAgHADg");
	this.shape_35.setTransform(72.8,49.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgeA8QgNgNAAgTQAAgYANgNQAMgOATABQAKAAAGACIAIAHQABgmACgNQABgHAHAAQAIAAAAAIQAAAMgEAqIgBAZQAAAeADAOIAAACQAAAEgCACQgDACgDAAQgFABgDgJQgGAGgHABQgHADgGAAQgSAAgMgMgAgUACQgHAIAAARQAAAMAIAJQAIAHALABQAGgBAFgDIAKgHIADgDIgBgPIAAgKIABgKQgEgHgFgCQgGgEgIAAQgNAAgIAIg");
	this.shape_36.setTransform(422.5,17.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAVArIgCgTIgBgUIAAgHIAAgIQAAgTgHAAQgKAAgIAMQgIAKgEAQIgBAIIgBAJIABAIIABAHQAAAEgDADQgCACgEAAQgEAAgCgCQgDgDAAgEIAAgHIgBgIIABgZIACgZIgBgIIAAgJQAAgDADgCQACgDAEAAQAIAAABAMIAAAKQAPgUAOAAQAOAAAGANQAEAHAAARIAAAJIAAAHIACATQACALAAAIQAAAEgDACQgCACgEAAQgIAAgBgIg");
	this.shape_37.setTransform(412.8,19.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAcAtIgGgHIgPAHIgJACQgVABgJgMQgJgLAAgXQAAgTAOgQQAPgPATAAQAIAAAJAEQAMAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAABIgCAKIAAATQAAALABAGIAGAPIACAFIAAACQAAADgCACQgDADgDAAQgCAAgEgEgAgOgVQgKALAAAOQAAAOAFAHQAFAIAKAAQAIAAAGgEIAJgGQgDgXAAgLIAAgIIACgKIgGgCIgEgBQgMAAgKALg");
	this.shape_38.setTransform(403.3,20);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgdAmQgOgLAAgTQAAgXALgPQANgRATAAQAOAAAJAFQAMAGAAAMQAAAKgKAGQgFAEgOAFIggARQAFAHAHADQAHAEAJAAQAGAAAIgCQALgDADgEQADgGADABQADAAADACQACACAAAEQAAAJgQAHQgNAGgNAAQgTAAgMgKgAgRgXQgHAJgEAPIAbgLQAPgJAHgFQgIgHgNAAQgKAAgHAIg");
	this.shape_39.setTransform(388.6,19.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgYAxQgNgFAAgJQAAgEADgCQACgCAEgBQADAAAEAFQACABAHACIAKABQAHAAAFgBQAJgDAAgGQAAgMgRgEIgIgCQgMgDgFgDQgHgEAAgKQAAgSARgIIAQgGIARgGQADgBAFAAQADAAADADQACACAAAEIABAHIABAIQAAAEgCADQgCACgEAAQgFAAgCgDQgBgDgBgHIgVAGQgNAGAAAIIAFACQAUADAJAHQAPAIAAARQAAAPgNAHQgKAGgPAAQgLAAgLgEg");
	this.shape_40.setTransform(378.9,19.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAVArIgCgTIgBgUIAAgHIAAgIQAAgTgHAAQgKAAgIAMQgIAKgEAQIgBAIIgBAJIABAIIABAHQAAAEgDADQgCACgEAAQgEAAgCgCQgDgDAAgEIAAgHIgBgIIABgZIACgZIgBgIIAAgJQAAgDADgCQACgDAEAAQAIAAABAMIAAAKQAPgUAOAAQAOAAAGANQAEAHAAARIAAAJIAAAHIACATQACALAAAIQAAAEgDACQgCACgEAAQgIAAgBgIg");
	this.shape_41.setTransform(370.3,19.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgdAmQgOgLAAgTQAAgXALgPQANgRATAAQAOAAAJAFQAMAGAAAMQAAAKgKAGQgFAEgOAFIggARQAFAHAHADQAHAEAJAAQAGAAAIgCQALgDADgEQADgGADABQADAAADACQACACAAAEQAAAJgQAHQgNAGgNAAQgTAAgMgKgAgRgXQgHAJgEAPIAbgLQAPgJAHgFQgIgHgNAAQgKAAgHAIg");
	this.shape_42.setTransform(360.6,19.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgEA+QgDgCAAgEIAAgKIAAgKIgCgyIgTgBQgIgCAAgHQAAgEACgDQADgCADAAIATABIAAgMIgBgLQABgDACgDQACgCAEAAQAHAAABANIAAAIIAAAFIAAAFIANgBIAMABQAFABAAAHQAAAEgCACQgDADgEAAIgEAAIgEAAIgMABIABAzIAAAEIAAAEQABATgKAAQgCAAgCgCg");
	this.shape_43.setTransform(351.3,18.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgFA+QgCgCAAgEIAAgKIABgKIgCgyIgUgBQgIgCAAgHQAAgEACgDQADgCAEAAIASABIAAgMIAAgLQAAgDACgDQADgCADAAQAHAAACANIAAAIIAAAFIAAAFIAMgBIAMABQAFABAAAHQAAAEgCACQgDADgEAAIgEAAIgEAAIgMABIACAzIAAAEIAAAEQAAATgJAAQgDAAgDgCg");
	this.shape_44.setTransform(337.4,18.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgYAxQgNgFAAgJQAAgEADgCQACgCAEgBQADAAAEAFQACABAHACIAKABQAHAAAFgBQAJgDAAgGQAAgMgRgEIgIgCQgMgDgFgDQgHgEAAgKQAAgSARgIIAQgGIARgGQADgBAFAAQADAAADADQACACAAAEIABAHIABAIQAAAEgCADQgCACgEAAQgFAAgCgDQgBgDgBgHIgVAGQgNAGAAAIIAFACQAUADAJAHQAPAIAAARQAAAPgNAHQgKAGgPAAQgLAAgLgEg");
	this.shape_45.setTransform(328.5,19.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAcAtIgGgHIgPAHIgJACQgVABgJgMQgJgLAAgXQAAgTAOgQQAPgPATAAQAIAAAJAEQAMAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAABIgCAKIAAATQAAALABAGIAGAPIACAFIAAACQAAADgCACQgDADgDAAQgCAAgEgEgAgOgVQgKALAAAOQAAAOAFAHQAFAIAKAAQAIAAAGgEIAJgGQgDgXAAgLIAAgIIACgKIgGgCIgEgBQgMAAgKALg");
	this.shape_46.setTransform(319.8,20);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AghBHQgDgCAAgEIAAgjIAAgiIgBgjIgBgSQAAgGACgFQADgFAFAAQAEAAACADQACACAAAEIgBACIAAAFQAHgFAIgCQAGgDAGAAQASAAAIAQQAHANAAAVQAAASgKAMQgLANgSAAQgIAAgLgDIAAAqQAAAEgCACQgDADgDAAQgEAAgCgDgAgHguQgFADgHAHIABAoQAKAEAIAAQALAAAGgIQAFgGAAgLQAAgQgEgIQgEgIgIAAQgHAAgGADg");
	this.shape_47.setTransform(310.5,22);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgdAmQgOgLAAgTQAAgXALgPQANgRATAAQAOAAAJAFQAMAGAAAMQAAAKgKAGQgFAEgOAFIggARQAFAHAHADQAHAEAJAAQAGAAAIgCQALgDADgEQADgGADABQADAAADACQACACAAAEQAAAJgQAHQgNAGgNAAQgTAAgMgKgAgRgXQgHAJgEAPIAbgLQAPgJAHgFQgIgHgNAAQgKAAgHAIg");
	this.shape_48.setTransform(295.5,19.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAYBDIgDgVIgCgVIAAgHIABgHQAAgPgJAAQgLAAgIAJQgFAFgHAPQAAAhgDAGQgDAGgFAAQgDAAgDgDQgDgCAAgEIABgEIABgMIAAgNIAAhAIABgPIgBgIIgBgJQABgDACgDQADgCADAAQAIAAAAAIIACAPIgBATIAAAUIAAAHQAHgJAJgFQAHgFAJAAQAOAAAGAKQAEAGAAAPIABARIACASIADASIAAADQAAADgCADQgDACgEAAQgGAAgCgGg");
	this.shape_49.setTransform(285.3,17.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgFA+QgCgCAAgEIAAgKIAAgKIgBgyIgUgBQgIgCAAgHQAAgEADgDQACgCAEAAIASABIAAgMIAAgLQAAgDACgDQADgCADAAQAHAAACANIAAAIIAAAFIAAAFIAMgBIAMABQAFABAAAHQAAAEgCACQgDADgEAAIgEAAIgEAAIgMABIACAzIAAAEIAAAEQAAATgJAAQgDAAgDgCg");
	this.shape_50.setTransform(275.7,18.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgEA0QgDgDAAgEIgCgfIgCgfQAAgJgDgFQgGADgGAGIgKAMIgFAFIgBAPIgBAPIABAHIABAHQAAAEgDACQgDADgDAAQgKAAAAgXIABgQIABgOIgBgOIgBgOQAAgUAJAAQAEAAACADQADADAAADIAAAFIgBAGIABAJQAEgJAJgIQAJgIAGAAQAOAAAEAOQAFgGAHgEQAGgDAJAAQAPAAAFAQQABADADAWIAGAxQAAAEgCACQgDADgEAAQgHAAgBgIIgEgbIgDgbQAAgGgCgFQgDgIgEAAQgDAAgJAFQgJAFgCADIAAARIADAWQACAOAAAJQAAAEgDADQgCACgEAAQgDAAgCgCg");
	this.shape_51.setTransform(259.2,19.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AghAoIAAg8IAAgJIAAgJQAAgJAIAAQAJAAAAAPQAQgQAUAAQAHAAAEAFQADAFAAALIAAAGQAAALgIAAQgIAAAAgIIAAgHIgBgHQgNACgIAGQgIAGgFALIAAAvQAAAJgIAAQgIAAAAgJg");
	this.shape_52.setTransform(248,19.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgZAlQgMgMgBgUQAAgTAKgPQAMgSAVAAQASAAAJAQQAHANAAASQAAATgKAOQgMAPgRAAQgPAAgKgLgAgPgRQgGAKAAAMQAAAMAHAIQAGAFAIABQAIAAAHgHQAHgHABgNQABghgUAAQgMAAgHAMg");
	this.shape_53.setTransform(238.6,20);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgNBLQgDgCAAgEIAAgCQACgLAAgNIAAgYIAAgZIgOABQgJAAAAgJQAAgIAQgBIAIAAIABgNQADgUAHgJQAIgLATAAQANAAAAAIQAAAJgLAAQgWAAgCAdIAAAGIATgBQAOAAAAAIQAAAHgHABIgHAAIgUACIgBATIAAAQIABAQQAAARgCAJQgBAHgGAAQgEAAgCgCg");
	this.shape_54.setTransform(229.3,17.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF0000").s().p("AgiA9QgRgHAAgOQAAgDADgDQACgCAEAAQAEAAADAEQAFAIADABQAIAFAOABQANAAALgGQAPgIAAgNQAAgMgMgFQgLgHgOAAQgOAAgKgFQgNgHAAgNQAAgQASgNQARgMARAAQAJAAALADQAOAEAAAFQAAAJgIAAIgMgCIgOgDQgNABgJAGQgKAHAAAKQAAAHANADQAFABANABQAUACALALQAKAJAAAPQAAAVgTAMQgRALgVAAQgQAAgNgGg");
	this.shape_55.setTransform(213.4,18.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FF0000").s().p("AgpBDQgCgDAAgEIAAgaIABgiIACglQAAgHABgQQAAgFADgBQALgEAQAAQAOAAAPALQAQAMAAARQAAAXgRAMQANAGAGAGQAHAIAAAHQAAALgMAKQgIAHgIAEQgTAHgfAAQgEAAgEgEgAgaAjIAAASQAWgBAOgFQAGgCAGgFQAFgFABgDQAAgDgMgGQgJgEgHgCIgIgBIgEAAIgDAAIgLgBIAAAUgAgXgzIAAAPIgBAiIANABQAMgBAJgIQAIgHABgNQgBgIgIgHQgKgHgJAAIgOABg");
	this.shape_56.setTransform(201.8,17.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FF0000").s().p("AgsBDQgDgDAAgEIAAgUIgBgVIACgXIACgYIgBgNIgBgOQAAgFADgEQADgEAGAAIAVACQAMABAHAFQAkATAAAbQAAANgMAKQgKAIgOAEQAbAPANAQQADADAAADQAAAEgDACQgDADgDAAQgEAAgDgDQgdgcgigKIAAARIABARQAAAEgDADQgCACgEAAQgEAAgCgCgAgbgmIAAAKIgBASIgCAQIAEAAIAEAAQAWAAALgGQAEgBAFgFQAEgFAAgDQAAgMgOgLQgLgJgOgCIgNgBg");
	this.shape_57.setTransform(190.3,17.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FF0000").s().p("AgmBEQgIgIAAgcIAAgNIABgOIgBgEQAAgCABgDIACglIAAgKIgCgJQABgLAIAAQAEAAACADQALgDAJgBIARgCQAVAAANAFQAGADAAAGQAAADgCADQgCADgEAAIgDAAQgPgFgOAAIgOACQgJABgKADIABAJIgCAhIAmgDIAUgCQAEAAADACQADADAAAEQAAAHgJABIgUACIgoADIgBAMIAAALQABATACAEQACACAMAAIAQAAIAQgBIAFAAIAFgBQAKAAAAAJQgBAIgHABQgIACgbAAQgbAAgIgHg");
	this.shape_58.setTransform(179.1,17.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF0000").s().p("AgPBAQgKgbgOgxIgHgYQgFgSAAgGQAAgEADgDQADgCADAAQAHAAACAIIADAPIAIAeQAJAfAIAYIAAgBIAXg/IAHgVQAGgNAFgIQADgDAEAAQADAAADADQADACAAAEQAAADgCADQgFAIgEAIIgHAUIgXA/IgJAWQgCAFgFAAQgHAAgDgHg");
	this.shape_59.setTransform(168,17.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FF0000").s().p("AgsBDQgDgDAAgEIAAgUIgBgVIACgXIACgYIgBgNIgBgOQAAgFADgEQADgEAGAAIAVACQAMABAHAFQAkATAAAbQAAANgMAKQgKAIgOAEQAbAPANAQQADADAAADQAAAEgDACQgDADgDAAQgEAAgDgDQgdgcgigKIAAARIABARQAAAEgDADQgCACgEAAQgEAAgCgCgAgbgmIAAAKIgBASIgCAQIAEAAIAEAAQAWAAALgGQAEgBAFgFQAEgFAAgDQAAgMgOgLQgLgJgOgCIgNgBg");
	this.shape_60.setTransform(150.8,17.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FF0000").s().p("AAfAuQgDgIgDgUIgYAEIgWAFQgEAMgLAWQgDAFgFAAQgDAAgDgDQgDgCAAgEQAAgEAOgcQgCgCAAgDQAAgIAJgCIAZgqQAUghAFAAQAHAAACAKIAGAdIANA8IAFAOIADAKQAAADgDADQgDACgDAAQgIAAgGgUgAgLAGIAggGIgHghg");
	this.shape_61.setTransform(138.2,17.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FF0000").s().p("AglBFQgFgDAAgKIABgdQADgoAAgxQAAgEACgCQADgDADAAQAEAAADADQACACAAAEQAAAygCAoIgBANIgBANQAXAAAigLIADAAQAEAAACADQACACAAAEQAAAGgFACQgKAFgVADQgTAEgMAAQgJAAgEgDg");
	this.shape_62.setTransform(127,17.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF0000").s().p("AgmA0QgLgNgDgYQgBgMAAggIAAgUIACgLQACgGAGAAQAIAAAAAOIAAA0QAAA0AkAAQAjAAAAhYIAAgJIAAgHQAAgFACgFQADgFAEAAQAJAAAAAMIAAALIAAALQAABlg0AAQgbAAgNgQg");
	this.shape_63.setTransform(115.3,17.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FF0000").s().p("AgsA8QgLgMAAgZQAAgWALgXQAKgZASgOQAKgKAMAAQAIAAAOAFQAPAHAAAHQAAAEgCACQgDAEgEAAQgCgBgDgCQgOgIgJAAQgGAAgGAHIgLANQgVAbAAAdQABARAFAHQAFAHAPAAQAPAAALgKQANgLAFgTQgZABgQAIIgEABQgEAAgDgDQgCgCAAgEQAAgFAEgDQATgKAugBQAEABACACQADACAAADQAAAGgFADQgFAbgRAQQgSAQgXAAQgVAAgLgMg");
	this.shape_64.setTransform(102.6,17.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FF0000").s().p("AgmBEQgIgIAAgcIAAgNIABgOIgBgEQAAgCACgDIABglIAAgKIgBgJQAAgLAJAAQADAAACADQALgDAJgBIARgCQAVAAANAFQAGADAAAGQAAADgCADQgDADgDAAIgDAAQgPgFgOAAIgOACQgJABgKADIABAJIgBAhIAlgDIAUgCQAEAAADACQADADAAAEQAAAHgJABIgUACIgoADIgBAMIAAALQAAATADAEQACACAMAAIAPAAIARgBIAFAAIAFgBQAKAAgBAJQAAAIgHABQgIACgbAAQgbAAgIgHg");
	this.shape_65.setTransform(91,17.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FF0000").s().p("AgsBDQgDgDAAgEIAAgUIgBgVIACgXIACgYIgBgNIgBgOQAAgFADgEQADgEAGAAIAVACQAMABAHAFQAkATAAAbQAAANgMAKQgKAIgOAEQAbAPANAQQADADAAADQAAAEgDACQgDADgDAAQgEAAgDgDQgdgcgigKIAAARIABARQAAAEgDADQgCACgEAAQgEAAgCgCgAgbgmIAAAKIgBASIgCAQIAEAAIAEAAQAWAAALgGQAEgBAFgFQAEgFAAgDQAAgMgOgLQgLgJgOgCIgNgBg");
	this.shape_66.setTransform(79.7,17.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FF0000").s().p("AgsBDQgDgDAAgEIAAgUIgBgVIACgXIACgYIgBgNIgBgOQAAgFADgEQADgEAGAAIAVACQAMABAHAFQAkATAAAbQAAANgMAKQgKAIgOAEQAbAPANAQQADADAAADQAAAEgDACQgDADgDAAQgEAAgDgDQgdgcgigKIAAARIABARQAAAEgDADQgCACgEAAQgEAAgCgCgAgbgmIAAAKIgBASIgCAQIAEAAIAEAAQAWAAALgGQAEgBAFgFQAEgFAAgDQAAgMgOgLQgLgJgOgCIgNgBg");
	this.shape_67.setTransform(68.5,17.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FF0000").s().p("AgmBBQgCgDAAgEQAAgDACgDQADgDADAAIATgBIABgRIAAgOIgBgPQAAgUADgeIgMAAIgLABQgEAAgDgDQgCgCAAgEQAAgJAIAAIAbgBQAQAAAbAEQAHABAAAIQAAAEgDADQgCACgEAAIgOgBIgOgCQgCAZAAAXIAAAPIABAPIgBAPIAcAAQAEAAACACQADADAAAEQAAAEgDACQgCADgEAAIgPAAIgPAAIgQACIgSABQgDAAgDgCg");
	this.shape_68.setTransform(57.7,17.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(255,255,255,0.502)").s().p("EglAAEsIAApXMBKBAAAIAAJXg");
	this.shape_69.setTransform(238.3,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.IrregularVerbsDef, new cjs.Rectangle(1.4,0,473.8,60), null);


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
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("EAlbAVBMhK1AAAMAAAgqBMBK1AAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#DDF5FF","#3399FF"],[0,1],0,-134.5,0.1,134.6).s().p("EglaAVBMAAAgqBMBK1AAAMAAAAqBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Background, new cjs.Rectangle(-240.9,-135.9,481.9,272), null);


(lib.animCarmen_swingthrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,1,1).p("AkUjRQgBAEAAAGQgUARgSgWQgNgQACgdQAAgCABgCAkXjeQAAABAAABQABACAAABQABACAAACQABACAAACAkYjfQAAAAABABAg1hjQgXALgfgBQgeAAgdgBQgagBgYAFQgBAAAAAAQgDABgEAAQgIACgGABQgKAAgEgEQgEgEgBgFQgCgbgEgcQgDgegIgZQgBgCgBgCQAAgBAAgBQAAgBABgBQAAgGgEgDAANg+QAAACAAABQACAagEAYQgGAZgBAaQAAAIgBAGIAAAAQgBAFgCAFQAAADgBADABTgQQABABAAABQANARAHAYQAIAegKAZQgIAUADAUIAAAAQABAGACAFQACAGAEADAFCBrQAMAVgOAdQgMAYgNATQgNATgRAQQgBABAAAAQgHAGAAAM");
	this.shape.setTransform(192.8,-131.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.3,1,1).p("AFTxmQgCgGAaAEQAXADAXANQAWAMATAPQAUASAMASQAKAOAGANQAGAJADAMQADANABAPQACAegEAbQgEAcgJAXQgJAYgCAbQAAAIgCAGQAAAFAAAGQgBAIAAAIQgBAIAAAIQgBAFAAAFQgBAUgEAPADVxdQATgFAOgFQgFABgFABQgIADgKADQgCABgDABQgCABgCAAQgWAGgUAMQgUAMgTAUQgRARgIAXQgJAYgEAaQgFAcgEAbQgDAZgDAbQgBARgHAMQgBACgBACQgDAGgEAFQgFAGgFAFQgWAWgPAZQgMAUgVAUQgUATgWATQgSAQgSARQgVAUgLAcQgMAdgDAhQgDAdATgPQALgIAKgJQACgCADgDQAOgNANgNQARgUAXgOQAEgDAFgCQgBAHgCAGQgKAbgGAXQgBAEgBAEQAFgDADgEQANgaAUgVQAUgVAdgNQgFALgCAKQAUgMAQgRQABAFACAFQABADACACQABAFACAFQgBAFAAAFQgDAcgHAVQgGAUgNARQgBAAAAABQgRAUgQAQQgCACgBABQgRARgQAQQgRAQgQAQQgFAEgEAEQgBABgBABQgNANgOAMQgSARgLAVQgKATgPAUQgBABAAACQgHAWgDAYQgFAcgHAaQgHAXgNAZQgMAXgHAbQgGAZgHAbQgGAZgEAbQgDAWgFAXAD2xnQAAAAABgBQAKgCAKgCQAcgIAaAIQAJADAJADQAEACADACAGqvFQgKgQgMgUQgKgQgQgSQgPgSgbAAQgBAAAAAAQgGAWgLASQgMARgJAXQgKAWAFAZQAEAVgCAWQgBAFgBAFQAAAXgEASQgEAbgIAUQgHASgMANQgEAEgDADQgPARgJASQgKAUgRAQQgJAJgGAJIAAAAQAAAAAAABQABABABACQABADABACQABAEADAEQAHAMAOAKQATAMAVAJQAcAMASgSQAJgKAAgOQAAgBAAAAQAAgEAAgHQgEgDgEgDQgHgMgHgMQgKgQAKgMQAMgQALgSQAVABAQgFQAWgHATgMQARgLAPgRQAMgQALgUQAIgQgDgVQAJgDAIgEQAFgDgBgGQgDgWgWgLQgIgEABgEQAAgBABAAAGOvLQgDgDgFgBQAIgIgDgMAGWvAQgBgBAAgBQgCgGgFgDAGWvAQAAACABACIAAAAQABAIAAAKQAAAGgBAFQgUgCAGAPQAB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ATQgMAXgQAVQgRAUgJAVQgKAYgggDAodQRQgLAGgKALQgIAKgJAEQgEABgEACQACABACACQANAMAZAAQACAAADgBQAAAAABAAQAJgCAHgKQALgNASgCAobRBQAOARATANQAFADAEgCIAAAAQAEgDACgIQAIgcAaADAnxRgQALARAdAAQAOAAAKgHQAFgCAEgEAClDpQAJgGALgMQAMgOAUgFQAOgDASgEQATgFAVABQAXABAWABQAFABAFAAQgEgGgEgFAB5i7QgVgOAEAcQACAPAHgNQAEgJAEgHgACpitQgCACgBABQgQAQgUANQgVAOgdgDQgcgDgbgGQgZgGgZgKQgXgIgWgNQgYgNgUgNQgSgLgRgIQgCgBgCgBAiVjdQgCACgBABAiki1QgHAXgIAWQgJAXgEAbQgEAYAFAdQAEAWAHAXQAHAZAIAZQAHAYAHAZQAFAVARARAi4BOQACACACACQAGALABAPQAAAMADALQACAGACAGAilCTQABABABACIgBgBQgEgBgEgCQAFAEAEAEQABAAAAABQABABABACQgBgCgBgCQgBgCAAgCACfDZQAAAAAAgBQgEgQgGgPQgKgXgJgZQgJgXgLgaQgLgYgIgXQgKgagJgYQgLgdADgWACfDZQACAJACAIQABAAABgBQgDgIgDgIgACbEBQADAAACAAQAJAAgCgNQgBgGgBgFAA8EMQAAAAAAAAQgBgBgBAAQABAAABgBQAUgFAXgCQAJgBAKAAIABAAQAQgBAQAAQAHAXAMAVQALAUAIAYQABADABACQABADACAAQABAAABgBQgCAAgBgBIAAAAQgBgBgBAAAB7ECQADAXABAYQgBABABABQAAABAAAAIgBAAABKGMQAAgCAAgBQAAAAABABABKGJQgCgBgBgBQgBgBAAAAQADAAABADgAB0GnQgCAEgBAFQAAAEgBAEQAAABAAABQgCAHgDAIQgCAHgFAHQgEAGgEAGQgEAGgDAIAg0GuQABACABADADTHpQgCgBgCgBQABAAABAAQAAABABABQAAAAABAAQAAABAAAAQADACABABQgCgCgCgCQAAAAgBAAABUHyQABAAAAgBQAAgBgBgBQAAAAAAABQAAABAAABgADoPEQASASAaAFQAaAGAcAIQAZAIAZAIQAaAJAbAEQAcAFAZADQAbAEAOAXQAKASgQAMQgVAOgbAIQgaAHgdAEQgcAEgagBQgGAAgIgCQgbgIgcAAQgcgBgdgCQgbgBgbgDQgcgDgcADQgZADgbADQgkADgMgTQgLgQAKgRQANgXANgRQAQgUAXgMQAMgIAIgLQADgEADgEQABgEACgFQAGgNAEgPQAIgaAEgaQAEgZAEgdQAEgcAAgdQgBgcAEgaQAEgaAAgdQgBgbANgWQAMgWAPgWQAKgQAFgTQABgEABgEQACAFACAFQADAIgCALAGJDLQABABABABQAPALgWAOQgKAGgJADQgGACgGAAADaIPQgFgSgCgUAF8JbQgFAJgEAJQgGAOgGANQgMAZgNAVQgPAXgNAWQgOAXgFAbQgFAagKAaQgEALgEALQgIAbgHAXQgJAbgIAYIAAAAQgDAIgBAI");
	this.shape_1.setTransform(181.5,-168.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#339966").s().p("AjoHUQgEgEgBgFIgGg3QgDgegIgZIgCgEIAAgCIAAACIgBgEIABACIACACIgBgEIAAgBQAAgFgEgDIgBgBIgEgNQgDgLAAgMQgBgPgGgKIgEgFQgCgKgFgOQgJgWgEgcIgHg0QgEgeAHgYQAIgYAHgUQAKgYAKgRQAKgRALgNIADgEQARAIASAMQAUANAYAMQAWAMAXAJQAaAKAZAGQAbAGAcADQAcACAVgNQAUgNAQgQIADgDQAIAUAOAVIAdAsIAfAtIAeAsQAPATALAaQAJAUAPAWQARAYAMAWQAOAZAIAYQAEALAHAKIgHgEQgUgIgWgDIgIgMIAIAMIgKgBIgtgDQgVAAgTAEIggAIQgUAEgMAOQgLAMgJAGIACALQACAOgJAAIgFgBIggABIgBAAIgTABQgWACgUAGIgCAAIACABQgXALgfgBIg7gBQgagBgYAFIgBgBIAAABIgHABIgOADIgBAAQgJAAgEgEgAgVCxIATA0QAHAWALAYQAMAaAIAXIATAwQAGAQAEAQIAAABIAEARIACgCIgGgPIAAgBQgEgQgGgQIgTgwQgIgXgMgaQgLgYgHgWIgTg0QgJgYAAgTIABgHIgBAHQAAATAJAYgAkdCaQAEAWAHAYIAPAxIAOAxQAFAWARAQQgRgQgFgWIgOgxIgPgxQgHgYgEgWQgDgRAAgPQAAgLACgLQAEgaAJgXQAIgWAHgYQgHAYgIAWQgJAXgEAaQgCALAAALQAAAPADARgAELGZQgIgSgJgPQAWADAUAIIAHAEIACACQAPALgWANQgJAHgKACIgIgRgAD6F4IAAAAgAj/FVIgCgEIgCgDIAAgCQAEADAAAFIAAABIAAAAgAkDFMIAAAAgACEjlQgcgDgVgGIgOgEIgFgCIgVgHIgGgCIgggKQgOgDgSgIQgQgGgRgFQgNgEgJgGIADgDQAQgQARgUIABgCQANgQAGgVQAHgVADgbIADgBQAEARgBAUQAAAdADAZQAFAeAVAQQAAgdAEgXQAFgdAJgaQAEASAFARQAIAbAPAPQADgWgBgZQgBgdACgaQADgVAFgSIAFgIIAFgHIAAABIACAEIACAEIAEAIQAHANAOAJQATANAVAJQAcAMASgTQAJgJAAgPIAAgBIAAgLQAQALAPANQAQAPANATQAOAUAHAVQgBADACACQAGAVgDAcQgCAagTARQgRAOgaAHIgGACIgBAAQgTAEgVACIgZABQgQAAgPgCg");
	this.shape_2.setTransform(190.8,-187.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgxBCQAHgVATgMQALgHAPgBQgCAWgJAOQgJANgPAFQgHADgEAAQgLAAAFgQgAAJg6IgDgFQgGgPAUABQgCANgGAJIgDgDgAAwhAQgTgLAXgGQAAAJgCAJIgCgBg");
	this.shape_3.setTransform(220.1,-253.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC99").s().p("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");
	this.shape_4.setTransform(176.9,-164.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#996600").s().p("AiVEeQgEgZABgdQAAgUgEgRIgCgJIgDgKIgCgGIgDgKQgRARgUAMQACgKAFgKQgdAMgVAWQgUAVgNAaQgCADgGAEIADgJQAGgXAJgaQACgGABgIIgJAFQgWAPgSATQgNAOgOANIgFAEIgUARQgTAPACgdQADghAMgcQALgcAWgVIAjghIArgmQAVgTAMgUQAPgZAWgVIAKgLIAHgMIADgEQAGgMACgQIAGg1IAIg2QAFgbAJgYQAIgWARgSQASgTAVgMQAUgMAVgGIAEgCIAggKIABAAIAUgFQAcgHAaAHIASAHQgBgHAaAEQAXADAXANQAWAMASAQQAVASALARQAKAPAGANIAFAJIAEALQADAOABAPQACAdgEAcQgDAbgKAYQgJAYgBAaIgCAOIgBAKIgBAQIgBARQgCASgHAPQgJAUADAZQACAXAFAWQAFAZAOAVQATAdAYARIAlAcQAXARAbAGQgUAJgZgBQgegBgYgFQgYgEgZgJIgygRQgTgGgOgMIgBgEIgBgBQgHgVgOgUQgNgTgQgPQgOgNgQgLIgJgFIgOgZQgJgPAJgMQANgRAKgRQAVAAARgFQAWgHASgLQASgMAOgRQANgPAKgTQAIgRgDgVQAJgCAIgFQAFgCgBgHQgDgWgWgLQgIgDACgFIAAgBQACgJAAgIQgBgQgJgOIgDgEIgWgjQgJgRgQgSQgQgRgbgBIAAABQgGAVgMASQgLARgKAXQgJAWAFAaQAEAUgDAWIgCAKQAAAXgDATQgFAagHATQgHASgNANIgHAIQgOARgJASQgJAUgRAQQgKAIgGAJIAAAAIgFAHIgEAIQgGARgCAWQgDAaABAdQABAZgDAWQgPgPgIgbQgFgRgEgSQgJAagFAdQgEAXABAdQgXgQgEgegABuk9IgIgDIAIADg");
	this.shape_5.setTransform(205.1,-249);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.animCarmen_swingthrow, new cjs.Rectangle(118.3,-283.2,126.4,229.4), null);


(lib.animbaseball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_3 = function() {
		/* gotoAndPlay(1);
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(17));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(0.3,1,1).p("AjlCvQBMh5DJASQBzAKBNBJAjviGQB0BzDDg9QBVgbArhD");
	this.shape.setTransform(61,-142.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.3,1,1).p("ADNDNQhVBVh4AAQh3AAhVhVQhVhVAAh4QAAh3BVhVQBVhVB3AAQB4AABVBVQBVBVAAB3QAAB4hVBVg");
	this.shape_1.setTransform(61,-141);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjMDNQhVhVAAh4QAAh3BVhVQBVhVB3AAQB4AABVBVQBVBVAAB3QAAB4hVBVQhVBVh4AAQh3AAhVhVgAjlCgIABgBIABgCQBDhmCgAAIAAAAIAAAAQAVAAAYACIABAAIADAAQBzAKBMBKQhMhKhzgKIgDAAIgBAAQgYgCgVAAIAAAAIAAAAQigAAhDBmIgBACIgBABgAg1hJQA2AABAgTIABgBIAFgBQBWgbArhEQgrBEhWAbIgFABIgBABQhAATg2AAIAAAAIgBAAQhpAAhKhGIAAAAIgGgFIAGAFIAAAAQBKBGBpAAIABAAIAAAAg");
	this.shape_2.setTransform(61,-141);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF0000").ss(0.3,1,1).p("Aj7iDQCOAOBLC8QApBrgfBlAAUkWQgyCbCNCSQA+BBBPAI");
	this.shape_3.setTransform(61.6,-141.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.3,1,1).p("AETBcQgmBxhsA2QhrA2hxgmQhygmg1hrQg2hsAmhxQAmhxBsg2QBrg2BxAmQByAmA1BsQA2BrgmBxg");
	this.shape_4.setTransform(61,-141.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhbETQhygmg1hrQg2hsAmhxQAmhxBsg2QBrg2BxAmQByAmA1BsQA2BrgmBxQgmBxhsA2Qg+AfhBAAQgtAAgwgPgAgREVQANgrAAgsQAAg8gYg9QhLi8iOgOQCOAOBLC8QAYA9AAA8QAAAsgNArgAB1AVQA/BBBPAIQhPgIg/hBQhohrAAhxQAAgoANgpQgNApAAAoQAABxBoBrg");
	this.shape_5.setTransform(61,-141.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2,p:{scaleX:1,scaleY:1,rotation:0,y:-141}},{t:this.shape_1,p:{scaleX:1,scaleY:1,rotation:0,y:-141}},{t:this.shape,p:{scaleX:1,scaleY:1,rotation:0,x:61,y:-142.5}}]}).to({state:[{t:this.shape_2,p:{scaleX:0.999,scaleY:0.999,rotation:-62.9,y:-141}},{t:this.shape_1,p:{scaleX:0.999,scaleY:0.999,rotation:-62.9,y:-141}},{t:this.shape,p:{scaleX:0.999,scaleY:0.999,rotation:-62.9,x:59.8,y:-141.7}}]},1).to({state:[{t:this.shape_2,p:{scaleX:0.999,scaleY:0.999,rotation:63.4,y:-141.1}},{t:this.shape_1,p:{scaleX:0.999,scaleY:0.999,rotation:63.4,y:-141.1}},{t:this.shape,p:{scaleX:0.999,scaleY:0.999,rotation:63.4,x:62.3,y:-141.7}}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(31,-171,60,60);


(lib.Tween25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AARAhIgCgPIgBgPIAAgFIAAgHQAAgPgFAAQgIAAgGAKQgGAIgEALIAAAHIgBAHIABAGIAAAGQAAADgCACQgCACgDAAQgDAAgCgCQgBgCAAgDIgBgGIAAgGIABgTIABgTIAAgHIgBgGQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAGAAABAJIAAAIQAMgPALAAQALAAAEAJQADAHAAAMIAAAHIAAAGIACAOIABAPQAAADgCACQgCACgDAAQgGAAAAgHg");
	this.shape.setTransform(43,11.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AAEAUIgCgQIgCgOIgFAMIgKAcIgDAEQgCAEgFAAQgFAAgFgUIgFgcIgCgKIAAgLQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQACgCAEAAQAFAAABAFIACAKIABAKIADAeQAIgUAIgcQADgHAEAAQAFAAADAIIAEAZIAFAaIAEgTIAJgkQABgEAGAAQACAAACACQABAAAAABQABAAAAABQAAAAAAABQABABAAAAIgBAEIgOAxQgCAGgFAHQgCADgEAAQgHAAgFgSg");
	this.shape_1.setTransform(34.4,12);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgTAdQgKgKAAgPQAAgPAIgLQAJgOAQgBQAOAAAHANQAGAKgBAOQAAAOgHALQgJAMgOAAQgLABgIgJgAgLgNQgFAIAAAJQAAAJAGAGQAEAEAGABQAGAAAGgGQAFgFABgKQABgZgQAAQgJAAgFAJg");
	this.shape_2.setTransform(25.8,12);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgHAyIABgZIABgZIAAgYIAAgYQAAgIAGABQAHgBAAAIIgBAYIAAAYIgBAiIAAAQQgBAGgFAAQgHAAAAgGg");
	this.shape_3.setTransform(20.3,10);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgKA6QgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAIAAgCQABgIAAgLIAAgTIAAgSIgLAAQgHAAAAgGQAAgHAMAAIAHgBIABgKQACgPAGgHQAGgJAPAAQAKAAAAAHQAAAGgJAAQgRAAgCAXIAAAEIAPAAQALAAAAAGQAAAFgFABIgGABIgQABIAAAOIAAANIAAAMQAAANgBAIQAAAFgGAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_4.setTransform(14.7,10.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgSAmQgLgDAAgIQAAgDACgBQACgCADAAQACgBAEAEQABACAGAAIAIABQAEAAAFgBQAGgCAAgEQAAgKgNgDIgGgCQgJgCgEgCQgFgDAAgIQAAgOANgGIAMgFIANgEIAGgBQADAAACACQACACAAADIABAFIABAHQAAACgCACQgCADgDAAQgEAAgBgDIgCgHIgQAEQgKAEAAAHIAEABQAPADAHAFQAMAGAAAOQAAALgKAFQgIAFgLAAQgJAAgIgDg");
	this.shape_5.setTransform(3.5,11.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AAWAjIgFgFIgLAFIgIACQgQAAgHgJQgHgJAAgRQAAgPAMgMQALgMAPAAQAGAAAHADQAJAEAAAFIgBAEIgBAJIAAANQgBAJACAFIAEAMIACAEIAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAJAAAKQAAALAEAFQAEAGAIAAQAFAAAFgCIAHgGQgDgRAAgJIABgGIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_6.setTransform(-3.3,12);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AATA0IgDgQIgBgQIAAgGIAAgFQAAgMgHAAQgIAAgGAHQgEAEgGALQAAAagCAFQgCAEgEAAQgDAAgCgCQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIABgDIABgKIAAgKIAAgyIAAgLIAAgHIgBgGQAAgBAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAGAAABAGIABAMIgBAPIAAAPIAAAGQAFgHAHgEQAFgEAHAAQAMAAAEAIQADAFAAALIABANIABAOIADAOIAAACQAAADgCACQgCACgDAAQgFAAgBgFg");
	this.shape_7.setTransform(-10.8,10);

	this.instance = new lib.Tween22("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-48.7,-21.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-2.1,65.7,23.5);


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


(lib.animCarmen_swing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Layer 3
	this.instance = new lib.Tween4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(105.8,-161.8,1,1,7.5,0,0,46,28);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,1,1).p("ADAlNQATAAAUAAQAcAAAeABQAcACAbgDQAdgDAcACQAeACAZAEQAIABAJABQAGABAGABQAQAHAIAPQAMAXgGAdQgFAXgNAUQgOAWgKATQgKAUgMAUQgKAQgUAMQgBAAgBABQgCADgDAEQAAABgBABQgJALgNAJQgUAPgRAPQgJAHgLAIQgJAGgKAHQgDACgCABQgBAAAAABQgTAKgSAJQgXANgUAOQgPALgTALQgFACgEADQgTAKgVAMAAblBQgEABgEABABWk8QgJgDgHgBQgJgCgJgBQgIAAgGgBQgCAAgDAAQAEAAADAAQgBAAgBAAQgFABgGACABWk8QALAEAKAGQAKAFAIADQgEgCgEgDQgHgFgIgDQgIgDgIgCQgVgIgZAAQAfgGAhAEQAuAHAhgKQAFgBAEgDAC3lNQAFAAAEAAAC6jQQgBgBgCAAQgBgBgCgBQgGgDgHgEQgHgEACgEQACgGgBgIQgBgIgCgIQgBgIgFgGQgEgHgFgGQgFgHgIgCQgBgBgBgBQgDgCgCgCAAhlEQgDAAgDADAgRA2QAKgFAIgEQAWgLAWgMQAKgGAKgFQAKgGAKgFQABAAAAAAQAUgKARgOQAQgNAUgOQAPgKAOgKQAEgEAEgDQAGgFAFgFQAIgHAJgHQAGgFAGgFQAMgJALgJQASgOAOgTQAIgLAJgKQAGgHAGgHQAIgJACgQQgEACgFACQgYAFgdACQgCAAgBAAQgbACgeABQgHAAgHAAQgCAAgBAAQgBAAgBAAAC/jRQgBAAgCABQABgBAAAAQgBAAgCABQABAAABAAQAAAAgBAAQgBABgBgBAC3jQQABgBABABQABgBAAABADmhzQgCgCgBgCADNA+QgBABgCAAQgFACgEACQgDACgDABQgOAJgQAGQgCABgDABQgDABgDABQgWAHgVAGQgXAHgWAHQAMAAAMAAAA6B0QgBAAgCAAQgBAAgCAAQgCAAgDABQgYADgXADQgBABgCAAQgCAAgCAAQgEAAgEgBQgLgBgKgCAk8iMQgDAFgCAGQgJARgLATQgCACgBADQgCAEgCAFQgHAKgHAKQgMASgOASQgMARgLATQgLATgIAVQgIAXgKAUQgCADgCAEQAAABgBACQgHANgHAPQAAADgBADQgFAVgIASQgLAVgGAYQgGAWgIAZQgJAeAMAUQAEAFAHAEQAZAMAXgLQAUgKATgNQAXgRASgPQAOgNAOgMQARgPARgRQAVgUARgSQATgTAQgRQAPgQALgaQAFgMAEgMQgBgbgBgcAlchPQAEgHAEgHIgBAAAjuiMQAEAHAEAJQALAWAMAVQANAVACAeQABAOAIANQAEAGAEAFQgQAUgBAaQAAABAAABAi/A2QAAABgBABQgBADAAACQgDAJgEAJQABAEAAAEAmTCXQAUgLANgTQAMgRAUgOQANgKAMgKQATgRAOgQQAAgCAAgBQAJgmAMgiAhIBLQASgEARgFQADgCADgCQgIABgJACAgfA+QAHgCAHgDAgPB7QgKgLgQgJQgUgLgLgRQgKACgKAC");
	this.shape.setTransform(118.7,-170.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#996600").s().p("AAAgBIADgFIABAAIAAABIgHAMIADgIg");
	this.shape_1.setTransform(84.2,-178.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AnyFKQgHgEgEgFQgMgUAJgeIAOgvQAGgYALgVQAIgSAFgVIABgGIAOgcIABgDIAEgHQAKgUAIgXQAIgVALgTQALgTAMgRIAagkIAOgUIAIgOIgBAAIAAAAQALgTAJgRIAFgLIBOAAIAIAQQALAWAMAVQANAVACAeQABAOAIANQAEAGAEAFQgQAUgBAaIAAACIAAgCIABAAIgBACIgBAFIgHASIgCg3IACA3IgJAYQgLAagPAQIgjAkIgmAmIgiAgIgcAZQgSAPgXARQgTANgUAKQgLAFgMAAQgMAAgNgGgAkYAiIAAADQgOAQgTARQgMAKgNAKQgUAOgMARQgNATgUALQAUgLANgTQAMgRAUgOQANgKAMgKQATgRAOgQIAAgDQAJgmAMgiQgMAigJAmgAgHB8IgIgBQgKgLgQgJQgUgLgLgRIAjgJIAGgEIAOgFIAAgDIASgJIAsgXIAUgLIAUgLIABAAQAUgKARgOQAQgNAUgOIAdgUIAIgHIALgKIARgOIAMgKIAXgSQASgOAOgTIARgVIAMgOQAIgJACgQIgJAEQgYAFgdACIgDAAIg5ADIgOAAIgDAAIgCAAIgDABIgDgBIgDgCIgNgHQgHgEACgEQACgGgBgIIgDgQQgBgIgFgGIgJgNQgFgHgIgCIgCgCIgFgEIgIgFQgHgFgIgDIgQgFQgVgIgZAAQAfgGAhAEQAuAHAhgKIAJgEIAnAAQAcAAAeABQAcACAbgDQAdgDAcACQAeACAZAEIARACIAMACQAQAHAIAPQAMAXgGAdQgFAXgNAUQgOAWgKATIgWAoQgKAQgUAMIgCABIgFAHIgBACQgJALgNAJQgUAPgRAPIgUAPIgTANIgFADIgBABIglATQgXANgUAOQgPALgTALIgJAFIgoAWIAogWIAJgFIAKAAIgDABIgJAEIgGADQgOAJgQAGIgFACIgGACIgrANIgtAOIgDAAIgDAAIgFABIgvAGIgDABIgEAAgAjIBPIAAAAgAiMgOIAAgBIABACIgBgBgAimgZIAAABIgBABIABgCgAC5jQIgCAAIAAgBIADABIgBAAgAC3lNIAJAAIgJAEg");
	this.shape_2.setTransform(118.7,-170.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).to({state:[]},2).wait(13));

	// Layer 8
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.3,1,1).p("AoYp+QADgBAEgBQAggFAmgBQArAAAWAaQAYAcAGAlQAHAlAJAiQAKAkASAfQAQAdAPAfQARAjAhATQAiATAiAJQAkAJAeAPQAQAIASADQAFAAAEABAoRqAQAQAWALAjQAEANACAPQAGApALAhQAMAgANAiQANAgATAgQAUAhAZAQQAOAKARAFQAkAMAjAMQAcAKAZALQgmgCgjgCQgkgDglgJQglgIgmgGQglgGgkgMQgigLglgLQgigKgfgOQghgOgdgLQgigNgVgXQgNgNgKgPQgBgBAAgBQgMgWgRgMQgJAZAGAiQAFAggCAmQgCArAfAQQAbAOAmALQAnALAjAMQAoAMAuAJQAiAHAiAFQAfAFAcAFQAiAHAlAHQAXAEAXAFQAAAAABAAQADAAADgBAlEigQAAAAABABQAJAUARARQABABACABQABACACACQgQAFgQAGQgBAAAAABQgCAAgBABQgBAAgBABQgBgCgBgBQgCgBgBgBQgBgBgBgBQgCgCgCgCQgKgIgNAAQgIAAgJAAQgUABgHAVAk9AFQgCACgDABQgSAKgTgJQgRgIgSgTQgJgMgFgMQgDgHAAgIQgCgUAFgTIAAgBQAAgBABgBQACgDAFgCQAPgKAUAMQAFACAEAEQAPAKAJAQQAMASAHASQAJAVgNASgAjejyQABABABAAQAGADAGAEQAYANAXAOQAAAAABAAQAEADAEACQAaAQgcAaQgCgFgDgFQAFAAAFAAQgBAAAAAAQgGgDgFgCQAAAAAAAAAkjh0QAAAAAAAAQAMASALATQAFAKAEAMQgBADABADQAAAEACAGQAJAaAVgQQABgBABgBIAAAAQABABAAABQATAVAUgFQAQgFACgQQAAgEgCgEQAEACAEADQAUANARgJQATgLgGgSQAHADAHADQAdAJACgWQABgMgGgJQgBgBAAAAQABAAABABQAUAKATgEQAUgEALgTQAVAGAOgMQANgJADgNQABgDABgEAkjh0QAAAAABAAQgCgCgCgCAiaigQABACAAADQABACAAADAiZiSQgBgGgCgGQABgBABgBAiZiWQAAAAABABQgBABAAACQAAAAAAABQACAGADAFAhIhdQgBgCgCgBQgFgGgGgFQgDgBgCgBQgEgDgEgCQgOgBgOgFQgFgCgEgCQgHgEgEgGQgBAAAAAAQgCgEgDgIAihiuQAFADAGABAqpEzQAUgKAUgFQAWgGAYgCQAXgDAVgHQAWgIAXgEQAWgEAZgDQATgDAUgFQAOgDAPgDQAIgCAIgCQAUgEAXgGQAVgGAWgDQAVgEATgIQAGgCAFgCQAEgBAEgCQAIgCAIgCQAJgDAIgEQATgJAVgEQAYgFAUgHQAVgIAWgHQAYgIAUgGQAIgCAKgCQAIgCAIgCAh0hJQADAFACAEQgMgEgLgGQgJgEgGgFAipgsQgBgBgBgCQgFgEgEgEQgGgHgEgGAjhghIAAAAQgIgKgGgLAkDgzQgDABgCABQgTAIgPARQgBAAAAABQgBAAAAABQgBAAAAABQgCAHgDAIQgEAGgHAFAksgWQACgLgBgLQgEgTgKgTQgGgNgKgHAkPFjQgEAAgDAAQgGAAgGAAQgMAAgMgCQgUgEgWgHQgNgFgNgEAiWF8QgKgCgJgDQgSgFgYAAQgYgBgTgIQgDgBgDgBQgFgEgFAAQgBAAAAAAAkEFnQgGgCgFgCAIkBgQgTAJgUAIQgUAIgUAKQgSAKgTAJQgUAKgTAHQgSAHgSAGQgEABgEACQgVAGgTAKQgHACgGADQgJAEgIAEQgGACgGADQgDABgCACQgUAJgWAGQgVAGgVALQgHAEgIADQgMAGgMAFQgUAIgTALQgSAKgWAFQgRAEgOAGQgEACgEACQgEABgCACQgUAKgSAIQgTAIgUAGQgVAHgVAGQgWAHgWAGQgBAAgBABAi8GGQATgFATgFQABAAABAAQAMACALACQAHACAHACQAOAEAPAEQACAAACAAQAAABABAAQAEADAFABQADABACAAQALADANAEQAUAFAWAGQAXAFAVACQAXABATgDQAWgDASADQATACAVgCQAEAAAEAAQAQgBAQADQAZAEARAAQAWgBAUgDQAEgBAEgBQAOgCAOgBQAEAAAEAAQAVgBAVgCQAVgDAUgFQAVgFASgBQAVgCAUgFQASgGAUgLQATgMASgNQANgKALgNQABgCACgCQABgDACgCQABgBABgBQAFgEAEgEQATgQANgTQANgTAIgUQAHgTAEgXQAEgYgDgWQgEgYACgVQABgTgBgPQACAIADAIAjSGSQAEgDAEgBAuXJTQASgJAXgBQAZgBAUgGQATgHAYgGQAXgFAXgIQAUgHAWgFQAHgCAHgBQANgEAOgEQAUgGAXgEQAUgFAVgGQAWgHAVgDQAXgDAVgHQAWgIAWgEQAXgEAVgHQAUgGAWgKQALgFAMgCAlEG2QASgIAUgIQAPgGATgFQAFgBAFgBQAKgCAKgDAOFo1QAHAHAEALQACAEABAEQAGARgBAPQgBAMgFANQgCABAAACQgCABgBABIAAAAQgLAGgMADQgWAFgSAIQgSAIgUAIQgLAEgLAFQgHADgIAEQgNAGgNAEQgGACgFABQgMAIgNAEQgMAEgMAEQgWAGgWAHQgTAGgWAIQgGACgFACQgQAGgOAEQgVAHgSAIQgQAHgRAEQgCgBgBgCQgMgOgLgOQgPgTgSgOQgGgFgFgEQARgKATgHQAUgIAUgJQAHgDAIgDQAMgFANgEQAUgIAUgIQARgGAVgKQANgGAOgEQABgBACAAIAEgCQACgBACAAQACgBADgBQgFABgEACAN7o+QABAAABABANupDQAGABAHAEIAAAAQACACADACQACACADADQgCgDgCgDIgBAAQAAAAAAAAQgCgBgBgBQABABACACAKOntQACgBADgBQAIgEAJgFQALgFALgEQAIgEAJgCQASgGAOgHQASgKAUgIQAIgEAIgCQAKgCAKgCQAKgDALgCQARgFAPgGQAAAAABAAQABgDACAAANrpAQAAAAABAAIAAgBQAAAAABAAQAAgBABgBAILkVQAHgDAHgEQAMgGAOgDQASgFAWgHQAQgFAQgEQAEgCAEgBQAOgEAPgGQAUgIAVgCQAHgBAIgEQABgBACgBQAFgDAGgCQAMgEANgDQAWgFATgEQAQgDALgCAN2j/QgUAHgUgCQgVgCgVAEQgXADgWAEQgVAEgRAEQgBAAgBAAQgQAEgRAFQgSAFgYAEQgLACgJABQgJABgHABQgBABgBAAQAAAAgBABQAAAAgBAAQgOAAgQACQgCAAgBAAIAAAAQgBgCgCgCQAAACABACQABAAABAAQAAAAAAABQACACABACQABACABACQgDgEgEgFQgTACgRADQgVAEgWADQgXACgWAGQgXAFgWAEQgWADgVADQgYACgWAFAM6h2QAIgBAIAAQAOAAANACQANACAMgHAKkAmQAPgHAOgKQAUgNATgKQASgLAUgKQASgKATgMQATgNASgJQAUgLATgJQAKgEAIgFAGhmMQgNgLgMgLQgOgNgOgIQgUgLgWgKQgWgLgSADAGhmMQgCABgCABQgUALgUAGQgRAGgSAHQgMAEgLAGQgFADgGADQgBAAgBABQgMAGgMAGQgRAIgUAJQgTAIgVAKQgQAIgPAIIgBAAQgCABgCABQgBAAgBABQgOAHgOAFQgTAGgRAIQgFACgGADQgNAFgNADQgRAEgRAIQgFACgEABQgDABgDABAILkVQgMAFgLACQgSAEgVAGQgUAGgWADQgUADgTAGQgRAFgVAFAHnlDQgEABgEABQgUAFgSALQgUALgWAFQgTAEgUAHQgVAIgRAGQgPAFgPAGAHnlDQACADACACQAQARANAUQABACACACAI4jSQgKgRgLgQQgMgRgMgRAKkAaQAAgCAAgBQgCgUgEgSQgFgVgIgTQgJgUgIgWQgJgVgLgSQgNgUgOgTQgCgDgDgDQgDgFgEgFQgBgGgGgEAJMi1QgGgGgGgKQADADACADAJwjUQgIADgJABQgBAAgBAAAg2j8QABgBABgBQAEgDAEgCQATgMATAIQABAAACABQAPAHARALQADADADADQgNAEgDAHQgCAFAEAHQAPAVASAMQAEACADACQABABABABQAFADAEAEIAAAAQAGgFAAgGQALgDAMgEQAAAAABAAAhfjfQgEgFgDgGAhmjaQADgCAEgDQAIgFAIgGQAEgDAEgDQAIgHAJgFQgYgCgYgCAA/iwQADgBAEgBQAEgBAEgBAAAhtQABgBAAAAQACgEACgDAB3jCQAFAUgEATQgFAYgYABQgWABgSgIAEhj8QABgBACAAAB3jCQAKgDALgFQAAAAAAAAQASgIAVgFQASgFATgGQAVgIARgFQAOgEAQgGQABgBACAAQACgBADgCAEcj5QACgCADgBQgBABgBABABni8QABAAABAAQAHgDAHgDAAQB6QAMgHAQgGQAUgIATgGQAVgHAUgGQAVgGAUgIQARgHAVgJQAEgCADgCAhNGNQABABACAAQADACADABAKjAdQAAgCABgBQAAAGAAAGQgBAAgBAAQgDACgEACQgYAJgQAJQgLAFgKAGAKkAmQAAAAAAABQgBADgBADQAAgDAAgEQAAgEABgFQAAAEABAFgAKkAnQABANABANQABAEAAAEQgBgCAAgCQgEgMAAgMAILhgQgHADgHADQgUAIgVAJQgWAIgRAKQgUALgUALQgTALgVAKQgUAJgTAJQgMAFgNAFAJXFNQACgFAEgEAD5J3QAMgCAOAAQAVABATAHQAGACAHAIAhQJcQAEACAFACQANAFAPADQAVAEAUADQAVAEATADQAUADAWACQAVACAYAAQAHAAAIAAQANABAOACQAWADAXgEQANgCALgDQAHgCAGgBAENJuQgDAAgNAHQgCABgCABAhVJcQAAAAABAAQACgBACABAhmJbQAJACAIgBQACgCADAC");
	this.shape_3.setTransform(172.6,-139.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC99").s().p("ACBEqIgBgBIgBAAIAAAAQgIgKgGgLQAGALAIAKIAAAAIgCACQgUAQgKgbIgCgJIAAgGQgEgMgFgKQgLgTgMgSIABgBIgEgDIgDgDQgQgQgKgUIABAAIAAAAIABAAIAAAAIAEgCIgEACIAAAAIgBAAIAAAAIgBAAIgBgCIAAABIgtgIIhHgOIg7gKQgigFgigHQgugJgogNIhKgXQgmgLgbgOQgfgPACgrQACglgFghQgGgiAJgZQARANAMAVIABADQALAPAMANQAVAWAiANIA+AaQAfAMAiAKIBHAWQAkAMAlAGQAmAHAlAIQAkAIAkADIBJAFQgYgLgdgLIhHgXQgQgFgOgKQgZgRgUgfQgTghgNgfIgZhDQgLghgGgoQgCgPgEgNQgKgjgRgWQAggFAmgBQArgBAWAaQAYAcAGAmQAHAlAIAiQAKAkASAfQAQAcAPAfQARAjAhASQAiATAiAJQAkAKAeAPQAQAIATACIgJAHIgQALIgHgLIAHALIgHAFIAHgFIAQgLIAJgHIAQgLIACgCIAJgGQASgLATAHIAEACQAQAHAQALIAHAGQgNAEgDAHIgHABIAHgBQgDAFAFAHQAOAVATAMIAGAEIACACIAJAHIABAAQAFgFAAgGIAXgHIABAAIAAgBIABAAIAAAAIACAAIAPgGQAFAUgEATQgGAYgXABQgWABgSgIIABgHIgBAHQgEANgMAJQgPAMgVgGIABgCIAEgGIgEAGIgBACQgLATgVAEQgSAEgVgLIgCAAIABABQAGAJgBAMQgCAWgcgJIgPgGQAGASgTALQgQAJgVgNIgHgFQABAEAAAEQgBAQgRAFIgIABQgPAAgPgSgACsESIAJAJIADADIgDgDIgJgJIgKgMIAKAMgADaEAIAXAKIgFgJIAFAJIgXgKQgIgEgHgFQAHAFAIAEgADNDDIAAABQAFAGAGADIAJAEQAPAGANABIAJAEIAEADQAGAFAGAFIACAEIgCgEQgGgFgGgFIgEgDIgJgEQgNgBgPgGIgJgEQgGgDgFgGIAAgBQgDgDgDgJQADAJADADQgEgEgCgGIAAgCIgDgMIACgBIgCABIADAMIAAACQACAGAEAEIAAAAgADHC3IABgDIAAgBIgBABIABAAIgBADgADICzIAAAAIAAgEIgCgFQgBgFgEgFIAKAAIgBgBIABABIgKAAQAEAFABAFIACAFIAAAEIAAAAgADGCqQAPgNAAgLQAAgKgNgIIgIgFIgBgBIAAABIABAAIAIAFQANAIAAAKQAAALgPANgAC/CcQAGADAFAAIgLgEIAAgBgACEBZIAMAGIAvAbIgvgbIgMgGIgCgBIACABgAEiBaIgIgBIAIABgAEBBrIAAAAg");
	this.shape_4.setTransform(137.3,-172.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#993300").s().p("AplEkQgRgHgSgVQgJgLgEgNQgDgHgBgIQgCgUAGgTIAAgBIAAgCIAHgFIABgBQAHgEAHAAIAAAAIABAAQAJABALAGIAJAGQAOALAKAPQALATAIARQADAJAAAIQAAAMgHALIgGADQgJAGgKAAQgJAAgJgFgAo6EgQAHgLAAgMQAAgIgDgJQgIgRgLgTQgKgPgOgLIgJgGQgLgGgJgBIgBAAIAAAAQgHAAgHAEIgBABIgHAFQAHgUAUgCIASAAQAMAAAKAIIAFAEIABACIADACIADADIABgBIADgBIABgBIAggLIAAAAQAMASALATQAGAKAEAMIgBAGIgEACQgTAIgQARIgBABIgBABQACgHAAgGIgBgJQgDgTgKgTQgHgNgJgHQAJAHAHANQAKATADATIABAJQAAAGgCAHIAAABQgCAHgEAIQgEAHgGAFIAAAAgAoqEEIAAAAgAjABoIgGgEQgTgMgOgVQgFgGADgGIAIgDQARgHARgFQAOgDANgFIALgFQAQgIATgGQAOgFAOgHIADgBIAEgBIAggQIAngSIAkgRIAYgMIADgBIALgGIAWgKIAkgNQAUgGATgLIAEgCIAMAJQARAPAPASIAYAcIgGAFQgUAFgSALQgTALgXAFQgTAEgUAGIgmAOIgeALIgCABIgGADIgdAKIglANQgTAGgSAFQgVAGgSAHIgBAAIgUAIIgPAGIgCAAIAAAAIgBAAIAAABIgBAAIgXAHIgIACIgHACIgCgCgADngrIgYgcQgPgSgRgPIgMgJQARgKATgHIApgRIAOgGIAagJIAogQIAmgQIAagKIAEgBIADgCIAEgBIAFgCIAFgCIASgJIAWgJIAQgGQATgGAOgHQASgKATgIQAJgEAHgCIAVgEIAVgFQAQgFAPgGIABAAIABAAIABgBIAAAAIABgCQAHABAGAEIAAAAIAFAEIAGAFQAGAHAFALIADAIQAGARgCAPQgBAMgFANIgCADIgCACIgBAAQgLAHgMACQgVAFgSAIIgmAQIgWAJIgPAHIgbAKIgKADQgMAIgNAEIgYAIIgsANIgpAOIgMAEIgeAKQgUAHgSAIQgRAHgRAEIgCgDg");
	this.shape_5.setTransform(198,-167.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},2).to({state:[]},2).wait(11));

	// Layer 2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.3,1,1).p("AIOt8QABgCABgDQADgJAEgJQAEgMAFgKQAEgIAEgIQAJgRAFgPQAGgUAIgTQAEgJAEgGQAGgJAGgJQAFgJAGgJQAJgPAHgPQAAAAAAAAQAAgBABgBIAAAAQAAAAAAgBQAAgBAAgBQAFgDAHgCIAAAAQADAAADgBQAEAAAEAAQAKABAKAEQAEACAEACQAQAIAKAMQAIAJAEANQABACAAACQAAABAAACIAAAAQgEAMgHALQgMASgHASQgHATgJATQgFALgFALQgDAIgDAIQgFANgHANQgCAEgDAFQgEAOgGAMQgFAMgHAKQgMAUgKAUQgKATgKAVQgDAFgCAFQgIAPgHAOQgKATgHASQgHAQgKAPQAEABADAAQAXABAXAFQADABACAAQADgHADgIQAEgMAHgMQALgRALgUQAIgOAIgPQACgEACgDQAHgNAHgPQAIgTAPgRQAEgFACgJQABgBAAgCQACgGADgFQAFgMAIgLQANgTALgQQAJgOAGgJAKDxcQABAAABgBQABAAAAAAIABAAQAEAAADABAJzxRQgBgDACgCAKGxcQgBAAgCAAAKAxbQABgBACAAAIJtxQABgDACgDQABgCABgDAGmqRQAGgTAJgSQAJgUAIgUQADgHADgIQAGgMAGgMQAJgTAJgUQAIgRAJgVQAFgOAGgNQABgBABgCIABgBQACgGADgFAGmqRQgQABgRABQgTAAgPAEQgWAGgXAIQgXAIgLAPAD/kCQACgEACgEQAGgRAKgPQAHgMAGgNQACgFACgGQAHgRAJgSQAHgNAFgPQABgBAAgCQABgCAAgCQAAAAABAAQAGgQAGgRQAHgWAIgTQAJgUAGgSQAFgNAEgMQABgBAAgCQACgGACgGQAEgMAFgLQAIgRAJgQQAKgTAGgWQABgCAAgCQAIAAAIgBQAWgCAYADQASADASABQACAAACAAQgCAEgCADQgLARgGAVQgGAWgNATQgLAQgJATQgJAUgJARQgHAOgHAPAHknmQALgTAJgQQAJgRANgPQANgSAKgSQALgTALgQQAGgJAFgMQAVAEAUAEQAUAEASAFQADAAACABQABgBABgBQALgNAJgKQABAAAAgBQAAAAABgBQAAgBAAgBQAFgGAFgGQAGgIAHgJQAOgTAKgRQAJgPAIgOQABgBAAAAQAKgPANgSQANgRANgTQANgSARgNQAPgMAKgTAKxqNQABgBAAAAQAHgHADgHAKspvQgEgBgDAAQAKADAJgBQgGgBgGAAgAKZpyQABgBAAAAQABAAAAAAQACABADAAQACABADABQgGgBgGgBQgNAPgJAOQgMARgPASQgOARgNAUQgMAUgOASQgNASgOAQQgPASgNATAKVp0QACACACAAAKgpyQAHgBAFAEAK4puQAEABAEABQAYADAWAGQAVAFAVAJQAVAKAUAIQATAIASAMQARALAPANQABABABABQAGAFAEAFQAJAIAKAJQADACADADQAHAEAIAEAkvAaQgOABgNACQgBAAgBAAQgHACgIABQgXAEgXADQgYADgYABQgZAAgXAIQgXAHgXACQgYABgXADQgWACgWAHQgUAGgVAHQgWAGgVAHQgTAGgRgHQgBAAgBgBQgDgBgCgBQgRgKgIgTQgIgVAAgXQABgZAKgRQAIgNAJgLQADgDACgDQABAAABAAQAOgIAMgHQAEgCAEgCQABAAAAAAQAQgHATgDQAXgEAXgCQAXgCAWgBQAQgBAOgCQAJAAAIgBQAYgCAXACQAYADAXACQAZACAVADQAZAFAVAEQARAEAQAEQABAAAAAAQAGABAFACQACAAABABQABAAABABQAAgBABAAQAPgKASgIQAUgJAYgCQAXgCAVgGQAXgGAXgDQAXgCAXgFQAOgEAMgDQAJgDAIgDQAIgCAIgBQAWgDAXgDQAXgEAYgCQAHgBAHgBQARgCAQgDQAXgFAZgCQAIAAAHABIABAAQAGgRADgVQADgXAFgVQAFgVATgIQASgHAVgDQAFgBAEAAQgGAMADAHQABAGAJACQAZAEAVgEQAEgBAEAAQABAAABgBQAGAAAGgBIAAAAQABgIgFgEQAGgKAGgLQAAAAAAgBAj+ARQAQALAMAPQAPASAMAIQAFACAGgCQATgGAVgGQAUgGAWgHQAUgIAVgFQACgBABgBQAUgFAWgIQAUgIAVgJQATgJASgMQAIgFAHgFQAKgGAJgGQACgBADgCQADgCADgCQABgBAAgBQADgGADgHQABgDACgCQAAgCABgBQAJgNAQgEQAIgCAIAAQACABACgBQANABAIAHQACABABACQACACACACQAQAIATgIQAPgHAKgIQAHgDAHgBQAIgBAIAAQACAAACABQAMACAIAKQAOARgbANQgHADgIADQgLAFgMAEQgNAEgMAAQgBAAgBAAQgBACgDABQgBABgBABQgEAAgFAAQgQACgQADQgVAEAMASQALgCAKAFQADABADAAQARADATABQAGABAGAAQACAAACgBQAEAAAFgBQAYgEAFgSQAGgVgRgJQgEgCgFgBAD/kCQgCADgCADACpibQACAAADABACchdQACAAABAAQAHgCAFgDQAHgDAGgDACbhdQAAAAABAAQAIgCAHgDAEBhdQACgCACgCQACgBACgCQAEgFAHgDAFDifQAFAWgMARQgLAPgWAHQgBAAgBABAGunKQAAgCABgBQABgDAAgCAGunKQAAgDABgDQABgBAAgBAGvnQQAAABAAACAFekwQAEgJAFgLQAAAAAAAAQAIgSALgTQAKgQAJgSQAKgTAIgQQAIgNAHgPAFWkgQAAgBABAAQADgHAEgIQARALAKARQANAVgQARQgPAQgTAGQgBgCgCgDAFBj8QACgCACgEQACgDACgEAFUjYQAHAMgDAQQgCASgTALQAAgBAAgBQgBgEgBgEAOPrmQAFgGAGgFQAKgKALgIQALgIAEgNAOUoGQAJAJALAGQABABACABQALAKAMAOQAOAQAUAQQARAOAOATQAOAUAIATQAIAUAEAVQAEAYgDAYQAAAGgBAHQAAABAAABQABADAAADQAAADABACAOKoSQAFAHAFAFQgBgDgBgCQgEgEgEgDgAOIoVQABACABABAQlkNQAAAGACAFQABARgCARQgEAVgGAWQgGAWgJARQgKASgPAPQgMAOgLASQgMASgNAQQgNAQgPAPQgDADgDADQgJAJgIAMQgDADgCAEQgMARgQAPQgMAMgUAOQgOAJgLAMQgDADgDADQgNAQgQAMQgOAKgOASQgMAPgSAPQgQAOgUAMQgUAMgTAKQgLAGgKAGQgCABgDACQgDABgDABQgBAAgCABQgBAAgBAAQgBABgCABQgMAIgNAHQgHADgHAEQgJAGgKAHQgKAHgIAEQgRAJgSARQgRAQgTAIQgDABgDABQgHAAgDAEQgBABAAAAQgCADgDACQgEAEgFAFQgIAHgLAHQgQAMgWAKQgSAJgUAIQgTAJgWAIQgVAIgSAKQgUAMgUALQgTAKgVAKQgUAKgTAJQgMAGgNAEABxhHQgLADgSAFQgGABgFABQgRAFgQAEQgUAFgVAFQgVAFgUAIQgMAFgMADQgJACgJABQgXADgYAEQgKABgKACQgGABgHACQgEABgFABQgLADgMABQgWACgVAHQgBAAgBABQgFAEgIACQAAAAgBAAQgWAGgXACAiVCiQAUgGAWgGQASgFAYgGQAAgBABAAQAUgFATgHQAUgHAQgJQAUgKANgMQAMgLASgFQAFgBAFgBQAEgBAEABQAAgBAAgBQAIgPAHgPQALgTAGgTQAEgQAHgRAtQM+QAUgLAUgFQAXgGAXgCQAYgCAUgIQAWgIAXgDQAWgEAZgEQATgCAUgFQAOgEAPgDQAIgCAIgBQAUgEAXgGQAVgGAWgEQAVgDATgIQAGgCAFgCQAEgCAEgBQAIgCAIgCQAJgEAIgEQATgIAVgEQAYgFAUgHQAWgIAVgHAiWKFQANgHAPgGQAUgIATgHQAVgHAUgFQAVgHAUgIQAQgGAVgKQAEgCADgCAjqKeQAVgHAUgGQAJgDAJgCQAIgCAJgBAlnORQACAAACgBQATgEAVgGQAWgHAWgGQAVgGAVgHQAUgHATgIQASgHAVgLQACgBAEgCQAEgCAEgBQAPgGAQgEQAWgFASgLQATgLAUgIQAMgFAMgFQAHgEAHgDQAVgLAVgGQAWgHAUgJQACgBADgBQAGgDAGgDQAIgDAJgEQAGgDAHgDQATgKAVgGQAEgBAEgBQASgGASgHQATgIAUgJQATgKASgJQAUgLAUgHQAVgIASgKAl5OcQAEgCAEgCAw+ReQASgKAXAAQAZgBAUgHQATgGAYgGQAXgGAXgHQAUgHAWgFQAHgCAHgCQANgDAOgEQAVgGAWgFQAVgEAUgHQAWgGAVgDQAXgDAVgHQAWgIAWgEQAYgFAUgGQAUgHAWgJQALgFAMgDAnrPBQASgIAUgIQAPgGATgFQAFgBAFgBQAKgDAKgCAP6DHQAIgJAKgKQAQgOASgIQAHgDAKABAL3GeQAAgBAAAAQABgCACgBQAFgBAEgCQAOgFANgJQARgMARgLQASgNAQgLQARgMAQgOQARgNARgRQAGgFAFgFQAKgJAMgIQASgNAOgTQAHgKAHgLQADgFADgGAL3GeQAAgDADgBAQCCzQgBADgFAOQgBACgBABAG3JRQALgFAKgGQAQgIAYgKQAUgIASgMQAUgNATgMQASgLAUgKQATgJASgNQATgNASgJQAUgLATgIQATgIAMgNAHOFnQgGADgFACAJ1EAQgEACgFABADVA0QABAAABAAQAdACAKgRQAJgPgKgMQgDgEgEgCADfgkQgIgBgIgDQgLgDgIgHQgBACgBACQgUAPgYgBQgDgBgDAAQAAAAgBAAQgFgBgFgBACngEQgIABgHADQgHACACAJQAFAUAUAJQABABABABQgJAMALAJQADADAFACQAaANADgaQAAgCAAgBIAAAAQgVgCgSgIACwA/QgBACgBACQgIATAAAXQAAABAAAAQAAABAAABQgFgKgJgGQgPgMgWgHQgNgEgMABQAAgBABAAQAAgCABgBACmBwQABABAAAAQADAHADAIQACAIgBAIQAAADgBADQgGAUgUAHQgSAGgcgDQgOgBgMgGQgHgEgGgFQgPgNgKgRIAAgBQgBgBAAgBQgJgTANgPQAGgHAHgGQAJgIAMgBQADgBADABQACAAABAAQACAAABgBQACAAACAAACuCQQgEgXgVgJQgRgHgVgFQgSgFgSACQgFABgGABQgWAGgFARQgBAFAAAEAC7hOQAHALgGAR");
	this.shape_6.setTransform(170.6,-191.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC99").s().p("AAZDOIgfgeIggggQgOgOgQgMIgegWQAXgCAWgGIABAAQAQAMAMAOQAOASAMAIQAFACAFgBIAogNIArgNIApgNIADgCQAUgFAWgIIAqgSQATgJASgMIAPgKIATgMIAFgCIAGgFIABgCIAGgNIACgEIACgDQAJgNAQgDQAIgDAHAAQgHAAgIADQgQADgJANIgCADIgcAHIgLACIghAJIgrAKQgUAFgVAIQgLAFgMADIgTADIguAHIgUADIgNADIgJADIgYAEQgVACgUAHIgCABQgGAEgHACIgBAAQgWAGgXACQAAAAgBAAQAAgBgBABQAAAAgBAAQAAAAgBABIgaADIgCAAIgPADIguAHQgYADgYABQgaAAgWAIQgXAIgXABIgvAEQgXACgWAHIgpANIgqANQgUAGgQgHIgDgBIgEgCQgSgKgHgTQgIgVAAgXQAAgaALgRQAIgNAJgLIAFgGIABAAIAbgOIAIgFIABAAQAQgGASgDIAugGIAugDIAegCIARgCQAXgCAYADIAvAEQAYACAWAEIAuAIIAgAHIACAAIALADIADABIACABIABgBQAPgJARgIQAUgJAZgCQAXgCAUgGQAXgGAWgDQAYgCAXgFIAagHIARgGQAHgCAIgBIAugGIAvgGIAPgCIAggFQAYgEAYgCQAJgBAHABIAAAAIAGABIgGgBQAHgRADgVQADgXAFgUQAFgWATgIQARgHAWgDIAJgBQgGAMACAHQACAGAIACQAZAFAWgFIAHgBIADAAIAMgCIAAAAQABgHgFgFIAMgVIAAgBIAAAAIABgBIAAAAIABgBIAHgPQARALAKARQANAVgQARQgPAQgTAHIgEgGIAEAGQAGALgCAQQgCASgTALQAFAWgNARQgKAPgWAHIgCABIgEgBIgFAAIAAAAIgBAAIgGABIgEAAIADgDQAFgFAHgDQgHADgFAFIgDADQgHABgHADQgKAIgPAHQgKAEgJAAIAAAAIAAAAQgHAAgGgCIgDgCQADAGAAAGQAAAHgDAIIgBAEQgVAPgYgBIgFgBIgBAAIgKgCIAKACQgHARgFAQQgFAUgLATIgPAfIAAABIgIAAIgKACQgSAFgMALQgOAMgTAKQgRAJgVAHQgSAHgUAFIgCABIgqALIgpAMIgbgbgAF+gOIADADIAEAEIgEgEIgDgDQgJgHgMAAQAHgDAFgDIANgGIgNAGIgPAFIgCAAIAFABQAMAAAJAHgAIMhaIABACIgBgCIgBgIIABAIgAHFi1IADgGIgDAGgAGCCLIgIgFQgLgJAJgMQASAIAVACIAAAAIAAADQgCARgNAAQgGAAgIgEgAGhB7IgCAAIAAAAQgVgCgSgIIgDgCQgTgJgFgUQgCgJAGgDQAIgDAHgBIADAAIACAAIAAAAIABAAQAGAAAGACIADABIABAAIAGACQARADATABIAEABIADAAIABAAIAAAAIABAAIADAAIAEgBIgEABIgDAAIgBAAIAAAAIgBAAIgDAAIgEgBQgTgBgRgDIgGgCIgBAAIgDgBQgGgCgGAAIgBAAIAAAAIgCAAIgDAAQgMgSAWgEIAggFIAJAAIACgCIAEgDQgIgBgIgDQgLgDgJgHQADgIAAgHQAAgGgDgGIADACQAGACAHAAIAAAAIAAAAQAJAAAKgEQAPgHAKgIQAHgDAHgBIgEAEIAEgEIAEAAIAGgBIABAAIAAAAIAFAAIAEABQAMACAIAKQAOAQgbANIgPAGIgJgDIAJADIgXAJIgFACQgJACgIAAIgBAAIAAAAIgBAAIgBAAIgCAAIACAAIABAAIABAAIAAAAIABAAQAIAAAJgCIAFgCIAXgJQARAJgGAVQgFASgYAFIgJABQAEACADAEQAKAMgJAPQgJAPgXAAIgHAAgAFRAlIAAAAgAHPgaIAAAAg");
	this.shape_7.setTransform(150.4,-198.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#993300").s().p("AkSKIQgPgBgLgGQgIgEgGgFQgPgNgKgRIAAgBIgBgCIAAgBIABgIQAFgRAXgGIAKgCIABAAIALAAIAAAAIAAAAQAMAAAMADQAVAFARAHQAVAJAEAXIgBAGQgGAUgUAHQgMAEgRAAIgQgBgAjjJEQgRgHgVgFQgMgDgMAAIAAAAIAAAAIgLAAIgBAAIgKACQgXAGgFARIgBAIIAAABQgJgTANgPIANgNQAJgIANgBIAGAAIACAAIAEgBIADAAIABgBIABgDIABgCIAPgeQAKgTAGgUQAEgQAIgRIAAAAIAGABQAYABAUgPIACgEQAJAGAKAEQAIADAJABIgFADIgCACIgJAAIggAFQgVAEAMASQgHABgIADQgHADADAJQAEAUAUAJIADACQgJAMAKAJIgCAEQgIATABAXIAAABIAAACQgGgKgJgGQgPgMgVgHIgCAAQgKgDgJAAIAAAAIAAAAIgCAAIgBAAIgCAAIACAAIABAAIACAAIAAAAIAAAAQAJAAAKADIACAAQAVAHAPAMQAJAGAGAKIAAABQAEAHACAIQADAIgCAIQgEgXgVgJgAhvDZQgIgCgCgGIAEgIQAHgRAJgPQAHgMAGgNIAFgLQAGgRAJgSQAHgNAFgPIABgDIACgEIAMghIAQgoIAPgmIAIgZIABgDIADgMIAJgXIARghQAKgTAGgWIACgEIAPgBIACAAIAPgBIAAAAIAAAAIAZACIAEAAIAlAEIgBAHQgLARgGAVQgGAWgNATQgKAQgKATIgRAlIgOAcIgCACIgBAGIgOAcIgTAjQgJASgKAQQgKATgIASIAAAAIgJAUIgHAPIgBABIAAAAIgBABIABAAIgBABIgLAVIgFAHIgEAGIgCABIgIABQgKACgLAAQgMAAgNgCgACQi5IglgEIgEAAIgZgCIAAAAIAAAAIgPABIgCAAIgPABQAGgTAIgSIASgoIAGgPIALgYIATgnIAQgmIAMgbIABgDIABgBIADgGIACgFIACgFIAHgSIAJgWIAIgQQAJgRAFgPQAGgUAIgTQAEgJAEgGIAMgSIALgSQAKgPAGgPIAAAAIABgCIAAAAIAAgBIAAgCQAFgDAHgCIAAAAIAHgBIAHAAQAKABAKAEIAJAEQAPAIAKAMQAIAJAFANIABAEIgBADIAAAAQgDAMgHALQgNASgHASIgQAmIgKAWIgGAQIgLAaIgGAJQgDAOgHAMIgMAWIgWAoIgUAoIgFAKIgPAdQgKATgHASQgHAQgJAPIgEAAg");
	this.shape_8.setTransform(208.3,-238.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},4).wait(11));

	// Layer 1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(0.5,1,1).p("AAAAAQAAAAAAAA");
	this.shape_9.setTransform(105.5,-223);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(0.3,1,1).p("Ajhk3QADAigQAbQgTAhgdAWQgjAagwgBQgZAAgXAFQgxALgngVQADgHAGgGQAegZAWgfQAYggAOgnQANgkgDg0QgBgegJgZQgDgIgEgIQgCgGgCgFQgGgLgIgKQgagggMgnQgMgmgQglQgNgcgLgbQgBgFgCgFQgBgEgBgEQgHgjAHgnQAIgtAXgfQAYggAhgUQAigUAkgPQApgRAeAZQAVgHAXAHQAXAHATAFQAXAHAOARQANAQANASQAMAQAHAWQAHAXAFATQADAOAFALQADAHADAHQABAAAAABQAJARAKAPQALATAUAKQATAJATAGQATAHAVAGQAVAFAYABQACAAACAAQAWAAAUgHQAXgHASgNQAGgEAGgCQgCAOgJASQgHAOgKAOQgKAOgIAPQgHAOgKAQQgGALgIAHQgCACgCACAjWsRQgHgDgHgHQgDgEgHgDQgNgGgBgPAkasyQAEANAOAGQANAGALAGQAFADAFACQACAAABAAQAEgBADgBQADAAADgBAjHsRIAAAAQABAAAAABAjGsPQgFgDgJABQgBAAgBAAAjGsPQAAgBgBgBQgGgDgEgFQgIgKgEgNAjCsAQgBgHgDgHQAAgBAAAAAiKsUQAGgEgGgKQgGgNgFgNQAAgBgBAAIAAAAIAAAAQgBgBgBAAQgRgIgYgBQgXgBgTgKQgQgIgKgOQgGASgOAMQgPAOgMAOQgMAOgHARQgIASgFAVQgFAWAEAXQAEAXAHAVQAGATAFAVQAFAVAGATQABABAAABQABACACACAiWs9IAAAAQgFAKgLAJQgKAJgDANQgBAHAGgBQAKgBALgBQAAAAABAAAiQsTQAAABAAAAQAAABgBAAQgEAAgDABAiZsRQgPgIARgEQAFAFACAFQgEAAgFACQABAAAAABAiQsSQAEAAACgCQgDAAgDABAkpu6QADACACACAkFsKQgBgBgBgBQgKgFgNgEQgOgEgEgLAjmsOQgJACgJABQgGAAgHABQgIAAgIABQgBACABAEQAGANAHALQAHALAPACQAQABAOgCQARgCABgOQABgCAAgCQgFAJgIgHQgEgEADgIQAEgLAJAIQABAHAAAGAkzo9QgCADACACQAWAdAMAfQgkAVgbAaQgeAeAVAVQgDgLAKgGQAmgVAsgQQApgQAqgXQAogWAggTQAUgLAVgMQAMgGAMgDQAegHAfAMQAbAKASAQQADgDACgDQAHgGAGgEQAAAAAAgBQADgBACgCAiKsUQASABAHAJQAGAIACAGQAAABAAAAQADALgHAKQgGAHgCAJQgCAKAEAMQAHARgCAUQgMADgMAEQgSAHgOANAhuqbQAAAEgBAEQgDAVgLAQQgLAQgLARAgkpAQgJgIgLgDQgKgBgLgBQgCAAgEABQgPACgRAIQgQAHgJAKQgCACgDADQgMAFgHAIQgCADgCADAikofQgegYAvgVQACgBACgBABGohQADACACADQAHAHAFAIQAOAZgKAUQgCgCgDgBABvnWQAOALAQALQAQAMAOAPQAPAPAQARQAQAPAQAPQAPAPAMANQACACACABQANAPAHASQABABAAABQAIAUAIAPQAGAKAGAHQANAQAKANQALAPAEAMQAAAAAAAAQABADABADQABACABACQAAABAAAAQACAFACAEQAGANAKANQAOATALANQALANAHAPQgGgQgGgPAC4nzQgFAJgHAFABvnWQgBAAgBAAQgBAAgBAAQACgCACACgABLnNQAFgCACgEQAGgGADgHQAIAFAHAGABPnSQgCACgCADQgDAEgEADQgNAOgRANQgQANgTALQgVAMgOAJQgSALgXAIQgWAIgTAIQgUAJgSALQgIAFgIAGQgLAJgPAEQgEABgFAAQANAOAVAGQAWAGAVAGQAWAGAVAHQAQAFAFASQAGAUABAYQAAAOAHAIQABABAAAAQgEASgIASQgIATgMAQQgMARgOAPQgRASgNAQQgOASgJATQgJAWgGAQQgHASgMATQgLAUgCAYQgBAMgDAJQgGAWgEAXQgDAaAJARQAIgFAIgGQgEgBgEgBAAQiJQAEABAEAAAAPiKQADAAACABQABAAAAAAQACABABAAQAPAGAQAFQATAHAWADQAWAEAYAEQAXAEAXgEQAWgEAXgEQAXgEATgJQAVgIAUgJQATgIAOgNQAGgFgBgIAAUiJQgCAAgCAAAgvinQAGAGAKADQAUAGASAKQADACAEACQAAAAABAAQAAAAABABAD0iiQAhAEABgWQgegEgEAWgAjhk6IAAAAQAEABADAAAjhk6QAAAAAAgBQgBgDAAgDAjhk3QAAgBAAgCQgCAAgBAAQABABABABQAAAAABABQALAJALAAAlNmNQgGgDgEgFQAAgBAAAAQgBgCgBgCQAFAFAGAEAlPmRQABACABACQADABAFgCAlNmNQAIAMAIAMQALASAOAPQAMANAXAHQANAEAQACQgPgOgIgQAiSDKQABAAABAAQADgBAEAAQAYgEAXABQAYACAXABQAVACATADQAVAFAWADQABAAABAAQAYAEAXAHQANAFALAFQgHAPgMARQgOATgKARQgJATgMATQgLAUgNASQgNATgNATQgIAKgHAKApsK8QAJgHAMgHQASgLASgNQARgMARgPQARgOAPgNQAFgEAEgEQADgEADgDQACgDACgDQAIgLAJgKQADgEAEgEQALgMANgMQAPgOANgSQANgRAPgOQARgQAMgNQAOgPAMgPQANgPAPgMQATgOARgIQARgIATgHQAVgHAVgDQARgCADAAQABAAAAAAQABgWABgWQABgOAAgOQAAgKgBgKQAAgEAAgDQgEgBgFgBQgQgFgSgGQAIgFAHgFQABgBABAAQAGgEAHgBQgHADgIADAiaDtQAFAAAEgBAiaDtQABgTAHgQAinDQQALgDAKgDADEBrQABgBAAgBQAHgPAKgQQALgSADgXACrCuQAEgJADgKQAGgUAJgUQACgEABgEQAKARALAOQAHAJAFAKQAFAJADAJQAIASAGAVQAFAPACAOQAZgIAYgEQAUgDASgGQAEgBAFgBQATgGAVgGQAZgGAYgFQAYgEAZgBQATgBASgDQAYgFAZAAQAJABAJAAQAaADgKgWQgMgZgKgaQgJgXgXgQQgPgKgNgNQgCgDgDgDQgDABgCABQgEABgDABQgCABgCABQgMAFgPAEQgHACgIADQgBAAgBABQgBABgBABQgBABAAAAQgFAEgHAEQAHgIAIgDACnCvQACAAACgBABxDrQAAABAAgBQABABAAAAQAPAIAHgKQANgSALgTQAFgKAFgKQAAgCABgBAEMCXQgGABgGABQgEAAgFABQAEgCADgCAAoDWQABgBABAAAgSG4QAAgBAAgCQAAAAABAAQABAAAAAAQgBABgBACQgEAFgDAGQABAAABgBQABgBABgBQABgCABgCQABgBAAgDgAAZGrQAFgBAEgDQAGgDAEgEQgSAFgNAJQAGgBAGgCgAANGuQgCACgBADQAIgEAHgEAo0MBQgDAFgEAEQgHAJgIAIQgQAQgRAOQgSAQgTAKQgTAKgNAMQgNAMgTALQgSALgRAMQgRAMgSAHQgKADgHgIQgMgPgGgVQgGgVgIgTQgHgSACgaQASgNASgIQAUgKAXgFQAXgGASgMQASgLATgLQAVgNAUgIQAHgCAGgEQABAAAAAAQADgBACgCQAEgCADgFAgdHJQgIAHgPADQgVAFgZAGQgXAHgOALQgQANgUANQgTAMgSAKQgUALgSAPQgQAOgVAJQgUAJgTAMQgSANgSAKQgTAMgTALQgTAMgUAOQgMAJgNAHQgEACgEACQgBACgCABQgBABgCABQgPAKgVAJQgRAIgOAMQgLALgMAIQADgDACgEQAIgLAIgJAp4LGQAFgFAHgFAFsHZQgBABAAABQgDAFgCAGQgHATgIATQgIAUgHATQgHAUgHAVQgGAXgEAUQgEAXgDAYQgDATgGAPQgBAEgBADQAAABAAABQgDAKgDALQgHAWgLAQQgMASgLAPQgOATgPAQQgNAPgOAMQgPAMgOAQQgBAAAAABQgBAZAZAEQAWAFAWAGQAXAGAYADQAXADAYgGQAXgGAYADQAXADAYgBQAYAAAXgBQAXgBAYACQAZABAYgDQAWgCAYgBQAZgBAXACQAeADAKgRQAGgKgGgHQgNgQgWgHQgWgGgWgEQgXgDgYgCQgXgCgWgGQgWgGgXgDQgXgEgWgGQgWgGgXgHQgRgFgRADQgBAFAAAGAEeLhQgGAPgLANAFaNSQgEAAgFACAFaNSQADgSAHgPQAIgTAMgSQAMgTAPgOQAQgQANgTQAMgSAPgTQAOgSAMgTQAMgSAMgUQAKgRANgSQAHgKAHgMQALgSAMgRQALgOALgUQABgCABgCQACgEACgDQACgGABgFQABgEAEgDQACgEABgFQAHgTALgSQAKgRAGgUQAGgRAGgSQACgEABgEQAAAAAAgBQAAgCgBgCQgHgTgNgSQgMgRgLgVQgFgLgGgIQgDgEgDgFQgKgOgIgOAhaHPQABAAABAAIAAAAQAFgBAGgBQgCADgCAAQgGAAgGABQgEABgEAAQAFgCAGgBQgCABgBABAhYHPQgBAAgBAAAgZHDQgDABgBAFQAEgDACgEAGjhPQABACABADQADAEACAFQAHAPAOAMQARAPAJAOQAIAMAOANQAOAOAQAQAFiDcQAHASAMASQAOASAOAOQABACABABQAPAPASAOQARANAHASQACAEAEABQgGAJgIAHQgNAMgPAPQgRAQgJAQQgEAGgFAEQgBACgCABQgEADgEAEQgFAHgFAIQgCADgCAEAMhB8QgHADgHACIAAgBQAHgDAHgBQANgEANgHQAJgEAKgFAJVHPQAEgIAEgKAGFG5QgOAPgLAR");
	this.shape_10.setTransform(125.4,-144.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgiAvQgPgBgIgMQgHgLgFgMQgCgEABgCIARgCIANgBIASgCIACAAIAIgBIAFgBIADAAQAHgBAFACIABABQADAGABAHQgJgIgEALQgDAIADAEQAIAHAFgIIAAADQgCAPgQACIgPABIgOgBgAAbgGQADgMALgKQAKgJAGgKIAAAAIAAABQAFAOAHANQAFAKgGAEIgGAAQgCgFgEgEQgSADAPAJIAAAAIgUACIgCAAQgEAAAAgGg");
	this.shape_11.setTransform(104.7,-222.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#996600").s().p("AlFGGQADgHAHgGQAdgZAWgfQAYggAOgnQANgkgCg0QgCgegJgZIgHgQIgEgLQgFgLgJgKQgagggMgmQgMgmgQglIgXg3IgEgKIgCgIQgGgjAGgnQAJgtAXgfQAXggAhgUQAigUAkgPQApgRAfAZQAUgHAXAHIAqAMQAXAHANARQANAQAOASQALAQAHAWIAMAqQADANAFAMIgDABQgIgJgSgBQAGgEgFgKQgHgNgFgNIAAgBIgBAAIAAAAIgBgBQgSgIgXgBQgWgBgUgKQgQgIgKgOQgGASgNAMQgQAOgMAOQgMAOgHARQgIASgFAVQgEAWAEAXQADAXAHAVQAGATAFAVQAFAVAHATIAAACIADAEIgDABIgBgCIABgDIgBADIABACQAWAcANAfQglAVgbAaQgeAeAWAVIABAEIgBAAIABABIACAAIAEADIACABIACAEQgGgDgEgFQAEAFAGADIAQAYQALASAOAPQAMANAXAHQANAEAQACIACACIABABQADAigPAbQgUAhgcAWQgkAagwgBQgYAAgYAFQgRAEgPAAQgeAAgagOgAhwmAIgEgEIAEAEgAAggWIAEgCIgEABIAWghQALgQADgVIABgIQACgUgGgRQgFgMACgKQACgJAGgHQAHgKgCgLIACgBIATAgQAMATATAKQATAJATAGIApANQAVAFAYABIAEAAQAXAAAUgHQAWgHASgNQAGgEAGgCQgCAOgIASQgIAOgJAOQgLAOgIAPIgQAeQgHALgIAGIgFADIgBAAIABABIgNAKIgFAGQgRgQgcgJQgggMgeAHQgJgIgLgDIgUgCIgHgBIABACQgPACgSAIQgPAHgKAJIgEAFQgMAFgHAIQgegXAugVgAEMADIAFgDIgEAEIgBgBg");
	this.shape_12.setTransform(107.4,-201.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgdAUQgEgEADgIQAFgKAJAHIAAAOQgCAEgEAAQgDAAgEgDgAAagWQAEAEACAFQgDAAgGADQgPgJASgDg");
	this.shape_13.setTransform(107.7,-222);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#339966").s().p("AB1F+QgGgUgIgSIgIgSQgFgLgHgIQgLgOgKgRIABgCQAHgQAKgPQAKgTAEgWQgEAWgKATQgKAPgHAQIgBACIgDAIQgJAUgGAUIgHATIgEABIADABIgKAUQgLATgNASQgHAKgOgIIgBAAIAAAAQgLgGgNgEQgXgIgYgDIAAgBIgCAAIgsgHQgUgEgUgBIgvgDQgXgCgYAEIgHACIgCAAIgVAGIAVgGQgHAPgBATIgJgCIgigKIAPgKIAPgGQgHABgGAEIgCABIgPAKIgIgDIAIADIgQALQgJgRADgbQAEgXAGgVQADgJABgMQACgYALgUQAMgTAHgSIAPgmQAJgVAOgSQANgQARgSQAOgOAMgRQAMgRAIgSQAIgSAEgSQAGAGAKADQAUAGATAKIAHADIABABIABAAQADACAFAAIAfALQATAHAWADIAtAIQAXAEAXgFIAtgIQAXgEATgIIApgRQATgIAOgNQAGgEgBgIIACAEIAAABIAEAIQAGANAKANIAZAgQALAMAHAQIACAEIAFAKQAHAPAOAMQARAOAJAOQAIANAOAOIAeAeIAFAGQANAMAPALQAXAPAJAYQAKAaAMAZQAKAVgagCIgSgBQgZAAgYAEQgSAEgTABQgZABgYAEQgZAEgYAHIgoALIgJADQgSAFgUAEQgYAEgZAHQgCgOgFgPgABxFDIAJgCIgCgCIgHAEgAB6FBIAMgBIgMABgAE8D2IAMgHIABgBIACgDQgIAEgHAHgAGCDZIgHABIgEACQgMAGgPADIgPAFIgCABIACgBIAPgFQAPgDAMgGIAEgCIAHgBIAFgCIgFACgAlLGJIAAAAgAkYFzIAAAAgAlRiFQgLAAgLgJIAAgDIAAAAIAAgBIgBgGIABAGIgDABQgPgOgIgRQAIARAPAOQgQgDgNgDQgXgHgMgOQgOgPgLgRIgQgZIABAAIABABIAAAAIADgBIABAAIACgBIgCABIgBAAIgDABIAAAAIgBgBIgBAAIgCgEIABABIgLgJQgDgMAKgFQAmgVAsgRQApgPAqgXIBIgpIApgXQAMgGAMgDQAegIAgAMQAbALASAPIAFAGQAHAHAFAIQAOAYgKAVIgFgEIAFAEQgDAHgGAGIgBAAIgCABIgEAEIgHAIQgNANgRAOQgQANgTALIgkAUQgTAMgWAIIgpAQQgUAIgSALIgQAMQgLAIgPAFIgIABIgBAAgAlgiQIgHgBIAHABgAnTjlIAAAAg");
	this.shape_14.setTransform(138.8,-161.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCC99").s().p("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");
	this.shape_15.setTransform(117.6,-139.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]}).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.6,-245.9,210.5,199.4);


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
	this.shape_9.graphics.f().s("#000000").ss(0.3,1,1).p("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");
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
	this.shape_13.graphics.f("#FFCC99").s().p("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");
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
		
		 window.open ("reg_Scene4.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("reg_Scene2.html","_self");
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


(lib.contentScene5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{restart:97});

	// timeline functions:
	this.frame_113 = function() {
		/* _root.v3b.start();*/
	}
	this.frame_128 = function() {
		/* _root.v1b.start();*/
	}
	this.frame_189 = function() {
		/* _root.v3b.start();*/
	}
	this.frame_202 = function() {
		/* _root.v1b.start();*/
	}
	this.frame_275 = function() {
		/* _root.v3b.start();*/
	}
	this.frame_291 = function() {
		/* _root.v1b.start();*/
	}
	this.frame_357 = function() {
		/* gotoAndPlay(15);
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(113).call(this.frame_113).wait(15).call(this.frame_128).wait(61).call(this.frame_189).wait(13).call(this.frame_202).wait(73).call(this.frame_275).wait(16).call(this.frame_291).wait(66).call(this.frame_357).wait(13));

	// Layer 33
	this.instance = new lib.animbaseball();
	this.instance.parent = this;
	this.instance.setTransform(343,25,0.119,0.119,0,0,0,61,-140.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(263).to({_off:false},0).to({guide:{path:[343,25,328.1,18.2,310,17.6,290.5,17,271.1,15.8,254,14.6,235.1,15.7,212.5,17,203.3,14.5,194.8,12.2,185,12.5,166.5,13.1,148,13.1,128.6,13.1,109.2,13.9,90.1,14.8,70.1,14.6,50.4,14.5,31.1,13,10.6,11.4,-7.3,15.4,-25,19.2,-42,24.5,-55.8,28.8,-66.9,32.9]}},25).to({guide:{path:[-66.9,33,-71.1,14.3,-66.3,-3.3,-61.2,-21.6,-47.2,-25.1,-37.6,-8.1,-33.5,11.2,-29.6,29.4,-29.1,49,-28.9,55,-28.9,61,-27.9,54.3,-25.4,48,-22,39.5,-15.9,31.8,-14.9,30.4,-13.9,29.6,-10,26.1,-6.9,29.6,-5.9,30.7,-4.9,32.6,-4.4,33.5,-4,34.6,0.6,46,-0.9,63,6.7,41,23.9,53.5,28,56.5,30,62,32.7,61.1,36.5,60.9,37.9,60.8,39.5,60.8,47.8,60.8,60.3,63,65.3,63.9,69,62]}},44).to({_off:true},26).wait(12));

	// Layer 39
	this.instance_1 = new lib.Tween36("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-78.8,19.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(289).to({_off:false},0).to({rotation:-720,x:20.3,y:62.1},42).to({_off:true},27).wait(12));

	// Layer 38
	this.instance_2 = new lib.Tween34("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-63.6,32.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(289).to({_off:false},0).to({rotation:1440,guide:{path:[-63.5,32.6,-48.1,29.8,-31.2,24,-12.8,17.6,4.2,12.3,21.5,7,41.1,6,60.7,4.9,78.3,8.2,96.2,11.4,112.8,18.5,129.9,25.7,140.7,41.2,152.4,58.2,165.9,52.4,174.7,48.6,182.6,46.2,200.1,40.9,213.7,53.3,226.6,65.2,245.9,58.7,251.8,56.7,257.2,57.6,274.9,60.6,294.9,61.3,302.3,61.6,310.5,61.4]}},51).to({_off:true},18).wait(12));

	// Layer 32
	this.instance_3 = new lib.animCarmen_ready();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-119,31,0.292,0.292,0,0,0,219.6,-104.6);

	this.instance_4 = new lib.animCarmen_swing();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-116.7,29.8,0.312,0.312,0,0,0,101,-146.8);

	this.instance_5 = new lib.animCarmen_swingthrow();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-104.5,26.9,0.306,0.306,0,0,0,181.5,-168.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},249).to({state:[{t:this.instance_4}]},36).to({state:[{t:this.instance_5}]},4).to({state:[]},69).wait(12));

	// Layer 26
	this.instance_6 = new lib.animbaseball();
	this.instance_6.parent = this;
	this.instance_6.setTransform(332.4,15.8,0.119,0.119,0,0,0,61,-140.9);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(188).to({_off:false},0).to({guide:{path:[332.4,15.9,320.3,12.3,308.6,8.3,290.4,2.1,271.6,-2.1,252.5,-6.3,234.9,-8.4,216.4,-10.6,197.9,-13.2,179,-16,160,-15.9,141.1,-15.9,123,-16.9,102.9,-17.9,87.4,-14.5,68.9,-10.4,54.5,-5.9,36.8,-0.5,25.4,11.4,14.7,22.7,1.6,30.7,0.1,31.6,-1.4,32.6,-9,37.6,-15.3,43.4,-19.1,46.8,-22.4,50.6,-25.2,53.7,-28.9,56,-30.9,49.6,-42.9,47.2,-40.9,45.8,-44.1,44.7,-47.3,43.5,-55.8,42.7,-66.8,41.7,-77.7,39.9,-91.1,37.8,-101.2,44.5,-109.3,49.8,-115.7,56.2,-123.4,64,-134.5,55,-138.3,51.9,-142.1,50.5,-157.1,45.1,-167.6,55.3,-171.6,59.3,-173.9,65,-181.9,56.4,-194.9,56]}},39).to({x:-208},21).to({_off:true},1).wait(121));

	// Layer 30
	this.instance_7 = new lib.Tween32("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-45.2,3.3);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(223).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:1409.9,x:197,y:60},21).to({_off:true},5).wait(121));

	// Layer 21
	this.instance_8 = new lib.animbaseball();
	this.instance_8.parent = this;
	this.instance_8.setTransform(348.6,14.2,0.119,0.119,0,0,0,61,-140.9);
	this.instance_8._off = true;

	this.instance_9 = new lib.animCarmen_ready();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-119,31,0.292,0.292,0,0,0,219.6,-104.6);

	this.instance_10 = new lib.animCarmen_swing();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-116.7,29.8,0.312,0.312,0,0,0,101,-146.8);

	this.instance_11 = new lib.animCarmen_swingthrow();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-104.5,26.9,0.306,0.306,0,0,0,181.5,-168.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},99).to({state:[{t:this.instance_8}]},32).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},25).to({state:[]},1).to({state:[{t:this.instance_9}]},15).to({state:[{t:this.instance_10}]},45).to({state:[{t:this.instance_11}]},5).to({state:[]},26).to({state:[]},109).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(99).to({_off:false},0).to({x:-60.4,y:23.7},32).to({x:-57},1).to({x:302,y:-55},25).to({_off:true},1).wait(212));

	// Layer 13
	this.text = new cjs.Text("", "14px 'ComicSansMS'", "#FF0000");
	this.text.lineHeight = 22;
	this.text.parent = this;
	this.text.setTransform(163.2,89.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgNQALgPARgBQAMAAAJAEQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHADAIABQAFAAAHgCQAJgDADgEQADgEADgBQADABACACQACACAAACQAAAJgOAHQgMAEgLAAQgRABgLgJgAgPgUQgHAHgDAOIAYgKQANgHAGgGQgGgFgMAAQgJgBgGAIg");
	this.shape.setTransform(233.1,80.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgIA5IABgdIABgcIAAgcIAAgcQABgHAGgBQAIABAAAHIgBAcIAAAcIgBAnIAAASQgBAHgGAAQgIAAAAgHg");
	this.shape_1.setTransform(226.4,78.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgeA/QgCgCAAgDIAAgfIAAgfIgBgfIgBgQQAAgFACgEQACgFAFAAQADAAACADQACACAAADIAAACIgBAFIANgHQAGgCAFAAQAQAAAIAOQAGALAAATQAAAPgKALQgJAMgQAAQgHAAgJgDIgBAmQAAADgCACQgCADgDAAQgEAAgCgDgAgHgpIgKAJIABAkQAIADAIAAQAKAAAFgHQAEgFAAgKQAAgPgDgHQgEgHgHAAQgGAAgGADg");
	this.shape_2.setTransform(220,82.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgHA4QgCgCAAgDIAAgOIgBgOIABgSIABgSQAAgDACgDQACgCADAAQADAAADACQABADAAADIAAASIgBASIAAAOIABAOQgBADgCACQgCADgCAAQgDAAgDgDgAgEgqQgDgDAAgEQAAgDADgDQACgDADAAQAEAAADADQACADAAADQAAAEgCADQgDACgEAAQgDAAgCgCg");
	this.shape_3.setTransform(213.6,78.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgVAiQgMgKAAgQQAAgQALgQQAMgTANAAQAIAAAKADQALAFAAAHQAAADgBACQgCACgDAAQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBgBAAAAIgEgCQgEgEgLgBQgHAAgHAPQgHANAAAJQAAAKAHAFQAGAGAJAAQAFAAAFgCIAJgFIAEgCQADABACACQACACAAADQAAAGgMAFQgLAFgHAAQgPAAgKgKg");
	this.shape_4.setTransform(207.1,80.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgHA4QgCgCAAgDIAAgOIAAgOIAAgSIABgSQAAgDACgDQADgCACAAQADAAADACQACADAAADIgBASIgBASIAAAOIABAOQgBADgCACQgCADgCAAQgDAAgDgDgAgEgqQgDgDAAgEQAAgDADgDQACgDADAAQAEAAADADQACADAAADQAAAEgCADQgDACgEAAQgDAAgCgCg");
	this.shape_5.setTransform(200.9,78.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgEA3QgDgCAAgDIAAgJIABgJIgCgsIgRgCQgHgBAAgGQAAgEACgDQADgBACAAIARABIgBgLIAAgJQAAgEACgCQADgCADAAQAGAAACALIAAAIIAAAEIAAAEIAKAAIALAAQAFACAAAGQAAADgCACQgCADgEAAIgDAAIgFgBIgKACIABAtIAAADIAAAEQAAARgIAAQgCAAgCgCg");
	this.shape_6.setTransform(194.7,79);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgdAkIAAg2IAAgHIAAgIQAAgIAHAAQAIAAAAANQAOgPASAAQAGAAADAFQADAFAAAKIAAAFQAAAKgHAAQgHAAAAgIIAAgFIgBgHQgMACgGAFQgHAFgFAKIAAAqQAAAIgIAAQgGAAAAgIg");
	this.shape_7.setTransform(187.3,80.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAZAoIgFgGIgOAGQgFACgDAAQgTAAgIgKQgHgKgBgUQAAgRAOgOQANgNAQAAQAIAAAIADQAKAFAAAGIgBAEIgBAJIgBARQAAAJACAGIAEAOIACAEIABABQAAADgDACQgCACgCAAQgCAAgEgDgAgMgTQgJAKAAAMQAAANAFAGQAEAHAJAAQAGAAAFgDIAIgGQgCgUAAgKIAAgHIACgJIgFgCIgEAAQgLAAgIAJg");
	this.shape_8.setTransform(179.1,80.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AggA8QgCgCAAgDIAAgXIABggIACggIAAgLIABgLQABgHAGABIAHgBIAMAAQANAAANAJQANALAAAPQAAAUgOAKQgOAKgRAAIgKgBIAAAqQAAADgCACQgCACgDAAQgDAAgCgCgAgRggIgCAfIAJABQAMAAAJgGQAKgHAAgNQAAgJgJgGQgJgGgJAAIgGABIgFAAg");
	this.shape_9.setTransform(170.9,78.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgEA3QgDgCABgDIAAgJIAAgJIgBgsIgSgCQgHgBAAgGQAAgEACgDQADgBADAAIAQABIAAgLIAAgJQAAgEACgCQACgCADAAQAGAAABALIAAAIIAAAEIAAAEIAMAAIAKAAQAFACAAAGQAAADgDACQgCADgDAAIgEAAIgDgBIgLACIACAtIAAADIAAAEQAAARgJAAQgCAAgCgCg");
	this.shape_10.setTransform(158.1,79);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgVAsQgMgFAAgIQAAgDACgCQADgCADAAQACAAAEADQACACAHABIAJABQAFAAAFgBQAHgDAAgFQAAgKgOgEIgIgCQgKgCgEgDQgHgDAAgJQAAgRAQgHIAOgFIAOgFIAHgBQAEAAACACQACACAAAEIABAHIABAGQAAAEgCACQgCACgEAAQgEAAgCgDIgCgIIgSAFQgLAFAAAIIAEABQARADAJAGQANAHAAAPQAAANgLAHQgJAFgNAAQgLAAgJgDg");
	this.shape_11.setTransform(150.2,80);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAZAoIgFgGIgOAGQgFACgDAAQgSAAgJgKQgHgKAAgUQAAgRAMgOQAOgNAQAAQAIAAAIADQAKAFAAAGIgBAEIgCAJIAAARQAAAJABAGIAGAOIABAEIABABQAAADgCACQgCACgEAAQgBAAgEgDgAgNgTQgIAKAAAMQAAANAFAGQAEAHAJAAQAGAAAGgDIAIgGQgDgUAAgKIAAgHIACgJIgFgCIgDAAQgLAAgKAJg");
	this.shape_12.setTransform(142.4,80.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AggA8QgCgCAAgDIAAgXIABggIACggIAAgLIABgLQABgHAGABIAHgBIAMAAQANAAANAJQANALAAAPQAAAUgOAKQgOAKgRAAIgKgBIAAAqQAAADgCACQgCACgDAAQgDAAgCgCgAgRggIgCAfIAJABQAMAAAJgGQAKgHAAgNQAAgJgJgGQgJgGgJAAIgGABIgFAAg");
	this.shape_13.setTransform(134.2,78.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgEA3QgCgCgBgDIAAgJIABgJIgBgsIgSgCQgHgBAAgGQAAgEACgDQADgBADAAIAQABIAAgLIAAgJQAAgEABgCQADgCADAAQAGAAACALIAAAIIAAAEIAAAEIALAAIAKAAQAFACAAAGQAAADgDACQgCADgDAAIgEAAIgDgBIgLACIACAtIAAADIAAAEQAAARgJAAQgCAAgCgCg");
	this.shape_14.setTransform(92.6,79);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgVAsQgMgFAAgIQAAgDACgCQADgCADAAQACAAAEADQACACAHABIAJABQAFAAAFgBQAHgDAAgFQAAgKgOgEIgIgCQgKgCgEgDQgHgDAAgJQAAgRAQgHIAOgFIAOgFIAHgBQAEAAACACQACACAAAEIABAHIABAGQAAAEgCACQgCACgEAAQgEAAgCgDIgCgIIgSAFQgLAFAAAIIAEABQARADAJAGQANAHAAAPQAAANgLAHQgJAFgNAAQgLAAgJgDg");
	this.shape_15.setTransform(84.7,80);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAZAoIgFgGIgNAGQgGACgDAAQgTAAgHgKQgJgKABgUQgBgRANgOQANgNASAAQAGAAAJADQALAFAAAGIgCAEIgCAJIAAARQAAAJABAGIAGAOIABAEIAAABQAAADgBACQgCACgEAAQgBAAgEgDgAgNgTQgIAKAAAMQAAANAFAGQAEAHAJAAQAHAAAFgDIAIgGQgDgUAAgKIABgHIABgJIgFgCIgDAAQgLAAgKAJg");
	this.shape_16.setTransform(76.9,80.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AggA8QgCgCAAgDIAAgXIABggIACggIAAgLIABgLQABgHAGABIAHgBIAMAAQANAAANAJQANALAAAPQAAAUgOAKQgOAKgRAAIgKgBIAAAqQAAADgCACQgCACgDAAQgDAAgCgCgAgRggIgCAfIAJABQAMAAAJgGQAKgHAAgNQAAgJgJgGQgJgGgJAAIgGABIgFAAg");
	this.shape_17.setTransform(68.7,78.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgEA3QgDgCABgDIAAgJIAAgJIgBgsIgSgCQgHgBAAgGQAAgEACgDQADgBADAAIAQABIAAgLIAAgJQAAgEACgCQACgCADAAQAGAAABALIAAAIIAAAEIAAAEIAMAAIAKAAQAFACAAAGQAAADgDACQgCADgDAAIgEAAIgDgBIgLACIACAtIAAADIAAAEQAAARgJAAQgCAAgCgCg");
	this.shape_18.setTransform(22.3,79);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AATAmIgCgRIgBgRIAAgHIABgHQgBgQgGAAQgIAAgIAKQgHAJgEANIgBAIIAAAIIAAAHIABAHQAAADgCACQgDADgDAAQgDAAgCgDQgDgCAAgDIAAgHIgBgHIACgWIABgWIgBgHIAAgIQABgDACgCQACgCADAAQAHgBABALIAAAJQAOgRAMAAQANgBAEALQAEAIABAOIAAAIIgBAGQAAAHACAKIACARQAAAEgCABQgDADgDAAQgHAAgBgIg");
	this.shape_19.setTransform(14.5,80.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgNQALgPARgBQAMAAAJAEQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHADAIABQAFAAAHgCQAJgDADgEQADgEADgBQADABACACQACACAAACQAAAJgOAHQgMAEgLAAQgRABgLgJgAgPgUQgHAHgDAOIAYgKQANgHAGgGQgGgFgMAAQgJgBgGAIg");
	this.shape_20.setTransform(5.9,80.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgVAsQgMgFAAgIQAAgDACgCQADgCADAAQACAAAEADQACACAHABIAJABQAFAAAFgBQAHgDAAgFQAAgKgOgEIgIgCQgKgCgEgDQgHgDAAgJQAAgRAQgHIAOgFIAOgFIAHgBQAEAAACACQACACAAAEIABAHIABAGQAAAEgCACQgCACgEAAQgEAAgCgDIgCgIIgSAFQgLAFAAAIIAEABQARADAJAGQANAHAAAPQAAANgLAHQgJAFgNAAQgLAAgJgDg");
	this.shape_21.setTransform(-2.8,80);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgNQALgPARgBQAMAAAJAEQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHADAIABQAFAAAHgCQAJgDADgEQADgEADgBQADABACACQACACAAACQAAAJgOAHQgMAEgLAAQgRABgLgJgAgPgUQgHAHgDAOIAYgKQANgHAGgGQgGgFgMAAQgJgBgGAIg");
	this.shape_22.setTransform(-10.7,80.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgdAkIAAg2IAAgHIAAgIQAAgIAHAAQAIAAAAANQAOgPASAAQAGAAADAFQADAFAAAKIAAAFQAAAKgHAAQgHAAAAgIIAAgFIgBgHQgMACgGAFQgHAFgFAKIAAAqQAAAIgIAAQgGAAAAgIg");
	this.shape_23.setTransform(-18.8,80.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AggA8QgCgCAAgDIAAgXIABggIACggIAAgLIABgLQABgHAGABIAHgBIAMAAQANAAANAJQANALAAAPQAAAUgOAKQgOAKgRAAIgKgBIAAAqQAAADgCACQgCACgDAAQgDAAgCgCgAgRggIgCAfIAJABQAMAAAJgGQAKgHAAgNQAAgJgJgGQgJgGgJAAIgGABIgFAAg");
	this.shape_24.setTransform(-27,78.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0000").s().p("AgEAlQgCgCAAgEIgBgEIAAgEQAAgEACgCQACgCADAAQAJAAAAAQQAAAEgCACQgDACgDAAQgDAAgCgCgAgFgTQgDgCABgEIgBgDIAAgDQAAgDACgCQADgCADAAQAIAAAAANQAAAEgDACQgCACgDAAQgDAAgCgCg");
	this.shape_25.setTransform(-43.3,79.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF0000").s().p("AgkA8QgDgDAAgEIAAgWIACgfIABghIABgVQABgEACgBQAKgDAOAAQANAAAMAJQAPALAAAQQAAAUgQAKQAMAFAGAGQAGAGAAAIQAAAJgLAJQgHAGgIADQgQAHgbAAQgEAAgDgDgAgXAfIAAAQQAUgBAMgFQAFgCAFgEQAFgEAAgCQAAgEgKgFQgHgDgHgCIgIgBIgDAAIgDAAIgJgBIAAASgAgUguIAAAOIgCAeIAMABQALgBAHgHQAIgHAAgKQAAgIgIgGQgIgHgIAAIgMABg");
	this.shape_26.setTransform(-50.3,78.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF0000").s().p("AgnA7QgCgCAAgEIgBgSIgBgSIACgVIACgVIgBgMIAAgMQAAgEACgDQADgFAFABIATABQALACAGADQAgARgBAYQAAAMgLAJQgIAHgNAEQAZANAMAOQABADAAACQAAAEgCACQgDADgDAAQgDAAgCgDQgagZgfgJIABAPIAAAPQAAAEgCACQgCACgEAAQgDAAgCgCgAgYgiIAAAJIgBAQIgBAOIAEAAIADABQATAAAJgGQAFgBADgEQAFgEAAgEQAAgKgNgKQgKgIgMgCIgMgBg");
	this.shape_27.setTransform(-60.6,78.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF0000").s().p("AghA8QgIgGAAgZIAAgMIABgNIgBgDQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBIACgiIgBgIIgBgJQABgIAHgBQAEABACACIASgEIAOgCQATABAMAEQAFACAAAFQAAAEgDACQgCADgDAAIgDgBQgMgDgNAAIgNABIgQADIAAAIIAAAfIAhgEIASgCQADABADACQACACAAADQAAAHgHABIgSABIgjADIgBALIAAAKQAAARACADQACACAKAAIAOgBIAPAAIAEAAIAFgBQAIAAAAAJQAAAGgGACQgIABgYAAQgYAAgGgHg");
	this.shape_28.setTransform(-70.5,78.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF0000").s().p("AgOA5QgJgYgMgrIgGgWQgEgQAAgFQAAgEACgCQACgCAEAAQAGAAACAGIACAOIAIAaQAIAdAGAVIABgCIAUg3IAHgUQAEgLAFgGQADgDADAAQADAAADACQACADAAADIgCAFQgEAHgEAIIgGARIgVA4QgDAKgFAJQgCAFgEAAQgGAAgDgGg");
	this.shape_29.setTransform(-80.5,78.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF0000").s().p("AgdAkIAAg2IAAgHIAAgIQAAgIAHAAQAIAAAAANQAOgPASAAQAGAAADAFQADAFAAAKIAAAFQAAAKgHAAQgHAAAAgIIAAgFIgBgHQgMACgGAFQgHAFgFAKIAAAqQAAAIgIAAQgGAAAAgIg");
	this.shape_30.setTransform(-94.6,80.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF0000").s().p("AAZAoIgFgGIgOAGQgFACgDAAQgSAAgJgKQgIgKAAgUQABgRANgOQANgNAQAAQAIAAAIADQALAFAAAGIgCAEIgBAJIgBARQAAAJACAGIAEAOIACAEIAAABQAAADgCACQgCACgCAAQgCAAgEgDgAgMgTQgJAKAAAMQAAANAEAGQAFAHAJAAQAHAAAEgDIAIgGQgCgUAAgKIABgHIABgJIgFgCIgEAAQgLAAgIAJg");
	this.shape_31.setTransform(-102.8,80.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF0000").s().p("AgIA5IABgdIABgcIAAgcIABgcQAAgHAGgBQAIABAAAHIgBAcIAAAcIgBAnIgBASQgBAHgFAAQgIAAAAgHg");
	this.shape_32.setTransform(-109.1,78.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF0000").s().p("AASAlQgKAGgMgBQgKAAgHgEQgHgFgCgJQgDgWAAgOQAAgLADgOQABgHAGAAQADAAADADQACABAAAEIgBALIgBANIABAUQAAAKACAGIAFACIAFAAQAKABALgEIAAgQIAAgOQAAgQABgNQABgIAHAAQADAAADADQACACAAADIgCAeIAAAQIABAQIAAAGIAAAFQAAADgCACQgCADgEAAQgGAAgBgIg");
	this.shape_33.setTransform(-115.4,80.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF0000").s().p("AgaA9QgKgDAAgFQAAgIAHAAIAJACQAHACAHgBQAOAAAGgOQAEgKAAgTQgEAHgGAEQgGAEgGAAQgOAAgJgKQgJgJAAgPQAAgVAMgMQANgOAUAAQAHAAAFACQAFACADADQAIAAAAAKIgBAPIgDAOIgBAZQgBAQgDAKQgDANgIAGQgJAHgRAAQgKAAgHgBgAgOgmQgHAJAAAOQAAALAEAFQAFAGAIAAQAHAAAIgIQAGgIABgIIAEgbIgHgDIgHgBQgOAAgIAKg");
	this.shape_34.setTransform(-124,82.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF0000").s().p("AgaAiQgMgKAAgSQAAgTAKgNQALgPARgBQAMAAAJAEQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHADAIABQAFAAAHgCQAJgDADgEQADgEADgBQADABACACQACACAAACQAAAJgOAHQgMAEgLAAQgRABgLgJgAgPgUQgHAHgDAOIAYgKQANgHAGgGQgGgFgMAAQgJgBgGAIg");
	this.shape_35.setTransform(-132.3,80.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF0000").s().p("AgdAkIAAg2IAAgHIAAgIQAAgIAHAAQAIAAAAANQAOgPASAAQAGAAADAFQADAFAAAKIAAAFQAAAKgHAAQgHAAAAgIIAAgFIgBgHQgMACgGAFQgHAFgFAKIAAAqQAAAIgIAAQgGAAAAgIg");
	this.shape_36.setTransform(-140.5,80.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF0000").s().p("AgdAkIAAg2IAAgHIAAgIQAAgIAHAAQAIAAAAANQAOgPASAAQAGAAADAFQADAFAAAKIAAAFQAAAKgHAAQgHAAAAgIIAAgFIgBgHQgMACgGAFQgHAFgFAKIAAAqQAAAIgIAAQgGAAAAgIg");
	this.shape_37.setTransform(-148.2,80.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF0000").s().p("AghA5QgDgCAAgDQAAgEADgCQACgCADAAIAQgCIABgPIAAgNIgBgNQAAgRACgbIgKAAIgKABQgDAAgDgDQgCgCAAgDQAAgIAHAAIAZgBQAOAAAXADQAIABAAAIQAAADgEADQgCABgCAAIgOgBIgMgBIgBAqIAAAOIAAANIAAAOIAYgBQADAAACADQACACAAADQAAAEgCACQgCACgDAAIgNABIgNAAIgPABIgPACQgDAAgCgDg");
	this.shape_38.setTransform(-156.6,78.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text}]},83).wait(287));

	// Layer 20
	this.instance_12 = new lib.animCarmen_ready();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-105.1,25.2,0.286,0.286,0,0,0,219.5,-104.4);

	this.instance_13 = new lib.animCarmen_swing();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-103.4,24.8,0.294,0.294,0,0,0,101.1,-146.8);

	this.instance_14 = new lib.Tween25("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(-32.8,116);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_12}]},83).to({state:[{t:this.instance_13}]},46).to({state:[]},29).to({state:[{t:this.instance_14}]},117).to({state:[{t:this.instance_14}]},15).wait(80));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(275).to({_off:false},0).to({x:161.9,y:86.7},15).wait(80));

	// Layer 18
	this.text_1 = new cjs.Text("flew", "14px 'Comic Sans MS'", "#FF0000");
	this.text_1.lineHeight = 22;
	this.text_1.parent = this;
	this.text_1.setTransform(2.8,115.7);
	this.text_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(189).to({_off:false},0).to({x:62.7,y:85.1},13).wait(168));

	// Layer 17
	this.instance_15 = new lib.Tween29("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(-42.8,120);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(113).to({_off:false},0).to({x:-6.2,y:96.4},15).wait(242));

	// Layer 14
	this.instance_16 = new lib.s4_s1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(42.5,120,1,1,0,0,0,-86.5,-39.1);

	this.instance_17 = new lib.s4_s2();
	this.instance_17.parent = this;
	this.instance_17.setTransform(31.3,125.6,1,1,0,0,0,-118.2,-32.1);

	this.instance_18 = new lib.s4_s3();
	this.instance_18.parent = this;
	this.instance_18.setTransform(43.6,125.6,1,1,0,0,0,-25.7,-39.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_16}]},97).to({state:[]},62).to({state:[{t:this.instance_17}]},14).to({state:[]},76).to({state:[{t:this.instance_18}]},12).wait(109));

	// Def
	this.instance_19 = new lib.IrregularVerbsDef();
	this.instance_19.parent = this;
	this.instance_19.setTransform(47,17.7,1,1,0,0,0,239,30);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(72).to({y:-79.1},10).to({_off:true},276).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-190.6,-12.3,473.8,60);


// stage content:
(lib.reg_Scene3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene3:0,scene3_repeat:347});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_1 = function() {
		playSound("irregularverbs1");
	}
	this.frame_85 = function() {
		playSound("bubble_rise");
	}
	this.frame_90 = function() {
		playSound("present");
	}
	this.frame_105 = function() {
		playSound("flyfartherinhighaltbaseballs");
	}
	this.frame_130 = function() {
		playSound("bell_chord_1");
	}
	this.frame_166 = function() {
		playSound("past");
	}
	this.frame_179 = function() {
		playSound("flewbaseballbatacross");
	}
	this.frame_204 = function() {
		playSound("bell_chord_2");
	}
	this.frame_234 = function() {
		playSound("pastparticiple");
	}
	this.frame_250 = function() {
		playSound("hasflownbrokenbat");
	}
	this.frame_271 = function() {
		playSound("bell_chord_3");
	}
	this.frame_346 = function() {
		/* _root.gonow = true;*/
	}
	this.frame_351 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(84).call(this.frame_85).wait(5).call(this.frame_90).wait(15).call(this.frame_105).wait(25).call(this.frame_130).wait(36).call(this.frame_166).wait(13).call(this.frame_179).wait(25).call(this.frame_204).wait(30).call(this.frame_234).wait(16).call(this.frame_250).wait(21).call(this.frame_271).wait(75).call(this.frame_346).wait(5).call(this.frame_351).wait(1));

	// content
	this.instance = new lib.contentScene5();
	this.instance.parent = this;
	this.instance.setTransform(458.6,172.5,1,1,0,0,0,230.2,4.5);

	this.instance_1 = new lib.Tween7("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(196.6,35.3,0.309,0.309);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(352));

	// main
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,53.9,1,1,0,0,0,54,40.5);

	this.instance_2 = new lib.Background();
	this.instance_2.parent = this;
	this.instance_2.setTransform(275,192.3,1,1.089);

	this.instance_3 = new lib.Background();
	this.instance_3.parent = this;
	this.instance_3.setTransform(275,196.3,1,1.089);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.UI}]}).wait(352));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,200.6,534,398.7);
// library properties:
lib.properties = {
	id: '8E1F3C51199706489F863BA123874BB1',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
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
		{src:"sounds/flewbaseballbatacross.mp3", id:"flewbaseballbatacross"},
		{src:"sounds/flew.mp3", id:"flew"},
		{src:"sounds/flyfartherinhighaltbaseballs.mp3", id:"flyfartherinhighaltbaseballs"},
		{src:"sounds/fly.mp3", id:"fly"},
		{src:"sounds/hasflownbrokenbat.mp3", id:"hasflownbrokenbat"},
		{src:"sounds/havedived.mp3", id:"havedived"},
		{src:"sounds/haveflown.mp3", id:"haveflown"},
		{src:"sounds/irregularverbs1.mp3", id:"irregularverbs1"},
		{src:"sounds/irregularverbsformthepasttense.mp3", id:"irregularverbsformthepasttense"},
		{src:"sounds/laymeanstoplaceortoput.mp3", id:"laymeanstoplaceortoput"},
		{src:"sounds/liemeanstoreclineortorest.mp3", id:"liemeanstoreclineortorest"},
		{src:"sounds/past.mp3", id:"past"},
		{src:"sounds/pastparticiple.mp3", id:"pastparticiple"},
		{src:"sounds/perc_techno.mp3", id:"perc_techno"},
		{src:"sounds/present.mp3", id:"present"},
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
an.compositions['8E1F3C51199706489F863BA123874BB1'] = {
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