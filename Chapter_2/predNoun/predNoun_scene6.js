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


(lib.Symbol103 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAIAAAEAFQAFAFAAAGQAAAHgFAFQgEAFgIAAQgGAAgFgFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,-1.7,3.4,3.4);


(lib.Symbol102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgWB1QgDgEAAgGIAAgCQADgSAAgVIgBhMIgWABQgOAAABgNQAAgOAYAAIANgBIACgUQADgfAMgOQANgSAfAAQAUAAgBAOQAAANgSAAQggAAgFAuIAAAIIAegBQAVAAABANQAAALgLACQgFAAgGAAQgGgBgZADIgBAeIAAAZIABAaQAAAagDAPQgCAKgKABQgGgBgEgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.9,-12,11.9,24.1);


(lib.Symbol101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgoA6QgSgSgBghQgBgdAQgYQATgcAiAAQAbAAAOAZQALAVAAAcQAAAdgQAWQgRAYgcAAQgXAAgRgRgAgXgbQgJAQAAASQAAAVAKALQAJAIANABQANAAAKgLQAMgMAAgTQACg0geAAIgBAAQgTAAgKATg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-7.5,12.1,15);


(lib.Symbol100 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AglBMQgWgHABgOQAAgFAEgEQAEgFAFAAQAFAAAHAHQADADALACIAPACQALAAAJgDQANgEAAgIQAAgUgagGIgOgDQgRgEgJgFQgKgHgBgQQAAgcAbgMIAZgJQATgFAIgDQAFgDAGAAQAHAAADAEQAEADAAAHIACALIABAMQAAAGgDAEQgEADgFAAQgIAAgEgEQgBgEgCgLIgfAKQgWAJAAAMIAIADQAfAFAPAJQAWAOABAcQgBAWgTALQgQAJgYAAQgRAAgQgGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.9,-8.2,11.9,16.4);


(lib.Symbol99 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgpBnQgEAGgHAAQgFAAgDgEQgEgEAAgFIAAgKIAAgLIgBgrIAAgrIAAgmIAAglQAAgIAEgHQAFgJAHAAQAKABAAAMIAAAFIgBAGIAABAQAMgIAKgDQALgFAJAAQAdABASAWQARAUAAAfQAAAfgUAWQgUAVgdABQgVgBgRgHgAgVgFIgTAMIAABEIASAIQAJACAKAAQATAAANgOQAMgOAAgVQAAgUgKgOQgLgOgTAAQgKAAgMAHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.6,-11,13.2,22.1);


(lib.Symbol98 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ag0A/IAAhfIAAgOIABgNQAAgOALAAQAOAAAAAXQAagaAfAAQAMAAAFAJQAGAIgBARIAAAJQgBASgMAAQgMAAAAgOIAAgKIgBgLQgWADgLAJQgNAJgIASIAABKQAAAOgNAAQgMAAAAgOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.3,-7.7,10.7,15.4);


(lib.Symbol97 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgOA/Igth1IgCgGQAAgGAEgEQAEgEAGAAQAIAAAEAIIAiBfQAKgWAPgoIAMggQAEgIAIAAQAGAAAEAEQAEAEAAAGQAAAEgWA2IgcA/QgBANgLAAQgKAAgEgMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.2,-7.5,12.4,15);


(lib.Symbol96 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AguA7QgVgRAAgfQAAgiARgZQATgaAfAAQAWAAAOAIQASAJAAAUQAAAOgPALQgIAFgVAJIg0AZQAIALAMAGQALAGAOAAQAKAAAMgEQAQgFAFgHQAEgHAGAAQAFAAAEAEQADADAAAFQAAAPgZALQgUAKgUAAQgeAAgTgQgAgcgkQgLANgGAZIArgTQAXgMALgJQgMgLgUAAQgQAAgMANg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.8,-7.4,13.6,15);


(lib.Symbol95 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAlBnQgDgLgDgUQgCgUAAgNIABgLIAAgLQAAgYgNAAQgRAAgNAOQgHAJgMAWQAAA0gFAKQgDAIgJAAQgFAAgEgEQgFgDAAgGIACgGIABgUIABh4IABgWQAAgIgBgGQgCgGAAgHQAAgFAEgEQAEgEAGAAQALAAACAMQACANABALIgBAeIgBAeIAAAMQALgPANgHQAMgIAOAAQAXAAAIAPQAGAKABAYIADA2QACAQAEAMIAAAFQAAAFgEAEQgFAEgFAAQgKAAgDgLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-11.3,12.8,22.8);


(lib.Symbol94 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgIBgQgEgEAAgFIABgPIAAgPIgDhPIgegDQgNgBAAgNQAAgFAEgFQAEgDAGAAIAcACIAAgTIgBgQQAAgHAEgDQAEgEAGAAQALAAACAUIABAMIgBARIAUgCQAOAAAEABQAJACAAAKQAAAHgEADQgEAFgGAAIgGgBIgHAAIgTACIADBdQABAegPAAQgFAAgEgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.8,-10,11.6,20);


(lib.Symbol93 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhGBdQgQgSAAgmQAAgjAQglQARgmAagXQASgPASAAQANAAAUAIQAZAKAAAMQAAAFgEAFQgEAEgGAAQgDAAgGgDQgUgNgPAAQgJAAgLALQgGAFgKAOQggAqAAAwQAAAaAIAKQAJALAXAAQAXAAASgPQATgRAIgeQgmACgaAMIgGACQgGAAgEgFQgEgEAAgGQAAgHAHgFQAdgRBIAAQAGAAAEAEQAEADAAAGQAAAJgIAEQgIAqgbAZQgbAZgkAAQgiAAgRgTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.7,-11.2,17.5,22.5);


(lib.Symbol92 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhbBqQgEgDAAgHIABgRIABgSIAAgZIABgZIAAgaIgBgbIgCgaIgBgaQAAgGAFgFQAGgGAGAAQAIAAAKAQQAiAzAbAiQAgAnAnAlIAAgRIgBgSQAAg7gEgkIgEgOQgDgJAAgGQAAgPAPAAQAXAAAABYIAAAtIAAAtIgDAWQgCAOgMAAQgIAAgKgKQg4g1hHhiIgBA9IABAiIAAAjQAAAlgOAAQgIAAgEgGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.7,-11.1,19.5,22.3);


(lib.Symbol91 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAfBrQgGgEAAgGQgGgQgCgLIgLg7QgGgkgCgWQgMAtgOAfQgQAjgFAVIABAHQAAAGgEAEQgGADgGAAQgTABAAgSIgThUQgJghgVg/IgBgFQAAgNAOAAQAKAAAEAJIAKAdQAIAYAJAjIAMA8QAPgiAOgvQAKgfAFgLQAMgeAKAAQAJAAAFAKQAFAMAEAsQADAWAHAfIAMA2QASgsAchLQACgEAEgVQAFgQAFgKQAFgHAIAAQAOAAAAAOQAAACgEALIgOAoIgoBiQgFAPgOAgQgFAJgKAAQgGAAgFgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-11.1,26.8,22.2);


(lib.Symbol90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhFBoQgEgFAAgGIgBggIgBggQAAgMADgYQADgZAAgNIgBgUIgCgVQAAgIAFgGQAEgHAKABIAhACQATADAMAHQA3AdAAAqQAAAVgTAPQgPANgXAHQAqAWAWAaQADAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgFgEQgtgtg3gPIACA1QAAAGgDAFQgEAEgGAAQgGAAgEgEgAgrg9IABARIgBAbIgEAaIAGAAIAGABQAjAAAQgKQAIgDAHgHQAHgHAAgGQAAgTgWgQQgSgPgWgCIgUgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.6,-10.7,15.2,21.5);


(lib.Symbol89 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ag2BfQgagMAAgVQAAgFAEgEQAEgEAGAAQAGAAAGAIQAHAKAFAEQAMAIAWAAQAUAAASgKQAXgLAAgVQAAgRgTgKQgRgJgXgBQgWAAgPgIQgTgLAAgVQAAgYAbgUQAbgTAbAAQANAAARAEQAWAGAAAJQAAAMgMAAQgGAAgOgDQgNgDgIABQgUAAgPAKQgPALAAAPQAAALAUAEQAIACAUACQAfACASARQAQAPAAAXQAAAhgeATQgaARgiAAQgYAAgVgJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.1,-10.4,16.3,20.9);


(lib.Symbol88 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ag7BlQgFgFAAgFQAAgGAFgFQADgEAHABQAIgBAVgCIABgZIgBgYIgBgWQABgfADgvIgjAAQgGAAgFgDQgEgEAAgGQAAgNANgBQALgCAfABQAagBApAHQANACAAAMQgBAGgEAEQgEAEgGAAQgIAAgOgDIgVgCQgEAnAAAkIAAAXIABAZIgBAWIArAAQAGAAAEAEQAEAEAAAGQAAAGgEAEQgEAEgGAAIgXABIgWAAQgJAAgRACQgSADgJgBQgHAAgDgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.7,-10.4,13.5,20.9);


(lib.Symbol87 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ABUBnQgEgHgDgPIgFgYQgGgVgMhKIgkBrQgFAQgFAKQgGAKgIAAQgJAAgEgJQgDgGgDgJIgDgPQgOgwgLg2IgWBgQgCAMgFAZQgEALgKAAQgHAAgDgFQgEgEAAgGQAAgXAKghIAXhhQAGgeAGgKQAGgIAIAAQAJAAAEALQAFAMAGAlQAIAtAPAzQATgzAPg5IAEgUQADgMAEgIQAFgJAJAAQAMAAAGAWQADAIADAYQAIA9AMAsIAGAXQAGATAAAFQAAAGgFAEQgEADgGAAQgHAAgFgHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-11,22.2,22.1);


(lib.Symbol86 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAwBHQgEgNgFgeIgkAGIgjAIIgZA0QgEAJgHAAQgFgBgFgEQgEgDgBgHQAAgGAWgrQgDgEAAgEQAAgMAOgDQAPgcAXgmQAgg0AIAAQALAAAEAPIAdCMIAIAWQADALABADQAAAGgFAFQgEADgGAAQgMAAgJgggAgQAKIAxgKIgLg0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.3,-10.3,16.7,20.6);


(lib.Symbol85 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgQAeQgEgEAAgFQAAgEAJgSIALgZQADgGAGAAQAFAAADAEQAEADAAAFQAAADgUArQgCAHgHAAQgFAAgDgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-3.3,4.2,6.7);


(lib.Symbol84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ag7BpQgOgMAAgsIABgSIACgXQgDgEAAgDQAAgEAEgDQACgoAAgTIgBgOIgBgPQAAgRANAAQAGABAEADIAfgGQAOgCANAAQAgAAAVAHQAIAEABAKQAAAFgEAEQgEAFgGgBIgEAAQgYgHgUABQgMAAgMACQgNACgPAEIAAAOIgBA0IA6gFIAggDQAGAAAEAEQAEADABAIQAAALgNABIheAIIgCATIAAAQQAAAeAFAGQACAEATAAIAYgBIAagBIAIgBIAIAAQAOAAAAAOQAAAMgLACQgNACgqAAQgqAAgMgLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.3,-11.6,14.7,23.3);


(lib.Symbol83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhABpQgEgFAAgGIAAgoQgBgTADgkIADg4QgBgNADgZQAAgHAEgCQASgGAYAAQAXAAAXARQAZATAAAbQAAAjgbAUQAUAIAKALQALALgBAMQABARgTAPQgMALgOAGQgdAMgwAAQgGAAgGgGgAgpA2IAAAdQAjgBAWgJQAJgEAJgIQAJgHgBgEQAAgGgRgIQgNgGgMgDIgOgDIgGABIgFAAIgPgBIgBAegAgkhRIgDBNIAVACQAUgCANgLQAOgNAAgTQAAgNgPgLQgOgLgOAAIgWABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.9,-11.1,13.9,22.2);


(lib.rapbubble4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AiPA1QgHgCgIgCQhCgUAAgdQAAgcBCgUQBCgUBcAAQBdAABCAUQBCAUAAAcQAAAdhCAUQhCAUhdAAQg2AAgtgH");
	this.shape.setTransform(0,-1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAYAaQgRgCgOgMQgNgRgJgTIgBAAIABgCIACAAQAOAZAVAPIABABIABABIAHACIACACIABABIABAAIgCgEIgBgCIgBgDIAAgBIgHgKIgBgCIABgHIABgCIACAAQABABAAABQAAAAAAABQAAAAAAABQAAAAAAABIAAABIAIAOIABABIACABIADAKQABABAAAAQAAABABAAQAAABAAAAQABABAAABIgCAAIgEABIgBgCg");
	this.shape_1.setTransform(-11.1,6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhbBUIgBgBIgBgCIgIgCIgBgBIgBgBQgVgQgOgZIgDAAIAAACIgCAAIAAABIgPgFQhCgTAAgdQAAgcBCgUQBCgVBcAAQBdAABCAVQBCAUAAAdQAAAchCATQhCAVhdAAQg2AAgtgHIgBAEIgBACIAAAHIABADIAGAKIABABIAAADIACACIABAEIgBAAg");
	this.shape_2.setTransform(0,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.rapbubble4, new cjs.Rectangle(-23.4,-9.7,47,18.4), null);


(lib.rap4bstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgBABIAAgBIAAgBIABAAIACAAIAAABIAAABIgCABIgBgBg");
	this.shape.setTransform(178,-13.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgBABIAAgBIAAgBIABAAIACAAIAAABIAAABIgCABIgBgBg");
	this.shape_1.setTransform(175.8,-13.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgBABIAAgBIAAgBIABAAIACAAIAAABIAAABIgCABIgBgBg");
	this.shape_2.setTransform(173.6,-13.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgMAPIgBgBIAAgCIABgDIAAgEIAAgDIAAgDIAAgEIgBgEIAAgEIABgBIACgBIACACIAIAMIAKALIAAgDIAAgDIgBgMIAAgCIgBgCQAAgBAAAAQABgBAAAAQAAAAABAAQAAAAABAAQADAAAAAMIAAAGIAAAGIAAADQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgCgBQgIgIgJgNIAAAEIgBAEIABAFIAAAFQAAAFgCAAIgCgBg");
	this.shape_3.setTransform(171.6,-15.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgHAPQgDgCAAgGIABgDIAAgDIgBgBIABAAIAAgIIAAgCIAAgDQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABAAIACABIAEgBIADgBQAFAAADACIABABIgBACIgBAAIgBAAIgGgBIgDABIgEABIABACIgBAHIAIgBIAEAAIABAAIACACQAAAAgBAAQAAAAAAAAQAAABgBAAQAAAAgBAAIgEAAIgIABIAAADIAAACQAAAEABABIACABIADAAIADAAIACgBIABAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgHABQgFAAgCgCg");
	this.shape_4.setTransform(168.8,-15.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgHAPQgCgCAAgGIAAgDIAAgDIAAgBIAAAAIABgIIAAgCIgBgDQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIABABIAFgBIADgBQAFAAADACIABABIgBACIgBAAIgBAAIgGgBIgCABIgFABIAAACIAAAHIAIgBIAEAAIACAAIABACQAAAAgBAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgFAAIgIABIgBADIAAACQAAAEABABIADABIADAAIADAAIACgBIABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAIgIABQgGAAgBgCg");
	this.shape_5.setTransform(166.3,-15.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgIAPIgBgCIAAgFIABgIIAAgHIAAgGIABgBIAGgBQACAAADACQAEADAAAEQAAAFgEACIAFADQAAAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAACgCADIgEACQgEACgHAAIgBgBgAgFAIIAAAEQAFAAACgCIADgBIABgCQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBAAgBgBIgDgBIgBgBIgBAAIAAAAIgDAAIAAAFgAgEgHIgBAHIAEAAQABAAACgBQABgBAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBgBAAIgDgCIgDAAg");
	this.shape_6.setTransform(163.8,-15.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgBAEIgBgBIABgDIABgDIABgBIABABIABABIgDAGIAAABIgBgBg");
	this.shape_7.setTransform(160.8,-13.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgJANQgCgDAAgFQAAgFACgEQADgFADgEQACgCACAAIAFABQABAAABABQAAAAABAAQAAABAAAAQAAABAAAAIAAABIgBABIgBgBIgGgBIgBABIgDADQgEAGgBAGQAAAEABABQABAAAAABQABAAAAAAQABABABAAQAAAAABAAQADAAACgCQADgDABgEQgFAAgDACIgBAAIgCgBIAAgBIABgBQADgCAKAAIACAAIAAABIgBACQgBAGgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_8.setTransform(158.8,-15.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgMAPIgBgBIAAgCIABgDIAAgEIAAgDIAAgDIAAgEIgBgEIAAgEIABgBIACgBIACACIAIAMIAKALIAAgDIAAgDIgBgMIAAgCIgBgCQAAgBAAAAQABgBAAAAQAAAAABAAQAAAAABAAQADAAAAAMIAAAGIAAAGIAAADQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgCgBQgIgIgJgNIAAAEIgBAEIABAFIAAAFQAAAFgCAAIgCgBg");
	this.shape_9.setTransform(155.8,-15.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgGAPIgBgBIgBgBIABgBIABgBIAEAAIAAgEIAAgDIAAgEIAAgKIgCAAIgCAAIgCAAIAAgCQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAABAAIAFAAIAJABQAAAAABAAQAAAAAAABQAAAAAAAAQABABAAAAIgBABIgCABIgDAAIgCgBIgBAKIAAAEIAAADIAAADIAGAAIACABIAAABIAAACIgCAAIgDAAIgDAAIgEABIgDAAg");
	this.shape_10.setTransform(153.1,-15.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgIAPQgBgCAAgGIAAgDIAAgDIAAgBIAAAAIAAgIIAAgCIAAgDQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAIABABIAFgBIADgBQAEAAADACIABABIAAACIgBAAIgBAAIgGgBIgCABIgFABIAAACIAAAHIAHgBIAFAAIABAAIABACQAAAAAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgFAAIgIABIgBADIAAACQAAAEABABIAEABIACAAIAEAAIABgBIABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAIgIABQgFAAgDgCg");
	this.shape_11.setTransform(150.8,-15.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgIAPIgBgCIAAgFIABgIIAAgHIAAgGIABgBIAGgBQACAAADACQAEADAAAEQAAAFgEACIAFADQAAAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAACgCADIgEACQgEACgHAAIgBgBgAgFAIIAAAEQAFAAACgCIADgBIABgCQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBAAgBgBIgDgBIgBgBIgBAAIgBAAIgCAAIAAAFgAgEgHIgBAHIAEAAQACAAABgBQABgBAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBgBAAIgDgCIgDAAg");
	this.shape_12.setTransform(148.4,-15.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAFAKIgBgFIAAgEIAAgBIAAgCQAAgBAAAAQAAgBAAgBQgBAAAAgBQAAAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAQAAABgBAAIgCAGIAAACIAAABIAAACIAAACIgBACIgBAAIgCAAIgBgCIAAgCIAAgCIAAgFIABgEIAAgCIAAgDIABgBIABgBQAAAAABABQAAAAAAAAQAAAAAAABQABAAAAABIAAADQADgFADAAQADAAABADIABAFIAAACIAAABIAAAEIAAAFIAAABIgCABQAAAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAAAg");
	this.shape_13.setTransform(144.8,-14.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAGAKIgBgCIgEACIgBAAQgFABgCgDQgCgDABgFQAAgDADgEQADgDADAAIAFABQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAAAIAAABIAAADIgBADIABAEIABAEIAAAAIAAABIAAABIgBABIgCgBgAgCgEQgCACgBACIACAGQAAAAAAAAQAAAAABABQAAAAABAAQAAAAABAAIACAAIACgCIgBgHIAAgBIABgDIgCAAIAAgBQgCABgCACg");
	this.shape_14.setTransform(142.7,-14.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgGAIQgDgCAAgEQAAgEADgEQADgEADAAIAFABQADACAAADQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAIgEABIgHAEIADACIADABIADAAIADgCIABgBIABAAIABACQAAAAAAABQgBAAAAABQgBAAAAAAQgBABgBAAIgFACQgEAAgDgDgAgDgEIgCAEIAFgCIAFgDQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBAAAAAAQAAAAgBABQAAAAgBABg");
	this.shape_15.setTransform(140.6,-14.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAAALIgBgBIAAgHIgBgGIAAgDIgDACIgDADIgBABIAAACIAAAEIAAABIAAABIAAACIgBAAQgCAAAAgEIAAgEIAAgCIAAgDIAAgEQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAABAAIABABIAAABIAAABIAAABIAAACIAEgEIADgBQACAAABADIADgCIADgBQADAAABADIABAGIACAKIgBABIgBABQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAgBgBIAAgGIgBgEIgBgEIgBgBIgCABIgDACIAAADIAAAFIABAFIgBABIgBABIAAgBg");
	this.shape_16.setTransform(138,-14.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgFAPIAAgBIAFgLIgIgNIAAgBIgBgCIABgBIABAAIABAAIAGANIADgGIAEgHIABgBIABABIABABIgBABIgGAOIgDAJIgBADQAAABAAAAQgBAAAAABQAAAAAAAAQgBAAAAAAIgCgBg");
	this.shape_17.setTransform(134.1,-14.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgBAOIAAgHIAAgHIAAgGIAAgHQAAgBAAAAQABgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABIAAAHIAAAGIAAAKIgBAEQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBg");
	this.shape_18.setTransform(132.5,-15.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgBAOIAAgHIAAgHIAAgGIAAgHQAAgBAAAAQABgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABIAAAHIAAAGIAAAKIgBAEQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBg");
	this.shape_19.setTransform(131.5,-15.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAGAKIgBgCIgDACIgCAAQgEABgDgDQgBgDAAgFQgBgDAEgEQADgDAEAAIADABQABAAABABQAAAAAAAAQABAAAAABQAAAAAAAAIAAABIAAADIgBADIABAEIABAEIAAAAIABABIgBABIgBABIgCgBgAgDgEQgCACAAACIABAGQABAAAAAAQAAAAABABQAAAAABAAQAAAAABAAIACAAIACgCIgBgHIAAgBIABgDIgCAAIAAgBQgCABgDACg");
	this.shape_20.setTransform(129.9,-14.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgGAIQgDgCAAgEQAAgEADgEQADgEADAAIAFABQADACAAADQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAIgEABIgHAEIADACIADABIADAAIADgCIABgBIABAAIABACQAAAAAAABQgBAAAAABQgBAAAAAAQgBABgBAAIgFACQgEAAgDgDgAgDgEIgCAEIAFgCIAFgDQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQAAAAAAAAQAAAAgBAAQAAAAgBABQAAAAgBABg");
	this.shape_21.setTransform(127.8,-14.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgHAJIAAgNIABgCIAAgCQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAQADgDAFAAIACABIABADIAAACQAAABAAAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAAAIAAgCIAAgCIgEACIgDAEIAAAKQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBg");
	this.shape_22.setTransform(125.7,-14.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgGAPIgCgBIAAgBIAAgBIACgBIAEAAIAAgEIAAgDIAAgEIABgKIgDAAIgDAAIgBAAIgBgCQAAAAABgBQAAAAAAAAQAAAAABgBQAAAAAAAAIAGAAIAJABQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAIAAABIgBABIgDAAIgEgBIAAAKIAAAEIAAADIAAADIAGAAIABABIABABIgBACIgBAAIgDAAIgEAAIgCABIgEAAg");
	this.shape_23.setTransform(122.5,-15.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.rap4bstill, new cjs.Rectangle(120.8,-18.8,58.3,6.6), null);


(lib.rap4astill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape.setTransform(129.3,6.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_1.setTransform(120.5,6.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_2.setTransform(111.7,6.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgnA1QgKgLAAgVQAAgVAKgUQAKgVAOgNQALgJAKAAQAGAAAMAEQAOAGAAAHQABADgDACQgCADgEAAIgEgCQgNgHgHAAQgGAAgGAGIgJALQgSAYAAAbQAAAPAFAFQAFAHANAAQANAAAKgJQALgKAEgRQgVABgPAIIgDAAQgEABgCgDQgCgDAAgDQgBgEAFgDQAQgJApAAQADAAACADQADAAAAAEQAAAFgEACQgFAYgPAOQgQAPgUAAQgUAAgJgLg");
	this.shape_3.setTransform(104.4,0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("Ag0A9QgCgCAAgEIABgKIAAgJIAAgPIABgOIgBgPIAAgQIgBgPIgBgOQAAgEADgDQAEgCADAAQAFgBAGAKQATAcAPAUQASAVAWAWIAAgKIAAgKQAAghgDgVIgCgIIgBgIQAAgKAIABQAOAAAAAzIgBAYIAAAaIgBANQgBAHgHABQgFAAgGgGQgfgegpg4IAAASIAAAQIAAAUIAAAUQAAAUgIABQgEgBgDgCg");
	this.shape_4.setTransform(92.5,0.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgiA5QgCgCAAgDQAAgEACgCQADgCADAAIARgCIAAgPIAAgNIAAgNQAAgRABgbIgJAAIgKABQgEAAgDgDQgCgCAAgDQAAgIAIAAIAXgBQAPAAAYADQAGABABAIQgBADgDADQgCABgCAAIgOgBIgMgBIgBAqIAAAOIAAANIAAAOIAYgBQADAAACADQACACAAADQAAAEgCACQgCACgDAAIgNABIgNAAIgOABIgQACQgDAAgDgDg");
	this.shape_5.setTransform(81.7,0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AghA9QgIgIAAgZIAAgLIABgMIgBgFQAAAAAAAAQAAAAAAgBQABAAAAgBQAAgBAAAAIACgiIgBgIIgBgJQABgJAHAAQAEAAACACIASgDIAOgBQATgBAMAFQAFADAAAEQAAAEgCACQgDADgDAAIgDgBQgMgDgNAAIgNABIgQADIAAAIIAAAeIAhgDIASgBQADgBADADQACACAAAEQAAAGgHABIgSACIgjACIgBALIAAAJQAAASACADQACACAKAAIAOAAIAPAAIAEgBIAFgBQAIAAAAAJQAAAGgGABQgIACgYAAQgYgBgGgFg");
	this.shape_6.setTransform(72.6,0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgkA8QgDgDAAgEIAAgWIACgfIABghIABgVQABgEACgBQAKgDAOAAQANAAAMAJQAPALAAAQQAAAUgQAKQAMAFAGAGQAGAGAAAIQAAAJgLAJQgHAGgIADQgQAHgbAAQgEAAgDgDgAgXAfIAAAQQAUgBAMgFQAFgCAFgEQAFgEAAgCQAAgEgKgFQgHgDgHgCIgIgBIgDAAIgDAAIgJgBIAAASgAgUguIAAAOIgCAeIAMABQALgBAHgHQAIgHAAgKQAAgIgIgGQgIgHgIAAIgMABg");
	this.shape_7.setTransform(62.6,0.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AATAmIgCgRIgBgRIAAgGIABgIQAAgRgHAAQgIABgHAJQgIAKgDANIgBAIIgBAIIABAHIAAAHQAAAEgCACQgCACgDAAQgEAAgCgCQgCgCAAgEIgBgHIAAgHIABgWIABgWIgBgHIAAgIQAAgDACgCQADgCADgBQAHAAABALIABAJQAMgRANgBQAMAAAGAMQADAHAAAOIAAAIIAAAHQAAAGACAKIACARQgBADgCACQgCACgDAAQgHABgBgIg");
	this.shape_8.setTransform(48.4,2.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAZAoIgFgGIgNAGQgGACgDAAQgSAAgIgKQgIgKAAgUQAAgRAMgOQANgNASAAQAGAAAJADQALAFgBAGIgBAEIgCAJIAAARQAAAJABAGIAGAOIABAEIAAABQAAADgBACQgDACgDAAQgBAAgEgDgAgNgTQgIAKAAAMQAAANAFAGQAEAHAJAAQAGAAAGgDIAIgGQgDgUAAgKIAAgHIACgJIgFgCIgDAAQgLAAgKAJg");
	this.shape_9.setTransform(39.9,2.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgOARAAQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHAEAIAAQAFgBAHgCQAJgCADgEQADgFADAAQADAAACACQACACAAAEQAAAIgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgFQgGgHgMAAQgJAAgGAIg");
	this.shape_10.setTransform(31.6,2.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgEAuQgCgDAAgDIgCgcIgCgbQAAgIgCgEQgFACgGAGIgJAKIgEAFIgBANIgBANIABAHIABAGQAAADgDACQgCADgDAAQgJAAAAgVIABgNIAAgOIAAgMIgBgMQAAgSAIAAQADAAADADQACACAAADIAAAFIgBAFIAAAIQAEgJAIgGQAIgHAGAAQAMAAAEAMQAEgGAGgDQAGgDAIAAQANAAAEAPIAEAVIAFAsQAAADgCADQgCACgEAAQgGAAgBgHIgDgYIgDgXIgCgLQgDgHgDAAQgDAAgIAFQgHAEgDADIABAPIACAUIACAUQAAADgDADQgCACgDAAQgCAAgDgCg");
	this.shape_11.setTransform(20.9,2.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgiA5QgCgCAAgDQAAgEACgCQACgCAEAAIARgCIABgPIgBgNIAAgNQAAgRACgbIgKAAIgKABQgEAAgDgDQgBgCAAgDQgBgIAIAAIAXgBQAPAAAYADQAGABAAAIQAAADgCADQgCABgEAAIgNgBIgMgBIgCAqIAAAOIABANIgBAOIAZgBQAEAAACADQACACAAADQAAAEgCACQgCACgEAAIgNABIgNAAIgOABIgQACQgEAAgCgDg");
	this.shape_12.setTransform(5.5,0.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgJARQgCgCAAgDQAAgDAFgKIAGgNQACgEADAAQADAAACACQACACAAADQAAACgLAXQgBAFgEAAQgDAAgCgCg");
	this.shape_13.setTransform(-5.5,7.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AgnA1QgKgLAAgVQAAgVAKgUQAKgVAOgNQALgJAKAAQAGAAAMAEQAOAGAAAHQABADgDACQgCADgEAAIgEgCQgNgHgHAAQgGAAgGAGIgJALQgSAYAAAbQAAAPAFAFQAFAHANAAQANAAAKgJQALgKAEgRQgVABgPAIIgDAAQgEABgCgDQgCgDAAgDQgBgEAFgDQAPgJAqAAQADAAACADQADAAAAAEQAAAFgFACQgEAYgPAOQgRAPgTAAQgUAAgJgLg");
	this.shape_14.setTransform(-13.5,0.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("Ag0A9QgCgCAAgEIABgKIAAgJIAAgPIABgOIgBgPIAAgQIgBgPIgBgOQAAgEADgDQAEgCADAAQAFgBAGAKQATAcAPAUQASAVAWAWIAAgKIAAgKQAAghgDgVIgCgIIgBgIQAAgKAIABQAOAAAAAzIgBAYIAAAaIgBANQgBAHgHABQgFAAgGgGQgfgegpg4IAAASIAAAQIAAAUIAAAUQAAAUgIABQgEgBgDgCg");
	this.shape_15.setTransform(-25.4,0.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AgiA5QgCgCAAgDQAAgEACgCQADgCADAAIARgCIAAgPIAAgNIAAgNQAAgRABgbIgKAAIgJABQgEAAgDgDQgCgCAAgDQAAgIAIAAIAXgBQAPAAAYADQAGABABAIQgBADgDADQgCABgCAAIgOgBIgMgBIgBAqIAAAOIAAANIAAAOIAYgBQADAAACADQACACAAADQAAAEgCACQgCACgDAAIgNABIgNAAIgOABIgQACQgDAAgDgDg");
	this.shape_16.setTransform(-36.2,0.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AghA9QgIgIAAgZIAAgLIABgMIgBgFQAAAAAAAAQAAAAAAgBQABAAAAgBQAAgBAAAAIACgiIgBgIIgBgJQABgJAHAAQAEAAACACIASgDIAOgBQATgBAMAFQAFADAAAEQAAAEgDACQgCADgDAAIgDgBQgMgDgNAAIgNABIgQADIAAAIIAAAeIAhgDIASgBQADgBADADQACACAAAEQAAAGgHABIgSACIgjACIgBALIAAAJQAAASACADQACACAKAAIAOAAIAPAAIAEgBIAFgBQAIAAAAAJQAAAGgGABQgIACgYAAQgYgBgGgFg");
	this.shape_17.setTransform(-45.3,0.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AgkA8QgDgDAAgEIAAgWIACgfIABghIABgVQABgEACgBQAKgDAOAAQANAAAMAJQAPALAAAQQAAAUgQAKQAMAFAGAGQAGAGAAAIQAAAJgLAJQgHAGgIADQgQAHgbAAQgEAAgDgDgAgXAfIAAAQQAUgBAMgFQAFgCAFgEQAFgEAAgCQAAgEgKgFQgHgDgHgCIgIgBIgDAAIgDAAIgJgBIAAASgAgUguIAAAOIgCAeIAMABQALgBAHgHQAIgHAAgKQAAgIgIgGQgIgHgIAAIgMABg");
	this.shape_18.setTransform(-55.3,0.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgUA9QgCgCAAgDQAAgIARglIgcg1IgEgGQgCgDAAgDQAAgDACgDQADgCADAAQAEAAABACQAOATAOAiIAMgbQAGgOAGgKQACgEAEAAQADAAADACQACADAAADIgBADIgbA6QgKAVgEAOIgFAPQgCAGgFAAQgEAAgCgCg");
	this.shape_19.setTransform(-69.9,4.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAZAoIgFgGIgOAGQgFACgDAAQgTAAgIgKQgHgKgBgUQABgRANgOQANgNAQAAQAIAAAIADQAKAFAAAGIgBAEIgBAJIgBARQAAAJACAGIAEAOIACAEIABABQgBADgCACQgCACgCAAQgCAAgEgDgAgMgTQgJAKAAAMQAAANAEAGQAFAHAJAAQAHAAAEgDIAIgGQgCgUAAgKIAAgHIACgJIgFgCIgEAAQgKAAgJAJg");
	this.shape_20.setTransform(-77.9,2.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgVAsQgMgFAAgIQAAgDACgCQADgCADAAQACAAAEADQACACAHABIAJABQAFAAAFgBQAHgDAAgFQAAgKgOgEIgIgCQgKgCgEgDQgHgDAAgJQAAgRAQgHIAOgFIAOgFIAHgBQAEAAACACQACACAAAEIABAHIABAGQAAAEgCACQgCACgEAAQgEAAgCgDIgCgIIgSAFQgLAFAAAIIAEABQARADAJAGQANAHAAAPQAAANgLAHQgJAFgNAAQgLAAgJgDg");
	this.shape_21.setTransform(-86.2,2.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AghA5QgDgCAAgDQAAgEADgCQACgCADAAIAQgCIABgPIAAgNIgBgNQAAgRACgbIgKAAIgKABQgDAAgDgDQgCgCAAgDQAAgIAHAAIAZgBQAOAAAXADQAIABAAAIQAAADgEADQgCABgCAAIgOgBIgMgBIgBAqIAAAOIAAANIAAAOIAYgBQADAAACADQACACAAADQAAAEgCACQgCACgDAAIgNABIgNAAIgPABIgPACQgDAAgCgDg");
	this.shape_22.setTransform(-99,0.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgJARQgCgCAAgDQAAgDAFgKIAGgNQACgEADAAQADAAACACQACACAAADQAAACgLAXQgBAFgEAAQgDAAgCgCg");
	this.shape_23.setTransform(-110,7.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgXAhQgKgLgBgSQAAgQAJgOQALgQATAAQAPAAAIAPQAHALgBAQQAAARgJAMQgKAOgPAAQgNAAgKgKgAgNgPQgFAJAAAKQAAAMAGAGQAFAFAHAAQAHAAAGgGQAHgGAAgMQABgdgRAAQgLAAgGALg");
	this.shape_24.setTransform(-117,2.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgQA8QgDgCAAgEQAAgCAIgOIAJgSQgNgSgFgJQgDgJgJgMIgMgVIgCgEQAAgDADgDQACgCADAAQAEAAACAEIAHAJIALARQAGAKADAIQADAGAHALIASgrIAIgRQADgFAFAAQADAAADACQACACAAAEQAAADgFAIIgEAJIgOAhIgOAgIgKARIgEAJQgCAEgFAAQgDAAgCgCg");
	this.shape_25.setTransform(-126.3,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.rap4astill, new cjs.Rectangle(-133.3,-13.1,266.7,26.3), null);


(lib.berap4fatguystill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_34 = function() {
		/* stop();
		*/
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


(lib.GrassScene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AIMl1IAAgWIAAgIIwXAAIAAMnIBKAAICeAAIAAAAIBSAAIBRAAIAHAAIARAAIB1AAIAWAAIAsAAQAPAAAOAAIAqAAQALAAAIAAIAJAAIA/AAIDmAAIA1AAIAAgGIAAgIIAAlsIAAmLg");
	this.shape.setTransform(-0.2,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CC33").s().p("ADpCSIgRgCIgQgBIgMAAIgLgBIA+AAIg+AAIgKAAQgIgCgKACIAAAAIgqAAQAGgDgYgCIgGADIgFACIgsAAIgGgCQgEgCgMADIgBABIAAAAIABAAIh1AAIgNgBIhcABIhSAAQANgDgUgGQgCgDAAgDIgSAAIAAAAIAAgCIAAgCIABgCIACgDIAAgCIgCgCIgBgKIgBgCIgLgUIAAgBIAAgBIAAgBIgBgBIAAgDIgBgTQgGgGgDgIIgNgDIAAgCIAAgCIADgCIABgCIAAgEIAAgTIgKgJIgSgCIAAgDQABgHgBgGIgCgCIAAAAIACgBIAAgBIgRgFQgGgBgEgEIAAgCIgCgEIgPAAIgHAGIAAADIAAAIIgHAAQgCgFAAgFIAAAAIAAgCQAAgEgBgEIgLABIgKABIgBAAIAAAAIgCAAIgBgBQgLgCgGgNIgDAAIgXgCIAAgBIgCgCIgCgBIgCABIAAACIgHAAIAAg4IAAgDIABgTIAFAAIACACIARACIABAAQAHAAAHgBIAGAAQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIABgBIAhAAIACAAIAKgCIACgBIAEAAQAEAAAEgDIAAAAIABAAIAVAAIAEABIALABIAKABQAFACAEAAIALABIAOACQANACAPABIAnAEIAHABQAKACAIAAQADACAFAAIAEAAQAEAEAHAAIAUABIAPABIAYACIAbACIAAAAIAGAAIAAAAIAHAAIABAAIABABIAPACIAAAAIADAAIABAAIABAAIAeAEIAEAAIALABIAAAAIABAAIAKAAIACAAIAHAAIABAAIBQgCIABAAIAAABIAJgBIAIgBIABAAIAegFIAVgCIABABIAEAAIAAAAIABgCIAAAAQAhgDAiAEQAJAJANgDQAJAPAHAPQAOADANAGIAMAHQAhAVAnAAQAyABAnAZQAaAEAZgBIAAABQALACALgEIADAAIAAgBIAGgCIAAgBIABAAQgBANABANIABAAIAAAaIAAADIAAACIgBAAIAABBIABAAIADgKQACAFACAcIAAAIQgCAFgJgDIAAgBQgUAEgWABIjnAAIADABIACABQAHACgHAAIgLAAgAgHCGIAAAAIgBAAgAIDBtIAAgBIAAgBIAAACgAjuBeIAAgBIgBAAIABABgAh0gyIAAACIAAgCgAiBCOIAHAAIgSACIgWACIAhgEgAAiCOIAsAAQgJAEgNAAQgMAAgKgEgAh6COgAiBCOIAJgBIgCABgAmriPIAAAAIAAAAIgFABIgHABIgHAAIATgCgAmliQIAGgBIAAAAIgDAAIgDABg");
	this.shape_1.setTransform(-0.1,26);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009900").s().p("Am+C1ICeAAQgMACgnAAQgoAAhDgCgAkgC1IieAAIhJAAIACgQIAAi5IAHAAQgCAEADAEIAdAEIABAAIAAACIACACIAJAIIAXAAIADAAQAAAFABADIAAADQABAEACAEIATgBIAAgEIAAgCIAAgIIACgCQAJgEgBAIQACADAFADQAJAEAKgCQACAMAAAMIAWADIADACIABACIABAEIAAAOIgCACIgBACIAAAFIAAAGIACACIACACIALAEIABACIAFAGIAAAEIABAPIgBABQAAABAAAAQAAABAAABQAAAAAAAAQABABAAAAIAAABIABABIABACQACACADABIACAEIAFAIIABACIACAEIAAAKQgBAAAAAAQgBAAAAABQAAAAAAABQAAAAAAABIABABIAAABIAAACIgBABIgBAAIAAACIABABIAAAAIADAAIABgBIAAAAIAVAFQAUAGgNADgAn4CmIAAAAIALgBIgHAAIgEABgAkgC1gAk7ClIAAAAIAAAAgAG/glIAAgEQgGgFgEgHIgXgBQgGgEgEgGQgJgEgJADQgFADgBAFIgGACIgBgCIgEgEQgSgHgMANIgSAAIAAgDQABgJgCgIIgDgCIgMgBIgBgBIgBgBQgTADgNgIIAAgCQABgJgCgJIgEgEIAAgCIAAgCIAAgIIAIAIIACABQgGgHgEgHIAAgOIgCgCIgBgCIAAgEIgCgDIgBgBIAAgBIABAAQAOgBAHAHIABABQAPAQgGgaQgBgEACgDQADgBADgDIABgBIAEABIABAAQAIACACAJIACAAQAEACAFgJIABgCQAHgHAIgGIABgCQALgFAFAIIABACQgEAPALgCIAAgBIAAgCQAHgGgBgCIALABIABATIABAAIAAARIAAACIAAACQACAHgEABQgCAKAEADIADABIAAgCIANACIABACQAMASgIgUIgCAAIAAgCIAAgDIAAgCIAAgRIACAAQADgOgFgIIgCAAIAAgCIAAgKIATAAQAEAOAFgQIABgCQAFgBABgHIABAAQAMAAgBAMIABAAQAHARAIgOIACAAQAHgJAPgBIACAAIACAAIABACIAMAKIANAAIAAADIAAACIAAAkIAAACIAAAwIgFgFIgOABIgRAQIgBACQAAAJgDAIQgHAAAAAGIAAABIgaABIAAgEg");
	this.shape_2.setTransform(-0.5,22.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#336600").s().p("ACbCAIg0gFQgEgGgHgDQgngOgqgEQgMgBgMgEQgqgOgogTIgBgEIAAgCIgCgCIgMgPIACAAIACgEQADgHgBgHIAAgBIACgCQARgDALAJQANARAagEIABABIABABIANACIAAADQgBAKACAJIAZAAQADgEAFgCIASACIABACIACACIAJABIAGgEQACgFAEgDIAEgBIAQAMIAVACQAEADADAFIABACQgBAFACAFIAjgBIACgCQALgMACgRIANgMIAJAAIAAABIAEAFIAAACQgBADACADIACAAIAAAZIAAACIAAAHIAAADIgCAAQAAAPABAQIABAAIAAAFIAAACIgCAAIAAACIAAAAIgHgEQgKABgKADgAiHAXQgZgCgYACQAEgEACgEIAAgCIAAgEIABgCIACgCIAAgCIAAgCIABgBIADgFQAGADAHACIgEABQAGACAGgDQAIABAIgBIAAgCIAAgFIABAAIADAAQABAGALgBIACgBQAIgDAAgKIAKAAIAAgCIACgEIAAgCIAAgNIAOgBIAEAJQADAMABAMQgFAFABAJQgLgEgPACIgCABIAAABQgDACgCAEIAAACQABAGgCAEIgCACIgFAAQgJAAgHgGgAiAgKIAAgCIAFgDIAMgBQgDAFgEAEIAAACIgDAAIgBAAQgFAAgBgFgAg1gsQgHgHgOAAQALgEANAAIABgCIADgEIAAgCIAAgKIACgCIAAgCIABgCIAAgEIAdgDQABgEgBgEQgBgIAEgHQAIgDAHgCIABgCIAAgEIAAAAIADACIACAAQAIgBAGgEIABgCIACAAQANgFAFAIIAGgBIAAABIAAACIAAAVIAAADIAAAaIAAADIAAABIAAABIgCAAIgLAAQgBgCgIAEIABgCQABgGgEgBIgBgCQgHgIgLAFIAAACIgCABQgJAEgHAHIAAADIgDAAIgCACIAAADIgCgBIgCgCQgEgFgHgCIgCAAQgHABgFAEIAAACIgBABQgDAEgDACIAAAFIAAADIgCgBgACrg3IgMgMIgCAAQgOgGgNAKIAAADIgBAAQgIAKgDgPIAAgCQgDgJgLgBIAAACIgCABIgIAEIAAADIgBAAQgCAEgEADIgTAAIAAgJIAAgPQAEAAgCgFIAAgCIAAgDIAAgGIAAgIQADgDAAgEIAAAAIAHAAQAAAFADAAQADAAAFgEIABgBQADgDAGAAIADAAQALgDACAIIABAAQAJAhAegZIACgBQAFAAACADIAAACQAIAJABgBIAKAAIAAAGIAAADIAAAdIAAAAg");
	this.shape_3.setTransform(33,11.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#996633").s().p("AgQCdQAEgNgCgTIAAgCIAAgCIAAgHIAAgTIAAgDIAAgFIAAgCIAAgKIAAgcIAAgDIAAgDIAAgBIAAgPIAAgCIAAgDQAFgCgCgHIAAgDQADgDAAgFIAAAAIAAgCIAAgKIAAgMIAAAAIAAgBQAAgMgCgKIgEgJIAAACIAAADIgCAAIgBAAQgIgHgKgCIAAgBIAAgBIACgBIgDgFQgIgJgMgFIgBgCQgKgHgGgLIgBgBIgIgKIABgBQAPAHAMAOIAVAVIAAAAIACACIALAIIADAHIADgBIABgBIAAAAIAAgBIAGACIADADQgCACgBADIABABIACAAIACgBIACgCIACgFIADgCQACgBABgDIABgCIAIgKIAFgFIAAgDIAAgBIABgBQAMgGALgMIACgBIAHgEIARgOIACAAIABgCIACgEIAAgBIACgDIAAgCIACAAIAAAFIAAACIABAEIgEABIgGAGIgFACIgDAEIgDABIgEAFQgIAMgLALIAAABIgBADIgKABIAAABIgBADIgEADIgOANIAAABIgGAGQgCAFABAEQgBAHABAGIgCABIAAAAIABATIAAAAIAAAQIAAACIAAAEIAAADIgBAAIAAARIAAACIAAABIAAAHIAAACIAAAOIAAABIAAACIgDAAIAAAJIAAACIAAAMIAAADIgCAAIAAATIAAADQAAAJABAJIABABQgBAPADALgAAEgRIgCAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIABAAIABAAIgBgBIAAgCIAAgBIABABIACAAIAAAAIABgBIAAABIACABIACAAIABABIAAgBIABgBIACAAIAEgBIAAAAIABAAIAIgDIABgCIAVgGIABgBQAGABAEgDIACAAQAHgCAJABIAEAAIAAADIgCgCIgWAGIgKAFIgbAHIgBABIgGABIgBAAIgBABIAAAAIgDAAIgEgBIAAABIgBABIgBAAgAgRhCQgIgNgBgQIABgEIAAgDIAAgDIAAgOIAAgBIAAgCIADACIADAAIABAAIAAgBIgFgHIAFgPIAAgCIAHgNIAJAEQgEALgFALIAAACIAAACIAAACQACAGgFAAIAAACIgCAAIAAAQIAAADIgCAAIAAAHIAAACIAEAXIAAAAIAAADIgDgCg");
	this.shape_4.setTransform(40,-4.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#66FF00").s().p("AAvB0IgDgCIgBgCQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBIgCgBIgGgBIgDgEIgBgBIAAgBIgBgIIATgDQAIgEALgBQAIgHALgBIABAAIALgFIAAgBIAAgDQABgBAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQgIgHgXAFIAAACIgBABQgCADgEgBIgCAAQgIADgJACIAAACIgDAAIgPAHIgCAAIAAAAIgBAAIgCAAIAAgEIAAgKIABgBIABgCIAAgBIAAgBIACgBIABgBIAAgBIABgCIAAgCQAJgJAKgHIAAgBIABgBQAGgBAFgDQAAgDADgCQAHgIAGgJIAEgCIAAgBIACgEQAKgIALgGQAEADAIgEIADAAIABgBQALgHAAgBQgBgCgOAGIAAACIgDAAIgFABIAAgCIgBgBIgDgBIAAABIAAgEIACgCIABgBIABgBQAEgPgNALIgCAAIgKAFIAAAAIgCAAQgJAAABgKIADgBIAAgBIAAgDQAGgHAIgGIAAgBIAAgDQgCgIgFAIIAAADIgBAAQgDAHgGAEIgCABIAAACIAAADQgDAPANgBIACAAIABAAIAAAAIADAAIABACIAAAAIgCABQgMAKgPAIIAAACIgBABIgSAOIAAAAIAAgBIgFAAIAAAAQAAAAAAABQgBAAAAAAQAAAAAAABQAAAAAAABIABACIgBABIgBACIgFAEIAAAAIABAAIABABIgLAQIgCABIgDACIAAABIAAACIgBABIgCABIgDgDQABgEgEgCIgDgCIAAgDQABACgBgNIAAgCIAAgCIAAgPIAAgCIAAgDQAEAAgCgHIAAgBIAAgDIAAgCQAEAAgBgFIAAgCIAAgBQAHgTAEgUIABgDIACgMIgCAAIgDAPIgDAJIgJgFIABgDQAAgFgCgFQgCgFgFAUIAAADIAAACIgBACIgGATQgEgCgCgDQgGgBgCgGIgCgBIAAAAIgBgBIgFgKIgCgBIgBABQAAAFACAEQACAEAFADQAHAIAIAFIAAADIAAACIAAADIgCAAQgCARAEADIAAASIABABIAAABIgCACIgMgMQgSgTgUgMIgBgBQgEgCgCgDIgDgBIAAACQACAFAGAEIgBABIgKgJIgBgCQgEgHgKgBIAHAPIAAACQAKAhAiALIACABIABABIABABQAGAEAGADIADAAIAOAMIADAAQAKAKgDAaIgBADIAAAJIgDgBIAAAAIgCgCIgFgBIAAAAIgCgCIgBAAIgBABIAAABIgBADIAAABQgDAFgGABIgDAAIgIgDIgBgBIgBgBIAAgBQANgPgQAJIAAAAIgCABIgCABIAAABIgBABIAAACIgCABIgCACIgIAAIgBgBIAAgDQAAgGgFgDIAAgBIgBgDIgBgPIAAgCIgCABIgBABIAAACQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAABIgCABIgNABIgIgGIAAgBIAAgGQAEgKgCgMIAAgCIgPgBIAAgGIAAgSIAAgCIACgEQABgEAAgFIAAgCIgCgBIgBgBQgLAAgKgDIAAAAIAAgDIABgLIABgBIAEgBIABgBIAAgKIAAgZIAAgHIABgBIAIAAQAHAFAIgBIACAMIgDABIgCAAIAAABIAGgCIAEgDIgHgJIAAAAQABgDAAgEQgBgLADgKIAAgCIAHgGIABgBQAJABAJADIABAAIABgEIgBgGIAAgBIACgBIAAgCIAAgCIADgEIABgBIAFAAIACABIABABIAHAAIABAAIAAgDIABgGIAAgBIAeAAIAHAFIAAAAIgBADIgBABIAEABIAAAFIAAAEIADAAIAAgBQABgHAAgHIAAgBIABgBIAOAAIAAABIADAJIAAABIACABIABABIAFAAIADgCIACgBIABgBIAAgBQAFgEAGAAIABAAIACABIABABIACAEIABABIABAKIAAACIABABIABABIAGAAIABAAIAFgEIABgBQAGgDAIABIAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIAAACIABABIABABIAAAFIABABIAgABIAAABIAAARIAAALQACADADABIAAARQAAAHADAGIAAABIAEAEIgBACIgBACQgIACgDAGIgBABQAAAIAGAHIABABIABABIAAABIABABIABABIAAABIAAAJIAAABQgEAQACASQACAMgMACIAAAQQABADgBADQgOADgNgBIAAACIAAACIgCABIgBABIgHAAIgDgCIgCgCIgKABIAAABIAAABIAAABIgBABIgBACIAAABIAAABIgCABIgBABIgIAAgAgfgOIADABIgJgIIgIgJIgGgHQACATASAEgAAegrIACABQALACAGgEIACAAQAGgBADgDQADgDABgFIABgGQgEAGgMAHIAAACIgCAAIgDAAIgCAAQgNAEABgLIABgBQANgSgQAOIAAADIAAACIgDAAQAAAIAFADgAhZgsIAPgDIgHAAIgIADg");
	this.shape_5.setTransform(38.7,-15.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AlGGMIgBAAIgBgBIABgBIAAgBIABgBIABgCIgBgBIAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAIAAgKIgBgEIgBgCIgFgIIgCgEQgDAAgCgDIgBgCIAAgBIgBAAQgBgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAIABgCIgBgOIAAgFIgFgGIgBgCIgLgEIgCgCIgCgCIAAgGIAAgFIABgCIABgBIAAgPIAAgEIgCgCIgCgCIgWgDQAAgMgCgLQgKACgKgFQgEgDgDgDQACgIgJAEIgCACIAAAIIAAACIgBAFIgSAAQgCgEgBgEIAAgCQgCgEABgEIgDgBIgXAAIgJgIIgCgCIAAgDIgCAAIgdgEQgCgDABgFIABgCIABgBIADABIACACIAAABIAXACIADAAQAGAMALADIABAAIACAAIAAAAIABAAIAKAAIAKgBQACADAAAFIAAACIAAAAQAAAFACAEIAHAAIAAgIIAAgCIAGgGIAQgBIABAFIAAACQAFADAGACIAQAFIAAABIgBABIAAAAIABACQABAGAAAHIAAACIASADIAJAKIAAATIAAADIgBACIgCADIAAACIAAACIANACQADAJAGAGIABATIgBADIABAAIABACIAAABIAAABIALAUIABACIABAJIABADIAAACIgBADIgBABIAAADIAAACIAAAAIgBABIAAAAIgBABIgDAAgAIAF2IABABIAAABIgBgCgAIBFzIgBhAIACAAIAAgCIAAgDIAAgaIgBAAQgBgOAAgNIAAgCIACAAIAAgDIAAgEIgBAAQgBgQAAgQIACAAIAAgCIAAgHIAAgCIAAgZIgCgBQgCgCABgEIAAgCIgEgEIAAgBIgJAAIgNAMQgCARgLAMIgCACIgjAAQgCgEABgGIgBgCQgDgEgEgDIgVgDIgQgLIgEABQgEADgCAFIgGADIgJgBIgCgBIgBgCIgSgDQgFADgDADIgaAAQgCgIABgKIAAgDIgNgDIgBgBIgBgBQgaAFgNgRQgLgJgRADIgCACIAAAAQABAIgDAHIgCADIgCABIAMAPIACACIAAACIABAEQAoATAqAOQAMAEANABQAqAEAnAOQAHADAEAFIA0AGIABAAQAKgDAKgBIAHAEIgBABIgFACIAAAAIgDABQgMADgKgBIAAgBQgZABgagEQgngZgygBQgnAAghgVIgMgHQgNgGgOgDQgIgQgJgOQgMADgJgJQgigEghADIAAAAIgBABIgBAAIgDAAIgBgBIgWADIgdAEIgBABIgIAAIgJABIAAAAIgBAAIhQACIgBAAIgHAAIgCAAIgKAAIgBAAIAAgBIgLAAIgEAAIgegEIgBAAIgBAAIgEgBIgOgCIgBAAIgCgBIgGAAIgGAAIgbgBIgYgCIgPgBIgUgBQgHAAgEgEIgEAAQgFAAgDgCQgJAAgJgCIgHgCIgngDQgPgBgOgCIgNgCIgLgBQgFAAgEgCIgKgCIgMAAIgDgBIgVAAIgBAAIgBAAQgDADgEgBIgFABIgBAAIgKACIgCAAIghABIgBABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAABgBAAIgFAAQgHABgIAAIAAgBIgRgBIgCgCIATAAIACgBQAJAAAJgCIADAAIAMgBIAIAAIAHAAIAHAAIAGgBIAGgBIAAAAIAGgBIADgBIACgBIAAAAIAAAAIABgBIADgBIAGAAIABAAIAOABIACAAIADAAIAXAEQAEACAEAAQANgBANADIAXAEIAxAEIAFAAQAHACAIAAIABAAQAEADAGAAQADACAEABIAYABIAHAAIAHABIAXABIAJAAIAOABIAFABIAOABQAAAAABAAQAAAAABABQAAAAABAAQABAAAAAAIANACIAFAAIABABQAQAAAPADIACAAIAJABIANAAIAHAAIBSgCIABAAIAAgBIBAgDIAFgCIAAgFIAAgCQAKgEALgCIABgBIABgCIABgFIAAgCIACgCIABgEIAAgCIAGgIIABgCQALACAMADIAAAAIgCgBQgDgDAAgGIAIgFIACAAIAGADIAAgBIABgCIATAAIADgFIACAAIAAgCQALgTgGAVIAAADIgDAAIAAACIgBAAIAGAAIABAAIADAAQAEgGgBgJIgBgFIAUgFIAAgKIABgBIAOgCQADADACgEIAAAAIAKgCQgBgJACgHQACgHAEgFIAagCQgDgRANgHIAJgDIAAgBIACgCIAAgBIADABIACADIAAAEIgBACQgIACgIADQgEAGABAJQABADgBAFIgdACIAAAFIgBACIAAABIgCACIAAALIAAACIgDAEIgBABQgNABgLAEQAOAAAHAHIACABIAAgDIAAgFQADgCADgFIABAAIAAgCQAFgEAHgBIACAAQAHACAEAFIACACIACAAIAAgCIACgCIADAAIAAgDQAHgHAKgFIACAAIAAgCQALgFAHAHIABACQAEABgBAHIgBACQAIgEABACQAAABgGAGIAAACIAAABQgLACAEgOIgBgCQgFgJgLAFIgBACQgJAGgHAHIAAACQgFAJgFgCIgBAAQgCgJgIgCIgBAAIgEAAIgCAAQgCADgEABQgCADABAEQAHAbgPgRIgCAAQgGgIgOABIgBAAIAAABIABACIABACIABAEIAAACIACACIABAOQAEAIAGAGIgCgBIgIgIIAAAIIAAACIAAACIAEAEQACAJgBAKIAAABQANAIATgDIABABIABABIAMABIACACQADAIgBAJIAAADIASAAQALgMATAGIADAEIABACIAHgCQABgFAFgDQAJgDAJAEQAEAHAGADIAXABQADAHAGAGIABADIAAAEIAagBIAAgBQAAgGAGAAQAEgIAAgIIABgCIARgRIANgBIAGAGIAAgxIAAgCIAAgkIAAgCIAAgCIAAgBIAAgdIAAgCIAAgGIAAgwIADAAIAAgDIAAgeIAAgDIAAgdIAAgCIAAgUIAAgCIAAgHIAAgsQgDAGgGACIgBAAIAAABIAAAAIgCADIABACQADAIAGAGIAAABIAAAPIAAABIgBABIgCABIABAVQABAJgDALIgBABQgEACgEABQABADAAADQABAJgCAIQgMAHgPgFIAAABIgDAFIAAAAIgNABIgBgBIgDgDIgFAAIAAACIAAABIgDAEIgBACIgEACIAAAAIgMAAIgBgCIgGgFIAAAAIgGgBIgBgBQgCgEgEgBQgBgCAAgEIAAgEQgGACgBgFIABgCIABAAIABgBIAEAAIAAAAIADAAIABAAIABgBIABAAIAFgBIABgBIAcgHIAJgFIAWgGIADACIAAABIgMAFIgBAAQgLABgIAHQgKABgJAEIgSADIAAAIIAAABIABABIADAEIAGABIACABQAAABABAAQAAABAAAAQABAAAAAAQABABAAAAIABABIADACIAIAAIABgBIACAAIAAgCIAAgBIABgCIABgBIAAgBIAAgBIABgBIAJAAIACABIADACIAHAAIABgBIACgBIAAgBIAAgDQAOABANgDQABgDAAgDIgBgQQANgCgCgMQgDgSAFgPIAAgBIAAgJIgBgCIgBgBIAAgBIAAgBIgCgBIgBgBQgGgHABgIIABgCQADgGAHgCIAAAAIABgBIABgDIgDgEIAAgBQgEgFAAgHIABgSQgEgBgBgDIAAgLIAAgRIAAgBIghgBIgBgBIAAgFIgBgBIgBgBIAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIgBAAQgHgBgHADIgBABIgFAEIgBAAIgFAAIgBgBIgCgBIAAgBIgBgKIgBgBIgCgFIgBgBIgCgBIgBAAQgGAAgEAEIgBACIgBABIgCABIgCABIgGAAIgBAAIgCgCIAAgBIgDgJIAAAAIgOgBIgCABIAAACQABAGgBAHIgBABIgCAAIgBgEIAAgFIgEgBIABgBIABgCIAAgBIgHgFIgeAAIAAABIgBAGIAAADIgBAAIgHAAIgBgBIgBgBIgGAAIgBABIgCAEIAAACIgBACIgBABIAAABIAAAGIgBAEIAAAAQgJgDgKgBIgBABIgGAHIgBABQgCAKAAALQABAEgCADIAAAAQgIABgGgEIgJAAIgBABIAAAGIAAAZIAAAKIgBABIgEACIAAABIgBALIAAADIAAABQAKACAKAAIABABIACABIAAACQABAFgCAEIgCAFIAAABIAAASIAAAHIAPABIABABQACAMgEAKIgBAGIABABIAHAGIAOAAIABgCQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBIAAgCIABgBIACAAIABABIABAPIAAADIABABQAEAEAAAFIAAADIABABIAJABIACgDIABgBIAAgCIACgBIAAgBIABgBIACAAIABAAQAPgKgNAPIABABIAAABIABABIAIAEIADAAQAGgCADgFIAAgBIABgCIAAgCIABAAIACAAIABABIABABIAEABIACABIABAAIADABIAAgJIAAgCQAEgagLgKIgCgBIgPgLIgCgBQgHgCgGgFIgBAAIgBgCIgCgBQghgKgLgjIAAgCIgHgOQAKAAAEAHIABACIAKAKIAIAKIABABQAHALAJAHIABACQANAFAHAJIAEAFIgCABIgBABIAAABQALACAHAHIABAAIADAAIAAgDIAAgCIADAJQADAKAAAMIAAABIAAAAIgBAMIAAAKIAAACIAAABQAAAFgDADIAAADQACAHgEACIAAADIAAACIAAAPIAAABIAAACIAAADIAAAcIAAAKIAAACIAAAFIAAADIAAASIAAAIIAAACIAAACQACATgEANIgBACIgCgBQgEgDACgKQAEgBgCgGIAAgDIAAgCIAAgRIgBAAIgBgTIACAAIAAgBIAAgBIAAgDIAAgaIAAgDIAAgVIAAgBIAAgBIAAgJIACgDIAAgCIAAAAIAAgCIAAgUIgCAAIgBgBIgBgCIgFAAIgBACQgKALgPgHIgBgBIgBgBIgBgBIgCACIgBABIgBAAIgFAAIgDACQAGAHABAMIAAADQADACAHAAIACAAIAFAAIACAAIADgBIABAAQAIgCACAEIACAHQgFgIgNAFIgCAAIgBACQgGADgIABIgCgBIgDgBIAAgCIAAgFIgCAAIgTAAIgDAAIgMAAIAAABQgQAGAAgLQAGABACgEIABAAIAAgCIADAAIAAgCQgJACABgIIAFAAIADAAQAHgEAMAAIACAAIAAgCQAHAAADgDIACAAIAAgCIgCAAIgBgBIgCgDIAAgBIgBgEIAAgCIgBgBIgCgCIgBgBIgBgGIAAgEIgBAAQgQAEgLgMIAAgBIACgVIABgGIgOgBQgDgDAAgFIACgXIACgIIAAgCIgBgCIgBgBIAAAAQgMACgJgHIAAgBQgBgIACgHIAAgEIABgBIACgCIACgBIAAgDIAAgbIAAgIIAAgBIADgDIABgBIALAAIABABIABACIADAAIAFAAIAAgBQgBgJACgKIABgGIABgBQAKgPAQAJIABgBIAAgEIAAgDIABgBIAAgBQABgEACgEIABgCIABAAIALAAIABABIABABIACAAIAAgBIAAgEIAAgDIABgBIADgBIAAgBIAgABIACABIAEABIABABIABABIAAAAIABgBIAAgBIAFgBIARAAIABABQABAGADAGIAAAAIACABIABgBQAEgCACgEIADgBQAGgDAFAAIABACIAAABIADABIACADQADAHAAAJQAGAAACgGQAKgFALAFIABABIAAABQACAFAAAFIAfABIABACIABABQABAFAAAGIAAAQIAAABIAAAAQADABABACQABAIgBAJQgBAKAHAFIAAglIACAAIAAgCIAAhjIAAgDIAAgkIAAgCIAAgOIABAAQAGgBgCAFIAAADIAAArIAAACIAAADQACA5gEAzIAABNIAAACIAAAuIAAACIAABDIAAADIAAACQABASgDAPIAAmLIAAGLIgBAEIAABLIAAADIAABKIAAACIAAAWIAAACIAAACQACASgEALIAAAbIAAACIAAAdIAAADIAAAeIAAADIAAADQABALgBAKIgDAJgADBCQQAJAIAMgCIACgCQACgEgBgGIAAgCQACgEADgDIAAAAIACgCQAPgBALAEQgBgJAFgGQgBgMgDgMIgDgKIgPACIAAANIAAACIgCADIAAADIgKAAQAAAKgIADIgCAAQgLACgBgGIgDAAIgBAAIAAAFIAAACQgIACgIgBQgGACgGgBIAEgCQgHgCgGgDIgDAEIgBADIAAACIAAABIgCACIgBACIAAAFIAAACQgCAEgEADIAWAAIAbABgAEBCFIAAACIABgBIAAgDIAAgCIgBAAIAAAEgADNBpIgFACIAAADQABAFAGAAIADAAIAAgCQAEgEADgFIgMABgAFAgaIAAABQgMAHgMAEIAAADIAAACIACAAQAFgDAKABIACAAIAPAAIACAAIACAAIABgDQACgOgKAAIgCAAIgFACgAoMCVIAAhZIAAgDIAAgWQAEAJgBANIAAADIAAACQABAjgCAgIgBATIgBADIAAgCgAGNB3IgBgCQgDgLABgPIgBgBQgBgJAAgKIAAgCIAAgTIACAAIAAgDIAAgMIAAgCIAAgJIADAAIAAgCIAAgBIAAgOIAAgCIAAgGIAAgBIAAgCIAAgRIACAAIAAgDIAAgEIAAgCIAAgRIgBAAIgBgTIAAAAIADgBQgBgGABgHQAAgEACgFIAFgGIABgBIANgNIAEgDIABgDIABgBIAJgBIABgDIABgBQAKgLAJgMIADgFIADgBIADgEIAFgCIAGgGIAEgBIAAgEIAAgCIAAgFIgDAAIAAACIgBADIgBABIgBAEIgBACIgCAAIgSAOIgHAEIgCABQgLAMgLAGIgBABIAAABIgBADIgFAFIgIAKIgBACQgBADgCABIgCACIgEAFIgCACIgCABIgCAAIgBgBQABgDADgCIABgBIABgBIAAgCIAAAAIADgCIACgCIALgPIABgCIgCAAIgBABIABgBIAFgEIAAgCIABAAIgBgDQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABgBIAAAAIAEAAIAAABIAAABIASgPIABgBIAAgCQAPgJAMgKIACgBIAAAAIAAgBIgBgBIgCAAIgBAAIgBAAIgCAAQgNABADgPIAAgDIAAgCIACgBQAGgEADgGIABgBIAAgDQAGgIABAIIABADIgBACQgIAFgGAHIAAADIAAACIgCAAQgCAKAJAAIACAAIAAAAIAKgFIACAAQAOgKgFAPIgBAAIgBABIgCABIAAABIAAAFIABgBIACABIABABIAAABIAGAAIACAAIAAgDQAOgFABABQABABgLAHIgCABIgDAAQgIAEgDgDQgMAGgKAJIgCAEIAAACIgEABQgFAJgIAIQgCACgBADQgEADgHABIAAABIgBACQgKAGgIAKIgBABIAAACIgBABIgBABIgCABIAAACIAAABIgBABIAAABIAAAKIAAAFIgCgBIAAABIABACIgBAAIAAABQgBABAAAAQAAABAAAAQAAABAAAAQAAABABAAIAAACIAAAFIAAACQAEAJgCAPIAAACIAAADQACAMgEAFIAAACIAAAGIAAABIAAAAQAAAEgDACIAAAJIAAAGIAAACIAAACQACAGgEgBIAAAQIAAAJIAAAJIAAACIACAAQAEAJgDANIgBAAIAAARIAAADIAAACIAAACIACAAQAEALgBAAQgCAAgFgJgAG9A8IgBAAQAAgNgLAAIgBAAQgBAHgFABIgBACQgGAQgDgNQAEgDACgEIABAAIAAgDIAIgFIACAAIAAgCQALAAADAKIAAACQADAPAIgKIABAAIAAgDQANgKAOAGIgDAAQgOABgHAIIgCAAQgEAHgDAAQgEAAgEgJgAHpA2IgBgBIANAMIAAAAIgMgLgAHvATIAAgCQgCgDgFAAIgCABQgeAZgJghIgBAAQgCgHgLACIgDAAQgGgBgDAEIgBABQgFAEgDAAQgDAAAAgFIAJgDIADAAIAAgCQAIAAAGgBIADgBQAJgBACAFIABADQAHAZAdgSIACgBIAAgCQAHAAACADIABACIABABQAGALgBABIAAAAQgCAAgHgIgAEEAOQgEgOACgSIAAgDQAIgRAKAKIgEABQgFABgCAFQgEAQAAATgAGahBIAAAAIABAAIABAAIgDgBIAOgHIADgBIAAgCQAJgCAIgDIACAAQAFACABgEIABAAIAAgDQAXgFAIAIQABAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAIgFAAQgJgBgHACIgCAAQgEADgGgBIgBABIgVAGIAAACIgJADIAAAAIAAAAIgFABIgCAAIAAABIgBABIgBgBgAF6hoIgLgIIgBgCIgBAAIgVgVQgMgOgPgHQgFgFgDgFIAAgCIAEABQACADADACIABABQAVANARAUIANALIACACIgBgBIAAgBIAAgBIAAgBIgBgBIAAgSQgEgEACgSIACAAIAAAAIAAgCIAAgDIAAgDQgIgFgHgHQgFgEgCgEQgCgEABgFIAAgBIACABIAFAKIABABIAAAAIADABQACAGAGABQABAEAEACIAGgTIABgDIAAgCIAAgCQAGgVACAFQACAGAAAEIgBAEIgHANIAAACIgFAPIAFAHIAAABIgBAAIgCAAIgEgCIAAACIAAABIAAAOIAAADIAAADIAAAEQAAAQAIANIAEACIADACQAEADgBADIgGgCIAAABIAAAAIAAABIgDABIgEgHgAGBhtIAAAAIgFgXIAAgCIAAgHIACAAIAAgDIAAgQIADAAIAAgCQAEAAgCgGIAAgCIAAgCIAAgCQAGgLAEgLIACgJIAEgPIABAAIgCAMIAAADQgFAVgGATIgBAAIAAADQABAEgEAAIAAADIAAACIAAACQACAHgEAAIAAADIAAADIAAAOIAAACIAAADIAAALIAAgBgAFiilQgRgFgDgTIAGAIIAIAIIAJAIgAEfi/IABAAIAEgBIAAAAIgGABIABAAgAGijCIgCgBQgFgDAAgIIADAAIAAgCIAAgCQAQgOgMARIgCABQgBALANgDIACAAIADAAIACAAIAAgDQAMgHAEgGIgBAGQgBAFgDADQgDADgFABIgCAAQgEADgGAAIgIgBgAEwjHIAIABIgQACIAIgDgAhxmAIAKAAIACAAQAMgBgYADgAk9mKIAAgCIAfAAIACAAQgHADgIAAIgEAAIgOgBg");
	this.shape_6.setTransform(0.1,-0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C6FFFF").s().p("AHUGUQAXgCATgDIAAABQAJACACgEIAAAGgACTGUQALgCAIACIgTAAgACTGUIAAAAgABMGUIAGgDIAFgCQAYABgGAEIgdAAgAAKGUIgBgBIABAAIABAAQALgEAFACIAFADgAh8GUIADgBIgKABIhRgBIBdgBIANACgAoNmTIQWAAIAAAJIAAAVIAAgVIAFABIgFAUIgBAEIAAAOIAAACIAAAkIAAADIAABjIAAACIgDAAIAAAlQgHgFACgKQABgJgBgIQgBgCgDgBIgBAAIAAgBIAAgQQABgGgBgFIgBgBIgBgCIgfgBQAAgFgCgFIAAgBIgCgBQgLgFgJAFQgDAGgFAAQAAgJgEgHIgCgDIgCgBIAAgBIgBgCQgGAAgFADIgDABQgDAEgDACIgBABIgDgBIAAAAQgDgGgBgGIAAgBIgRAAIgFABIgBABIAAABIAAAAIgBgBIgBgBIgEgBIgCgBIghgBIAAABIgCABIgBABIAAADIAAAEIAAABIgDAAIgBgBIgBgBIgKAAIgBAAIgBACQgDAEAAAEIAAABIgCABIAAADIAAAEIAAABQgQgJgKAPIgCABIAAAGQgCAKAAAJIAAABIgEAAIgDAAIgBgCIgBgBIgLAAIgCABIgCADIgBABIAAAIIAAAbIAAADIgBABIgCACIgCABIAAAEQgCAHABAIIAAABQAJAHAMgCIABAAIABABIAAACIAAACIgBAIIgCAXQgBAFADADIAOABIAAAGIgCAVIAAABQAKAMARgEIAAAAIAAAEIACAGIAAABIACACIABABIABACIAAAEIABABIACADIABABIACAAIAAACIgCAAQgEADgGAAIAAACIgDAAQgMAAgHAEIgCAAIgFAAQgBAIAIgCIAAACIgCAAIAAACIgCAAQgCAEgGgBQABALAQgGIAAgBIAMAAIACAAIAUAAIACAAIAAAFIAAACIgBAAIgBgDIgDgBIgBABIgBACIgBABIgIAEQgOAGADARIgaACQgEAFgBAHQgCAHAAAJIgJACIAAAAQgCAEgDgDIgOACIgBABIgBAKIgTAFIAAAFQABAJgDAGIgDAAIgBAAIgGAAIAAAAIABgCIACAAIABgDQAFgVgKATIAAACIgCAAIgDAFIgUAAIAAACIAAABIgHgDIgCAAIgHAFQgBAGAEADIACABIAAAAQgMgDgMgCIgBACIgGAIIAAACIAAAEIgCACIAAACIgBAFIgCACIAAABQgLACgKAEIgBACIAAAFIgFACIg/ADQgzACg0ABIgKgBIgCAAQgPgDgPAAIgBgBIgGAAIgMgCQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBAAIgNgBIgGgBIgNgBIgKAAIgWgBIgIgBIgGAAIgYgBQgEgBgDgCQgGAAgFgDIAAAAQgIAAgIgCIgEAAIgxgEIgXgEQgNgDgNABQgFAAgDgCIgYgEIgDAAIgCAAIgNgBIgBAAIgHAAIgCABIgBABIAAAAIgFABIAAABIgGABIAAgBIgTADIgIAAIgHAAIgNABIgCAAQgJACgKAAIgCABIgTAAIgEAAQABgggBgjIAAgCIAAgDQACgNgEgJIAAAWIAAADIAABZIAAACIAAA4IAAC6IgCAQgADXAvIAAAAIAAgBIAAABgAECgaIAAADQgCATAFANIABAAQAAgTADgQQACgFAGgBIADgBQgDgEgEAAQgGAAgFALgAoJiJQgBAKABAIQABAIACAGIAAgCQABgTgEgNIAAACgAC4iNQABAGADABIACgBQgCgCgBgEIgDAAgABNjFIABABIAEABQgEgDgBgDIgBAAIABAEgAAOkUIAXAAIAUABIgbgCIgQABgAhxmFIAAACQAYgDgMABIgBAAIgLAAgAk9mPQAKACAJgBQAIAAAHgDIgDAAIgfAAgAgKGMIABAAIAAAAgAlBGGIAAgBIAAAAIASAAQAAADACADIgUgFgAIFFlQACgKgCgLIAAgDIAAgDIAAgeIAAgDIAAgdIAAgCIAAgbQAEgLgBgSIAAgCIAAgCIAAgWIAAgCIAAhKIAAgDIAAhLIABgEIAAFsQgCgcgCgFgAn+GFIAEgBIAIABIgMABgAiDCVIAAgBIAFAAIAAABgAH5AWQABgBgGgLIgCgBIAAgCQgDgDgGAAIAAACIgDABQgdASgHgZIAAgCQgCgGgKABIgCABQgGABgJAAIAAADIgCAAIgKACIgGAAIAAAAIgBgHIAAgCQAEgFgBgMIAAgDIAAgCQABgPgEgJIAAgCIAAgFIAAgCIACAAIgBACQAAAFAGgCIAAAEQAAAEACACQADABACAEIABABIAGABIABAAIAFAFIABACIAMAAIABAAIADgCIACgCIACgEIABgBIAAgCIAEAAIAEADIABABIAMgBIABAAIACgFIABgBQAPAFALgHQACgIAAgJQAAgDgCgDQAFgBADgCIACgBQADgLgBgJIgCgVIACgBIABgBIAAgBIACAAIAAAHIAAACIAAAUIAAACIAAAdIAAADIAAAeIAAADIgCAAIAAAwgAF0gNQgBgEgJACIAAAAIgDABIgCAAIgFAAIgDAAQgGAAgDgCIAAgDQgBgMgGgHIADgCIAFAAIAAAAIABgBIADgCIAAABIABABIABABQAPAHALgLIABgCIAEAAIACACIABABIACAAIAAAUIAAACIAAAAIgBACIgBADIgBAJIgFABgAEpgOIAAgCIAAgDQAMgEALgHIABgBIAEgCIADAAQAKAAgDAOIAAADIgCAAIgDAAIgOAAIgDAAQgJgBgFADIgCAAgAFyh6IACgBIAAABIAAABIAAABIgCgCgAFxilIACAAIAAAAIgCAAgAEkjFIgDgNIAIAJIgEAEg");
	this.shape_7.setTransform(0,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.6,-41.6,106.7,82.8);


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


(lib.rap4b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_174 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(174).call(this.frame_174).wait(1));

	// Layer 1
	this.instance = new lib.rap4bstill();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({alpha:1},0).wait(65).to({alpha:0},10).wait(71));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(120.8,-18.8,58.3,6.6);


(lib.berapswish = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol103("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(450.9,325.3,3,3);
	this.instance.alpha = 0;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance.cache(-4,-4,7,7);

	this.instance_1 = new lib.Symbol84("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(439,295.7,3,3);
	this.instance_1.alpha = 0;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_1.cache(-9,-14,19,27);

	this.instance_2 = new lib.Symbol83("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(421.6,295.3,3,3);
	this.instance_2.alpha = 0;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_2.cache(-9,-13,18,26);

	this.instance_3 = new lib.Symbol102("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(396.4,297,3,3);
	this.instance_3.alpha = 0;
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_3.cache(-8,-14,16,28);

	this.instance_4 = new lib.Symbol101("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(381.9,306.5,3,3);
	this.instance_4.alpha = 0;
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_4.cache(-8,-9,16,19);

	this.instance_5 = new lib.Symbol100("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(359.2,304.4,3,3);
	this.instance_5.alpha = 0;
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_5.cache(-8,-10,16,20);

	this.instance_6 = new lib.Symbol99("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(344.8,295.1,3,3);
	this.instance_6.alpha = 0;
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_6.cache(-9,-13,17,26);

	this.instance_7 = new lib.Symbol98("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(329.9,306.3,3,3);
	this.instance_7.alpha = 0;
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_7.cache(-7,-10,15,19);

	this.instance_8 = new lib.Symbol96("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(315.3,306.1,3,3);
	this.instance_8.alpha = 0;
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_8.cache(-9,-9,18,19);

	this.instance_9 = new lib.Symbol97("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(300.7,305.7,3,3);
	this.instance_9.alpha = 0;
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_9.cache(-8,-9,16,19);

	this.instance_10 = new lib.Symbol96("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(278,306.1,3,3);
	this.instance_10.alpha = 0;
	this.instance_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_10.cache(-9,-9,18,19);

	this.instance_11 = new lib.Symbol95("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(262.1,295,3,3);
	this.instance_11.alpha = 0;
	this.instance_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_11.cache(-8,-13,17,27);

	this.instance_12 = new lib.Symbol94("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(247.2,299.2,3,3);
	this.instance_12.alpha = 0;
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_12.cache(-8,-12,16,24);

	this.instance_13 = new lib.Symbol92("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(641,257.3,3,3);
	this.instance_13.alpha = 0;
	this.instance_13.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_13.cache(-12,-13,24,26);

	this.instance_14 = new lib.Symbol84("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(621.3,256.6,3,3);
	this.instance_14.alpha = 0;
	this.instance_14.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_14.cache(-9,-14,19,27);

	this.instance_15 = new lib.Symbol84("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(603.8,256.6,3,3);
	this.instance_15.alpha = 0;
	this.instance_15.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_15.cache(-9,-14,19,27);

	this.instance_16 = new lib.Symbol83("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(586.5,256.3,3,3);
	this.instance_16.alpha = 0;
	this.instance_16.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_16.cache(-9,-13,18,26);

	this.instance_17 = new lib.Symbol85("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(565.5,291.7,3,3);
	this.instance_17.alpha = 0;
	this.instance_17.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_17.cache(-4,-5,8,11);

	this.instance_18 = new lib.Symbol93("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(551.5,256.7,3,3);
	this.instance_18.alpha = 0;
	this.instance_18.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_18.cache(-11,-13,22,27);

	this.instance_19 = new lib.Symbol92("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(530.9,257.3,3,3);
	this.instance_19.alpha = 0;
	this.instance_19.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_19.cache(-12,-13,24,26);

	this.instance_20 = new lib.Symbol88("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(511.9,257.6,3,3);
	this.instance_20.alpha = 0;
	this.instance_20.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_20.cache(-9,-12,18,25);

	this.instance_21 = new lib.Symbol84("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(495.9,256.6,3,3);
	this.instance_21.alpha = 0;
	this.instance_21.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_21.cache(-9,-14,19,27);

	this.instance_22 = new lib.Symbol83("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(478.5,256.3,3,3);
	this.instance_22.alpha = 0;
	this.instance_22.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_22.cache(-9,-13,18,26);

	this.instance_23 = new lib.Symbol85("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(457.6,291.7,3,3);
	this.instance_23.alpha = 0;
	this.instance_23.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_23.cache(-4,-5,8,11);

	this.instance_24 = new lib.Symbol84("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(444.6,256.6,3,3);
	this.instance_24.alpha = 0;
	this.instance_24.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_24.cache(-9,-14,19,27);

	this.instance_25 = new lib.Symbol90("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(426.9,256.8,3,3);
	this.instance_25.alpha = 0;
	this.instance_25.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_25.cache(-10,-13,19,26);

	this.instance_26 = new lib.Symbol84("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(409.5,256.6,3,3);
	this.instance_26.alpha = 0;
	this.instance_26.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_26.cache(-9,-14,19,27);

	this.instance_27 = new lib.Symbol91("synched",0);
	this.instance_27.parent = this;
	this.instance_27.setTransform(386.4,258.2,3,3);
	this.instance_27.alpha = 0;
	this.instance_27.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_27.cache(-15,-13,31,26);

	this.instance_28 = new lib.Symbol85("synched",0);
	this.instance_28.parent = this;
	this.instance_28.setTransform(359.7,291.7,3,3);
	this.instance_28.alpha = 0;
	this.instance_28.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_28.cache(-4,-5,8,11);

	this.instance_29 = new lib.Symbol89("synched",0);
	this.instance_29.parent = this;
	this.instance_29.setTransform(345.5,258.6,3,3);
	this.instance_29.alpha = 0;
	this.instance_29.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_29.cache(-10,-12,20,25);

	this.instance_30 = new lib.Symbol86("synched",0);
	this.instance_30.parent = this;
	this.instance_30.setTransform(325.2,257.8,3,3);
	this.instance_30.alpha = 0;
	this.instance_30.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_30.cache(-10,-12,21,25);

	this.instance_31 = new lib.Symbol91("synched",0);
	this.instance_31.parent = this;
	this.instance_31.setTransform(301.2,258.2,3,3);
	this.instance_31.alpha = 0;
	this.instance_31.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_31.cache(-15,-13,31,26);

	this.instance_32 = new lib.Symbol85("synched",0);
	this.instance_32.parent = this;
	this.instance_32.setTransform(274.6,291.7,3,3);
	this.instance_32.alpha = 0;
	this.instance_32.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_32.cache(-4,-5,8,11);

	this.instance_33 = new lib.Symbol84("synched",0);
	this.instance_33.parent = this;
	this.instance_33.setTransform(261.6,256.6,3,3);
	this.instance_33.alpha = 0;
	this.instance_33.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_33.cache(-9,-14,19,27);

	this.instance_34 = new lib.Symbol90("synched",0);
	this.instance_34.parent = this;
	this.instance_34.setTransform(243.9,256.8,3,3);
	this.instance_34.alpha = 0;
	this.instance_34.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_34.cache(-10,-13,19,26);

	this.instance_35 = new lib.Symbol86("synched",0);
	this.instance_35.parent = this;
	this.instance_35.setTransform(224.4,257.8,3,3);
	this.instance_35.alpha = 0;
	this.instance_35.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_35.cache(-10,-12,21,25);

	this.instance_36 = new lib.Symbol85("synched",0);
	this.instance_36.parent = this;
	this.instance_36.setTransform(202.8,291.7,3,3);
	this.instance_36.alpha = 0;
	this.instance_36.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_36.cache(-4,-5,8,11);

	this.instance_37 = new lib.Symbol89("synched",0);
	this.instance_37.parent = this;
	this.instance_37.setTransform(188.6,258.6,3,3);
	this.instance_37.alpha = 0;
	this.instance_37.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_37.cache(-10,-12,20,25);

	this.instance_38 = new lib.Symbol88("synched",0);
	this.instance_38.parent = this;
	this.instance_38.setTransform(171.1,257.6,3,3);
	this.instance_38.alpha = 0;
	this.instance_38.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_38.cache(-9,-12,18,25);

	this.instance_39 = new lib.Symbol85("synched",0);
	this.instance_39.parent = this;
	this.instance_39.setTransform(152,291.7,3,3);
	this.instance_39.alpha = 0;
	this.instance_39.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_39.cache(-4,-5,8,11);

	this.instance_40 = new lib.Symbol87("synched",0);
	this.instance_40.parent = this;
	this.instance_40.setTransform(135.1,257.7,3,3);
	this.instance_40.alpha = 0;
	this.instance_40.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_40.cache(-13,-13,26,26);

	this.instance_41 = new lib.Symbol86("synched",0);
	this.instance_41.parent = this;
	this.instance_41.setTransform(112.2,257.8,3,3);
	this.instance_41.alpha = 0;
	this.instance_41.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_41.cache(-10,-12,21,25);

	this.instance_42 = new lib.Symbol85("synched",0);
	this.instance_42.parent = this;
	this.instance_42.setTransform(90.6,289.5,2.833,2.833);

	this.instance_43 = new lib.Symbol84("synched",0);
	this.instance_43.parent = this;
	this.instance_43.setTransform(77.6,256.1,2.5,2.5);

	this.instance_44 = new lib.Symbol83("synched",0);
	this.instance_44.parent = this;
	this.instance_44.setTransform(60.3,255.5,2.167,2.167);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_44,p:{scaleX:2.167,scaleY:2.167,y:255.5,alpha:1}},{t:this.instance_43,p:{scaleX:2.5,scaleY:2.5,y:256.1,alpha:1}},{t:this.instance_42,p:{scaleX:2.833,scaleY:2.833,y:289.5,alpha:1}},{t:this.instance_41,p:{scaleX:3,scaleY:3,y:257.8,alpha:0}},{t:this.instance_40,p:{scaleX:3,scaleY:3,y:257.7,alpha:0}},{t:this.instance_39,p:{alpha:0,scaleX:3,scaleY:3,y:291.7}},{t:this.instance_38,p:{scaleX:3,scaleY:3,y:257.6,alpha:0}},{t:this.instance_37,p:{scaleX:3,scaleY:3,y:258.6,alpha:0}},{t:this.instance_36,p:{scaleX:3,scaleY:3,y:291.7,alpha:0}},{t:this.instance_35,p:{scaleX:3,scaleY:3,y:257.8,alpha:0}},{t:this.instance_34,p:{alpha:0,scaleX:3,scaleY:3,y:256.8}},{t:this.instance_33,p:{scaleX:3,scaleY:3,y:256.6,alpha:0}},{t:this.instance_32,p:{scaleX:3,scaleY:3,y:291.7,alpha:0}},{t:this.instance_31,p:{scaleX:3,scaleY:3,y:258.2,alpha:0}},{t:this.instance_30,p:{scaleX:3,scaleY:3,y:257.8,alpha:0}},{t:this.instance_29,p:{alpha:0,scaleX:3,scaleY:3,y:258.6}},{t:this.instance_28,p:{scaleX:3,scaleY:3,y:291.7,alpha:0}},{t:this.instance_27,p:{scaleX:3,scaleY:3,y:258.2,alpha:0}},{t:this.instance_26,p:{scaleX:3,scaleY:3,y:256.6,alpha:0}},{t:this.instance_25,p:{scaleX:3,scaleY:3,y:256.8,alpha:0}},{t:this.instance_24,p:{alpha:0,scaleX:3,scaleY:3,y:256.6}},{t:this.instance_23,p:{scaleX:3,scaleY:3,y:291.7,alpha:0}},{t:this.instance_22,p:{scaleX:3,scaleY:3,y:256.3,alpha:0}},{t:this.instance_21,p:{scaleX:3,scaleY:3,y:256.6,alpha:0}},{t:this.instance_20,p:{scaleX:3,scaleY:3,y:257.6,alpha:0}},{t:this.instance_19,p:{alpha:0,scaleX:3,scaleY:3,y:257.3}},{t:this.instance_18,p:{scaleX:3,scaleY:3,y:256.7,alpha:0}},{t:this.instance_17,p:{scaleX:3,scaleY:3,y:291.7,alpha:0}},{t:this.instance_16,p:{scaleX:3,scaleY:3,y:256.3,alpha:0}},{t:this.instance_15,p:{scaleX:3,scaleY:3,y:256.6,alpha:0}},{t:this.instance_14,p:{alpha:0,scaleX:3,scaleY:3,y:256.6}},{t:this.instance_13,p:{scaleX:3,scaleY:3,y:257.3,alpha:0}},{t:this.instance_12,p:{scaleX:3,scaleY:3,y:299.2,alpha:0}},{t:this.instance_11,p:{scaleX:3,scaleY:3,y:295,alpha:0}},{t:this.instance_10,p:{scaleX:3,scaleY:3,y:306.1,alpha:0}},{t:this.instance_9,p:{alpha:0,scaleX:3,scaleY:3,y:305.7}},{t:this.instance_8,p:{scaleX:3,scaleY:3,y:306.1,alpha:0}},{t:this.instance_7,p:{scaleX:3,scaleY:3,y:306.3,alpha:0}},{t:this.instance_6,p:{scaleX:3,scaleY:3,y:295.1,alpha:0}},{t:this.instance_5,p:{scaleX:3,scaleY:3,y:304.4,alpha:0}},{t:this.instance_4,p:{alpha:0,scaleX:3,scaleY:3,y:306.5}},{t:this.instance_3,p:{scaleX:3,scaleY:3,y:297,alpha:0}},{t:this.instance_2,p:{scaleX:3,scaleY:3,y:295.3,alpha:0}},{t:this.instance_1,p:{scaleX:3,scaleY:3,y:295.7,alpha:0}},{t:this.instance,p:{scaleX:3,scaleY:3,y:325.3,alpha:0}}]}).to({state:[{t:this.instance_44,p:{scaleX:1.333,scaleY:1.333,y:254.7,alpha:1}},{t:this.instance_43,p:{scaleX:1.667,scaleY:1.667,y:255.2,alpha:1}},{t:this.instance_42,p:{scaleX:2,scaleY:2,y:278.9,alpha:1}},{t:this.instance_41,p:{scaleX:2.333,scaleY:2.333,y:256.9,alpha:1}},{t:this.instance_40,p:{scaleX:2.667,scaleY:2.667,y:257.3,alpha:1}},{t:this.instance_39,p:{alpha:1,scaleX:3,scaleY:3,y:291.7}},{t:this.instance_38,p:{scaleX:3,scaleY:3,y:257.6,alpha:0}},{t:this.instance_37,p:{scaleX:3,scaleY:3,y:258.6,alpha:0}},{t:this.instance_36,p:{scaleX:3,scaleY:3,y:291.7,alpha:0}},{t:this.instance_35,p:{scaleX:3,scaleY:3,y:257.8,alpha:0}},{t:this.instance_34,p:{alpha:0,scaleX:3,scaleY:3,y:256.8}},{t:this.instance_33,p:{scaleX:3,scaleY:3,y:256.6,alpha:0}},{t:this.instance_32,p:{scaleX:3,scaleY:3,y:291.7,alpha:0}},{t:this.instance_31,p:{scaleX:3,scaleY:3,y:258.2,alpha:0}},{t:this.instance_30,p:{scaleX:3,scaleY:3,y:257.8,alpha:0}},{t:this.instance_29,p:{alpha:0,scaleX:3,scaleY:3,y:258.6}},{t:this.instance_28,p:{scaleX:3,scaleY:3,y:291.7,alpha:0}},{t:this.instance_27,p:{scaleX:3,scaleY:3,y:258.2,alpha:0}},{t:this.instance_26,p:{scaleX:3,scaleY:3,y:256.6,alpha:0}},{t:this.instance_25,p:{scaleX:3,scaleY:3,y:256.8,alpha:0}},{t:this.instance_24,p:{alpha:0,scaleX:3,scaleY:3,y:256.6}},{t:this.instance_23,p:{scaleX:3,scaleY:3,y:291.7,alpha:0}},{t:this.instance_22,p:{scaleX:3,scaleY:3,y:256.3,alpha:0}},{t:this.instance_21,p:{scaleX:3,scaleY:3,y:256.6,alpha:0}},{t:this.instance_20,p:{scaleX:3,scaleY:3,y:257.6,alpha:0}},{t:this.instance_19,p:{alpha:0,scaleX:3,scaleY:3,y:257.3}},{t:this.instance_18,p:{scaleX:3,scaleY:3,y:256.7,alpha:0}},{t:this.instance_17,p:{scaleX:3,scaleY:3,y:291.7,alpha:0}},{t:this.instance_16,p:{scaleX:3,scaleY:3,y:256.3,alpha:0}},{t:this.instance_15,p:{scaleX:3,scaleY:3,y:256.6,alpha:0}},{t:this.instance_14,p:{alpha:0,scaleX:3,scaleY:3,y:256.6}},{t:this.instance_13,p:{scaleX:3,scaleY:3,y:257.3,alpha:0}},{t:this.instance_12,p:{scaleX:3,scaleY:3,y:299.2,alpha:0}},{t:this.instance_11,p:{scaleX:3,scaleY:3,y:295,alpha:0}},{t:this.instance_10,p:{scaleX:3,scaleY:3,y:306.1,alpha:0}},{t:this.instance_9,p:{alpha:0,scaleX:3,scaleY:3,y:305.7}},{t:this.instance_8,p:{scaleX:3,scaleY:3,y:306.1,alpha:0}},{t:this.instance_7,p:{scaleX:3,scaleY:3,y:306.3,alpha:0}},{t:this.instance_6,p:{scaleX:3,scaleY:3,y:295.1,alpha:0}},{t:this.instance_5,p:{scaleX:3,scaleY:3,y:304.4,alpha:0}},{t:this.instance_4,p:{alpha:0,scaleX:3,scaleY:3,y:306.5}},{t:this.instance_3,p:{scaleX:3,scaleY:3,y:297,alpha:0}},{t:this.instance_2,p:{scaleX:3,scaleY:3,y:295.3,alpha:0}},{t:this.instance_1,p:{scaleX:3,scaleY:3,y:295.7,alpha:0}},{t:this.instance,p:{scaleX:3,scaleY:3,y:325.3,alpha:0}}]},1).to({state:[{t:this.instance_44,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_43,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_42,p:{scaleX:1.167,scaleY:1.167,y:268.3,alpha:1}},{t:this.instance_41,p:{scaleX:1.5,scaleY:1.5,y:255.7,alpha:1}},{t:this.instance_40,p:{scaleX:1.833,scaleY:1.833,y:256.1,alpha:1}},{t:this.instance_39,p:{alpha:1,scaleX:2.167,scaleY:2.167,y:281.1}},{t:this.instance_38,p:{scaleX:2.5,scaleY:2.5,y:256.9,alpha:1}},{t:this.instance_37,p:{scaleX:2.833,scaleY:2.833,y:258.3,alpha:1}},{t:this.instance_36,p:{scaleX:3,scaleY:3,y:291.7,alpha:0}},{t:this.instance_35,p:{scaleX:3,scaleY:3,y:257.8,alpha:0}},{t:this.instance_34,p:{alpha:0,scaleX:3,scaleY:3,y:256.8}},{t:this.instance_33,p:{scaleX:3,scaleY:3,y:256.6,alpha:0}},{t:this.instance_32,p:{scaleX:3,scaleY:3,y:291.7,alpha:0}},{t:this.instance_31,p:{scaleX:3,scaleY:3,y:258.2,alpha:0}},{t:this.instance_30,p:{scaleX:3,scaleY:3,y:257.8,alpha:0}},{t:this.instance_29,p:{alpha:0,scaleX:3,scaleY:3,y:258.6}},{t:this.instance_28,p:{scaleX:3,scaleY:3,y:291.7,alpha:0}},{t:this.instance_27,p:{scaleX:3,scaleY:3,y:258.2,alpha:0}},{t:this.instance_26,p:{scaleX:3,scaleY:3,y:256.6,alpha:0}},{t:this.instance_25,p:{scaleX:3,scaleY:3,y:256.8,alpha:0}},{t:this.instance_24,p:{alpha:0,scaleX:3,scaleY:3,y:256.6}},{t:this.instance_23,p:{scaleX:3,scaleY:3,y:291.7,alpha:0}},{t:this.instance_22,p:{scaleX:3,scaleY:3,y:256.3,alpha:0}},{t:this.instance_21,p:{scaleX:3,scaleY:3,y:256.6,alpha:0}},{t:this.instance_20,p:{scaleX:3,scaleY:3,y:257.6,alpha:0}},{t:this.instance_19,p:{alpha:0,scaleX:3,scaleY:3,y:257.3}},{t:this.instance_18,p:{scaleX:3,scaleY:3,y:256.7,alpha:0}},{t:this.instance_17,p:{scaleX:3,scaleY:3,y:291.7,alpha:0}},{t:this.instance_16,p:{scaleX:3,scaleY:3,y:256.3,alpha:0}},{t:this.instance_15,p:{scaleX:3,scaleY:3,y:256.6,alpha:0}},{t:this.instance_14,p:{alpha:0,scaleX:3,scaleY:3,y:256.6}},{t:this.instance_13,p:{scaleX:3,scaleY:3,y:257.3,alpha:0}},{t:this.instance_12,p:{scaleX:3,scaleY:3,y:299.2,alpha:0}},{t:this.instance_11,p:{scaleX:3,scaleY:3,y:295,alpha:0}},{t:this.instance_10,p:{scaleX:3,scaleY:3,y:306.1,alpha:0}},{t:this.instance_9,p:{alpha:0,scaleX:3,scaleY:3,y:305.7}},{t:this.instance_8,p:{scaleX:3,scaleY:3,y:306.1,alpha:0}},{t:this.instance_7,p:{scaleX:3,scaleY:3,y:306.3,alpha:0}},{t:this.instance_6,p:{scaleX:3,scaleY:3,y:295.1,alpha:0}},{t:this.instance_5,p:{scaleX:3,scaleY:3,y:304.4,alpha:0}},{t:this.instance_4,p:{alpha:0,scaleX:3,scaleY:3,y:306.5}},{t:this.instance_3,p:{scaleX:3,scaleY:3,y:297,alpha:0}},{t:this.instance_2,p:{scaleX:3,scaleY:3,y:295.3,alpha:0}},{t:this.instance_1,p:{scaleX:3,scaleY:3,y:295.7,alpha:0}},{t:this.instance,p:{scaleX:3,scaleY:3,y:325.3,alpha:0}}]},1).to({state:[{t:this.instance_44,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_43,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_42,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_41,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_40,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_39,p:{alpha:1,scaleX:1.333,scaleY:1.333,y:270.4}},{t:this.instance_38,p:{scaleX:1.667,scaleY:1.667,y:255.8,alpha:1}},{t:this.instance_37,p:{scaleX:2,scaleY:2,y:256.9,alpha:1}},{t:this.instance_36,p:{scaleX:2.333,scaleY:2.333,y:283.2,alpha:1}},{t:this.instance_35,p:{scaleX:2.667,scaleY:2.667,y:257.3,alpha:1}},{t:this.instance_34,p:{alpha:1,scaleX:3,scaleY:3,y:256.8}},{t:this.instance_33,p:{scaleX:3,scaleY:3,y:256.6,alpha:0}},{t:this.instance_32,p:{scaleX:3,scaleY:3,y:291.7,alpha:0}},{t:this.instance_31,p:{scaleX:3,scaleY:3,y:258.2,alpha:0}},{t:this.instance_30,p:{scaleX:3,scaleY:3,y:257.8,alpha:0}},{t:this.instance_29,p:{alpha:0,scaleX:3,scaleY:3,y:258.6}},{t:this.instance_28,p:{scaleX:3,scaleY:3,y:291.7,alpha:0}},{t:this.instance_27,p:{scaleX:3,scaleY:3,y:258.2,alpha:0}},{t:this.instance_26,p:{scaleX:3,scaleY:3,y:256.6,alpha:0}},{t:this.instance_25,p:{scaleX:3,scaleY:3,y:256.8,alpha:0}},{t:this.instance_24,p:{alpha:0,scaleX:3,scaleY:3,y:256.6}},{t:this.instance_23,p:{scaleX:3,scaleY:3,y:291.7,alpha:0}},{t:this.instance_22,p:{scaleX:3,scaleY:3,y:256.3,alpha:0}},{t:this.instance_21,p:{scaleX:3,scaleY:3,y:256.6,alpha:0}},{t:this.instance_20,p:{scaleX:3,scaleY:3,y:257.6,alpha:0}},{t:this.instance_19,p:{alpha:0,scaleX:3,scaleY:3,y:257.3}},{t:this.instance_18,p:{scaleX:3,scaleY:3,y:256.7,alpha:0}},{t:this.instance_17,p:{scaleX:3,scaleY:3,y:291.7,alpha:0}},{t:this.instance_16,p:{scaleX:3,scaleY:3,y:256.3,alpha:0}},{t:this.instance_15,p:{scaleX:3,scaleY:3,y:256.6,alpha:0}},{t:this.instance_14,p:{alpha:0,scaleX:3,scaleY:3,y:256.6}},{t:this.instance_13,p:{scaleX:3,scaleY:3,y:257.3,alpha:0}},{t:this.instance_12,p:{scaleX:3,scaleY:3,y:299.2,alpha:0}},{t:this.instance_11,p:{scaleX:3,scaleY:3,y:295,alpha:0}},{t:this.instance_10,p:{scaleX:3,scaleY:3,y:306.1,alpha:0}},{t:this.instance_9,p:{alpha:0,scaleX:3,scaleY:3,y:305.7}},{t:this.instance_8,p:{scaleX:3,scaleY:3,y:306.1,alpha:0}},{t:this.instance_7,p:{scaleX:3,scaleY:3,y:306.3,alpha:0}},{t:this.instance_6,p:{scaleX:3,scaleY:3,y:295.1,alpha:0}},{t:this.instance_5,p:{scaleX:3,scaleY:3,y:304.4,alpha:0}},{t:this.instance_4,p:{alpha:0,scaleX:3,scaleY:3,y:306.5}},{t:this.instance_3,p:{scaleX:3,scaleY:3,y:297,alpha:0}},{t:this.instance_2,p:{scaleX:3,scaleY:3,y:295.3,alpha:0}},{t:this.instance_1,p:{scaleX:3,scaleY:3,y:295.7,alpha:0}},{t:this.instance,p:{scaleX:3,scaleY:3,y:325.3,alpha:0}}]},1).to({state:[{t:this.instance_44,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_43,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_42,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_41,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_40,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_39,p:{alpha:1,scaleX:1,scaleY:1,y:266.2}},{t:this.instance_38,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_37,p:{scaleX:1.167,scaleY:1.167,y:255.5,alpha:1}},{t:this.instance_36,p:{scaleX:1.5,scaleY:1.5,y:272.6,alpha:1}},{t:this.instance_35,p:{scaleX:1.833,scaleY:1.833,y:256.1,alpha:1}},{t:this.instance_34,p:{alpha:1,scaleX:2.167,scaleY:2.167,y:255.8}},{t:this.instance_33,p:{scaleX:2.5,scaleY:2.5,y:256.1,alpha:1}},{t:this.instance_32,p:{scaleX:2.833,scaleY:2.833,y:289.5,alpha:1}},{t:this.instance_31,p:{scaleX:3,scaleY:3,y:258.2,alpha:0}},{t:this.instance_30,p:{scaleX:3,scaleY:3,y:257.8,alpha:0}},{t:this.instance_29,p:{alpha:0,scaleX:3,scaleY:3,y:258.6}},{t:this.instance_28,p:{scaleX:3,scaleY:3,y:291.7,alpha:0}},{t:this.instance_27,p:{scaleX:3,scaleY:3,y:258.2,alpha:0}},{t:this.instance_26,p:{scaleX:3,scaleY:3,y:256.6,alpha:0}},{t:this.instance_25,p:{scaleX:3,scaleY:3,y:256.8,alpha:0}},{t:this.instance_24,p:{alpha:0,scaleX:3,scaleY:3,y:256.6}},{t:this.instance_23,p:{scaleX:3,scaleY:3,y:291.7,alpha:0}},{t:this.instance_22,p:{scaleX:3,scaleY:3,y:256.3,alpha:0}},{t:this.instance_21,p:{scaleX:3,scaleY:3,y:256.6,alpha:0}},{t:this.instance_20,p:{scaleX:3,scaleY:3,y:257.6,alpha:0}},{t:this.instance_19,p:{alpha:0,scaleX:3,scaleY:3,y:257.3}},{t:this.instance_18,p:{scaleX:3,scaleY:3,y:256.7,alpha:0}},{t:this.instance_17,p:{scaleX:3,scaleY:3,y:291.7,alpha:0}},{t:this.instance_16,p:{scaleX:3,scaleY:3,y:256.3,alpha:0}},{t:this.instance_15,p:{scaleX:3,scaleY:3,y:256.6,alpha:0}},{t:this.instance_14,p:{alpha:0,scaleX:3,scaleY:3,y:256.6}},{t:this.instance_13,p:{scaleX:3,scaleY:3,y:257.3,alpha:0}},{t:this.instance_12,p:{scaleX:3,scaleY:3,y:299.2,alpha:0}},{t:this.instance_11,p:{scaleX:3,scaleY:3,y:295,alpha:0}},{t:this.instance_10,p:{scaleX:3,scaleY:3,y:306.1,alpha:0}},{t:this.instance_9,p:{alpha:0,scaleX:3,scaleY:3,y:305.7}},{t:this.instance_8,p:{scaleX:3,scaleY:3,y:306.1,alpha:0}},{t:this.instance_7,p:{scaleX:3,scaleY:3,y:306.3,alpha:0}},{t:this.instance_6,p:{scaleX:3,scaleY:3,y:295.1,alpha:0}},{t:this.instance_5,p:{scaleX:3,scaleY:3,y:304.4,alpha:0}},{t:this.instance_4,p:{alpha:0,scaleX:3,scaleY:3,y:306.5}},{t:this.instance_3,p:{scaleX:3,scaleY:3,y:297,alpha:0}},{t:this.instance_2,p:{scaleX:3,scaleY:3,y:295.3,alpha:0}},{t:this.instance_1,p:{scaleX:3,scaleY:3,y:295.7,alpha:0}},{t:this.instance,p:{scaleX:3,scaleY:3,y:325.3,alpha:0}}]},1).to({state:[{t:this.instance_44,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_43,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_42,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_41,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_40,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_39,p:{alpha:1,scaleX:1,scaleY:1,y:266.2}},{t:this.instance_38,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_37,p:{scaleX:1,scaleY:1,y:255.2,alpha:1}},{t:this.instance_36,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_35,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_34,p:{alpha:1,scaleX:1.333,scaleY:1.333,y:254.9}},{t:this.instance_33,p:{scaleX:1.667,scaleY:1.667,y:255.2,alpha:1}},{t:this.instance_32,p:{scaleX:2,scaleY:2,y:278.9,alpha:1}},{t:this.instance_31,p:{scaleX:2.333,scaleY:2.333,y:257.2,alpha:1}},{t:this.instance_30,p:{scaleX:2.667,scaleY:2.667,y:257.3,alpha:1}},{t:this.instance_29,p:{alpha:1,scaleX:3,scaleY:3,y:258.6}},{t:this.instance_28,p:{scaleX:3,scaleY:3,y:291.7,alpha:0}},{t:this.instance_27,p:{scaleX:3,scaleY:3,y:258.2,alpha:0}},{t:this.instance_26,p:{scaleX:3,scaleY:3,y:256.6,alpha:0}},{t:this.instance_25,p:{scaleX:3,scaleY:3,y:256.8,alpha:0}},{t:this.instance_24,p:{alpha:0,scaleX:3,scaleY:3,y:256.6}},{t:this.instance_23,p:{scaleX:3,scaleY:3,y:291.7,alpha:0}},{t:this.instance_22,p:{scaleX:3,scaleY:3,y:256.3,alpha:0}},{t:this.instance_21,p:{scaleX:3,scaleY:3,y:256.6,alpha:0}},{t:this.instance_20,p:{scaleX:3,scaleY:3,y:257.6,alpha:0}},{t:this.instance_19,p:{alpha:0,scaleX:3,scaleY:3,y:257.3}},{t:this.instance_18,p:{scaleX:3,scaleY:3,y:256.7,alpha:0}},{t:this.instance_17,p:{scaleX:3,scaleY:3,y:291.7,alpha:0}},{t:this.instance_16,p:{scaleX:3,scaleY:3,y:256.3,alpha:0}},{t:this.instance_15,p:{scaleX:3,scaleY:3,y:256.6,alpha:0}},{t:this.instance_14,p:{alpha:0,scaleX:3,scaleY:3,y:256.6}},{t:this.instance_13,p:{scaleX:3,scaleY:3,y:257.3,alpha:0}},{t:this.instance_12,p:{scaleX:3,scaleY:3,y:299.2,alpha:0}},{t:this.instance_11,p:{scaleX:3,scaleY:3,y:295,alpha:0}},{t:this.instance_10,p:{scaleX:3,scaleY:3,y:306.1,alpha:0}},{t:this.instance_9,p:{alpha:0,scaleX:3,scaleY:3,y:305.7}},{t:this.instance_8,p:{scaleX:3,scaleY:3,y:306.1,alpha:0}},{t:this.instance_7,p:{scaleX:3,scaleY:3,y:306.3,alpha:0}},{t:this.instance_6,p:{scaleX:3,scaleY:3,y:295.1,alpha:0}},{t:this.instance_5,p:{scaleX:3,scaleY:3,y:304.4,alpha:0}},{t:this.instance_4,p:{alpha:0,scaleX:3,scaleY:3,y:306.5}},{t:this.instance_3,p:{scaleX:3,scaleY:3,y:297,alpha:0}},{t:this.instance_2,p:{scaleX:3,scaleY:3,y:295.3,alpha:0}},{t:this.instance_1,p:{scaleX:3,scaleY:3,y:295.7,alpha:0}},{t:this.instance,p:{scaleX:3,scaleY:3,y:325.3,alpha:0}}]},1).to({state:[{t:this.instance_44,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_43,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_42,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_41,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_40,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_39,p:{alpha:1,scaleX:1,scaleY:1,y:266.2}},{t:this.instance_38,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_37,p:{scaleX:1,scaleY:1,y:255.2,alpha:1}},{t:this.instance_36,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_35,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_34,p:{alpha:1,scaleX:1,scaleY:1,y:254.6}},{t:this.instance_33,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_32,p:{scaleX:1.167,scaleY:1.167,y:268.3,alpha:1}},{t:this.instance_31,p:{scaleX:1.5,scaleY:1.5,y:255.9,alpha:1}},{t:this.instance_30,p:{scaleX:1.833,scaleY:1.833,y:256.1,alpha:1}},{t:this.instance_29,p:{alpha:1,scaleX:2.167,scaleY:2.167,y:257.2}},{t:this.instance_28,p:{scaleX:2.5,scaleY:2.5,y:285.3,alpha:1}},{t:this.instance_27,p:{scaleX:2.833,scaleY:2.833,y:258,alpha:1}},{t:this.instance_26,p:{scaleX:3,scaleY:3,y:256.6,alpha:0}},{t:this.instance_25,p:{scaleX:3,scaleY:3,y:256.8,alpha:0}},{t:this.instance_24,p:{alpha:0,scaleX:3,scaleY:3,y:256.6}},{t:this.instance_23,p:{scaleX:3,scaleY:3,y:291.7,alpha:0}},{t:this.instance_22,p:{scaleX:3,scaleY:3,y:256.3,alpha:0}},{t:this.instance_21,p:{scaleX:3,scaleY:3,y:256.6,alpha:0}},{t:this.instance_20,p:{scaleX:3,scaleY:3,y:257.6,alpha:0}},{t:this.instance_19,p:{alpha:0,scaleX:3,scaleY:3,y:257.3}},{t:this.instance_18,p:{scaleX:3,scaleY:3,y:256.7,alpha:0}},{t:this.instance_17,p:{scaleX:3,scaleY:3,y:291.7,alpha:0}},{t:this.instance_16,p:{scaleX:3,scaleY:3,y:256.3,alpha:0}},{t:this.instance_15,p:{scaleX:3,scaleY:3,y:256.6,alpha:0}},{t:this.instance_14,p:{alpha:0,scaleX:3,scaleY:3,y:256.6}},{t:this.instance_13,p:{scaleX:3,scaleY:3,y:257.3,alpha:0}},{t:this.instance_12,p:{scaleX:3,scaleY:3,y:299.2,alpha:0}},{t:this.instance_11,p:{scaleX:3,scaleY:3,y:295,alpha:0}},{t:this.instance_10,p:{scaleX:3,scaleY:3,y:306.1,alpha:0}},{t:this.instance_9,p:{alpha:0,scaleX:3,scaleY:3,y:305.7}},{t:this.instance_8,p:{scaleX:3,scaleY:3,y:306.1,alpha:0}},{t:this.instance_7,p:{scaleX:3,scaleY:3,y:306.3,alpha:0}},{t:this.instance_6,p:{scaleX:3,scaleY:3,y:295.1,alpha:0}},{t:this.instance_5,p:{scaleX:3,scaleY:3,y:304.4,alpha:0}},{t:this.instance_4,p:{alpha:0,scaleX:3,scaleY:3,y:306.5}},{t:this.instance_3,p:{scaleX:3,scaleY:3,y:297,alpha:0}},{t:this.instance_2,p:{scaleX:3,scaleY:3,y:295.3,alpha:0}},{t:this.instance_1,p:{scaleX:3,scaleY:3,y:295.7,alpha:0}},{t:this.instance,p:{scaleX:3,scaleY:3,y:325.3,alpha:0}}]},1).to({state:[{t:this.instance_44,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_43,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_42,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_41,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_40,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_39,p:{alpha:1,scaleX:1,scaleY:1,y:266.2}},{t:this.instance_38,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_37,p:{scaleX:1,scaleY:1,y:255.2,alpha:1}},{t:this.instance_36,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_35,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_34,p:{alpha:1,scaleX:1,scaleY:1,y:254.6}},{t:this.instance_33,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_32,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_31,p:{scaleX:1,scaleY:1,y:255.1,alpha:1}},{t:this.instance_30,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_29,p:{alpha:1,scaleX:1.333,scaleY:1.333,y:255.8}},{t:this.instance_28,p:{scaleX:1.667,scaleY:1.667,y:274.7,alpha:1}},{t:this.instance_27,p:{scaleX:2,scaleY:2,y:256.6,alpha:1}},{t:this.instance_26,p:{scaleX:2.333,scaleY:2.333,y:255.9,alpha:1}},{t:this.instance_25,p:{scaleX:2.667,scaleY:2.667,y:256.4,alpha:1}},{t:this.instance_24,p:{alpha:1,scaleX:3,scaleY:3,y:256.6}},{t:this.instance_23,p:{scaleX:3,scaleY:3,y:291.7,alpha:0}},{t:this.instance_22,p:{scaleX:3,scaleY:3,y:256.3,alpha:0}},{t:this.instance_21,p:{scaleX:3,scaleY:3,y:256.6,alpha:0}},{t:this.instance_20,p:{scaleX:3,scaleY:3,y:257.6,alpha:0}},{t:this.instance_19,p:{alpha:0,scaleX:3,scaleY:3,y:257.3}},{t:this.instance_18,p:{scaleX:3,scaleY:3,y:256.7,alpha:0}},{t:this.instance_17,p:{scaleX:3,scaleY:3,y:291.7,alpha:0}},{t:this.instance_16,p:{scaleX:3,scaleY:3,y:256.3,alpha:0}},{t:this.instance_15,p:{scaleX:3,scaleY:3,y:256.6,alpha:0}},{t:this.instance_14,p:{alpha:0,scaleX:3,scaleY:3,y:256.6}},{t:this.instance_13,p:{scaleX:3,scaleY:3,y:257.3,alpha:0}},{t:this.instance_12,p:{scaleX:3,scaleY:3,y:299.2,alpha:0}},{t:this.instance_11,p:{scaleX:3,scaleY:3,y:295,alpha:0}},{t:this.instance_10,p:{scaleX:3,scaleY:3,y:306.1,alpha:0}},{t:this.instance_9,p:{alpha:0,scaleX:3,scaleY:3,y:305.7}},{t:this.instance_8,p:{scaleX:3,scaleY:3,y:306.1,alpha:0}},{t:this.instance_7,p:{scaleX:3,scaleY:3,y:306.3,alpha:0}},{t:this.instance_6,p:{scaleX:3,scaleY:3,y:295.1,alpha:0}},{t:this.instance_5,p:{scaleX:3,scaleY:3,y:304.4,alpha:0}},{t:this.instance_4,p:{alpha:0,scaleX:3,scaleY:3,y:306.5}},{t:this.instance_3,p:{scaleX:3,scaleY:3,y:297,alpha:0}},{t:this.instance_2,p:{scaleX:3,scaleY:3,y:295.3,alpha:0}},{t:this.instance_1,p:{scaleX:3,scaleY:3,y:295.7,alpha:0}},{t:this.instance,p:{scaleX:3,scaleY:3,y:325.3,alpha:0}}]},1).to({state:[{t:this.instance_44,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_43,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_42,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_41,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_40,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_39,p:{alpha:1,scaleX:1,scaleY:1,y:266.2}},{t:this.instance_38,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_37,p:{scaleX:1,scaleY:1,y:255.2,alpha:1}},{t:this.instance_36,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_35,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_34,p:{alpha:1,scaleX:1,scaleY:1,y:254.6}},{t:this.instance_33,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_32,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_31,p:{scaleX:1,scaleY:1,y:255.1,alpha:1}},{t:this.instance_30,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_29,p:{alpha:1,scaleX:1,scaleY:1,y:255.2}},{t:this.instance_28,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_27,p:{scaleX:1.167,scaleY:1.167,y:255.3,alpha:1}},{t:this.instance_26,p:{scaleX:1.5,scaleY:1.5,y:255.1,alpha:1}},{t:this.instance_25,p:{scaleX:1.833,scaleY:1.833,y:255.5,alpha:1}},{t:this.instance_24,p:{alpha:1,scaleX:2.167,scaleY:2.167,y:255.8}},{t:this.instance_23,p:{scaleX:2.5,scaleY:2.5,y:285.3,alpha:1}},{t:this.instance_22,p:{scaleX:2.833,scaleY:2.833,y:256.1,alpha:1}},{t:this.instance_21,p:{scaleX:3,scaleY:3,y:256.6,alpha:0}},{t:this.instance_20,p:{scaleX:3,scaleY:3,y:257.6,alpha:0}},{t:this.instance_19,p:{alpha:0,scaleX:3,scaleY:3,y:257.3}},{t:this.instance_18,p:{scaleX:3,scaleY:3,y:256.7,alpha:0}},{t:this.instance_17,p:{scaleX:3,scaleY:3,y:291.7,alpha:0}},{t:this.instance_16,p:{scaleX:3,scaleY:3,y:256.3,alpha:0}},{t:this.instance_15,p:{scaleX:3,scaleY:3,y:256.6,alpha:0}},{t:this.instance_14,p:{alpha:0,scaleX:3,scaleY:3,y:256.6}},{t:this.instance_13,p:{scaleX:3,scaleY:3,y:257.3,alpha:0}},{t:this.instance_12,p:{scaleX:3,scaleY:3,y:299.2,alpha:0}},{t:this.instance_11,p:{scaleX:3,scaleY:3,y:295,alpha:0}},{t:this.instance_10,p:{scaleX:3,scaleY:3,y:306.1,alpha:0}},{t:this.instance_9,p:{alpha:0,scaleX:3,scaleY:3,y:305.7}},{t:this.instance_8,p:{scaleX:3,scaleY:3,y:306.1,alpha:0}},{t:this.instance_7,p:{scaleX:3,scaleY:3,y:306.3,alpha:0}},{t:this.instance_6,p:{scaleX:3,scaleY:3,y:295.1,alpha:0}},{t:this.instance_5,p:{scaleX:3,scaleY:3,y:304.4,alpha:0}},{t:this.instance_4,p:{alpha:0,scaleX:3,scaleY:3,y:306.5}},{t:this.instance_3,p:{scaleX:3,scaleY:3,y:297,alpha:0}},{t:this.instance_2,p:{scaleX:3,scaleY:3,y:295.3,alpha:0}},{t:this.instance_1,p:{scaleX:3,scaleY:3,y:295.7,alpha:0}},{t:this.instance,p:{scaleX:3,scaleY:3,y:325.3,alpha:0}}]},1).to({state:[{t:this.instance_44,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_43,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_42,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_41,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_40,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_39,p:{alpha:1,scaleX:1,scaleY:1,y:266.2}},{t:this.instance_38,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_37,p:{scaleX:1,scaleY:1,y:255.2,alpha:1}},{t:this.instance_36,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_35,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_34,p:{alpha:1,scaleX:1,scaleY:1,y:254.6}},{t:this.instance_33,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_32,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_31,p:{scaleX:1,scaleY:1,y:255.1,alpha:1}},{t:this.instance_30,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_29,p:{alpha:1,scaleX:1,scaleY:1,y:255.2}},{t:this.instance_28,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_27,p:{scaleX:1,scaleY:1,y:255.1,alpha:1}},{t:this.instance_26,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_25,p:{scaleX:1,scaleY:1,y:254.6,alpha:1}},{t:this.instance_24,p:{alpha:1,scaleX:1.333,scaleY:1.333,y:254.9}},{t:this.instance_23,p:{scaleX:1.667,scaleY:1.667,y:274.7,alpha:1}},{t:this.instance_22,p:{scaleX:2,scaleY:2,y:255.3,alpha:1}},{t:this.instance_21,p:{scaleX:2.333,scaleY:2.333,y:255.9,alpha:1}},{t:this.instance_20,p:{scaleX:2.667,scaleY:2.667,y:257.1,alpha:1}},{t:this.instance_19,p:{alpha:1,scaleX:3,scaleY:3,y:257.3}},{t:this.instance_18,p:{scaleX:3,scaleY:3,y:256.7,alpha:0}},{t:this.instance_17,p:{scaleX:3,scaleY:3,y:291.7,alpha:0}},{t:this.instance_16,p:{scaleX:3,scaleY:3,y:256.3,alpha:0}},{t:this.instance_15,p:{scaleX:3,scaleY:3,y:256.6,alpha:0}},{t:this.instance_14,p:{alpha:0,scaleX:3,scaleY:3,y:256.6}},{t:this.instance_13,p:{scaleX:3,scaleY:3,y:257.3,alpha:0}},{t:this.instance_12,p:{scaleX:3,scaleY:3,y:299.2,alpha:0}},{t:this.instance_11,p:{scaleX:3,scaleY:3,y:295,alpha:0}},{t:this.instance_10,p:{scaleX:3,scaleY:3,y:306.1,alpha:0}},{t:this.instance_9,p:{alpha:0,scaleX:3,scaleY:3,y:305.7}},{t:this.instance_8,p:{scaleX:3,scaleY:3,y:306.1,alpha:0}},{t:this.instance_7,p:{scaleX:3,scaleY:3,y:306.3,alpha:0}},{t:this.instance_6,p:{scaleX:3,scaleY:3,y:295.1,alpha:0}},{t:this.instance_5,p:{scaleX:3,scaleY:3,y:304.4,alpha:0}},{t:this.instance_4,p:{alpha:0,scaleX:3,scaleY:3,y:306.5}},{t:this.instance_3,p:{scaleX:3,scaleY:3,y:297,alpha:0}},{t:this.instance_2,p:{scaleX:3,scaleY:3,y:295.3,alpha:0}},{t:this.instance_1,p:{scaleX:3,scaleY:3,y:295.7,alpha:0}},{t:this.instance,p:{scaleX:3,scaleY:3,y:325.3,alpha:0}}]},1).to({state:[{t:this.instance_44,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_43,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_42,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_41,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_40,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_39,p:{alpha:1,scaleX:1,scaleY:1,y:266.2}},{t:this.instance_38,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_37,p:{scaleX:1,scaleY:1,y:255.2,alpha:1}},{t:this.instance_36,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_35,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_34,p:{alpha:1,scaleX:1,scaleY:1,y:254.6}},{t:this.instance_33,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_32,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_31,p:{scaleX:1,scaleY:1,y:255.1,alpha:1}},{t:this.instance_30,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_29,p:{alpha:1,scaleX:1,scaleY:1,y:255.2}},{t:this.instance_28,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_27,p:{scaleX:1,scaleY:1,y:255.1,alpha:1}},{t:this.instance_26,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_25,p:{scaleX:1,scaleY:1,y:254.6,alpha:1}},{t:this.instance_24,p:{alpha:1,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_23,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_22,p:{scaleX:1.167,scaleY:1.167,y:254.6,alpha:1}},{t:this.instance_21,p:{scaleX:1.5,scaleY:1.5,y:255.1,alpha:1}},{t:this.instance_20,p:{scaleX:1.833,scaleY:1.833,y:256,alpha:1}},{t:this.instance_19,p:{alpha:1,scaleX:2.167,scaleY:2.167,y:256.3}},{t:this.instance_18,p:{scaleX:2.5,scaleY:2.5,y:256.2,alpha:1}},{t:this.instance_17,p:{scaleX:2.833,scaleY:2.833,y:289.5,alpha:1}},{t:this.instance_16,p:{scaleX:3,scaleY:3,y:256.3,alpha:0}},{t:this.instance_15,p:{scaleX:3,scaleY:3,y:256.6,alpha:0}},{t:this.instance_14,p:{alpha:0,scaleX:3,scaleY:3,y:256.6}},{t:this.instance_13,p:{scaleX:3,scaleY:3,y:257.3,alpha:0}},{t:this.instance_12,p:{scaleX:3,scaleY:3,y:299.2,alpha:0}},{t:this.instance_11,p:{scaleX:3,scaleY:3,y:295,alpha:0}},{t:this.instance_10,p:{scaleX:3,scaleY:3,y:306.1,alpha:0}},{t:this.instance_9,p:{alpha:0,scaleX:3,scaleY:3,y:305.7}},{t:this.instance_8,p:{scaleX:3,scaleY:3,y:306.1,alpha:0}},{t:this.instance_7,p:{scaleX:3,scaleY:3,y:306.3,alpha:0}},{t:this.instance_6,p:{scaleX:3,scaleY:3,y:295.1,alpha:0}},{t:this.instance_5,p:{scaleX:3,scaleY:3,y:304.4,alpha:0}},{t:this.instance_4,p:{alpha:0,scaleX:3,scaleY:3,y:306.5}},{t:this.instance_3,p:{scaleX:3,scaleY:3,y:297,alpha:0}},{t:this.instance_2,p:{scaleX:3,scaleY:3,y:295.3,alpha:0}},{t:this.instance_1,p:{scaleX:3,scaleY:3,y:295.7,alpha:0}},{t:this.instance,p:{scaleX:3,scaleY:3,y:325.3,alpha:0}}]},1).to({state:[{t:this.instance_44,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_43,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_42,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_41,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_40,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_39,p:{alpha:1,scaleX:1,scaleY:1,y:266.2}},{t:this.instance_38,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_37,p:{scaleX:1,scaleY:1,y:255.2,alpha:1}},{t:this.instance_36,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_35,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_34,p:{alpha:1,scaleX:1,scaleY:1,y:254.6}},{t:this.instance_33,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_32,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_31,p:{scaleX:1,scaleY:1,y:255.1,alpha:1}},{t:this.instance_30,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_29,p:{alpha:1,scaleX:1,scaleY:1,y:255.2}},{t:this.instance_28,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_27,p:{scaleX:1,scaleY:1,y:255.1,alpha:1}},{t:this.instance_26,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_25,p:{scaleX:1,scaleY:1,y:254.6,alpha:1}},{t:this.instance_24,p:{alpha:1,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_23,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_22,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_21,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_20,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_19,p:{alpha:1,scaleX:1.333,scaleY:1.333,y:255.2}},{t:this.instance_18,p:{scaleX:1.667,scaleY:1.667,y:255.3,alpha:1}},{t:this.instance_17,p:{scaleX:2,scaleY:2,y:278.9,alpha:1}},{t:this.instance_16,p:{scaleX:2.333,scaleY:2.333,y:255.6,alpha:1}},{t:this.instance_15,p:{scaleX:2.667,scaleY:2.667,y:256.3,alpha:1}},{t:this.instance_14,p:{alpha:1,scaleX:3,scaleY:3,y:256.6}},{t:this.instance_13,p:{scaleX:3,scaleY:3,y:257.3,alpha:0}},{t:this.instance_12,p:{scaleX:3,scaleY:3,y:299.2,alpha:0}},{t:this.instance_11,p:{scaleX:3,scaleY:3,y:295,alpha:0}},{t:this.instance_10,p:{scaleX:3,scaleY:3,y:306.1,alpha:0}},{t:this.instance_9,p:{alpha:0,scaleX:3,scaleY:3,y:305.7}},{t:this.instance_8,p:{scaleX:3,scaleY:3,y:306.1,alpha:0}},{t:this.instance_7,p:{scaleX:3,scaleY:3,y:306.3,alpha:0}},{t:this.instance_6,p:{scaleX:3,scaleY:3,y:295.1,alpha:0}},{t:this.instance_5,p:{scaleX:3,scaleY:3,y:304.4,alpha:0}},{t:this.instance_4,p:{alpha:0,scaleX:3,scaleY:3,y:306.5}},{t:this.instance_3,p:{scaleX:3,scaleY:3,y:297,alpha:0}},{t:this.instance_2,p:{scaleX:3,scaleY:3,y:295.3,alpha:0}},{t:this.instance_1,p:{scaleX:3,scaleY:3,y:295.7,alpha:0}},{t:this.instance,p:{scaleX:3,scaleY:3,y:325.3,alpha:0}}]},1).to({state:[{t:this.instance_44,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_43,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_42,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_41,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_40,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_39,p:{alpha:1,scaleX:1,scaleY:1,y:266.2}},{t:this.instance_38,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_37,p:{scaleX:1,scaleY:1,y:255.2,alpha:1}},{t:this.instance_36,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_35,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_34,p:{alpha:1,scaleX:1,scaleY:1,y:254.6}},{t:this.instance_33,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_32,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_31,p:{scaleX:1,scaleY:1,y:255.1,alpha:1}},{t:this.instance_30,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_29,p:{alpha:1,scaleX:1,scaleY:1,y:255.2}},{t:this.instance_28,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_27,p:{scaleX:1,scaleY:1,y:255.1,alpha:1}},{t:this.instance_26,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_25,p:{scaleX:1,scaleY:1,y:254.6,alpha:1}},{t:this.instance_24,p:{alpha:1,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_23,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_22,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_21,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_20,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_19,p:{alpha:1,scaleX:1,scaleY:1,y:254.8}},{t:this.instance_18,p:{scaleX:1,scaleY:1,y:254.6,alpha:1}},{t:this.instance_17,p:{scaleX:1.167,scaleY:1.167,y:268.3,alpha:1}},{t:this.instance_16,p:{scaleX:1.5,scaleY:1.5,y:254.9,alpha:1}},{t:this.instance_15,p:{scaleX:1.833,scaleY:1.833,y:255.4,alpha:1}},{t:this.instance_14,p:{alpha:1,scaleX:2.167,scaleY:2.167,y:255.8}},{t:this.instance_13,p:{scaleX:2.5,scaleY:2.5,y:256.7,alpha:1}},{t:this.instance_12,p:{scaleX:2.833,scaleY:2.833,y:298.8,alpha:1}},{t:this.instance_11,p:{scaleX:3,scaleY:3,y:295,alpha:0}},{t:this.instance_10,p:{scaleX:3,scaleY:3,y:306.1,alpha:0}},{t:this.instance_9,p:{alpha:0,scaleX:3,scaleY:3,y:305.7}},{t:this.instance_8,p:{scaleX:3,scaleY:3,y:306.1,alpha:0}},{t:this.instance_7,p:{scaleX:3,scaleY:3,y:306.3,alpha:0}},{t:this.instance_6,p:{scaleX:3,scaleY:3,y:295.1,alpha:0}},{t:this.instance_5,p:{scaleX:3,scaleY:3,y:304.4,alpha:0}},{t:this.instance_4,p:{alpha:0,scaleX:3,scaleY:3,y:306.5}},{t:this.instance_3,p:{scaleX:3,scaleY:3,y:297,alpha:0}},{t:this.instance_2,p:{scaleX:3,scaleY:3,y:295.3,alpha:0}},{t:this.instance_1,p:{scaleX:3,scaleY:3,y:295.7,alpha:0}},{t:this.instance,p:{scaleX:3,scaleY:3,y:325.3,alpha:0}}]},1).to({state:[{t:this.instance_44,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_43,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_42,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_41,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_40,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_39,p:{alpha:1,scaleX:1,scaleY:1,y:266.2}},{t:this.instance_38,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_37,p:{scaleX:1,scaleY:1,y:255.2,alpha:1}},{t:this.instance_36,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_35,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_34,p:{alpha:1,scaleX:1,scaleY:1,y:254.6}},{t:this.instance_33,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_32,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_31,p:{scaleX:1,scaleY:1,y:255.1,alpha:1}},{t:this.instance_30,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_29,p:{alpha:1,scaleX:1,scaleY:1,y:255.2}},{t:this.instance_28,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_27,p:{scaleX:1,scaleY:1,y:255.1,alpha:1}},{t:this.instance_26,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_25,p:{scaleX:1,scaleY:1,y:254.6,alpha:1}},{t:this.instance_24,p:{alpha:1,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_23,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_22,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_21,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_20,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_19,p:{alpha:1,scaleX:1,scaleY:1,y:254.8}},{t:this.instance_18,p:{scaleX:1,scaleY:1,y:254.6,alpha:1}},{t:this.instance_17,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_16,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_15,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_14,p:{alpha:1,scaleX:1.333,scaleY:1.333,y:254.9}},{t:this.instance_13,p:{scaleX:1.667,scaleY:1.667,y:255.6,alpha:1}},{t:this.instance_12,p:{scaleX:2,scaleY:2,y:297,alpha:1}},{t:this.instance_11,p:{scaleX:2.333,scaleY:2.333,y:294.4,alpha:1}},{t:this.instance_10,p:{scaleX:2.667,scaleY:2.667,y:304.6,alpha:1}},{t:this.instance_9,p:{alpha:1,scaleX:3,scaleY:3,y:305.7}},{t:this.instance_8,p:{scaleX:3,scaleY:3,y:306.1,alpha:0}},{t:this.instance_7,p:{scaleX:3,scaleY:3,y:306.3,alpha:0}},{t:this.instance_6,p:{scaleX:3,scaleY:3,y:295.1,alpha:0}},{t:this.instance_5,p:{scaleX:3,scaleY:3,y:304.4,alpha:0}},{t:this.instance_4,p:{alpha:0,scaleX:3,scaleY:3,y:306.5}},{t:this.instance_3,p:{scaleX:3,scaleY:3,y:297,alpha:0}},{t:this.instance_2,p:{scaleX:3,scaleY:3,y:295.3,alpha:0}},{t:this.instance_1,p:{scaleX:3,scaleY:3,y:295.7,alpha:0}},{t:this.instance,p:{scaleX:3,scaleY:3,y:325.3,alpha:0}}]},1).to({state:[{t:this.instance_44,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_43,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_42,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_41,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_40,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_39,p:{alpha:1,scaleX:1,scaleY:1,y:266.2}},{t:this.instance_38,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_37,p:{scaleX:1,scaleY:1,y:255.2,alpha:1}},{t:this.instance_36,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_35,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_34,p:{alpha:1,scaleX:1,scaleY:1,y:254.6}},{t:this.instance_33,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_32,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_31,p:{scaleX:1,scaleY:1,y:255.1,alpha:1}},{t:this.instance_30,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_29,p:{alpha:1,scaleX:1,scaleY:1,y:255.2}},{t:this.instance_28,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_27,p:{scaleX:1,scaleY:1,y:255.1,alpha:1}},{t:this.instance_26,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_25,p:{scaleX:1,scaleY:1,y:254.6,alpha:1}},{t:this.instance_24,p:{alpha:1,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_23,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_22,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_21,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_20,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_19,p:{alpha:1,scaleX:1,scaleY:1,y:254.8}},{t:this.instance_18,p:{scaleX:1,scaleY:1,y:254.6,alpha:1}},{t:this.instance_17,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_16,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_15,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_14,p:{alpha:1,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_13,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_12,p:{scaleX:1.167,scaleY:1.167,y:295.1,alpha:1}},{t:this.instance_11,p:{scaleX:1.5,scaleY:1.5,y:293.8,alpha:1}},{t:this.instance_10,p:{scaleX:1.833,scaleY:1.833,y:300.8,alpha:1}},{t:this.instance_9,p:{alpha:1,scaleX:2.167,scaleY:2.167,y:302.1}},{t:this.instance_8,p:{scaleX:2.5,scaleY:2.5,y:303.8,alpha:1}},{t:this.instance_7,p:{scaleX:2.833,scaleY:2.833,y:305.5,alpha:1}},{t:this.instance_6,p:{scaleX:3,scaleY:3,y:295.1,alpha:0}},{t:this.instance_5,p:{scaleX:3,scaleY:3,y:304.4,alpha:0}},{t:this.instance_4,p:{alpha:0,scaleX:3,scaleY:3,y:306.5}},{t:this.instance_3,p:{scaleX:3,scaleY:3,y:297,alpha:0}},{t:this.instance_2,p:{scaleX:3,scaleY:3,y:295.3,alpha:0}},{t:this.instance_1,p:{scaleX:3,scaleY:3,y:295.7,alpha:0}},{t:this.instance,p:{scaleX:3,scaleY:3,y:325.3,alpha:0}}]},1).to({state:[{t:this.instance_44,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_43,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_42,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_41,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_40,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_39,p:{alpha:1,scaleX:1,scaleY:1,y:266.2}},{t:this.instance_38,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_37,p:{scaleX:1,scaleY:1,y:255.2,alpha:1}},{t:this.instance_36,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_35,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_34,p:{alpha:1,scaleX:1,scaleY:1,y:254.6}},{t:this.instance_33,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_32,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_31,p:{scaleX:1,scaleY:1,y:255.1,alpha:1}},{t:this.instance_30,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_29,p:{alpha:1,scaleX:1,scaleY:1,y:255.2}},{t:this.instance_28,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_27,p:{scaleX:1,scaleY:1,y:255.1,alpha:1}},{t:this.instance_26,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_25,p:{scaleX:1,scaleY:1,y:254.6,alpha:1}},{t:this.instance_24,p:{alpha:1,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_23,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_22,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_21,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_20,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_19,p:{alpha:1,scaleX:1,scaleY:1,y:254.8}},{t:this.instance_18,p:{scaleX:1,scaleY:1,y:254.6,alpha:1}},{t:this.instance_17,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_16,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_15,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_14,p:{alpha:1,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_13,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_12,p:{scaleX:1,scaleY:1,y:294.8,alpha:1}},{t:this.instance_11,p:{scaleX:1,scaleY:1,y:293.3,alpha:1}},{t:this.instance_10,p:{scaleX:1,scaleY:1,y:297,alpha:1}},{t:this.instance_9,p:{alpha:1,scaleX:1.333,scaleY:1.333,y:298.4}},{t:this.instance_8,p:{scaleX:1.667,scaleY:1.667,y:300,alpha:1}},{t:this.instance_7,p:{scaleX:2,scaleY:2,y:301.7,alpha:1}},{t:this.instance_6,p:{scaleX:2.333,scaleY:2.333,y:294.5,alpha:1}},{t:this.instance_5,p:{scaleX:2.667,scaleY:2.667,y:303.1,alpha:1}},{t:this.instance_4,p:{alpha:1,scaleX:3,scaleY:3,y:306.5}},{t:this.instance_3,p:{scaleX:3,scaleY:3,y:297,alpha:0}},{t:this.instance_2,p:{scaleX:3,scaleY:3,y:295.3,alpha:0}},{t:this.instance_1,p:{scaleX:3,scaleY:3,y:295.7,alpha:0}},{t:this.instance,p:{scaleX:3,scaleY:3,y:325.3,alpha:0}}]},1).to({state:[{t:this.instance_44,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_43,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_42,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_41,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_40,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_39,p:{alpha:1,scaleX:1,scaleY:1,y:266.2}},{t:this.instance_38,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_37,p:{scaleX:1,scaleY:1,y:255.2,alpha:1}},{t:this.instance_36,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_35,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_34,p:{alpha:1,scaleX:1,scaleY:1,y:254.6}},{t:this.instance_33,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_32,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_31,p:{scaleX:1,scaleY:1,y:255.1,alpha:1}},{t:this.instance_30,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_29,p:{alpha:1,scaleX:1,scaleY:1,y:255.2}},{t:this.instance_28,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_27,p:{scaleX:1,scaleY:1,y:255.1,alpha:1}},{t:this.instance_26,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_25,p:{scaleX:1,scaleY:1,y:254.6,alpha:1}},{t:this.instance_24,p:{alpha:1,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_23,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_22,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_21,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_20,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_19,p:{alpha:1,scaleX:1,scaleY:1,y:254.8}},{t:this.instance_18,p:{scaleX:1,scaleY:1,y:254.6,alpha:1}},{t:this.instance_17,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_16,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_15,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_14,p:{alpha:1,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_13,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_12,p:{scaleX:1,scaleY:1,y:294.8,alpha:1}},{t:this.instance_11,p:{scaleX:1,scaleY:1,y:293.3,alpha:1}},{t:this.instance_10,p:{scaleX:1,scaleY:1,y:297,alpha:1}},{t:this.instance_9,p:{alpha:1,scaleX:1,scaleY:1,y:296.9}},{t:this.instance_8,p:{scaleX:1,scaleY:1,y:297,alpha:1}},{t:this.instance_7,p:{scaleX:1.167,scaleY:1.167,y:297.9,alpha:1}},{t:this.instance_6,p:{scaleX:1.5,scaleY:1.5,y:293.8,alpha:1}},{t:this.instance_5,p:{scaleX:1.833,scaleY:1.833,y:299.8,alpha:1}},{t:this.instance_4,p:{alpha:1,scaleX:2.167,scaleY:2.167,y:302.6}},{t:this.instance_3,p:{scaleX:2.5,scaleY:2.5,y:296.3,alpha:1}},{t:this.instance_2,p:{scaleX:2.833,scaleY:2.833,y:295.2,alpha:1}},{t:this.instance_1,p:{scaleX:3,scaleY:3,y:295.7,alpha:0}},{t:this.instance,p:{scaleX:3,scaleY:3,y:325.3,alpha:0}}]},1).to({state:[{t:this.instance_44,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_43,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_42,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_41,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_40,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_39,p:{alpha:1,scaleX:1,scaleY:1,y:266.2}},{t:this.instance_38,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_37,p:{scaleX:1,scaleY:1,y:255.2,alpha:1}},{t:this.instance_36,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_35,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_34,p:{alpha:1,scaleX:1,scaleY:1,y:254.6}},{t:this.instance_33,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_32,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_31,p:{scaleX:1,scaleY:1,y:255.1,alpha:1}},{t:this.instance_30,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_29,p:{alpha:1,scaleX:1,scaleY:1,y:255.2}},{t:this.instance_28,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_27,p:{scaleX:1,scaleY:1,y:255.1,alpha:1}},{t:this.instance_26,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_25,p:{scaleX:1,scaleY:1,y:254.6,alpha:1}},{t:this.instance_24,p:{alpha:1,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_23,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_22,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_21,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_20,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_19,p:{alpha:1,scaleX:1,scaleY:1,y:254.8}},{t:this.instance_18,p:{scaleX:1,scaleY:1,y:254.6,alpha:1}},{t:this.instance_17,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_16,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_15,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_14,p:{alpha:1,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_13,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_12,p:{scaleX:1,scaleY:1,y:294.8,alpha:1}},{t:this.instance_11,p:{scaleX:1,scaleY:1,y:293.3,alpha:1}},{t:this.instance_10,p:{scaleX:1,scaleY:1,y:297,alpha:1}},{t:this.instance_9,p:{alpha:1,scaleX:1,scaleY:1,y:296.9}},{t:this.instance_8,p:{scaleX:1,scaleY:1,y:297,alpha:1}},{t:this.instance_7,p:{scaleX:1,scaleY:1,y:297.1,alpha:1}},{t:this.instance_6,p:{scaleX:1,scaleY:1,y:293.4,alpha:1}},{t:this.instance_5,p:{scaleX:1,scaleY:1,y:296.5,alpha:1}},{t:this.instance_4,p:{alpha:1,scaleX:1.333,scaleY:1.333,y:298.7}},{t:this.instance_3,p:{scaleX:1.667,scaleY:1.667,y:295,alpha:1}},{t:this.instance_2,p:{scaleX:2,scaleY:2,y:294.4,alpha:1}},{t:this.instance_1,p:{scaleX:2.333,scaleY:2.333,y:295,alpha:1}},{t:this.instance,p:{scaleX:2.667,scaleY:2.667,y:321.7,alpha:1}}]},1).to({state:[{t:this.instance_44,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_43,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_42,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_41,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_40,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_39,p:{alpha:1,scaleX:1,scaleY:1,y:266.2}},{t:this.instance_38,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_37,p:{scaleX:1,scaleY:1,y:255.2,alpha:1}},{t:this.instance_36,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_35,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_34,p:{alpha:1,scaleX:1,scaleY:1,y:254.6}},{t:this.instance_33,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_32,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_31,p:{scaleX:1,scaleY:1,y:255.1,alpha:1}},{t:this.instance_30,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_29,p:{alpha:1,scaleX:1,scaleY:1,y:255.2}},{t:this.instance_28,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_27,p:{scaleX:1,scaleY:1,y:255.1,alpha:1}},{t:this.instance_26,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_25,p:{scaleX:1,scaleY:1,y:254.6,alpha:1}},{t:this.instance_24,p:{alpha:1,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_23,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_22,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_21,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_20,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_19,p:{alpha:1,scaleX:1,scaleY:1,y:254.8}},{t:this.instance_18,p:{scaleX:1,scaleY:1,y:254.6,alpha:1}},{t:this.instance_17,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_16,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_15,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_14,p:{alpha:1,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_13,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_12,p:{scaleX:1,scaleY:1,y:294.8,alpha:1}},{t:this.instance_11,p:{scaleX:1,scaleY:1,y:293.3,alpha:1}},{t:this.instance_10,p:{scaleX:1,scaleY:1,y:297,alpha:1}},{t:this.instance_9,p:{alpha:1,scaleX:1,scaleY:1,y:296.9}},{t:this.instance_8,p:{scaleX:1,scaleY:1,y:297,alpha:1}},{t:this.instance_7,p:{scaleX:1,scaleY:1,y:297.1,alpha:1}},{t:this.instance_6,p:{scaleX:1,scaleY:1,y:293.4,alpha:1}},{t:this.instance_5,p:{scaleX:1,scaleY:1,y:296.5,alpha:1}},{t:this.instance_4,p:{alpha:1,scaleX:1,scaleY:1,y:297.2}},{t:this.instance_3,p:{scaleX:1,scaleY:1,y:294,alpha:1}},{t:this.instance_2,p:{scaleX:1.167,scaleY:1.167,y:293.6,alpha:1}},{t:this.instance_1,p:{scaleX:1.5,scaleY:1.5,y:294.1,alpha:1}},{t:this.instance,p:{scaleX:1.833,scaleY:1.833,y:312.6,alpha:1}}]},1).to({state:[{t:this.instance_44,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_43,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_42,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_41,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_40,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_39,p:{alpha:1,scaleX:1,scaleY:1,y:266.2}},{t:this.instance_38,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_37,p:{scaleX:1,scaleY:1,y:255.2,alpha:1}},{t:this.instance_36,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_35,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_34,p:{alpha:1,scaleX:1,scaleY:1,y:254.6}},{t:this.instance_33,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_32,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_31,p:{scaleX:1,scaleY:1,y:255.1,alpha:1}},{t:this.instance_30,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_29,p:{alpha:1,scaleX:1,scaleY:1,y:255.2}},{t:this.instance_28,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_27,p:{scaleX:1,scaleY:1,y:255.1,alpha:1}},{t:this.instance_26,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_25,p:{scaleX:1,scaleY:1,y:254.6,alpha:1}},{t:this.instance_24,p:{alpha:1,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_23,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_22,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_21,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_20,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_19,p:{alpha:1,scaleX:1,scaleY:1,y:254.8}},{t:this.instance_18,p:{scaleX:1,scaleY:1,y:254.6,alpha:1}},{t:this.instance_17,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_16,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_15,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_14,p:{alpha:1,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_13,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_12,p:{scaleX:1,scaleY:1,y:294.8,alpha:1}},{t:this.instance_11,p:{scaleX:1,scaleY:1,y:293.3,alpha:1}},{t:this.instance_10,p:{scaleX:1,scaleY:1,y:297,alpha:1}},{t:this.instance_9,p:{alpha:1,scaleX:1,scaleY:1,y:296.9}},{t:this.instance_8,p:{scaleX:1,scaleY:1,y:297,alpha:1}},{t:this.instance_7,p:{scaleX:1,scaleY:1,y:297.1,alpha:1}},{t:this.instance_6,p:{scaleX:1,scaleY:1,y:293.4,alpha:1}},{t:this.instance_5,p:{scaleX:1,scaleY:1,y:296.5,alpha:1}},{t:this.instance_4,p:{alpha:1,scaleX:1,scaleY:1,y:297.2}},{t:this.instance_3,p:{scaleX:1,scaleY:1,y:294,alpha:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,y:293.5,alpha:1}},{t:this.instance_1,p:{scaleX:1,scaleY:1,y:293.6,alpha:1}},{t:this.instance,p:{scaleX:1,scaleY:1,y:303.5,alpha:1}}]},1).to({state:[{t:this.instance_44,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_43,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_42,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_41,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_40,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_39,p:{alpha:1,scaleX:1,scaleY:1,y:266.2}},{t:this.instance_38,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_37,p:{scaleX:1,scaleY:1,y:255.2,alpha:1}},{t:this.instance_36,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_35,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_34,p:{alpha:1,scaleX:1,scaleY:1,y:254.6}},{t:this.instance_33,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_32,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_31,p:{scaleX:1,scaleY:1,y:255.1,alpha:1}},{t:this.instance_30,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_29,p:{alpha:1,scaleX:1,scaleY:1,y:255.2}},{t:this.instance_28,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_27,p:{scaleX:1,scaleY:1,y:255.1,alpha:1}},{t:this.instance_26,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_25,p:{scaleX:1,scaleY:1,y:254.6,alpha:1}},{t:this.instance_24,p:{alpha:1,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_23,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_22,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_21,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_20,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_19,p:{alpha:1,scaleX:1,scaleY:1,y:254.8}},{t:this.instance_18,p:{scaleX:1,scaleY:1,y:254.6,alpha:1}},{t:this.instance_17,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_16,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_15,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_14,p:{alpha:1,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_13,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_12,p:{scaleX:1,scaleY:1,y:294.8,alpha:1}},{t:this.instance_11,p:{scaleX:1,scaleY:1,y:293.3,alpha:1}},{t:this.instance_10,p:{scaleX:1,scaleY:1,y:297,alpha:1}},{t:this.instance_9,p:{alpha:1,scaleX:1,scaleY:1,y:296.9}},{t:this.instance_8,p:{scaleX:1,scaleY:1,y:297,alpha:1}},{t:this.instance_7,p:{scaleX:1,scaleY:1,y:297.1,alpha:1}},{t:this.instance_6,p:{scaleX:1,scaleY:1,y:293.4,alpha:1}},{t:this.instance_5,p:{scaleX:1,scaleY:1,y:296.5,alpha:1}},{t:this.instance_4,p:{alpha:1,scaleX:1,scaleY:1,y:297.2}},{t:this.instance_3,p:{scaleX:1,scaleY:1,y:294,alpha:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,y:293.5,alpha:1}},{t:this.instance_1,p:{scaleX:1,scaleY:1,y:293.6,alpha:1}},{t:this.instance,p:{scaleX:1,scaleY:1,y:303.5,alpha:1}}]},30).to({state:[{t:this.instance_44,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_43,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_42,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_41,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_40,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_39,p:{alpha:1,scaleX:1,scaleY:1,y:266.2}},{t:this.instance_38,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_37,p:{scaleX:1,scaleY:1,y:255.2,alpha:1}},{t:this.instance_36,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_35,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_34,p:{alpha:1,scaleX:1,scaleY:1,y:254.6}},{t:this.instance_33,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_32,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_31,p:{scaleX:1,scaleY:1,y:255.1,alpha:1}},{t:this.instance_30,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_29,p:{alpha:1,scaleX:1,scaleY:1,y:255.2}},{t:this.instance_28,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_27,p:{scaleX:1,scaleY:1,y:255.1,alpha:1}},{t:this.instance_26,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_25,p:{scaleX:1,scaleY:1,y:254.6,alpha:1}},{t:this.instance_24,p:{alpha:1,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_23,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_22,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_21,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_20,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_19,p:{alpha:1,scaleX:1,scaleY:1,y:254.8}},{t:this.instance_18,p:{scaleX:1,scaleY:1,y:254.6,alpha:1}},{t:this.instance_17,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_16,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_15,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_14,p:{alpha:1,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_13,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_12,p:{scaleX:1,scaleY:1,y:294.8,alpha:1}},{t:this.instance_11,p:{scaleX:1,scaleY:1,y:293.3,alpha:1}},{t:this.instance_10,p:{scaleX:1,scaleY:1,y:297,alpha:1}},{t:this.instance_9,p:{alpha:1,scaleX:1,scaleY:1,y:296.9}},{t:this.instance_8,p:{scaleX:1,scaleY:1,y:297,alpha:1}},{t:this.instance_7,p:{scaleX:1,scaleY:1,y:297.1,alpha:1}},{t:this.instance_6,p:{scaleX:1,scaleY:1,y:293.4,alpha:1}},{t:this.instance_5,p:{scaleX:1,scaleY:1,y:296.5,alpha:1}},{t:this.instance_4,p:{alpha:1,scaleX:1,scaleY:1,y:297.2}},{t:this.instance_3,p:{scaleX:1,scaleY:1,y:294,alpha:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,y:293.5,alpha:1}},{t:this.instance_1,p:{scaleX:1,scaleY:1,y:293.6,alpha:1}},{t:this.instance,p:{scaleX:1,scaleY:1,y:303.5,alpha:1}}]},1).to({state:[{t:this.instance_44,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_43,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_42,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_41,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_40,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_39,p:{alpha:1,scaleX:1,scaleY:1,y:266.2}},{t:this.instance_38,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_37,p:{scaleX:1,scaleY:1,y:255.2,alpha:1}},{t:this.instance_36,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_35,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_34,p:{alpha:1,scaleX:1,scaleY:1,y:254.6}},{t:this.instance_33,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_32,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_31,p:{scaleX:1,scaleY:1,y:255.1,alpha:1}},{t:this.instance_30,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_29,p:{alpha:1,scaleX:1,scaleY:1,y:255.2}},{t:this.instance_28,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_27,p:{scaleX:1,scaleY:1,y:255.1,alpha:1}},{t:this.instance_26,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_25,p:{scaleX:1,scaleY:1,y:254.6,alpha:1}},{t:this.instance_24,p:{alpha:1,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_23,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_22,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_21,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_20,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_19,p:{alpha:1,scaleX:1,scaleY:1,y:254.8}},{t:this.instance_18,p:{scaleX:1,scaleY:1,y:254.6,alpha:1}},{t:this.instance_17,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_16,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_15,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_14,p:{alpha:1,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_13,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_12,p:{scaleX:1,scaleY:1,y:294.8,alpha:1}},{t:this.instance_11,p:{scaleX:1,scaleY:1,y:293.3,alpha:1}},{t:this.instance_10,p:{scaleX:1,scaleY:1,y:297,alpha:1}},{t:this.instance_9,p:{alpha:1,scaleX:1,scaleY:1,y:296.9}},{t:this.instance_8,p:{scaleX:1,scaleY:1,y:297,alpha:1}},{t:this.instance_7,p:{scaleX:1,scaleY:1,y:297.1,alpha:1}},{t:this.instance_6,p:{scaleX:1,scaleY:1,y:293.4,alpha:1}},{t:this.instance_5,p:{scaleX:1,scaleY:1,y:296.5,alpha:1}},{t:this.instance_4,p:{alpha:1,scaleX:1,scaleY:1,y:297.2}},{t:this.instance_3,p:{scaleX:1,scaleY:1,y:294,alpha:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,y:293.5,alpha:1}},{t:this.instance_1,p:{scaleX:1,scaleY:1,y:293.6,alpha:1}},{t:this.instance,p:{scaleX:1,scaleY:1,y:303.5,alpha:1}}]},1).to({state:[{t:this.instance_44,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_43,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_42,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_41,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_40,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_39,p:{alpha:1,scaleX:1,scaleY:1,y:266.2}},{t:this.instance_38,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_37,p:{scaleX:1,scaleY:1,y:255.2,alpha:1}},{t:this.instance_36,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_35,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_34,p:{alpha:1,scaleX:1,scaleY:1,y:254.6}},{t:this.instance_33,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_32,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_31,p:{scaleX:1,scaleY:1,y:255.1,alpha:1}},{t:this.instance_30,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_29,p:{alpha:1,scaleX:1,scaleY:1,y:255.2}},{t:this.instance_28,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_27,p:{scaleX:1,scaleY:1,y:255.1,alpha:1}},{t:this.instance_26,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_25,p:{scaleX:1,scaleY:1,y:254.6,alpha:1}},{t:this.instance_24,p:{alpha:1,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_23,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_22,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_21,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_20,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_19,p:{alpha:1,scaleX:1,scaleY:1,y:254.8}},{t:this.instance_18,p:{scaleX:1,scaleY:1,y:254.6,alpha:1}},{t:this.instance_17,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_16,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_15,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_14,p:{alpha:1,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_13,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_12,p:{scaleX:1,scaleY:1,y:294.8,alpha:1}},{t:this.instance_11,p:{scaleX:1,scaleY:1,y:293.3,alpha:1}},{t:this.instance_10,p:{scaleX:1,scaleY:1,y:297,alpha:1}},{t:this.instance_9,p:{alpha:1,scaleX:1,scaleY:1,y:296.9}},{t:this.instance_8,p:{scaleX:1,scaleY:1,y:297,alpha:1}},{t:this.instance_7,p:{scaleX:1,scaleY:1,y:297.1,alpha:1}},{t:this.instance_6,p:{scaleX:1,scaleY:1,y:293.4,alpha:1}},{t:this.instance_5,p:{scaleX:1,scaleY:1,y:296.5,alpha:1}},{t:this.instance_4,p:{alpha:1,scaleX:1,scaleY:1,y:297.2}},{t:this.instance_3,p:{scaleX:1,scaleY:1,y:294,alpha:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,y:293.5,alpha:1}},{t:this.instance_1,p:{scaleX:1,scaleY:1,y:293.6,alpha:1}},{t:this.instance,p:{scaleX:1,scaleY:1,y:303.5,alpha:1}}]},1).to({state:[{t:this.instance_44,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_43,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_42,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_41,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_40,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_39,p:{alpha:1,scaleX:1,scaleY:1,y:266.2}},{t:this.instance_38,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_37,p:{scaleX:1,scaleY:1,y:255.2,alpha:1}},{t:this.instance_36,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_35,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_34,p:{alpha:1,scaleX:1,scaleY:1,y:254.6}},{t:this.instance_33,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_32,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_31,p:{scaleX:1,scaleY:1,y:255.1,alpha:1}},{t:this.instance_30,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_29,p:{alpha:1,scaleX:1,scaleY:1,y:255.2}},{t:this.instance_28,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_27,p:{scaleX:1,scaleY:1,y:255.1,alpha:1}},{t:this.instance_26,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_25,p:{scaleX:1,scaleY:1,y:254.6,alpha:1}},{t:this.instance_24,p:{alpha:1,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_23,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_22,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_21,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_20,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_19,p:{alpha:1,scaleX:1,scaleY:1,y:254.8}},{t:this.instance_18,p:{scaleX:1,scaleY:1,y:254.6,alpha:1}},{t:this.instance_17,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_16,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_15,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_14,p:{alpha:1,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_13,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_12,p:{scaleX:1,scaleY:1,y:294.8,alpha:1}},{t:this.instance_11,p:{scaleX:1,scaleY:1,y:293.3,alpha:1}},{t:this.instance_10,p:{scaleX:1,scaleY:1,y:297,alpha:1}},{t:this.instance_9,p:{alpha:1,scaleX:1,scaleY:1,y:296.9}},{t:this.instance_8,p:{scaleX:1,scaleY:1,y:297,alpha:1}},{t:this.instance_7,p:{scaleX:1,scaleY:1,y:297.1,alpha:1}},{t:this.instance_6,p:{scaleX:1,scaleY:1,y:293.4,alpha:1}},{t:this.instance_5,p:{scaleX:1,scaleY:1,y:296.5,alpha:1}},{t:this.instance_4,p:{alpha:1,scaleX:1,scaleY:1,y:297.2}},{t:this.instance_3,p:{scaleX:1,scaleY:1,y:294,alpha:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,y:293.5,alpha:1}},{t:this.instance_1,p:{scaleX:1,scaleY:1,y:293.6,alpha:1}},{t:this.instance,p:{scaleX:1,scaleY:1,y:303.5,alpha:1}}]},1).to({state:[{t:this.instance_44,p:{scaleX:1,scaleY:1,y:254.4,alpha:0.898}},{t:this.instance_43,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.898}},{t:this.instance_42,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.898}},{t:this.instance_41,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.898}},{t:this.instance_40,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.898}},{t:this.instance_39,p:{alpha:0.898,scaleX:1,scaleY:1,y:266.2}},{t:this.instance_38,p:{scaleX:1,scaleY:1,y:254.8,alpha:0.898}},{t:this.instance_37,p:{scaleX:1,scaleY:1,y:255.2,alpha:0.898}},{t:this.instance_36,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.898}},{t:this.instance_35,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.898}},{t:this.instance_34,p:{alpha:0.898,scaleX:1,scaleY:1,y:254.6}},{t:this.instance_33,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.898}},{t:this.instance_32,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.898}},{t:this.instance_31,p:{scaleX:1,scaleY:1,y:255.1,alpha:0.898}},{t:this.instance_30,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.898}},{t:this.instance_29,p:{alpha:0.898,scaleX:1,scaleY:1,y:255.2}},{t:this.instance_28,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.898}},{t:this.instance_27,p:{scaleX:1,scaleY:1,y:255.1,alpha:0.898}},{t:this.instance_26,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.898}},{t:this.instance_25,p:{scaleX:1,scaleY:1,y:254.6,alpha:0.898}},{t:this.instance_24,p:{alpha:0.898,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_23,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.898}},{t:this.instance_22,p:{scaleX:1,scaleY:1,y:254.4,alpha:0.898}},{t:this.instance_21,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.898}},{t:this.instance_20,p:{scaleX:1,scaleY:1,y:254.8,alpha:0.898}},{t:this.instance_19,p:{alpha:0.898,scaleX:1,scaleY:1,y:254.8}},{t:this.instance_18,p:{scaleX:1,scaleY:1,y:254.6,alpha:0.898}},{t:this.instance_17,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.898}},{t:this.instance_16,p:{scaleX:1,scaleY:1,y:254.4,alpha:0.898}},{t:this.instance_15,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.898}},{t:this.instance_14,p:{alpha:0.898,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_13,p:{scaleX:1,scaleY:1,y:254.8,alpha:0.898}},{t:this.instance_12,p:{scaleX:1,scaleY:1,y:294.8,alpha:0.898}},{t:this.instance_11,p:{scaleX:1,scaleY:1,y:293.3,alpha:0.898}},{t:this.instance_10,p:{scaleX:1,scaleY:1,y:297,alpha:0.898}},{t:this.instance_9,p:{alpha:0.898,scaleX:1,scaleY:1,y:296.9}},{t:this.instance_8,p:{scaleX:1,scaleY:1,y:297,alpha:0.898}},{t:this.instance_7,p:{scaleX:1,scaleY:1,y:297.1,alpha:0.898}},{t:this.instance_6,p:{scaleX:1,scaleY:1,y:293.4,alpha:0.898}},{t:this.instance_5,p:{scaleX:1,scaleY:1,y:296.5,alpha:0.898}},{t:this.instance_4,p:{alpha:0.898,scaleX:1,scaleY:1,y:297.2}},{t:this.instance_3,p:{scaleX:1,scaleY:1,y:294,alpha:0.898}},{t:this.instance_2,p:{scaleX:1,scaleY:1,y:293.5,alpha:0.898}},{t:this.instance_1,p:{scaleX:1,scaleY:1,y:293.6,alpha:0.898}},{t:this.instance,p:{scaleX:1,scaleY:1,y:303.5,alpha:0.898}}]},1).to({state:[{t:this.instance_44,p:{scaleX:1,scaleY:1,y:254.4,alpha:0.801}},{t:this.instance_43,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.801}},{t:this.instance_42,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.801}},{t:this.instance_41,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.801}},{t:this.instance_40,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.801}},{t:this.instance_39,p:{alpha:0.801,scaleX:1,scaleY:1,y:266.2}},{t:this.instance_38,p:{scaleX:1,scaleY:1,y:254.8,alpha:0.801}},{t:this.instance_37,p:{scaleX:1,scaleY:1,y:255.2,alpha:0.801}},{t:this.instance_36,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.801}},{t:this.instance_35,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.801}},{t:this.instance_34,p:{alpha:0.801,scaleX:1,scaleY:1,y:254.6}},{t:this.instance_33,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.801}},{t:this.instance_32,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.801}},{t:this.instance_31,p:{scaleX:1,scaleY:1,y:255.1,alpha:0.801}},{t:this.instance_30,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.801}},{t:this.instance_29,p:{alpha:0.801,scaleX:1,scaleY:1,y:255.2}},{t:this.instance_28,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.801}},{t:this.instance_27,p:{scaleX:1,scaleY:1,y:255.1,alpha:0.801}},{t:this.instance_26,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.801}},{t:this.instance_25,p:{scaleX:1,scaleY:1,y:254.6,alpha:0.801}},{t:this.instance_24,p:{alpha:0.801,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_23,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.801}},{t:this.instance_22,p:{scaleX:1,scaleY:1,y:254.4,alpha:0.801}},{t:this.instance_21,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.801}},{t:this.instance_20,p:{scaleX:1,scaleY:1,y:254.8,alpha:0.801}},{t:this.instance_19,p:{alpha:0.801,scaleX:1,scaleY:1,y:254.8}},{t:this.instance_18,p:{scaleX:1,scaleY:1,y:254.6,alpha:0.801}},{t:this.instance_17,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.801}},{t:this.instance_16,p:{scaleX:1,scaleY:1,y:254.4,alpha:0.801}},{t:this.instance_15,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.801}},{t:this.instance_14,p:{alpha:0.801,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_13,p:{scaleX:1,scaleY:1,y:254.8,alpha:0.801}},{t:this.instance_12,p:{scaleX:1,scaleY:1,y:294.8,alpha:0.801}},{t:this.instance_11,p:{scaleX:1,scaleY:1,y:293.3,alpha:0.801}},{t:this.instance_10,p:{scaleX:1,scaleY:1,y:297,alpha:0.801}},{t:this.instance_9,p:{alpha:0.801,scaleX:1,scaleY:1,y:296.9}},{t:this.instance_8,p:{scaleX:1,scaleY:1,y:297,alpha:0.801}},{t:this.instance_7,p:{scaleX:1,scaleY:1,y:297.1,alpha:0.801}},{t:this.instance_6,p:{scaleX:1,scaleY:1,y:293.4,alpha:0.801}},{t:this.instance_5,p:{scaleX:1,scaleY:1,y:296.5,alpha:0.801}},{t:this.instance_4,p:{alpha:0.801,scaleX:1,scaleY:1,y:297.2}},{t:this.instance_3,p:{scaleX:1,scaleY:1,y:294,alpha:0.801}},{t:this.instance_2,p:{scaleX:1,scaleY:1,y:293.5,alpha:0.801}},{t:this.instance_1,p:{scaleX:1,scaleY:1,y:293.6,alpha:0.801}},{t:this.instance,p:{scaleX:1,scaleY:1,y:303.5,alpha:0.801}}]},1).to({state:[{t:this.instance_44,p:{scaleX:1,scaleY:1,y:254.4,alpha:0.699}},{t:this.instance_43,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.699}},{t:this.instance_42,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.699}},{t:this.instance_41,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.699}},{t:this.instance_40,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.699}},{t:this.instance_39,p:{alpha:0.699,scaleX:1,scaleY:1,y:266.2}},{t:this.instance_38,p:{scaleX:1,scaleY:1,y:254.8,alpha:0.699}},{t:this.instance_37,p:{scaleX:1,scaleY:1,y:255.2,alpha:0.699}},{t:this.instance_36,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.699}},{t:this.instance_35,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.699}},{t:this.instance_34,p:{alpha:0.699,scaleX:1,scaleY:1,y:254.6}},{t:this.instance_33,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.699}},{t:this.instance_32,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.699}},{t:this.instance_31,p:{scaleX:1,scaleY:1,y:255.1,alpha:0.699}},{t:this.instance_30,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.699}},{t:this.instance_29,p:{alpha:0.699,scaleX:1,scaleY:1,y:255.2}},{t:this.instance_28,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.699}},{t:this.instance_27,p:{scaleX:1,scaleY:1,y:255.1,alpha:0.699}},{t:this.instance_26,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.699}},{t:this.instance_25,p:{scaleX:1,scaleY:1,y:254.6,alpha:0.699}},{t:this.instance_24,p:{alpha:0.699,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_23,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.699}},{t:this.instance_22,p:{scaleX:1,scaleY:1,y:254.4,alpha:0.699}},{t:this.instance_21,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.699}},{t:this.instance_20,p:{scaleX:1,scaleY:1,y:254.8,alpha:0.699}},{t:this.instance_19,p:{alpha:0.699,scaleX:1,scaleY:1,y:254.8}},{t:this.instance_18,p:{scaleX:1,scaleY:1,y:254.6,alpha:0.699}},{t:this.instance_17,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.699}},{t:this.instance_16,p:{scaleX:1,scaleY:1,y:254.4,alpha:0.699}},{t:this.instance_15,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.699}},{t:this.instance_14,p:{alpha:0.699,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_13,p:{scaleX:1,scaleY:1,y:254.8,alpha:0.699}},{t:this.instance_12,p:{scaleX:1,scaleY:1,y:294.8,alpha:0.699}},{t:this.instance_11,p:{scaleX:1,scaleY:1,y:293.3,alpha:0.699}},{t:this.instance_10,p:{scaleX:1,scaleY:1,y:297,alpha:0.699}},{t:this.instance_9,p:{alpha:0.699,scaleX:1,scaleY:1,y:296.9}},{t:this.instance_8,p:{scaleX:1,scaleY:1,y:297,alpha:0.699}},{t:this.instance_7,p:{scaleX:1,scaleY:1,y:297.1,alpha:0.699}},{t:this.instance_6,p:{scaleX:1,scaleY:1,y:293.4,alpha:0.699}},{t:this.instance_5,p:{scaleX:1,scaleY:1,y:296.5,alpha:0.699}},{t:this.instance_4,p:{alpha:0.699,scaleX:1,scaleY:1,y:297.2}},{t:this.instance_3,p:{scaleX:1,scaleY:1,y:294,alpha:0.699}},{t:this.instance_2,p:{scaleX:1,scaleY:1,y:293.5,alpha:0.699}},{t:this.instance_1,p:{scaleX:1,scaleY:1,y:293.6,alpha:0.699}},{t:this.instance,p:{scaleX:1,scaleY:1,y:303.5,alpha:0.699}}]},1).to({state:[{t:this.instance_44,p:{scaleX:1,scaleY:1,y:254.4,alpha:0.602}},{t:this.instance_43,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.602}},{t:this.instance_42,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.602}},{t:this.instance_41,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.602}},{t:this.instance_40,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.602}},{t:this.instance_39,p:{alpha:0.602,scaleX:1,scaleY:1,y:266.2}},{t:this.instance_38,p:{scaleX:1,scaleY:1,y:254.8,alpha:0.602}},{t:this.instance_37,p:{scaleX:1,scaleY:1,y:255.2,alpha:0.602}},{t:this.instance_36,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.602}},{t:this.instance_35,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.602}},{t:this.instance_34,p:{alpha:0.602,scaleX:1,scaleY:1,y:254.6}},{t:this.instance_33,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.602}},{t:this.instance_32,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.602}},{t:this.instance_31,p:{scaleX:1,scaleY:1,y:255.1,alpha:0.602}},{t:this.instance_30,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.602}},{t:this.instance_29,p:{alpha:0.602,scaleX:1,scaleY:1,y:255.2}},{t:this.instance_28,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.602}},{t:this.instance_27,p:{scaleX:1,scaleY:1,y:255.1,alpha:0.602}},{t:this.instance_26,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.602}},{t:this.instance_25,p:{scaleX:1,scaleY:1,y:254.6,alpha:0.602}},{t:this.instance_24,p:{alpha:0.602,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_23,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.602}},{t:this.instance_22,p:{scaleX:1,scaleY:1,y:254.4,alpha:0.602}},{t:this.instance_21,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.602}},{t:this.instance_20,p:{scaleX:1,scaleY:1,y:254.8,alpha:0.602}},{t:this.instance_19,p:{alpha:0.602,scaleX:1,scaleY:1,y:254.8}},{t:this.instance_18,p:{scaleX:1,scaleY:1,y:254.6,alpha:0.602}},{t:this.instance_17,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.602}},{t:this.instance_16,p:{scaleX:1,scaleY:1,y:254.4,alpha:0.602}},{t:this.instance_15,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.602}},{t:this.instance_14,p:{alpha:0.602,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_13,p:{scaleX:1,scaleY:1,y:254.8,alpha:0.602}},{t:this.instance_12,p:{scaleX:1,scaleY:1,y:294.8,alpha:0.602}},{t:this.instance_11,p:{scaleX:1,scaleY:1,y:293.3,alpha:0.602}},{t:this.instance_10,p:{scaleX:1,scaleY:1,y:297,alpha:0.602}},{t:this.instance_9,p:{alpha:0.602,scaleX:1,scaleY:1,y:296.9}},{t:this.instance_8,p:{scaleX:1,scaleY:1,y:297,alpha:0.602}},{t:this.instance_7,p:{scaleX:1,scaleY:1,y:297.1,alpha:0.602}},{t:this.instance_6,p:{scaleX:1,scaleY:1,y:293.4,alpha:0.602}},{t:this.instance_5,p:{scaleX:1,scaleY:1,y:296.5,alpha:0.602}},{t:this.instance_4,p:{alpha:0.602,scaleX:1,scaleY:1,y:297.2}},{t:this.instance_3,p:{scaleX:1,scaleY:1,y:294,alpha:0.602}},{t:this.instance_2,p:{scaleX:1,scaleY:1,y:293.5,alpha:0.602}},{t:this.instance_1,p:{scaleX:1,scaleY:1,y:293.6,alpha:0.602}},{t:this.instance,p:{scaleX:1,scaleY:1,y:303.5,alpha:0.602}}]},1).to({state:[{t:this.instance_44,p:{scaleX:1,scaleY:1,y:254.4,alpha:0.5}},{t:this.instance_43,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.5}},{t:this.instance_42,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.5}},{t:this.instance_41,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.5}},{t:this.instance_40,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.5}},{t:this.instance_39,p:{alpha:0.5,scaleX:1,scaleY:1,y:266.2}},{t:this.instance_38,p:{scaleX:1,scaleY:1,y:254.8,alpha:0.5}},{t:this.instance_37,p:{scaleX:1,scaleY:1,y:255.2,alpha:0.5}},{t:this.instance_36,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.5}},{t:this.instance_35,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.5}},{t:this.instance_34,p:{alpha:0.5,scaleX:1,scaleY:1,y:254.6}},{t:this.instance_33,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.5}},{t:this.instance_32,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.5}},{t:this.instance_31,p:{scaleX:1,scaleY:1,y:255.1,alpha:0.5}},{t:this.instance_30,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.5}},{t:this.instance_29,p:{alpha:0.5,scaleX:1,scaleY:1,y:255.2}},{t:this.instance_28,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.5}},{t:this.instance_27,p:{scaleX:1,scaleY:1,y:255.1,alpha:0.5}},{t:this.instance_26,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.5}},{t:this.instance_25,p:{scaleX:1,scaleY:1,y:254.6,alpha:0.5}},{t:this.instance_24,p:{alpha:0.5,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_23,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.5}},{t:this.instance_22,p:{scaleX:1,scaleY:1,y:254.4,alpha:0.5}},{t:this.instance_21,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.5}},{t:this.instance_20,p:{scaleX:1,scaleY:1,y:254.8,alpha:0.5}},{t:this.instance_19,p:{alpha:0.5,scaleX:1,scaleY:1,y:254.8}},{t:this.instance_18,p:{scaleX:1,scaleY:1,y:254.6,alpha:0.5}},{t:this.instance_17,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.5}},{t:this.instance_16,p:{scaleX:1,scaleY:1,y:254.4,alpha:0.5}},{t:this.instance_15,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.5}},{t:this.instance_14,p:{alpha:0.5,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_13,p:{scaleX:1,scaleY:1,y:254.8,alpha:0.5}},{t:this.instance_12,p:{scaleX:1,scaleY:1,y:294.8,alpha:0.5}},{t:this.instance_11,p:{scaleX:1,scaleY:1,y:293.3,alpha:0.5}},{t:this.instance_10,p:{scaleX:1,scaleY:1,y:297,alpha:0.5}},{t:this.instance_9,p:{alpha:0.5,scaleX:1,scaleY:1,y:296.9}},{t:this.instance_8,p:{scaleX:1,scaleY:1,y:297,alpha:0.5}},{t:this.instance_7,p:{scaleX:1,scaleY:1,y:297.1,alpha:0.5}},{t:this.instance_6,p:{scaleX:1,scaleY:1,y:293.4,alpha:0.5}},{t:this.instance_5,p:{scaleX:1,scaleY:1,y:296.5,alpha:0.5}},{t:this.instance_4,p:{alpha:0.5,scaleX:1,scaleY:1,y:297.2}},{t:this.instance_3,p:{scaleX:1,scaleY:1,y:294,alpha:0.5}},{t:this.instance_2,p:{scaleX:1,scaleY:1,y:293.5,alpha:0.5}},{t:this.instance_1,p:{scaleX:1,scaleY:1,y:293.6,alpha:0.5}},{t:this.instance,p:{scaleX:1,scaleY:1,y:303.5,alpha:0.5}}]},1).to({state:[{t:this.instance_44,p:{scaleX:1,scaleY:1,y:254.4,alpha:0.398}},{t:this.instance_43,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.398}},{t:this.instance_42,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.398}},{t:this.instance_41,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.398}},{t:this.instance_40,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.398}},{t:this.instance_39,p:{alpha:0.398,scaleX:1,scaleY:1,y:266.2}},{t:this.instance_38,p:{scaleX:1,scaleY:1,y:254.8,alpha:0.398}},{t:this.instance_37,p:{scaleX:1,scaleY:1,y:255.2,alpha:0.398}},{t:this.instance_36,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.398}},{t:this.instance_35,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.398}},{t:this.instance_34,p:{alpha:0.398,scaleX:1,scaleY:1,y:254.6}},{t:this.instance_33,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.398}},{t:this.instance_32,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.398}},{t:this.instance_31,p:{scaleX:1,scaleY:1,y:255.1,alpha:0.398}},{t:this.instance_30,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.398}},{t:this.instance_29,p:{alpha:0.398,scaleX:1,scaleY:1,y:255.2}},{t:this.instance_28,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.398}},{t:this.instance_27,p:{scaleX:1,scaleY:1,y:255.1,alpha:0.398}},{t:this.instance_26,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.398}},{t:this.instance_25,p:{scaleX:1,scaleY:1,y:254.6,alpha:0.398}},{t:this.instance_24,p:{alpha:0.398,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_23,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.398}},{t:this.instance_22,p:{scaleX:1,scaleY:1,y:254.4,alpha:0.398}},{t:this.instance_21,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.398}},{t:this.instance_20,p:{scaleX:1,scaleY:1,y:254.8,alpha:0.398}},{t:this.instance_19,p:{alpha:0.398,scaleX:1,scaleY:1,y:254.8}},{t:this.instance_18,p:{scaleX:1,scaleY:1,y:254.6,alpha:0.398}},{t:this.instance_17,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.398}},{t:this.instance_16,p:{scaleX:1,scaleY:1,y:254.4,alpha:0.398}},{t:this.instance_15,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.398}},{t:this.instance_14,p:{alpha:0.398,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_13,p:{scaleX:1,scaleY:1,y:254.8,alpha:0.398}},{t:this.instance_12,p:{scaleX:1,scaleY:1,y:294.8,alpha:0.398}},{t:this.instance_11,p:{scaleX:1,scaleY:1,y:293.3,alpha:0.398}},{t:this.instance_10,p:{scaleX:1,scaleY:1,y:297,alpha:0.398}},{t:this.instance_9,p:{alpha:0.398,scaleX:1,scaleY:1,y:296.9}},{t:this.instance_8,p:{scaleX:1,scaleY:1,y:297,alpha:0.398}},{t:this.instance_7,p:{scaleX:1,scaleY:1,y:297.1,alpha:0.398}},{t:this.instance_6,p:{scaleX:1,scaleY:1,y:293.4,alpha:0.398}},{t:this.instance_5,p:{scaleX:1,scaleY:1,y:296.5,alpha:0.398}},{t:this.instance_4,p:{alpha:0.398,scaleX:1,scaleY:1,y:297.2}},{t:this.instance_3,p:{scaleX:1,scaleY:1,y:294,alpha:0.398}},{t:this.instance_2,p:{scaleX:1,scaleY:1,y:293.5,alpha:0.398}},{t:this.instance_1,p:{scaleX:1,scaleY:1,y:293.6,alpha:0.398}},{t:this.instance,p:{scaleX:1,scaleY:1,y:303.5,alpha:0.398}}]},1).to({state:[{t:this.instance_44,p:{scaleX:1,scaleY:1,y:254.4,alpha:0.301}},{t:this.instance_43,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.301}},{t:this.instance_42,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.301}},{t:this.instance_41,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.301}},{t:this.instance_40,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.301}},{t:this.instance_39,p:{alpha:0.301,scaleX:1,scaleY:1,y:266.2}},{t:this.instance_38,p:{scaleX:1,scaleY:1,y:254.8,alpha:0.301}},{t:this.instance_37,p:{scaleX:1,scaleY:1,y:255.2,alpha:0.301}},{t:this.instance_36,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.301}},{t:this.instance_35,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.301}},{t:this.instance_34,p:{alpha:0.301,scaleX:1,scaleY:1,y:254.6}},{t:this.instance_33,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.301}},{t:this.instance_32,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.301}},{t:this.instance_31,p:{scaleX:1,scaleY:1,y:255.1,alpha:0.301}},{t:this.instance_30,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.301}},{t:this.instance_29,p:{alpha:0.301,scaleX:1,scaleY:1,y:255.2}},{t:this.instance_28,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.301}},{t:this.instance_27,p:{scaleX:1,scaleY:1,y:255.1,alpha:0.301}},{t:this.instance_26,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.301}},{t:this.instance_25,p:{scaleX:1,scaleY:1,y:254.6,alpha:0.301}},{t:this.instance_24,p:{alpha:0.301,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_23,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.301}},{t:this.instance_22,p:{scaleX:1,scaleY:1,y:254.4,alpha:0.301}},{t:this.instance_21,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.301}},{t:this.instance_20,p:{scaleX:1,scaleY:1,y:254.8,alpha:0.301}},{t:this.instance_19,p:{alpha:0.301,scaleX:1,scaleY:1,y:254.8}},{t:this.instance_18,p:{scaleX:1,scaleY:1,y:254.6,alpha:0.301}},{t:this.instance_17,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.301}},{t:this.instance_16,p:{scaleX:1,scaleY:1,y:254.4,alpha:0.301}},{t:this.instance_15,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.301}},{t:this.instance_14,p:{alpha:0.301,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_13,p:{scaleX:1,scaleY:1,y:254.8,alpha:0.301}},{t:this.instance_12,p:{scaleX:1,scaleY:1,y:294.8,alpha:0.301}},{t:this.instance_11,p:{scaleX:1,scaleY:1,y:293.3,alpha:0.301}},{t:this.instance_10,p:{scaleX:1,scaleY:1,y:297,alpha:0.301}},{t:this.instance_9,p:{alpha:0.301,scaleX:1,scaleY:1,y:296.9}},{t:this.instance_8,p:{scaleX:1,scaleY:1,y:297,alpha:0.301}},{t:this.instance_7,p:{scaleX:1,scaleY:1,y:297.1,alpha:0.301}},{t:this.instance_6,p:{scaleX:1,scaleY:1,y:293.4,alpha:0.301}},{t:this.instance_5,p:{scaleX:1,scaleY:1,y:296.5,alpha:0.301}},{t:this.instance_4,p:{alpha:0.301,scaleX:1,scaleY:1,y:297.2}},{t:this.instance_3,p:{scaleX:1,scaleY:1,y:294,alpha:0.301}},{t:this.instance_2,p:{scaleX:1,scaleY:1,y:293.5,alpha:0.301}},{t:this.instance_1,p:{scaleX:1,scaleY:1,y:293.6,alpha:0.301}},{t:this.instance,p:{scaleX:1,scaleY:1,y:303.5,alpha:0.301}}]},1).to({state:[{t:this.instance_44,p:{scaleX:1,scaleY:1,y:254.4,alpha:0.199}},{t:this.instance_43,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.199}},{t:this.instance_42,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.199}},{t:this.instance_41,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.199}},{t:this.instance_40,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.199}},{t:this.instance_39,p:{alpha:0.199,scaleX:1,scaleY:1,y:266.2}},{t:this.instance_38,p:{scaleX:1,scaleY:1,y:254.8,alpha:0.199}},{t:this.instance_37,p:{scaleX:1,scaleY:1,y:255.2,alpha:0.199}},{t:this.instance_36,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.199}},{t:this.instance_35,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.199}},{t:this.instance_34,p:{alpha:0.199,scaleX:1,scaleY:1,y:254.6}},{t:this.instance_33,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.199}},{t:this.instance_32,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.199}},{t:this.instance_31,p:{scaleX:1,scaleY:1,y:255.1,alpha:0.199}},{t:this.instance_30,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.199}},{t:this.instance_29,p:{alpha:0.199,scaleX:1,scaleY:1,y:255.2}},{t:this.instance_28,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.199}},{t:this.instance_27,p:{scaleX:1,scaleY:1,y:255.1,alpha:0.199}},{t:this.instance_26,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.199}},{t:this.instance_25,p:{scaleX:1,scaleY:1,y:254.6,alpha:0.199}},{t:this.instance_24,p:{alpha:0.199,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_23,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.199}},{t:this.instance_22,p:{scaleX:1,scaleY:1,y:254.4,alpha:0.199}},{t:this.instance_21,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.199}},{t:this.instance_20,p:{scaleX:1,scaleY:1,y:254.8,alpha:0.199}},{t:this.instance_19,p:{alpha:0.199,scaleX:1,scaleY:1,y:254.8}},{t:this.instance_18,p:{scaleX:1,scaleY:1,y:254.6,alpha:0.199}},{t:this.instance_17,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.199}},{t:this.instance_16,p:{scaleX:1,scaleY:1,y:254.4,alpha:0.199}},{t:this.instance_15,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.199}},{t:this.instance_14,p:{alpha:0.199,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_13,p:{scaleX:1,scaleY:1,y:254.8,alpha:0.199}},{t:this.instance_12,p:{scaleX:1,scaleY:1,y:294.8,alpha:0.199}},{t:this.instance_11,p:{scaleX:1,scaleY:1,y:293.3,alpha:0.199}},{t:this.instance_10,p:{scaleX:1,scaleY:1,y:297,alpha:0.199}},{t:this.instance_9,p:{alpha:0.199,scaleX:1,scaleY:1,y:296.9}},{t:this.instance_8,p:{scaleX:1,scaleY:1,y:297,alpha:0.199}},{t:this.instance_7,p:{scaleX:1,scaleY:1,y:297.1,alpha:0.199}},{t:this.instance_6,p:{scaleX:1,scaleY:1,y:293.4,alpha:0.199}},{t:this.instance_5,p:{scaleX:1,scaleY:1,y:296.5,alpha:0.199}},{t:this.instance_4,p:{alpha:0.199,scaleX:1,scaleY:1,y:297.2}},{t:this.instance_3,p:{scaleX:1,scaleY:1,y:294,alpha:0.199}},{t:this.instance_2,p:{scaleX:1,scaleY:1,y:293.5,alpha:0.199}},{t:this.instance_1,p:{scaleX:1,scaleY:1,y:293.6,alpha:0.199}},{t:this.instance,p:{scaleX:1,scaleY:1,y:303.5,alpha:0.199}}]},1).to({state:[{t:this.instance_44,p:{scaleX:1,scaleY:1,y:254.4,alpha:0.102}},{t:this.instance_43,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.102}},{t:this.instance_42,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.102}},{t:this.instance_41,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.102}},{t:this.instance_40,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.102}},{t:this.instance_39,p:{alpha:0.102,scaleX:1,scaleY:1,y:266.2}},{t:this.instance_38,p:{scaleX:1,scaleY:1,y:254.8,alpha:0.102}},{t:this.instance_37,p:{scaleX:1,scaleY:1,y:255.2,alpha:0.102}},{t:this.instance_36,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.102}},{t:this.instance_35,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.102}},{t:this.instance_34,p:{alpha:0.102,scaleX:1,scaleY:1,y:254.6}},{t:this.instance_33,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.102}},{t:this.instance_32,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.102}},{t:this.instance_31,p:{scaleX:1,scaleY:1,y:255.1,alpha:0.102}},{t:this.instance_30,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.102}},{t:this.instance_29,p:{alpha:0.102,scaleX:1,scaleY:1,y:255.2}},{t:this.instance_28,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.102}},{t:this.instance_27,p:{scaleX:1,scaleY:1,y:255.1,alpha:0.102}},{t:this.instance_26,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.102}},{t:this.instance_25,p:{scaleX:1,scaleY:1,y:254.6,alpha:0.102}},{t:this.instance_24,p:{alpha:0.102,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_23,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.102}},{t:this.instance_22,p:{scaleX:1,scaleY:1,y:254.4,alpha:0.102}},{t:this.instance_21,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.102}},{t:this.instance_20,p:{scaleX:1,scaleY:1,y:254.8,alpha:0.102}},{t:this.instance_19,p:{alpha:0.102,scaleX:1,scaleY:1,y:254.8}},{t:this.instance_18,p:{scaleX:1,scaleY:1,y:254.6,alpha:0.102}},{t:this.instance_17,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.102}},{t:this.instance_16,p:{scaleX:1,scaleY:1,y:254.4,alpha:0.102}},{t:this.instance_15,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.102}},{t:this.instance_14,p:{alpha:0.102,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_13,p:{scaleX:1,scaleY:1,y:254.8,alpha:0.102}},{t:this.instance_12,p:{scaleX:1,scaleY:1,y:294.8,alpha:0.102}},{t:this.instance_11,p:{scaleX:1,scaleY:1,y:293.3,alpha:0.102}},{t:this.instance_10,p:{scaleX:1,scaleY:1,y:297,alpha:0.102}},{t:this.instance_9,p:{alpha:0.102,scaleX:1,scaleY:1,y:296.9}},{t:this.instance_8,p:{scaleX:1,scaleY:1,y:297,alpha:0.102}},{t:this.instance_7,p:{scaleX:1,scaleY:1,y:297.1,alpha:0.102}},{t:this.instance_6,p:{scaleX:1,scaleY:1,y:293.4,alpha:0.102}},{t:this.instance_5,p:{scaleX:1,scaleY:1,y:296.5,alpha:0.102}},{t:this.instance_4,p:{alpha:0.102,scaleX:1,scaleY:1,y:297.2}},{t:this.instance_3,p:{scaleX:1,scaleY:1,y:294,alpha:0.102}},{t:this.instance_2,p:{scaleX:1,scaleY:1,y:293.5,alpha:0.102}},{t:this.instance_1,p:{scaleX:1,scaleY:1,y:293.6,alpha:0.102}},{t:this.instance,p:{scaleX:1,scaleY:1,y:303.5,alpha:0.102}}]},1).to({state:[{t:this.instance_44,p:{scaleX:1,scaleY:1,y:254.4,alpha:0}},{t:this.instance_43,p:{scaleX:1,scaleY:1,y:254.5,alpha:0}},{t:this.instance_42,p:{scaleX:1,scaleY:1,y:266.2,alpha:0}},{t:this.instance_41,p:{scaleX:1,scaleY:1,y:254.9,alpha:0}},{t:this.instance_40,p:{scaleX:1,scaleY:1,y:254.9,alpha:0}},{t:this.instance_39,p:{alpha:0,scaleX:1,scaleY:1,y:266.2}},{t:this.instance_38,p:{scaleX:1,scaleY:1,y:254.8,alpha:0}},{t:this.instance_37,p:{scaleX:1,scaleY:1,y:255.2,alpha:0}},{t:this.instance_36,p:{scaleX:1,scaleY:1,y:266.2,alpha:0}},{t:this.instance_35,p:{scaleX:1,scaleY:1,y:254.9,alpha:0}},{t:this.instance_34,p:{alpha:0,scaleX:1,scaleY:1,y:254.6}},{t:this.instance_33,p:{scaleX:1,scaleY:1,y:254.5,alpha:0}},{t:this.instance_32,p:{scaleX:1,scaleY:1,y:266.2,alpha:0}},{t:this.instance_31,p:{scaleX:1,scaleY:1,y:255.1,alpha:0}},{t:this.instance_30,p:{scaleX:1,scaleY:1,y:254.9,alpha:0}},{t:this.instance_29,p:{alpha:0,scaleX:1,scaleY:1,y:255.2}},{t:this.instance_28,p:{scaleX:1,scaleY:1,y:266.2,alpha:0}},{t:this.instance_27,p:{scaleX:1,scaleY:1,y:255.1,alpha:0}},{t:this.instance_26,p:{scaleX:1,scaleY:1,y:254.5,alpha:0}},{t:this.instance_25,p:{scaleX:1,scaleY:1,y:254.6,alpha:0}},{t:this.instance_24,p:{alpha:0,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_23,p:{scaleX:1,scaleY:1,y:266.2,alpha:0}},{t:this.instance_22,p:{scaleX:1,scaleY:1,y:254.4,alpha:0}},{t:this.instance_21,p:{scaleX:1,scaleY:1,y:254.5,alpha:0}},{t:this.instance_20,p:{scaleX:1,scaleY:1,y:254.8,alpha:0}},{t:this.instance_19,p:{alpha:0,scaleX:1,scaleY:1,y:254.8}},{t:this.instance_18,p:{scaleX:1,scaleY:1,y:254.6,alpha:0}},{t:this.instance_17,p:{scaleX:1,scaleY:1,y:266.2,alpha:0}},{t:this.instance_16,p:{scaleX:1,scaleY:1,y:254.4,alpha:0}},{t:this.instance_15,p:{scaleX:1,scaleY:1,y:254.5,alpha:0}},{t:this.instance_14,p:{alpha:0,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_13,p:{scaleX:1,scaleY:1,y:254.8,alpha:0}},{t:this.instance_12,p:{scaleX:1,scaleY:1,y:294.8,alpha:0}},{t:this.instance_11,p:{scaleX:1,scaleY:1,y:293.3,alpha:0}},{t:this.instance_10,p:{scaleX:1,scaleY:1,y:297,alpha:0}},{t:this.instance_9,p:{alpha:0,scaleX:1,scaleY:1,y:296.9}},{t:this.instance_8,p:{scaleX:1,scaleY:1,y:297,alpha:0}},{t:this.instance_7,p:{scaleX:1,scaleY:1,y:297.1,alpha:0}},{t:this.instance_6,p:{scaleX:1,scaleY:1,y:293.4,alpha:0}},{t:this.instance_5,p:{scaleX:1,scaleY:1,y:296.5,alpha:0}},{t:this.instance_4,p:{alpha:0,scaleX:1,scaleY:1,y:297.2}},{t:this.instance_3,p:{scaleX:1,scaleY:1,y:294,alpha:0}},{t:this.instance_2,p:{scaleX:1,scaleY:1,y:293.5,alpha:0}},{t:this.instance_1,p:{scaleX:1,scaleY:1,y:293.6,alpha:0}},{t:this.instance,p:{scaleX:1,scaleY:1,y:303.5,alpha:0}}]},1).to({state:[{t:this.instance_44,p:{scaleX:1,scaleY:1,y:254.4,alpha:0.102}},{t:this.instance_43,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.102}},{t:this.instance_42,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.102}},{t:this.instance_41,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.102}},{t:this.instance_40,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.102}},{t:this.instance_39,p:{alpha:0.102,scaleX:1,scaleY:1,y:266.2}},{t:this.instance_38,p:{scaleX:1,scaleY:1,y:254.8,alpha:0.102}},{t:this.instance_37,p:{scaleX:1,scaleY:1,y:255.2,alpha:0.102}},{t:this.instance_36,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.102}},{t:this.instance_35,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.102}},{t:this.instance_34,p:{alpha:0.102,scaleX:1,scaleY:1,y:254.6}},{t:this.instance_33,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.102}},{t:this.instance_32,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.102}},{t:this.instance_31,p:{scaleX:1,scaleY:1,y:255.1,alpha:0.102}},{t:this.instance_30,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.102}},{t:this.instance_29,p:{alpha:0.102,scaleX:1,scaleY:1,y:255.2}},{t:this.instance_28,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.102}},{t:this.instance_27,p:{scaleX:1,scaleY:1,y:255.1,alpha:0.102}},{t:this.instance_26,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.102}},{t:this.instance_25,p:{scaleX:1,scaleY:1,y:254.6,alpha:0.102}},{t:this.instance_24,p:{alpha:0.102,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_23,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.102}},{t:this.instance_22,p:{scaleX:1,scaleY:1,y:254.4,alpha:0.102}},{t:this.instance_21,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.102}},{t:this.instance_20,p:{scaleX:1,scaleY:1,y:254.8,alpha:0.102}},{t:this.instance_19,p:{alpha:0.102,scaleX:1,scaleY:1,y:254.8}},{t:this.instance_18,p:{scaleX:1,scaleY:1,y:254.6,alpha:0.102}},{t:this.instance_17,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.102}},{t:this.instance_16,p:{scaleX:1,scaleY:1,y:254.4,alpha:0.102}},{t:this.instance_15,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.102}},{t:this.instance_14,p:{alpha:0.102,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_13,p:{scaleX:1,scaleY:1,y:254.8,alpha:0.102}},{t:this.instance_12,p:{scaleX:1,scaleY:1,y:294.8,alpha:0.102}},{t:this.instance_11,p:{scaleX:1,scaleY:1,y:293.3,alpha:0.102}},{t:this.instance_10,p:{scaleX:1,scaleY:1,y:297,alpha:0.102}},{t:this.instance_9,p:{alpha:0.102,scaleX:1,scaleY:1,y:296.9}},{t:this.instance_8,p:{scaleX:1,scaleY:1,y:297,alpha:0.102}},{t:this.instance_7,p:{scaleX:1,scaleY:1,y:297.1,alpha:0.102}},{t:this.instance_6,p:{scaleX:1,scaleY:1,y:293.4,alpha:0.102}},{t:this.instance_5,p:{scaleX:1,scaleY:1,y:296.5,alpha:0.102}},{t:this.instance_4,p:{alpha:0.102,scaleX:1,scaleY:1,y:297.2}},{t:this.instance_3,p:{scaleX:1,scaleY:1,y:294,alpha:0.102}},{t:this.instance_2,p:{scaleX:1,scaleY:1,y:293.5,alpha:0.102}},{t:this.instance_1,p:{scaleX:1,scaleY:1,y:293.6,alpha:0.102}},{t:this.instance,p:{scaleX:1,scaleY:1,y:303.5,alpha:0.102}}]},1).to({state:[{t:this.instance_44,p:{scaleX:1,scaleY:1,y:254.4,alpha:0.199}},{t:this.instance_43,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.199}},{t:this.instance_42,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.199}},{t:this.instance_41,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.199}},{t:this.instance_40,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.199}},{t:this.instance_39,p:{alpha:0.199,scaleX:1,scaleY:1,y:266.2}},{t:this.instance_38,p:{scaleX:1,scaleY:1,y:254.8,alpha:0.199}},{t:this.instance_37,p:{scaleX:1,scaleY:1,y:255.2,alpha:0.199}},{t:this.instance_36,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.199}},{t:this.instance_35,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.199}},{t:this.instance_34,p:{alpha:0.199,scaleX:1,scaleY:1,y:254.6}},{t:this.instance_33,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.199}},{t:this.instance_32,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.199}},{t:this.instance_31,p:{scaleX:1,scaleY:1,y:255.1,alpha:0.199}},{t:this.instance_30,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.199}},{t:this.instance_29,p:{alpha:0.199,scaleX:1,scaleY:1,y:255.2}},{t:this.instance_28,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.199}},{t:this.instance_27,p:{scaleX:1,scaleY:1,y:255.1,alpha:0.199}},{t:this.instance_26,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.199}},{t:this.instance_25,p:{scaleX:1,scaleY:1,y:254.6,alpha:0.199}},{t:this.instance_24,p:{alpha:0.199,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_23,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.199}},{t:this.instance_22,p:{scaleX:1,scaleY:1,y:254.4,alpha:0.199}},{t:this.instance_21,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.199}},{t:this.instance_20,p:{scaleX:1,scaleY:1,y:254.8,alpha:0.199}},{t:this.instance_19,p:{alpha:0.199,scaleX:1,scaleY:1,y:254.8}},{t:this.instance_18,p:{scaleX:1,scaleY:1,y:254.6,alpha:0.199}},{t:this.instance_17,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.199}},{t:this.instance_16,p:{scaleX:1,scaleY:1,y:254.4,alpha:0.199}},{t:this.instance_15,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.199}},{t:this.instance_14,p:{alpha:0.199,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_13,p:{scaleX:1,scaleY:1,y:254.8,alpha:0.199}},{t:this.instance_12,p:{scaleX:1,scaleY:1,y:294.8,alpha:0.199}},{t:this.instance_11,p:{scaleX:1,scaleY:1,y:293.3,alpha:0.199}},{t:this.instance_10,p:{scaleX:1,scaleY:1,y:297,alpha:0.199}},{t:this.instance_9,p:{alpha:0.199,scaleX:1,scaleY:1,y:296.9}},{t:this.instance_8,p:{scaleX:1,scaleY:1,y:297,alpha:0.199}},{t:this.instance_7,p:{scaleX:1,scaleY:1,y:297.1,alpha:0.199}},{t:this.instance_6,p:{scaleX:1,scaleY:1,y:293.4,alpha:0.199}},{t:this.instance_5,p:{scaleX:1,scaleY:1,y:296.5,alpha:0.199}},{t:this.instance_4,p:{alpha:0.199,scaleX:1,scaleY:1,y:297.2}},{t:this.instance_3,p:{scaleX:1,scaleY:1,y:294,alpha:0.199}},{t:this.instance_2,p:{scaleX:1,scaleY:1,y:293.5,alpha:0.199}},{t:this.instance_1,p:{scaleX:1,scaleY:1,y:293.6,alpha:0.199}},{t:this.instance,p:{scaleX:1,scaleY:1,y:303.5,alpha:0.199}}]},1).to({state:[{t:this.instance_44,p:{scaleX:1,scaleY:1,y:254.4,alpha:0.301}},{t:this.instance_43,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.301}},{t:this.instance_42,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.301}},{t:this.instance_41,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.301}},{t:this.instance_40,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.301}},{t:this.instance_39,p:{alpha:0.301,scaleX:1,scaleY:1,y:266.2}},{t:this.instance_38,p:{scaleX:1,scaleY:1,y:254.8,alpha:0.301}},{t:this.instance_37,p:{scaleX:1,scaleY:1,y:255.2,alpha:0.301}},{t:this.instance_36,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.301}},{t:this.instance_35,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.301}},{t:this.instance_34,p:{alpha:0.301,scaleX:1,scaleY:1,y:254.6}},{t:this.instance_33,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.301}},{t:this.instance_32,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.301}},{t:this.instance_31,p:{scaleX:1,scaleY:1,y:255.1,alpha:0.301}},{t:this.instance_30,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.301}},{t:this.instance_29,p:{alpha:0.301,scaleX:1,scaleY:1,y:255.2}},{t:this.instance_28,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.301}},{t:this.instance_27,p:{scaleX:1,scaleY:1,y:255.1,alpha:0.301}},{t:this.instance_26,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.301}},{t:this.instance_25,p:{scaleX:1,scaleY:1,y:254.6,alpha:0.301}},{t:this.instance_24,p:{alpha:0.301,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_23,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.301}},{t:this.instance_22,p:{scaleX:1,scaleY:1,y:254.4,alpha:0.301}},{t:this.instance_21,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.301}},{t:this.instance_20,p:{scaleX:1,scaleY:1,y:254.8,alpha:0.301}},{t:this.instance_19,p:{alpha:0.301,scaleX:1,scaleY:1,y:254.8}},{t:this.instance_18,p:{scaleX:1,scaleY:1,y:254.6,alpha:0.301}},{t:this.instance_17,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.301}},{t:this.instance_16,p:{scaleX:1,scaleY:1,y:254.4,alpha:0.301}},{t:this.instance_15,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.301}},{t:this.instance_14,p:{alpha:0.301,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_13,p:{scaleX:1,scaleY:1,y:254.8,alpha:0.301}},{t:this.instance_12,p:{scaleX:1,scaleY:1,y:294.8,alpha:0.301}},{t:this.instance_11,p:{scaleX:1,scaleY:1,y:293.3,alpha:0.301}},{t:this.instance_10,p:{scaleX:1,scaleY:1,y:297,alpha:0.301}},{t:this.instance_9,p:{alpha:0.301,scaleX:1,scaleY:1,y:296.9}},{t:this.instance_8,p:{scaleX:1,scaleY:1,y:297,alpha:0.301}},{t:this.instance_7,p:{scaleX:1,scaleY:1,y:297.1,alpha:0.301}},{t:this.instance_6,p:{scaleX:1,scaleY:1,y:293.4,alpha:0.301}},{t:this.instance_5,p:{scaleX:1,scaleY:1,y:296.5,alpha:0.301}},{t:this.instance_4,p:{alpha:0.301,scaleX:1,scaleY:1,y:297.2}},{t:this.instance_3,p:{scaleX:1,scaleY:1,y:294,alpha:0.301}},{t:this.instance_2,p:{scaleX:1,scaleY:1,y:293.5,alpha:0.301}},{t:this.instance_1,p:{scaleX:1,scaleY:1,y:293.6,alpha:0.301}},{t:this.instance,p:{scaleX:1,scaleY:1,y:303.5,alpha:0.301}}]},1).to({state:[{t:this.instance_44,p:{scaleX:1,scaleY:1,y:254.4,alpha:0.398}},{t:this.instance_43,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.398}},{t:this.instance_42,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.398}},{t:this.instance_41,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.398}},{t:this.instance_40,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.398}},{t:this.instance_39,p:{alpha:0.398,scaleX:1,scaleY:1,y:266.2}},{t:this.instance_38,p:{scaleX:1,scaleY:1,y:254.8,alpha:0.398}},{t:this.instance_37,p:{scaleX:1,scaleY:1,y:255.2,alpha:0.398}},{t:this.instance_36,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.398}},{t:this.instance_35,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.398}},{t:this.instance_34,p:{alpha:0.398,scaleX:1,scaleY:1,y:254.6}},{t:this.instance_33,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.398}},{t:this.instance_32,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.398}},{t:this.instance_31,p:{scaleX:1,scaleY:1,y:255.1,alpha:0.398}},{t:this.instance_30,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.398}},{t:this.instance_29,p:{alpha:0.398,scaleX:1,scaleY:1,y:255.2}},{t:this.instance_28,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.398}},{t:this.instance_27,p:{scaleX:1,scaleY:1,y:255.1,alpha:0.398}},{t:this.instance_26,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.398}},{t:this.instance_25,p:{scaleX:1,scaleY:1,y:254.6,alpha:0.398}},{t:this.instance_24,p:{alpha:0.398,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_23,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.398}},{t:this.instance_22,p:{scaleX:1,scaleY:1,y:254.4,alpha:0.398}},{t:this.instance_21,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.398}},{t:this.instance_20,p:{scaleX:1,scaleY:1,y:254.8,alpha:0.398}},{t:this.instance_19,p:{alpha:0.398,scaleX:1,scaleY:1,y:254.8}},{t:this.instance_18,p:{scaleX:1,scaleY:1,y:254.6,alpha:0.398}},{t:this.instance_17,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.398}},{t:this.instance_16,p:{scaleX:1,scaleY:1,y:254.4,alpha:0.398}},{t:this.instance_15,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.398}},{t:this.instance_14,p:{alpha:0.398,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_13,p:{scaleX:1,scaleY:1,y:254.8,alpha:0.398}},{t:this.instance_12,p:{scaleX:1,scaleY:1,y:294.8,alpha:0.398}},{t:this.instance_11,p:{scaleX:1,scaleY:1,y:293.3,alpha:0.398}},{t:this.instance_10,p:{scaleX:1,scaleY:1,y:297,alpha:0.398}},{t:this.instance_9,p:{alpha:0.398,scaleX:1,scaleY:1,y:296.9}},{t:this.instance_8,p:{scaleX:1,scaleY:1,y:297,alpha:0.398}},{t:this.instance_7,p:{scaleX:1,scaleY:1,y:297.1,alpha:0.398}},{t:this.instance_6,p:{scaleX:1,scaleY:1,y:293.4,alpha:0.398}},{t:this.instance_5,p:{scaleX:1,scaleY:1,y:296.5,alpha:0.398}},{t:this.instance_4,p:{alpha:0.398,scaleX:1,scaleY:1,y:297.2}},{t:this.instance_3,p:{scaleX:1,scaleY:1,y:294,alpha:0.398}},{t:this.instance_2,p:{scaleX:1,scaleY:1,y:293.5,alpha:0.398}},{t:this.instance_1,p:{scaleX:1,scaleY:1,y:293.6,alpha:0.398}},{t:this.instance,p:{scaleX:1,scaleY:1,y:303.5,alpha:0.398}}]},1).to({state:[{t:this.instance_44,p:{scaleX:1,scaleY:1,y:254.4,alpha:0.5}},{t:this.instance_43,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.5}},{t:this.instance_42,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.5}},{t:this.instance_41,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.5}},{t:this.instance_40,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.5}},{t:this.instance_39,p:{alpha:0.5,scaleX:1,scaleY:1,y:266.2}},{t:this.instance_38,p:{scaleX:1,scaleY:1,y:254.8,alpha:0.5}},{t:this.instance_37,p:{scaleX:1,scaleY:1,y:255.2,alpha:0.5}},{t:this.instance_36,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.5}},{t:this.instance_35,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.5}},{t:this.instance_34,p:{alpha:0.5,scaleX:1,scaleY:1,y:254.6}},{t:this.instance_33,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.5}},{t:this.instance_32,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.5}},{t:this.instance_31,p:{scaleX:1,scaleY:1,y:255.1,alpha:0.5}},{t:this.instance_30,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.5}},{t:this.instance_29,p:{alpha:0.5,scaleX:1,scaleY:1,y:255.2}},{t:this.instance_28,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.5}},{t:this.instance_27,p:{scaleX:1,scaleY:1,y:255.1,alpha:0.5}},{t:this.instance_26,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.5}},{t:this.instance_25,p:{scaleX:1,scaleY:1,y:254.6,alpha:0.5}},{t:this.instance_24,p:{alpha:0.5,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_23,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.5}},{t:this.instance_22,p:{scaleX:1,scaleY:1,y:254.4,alpha:0.5}},{t:this.instance_21,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.5}},{t:this.instance_20,p:{scaleX:1,scaleY:1,y:254.8,alpha:0.5}},{t:this.instance_19,p:{alpha:0.5,scaleX:1,scaleY:1,y:254.8}},{t:this.instance_18,p:{scaleX:1,scaleY:1,y:254.6,alpha:0.5}},{t:this.instance_17,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.5}},{t:this.instance_16,p:{scaleX:1,scaleY:1,y:254.4,alpha:0.5}},{t:this.instance_15,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.5}},{t:this.instance_14,p:{alpha:0.5,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_13,p:{scaleX:1,scaleY:1,y:254.8,alpha:0.5}},{t:this.instance_12,p:{scaleX:1,scaleY:1,y:294.8,alpha:0.5}},{t:this.instance_11,p:{scaleX:1,scaleY:1,y:293.3,alpha:0.5}},{t:this.instance_10,p:{scaleX:1,scaleY:1,y:297,alpha:0.5}},{t:this.instance_9,p:{alpha:0.5,scaleX:1,scaleY:1,y:296.9}},{t:this.instance_8,p:{scaleX:1,scaleY:1,y:297,alpha:0.5}},{t:this.instance_7,p:{scaleX:1,scaleY:1,y:297.1,alpha:0.5}},{t:this.instance_6,p:{scaleX:1,scaleY:1,y:293.4,alpha:0.5}},{t:this.instance_5,p:{scaleX:1,scaleY:1,y:296.5,alpha:0.5}},{t:this.instance_4,p:{alpha:0.5,scaleX:1,scaleY:1,y:297.2}},{t:this.instance_3,p:{scaleX:1,scaleY:1,y:294,alpha:0.5}},{t:this.instance_2,p:{scaleX:1,scaleY:1,y:293.5,alpha:0.5}},{t:this.instance_1,p:{scaleX:1,scaleY:1,y:293.6,alpha:0.5}},{t:this.instance,p:{scaleX:1,scaleY:1,y:303.5,alpha:0.5}}]},1).to({state:[{t:this.instance_44,p:{scaleX:1,scaleY:1,y:254.4,alpha:0.602}},{t:this.instance_43,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.602}},{t:this.instance_42,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.602}},{t:this.instance_41,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.602}},{t:this.instance_40,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.602}},{t:this.instance_39,p:{alpha:0.602,scaleX:1,scaleY:1,y:266.2}},{t:this.instance_38,p:{scaleX:1,scaleY:1,y:254.8,alpha:0.602}},{t:this.instance_37,p:{scaleX:1,scaleY:1,y:255.2,alpha:0.602}},{t:this.instance_36,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.602}},{t:this.instance_35,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.602}},{t:this.instance_34,p:{alpha:0.602,scaleX:1,scaleY:1,y:254.6}},{t:this.instance_33,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.602}},{t:this.instance_32,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.602}},{t:this.instance_31,p:{scaleX:1,scaleY:1,y:255.1,alpha:0.602}},{t:this.instance_30,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.602}},{t:this.instance_29,p:{alpha:0.602,scaleX:1,scaleY:1,y:255.2}},{t:this.instance_28,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.602}},{t:this.instance_27,p:{scaleX:1,scaleY:1,y:255.1,alpha:0.602}},{t:this.instance_26,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.602}},{t:this.instance_25,p:{scaleX:1,scaleY:1,y:254.6,alpha:0.602}},{t:this.instance_24,p:{alpha:0.602,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_23,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.602}},{t:this.instance_22,p:{scaleX:1,scaleY:1,y:254.4,alpha:0.602}},{t:this.instance_21,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.602}},{t:this.instance_20,p:{scaleX:1,scaleY:1,y:254.8,alpha:0.602}},{t:this.instance_19,p:{alpha:0.602,scaleX:1,scaleY:1,y:254.8}},{t:this.instance_18,p:{scaleX:1,scaleY:1,y:254.6,alpha:0.602}},{t:this.instance_17,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.602}},{t:this.instance_16,p:{scaleX:1,scaleY:1,y:254.4,alpha:0.602}},{t:this.instance_15,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.602}},{t:this.instance_14,p:{alpha:0.602,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_13,p:{scaleX:1,scaleY:1,y:254.8,alpha:0.602}},{t:this.instance_12,p:{scaleX:1,scaleY:1,y:294.8,alpha:0.602}},{t:this.instance_11,p:{scaleX:1,scaleY:1,y:293.3,alpha:0.602}},{t:this.instance_10,p:{scaleX:1,scaleY:1,y:297,alpha:0.602}},{t:this.instance_9,p:{alpha:0.602,scaleX:1,scaleY:1,y:296.9}},{t:this.instance_8,p:{scaleX:1,scaleY:1,y:297,alpha:0.602}},{t:this.instance_7,p:{scaleX:1,scaleY:1,y:297.1,alpha:0.602}},{t:this.instance_6,p:{scaleX:1,scaleY:1,y:293.4,alpha:0.602}},{t:this.instance_5,p:{scaleX:1,scaleY:1,y:296.5,alpha:0.602}},{t:this.instance_4,p:{alpha:0.602,scaleX:1,scaleY:1,y:297.2}},{t:this.instance_3,p:{scaleX:1,scaleY:1,y:294,alpha:0.602}},{t:this.instance_2,p:{scaleX:1,scaleY:1,y:293.5,alpha:0.602}},{t:this.instance_1,p:{scaleX:1,scaleY:1,y:293.6,alpha:0.602}},{t:this.instance,p:{scaleX:1,scaleY:1,y:303.5,alpha:0.602}}]},1).to({state:[{t:this.instance_44,p:{scaleX:1,scaleY:1,y:254.4,alpha:0.699}},{t:this.instance_43,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.699}},{t:this.instance_42,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.699}},{t:this.instance_41,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.699}},{t:this.instance_40,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.699}},{t:this.instance_39,p:{alpha:0.699,scaleX:1,scaleY:1,y:266.2}},{t:this.instance_38,p:{scaleX:1,scaleY:1,y:254.8,alpha:0.699}},{t:this.instance_37,p:{scaleX:1,scaleY:1,y:255.2,alpha:0.699}},{t:this.instance_36,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.699}},{t:this.instance_35,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.699}},{t:this.instance_34,p:{alpha:0.699,scaleX:1,scaleY:1,y:254.6}},{t:this.instance_33,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.699}},{t:this.instance_32,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.699}},{t:this.instance_31,p:{scaleX:1,scaleY:1,y:255.1,alpha:0.699}},{t:this.instance_30,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.699}},{t:this.instance_29,p:{alpha:0.699,scaleX:1,scaleY:1,y:255.2}},{t:this.instance_28,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.699}},{t:this.instance_27,p:{scaleX:1,scaleY:1,y:255.1,alpha:0.699}},{t:this.instance_26,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.699}},{t:this.instance_25,p:{scaleX:1,scaleY:1,y:254.6,alpha:0.699}},{t:this.instance_24,p:{alpha:0.699,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_23,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.699}},{t:this.instance_22,p:{scaleX:1,scaleY:1,y:254.4,alpha:0.699}},{t:this.instance_21,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.699}},{t:this.instance_20,p:{scaleX:1,scaleY:1,y:254.8,alpha:0.699}},{t:this.instance_19,p:{alpha:0.699,scaleX:1,scaleY:1,y:254.8}},{t:this.instance_18,p:{scaleX:1,scaleY:1,y:254.6,alpha:0.699}},{t:this.instance_17,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.699}},{t:this.instance_16,p:{scaleX:1,scaleY:1,y:254.4,alpha:0.699}},{t:this.instance_15,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.699}},{t:this.instance_14,p:{alpha:0.699,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_13,p:{scaleX:1,scaleY:1,y:254.8,alpha:0.699}},{t:this.instance_12,p:{scaleX:1,scaleY:1,y:294.8,alpha:0.699}},{t:this.instance_11,p:{scaleX:1,scaleY:1,y:293.3,alpha:0.699}},{t:this.instance_10,p:{scaleX:1,scaleY:1,y:297,alpha:0.699}},{t:this.instance_9,p:{alpha:0.699,scaleX:1,scaleY:1,y:296.9}},{t:this.instance_8,p:{scaleX:1,scaleY:1,y:297,alpha:0.699}},{t:this.instance_7,p:{scaleX:1,scaleY:1,y:297.1,alpha:0.699}},{t:this.instance_6,p:{scaleX:1,scaleY:1,y:293.4,alpha:0.699}},{t:this.instance_5,p:{scaleX:1,scaleY:1,y:296.5,alpha:0.699}},{t:this.instance_4,p:{alpha:0.699,scaleX:1,scaleY:1,y:297.2}},{t:this.instance_3,p:{scaleX:1,scaleY:1,y:294,alpha:0.699}},{t:this.instance_2,p:{scaleX:1,scaleY:1,y:293.5,alpha:0.699}},{t:this.instance_1,p:{scaleX:1,scaleY:1,y:293.6,alpha:0.699}},{t:this.instance,p:{scaleX:1,scaleY:1,y:303.5,alpha:0.699}}]},1).to({state:[{t:this.instance_44,p:{scaleX:1,scaleY:1,y:254.4,alpha:0.801}},{t:this.instance_43,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.801}},{t:this.instance_42,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.801}},{t:this.instance_41,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.801}},{t:this.instance_40,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.801}},{t:this.instance_39,p:{alpha:0.801,scaleX:1,scaleY:1,y:266.2}},{t:this.instance_38,p:{scaleX:1,scaleY:1,y:254.8,alpha:0.801}},{t:this.instance_37,p:{scaleX:1,scaleY:1,y:255.2,alpha:0.801}},{t:this.instance_36,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.801}},{t:this.instance_35,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.801}},{t:this.instance_34,p:{alpha:0.801,scaleX:1,scaleY:1,y:254.6}},{t:this.instance_33,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.801}},{t:this.instance_32,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.801}},{t:this.instance_31,p:{scaleX:1,scaleY:1,y:255.1,alpha:0.801}},{t:this.instance_30,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.801}},{t:this.instance_29,p:{alpha:0.801,scaleX:1,scaleY:1,y:255.2}},{t:this.instance_28,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.801}},{t:this.instance_27,p:{scaleX:1,scaleY:1,y:255.1,alpha:0.801}},{t:this.instance_26,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.801}},{t:this.instance_25,p:{scaleX:1,scaleY:1,y:254.6,alpha:0.801}},{t:this.instance_24,p:{alpha:0.801,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_23,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.801}},{t:this.instance_22,p:{scaleX:1,scaleY:1,y:254.4,alpha:0.801}},{t:this.instance_21,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.801}},{t:this.instance_20,p:{scaleX:1,scaleY:1,y:254.8,alpha:0.801}},{t:this.instance_19,p:{alpha:0.801,scaleX:1,scaleY:1,y:254.8}},{t:this.instance_18,p:{scaleX:1,scaleY:1,y:254.6,alpha:0.801}},{t:this.instance_17,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.801}},{t:this.instance_16,p:{scaleX:1,scaleY:1,y:254.4,alpha:0.801}},{t:this.instance_15,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.801}},{t:this.instance_14,p:{alpha:0.801,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_13,p:{scaleX:1,scaleY:1,y:254.8,alpha:0.801}},{t:this.instance_12,p:{scaleX:1,scaleY:1,y:294.8,alpha:0.801}},{t:this.instance_11,p:{scaleX:1,scaleY:1,y:293.3,alpha:0.801}},{t:this.instance_10,p:{scaleX:1,scaleY:1,y:297,alpha:0.801}},{t:this.instance_9,p:{alpha:0.801,scaleX:1,scaleY:1,y:296.9}},{t:this.instance_8,p:{scaleX:1,scaleY:1,y:297,alpha:0.801}},{t:this.instance_7,p:{scaleX:1,scaleY:1,y:297.1,alpha:0.801}},{t:this.instance_6,p:{scaleX:1,scaleY:1,y:293.4,alpha:0.801}},{t:this.instance_5,p:{scaleX:1,scaleY:1,y:296.5,alpha:0.801}},{t:this.instance_4,p:{alpha:0.801,scaleX:1,scaleY:1,y:297.2}},{t:this.instance_3,p:{scaleX:1,scaleY:1,y:294,alpha:0.801}},{t:this.instance_2,p:{scaleX:1,scaleY:1,y:293.5,alpha:0.801}},{t:this.instance_1,p:{scaleX:1,scaleY:1,y:293.6,alpha:0.801}},{t:this.instance,p:{scaleX:1,scaleY:1,y:303.5,alpha:0.801}}]},1).to({state:[{t:this.instance_44,p:{scaleX:1,scaleY:1,y:254.4,alpha:0.898}},{t:this.instance_43,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.898}},{t:this.instance_42,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.898}},{t:this.instance_41,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.898}},{t:this.instance_40,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.898}},{t:this.instance_39,p:{alpha:0.898,scaleX:1,scaleY:1,y:266.2}},{t:this.instance_38,p:{scaleX:1,scaleY:1,y:254.8,alpha:0.898}},{t:this.instance_37,p:{scaleX:1,scaleY:1,y:255.2,alpha:0.898}},{t:this.instance_36,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.898}},{t:this.instance_35,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.898}},{t:this.instance_34,p:{alpha:0.898,scaleX:1,scaleY:1,y:254.6}},{t:this.instance_33,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.898}},{t:this.instance_32,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.898}},{t:this.instance_31,p:{scaleX:1,scaleY:1,y:255.1,alpha:0.898}},{t:this.instance_30,p:{scaleX:1,scaleY:1,y:254.9,alpha:0.898}},{t:this.instance_29,p:{alpha:0.898,scaleX:1,scaleY:1,y:255.2}},{t:this.instance_28,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.898}},{t:this.instance_27,p:{scaleX:1,scaleY:1,y:255.1,alpha:0.898}},{t:this.instance_26,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.898}},{t:this.instance_25,p:{scaleX:1,scaleY:1,y:254.6,alpha:0.898}},{t:this.instance_24,p:{alpha:0.898,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_23,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.898}},{t:this.instance_22,p:{scaleX:1,scaleY:1,y:254.4,alpha:0.898}},{t:this.instance_21,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.898}},{t:this.instance_20,p:{scaleX:1,scaleY:1,y:254.8,alpha:0.898}},{t:this.instance_19,p:{alpha:0.898,scaleX:1,scaleY:1,y:254.8}},{t:this.instance_18,p:{scaleX:1,scaleY:1,y:254.6,alpha:0.898}},{t:this.instance_17,p:{scaleX:1,scaleY:1,y:266.2,alpha:0.898}},{t:this.instance_16,p:{scaleX:1,scaleY:1,y:254.4,alpha:0.898}},{t:this.instance_15,p:{scaleX:1,scaleY:1,y:254.5,alpha:0.898}},{t:this.instance_14,p:{alpha:0.898,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_13,p:{scaleX:1,scaleY:1,y:254.8,alpha:0.898}},{t:this.instance_12,p:{scaleX:1,scaleY:1,y:294.8,alpha:0.898}},{t:this.instance_11,p:{scaleX:1,scaleY:1,y:293.3,alpha:0.898}},{t:this.instance_10,p:{scaleX:1,scaleY:1,y:297,alpha:0.898}},{t:this.instance_9,p:{alpha:0.898,scaleX:1,scaleY:1,y:296.9}},{t:this.instance_8,p:{scaleX:1,scaleY:1,y:297,alpha:0.898}},{t:this.instance_7,p:{scaleX:1,scaleY:1,y:297.1,alpha:0.898}},{t:this.instance_6,p:{scaleX:1,scaleY:1,y:293.4,alpha:0.898}},{t:this.instance_5,p:{scaleX:1,scaleY:1,y:296.5,alpha:0.898}},{t:this.instance_4,p:{alpha:0.898,scaleX:1,scaleY:1,y:297.2}},{t:this.instance_3,p:{scaleX:1,scaleY:1,y:294,alpha:0.898}},{t:this.instance_2,p:{scaleX:1,scaleY:1,y:293.5,alpha:0.898}},{t:this.instance_1,p:{scaleX:1,scaleY:1,y:293.6,alpha:0.898}},{t:this.instance,p:{scaleX:1,scaleY:1,y:303.5,alpha:0.898}}]},1).to({state:[{t:this.instance_44,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_43,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_42,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_41,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_40,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_39,p:{alpha:1,scaleX:1,scaleY:1,y:266.2}},{t:this.instance_38,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_37,p:{scaleX:1,scaleY:1,y:255.2,alpha:1}},{t:this.instance_36,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_35,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_34,p:{alpha:1,scaleX:1,scaleY:1,y:254.6}},{t:this.instance_33,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_32,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_31,p:{scaleX:1,scaleY:1,y:255.1,alpha:1}},{t:this.instance_30,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_29,p:{alpha:1,scaleX:1,scaleY:1,y:255.2}},{t:this.instance_28,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_27,p:{scaleX:1,scaleY:1,y:255.1,alpha:1}},{t:this.instance_26,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_25,p:{scaleX:1,scaleY:1,y:254.6,alpha:1}},{t:this.instance_24,p:{alpha:1,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_23,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_22,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_21,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_20,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_19,p:{alpha:1,scaleX:1,scaleY:1,y:254.8}},{t:this.instance_18,p:{scaleX:1,scaleY:1,y:254.6,alpha:1}},{t:this.instance_17,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_16,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_15,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_14,p:{alpha:1,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_13,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_12,p:{scaleX:1,scaleY:1,y:294.8,alpha:1}},{t:this.instance_11,p:{scaleX:1,scaleY:1,y:293.3,alpha:1}},{t:this.instance_10,p:{scaleX:1,scaleY:1,y:297,alpha:1}},{t:this.instance_9,p:{alpha:1,scaleX:1,scaleY:1,y:296.9}},{t:this.instance_8,p:{scaleX:1,scaleY:1,y:297,alpha:1}},{t:this.instance_7,p:{scaleX:1,scaleY:1,y:297.1,alpha:1}},{t:this.instance_6,p:{scaleX:1,scaleY:1,y:293.4,alpha:1}},{t:this.instance_5,p:{scaleX:1,scaleY:1,y:296.5,alpha:1}},{t:this.instance_4,p:{alpha:1,scaleX:1,scaleY:1,y:297.2}},{t:this.instance_3,p:{scaleX:1,scaleY:1,y:294,alpha:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,y:293.5,alpha:1}},{t:this.instance_1,p:{scaleX:1,scaleY:1,y:293.6,alpha:1}},{t:this.instance,p:{scaleX:1,scaleY:1,y:303.5,alpha:1}}]},1).to({state:[{t:this.instance_44,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_43,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_42,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_41,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_40,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_39,p:{alpha:1,scaleX:1,scaleY:1,y:266.2}},{t:this.instance_38,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_37,p:{scaleX:1,scaleY:1,y:255.2,alpha:1}},{t:this.instance_36,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_35,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_34,p:{alpha:1,scaleX:1,scaleY:1,y:254.6}},{t:this.instance_33,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_32,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_31,p:{scaleX:1,scaleY:1,y:255.1,alpha:1}},{t:this.instance_30,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_29,p:{alpha:1,scaleX:1,scaleY:1,y:255.2}},{t:this.instance_28,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_27,p:{scaleX:1,scaleY:1,y:255.1,alpha:1}},{t:this.instance_26,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_25,p:{scaleX:1,scaleY:1,y:254.6,alpha:1}},{t:this.instance_24,p:{alpha:1,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_23,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_22,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_21,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_20,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_19,p:{alpha:1,scaleX:1,scaleY:1,y:254.8}},{t:this.instance_18,p:{scaleX:1,scaleY:1,y:254.6,alpha:1}},{t:this.instance_17,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_16,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_15,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_14,p:{alpha:1,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_13,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_12,p:{scaleX:1,scaleY:1,y:294.8,alpha:1}},{t:this.instance_11,p:{scaleX:1,scaleY:1,y:293.3,alpha:1}},{t:this.instance_10,p:{scaleX:1,scaleY:1,y:297,alpha:1}},{t:this.instance_9,p:{alpha:1,scaleX:1,scaleY:1,y:296.9}},{t:this.instance_8,p:{scaleX:1,scaleY:1,y:297,alpha:1}},{t:this.instance_7,p:{scaleX:1,scaleY:1,y:297.1,alpha:1}},{t:this.instance_6,p:{scaleX:1,scaleY:1,y:293.4,alpha:1}},{t:this.instance_5,p:{scaleX:1,scaleY:1,y:296.5,alpha:1}},{t:this.instance_4,p:{alpha:1,scaleX:1,scaleY:1,y:297.2}},{t:this.instance_3,p:{scaleX:1,scaleY:1,y:294,alpha:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,y:293.5,alpha:1}},{t:this.instance_1,p:{scaleX:1,scaleY:1,y:293.6,alpha:1}},{t:this.instance,p:{scaleX:1,scaleY:1,y:303.5,alpha:1}}]},1).to({state:[{t:this.instance_44,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_43,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_42,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_41,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_40,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_39,p:{alpha:1,scaleX:1,scaleY:1,y:266.2}},{t:this.instance_38,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_37,p:{scaleX:1,scaleY:1,y:255.2,alpha:1}},{t:this.instance_36,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_35,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_34,p:{alpha:1,scaleX:1,scaleY:1,y:254.6}},{t:this.instance_33,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_32,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_31,p:{scaleX:1,scaleY:1,y:255.1,alpha:1}},{t:this.instance_30,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_29,p:{alpha:1,scaleX:1,scaleY:1,y:255.2}},{t:this.instance_28,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_27,p:{scaleX:1,scaleY:1,y:255.1,alpha:1}},{t:this.instance_26,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_25,p:{scaleX:1,scaleY:1,y:254.6,alpha:1}},{t:this.instance_24,p:{alpha:1,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_23,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_22,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_21,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_20,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_19,p:{alpha:1,scaleX:1,scaleY:1,y:254.8}},{t:this.instance_18,p:{scaleX:1,scaleY:1,y:254.6,alpha:1}},{t:this.instance_17,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_16,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_15,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_14,p:{alpha:1,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_13,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_12,p:{scaleX:1,scaleY:1,y:294.8,alpha:1}},{t:this.instance_11,p:{scaleX:1,scaleY:1,y:293.3,alpha:1}},{t:this.instance_10,p:{scaleX:1,scaleY:1,y:297,alpha:1}},{t:this.instance_9,p:{alpha:1,scaleX:1,scaleY:1,y:296.9}},{t:this.instance_8,p:{scaleX:1,scaleY:1,y:297,alpha:1}},{t:this.instance_7,p:{scaleX:1,scaleY:1,y:297.1,alpha:1}},{t:this.instance_6,p:{scaleX:1,scaleY:1,y:293.4,alpha:1}},{t:this.instance_5,p:{scaleX:1,scaleY:1,y:296.5,alpha:1}},{t:this.instance_4,p:{alpha:1,scaleX:1,scaleY:1,y:297.2}},{t:this.instance_3,p:{scaleX:1,scaleY:1,y:294,alpha:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,y:293.5,alpha:1}},{t:this.instance_1,p:{scaleX:1,scaleY:1,y:293.6,alpha:1}},{t:this.instance,p:{scaleX:1,scaleY:1,y:303.5,alpha:1}}]},1).to({state:[{t:this.instance_44,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_43,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_42,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_41,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_40,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_39,p:{alpha:1,scaleX:1,scaleY:1,y:266.2}},{t:this.instance_38,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_37,p:{scaleX:1,scaleY:1,y:255.2,alpha:1}},{t:this.instance_36,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_35,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_34,p:{alpha:1,scaleX:1,scaleY:1,y:254.6}},{t:this.instance_33,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_32,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_31,p:{scaleX:1,scaleY:1,y:255.1,alpha:1}},{t:this.instance_30,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_29,p:{alpha:1,scaleX:1,scaleY:1,y:255.2}},{t:this.instance_28,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_27,p:{scaleX:1,scaleY:1,y:255.1,alpha:1}},{t:this.instance_26,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_25,p:{scaleX:1,scaleY:1,y:254.6,alpha:1}},{t:this.instance_24,p:{alpha:1,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_23,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_22,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_21,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_20,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_19,p:{alpha:1,scaleX:1,scaleY:1,y:254.8}},{t:this.instance_18,p:{scaleX:1,scaleY:1,y:254.6,alpha:1}},{t:this.instance_17,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_16,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_15,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_14,p:{alpha:1,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_13,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_12,p:{scaleX:1,scaleY:1,y:294.8,alpha:1}},{t:this.instance_11,p:{scaleX:1,scaleY:1,y:293.3,alpha:1}},{t:this.instance_10,p:{scaleX:1,scaleY:1,y:297,alpha:1}},{t:this.instance_9,p:{alpha:1,scaleX:1,scaleY:1,y:296.9}},{t:this.instance_8,p:{scaleX:1,scaleY:1,y:297,alpha:1}},{t:this.instance_7,p:{scaleX:1,scaleY:1,y:297.1,alpha:1}},{t:this.instance_6,p:{scaleX:1,scaleY:1,y:293.4,alpha:1}},{t:this.instance_5,p:{scaleX:1,scaleY:1,y:296.5,alpha:1}},{t:this.instance_4,p:{alpha:1,scaleX:1,scaleY:1,y:297.2}},{t:this.instance_3,p:{scaleX:1,scaleY:1,y:294,alpha:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,y:293.5,alpha:1}},{t:this.instance_1,p:{scaleX:1,scaleY:1,y:293.6,alpha:1}},{t:this.instance,p:{scaleX:1,scaleY:1,y:303.5,alpha:1}}]},1).to({state:[{t:this.instance_44,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_43,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_42,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_41,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_40,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_39,p:{alpha:1,scaleX:1,scaleY:1,y:266.2}},{t:this.instance_38,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_37,p:{scaleX:1,scaleY:1,y:255.2,alpha:1}},{t:this.instance_36,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_35,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_34,p:{alpha:1,scaleX:1,scaleY:1,y:254.6}},{t:this.instance_33,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_32,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_31,p:{scaleX:1,scaleY:1,y:255.1,alpha:1}},{t:this.instance_30,p:{scaleX:1,scaleY:1,y:254.9,alpha:1}},{t:this.instance_29,p:{alpha:1,scaleX:1,scaleY:1,y:255.2}},{t:this.instance_28,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_27,p:{scaleX:1,scaleY:1,y:255.1,alpha:1}},{t:this.instance_26,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_25,p:{scaleX:1,scaleY:1,y:254.6,alpha:1}},{t:this.instance_24,p:{alpha:1,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_23,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_22,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_21,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_20,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_19,p:{alpha:1,scaleX:1,scaleY:1,y:254.8}},{t:this.instance_18,p:{scaleX:1,scaleY:1,y:254.6,alpha:1}},{t:this.instance_17,p:{scaleX:1,scaleY:1,y:266.2,alpha:1}},{t:this.instance_16,p:{scaleX:1,scaleY:1,y:254.4,alpha:1}},{t:this.instance_15,p:{scaleX:1,scaleY:1,y:254.5,alpha:1}},{t:this.instance_14,p:{alpha:1,scaleX:1,scaleY:1,y:254.5}},{t:this.instance_13,p:{scaleX:1,scaleY:1,y:254.8,alpha:1}},{t:this.instance_12,p:{scaleX:1,scaleY:1,y:294.8,alpha:1}},{t:this.instance_11,p:{scaleX:1,scaleY:1,y:293.3,alpha:1}},{t:this.instance_10,p:{scaleX:1,scaleY:1,y:297,alpha:1}},{t:this.instance_9,p:{alpha:1,scaleX:1,scaleY:1,y:296.9}},{t:this.instance_8,p:{scaleX:1,scaleY:1,y:297,alpha:1}},{t:this.instance_7,p:{scaleX:1,scaleY:1,y:297.1,alpha:1}},{t:this.instance_6,p:{scaleX:1,scaleY:1,y:293.4,alpha:1}},{t:this.instance_5,p:{scaleX:1,scaleY:1,y:296.5,alpha:1}},{t:this.instance_4,p:{alpha:1,scaleX:1,scaleY:1,y:297.2}},{t:this.instance_3,p:{scaleX:1,scaleY:1,y:294,alpha:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,y:293.5,alpha:1}},{t:this.instance_1,p:{scaleX:1,scaleY:1,y:293.6,alpha:1}},{t:this.instance,p:{scaleX:1,scaleY:1,y:303.5,alpha:1}}]},1).wait(33));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(45.2,221.7,624.9,111.5);


(lib.berap4fatguy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.berap4fatguystill();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,-5.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:26.8,x:6.8},17).to({scaleX:1,scaleY:1,rotation:-5.8,x:0},17).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.2,-15.7,48.5,50.7);


(lib.rap4a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_109 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(109).call(this.frame_109).wait(1));

	// Layer 1
	this.instance = new lib.rap4astill();
	this.instance.parent = this;
	this.instance.setTransform(-79.4,-21.6,0.199,0.199);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({alpha:0},6).wait(81));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.9,-24.2,53.1,5.2);


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


(lib.Scene4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// rap 4b
	this.instance = new lib.rap4b();
	this.instance.parent = this;
	this.instance.setTransform(-166.4,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AAPjgQgPADgBgQQgbAGgIgfQABgEAGgDQAJgEAEgPQADgPANgDQAHACAFAEQAHgdAhAMQAJADADALQANghAqAGQADAAADACQAMAJAEASQASgfAgARQAUAKgCAXQAdgNgDAiQgBAJgJALQgBABgBAHQAcADgPAiQABAIgMAEQAOAOgTAXQgGAIgIAGAAZjNQgCADgCADQgEAHAGAFQAAAAABABQAHAFAJgEQAEgBACgFQAEgKgHgHQgGgGgHABQgCAEgDAEQALgCgDANQgBAIgJgBAAPjgQACAAAEgBQACAAACgBQAPgKATgDQAWgDAFARQAFAIAAAMQARgSAKARQAHAKgJAIQgFAEgGABIgBAAQgIgBAAgIAgMisQgOgDgDgGQADgRAcAJQgDgDgCgGQAHgMALgOAgbAOQgOgNgDgOQgIgBgEAIQgRAGgLAIQgIAOgRADQgZgBgLgNQgIgLgEgPQgFgSgHgRQgHgSgIgSQgEgTgDgRQgDgGgBgIQAAgDgFgCQgHABgOADQgHABgCgIQgSgKAUAFQATgGAAgHQgLgEgJAAQgNgFACgNQgCgSAOAKQAOAPASgDQgPgDgKgMQgHgLALgIQAGgEAHAOQALANANAHQgIgKgHgQQADgIAAgGQAOgKABAVQAGAPALAHQgBgSAUgDQACACgBgDQALAPgLARQgLAMgHALQgBALAHALQAEAOAMAMQAMAGAGAOQANAKAKAUQACADACAEQADgRANgNQAPgJAQgCQgBAFAAAHAARiRQgHAAgIgCQgSgBAEgYIAAAAIAAgBIAAABAgsheQAEgNANgJQAVgCASgDQABACACACQAHAGAGAAQAKACAIgCQALACAJgDQAGgDACgEAAMh5QgCgDAFgCQABgBAEgBQgBACgCADQAbALAPgfQADgNgEgJQgXAUgSAAAAdhGQgFgEgHgEQgEgDgFgCQgNgFAKgIQAHgIAKAHQAIADAGAIQABABAAAAQADAFACAHAAkhWQABgDgBgEQgEgVASASQAMAGgDAWQAMAMALARQAKAQALAPQAMAMAPAFQAIAGAJACQAFgBAFABQAOABAEAOAAdhGQgFACgJgHQgPgIgVAEQgYAFAPAKQAHAHAJgCQAWgEAIAMQgSACgTAEQgPAGAFAUQAEAAAFgEQARACAKgJQgFAHAGAJQAFAGAAgFQALgFAHgQQAFAUAMAKQANAGACAUQAFANAKANQAGALAIAIQgKgDgOABQgTAAgUACQgVAAgQgFQgNgQgLgIQgCgEgBgDQgFgMAPgFQAAAAABAAQAAAIAFACAAUiAQACgHgFgKABoi3QABAEABAFQAEAPAKgHQgBAKAIALQARAMARgOQACAEACAEQADgCADgBQAXgCAMALIAAAAQAQAQgBAVQADATgKAQQAAABgBAAQgEAHgGAFACliLQgMAEgQAEACmg0QACABACAAQAHAFACABADVg8QAMANACAWQAHARgGASQAAATgJAPQgMANgHANQgOAIgRAJQgRAHgZgGABaBDQAEAFAEAEQANAMAQAAQgCADAAAGQABAVgMAMQgNANgNALQgMAKgOAOQgTAMgMgMQgBAAAAABQgHACgIACQgNALgQAGQAIABAGAAQATgEAUAAQASAFAKATQALANALANQAMAKANAAQARAFAMABQAHABAGAAQACgBADgBQAEgBADACQAFADAAALQgGAPgRAHQgLARgTALQgOAJgWgGQgZADgXgDQADgFAEgCQAFgFAJgHQAOgHAHgLQgCgGgEgDQgQgKgTgGQgFgCgFgBQgKAKgHAOQgFATgHAUQgDAEgRgDQgNAAgQABQgfABgbgFQAHgHAJgEQAQgMAOgLQASgJgPgRQgLgMgVgHQgPgJgTABQgUACgOgOQgRgIgKgQQgJgRAIgRQAFgSANgNQAIgTAPgLQANgOALgKQAIgKAPgKQAPgJARgKQAPgJAQgFACdARQgLgOABgXQAFgSAOgOQgMgGgKgQAAdhGQADAEABAEAhdgbQABgDABgDQADgLgDgJAg7ByQABACACADQAHAAAGABQALACAJAHQAPALAQALQAPAKAFAOQACACABABAg5BsQgBACgBADQAAAAAAABQgMAQgIARQgKAQgJAQQgHAQAIAWQALAPASALQAQAHAVgCQATACAQAKQAMABALAEAh7BUQAgAGAeAOQACACACACQAGgMANgKAgqDLQAPgDANAA");
	this.shape.setTransform(15.3,7.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC9966").s().p("AATCtIADADIgBAAgAAGhNIACgEQAHAEAFAFIgCAAQgFAAgHgFgAAGiBIAEgCIgCAGgAgVivIAAAAIAAAAg");
	this.shape_1.setTransform(16.2,7.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVAsIADgGQACgGgEgKQASAAAVgVQAFAKgDAMQgMAXgRAAQgGAAgHgCgAgOgTIAAAAQAIABACgIQACgNgKACIAFgIQAHgBAFAFQAGAHgEAKQgCAFgEACQgDABgDAAQgFAAgEgDg");
	this.shape_2.setTransform(19.2,-9.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BE9670").s().p("ABaEcQgaADgXgDQADgFAFgCIAOgMQAOgHAGgLQgBgGgFgDQgQgKgSgGIgKgDQgMgEgMgBQgQgKgSgCIgKAAIAAAAIAAAAQgPAAgMgEIgBgBQgSgLgLgPQgEgLAAgKQAAgJAEgIIATggQAIgRAMgQIADAFQAGAAAGABQALACAJAHIAfAWQAPAKAGAOIABAEIgOAEQgNALgQAHIANAAQATgEAVAAQASAFAJATIAWAaQAMAKANAAQARAFANABIAMACIAFgDQAEgBAEACQAFADgBALQgGAPgQAHQgLARgTALQgJAFgLAAQgHAAgJgCgAglCdQAPgCAOAAQgOAAgPACgAgREbIgcABQgfABgbgFQAGgHAKgEIAegXQARgJgPgRQgLgMgVgHQgPgJgSABQgVACgOgOQgRgIgJgQQgKgRAJgRQAFgSANgNQAHgTAQgLIAXgYQAgAGAeAOIAFAEIgCAFIAAABQgMAQgIARIgTAgQgEAIAAAJQAAAKAEALQALAPASALIABABQAMAEAPAAIAAAAIAAAAIAKAAQASACAQAKQAMABAMAEQgLAKgGAOQgGATgIAUQgBACgHAAIgLgBgAg1BEIAAAAgACEAqQgPAAgNgMIgJgJQgIgIgFgLQgKgMgGgNQgBgUgNgHQgMgKgGgTQgHAPgKAFQgBABAAAAQAAABAAAAQAAAAAAAAQAAABgBAAIAAAAIgBgBIgCgBIAAAAIgBgBIAAgBQgDgFAAgEQAAgDACgDIgBAAQgJAGgMAAIAAAAIAAAAIgCAAIgDAAQgFAEgEAAIgBgJQAAgMAMgFIAlgGIgBgBQgGgIgOAAIAAAAIgBAAIgJABIgBAAIgBABIgBAAIgBAAIgBAAQgFgBgFgEIgBgBQgGgEAAgDQAAgFAQgDIADAAIAKgBIAAAAIAAAAQAMAAALAFQAJAHAEgBQgEgFgHgEIgKgFQgIgDAAgEQAAgDAFgDIAAAAQAEgEAFAAIAAAAIAAAAQAEAAAEADIAAAAQAIADAGAIQgGgIgIgDIAAAAQgEgDgEAAIAAAAIAAAAQgFAAgEAEIAAAAQgFADAAADQAAAEAIADIAKAFIgCADQgLgFgMAAIAAAAIAAAAIgKABIgDAAQgQADAAAFQAAADAGAEIABABQAFAEAFABIABAAIABAAIABAAIABgBIABAAIAJgBIABAAIAAAAQAOAAAGAIIABABIglAGQgMAFAAAMIABAJQAEAAAFgEIADAAIACAAIAAAAIAAAAQAMAAAJgGIABAAQgCADAAADQAAAEADAFIAAABIABABIAAAAIACABIABABIAAAAQABAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABgBQAKgFAHgPQAGATAMAKQANAHABAUQAGANAKAMQAFALAIAIQgKgDgNABQgUAAgTACQgWAAgPgFQgNgQgLgHIgEgHQgEgMAOgFQgOgNgDgPQgHgBgEAIQgRAGgMAJQgIAOgQADQgagBgKgNQgJgLgEgQQgFgSgHgRIgOgkIgHgkQgDgGgCgIQABgDgFgCIgVAEQgIABgBgIQgTgKAUAFQAUgGAAgHQgLgEgJAAQgOgFACgNQgBgSANAKQAPAPASgDQgPgDgKgMQgIgLAMgIQAGgEAGAOQALANAOAHQgJgKgGgQQACgIAAgGQAOgKABAVQAHAPALAHQgCgSAUgDQABAAAAAAQAAABAAAAQAAAAAAgBQAAAAAAAAQALAOgLARQgKAMgHALQgCALAHALQAEAOAMAMQANAGAGAOQAMAKAKAUIAEAHQACAFAAAGIgBAJIgCAGIACgGIABgJQAAgGgCgFQAEgRAMgNQAPgJARgCQgCAFAAAGIAAABIAAgBQAAgGACgFQADgNAOgJIAmgFQgBgDAEgCIACADQAbALAQgfQADgNgFgJQgWAUgSAAQgHAAgIgCQgSgBADgYQgNgDgEgGQAEgRAbAJQgDgDgCgGQAHgMALgNIAGgCIAEgBQAPgKATgDQAXgDAFARQAFAIgBAMQASgSAKARQAHAKgKAIQgEAEgHABIAAAAQgIAAgBgJQABAJAIAAIABAJQAEAPALgHQgCAKAIALQARAMARgOIAEAIIAGgDQAYgCALALIAAAAQAQARAAAUQACATgJAQIgCACQAMAMACAWQAIARgGATQAAATgKAPQgLAMgIANIgeARQgKAEgMAAQgKAAgLgDgACigcQAPABADAOQgDgOgPgBQgKgOAAgWIAAgCQAFgSAOgOIAEABIAJAGIgJgGIgEgBQgLgGgKgQQAKAQALAGQgOAOgFASIAAACQAAAWAKAOIgDAAIAAAAIgBAAIgGAAQgJgCgHgGQgPgFgNgNIgVgfQgLgRgLgMIAAgHQAAgQgKgFIAAAAIgBgBIgEgEIAAAAIgCgBIAAAAIgDgCIAAAAIAAAAIAAAAIAAAAIgCAAIAAAAQgDAAABAJIABACIAAADIgBAEIACACIAFALIgFgLIgCgCIABgEIAAgDIgBgCQgBgJADAAIAAAAIACAAIAAAAIAAAAIAAAAIAAAAIADACIAAAAIACABIAAAAIAEAEIABABIAAAAQAKAFAAAQIAAAHQALAMALARIAVAfQANANAPAFQAHAGAJACIAGAAIABAAIAAAAIADAAIAAAAgAgVgfQABAIAFACQgFgCgBgIIgBAAIABAAgADRheIAJgLIgJALgAAnhsIgFgHIAFAHgAAzidIAIABIAAAAIABAAQAFAAAFgCIACAAQAFgDADgEQgDAEgFADIgCAAQgFACgFAAIgBAAIAAAAIgIgBIgIABIgKgBQgGAAgGgGIgEgEIAEAEQAGAGAGAAIAKABIAIgBgACPixQAPgEAMgEQgMAEgPAEgAgHjaIABAAIgBAAgAAkkDIgFAIIgEAGQgEAHAGAFIAAABQAHAFAJgEQAEgBACgFQAEgKgGgHQgGgFgFAAIgCAAgACigcIAAAAgACrhiIAAAAg");
	this.shape_3.setTransform(14.8,11.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgbD8IgCgDQgGgOgPgKIgggWQgJgHgLgCQgGgBgGAAIgDgFIAAgBIACgFIgFgEQgegOgggGQAIgKAQgKIAfgTQAQgJAPgFIAEAHQALAIANAQQAQAFAWAAQATgCATAAQANgBAKADIAJAJQANAMAPAAQgBADAAAGQABAVgMAMIgaAYIgaAYQgJAGgIAAQgIAAgGgGgAhzC2QAFgMAOgKQgOAKgFAMgACTg7QgLgLgYACIgGADIgEgIQgRAOgRgMQgIgLACgKQgLAHgEgPIgBgJIAAAAQAHgBAEgEQAKgIgHgKQgKgRgSASQABgMgFgIQgFgRgXADQgSADgPAKIgEABIgGACQgPACgCgQQgaAGgIgfQABgEAFgDQAJgEAEgPQAEgPANgDQAIACAEAEQAHgdAhAMQAIADAEALQAMghAqAGQAEAAADACQAMAJAEASQARgfAhARQATAKgCAXQAegNgDAiQgBAJgKALIgBAIQAcADgPAiQABAIgMAEQAOAOgTAXQgHAIgIAGgAgihxQgGgFAEgHIAEgGQAKgCgCANQgCAHgHAAIgBAAg");
	this.shape_4.setTransform(21.2,-0.3);

	this.instance_1 = new lib.rap4a();
	this.instance_1.parent = this;
	this.instance_1.setTransform(62.4,-8.5);

	this.instance_2 = new lib.rapbubble4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-16.8,-27.5,1.348,1.233);

	this.instance_3 = new lib.berap4fatguy();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-28.8,-3.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAAAAIAAAAIAAABg");
	this.shape_5.setTransform(-6.3,25.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene4, new cjs.Rectangle(-54,-38.9,94.5,80.3), null);


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
		
		 window.open ("predNoun_scene7.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("predNoun_scene5.html","_self");
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
(lib.predNoun_scene6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene6:0,scene6_repeat:92});

	// timeline functions:
	this.frame_0 = function() {
		playSound("yoisaybeingireallymean");
		/* 
		*/
	}
	this.frame_62 = function() {
		playSound("drum_fill");
	}
	this.frame_91 = function() {
		/* _root.gonow = true;*/
	}
	this.frame_109 = function() {
		/* gotoAndPlay("scene6_repeat");
		stopAllSounds();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(62).call(this.frame_62).wait(29).call(this.frame_91).wait(18).call(this.frame_109).wait(1));

	// content
	this.instance = new lib.Scene4();
	this.instance.parent = this;
	this.instance.setTransform(295.6,186.7,3.6,3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(110));

	// Marching
	this.instance_1 = new lib.berapswish();
	this.instance_1.parent = this;
	this.instance_1.setTransform(275.6,366.6,0.528,0.528,0,0,0,357.7,277.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(62).to({_off:false},0).wait(48));

	// main
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(554.3,55.9,1,1,0,0,0,54,40.5);

	this.instance_2 = new lib.GrassScene("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(273.8,189.1,3.769,3.769,0,0,0,-0.3,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.UI}]}).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(288.8,202.6,534,398.7);
// library properties:
lib.properties = {
	id: 'D52373C63D86FA48B2BDC7F5E811B1D6',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/drum_fill.mp3", id:"drum_fill"},
		{src:"sounds/High_Screaming_Gtr.mp3", id:"High_Screaming_Gtr"},
		{src:"sounds/right_answer.mp3", id:"right_answer"},
		{src:"sounds/bgmPN.mp3", id:"bgmPN"},
		{src:"sounds/wrong_answer.mp3", id:"wrong_answer"},
		{src:"sounds/yoisaybeingireallymean.mp3", id:"yoisaybeingireallymean"}
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
an.compositions['D52373C63D86FA48B2BDC7F5E811B1D6'] = {
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