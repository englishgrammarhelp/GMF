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


(lib.whyexpstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgkBmQgFgEAAgGQAAgIAFgIQAFgHAIAAQANAAAAAQQAAAHgEAHQgEAHgHAAQgGAAgFgEgAgbAxQgFgEAAgFQAAgKASgNIAggYQARgPAAgNQAAgQgPgNQgOgNgPAAQgJAAgNAJQgNAIgDAAQgGABgEgFQgEgEAAgGQAAgLAVgLQATgJAMAAQAaAAAXAWQAWAVAAAbQAAAUgNAPQgHAJgVAPQgVAPgHAJQgFAGgGAAQgFAAgEgFg");
	this.shape.setTransform(29.5,4.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgkBrQgEgEAAgGQAAgNAdhBIgwheIgHgKQgDgGAAgEQAAgGAEgEQAEgFAGAAQAGABADAFQAYAfAZA8IAUgvQALgYALgSQAEgIAHAAQAGAAAEAFQAEADAAAGQAAACgCAFIgvBlQgRAlgJAaIgJAaQgDAKgJAAQgGgBgEgDg");
	this.shape_1.setTransform(15,10.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAlBnQgDgLgDgVQgCgTAAgNIAAgLIAAgLQAAgYgMAAQgRAAgNAOQgHAIgNAXQAAA0gEAKQgEAIgIAAQgFAAgFgEQgEgDAAgGIABgGIACgUIAAgUIABhkIABgWQAAgHgCgHQgBgGAAgHQAAgFAEgEQAEgEAGAAQALAAACAMQACAOAAAKIgBAeIgBAeIAAAMQAMgPANgHQALgIAPAAQAWAAAJAPQAGAKABAYIABAaIACAcQACAQADANIABAEQAAAFgEAEQgFAEgFAAQgKAAgDgLg");
	this.shape_2.setTransform(0.2,3.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAfBrQgGgEAAgGQgGgQgCgLIgKg7QgHgjgCgXQgMAtgOAfQgQAkgFAUIACAHQAAAGgGAEQgFADgGAAQgSAAAAgQIgFgRIgOhDQgJghgWhAIgBgFQAAgNAPAAQAIAAAFAKIAKAcQAIAZAIAjIAOA7QAOgiAPgvIANgqQANgeAKAAQAKAAAEAKQAFAMAFAsQACAWAHAfIAMA2QASgsAchLIAGgZQAEgQAGgJQAFgIAIAAQAOAAAAAOQAAACgFAMIgFAOIgIAZIgoBhQgGARgNAfQgFAJgKAAQgGAAgFgEg");
	this.shape_3.setTransform(-22,4.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.whyexpstill, new cjs.Rectangle(-39.3,-18.8,78.6,43), null);


(lib.whereexpstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#171717").s().p("AgkBmQgFgEAAgGQAAgIAFgIQAFgHAIAAQANAAAAAQQAAAHgEAHQgEAHgHAAQgGAAgFgEgAgbAxQgFgEAAgFQAAgKASgNIAggYQARgPAAgNQAAgQgPgNQgOgNgPAAQgJAAgNAJQgNAIgDAAQgGABgEgFQgEgEAAgGQAAgLAVgLQATgJAMAAQAaAAAXAWQAWAVAAAbQAAAUgNAPQgHAJgVAPQgVAPgHAJQgFAGgGAAQgFAAgEgFg");
	this.shape.setTransform(44.2,4.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#171717").s().p("AguA7QgVgRAAgfQAAgiARgYQATgbAfAAQAWAAAOAIQASAJAAAUQAAAOgQALQgGAFgWAJIg0AZQAIALALAGQAMAGAOAAQAJAAANgEQAQgEAFgIQAFgHAFAAQAFAAAEAEQADADAAAFQAAAPgYALQgWAKgTAAQgeAAgTgQgAgbgkQgLANgGAZIAqgTQAYgMAKgJQgLgLgVAAQgRAAgKANg");
	this.shape_1.setTransform(30,7.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#171717").s().p("Ag0A/IAAhfIAAgOIAAgNQAAgOAMAAQAOAAAAAXQAagaAfAAQALAAAGAIQAFAJAAARIAAAKQgBAQgNABQgLAAAAgOIgBgKIAAgLQgWADgMAJQgMAJgIASIAABKQAAANgNAAQgMAAAAgNg");
	this.shape_2.setTransform(15.8,7.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#171717").s().p("AguA7QgVgRAAgfQAAgiARgYQATgbAfAAQAWAAAOAIQASAJAAAUQAAAOgPALQgIAFgWAJIgzAZQAIALAMAGQALAGAOAAQAKAAAMgEQAQgEAFgIQAEgHAGAAQAEAAAFAEQADADAAAFQAAAPgZALQgUAKgUAAQgeAAgTgQgAgcgkQgLANgFAZIAqgTQAXgMALgJQgLgLgVAAQgQAAgMANg");
	this.shape_3.setTransform(1.3,7.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#171717").s().p("AAlBnQgDgLgDgVQgCgTAAgNIAAgLIAAgLQAAgYgMAAQgRAAgNAOQgHAIgNAXQAAA0gEAKQgEAIgIAAQgFAAgFgEQgEgDAAgGIABgGIACgUIAAgUIABhkIABgWQAAgHgCgHQgBgGAAgHQAAgFAEgEQAEgEAGAAQALAAACAMQACAOAAAKIgBAeIgBAeIAAAMQAMgPANgHQALgIAPAAQAWAAAJAPQAGAKABAYIABAaIACAcQACAQADANIABAEQAAAFgEAEQgFAEgFAAQgKAAgDgLg");
	this.shape_4.setTransform(-14.5,3.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#171717").s().p("AAfBrQgGgEAAgGQgGgQgCgLIgKg7QgHgjgCgXQgMAtgOAfQgQAkgFAUIACAHQAAAGgGAEQgFADgGAAQgSAAAAgQIgFgRIgOhDQgJghgWhAIgBgFQAAgNAPAAQAIAAAFAKIAKAcQAIAZAIAjIAOA7QAOgiAPgvIANgqQANgeAKAAQAKAAAEAKQAFAMAFAsQACAWAHAfIAMA2QASgsAchLIAGgZQAEgQAGgJQAFgIAIAAQAOAAAAAOQAAACgFAMIgFAOIgIAZIgoBhQgGARgNAfQgFAJgKAAQgGAAgFgEg");
	this.shape_5.setTransform(-36.7,4.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.whereexpstill, new cjs.Rectangle(-54,-18.8,108.1,43), null);


(lib.whenexpstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgkBmQgFgEAAgGQAAgIAFgIQAFgHAIAAQANAAAAAQQAAAHgEAHQgEAHgHAAQgGAAgFgEgAgbAxQgFgEAAgFQAAgKASgNIAggYQARgPAAgNQAAgQgPgNQgOgNgPAAQgJAAgNAJQgNAIgDAAQgGABgEgFQgEgEAAgGQAAgLAVgLQATgJAMAAQAaAAAXAWQAWAVAAAbQAAAUgNAPQgHAJgVAPQgVAPgHAJQgFAGgGAAQgFAAgEgFg");
	this.shape.setTransform(37.2,4.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAhBDIgDgeQgCgQAAgOIAAgMIABgNQAAgegLAAQgQAAgNASQgMARgHAYIgCAOIAAANIAAAMIABANQAAAGgDAEQgEADgGAAQgGAAgEgDQgEgEAAgGIAAgNIgBgMIACgmIACgnIgBgNIAAgNQAAgGAEgEQAEgEAFAAQANABABARIAAARQAXgfAYAAQAWAAAIATQAGANABAZIAAAOIgBAMQAAALADASQADASAAALQAAAGgEAEQgEAEgFAAQgMAAgCgNg");
	this.shape_1.setTransform(23.3,7.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AguA7QgVgRAAgfQAAgiARgYQATgbAfAAQAWAAAOAIQASAJAAAUQAAAOgQALQgHAFgVAJIg0AZQAIALALAGQALAGAPAAQAJAAANgEQAQgEAFgIQAFgHAFAAQAFAAAEAEQADADAAAFQAAAPgYALQgWAKgTAAQgeAAgTgQgAgbgkQgLANgGAZIAqgTQAYgMAKgJQgLgLgVAAQgRAAgKANg");
	this.shape_2.setTransform(8.3,7.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAlBnQgDgLgDgVQgCgTAAgNIAAgLIAAgLQAAgYgMAAQgRAAgNAOQgHAIgNAXQAAA0gEAKQgEAIgIAAQgFAAgFgEQgEgDAAgGIABgGIACgUIAAgUIABhkIABgWQAAgHgCgHQgBgGAAgHQAAgFAEgEQAEgEAGAAQALAAACAMQACAOAAAKIgBAeIgBAeIAAAMQAMgPANgHQALgIAPAAQAWAAAJAPQAGAKABAYIABAaIACAcQACAQADANIABAEQAAAFgEAEQgFAEgFAAQgKAAgDgLg");
	this.shape_3.setTransform(-7.5,3.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAfBrQgGgEAAgGQgGgQgCgLIgKg7QgHgjgCgXQgMAtgOAfQgQAkgFAUIACAHQAAAGgGAEQgFADgGAAQgSAAAAgQIgFgRIgOhDQgJghgWhAIgBgFQAAgNAPAAQAIAAAFAKIAKAcQAIAZAIAjIAOA7QAOgiAPgvIANgqQANgeAKAAQAKAAAEAKQAFAMAFAsQACAWAHAfIAMA2QASgsAchLIAGgZQAEgQAGgJQAFgIAIAAQAOAAAAAOQAAACgFAMIgFAOIgIAZIgoBhQgGARgNAfQgFAJgKAAQgGAAgFgEg");
	this.shape_4.setTransform(-29.7,4.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.whenexpstill, new cjs.Rectangle(-47,-18.8,94,43), null);


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


(lib.HandStill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#141414").s().p("AgHAUIgFgBQACgGAAgIQACgJAFgJIAGgJIAAACQAFAFADAGQACAEAAAFIgCADIgEAGIgHAOIgHgDg");
	this.shape.setTransform(-11.5,3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#171717").s().p("AgJABIAAgBQAAgBAJAAIAKAAIAAADIgTgBg");
	this.shape_1.setTransform(-6.2,6.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC9966").s().p("AhHAxIgBgBIgMgEIgCAAQgQAAgKgDIAIgOIAEgGIACgEQAegtBPABIAKAAQA3gBAdgSQANgHgHAVQgtAPg2AJQgGABAAAFQgBA0g1gDIgKAAQgKAAAAABIAAABIgDAAg");
	this.shape_2.setTransform(-0.3,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#161616").s().p("Ag7A+IAAgDQA1ADACg1QAAgFAEgBQA3gIAtgPQAGgVgMAHQgeASg2ABIgKAAQhQgBgdAtQAAgFgCgEQgDgGgFgFQATgJAFgHIAJgFIAMgHIAvgMIADgDIAagHQARgFAPgHQAfgNAhAHIADABIADACIADACQAPAHgCAbQgkAchAAFQgFABgDAGIgCAIIgCABQgFAFgDAGIgHAMIgCADQgEAAgHAFIgCABIgCAAQgPABgPAAIgFAAg");
	this.shape_3.setTransform(0.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.HandStill, new cjs.Rectangle(-12.8,-6.2,25.7,12.5), null);


(lib.BlackMan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6666CC").s().p("AiliMIAJACQAXAGAeAAQA7gCgmAOQgGACgFAFQgeAFgPATIAFABQAdAEAPgOQAGgFAFAFIgEAFIgVAeQAFAFABgBQAggVAXghIAEgFQARANATAIICVA8QAhAOgOAKQgdABgQANQgFAFgDAEQgZArggAhQgwgpg0AFQgEABgGgDQg+gZADhWIAAAAQgLgDgFACQgFADAAAIQABATAFANQAKAaALAWQAWAtAqAYIgBAFQhJAGgtAeIgGAEQgDiLAGiOg");
	this.shape.setTransform(-20.2,16.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgKB9IAAgoQAAgUgFgUQAigqgKAhQgHAaAMANQAMAMgUAdQgJAOgEAAQgCAAgBgFgAAQgFQgCgEAAgFQAWgXAJAMQAVAcgbATQgFADAEAIQATAigXAcQgGg2gMgugAA2APQAfgNgPgmQgBgDAFgGQAOgRABAwIgBAIQgEAQgGAQQgJAagGAAQgHAAgCglgAhVgIIgCgDIgBhrQAXgLAZAAIgFAEQgYAQgJAbQgGARADANIABAIIgBATQgCASgCAAIAAgBg");
	this.shape_1.setTransform(-28,-41.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0D0D0D").s().p("AABBsIgLgFQgJgDgFgFQgNgMgdANQgHADgkgDIgTgCQgagEAFgoIAAgKIAKAAQAHAYARAKIAGACQBHAFAEg0QABgIgkAEQgcADgWgIQgCgcAjALQAuAQAGgdQACgQgQgGQgGgCgFgFIgKgKQAPgUAFgUIgIAEQgRAGgPAAIAAgKQgBgQAVAGQAFAAADgCQACgDAAgFQAvAIgaAgQgWAbAmAMQADABAFAHQATAbgTAdQgFAGgCAKQgDAKAAAKQAAAFAFAFQAjAOAmgdQAGgFAKAAQA1gDAbAXIAAAKIAAAFQgFAAgGgDQgYgNgjAAQgyABgUAeQgFAAgEgCg");
	this.shape_2.setTransform(2.4,-37.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#141414").s().p("AglBYQAIg5APgzIADgLQACgMAEgKIADgGQADgKAGgGIADgEIAHgHIAFgGIAPgFIAAAAIABAAIgJARQgJARgIASIgCAHQgLAfgJAiQgCAGABAEQAHA1ghAIIAAgKg");
	this.shape_3.setTransform(21.2,-38.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00CC33").s().p("AAAAAIAAAAIAAAAIAAABg");
	this.shape_4.setTransform(24.9,-48.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#171717").s().p("AkeKcIgKgBIgFgBQgTgDgPgKIgEgIIAAgPIACADIACgKQAGgSALgNQAPgPADghQAEg3AYgnQARgeA6ANQATgkAJgsQACgKAFgHQAcgrgNgoQgKAAgFgFQgXgVgMAQIgFAFQARAIgCAbIgUAKQgXAKAYAFIAEAAQAFAFgFAFIgLAKQg0ApgsAwIgZAfIgEAEIAAgjIADgCQAYgSAYgYIAFgFQgPgTgmADIgFAAIAAgIIAFACQAHABALgDQAkgKAGAIQANAQAVgfQAYgigyAAQgKAAgFAFQgTAUgiAEIgGABIAAgOIAGgEQAtgeBJgHIAAgFQgpgXgWgtQgLgWgLgcQgEgMgBgUQgBgIAGgCQAFgDAKADIAAABQgCBXA9AZQAGACAFAAQA1gGAvApQAgghAagqQACgFAGgFQAPgOAdgBQAOgKgggNIiWg9QgUgIgQgMIgFAFQgWAhggAUQgCABgFgFIAVgdIAEgGQgFgFgFAFQgQAOgcgDIgFgBQAPgTAdgGQAFgFAGgCQAmgNg7ABQgdABgXgGIgKgDIABgUQAEAEAGACQAFADAGAAIApAGQApAEAcgMQAYgUASgbQAIgMAMgFQArgUAhgcQAHgHAIgEQAmgVgVgjQgOgOA1ADQBaAGBFgUQA/gSBEgRQAOg9ADhFIABgNIADgrIACgKQgDgCgDgFQgCgDABgEQAEgNACgNQACgRgBgSQgBgLAIgIIABAAIAEgBQAEADADADIAIABIgBADIAAACIgBAEIgBACQgEACgBAEQgBAIAEADIgBAKIAAAAQgDARABASIABADIgFAYIgDANQgEASgBAVIgBAgQABArgHAjQgFAXgIATQgFAFgFAAQgKAAgIACQgcAHgiAFQgKABgHAFQgqAZhDgCIgHgBIAAABIgQgCQgwgEgWASIgSAAIAAAVIgBAAIAAALIgFAAIAAAEIgGAAIAAAEQghAggnAYIgPAJQgrAegeAsQAMAXAcAIQAeAJAcAOQA0AaA5AaQA/AdAdBBQgKAtgdAaIgKAKQhWBnhyBMQhaA8gqBtQgDAGgEAAIAAAAgAj8HJIgJAOQgQAbgEAkQgHBEgnAfQADARARACQAKABABgDQALgjAQgXQAbgsAngeIAMgKIAogfQBmhSBfhYQAugqgUg+QgFAAgCgCQgxg+hJA2QgQARAPAGQAGACgBABQgaAqgwAWQgUAtgNA2IgCALQAAAigUALQgGAEgJABIgOAAQgcAAgNAOgAlOh3IAMgLQAdgbAkgTQgSA0gwAYIgBAAQgFADgFAFIAAgbgAlOjvIAEgCIAGgEIAEgDIAUgNQAIgFABgKQAEghgMAWQgDAGgFABIgOAAIgFgCQgEgCADgFIAFgFIAEgEQAQgNgLgRQgIgMgJgBIgBgBIgGABIgChSIABAEQADACACgUIABgTIgBgIQgDgMAGgSQAJgaAYgRIAFgEQgaABgWALIAAhLIABgDQACgEAAgFIABgEQAEgJAFgGQALgNAUgCIAKAAQAcADAQgNIAGADQAfAYAXgcIABAGQAFAgAZgcQAEgFAKACQAWAFgCgRQBJgHAgAgQAFAFAJgBQAegDAAAiIAIAEQACABAAAFQAIAIAUAAIACAGQgHAGgCAUQgBAKAFAHQAPAXgVAEIgGACQgZAMglACIAAAKQAAAFgCADQgDACgFAAQACgQgTALQgUANACArQADAwgwgdQAWAcgQAaQgBABADAGQACAEAAAFIgKAAIAAAKQgigQgBBCQAAACAAABQAAAAAAABQAAAAAAABQgBAAAAgBQgagQAWgcQAEgwgOASQgFAFgBgBQgagPAGAfIACALQAHA4gXgRQAAgFACgEIAFgMQADgJgDgBQgdgLgFAfQgEAmgEgCQgDgDgCgqQgFAFABAFQABAggRADIgHABIhFAaIgLADIAAgSgAkLluQAFAUAAAUIAAAoQABAPAQgYQAUgdgMgMQgMgMAHgaQAFgPgFAAQgFAAgUAXgAjtmqQAAAFACAFQAMAuAGA2QAXgcgTgiQgEgIAFgDQAbgTgVgcQgDgEgFAAQgJAAgOAOgAixnIQgFAFABADQAPAogfAMQADBEAVg4QAGgRAEgQIABgJQgBgjgIAAQgDAAgDAFg");
	this.shape_5.setTransform(-2.8,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC9966").s().p("Ak1JVQgSgCgDgRQAngfAHhFQAEgjAQgcIAKgNQAPgTAoAFQAIgBAHgEQATgLABgiIABgLQANg2AVgtQAvgXAbgpQABgBgHgCQgPgGAQgRQBJg2AxA9QADADAFAAQATA+guAqQhfBYhmBRIgnAgIgNAKQgnAegbAsQgPAXgLAjQgBACgGAAIgEAAgAlXEpIAFgBQAmgDAPAUIgEAFQgYAYgYARIgEADIgChBgAkWEfQgGgIgjAJQgMADgHgBIgFgBIAAgKIAAgLIAFgBQAigFATgTQAFgFAKAAQAyAAgYAiQgNAUgLAAQgFAAgFgFgAkXgiIgpgFQgGgBgFgCQgGgCgEgEIAAgCIAEhhQAFgFAGgDIABAAQAwgZARgzQgkATgdAaIgLAMIAAhmIAKgEIBFgZIAHgCQASgCgCghQgBgEAGgFQABAqADACQAEACAEglQAFggAdAMQADABgCAJIgGAMQgCAEAAAFQAXARgHg4IgBgLQgHggAaAQQACABAEgGQAOgRgDAwQgXAbAaARQABAAAAAAQAAAAAAgBQAAAAAAgBQAAgBAAgBQABhCAiAQQgEAoAZAEIATACQAkADAHgDQAcgNANAMQAGAFAIADIANAFQADACAGAAQATgeAzgBQAiAAAYANQAHADAEAAIAAgFQAhgIgHg1QAAgEABgGQAJgjAMgfIADgHQAHgSAJgRIAJgRIAAAAIAAgBIABgBIAAgCIABAAIAAgBIACgJIAAgBIAEgJIAAAAIABgBIAAgCIAAAAIAAgBIABgBIABAAIACgNIAAgEIACgDIgBgEIADgGQARAJAcgJIAAAAQADAKAEAGQgCADgBADIgCAIIgIgBQgDgDgEgCIgDABIgCAAQgHAIABALQAAARgCARQgCANgEANQgBAFACADQADAEADACIgBALIgEArIgBANQgDBFgOA9QhEARg/ASQhEAUhagGQg1gDAOAOQAUAjglAVQgJAEgHAHQghAbgqAUQgMAGgJALQgRAcgYAVQgWAJgcAAIgUgCgAg8ljIgGgCQgRgKgHgYQAAgFgBgEQgDgGABgBQAQgbgXgbQAxAdgEgwQgCgsAUgMQATgLgBAQQgWgGABAQIABAKQAOAAARgGIAIgEQgEAUgPAUIAJAKQAFAFAFACQAQAGgCAQQgFAegugQQgjgMACAdQAWAIAcgDQAjgEgBAIQgDAvg6AAIgNAAg");
	this.shape_6.setTransform(-2.5,5.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BlackMan, new cjs.Rectangle(-37.1,-66.8,69.1,133.6), null);


(lib.towhatextexpstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#171717").s().p("AgkBmQgFgEAAgGQAAgIAFgIQAFgHAIAAQANAAAAAQQAAAHgEAHQgEAHgHAAQgGAAgFgEgAgbAxQgFgEAAgFQAAgKASgNIAggYQARgPAAgNQAAgQgPgNQgOgNgPAAQgJAAgNAJQgNAIgDAAQgGABgEgFQgEgEAAgGQAAgLAVgLQATgJAMAAQAaAAAXAWQAWAVAAAbQAAAUgNAPQgHAJgVAPQgVAPgHAJQgFAGgGAAQgFAAgEgFg");
	this.shape.setTransform(100.3,4.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#171717").s().p("AgIBgQgEgEAAgFIAAgQIAAgPIgChOIgfgDQgLgBgBgNQABgFADgEQAEgEAGAAIAcACIAAgTIgBgQQAAgGAEgEQAEgEAFAAQAMAAACAUIABAMIgBAIIAAAJIAUgCQAOAAAEABQAJACAAAKQAAAHgFADQgDAFgGAAIgGgBIgHAAIgTACIACBQIAAAGIAAAHQACAegPAAQgFAAgEgEg");
	this.shape_1.setTransform(86.9,5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#171717").s().p("AAhBDIgDgeQgCgQAAgOIAAgMIABgNQAAgegLAAQgQAAgNASQgMARgHAYIgCAOIAAANIAAAMIABANQAAAGgDAEQgEADgGAAQgGAAgEgDQgEgEAAgGIAAgNIgBgMIACgmIACgnIgBgNIAAgNQAAgGAEgEQAEgEAFAAQANABABARIAAARQAXgfAYAAQAWAAAIATQAGANABAZIAAAOIgBAMQAAALADASQADASAAALQAAAGgEAEQgEAEgFAAQgMAAgCgNg");
	this.shape_2.setTransform(73.3,7.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#171717").s().p("AguA7QgVgRAAgfQAAgiARgYQATgbAfAAQAWAAAOAIQASAJAAAUQAAAOgQALQgHAFgVAJIg0AZQAIALALAGQALAGAPAAQAJAAANgEQAQgEAFgIQAFgHAFAAQAFAAAEAEQADADAAAFQAAAPgYALQgWAKgTAAQgeAAgTgQgAgbgkQgLANgGAZIAqgTQAYgMAKgJQgLgLgVAAQgRAAgKANg");
	this.shape_3.setTransform(58.3,7.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#171717").s().p("AgIBgQgEgEAAgFIAAgQIABgPIgDhOIgfgDQgLgBAAgNQgBgFAEgEQAEgEAFAAIAdACIgBgTIAAgQQAAgGAEgEQAEgEAGAAQALAAACAUIAAAMIAAAIIAAAJIATgCQAPAAAEABQAJACgBAKQAAAHgEADQgDAFgGAAIgHgBIgHAAIgSACIADBQIAAAGIAAAHQAAAegPAAQgEAAgEgEg");
	this.shape_4.setTransform(43.7,5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#171717").s().p("AAqBJQgMgOgfgqIgbAcIgXAWQgEAFgFAAQgGAAgDgEQgFgEAAgFQABgFADgEQADgFAJgHIAMgMIAdgdIgRgaQgLgPgJgIQgFgEAAgGQAAgFAEgFQAEgDAFAAQAIgBAQAWIAXAgIAbgYQARgRAFgIQAFgHAGAAQAFAAAEAFQAFADAAAGQgBAHgNANIgUATIgYAYIAtA5QADAEABAFQgBAFgEAEQgEAFgFAAQgFAAgFgGg");
	this.shape_5.setTransform(28.8,6.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#171717").s().p("AguA7QgVgRAAgfQAAgiARgYQATgbAfAAQAWAAAOAIQASAJAAAUQAAAOgQALQgGAFgXAJIgzAZQAIALAMAGQAKAGAPAAQAKAAAMgEQAQgEAFgIQAEgHAGAAQAEAAAEAEQAEADAAAFQAAAPgZALQgVAKgTAAQgeAAgTgQgAgcgkQgLANgFAZIAqgTQAXgMALgJQgMgLgUAAQgRAAgLANg");
	this.shape_6.setTransform(13.2,7.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#171717").s().p("AgIBgQgEgEAAgFIAAgQIAAgPIgChOIgegDQgNgBAAgNQAAgFAEgEQAEgEAGAAIAcACIAAgTIgBgQQAAgGAEgEQAEgEAFAAQAMAAACAUIAAAMIAAAIIAAAJIATgCQAOAAAFABQAIACAAAKQAAAHgDADQgEAFgGAAIgGgBIgIAAIgSACIACBQIAAAGIAAAHQABAegOAAQgFAAgEgEg");
	this.shape_7.setTransform(-9.7,5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#171717").s().p("AAsBGQgHgGgDgEIgXALQgKADgFAAQggAAgPgSQgOgRAAgjQAAggAXgXQAXgYAeAAQAMAAAPAGQATAIAAALQAAADgDADQgCAFAAAMIgBAeQAAARACAKIAJAYIADAHIABACQAAAGgEADQgEAEgFAAQgDAAgGgGgAgWghQgQARAAAVQAAAXAIALQAIALAQAAQAMAAAJgFQAFgCAJgIQgEgjAAgSIAAgNIADgPIgJgEIgGgBQgUAAgPASg");
	this.shape_8.setTransform(-23.4,7.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#171717").s().p("AAlBnQgDgLgDgVQgCgTAAgNIAAgLIAAgLQAAgYgMAAQgRAAgNAOQgHAIgNAXQAAA0gEAKQgEAIgIAAQgFAAgFgEQgEgDAAgGIABgGIACgUIAAgUIABhkIABgWQAAgHgCgHQgBgGAAgHQAAgFAEgEQAEgEAGAAQALAAACAMQACAOAAAKIgBAeIgBAeIAAAMQAMgPANgHQALgIAPAAQAWAAAJAPQAGAKABAYIABAaIACAcQACAQADANIABAEQAAAFgEAEQgFAEgFAAQgKAAgDgLg");
	this.shape_9.setTransform(-38.5,3.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#171717").s().p("AAJAoQgDgMgDgUIgEgeIgLAZIgVA5QgBAFgEADQgEAIgJAAQgKAAgKgpQgFgVgFgjIgDgVIgCgUQAAgGAEgEQAEgEAGAAQAKAAADAMQACAIABAMIACAUIAIA8QAPgpAQg3QAFgPAKAAQALAAAEARIAIAxQAGAiAEATIAKglIAShKQACgIAKAAQAFAAAFAEQAEAEAAAFIgCAGQgKAtgRA3QgEANgJANQgFAHgIAAQgPAAgIglg");
	this.shape_10.setTransform(-56.3,7.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#171717").s().p("AgoA6QgSgTgBggQgBgdAQgYQATgcAiAAQAbAAAOAZQALAUAAAdQgBAdgPAWQgSAYgbAAQgXAAgRgRgAgYgbQgIAQAAASQAAAUAKALQAJAJANAAQANABAKgLQAMgLAAgUQACg0geAAQgTAAgMATg");
	this.shape_11.setTransform(-81.9,7.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#171717").s().p("AgJBlQgFgEABgGIABgGIAAgHIgBgUIgBgUQAAgUgDgiIgEg3IgMAAQgeAAgRgEQgLgDAAgLQAAgFAEgFQAEgEAGAAIAWADIAWABIAZAAIAXAAIAgABIAfACQAGAAAEAEQAEAEAAAGQAAAGgEAEQgEAEgGAAIgfgCQgVgCgKABIgKAAIAEA9QADAmAAAWIABAPIABAOQAAAKgDAGQgEAJgIAAQgFAAgEgDg");
	this.shape_12.setTransform(-97.3,3.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.towhatextexpstill, new cjs.Rectangle(-110.1,-18.8,220.3,43), null);


(lib.Symbol178 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AA8DTQgLgJAAgLQgMghgDgUIgVh0QgNhHgEgsQgYBZgcA8QgfBHgKApQADAGAAAGQAAAMgKAIQgKAHgNAAQgkAAAAghIgmilQgRhCgrh9IgBgKQAAgZAcAAQASAAAJATQAEAJAQAvQAPAwAQBFIAbB1QAchCAchfQATg6AIgXQAZg7AWAAQASAAAIATQAKAXAKBXQAFAsANA9IAXBqQAlhXA1iTQADgIALgqQAIggALgRQAJgPAQAAQAbAAAAAbQAAAFgIAWIgaBMIhQDCQgKAggbA9QgKASgTAAQgNAAgKgHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.3,-21.8,52.6,43.7);


(lib.Symbol177 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhsC6QgxgXgBgoQAAgMAHgHQAIgHAMAAQAMAAALAPQAOAUAKAIQAXAPArAAQAqAAAjgSQAtgXAAgpQAAgigmgUQgggRgvgBQgrgBgdgRQgmgWAAgoQAAgwA2gnQA0gmA2AAQAaAAAgAJQAsALAAATQAAAXgYAAQgLAAgbgGQgbgGgOABQgpABgdATQgfAVAAAeQAAAWAoAJQAPAEApADQA+AEAjAiQAgAegBAtQAABAg6AnQg0AhhDAAQgxAAgpgTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.9,-20.4,31.9,41);


(lib.Symbol176 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ai0DSQgIgIABgMIABgiIACgjIABgxIABgyIgBg1IgBg1QAAgRgDgiQgDghAAgRQAAgNAKgKQALgKANAAQAOAAAVAfQBEBlA1BCQA/BOBMBIQAAgMAAgXIgBgiQAAh0gJhGQgBgHgHgWQgFgSAAgKQAAgfAdAAQAuAAAACuIAABZIgBBYQgBANgEAeQgEAbgYAAQgPAAgVgTQhthoiMjBIgCB5IAABDIABBDQAABIgcAAQgOAAgJgJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.1,-21.9,38.2,43.8);


(lib.Symbol175 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ah+DOQgKgKAAgMIAAhPQAAgmAFhGQAFhMABgjQgBgZAEgwQACgOAHgEQAkgMAvAAQAuABArAgQAzAlAAA2QAABFg2AnQAoARAVAVQAUAVAAAYQAAAigkAdQgYAWgbALQg8AXhdABQgMAAgLgMgAhTBqIAAA4QBHgCArgSQATgHARgPQAQgOAAgIQAAgLgigRQgagLgXgHIgcgEIgLAAIgLABQgOgBgRgCQgCAiAAAagAhHigIgGCWIApAEQAngDAagWQAcgZAAglQAAgagcgVQgdgWgeAAQgdAAgMACg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.6,-21.7,27.4,43.5);


(lib.Symbol174 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AiJDLQgHgIAAgMIgCg+QgDgrABgVQAAgYAFgwQAFgxAAgZIgBgoQgDgbAAgOQgBgPAJgMQAKgOATABIBAAFQAlAFAZANQBsA6AABUQAAAoglAfQgeAZgtANQBUAtApAyQAIAIgBAKQABALgJAIQgIAJgLAAQgKAAgJgJQhahYhsgeIAEBpQAAAMgIAIQgHAIgLAAQgMAAgIgIgAhVh4QABAUAAANQAAAVgDAgIgHA0IAMAAIAMABQBFAAAhgTQAQgHAMgNQAPgPAAgLQAAglgrggQgmgegrgEIgngDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.9,-21.1,29.9,42.2);


(lib.Symbol173 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ah1DPQgagYAAhWIABgmIACgsQgDgGAAgHQAAgIAFgHQAGhOAAglQAAgKgDgTQgDgTAAgKQAAggAbAAQALAAAIAHQAhgIAcgFQAdgEAYAAQBBAAAoAQQARAHAAASQAAALgHAIQgHAJgMAAIgIgBQgugNgqAAQgWAAgZAEQgaAEgeAIIACAcQAAAmgEBBIB0gLQA0gFAMAAQAMAAAIAHQAIAIAAANQAAAXgZADIi7ARIgCAkIAAAgQAAA7AIALQAHAHAkAAIAxgBIAygBIAQgCIAPgCQAdAAAAAcQAAAXgXAFQgZAFhTAAQhUAAgXgWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.4,-22.9,28.9,45.8);


(lib.Symbol172 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgwDEQghhRgniZIgVhKQgRg3AAgSQAAgMAJgHQAIgIALAAQAUAAAGAWIAkCKQAaBiAZBJIBfkIQAPgoASgUQAIgLAMAAQALAAAIAIQAJAIAAAMQAAAIgFAIQgRAagKAaIhdD9QgNAjgRAhQgHAQgQAAQgVAAgIgVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.9,-21.7,31.8,43.4);


(lib.Symbol171 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhUDZQgegIgPgMIgDAAQgMAAgHgIQgIgIAAgMQAAgcACg3QADg5AAgcIgBheIgChdQAAgLAMgMQALgMALAAQAHAAAkASIAwAWQBLAaA2A2QA/BAAABLQAAAugVAqQgWAqglAaQgqAdhNgBQgTAAgagFgAhkACIgFCTIAGADQAYAQAkAAQA8AAAcgTQAagRAPgeQAQgeAAghQAAhKhTg2QgagShjgsg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-22.2,32.1,44.5);


(lib.Symbol170 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ABeCLQgHgYgKg8QgcADgtAKIhGAPQgNAjghBEQgIAPgPAAQgLAAgJgIQgIgHAAgMQAAgNAphVQgFgHAAgKQAAgWAagFQAfg5AvhLQA/hlAPgBQAVABAIAdIA5EUIAQArQAHAVAAAHQAAAMgIAIQgJAHgKABQgZgBgSg/gAghAUQAggJBBgLIgWhng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.4,-20.2,32.8,40.5);


(lib.staceexpstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#767676").s().p("AgxAFIAWgFIAJgDIABAAQADADAGAEIACABIgrAAgAAhgCIgHAAIAYABIgRgBg");
	this.shape.setTransform(-28.4,71.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCFCFC").s().p("AAAgDIADAEIgFADQACgDAAgEg");
	this.shape_1.setTransform(-25.5,51.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AhODgQgGgFgJgCQgfgIgdgLQgSgHAGggQABgKAAgKQAUgUAFgnQAAgGAGgDQAsgUAsAdIAMAHQAfAQAbAQQBEADAzgQIAMgDQAQgFgHAVQADAvg1gCIgKABQglAHghAHQgXAgglAQQgEACgFAAQgHAIgKAAQgMAAgPgNgAB9jNIgxgFQgBAAAAgKQAfgYA5AOQACAAgCAJQgFAQgaAAIgHAAg");
	this.shape_2.setTransform(-18.1,12.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F5F5F5").s().p("AgBgCIADgCIAAAJIgDgHg");
	this.shape_3.setTransform(-9.7,-15.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8F8F8").s().p("AhrBXIAFAAIAAAAgABWgSQgRgZgHgnQAmgTAGA7IABAUQABATgGAAQgFAAgLgPg");
	this.shape_4.setTransform(-14.8,-57.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC99").s().p("AkGKcQAcgmAIg9IAMhcQAFguAHgrQAthQBzgKIAKAAQAbgCgKArQgHAdgDAdQgSCjg6B9IgBADIiWABIgBAAQgPAAAGgVgAnbIuQADgtAAgtQBCg2A0hEQACgDAAgFQBMAEAuAhQADADAFAAQgLB2hOA1QhHAxhQAoQgRgcAEg0gAiYDaIgKAAQgygZgwgdQgCgBAAgFQAegGAJgZQALgdAFgfQAFgiAAgiQAAgkAKgYQA7gRBRAEQAcABAXgDQAPgCAFAPQAPADAEARIAAACQARAQgEAWIgBADQgBAOgQAUQgLAOgMAMQgMANgKAPQAGBLgdAqQgCADgFAAQggAMgsAAQgQAAgSgCgABjAHQgPgZgWgTIgKgKQgggpgcgyIgdgyQgMgVAHgqQASgXgDgvQAAgFAFAAQAbACAMAXQAnBMAvBDIAIAPQAbAzAXA1IACAFQAEAIAKAFIBgitIAJgOQAaglAZgrQAXgoA9gDQgcAQgPAaIgBABQAAABAAAAQAAAAABAAQAAABABAAQABAAACAAIBZAJQAFABAFAFQgkANg2ABQg2AAAtANIASAGQAGACAFAFQgjgBgWAPQgIAGgCAKQgWBaguA/QgFAHgEAIQgeBDhCAiQgsgVgYgogAgqmHQgDg5gPgsIgCgGIgBgCIgGgIIAAgBIgDgCQghgvgdg0QgMgWAEgnQAWglADAvQAAAKAIAEQAiATAHAuQABAGAFAFQAXAbARgRQARgSADgqIAJgCQAvgKgBAgQgBAFgGACQgVAGACAbQAXArgdAMIgCADIgBAAIgEAAIAAABIgHAEIgGAAIAAAAIgqAAIABAOQALAKAJAMQAIALADALQAGAcgQAOQgIAHgIAEIgBAAQgCAAgEgEgAg0n/IABABIAAgBIAAAAIgBAAg");
	this.shape_5.setTransform(-0.3,0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#111111").s().p("ADsDaIABgBIAEADQgCAAgBAAQgBAAAAAAQgBgBAAAAQAAAAAAgBgAjwjbIABAAIAAAFg");
	this.shape_6.setTransform(13.4,-50.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFF99").s().p("AgJEUQAFgHAAgKQAGhwgihFQgMgYgKgZQgjgdgagnIgHgMQgVgygBhFQAMgJACgTQgBBLAXAtIA2BhQA5AvAaBSQAMAogKA9QgBAFgFAGQgSAVgCAmQgkgIAWgjgAgyEWQAGgdAAgeQAChhgmg4Igmg2IgMgPQgMgTgCgcQA2BGAnBSQAWAvAEA8QAFBAgYAkQgEADgCAAQgHAAAHgigAAyD1IAJgNQANgVgLgiQgIgagLgVQgphSg0hGQgNgSgJgUQgPgfgQgdIAAhaIAAgKQAKgPAKgFIAAAKQgBBMAXA1QADAGAFAFQBJA9AdBrIAEAMQASAsAJA3QAMBMguAOQgQgMAVgWgABaCCQAAgGgDgGQgPgkgHgrQA2A9gEB3IgEACQgRglgEg2gACCCAQgUhZgzg1QgagdgXgiQgFgIgDgIIgMgdIgIgQQgBgCgFAAIAAhaIAAgKQANgQAKgWQAGgRANgKQAHgFAFAFIgCAGQgKAqgNAlQAdBqBCBFIAKAMQAbAjAHA5QADAbgGAQQgBACABAGQAEAdAAAeQgKgUgFgVgABygxIhChxQgVgjgCg1QAKgPAKgFIACAKQAPBEAmAuQAFAGAEAIQALAWAIAXQAHARADAUQACAKAFAKQgEADgDAAQgLAAgNgWgAhAjwIAAgKQASglAbgcQAFgFAJADQATAHgZAQQgIAEgGAJIgJALQgUBQAPBPIgFABQgXg0ADhOg");
	this.shape_7.setTransform(-21,-37.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AkBLOQgQgCgOgIQAAgDABgCQAEgIgBgGIAHgeIACgFIADgEQAJgZAFgZQAFgOACgQIAAgEQADgMAAgKIABgEQABgIgEgFIgDgHIgDgEQAAAFgCACIgBABIgEADQhcBZh5A8IAAAAIgCABQgLABgKACQgGhIADhIIABhKQASgFAOgOIACgBQAGgCAEgEIAMgKQAXgWAVgXQAEgEACgGQAHgGAHgGIADgDQAOgIgCgWQgVgxAZgxQAOgdAfgPQAGgDAGgFQAYgUAWgXQAlgmgEhPQAEgvgSANQgVAPgjAAQgTgUAYgZQAFgFACgKQAVhugkhjQgCgGgEgGQgshCglhJIAAh4IAAgKIAYg1QAOgiAWgXQAegVAngMQAGgCAGgEIATgLQBGAFAxgKIABAFQAwARAaAoQAUAdA3gFQAPgBAPAAQAWAbgfAYQgcAVANAVQAEAHACAJQAFAhgRAIQgTANgeABIgFABIAFAFQAfAfgWAxQgeAPgMAaIgCAEIAGgCQAigJAEAaQAkAKAIAnQABAGAFAEQAlAiA1ARQAXAkgQAlIgFAMQgIAMAHAPQACAKAFAGQACAHAIAGQABALALgCQAKgBACgIQAEgEADgIQAZg9Ahg1IAJgLIAGgGQACgDABgDIABgCIAEAAIABgGIAHgPIABgHIACgBQAOgOAGgUIACgGQAGgMAJgIIAEgDQAUgOAXgGIABABIABABIA+ADIAFACIAAADIgBAEIgDADIgBADIgMAFQgQAHALALQAqgDAlANIADAGQAEAFABAHQgEALgLAGQgZANgcAAQgBAAAAAAQgBAAAAABQAAAAgBAAQAAAAAAABQgFAKAHADIgBABQgqAMglANQgWBDgcA/QgpBchPA5QgKAFgKgBQg1gBgRgrIgKgKIgFgFQgkAignAfQgGBUAEA4QAIBWgLBAQgJAygEAyQgBAPgGAMQgLAVgEAgQgFApgOAhIgBAEQgIAUgHAVQgEANgJALIgCACIgNAAIgEgDIAAACQgSADgSAAIgIAAQgqAGgsAAIgYgBgAgjEyIgKAAQhzAKgtBQQgHArgFAuIgMBcQgIA9gcAmQgGAVAQAAICWgBIABgDQA6h9ASijQADgdAHgdQAKgpgYAAIgDAAgAllFiQg0BEhCA2QAAAtgDAtQgEA0ARAcQBQgoBHgxQBOg1ALh2QgFAAgDgDQgughhMgEQAAAFgCADgAk6DGQgGADAAAFQgFAogUAUQAAAKgBAJQgGAhASAGQAdAMAfAHQAJADAGAFQAbAWARgRQAFAAAEgCQAmgQAXggQAhgIAlgGIAKgBQA1ACgDgvQAHgVgQAEIgMAEQgzAQhEgDQgcgRgfgPIgMgHQgagRgaAAQgSAAgSAIgAjDg1QgKAYAAAjQAAAjgFAiQgFAfgLAdQgJAZgeAGQAAAFACABQAwAdAyAZIAKAAQBDAGArgQQAFAAACgDQAdgqgGhLQAKgPAMgNQAMgMALgOQAQgUABgOIABgEQAEgVgRgQIAAgCQgEgRgPgDQgFgPgPACQgXADgcgBIgegBQg+AAgwAOgAgek5QADAvgSAXQgHAqAMAVIAdAyQAcAyAgApIAKAKQAWATAPAZQAYAoAsAVQBCgiAehDQAEgIAFgHQAug/AWhaQACgKAIgGQAWgPAjABQgFgFgGgCIgSgGQgtgNA2AAQA2gBAkgNQgFgFgFgBIhZgJIgEgDQAPgaAcgQQg9ADgXAoQgZArgaAlIgJAOIhgCtQgKgFgEgIIgCgFQgXg1gbgzIgIgPQgvhDgnhMQgMgXgbgCIgBAAQgEAAAAAFgAljofQABBFAWAyIAGAMQAaAnAjAeQAKAZAMAYQAjBFgGBwQgBAKgEAHQgWAjAkAIQACgmATgWQAEgFABgGQALg9gNgnQgZhTg7guIg1hiQgYgtAChLQgDASgMAKgAlUl4IALAQIAmA2QAnA3gCBiQgBAegGAdQgJAtAPgOQAYgkgEhAQgFg8gVgvQgnhTg3hGQACAcANATgAhphdQAAAKABAAIAxAEQAgADAGgSQACgJgCgBQgVgFgRAAQgeAAgUAQgAk7pRIAAAKIAABaQARAcAOAfQAJAVANARQA2BHApBTQAKAVAJAaQALAigNAVIgKAMQgVAXAQAMQAugOgMhNQgJg2gRgsIgEgMQgehshJg+QgGgEgCgGQgXg2AAhLIAAgKQgKAFgKAPgAh6j+QACAGABAFQADA3ARAlIAEAIIAAgKQAEh3g2g9QAHArAQAkgAi/qmQgOAKgHAQQgJAWgOARIAAAKIAABaQAFAAABACIAIAQIANAdQADAIAGAIQAWAiAbAcQAyA3AUBZQAFAVAKAUQAAgegEgeQgBgFABgDQAHgPgEgbQgGg6gcgkIgKgLQhChFgdhqQANglALgqIABgGQgCgDgDAAQgDAAgDADgAiRqXQgEAnAMAWQAdA0AhAvIADACIAAABIAGAIIABACIACAGQAPAsADA5QAFAFACgBQAIgEAIgHQAQgOgGgcQgDgLgIgLQgJgMgLgKIgBgOIArAAIAAAAIAFAAIAHgEIAAgBIAEAAIABAAIACgDQAdgMgXgrQgCgbAVgGQAGgCABgFQABgggvAKIgJACQgDAqgRASQgRARgXgbQgFgFgBgGQgHgugigTQgIgEAAgKQgCgbgHAAQgGAAgKARgAi5pvQACA1AVAjIBCBwQATAgAMgMQgFgKgBgLQgEgTgGgSQgJgWgLgWQgEgIgFgGQgmgugPhFIgCgJQgKAFgKAPgAjmqwQgbAcgSAlIAAAKQgDBOAXA0IAFAAIAAgBQgPhQAUhPIAJgLQAGgJAIgFQAagPgUgHIgGgBQgFAAgDADgAhVqNQAHAmARAaQAWAggBgkIgBgVQgFgsgWAAQgHAAgKAFgAkuLNIABgBIAAABIAAAAIgBAAgAg3n3IABAAIAAABg");
	this.shape_8.setTransform(0,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.staceexpstill, new cjs.Rectangle(-50.3,-72.2,100.7,144.5), null);


(lib.samexpstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEDE94").s().p("AgqG5QgsgngCg6IAOgTIACANQAFAPALAKQAiAgADAoIgPAHIgIgBgADxGeIACAAIAAAEIgCgEgAjwlQIgCgDQAWgzAsgvIAJgDQAPgEgBAOIhMBgg");
	this.shape.setTransform(-20.4,32.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CC00").s().p("AAGClIgBgNIgHgBQgDgpAHgpQAEgUgNgIIgEABIgBAAIgCADQgEAQgCAQQgIA7AIA7IABACQgEAEgHgCQhuALhngqIAKhJQAIg7gPg3IgCgLQgGgYgBgXQgChLAxg5QADAAACABQBWAsBhgHIAOABQBqACBZg0QAIARAGATQAGAVALATIADAFQAIARABASQAFAIgBALIAAAKIgBAMIgFA/QAEAfAFAfQAKA2gLA1IgDABIAAABQACALgMABQgRACgRgBIgCAAIAAAAQgKADgJABQgTACADAQQgfALgiAEIgLAAQhHAAgHg4g");
	this.shape_1.setTransform(4.1,52.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AgoAAQgCgCAAgFQgBgJAIgFIACgBIADAAQAigCAeAMQAEACABADQALASgVAGQgCAFgGABIgKABQgeAAgVgYg");
	this.shape_2.setTransform(-16.9,-15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6666CC").s().p("AgDgOIAHAaIgDADIgEgdg");
	this.shape_3.setTransform(46.7,27.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#090909").s().p("ABZDWQhTg/hfgxIAAgKIAKAAQAFAAAEACQBIAtBOArQAFAAAAgBQARhbBOgcQAAAKgEACQgcALgNAYIgKAQIgJAPQgSAiAWAcQgCAVgLAAQgHAAgLgJgAixi9QgCgDAAgFQBRAcA2gqQAWgSgCALQgHAYgcAEQgdAEgLATIgPABQgqAAgVgXg");
	this.shape_4.setTransform(3.7,-22);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#141414").s().p("AgrAAIARgGQA+gWAJAaIhYATg");
	this.shape_5.setTransform(-2.9,-55.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAALgQgMgCgDgMIAAgCQgIg7AIg6QACgRAEgQIACgCIABgBIAEAAQANAHgEAUQgHApABApQABASADARIACARQABAIgIAAIAAAAgAClLcIAAgBQgDgPATgDQAJgBAJgCIABAAIACgBQARABARgCQAMgBgCgLIgBgBIAEgBQALg1gKg2QgFgfgEgfIAFg/IABgNQAKAHABANIABAEIABAeQAFA6AIA5QAHAwgQAsQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQgSAIgSAFQgcAIgcABIgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAgBAAAAgAiGnIIAPg5IACA2IARgJIAIAHIgXARgAjqqeIBIgmIgRgRICqgFIAngFIAzA2IgZAKIgHAUIgdgEIgKAHIgKgZIgnAIIgNgGIgrAMIgEgQIhNAsIAFgfIhnBHg");
	this.shape_6.setTransform(3.6,-0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F3D28D").s().p("AigLLIADgZIAUgNIgagLIgCgKIC9AhIAAADQACASgJAJIgsACIgYAAQg3AAg2gGgAArLCIgHgZIAAgFQBnAOBhgSIAIAfIgFAIIghACQhVAEhUACgAj7ITIgDgFQhRi/BGjRQglhAgDhLIAsgEIACgHQgCgagOgXIAUgKIBECVQgSBLAeBBQgiAxgHA7QgDAcAGAaIADALQABAXAFAYQAEA7gUAyIgFgTQgQA0AEA2QgkgiAWg5gAheD8QgfgKgegGQgEgrgGgrQgFggABggIAEgoQghgNgOghIgBgDQgMgygKgyIBugKIDgDWQASAPAXAEQASACAQgBQAEAAAEgCQAbgGAZgHIgGBuQhJAthYAHIgPABIghACQg6AAg3gTgACsBjQiAgfhPhrQgUgcgegSQhAgmARg6IAhgIIAQgHIAcANQBfAxBTA/QAcAXADgjQgWgcASgiIAJgPIAKgQQANgYAcgLQAEgCAAgKQhOAcgRBbQAAABgFAAQhOgrhIgtQgEgCgFAAQgcgOgcgMQhagmhYAgIgQgSIAeg8QAegZAhgKQA1gOAtgRIAJgVQAYgKAbAAQBfgCAehTQgEAAgCACIg8AwQg4Awg8gkQhCgpgLhJIgBgOIgBgHQgCgCAAgCQgDgTAIgOIAFgDQAUAHAWACIAKgEQg3gTgUgzIAYgaIARAbIBCgxIgCAXIA8geIAOAXIAUACIAQgbIAjAtIANgWIAaAEIgLAeIAagDQAaAagLAlIgYAlIAsCPQB7AuBsBDIAJB/Ig8A8QAECKh1BOQgMAIgNAAQgHAAgHgCgAiPnbQAYAbA2gFQALgTAdgEQAbgEAHgYQACgLgVASQg2AqhRgcQAAAFACADgAhkoMIATAMIAXgRIgJgHIgQAJIgDg2gAg5p2IgSAHIABARIBXgUQgFgOgTAAQgRAAgdAKgAk9g0IADgnIAJgCIAog8IgDgTIgRgBIgLgMIhAARQACgOgQAEIgJAEQBjhCBjA5QABBThVgQIgkA1IAUAeg");
	this.shape_7.setTransform(0.3,6.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#171717").s().p("ABAL3IAAgDIi9ghIACAKIAaALIgUANIgDAZIgggEIgwgHIAPgHQgEgngiggQgKgKgGgQIgBgNIgPATQACA7AsAmIglgFQgSgOABghQAEhPgDhQQgEhRgXhIQAHgTAAgUIABACIAai6IgEAEQABgLgCgJIAFgEQgdhGgXhMQgGgUgPgTQgGgIgLgDIgdAtIgDACQhKAFAag7QAkhQBNgZIARgDIABgCIADAAIgBgCQAMgMAEgNIABABQBAhxB+glQgfhFgmhEQgMgWAIgYQAGgTAHgSIgZgjIhJA0IAmhrQgiAagugCIgBgBIAfgNIBjg+IgdgIQA8hBBtAPQA1AFAYgrIAXgCIAJAfIAfgBIBGBkIghACQAlBIgdBMIAGAtQgIAZASAXIgDABQAHAuArAPICfA5QAdAlAIAxQgFA6AKA3QgGARgOAPQgMAOgRADIgBANQgEASABARQABAWgNAQIgEADIACACIgTAgQgLATgJAUIgNAHIAAAKIgOAGIgBBeIABAAIAAAgIgGgCIAGANIAAABIADAaQAEAeAQAMIADALQAKApADArQgFAOgBAOQgCgNgKgGIAAgKQABgMgFgHQgBgTgIgRIgDgFQgLgSgGgVQgGgTgIgSQhZA1hrgDIgOAAQhgAHhWgtQgCgBgDABQgxA4ACBLIgCgLQgHgaADgcQAHg7AigxQgdhBARhLIhEiVIgUAKQAOAWACAaIgCAHIgsAEQADBMAlBAQhGDRBRC/IADAFQgWA5AkAiQgEg2AQg0IAGATQATgygDg6IACALQAPA4gIA7IgKBJQBnApBtgLQAHADAEgFQACAMAMACQAJABgBgJIgCgRQgCgRgBgSIAIACIABAMQAIA9BRgFQAigDAfgMIAAABQAAABAAAAQABABAAAAQAAABABAAQABAAAAAAQAdgBAbgIIAGA1IgZABIAGgJIgIgfQhhAShngNIgDgBIACAFIAHAZIgGANIgUABQAJgKgCgSgAjDgkQAKAxAMAyIABADQAOAiAhANIgDAoQgCAgAFAgQAHArADArQAfAGAfAKQBFAYBMgHIAPgBQBYgHBJgtIAGhuQgZAHgaAGQgEACgFAAQgQABgSgCQgXgEgRgPIjhjWgAg7h6IghAIQgQA6BAAmQAdASAUAbQBPBsCAAfQAVAGATgMQB0hOgEiKIA8g8IgJh/QhshDh7guIgsiPIAYglQALglgZgaIgbADIALgeIgagEIgNAWIgjgtIgQAbIgUgCIgPgXIg7AeIACgXIhCAxIgRgbIgYAaQAVAzA2ATIgKAEQgVgCgVgHIgEADQgJAOADATQABADACABIAAAHIACAOQALBJBBApQA8AkA4gwIA9gwQACgCADAAQgeBThfACQgbAAgYAKIgIAVQguARg0AOQgiAKgeAZIgeA8IAQASQBZggBZAmQAdAMAbAOIgKAAIAAAKIgcgNgAj1AhIgUgeIAkg0QBWAQgChTQhig5hkBCQgrAugXA0IACACIALADIBNhgIA/gSIALAMIASABIACATIgoA8IgJACIgDAmIAgATgAihisIgEABIgBAAQgIAFAAAJQAAAFADADQAXAcAmgEQAGgBADgFQAVgGgLgUQgCgDgDgBQgagLgeAAIgJAAgABArbIipAFIARARIhIAmIgoBPIBnhHIgFAfIBNgsIAEAQIAqgMIANAGIAngIIALAZIAKgHIAdAEIAHgUIAZgKIgzg2gAESLFIAAgBIACAAIgCABg");
	this.shape_8.setTransform(-3.8,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.samexpstill, new cjs.Rectangle(-47,-78.7,94.1,157.5), null);


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


(lib.howexpstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#171717").s().p("AgkBmQgFgEAAgGQAAgIAFgIQAFgHAIAAQANAAAAAQQAAAHgEAHQgEAHgHAAQgGAAgFgEgAgbAxQgFgEAAgFQAAgKASgNIAggYQARgPAAgNQAAgQgPgNQgOgNgPAAQgJAAgNAJQgNAIgDAAQgGABgEgFQgEgEAAgGQAAgLAVgLQATgJAMAAQAaAAAXAWQAWAVAAAbQAAAUgNAPQgHAJgVAPQgVAPgHAJQgFAGgGAAQgFAAgEgFg");
	this.shape.setTransform(27.3,4.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#171717").s().p("AAJAoQgDgMgDgUIgEgeIgLAZIgVA5QgBAFgEADQgEAIgJAAQgKAAgKgpQgFgVgFgjIgDgVIgCgUQAAgGAEgEQAEgEAGAAQAKAAADAMQACAIABAMIACAUIAIA8QAPgpAQg3QAFgPAKAAQALAAAEARIAIAxQAGAiAEATIAKglIAShKQACgIAKAAQAFAAAFAEQAEAEAAAFIgCAGQgKAtgRA3QgEANgJANQgFAHgIAAQgPAAgIglg");
	this.shape_1.setTransform(10.9,7.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#171717").s().p("AgoA6QgSgTgBggQgBgdAQgYQATgcAiAAQAbAAAOAZQALAUAAAdQgBAdgPAWQgSAYgbAAQgXAAgRgRgAgYgbQgIAQAAASQAAAUAKALQAJAJANAAQANABAKgLQAMgLAAgUQACg0geAAQgTAAgMATg");
	this.shape_2.setTransform(-6.3,7.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#171717").s().p("AhVBsQgEgEAAgFIACgsQADgdAAgOIgBgWIAAgXIABggIABghQAAgFAEgEQAEgEAGAAQAFAAAEAEQAEAEAAAFIgCAiIgBAgIABAhIA6gJQAigHAZgBQABgTAAgnQAAgKADgMQAFgOAIAAQAFAAAEAEQAFAEAAAFIgCAGQgCAGAAALIABAMIAAAMQAAANgDAcIgCAnIACAgIABAfQAAAFgEAEQgDAEgGAAQgGAAgDgEQgEgEAAgFIgCgfIgBggIAAgUQgXABghAGIg6ALQAAANgCAWQgDAXAAANQAAAFgDAEQgEAEgGAAQgFAAgEgEg");
	this.shape_3.setTransform(-23.9,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.howexpstill, new cjs.Rectangle(-37.1,-18.8,74.2,43), null);


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


(lib.fpb_rightOutFrame_up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Aj5D6IAAnzIHzAAIAAHzg");
	this.shape.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_rightOutFrame_up, new cjs.Rectangle(0,0,50,50), null);


(lib.fpb_rightInFrame_up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjFDGIAAmLIGLAAIAAGLg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_rightInFrame_up, new cjs.Rectangle(0,0,39.5,39.5), null);


(lib.fpb_leftOutFrame_up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AjFDGIAAmLIGLAAIAAGLg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_leftOutFrame_up, new cjs.Rectangle(0,0,39.5,39.5), null);


(lib.fpb_leftInFrame_up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjFDGIAAmLIGLAAIAAGLg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_leftInFrame_up, new cjs.Rectangle(0,0,39.5,39.5), null);


(lib.fpb_face_up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E8E8E8").s().p("AjFDGIAAmLIGLAAIAAGLg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_face_up, new cjs.Rectangle(0,0,39.5,39.5), null);


(lib.fpb_rightOutFrame_press = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AmjD6IAAnzINHAAIAAHzg");
	this.shape.setTransform(25,25,0.595,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_rightOutFrame_press, new cjs.Rectangle(0,0,50,50), null);


(lib.fpb_rightInFrame_press = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AjFDGIAAmLIGLAAIAAGLg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_rightInFrame_press, new cjs.Rectangle(0,0,39.5,39.5), null);


(lib.fpb_leftOutFrame_press = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AjFDGIAAmLIGLAAIAAGLg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_leftOutFrame_press, new cjs.Rectangle(0,0,39.5,39.5), null);


(lib.fpb_leftInFrame_press = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AjFDGIAAmLIGLAAIAAGLg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_leftInFrame_press, new cjs.Rectangle(0,0,39.5,39.5), null);


(lib.fpb_face_press = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E8E8E8").s().p("AjFDGIAAmLIGLAAIAAGLg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_face_press, new cjs.Rectangle(0,0,39.5,39.5), null);


(lib.fpb_rightOutFrame_over = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AmjD6IAAnzINHAAIAAHzg");
	this.shape.setTransform(25,25,0.595,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_rightOutFrame_over, new cjs.Rectangle(0,0,50,50), null);


(lib.fpb_rightInFrame_over = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjFDGIAAmLIGLAAIAAGLg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_rightInFrame_over, new cjs.Rectangle(0,0,39.5,39.5), null);


(lib.fpb_leftOutFrame_over = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AjFDGIAAmLIGLAAIAAGLg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_leftOutFrame_over, new cjs.Rectangle(0,0,39.5,39.5), null);


(lib.fpb_leftInFrame_over = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjFDGIAAmLIGLAAIAAGLg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_leftInFrame_over, new cjs.Rectangle(0,0,39.5,39.5), null);


(lib.fpb_face_over = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E8E8E8").s().p("AjFDGIAAmLIGLAAIAAGLg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_face_over, new cjs.Rectangle(0,0,39.5,39.5), null);


(lib.fpb_rightOutFrame_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Aj5D6IAAnzIHzAAIAAHzg");
	this.shape.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_rightOutFrame_disabled, new cjs.Rectangle(0,0,50,50), null);


(lib.fpb_rightInFrame_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjFDGIAAmLIGLAAIAAGLg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_rightInFrame_disabled, new cjs.Rectangle(0,0,39.5,39.5), null);


(lib.fpb_leftOutFrame_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AjFDGIAAmLIGLAAIAAGLg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_leftOutFrame_disabled, new cjs.Rectangle(0,0,39.5,39.5), null);


(lib.fpb_leftInFrame_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjFDGIAAmLIGLAAIAAGLg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_leftInFrame_disabled, new cjs.Rectangle(0,0,39.5,39.5), null);


(lib.fpb_face_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E8E8E8").s().p("AjFDGIAAmLIGLAAIAAGLg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_face_disabled, new cjs.Rectangle(0,0,39.5,39.5), null);


(lib.boundingBox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.boundingBox, new cjs.Rectangle(-50,-50,100,100), null);


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


(lib.buffyexpstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3.5,1,1).p("AAAxmIAAAQIAAAIIAAC+IAAAcIAAChIAAAFIAADTIAAAUIAAGJIAAAZIAABhIAAAbIAAARIAAB+IAABHAAAOLIAABZIAAA3IAABM");
	this.shape.setTransform(59.2,7.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#777777").s().p("AgCAFQgEgFAAgKQAKgEADAZIAAAAQgGAAgDgGg");
	this.shape_1.setTransform(-3.7,-90.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E0E0E0").s().p("AgBgGIADAAQgCAGAAAHIgBgNg");
	this.shape_2.setTransform(-12.5,-110.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CC33").s().p("AgIAZIAAhYQALA7AGA7IAAAJg");
	this.shape_3.setTransform(60.1,104.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0000FF").s().p("ABAEqQApg0A+ASIAIAHIAABiIgNAOgAisguIgWh4IAgg8QBagcBZAbICeiWIAADTIAAjTIABgFIATAAIgUDYIkbCSIgJAEIgZANgACvl5g");
	this.shape_4.setTransform(41.7,-26.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#535353").s().p("AA/BCIgEADQhoBNgxg+QA9AkBXhNIAFgCIAAAcIAAgcIAKi0IAAgJIAAgOQAKAIAOAHQAGCkgUCTQAGg5gWgpg");
	this.shape_5.setTransform(53.2,-87.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AgEheIABAAIAIAJIgJC0g");
	this.shape_6.setTransform(59.7,-92.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E1E1E1").s().p("ABSAjIAIAAIABAIgAhagqIAFACIgCAFQgDgDAAgEg");
	this.shape_7.setTransform(51.1,-105.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#494949").s().p("AEXA7IADgCIgDACgAkBAUIABACIgCACIABgEgAkVgFIABgEIAEABIgDAEIgGAOIAEgPgAEDg6IAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAAAg");
	this.shape_8.setTransform(17.7,-108);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C6FFFF").s().p("AgDAMIgBgIIAAgPIAJAJIAAAOIgIAAg");
	this.shape_9.setTransform(59.6,-103.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#303030").s().p("AipAAQAKABAFgFQACApAkAgIAAgVIAxBKQANAOgmAwQgCACgEAAgAAnCMIgcggQgIgRAVABIACgBIgIALIAQAXQBBArA/gxQgCAEgDACQggAdgjAAQgZAAgagOgACOAvIAHgHIABAAIABAAIAHAAIAEAKgAA/hNQgVg7AmgxQBZAAABBcIgEgBIgfg/IgqgSIgPATIgHAiIACAeIAOgWIACgCQAQAAAMAIQALAIAAALIgaAXg");
	this.shape_10.setTransform(5.4,-90);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgQCNIgQgXIAIgLIBzgtIAUAEIAABFQgiAagiAAQgeAAgdgUgAhbghIgXgTIALgyIAWACIAaA0IgGALIgGAGgABChcQgMgIgQAAIgCABIgOAXIgCgfIAHghIAPgUIAqATIAfA/IgmAFQAAgLgLgIg");
	this.shape_11.setTransform(10.5,-91.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CC9966").s().p("AGsSPIASgsQhBi2iZh1IgWgTIg8hAQhChagJh8IAAgfQBZiIBlh7QBeh0BthjICDBhIAAB+IAAh+IAKAKIgKB0IgHA9QiUCUi0BuIAnBeIAhAXIAEAKQAaAGAWAMQAQATAVALIAJAKQASAWAYARIB7E3IAABLIgUARQgcgJgNgMQgCgCgFgBQgyAogYAAQgZAAAAgogAJTB3gAFzkHQgagYgPgfIEJh5IAAGIQhrhrh1htgAJTm3IABgCQApDBgqDJgABAihQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBIgZgLIldmMIiOBJIBNh0QhaAphggQQgbgCgagGIAAgBQAYAAAYgFQBigVBcgtIATgGQBLA1A9BBQCTCdCxB4QACguAIgtQAHgnALglQAlh+BShsIgTglIBJAVQgDglAPghQAWgyAognIAkAzIAcgRQAxA+BphNIAAChIAAihIAEgDQAWApgGA5IAABCIgTAAIgBAAIiUB5Ighg0IgDAsIgEABIgLAGQhGAmgxg2QhzBpBTB/IACABIAeAqQgMBvhJBSIgNAOQg6gig5glgABhr5IhAhCIAEgjQAMgLAwgLQgSgRgcAPIg4gbIBJg/IgfhTIglgGQgxA3AkBEIAdgVIABgRIAYABIgbAgIgcAQIgngvQgGhMAzg6IAIgJIA+gtIgGASIB2g6IA4AmQgLAHgMAAIg0gNIgcAqIBPgVQASACASAFIABACIgfAgIBTABQgZBBA6ATIABAAIAAgCIAnCKQguCZh4AAQgvAAg6gXgAAutFIAXAOIAcAgQBAAtBBgpQAlhTgxhIQhCBhhmAIgAB5vxIAnAMIAagYIAmgFIAEACQgBhchZgBQgmAyAVA6gAJTtFgAA1vjQAAAEgCAEQgCADgCAAg");
	this.shape_12.setTransform(-0.4,3.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4A4A4A").s().p("ABkB3IABgCIAAACIgBAAgAhIgaIA0ANIgBAHIhPAUgAhXhyIAEgEIAEAFIgIgBg");
	this.shape_13.setTransform(22.4,-111.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#626262").s().p("AgSAAIACAAIAjAAg");
	this.shape_14.setTransform(18.5,-135.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AGZTqIgBgUIAdgcQgBBPBkhPQAEAAADADQANAMAbAJIgYATIh5AVIgdgQgADWNQIAXATQCYB1BBC2QhsiqiEiUgAHgM/QgYgRgRgWIgJgLIAQAHQB8B5AiCxIAAA3gAFZLeIgEgKIgigXIgmheQCzhvCUiTIAIg9IAABHQgfAMgPAgQhLBShTBBIgFAAIAAACIgPAHIgKAEQgQANgJAQIgxAgIAoBQQAEACADgBIAFgCQAOAcAXALIAHAKQgVgMgagGgAACJoIABgDIAGAKIgIAFgAIggZIg4hEIgJADQgGgTgKgOIADgCIiSiSIEciSIAAAUIkKB6QAQAfAZAYQB2BsBrBsIAAAYIgIgHQg+gRgpAzIBiBVIANANIAJAbIgJgKIAAgRIAAARIiEhhQhsBjheB0QhlB7haCHQCslHEljsgAA+hlIgEAFQgagfgfgZIknloQhOA2hRAPIBMh5Qh0BbhyhRQAbAGAbACQBgAQBagpIhOB0ICOhKIFeGNIAYALQAAAAABABQAAAAAAABQAAAAAAAAQABABAAAAQA4AkA6AjIAOgPQBIhRANhvIAZgMIgXBcQgkAeAAAsIgsBCQhZgDg5hAgAjWoCQg9hBhLg1IAigJIGiF6QAKggAJghQgIAtgDAuQiwh5iUicgAD9kqQhSh+BzhpQAwA2BHgmIALgGIAEgCIACgrIAhA0ICVh5IAAAFIAAgFIABAAIgBAFIieCWQhagbhaAcIggA8IAWB4IgDgBgAClqkIAwAeIgNgiQgmgRgkAXIAfA6Ig0geIANBSIgegRIgGhCIgUAfIAXBoIgNgsQgIgYgXAFIhJh/QAEAAACgCQAmgwgMgNIgxhLIAAAWQgkghgCgpQgGAFgKgBQgEgdACgcQADg5AKg4IAGgPIADgEIgEgBQAfhfBdgkIAUAFIA1gxIBrAEIBHgYIAHAuIA5gSIAMASICxBEIAJBfIAZgBIAdAtIABAIIgBAAIAAgIIAAAIIAAC+IgGACQhYBNg8gkIgdAQIgjgyQgpAngWAyQgPAhAEAlIhJgWIATAmQhTBsgkB+QAaiEAAiMgABptJQgwAKgLALIgEAkIA/BBQDQBTA/jUIgmiKIgBACQg7gUAZhAIhTgBIAgggIgCgCQgSgGgRgBIAAgIQANAAALgIIg5glIh1A6IAGgTIg/AtIgIAKQgyA6AGBLIAmAwIAcgQIAcggIAFgFQADAAACgDQABgEAAgEIgZg0IgWgCIgMAxIAYAUIgBARIgeAUQgjhEAwg2IAlAFIAgBTIhLBAIA5AbQAOgHALAAQAMAAAJAJgAgfuDQAAAJAFAHQAEAGAGAAQgDgXgIAAIgEABgAHUvxIAAAAIADgCgAhFwUIACgCIgBgCIgBAEgAGzw7IADgEIgGgDQAAAFADACgAHAxnIAAAAIACAAIgBAAIgBAAgACUzDIAJABIgFgEgApio2QB5gdB4gfQhbAthjAVQgXAFgZAAQgKgJAHgCgAJcp5gABprsQA/AjA3gxQAEgDACgEIAAhFIgEgKIgIAAIgBAAIgBABIgGAGIh0AtIgCAAQgWgBAJARIgYgOQBngIBChhQAxBHgmBTQgfAUgfAAQghAAgigXg");
	this.shape_15.setTransform(-1.2,-1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.buffyexpstill, new cjs.Rectangle(-62.6,-135.5,125.3,261.8), null);


(lib.bubexpstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAGGcQgDgCAAgEIAAgIIgFgBIgBAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAgLIACgPQABgKADgJIAEgKIADgYQACgTAFgTIAHgZIAAgFIABgEQACgWAIgTIAEgUQgTgHgPgOQgHgGgFgIIgZgjIgbgpQgHgLgEgMQgNgWgOgUIgGgGIgBAAIgBABIgEgGIgDgFIgKgPQgEgHgCgHQgOgYgGgcQgGgagDgbQgDgiALgfQAEgMAJgLIAhgqQAYgeAigVQAlgVAigWIAWgOQAcgRAbgNIABAAQARgDgBAOQgCAGgGACIgGACQgNAFgNAJIgRAKQgoAXgmAYQgcASgZAWQgOAMgMAPIgVAZQgYAZAAAjQAAAqALAoIAAACIALAWQAEAJADAJQAIAPAKAOIAEAFIAAABIACADQATAXANAaIABACQAKAXAPAVIAWAfIAHAKIAAABQASAZAdALQANAFAPABQAGABAHgCQAMgDALgEQALgFALgFIAGgEIAKgFQAFgDAEADIABABQAEAEgDAEQgDAFgFAEIgIAEQgPAKgRAFIgBAAIgLADQAGABAEAFIABABIACADIAMALIARAOQADADAEABQABAAAAAAQAAAAABABQAAAAAAAAQABABAAAAQAEAKgKABIgCAAQgKABgHgHQgLgMgNgJIAAAAQgKgIgEgKQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgBIgBAAQgIACgIgBIgTgDIAAADQgFAVgGAWIgDANIAEAAIgPBCQAJAHgGAOIgKAZIAAAJIAAALIAAAbIgBADQgBAHgFAAQgDAAgFgCg");
	this.shape.setTransform(-58,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1A1A1A").s().p("AAHA6QgEgEgFAAIANgNQAEgEABgDQAHAEAMgBQAFAAADgCIAEgGQAUAKAGgXQAEgSgRgFQgGACgEADIgBgBQgNgQgXAAQgHAAgEAHQgHAMAHALQgZgZguAbQgGApAugHIAAAHQgPACgOAEIgMADIgFAAIgDgCIgFgHQAAgUACgVQACgWASgLQAggUg2gNIAAgOIAOAAQAOANAaABIANAAIAIALQADAEAFACIBBAXQAGACACAFIAIASQAAATADASIgFAFQgHAHgFgBQgkgIgUAQQAAgGgEgEg");
	this.shape_1.setTransform(26.6,112.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000099").s().p("AgVENQgWgCgVgEIgJgCQgYgBgWgFIg7gTIg8gOIgggFIgygGQgcgEgaAAIACgXIABgtIABgsIgCgrIgDgpIgFglIgDgUIgBgBIABgEIAAgbIAAgLIAAgIIAKgaQAGgOgJgGIAOhCIgDAAIADgNQAGgWAEgWIABgDIASAEQAJABAIgCIAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAEAKAKAHIAAAAQANAKALAMQAHAGAKAAQAFAKAEAKQAPAEANAGQAJADAIAFIAVAKIAQAHIAQAGIARAFIAQAFIAjAKQAbAFAZAIIAxANIA0AJIA4AEIA6AAIA2gEIA1gJQAFgCADgCIAXgMQAYgNAcgHIgBATIgBAnIgBAlIgBAkIAAAsIABAbIAEAbIAKArIADAMIgbAVIgaAVIgMAMIgNALIgMAMIgMALQgEADgFAAQgFADgGABIgwAAQgegDgfAEQgLgDgIgGQgIgGgEgLQgEgNABgNQABgVACgVIAFguIAEguIAAgJIgFgSQgDgLgKgIQgFALgDALQgHAbgBAbQgCAeABAeIABAcIgCAbIgCAZIgBAFIgCADIgEAHQgFAJgGAJQgFAHgHAEQgGAEgIACIgcABIgrgBg");
	this.shape_2.setTransform(-17.5,45.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#090909").s().p("ABPDVQgYgNgjABQgGAAgEgCQgsgSgaANQgHAAgGgCQg0gPALhOQAGgOALgFQAwgZgdgwQgbgugXgzIAAgOIAAhfQAHAAADgDQAEgDAAgHQAFAAAEAEQAEAEAAAFIAABfIAAAOQAXAzAXAvQAIAQAFATIADAQQACAWglgCQgHgBgEAJQgCAFAAAHQgVAcAeAqQALARAQgjQAEgLAHgHIAHAHQAOAUASAOQAIAGAIgGQAlggAVAvQACAFANAAIApAAQAAAFgEAEQgEAEgGAAQgNAAgNAFIgIABIgCAAg");
	this.shape_3.setTransform(-39.4,103.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#202020").s().p("AhKgJIAAgOQAtgXA9gKQAIgBACABQAbAPgWAEQhLALBYAHQAfADgfAEQg+AHgFAxIANAAIAbAAIAAANIgOAAIgEAAQhOAAgLhCg");
	this.shape_4.setTransform(-9.5,-15.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#181818").s().p("Ag2BxQgKgcgXgKIAJgDQAEgBAEgCIABgDQACgKAAgJIAHAAQADArAqgmQAmgjAfAlIgHAAQhIABgVAvIAAANQgHAAgBgCgAhKghIAAgOQBGgnBPgaQAGgCAHAAQgHAvg9AAQgGAAgHAIQgeAkgzAEg");
	this.shape_5.setTransform(-12.3,-28.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#111111").s().p("AAXC3QAfgkgFhIQgDhAgJg5QgHAAgCgEQgqhDg5g0QAFAAAFgEQAEgEgBgFIBKBKQAgAuAPA9IACAGQAAAIAEAJIADAPQgGBAgRA+IgZAUg");
	this.shape_6.setTransform(36.3,-16);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AheAnQgLgFgCgNQgCgWAMgTIAPgRIAOABQgOAPAGARIAHASIALABIAKAEIALgBIABAAIABABQAAAEgBADQgFAGgHAFQgNAIgMAAQgLAAgKgGgABGABQgRgNAGgUQADgGAFgGQgDANAIAMQAMAPATgEIAFgHIgDAZIgEACIgHADQgOgGgKgIg");
	this.shape_7.setTransform(-16.8,-51.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#996633").s().p("AieBjIgEgYIAJgIQAQgPAEgSIAHgeIAGgjIAMgEIAegLQANgGAMgHQAjgUAkgSQAGgCAHAAQARAGAHARIBsADIgFAGQgJAJgMABQgOADgPgBQgRgDgMAEIgEAPQgbgJgXAEIgVAEQgQAEgJALQgXAZgdAOIgVgTIgXAsIgeA2QgEAHgFAAIgCgBg");
	this.shape_8.setTransform(-25.2,-56.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#191919").s().p("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");
	this.shape_9.setTransform(-10.1,27.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFCC99").s().p("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");
	this.shape_10.setTransform(-15.5,33.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bubexpstill, new cjs.Rectangle(-74,-71.6,117.6,198.8), null);


(lib.LGlobalClass = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Symbol_36:0});

	// timeline functions:
	this.frame_0 = function() {
		///*--------------VERSION CONTROL INFORMATION----------------------
		//
		//	Learning Interaction Global Toolbox Class
		//	Developed by Dan Carr
		//	Quality Assurance by Andrew Chemey
		//	Last Modified for Flash MX: November 25, 2001
		//	Copyright 2002 Macromedia Inc. All rights reserved.
		//	
		//	
		//  ------------------END VERSION CONTROL--------------------------
		//  
		//  Section 1: Start Contruction of the Global Class
		//  
		//  1-1: _global.LToolBox		// Initializes the Global Class
		//  
		//  Section 2: Graphic Initialization Handling
		//  
		//  2-1: setTextField			// Sets a text field on the stage
		//  2-2: setCompLabel			// Sets the label of a component on the stage
		//  2-3: setCompCallBack		// Sets the callBack of a component on the stage
		//  2-4: setCompState			// Sets the active state of a component on the stage
		//  2-5: getCompLabel			// Returns the label of a component on the stage
		//  2-6: initControlButton	// Initializes the control button component
		//  
		//  Section 3: Feedback Event Handling
		//  
		//  3-1: setFeedback			// Initializes feedback responses
		//   
		//  Section 4: Navigation Event Handling
		//  
		//  4-1: setNavigation		// Handles navigation events at the end of a session
		//  
		//  Section 5: Tracking Toolbox
		//  
		//  5-1: sessionStart			// DateStamp, timeStamp, and start sessionTimer
		//  5-2: sessionStop			// Stop sessionTimer and return Latency
		//  5-3: submitScore			// Format score and submit to the publish template
		//  
		//  Section 6: Common Toolbox
		//  
		//  6-1: getDateStamp			// Format current date
		//  6-2: getTimeStamp			// Format current time
		//  6-3: sessionTimer			// "Start" and "Stop" the sessionTimer for Latency
		//  6-4: getLatency			// Format seconds to hours for Latency
		//  6-5: formatNum			// Format single digit number to a double digit number
		//  6-6: getObjProp			// Returns a report from an Object
		//  6-7: reportToOutput		// Trace this session's instance Properties to Output
		//  
		//*/
		//
		//#initclip 0
		//
		//// SECTION 1: START GLOBAL FUNCTIONS
		//
		//// 1-1: Constructor function for the global class
		//
		//_global.LToolBox = function()
		//{
		//	this.interaction_id = undefined;
		//	this.interaction_type = undefined;
		//	
		//	this.correct_response = undefined;
		//	this.student_response = undefined;
		//	this.result = undefined;
		//		
		//	this.feedback = undefined;
		//	this.numOfTries = 1;
		//	this.feedback_list = undefined;
		//	
		//	this.tracking = undefined;
		//	this.weighting = undefined;
		//	this.objective_id = undefined;
		//	this.latency = undefined;
		//	
		//	this.navigation = undefined;
		//}
		//
		//// Inherit Object properties
		//_global.LToolBox.prototype = new Object();
		//
		//
		//// SECTION 2: GRAPHIC INITIALIZATION HANDLING
		//
		//
		//// 2-1: Locate a named text field and set its value
		//
		//LToolBox.prototype.setTextField = function (fieldName, val) {
		//	
		//	eval(fieldName).text = val;
		//}
		//
		//
		//// 2-2: Locate a named component and set its label
		//
		//LToolBox.prototype.setCompLabel = function (UIComponent, val) {
		//	
		//	eval(UIComponent).setLabel(val);
		//}
		//
		//
		//// 2-2: Locate a named component and set its changeHandler
		//
		//LToolBox.prototype.setCompCallBack = function (UIComponent, val) {
		//	
		//	if(eval(UIComponent).setClickHandler){
		//		eval(UIComponent).setClickHandler(val);
		//		
		//	} else if (eval(UIComponent).setChangeHandler){
		//		eval(UIComponent).setChangeHandler(val);
		//	}
		//}
		//
		//
		//// 2-3: Locate a named component and set its enabled state
		//
		//LToolBox.prototype.setCompState = function (UIComponent, val) {
		//	
		//	eval(UIComponent).setEnabled(val);
		//}
		//
		//
		//// 2-4: Locate a named component and return its label
		//
		//LToolBox.prototype.getCompLabel = function (UIComponent) {
		//
		//	return eval(UIComponent).getLabel();
		//}
		//
		//
		//// 2-5: Locate a named control button component and set its initial state
		//
		//LToolBox.prototype.initControlButton = function (callBack) {
		//
		//	var initial_state;
		//	
		//	if (this.feedback == true){
		//		initial_state = "Check Answer";
		//		if (this.navigation == "Auto GoTo Next Frame"){
		//			trace("WARNING: Feedback must be false and Tracking turned true \rto use Auto GoTo Next Frame. Navigation reset to Next Button.");
		//			this.navigation = "Next Button";
		//		}
		//	} else if (this.tracking == true){
		//		initial_state = "Submit";
		//	} else if (this.navigation != "Off"){
		//		initial_state = "Next Question";
		//		if (this.navigation == "Auto GoTo Next Frame"){
		//			trace("WARNING: Feedback must be false and Tracking turned true \rto use Auto GoTo Next Frame. Navigation reset to Next Button.");
		//			this.navigation = "Next Button";
		//		}
		//	} else {
		//		initial_state = "";
		//	}
		//	
		//	this.label_state = initial_state;
		//	this.setCompLabel(this.Assets.ControlButton, initial_state);
		//	this.setCompState(this.Assets.ControlButton, false);
		//	this.setCompCallBack(this.Assets.ControlButton, callBack);
		//}
		//
		//
		//// SECTION 3: FEEDBACK EVENT HANDLING
		//
		//// 3-1: Set event handler to populate the feedback field
		//
		//LToolBox.prototype.setFeedback = function (val)
		//{ 
		//	if (this.feedback == true){
		//		
		//		if (val.toLowerCase() == "init"){ // Use "init" for initial feedback.
		//			this.setTextField(this.Assets.FeedbackField, this.feedback_list[0]);
		//			
		//		} else if (val.toLowerCase() == "button"){ // Use "button" for transition feedback
		//			var buttonState = this.getCompLabel(this.Assets.ControlButton);
		//			this.setTextField(this.Assets.FeedbackField, "Click the "+buttonState+" button.");
		//			
		//		} else if (val.toLowerCase() == "c"){ // "c" for correct evaluation result
		//			this.setTextField(this.Assets.FeedbackField, this.feedback_list[1]);
		//			
		//		} else if (val.toLowerCase() == "w"){ // "w" for incorrect evaluation result
		//			if(this.numOfTries > 1){
		//				this.setTextField(this.Assets.FeedbackField, this.feedback_list[3]);
		//			} else {
		//				this.setTextField(this.Assets.FeedbackField, this.feedback_list[2]);
		//			}
		//		}
		//	} else {
		//		this.setTextField(this.Assets.FeedbackField, "");
		//	}
		//}
		//
		//
		//
		//// SECTION 4: FEEDBACK EVENT HANDLING
		//
		//
		//// 4-1: Build Event Handler for navigation calls
		//
		//LToolBox.prototype.setNavigation = function ()
		//{ 
		//	if (this.navigation == "Off"){
		//		
		//		this.setCompState(this.Assets.ControlButton,false);
		//		
		//	} else if (this.navigation == "Next Button") {
		//		
		//		if (!this.buttonFlag || this.buttonFlag == false){
		//			this.setCompLabel(this.Assets.ControlButton,"Next Question");
		//			this.buttonFlag = true;
		//			
		//		} else {  
		//			
		//			if(this.navAction == "Stop"){
		//				if(this.navLabel == ""){
		//					eval(this.assets_path.nextFrame());
		//				} else {
		//					eval(this.assets_path.gotoAndStop(this.navLabel));
		//				}
		//				
		//			} else if(this.navAction == "Play"){
		//				if(this.navLabel == ""){
		//					eval(this.assets_path.gotoAndPlay(this._currentframe+1));
		//				} else {
		//					eval(this.assets_path.gotoAndPlay(this.navLabel));
		//				}
		//			}
		//		}
		//		
		//	} else if (this.navigation == "Auto GoTo Next Frame") {
		//		eval(this.assets_path.nextFrame());
		//	}
		//}
		//
		//
		//
		//// SECTION 5: TRACKING TOOLBOX
		//
		//
		//// 5-1: Get date and time stamp and start session timer
		//
		//LToolBox.prototype.sessionStart = function () {
		//	
		//	this.dateStamp = this.getDateStamp();
		//	this.timeStamp = this.getTimeStamp();
		//	this.sessionTimer("start");
		//}
		//
		//
		//// 5-2: Stop session timer and return latency
		//
		//LToolBox.prototype.sessionStop = function () {
		//	
		//	this.latency = this.getLatency(this.sessionTimer("stop"));
		//}
		//
		//
		//// 5-3: Format data and submit tracking
		//
		//LToolBox.prototype.submitScore = function () {
		//	
		//	if (this.weighting <= 0 || this.weighting == undefined) {
		//		this.weighting = 1;
		//	}
		//	
		//	var weight;
		//	
		//	if (this.result == "C") {
		//		weight = this.weighting;
		//	} else if (this.result == "W") {
		//		weight = -1 * this.weighting;
		//	}
		//	
		//	if (this.tracking == true){
		//	
		//		var intData = this.dateStamp+";"+this.timeStamp+";"+this.interaction_ID+";"+
		//		this.objective_ID+";"+this.interaction_type+";"+this.correct_response+";"+
		//		this.student_response+";"+this.result+";"+this.weighting+";"+this.latency;
		//		
		//		//trace("intData: "+intData);
		//		
		//		fscommand ("MM_cmiSendInteractionInfo", intData);
		//	}
		//	_root.QuizTrack.countScore (weight);
		//}
		//
		//
		//// SECTION 6: COMMON TOOLBOX
		//
		//
		//// 6-1: Return formatted date properties
		//
		//LToolBox.prototype.getDateStamp = function () 
		//{
		//	var dateObj = new Date();
		//
		//	var year = dateObj.getFullYear();
		//	var month = this.formatNum(dateObj.getMonth()+1);
		//	var day = this.formatNum(dateObj.getDate());
		//	
		//	var dateString = year+"/"+month+"/"+day;
		//	return dateString;
		//}
		//
		//
		//// 6-2: Return formatted time properties
		//
		//LToolBox.prototype.getTimeStamp = function () 
		//{
		//	var timeObj = new Date();
		//
		//	var hours = this.formatNum(timeObj.getHours());
		//	var minutes = this.formatNum(timeObj.getMinutes());
		//	var seconds = this.formatNum(timeObj.getSeconds());
		//
		//	var timeString = hours+":"+minutes+":"+seconds;
		//	return timeString;
		//}
		//
		//// 6-3: Start or stop the session timer to calculate latency
		//
		//LToolBox.prototype.sessionTimer = function (action) 
		//{
		//	if (action.toLowerCase() == "start"){
		//		this.startTime = int(getTimer()/1000);
		//		
		//	} else if (action.toLowerCase() == "stop"){
		//		this.stopTime = int(getTimer()/1000);
		//		var elapsedSec = this.stopTime - this.startTime;
		//		return elapsedSec; 
		//	}
		//}
		//
		//
		//// 6-4: Return formatted date properties
		//
		//LToolBox.prototype.getLatency = function (timeInSec) 
		//{
		//	var l_seconds, l_minutes, l_hours, timeInHours;
		//	
		//	if (timeInSec <= 9) {
		//		l_seconds = "0"+timeInSec;
		//		l_minutes = "00";
		//		l_hours = "00";
		//	} else {
		//		l_seconds = timeInSec;
		//		l_minutes = "00";
		//		l_hours = "00";
		//	}
		//	if (l_seconds > 59) {
		//		l_minutes = int(l_seconds / 60);
		//		l_minutes = this.formatNum(l_minutes);
		//		l_seconds = l_seconds - (l_minutes * 60);
		//		l_seconds = this.formatNum(l_seconds);
		//		l_hours = "00";
		//	}
		//	if (l_minutes > 59) {
		//		l_hours = int(l_minutes/ 60);
		//		l_hours = this.formatNum(l_hours);
		//		l_minutes = l_minutes - (l_hours * 60);
		//		l_minutes = this.formatNum(l_minutes);
		//	}
		//	timeInHours = l_hours+":"+l_minutes+":"+l_seconds;
		//	return timeInHours;
		//}
		//
		//
		//// 6-5: Return formatted number - convert from single digit to double digit
		//
		//LToolBox.prototype.formatNum = function (num) {
		//	
		//	if (num <= 9) {
		//		num = "0"+num;
		//	}
		//	return num;
		//}
		//
		//
		//// 6-6: Trace the properties of an object and return its values in an Array
		//
		//LToolBox.prototype.getObjProp = function (objName, Trace) {
		//	
		//	var objNameArray = new Array();
		//	var i=0;
		//	
		//	for (x in objName){
		//		objNameArray[i] = objName[x];
		//		if(arguments[1] == true){
		//			trace(x+" : "+objName[x]);
		//		}
		//		i++;
		//	}
		//	return objNameArray.reverse();
		//}
		//
		//
		//// 6-7: Trace Session Object properties to confirm tracking
		//
		//LToolBox.prototype.reportToOutput = function (defined) {
		//	
		//	var x,y;
		//	
		//	for(prop in this){
		//		
		//		x = this[prop];
		//		y = typeof(this[prop]);
		//		
		//		if(defined == true){
		//			if(x != undefined && y != "function" && y != "object" ){
		//				trace("this."+prop+" : "+this[prop]);
		//			}
		//			
		//		} else if (defined == false || eval(defined) == undefined){
		//			trace("this."+prop+" : "+this[prop]);
		//			
		//		} else if (defined.toLowerCase() == "object") {
		//			if(y == "object" ){
		//				trace("this."+prop);
		//			}
		//			
		//		} else if (defined.toLowerCase() == "function") {
		//			if(y == "function" ){
		//				trace("this."+prop);
		//			}
		//		}
		//	}
		//	trace("-------------------");
		//	trace("");
		//}
		//
		//#endinitclip
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = getMCSymbolPrototype(lib.LGlobalClass, null, null);


(lib.whyexp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_119 = function() {
		this.gotoAndPlay(15);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(119).call(this.frame_119).wait(1));

	// Layer 1
	this.instance = new lib.whyexpstill();
	this.instance.parent = this;
	this.instance.setTransform(38.2,0);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(34).to({alpha:1},0).wait(86));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,-18.8,78.6,43);


(lib.whereexp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_119 = function() {
		this.gotoAndPlay(15);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(119).call(this.frame_119).wait(1));

	// Layer 1
	this.instance = new lib.whereexpstill();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({alpha:1},0).wait(66));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54,-18.8,108.1,43);


(lib.whenexp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_119 = function() {
		this.gotoAndPlay(15);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(119).call(this.frame_119).wait(1));

	// Layer 1
	this.instance = new lib.whenexpstill();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({alpha:1},0).wait(76));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47,-18.8,94,43);


(lib.Hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// Layer 1
	this.instance = new lib.HandStill();
	this.instance.parent = this;
	this.instance.setTransform(-6.6,-5.2,0.998,0.998,-38.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-8.4,x:-2.4,y:0.1},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.5,-18,27.9,25.7);


(lib.Towhatextexp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_119 = function() {
		this.gotoAndPlay(15);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(119).call(this.frame_119).wait(1));

	// Layer 1
	this.instance = new lib.towhatextexpstill();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(74).to({alpha:1},0).wait(46));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.1,-18.8,220.3,43);


(lib.staceexp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_34 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(1));

	// Layer 1
	this.instance = new lib.staceexpstill();
	this.instance.parent = this;
	this.instance.setTransform(5.2,12.1,0.591,0.591);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(34).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-30.6,59.5,85.4);


(lib.samexp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

	// Layer 1
	this.instance = new lib.samexpstill();
	this.instance.parent = this;
	this.instance.setTransform(34.4,32.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.7,-46.5,94.1,157.5);


(lib.proexpstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Hand();
	this.instance.parent = this;
	this.instance.setTransform(33.8,-51.6);

	this.instance_1 = new lib.BlackMan();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-3.9,2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.proexpstill, new cjs.Rectangle(-41,-69.6,82.1,139.2), null);


(lib.proexp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_74 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(74).call(this.frame_74).wait(1));

	// Layer 1
	this.instance = new lib.proexpstill();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(74).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41,-69.6,82.1,139.2);


(lib.howexp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_119 = function() {
		this.gotoAndPlay(15);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(119).call(this.frame_119).wait(1));

	// Layer 1
	this.instance = new lib.howexpstill();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(64).to({alpha:1},0).wait(56));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.1,-18.8,74.2,43);


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


(lib.FBoundingBoxSymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{enabled:0,disabled:1});

	// timeline functions:
	this.frame_0 = function() {
		/* var component = _parent;
		
		component.registerSkinElement(boundingBox, "background");
		
		stop();*/
	}
	this.frame_1 = function() {
		/* 
		
		component.registerSkinElement(boundingBox2,"backgroundDisabled");
		
		stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Skin Elements
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AH0H0IvnAAIAAvnIPnAAg");
	this.shape.setTransform(50,50);

	this.boundingBox = new lib.boundingBox();
	this.boundingBox.parent = this;
	this.boundingBox.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.boundingBox},{t:this.shape}]}).to({state:[{t:this.boundingBox},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,102,102);


(lib.fpb_up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* var component = _parent._parent;
		
		component.registerSkinElement(frame5, "face");
		component.registerSkinElement(frame3, "shadow");
		component.registerSkinElement(frame1, "darkshadow");
		component.registerSkinElement(frame4, "highlight");
		component.registerSkinElement(frame2, "highlight3D");
		
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin elements
	this.frame5 = new lib.fpb_face_up();
	this.frame5.parent = this;
	this.frame5.setTransform(10,10,2.025,2.025);

	this.frame4 = new lib.fpb_leftInFrame_up();
	this.frame4.parent = this;
	this.frame4.setTransform(5,5,2.152,2.152);

	this.frame3 = new lib.fpb_rightInFrame_up();
	this.frame3.parent = this;
	this.frame3.setTransform(5,5,2.278,2.278);

	this.frame2 = new lib.fpb_leftOutFrame_up();
	this.frame2.parent = this;
	this.frame2.setTransform(0,0,2.405,2.405);

	this.frame1 = new lib.fpb_rightOutFrame_up();
	this.frame1.parent = this;
	this.frame1.setTransform(0,0,2.001,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame1},{t:this.frame2},{t:this.frame3},{t:this.frame4},{t:this.frame5}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_up, new cjs.Rectangle(0,0,100.1,100), null);


(lib.fpb_over = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* var component = _parent._parent;
		
		component.registerSkinElement(frame5, "face");
		component.registerSkinElement(frame3, "shadow");
		component.registerSkinElement(frame1, "darkshadow");
		component.registerSkinElement(frame4, "highlight");
		component.registerSkinElement(frame2, "highlight3D");
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin elements
	this.frame5 = new lib.fpb_face_over();
	this.frame5.parent = this;
	this.frame5.setTransform(10,10,2.025,2.025);

	this.frame4 = new lib.fpb_leftInFrame_over();
	this.frame4.parent = this;
	this.frame4.setTransform(5,5,2.152,2.152);

	this.frame3 = new lib.fpb_rightInFrame_over();
	this.frame3.parent = this;
	this.frame3.setTransform(5,5,2.278,2.278);

	this.frame2 = new lib.fpb_leftOutFrame_over();
	this.frame2.parent = this;
	this.frame2.setTransform(0,0,2.405,2.405);

	this.frame1 = new lib.fpb_rightOutFrame_over();
	this.frame1.parent = this;
	this.frame1.setTransform(0,0,2.001,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame1},{t:this.frame2},{t:this.frame3},{t:this.frame4},{t:this.frame5}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_over, new cjs.Rectangle(0,0,100.1,100), null);


(lib.fpb_down = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* var component = _parent._parent;
		
		component.registerSkinElement(frame5, "face");
		component.registerSkinElement(frame4, "shadow");
		component.registerSkinElement(frame2, "darkshadow");
		component.registerSkinElement(frame3, "highlight");
		component.registerSkinElement(frame1, "highlight3D");
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin elements
	this.frame5 = new lib.fpb_face_press();
	this.frame5.parent = this;
	this.frame5.setTransform(10,10,2.025,2.025);

	this.frame4 = new lib.fpb_leftInFrame_press();
	this.frame4.parent = this;
	this.frame4.setTransform(5,5,2.152,2.152);

	this.frame3 = new lib.fpb_rightInFrame_press();
	this.frame3.parent = this;
	this.frame3.setTransform(5,5,2.278,2.278);

	this.frame2 = new lib.fpb_leftOutFrame_press();
	this.frame2.parent = this;
	this.frame2.setTransform(0,0,2.405,2.405);

	this.frame1 = new lib.fpb_rightOutFrame_press();
	this.frame1.parent = this;
	this.frame1.setTransform(0,0,2.001,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame1},{t:this.frame2},{t:this.frame3},{t:this.frame4},{t:this.frame5}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_down, new cjs.Rectangle(0,0,100.1,100), null);


(lib.fpb_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* var component = _parent._parent;
		
		component.registerSkinElement(frame5, "face");
		component.registerSkinElement(frame3, "shadow");
		component.registerSkinElement(frame1, "darkshadow");
		component.registerSkinElement(frame4, "highlight");
		component.registerSkinElement(frame2, "highlight3D");
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin elements
	this.frame5 = new lib.fpb_face_disabled();
	this.frame5.parent = this;
	this.frame5.setTransform(10,10,2.025,2.025);

	this.frame4 = new lib.fpb_leftInFrame_disabled();
	this.frame4.parent = this;
	this.frame4.setTransform(5,5,2.152,2.152);

	this.frame3 = new lib.fpb_rightInFrame_disabled();
	this.frame3.parent = this;
	this.frame3.setTransform(5,5,2.278,2.278);

	this.frame2 = new lib.fpb_leftOutFrame_disabled();
	this.frame2.parent = this;
	this.frame2.setTransform(0,0,2.405,2.405);

	this.frame1 = new lib.fpb_rightOutFrame_disabled();
	this.frame1.parent = this;
	this.frame1.setTransform(0,0,2.001,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame1},{t:this.frame2},{t:this.frame3},{t:this.frame4},{t:this.frame5}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_disabled, new cjs.Rectangle(0,0,100.1,100), null);


(lib.buffyexp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_54 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(54).call(this.frame_54).wait(1));

	// Layer 1
	this.instance = new lib.buffyexpstill();
	this.instance.parent = this;
	this.instance.setTransform(438.7,-45.4,0.294,0.275);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(420.2,-82.7,36.9,72.1);


(lib.bubexp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_64 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(64).call(this.frame_64).wait(1));

	// Layer 1
	this.instance = new lib.bubexpstill();
	this.instance.parent = this;
	this.instance.setTransform(-26.7,32.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(64).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.7,-38.9,117.6,198.8);


(lib.ADVERBEXP = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// Layer 1
	this.instance = new lib.Symbol177("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(277.1,327.9,0.618,1.002,0,-30,-179.3);
	this.instance.alpha = 0;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance.cache(-18,-22,36,45);

	this.instance_1 = new lib.Symbol174("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(276.5,326.8,0.617,1.002,0,-30,-179.5);
	this.instance_1.alpha = 0;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_1.cache(-17,-23,34,46);

	this.instance_2 = new lib.Symbol173("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(276.4,326.7,0.616,1.002,0,-30,-179.6);
	this.instance_2.alpha = 0;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_2.cache(-16,-25,33,50);

	this.instance_3 = new lib.Symbol178("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(277.8,327.6,0.62,1.006,0,-30,-179.3);
	this.instance_3.alpha = 0;
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_3.cache(-28,-24,57,48);

	this.instance_4 = new lib.Symbol177("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(277.1,327.9,0.618,1.002,0,-30,-179.3);
	this.instance_4.alpha = 0;
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_4.cache(-18,-22,36,45);

	this.instance_5 = new lib.Symbol176("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(276.9,327.1,0.618,1.003,0,-30,-179.4);
	this.instance_5.alpha = 0;
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_5.cache(-21,-24,42,48);

	this.instance_6 = new lib.Symbol170("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(276.9,327.4,0.618,1.002,0,-30,-179.4);
	this.instance_6.alpha = 0;
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_6.cache(-18,-22,37,45);

	this.instance_7 = new lib.Symbol175("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(276.3,326.5,0.616,1.001,0,-30,-179.6);
	this.instance_7.alpha = 0;
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_7.cache(-16,-24,31,48);

	this.instance_8 = new lib.Symbol174("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(276.5,326.8,0.617,1.002,0,-30,-179.5);
	this.instance_8.alpha = 0;
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_8.cache(-17,-23,34,46);

	this.instance_9 = new lib.Symbol173("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(276.4,326.7,0.616,1.002,0,-30,-179.6);
	this.instance_9.alpha = 0;
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_9.cache(-16,-25,33,50);

	this.instance_10 = new lib.Symbol172("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(276.8,327.3,0.617,1.002,0,-30,-179.4);
	this.instance_10.alpha = 0;
	this.instance_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_10.cache(-18,-24,36,47);

	this.instance_11 = new lib.Symbol171("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(276.8,327.3,0.618,1.002,0,-30,-179.4);
	this.instance_11.alpha = 0;
	this.instance_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_11.cache(-18,-24,36,49);

	this.instance_12 = new lib.Symbol170("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(306.6,236.6,0.328,1.004,0,-22.8,-169.6);
	this.instance_12.alpha = 0.238;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12,p:{scaleX:0.328,skewX:-22.8,skewY:-169.6,x:306.6,y:236.6,alpha:0.238,scaleY:1.004}},{t:this.instance_11,p:{scaleX:0.618,scaleY:1.002,skewX:-30,skewY:-179.4,x:276.8,y:327.3,alpha:0}},{t:this.instance_10,p:{scaleX:0.617,scaleY:1.002,skewX:-30,skewY:-179.4,x:276.8,y:327.3,alpha:0}},{t:this.instance_9,p:{scaleX:0.616,scaleY:1.002,skewX:-30,skewY:-179.6,x:276.4,y:326.7,alpha:0}},{t:this.instance_8,p:{scaleX:0.617,scaleY:1.002,skewX:-30,skewY:-179.5,x:276.5,y:326.8,alpha:0}},{t:this.instance_7,p:{scaleX:0.616,scaleY:1.001,skewX:-30,skewY:-179.6,x:276.3,y:326.5,alpha:0}},{t:this.instance_6,p:{scaleX:0.618,skewX:-30,skewY:-179.4,x:276.9,y:327.4,alpha:0,scaleY:1.002,rotation:0}},{t:this.instance_5,p:{scaleX:0.618,scaleY:1.003,skewX:-30,skewY:-179.4,x:276.9,y:327.1,alpha:0}},{t:this.instance_4,p:{scaleX:0.618,scaleY:1.002,skewX:-30,skewY:-179.3,x:277.1,y:327.9,alpha:0}},{t:this.instance_3,p:{scaleX:0.62,scaleY:1.006,skewX:-30,skewY:-179.3,x:277.8,y:327.6,alpha:0}},{t:this.instance_2,p:{scaleX:0.616,scaleY:1.002,skewX:-30,skewY:-179.6,x:276.4,y:326.7,alpha:0}},{t:this.instance_1,p:{scaleX:0.617,skewX:-30,skewY:-179.5,x:276.5,y:326.8,alpha:0,scaleY:1.002}},{t:this.instance,p:{scaleX:0.618,skewX:-30,skewY:-179.3,x:277.1,y:327.9,alpha:0,scaleY:1.002}}]}).to({state:[{t:this.instance_12,p:{scaleX:0.313,skewX:-15.6,skewY:-6,x:279.8,y:184.3,alpha:0.48,scaleY:1.004}},{t:this.instance_11,p:{scaleX:0.618,scaleY:1.002,skewX:-30,skewY:-179.4,x:276.8,y:327.3,alpha:0}},{t:this.instance_10,p:{scaleX:0.617,scaleY:1.002,skewX:-30,skewY:-179.4,x:276.8,y:327.3,alpha:0}},{t:this.instance_9,p:{scaleX:0.616,scaleY:1.002,skewX:-30,skewY:-179.6,x:276.4,y:326.7,alpha:0}},{t:this.instance_8,p:{scaleX:0.617,scaleY:1.002,skewX:-30,skewY:-179.5,x:276.5,y:326.8,alpha:0}},{t:this.instance_7,p:{scaleX:0.616,scaleY:1.001,skewX:-30,skewY:-179.6,x:276.3,y:326.5,alpha:0}},{t:this.instance_6,p:{scaleX:0.618,skewX:-30,skewY:-179.4,x:276.9,y:327.4,alpha:0,scaleY:1.002,rotation:0}},{t:this.instance_5,p:{scaleX:0.618,scaleY:1.003,skewX:-30,skewY:-179.4,x:276.9,y:327.1,alpha:0}},{t:this.instance_4,p:{scaleX:0.618,scaleY:1.002,skewX:-30,skewY:-179.3,x:277.1,y:327.9,alpha:0}},{t:this.instance_3,p:{scaleX:0.62,scaleY:1.006,skewX:-30,skewY:-179.3,x:277.8,y:327.6,alpha:0}},{t:this.instance_2,p:{scaleX:0.616,scaleY:1.002,skewX:-30,skewY:-179.6,x:276.4,y:326.7,alpha:0}},{t:this.instance_1,p:{scaleX:0.617,skewX:-30,skewY:-179.5,x:276.5,y:326.8,alpha:0,scaleY:1.002}},{t:this.instance,p:{scaleX:0.618,skewX:-30,skewY:-179.3,x:277.1,y:327.9,alpha:0,scaleY:1.002}}]},1).to({state:[{t:this.instance_12,p:{scaleX:0.975,skewX:-8.3,skewY:-2.6,x:197.2,y:170.7,alpha:0.719,scaleY:1.002}},{t:this.instance_11,p:{scaleX:0.378,scaleY:1.004,skewX:-23.9,skewY:-170.7,x:300.7,y:248,alpha:0.199}},{t:this.instance_10,p:{scaleX:0.617,scaleY:1.002,skewX:-30,skewY:-179.4,x:276.8,y:327.3,alpha:0}},{t:this.instance_9,p:{scaleX:0.616,scaleY:1.002,skewX:-30,skewY:-179.6,x:276.4,y:326.7,alpha:0}},{t:this.instance_8,p:{scaleX:0.617,scaleY:1.002,skewX:-30,skewY:-179.5,x:276.5,y:326.8,alpha:0}},{t:this.instance_7,p:{scaleX:0.616,scaleY:1.001,skewX:-30,skewY:-179.6,x:276.3,y:326.5,alpha:0}},{t:this.instance_6,p:{scaleX:0.618,skewX:-30,skewY:-179.4,x:276.9,y:327.4,alpha:0,scaleY:1.002,rotation:0}},{t:this.instance_5,p:{scaleX:0.618,scaleY:1.003,skewX:-30,skewY:-179.4,x:276.9,y:327.1,alpha:0}},{t:this.instance_4,p:{scaleX:0.618,scaleY:1.002,skewX:-30,skewY:-179.3,x:277.1,y:327.9,alpha:0}},{t:this.instance_3,p:{scaleX:0.62,scaleY:1.006,skewX:-30,skewY:-179.3,x:277.8,y:327.6,alpha:0}},{t:this.instance_2,p:{scaleX:0.616,scaleY:1.002,skewX:-30,skewY:-179.6,x:276.4,y:326.7,alpha:0}},{t:this.instance_1,p:{scaleX:0.617,skewX:-30,skewY:-179.5,x:276.5,y:326.8,alpha:0,scaleY:1.002}},{t:this.instance,p:{scaleX:0.618,skewX:-30,skewY:-179.3,x:277.1,y:327.9,alpha:0,scaleY:1.002}}]},1).to({state:[{t:this.instance_12,p:{scaleX:1.071,skewX:-1.1,skewY:-0.9,x:59.6,y:195.6,alpha:0.961,scaleY:1}},{t:this.instance_11,p:{scaleX:0.21,scaleY:1.004,skewX:-16.7,skewY:-9.4,x:285.5,y:189.7,alpha:0.449}},{t:this.instance_10,p:{scaleX:0.617,scaleY:1.002,skewX:-30,skewY:-179.4,x:276.8,y:327.3,alpha:0}},{t:this.instance_9,p:{scaleX:0.616,scaleY:1.002,skewX:-30,skewY:-179.6,x:276.4,y:326.7,alpha:0}},{t:this.instance_8,p:{scaleX:0.617,scaleY:1.002,skewX:-30,skewY:-179.5,x:276.5,y:326.8,alpha:0}},{t:this.instance_7,p:{scaleX:0.616,scaleY:1.001,skewX:-30,skewY:-179.6,x:276.3,y:326.5,alpha:0}},{t:this.instance_6,p:{scaleX:0.618,skewX:-30,skewY:-179.4,x:276.9,y:327.4,alpha:0,scaleY:1.002,rotation:0}},{t:this.instance_5,p:{scaleX:0.618,scaleY:1.003,skewX:-30,skewY:-179.4,x:276.9,y:327.1,alpha:0}},{t:this.instance_4,p:{scaleX:0.618,scaleY:1.002,skewX:-30,skewY:-179.3,x:277.1,y:327.9,alpha:0}},{t:this.instance_3,p:{scaleX:0.62,scaleY:1.006,skewX:-30,skewY:-179.3,x:277.8,y:327.6,alpha:0}},{t:this.instance_2,p:{scaleX:0.616,scaleY:1.002,skewX:-30,skewY:-179.6,x:276.4,y:326.7,alpha:0}},{t:this.instance_1,p:{scaleX:0.617,skewX:-30,skewY:-179.5,x:276.5,y:326.8,alpha:0,scaleY:1.002}},{t:this.instance,p:{scaleX:0.618,skewX:-30,skewY:-179.3,x:277.1,y:327.9,alpha:0,scaleY:1.002}}]},1).to({state:[{t:this.instance_12,p:{scaleX:1,skewX:0,skewY:0,x:33.4,y:202.8,alpha:1,scaleY:1}},{t:this.instance_11,p:{scaleX:0.866,scaleY:1.002,skewX:-9.4,skewY:-2.7,x:224,y:170.1,alpha:0.68}},{t:this.instance_10,p:{scaleX:0.423,scaleY:1.003,skewX:-25,skewY:-171.7,x:294.5,y:260.4,alpha:0.172}},{t:this.instance_9,p:{scaleX:0.616,scaleY:1.002,skewX:-30,skewY:-179.6,x:276.4,y:326.7,alpha:0}},{t:this.instance_8,p:{scaleX:0.617,scaleY:1.002,skewX:-30,skewY:-179.5,x:276.5,y:326.8,alpha:0}},{t:this.instance_7,p:{scaleX:0.616,scaleY:1.001,skewX:-30,skewY:-179.6,x:276.3,y:326.5,alpha:0}},{t:this.instance_6,p:{scaleX:0.618,skewX:-30,skewY:-179.4,x:276.9,y:327.4,alpha:0,scaleY:1.002,rotation:0}},{t:this.instance_5,p:{scaleX:0.618,scaleY:1.003,skewX:-30,skewY:-179.4,x:276.9,y:327.1,alpha:0}},{t:this.instance_4,p:{scaleX:0.618,scaleY:1.002,skewX:-30,skewY:-179.3,x:277.1,y:327.9,alpha:0}},{t:this.instance_3,p:{scaleX:0.62,scaleY:1.006,skewX:-30,skewY:-179.3,x:277.8,y:327.6,alpha:0}},{t:this.instance_2,p:{scaleX:0.616,scaleY:1.002,skewX:-30,skewY:-179.6,x:276.4,y:326.7,alpha:0}},{t:this.instance_1,p:{scaleX:0.617,skewX:-30,skewY:-179.5,x:276.5,y:326.8,alpha:0,scaleY:1.002}},{t:this.instance,p:{scaleX:0.618,skewX:-30,skewY:-179.3,x:277.1,y:327.9,alpha:0,scaleY:1.002}}]},1).to({state:[{t:this.instance_12,p:{scaleX:1,skewX:0,skewY:0,x:33.4,y:202.8,alpha:1,scaleY:1}},{t:this.instance_11,p:{scaleX:1.094,scaleY:1,skewX:-2.2,skewY:-1.6,x:116.9,y:189.1,alpha:0.93}},{t:this.instance_10,p:{scaleX:0.121,scaleY:1.004,skewX:-17.8,skewY:-18.3,x:288,y:196.2,alpha:0.41}},{t:this.instance_9,p:{scaleX:0.616,scaleY:1.002,skewX:-30,skewY:-179.6,x:276.4,y:326.7,alpha:0}},{t:this.instance_8,p:{scaleX:0.617,scaleY:1.002,skewX:-30,skewY:-179.5,x:276.5,y:326.8,alpha:0}},{t:this.instance_7,p:{scaleX:0.616,scaleY:1.001,skewX:-30,skewY:-179.6,x:276.3,y:326.5,alpha:0}},{t:this.instance_6,p:{scaleX:0.618,skewX:-30,skewY:-179.4,x:276.9,y:327.4,alpha:0,scaleY:1.002,rotation:0}},{t:this.instance_5,p:{scaleX:0.618,scaleY:1.003,skewX:-30,skewY:-179.4,x:276.9,y:327.1,alpha:0}},{t:this.instance_4,p:{scaleX:0.618,scaleY:1.002,skewX:-30,skewY:-179.3,x:277.1,y:327.9,alpha:0}},{t:this.instance_3,p:{scaleX:0.62,scaleY:1.006,skewX:-30,skewY:-179.3,x:277.8,y:327.6,alpha:0}},{t:this.instance_2,p:{scaleX:0.616,scaleY:1.002,skewX:-30,skewY:-179.6,x:276.4,y:326.7,alpha:0}},{t:this.instance_1,p:{scaleX:0.617,skewX:-30,skewY:-179.5,x:276.5,y:326.8,alpha:0,scaleY:1.002}},{t:this.instance,p:{scaleX:0.618,skewX:-30,skewY:-179.3,x:277.1,y:327.9,alpha:0,scaleY:1.002}}]},1).to({state:[{t:this.instance_12,p:{scaleX:1,skewX:0,skewY:0,x:33.4,y:202.8,alpha:1,scaleY:1}},{t:this.instance_11,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:74.6,y:202.7,alpha:1}},{t:this.instance_10,p:{scaleX:0.757,scaleY:1.002,skewX:-10.6,skewY:-2.8,x:243.9,y:170.6,alpha:0.648}},{t:this.instance_9,p:{scaleX:0.466,scaleY:1.003,skewX:-26.1,skewY:-173.1,x:288.5,y:273,alpha:0.129}},{t:this.instance_8,p:{scaleX:0.617,scaleY:1.002,skewX:-30,skewY:-179.5,x:276.5,y:326.8,alpha:0}},{t:this.instance_7,p:{scaleX:0.616,scaleY:1.001,skewX:-30,skewY:-179.6,x:276.3,y:326.5,alpha:0}},{t:this.instance_6,p:{scaleX:0.618,skewX:-30,skewY:-179.4,x:276.9,y:327.4,alpha:0,scaleY:1.002,rotation:0}},{t:this.instance_5,p:{scaleX:0.618,scaleY:1.003,skewX:-30,skewY:-179.4,x:276.9,y:327.1,alpha:0}},{t:this.instance_4,p:{scaleX:0.618,scaleY:1.002,skewX:-30,skewY:-179.3,x:277.1,y:327.9,alpha:0}},{t:this.instance_3,p:{scaleX:0.62,scaleY:1.006,skewX:-30,skewY:-179.3,x:277.8,y:327.6,alpha:0}},{t:this.instance_2,p:{scaleX:0.616,scaleY:1.002,skewX:-30,skewY:-179.6,x:276.4,y:326.7,alpha:0}},{t:this.instance_1,p:{scaleX:0.617,skewX:-30,skewY:-179.5,x:276.5,y:326.8,alpha:0,scaleY:1.002}},{t:this.instance,p:{scaleX:0.618,skewX:-30,skewY:-179.3,x:277.1,y:327.9,alpha:0,scaleY:1.002}}]},1).to({state:[{t:this.instance_12,p:{scaleX:1,skewX:0,skewY:0,x:33.4,y:202.8,alpha:1,scaleY:1}},{t:this.instance_11,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:74.6,y:202.7,alpha:1}},{t:this.instance_10,p:{scaleX:1.081,scaleY:1,skewX:-3.3,skewY:-2.1,x:163,y:183.7,alpha:0.891}},{t:this.instance_9,p:{scaleX:0.05,scaleY:1.003,skewX:-18.9,skewY:-52,x:287.9,y:202.9,alpha:0.371}},{t:this.instance_8,p:{scaleX:0.617,scaleY:1.002,skewX:-30,skewY:-179.5,x:276.5,y:326.8,alpha:0}},{t:this.instance_7,p:{scaleX:0.616,scaleY:1.001,skewX:-30,skewY:-179.6,x:276.3,y:326.5,alpha:0}},{t:this.instance_6,p:{scaleX:0.618,skewX:-30,skewY:-179.4,x:276.9,y:327.4,alpha:0,scaleY:1.002,rotation:0}},{t:this.instance_5,p:{scaleX:0.618,scaleY:1.003,skewX:-30,skewY:-179.4,x:276.9,y:327.1,alpha:0}},{t:this.instance_4,p:{scaleX:0.618,scaleY:1.002,skewX:-30,skewY:-179.3,x:277.1,y:327.9,alpha:0}},{t:this.instance_3,p:{scaleX:0.62,scaleY:1.006,skewX:-30,skewY:-179.3,x:277.8,y:327.6,alpha:0}},{t:this.instance_2,p:{scaleX:0.616,scaleY:1.002,skewX:-30,skewY:-179.6,x:276.4,y:326.7,alpha:0}},{t:this.instance_1,p:{scaleX:0.617,skewX:-30,skewY:-179.5,x:276.5,y:326.8,alpha:0,scaleY:1.002}},{t:this.instance,p:{scaleX:0.618,skewX:-30,skewY:-179.3,x:277.1,y:327.9,alpha:0,scaleY:1.002}}]},1).to({state:[{t:this.instance_12,p:{scaleX:1,skewX:0,skewY:0,x:33.4,y:202.8,alpha:1,scaleY:1}},{t:this.instance_11,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:74.6,y:202.7,alpha:1}},{t:this.instance_10,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:113.2,y:202.7,alpha:1}},{t:this.instance_9,p:{scaleX:0.652,scaleY:1.002,skewX:-11.7,skewY:-2.8,x:257.7,y:171.4,alpha:0.609}},{t:this.instance_8,p:{scaleX:0.508,scaleY:1.003,skewX:-27.2,skewY:-174.5,x:283.4,y:287.3,alpha:0.09}},{t:this.instance_7,p:{scaleX:0.616,scaleY:1.001,skewX:-30,skewY:-179.6,x:276.3,y:326.5,alpha:0}},{t:this.instance_6,p:{scaleX:0.618,skewX:-30,skewY:-179.4,x:276.9,y:327.4,alpha:0,scaleY:1.002,rotation:0}},{t:this.instance_5,p:{scaleX:0.618,scaleY:1.003,skewX:-30,skewY:-179.4,x:276.9,y:327.1,alpha:0}},{t:this.instance_4,p:{scaleX:0.618,scaleY:1.002,skewX:-30,skewY:-179.3,x:277.1,y:327.9,alpha:0}},{t:this.instance_3,p:{scaleX:0.62,scaleY:1.006,skewX:-30,skewY:-179.3,x:277.8,y:327.6,alpha:0}},{t:this.instance_2,p:{scaleX:0.616,scaleY:1.002,skewX:-30,skewY:-179.6,x:276.4,y:326.7,alpha:0}},{t:this.instance_1,p:{scaleX:0.617,skewX:-30,skewY:-179.5,x:276.5,y:326.8,alpha:0,scaleY:1.002}},{t:this.instance,p:{scaleX:0.618,skewX:-30,skewY:-179.3,x:277.1,y:327.9,alpha:0,scaleY:1.002}}]},1).to({state:[{t:this.instance_12,p:{scaleX:1,skewX:0,skewY:0,x:33.4,y:202.8,alpha:1,scaleY:1}},{t:this.instance_11,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:74.6,y:202.7,alpha:1}},{t:this.instance_10,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:113.2,y:202.7,alpha:1}},{t:this.instance_9,p:{scaleX:1.043,scaleY:1,skewX:-4.4,skewY:-2.4,x:198.3,y:178.5,alpha:0.852}},{t:this.instance_8,p:{scaleX:0.063,scaleY:1.004,skewX:-20,skewY:-134.8,x:286.2,y:211.3,alpha:0.328}},{t:this.instance_7,p:{scaleX:0.616,scaleY:1.001,skewX:-30,skewY:-179.6,x:276.3,y:326.5,alpha:0}},{t:this.instance_6,p:{scaleX:0.618,skewX:-30,skewY:-179.4,x:276.9,y:327.4,alpha:0,scaleY:1.002,rotation:0}},{t:this.instance_5,p:{scaleX:0.618,scaleY:1.003,skewX:-30,skewY:-179.4,x:276.9,y:327.1,alpha:0}},{t:this.instance_4,p:{scaleX:0.618,scaleY:1.002,skewX:-30,skewY:-179.3,x:277.1,y:327.9,alpha:0}},{t:this.instance_3,p:{scaleX:0.62,scaleY:1.006,skewX:-30,skewY:-179.3,x:277.8,y:327.6,alpha:0}},{t:this.instance_2,p:{scaleX:0.616,scaleY:1.002,skewX:-30,skewY:-179.6,x:276.4,y:326.7,alpha:0}},{t:this.instance_1,p:{scaleX:0.617,skewX:-30,skewY:-179.5,x:276.5,y:326.8,alpha:0,scaleY:1.002}},{t:this.instance,p:{scaleX:0.618,skewX:-30,skewY:-179.3,x:277.1,y:327.9,alpha:0,scaleY:1.002}}]},1).to({state:[{t:this.instance_12,p:{scaleX:1,skewX:0,skewY:0,x:33.4,y:202.8,alpha:1,scaleY:1}},{t:this.instance_11,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:74.6,y:202.7,alpha:1}},{t:this.instance_10,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:113.2,y:202.7,alpha:1}},{t:this.instance_9,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:147.3,y:202.1,alpha:1}},{t:this.instance_8,p:{scaleX:0.551,scaleY:1.003,skewX:-12.8,skewY:-3.2,x:267.1,y:173.8,alpha:0.57}},{t:this.instance_7,p:{scaleX:0.55,scaleY:1.002,skewX:-28.3,skewY:-176.3,x:279.1,y:302.1,alpha:0.051}},{t:this.instance_6,p:{scaleX:0.618,skewX:-30,skewY:-179.4,x:276.9,y:327.4,alpha:0,scaleY:1.002,rotation:0}},{t:this.instance_5,p:{scaleX:0.618,scaleY:1.003,skewX:-30,skewY:-179.4,x:276.9,y:327.1,alpha:0}},{t:this.instance_4,p:{scaleX:0.618,scaleY:1.002,skewX:-30,skewY:-179.3,x:277.1,y:327.9,alpha:0}},{t:this.instance_3,p:{scaleX:0.62,scaleY:1.006,skewX:-30,skewY:-179.3,x:277.8,y:327.6,alpha:0}},{t:this.instance_2,p:{scaleX:0.616,scaleY:1.002,skewX:-30,skewY:-179.6,x:276.4,y:326.7,alpha:0}},{t:this.instance_1,p:{scaleX:0.617,skewX:-30,skewY:-179.5,x:276.5,y:326.8,alpha:0,scaleY:1.002}},{t:this.instance,p:{scaleX:0.618,skewX:-30,skewY:-179.3,x:277.1,y:327.9,alpha:0,scaleY:1.002}}]},1).to({state:[{t:this.instance_12,p:{scaleX:1,skewX:0,skewY:0,x:33.4,y:202.8,alpha:1,scaleY:1}},{t:this.instance_11,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:74.6,y:202.7,alpha:1}},{t:this.instance_10,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:113.2,y:202.7,alpha:1}},{t:this.instance_9,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:147.3,y:202.1,alpha:1}},{t:this.instance_8,p:{scaleX:0.984,scaleY:1.001,skewX:-5.6,skewY:-2.6,x:226.9,y:175,alpha:0.82}},{t:this.instance_7,p:{scaleX:0.122,scaleY:1.003,skewX:-21.1,skewY:-156.5,x:282.8,y:220.1,alpha:0.301}},{t:this.instance_6,p:{scaleX:0.618,skewX:-30,skewY:-179.4,x:276.9,y:327.4,alpha:0,scaleY:1.002,rotation:0}},{t:this.instance_5,p:{scaleX:0.618,scaleY:1.003,skewX:-30,skewY:-179.4,x:276.9,y:327.1,alpha:0}},{t:this.instance_4,p:{scaleX:0.618,scaleY:1.002,skewX:-30,skewY:-179.3,x:277.1,y:327.9,alpha:0}},{t:this.instance_3,p:{scaleX:0.62,scaleY:1.006,skewX:-30,skewY:-179.3,x:277.8,y:327.6,alpha:0}},{t:this.instance_2,p:{scaleX:0.616,scaleY:1.002,skewX:-30,skewY:-179.6,x:276.4,y:326.7,alpha:0}},{t:this.instance_1,p:{scaleX:0.617,skewX:-30,skewY:-179.5,x:276.5,y:326.8,alpha:0,scaleY:1.002}},{t:this.instance,p:{scaleX:0.618,skewX:-30,skewY:-179.3,x:277.1,y:327.9,alpha:0,scaleY:1.002}}]},1).to({state:[{t:this.instance_12,p:{scaleX:1,skewX:0,skewY:0,x:33.4,y:202.8,alpha:1,scaleY:1}},{t:this.instance_11,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:74.6,y:202.7,alpha:1}},{t:this.instance_10,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:113.2,y:202.7,alpha:1}},{t:this.instance_9,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:147.3,y:202.1,alpha:1}},{t:this.instance_8,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:181.6,y:202.1,alpha:1}},{t:this.instance_7,p:{scaleX:0.457,scaleY:1.002,skewX:-13.9,skewY:-3.5,x:272.8,y:176.7,alpha:0.539}},{t:this.instance_6,p:{scaleX:0.594,skewX:-29.4,skewY:-178.2,x:277,y:319.1,alpha:0.02,scaleY:1.002,rotation:0}},{t:this.instance_5,p:{scaleX:0.618,scaleY:1.003,skewX:-30,skewY:-179.4,x:276.9,y:327.1,alpha:0}},{t:this.instance_4,p:{scaleX:0.618,scaleY:1.002,skewX:-30,skewY:-179.3,x:277.1,y:327.9,alpha:0}},{t:this.instance_3,p:{scaleX:0.62,scaleY:1.006,skewX:-30,skewY:-179.3,x:277.8,y:327.6,alpha:0}},{t:this.instance_2,p:{scaleX:0.616,scaleY:1.002,skewX:-30,skewY:-179.6,x:276.4,y:326.7,alpha:0}},{t:this.instance_1,p:{scaleX:0.617,skewX:-30,skewY:-179.5,x:276.5,y:326.8,alpha:0,scaleY:1.002}},{t:this.instance,p:{scaleX:0.618,skewX:-30,skewY:-179.3,x:277.1,y:327.9,alpha:0,scaleY:1.002}}]},1).to({state:[{t:this.instance_12,p:{scaleX:1,skewX:0,skewY:0,x:33.4,y:202.8,alpha:1,scaleY:1}},{t:this.instance_11,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:74.6,y:202.7,alpha:1}},{t:this.instance_10,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:113.2,y:202.7,alpha:1}},{t:this.instance_9,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:147.3,y:202.1,alpha:1}},{t:this.instance_8,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:181.6,y:202.1,alpha:1}},{t:this.instance_7,p:{scaleX:0.912,scaleY:1.001,skewX:-6.7,skewY:-2.8,x:249.8,y:172,alpha:0.781}},{t:this.instance_6,p:{scaleX:0.178,skewX:-22.2,skewY:-161.3,x:277,y:231.2,alpha:0.262,scaleY:1.004,rotation:0}},{t:this.instance_5,p:{scaleX:0.618,scaleY:1.003,skewX:-30,skewY:-179.4,x:276.9,y:327.1,alpha:0}},{t:this.instance_4,p:{scaleX:0.618,scaleY:1.002,skewX:-30,skewY:-179.3,x:277.1,y:327.9,alpha:0}},{t:this.instance_3,p:{scaleX:0.62,scaleY:1.006,skewX:-30,skewY:-179.3,x:277.8,y:327.6,alpha:0}},{t:this.instance_2,p:{scaleX:0.616,scaleY:1.002,skewX:-30,skewY:-179.6,x:276.4,y:326.7,alpha:0}},{t:this.instance_1,p:{scaleX:0.617,skewX:-30,skewY:-179.5,x:276.5,y:326.8,alpha:0,scaleY:1.002}},{t:this.instance,p:{scaleX:0.618,skewX:-30,skewY:-179.3,x:277.1,y:327.9,alpha:0,scaleY:1.002}}]},1).to({state:[{t:this.instance_12,p:{scaleX:1,skewX:0,skewY:0,x:33.4,y:202.8,alpha:1,scaleY:1}},{t:this.instance_11,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:74.6,y:202.7,alpha:1}},{t:this.instance_10,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:113.2,y:202.7,alpha:1}},{t:this.instance_9,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:147.3,y:202.1,alpha:1}},{t:this.instance_8,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:181.6,y:202.1,alpha:1}},{t:this.instance_7,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:216.9,y:201.8,alpha:1}},{t:this.instance_6,p:{scaleX:0.37,skewX:-15,skewY:-5,x:275.4,y:181.9,alpha:0.5,scaleY:1.004,rotation:0}},{t:this.instance_5,p:{scaleX:0.618,scaleY:1.003,skewX:-30,skewY:-179.4,x:276.9,y:327.1,alpha:0}},{t:this.instance_4,p:{scaleX:0.618,scaleY:1.002,skewX:-30,skewY:-179.3,x:277.1,y:327.9,alpha:0}},{t:this.instance_3,p:{scaleX:0.62,scaleY:1.006,skewX:-30,skewY:-179.3,x:277.8,y:327.6,alpha:0}},{t:this.instance_2,p:{scaleX:0.616,scaleY:1.002,skewX:-30,skewY:-179.6,x:276.4,y:326.7,alpha:0}},{t:this.instance_1,p:{scaleX:0.617,skewX:-30,skewY:-179.5,x:276.5,y:326.8,alpha:0,scaleY:1.002}},{t:this.instance,p:{scaleX:0.618,skewX:-30,skewY:-179.3,x:277.1,y:327.9,alpha:0,scaleY:1.002}}]},1).to({state:[{t:this.instance_12,p:{scaleX:1,skewX:0,skewY:0,x:33.4,y:202.8,alpha:1,scaleY:1}},{t:this.instance_11,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:74.6,y:202.7,alpha:1}},{t:this.instance_10,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:113.2,y:202.7,alpha:1}},{t:this.instance_9,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:147.3,y:202.1,alpha:1}},{t:this.instance_8,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:181.6,y:202.1,alpha:1}},{t:this.instance_7,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:216.9,y:201.8,alpha:1}},{t:this.instance_6,p:{scaleX:0.818,skewX:-7.8,skewY:-3.1,x:272.8,y:171.2,alpha:0.738,scaleY:1.001,rotation:0}},{t:this.instance_5,p:{scaleX:0.233,scaleY:1.005,skewX:-23.3,skewY:-165.2,x:271.8,y:242,alpha:0.219}},{t:this.instance_4,p:{scaleX:0.618,scaleY:1.002,skewX:-30,skewY:-179.3,x:277.1,y:327.9,alpha:0}},{t:this.instance_3,p:{scaleX:0.62,scaleY:1.006,skewX:-30,skewY:-179.3,x:277.8,y:327.6,alpha:0}},{t:this.instance_2,p:{scaleX:0.616,scaleY:1.002,skewX:-30,skewY:-179.6,x:276.4,y:326.7,alpha:0}},{t:this.instance_1,p:{scaleX:0.617,skewX:-30,skewY:-179.5,x:276.5,y:326.8,alpha:0,scaleY:1.002}},{t:this.instance,p:{scaleX:0.618,skewX:-30,skewY:-179.3,x:277.1,y:327.9,alpha:0,scaleY:1.002}}]},1).to({state:[{t:this.instance_12,p:{scaleX:1,skewX:0,skewY:0,x:33.4,y:202.8,alpha:1,scaleY:1}},{t:this.instance_11,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:74.6,y:202.7,alpha:1}},{t:this.instance_10,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:113.2,y:202.7,alpha:1}},{t:this.instance_9,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:147.3,y:202.1,alpha:1}},{t:this.instance_8,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:181.6,y:202.1,alpha:1}},{t:this.instance_7,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:216.9,y:201.8,alpha:1}},{t:this.instance_6,p:{scaleX:1,skewX:0,skewY:0,x:269.5,y:199.1,alpha:0.98,scaleY:1,rotation:-0.6}},{t:this.instance_5,p:{scaleX:0.294,scaleY:1.005,skewX:-16.1,skewY:-6.3,x:274,y:186.7,alpha:0.461}},{t:this.instance_4,p:{scaleX:0.618,scaleY:1.002,skewX:-30,skewY:-179.3,x:277.1,y:327.9,alpha:0}},{t:this.instance_3,p:{scaleX:0.62,scaleY:1.006,skewX:-30,skewY:-179.3,x:277.8,y:327.6,alpha:0}},{t:this.instance_2,p:{scaleX:0.616,scaleY:1.002,skewX:-30,skewY:-179.6,x:276.4,y:326.7,alpha:0}},{t:this.instance_1,p:{scaleX:0.617,skewX:-30,skewY:-179.5,x:276.5,y:326.8,alpha:0,scaleY:1.002}},{t:this.instance,p:{scaleX:0.618,skewX:-30,skewY:-179.3,x:277.1,y:327.9,alpha:0,scaleY:1.002}}]},1).to({state:[{t:this.instance_12,p:{scaleX:1,skewX:0,skewY:0,x:33.4,y:202.8,alpha:1,scaleY:1}},{t:this.instance_11,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:74.6,y:202.7,alpha:1}},{t:this.instance_10,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:113.2,y:202.7,alpha:1}},{t:this.instance_9,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:147.3,y:202.1,alpha:1}},{t:this.instance_8,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:181.6,y:202.1,alpha:1}},{t:this.instance_7,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:216.9,y:201.8,alpha:1}},{t:this.instance_6,p:{scaleX:1,skewX:0,skewY:0,x:269.2,y:202.8,alpha:1,scaleY:1,rotation:0}},{t:this.instance_5,p:{scaleX:0.732,scaleY:1.002,skewX:-8.9,skewY:-3.2,x:285.3,y:170,alpha:0.699}},{t:this.instance_4,p:{scaleX:0.291,scaleY:1.004,skewX:-24.4,skewY:-167.3,x:267.6,y:254.6,alpha:0.18}},{t:this.instance_3,p:{scaleX:0.62,scaleY:1.006,skewX:-30,skewY:-179.3,x:277.8,y:327.6,alpha:0}},{t:this.instance_2,p:{scaleX:0.616,scaleY:1.002,skewX:-30,skewY:-179.6,x:276.4,y:326.7,alpha:0}},{t:this.instance_1,p:{scaleX:0.617,skewX:-30,skewY:-179.5,x:276.5,y:326.8,alpha:0,scaleY:1.002}},{t:this.instance,p:{scaleX:0.618,skewX:-30,skewY:-179.3,x:277.1,y:327.9,alpha:0,scaleY:1.002}}]},1).to({state:[{t:this.instance_12,p:{scaleX:1,skewX:0,skewY:0,x:33.4,y:202.8,alpha:1,scaleY:1}},{t:this.instance_11,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:74.6,y:202.7,alpha:1}},{t:this.instance_10,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:113.2,y:202.7,alpha:1}},{t:this.instance_9,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:147.3,y:202.1,alpha:1}},{t:this.instance_8,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:181.6,y:202.1,alpha:1}},{t:this.instance_7,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:216.9,y:201.8,alpha:1}},{t:this.instance_6,p:{scaleX:1,skewX:0,skewY:0,x:269.2,y:202.8,alpha:1,scaleY:1,rotation:0}},{t:this.instance_5,p:{scaleX:0.975,scaleY:1,skewX:-1.7,skewY:-1.4,x:305.9,y:192,alpha:0.949}},{t:this.instance_4,p:{scaleX:0.226,scaleY:1.004,skewX:-17.2,skewY:-9.8,x:270.9,y:193.4,alpha:0.43}},{t:this.instance_3,p:{scaleX:0.62,scaleY:1.006,skewX:-30,skewY:-179.3,x:277.8,y:327.6,alpha:0}},{t:this.instance_2,p:{scaleX:0.616,scaleY:1.002,skewX:-30,skewY:-179.6,x:276.4,y:326.7,alpha:0}},{t:this.instance_1,p:{scaleX:0.617,skewX:-30,skewY:-179.5,x:276.5,y:326.8,alpha:0,scaleY:1.002}},{t:this.instance,p:{scaleX:0.618,skewX:-30,skewY:-179.3,x:277.1,y:327.9,alpha:0,scaleY:1.002}}]},1).to({state:[{t:this.instance_12,p:{scaleX:1,skewX:0,skewY:0,x:33.4,y:202.8,alpha:1,scaleY:1}},{t:this.instance_11,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:74.6,y:202.7,alpha:1}},{t:this.instance_10,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:113.2,y:202.7,alpha:1}},{t:this.instance_9,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:147.3,y:202.1,alpha:1}},{t:this.instance_8,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:181.6,y:202.1,alpha:1}},{t:this.instance_7,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:216.9,y:201.8,alpha:1}},{t:this.instance_6,p:{scaleX:1,skewX:0,skewY:0,x:269.2,y:202.8,alpha:1,scaleY:1,rotation:0}},{t:this.instance_5,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:311.9,y:202.5,alpha:1}},{t:this.instance_4,p:{scaleX:0.648,scaleY:1.002,skewX:-10,skewY:-3.6,x:292.4,y:170.9,alpha:0.672}},{t:this.instance_3,p:{scaleX:0.347,scaleY:1.009,skewX:-25.6,skewY:-169.8,x:264,y:267.3,alpha:0.148}},{t:this.instance_2,p:{scaleX:0.616,scaleY:1.002,skewX:-30,skewY:-179.6,x:276.4,y:326.7,alpha:0}},{t:this.instance_1,p:{scaleX:0.617,skewX:-30,skewY:-179.5,x:276.5,y:326.8,alpha:0,scaleY:1.002}},{t:this.instance,p:{scaleX:0.618,skewX:-30,skewY:-179.3,x:277.1,y:327.9,alpha:0,scaleY:1.002}}]},1).to({state:[{t:this.instance_12,p:{scaleX:1,skewX:0,skewY:0,x:33.4,y:202.8,alpha:1,scaleY:1}},{t:this.instance_11,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:74.6,y:202.7,alpha:1}},{t:this.instance_10,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:113.2,y:202.7,alpha:1}},{t:this.instance_9,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:147.3,y:202.1,alpha:1}},{t:this.instance_8,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:181.6,y:202.1,alpha:1}},{t:this.instance_7,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:216.9,y:201.8,alpha:1}},{t:this.instance_6,p:{scaleX:1,skewX:0,skewY:0,x:269.2,y:202.8,alpha:1,scaleY:1,rotation:0}},{t:this.instance_5,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:311.9,y:202.5,alpha:1}},{t:this.instance_4,p:{scaleX:0.926,scaleY:1,skewX:-2.8,skewY:-2.2,x:332.5,y:186.9,alpha:0.91}},{t:this.instance_3,p:{scaleX:0.17,scaleY:1.011,skewX:-18.3,skewY:-14.2,x:264.6,y:200.2,alpha:0.391}},{t:this.instance_2,p:{scaleX:0.616,scaleY:1.002,skewX:-30,skewY:-179.6,x:276.4,y:326.7,alpha:0}},{t:this.instance_1,p:{scaleX:0.617,skewX:-30,skewY:-179.5,x:276.5,y:326.8,alpha:0,scaleY:1.002}},{t:this.instance,p:{scaleX:0.618,skewX:-30,skewY:-179.3,x:277.1,y:327.9,alpha:0,scaleY:1.002}}]},1).to({state:[{t:this.instance_12,p:{scaleX:1,skewX:0,skewY:0,x:33.4,y:202.8,alpha:1,scaleY:1}},{t:this.instance_11,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:74.6,y:202.7,alpha:1}},{t:this.instance_10,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:113.2,y:202.7,alpha:1}},{t:this.instance_9,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:147.3,y:202.1,alpha:1}},{t:this.instance_8,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:181.6,y:202.1,alpha:1}},{t:this.instance_7,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:216.9,y:201.8,alpha:1}},{t:this.instance_6,p:{scaleX:1,skewX:0,skewY:0,x:269.2,y:202.8,alpha:1,scaleY:1,rotation:0}},{t:this.instance_5,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:311.9,y:202.5,alpha:1}},{t:this.instance_4,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:352.8,y:203.3,alpha:1}},{t:this.instance_3,p:{scaleX:0.571,scaleY:1.007,skewX:-11.1,skewY:-3.7,x:295.1,y:171.7,alpha:0.629}},{t:this.instance_2,p:{scaleX:0.403,scaleY:1.003,skewX:-26.7,skewY:-172.5,x:261.4,y:280,alpha:0.109}},{t:this.instance_1,p:{scaleX:0.617,skewX:-30,skewY:-179.5,x:276.5,y:326.8,alpha:0,scaleY:1.002}},{t:this.instance,p:{scaleX:0.618,skewX:-30,skewY:-179.3,x:277.1,y:327.9,alpha:0,scaleY:1.002}}]},1).to({state:[{t:this.instance_12,p:{scaleX:1,skewX:0,skewY:0,x:33.4,y:202.8,alpha:1,scaleY:1}},{t:this.instance_11,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:74.6,y:202.7,alpha:1}},{t:this.instance_10,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:113.2,y:202.7,alpha:1}},{t:this.instance_9,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:147.3,y:202.1,alpha:1}},{t:this.instance_8,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:181.6,y:202.1,alpha:1}},{t:this.instance_7,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:216.9,y:201.8,alpha:1}},{t:this.instance_6,p:{scaleX:1,skewX:0,skewY:0,x:269.2,y:202.8,alpha:1,scaleY:1,rotation:0}},{t:this.instance_5,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:311.9,y:202.5,alpha:1}},{t:this.instance_4,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:352.8,y:203.3,alpha:1}},{t:this.instance_3,p:{scaleX:0.855,scaleY:1.001,skewX:-3.9,skewY:-2.9,x:356,y:181.7,alpha:0.871}},{t:this.instance_2,p:{scaleX:0.118,scaleY:1.003,skewX:-19.4,skewY:-20.9,x:257.7,y:206.9,alpha:0.352}},{t:this.instance_1,p:{scaleX:0.617,skewX:-30,skewY:-179.5,x:276.5,y:326.8,alpha:0,scaleY:1.002}},{t:this.instance,p:{scaleX:0.618,skewX:-30,skewY:-179.3,x:277.1,y:327.9,alpha:0,scaleY:1.002}}]},1).to({state:[{t:this.instance_12,p:{scaleX:1,skewX:0,skewY:0,x:33.4,y:202.8,alpha:1,scaleY:1}},{t:this.instance_11,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:74.6,y:202.7,alpha:1}},{t:this.instance_10,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:113.2,y:202.7,alpha:1}},{t:this.instance_9,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:147.3,y:202.1,alpha:1}},{t:this.instance_8,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:181.6,y:202.1,alpha:1}},{t:this.instance_7,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:216.9,y:201.8,alpha:1}},{t:this.instance_6,p:{scaleX:1,skewX:0,skewY:0,x:269.2,y:202.8,alpha:1,scaleY:1,rotation:0}},{t:this.instance_5,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:311.9,y:202.5,alpha:1}},{t:this.instance_4,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:352.8,y:203.3,alpha:1}},{t:this.instance_3,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:401.5,y:203.1,alpha:1}},{t:this.instance_2,p:{scaleX:0.499,scaleY:1.002,skewX:-12.2,skewY:-3.6,x:294,y:172.4,alpha:0.59}},{t:this.instance_1,p:{scaleX:0.471,skewX:-27.8,skewY:-174.8,x:263.4,y:294.7,alpha:0.07,scaleY:1.002}},{t:this.instance,p:{scaleX:0.618,skewX:-30,skewY:-179.3,x:277.1,y:327.9,alpha:0,scaleY:1.002}}]},1).to({state:[{t:this.instance_12,p:{scaleX:1,skewX:0,skewY:0,x:33.4,y:202.8,alpha:1,scaleY:1}},{t:this.instance_11,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:74.6,y:202.7,alpha:1}},{t:this.instance_10,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:113.2,y:202.7,alpha:1}},{t:this.instance_9,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:147.3,y:202.1,alpha:1}},{t:this.instance_8,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:181.6,y:202.1,alpha:1}},{t:this.instance_7,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:216.9,y:201.8,alpha:1}},{t:this.instance_6,p:{scaleX:1,skewX:0,skewY:0,x:269.2,y:202.8,alpha:1,scaleY:1,rotation:0}},{t:this.instance_5,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:311.9,y:202.5,alpha:1}},{t:this.instance_4,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:352.8,y:203.3,alpha:1}},{t:this.instance_3,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:401.5,y:203.1,alpha:1}},{t:this.instance_2,p:{scaleX:0.776,scaleY:1.001,skewX:-5,skewY:-3.3,x:370.4,y:176.6,alpha:0.828}},{t:this.instance_1,p:{scaleX:0.071,skewX:-20.6,skewY:-42.2,x:251.7,y:215.7,alpha:0.32,scaleY:1.004}},{t:this.instance,p:{scaleX:0.618,skewX:-30,skewY:-179.3,x:277.1,y:327.9,alpha:0,scaleY:1.002}}]},1).to({state:[{t:this.instance_12,p:{scaleX:1,skewX:0,skewY:0,x:33.4,y:202.8,alpha:1,scaleY:1}},{t:this.instance_11,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:74.6,y:202.7,alpha:1}},{t:this.instance_10,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:113.2,y:202.7,alpha:1}},{t:this.instance_9,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:147.3,y:202.1,alpha:1}},{t:this.instance_8,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:181.6,y:202.1,alpha:1}},{t:this.instance_7,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:216.9,y:201.8,alpha:1}},{t:this.instance_6,p:{scaleX:1,skewX:0,skewY:0,x:269.2,y:202.8,alpha:1,scaleY:1,rotation:0}},{t:this.instance_5,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:311.9,y:202.5,alpha:1}},{t:this.instance_4,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:352.8,y:203.3,alpha:1}},{t:this.instance_3,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:401.5,y:203.1,alpha:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:446.8,y:202.1,alpha:1}},{t:this.instance_1,p:{scaleX:0.443,skewX:-13.3,skewY:-3.8,x:287.9,y:175.3,alpha:0.551,scaleY:1.003}},{t:this.instance,p:{scaleX:0.544,skewX:-28.9,skewY:-176.8,x:268.8,y:311.4,alpha:0.039,scaleY:1.002}}]},1).to({state:[{t:this.instance_12,p:{scaleX:1,skewX:0,skewY:0,x:33.4,y:202.8,alpha:1,scaleY:1}},{t:this.instance_11,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:74.6,y:202.7,alpha:1}},{t:this.instance_10,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:113.2,y:202.7,alpha:1}},{t:this.instance_9,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:147.3,y:202.1,alpha:1}},{t:this.instance_8,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:181.6,y:202.1,alpha:1}},{t:this.instance_7,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:216.9,y:201.8,alpha:1}},{t:this.instance_6,p:{scaleX:1,skewX:0,skewY:0,x:269.2,y:202.8,alpha:1,scaleY:1,rotation:0}},{t:this.instance_5,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:311.9,y:202.5,alpha:1}},{t:this.instance_4,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:352.8,y:203.3,alpha:1}},{t:this.instance_3,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:401.5,y:203.1,alpha:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:446.8,y:202.1,alpha:1}},{t:this.instance_1,p:{scaleX:0.704,skewX:-6.1,skewY:-3.7,x:372.2,y:173.5,alpha:0.801,scaleY:1.001}},{t:this.instance,p:{scaleX:0.057,skewX:-21.7,skewY:-97.7,x:246.4,y:226.5,alpha:0.281,scaleY:1.004}}]},1).to({state:[{t:this.instance_12,p:{scaleX:1,skewX:0,skewY:0,x:33.4,y:202.8,alpha:1,scaleY:1}},{t:this.instance_11,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:74.6,y:202.7,alpha:1}},{t:this.instance_10,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:113.2,y:202.7,alpha:1}},{t:this.instance_9,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:147.3,y:202.1,alpha:1}},{t:this.instance_8,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:181.6,y:202.1,alpha:1}},{t:this.instance_7,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:216.9,y:201.8,alpha:1}},{t:this.instance_6,p:{scaleX:1,skewX:0,skewY:0,x:269.2,y:202.8,alpha:1,scaleY:1,rotation:0}},{t:this.instance_5,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:311.9,y:202.5,alpha:1}},{t:this.instance_4,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:352.8,y:203.3,alpha:1}},{t:this.instance_3,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:401.5,y:203.1,alpha:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:446.8,y:202.1,alpha:1}},{t:this.instance_1,p:{scaleX:1,skewX:0,skewY:0,x:481.1,y:202.1,alpha:1,scaleY:1}},{t:this.instance,p:{scaleX:0.392,skewX:-14.4,skewY:-4.9,x:280.1,y:180.2,alpha:0.52,scaleY:1.003}}]},1).to({state:[{t:this.instance_12,p:{scaleX:1,skewX:0,skewY:0,x:33.4,y:202.8,alpha:1,scaleY:1}},{t:this.instance_11,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:74.6,y:202.7,alpha:1}},{t:this.instance_10,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:113.2,y:202.7,alpha:1}},{t:this.instance_9,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:147.3,y:202.1,alpha:1}},{t:this.instance_8,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:181.6,y:202.1,alpha:1}},{t:this.instance_7,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:216.9,y:201.8,alpha:1}},{t:this.instance_6,p:{scaleX:1,skewX:0,skewY:0,x:269.2,y:202.8,alpha:1,scaleY:1,rotation:0}},{t:this.instance_5,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:311.9,y:202.5,alpha:1}},{t:this.instance_4,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:352.8,y:203.3,alpha:1}},{t:this.instance_3,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:401.5,y:203.1,alpha:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:446.8,y:202.1,alpha:1}},{t:this.instance_1,p:{scaleX:1,skewX:0,skewY:0,x:481.1,y:202.1,alpha:1,scaleY:1}},{t:this.instance,p:{scaleX:0.633,skewX:-7.2,skewY:-4.2,x:370.4,y:172.5,alpha:0.762,scaleY:1.001}}]},1).to({state:[{t:this.instance_12,p:{scaleX:1,skewX:0,skewY:0,x:33.4,y:202.8,alpha:1,scaleY:1}},{t:this.instance_11,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:74.6,y:202.7,alpha:1}},{t:this.instance_10,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:113.2,y:202.7,alpha:1}},{t:this.instance_9,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:147.3,y:202.1,alpha:1}},{t:this.instance_8,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:181.6,y:202.1,alpha:1}},{t:this.instance_7,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:216.9,y:201.8,alpha:1}},{t:this.instance_6,p:{scaleX:1,skewX:0,skewY:0,x:269.2,y:202.8,alpha:1,scaleY:1,rotation:0}},{t:this.instance_5,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:311.9,y:202.5,alpha:1}},{t:this.instance_4,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:352.8,y:203.3,alpha:1}},{t:this.instance_3,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:401.5,y:203.1,alpha:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:446.8,y:202.1,alpha:1}},{t:this.instance_1,p:{scaleX:1,skewX:0,skewY:0,x:481.1,y:202.1,alpha:1,scaleY:1}},{t:this.instance,p:{scaleX:1,skewX:0,skewY:0,x:517.1,y:203.3,alpha:1,scaleY:1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(251.2,217.6,67.9,129.1);


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
		var bgm = createjs.Sound.play('bgmAdv',{loop:-1});
		//var vo = createjs.Sound.play('VO');
		
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
		
		 window.open ("adverb_Scene5.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("adverb_Scene3.html","_self");
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


(lib.mainexp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLALQgEgEAAgHQAAgGAEgEQAFgGAGAAQAHAAAFAGQAEAEAAAGQAAAHgEAEQgFAGgHAAQgGAAgFgGg");
	this.shape.setTransform(-6.5,147.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhABOQgDgEAAgDQAAgFAEgEQAFgEAFAAQAFAAAFAGQAHAIAEACQAIAHAPAAQAWgBAPgRQAOgRAAgXQAAgTgGgLQgIgPgRgBQgOABgJAEQgHACgHAIIgOAPQgGAFgGAAQgFAAgEgDQgEgEAAgFIACgXQAFgpAAgNQAAgFgCgGIgDgIQAAgHAOgBIAIABIAIABIAXgBIAWgBIALAAIAKABIAIgBIAHgBQAFAAAEAEQAEADAAAGQAAAOgfAAIgLAAIgHAAIgVAAIgXABIgFAsQASgOAeAAQAdAAAPAWQANATAAAdQAAAkgVAXQgWAYgiAAQgmAAgRgcg");
	this.shape_1.setTransform(-18.1,138.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgLALQgEgEAAgHQAAgGAEgEQAFgGAGAAQAHAAAFAGQAEAEAAAGQAAAHgEAEQgFAGgHAAQgGAAgFgGg");
	this.shape_2.setTransform(-47.2,100.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AATBWIABgHIAAgHIAAgdIg5gBQgSgBgHgBQgMgCAAgHQAAgGAHgJIALgOIBAhdQAJgMANAAQAPAAAAAMIAABtIAGgBQAYABAAANQAAAJgKADQgEABgQgBIAAAxQAAANgMAAQgOgBAAgSgAgiAQIA2ABIAAhUQgiA4gUAbg");
	this.shape_3.setTransform(-59,90.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgLALQgEgEAAgHQAAgGAEgEQAFgFAGgBQAHABAFAFQAEAEAAAGQAAAHgEAEQgFAGgHgBQgGABgFgGg");
	this.shape_4.setTransform(-106.4,54.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgkBgQgSgKgGgSIgBgFQAAgFAFgDQADgDAGAAQAFAAAEAEIAFAKQAGAGAIADQAIADALAAQANABALgJQALgKAAgOQAAgUgOgLQgNgLgUgCQgPgCAAgJQAAgIALgEIAfgIQAJgDAEgFQAFgGABgJQgBgLgIgHQgLgIgPABQgKgBgIAFIgPAJQgFADgCAAQgFAAgEgEQgEgEAAgFQAAgKAUgKQASgIALAAQAcAAAQAMQASAOAAAYQAAAfgZAKIgFACQASAGAIAMQAJANAAAUQAAAZgSATQgTARgZABQgUgBgQgHg");
	this.shape_5.setTransform(-118.3,44.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgLAMQgEgFAAgHQAAgGAEgFQAFgEAGAAQAHAAAFAEQAEAFAAAGQAAAHgEAFQgFAEgHAAQgGAAgFgEg");
	this.shape_6.setTransform(-153.5,12.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAoBkQgGgDgDAAIgUABIgUABIgOABIgQACIgEgBIgFAAQgJAAgCgJQgCgFAAgMQAAgeARgTQAIgJAhgWQASgNAHgGQALgNgBgRQABgJgLgGQgKgGgJAAQgLAAgLAHIgTAPQgGAEgDAAQgNAAAAgLQAAgGAEgEQAPgPAMgHQAQgIAQgBQAVAAARAMQASANAAAUQAAAOgDALQgEALgIAKQgKALgXAOQgYAQgIAIQgPAPABAWIAbgCIAngCQAKAAAJADQAMAFAAAIQAAAFgEAFQgEADgFABIgJgCg");
	this.shape_7.setTransform(-165.1,2.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgLALQgEgEAAgHQAAgGAEgEQAFgGAGAAQAHAAAFAGQAEAEAAAGQAAAHgEAEQgFAGgHAAQgGAAgFgGg");
	this.shape_8.setTransform(-194.7,-34.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AADBnIgZAAIgNgBQgGgDAAgHQAAgOAUAAIAHAAIAFABIgBgTIgBgTQAAgQADgiQADghAAgSQgSAOgFAAQgFAAgEgEQgEgEAAgFQAAgGALgJIAUgQQALgMALAAQAIAAAAAKIAAAJIgBAJIAAAOIABANQAAAPgDAeQgEAcAAAPIACATIABASIAOAAQAFAAAEADQADAEAAAFQAAAGgDADQgEAEgFAAg");
	this.shape_9.setTransform(-204,-44.6);

	this.instance = new lib.proexp();
	this.instance.parent = this;
	this.instance.setTransform(216.8,98.2,0.833,0.833,0,0,180);

	this.instance_1 = new lib.bubexp();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-75.5,75.8,0.414,0.414);

	this.instance_2 = new lib.buffyexp();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-583.9,102.8);

	this.instance_3 = new lib.samexp();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-210.9,-7.7,0.508,0.508);

	this.instance_4 = new lib.staceexp();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-232.8,-45.6,0.713,0.713);

	this.instance_5 = new lib.Towhatextexp();
	this.instance_5.parent = this;
	this.instance_5.setTransform(106.3,133.4);

	this.instance_6 = new lib.howexp();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-6.4,87);

	this.instance_7 = new lib.whereexp();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-50.7,39.9);

	this.instance_8 = new lib.whenexp();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-105.9,-1.4);

	this.instance_9 = new lib.whyexp();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-153.8,-49,1,1,0,0,0,38.1,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(3,1,1).p("EgnNgXOMBObAAAMAAAAudMhObAAAg");
	this.shape_10.setTransform(0,13.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFF9C").s().p("EgnNAXPMAAAgudMBObAAAMAAAAudg");
	this.shape_11.setTransform(0,13.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#669900").s().p("AgJAAIATAAIgKAAIgJAAg");
	this.shape_12.setTransform(324.4,120.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mainexp, new cjs.Rectangle(-252.5,-137,577.9,300.4), null);


(lib.fpb_states = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{up:0,over:1,down:2,"disabled":3});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_1 = function() {
		/* stop();
		*/
	}
	this.frame_2 = function() {
		/* stop();*/
	}
	this.frame_3 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer 6
	this.over_mc = new lib.fpb_over();
	this.over_mc.parent = this;

	this.disabled_mc = new lib.fpb_disabled();
	this.disabled_mc.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.over_mc}]},1).to({state:[]},1).to({state:[{t:this.disabled_mc}]},1).wait(1));

	// states
	this.up_mc = new lib.fpb_up();
	this.up_mc.parent = this;

	this.down_mc = new lib.fpb_down();
	this.down_mc.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.up_mc}]}).to({state:[]},1).to({state:[{t:this.down_mc}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100.1,100);


// stage content:
(lib.adverb_Scene4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.instance = new lib.ADVERBEXP();
	this.instance.parent = this;
	this.instance.setTransform(11.6,-125.5,0.96,0.96);

	this.instance_1 = new lib.mainexp();
	this.instance_1.parent = this;
	this.instance_1.setTransform(275.2,174.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.UI}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,201.6,593.1,398.7);
// library properties:
lib.properties = {
	id: 'C76C70E0F1374944A05DF8452A81463F',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/_10a.mp3", id:"_10a"},
		{src:"sounds/_10b.mp3", id:"_10b"},
		{src:"sounds/_10c.mp3", id:"_10c"},
		{src:"sounds/_11a.mp3", id:"_11a"},
		{src:"sounds/_12a.mp3", id:"_12a"},
		{src:"sounds/_13a.mp3", id:"_13a"},
		{src:"sounds/_13b.mp3", id:"_13b"},
		{src:"sounds/_2a.mp3", id:"_2a"},
		{src:"sounds/_3a.mp3", id:"_3a"},
		{src:"sounds/_4a.mp3", id:"_4a"},
		{src:"sounds/_4b.mp3", id:"_4b"},
		{src:"sounds/_5a.mp3", id:"_5a"},
		{src:"sounds/_5c.mp3", id:"_5c"},
		{src:"sounds/_6a.mp3", id:"_6a"},
		{src:"sounds/_6b.mp3", id:"_6b"},
		{src:"sounds/_7a.mp3", id:"_7a"},
		{src:"sounds/anadverbanswers.mp3", id:"anadverbanswers"},
		{src:"sounds/anadverbmodifies.mp3", id:"anadverbmodifies"},
		{src:"sounds/carefully.mp3", id:"carefully"},
		{src:"sounds/easily.mp3", id:"easily"},
		{src:"sounds/happily.mp3", id:"happily"},
		{src:"sounds/how.mp3", id:"how"},
		{src:"sounds/bgmAdv.mp3", id:"bgmAdv"},
		{src:"sounds/endinly.mp3", id:"endinly"},
		{src:"sounds/quickly.mp3", id:"quickly"},
		{src:"sounds/rapidly.mp3", id:"rapidly"},
		{src:"sounds/s_coolcheer.mp3", id:"s_coolcheer"},
		{src:"sounds/towhatextent.mp3", id:"towhatextent"},
		{src:"sounds/when.mp3", id:"when"},
		{src:"sounds/where.mp3", id:"where"},
		{src:"sounds/why.mp3", id:"why"}
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
an.compositions['C76C70E0F1374944A05DF8452A81463F'] = {
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