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


(lib.VertLine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AAKEiIgTAAIAApDIATAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgJEiIAApDIATAAIAAJDg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-30,4,60);


(lib.pronounwewechose = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhLBfQghgbAAgyQAAg4AcgnQAdgqAzAAQAjAAAYAMQAcAQAAAfQAAAWgZASQgLAIgkAQIhTAnQAMATATAJQATAJAXAAQAPAAAVgGQAZgHAHgMQAIgLAIAAQAJAAAGAGQAFAFAAAIQAAAYgnASQghAPggAAQgxAAgfgZgAgtg6QgRAUgKApIBEgfQAngTARgPQgTgRghAAQgbAAgSAVg");
	this.shape.setTransform(23.9,7.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAxCtQgJgHAAgKQgKgagCgRIgRhfQgLg6gEgkQgTBJgXAxQgZA7gIAgQACAGAAAEQAAAKgIAHQgIAGgKAAQgeAAAAgbIgHgcIgYhsQgOg1gihmIgCgJQAAgUAXAAQAPAAAHAQQAEAHAMAmQANAoANA4IAWBgQAXg3AXhNQAPgvAHgTQATgwATAAQAPAAAGAPQAIATAIBHQAFAkAKAyIATBWQAehHAsh3QACgHAJgjQAGgZAJgPQAIgMANAAQAWAAAAAWQAAAEgHASIgJAYIgMAnIhBCeQgJAagWAyQgIAOgQAAQgKAAgIgFg");
	this.shape_1.setTransform(-11.1,2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pronounwewechose, new cjs.Rectangle(-37.8,-33.3,75.6,66.7), null);


(lib.pronounheader = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAeA7IgEgaQgCgOAAgNIABgLIAAgLQABgbgLAAQgNAAgMARQgLAOgGAWIgBAMIgBAMIABALIAAALQAAAFgCAEQgEADgFAAQgFAAgEgDQgEgEAAgFIAAgLIgBgLIACgiIACgiIAAgMIgBgMQAAgFAEgEQADgDAFAAQALAAABAQIAAAOQAVgbAUAAQAUAAAIARQAFAMABAWIAAAMIAAALQAAAKACAQQADAQAAAKQAAAGgDADQgEADgFAAQgLAAgBgMg");
	this.shape.setTransform(134.8,3.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAbA6QgPAIgTAAQgQAAgKgHQgMgIgCgPQgFggAAgZQAAgQAEgWQABgKAKAAQAGAAADADQAEADAAAGIgCASIgCASIABAiQACAPACAJIAIADIAIABQAPABATgGIAAgYIgBgYQAAgaADgTQABgLAKAAQAGAAADADQAEAEAAAEIgDAuIAAAaIABAaIAAAIIAAAJQAAAFgDAEQgEADgFAAQgJAAgDgMg");
	this.shape_1.setTransform(121.5,4.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgkA0QgQgRgBgcQgBgbAPgVQARgZAdAAQAZAAAMAXQAKASAAAZQAAAagOATQgQAWgZAAQgUAAgPgPgAgVgYQgIAOAAARQAAARAKAKQAIAIAKAAQAMAAAJgJQALgKAAgSQACgugbAAQgRAAgKARg");
	this.shape_2.setTransform(108.2,4.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhSBgQgDgEAAgFIABgQIABgQIAAgWIAAgXIAAgXIAAgZIgBgXIgCgWQAAgGAFgEQAEgGAHAAQAGAAAKAPQAeAuAYAdQAcAkAjAgIAAgQIgBgPQAAg1gDgfIgEgNQgCgJgBgEQABgPANAAQAVAAAABQIAAAoIgBAoIgCATQgCANgLAAQgGAAgKgJQgygvg/hXIAAAbIgBAbIABAeIAAAfQAAAhgNgBQgHAAgEgDg");
	this.shape_3.setTransform(92.1,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAnA+IgIgIIgVAJQgJADgFAAQgcAAgNgQQgNgPAAgfQAAgdAVgVQAUgVAbAAQALAAANAGQARAHAAAJQAAAEgDACIgCAPIAAAbQgBAPADAJIAHAVIADAHIABACQAAAEgEAEQgDADgEAAQgDAAgGgGgAgUgeQgNAQAAATQAAAUAHAKQAHAKAOAAQALAAAIgEIAMgKQgEgfAAgQIABgLIACgOIgIgDIgFgBQgSAAgOAPg");
	this.shape_4.setTransform(68.1,4.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AghBEQgTgHAAgMQAAgFAEgEQADgEAFAAQAEAAAGAHQADADAKABIAOABQAJAAAIgCQALgEAAgHQAAgQgXgHIgLgDQgRgDgGgFQgKgFAAgOQAAgaAYgKQAHgEAPgEIAXgIQAFgDAGABQAFgBAEAEQADADAAAGIACAKIABAKQAAAGgDADQgEAEgFAAQgHAAgCgFQgCgCgBgKQgKACgTAGQgSAIAAALIAHACQAbAFAOAJQATAMAAAYQAAAUgRAKQgOAIgVAAQgQAAgOgFg");
	this.shape_5.setTransform(47.8,3.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgpA1QgTgPAAgcQAAgeAQgWQAQgYAcAAQAUAAANAIQAPAHAAASQAAAMgOAKQgGAFgTAIIguAWQAHAKAKAGQAKAEANAAQAIAAAMgDQAOgDAEgHQAEgGAFgBQAEAAAEAEQADADAAAEQAAANgWAKQgTAJgRAAQgbAAgRgOgAgYggQgKALgFAXIAlgRQAVgLAKgIQgLgKgSABQgOgBgKAMg");
	this.shape_6.setTransform(35.4,4.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgiA2QgSgQAAgaQAAgYARgaQASgeAWAAQAMAAAPAGQASAHAAALQAAAEgDAEQgDAEgEAAQgEAAgDgDIgFgEQgHgGgQAAQgMAAgMAXQgLAUAAAOQAAAQALAJQAKAJAPAAQAIAAAIgEIAOgHIAFgCQAFAAADADQAEAEAAAEQAAAJgTAJQgRAHgLAAQgYAAgQgPg");
	this.shape_7.setTransform(22,4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAnA+IgIgIIgVAJQgJADgFAAQgcAAgNgQQgNgPAAgfQAAgdAVgVQAUgVAbAAQALAAANAGQARAHAAAJQAAAEgDACIgCAPIAAAbQgBAPADAJIAHAVIADAHIABACQAAAEgEAEQgDADgEAAQgDAAgGgGgAgUgeQgNAQAAATQAAAUAHAKQAHAKAOAAQALAAAIgEIAMgKQgEgfAAgQIABgLIACgOIgIgDIgFgBQgSAAgOAPg");
	this.shape_8.setTransform(9.1,4.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgNBZIABgtIACgsIABgrIAAgsQAAgNALAAQAMAAAAANIgBAsIAAArIgCA8IgBAdQgBAMgKAAQgMAAAAgMg");
	this.shape_9.setTransform(-0.7,0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgvBjQgDgDAAgGIAAgwIAAgxQAAgagBgWIgCgZQAAgJADgFQAEgIAHABQAEAAAEADQADADAAAFIgBAEIAAAHQAKgIAKgDQAJgEAJABQAZAAALAVQAJATAAAcQAAAagOAQQgPATgZAAQgLAAgPgEIAAA6QAAAGgDADQgEAEgFAAQgFAAgEgEgAgLhAQgGADgKAKQABAbAAAeQAOAFAMAAQAPAAAIgLQAHgJAAgQQAAgWgFgLQgFgLgLAAQgLAAgJAFg");
	this.shape_10.setTransform(-10.7,7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgpA1QgTgPAAgcQAAgeAQgWQAQgYAcAAQAUAAANAIQAPAHAAASQAAAMgOAKQgGAFgTAIIguAWQAHAKAKAGQAKAEANAAQAIAAAMgDQAOgDAEgHQAEgGAFgBQAEAAAEAEQADADAAAEQAAANgWAKQgTAJgRAAQgbAAgRgOgAgYggQgKALgFAXIAlgRQAVgLAKgIQgLgKgSABQgOgBgKAMg");
	this.shape_11.setTransform(-24.1,4.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgvA4IAAhVIABgMIAAgMQAAgMALAAQAMAAAAAUQAXgWAcAAQAKAAAEAHQAGAHAAAPIAAAJQgBAPgMAAQgLAAAAgMIAAgIIAAgLQgUADgKAIQgKAIgIAQIABBCQAAAMgNAAQgLAAAAgMg");
	this.shape_12.setTransform(-36.8,4.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#9C30CE").s().p("AAeA7IgEgaQgCgOAAgNIABgLIAAgLQABgbgLAAQgNAAgMARQgLAOgGAWIgBAMIgBAMIABALIAAALQAAAFgCAEQgEADgFAAQgFAAgEgDQgEgEAAgFIAAgLIgBgLIACgiIACgiIAAgMIgBgMQAAgFADgEQAEgDAFAAQALAAABAQIAAAOQAVgbAUAAQAUAAAIARQAFAMABAWIAAAMIAAALQAAAKACAQQADAQAAAKQAAAGgDADQgEADgFAAQgLAAgBgMg");
	this.shape_13.setTransform(-56.9,3.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#9C30CE").s().p("AAbA6QgPAIgTAAQgQAAgKgHQgMgIgCgPQgFggAAgZQAAgQAEgWQABgKAKAAQAGAAADADQAEADAAAGIgCASIgCASIABAiQACAPACAJIAIADIAIABQAPABATgGIAAgYIgBgYQAAgaADgTQABgLAKAAQAGAAADADQAEAEAAAEIgDAuIAAAaIABAaIAAAIIAAAJQAAAFgDAEQgEADgFAAQgJAAgDgMg");
	this.shape_14.setTransform(-70.2,4.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#9C30CE").s().p("AgkA0QgQgRgBgcQgBgbAPgVQARgZAdAAQAZAAAMAXQAKASAAAZQAAAagOATQgQAWgZAAQgUAAgPgPgAgVgYQgIAOAAARQAAARAKAKQAIAIAKAAQAMAAAJgJQALgKAAgSQACgugbAAQgRAAgKARg");
	this.shape_15.setTransform(-83.5,4.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#9C30CE").s().p("AAeA7IgEgaQgBgOAAgNIAAgLIAAgLQABgbgKAAQgOAAgMARQgLAOgGAWIgBAMIgBAMIABALIAAALQAAAFgCAEQgEADgFAAQgGAAgDgDQgEgEAAgFIAAgLIgBgLIACgiIACgiIAAgMIgBgMQAAgFAEgEQADgDAFAAQALAAABAQIAAAOQAVgbAVAAQATAAAIARQAFAMABAWIAAAMIAAALQAAAKACAQQADAQAAAKQAAAGgDADQgEADgFAAQgLAAgBgMg");
	this.shape_16.setTransform(-96.1,3.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#9C30CE").s().p("AgkA0QgQgRgBgcQgBgbAPgVQARgZAdAAQAZAAAMAXQAKASAAAZQAAAagOATQgQAWgZAAQgUAAgPgPgAgVgYQgIAOAAARQAAARAKAKQAIAIAKAAQAMAAAJgJQALgKAAgSQACgugbAAQgRAAgKARg");
	this.shape_17.setTransform(-109.8,4.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#9C30CE").s().p("AgvA4IAAhVIABgMIAAgMQAAgMALAAQAMAAAAAUQAXgWAcAAQAKAAAEAHQAGAHgBAPIAAAJQAAAPgMAAQgLAAAAgMIAAgIIAAgLQgUADgKAIQgKAIgIAQIAABCQAAAMgMAAQgLAAAAgMg");
	this.shape_18.setTransform(-121.7,4.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#9C30CE").s().p("AgzBeQgDgDAAgFIAAgkQAAgSACggIADgyIAAgRQAAgMABgFQADgMAJACIALgBIASgCQAVABAUAPQAVARAAAYQAAAegXARQgUAQgcAAIgPgBIgBBAQAAAFgDADQgDADgFAAQgFAAgDgDgAgahIIgBAXIgCAwIANABQAUAAAOgKQAPgLAAgTQAAgOgPgKQgNgJgPAAIgJAAIgHABg");
	this.shape_19.setTransform(-134.5,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pronounheader, new cjs.Rectangle(-143.2,-19.4,286.4,38.8), null);


(lib.pronounchosewechose = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhLBfQghgbgBgyQAAg4AcgnQAegqAzAAQAjAAAYAMQAcAQAAAfQgBAWgYASQgLAIgkAQIhSAnQALATATAJQATAJAXAAQAPAAAVgGQAZgHAHgMQAIgLAIAAQAJAAAGAGQAFAFAAAIQAAAYgnASQghAPggAAQgxAAgfgZgAgtg6QgSAUgJApIBEgfQAngTARgPQgTgRghAAQgbAAgSAVg");
	this.shape.setTransform(47.9,7.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag9B7QgigNAAgWQAAgIAHgHQAHgHAJAAQAHAAAKALQAGAFASADQAPADAKAAQARAAAPgFQAUgGAAgOQAAgegqgKIgWgGQgdgFgMgJQgSgMAAgZQAAgtArgUQAOgGAcgIQAdgIAMgGQAJgEALAAQAJAAAGAGQAGAGAAALQAAAGADAMQADAMAAAGQAAAKgGAHQgGAGgKAAQgMAAgFgIQgDgGgDgSQgQAEgiAMQgjANAAAVIANAEQAyAIAYARQAkAVAAAsQAAAkgfASQgaAPgmAAQgdAAgagJg");
	this.shape_1.setTransform(23.6,6.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhBBdQgdgegCg0QgBgwAagmQAfgsA2gBQAsAAAWApQASAhAAAtQgBAwgZAjQgcAngtgBQglABgbgcgAgmgsQgPAZAAAeQAAAgASATQAOAOAUAAQAWAAAQgRQATgSABgfQADhUgxgBQgfAAgSAfg");
	this.shape_2.setTransform(1,7.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AA7CmQgEgSgFghQgEggAAgUIABgSIAAgRQABgogVAAQgbAAgWAYQgLANgUAkQAABUgHAPQgGAOgNAAQgJAAgHgGQgHgGAAgJIADgKQABgFABgbIAAggIABihIABgkQAAgMgCgKQgBgKAAgKQAAgKAGgGQAGgGAJAAQATAAADAUQADAVAAARIgBAwQgCAYABAYIAAAUQARgZAVgLQAUgNAXAAQAlAAANAYQAKARABAmIACAqIAEAuQADAaAEATIABAHQAAAJgGAGQgHAGgJAAQgPAAgGgRg");
	this.shape_3.setTransform(-23.1,1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag+BgQgggcAAgvQAAgsAegvQAgg1ApAAQAWAAAaAKQAhANABATQgBAIgFAHQgFAGgIAAQgHAAgEgDIgJgIQgNgLgeAAQgVAAgWAoQgVAlABAaQgBAdAVARQASAPAcAAQANAAAPgHIAZgNQAHgEADAAQAIAAAGAHQAGAGAAAIQAAAQgiAPQgeAOgTAAQgsAAgegcg");
	this.shape_4.setTransform(-47.8,7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pronounchosewechose, new cjs.Rectangle(-61.7,-33.3,123.5,66.7), null);


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


(lib.itobstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgPChQgHgGAAgJIABgKIABgKIgBghIgCggQAAgfgEg4QgGg+gBgbIgTABQgxAAgbgIQgSgEAAgRQAAgJAFgHQAIgIAJABIAkAEQAWACAOAAIAnAAIAogBQARAAAgADQAiACARAAQAJAAAHAHQAGAGAAAKQAAAJgGAHQgHAGgJAAQgQAAgjgCQgggDgRAAIgQAAQABAfAFBEQAFA+gBAjIACAYIACAXQAAAPgFALQgGAPgNAAQgIAAgHgHg");
	this.shape.setTransform(14.4,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhgCiQgGgHAAgJQAAgKAGgGQAGgHAJAAQAPAAAhgEQACgSAAgXIgCglIgBglQAAgyAGhMIgdABIgcABQgKAAgGgHQgGgGAAgKQAAgUAUgCQASgCAxAAQArAABCAJQATADAAAVQAAAKgHAGQgHAFgIAAQgPAAgVgCIgjgFQgFBAAAA5IABAmIAAAmQAAAVgBARIBFgBQAJAAAHAGQAGAHAAAJQAAAKgGAHQgHAGgJAAIglABIglAAQgNAAgdAEQgdAEgPAAQgJAAgGgGg");
	this.shape_1.setTransform(-15.1,2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.itobstill, new cjs.Rectangle(-29.7,-33.3,59.4,66.7), null);


(lib.ITARMSTILL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC6633").s().p("AhVBfIgHgBIgBgBIgHgIQgHgGgDgHIAAgDIAAgGIAAgLIACgDIABgCIAAgCIAAgCIADgFIAGgLIAAgCIAAgCQAFgLALgEQAVgIAQgLIgBgCQgXAAgOgRQADgDAAgEIAAgCQAGgIAJgFQAfgOAfgLQgDAFgFAEIAAACIgBACIgCACIAAAJIAAAFIgBACIgCACIAAAJIAAALIACACIADACIADABIACgCIAAgCIgBgEIgBgDIgBgHIABgCIABgCIABgCIAAgJIAAgHIADgCIAAgCIAAgCIAEgFIAMgKIABgBIgCgBIAVgGIgBAEIgCAKIgDADIAAALQgBAGADAFIAEAAIABgBIABgJIAAgGIACgDIABgCIAAgGIADgMIAEgDIAFgEIAOgHIAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAFABIACAAQAMAaAPAYIAEAFQAAAIACAIIABAGIAEAJIABACIABADIgBACIgCACIgDgBIgCgBIgHAGQAEgGAAgIQAEgpgsABQglASAHApQABAGAFADQASALARgGQgWAUgRAZIgMAHQgMAHgJAJQgLACgJAGIgBACIgBACIgGADQgIACgGAGQgIADgIAAQgPAAgLgMgAguAOQgIACgFAIIgBACQgjAKAKAlQADANANADQAxAKAIguQAGgngngBIgBABg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhrBaQgHgHgEgJIAAgNIAAgNIAAgDQAIgMAFgOQAFgNALgIIAEgCIACgCIACgCIAQgCQgLgCgKgIIgEgEIgBgCIAAgHIABgCIACgCIAAgCIAAgDQACgGAGgEIAEgDIAAgCIABgBIANgIQAFgCADgDIA0gPIgBgBQANgHARgBIACgDIACgCIAHgBIABgCIABgBIAIgCIABgBIAAAAIALgFIABAAIAKAEIAAABIgCABIgFgBQgBABAAAAQAAAAAAABQgBAAAAABQABABAAAAIAAAAIgPAIIgFADIgEAEIgCALIgBAHIgBACIgCACIABAHIgBAJIgCAAIgEAAQgCgFAAgGIABgLIACgCIADgLIAAgDIgUAFIABABIAAABIgMALIgEAEIAAACIgBADIgCACIAAAGIAAAJIgBACIgCADIAAACIAAAHIACACIABAEIgBACIgBADIgEgBIgCgCIgCgDIAAgLIAAgIIABgDIACgCIAAgEIAAgJIACgCIAAgDIABgCQAEgEAEgFQggALgeAPQgJAEgHAJIAAACQABAEgDADQANAQAXABIACABQgRAMgVAHQgLAFgFAKIAAADIAAACIgGALIgCAEIAAADIAAACIgBACIgCACIAAALIAAAHIAAACQADAIAGAGIAIAIIAAAAIAIACQAQARAagIQAFgGAJgDIAGgCIAAgCIABgDQAKgGAKgCQAKgIALgHIAMgIQARgZAWgTQgQAFgTgLQgFgDgBgFQgGgpAlgTQArAAgDApQgBAHgEAGIAIgFIABABIAEABIABgDIABgCIgBgDIAFgDIADABIACACQgKAMgNAJIgPALIgBACIgBABQgcAegfAaQgKAIgKAHQgIAFgJADQgWARgVAAQgYAAgXgXgAhFBYQgNgDgEgMQgJgmAjgKIABgCQAFgHAIgDIABgBQAnABgHAoQgGAlgiAAQgIAAgIgCg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ITARMSTILL, new cjs.Rectangle(-11.8,-11.3,23.8,22.7), null);


(lib.HorizontalLine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AXXAKMgutAAAIAAgTMAutAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("A3WAKIAAgTMAutAAAIAAATg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.5,-2,301,4);


(lib.himheritsentobstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhLBfQghgbgBgyQAAg4AcgnQAegqAyAAQAkAAAYAMQAcAQAAAfQgBAWgYASQgLAIgkAQIhSAnQAMATASAJQASAJAYAAQAPAAAVgGQAZgHAHgMQAIgLAIAAQAIAAAHAGQAFAFAAAIQAAAYgnASQgiAPgfAAQgxAAgfgZgAgtg6QgSAUgJApIBEgfQAngTARgPQgTgRgiAAQgaAAgSAVg");
	this.shape.setTransform(90.3,7.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag9B7QgigNAAgWQAAgIAHgHQAHgHAJAAQAHAAAKALQAGAFASADQAPADAKAAQARAAAPgFQAUgGAAgOQAAgegqgKIgWgGQgdgFgMgJQgSgMAAgZQAAgtArgUQAOgGAcgIQAdgIAMgGQAJgEALAAQAJAAAGAGQAGAGAAALQAAAGADAMQADAMAAAGQAAAKgGAHQgGAGgKAAQgMAAgFgIQgDgGgDgSQgQAEgiAMQgjANAAAVIANAEQAyAIAYARQAkAVAAAsQAAAkgfASQgaAPgmAAQgdAAgagJg");
	this.shape_1.setTransform(66,6.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhBBdQgdgegCg0QgBgwAagmQAfgsA2gBQAsAAAWApQASAhAAAtQgBAwgZAjQgcAngtgBQglABgbgcgAgmgsQgPAZAAAeQAAAgASATQAOAOAUAAQAWAAAQgRQATgSABgfQADhUgxgBQgfAAgSAfg");
	this.shape_2.setTransform(43.4,7.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AA8CmQgGgSgDghQgFggAAgUIABgSIAAgRQABgogVAAQgbAAgWAYQgLANgUAkQAABUgHAPQgGAOgNAAQgJAAgHgGQgHgGABgJIACgKQABgFABgbIAAggIABihIABgkQAAgMgCgKQgBgKAAgKQAAgKAGgGQAGgGAJAAQASAAAEAUQADAVAAARIgBAwQgCAYABAYIAAAUQASgZAUgLQAUgNAXAAQAkAAAOAYQAKARABAmIACAqIAEAuQADAaAEATIABAHQABAJgHAGQgHAGgJAAQgQAAgEgRg");
	this.shape_3.setTransform(19.3,1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag+BgQgggcAAgvQAAgsAegvQAgg1ApAAQAWAAAaAKQAhANAAATQAAAIgFAHQgFAGgIAAQgHAAgEgDIgJgIQgNgLgeAAQgVAAgXAoQgTAlAAAaQAAAdATARQATAPAcAAQANAAAPgHIAZgNQAHgEADAAQAIAAAGAHQAGAGAAAIQAAAQgiAPQgeAOgTAAQgsAAgegcg");
	this.shape_4.setTransform(-5.4,7.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhLBfQghgbgBgyQAAg4AcgnQAegqAyAAQAkAAAYAMQAcAQAAAfQgBAWgYASQgLAIgkAQIhSAnQALATATAJQASAJAYAAQAPAAAVgGQAZgHAHgMQAIgLAIAAQAIAAAHAGQAFAFAAAIQAAAYgnASQgiAPgfAAQgxAAgfgZgAgtg6QgSAUgJApIBEgfQAngTAQgPQgSgRgiAAQgaAAgSAVg");
	this.shape_5.setTransform(-42.5,7.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAxCtQgIgHgBgKQgJgagDgRIgShfQgKg6gEgkQgTBJgWAxQgaA7gIAgQADAGgBAEQAAAKgIAHQgIAGgKAAQgeAAAAgbIgHgcIgXhsQgPg1gjhmIgBgJQAAgUAXAAQAPAAAHAQQAEAHAMAmQANAoANA4IAVBgQAYg3AXhNQAPgvAHgTQATgwATAAQAPAAAGAPQAIATAIBHQAEAkALAyIATBWQAehHArh3QADgHAIgjQAHgZAJgPQAIgMANAAQAWAAAAAWQAAAEgHASIgJAYIgMAnIhBCeQgJAagWAyQgIAOgQAAQgKAAgIgFg");
	this.shape_6.setTransform(-77.5,2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.himheritsentobstill, new cjs.Rectangle(-104.1,-33.3,208.3,66.7), null);


(lib.himheritsentstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgSATQgIgIAAgLQAAgKAIgIQAHgIALAAQALAAAIAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgLAAgHgIg");
	this.shape.setTransform(0.3,17.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.himheritsentstill, new cjs.Rectangle(-7.7,-33.3,15.4,66.7), null);


(lib.HIMARMSTILL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ADRDHQiEhjhTiTQAAgBAAAAQAAAAgBAAQAAAAAAAAQgBAAgBAAIgBAAQgFgHgNACIgDACIgCAAIgCACIgEABQgHACgEAGIgKABIgBAEQgcAmgtAWIgBADQgIAHgFACIgGAAIgBAAQgHgCAAgPQANgTAXgJIABgDIAAgDIgCABQgdALgdgJIgFAAQgTgDgOgHQgHgEgGgGQgOgOgFgWIAEAAIAAgFQAQAEARABIAFAAQA8gSAugeIALgHIAAAAIAAAAIAEgBIgBAAIgCgBIgFgDQgUgKgNgQQgMgPgHgUIgBgFIAAgEQAlgXAiAoQAKAMAWgBQAQAAAJgHIAAAAQAAABAAAAQABABAAAAQAAAAABAAQAAAAABAAIAAABQAGAAAFADIABABIgqACIgaACIgBgCQgrgIgagSQAEAdAVAIIAMAFQASAIAOAKIABABIgCAAIgCABIgBABIgIAIIgBAAIgMAMQglAegxASIgFAAIgpAAIgPAAQAEAOALAIQATAOApgIIAFAAQAlgYAqgSIAEAAIgCACQgkAkg7APIAAACIAAABIABgBQA8gOAugXIABAEQABAAAAAAQAAAAAAAAQABAAAAAAQABABAAAAIACAAIAAAAIADAAIgBACIAAABQgYAXgZAWIgBAAIghAZQADAJAEABIAAAAQAEgBAFgIQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAIAWgRIAAAAQAagVAXgZIABAAIABgCIABgDQAOgDAMgFQAJgFAIgFQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAIALAQQBbCPCDBoQAMAJATgIQACAAAAAAQABABABAAQAAAAABAAQAAABAAAAIgCABQgGADgZADIgCABQgFgFgHgDgADdBnQhQhvhnhZIAAAAIgOgMIgGgFIgCAAIgKgdIgJgZIAFABQAGAFAFAKIAAABIACAFQADAEABAFQAAAAAAABQAAAAABAAQAAABAAAAQABAAAAAAIACAMIABAFIAEADIAAABIAFAHIAIAFIACAAIAAAAIANALIAAABIACABIADACIAAACIADABIAKAJIAKAKIAJAIQBCA9A4BHIADABIABADIAHANIgDAMQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAg");
	this.shape.setTransform(-0.8,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("ADXDIIADgBQAYgDAGgCIACgCQAAAAAAAAQgBAAAAgBQgBAAgBAAQAAAAgCgBQgTAIgMgJQiDhohbiOIgLgRQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQgIAGgJAEQgMAFgOADIgBADIgBACIgBABQgXAYgaAWIAAABIgWAQQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAABQgFAIgEAAIAAAAQgEAAgDgJIAhgZIABgBQAZgVAYgXIAAgBIABgDIgDAAIAAAAIgBAAQgBAAgBAAQAAAAgBAAQAAAAAAgBQAAAAgBAAIgBgDQguAXg8AOIgBgBIAAgBQA7gQAkgkIACgCIgDABQgrARglAYIgFAAQgpAIgTgOQgLgIgEgOIAPAAIApAAIAFAAQAxgSAlgeIANgLIAAAAIAJgJIABgBIABgBIACAAIgBAAQgOgLgSgIIgMgFQgVgIgEgcQAbARAqAIIABACIAagCIArgCIABABIAFABIAJAZIAKAcIACABIAGAEIAOAMIAAABQBnBZBQBvQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAABAAIACgLIABADIAGAQIAKAWIADAIQAMAYAFAaQgFAGgDAHIgBAAIgCACIgfAAIAAAAgAA6hbIABAAIAJAJIgKgJgAA0hgIADAAIAAADIgDgDgAAlhtIAAAAQADAAACACIADABIAFAIIgNgLgAASh9IgBgEIgCgNIABAAIAGAVIgEgEg");
	this.shape_1.setTransform(-0.2,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.HIMARMSTILL, new cjs.Rectangle(-26.4,-20.7,52,41.3), null);


(lib.herobstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhvCnQgHgHAAgKIgBgzIgCg0QAAgUAEgnQAFgoAAgUIgCgiIgCghQAAgMAHgKQAIgLAPABIA1AEQAeAEATALQBZAvAABEQAAAhgeAZQgYAVglALQBFAkAhApQAGAHAAAIQAAAJgHAHQgGAHgJAAQgJAAgHgHQhJhIhYgZIACArIABArQAAAKgGAHQgGAGgKAAQgJAAgGgGgAhGhiIACAbQAAARgDAaIgFArIAKAAIAKABQA4AAAbgPQAMgGALgLQALgMAAgJQAAgfgjgaQgegYgjgEIghgCg");
	this.shape.setTransform(31.9,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhgCpQgVgUAAhGIABgfIABgkQgCgFAAgGQAAgGAEgGQAFhAAAgeQAAgIgDgQIgCgYQAAgaAWAAQAJAAAHAHQAagHAYgEQAXgDAUAAQA1AAAgAMQAPAGAAAPQAAAJgGAHQgGAHgKAAIgHgBQglgKgiAAQgSAAgVADQgVADgYAHIACAXQAAAfgEA1IBfgJQAqgFAKAAQAKAAAGAHQAHAGAAAKQAAATgUACIg1AFIhkAJIgBAeIgBAaQAAAwAHAJQAFAGAdAAIApAAIApgBIANgCIAMgBQAYAAAAAXQAAASgTAEQgVAEhDAAQhFAAgTgSg");
	this.shape_1.setTransform(3.9,1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AiJCuQgGgHAAgJQAAgXAEguQADguAAgYIgBgjIAAglIACg0IACg0QAAgJAGgHQAGgGAJAAQAJAAAGAGQAGAHAAAJQAAARgCAkIgCA0IABA3IBegRQA4gLAmAAQADggAAg/QAAgRAFgRQAHgXAOAAQAIAAAHAGQAGAGAAAJIgCAJQgDAJAAASIAAAUIABATQAAAWgEAsQgEAqAAAWIACAyQADAiAAARQAAAJgGAGQgGAGgJAAQgJAAgGgGQgGgGAAgJQAAgRgDgiQgCghAAgRIABggQgmAAg2ALIhcASQAAAUgEAkQgEAkAAAUQAAAJgGAHQgGAGgJAAQgJAAgGgGg");
	this.shape_2.setTransform(-27.7,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.herobstill, new cjs.Rectangle(-47.5,-33.3,95.1,66.7), null);


(lib.HERARMSTILL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("Ai4A1IgCgDIAEAAQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQAagPAsACQAAAAAAgBQAAgBAAAAQAAAAABgBQAAAAAAAAIAVgVIANgMIAHgFIgEABIgKAEIgNAHQgLAIgJAMIgEAAIgwAEIgCAAIADgBIAVgNIAhgUIACgCIgEABQgXAGgTALIgHAEIgIAFIgEAAQgQgCgMACQgNABgKAEIAAAEQgDAFgBAAQg4gHAugKIAHgCQgBgIgJgBIgCAAIAAAAQgKgBgSAGIAAAAIAAAEIgFAAIgEAAIgDAAIAAgCIgBgLIAAgEIgBgFIADABIAIABIAhADIABAAIAbACIABAAIAGABIABAAIADAAIAdADIAAgDIAEgBQAhgTAcgZIgFAAQgkgGgmgDIgFAAIgDAAQgEgBgDgBIgBgBIAAgBIgBgBIgBgBIAAgCIgBgBIAAgBIAAAAIAAgBIAAgDIAAAAIABAAIAJgBIADAAQA0gEAmAQIANAHIAMAIIANAKIAEABIApAAIAFAAIAmADIAKABQBJAEBKgIIAEAAIAOgJIANgGQAgAdApAVIgnAdIgFAAQhvANhigWIAAgCQgRgEgNgKIgJABQgfAEggAGQgMAPgQAMIgNAHQgWAMgRAAQgUAAgOgPg");
	this.shape.setTransform(-0.4,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ai0BOQgPgKgRgHIgCgBIgEgCQgWgGgXAAIgVgRIgJgVIAAgRQAFgFAFgDIALgBIADgBIADABIAHABQAGADAGAAQAFABAFgBQAFACAFABQADADAGACIABAAIAJACIACAAQALABAOgCIAFgBIAAgCIABAAQAWgPAXgOIAAgDQguACgcgOIgFAAIgDgBIgEgDIgCgDIAAgCIAAAAIgBgBIAAgBIAAAAIAAgBIAAAAIAAAAIAAgDIAAgBIABgHIAJgCIABAAIAEgBIAEgBIAXgDIALgBIAPgBIADAAIAEAAQAZAOAcANIAkAPIAEACQAAAAAAAAQAAAAAAABQABAAAAAAQAAABAAABIAlAAIAEAAQANAAAOABIANACIAFAAIABAAIADAAQAHAAAHgCIAPABQAhAHAfgGIACAAIAlgBIAEAAIAFACIgEAAQhKAJhJgFIgKAAIgmgEIgFAAIgpAAIgEgBIgNgKIgMgIIgNgGQgngRg0AEIgDAAIgIABIgBAAIAAABIAAACIAAABIAAABIAAAAIAAABIABACIAAABIACACIAAAAIABABQADACAEAAIADAAIAFAAQAmAEAkAFIAFAAQgcAZghAUIgEAAIAAADIgegCIgCgBIgCAAIgGAAIAAAAIgcgDIAAAAIghgDIgIgBIgDgBIAAAFIABAEIABALIAAACIADABIAEAAIAFAAIAAgFIAAAAQASgFAJAAIABAAIABABQAKABABAIIgHABQguALA4AGQABAAADgFIAAgEQAKgEAMgBQANgBAQABIAEAAIAIgFIAHgEQATgLAXgGIAEgBIgDACIggAVIgVAMIgDABIACAAIAwgEIAEAAQAIgLAMgJIAMgHIALgEIAEgBIgHAGIgNAMIgVAUQAAAAgBABQAAAAAAAAQAAABAAAAQAAABAAABQgsgDgaAPQgBAAAAABQgBAAgBAAQAAAAgBAAQAAAAgBAAIgEAAIACADQAaAdAvgZIAMgIQARgLAMgQQAggGAegDIAKgBQANAJARAEIAAACQBiAXBvgNIAFAAIAmgeIAOAHQgaAIgSAQIgIAIIgFAAQhtAPhbgYIgFAAIgXgCQgdgQgeAIIgEABQgwAmhKAMIgEgBgADNgsIADADIgNAFIAKgIg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.HERARMSTILL, new cjs.Rectangle(-29.4,-7.9,58.8,15.8), null);


(lib.goldennotesstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjdKMIgDgRQAIgUAWgGQAHgCAJAAIAFAAQABAIAHADQAGADgEADQgkAbARAQIAEAAQAygBgDg3QAAAAAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQgPgKgYgBQgMgBgNABIgEgBQgSgOgUgMIgBgFQgfgyAJhaIACAAQAHgcAOgSIACgBQACgNgJgFQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAgBgBIgFgDIARAAIAHgEIABAFQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAgBQAnhGgrgOIAAgBIAaAAQALAcAKAjIAAACIADAFIgeAsIABAEQAYApAVAsIAFgBQAxgPAZAeIADAAQAKAkgNAmQAAAAgBABQAAAAgBAAQAAAAAAAAQgBAAAAAAQgKAVgTALIAAAEIAAAvIgBAEIgXAdIgEAAQgWAKgQAAQggAAgLgjgAjpHOIAAAFQgBA4ATAlIAEABQAYANAqgEIAAgFQgLgqgIAhQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAgBgBQgVgXAKgyQgPgdgTgYIgDgDQgLADgHAigAiRHvQAHAlAVAYIABgFQAeg1g7gIIAAAFgACLj2IgBgDQgDgOABgLQABgJADgIQAIgWAcgKIAEAAQAWANAAAJQAAAJgWAFIgFABQgdgVAUAxIAFAJQAxgCACgyIAAgNIAAgFQAFgWgTADIgFABIgWAAQgmgDgXgRIgBgIIAPgGIAAgGIABABQAcAXAyACIgBgFQgPgfgRgdQgIADABAPIABANQgQgKgYAQIAAgQIAYgMIAGgVIgFgCQAAg1gjgoIgBAEQgVAmgLApIAAAJQgCAMADABIgJAFQgDACgDABQgJgGAAgbIAAgGIAMgVIgBgQQAMgiASgbIABgEQgLgSgJgTQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgIgtAKgmIACAAQAhgbAdAZQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAQAOAZgFAsIAAAFQgKAWgMAVIgBAEQAXAwAeAsQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAQBEABgDBJIAAAFIgbAmIgBAEQAKAmgMAoIgDABQgVAYgcAAQgUAAgXgMgABzqOIAAAFQgGA2AUAeQAJgMAEgQQAMg+geAAIgJABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.goldennotesstill, new cjs.Rectangle(-26.4,-68.7,52.8,137.4), null);


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


(lib.DOG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgWAgQAegXglgOQAFgNAMgJIADgDIAEgBIACAAIAFgBIAAAAQANADAHAGQAJAIgBAKIgDAHQgCAHgHAIIgEAEQgFAFgIAEQgJADgHAAIgHgBg");
	this.shape.setTransform(-14.3,-31.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AjwB3QgIgLAAgSIAUgJQArgRAngEIAAACQgGAUAJARIgDAAQgmAagegbIgBgDQgEgCgEABQgKACgBAVQAAAFgCAAQgCAAgCgDgAASgMQgCgEAAgFQA6gVA0gaIAHgDIAEgBIAAgBQA1gaA4gWIADAHIAAAFIgEAAQgyAPg3AbIgHAEIgEABQgzAdg5AVIgDAAg");
	this.shape_1.setTransform(4.9,12.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","#996600"],[0,0.333],-968.6,-74.7,669.8,-74.7).s().p("AjVDVQhSAAgngqIgBgEIgWghIAAgFIAAggQAEg9AggiIABgCQArgfA7AKIAAACIgEABQhLAVgXBLQgEAfAMARQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAIABAEQAXAhAbAcIAEACQAUANAcAEIgFAAgAj6DCQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAQgjgbgTgsIAAgFIAAglIABgFIABAAIAAgCQAYg8A6gZIAEAAQBCgIAcAQIAEABQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAQANATgTAJIAAAEIgUAeQgKgGgNAHQgjAPgXgHIgBAAIgCgBQgVAYgcgLQAMAoAeATIAAgDQAggNAvgFIAEAAQABAqAjAdQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAIgYAQQhAAAgvgQgAi+AmQgVACgIAPIgGAJQAXgQAegKIABgCQgKAAgJACgAAQBJIgFgLQAKgSAAgQIAKgLQABgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBQArgXAygRIAEgBQAJAygjAeQgBAAAAAAQAAAAAAABQAAAAgBABQAAAAAAABQgXAGggABIAAACIgFABQgKADgNAAIAAAFQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAgAgEhPQAcgHAlACIAEAAQASAFALAMIAEABIACAAQgtAggwAKQABghgMgWgAEChxQgQgWgTgTIAAgFQA+gWAygfIAAACQAUAnADAbIgEABQgLACgIAGIgEABQgnAGgfAQQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAg");
	this.shape_2.setTransform(5.6,11.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AlDFdIgCgCIgBgDQgHgIgBgNIgBgEIgEgBQgMgIgHgOIAAgFQACgQgCgLQgCgMgHgHIgBgEIgWgDIAAgUIAAgFIARACIABgMQAIgVgCggIgBgDIAAgFIABgEIAIgaIAAgCIAAgBQAGgUADgVIAEgBQA7hXBGhMIgEgHIgBAAQgNgEgRgBIgBgEQgWgag4AHQgFgJgLAFQgYALgZgVQAfAHgBgaIAIAEQANAFATAFQAIgGAGgCIAEgBQAwgBAIgpIAAgFIAFACQANAHADAOIgCAAQgcAYgqAJIgFAAIABADIACABQAXAKAaAFIADABQAHALAMAFIAJADIgCgFQgKgWAJgWQATg1AugLQAcANAJATQAKgdAOgIQAGgDAHABIAAACQgnAbAdARIABACIgWAQQgBAUgPAXIAFgDQgHARgFAZIgBAIIgBAGIAHgEQAAASgCAcQgTgMAEgZQADgTgCgOQgjAmgZggIg1BGQAJgEAMgCQAegDAXgGQBYAHgwBAQgMAQgVAHQhIAXgVg4QgGgOABgKIg4BOIgBAFQgHAigLAfQAVAPgUAgIgBAEIADAcQATAEgFAQIgNgCIAAAKIgBAJQAAAqAZgEIACAEIAJAiIABADQAAAAAAAAQAAAAABABQAAAAAAAAQABAAAAAAQAEAFAFADIgQgCgAAlFbIAAgBIgDgHIAAgBQgJgdgVABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAIgBABIgCABQgVANgcgJIgLgEQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQgkgcAAgrIgFAAQguAFghAOIAAACQgegTgMgnQAcAKAVgXIADAAIABABQAXAGAigPQAOgHAJAGQAKAFAEARQACAHAAAHIAAAEQgCAKgHAEIAAAFIAAAFIgBAEIgCADIgCACQAHAzA2AFIAEAAIADgBQAJgCAGgDIAAAAIABAAIAAAAIADgCQAIgFAGgHIAKABQAOgTAEgbIABgFQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQgCgEAAgEQANgBADAJIACABIAAAAIABgFIAAgJIABgGIAAgCIgBAAQgDgBgDgGIAHgBIgBgKIgDAFQglAzgegzQgQgaAJgdQAKggAYgVIAWgEIAAgBIAQAJIgTghQAJAAAEAFIABAEIADAAIAAgBIgBgEQgKgngigQIgCAAQACgEADgBQAIgEANASIACAAQAAgTgVgWIgEgBIgLgHIgLgGIgBAAQgJADgGAFIgNAJIgCABIgDACIgCACQgZAPgTACQgfACgLgpQAZADABAaIAQAAQAcgBASgJQAEgaAdgWQADgCAAgFIAAAAIgBgFIAAgDIgOALQgOAKgTgGQgYgHAAgaQAAgaAWgOIAWgDIAAgBQAyATgLAbIAAAAQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAgBQAcgagYgmQAHgEALAFIAFADIgEgEQgSgVgJgeQAeAggIgoQgHgggGgPQAAAVgPAaQgQAagbgTQgygjAag4QAKgVAUAAQgBgCACgEQAEgJgNgHQgugCgLAgQABgLgJgHQgCgMgSACIgGABIgCABIgEABIgBAAIgCACQgMAKgFANQAnAPggAXIgBABQgHAFgKgDQgKgEgCgKIgBAAQgGgDgCgHQAFAAAEgCQADgIAIgFIAHgBQAGgIAEgMIACgEQAKgNAVgDQAdAKAtgFIAFAAQApALAOAoIAAAEIgCADQAFAKABALQABgMADgDQADgDAGAJIABAEQAKA1AJA7IAAAEQgMAqgWAgIgDABIAAAEQgDARgIAOIgCACIAAAFIAAAEIAEACIAEACQAjASAPAmIABAFQAggIArADIAEAAQAQAKARAIIAFABQAhgXApgOIAFgBIAAgEQATgIAWgHQAAAAAAgBQABAAAAAAQAAAAAAgBQAAAAAAgBIgBgDQgMgIgGgMIgDgBQgCgEAAgFIATgDIABAAIABgBQAugLAOgZIABgBIgDAAQgMg1AnAoIABAAIAAADIACgBQAVgTAFAUIAAAFIADAAIAAABQAQArAXAjQABAIgJACQgLACgIAKQABgHgUgBIgBADQAAACgQgEIgCgBIAAAEQgBA1gugnIgCAAQgCAHgJgDQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAQg4Adg8AYIAAAFQADAzgRAhIgDABQgNAQgQALIgFAAIgqAAQgLACgGAFIgEAEIgBABIAAABIgCADIANgBIACAAIgOAJIAEAEIgDAAIgJgCQgJAQgHASIgCAAQgEAagRALQgDAfAQAVIABAEIABABIgJACIgBgDgAizDQIgVAJQABASAHALQAGAIABgKQABgUAKgDQADAAAEABIABADQAeAbAngaIACAAQgIgRAGgUIAAgCIAAAAQgnAEgrARgAC1BcQgxARgsAYQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABIgKALQgBAQgJASIAEALQABAAAAAAQAAAAAAABQABAAAAAAQABAAAAAAIAAgFQANgBALgDIAEgBIAAgCQAhAAAXgHQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAjgegIgzIgFABgAEqAEIgDABQg4AWg1AbIAAAAIgEABIgHADQg0Aag6AVQAAAFACAEIACAAQA6gVAygdIAEgBIAIgEQA2gbAygPIAFAAIAAgFIADgFIABgEIgEABgAAzAoQAMAXgBAgQAwgJAuggIgDAAIgDgBQgMgMgRgGIgFAAIgQAAQgbAAgWAFgAEXgmIAAAEQASATAQAVQABABAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQAfgOAngHIAFgBQAHgGALgCIAFgBQgEgbgTgmIAAgDQgzAfg9AXgAgLkrQAFgQgMgDIgSACQAPAIAKAJgAkXEjQAoAqBRAAIAFAAQgcgEgTgNIgEgBQgbgdgXghIgBgEQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAQgLgRADgfQAXhLBLgWIAFgBIgBgCQg7gKgrAfIgBAEQggAhgEA9IAAAgIAAAFIAWAhIABAEIgEgBQgHgFgGgHQgIgLgEgQQgEgPABgTQAGgwAQgkIABgFQAMgJAKgKIABgEQBKgjBsAQIAEABQADgDADgBIAEgCQAEgWgggmQAJAFAHAFIAFAGIADACQAeAdgIAyQgCALgCAbIgBgCQgGgCgHAAIAAgFQATgJgNgUQAAAAgBgBQAAAAAAAAQAAgBAAgBQgBAAAAgBIgEgBQgbgQhCAIIgFABQg6AZgXA8IgBACIAAABIgCAEIAAAlIAAAFQATAsAkAbQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAwAPBAABIAAACIgFABQgmAJghAAQhLAAgtg0gAikCvQAIgOAWgDQAJgCAJAAIAAADQgfAJgWAQIAFgJgAEKhHQgHgGABgMQBSgMhCAhIgCAAQgEAAgEgDgAmQiRQgWgNgMgYIgDgBIAAgpIAAgFQAHgOACgTIAAgEQARgSAKgZIABgEQAQgPAVgKQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBQBdAEA8AkQgngMg7gNIgEgBQgaAQgYASIgBADQgPAGgXABIAAADQgjAhALA3IABADIAAgDQATAHAHAogAhykvIgBAEIgBAFIgIAFQAHgIADgGg");
	this.shape_3.setTransform(0,-0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC6633").s().p("Ah5FWQgGgEgDgFIgEgDIgJgjIgBgEQgaAFABgrIAAgJIAAgKIANACQAGgQgUgEIgCgbIABgEQATgggUgPQAKggAIgiIAAgEIA5hOQgBAKAFAOQAWA3BHgXQAUgHAMgQQAwg/hXgIQgXAGgdAEQgNABgJAEIA2hFQAZAfAhgmQACAOgDATQgDAaASAMQADgdAAgSIgHAFIAAgHIACgHQAEgaAIgQIgFACQAOgXABgTIAWgQIgBgDQgcgRAngbIgBgCQgHAAgGADQgOAIgJAcQgKgSgcgOQgsAMgUA0QgIAXAJAWIADAFIgKgDQgMgGgHgLIgDgBQgagFgWgKIgCgBIgBgCIAEgBQAqgJAcgXIADAAQgDgPgOgHIgEgBIgBAEQgHApgwABIgEABQgGACgJAHQgTgFgNgGIgHgDQAAAagfgIIgCAAQgGgogUgGIAAACIAAgCQgLg4AjghIAAgCQAWgBAPgGIABgDQAYgSAagQIAFAAQA6ANAnANIAFAGQACAIAGACIABABQACAKAJADQAKAEAIgGIABgBQAIAEAQgGQAIgEAFgFIADgEIAJgGIAAgEIABgFIACgIQALggAuADQAOAHgFAJQgCADACACQgVAAgKAVQgaA4AzAkQAbASAPgZQAQgbAAgVQAGAPAHAgQAJApggggQALAdARAVIAEAFIgFgEQgKgFgHAFQAXAlgdAbQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIAAAAQAMgbgygSIgBABIgVADQgWAOAAAZQAAAaAYAIQATAGANgKIAOgMIABADIABAGQAAAEgDACQgeAWgDAaQgTAJgcACIgQAAQgBgagZgDQALApAggDQASgBAagQIACgBIACgCIACgBIANgKQAGgFAKgCIAAAAIALAFIAMAIIAEABQAVAXAAARIgCAAQgNgQgIACQgDACgCADIADAAQAiARAJAnIABAEIAAABIgCAAIgBgEQgEgGgJAAIASAhIgPgIIgBABIgVADQgZAWgKAfQgJAeAPAZQAfA0AlgzIADgFIABAKIgGAAQACAHADAAIABAAIAAACIAAAGIgBAKIAAAEIAAABIgDgBQgDgKgNABQAAAFACAEQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAAAIAAAEQgFAcgOATIgKgBQgGAHgJAFIgDABIAAAAIAAAAIgBAAQgGAEgJACIgCAAIgFAAQg1gEgHgzIACgDIABgDIABgEIAAgEIAAgFQAHgFACgJIABgFQAAgHgCgGQgFgRgKgGIAVgdQAHAAAHACIAAADQADgcACgKQAHgygegeIgCgCIgGgFQgHgGgJgEQAhAlgFAXIgEACQgDABgCACIgFAAQhrgRhJAkIgBADQgLALgMAJIAAAEQgRAlgGAvQAAAUADAPQAEAPAJALQAFAHAIAGIAEABQA/BKB/ggIAEAAIAAgDIAYgQIAKAEQAcAKAWgOIADgBIABgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQAUgBAJAeIABAAIACAIIAAAAIABADQgeAGgiABQg4AFg5AAQhTAAhUgKgAC3kpIACgCIAIAIQgDADAAANQgBgMgGgKgACUlGIATgBQALADgFAQQgJgKgQgIgAAslcIAAAAIgFABIAFgBQASgDACAMQgHgFgNgEgAAglaIABAAIgEADIADgDg");
	this.shape_4.setTransform(-18.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.DOG, new cjs.Rectangle(-43.7,-35.6,87.5,71.3), null);


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


(lib.himobstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9900FF").s().p("ACHClQgHgKgFgYIgIgnQgJgigTh4IgsCEIgNApQgIAZgIAQQgKARgPAAQgMAAgIgOQgFgJgEgOIgGgZQgXhNgQhYIgIAnIgcBzQgCAVgKAnQgGASgQAAQgKAAgHgIQgFgGAAgKQAAglAPg1IAZhYIAMhFQAKgxALgPQAIgMAOAAQAOAAAGAQQAJATAKA9QAMBIAYBTQAghUAYhbIAGggQAEgTAHgNQAIgQAPAAQATAAAKAlQADANAFAnQANBiAUBGIAKAmQAJAfAAAGQAAAKgHAGQgIAHgJAAQgLgBgIgMg");
	this.shape.setTransform(30,2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9900FF").s().p("AhgCiQgGgHAAgJQAAgKAGgGQAGgHAJAAQAPAAAhgEQACgSAAgXIgCglIgBglQAAgyAGhMIgdABIgcABQgKAAgGgHQgGgGAAgKQAAgUAUgCQASgCAxAAQArAABCAJQATADAAAVQAAAKgHAGQgHAFgIAAQgPAAgVgCIgjgFQgFBAAAA5IABAmIAAAmQAAAVgBARIBFgBQAJAAAHAGQAGAHAAAJQAAAKgGAHQgHAGgJAAIglABIglAAQgNAAgdAEQgdAEgPAAQgJAAgGgGg");
	this.shape_1.setTransform(-2.4,2.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9900FF").s().p("AiJCuQgGgHAAgJQAAgXAEguQADguAAgYIgBgjIAAglIACg0IACg0QAAgJAGgHQAGgGAJAAQAJAAAGAGQAGAHAAAJQAAARgCAkIgCA0IABA3IBegRQA4gLAmAAQADggAAg/QAAgRAFgRQAHgXAOAAQAIAAAHAGQAGAGAAAJIgCAJQgDAJAAASIAAAUIABATQAAAWgEAsQgEAqAAAWIACAyQADAiAAARQAAAJgGAGQgGAGgJAAQgJAAgGgGQgGgGAAgJQAAgRgDgiQgCghAAgRIABggQgmAAg2ALIhcASQAAAUgEAkQgEAkAAAUQAAAJgGAHQgGAGgJAAQgJAAgGgGg");
	this.shape_2.setTransform(-31.7,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.himobstill, new cjs.Rectangle(-51.5,-33.3,103.1,66.7), null);


(lib.texthimherit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_194 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(194).call(this.frame_194).wait(1));

	// vert2
	this.instance = new lib.VertLine("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(52.5,158.2,1,0.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(119).to({_off:false},0).to({alpha:1},5).wait(71));

	// vert1
	this.instance_1 = new lib.VertLine("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-81,167.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(119).to({_off:false},0).to({alpha:1},5).wait(71));

	// horz
	this.instance_2 = new lib.HorizontalLine("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.1,178.5,1.15,1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(119).to({_off:false},0).to({alpha:1},5).wait(71));

	// chose
	this.instance_3 = new lib.pronounchosewechose();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-15.9,155.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(129).to({_off:false},0).to({alpha:1},5).wait(61));

	// we
	this.instance_4 = new lib.pronounwewechose();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-123.9,155.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(124).to({_off:false},0).to({alpha:1},5).wait(66));

	// we chose
	this.instance_5 = new lib.himheritsentobstill();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-63.4,162.3);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(67).to({_off:false},0).to({alpha:1},5).wait(37).to({alpha:0},5).to({_off:true},1).wait(80));

	// period
	this.instance_6 = new lib.himheritsentstill();
	this.instance_6.parent = this;
	this.instance_6.setTransform(154.9,162.8);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(67).to({_off:false},0).to({alpha:1},5).wait(37).to({alpha:0},5).to({_off:true},1).wait(80));

	// it
	this.instance_7 = new lib.itobstill();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,161.2);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(44).to({_off:false},0).to({y:159,alpha:1},5).to({scaleX:1.85,scaleY:1.85},5).to({scaleX:1,scaleY:1},10).to({x:125.6,alpha:0},5).to({_off:true},1).wait(29).to({_off:false,x:90.3,y:162.3},0).to({alpha:1},5).wait(5).to({alpha:0},5).wait(40).to({x:104.3,y:156.3},0).to({alpha:1},5).to({alpha:0},5).wait(20).to({alpha:1},5).wait(6));

	// her
	this.instance_8 = new lib.herobstill();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,162.3);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(24).to({_off:false},0).to({y:161.2,alpha:0.988},5).to({scaleX:1.57,scaleY:1.57,y:159,alpha:1},5).to({scaleX:1,scaleY:1,y:161.2,alpha:0.988},5).to({alpha:0},5).to({_off:true},1).wait(39).to({_off:false,x:100.2,y:162.3},0).to({alpha:1},5).wait(5).to({alpha:0},5).wait(45).to({x:108.2,y:154.3},0).to({alpha:1},5).to({alpha:0},5).wait(20).to({alpha:1},5).to({alpha:0},5).wait(11));

	// him
	this.instance_9 = new lib.himobstill();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0,160.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleX:1.64,scaleY:1.64,y:159},4).to({scaleX:1,scaleY:1,y:162.3},5).wait(10).to({alpha:0},5).to({_off:true},1).wait(47).to({_off:false,x:100.2},0).to({alpha:1},2).wait(5).to({alpha:0},5).wait(50).to({x:109.2,y:154.3},0).to({alpha:1},5).to({alpha:0},5).wait(20).to({alpha:1},5).to({alpha:0},5).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.5,126.7,103.1,66.7);


(lib.ITARM = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(1));

	// Layer 1
	this.instance = new lib.ITARMSTILL();
	this.instance.parent = this;
	this.instance.setTransform(-19.9,57.9,1,1,60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({x:-48.7,y:55.2},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.7,42,31.5,31.9);


(lib.HIMARM = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_11 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(11).call(this.frame_11).wait(1));

	// Layer 1
	this.instance = new lib.HIMARMSTILL();
	this.instance.parent = this;
	this.instance.setTransform(25.5,20.7,1,1,0,0,0,25.5,20.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:25.6,rotation:-30,x:27.9,y:17.7},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.4,-20.7,52,41.3);


(lib.HERARM = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// Layer 1
	this.instance = new lib.HERARMSTILL();
	this.instance.parent = this;
	this.instance.setTransform(24.3,-0.2,1,1,45,0,0,24.6,3.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({regY:3.6,rotation:0,x:24.6,y:3.6},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.9,-46.6,52.8,52.8);


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


(lib.Goldennotes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.goldennotesstill();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.4,-68.7,52.8,137.4);


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
		var bgm = createjs.Sound.play('bgmusic',{loop:-1});
		var vo = createjs.Sound.play('VO14');
		
		//volume vars -----------------------------------------
		var mute= false;
		bgm.volume = 0.2;
		var prev_vol = bgm.volume;
		
		//Menu function -----------------------------------------
		function openMenu(){
		
		 window.open ("../menu/menu.html","_self");
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
		
		 window.open ("pronoun_Scene15.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("pronoun_Scene13.html","_self");
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


(lib.HIMHERIT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Goldennotes();
	this.instance.parent = this;
	this.instance.setTransform(-44.1,-33.5);

	this.instance_1 = new lib.DOG();
	this.instance_1.parent = this;
	this.instance_1.setTransform(143.9,63.2);

	this.instance_2 = new lib.ITARM();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150.9,6);

	this.instance_3 = new lib.HERARM();
	this.instance_3.parent = this;
	this.instance_3.setTransform(10.8,-16.1);

	this.instance_4 = new lib.HIMARM();
	this.instance_4.parent = this;
	this.instance_4.setTransform(16.2,-49.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("EAhrAL1MAAAgi/MhDVAAAMAAAAjAIAAAGIAALPMBDVAAAIAAqw");
	this.shape.setTransform(1.5,4.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AD2G8IgEgBQg0gwABhlIAAgEQALgnAXgZIADgBQAVADAQAHQAXAMAMAXQAAABAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAYAwgBBJIAAAFQgMAggWAWQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgHACgGAAQgPAAgPgLgADSEYIgBAFQgIBvBAAmQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAXgPALgaIAAgFQAAhdgqgzIgFAAQgJgDgHAAQgcAAgCAogABTGOIgBAAIgEgEIAAgBQhth0AAjhQALg+gChMIAAgFIAAgFQAEhcgbg9IAAgFIAAgJQAsgVAdgHIACAEIADAAIAAAKIAAAEQAYALgHAoQgFAZgGgWQgIgdgIgLIAAAFQgNAdASAWQAJAAAAAEIgEAvQAIgbAFAcQACAPgEgBQgKgCgdgNQANAjAbAHQACAAAAAKQgbAKAZAGQACAAAAAHIgBAEQgFAVgNgeQAAAoALAWIgCAIQAUgDAIAIQAMANgPAIQgJAFgBgBQgOgMgFgJIgBADQgOALgSgKQgGA0AigWQAHgFAGAIQAKAMAFAQQgNAYgIAbQgCAJAAAJQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAgBQgEgGgMADQAgAmAhgDIAAACQAEAhADAzQABARAQAGQAfAEABgbIABgEQAbAIAcgIIAEAAQgLAxACA+IAAAFQANATAFAbIABAFQAQAZAaAQIAAABIgNAAQhdAAg6g3gADwGSIgCgBQgGgTgKgRQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAIAAhKIAAgFQAJg4AiAgIADABQAnA/gSBNQgDAOgNAEQgXAAgHgSgABYDAIACgEQAsAGgTA9QgBACgHAAQgcgNAJg0gAAqB/IAAgFIAAgcQAQgLAJAPIADABIACAKQAFAigLAAQgIAAgQgQgAhzmRQgVgCgWgFQgngIgHgmIATAAIAFAAQAPAIAWABIAEAAIAFABQAXAJATANIAEABQARALgVAHIgJABIgMACIgCgBgAlFmvQAWgUArABIAFABQARAHAPABQAWABgWAGQgLADgMAAIgEABQgTAFgSAAQgTAAgTgGg");
	this.shape_1.setTransform(70.3,34);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","#996600"],[0,0.333],-3.2,29.7,-3.2,29.7).s().p("AhOLnIgCAAIgCAAIAAAAIgDgBIgEgBIgCAAQiDgcgmiGIAAgEIAAhwQAehwAqhlQAGgQgDgbQgogigbgxIgDgBQgHhLAWgvIAAgBIAEACIAAAqIAAAFQAIAZARAQQATAUAeAIIAFABQAUAAALgKIACgCIADgDQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIABgCQADgcABgdQACgpgCgrIAAAAIAJBUIAEAuIAAACIABAHIAAAAIABAJIADAuIAAAFIgCAAQABgNgIgBQADAdACAeIAAADIACAyIACAAQALCfADCmIAAAFIgDABIgBAAIgOANIAAAFIACAFQAHAIAZgPQAFgDAHAAIAAgFQAmgHASALIADABIABAAIAAACIAAABIABABQApAnhPgGQAAABAAABQAAAAABAAQAAABAAAAQAAAAAAAAIABABIAAACQg0ASgYglIAAgBIAAABIgBADIgEABQAGAfAiAGQALACAPgBQA0gDAagaQACgUgWgUIgBgBIgDgCIgBgCQgCgDgEgCIgGgGQgcjhgOjwIAAgFIgEg1IAAAAIgBgPIgEgvIAAAAIAFAAQgCAhATAOIABADIAGADQAaAMAhgKIAEAAQAUgSAMgZIABgEIAEABQAZAMgiAmIAAAFIgBAEQgPAdgMAgQgBBxA/AxIADABIgBgDQg5gyADhuQAKgbAMgYIABgFQAPgjASgKIAEAAQAEAogaA0IgBAFIgBAEIgIAcQAHA4AUAqIAAAFQA5AwAoBAIAQAdQAXAtAQA1IACAKQAGAWgCARIAAADQgCACAAADIABABIgBAFIgBACQgWBGgnAyIgBACIgZAYQgXANgWAPQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgEAAIgTgFIAAgEIAKgGQAogWAagjQArg6AGheQAEhCgVgsQgHgPgKgNQglgwgyglQAVAcAaAYQArAoAQA/QAgB9g/BTIgbASQgkAYgZAhIgEABQgZATgpADIgFAAIgdABQgiAAgdgFgAgNJDIgFAAIgEAAIAAgEQgMiBgQh7IAAgEQgGhKgDhLIgBgFQgDgygEgwIAAgBIgBgEIAAAAIgBgJIAAgEIgCgIIgCgLQgFAAgCACIgDADQgGghgFglIgDgbIAAAOIAAAFIgCgBQgCgQAAgQQALgTACgSIABgFIgBgEQgPhwgCh8IgBgsIACAAQgJgDgKAAIgVgSIgJgUIAAgTIAGgEQgFgQAAgQQgNgXgLgZIAAgFIAAgEQAjgTAYgdQAPgRgJgTQAggMgKgdQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBAAAAAAIgFAAIgBgBQgGgIgJgFIAQAAIAFAAIAAACQAhgQANglIACgBQAQATAYAOIABACQgLANgbghIgCAAQAMAbAbAPIgBADQgQAVgLAbIgEABQglAQghAUIAAAOIAAAFQAgAPgJAMIgFAJIgGANQgGAPgBATIAAAFIABADQABAHgCAFIACgBIAAA7QAAALABALIACAMIABADIACACIACABIgBARIAAAFQAQChAKCgIACAAIAAAOIAAAFIAEA9IACATIAAABIADAUIAAAFIAGBUIALCUQALCCAOB+IAAABIAAAEg");
	this.shape_2.setTransform(-3.3,29.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC6633").s().p("AkiB/IAAgDQAUgGAIgLQAIAAAIgGQAughgdgYQAkgCAqAFIAFABIASABIAFgBQAOgBAKgHQAdAqA6gLQAMgCAAgMQAAh4h2gwIgBABIgVADQgvAwA5AtIACACIgJgEIgEgBIgBgDQgQgMgZgDQgBAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQgNgdgfACIgBgDQgegSgLgjIgEgBIgKgEQCMAQCNgLQAhgBAfgGIAEAMIAAAAQAIALAKAIIAGAGQAVARAdAIQASAFAVACIACABIAAAAIAUABQAlABAOgXIAggGQgOANAAAUQAAAaAXAIQATAGAOgKQA8gthFgbIANgFQAEgCAPgDQALgCADgKQAEgKAGgCQAHgBAJAKIADAEQAXAxghATIAAgJQgJABgKAgIgDABQgOATgGgZIAAgCQgkAgg0AUIgFAAIgcAAIgXAAIgBgCQgigIgUgUIgEgDIgFgHQgGgIgFgLIgEgBQgbgFgWgXIgHgIIADAFIgVAMQgWgZAHgnIgCABIgKASIgDAFIgDAFQgHAKgGAIQgBAMAGAFIADABQAjAjAiAjIABAEQAnALATAiIACABIAIAWIgRAGIgFAAQgfgEg0gBQAAABgBABQAAAAAAAAQAAABAAAAQAAAAAAAAQgYAKgaAGIgEAAIgcgFQgBAAgBABQAAAAgBAAQAAAAAAAAQgBABAAAAIgEADQgRAMgfgDQgFgPgLABIgIADQgwAWgegZIgFABQgfATgwAEIAAAAgAkyBaIACgBQgiAKgNgKQAWgSAbgLIgBAMQAAAYAUAIQgVAIgYAFQgMgNAigOgAmEAwQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAMgMgWgIQA2gpBfASIAEAAIAEABQAwAMAogTQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAgBQAWAGAMAEIABADIAIAUQgIAGgVAGIgEAAQgtAAgsAFQgKgIgTgHIAAABIgWADQgKAHgFAIQgVgCgPgHIgEABQgQAJgZAAIgLAAg");
	this.shape_3.setTransform(141.8,110.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgpEzQg3gIg+gdIAAgEIAAgKQAQgeAJgnIADgBICPAcIAFAAIAAAEQARAigNApIgEABIguANIgNAAgAg9hXIAAgDQgngFgHgiIAAgFIAAgJQARgLABgaIAAgFQAxhAA2g4QABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAQgXAbgRAiIgBAEIgDAAQABAKgIgBQARBBAzgwQArgnAhgpQgEAEAEANIgDAAQgJAegMAaIAAAgIAAAFQAGANAHALIABAEIA6AlQABAAgDAFQAAAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQg9AfhRAAQgjAAgogGg");
	this.shape_4.setTransform(63.9,-10.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#009933").s().p("AAjDxQAGgxADg5QADg9gWghQALBggKBfQgCAagogRQgEgEgGgCQgIgDgBgCQgNg6gFg9IAAgFQAEghgCgdQgDgngMgcIAFBnIAEBOIAAAEIAAAFQAEAigJAWIgBACQgeAKgdALIAAgFQAJhRgJhNIgDAAQADBUgPBBIgEgBQglgLgXgZQAIgEgEgPIAAgEIAAgFIAAgTIAQhMQAQhPAOhVIAAgBQACgLADgLQAEgMACgNIAAgEIADAAIgDAAIABgIIAKg7IgBgCIgBgBIgBgDIgBgEIgCgIIgCgJIAAgIQAPgPAYACIASAEIAJADQA9AWA3gLIABAAIgBAAIgOAOIABACIgBAAQgEABgCAFIgBABIAAABIgBADQASAFAPAPQAFAEAHACQALADAIAEQAOAEANAEIAEACIAEACIAMgHIAAAAIABAAQAKgKAMgIIACABQAHAEADAIIACAGQAGAhgeADIAAAEIgFAAQgbgDgQAKIgBABIgEAEQgFAFgDAHQAOAXAtgOQAKgDAUADQAKAmABAyIACAAIAAAKIAAAEIAAA8IAAAFQAGANAIALIABADQgKAagCAeIACAAQAAAOADAOIACAAIAAAFQADAfgIAUQgoAUg5AHIgRABQghAAgLgTgAhRjYQAOAAANgCIAQgBIgSgBQgGgBgFgGIgEgFQgFAMgFAEgAhjjkQgDAHgGAEIARABQgFgFgGgSg");
	this.shape_5.setTransform(28.2,2.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF6600").s().p("AA/CAIgBAAIgLACIgCACIAAgLIAMAAIAFAAIABgDQAIgHABgDQAGgKgsATIgHAAIAGgDQAXgNAOgcQgXAfgpgGQAogCAEgjIAAgFIgCAAIABgEQAGgNgDgIQgCgIgLgEIAAAJIAAAFIgFAAQg3AAglgFIAAgCQgdgGgNgUIgBgDQgHgXgPgPIAAgEIAAgFQAOgGADgEQABgBAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAogbBLAIIAFABQAbAOAUAWIAEABQARAagGAhIADAAIAFAEIAEABQAGAGABAMIACABQABAAABAAQAAAAAAAAQABAAAAAAQAAAAAAABQALAOAIARIACAFIAAAEQAFA8grgWIAAAEIADABQACAJABAIQgJgKgXgBgABMBGIACAAIAAgCIgCACgACjAZIAAgBIgEAAIAAgDIgBAAQgSgGgJgPQAdAAAXAEIAEABIABACIAAABIAAAAQAkATgcAZIAAACIgNAEQgHgUgNgNgADRAGQgFgEgIgCIAAgBQgpgGAAgPIgFABQgTAGgJgHQAigaAtAHIAFAAQAIASgdgCQAnAGgKAegABPgxIABgKIgEgCIgFgDQAHgGAIgFIABAAIAGgDQgTAEgNgEQAKgEAIgHIABAAIAAgDIAFAAQAdgKAXADIABAAIAAAAIAOAEIABAAIAAAAIgDAIQgGgEgHAAQgIAAgKAEIgJAEQAPgCAQAGIAEABQgHAMgYAAIAAAAIgLAAIgMgBIAAABIAIACIAIABQA7AMg5AaQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAABQgegEABgXgAjXgZIAHgUQAXgOAggEIABAAIATgBIAFAAIACAFQgOgCgMACQgkAFgUAggAh8hFQgPgOgWgBQgkAAgGgIQA1glAdA6IACAEIABADIgGgFgAjLhlIAAAFQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAAAAAAAIgBgEIgCgJIAAgFIAAgFQAbghAnAcIAEABQAJAOANAKQABAAAAABQAAAAABAAQAAABAAAAQAAABAAABIgBABQgqgjguAdg");
	this.shape_6.setTransform(77.2,-77.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#996600").s().p("ABPBbQgCgEAAgEIgCggQgBgUgFgTIgEgLQgGgQgIgQQgLgEgKAGQgLAGgHgJQgIgLgLgDIgCAAIgHgBQgFAAgDgEQgEAAgDgDIAAABIACADIACADIAFAGQABAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQgEAEgFgCIgCgBIgCgCQgLgKgJgMIgEgEIAAAAQgJgIgBgKIgBgBIAAgDIABgEIAAgBIAAAAIABAAIABgBIACAAQAEABABADQAFADADAGIABABIABgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBQADgDAEABQAPABAMgEQAjADAlAAQAOAAAMAEIAKAFIAUAKQALAFAJAGQAQAOAAAVIABAbIABAEQACAJgBAIQAAAJgCAIQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBgBIgNAAIgKAAQgFADgDAFIgBAAIAAABIgDAGQgHAVgRAOQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgDAAgCgCgAhZgYIAAgEIAAgCQgSgNgRgPQAEAFABAHIABADIABACQAIACAGAGQAAAAABABQAAAAAAABQAAABgBAAQAAABgBAAQgDADgFAAIgGgCIgBAAQgNgHgDgQIgCgEQgDgCgFgBQgDAAgCgCIAAgBIgBgDIABgEIABAAIABgBIADAAIAAgBQAOACAGAJIABgDQAEgGACgEIgDgBIAAgCQgBgDABgCIACgBIAAAAIAAgBIAAgBIABAAIABgBIACAAIABgBIAGgBQAFAAAEACQAFABgBADQABAAAAABQAAAAAAAAQAAABgBAAQAAABAAAAQAFAGgGAHQgEAGAHAGQALAIAKAEIAAAAIACgBIADgBQAGACAAADQAAAEgFADQgGAGgHABIgDAAIgHgBgAg0gmIgEgEIgSgOIgIgFIAAgDQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgBIABgBIADAAQAGAAAEAEIAAABIAJAFQAMAIAIALIABACIgCACQgCADgEAAQgDAAgEgEg");
	this.shape_7.setTransform(24.7,-120.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCC99").s().p("ABfT0QgOgRgKADQgBAAgBgBQAAAAAAgBQAAAAgBAAQAAgBABAAIACgEQgYAOAAgZQAPgIgXALQgRAJAEgUQABgKgjgFIAAgFIAAgEQA9gSBSgGIAFAAQAhgBAWgKQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBQAcgLAggKIABgCIAAiaIAAgFIAAgEQAFhTgPg9IAAgFQABhJgUg0IgCgEIgCgGIgBgEQgbhEgNhSIgBgEIgBgFQgViJgKiTQAOgFANgGQAAAAAAAAQAAgBAAAAQAAAAAAgBQABAAAAgBQAZgHAZgHIAFAAIAAAFQADBFgIA5IAAAbIAAAFIABAFQADAbgIAPQACA2AIAvQAXCQBQBZIAEABQAEAGAGAGIADABIAAAFIgcCoIAAATIAAAEQgOCIApBPIABAEQALAVgdgEQg6gHhDAQIgyAOQgnAMgYAXIgDgBgAgkScQgCgQAMgCIAEAAQgCgUgVAdQAAAPgIgHQgFgFAIgHQAkgfg3gRIAhAAIAFAAQCFAIBMgwIAEgBQANhdgEhsIAAgEIAAgFIgCgVIABAAQADAAACgCIABgEIgIgBQgHhSgNhMIADAAQgyihgyigIgBgFQgPhFgIhMIAAgEIAAgFQAyALAlAXIABADQAYCVAMCjIABAAIAhB6IAJAgIABAFQAYA0ABBOIACAAIABAlIACBPIACAAQAAAtAFAsQAKBQgrAWIgEAAQhDACg7AHIAAAGIgDAAQgZAdgqgLIgDABQgQAMgMAAQgOAAgKgNgAlARkQAFgZAagIQANgFgmAFQgrAGgEgPQAagFgHgOIgBgEIAOAAIAFAAQB4AMAxhRQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAJgqAFguIAAgFIACAAQAGhAgIg1IAEAAIAFAAIArAkQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAIAAAEQADAcgIAPQgHBHAdAlQAAAAABAAQAAABAAAAQAAABAAAAQABABAAAAIAAAEQAZAeAMAtIgEABQgoAXgtASIgEAAQg2gNgoAXIgEABQgxASgnAAIgPgBgAhkReQgJgFADgRQAugKAigWIAEgBQA7hJgThmQgBgGgHgFIAAAAIASgGIABgEQgUgHgTgEIgEAEQglgYgbghIgDgBQhXhFhNhPQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQgngogjgsIAAgFIAAglIgBgEQgHgLAEgWQAIgjgEgtIAAgEQAFg9ANg7QABgCAIADQAGACAFAFQAXALAkgWQAOgIALAOQAXAOgIAvQgSBigVBdQAoAsAtAmQAAAAABABQAAAAAAAAQABAAAAAAQABABAAAAQAGATAOAMIAEABQAMAfAYAVIABAEQAbAhAeAfIAEABIAMAYIAAAEQAOALANAOIABADQA2AUAwAcQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAABIgBAEIg7BeIAAAEIgBAFQgKAugIAvQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQgIAPgQAIIAAAEIgFAAIhOAAIgEAAQgWgCgMAHIAAAEIgDgBgAhBK+IhJhjIAAgFIAAhBIAAgEQgBg/gSgtIgBgEQgYgvAGhPIAFAAQAaAAAJARQAAABAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAqAHAkgCIACATIAABPIAAAEQAZA3gFBXIgCARIAAABIAAADQACAXgCAPIgFAhQgFAxgRAGQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAAAgACjB1QgzgHgggYIAAgEIAAgGQATgoASgrQAEAaAUAKIAEABIAEAGIABADQAQAQAVANQAIAGgNAIQgFASALAGQAbANgWAAQgKAAgUgCgAC/BWIAFgBQAkgQAdgZIAAgCQhBAEglgLIAEAAQAtgHAkgPIAWgLIgFAAIgUAFIhXATIgJAAQAlgaAqgUQgWgCgdARQgjAUgMgVIAAgFQAggGAjgSQAOgHARgBQARALAOANIACADQATAQAlgBIAEAAIAegMQA6gVA2gZQBCgeA9gjIAAAAIABgDQgdg+gmgzQgog0hLgRQgWAegOA3IgBAEQgrgDgTgdQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAQgLg4AYgqIABgEIAAgFIAAgFQAIgPAGgRIAAgFQBDgeA3AmIAEABQBgBeBeBiIAAAEQAAABABAAQAAABAAAAQAAAAAAABQAAAAAAAAQAmAaAIA3QhbBAh8AhQg/AQg4AWQgtATgoAXIgTAMQgYAPgTAAQgLAAgLgFgAEIgTQgPgRgVgMIgEgBQgxgQgsgUQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBAAQgOgMAHggQAJgNAGgSQABgBAAAAQAAAAAAAAQABAAAAAAQAAgBABAAQBmAWBjgaIAEAAQgTBBgNBGIAAAEIABAMQgXACgZAAQAAAAAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAgAhEiIQgIgFgLgCQgHgCgEgFQgPgOgTgFIABgDIABgBIABgCQABgEAEgBIABAAIADAAIAJgGIAEAAIAjgTIADgBQAWgbAdgVIAOgKIABgBIAAgCIACgBIAIgHIAggVIAXgQIBuhMIAEgCQAHgEANABQgvA8guBLIgWAmIgBAFIgDABQgHAHgOABIAAAEIgDABIgYARIg1AmIgKAHIgGAKIgBABQgNgFgOgDgAjrjTIgSgDIgRgEIgBgBIgVgGIAAgFQAAgqgFglIAAgEIAAghIgDgDIAAgYIABgBIABgBIAAgDQgBgfgBgfIABgBIABgBIAAgDIAAgKIAAgBIABgBIAAgCIAAgKIAAgBIABgBQABgNgCgMQgDgkACgjIAAgBIABgBIAAgCIAAgKIAAgBIABgBQAAgWACgWQAAgQAEgQIgCgIIACgIIAAgBQgBgGADgDIAAgOIAAgBIgCgGIAaiKIAKgFQALAHANAAIASACQARACAPgEQADABAEgCQAEgDgBgHIgBgFQgHgbgbgCQgPgDgPAGIgBADIgugCQgEgIgIgHQgGgHgEgHIgPgiIAAgFIAEAAIAigDQAdgFAagPQAMgHAGgKQAMgSAPgOQAIgJAMgDQAEgBAEgDQgLgHgKgHQgKgHgIAIIACABQgDAugnAeIhXATIAAgEQAFgXgJgTQgHgQgSgDIgGABIABgCIAMgNQARgSAJgVIARAAIACgFIAAgIIACgDIgFgWIACgBQAAAAABAAQAAAAABgBQAAAAAAgBQAAAAAAgBIgBgFIABgBIABAAQgBAEACAEIABAAIAFABQgGAKADALQAIAFADAHIADACQABAAAAABQABAAAAAAQABAAABAAQAAAAABgBIAAABIAAADIADACIAAAEQAFAEAGgCQAOgFAEgMIABgDIABAAQABAAAAAAQABAAAAgBQABAAAAAAQAAgBABAAQADgKAAgKQAAgGgCgDQAAgPgLgMQgCgCgEgBIgVgCQgKADgIAHQgEAEACAFIABABIgBABIgBABIAAABIAAAAIgCACQADgPgRgDIAAgIIAMACIABgCIABgGIgBgCIgCgBQgGgEgGgCIgBgJIgCgTQgBgEABgFQACgGgFgDIAFACIABAAIAGACQAYAHAOACIgBgDIgFgDQAHgBAHgGQAFgDgBgEIAGABIAFABIgFgFQgMgIgGgIIARAOIAFAEQAHAGAGgFIACgCIACACIADACIAAgBQAFACAEgEQABAAAAgBQABAAAAgBQAAAAAAgBQgBAAAAAAIgFgGIABgBQAJAGAKACIgBgFIgBgBIACAAIACAEIAJALQAIAIAMABQACgCADgBIACgBIACAAQAWApAKA0IABAEQgDAwAbgWIAKgLQAPgQACgRQAKAJADgKIABgDIAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQAZAlgOA1IgCADIgBAAQgTAugnggQAGAaAZAGIgCAJQgBAKgEAEIgBAEIAAAAQgGATgJAPIgDAEQgEAvAPAcQAEAHAFAFIADABIAFgBQAzggBFALIAEAAQASAPAMAUIADAIQgBCegcCEQgRBXgdBMIgJAXIgDALQgHAQgDAMIgBAGIAEAPIAGgJQAGgNADgRQAAgBAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAGgGACAGIABADIAAAFIAAAAIgEAWIgBABQgBAEAAAEIABABIABAAIgEADIgEADIgBAAIgLAKIgNAIIgCACIhAAtIgEAAQgpAKgqAAQgeAAgfgGgAg2nJIAAAEIAAAFIAAAEQAAAdgJAUIAIALIAAgFIAFggIAAgEIACAAIABAAIAAgBQAXimAQiWIgCAAQgTCTgZCKgAj/pIIABAAIgBAAgAkGrTQgCAUgCAPIgDAQQACAEgCAFQACAVgDAUIAAACIADAEQADAEABAFQAAABAAAAQAAABAAAAQABAAAAAAQAAABABAAIgBgHIgBgJQgDgjACghQACghAIgeQgIAOAAAOgAj9yGIADAGIABACQAGADAFgDIACAAIAAgBIABgEIAAgCIgBgCIgGgJIgBgCIgDgCQgIgFgKADIgGABIgTAIIgBADQgBACABADIABACQASAAAQgEIACABgAq1jjIAAgCIACgCIAogHIADACIgBADQgLAPgbgCIgDABQgCgEgBgEgAkyjvIgFgBQgxgLgzgBIgCAAIgRgBIgCAAQgeAAgfADIgEABIgMABIgCABIgKABIgBAAIAKgIIAOgHQASgMAMgRIgFABQgZASgfANQgHAAgCgCIgFgHQgHgGgTAFIgCABIAAgEIAAgFQA0gXApgdIgEgBQgDAAgCgDQAIgaAVAHIAFABIACABIABABIAAACIAOAJQAMAHANAGIADABIALAEQAmANAwACIAFAAQgEAkAIAZIABADIAAABgAqfkQIgBgBIADgKQAZgHAyAHIAAACQgTAUgWAAQgRAAgTgLgACyk1IADgFIABgEIADgBIAAAAQAVgmAWgkIAAgCIgEgBIAEgVQACgCABgDIAAgBIAAgDQAAgIgJgSIgDgBQgfgKgdgMIgFgBQgJAAgEgGIgGgGIAFgBIAQgCQBHgMAeg1IAAgCIABABQAZAPgDgOIgQgKQgRgNgDgBQgDgBALALQgPAqgoARQgxAUgjgaIgBgBIgBgEQgHgZAEgkQAAAAABgBQAAAAAAAAQABAAAAAAQAAAAAAAAQANgRAbgBIACAAQgHgMglgGIAAgGIAAgJIACgDQABAAABAAQAAAAAAgBQABAAAAgBQABAAAAgBIAJgCIACABQACADADgBQAGAEAIAAIAFAAQAFABAFgDIABgBQAFgBACgDIAFgGIACgCIACgCIAIADIACgCIABgBIABAEIAGAJIAAAEQAAAIAEAEIAFAGIABABIAAABIgBAAIgDAAQAOALANgIQAHgEAHgJQASgUAjgCIACAAQAAgDgQgMQAKgbAWgNQAFgDAJgBQAfgBAUAIIAAAAIAAAEIgBADQgGAMgQAFIAAAEQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAAAQgPANghgFQAaAOgVADIAAAAIgBACQAoAOAlAAIAAALIACgCIALgCIAAgBQAYACAJAKQALANgNAaIgBACQgEAIgJACIgBABQggAKgXgLIgNgEQAUAMATAAIAAAAIAEAAIgBABIgDAKIgDAEIgEABQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAAAQgaAxg3AUIAAAEQgCARABAOIABAHIAAABQgBAJAEAJIAGAGIACACQgcA1gpAoQgTATgOAAQgQAAgJgXgAqRkzQgLgIAEgWQA1AAAbAbQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAAAQgRAPgTAAQgTAAgVgNgAp+liQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAQAHgkApAPIAAAAIABACQAKAGAIAJQgcAEArAOIgDAEQgQAFgOAAQgdAAgRgWgADirLQgNgygwAXIgCgEIAAgFIAdgfIAEgBQAgADAHAgQABADAFAGQAMAOgZALIgCgBgAkAxwIADABIACACIgFgDgAk2zvIAAAAIABAAIAAABIgBAAIAAgBgAktzzIACAAIgFABIgCABg");
	this.shape_8.setTransform(43.7,-2.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C6FFFF").s().p("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gIIgGAAIhNAAIgiAAIgFAAIgNAAIAAAEIgBABIgEABIgFACQgNAEgTgCIgFACIgCAAIgBABIgBABIAAAAIgBAAIAAAAIgDABQgPAMgRAAQgOgBgQgHQAAAAAAABQAAAAAAABQAAAAABAAQAAAAAAABQAMAFAKAGQAUANANATIAEABIACABIgBAAIgBAAQgDAJABAKIACANIABALQgJgBgJACIAAAAIgDABIgCAAIgCADIgCACIABACIAAAEIABACIAHAAIATABIABAEIAAAIIgFADIAAAEIAAACIAAAAIgBABIgBACIAAADIABACIABABIABAAQgNAKACAQIAAAHIgIAMQACAMgFAMQgGAOgRAFIgKADQAcATAGAeQAEAWAGAXQAJAdAVAVQANAMASAAIAMAAIARAAIAcgCIAUAAQAGAGABAIIAAAHQgMAJgRgEIgcgBIgPADIgKAEIgCAAIAAABQgVA+gJBIIAAAKIAAAEIABAFIAAAHIAAAAIAAABIgBACQgCAJAAAJQACAFAAAHQAAAHgCAHQgEAggBAgIAAABIgBABIAAADIAAARIgBABIgBABIACARIABAKIgCABQACALAAAPQAAAOgCASIgBADIAAACIABAEIAAAIIAAABIAAAAIgBABIAAASIAAATIAAArIAAAJIgEApIgFAAQgpgHgngKIgNgDIgagIIgEgBIgDgCIgIgIIgEgHIgBgBQgFgNAGgPIgBgEQgEgGgGgFQgKgJgQgEIgBgDQgNgLgIgRQgEgJgCgLIgDABIgBAFQgKAsgXAdIAAAFIgDAAIAAgGQAFgygoAhIAAAEIAAAHQg3gCgBAvQgUAFACAWQACAXgDASIgCAJQgIAbgWAQIAEgBQgBAGADAEIACAFQAAABAAAAQgBABABAAQAAAAAAABQABAAAAAAIAEACQAAAAAAAAQABAAAAAAQAAAAAAAAQABgBAAAAIABgBIAWgDIAEAAQAXAQAHAiQAEATgBAYIAAAEIAAABIgBAEIgEAFQAHASAAAcIACAAQAQCaAMCeIAAAFIAAAFIAABnIAAAyIgBAEQgCAGgFAEQgEACgFACIgCABIgEAAQg5gEgRgrIgBgEQgFgcAAghIAEgFIACgEIACgBIACgEIgFACIgBAAQgEgCgEAAIAAAFIADAAIgBAGQgCAFgFADIgDgCIADgIQgoAeA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");
	this.shape_9.setTransform(1.5,-28.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00CC33").s().p("EghqAFnIAArNIAPAAQAAACAFAAQBkAMBjADQAUAPAUAQIAGAHQBQARBAgtQAAAAABAAQAAgBABAAQAAAAAAgBQABgBAAAAIABABIgBAEQgkBphPA/IgEABQgaAFgRANIAAAEQgEAMgKAHIAAAFQAFA+BKABQAlAAAwgDQAPAOAVALQAAABAAAAQAAAAAAAAQAAABAAAAQABABAAAAQAXAAAPAIIADABQAzAUAOgmIABgFQAKALAMAJIABADQAogJAagWQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAcgbApAYIABADQAqABAkgIIAAgCQAogDAWgUIAEgBIACAAQACgbgIgSIgBgBIAFAAQBngIAmA6IADABQAcAHAlgCIAFAAQA8ATAKg5IAAgCIAEADIAFAEQgZAiAfgRQAHgEAAgFIAGABQAnAMAigpIABgBIAAAAIABgCIABAAIABgBIABgOIAKABQAjAUAjgiIAAgFQgPgzg6AgIgBABIAAgDQgpgDgkgKQgvgOgngaIAAgFQAggdAfgeIAAAAQAAABAAAAQAAABAAABQAAAAABAAQAAABAAAAQAYAHAXgFQAmgJArABQCxAECpgHQBugFBrgJIABAkIADAAQAJAxAbAfIAAAEQAxBABWARIAGABIADAAIABAAIADABQArAGA0gFIAEAAQAdgDAfAAIAAADQAWAtAXgTIABgDQAigMgOAoIgBAFQAfASA3gSQAUgGAKgNQASgBAPgGIAAgCQAygEAOAgIABAEQAGAXAMggIABgFQAPALgBAaIALgTQADgEAJACIAFADQgKANABAYIAAAFQAfAIAQAbIAEABQAkAoA5AUIAEABQBUgoBngNQAOgCASAEQBGAOgTg0IAAgDQgGgWgMgQIgBgEQgGhLAChUQALg7AIg/IAJABQgCAFACAAQCIAEBvARIAWADIABAEQAHAHACAMQACALgBAQIAAAFQAHAOALAIIAFABIAAAEQABANAHAIIABADIACACQAlAmAnAkIABADQAhAQAgATQAAAAAAAAQAAABAAAAQAAAAAAABQABAAAAABIgBAAQgiAIgtgEIgFAAIgEAAQhtgYgyA5QgFAYAPADIAFABQAjACANALIgDAGIgIAMIAAAAIgFAAQgIAwApgDIAAgDQAXgIALAQQAAABAAAAQABAAAAABQAAAAABAAQAAAAABAAIAAACQAhgHAggJIAAgDIAAAAQA5AOAugQQAAABAAAAQAAABAAAAQAAAAAAABQAAAAABAAQAlAWAggeIAEAAQBRAEBIgSIAFABQAlAMATgbQADgCAAgDIACgEIgcAMIgBAAIgJgVQgQgkgjgSIgFgBQAHgLgHgIQgHgIgUgFIgFgBQgQgSgRgSIgEgBIAAgEQALgZAMAiQAVALgLgMIAVgMIATAgIAIAMIABABQAFAFADAAQAFAAACgJIAAgDIACABQAJAIAIAKQAIAJAHAMIADABQAMAKAVACIATABIAYAAQA8AQAtgtIABgEQArAJASgiIAFACQAaglgOg9QgIgfgJARQgBASgIgIQgEgDgGgLIgBAEQgDAKgFAJQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAABAAAAQgQAagSggIgDABQgrA4hZAIIgDgBQgXgWgUAOQgigIgKgeQgDgHgEAHQgIAOgHgQIgEgOIAAgBIAAgBIgBgEQgRgVADgfQARgLAFgaIABAAQAHgSAJgPIAKABIACABQCHAUCJgQQApgEAmAHQAuAKAsAAQApABAngGIAYAJQAwgZA3gKIAAKugAHWhbQAhgigBhEIAAgFQAggyAbg1IABgEQABgHgDgCIhIgjQA3AIA4ABIACAfIABAIIADAAIAAAFQAHBsgaBKQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQgsAYg+AFIgFAAIgBAAQgGAAADgJgA6/ihIAAgFQAmg0AogzQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQATgTAQgWIALAHQgCACAAAEQACADADABQAZAEAXgEQgMAkgPAjQAAAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAAAQgrAwglA1IAAAFIAAAFIAAACIgEAAQg3AAgHgxgA3kizIAAgFQAhgyAfg1IABgEIAIgLIADABQB0AQBkgoIAIAHQg4BBg/A8IAAAEIAAAFIgCAAQgGAgANAOIAFADQgVACgTAAQhZAAg+gugABziKQgDgKALgOIAYgYQAwgvAQhNIAAgFIABAAIAHABIABgBQAGgGAEABIAAAEIABACIACAAIABACQAdARALgTQgDBMgZA2IgDABQgfAmg+AGIgbABIgIAAgAGRiYQgPglgXgcIgBgEQgIgLgGgNIAAgEIgDgpIAIgCQAHAEAFgCQAcgHAbgJIADABIADALQAWBNgrBBIgEAAg");
	this.shape_10.setTransform(1.5,116.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AmfEAIgBgEQgPgPgCgdQAXAVAeANIAEABIAAADIAEACQgHAegMAAQgKAAgOgWgAmGB/QgFgJACgRQABgJAFgIQAEgHAHgDIANABIABgBQAJABAFADIAHABQAFABACAFQABAHgBAFQgFgEgJgDQgQAAgDAPQgDAVANAEQgDAGgGAEIgBAAQgRgCgGgLgAGTjQIAAgFIgDgBIAAgDIAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAMgGAFgLQgBgTgRgFIgKABIgBADQgCAEgDgBIgFgBIgBAAQgBgEABgEIABgDIABgBIAAgBIAAAAIABgBIABgBIAFgEIADgBIADABIAGgCIAEgCIACAAQAGAAAEABIAGACQAHAFACAKIABAJQACAIgBAHQACADgBAGIgBADQgEAMgNAFIgFABQgEAAgDgDgAFvj9IgMgIIgBgBIgBAAIgBgDIAAgDIABgBIABgBIAAAAIABgBIADAAIAAgBQANACAEAJIABAFQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAIgBABg");
	this.shape_11.setTransform(-23.5,-88.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0000FF").s().p("Aj2FNIAAglQAIgSgDgdIAAgFQBYAcBrgPIAAgDQAqgTgCAuQgBAQgZgCQgJgBgFAGIgEACQgSAKgYAHQgHgJgQgDQhKgPg5AuIAAgFgABGgwQhcgMhZgPIAAAEIgEAAQgSAFgGgFQAFgFAJgCIAAgDQA1gQAsgbQAAAAABAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAdgTAXgaQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAIACAAIAAgBQApgHA7AMIAFAAQArgFAkgLIAAADQAhARAAA0IAAAFQgNAYgcALQgBAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAABIgFAAIhBAJQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBAAAAAAQgjgJgYAaIgFgBgAAXjcIAAgFQgNghgKglIgCgBQgSgTgVgRQAHABAGgDQAAAAABAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAPABAGAMIACAAQAXAqAJA4IAAAFIgFAAg");
	this.shape_12.setTransform(-91.7,-22.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00CC00").s().p("AirBXIgBgEQgMgUAEglIAGAJQABgMAHgFQACgqgCgvIgDAAIgCgJQAIgWgDgiIACgEQBpBDCigaIACAEIACABQAEA7AqAWIABADIAAAAQAIAEAHAKIABACQAGALAAAHQgBAGgEAEIALANIgHABQgSACgSAEIgsAJIgLACIgpANIgDAAQgEABgCACIgKgSIgBgEQgDgFgBgIIgDgDIgDgEQgGgBgFgDIACAJIABAHIANANIABAEIAHANIgCACQgPAGgMAHIgQAHIgoARIgZAKQgVAHgWACIgJABIgjg1gAgHAeIAAgCIgBAAIABACgABLAcIAHABIgGgDIgBACg");
	this.shape_13.setTransform(-165.8,26.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CC9966").s().p("Aj0PSQgigOg2AIQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAQgYgZghgPQgJgNgYADIgQABIgRgBQgigFgMgbQAXAWgNgpIgBgEIAAgFQApgwA1gjIAEgBIAyhHIABgDQAYhYAnhNQAcg2AzgjQAQgMAKgSQhBg4g1hFQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAIgBgEIg8hLIAAgFQAtgqgbhOQgHgVgBgaIgBgEQgGgJACgPQA2ggBDAFIAFAAQATAQAPAYIADABQBAB4BBB2IABAEQALAfAJAiQAHAaACAaQAEA0gPAlQgHAQgLAOIiLCtIgEABIiICLIAAATIAAAEQAHAOAKALQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABQA0AZBAAMIAFAAQAEAAAEgBQAAgBAAAAQAAAAABAAQAAgBAAAAQAAgBAAAAIAAgDIgBAAQhggGgrg4IAAgFIAAgFIApgpQAwgzAug0IAAgBQA4g/AzhCQAcgjAWgoIABgBIAEgHQALgUAKgVIADgHQgIhDgUg3QgHgSgIgRIgDgBIAAgCIgBgCQg6h9hFhyIgCgEIAAgEIAAgSIAcgSIAEgBQATgEAXAAIABAAIACAAIACAAQBSBxA1CPIAQAsQAQAuANAxIAAAEIABAFQAEASAAAYIgCAAQgFAegVAMIAAAEIAAAFIgDABIgXAgIgBABIgLAOIgBACQgOARgQARIgBADIgbAhQg2BBg7A9IgCACQgwAxgzAvIAAAFIgFAAQAJAkApAIIAcAEIABAAIAUADIAJABQAuAGgqAVQAAAFACAEIADAAIAAgEQAagWATAXIABADIAAAFIAAACQgBAXgWADIgDABQgZAdgOgjIAAAFIABAFQACAPgHADIgGgBQAAgFgGgFQgPgNARgEIABgCIAHgEQAHgEgPgEIgEABQgPADgJAKIgEAAQgwgBAKALIAFAAQAyAOgtASIAAADIgBgBgAhCOKQgCAIgIABIgJABIgKgBIAAgBQAAgPgEgLIAFAAIAEAAQAKgDACAHIACAAQAWgVAdAKIAAACIgWAcQgEAFgEAAQgFAAgGgKgAmdD1QARgUAOgXQAMgTAKgVQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAABQgPAbgWAEIgLAAIABgEIABAAQAagzgfAwIgCADIgEAAQgjAQASgdQgTAOgrADIAAgEIAAgTQBKACgPhgQgBgGACgMQhDh9AZi+QABgJAJgFQA4AgAkAzQAGAJAEAKQAFBeAABXIAAAEQAFAOACATIAAAEIACABIABAEQAfBcguA5IgCABQgHAgghAEgAlahdIgCgBQgHgsgJgnIAAgFIAAgOQBwAoCLgZIAFgBQgHAIgCAiIgBAFQgLAngkAQIgEABIgEAAQgdADgbAAQg/AAg2gRgAg+kUQhggXh2gEQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQgNgUgQgQQAkghAwgWIAEgBQBWAVBkAHIAFAAQASgVAXAGIAEABIAFAAQAeACADAHIgBAEIgbAhQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAABQgoAcgnAfIgFgBgAEfkiQhrgghHhFQAAgBAAgBQAAAAABAAQAAgBAAAAQAAAAABAAQAfgVAAgzIgBgEQgMgpgrgLIAAgEIgXhwIAFAAQALAJANAIQAAAAABABQAAAAABAAQAAAAABAAQAAABABAAQAhAhAVAuIABAEIAQAFQBCAYAkA2IADABQAXgxATg2IAAgEQA+hVgXiAIgFgYIgGgcIADgCQAmglAmgdIAAAHQgIArgZAbQgIAJAAATQAgg9gEA9IgBADIAAACIADgCQAXgOALgbIABgEQARgbArABIAAADQgnAMASAZIgCAAQgOAUAHAfIgCAAQgLAWgaAIQAAAAAAAAQAAAAgBABQAAAAAAAAQAAABAAABIgCAAQAHEEhmCVQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBABQgTASgYANIgEgBgAk9laQgdgWgqgJIgCgBQgLglghgOIAAgEIAAgKQAig2AwgoQABgBAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAQAcgMAIgeIABgFQAognBCgOIABgDQAJAAAGgDIAEgBQAYgEANAHIAEABQAsAtAMBMIAAAFQgYAggjAVQAAAAgBAAQAAAAAAABQAAAAAAAAQAAABAAABIgEABQgtATgoAaIAAAFIgEAAQgWgEgQAuQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBABAAAAQgMAMgRAGIAAAEIgEgBgAAQn8QgKgGgLACQg4AFgPgdIAAgEQgGhHgfguIAAgCQgIgCADgKIAJgJIAEABIACgHIAAgBQADgHAFgEQADgDAFgCIAJAAIACgBIAAAAIAMAAIAFAEQAJgIgCgPIAEgFQAbAFAJgJQAJgJgJgWIAAgEQACgCADgBIADgBQArgfgXghIgEgBQgBgLAQgNQgPAJgMgYQAOAIABgNIACAAQAeALAEgpQABgEAEgFQAdgQASgDIAAgCQALgCgBgMIAAgDQAdADAHgXIAAAAQABgBAEADQASANATgOIACAFQACADAEABQANAOAHAWIACAIIgEgBQgcgIgUAfQgEAhAJAXIADgDIAAAAIABgBIABAAQgBgDABgDIgCgGQAGALARACIABAAQAGgFADgGQAGACAKgBIADgBIAAAFQAJAAAFAIIABACIAEAFIAHACIAFAAIAHACQANAEgLAQIgBADQgdAOgFAkIAAACIgBAAQgtgHgggVQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAAAQgGgPgWACIAAA5IAAAFQAGAQAKALIABACQAKARAaABIAEAAIACACQgfAigzgbQgjgTgMAWIgDAGQABAHAAAJIACACIABACIABACIABACIAAACIgBAFIgCACIgBABQABAPgDANIAAAHIAAABQAFAMAGALIAAAEQAKBHgsAAIgNgBg");
	this.shape_14.setTransform(-80.3,10.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F3D28D").s().p("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");
	this.shape_15.setTransform(-128.8,22.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("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DgJQgSACgFgJQgLgRAOAEQAZAIgNgKIgIgFQgLgHgNgFQAXgMASAKQAFADAFAEQAEAEgDgJIgDgBIgGgEIAAgEIAAgJQAjACgKgSQAAgBgBAAQAAAAAAAAQAAAAgBAAQAAAAgBAAIgEABQgXAFgDgXIAAgNIAHAHQARANAbgVIgJgGQgFgDgCgHIgBgFQgEgSAOAAIAGAKQAMARADgcIABgMQACgbABAaIABAKIAAAEQAWAIATgLIgHgDQgKAAgCgLIAAgDIAAgHQACgbABAXIAAAGIAAADQAKAIAigHIAEgBIgBgDQgIgEgEgKIAAgFIAAgCIAAgGQAlgCAIgkIABgEIgBAEIAAABIAAADQgFAXAIALQAQgNAfgCIAAgCIgDAAQgaACgFgUQANgTAGgFQABgBABAAQAAgBABAAQAAAAAAABQABAAAAABIAAAAQgBAFgIAUIgBAEQARAEAfgEIAEAAIgBgDIAAAAQgTgGgFgTIgBgHQALgMAEARIACAIQACAHAOAGIAAAAQABAAAFAFQAGAGgCgUQAcAFghgTIADgHIACgFQALgDAEAEQADAEgCAMIACAEQAEAEAJgDQAWgeAIAIIgFAFQgQAOARAHQAQALAQgfQADgHAFgEQAGgFAKgCQAFADgEAGQgEAGgOAJQgHAFAGACIAGADQAUAcAQgbQAAAAAAAAQAAgBAAAAQABAAAAAAQABAAAAAAQAcgJgIAYQgCAJAHgIQAMgKAUgCIgLAJIgCABIARAZIAGgDIADgCIATgIIALgEIgFAJQgGAJgLALIgEADIgEAEIgBAAIAAABQgGAFAHABIAEAFQAGAIAKABIAJAAIgIAEIgeAMIgEABQAKAKAAAQIgBAAIgEABIgjAZIgBAEQgDATgcAOIADACQADAFABAFQAKAJAIALIABADIAIAQIADAMIAHAaIABAFIAAACIAAANIAAAEQAAAAAAAAQAAAAAAAAQAAAAgBABQAAAAAAABQABAWAVAHIgFAAIgHgCIgEgFIgBgCQgFgHgIAAIgBgFIgDABQgKABgGgCQgNgEADgVQADgPAQAAQAJADAFAEQABgFgBgGQgCgGgFgBIgHgBQgFgDgJgBIgBABIgNgBQgHADgEAIQgFAHgBAKQgCAQAFAJIACAGQgBAEACACIgBAAIgCABIAAABIgDACQgIgWADgiQAUgeAcAHIAEABIgCgIQgHgWgNgNQgDgBgDgEIgCgEQgTANgSgMQgEgEAAABIAAABQgIAXgdgEIAAADQABAMgKACIAAACQgTAEgdAQQgEAEgBAFQgDAogfgLIgCAAQgBANgOgIQAMAYAPgIQgQANABAKIAEABQAXAhgsAfIgDABQgDABgCADIAAADQAJAXgJAJQgJAJgagGIgFAFQACAQgJAHIgEgDIgMgBIAAABIgDAAIgJAAQgEACgEADIAAgDgAyxpGQgigcgnAUIgJAFQgGgBgEgCIgDgCIAEgGQALgIAOgGIACgBIAfADIAaADIADADIADACIABABIAJAHIAAADIAAAEIgCADIgHAAgACXpIIAAAAIAAAAgACOpfQgBgFgDgEIgCgEIAAgCQACgUgBgVQABgFgCgEIADgQQADgPABgUQABgOAHgOQgIAegCAhQgCAhADAjIABAJIABAHIAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBgAMxqpIACgCIAAACgAHJteIgEAAQhGgLgzAgIgEABIgEgBQgEgFgEgHQgPgcADgvIADgEQAJgPAGgTIAAAAIABgEQAEgEACgKIABgJQgZgGgFgaQAmAgATguIABAAIACgBIABgCQANg1gZglQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIAAAAIgBADQgDAKgKgJQgCARgPAQIgKALQgbAWADgwIAAgEQgKg0gXgpIgBAAIgDABQgDABgCACQgMgBgHgIIgJgLIgDgEQAMADAIALQAHAJALgGQAKgGALAEQAIAQAGARIAEALQAFATABAUIACAgQAAAEACAEQACACADAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBAAAAQARgOAHgVIADgGIAAgBIABAAQADgFAFgDIAKAAIANAAQAAABABAAQAAAAABgBQAAAAAAAAQABAAAAgBQACgIAAgJQABgIgCgJIgBgEIgBgcQAAgVgQgOQgJgGgLgFIgUgKIgKgFQgMgEgOAAQglAAgkgDQgMAEgPgBQgEgBgDADIAAABIAAABIAAABIAAABIAAACIAAABIgBABIgBgBQgDgGgFgDQgCgDgDgBIgCAAIgBABIgBAAIAAgEIAOAAIAFAAIAiAAIBNAAIAFAAIASAIQAcAKAhAIIAAACQAJATADAYQADAXgBAcIgEAgIgBAEIABAFQAHAYgDAlQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAABIgBACIAAAAIgFAKIgBADIAAABQgRAlgTAiIgBAEQgFASgIAPQgEArAMAbIAAABIABADIAAABIAAgBQBAgWBCAEIAFAAQASAUAMAZQgMgUgTgPgADCtIIgTgCQgNAAgLgHIAOgCIAcABQASAEAMgJIAAgHQgBgIgGgHIgUABIgcACIgRAAIgNAAQgRAAgNgNQgVgUgJgdQgGgXgFgWQgFgfgcgTIAKgCQAQgFAHgOQAFgMgCgMIAIgMIAAgHQgCgQANgKIAMAIIAGABIAFAWIgCADIgBAIIgCAFIgRAAQgJAVgQASIgNANIgBACIAHgBQARADAIAQQAJATgGAXIAAAEIBYgTQAmgeADguIgCgBQAIgIAKAHQALAHAKAHQgEADgDABQgMADgJAJQgPAOgMASQgGAKgMAHQgZAPgeAFIgiADIgEAAIAAAFIAPAiQAEAHAHAHQAHAHAEAIIAuACIABgDQAQgGAPADQAaACAHAbIABAFQABAHgEADQgEACgDgBQgKADgKAAIgLgBgACCw2IgEgCQgDgHgIgFQgDgLAGgKQADABACgDIABgEIAKgBQARAFABATQgFALgMAGQAAAAgBAAQAAAAAAAAQAAABAAAAQAAAAAAAAIgCABIgCgBgACnw+QABgFgCgEQABgHgCgIIgBgJQgCgKgHgEIgDgCIgDgBQgEgBgGAAIgCAAIgEACIgGACIgDAAIgDAAIgFAEIgBgBQgCgFAEgEQAIgHALgDIAVACQADABACACQALAMAAAPQACADAAAGQAAAKgDAKQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAIgBAAgABcxsIAAABIgDAAIgBABIAAgCIAAgEIAEgDIAAgIIAAgEIgTgBIgHAAIgBgDIgBgDIAAgCIABgCIADgDIACgBIADAAIAAgBQAJgBAJABIgBgLIgCgNQgCgLAEgIIABAAIABgBIgCAAIgEgBQgOgTgTgNQgKgGgMgGQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAQAHAOABQARAAAOgMIAEgBIAAAAIAAAAIABABIgCABQgBACABADIAAACIADABQgCAEgEAGIgBADQgHgJgNgCIAAABIgDAAIgBABIgBAAIgBAEIABADIAAABQACACADAAQAFABADACIACAEQADAQANAHIgEgCQAEADgBAGQgCAFABAEIADATIAAAJQAHACAGAEIABABIABACIAAAGIgBACIgNgCIABAIQAQADgCAPIgBACIgBAAIgCABQgEgJgNgCgACdx+IgBgCIgEgGIgCgBQgQAEgSAAIgBgCQgBgDABgCIABgDIAUgIIAFgBQAKgDAIAFIADACIABACIAGAJIABACIAAACIgBAEIAAABIgCAAIgEABIgGgBgABny3QAFAAADgDQABAAAAgBQAAAAAAgBQABgBgBAAQAAgBAAAAQgGgGgIgCIgBgCIgBgDQgBgHgEgFQARAPASANIAAACIAAAEQAFACAFgBIAEADIABADQgOgCgYgHgACfzBIgFgBQgBgDgFgCIgDABIgCABIAAAAQgKgEgLgIQgHgGAEgGQAFgHgEgGQAAAAAAgBQABAAAAgBQAAAAAAAAQAAgBgBAAQABgDgFgBQgFgCgEAAIgDAAQAUACANgEIAFgDIAEgBIAAABIgBAEIgCAAIACADIABABQABAKAJAIIAAAAIAEAEQAJAMALAKIACACIABACIgDgCIgCgCIgBgCQgJgLgLgIIgJgFIAAgBQgEgEgGAAIgDAAIgBABIgBABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIAAADIAIAFQAGAIAMAIIAGAFIgBAAIgFgBgAC9zNIgDgCIgCgDIAAgBQADADAEAAQADAEAFAAIAHABIABABIACAFQgKgCgKgGg");
	this.shape_16.setTransform(3.1,-2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.HIMHERIT, new cjs.Rectangle(-215.5,-145.6,434.3,299.5), null);


// stage content:
(lib.pronoun_Scene14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.instance = new lib.texthimherit();
	this.instance.parent = this;
	this.instance.setTransform(275,198);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// main
	this.instance_1 = new lib.pronounheader();
	this.instance_1.parent = this;
	this.instance_1.setTransform(275,43);

	this.instance_2 = new lib.HIMHERIT();
	this.instance_2.parent = this;
	this.instance_2.setTransform(272.6,200,0.876,0.876);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ACEBoQgwhIAsg9IAHgCIAPgDQApAFACAmIABAGQAwBLhNAaQgGACgFAAQgNAAgJgOgAiKAxIgDgDIgIgJIAAgJIAAgHIAAgFIACgCIABgFQgPgGgUgDIgNgTIgHgNQgCgHgHgEIgBgQQAAgGACgEIADgEQA7gYBBgCQA8gCA3gQIAOAEIAAABQhhAahoAIQgTABgSAGIgDADQgCADgEAAIgBACQgDAFABAFIAAACQAIAKAGALIAIANIAGAKIACACIAkAFIABACIABAHIgBACIgCACIAAADIAAACIgBACIgDACIAAADIAAAHIADACIAAACIABACQAqAEArgLIACgCIACgCQAPgGAMAFIgBACIgDAFQg1AQg4AAIgDAAg");
	this.shape.setTransform(387.7,239.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// btn
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.timeline.addTween(cjs.Tween.get(this.UI).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,201.6,534,398.7);
// library properties:
lib.properties = {
	id: '9669E61D3A2EE441AF8C38B434C87539',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/_12a.mp3", id:"_12a"},
		{src:"sounds/_12b.mp3", id:"_12b"},
		{src:"sounds/_13b.mp3", id:"_13b"},
		{src:"sounds/_13c.mp3", id:"_13c"},
		{src:"sounds/_16a.mp3", id:"_16a"},
		{src:"sounds/_18b.mp3", id:"_18b"},
		{src:"sounds/_19b.mp3", id:"_19b"},
		{src:"sounds/_2a.mp3", id:"_2a"},
		{src:"sounds/_3a.mp3", id:"_3a"},
		{src:"sounds/_4a.mp3", id:"_4a"},
		{src:"sounds/_6a.mp3", id:"_6a"},
		{src:"sounds/_7b.mp3", id:"_7b"},
		{src:"sounds/_9a.mp3", id:"_9a"},
		{src:"sounds/bgmusic.mp3", id:"bgmusic"},
		{src:"sounds/bgmusic_1.mp3", id:"bgmusic_1"},
		{src:"sounds/MenuPronoun.mp3", id:"MenuPronoun"},
		{src:"sounds/s_coolcheer.mp3", id:"s_coolcheer"},
		{src:"sounds/VO14.mp3", id:"VO14"},
		{src:"sounds/hesheit.mp3", id:"hesheit"},
		{src:"sounds/himherit.mp3", id:"himherit"},
		{src:"sounds/i.mp3", id:"i"},
		{src:"sounds/me.mp3", id:"me"},
		{src:"sounds/nominative.mp3", id:"nominative"},
		{src:"sounds/objectis.mp3", id:"objectis"},
		{src:"sounds/objectivecase.mp3", id:"objectivecase"},
		{src:"sounds/objectsof.mp3", id:"objectsof"},
		{src:"sounds/replaces.mp3", id:"replaces"},
		{src:"sounds/subjectis.mp3", id:"subjectis"},
		{src:"sounds/subjectof.mp3", id:"subjectof"},
		{src:"sounds/substitutes.mp3", id:"substitutes"},
		{src:"sounds/them.mp3", id:"them"},
		{src:"sounds/they.mp3", id:"they"},
		{src:"sounds/us.mp3", id:"us"},
		{src:"sounds/we.mp3", id:"we"},
		{src:"sounds/you.mp3", id:"you"}
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
an.compositions['9669E61D3A2EE441AF8C38B434C87539'] = {
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