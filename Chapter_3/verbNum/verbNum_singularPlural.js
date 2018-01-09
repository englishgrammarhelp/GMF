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


(lib.static_rule2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNAMQgHgFAAgHQAAgFAHgGQAGgFAHAAQAJAAAGAFQAGAFAAAGQAAAHgGAFQgGAFgJAAQgHAAgGgFg");
	this.shape.setTransform(96.2,86.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAjBgQgIAFgKACQgJABgJAAQgdAAgSgSQgTgTgBgcQABgiATgUQAUgVAdAAQAKAAAHACQAIACAGAEQABgsADgQQABgPAPAAQAHAAAFAFQAFAFAAAHQAAASgEAlQgDAkAAASQAAAuADAPIABAEQAAAHgFAFQgFAEgHAAQgJAAgFgIgAgaAGQgJAKAAAWQAAAOAKAKQAKAJAOAAQAJAAAFgCQADgBAJgHIAEgEIAAguQgFgIgGgDQgHgEgJAAQgSAAgKAKg");
	this.shape_1.setTransform(82.9,77.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgqA3QgWgQAAgdQAAggARgWQASgYAgAAQAVAAAPAHQAUAJgBAUQAAAOgPALQgIAFgVAIIgqATQAHAHAIADQAJADAKAAQARAAAMgHQALgGAFAAQAOAAAAANQAAAOgWAJQgRAIgUAAQgeAAgSgOgAgQgeQgJAIgFAQIAcgNQAQgHAKgHQgIgFgNAAQgMAAgHAIg");
	this.shape_2.setTransform(68,80.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAaA6IgEgaQgBgOgBgMIABgKIAAgMIABgEIAAgGQAAgLgFAAQgLAAgKAOQgKAOgGAVIgBALIgBAMIgBALIAAALQAAAHgFAFQgFAFgIAAQgIAAgEgFQgGgFAAgHIAAgLIgBgLIACgjIABghIAAgMIAAgLQAAgHAFgFQAFgFAHAAQARAAABAUIAAABQATgSAUAAQAYAAAIAUQAHANAAAbIAAAJIAAAHQAAAKACAQQADAPAAAKQAAAHgFAFQgFAFgHAAQgQAAgCgQg");
	this.shape_3.setTransform(54.2,80.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgpA2QgSgTgBgcQgBgcAQgWQATgZAigBQAZABAPATQAOATAAAbQAAAcgQAWQgSAXgcAAQgYAAgRgQgAgSgVQgHAMAAAQQAAAPAJAHQAGAHAKAAQAKAAAIgIQAJgIABgPQABgogXAAIgBAAQgOAAgJAOg");
	this.shape_4.setTransform(40.3,80.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgPBcQgFgFAAgHIgBgXIAAgYIABgcIABgbQAAgIAFgEQAFgFAIAAQAHAAAFAFQAEAEAAAIIgBAbIgBAcIAAAYIABAXQAAAHgFAFQgFAFgHAAQgHAAgFgFgAgLhAQgGgGAAgHQAAgIAGgGQAGgFAHAAQAIAAAGAFQAGAGAAAIQAAAHgGAGQgGAFgIABQgHgBgGgFg");
	this.shape_5.setTransform(30.3,77.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgKBZQgGgFAAgHIAAgOIAAgNIgBhBIgZgCQgQgCAAgPQABgHAEgFQAFgFAIAAIAWACIgBgOIAAgMQAAgHAEgFQAGgFAHAAQASAAAAAgIAAAKIAMgBQAPAAAFACQAKAEAAAMQAAAHgEAFQgFAFgIAAIgGgBIgHAAIgLABIABBCIABAGIAAAIQAAAdgSAAQgHAAgEgEg");
	this.shape_6.setTransform(20.2,78.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgyBCQgDgEAAgIIAAhSIAAgLIAAgMQAAgHAEgFQAFgFAIAAQAOAAACAPQAWgRAbAAQAaAAgBAiIAAAIQgBAUgRAAQgPAAgBgRIAAgNQgbAFgNAZIABA+QgBAIgFAFQgEAEgIAAQgIAAgFgFg");
	this.shape_7.setTransform(8.1,80.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgpA2QgSgTgBgcQgBgcAQgWQATgZAigBQAZABAPATQAOATAAAbQAAAcgQAWQgSAXgcAAQgYAAgRgQgAgSgVQgHAMAAAQQAAAPAJAHQAGAHAKAAQAKAAAIgIQAJgIABgPQABgogXAAIgBAAQgOAAgJAOg");
	this.shape_8.setTransform(-5.4,80.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ag0BmQgFgFAAgIIAAgvIAAgxQAAgbgCgUIgCgZQABgLAEgHQAGgJAJAAQAHAAAFAFQAFAFgBAHIAAABQAJgFAIgCQAIgDAJAAQAdAAAOAZQAKATAAAdQgBAbgQATQgQATgdAAQgKAAgMgCIAAAzQAAAIgFAFQgFAFgHAAQgIAAgFgFgAgHg8QgHAEgJAHQACAaAAAaQALADAKAAQANAAAHgIQAGgIAAgPQAAgRgBgGQgEgQgMAAQgIAAgIAEg");
	this.shape_9.setTransform(-18.8,83.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhABRQAAgHADgEQAFgEAHAAIARACQAKACAIAAQATAAAIgMQAKgLABgYQgGAGgJADQgIAEgIAAQgaAAgQgRQgPgQAAgZQgBgiAWgWQAWgWAjAAQANAAAIADQAJADAFAGQAQACAAARQAAAJgCAPQgGAdgBAhQgBApgMASQgRAZgqAAQgxAAABgUgAgTg5QgLANAAAVQAAAPAGAHQAGAHALAAQAJAAALgLQAKgMACgLQACgMADgaIgJgEIgIgBQgUAAgMAOg");
	this.shape_10.setTransform(-44.2,84.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAaA6IgDgaQgCgOAAgMIAAgKIABgMIAAgEIAAgGQAAgLgFAAQgLAAgJAOQgLAOgGAVIgBALIAAAMIgBALIgBALQAAAHgFAFQgFAFgIAAQgHAAgGgFQgEgFAAgHIgBgLIgBgLIACgjIABghIAAgMIAAgLQAAgHAFgFQAFgFAIAAQAQAAACAUIAAABQASgSATAAQAYAAAKAUQAGANAAAbIAAAJIAAAHQAAAKADAQQACAPAAAKQAAAHgFAFQgFAFgIAAQgPAAgCgQg");
	this.shape_11.setTransform(-57.7,80.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgPBcQgFgFAAgHIgBgXIAAgYIABgcIABgbQAAgIAFgEQAFgFAIAAQAHAAAFAFQAEAEAAAIIgBAbIgBAcIAAAYIABAXQAAAHgFAFQgFAFgHAAQgHAAgFgFgAgLhAQgGgGAAgHQAAgIAGgGQAGgFAHAAQAIAAAGAFQAGAGAAAIQAAAHgGAGQgGAFgIABQgHgBgGgFg");
	this.shape_12.setTransform(-68,77.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgrA3QgVgQAAgdQAAggARgWQASgYAgAAQAVAAAPAHQAUAJAAAUQAAAOgQALQgHAFgWAIIgqATQAHAHAIADQAJADAKAAQARAAAMgHQAKgGAGAAQAOAAAAANQAAAOgWAJQgRAIgUAAQgdAAgUgOgAgRgeQgIAIgFAQIAcgNQAQgHAKgHQgIgFgNAAQgLAAgJAIg");
	this.shape_13.setTransform(-79.4,80.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AglBgQgFAFgGAAQgIAAgEgFQgFgEAAgHIAAgJIAAgKIAAiOQABgKAEgHQAFgJAJAAQAOAAAAAPIAAAFIgBAGIAAAwQAJgFAJgDQAJgCAGAAQAfAAASAVQARAUAAAdQAAAdgUAVQgUAVgdAAQgSAAgQgHgAgNgCQgKADgKAIIAAA1QASAIAMAAQAPAAALgLQAKgLgBgQQAAgRgIgLQgIgKgQAAQgFAAgIAEg");
	this.shape_14.setTransform(-94.1,77.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgKBKQgFgFAAgHQAAgPgDgcQgDgbAAgPQAAgIgCgFQgPAJgOAUIgDACIAAAoIAAAJIgBAJQAAAHgFAEQgFAEgIAAQgLAAgDgKQgDgGAAgOIAAguIgBgTIAAgSQAAgMAEgJQAFgLAJAAQAHAAAGAFQAFAGAAAGIgBALQATgWARAAQAUAAAIAPQAIgHAJgDQAKgEALAAQAYAAAJAZQACAFAEAdQADAUAGAwQAAAHgFAFQgGAFgHAAQgOAAgDgPIgFglIgEgkQgDgXgGAAQgDAAgKAGIgPAKQAAAPADAaQAEAcAAAOQAAAHgFAFQgFAEgIAAQgGAAgFgEg");
	this.shape_15.setTransform(143.3,42.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgrA3QgVgQAAgdQAAggARgWQASgYAfAAQAXAAAOAHQATAJAAAUQAAAOgPALQgHAFgWAIIgpATQAFAHAJADQAJADAKAAQARAAAMgHQAKgGAHAAQANAAAAANQAAAOgVAJQgSAIgUAAQgdAAgUgOgAgRgeQgIAIgFAQIAdgNQAPgHALgHQgJgFgOAAQgKAAgJAIg");
	this.shape_16.setTransform(125.5,42.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgKBZQgGgFAAgHIAAgOIAAgNIgChBIgXgCQgRgCABgPQAAgHAEgFQAGgFAHAAIAVACIAAgOIgBgMQAAgHAGgFQAFgFAHAAQASAAAAAgIgBAKIANgBQAPAAAGACQAJAEABAMQAAAHgGAFQgEAFgIAAIgGgBIgHAAIgMABIACBCIABAGIAAAIQAAAdgTAAQgGAAgEgEg");
	this.shape_17.setTransform(112.3,40.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgPBcQgFgFAAgHIgBgXIAAgYIABgcIABgbQAAgIAFgEQAFgFAIAAQAHAAAFAFQAEAEAAAIIgBAbIgBAcIAAAYIABAXQAAAHgFAFQgFAFgHAAQgHAAgFgFgAgLhAQgGgGAAgHQAAgIAGgGQAGgFAHAAQAIAAAGAFQAGAGAAAIQAAAHgGAGQgGAFgIABQgHgBgGgFg");
	this.shape_18.setTransform(102.8,39.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgrA3QgVgQAAgdQAAggARgWQATgYAeAAQAXAAAOAHQATAJABAUQgBAOgPALQgHAFgWAIIgpATQAFAHAJADQAJADAKAAQARAAAMgHQAKgGAHAAQANAAAAANQAAAOgVAJQgSAIgUAAQgdAAgUgOgAgRgeQgIAIgFAQIAdgNQAPgHALgHQgJgFgOAAQgKAAgJAIg");
	this.shape_19.setTransform(80.2,42.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAeBdQgEgKgCgTQgCgSAAgLIAAgKIAAgKIAAgLQgBgGgGAAQgOAAgKAMQgGAHgKASQAAAugFAJQgEALgLAAQgHAAgGgFQgFgFAAgHIABgGQABgDABggQgBgZABg7IAAgEIABgUIgBgLIgCgMQAAgHAGgFQAFgFAHAAQANAAAEAOQACAHAAAQIAAAaIgBAZQAJgKALgEQAJgFAMAAQAWAAAKANQAHAJABASIACAfIACAZIAFAZIAAAEQAAAHgFAFQgGAFgHAAQgNAAgDgNg");
	this.shape_20.setTransform(65.8,39);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgLBZQgFgFAAgHIABgOIAAgNIgChBIgYgCQgQgCgBgPQAAgHAGgFQAEgFAIAAIAWACIgBgOIgBgMQABgHAEgFQAGgFAHAAQASAAAAAgIgBAKIAOgBQAOAAAFACQALAEgBAMQAAAHgEAFQgGAFgHAAIgGgBIgGAAIgMABIACBCIAAAGIAAAIQAAAdgSAAQgGAAgGgEg");
	this.shape_21.setTransform(52,40.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAaA6IgEgaQgBgOAAgMIAAgKIABgMIAAgEIAAgGQAAgLgFAAQgLAAgKAOQgKAOgGAVIgBALIgBAMIAAALIgBALQAAAHgFAFQgFAFgIAAQgHAAgGgFQgEgFAAgHIgBgLIgBgLIACgjIABghIAAgMIAAgLQAAgHAFgFQAFgFAIAAQAQAAABAUIAAABQATgSATAAQAYAAAJAUQAHANAAAbIAAAJIAAAHQAAAKADAQQACAPAAAKQAAAHgFAFQgFAFgIAAQgPAAgCgQg");
	this.shape_22.setTransform(27.9,42.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgpA2QgSgTgBgcQgBgcAQgWQATgZAigBQAZABAPATQAOATAAAbQAAAcgQAWQgSAXgcAAQgYAAgRgQgAgSgVQgHAMAAAQQAAAPAJAHQAGAHAKAAQAKAAAIgHQAJgJABgPQABgogXAAIgBAAQgOAAgJAOg");
	this.shape_23.setTransform(14,42.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("Ag0BmQgFgFAAgIIAAgvIAAgxQAAgbgCgUIgBgZQgBgLAFgHQAGgJAJAAQAHAAAFAFQAEAFABAHIAAABQAIgFAJgCQAHgDAJAAQAdAAANAZQAKATAAAdQAAAbgPATQgSATgcAAQgKAAgMgCIAAAzQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGg8QgJAEgIAHQACAagBAaQAMADAKAAQANAAAHgIQAHgIAAgPQAAgRgCgGQgDgQgNAAQgIAAgHAEg");
	this.shape_24.setTransform(0.6,45.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAZA/QgQAGgQAAQgSAAgNgIQgNgIgDgRQgFggAAgYQAAgQAEgVQACgOAPAAQAHAAAFAEQAGAFAAAHIgCARIgCASIABAeQABAOADAIIAGADIAGAAQANAAARgEIAAgWIgBgUQAAgaADgTQACgPAPAAQAIAAAFAEQAFAFAAAHIgDAtIABAZIAAAZIAAAIIABAIQAAAHgGAFQgFAEgHAAQgLAAgFgJg");
	this.shape_25.setTransform(-13.4,42.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AhBBRQAAgHAFgEQAEgEAIAAIAQACQAKACAJAAQARAAAKgMQAIgLACgYQgGAGgJADQgIAEgJAAQgZAAgPgRQgQgQgBgZQABgiAUgWQAWgWAkAAQAMAAAJADQAJADAFAGQARACAAARQAAAJgEAPQgEAdgBAhQgCApgNASQgQAZgpAAQgyAAAAgUgAgTg5QgLANAAAVQABAPAFAHQAGAHALAAQAKAAAKgLQAKgMABgLQADgMADgaIgIgEIgIgBQgVAAgMAOg");
	this.shape_26.setTransform(-38.3,45.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAaA6IgEgaQgCgOAAgMIABgKIAAgMIABgEIAAgGQAAgLgFAAQgLAAgKAOQgKAOgFAVIgCALIgBAMIgBALIAAALQAAAHgFAFQgFAFgIAAQgIAAgEgFQgFgFgBgHIAAgLIgBgLIACgjIACghIAAgMIgBgLQAAgHAFgFQAFgFAHAAQARAAABAUIAAABQATgSAUAAQAYAAAIAUQAHANAAAbIAAAJIgBAHQAAAKADAQQADAPAAAKQAAAHgFAFQgFAFgHAAQgQAAgCgQg");
	this.shape_27.setTransform(-51.8,42.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgPBcQgFgFAAgHIgBgXIAAgYIABgcIABgbQAAgIAFgEQAFgFAIAAQAHAAAFAFQAEAEAAAIIgBAbIgBAcIAAAYIABAXQAAAHgFAFQgFAFgHAAQgHAAgFgFgAgLhAQgGgGAAgHQAAgIAGgGQAGgFAHAAQAIAAAGAFQAGAGAAAIQAAAHgGAGQgGAFgIABQgHgBgGgFg");
	this.shape_28.setTransform(-62.1,39.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAjBgQgIAFgJACQgKABgJAAQgdAAgSgSQgTgTgBgcQABgiATgUQATgVAeAAQAKAAAHACQAIACAFAEQACgsADgQQABgPAPAAQAHAAAFAFQAFAFAAAHQgBASgDAlQgCAkAAASQAAAuACAPIABAEQAAAHgFAFQgFAEgHAAQgJAAgFgIgAgaAGQgJAKAAAWQAAAOAKAKQALAJANAAQAJAAAFgCQADgBAJgHIAEgEIAAguQgFgIgGgDQgHgEgJAAQgSAAgKAKg");
	this.shape_29.setTransform(-73.8,39);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAaA6IgDgaQgCgOAAgMIAAgKIABgMIAAgEIAAgGQAAgLgFAAQgLAAgJAOQgLAOgGAVIgBALIAAAMIgBALIgBALQAAAHgFAFQgFAFgIAAQgHAAgGgFQgEgFAAgHIgBgLIgBgLIACgjIACghIAAgMIgBgLQAAgHAFgFQAFgFAIAAQAQAAACAUIAAABQASgSATAAQAYAAAKAUQAGANAAAbIAAAJIgBAHQABAKADAQQACAPAAAKQAAAHgFAFQgFAFgIAAQgPAAgCgQg");
	this.shape_30.setTransform(-87.9,42.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgrA3QgVgQAAgdQAAggARgWQASgYAgAAQAVAAAPAHQAUAJAAAUQAAAOgQALQgHAFgWAIIgqATQAHAHAIADQAJADAKAAQARAAAMgHQAKgGAGAAQAOAAAAANQAAAOgWAJQgRAIgUAAQgdAAgUgOgAgRgeQgIAIgFAQIAcgNQAQgHAKgHQgIgFgNAAQgLAAgJAIg");
	this.shape_31.setTransform(-102.3,42.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("Ag0BmQgFgFAAgIIAAgvIAAgxQAAgbgBgUIgCgZQgBgLAFgHQAGgJAJAAQAHAAAFAFQAFAFAAAHIAAABQAIgFAIgCQAIgDAJAAQAdAAANAZQALATgBAdQABAbgRATQgRATgcAAQgKAAgMgCIAAAzQAAAIgFAFQgFAFgHAAQgIAAgFgFgAgGg8QgIAEgJAHQABAaABAaQALADAKAAQANAAAHgIQAHgIgBgPQAAgRgBgGQgEgQgMAAQgIAAgHAEg");
	this.shape_32.setTransform(-116.2,45.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgrA3QgVgQAAgdQAAggARgWQATgYAeAAQAXAAAOAHQATAJABAUQAAAOgQALQgHAFgWAIIgqATQAGAHAJADQAJADAKAAQARAAAMgHQAKgGAHAAQANAAAAANQAAAOgWAJQgRAIgUAAQgdAAgUgOgAgRgeQgIAIgFAQIAdgNQAPgHALgHQgJgFgOAAQgKAAgJAIg");
	this.shape_33.setTransform(-130.8,42.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAjBgQgJAFgIACQgKABgJAAQgcAAgTgSQgUgTAAgcQAAgiAUgUQATgVAfAAQAJAAAIACQAHACAFAEQACgsADgQQACgPAOAAQAHAAAFAFQAFAFgBAHQAAASgCAlQgDAkAAASQAAAuADAPIAAAEQAAAHgFAFQgFAEgHAAQgJAAgFgIgAgZAGQgJAKAAAWQAAAOAKAKQAKAJANAAQAJAAAFgCQAEgBAHgHIAFgEIAAguQgEgIgHgDQgHgEgJAAQgSAAgJAKg");
	this.shape_34.setTransform(-145.7,39);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF0000").s().p("AgjBDQgTgIAAgNQAAgNAPAAQAGAAALAEQALADAGAAQAZAAAAgKQAAgHgSgIQgZgLgIgFQgSgMAAgSQAAgZAbgKQAQgEAgAAQAMgBAHAEQAIAEAAAMQAAAXgMAAQgNAAgDgLIgKgBQgeAAAAAJQAAAFASAJQAZALAJAGQASANAAARQAAAWgUALQgQAIgXABQgRgBgOgEg");
	this.shape_35.setTransform(139.1,4.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF0000").s().p("AglBgQgFAFgGAAQgIAAgEgFQgFgEAAgHIABgJIAAgKIAAiOQAAgKAEgHQAFgJAJAAQAOAAAAAPIgBAFIAAAGIAAAwQAKgFAIgDQAJgCAGAAQAeAAATAVQARAUAAAdQAAAdgUAVQgVAVgcAAQgSAAgQgHgAgNgCQgJADgLAIIAAA1QARAIANAAQAPAAALgLQAJgLABgQQAAgRgJgLQgIgKgQAAQgFAAgIAEg");
	this.shape_36.setTransform(125.3,0.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF0000").s().p("AgxBCQgFgEAAgIIAAhSIABgLIAAgMQAAgHAFgFQAEgFAHAAQAOAAADAPQAVgRAcAAQAZAAAAAiIAAAIQgBAUgRAAQgPAAAAgRIgBgNQgcAFgMAZIAAA+QAAAIgEAFQgGAEgHAAQgIAAgEgFg");
	this.shape_37.setTransform(111.5,4.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF0000").s().p("AgqA3QgWgQAAgdQAAggARgWQASgYAgAAQAVAAAPAHQAUAJAAAUQAAAOgQALQgIAFgVAIIgqATQAHAHAIADQAJADAKAAQARAAAMgHQALgGAFAAQAOAAAAANQAAAOgWAJQgRAIgUAAQgeAAgSgOgAgRgeQgIAIgFAQIAcgNQAQgHAKgHQgIgFgNAAQgLAAgJAIg");
	this.shape_38.setTransform(97.6,4.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF0000").s().p("AgSA4IgqhlIgBgHQgBgHAGgEQAFgFAIgBQALABAEAJQAIAQAUA3IASgqIALgbQAFgLALAAQAHAAAFAFQAFAFABAGQgBAFgUAuIgbA4QAAAGgEAEQgFAFgGAAQgMgBgGgNg");
	this.shape_39.setTransform(84.4,4.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF0000").s().p("AgMBkQgEgFgBgIIAAiuQAAgHAGgFQAFgFAGAAQAIAAAFAFQAEAFAAAHIAACoQAAAYgRAAQgHAAgFgFg");
	this.shape_40.setTransform(62.9,0.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF0000").s().p("AAfA6QgMAGgJADQgJADgFAAQgfAAgPgRQgPgQAAghQAAgdAWgWQAXgWAfAAQAMAAAPAHQAUAIAAALQAAAFgDADIgCANIgBARQAAAXADALIAGANIAFAMQAAAHgFAEQgFAFgHAAQgGAAgMgMgAgRgZQgNAOAAAQQAAARAGAJQAGAJAMAAQAHAAAHgDQAHgDAHgFQgEgdAAgPIAAgJIACgMIgEgCIgEAAQgQAAgNANg");
	this.shape_41.setTransform(52.3,4.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF0000").s().p("AgyBCQgDgEAAgIIAAhSIAAgLIAAgMQAAgHAEgFQAFgFAIAAQAOAAACAPQAWgRAbAAQAZAAABAiIAAAIQgCAUgQAAQgQAAgBgRIAAgNQgcAFgMAZIABA+QgBAIgEAFQgFAEgIAAQgIAAgFgFg");
	this.shape_42.setTransform(39,4.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF0000").s().p("AAZA/QgQAGgQAAQgSAAgNgIQgNgIgDgRQgFggAAgYQAAgQAEgVQACgOAPAAQAHAAAFAEQAGAFAAAHIgCARIgCASIABAeQABAOADAIIAGADIAGAAQANAAARgEIAAgWIgBgUQAAgaADgTQACgPAPAAQAIAAAFAEQAFAFAAAHIgDAtIABAZIAAAZIAAAIIABAIQAAAHgGAFQgFAEgHAAQgLAAgFgJg");
	this.shape_43.setTransform(25.7,4.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF0000").s().p("AgLBkQgGgFAAgIIAAiuQABgHAFgFQAFgFAGAAQAIAAAEAFQAGAFAAAHIAACoQAAAYgSAAQgHAAgEgFg");
	this.shape_44.setTransform(15.4,0.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF0000").s().p("Ag0BmQgFgFAAgIIAAgvIAAgxQAAgbgCgUIgBgZQAAgLAEgHQAFgJAKAAQAHAAAFAFQAEAFABAHIAAABQAIgFAJgCQAHgDAJAAQAdAAANAZQALATAAAdQAAAbgQATQgRATgdAAQgKAAgMgCIAAAzQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGg8QgJAEgIAHQACAagBAaQAMADAKAAQANAAAHgIQAHgIAAgPQAAgRgCgGQgDgQgNAAQgIAAgHAEg");
	this.shape_45.setTransform(5.2,7.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgyBCQgDgEAAgIIAAhSIAAgLIAAgMQAAgHAEgFQAEgFAIAAQAOAAADAPQAVgRAcAAQAaAAAAAiIAAAIQgCAUgQAAQgRAAABgRIgBgNQgbAFgNAZIAAA+QAAAIgEAFQgGAEgHAAQgIAAgFgFg");
	this.shape_46.setTransform(-19.2,4.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgpA2QgSgTgBgcQgBgcAQgWQATgZAigBQAZABAPATQAOATAAAbQAAAcgQAVQgSAYgcAAQgYAAgRgQgAgSgVQgHAMAAAQQAAAPAJAHQAGAHAKAAQAKAAAIgIQAJgIABgPQABgogXAAIgBAAQgOAAgJAOg");
	this.shape_47.setTransform(-32.7,4.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FF0000").s().p("AgyBCQgEgEAAgIIAAhSIABgLIAAgMQAAgHAFgFQADgFAJAAQAOAAACAPQAWgRAbAAQAaAAgBAiIAAAIQgBAUgRAAQgQAAAAgRIAAgNQgbAFgNAZIABA+QAAAIgGAFQgEAEgIAAQgIAAgFgFg");
	this.shape_48.setTransform(-56.6,4.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF0000").s().p("AAfA6QgMAGgJADQgJADgFAAQgfAAgPgRQgPgQAAghQAAgdAWgWQAXgWAfAAQAMAAAPAHQAUAIAAALQAAAFgDADIgCANIgBARQAAAXADALIAGANIAFAMQAAAHgFAEQgFAFgHAAQgGAAgMgMgAgRgZQgNAOAAAQQAAARAGAJQAGAJAMAAQAHAAAHgDQAHgDAHgFQgEgdAAgPIAAgJIACgMIgEgCIgEAAQgQAAgNANg");
	this.shape_49.setTransform(-70.3,4.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FF0000").s().p("AgMBkQgEgFAAgIIAAiuQgBgHAGgFQAFgFAHAAQAHAAAEAFQAFAFABAHIAACoQAAAYgSAAQgGAAgGgFg");
	this.shape_50.setTransform(-81.2,0.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF0000").s().p("AAZA/QgQAGgQAAQgSAAgNgIQgNgIgDgRQgFggAAgYQAAgQAEgVQACgOAPAAQAHAAAFAEQAGAFAAAHIgCARIgCASIABAeQABAOADAIIAGADIAGAAQANAAARgEIAAgWIgBgUQAAgaADgTQACgPAPAAQAIAAAFAEQAFAFAAAHIgDAtIABAZIAAAZIAAAIIABAIQAAAHgGAFQgFAEgHAAQgLAAgFgJg");
	this.shape_51.setTransform(-91.5,4.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF0000").s().p("AhBBRQAAgHAFgEQAEgEAHAAIARACQAKACAIAAQASAAAJgMQAKgLABgYQgHAGgIADQgIAEgIAAQgaAAgQgRQgQgQAAgZQAAgiAWgWQAVgWAkAAQAMAAAJADQAJADAFAGQARACAAARQAAAJgDAPQgGAdAAAhQgCApgNASQgQAZgpAAQgyAAAAgUgAgTg5QgLANAAAVQABAPAFAHQAGAHALAAQAKAAAKgLQAKgMABgLQADgMADgaIgJgEIgIgBQgUAAgMAOg");
	this.shape_52.setTransform(-105.2,7.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF0000").s().p("AAaA6IgDgaQgCgOgBgMIABgKIABgMIAAgEIAAgGQAAgLgFAAQgLAAgJAOQgLAOgFAVIgCALIAAAMIgBALIgBALQAAAHgFAFQgFAFgIAAQgIAAgFgFQgEgFAAgHIgBgLIgBgLIACgjIACghIAAgMIgBgLQAAgHAFgFQAFgFAIAAQAQAAACAUIAAABQASgSATAAQAZAAAJAUQAGANAAAbIAAAJIgBAHQAAAKAEAQQACAPAAAKQAAAHgFAFQgFAFgIAAQgPAAgCgQg");
	this.shape_53.setTransform(-118.6,4.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FF0000").s().p("AgPBcQgFgFAAgHIgBgXIAAgYIABgcIABgbQAAgIAFgEQAFgFAIAAQAHAAAFAFQAEAEAAAIIgBAbIgBAcIAAAYIABAXQAAAHgFAFQgFAFgHAAQgHAAgFgFgAgLhAQgGgGAAgHQAAgIAGgGQAGgFAHAAQAIAAAGAFQAGAGAAAIQAAAHgGAGQgGAFgIABQgHgBgGgFg");
	this.shape_54.setTransform(-128.9,1.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF0000").s().p("AgjBDQgTgIAAgNQAAgNAPAAQAGAAALAEQALADAGAAQAZAAAAgKQAAgHgSgIQgZgLgIgFQgSgMAAgSQAAgZAbgKQAQgEAgAAQAMgBAHAEQAIAEAAAMQAAAXgMAAQgNAAgDgLIgKgBQgeAAAAAJQAAAFASAJQAZALAJAGQASANAAARQAAAWgUALQgQAIgXABQgRgBgOgEg");
	this.shape_55.setTransform(-139.4,4.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgxBCQgFgEAAgIIAAhSIABgLIAAgMQAAgHAFgFQADgFAIAAQAOAAADAPQAWgRAbAAQAaAAgBAiIAAAIQgBAUgRAAQgQAAAAgRIAAgNQgbAFgNAZIABA+QAAAIgGAFQgEAEgIAAQgIAAgEgFg");
	this.shape_56.setTransform(162.6,-34);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgrA3QgVgQAAgdQAAggARgWQATgYAeAAQAXAAAOAHQATAJABAUQAAAOgQALQgHAFgWAIIgpATQAFAHAJADQAJADAKAAQARAAAMgHQAKgGAHAAQANAAAAANQAAAOgWAJQgRAIgUAAQgdAAgUgOgAgRgeQgIAIgFAQIAdgNQAPgHALgHQgJgFgOAAQgKAAgJAIg");
	this.shape_57.setTransform(148.7,-34);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AAeBdQgEgKgCgTQgCgSAAgLIAAgKIAAgKIAAgLQgBgGgGAAQgOAAgKAMQgGAHgKASQAAAugFAJQgEALgLAAQgHAAgGgFQgFgFAAgHIABgGQABgDABggQgBgZABg7IAAgEIABgUIgBgLIgCgMQAAgHAGgFQAFgFAHAAQANAAAEAOQACAHAAAQIAAAaIgBAZQAJgKALgEQAJgFAMAAQAWAAAKANQAHAJABASIACAfIACAZIAFAZIAAAEQAAAHgFAFQgGAFgHAAQgNAAgDgNg");
	this.shape_58.setTransform(134.3,-37.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgKBZQgGgFAAgHIAAgOIAAgNIgBhBIgZgCQgQgCAAgPQABgHAFgFQAEgFAIAAIAWACIgBgOIAAgMQAAgHAEgFQAGgFAHAAQASAAAAAgIAAAKIAMgBQAPAAAFACQAKAEAAAMQAAAHgEAFQgGAFgHAAIgGgBIgHAAIgLABIACBCIAAAGIAAAIQAAAdgSAAQgHAAgEgEg");
	this.shape_59.setTransform(120.5,-36.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgPBcQgFgFAAgHIgBgXIAAgYIABgcIABgbQAAgIAFgEQAFgFAIAAQAHAAAFAFQAEAEAAAIIgBAbIgBAcIAAAYIABAXQAAAHgFAFQgFAFgHAAQgHAAgFgFgAgLhAQgGgGAAgHQAAgIAGgGQAGgFAHAAQAIAAAGAFQAGAGAAAIQAAAHgGAGQgGAFgIABQgHgBgGgFg");
	this.shape_60.setTransform(111,-37);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgqA3QgWgQAAgdQAAggARgWQATgYAfAAQAWAAAOAHQAUAJgBAUQAAAOgPALQgIAFgVAIIgqATQAHAHAIADQAJADAKAAQARAAAMgHQALgGAFAAQAOAAAAANQAAAOgWAJQgRAIgUAAQgdAAgTgOgAgQgeQgJAIgFAQIAcgNQARgHAJgHQgIgFgNAAQgMAAgHAIg");
	this.shape_61.setTransform(99.6,-34);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgrA3QgVgQAAgdQAAggARgWQASgYAfAAQAXAAAOAHQATAJAAAUQAAAOgPALQgHAFgWAIIgpATQAFAHAJADQAJADAKAAQARAAAMgHQAKgGAHAAQANAAAAANQAAAOgVAJQgSAIgUAAQgdAAgUgOgAgRgeQgIAIgFAQIAdgNQAPgHALgHQgJgFgOAAQgKAAgJAIg");
	this.shape_62.setTransform(73.8,-34);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgxBCQgFgEAAgIIAAhSIABgLIAAgMQAAgHAFgFQAEgFAHAAQAOAAADAPQAVgRAcAAQAZAAAAAiIAAAIQgBAUgRAAQgPAAAAgRIgBgNQgcAFgMAZIAAA+QAAAIgEAFQgGAEgHAAQgIAAgEgFg");
	this.shape_63.setTransform(60.7,-34);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgPBcQgFgFAAgHIgBgXIAAgYIABgcIABgbQAAgIAFgEQAFgFAIAAQAHAAAFAFQAEAEAAAIIgBAbIgBAcIAAAYIABAXQAAAHgFAFQgFAFgHAAQgHAAgFgFgAgLhAQgGgGAAgHQAAgIAGgGQAGgFAHAAQAIAAAGAFQAGAGAAAIQAAAHgGAGQgGAFgIABQgHgBgGgFg");
	this.shape_64.setTransform(50.8,-37);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAZA/QgQAGgQAAQgSAAgNgIQgNgIgDgRQgFggAAgYQAAgQAEgVQACgOAPAAQAHAAAFAEQAGAFAAAHIgCARIgCASIABAeQABAOADAIIAGADIAGAAQANAAARgEIAAgWIgBgUQAAgaADgTQACgPAPAAQAIAAAFAEQAFAFAAAHIgDAtIABAZIAAAZIAAAIIABAIQAAAHgGAFQgFAEgHAAQgLAAgFgJg");
	this.shape_65.setTransform(40,-33.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AANBSIAAgHIAEgkIgKABQgcAAgTgPQgUgQAAgbQAAglAWgXQAXgYAmAAQAHAAAEAEQAFgDAEAAQAIAAAFAFQAFAGAAAGQAAAlgEApIgGAtQgDAaAAAVQAAAHgFAFQgFAFgIAAQgRAAAAgVgAgQgzQgJAOAAATQAAANAIAGQAJAJAOgBQAJAAAEgJQAGgMAAggIACgbIgEAAIgIAAQgUADgLARg");
	this.shape_66.setTransform(26.2,-30.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgrA3QgVgQAAgdQAAggARgWQASgYAgAAQAVAAAPAHQAUAJAAAUQAAAOgQALQgHAFgWAIIgqATQAHAHAIADQAJADAKAAQARAAAMgHQAKgGAGAAQAOAAAAANQAAAOgWAJQgRAIgUAAQgdAAgUgOgAgRgeQgIAIgFAQIAcgNQAQgHAKgHQgIgFgNAAQgLAAgJAIg");
	this.shape_67.setTransform(12.4,-34);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgyBCQgDgEAAgIIAAhSIAAgLIAAgMQAAgHAEgFQAFgFAIAAQAOAAACAPQAWgRAbAAQAZAAABAiIAAAIQgCAUgQAAQgQAAAAgRIgBgNQgcAFgMAZIAAA+QAAAIgEAFQgFAEgIAAQgIAAgFgFg");
	this.shape_68.setTransform(-0.7,-34);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#009933").s().p("AgjBCQgTgHAAgNQAAgNAPAAQAGAAALAEQALADAGAAQAZAAAAgKQAAgHgSgIQgZgLgIgFQgSgMAAgSQAAgZAbgKQAQgEAgAAQAMgBAHAEQAIAEAAAMQAAAXgMAAQgNAAgDgLIgKgBQgeAAAAAJQAAAFASAJQAZALAJAGQASANAAARQAAAWgUALQgQAIgXABQgRgBgOgFg");
	this.shape_69.setTransform(-24.9,-34.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#009933").s().p("AgrA3QgVgQAAgdQAAggARgWQATgYAeAAQAXAAAOAHQATAJABAUQAAAOgQALQgHAFgWAIIgqATQAGAHAJADQAJADAKAAQARAAAMgHQAKgGAHAAQANAAAAANQAAAOgWAJQgRAIgUAAQgdAAgUgOgAgRgeQgIAIgFAQIAdgNQAPgHALgHQgJgFgOAAQgKAAgJAIg");
	this.shape_70.setTransform(-38.5,-34);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#009933").s().p("AhBBRQAAgHAFgEQAEgEAHAAIARACQAKACAJAAQARAAAJgMQAKgLABgYQgGAGgJADQgIAEgIAAQgaAAgQgRQgPgQgBgZQAAgiAWgWQAVgWAkAAQAMAAAJADQAJADAFAGQARACAAARQAAAJgEAPQgEAdgBAhQgCApgNASQgQAZgpAAQgyAAAAgUgAgTg5QgLANAAAVQABAPAFAHQAGAHALAAQAKAAAKgLQAKgMABgLQADgMADgaIgIgEIgJgBQgUAAgMAOg");
	this.shape_71.setTransform(-52.6,-30.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#009933").s().p("AAfA6QgMAGgJADQgJADgFAAQgfAAgPgRQgPgQAAghQAAgdAWgWQAXgWAfAAQAMAAAPAHQAUAIAAALQAAAFgDADIgCANIgBARQAAAXADALIAGANIAFAMQAAAHgFAEQgFAFgHAAQgGAAgMgMgAgRgZQgNAOAAAQQAAARAGAJQAGAJAMAAQAHAAAHgDQAHgDAHgFQgEgdAAgPIAAgJIACgMIgEgCIgEAAQgQAAgNANg");
	this.shape_72.setTransform(-66.6,-34);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#009933").s().p("AgLBZQgFgFAAgHIABgOIAAgNIgChBIgYgCQgQgCgBgPQAAgHAGgFQAEgFAIAAIAVACIAAgOIgBgMQABgHAFgFQAFgFAHAAQASAAAAAgIgBAKIAOgBQAOAAAFACQALAEgBAMQAAAHgEAFQgGAFgHAAIgGgBIgGAAIgNABIADBCIAAAGIAAAIQAAAdgSAAQgGAAgGgEg");
	this.shape_73.setTransform(-80,-36.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#009933").s().p("AAaA6IgDgaQgCgOAAgMIAAgKIABgMIAAgEIAAgGQAAgLgFAAQgLAAgJAOQgLAOgGAVIgBALIAAAMIgBALIgBALQAAAHgFAFQgFAFgIAAQgHAAgGgFQgEgFAAgHIgBgLIgBgLIACgjIABghIAAgMIAAgLQAAgHAFgFQAFgFAIAAQAQAAACAUIAAABQASgSATAAQAYAAAKAUQAGANAAAbIAAAJIAAAHQAAAKADAQQACAPAAAKQAAAHgFAFQgFAFgIAAQgPAAgCgQg");
	this.shape_74.setTransform(-92.8,-34.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#009933").s().p("AgqA3QgWgQAAgdQAAggARgWQASgYAgAAQAVAAAPAHQAUAJAAAUQAAAOgQALQgIAFgVAIIgqATQAHAHAIADQAJADAKAAQARAAAMgHQALgGAFAAQAOAAAAANQAAAOgWAJQgRAIgUAAQgeAAgSgOgAgRgeQgIAIgFAQIAcgNQAQgHAKgHQgIgFgNAAQgLAAgJAIg");
	this.shape_75.setTransform(-107.2,-34);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#009933").s().p("AgnA3QgUgQAAgcQAAgYASgaQAUggAaAAQAOAAARAHQAWAKgBALQABAGgFAFQgEAFgIAAQgFAAgIgGQgIgFgPAAQgJgBgLAUQgLASAAAMQAAAOAKAIQAJAGAOABQAJAAAMgHQAMgGAEgBQAGAAAFAGQAFAFAAAGQAAAKgWAJQgTAKgMgBQgbABgTgRg");
	this.shape_76.setTransform(-121.2,-34);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#009933").s().p("AgxBCQgEgEgBgIIAAhSIABgLIAAgMQAAgHAEgFQAFgFAHAAQAOAAADAPQAVgRAcAAQAaAAAAAiIAAAIQgCAUgQAAQgRAAABgRIgBgNQgbAFgNAZIAAA+QAAAIgEAFQgGAEgHAAQgIAAgEgFg");
	this.shape_77.setTransform(-133.6,-34);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#009933").s().p("AgqA3QgWgQAAgdQAAggARgWQASgYAgAAQAVAAAPAHQAUAJgBAUQAAAOgPALQgIAFgVAIIgqATQAHAHAIADQAJADAKAAQARAAAMgHQALgGAFAAQAOAAAAANQAAAOgWAJQgRAIgUAAQgeAAgSgOgAgQgeQgJAIgFAQIAcgNQAQgHAKgHQgIgFgNAAQgMAAgHAIg");
	this.shape_78.setTransform(-147.6,-34);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#009933").s().p("Ag0BmQgFgFAAgIIAAgvIAAgxQAAgbgCgUIgBgZQgBgLAFgHQAGgJAJAAQAHAAAFAFQAEAFABAHIAAABQAIgFAJgCQAHgDAJAAQAdAAANAZQAKATAAAdQAAAbgPATQgSATgcAAQgKAAgMgCIAAAzQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGg8QgJAEgIAHQACAagBAaQAMADAKAAQANAAAHgIQAHgIAAgPQAAgRgCgGQgDgQgNAAQgIAAgHAEg");
	this.shape_79.setTransform(-161.4,-31);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AAjBgQgIAFgKACQgJABgJAAQgcAAgTgSQgTgTAAgcQAAgiATgUQAUgVAdAAQAKAAAHACQAIACAGAEQABgsACgQQACgPAPAAQAHAAAFAFQAEAFABAHQAAASgEAlQgDAkAAASQAAAuADAPIABAEQAAAHgFAFQgFAEgHAAQgJAAgFgIgAgaAGQgIAKgBAWQABAOAJAKQAKAJAOAAQAJAAAFgCQADgBAJgHIAEgEIAAguQgEgIgHgDQgHgEgJAAQgSAAgKAKg");
	this.shape_80.setTransform(121.7,-75.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AAaA6IgEgaQgBgOAAgMIAAgKIABgMIAAgEIAAgGQAAgLgFAAQgLAAgKAOQgKAOgGAVIgBALIgBAMIAAALIgBALQAAAHgFAFQgFAFgIAAQgHAAgGgFQgEgFAAgHIgBgLIgBgLIACgjIABghIAAgMIAAgLQAAgHAFgFQAFgFAHAAQARAAABAUIAAABQATgSATAAQAYAAAJAUQAHANAAAbIAAAJIAAAHQAAAKADAQQACAPAAAKQAAAHgFAFQgFAFgIAAQgPAAgCgQg");
	this.shape_81.setTransform(107.6,-72.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AAfA6QgMAGgJADQgJADgFAAQgfAAgPgRQgPgQAAghQAAgdAWgWQAXgWAfAAQAMAAAPAHQAUAIAAALQAAAFgDADIgCANIgBARQAAAXADALIAGANIAFAMQAAAHgFAEQgFAFgHAAQgGAAgMgMgAgRgZQgNAOAAAQQAAARAGAJQAGAJAMAAQAHAAAHgDQAHgDAHgFQgEgdAAgPIAAgJIACgMIgEgCIgEAAQgQAAgNANg");
	this.shape_82.setTransform(93.5,-72.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#009900").s().p("AgjBCQgTgHAAgNQAAgNAPAAQAGAAALAEQALADAGAAQAZAAAAgKQAAgHgSgIQgZgLgIgFQgSgMAAgSQAAgZAbgKQAQgEAgAAQAMgBAHAEQAIAEAAAMQAAAXgMAAQgNAAgDgLIgKgBQgeAAAAAJQAAAFASAJQAZALAJAGQASANAAARQAAAWgUALQgQAIgXABQgRgBgOgFg");
	this.shape_83.setTransform(68.4,-72.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#009900").s().p("AAaA6IgDgaQgCgOAAgMIAAgKIABgMIAAgEIAAgGQAAgLgFAAQgLAAgJAOQgLAOgGAVIgBALIAAAMIgBALIgBALQAAAHgFAFQgFAFgIAAQgHAAgGgFQgEgFAAgHIgBgLIgBgLIACgjIACghIAAgMIgBgLQAAgHAFgFQAFgFAIAAQAQAAACAUIAAABQASgSATAAQAYAAAKAUQAGANAAAbIAAAJIgBAHQABAKADAQQACAPAAAKQAAAHgFAFQgFAFgIAAQgPAAgCgQg");
	this.shape_84.setTransform(55.6,-72.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#009900").s().p("AgpA2QgSgTgBgcQgBgcAQgWQATgZAigBQAZABAPATQAOATAAAbQAAAcgQAVQgSAYgcAAQgYAAgRgQgAgSgVQgHAMAAAQQAAAPAJAHQAGAHAKAAQAKAAAIgIQAJgIABgPQABgogXAAIgBAAQgOAAgJAOg");
	this.shape_85.setTransform(41.7,-72.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#009900").s().p("AgPBcQgFgFAAgHIgBgXIAAgYIABgcIABgbQAAgIAFgEQAFgFAIAAQAHAAAFAFQAEAEAAAIIgBAbIgBAcIAAAYIABAXQAAAHgFAFQgFAFgHAAQgHAAgFgFgAgLhAQgGgGAAgHQAAgIAGgGQAGgFAHAAQAIAAAGAFQAGAGAAAIQAAAHgGAGQgGAFgIABQgHgBgGgFg");
	this.shape_86.setTransform(31.7,-75.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#009900").s().p("AgLBZQgFgFAAgHIABgOIAAgNIgDhBIgXgCQgQgCgBgPQAAgHAGgFQAFgFAHAAIAVACIAAgOIgBgMQAAgHAGgFQAFgFAHAAQASAAAAAgIgBAKIAOgBQAOAAAGACQAKAEgBAMQABAHgGAFQgFAFgHAAIgGgBIgGAAIgNABIADBCIAAAGIAAAIQAAAdgSAAQgGAAgGgEg");
	this.shape_87.setTransform(21.6,-74.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#009900").s().p("AgnA3QgUgQAAgcQAAgYASgaQAVggAZAAQAOAAARAHQAWAKAAALQgBAGgEAFQgEAFgIAAQgFAAgHgGQgJgFgPAAQgJgBgLAUQgLASAAAMQAAAOAKAIQAJAGAOABQAIAAANgHQAMgGADgBQAHAAAFAGQAFAFAAAGQAAAKgVAJQgUAKgMgBQgbABgTgRg");
	this.shape_88.setTransform(8.6,-72.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#009900").s().p("AAfA6QgMAGgJADQgJADgFAAQgfAAgPgRQgPgQAAghQAAgdAWgWQAXgWAfAAQAMAAAPAHQAUAIAAALQAAAFgDADIgCANIgBARQAAAXADALIAGANIAFAMQAAAHgFAEQgFAFgHAAQgGAAgMgMgAgRgZQgNAOAAAQQAAARAGAJQAGAJAMAAQAHAAAHgDQAHgDAHgFQgEgdAAgPIAAgJIACgMIgEgCIgEAAQgQAAgNANg");
	this.shape_89.setTransform(-5,-72.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#009900").s().p("AgyBCQgDgEAAgIIAAhSIAAgLIAAgMQAAgHAEgFQAEgFAIAAQAOAAADAPQAVgRAcAAQAaAAAAAiIAAAIQgCAUgQAAQgRAAABgRIgBgNQgbAFgNAZIAAA+QAAAIgEAFQgGAEgHAAQgIAAgFgFg");
	this.shape_90.setTransform(-18.3,-72.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#009900").s().p("AhABmQgFgGAAgHIAAiRIAAgPIAAgOQAAgIAGgFQAEgEAIAAQAFAAAEABQAOgCANgBIAVgBQAOAAAWAFQAcAIAAAJQAAAIgFAFQgFAFgIAAIgGgBQgRgFgXAAIgRABIgWADIAAAqQATgFANAAQAWAAASACQAQACAAAPQAAAIgFAEQgFAFgIAAIgUgBIgSgBQgKAAgWAFIAABQQAAAHgGAGQgGAEgHAAQgIAAgEgEg");
	this.shape_91.setTransform(-32.5,-75.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgRAiQAAgHAFgFQAGgEAGAAQAUAAAAAdQAAAIgGAEQgFAFgIAAQgSAAAAgegAgNgaQgFgEAAgIIAAgEIgBgFQAAgGAGgFQAFgFAHAAQASAAAAAZQAAAIgFAEQgFAFgHAAQgHAAgGgFg");
	this.shape_92.setTransform(-57.3,-73.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("Ag6BhQgOgMAAgpQAAgRACghQADgiAAgRIgCgNIgBgOQAAgTASAAQAFAAAFADIAcgFQANgCALAAQAgAAATAHQAMAFAAALQAAAHgFAFQgFAGgHAAIgGgBQgUgFgUAAIgTABIgXAFIgCAyIAxgFIAfgCQAHAAAGAFQAFAEAAAIQAAAOgQACIgfADIg1AFIgBAaQAAAZADADQACACAOAAIAXgBIAYAAIAHgBIAHAAQAIAAAFAEQAGAEAAAJQAAAOgPADQgNACgnAAQgpAAgMgLg");
	this.shape_93.setTransform(-70.9,-75.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AhDBMIADgnQADg3AAhDQAAgIAFgEQAFgGAHAAQAIAAAGAGQAEAEAAAIQABBEgEA4IgCAeQAeAAAugOIAGgBQAHAAAFAFQAFAGAAAGQAAALgLAFQgPAHggAFQgbAFgTAAQgfAAAAgcg");
	this.shape_94.setTransform(-86.1,-75.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgzBXQghgaAAg/IABgSIAAgSIABgOIAAgPQAAgKAEgJQAFgMAIAAQAHAAAGAEQAGAGAAAHIgBAVIAAAWIAAASIgBASQAAASAFAQQAFAVAKAHQAFAFAVAAQAgAAAMg5QAGgeAAg2QAAgGAEgHQAGgJAKAAQAJAAAEAGQAEAGAAAFQAAAygFAcQgHArgVAcQgKAMgNAJQgQAKgPAAQghAAgQgMg");
	this.shape_95.setTransform(-103.4,-74.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AhEBfQgGgFAAgIIABgcIAAgdIAAhlQAAgIAFgHQAHgJALABIAgADQARACAMAGQA2AbAAApQAAAQgLAMQgMANgWAJQAhATARATQAFAFAAAGQAAAHgGAGQgFAFgHAAQgHAAgGgGQgmgkgtgOIABApQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgnADIAGABQAfAAAOgHQAHgDAFgGQAFgFAAgDQAAgOgSgOQgQgMgTgCIgPgBg");
	this.shape_96.setTransform(-120.9,-75.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-187.5,-96.6,375,193.3);


(lib.static_pizza_slice = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AhRgUQAFAAADADQADADAAAFQAAAFgDADQgDACgFAAQgFAAgDgCQgDgDAAgFQAAgFADgDQADgDAFAAgAiKgaQAJABgFAJQAQgFgDATQgCANAPABQAEAAgBAHQgDAPALAHQAMAIAMAHQAEADAAAGQAAAPARABQAPABAJAKQAEAFABAJIDNjwgAgGgnQAGAAACADQAEAEAAAFQAAAFgEAEQgCAEgGAAQgFAAgEgEQgDgEAAgFQAAgFADgEQAEgDAFAAgAgdArQAAAFgDADQgDADgEAAQgFAAgDgDQgDgDAAgFQAAgEADgEQADgDAFAAQAEAAADADQADAEAAAEgAAOAaQACAEAAAGQAAAFgCAEQgCAEgDAAQgDAAgCgEQgCgEAAgFQAAgGACgEQACgEADAAQADAAACAEgABBguQAAAFgEADQgDAEgGAAQgFAAgDgEQgEgDAAgFQAAgFAEgEQADgEAFAAQAGAAADAEQAEAEAAAFgAgaBtIADgDAgSCFQAAAAgBAAQgMgBgIADAgaBtQAQgFgCAVIAAAAIARgXQBjhsBOiAAgaBtIgSAVQhlg9gkhRIArgO");
	this.shape.setTransform(18.1,13.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgRAvQgEAAgDgDQgEgDAAgFQAAgEAEgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAIAAAAgAAQgVQgFAAgEgEQgEgDABgGQgBgFAEgEQAEgDAFAAQAFAAAEADQAEAEAAAFQAAAGgEADQgEAEgFAAIAAAAg");
	this.shape_1.setTransform(15.9,14.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DC3F03").s().p("AA1BMIAAAAIARgUIgRAUQhkg9gkhQIAqgPQAJABgFAJQAQgFgDATQgCAOAPABQAEABgBAGQgDAPALAHIAXAOQAFADAAAGQAAAPAQABQAPABAJAKQAFAGAAAIIgDAEQAQgGgCAVIAAAAIgGAIIAAAAQgNgBgIADIgEgFg");
	this.shape_2.setTransform(8.4,18.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AAXA3QgDAAgCgFQgCgDAAgGQAAgGACgEQACgEADABQADgBACAEQACAEAAAGQAAAGgCADQgCAFgDAAIAAAAgAhDAHQgFAAgDgEQgDgDAAgEQAAgEADgEQADgDAFAAQAFAAADADQADAEAAAEQAAAEgDADQgDAEgFAAIAAAAgAA6ggQgEgEAAgFQAAgFAEgEQADgDAFAAQAGAAADADQAEAEAAAFQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_3.setTransform(16.7,12.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF66").s().p("AghCCQABgVgPAFIADgDIDMjwQhNCAhiBsIgSAXgAgxBhQgJgKgPgBQgRgBAAgPQAAgGgEgDIgYgPQgLgHACgPQABgHgEAAQgOgBACgOQACgSgQAFQAGgJgJgBIE/hsIjMDwQgBgJgEgFgAg1A3QADgDAAgEQAAgEgDgEQgDgDgFAAQgEAAgDADQgDAEAAAEQAAAEADADQADAEAEAAQAFAAADgEgAgHAyQACgEAAgFQAAgGgCgEQgCgEgDAAQgCAAgCAEQgCAEAAAGQAAAFACAEQACAEACAAQADAAACgEgAheADQADgDAAgEQAAgFgDgDQgEgDgEAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAFAAQAEAAAEgDgAgSgNQAEgEAAgFQAAgFgEgEQgEgEgFAAQgFAAgEAEQgDAEAAAFQAAAFADAEQAEAEAFgBQAFABAEgEgAAWgyQgDAEAAAFQAAAFADADQAEAEAFAAQAFAAAEgEQAEgDAAgFQAAgFgEgEQgEgEgFAAQgFAAgEAEg");
	this.shape_4.setTransform(20.3,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,38.3,28.9);


(lib.static_pie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("ABInlQgRgOgXgBQgLAegdAEQgdAEgdgGQgNgCgLgRIAAAAQgSgNgaATQAAABgBAAQgNAAgIAQQgLAZgUANQgWAOgggFQgbgFgVgZIgBgBQgTgNgbAJQgOAEgFATIAAAAQgMATgPATQgSAXgcgOQgMgGgMgGQgMgGgLgHQgTgLgRAXQgJALgKAPQgFAHgEAJQgIAMgGAOQgKAUgQAEQgcAIgQgKIAAgBQgTgTgTAOQgFAEAAAHQAAANgCAMQgCAQgFAPQgOACgMgEQgBgBgCAAIAAgBQgHgPgRAIQgEACgCAHQgDAOABAMQACAIADAHQAAAlgeAKQgYAIgUAJIAAAAQgYgCgDAVQgDAOAEALQAFAMALAKQgFAfgfALQAAABgBABIAAABQAAAAAAACIAAAAQAAABAAACIgBAAQgbAXAZANQAMAWADAZQABAPgFANQgCAGgEAGQgRAYAfAFQAFAAAFABQAAgBAAgBQAAABABACAtUgcQAAACgBABAq9j2QgBgBgCgBAm+gjQgLAAgMAAQAFgrAmgPAm3jOQAJgdAbACAlogdQgBgVAJgOAlKjzQAggPAogKAHsnLQgBAAAAAAQgagFgdADQgdAEgaAFQgMADgHgFQgMgJgUgCQgcgCgdADQgcACgegBQgUAAgPgIQgYgNgdAGQgeAGgZgNAABhCIBHmjAIAnFQgKgDgKgDQAMgCAIAIgALmlsQgGgDgOABQgIABgJABQgLABgLACQggAEAJgiQAAAAAAgBQABgagWgQQgUgQggAHQgPADgQACQgNABgNAAQgQgBgCgPIAAAAAF/hsQAFgDAIgDAJIigQAFgFALABAHyiNQAMgNAVAAADXkGQAXADANgHADHlmQAKAdAgAHALmlsQAMAFgPAVQgBAAAAAAQgLANAGAIQAGAIANAEQANAEAOADQAOADAOADQAOACAHAQQAJAYgPAYQgSAVASANQAHAFAGAFQANAMAHANQANAWgMAOQgFAFgOALQAAAAAAABQAZAYAEAkQAWCxjpCbQjoCcleAsQldArkIhfQkHhfgWiyQgCgRABgRIAAgBQAAAAABABQARAEAMAGQALAHgDAPQgCAPAGAJQgZgbgQgdANFhpQAAgBAAgBQAAABgBABQAAAAABAAgANEhpQAAAAABABALmlsQlyDUlzBWILsCCQBMhRAMhXAq9j2QFGCcF4AYIAABjIADFQQjqAYjEgoQhKgQhFgYQgdgLgbgMIAKgFQABgBAAABQAigGAQAOAEmBWQAegFAMAMALtBAQgwAzhLAyQjoCcleAsQgUACgUACABDCeQADgIACgMADeAhQgcAAgcAAADNBmQAKgXAagJAsLC+QABAAABABQAaAQAaAHQAGACgDAVQgggWgZgZgAq3D+QAmgLAKAWQADAIACAJQAKABARACIABgBIJnleApxEiQgJgEgIgEQgdgNgYgPIAAAAQgYgCgDgPQANAIAOAJAsQC5QADACACADAABAhImrFA");
	this.shape.setTransform(86.8,50.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("AkACqQgegLgbgMIAKgFIABAAIACgBIAQgBIAAAAIAAAAQAUAAALAJIABABIgBgBQgLgJgUAAIAAAAIAAAAIgQABIgCABIAAgBIJnleIABBkImrE/QhLgQhEgYg");
	this.shape_1.setTransform(55.6,64.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AjXCTIGsk+IADFPQhZAIhSAAQiJAAh7gZg");
	this.shape_2.setTransform(65.7,70.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AowDuQkHhfgWixQgCgRAAgRIACAAQAQAdAZAbIAFAFQAZAYAfAWQADAPAYACIABAAQAYAPAcANIASAIQAbAMAdALQBFAZBKAPQDDAoDsgYIAngEQFegrDoibQBLgyAwg0QBMhSALhXQAZAYAFAkQAWCyjpCbQjoCcleArQhtANhkAAQjfAAi1hBg");
	this.shape_3.setTransform(88.8,69.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC00").s().p("AAFBjIgBhjILsCCQgwAzhKAyQjpCcleArIgnAFgABGDgQADgIACgMQgCAMgDAIgADQCoQAKgXAagKQgaAKgKAXgAFTCfIAAAAIgBgBIAAAAQgJgIgQAAIAAAAIAAAAIgNABIgBAAIgCAAIACAAIABAAIANgBIAAAAIAAAAQAQAAAJAIIAAAAIABABIAAAAgADhBiIg4AAIA4AAgAp/FcQgCgKgDgHQgKgWgmALIgbgSQADgUgGgCQgagHgagQIgBgBIgFgGQgGgIABgPQADgQgLgGQgMgGgRgFIgBgCIAAACIgKgBQgfgFARgYQAEgGADgGQAEgNgBgPQgDgZgMgWQgZgOAcgXIAAAAIAAgDIAAgBIAAgCIABAAIAAgCQAfgLAFgfQgLgJgEgMQgFgLADgOQADgVAYACIAAAAQAUgJAYgJQAegKAAgkQgDgHgBgJQgCgLADgPQACgGAEgCQARgIAHAPIAAAAIADABQAMAFAOgCQAFgPACgQQACgMAAgOQAAgGAFgEQATgOATATIAAABQAQAJAcgHQAQgEAKgVIAOgaIAJgPIATgaQARgXATALIAYANIAXAMQAcAOASgYQAPgSAMgTIAAAAQAFgTAOgFQAbgIATANIABABQAVAZAbAEQAgAGAWgPQAUgNALgYQAIgRANABIABgBQAagTASAMIAAABQALARANACQAdAGAdgEQAdgFALgdQAXABARAOQAZANAegHQAdgFAYANQAPAIAUAAQAeABAcgDQAdgCAcACQAUACAMAIQAHAFAMgCQAagGAdgDQAdgDAaAFIABAAIAUAGIAAAAQACAPAQAAIAaAAQAQgCAPgEQAggGAUAPQAXARgCAaIAAABQgJAiAggFIAWgCIARgCQAOgBAGADQlyDUlzBWIBHmjIhHGjQl4gYlGidQFGCdF4AYIpnFeIgBAAIgbgCgAllAkIAAgDQAAgTAIgNQgIANAAATIAAADgAnSAeIAXAAIgXAAQAFgqAmgPQgmAPgFAqIAAAAgAm0iMQAIgbAZAAIAAAAIAAAAIADAAIgDAAIAAAAIAAAAQgZAAgIAbgAlHixQAggPAogKQgoAKggAPgADojEQANAAAIgEIABAAIAAgBIAAABIgBAAQgIAEgNAAIgBAAIAAAAIgKAAIgDgBIADABIAKAAIAAAAIABAAgAD0kAQgggHgKgdQAKAdAgAHgAAEAAQFzhWFyjUQAMAFgPAUIgBABQgLAMAGAIQAGAJANAEIAcAHIAbAFQAOADAHAQQAJAXgPAZQgSAVASAMIANALQANAMAHANQANAWgMAOQgFAFgOALIAAgCIgBACIABAAQgMBXhMBSgAGCgqQAFgDAIgDQgIADgFADgAH1hLQALgNAUAAIABAAIAAAAIABAAIAAAAIAAAAIgBAAIAAAAIgBAAQgUAAgLANgAJLheQAEgEAIAAIAAAAIABAAIABAAIABAAIABAAIAAAAIAAAAIgBAAIgBAAIgBAAIgBAAIAAAAQgIAAgEAEgAAEAAgAAEAAg");
	this.shape_4.setTransform(86.5,43.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,175.6,102.2);


(lib.static_percent_sign = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(8,1,1).p("Ah1h1QAxgxBEAAQBGAAAxAxQAxAxAABEQAABGgxAxQgxAxhGAAQhEAAgxgxQgxgxAAhGQAAhEAxgxg");
	this.shape.setTransform(51,76.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00FF00").ss(8,1,1).p("AAikMQAABGgwAxQgxAxhFAAQhGAAgxgxQgxgxAAhGQAAhFAxgxQAxgxBGAAQBFAAAxAxQAwAxAABFgAlHG0IKPsH");
	this.shape_1.setTransform(32.8,43.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4,75.7,101.4);


(lib.static_one_fifth_fraction = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AiACOQgGgJAAgJQAAgNAKgJQALgKANAAQAOAAAKALIASATQAPAKAZAAQAlAAAZgcQAYgaAAgmQAAglgMgRQgMgSgZAAQgqAAgaAcIgVAWQgNANgPAAQgOAAgJgKQgKgJAAgMIAEgrQAIhHAAgYQAAgGgEgKQgEgKAAgGQAAgMAMgHQAKgFANAAIAPABIAPABIB0AAIATgBIATgBQANAAAJAIQAIAIAAAOQAAAkhKAAIgOAAIgMgBIhIAAQgBAPgFAjQAggQArAAQA8AAAeAsQAaAlAAA2QAABCgpAsQgrAthFAAQhLAAgjg1g");
	this.shape.setTransform(63.3,81.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("AgpC+QguAAAAgdQAAghAzAAIALABIAAjYQgVAPgGAAQgOAAgKgKQgKgKAAgNQAAgNAQgOIAcgUIAdgYQASgNARAAQAWAAAAAaQAAAdgDA1QgCA1AABgIAAA8IAQAAQAOAAAKAJQAJAJAAANQAAANgJAJQgKAJgOAAg");
	this.shape_1.setTransform(16.7,38.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FF00").ss(4,1,1).p("AlHGEIKPsH");
	this.shape_2.setTransform(38.7,59.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80.3,116.1);


(lib.static_hotdog = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AkXBLQAlAEAlAKQAjAKAfAKAhnAlQAnAHAjAOQAHADAJgCAgJgGQAkgCAlAIQAaAEAIANAC4hsQAnAHAnAGQAJABAJAEACCg4QAhADAbAL");
	this.shape.setTransform(122.8,88.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("ADylUQAKhSAugkQBUhCBbArQAmASgEA2QgDAmAGAgQAZAUANA1QAXBcAABrQgBBnhBBPQg5BEhDA5QAAABgBABQhBAfg8AWQhHAVgsApQg7A4hGAxQgbATglAIQhqAVhTgXQhWgYg5g9Qg4g9g1haQgRgNgPgRQhBhIAghpQAKgeAQgYQgGhaBIgeQALgEALgFQBNggBpAAQBmAABYgeQBdgfBBguQBIgzBVgLgAILjHQAAAEAAAEQAAACAAACAIPhbQAAAMAAAMAHfiXQACAAACAAQACAAACAAAHjBMQAAACAAACQAAACAAACAHPgfQACACABADAH7AQQADAIAKAHAkphsQAQAIANAMAhWiKQA8AEAqAUAkphsQBRgeBigBQARAAAPABQBZgsBNgfQASgHASgEQAwgJA2AQADwkrQAAgWACgTQAEAAADgBADwkrQARgDASgBQAUgBARAJAH+lTQghgbg4AiQAAAagGAZQgWBghCAwQhQA8g5ArQg6ArhdA0QhHAngTBTQgVBfhkAZQhfAXhfgRQgkgHgegNQgkgPgegXAB0jgQAyg8BKgPAGjB8QABASgIAPAGlAkQAIgBgCALAD0BnQAPAWAmAIAEeAhQADABACACAFTA8QAAACAAACQAAACAAACACTCQQACACACABAC/C8QAAACAAACQAAACAAACAAbFwQAAgIADgHQABgDAEgCACPE8QgCgHAGgEQAEgDAEgCAEDD4QACgFAHgGABtC6QgVAXA1gHAA0CmQgVAmgYArQgIAPgSAHAg4GgQAJgJAPgKAoVgKQAigzA+gfQBWgqA2AaAGbhTQgPAUgRAZ");
	this.shape_1.setTransform(118.9,104);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FE8812").s().p("AkFGdQhVgXg5g+Qg4g9g1hZQAdAXAkAPQAfAMAjAHQBgASBfgXQBkgZAVhfQAShTBIgnQBdg0A6gsICJhmQBCgxAWhfQAFgZAAgaQA4giAiAbQAZATANA1QAXBcgBBsQAABohCBNQg4BEhDA6IgCABQhBAfg8AXQhHAVgrApQg7A3hFAxQgcAUgmAHQgyAKguAAQgxAAgsgMgAhLFXQAKgJAPgKQgPAKgKAJgAALEYQgDAHAAAIQAAgIADgHQABgDAEgCQgEACgBADgAB8DzIAAgEQAAgFAFgDIAHgEIgHAEQgFADAAAFIAAAEgAgKCtQgJAQgTAHQATgHAJgQIAshRIgsBRgADwCvQACgGAHgFQgHAFgCAGgABmCCIANgBIAEAAIAAAAIAAAAIABAAIACAAIgCAAIgBAAIAAAAIAAAAIgEAAIgNABIAAAAIAAAAQgbAAAQgRQgQARAbAAIAAAAIAAAAgACsB3IAAAEIAAgEIAAgEIAAAEgAGJBTQAIgMAAgPIgBgFIABAFQAAAPgIAMgACFBKIgFgDIAFADgAEWA8QglgJgPgVQAPAVAlAJgAHQAHIAAAEIAAgEIAAgEIAAAEgAFAgIIAAAEIAAgEIAAgEIAAAEgAGYgaIABgBQABgKgGAAIgBAAIAAAAIAAAAIgBAAIABAAIAAAAIAAAAIABAAQAGAAgBAKIgBABgAEQgkIgEgDIAEADgAH1gpQgKgIgDgHQADAHAKAIgAG/hkIgDgEIADAEgAFphwIAfgsIgfAsgAH8iMIAAgYIAAAYgAHQjgIAEAAIgEAAIgEAAIAEAAgAH4kIIAAAEIAAgEIAAgIIAAAIgAnljMIAVgIQBOghBpAAQBmAABYgdQBdggBAgtQBIgzBWgLQgCATAAAWQhKAOgyA9QgTADgRAHQhMAghaArIggAAQhiAAhRAfQg3gbhVAqQg+AfgiAzQgGhaBIgeg");
	this.shape_2.setTransform(120.8,111.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ED270C").s().p("AlMGQQgkgHgegMQgkgPgegYQgRgNgPgRQhBhIAghoQAKgfARgZQAhgzA/geQBVgqA3AaQAPAIANAMQgNgMgPgIQBQgeBigBIAhABQBYgrBNggQASgHASgDQAyg9BKgOQAAgWADgUQAJhSAvgkQBUhBBaAqQAmASgEA2QgDAmAHAgQgigag4AiQAAAagGAYQgWBghCAxIiJBlQg6AshdA0QhHAogTBTQgVBehkAZQg2AOg2AAQgpAAgpgIgAj1FJIAAAAQBEgHA3gfQBeg3iKg0QAfBEhuBNgAiIAVIBCAUIhCgUQglgKglgEQAlAEAlAKgAAxgHIABAAIACAAIACAAIABgBIgBABIgCAAIgCAAIgBAAIgBAAIAAAAQgEAAgEgBIgBgBQgjgOgmgHQAmAHAjAOIABABQAEABAEAAIAAAAIABAAgAAugWQgrgVg6gEQA6AEArAVgACFhEQAaAFAIANQgIgNgagFIgCAAQgcgGgcAAIgBAAIAAAAIgKAAIgFAAIAFAAIAKAAIAAAAIABAAQAcAAAcAGIACAAgAEDhuQgbgLghgDQAhADAbALgAD5h+IgCAAIgFgCIgCAAIAAAAQgdgIgcAAIAAAAIAAAAQgRAAgQADIgCAAIgCABIACgBIACAAQAQgDARAAIAAAAIAAAAQAcAAAdAIIAAAAIACAAIAFACIACAAIAAAAgAFLijQAJABAJAEQgJgEgJgBIhOgNIBOANgAFWjMIgBAAIAAgBIgCAAIAAAAIgDgBQgMgFgOAAIAAAAIgBAAIgBAAIgBAAIgBAAQgTAAgRAEQARgEATAAIABAAIABAAIABAAIABAAIAAAAQAOAAAMAFIADABIAAAAIACAAIAAABIABAAIAAAAgAERj5IAHAAIgHAAgAHZk/QATgphDgFQAkAOAMAgg");
	this.shape_3.setTransform(115.9,94.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F87867").s().p("AlpFbQBvhNgfhEQCKA0hfA3Qg3AfhEAHgAE2lbQBDAFgTApQgNgggjgOg");
	this.shape_4.setTransform(127.5,93);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(60.9,53.1,116.2,101.8);


(lib.static_fly = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AgUAUQgOglgcgOQgMgGgMAEQglANgTAiQgVAlAgAeQAbAaApgLQAhgJAEgcQACgIgBgJQABgOAEgIgAACAKQABgJAKgGQAPghAYggQAagkAoAKQANADAHAMQATAigIAnQgGAgggANQgiANgkAHQgXAEgIgNQADgIgBgOQAAgMgKgEQgPgHgHARAAKAwQgHAZgdgO");
	this.shape.setTransform(5.6,3.7,0.373,0.373);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgTAXQACgIgBgJQABgNAEgIQAHgRAPAHQAKAEAAAMQABANgDAIQgEAQgNAAQgIAAgLgFg");
	this.shape_1.setTransform(5.4,5,0.373,0.373);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AiDBRQgggeAVglQATgiAlgNQAMgEAMAGQAcAOAOAlQgEAIgBAOQABAJgCAIQgEAcghAJQgMADgLAAQgaAAgTgSgAAKAwQADgIgBgOQAAgMgKgEQABgJAKgGQAPghAYggQAagkAoAKQANADAHAMQATAigIAnQgGAgggANQgiANgkAHIgKABQgPAAgGgKg");
	this.shape_2.setTransform(5.6,3.7,0.373,0.373);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,13.3,9.4);


(lib.sample_team = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgbAzQgPgFAAgMQAAgJAMAAQAFAAAIADQAJADAEAAQATgBAAgHQAAgGgNgFIgagMQgNgKAAgNQAAgUAVgHQAMgEAYAAQAJAAAFACQAHAEgBAJQAAASgJAAQgKgBgBgHIgJgBQgWAAAAAGQAAAEANAHQATAIAHAFQAPAKAAANQgBAQgPAJQgNAHgRAAQgNAAgLgEg");
	this.shape.setTransform(249.6,19.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgMBHQgDgEAAgFIAAgSIgBgSIABgWIABgVQAAgFAEgEQADgEAHAAQAFAAADAEQAEAEAAAFIgBAVIgBAWIABASIAAASQgBAFgDAEQgEAEgFAAQgGAAgEgEgAgIgxQgEgEgBgGQABgGAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAGQAAAGgFAEQgEAEgGAAQgFAAgFgEg");
	this.shape_1.setTransform(242.3,16.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgcBhQgDgEAAgFQgBgGAHgFIAKgHQAUgVAAguQAAgRgFgTQgGgUgJgMIgKgKQgGgGAAgFQAAgEADgFQAEgDAFAAQAEgBAFAEQATANANAfQALAbgBAZQAABJgqAXQgFACgEABQgFAAgEgDg");
	this.shape_2.setTransform(227.3,18.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgmAzQgDgEAAgFIAAg/IABgJIAAgJQAAgGADgDQADgEAGAAQALAAACALQARgNAUAAQAUAAAAAaIAAAHQgBAPgNAAQgMAAAAgNIgBgKQgUAEgKATIAAAwQAAAFgEAEQgDAEgHAAQgFAAgEgEg");
	this.shape_3.setTransform(218.7,19.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AAXAtQgIAEgIACQgGADgEAAQgYAAgLgNQgMgNAAgZQAAgWASgRQAQgRAYAAQAJAAANAFQAOAHAAAIQAAAEgCACIgBAKIgBAOQAAARACAIIAFAKIAEAKQAAAFgEADQgEAEgFAAQgFAAgKgJgAgNgTQgKAKAAANQAAANAEAHQAGAGAJAAQAFAAAFgCQAFgCAFgEQgCgWAAgLIAAgHIABgKIgDgBIgDAAQgMAAgKAKg");
	this.shape_4.setTransform(208.3,19.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgIBNQgEgEgBgGIAAiGQABgGAEgDQAEgDAFAAQAFAAAEADQADADAAAGIAACBQAAASgNAAQgFAAgDgDg");
	this.shape_5.setTransform(199.8,16.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AAUAwQgNAFgMAAQgOAAgKgGQgKgHgCgNQgEgYAAgSQAAgNADgQQACgLALAAQAGAAAEAEQAEADAAAGIgCANIgBAOIABAXQABAKACAHIAEABIAFABQAKAAANgDIAAgRIgBgQQAAgUACgOQACgMALAAQAGAAAEAEQAEADAAAGIgCAiIAAATIAAAUIABAGIAAAGQAAAFgEAEQgEAEgGAAQgIAAgDgIg");
	this.shape_6.setTransform(191.8,19.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgxA/QAAgGADgDQADgEAGAAIANACQAIACAGAAQAOAAAHgJQAGgIABgTQgFAFgGACQgGACgHABQgTAAgMgNQgMgNAAgSQAAgbAQgRQARgQAbgBQAKAAAGACQAHADAEAEQAMACAAANQAAAHgCAMQgEAWgBAYQgBAggJAOQgNAUgggBQglAAAAgOgAgOgrQgJAKAAAPQAAAMAFAGQAEAEAJAAQAHABAIgJQAIgIABgJIAEgeIgGgCIgHgBQgPAAgJALg");
	this.shape_7.setTransform(181.4,21.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AAUAtIgCgUIgCgVIAAgHIAAgJIAAgDIABgFQAAgIgEAAQgIAAgIALQgHAKgFAQIgBAJIAAAJIgBAIIAAAJQgBAFgEAEQgDAEgGAAQgGAAgEgEQgDgEAAgFIgCgJIAAgIIACgbIABgZIAAgJIgBgJQAAgGAEgDQAEgEAGAAQANAAABAPIAAACQAOgPAOAAQATAAAHAQQAFAKAAAVIAAAGIAAAGQAAAHACAMQACAMAAAIQAAAFgEAEQgEAEgGAAQgMAAgBgMg");
	this.shape_8.setTransform(171.1,19.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgMBHQgDgEAAgFIAAgSIgBgSIABgWIABgVQAAgFAEgEQADgEAHAAQAEAAAEAEQAEAEAAAFIgBAVIgBAWIABASIAAASQgBAFgDAEQgEAEgFAAQgFAAgFgEgAgIgxQgFgEAAgGQAAgGAFgEQAFgFAEAAQAHAAAEAFQAFAEAAAGQAAAGgFAEQgEAEgHAAQgEAAgFgEg");
	this.shape_9.setTransform(163.2,16.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgbAzQgOgFAAgMQAAgJALAAQAFAAAIADQAJADAFAAQASgBAAgHQAAgGgNgFIgZgMQgOgKAAgNQAAgUAUgHQANgEAYAAQAJAAAFACQAGAEABAJQAAASgKAAQgJgBgCgHIgIgBQgXAAAAAGQAAAEANAHQAUAIAHAFQAOAKgBANQAAAQgPAJQgMAHgSAAQgNAAgLgEg");
	this.shape_10.setTransform(155.2,19.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AALBhQgqgXAAhJQgBgZALgbQANgfATgNQAFgEAEABQAFAAAEADQADAFABAEQAAAFgIAIIgJAIQgKAMgGAUQgDATAAARQAAAUADARQAGAXAPAKQAMAJAAAGQgBAFgDAEQgEADgFAAQgEgBgFgCg");
	this.shape_11.setTransform(147.1,18.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgIA5QgDgEAAgGQAAgLgDgVQgCgVAAgLIgBgKQgMAGgLAQIgCACIAAAeIAAAHIgBAHQAAAFgEADQgEADgFAAQgJAAgDgHQgCgFAAgLIAAgjIAAgOIgBgPQAAgIAEgHQADgJAHAAQAGAAAEAEQAEAEAAAFIAAAJQAOgRANAAQAPAAAHALQAFgFAIgDQAHgCAIAAQATAAAHATQACAEACAWQADAPAFAlQAAAFgEAEQgEAEgGAAQgLAAgCgLIgEgdIgDgbQgDgSgEAAQgCAAgIAFIgMAHQAAALADAUQACAWAAAKQAAAGgDAEQgEADgGAAQgFAAgEgDg");
	this.shape_12.setTransform(126.9,19.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAYAtQgKAEgGACQgHADgEAAQgYAAgLgNQgMgNAAgZQAAgWARgRQASgRAXAAQAJAAAMAFQAPAHAAAIQAAAEgCACIgBAKIgBAOQAAARADAIIAEAKIAEAKQAAAFgEADQgEAEgGAAQgEAAgJgJgAgNgTQgKAKAAANQAAANAFAHQAEAGAKAAQAFAAAGgCQAFgCAFgEQgDgWAAgLIAAgHIACgKIgEgBIgDAAQgMAAgKAKg");
	this.shape_13.setTransform(113.5,19.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AggAqQgRgMAAgXQAAgXANgRQAOgTAYAAQARAAAMAFQAOAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAGADQAHADAIAAQANAAAJgGQAIgFAFAAQAKAAAAAKQAAALgRAHQgNAGgPAAQgXAAgOgLgAgMgXQgHAGgEANIAWgKQAMgGAIgFQgGgEgLAAQgIAAgGAGg");
	this.shape_14.setTransform(102.1,19.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgIBEQgFgEABgFIAAgKIABgLIgCgyIgTgBQgMgCAAgLQAAgFAEgEQAEgEAFAAIARABIgBgKIAAgKQAAgFAEgEQAEgDAGAAQANAAAAAYIAAAIIAKgBQALAAAEABQAIADAAAKQAAAFgEAEQgEADgFAAIgGAAIgEAAIgJABIABAzIABAEIAAAGQgBAWgOAAQgEAAgEgDg");
	this.shape_15.setTransform(92,17.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgNAaQAAgFAEgEQAFgDAEAAQAPAAAAAWQAAAGgEAEQgEADgGAAQgOAAAAgXgAgJgTQgEgEAAgGIgBgDIAAgDQAAgGAEgDQAEgEAGAAQANAAAAATQAAAGgDAEQgEADgGAAQgFAAgEgDg");
	this.shape_16.setTransform(74.4,17.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AggAqQgRgMAAgXQAAgXANgRQAOgTAYAAQARAAAMAFQAOAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAGADQAHADAIAAQANAAAJgGQAIgFAFAAQAKAAAAAKQAAALgRAHQgNAGgPAAQgWAAgPgLgAgMgXQgHAGgEANIAWgKQAMgGAIgFQgHgEgKAAQgIAAgGAGg");
	this.shape_17.setTransform(64.2,19.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgJBNQgDgEAAgGIAAiGQAAgGADgDQAFgDAEAAQAGAAAEADQAEADAAAGIAACBQAAASgOAAQgFAAgEgDg");
	this.shape_18.setTransform(55.9,16.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgoBOQgDgDAAgGIAAgkIAAgmQgBgVgBgPIgBgTQAAgJADgGQAFgGAGAAQAGAAAEAEQAEADAAAGIAAABQAGgEAGgCQAGgCAHAAQAWABAKASQAJAPgBAWQAAAVgMAOQgNAQgWAAQgHAAgJgCIAAAnQAAAGgFADQgEAEgFAAQgGAAgEgEgAgFguQgGADgGAGIABAoQAJACAHAAQAKAAAGgGQAEgHAAgLQABgMgCgGQgCgMgKABQgGAAgGACg");
	this.shape_19.setTransform(48,21.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgIA5QgDgEAAgGQAAgLgDgVQgCgVAAgLIgBgKQgMAGgLAQIgCACIAAAeIAAAHIgBAHQAAAFgEADQgEADgFAAQgJAAgDgHQgCgFAAgLIAAgjIAAgOIgBgPQAAgIAEgHQADgJAHAAQAGAAAEAEQAEAEAAAFIAAAJQAOgRANAAQAPAAAHALQAFgFAIgDQAHgCAIAAQATAAAHATQACAEACAWQADAPAFAlQAAAFgEAEQgEAEgGAAQgLAAgCgLIgEgdIgDgbQgDgSgEAAQgCAAgIAFIgMAHQAAALADAUQACAWAAAKQAAAGgDAEQgEADgGAAQgFAAgEgDg");
	this.shape_20.setTransform(34.9,19.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAYAtQgJAEgIACQgGADgEAAQgYAAgLgNQgMgNAAgZQAAgWASgRQAQgRAYAAQAJAAANAFQAOAHAAAIQAAAEgCACIgBAKIgBAOQAAARACAIIAFAKIAEAKQAAAFgEADQgEAEgFAAQgFAAgJgJgAgNgTQgKAKAAANQAAANAEAHQAGAGAJAAQAFAAAFgCQAFgCAFgEQgCgWAAgLIAAgHIABgKIgDgBIgDAAQgMAAgKAKg");
	this.shape_21.setTransform(21.5,19.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("Ag0BAQgMgKAAgMQAAgGAEgEQADgEAHAAQAJAAAEAJQAGAMATAAQAQAAAQgHQAQgIAAgJQAAgMgKgEQgHgDgVAAQgRgBgOgFQgRgIAAgPQAAgTAUgQQAUgQAXAAQAKAAAOAFQARAFAAAHQAAAGgDADQgEAFgGAAIgOgCIgOgCQgNAAgJAGQgNAGAAAHQABAEAEACQADADAHABIAYABQAWACAMAKQAOALAAAVQAAAZgdANQgVAKgcAAQgYAAgPgLg");
	this.shape_22.setTransform(9,17.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0000FF").s().p("AgNAaQAAgFAEgEQAFgDAEAAQAPAAAAAWQAAAGgEAEQgEADgGAAQgOAAAAgXgAgJgTQgEgEAAgGIgBgDIAAgDQAAgGAEgDQAEgEAGAAQANAAAAATQAAAGgDAEQgEADgGAAQgFAAgEgDg");
	this.shape_23.setTransform(74.4,17.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0000FF").s().p("AggAqQgRgMAAgXQAAgXANgRQAOgTAYAAQARAAAMAFQAOAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAGADQAHADAIAAQANAAAJgGQAIgFAFAAQAKAAAAAKQAAALgRAHQgNAGgPAAQgWAAgPgLgAgMgXQgHAGgEANIAWgKQAMgGAIgFQgHgEgKAAQgIAAgGAGg");
	this.shape_24.setTransform(64.2,19.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0000FF").s().p("AgJBNQgDgEAAgGIAAiGQAAgGADgDQAFgDAEAAQAGAAAEADQAEADAAAGIAACBQAAASgOAAQgFAAgEgDg");
	this.shape_25.setTransform(55.9,16.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0000FF").s().p("AgoBOQgDgDAAgGIAAgkIAAgmQgBgVgBgPIgBgTQAAgJADgGQAFgGAGAAQAGAAAEAEQAEADAAAGIAAABQAGgEAGgCQAGgCAHAAQAWABAKASQAJAPgBAWQAAAVgMAOQgNAQgWAAQgHAAgJgCIAAAnQAAAGgFADQgEAEgFAAQgGAAgEgEgAgFguQgGADgGAGIABAoQAJACAHAAQAKAAAGgGQAEgHAAgLQABgMgCgGQgCgMgKABQgGAAgGACg");
	this.shape_26.setTransform(48,21.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0000FF").s().p("AgIA5QgDgEAAgGQAAgLgDgVQgCgVAAgLIgBgKQgMAGgLAQIgCACIAAAeIAAAHIgBAHQAAAFgEADQgEADgFAAQgJAAgDgHQgCgFAAgLIAAgjIAAgOIgBgPQAAgIAEgHQADgJAHAAQAGAAAEAEQAEAEAAAFIAAAJQAOgRANAAQAPAAAHALQAFgFAIgDQAHgCAIAAQATAAAHATQACAEACAWQADAPAFAlQAAAFgEAEQgEAEgGAAQgLAAgCgLIgEgdIgDgbQgDgSgEAAQgCAAgIAFIgMAHQAAALADAUQACAWAAAKQAAAGgDAEQgEADgGAAQgFAAgEgDg");
	this.shape_27.setTransform(34.9,19.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0000FF").s().p("AAYAtQgJAEgIACQgGADgEAAQgYAAgLgNQgMgNAAgZQAAgWASgRQAQgRAYAAQAJAAANAFQAOAHAAAIQAAAEgCACIgBAKIgBAOQAAARACAIIAFAKIAEAKQAAAFgEADQgEAEgFAAQgFAAgJgJgAgNgTQgKAKAAANQAAANAEAHQAGAGAJAAQAFAAAFgCQAFgCAFgEQgCgWAAgLIAAgHIABgKIgDgBIgDAAQgMAAgKAKg");
	this.shape_28.setTransform(21.5,19.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0000FF").s().p("Ag0BAQgMgKAAgMQAAgGAEgEQADgEAHAAQAJAAAEAJQAGAMATAAQAQAAAQgHQAQgIAAgJQAAgMgKgEQgHgDgVAAQgRgBgOgFQgRgIAAgPQAAgTAUgQQAUgQAXAAQAKAAAOAFQARAFAAAHQAAAGgDADQgEAFgGAAIgOgCIgOgCQgNAAgJAGQgNAGAAAHQABAEAEACQADADAHABIAYABQAWACAMAKQAOALAAAVQAAAZgdANQgVAKgcAAQgYAAgPgLg");
	this.shape_29.setTransform(9,17.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0000FF").s().p("AAYAtQgKAEgGACQgHADgEAAQgYAAgLgNQgMgNAAgZQAAgWARgRQASgRAXAAQAJAAAMAFQAPAHAAAIQAAAEgCACIgBAKIgBAOQAAARADAIIAEAKIAEAKQAAAFgEADQgEAEgGAAQgEAAgJgJgAgNgTQgKAKAAANQAAANAFAHQAEAGAKAAQAFAAAGgCQAFgCAFgEQgDgWAAgLIAAgHIACgKIgEgBIgDAAQgMAAgKAKg");
	this.shape_30.setTransform(113.5,19.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0000FF").s().p("AggAqQgRgMAAgXQAAgXANgRQAOgTAYAAQARAAAMAFQAOAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAGADQAHADAIAAQANAAAJgGQAIgFAFAAQAKAAAAAKQAAALgRAHQgNAGgPAAQgXAAgOgLgAgMgXQgHAGgEANIAWgKQAMgGAIgFQgGgEgLAAQgIAAgGAGg");
	this.shape_31.setTransform(102.1,19.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0000FF").s().p("AgIBEQgFgEABgFIAAgKIABgLIgCgyIgTgBQgMgCAAgLQAAgFAEgEQAEgEAFAAIARABIgBgKIAAgKQAAgFAEgEQAEgDAGAAQANAAAAAYIAAAIIAKgBQALAAAEABQAIADAAAKQAAAFgEAEQgEADgFAAIgGAAIgEAAIgJABIABAzIABAEIAAAGQgBAWgOAAQgEAAgEgDg");
	this.shape_32.setTransform(92,17.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:126.9}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27,p:{x:34.9}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:126.9}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},13).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_12,p:{x:34.9}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_27,p:{x:126.9}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27,p:{x:34.9}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:126.9}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_12,p:{x:34.9}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_27,p:{x:126.9}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27,p:{x:34.9}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:126.9}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_12,p:{x:34.9}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_27,p:{x:126.9}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,256.8,31.9);


(lib.sample_hotdogs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AggAqQgRgMAAgXQAAgXANgRQAPgTAXAAQARAAALAFQAPAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAGADQAHADAHAAQAOAAAJgGQAIgFAFAAQAKAAAAAKQAAALgRAHQgNAGgQAAQgWAAgOgLgAgNgXQgGAGgEANIAWgKQANgGAHgFQgGgEgLAAQgIAAgHAGg");
	this.shape.setTransform(271.9,19.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgmAzQgDgEAAgFIAAg/IAAgJIAAgJQAAgGAEgDQADgEAGAAQALAAACALQARgNAUAAQAUAAAAAaIAAAHQgBAPgNAAQgMAAAAgNIAAgKQgWAEgJATIAAAwQAAAFgDAEQgFAEgFAAQgHAAgDgEg");
	this.shape_1.setTransform(261.9,19.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AAXAtQgIAEgHACQgHADgEAAQgYAAgLgNQgMgNAAgZQAAgWARgRQARgRAYAAQAJAAAMAFQAPAHAAAIQAAAEgCACIgCAKIAAAOQAAARADAIIAEAKIAEAKQAAAFgEADQgEAEgGAAQgEAAgKgJgAgNgTQgKAKAAANQAAANAFAHQAEAGAKAAQAFAAAGgCQAEgCAGgEQgEgWAAgLIABgHIACgKIgEgBIgDAAQgMAAgKAKg");
	this.shape_2.setTransform(251.4,19.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgbBhQgFgEAAgFQAAgGAHgFIAKgHQAUgVAAguQAAgRgFgTQgFgUgKgMIgKgKQgGgGgBgFQAAgEAFgFQADgDAGAAQADgBAFAEQAUANALAfQALAbAAAZQAABJgqAXQgFACgEABQgFAAgDgDg");
	this.shape_3.setTransform(233.8,18.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgJBNQgDgEAAgGIAAiGQAAgGADgDQAEgDAFAAQAGAAAEADQAEADAAAGIAACBQAAASgOAAQgFAAgEgDg");
	this.shape_4.setTransform(227,16.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AAYAtQgJAEgIACQgGADgEAAQgYAAgLgNQgMgNAAgZQAAgWARgRQASgRAXAAQAJAAAMAFQAPAHAAAIQAAAEgCACIgBAKIgBAOQAAARADAIIAEAKIAEAKQAAAFgEADQgEAEgGAAQgEAAgJgJgAgNgTQgKAKAAANQAAANAEAHQAFAGAKAAQAFAAAGgCQAFgCAFgEQgDgWAAgLIAAgHIACgKIgEgBIgDAAQgMAAgKAKg");
	this.shape_5.setTransform(218.9,19.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgmAzQgDgEAAgFIAAg/IABgJIAAgJQgBgGAEgDQADgEAGAAQALAAACALQAQgNAWAAQATAAAAAaIAAAHQgBAPgNAAQgMAAAAgNIgBgKQgVAEgJATIAAAwQAAAFgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_6.setTransform(208.6,19.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AAUAwQgNAFgMAAQgOAAgKgGQgKgHgCgNQgEgYAAgSQAAgNADgQQACgLALAAQAGAAAEAEQAEADAAAGIgCANIgBAOIABAXQABAKACAHIAEABIAFABQAKAAANgDIAAgRIgBgQQAAgUACgOQACgMALAAQAGAAAEAEQAEADAAAGIgCAiIAAATIAAAUIABAGIAAAGQAAAFgEAEQgEAEgGAAQgIAAgDgIg");
	this.shape_7.setTransform(198.3,19.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgJBNQgEgEABgGIAAiGQgBgGAEgDQAFgDAFAAQAFAAAEADQADADAAAGIAACBQABASgOAAQgFAAgEgDg");
	this.shape_8.setTransform(190.4,16.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgoBOQgEgDAAgGIAAgkIAAgmQAAgVgBgPIgCgTQAAgJAEgGQAFgGAHAAQAFAAAEAEQADADAAAGIAAABQAHgEAHgCQAFgCAHAAQAWABALASQAHAPABAWQAAAVgNAOQgNAQgWAAQgIAAgJgCIAAAnQAAAGgDADQgEAEgGAAQgGAAgEgEgAgEguQgHADgHAGIABAoQAJACAIAAQAKAAAGgGQAEgHABgLQAAgMgCgGQgDgMgJABQgHAAgEACg");
	this.shape_9.setTransform(182.5,21.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AALBhQgrgXAAhJQAAgZAMgbQAMgfATgNQAFgEADABQAGAAAEADQAEAFAAAEQgBAFgGAIIgJAIQgLAMgGAUQgDATgBARQAAAUAEARQAHAXANAKQANAJAAAGQAAAFgEAEQgEADgFAAQgEgBgFgCg");
	this.shape_10.setTransform(173.7,18.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgbAzQgOgFAAgMQAAgJALAAQAFAAAIADQAJADAFAAQASgBAAgHQAAgGgNgFIgZgMQgOgKAAgNQAAgUAUgHQANgEAYAAQAJAAAFACQAGAEABAJQAAASgKAAQgJgBgCgHIgIgBQgXAAAAAGQAAAEANAHQAUAIAHAFQAOAKgBANQAAAQgPAJQgMAHgSAAQgNAAgLgEg");
	this.shape_11.setTransform(156.1,19.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgxA/QAAgGADgDQADgEAGAAIANACQAIACAGAAQAOAAAHgJQAGgIABgTQgFAFgGACQgGACgHABQgTAAgMgNQgMgNAAgSQAAgbAQgRQARgQAbgBQAKAAAGACQAHADAEAEQAMACAAANQAAAHgCAMQgEAWgBAYQgBAggJAOQgNAUgggBQglAAAAgOgAgOgrQgJAKAAAPQAAAMAFAGQAEAEAJAAQAHABAIgJQAIgIABgJIAEgeIgGgCIgHgBQgPAAgJALg");
	this.shape_12.setTransform(146,21.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgfApQgOgNgBgXQgBgVANgRQAPgUAZAAQAUAAALAQQAKAOAAAVQAAAWgMAQQgNASgWAAQgSAAgNgNgAgNgQQgGAJAAAMQAAAMAHAGQAFAFAHAAQAHAAAHgGQAHgHAAgLQACgfgSAAQgLAAgHALg");
	this.shape_13.setTransform(135.4,19.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAbBKQgHADgHACIgOABQgVAAgPgOQgPgOAAgXQAAgZAPgQQAPgQAXAAQAHAAAGACQAGABAEADQABghACgNQACgLALAAQAGAAADADQADAFAAAEIgBArQgDAbAAAPQAAAjADALIAAADQAAAGgFADQgDAEgGAAQgGAAgEgGgAgTAEQgIAJAAAQQABALAHAHQAIAIAKAAQAHAAAEgCIAJgGIADgDIAAgkQgDgGgFgCQgGgDgHAAQgNAAgHAHg");
	this.shape_14.setTransform(124.4,16.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgIBEQgEgEgBgFIABgKIAAgLIgCgyIgSgBQgMgCAAgLQAAgFADgEQAEgEAGAAIARABIAAgKIgBgKQAAgFAEgEQAEgDAFAAQAOAAAAAYIAAAIIAJgBQAMAAAEABQAIADAAAKQAAAFgEAEQgEADgGAAIgEAAIgGAAIgJABIACAzIAAAEIAAAGQABAWgOAAQgFAAgEgDg");
	this.shape_15.setTransform(114,17.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgfApQgOgNgBgXQgBgVANgRQAPgUAZAAQAUAAALAQQAKAOAAAVQAAAWgMAQQgNASgWAAQgSAAgNgNgAgNgQQgGAJAAAMQAAAMAHAGQAFAFAHAAQAHAAAHgGQAHgHAAgLQACgfgSAAQgLAAgHALg");
	this.shape_16.setTransform(103.9,19.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAXBIQgDgIgCgPIgBgWIAAgIIAAgHIAAgJQgBgEgEAAQgLAAgIAJQgEAFgIAOQAAAjgDAIQgEAIgJAAQgFAAgEgEQgEgEAAgFIABgFIABgbIAAhAIAAgDIABgQIgBgJIgBgIQAAgGAEgEQAEgDAGAAQAJAAAEAKQABAGAAAMIAAAUIgBATQAHgHAJgEQAHgDAJAAQARAAAHAJQAFAHACAOIABAYIACATIADATIAAAEQAAAFgEAEQgEADgFAAQgKAAgDgJg");
	this.shape_17.setTransform(93.2,16.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgNAaQAAgFAEgEQAFgDAEAAQAPAAAAAWQAAAGgEAEQgEADgGAAQgOAAAAgXgAgJgTQgEgEAAgGIgBgDIAAgDQAAgGAEgDQAEgEAGAAQANAAAAATQAAAGgDAEQgEADgGAAQgFAAgEgDg");
	this.shape_18.setTransform(74.4,17.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AggAqQgRgMAAgXQAAgXANgRQAOgTAYAAQARAAAMAFQAOAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAGADQAHADAIAAQANAAAJgGQAIgFAFAAQAKAAAAAKQAAALgRAHQgNAGgPAAQgWAAgPgLgAgMgXQgHAGgEANIAWgKQAMgGAIgFQgHgEgKAAQgIAAgGAGg");
	this.shape_19.setTransform(64.2,19.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgJBNQgDgEAAgGIAAiGQAAgGADgDQAFgDAEAAQAGAAAEADQAEADAAAGIAACBQAAASgOAAQgFAAgEgDg");
	this.shape_20.setTransform(55.9,16.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgoBOQgDgDAAgGIAAgkIAAgmQgBgVgBgPIgBgTQAAgJADgGQAFgGAGAAQAGAAAEAEQAEADAAAGIAAABQAGgEAGgCQAGgCAHAAQAWABAKASQAJAPgBAWQAAAVgMAOQgNAQgWAAQgHAAgJgCIAAAnQAAAGgFADQgEAEgFAAQgGAAgEgEgAgFguQgGADgGAGIABAoQAJACAHAAQAKAAAGgGQAEgHAAgLQABgMgCgGQgCgMgKABQgGAAgGACg");
	this.shape_21.setTransform(48,21.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgIA5QgDgEAAgGQAAgLgDgVQgCgVAAgLIgBgKQgMAGgLAQIgCACIAAAeIAAAHIgBAHQAAAFgEADQgEADgFAAQgJAAgDgHQgCgFAAgLIAAgjIAAgOIgBgPQAAgIAEgHQADgJAHAAQAGAAAEAEQAEAEAAAFIAAAJQAOgRANAAQAPAAAHALQAFgFAIgDQAHgCAIAAQATAAAHATQACAEACAWQADAPAFAlQAAAFgEAEQgEAEgGAAQgLAAgCgLIgEgdIgDgbQgDgSgEAAQgCAAgIAFIgMAHQAAALADAUQACAWAAAKQAAAGgDAEQgEADgGAAQgFAAgEgDg");
	this.shape_22.setTransform(34.9,19.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAYAtQgJAEgIACQgGADgEAAQgYAAgLgNQgMgNAAgZQAAgWASgRQAQgRAYAAQAJAAANAFQAOAHAAAIQAAAEgCACIgBAKIgBAOQAAARACAIIAFAKIAEAKQAAAFgEADQgEAEgFAAQgFAAgJgJgAgNgTQgKAKAAANQAAANAEAHQAGAGAJAAQAFAAAFgCQAFgCAFgEQgCgWAAgLIAAgHIABgKIgDgBIgDAAQgMAAgKAKg");
	this.shape_23.setTransform(21.5,19.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("Ag0BAQgMgKAAgMQAAgGAEgEQADgEAHAAQAJAAAEAJQAGAMATAAQAQAAAQgHQAQgIAAgJQAAgMgKgEQgHgDgVAAQgRgBgOgFQgRgIAAgPQAAgTAUgQQAUgQAXAAQAKAAAOAFQARAFAAAHQAAAGgDADQgEAFgGAAIgOgCIgOgCQgNAAgJAGQgNAGAAAHQABAEAEACQADADAHABIAYABQAWACAMAKQAOALAAAVQAAAZgdANQgVAKgcAAQgYAAgPgLg");
	this.shape_24.setTransform(9,17.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0000FF").s().p("AgNAaQAAgFAEgEQAFgDAEAAQAPAAAAAWQAAAGgEAEQgEADgGAAQgOAAAAgXgAgJgTQgEgEAAgGIgBgDIAAgDQAAgGAEgDQAEgEAGAAQANAAAAATQAAAGgDAEQgEADgGAAQgFAAgEgDg");
	this.shape_25.setTransform(74.4,17.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0000FF").s().p("AggAqQgRgMAAgXQAAgXANgRQAOgTAYAAQARAAAMAFQAOAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAGADQAHADAIAAQANAAAJgGQAIgFAFAAQAKAAAAAKQAAALgRAHQgNAGgPAAQgWAAgPgLgAgMgXQgHAGgEANIAWgKQAMgGAIgFQgHgEgKAAQgIAAgGAGg");
	this.shape_26.setTransform(64.2,19.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0000FF").s().p("AgJBNQgDgEAAgGIAAiGQAAgGADgDQAFgDAEAAQAGAAAEADQAEADAAAGIAACBQAAASgOAAQgFAAgEgDg");
	this.shape_27.setTransform(55.9,16.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0000FF").s().p("AgoBOQgDgDAAgGIAAgkIAAgmQgBgVgBgPIgBgTQAAgJADgGQAFgGAGAAQAGAAAEAEQAEADAAAGIAAABQAGgEAGgCQAGgCAHAAQAWABAKASQAJAPgBAWQAAAVgMAOQgNAQgWAAQgHAAgJgCIAAAnQAAAGgFADQgEAEgFAAQgGAAgEgEgAgFguQgGADgGAGIABAoQAJACAHAAQAKAAAGgGQAEgHAAgLQABgMgCgGQgCgMgKABQgGAAgGACg");
	this.shape_28.setTransform(48,21.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0000FF").s().p("AgIA5QgDgEAAgGQAAgLgDgVQgCgVAAgLIgBgKQgMAGgLAQIgCACIAAAeIAAAHIgBAHQAAAFgEADQgEADgFAAQgJAAgDgHQgCgFAAgLIAAgjIAAgOIgBgPQAAgIAEgHQADgJAHAAQAGAAAEAEQAEAEAAAFIAAAJQAOgRANAAQAPAAAHALQAFgFAIgDQAHgCAIAAQATAAAHATQACAEACAWQADAPAFAlQAAAFgEAEQgEAEgGAAQgLAAgCgLIgEgdIgDgbQgDgSgEAAQgCAAgIAFIgMAHQAAALADAUQACAWAAAKQAAAGgDAEQgEADgGAAQgFAAgEgDg");
	this.shape_29.setTransform(34.9,19.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0000FF").s().p("AAYAtQgJAEgIACQgGADgEAAQgYAAgLgNQgMgNAAgZQAAgWASgRQAQgRAYAAQAJAAANAFQAOAHAAAIQAAAEgCACIgBAKIgBAOQAAARACAIIAFAKIAEAKQAAAFgEADQgEAEgFAAQgFAAgJgJgAgNgTQgKAKAAANQAAANAEAHQAGAGAJAAQAFAAAFgCQAFgCAFgEQgCgWAAgLIAAgHIABgKIgDgBIgDAAQgMAAgKAKg");
	this.shape_30.setTransform(21.5,19.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0000FF").s().p("Ag0BAQgMgKAAgMQAAgGAEgEQADgEAHAAQAJAAAEAJQAGAMATAAQAQAAAQgHQAQgIAAgJQAAgMgKgEQgHgDgVAAQgRgBgOgFQgRgIAAgPQAAgTAUgQQAUgQAXAAQAKAAAOAFQARAFAAAHQAAAGgDADQgEAFgGAAIgOgCIgOgCQgNAAgJAGQgNAGAAAHQABAEAEACQADADAHABIAYABQAWACAMAKQAOALAAAVQAAAZgdANQgVAKgcAAQgYAAgPgLg");
	this.shape_31.setTransform(9,17.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0000FF").s().p("AgbAzQgOgFAAgMQAAgJALAAQAFAAAIADQAJADAFAAQASgBAAgHQAAgGgNgFIgZgMQgOgKAAgNQAAgUAUgHQANgEAYAAQAJAAAFACQAGAEABAJQAAASgKAAQgJgBgCgHIgIgBQgXAAAAAGQAAAEANAHQAUAIAHAFQAOAKgBANQAAAQgPAJQgMAHgSAAQgNAAgLgEg");
	this.shape_32.setTransform(156.1,19.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0000FF").s().p("AgxA/QAAgGADgDQADgEAGAAIANACQAIACAGAAQAOAAAHgJQAGgIABgTQgFAFgGACQgGACgHABQgTAAgMgNQgMgNAAgSQAAgbAQgRQARgQAbgBQAKAAAGACQAHADAEAEQAMACAAANQAAAHgCAMQgEAWgBAYQgBAggJAOQgNAUgggBQglAAAAgOgAgOgrQgJAKAAAPQAAAMAFAGQAEAEAJAAQAHABAIgJQAIgIABgJIAEgeIgGgCIgHgBQgPAAgJALg");
	this.shape_33.setTransform(146,21.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0000FF").s().p("AgfApQgOgNgBgXQgBgVANgRQAPgUAZAAQAUAAALAQQAKAOAAAVQAAAWgMAQQgNASgWAAQgSAAgNgNgAgNgQQgGAJAAAMQAAAMAHAGQAFAFAHAAQAHAAAHgGQAHgHAAgLQACgfgSAAQgLAAgHALg");
	this.shape_34.setTransform(135.4,19.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0000FF").s().p("AAbBKQgHADgHACIgOABQgVAAgPgOQgPgOAAgXQAAgZAPgQQAPgQAXAAQAHAAAGACQAGABAEADQABghACgNQACgLALAAQAGAAADADQADAFAAAEIgBArQgDAbAAAPQAAAjADALIAAADQAAAGgFADQgDAEgGAAQgGAAgEgGgAgTAEQgIAJAAAQQABALAHAHQAIAIAKAAQAHAAAEgCIAJgGIADgDIAAgkQgDgGgFgCQgGgDgHAAQgNAAgHAHg");
	this.shape_35.setTransform(124.4,16.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0000FF").s().p("AgIBEQgEgEgBgFIABgKIAAgLIgCgyIgSgBQgMgCAAgLQAAgFADgEQAEgEAGAAIARABIAAgKIgBgKQAAgFAEgEQAEgDAFAAQAOAAAAAYIAAAIIAJgBQAMAAAEABQAIADAAAKQAAAFgEAEQgEADgGAAIgEAAIgGAAIgJABIACAzIAAAEIAAAGQABAWgOAAQgFAAgEgDg");
	this.shape_36.setTransform(114,17.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0000FF").s().p("AgfApQgOgNgBgXQgBgVANgRQAPgUAZAAQAUAAALAQQAKAOAAAVQAAAWgMAQQgNASgWAAQgSAAgNgNgAgNgQQgGAJAAAMQAAAMAHAGQAFAFAHAAQAHAAAHgGQAHgHAAgLQACgfgSAAQgLAAgHALg");
	this.shape_37.setTransform(103.9,19.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0000FF").s().p("AAXBIQgDgIgCgPIgBgWIAAgIIAAgHIAAgJQgBgEgEAAQgLAAgIAJQgEAFgIAOQAAAjgDAIQgEAIgJAAQgFAAgEgEQgEgEAAgFIABgFIABgbIAAhAIAAgDIABgQIgBgJIgBgIQAAgGAEgEQAEgDAGAAQAJAAAEAKQABAGAAAMIAAAUIgBATQAHgHAJgEQAHgDAJAAQARAAAHAJQAFAHACAOIABAYIACATIADATIAAAEQAAAFgEAEQgEADgFAAQgKAAgDgJg");
	this.shape_38.setTransform(93.2,16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},13).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,288.5,31.9);


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


(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("EAAABBBQ7cgBzazaQrbraksuNQgUg7gSg9Qg0iwgli4QhUmmAAnJQAA7dTazaQI1o1Kgk0IAAAsQqPExopIpQzPTOAAbMQAAHJBVGmQAlC4A1CwQASA9AUA7QErN8LOLPQTPTObLAAQbMABTOzPQLPrOErt8QAUg8ASg8QA1ixAli3QBVmnAAnIQAA7MzOzPQoToTpzkuIhlDpIiQltIFuiRIhpDwQJ5ExIZIZQTaTaAAbdQAAHIhUGnQglC3g0CxQgSA8gUA8QktOMraLbQzaTa7dAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-424.1,-416,848.2,832.1);


(lib.anim_rising_stink = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AAXDGQhIhIA2g/QAYgOgZgdQg1g+A3hDQAJgKAAgSQAAgkgMgY");
	this.shape.setTransform(42.7,36.6,1,0.334);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AAXCyQhIhBA2g4QAYgNgZgaQg1g3A3g9QAJgJAAgQQAAgggMgW");
	this.shape_1.setTransform(42.7,25.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.1,1,1).p("AAXB4QhIgsA2glQAYgJgZgSQg1glA3goQAJgHAAgLQAAgVgMgP");
	this.shape_2.setTransform(42.7,14.4,1,1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.1,1,1).p("AAXCEQhIgwA2gpQAYgKgZgUQg1goA3gtQAJgHAAgMQAAgYgMgQ");
	this.shape_3.setTransform(42.7,14.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).wait(2));

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.1,1,1).p("AAkBMQg+gTAlgZQAggVgdgRQgMgIgRgHQgvgTA+gaQAIgDAAgG");
	this.shape_4.setTransform(17.4,35.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(0.1,1,1).p("AAkCQQg+gjAlgwQAggpgdggQgMgPgRgOQgvgkA+gxQAIgGAAgL");
	this.shape_5.setTransform(17.4,28.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.1,1,1).p("AAkDUQg+g0AlhHQAgg7gdgxQgMgVgRgVQgvg1A+hIQAIgJAAgQ");
	this.shape_6.setTransform(17.4,10.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},2).to({state:[{t:this.shape_6}]},2).to({state:[]},2).wait(2));

	// Layer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(0.1,1,1).p("AEfBHQgMhBA3giQhQg2AcgpQARgYAAgeAgMCaQhMgxBCgeQAYgLgLgQQgTgcgFgZQgFgcAMgXQgOgMAAgFAj8CyQAWg9hEgiQgPgmAPgbQAOgYgQgjQgrgUAUg/");
	this.shape_7.setTransform(33,21.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.1,1,1).p("AEfAnQgMgjA3gSQhQgeAcgWQARgNAAgQAgMBTQhMgaBCgQQAYgGgLgJQgTgPgFgNQgFgPAMgNQgOgGAAgDAj8BgQAWghhEgSQgPgVAPgPQAOgMgQgSQgrgLAUgi");
	this.shape_8.setTransform(33,13.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(0.1,1,1).p("AEfAeQgMgbA3gOQhQgYAcgRQARgKAAgNAj8BMQAWgahEgPQgPgQAPgLQAOgKgQgPQgrgJAUgbAgMBCQhMgVBCgNQAYgFgLgHQgTgLgFgLQgFgLAMgKQgOgGAAgC");
	this.shape_9.setTransform(33,28.4,1,1.42);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7,p:{scaleY:1,y:21.4}}]}).to({state:[{t:this.shape_8}]},2).to({state:[]},2).to({state:[{t:this.shape_7,p:{scaleY:0.429,y:31.6}}]},1).to({state:[{t:this.shape_9}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,2.7,68,41.6);


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


(lib.arrow_motion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A1AJJIAAyRMAqBAAAIAASRg");
	var mask_graphics_22 = new cjs.Graphics().p("A1AJJIAAyRMAqBAAAIAASRg");
	var mask_graphics_49 = new cjs.Graphics().p("A1AJJIAAyRMAqBAAAIAASRg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-16.5,y:-69.5}).wait(22).to({graphics:mask_graphics_22,x:-16.5,y:-69.5}).wait(27).to({graphics:mask_graphics_49,x:-16.5,y:-69.5}).wait(1));

	// Layer 8
	this.instance = new lib.arrow("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-19.8,371.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:-37.9},22).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151,-45,269,34);


(lib.anim_spoiled_hotdog = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.anim_rising_stink();
	this.instance.parent = this;
	this.instance.setTransform(46.9,-2.6,1,1,0,0,0,33,25.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	// fly2
	this.instance_1 = new lib.static_fly("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(13.7,-8.4,1,1,0,0,0,5.6,3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({guide:{path:[13.7,-8.4,7.7,-12.5,7.7,-17.5,7.7,-22.6,13.7,-26.8]}},6).to({guide:{path:[13.8,-26.7,7.8,-22.6,7.8,-17.5,7.8,-9.7,21.8,-4.2,35.7,1.4,55.5,1.4,62,1.4,67.9,0.8]}},14).to({guide:{path:[67.9,0.8,62,1.4,55.5,1.4,36.8,1.4,23.3,-3.5]}},4).wait(1));

	// fly
	this.instance_2 = new lib.static_fly("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(13.7,-8.4,1,1,0,0,0,5.6,3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({guide:{path:[13.7,-8.3,16.9,-6.1,21.8,-4.2,35.8,1.4,55.5,1.4,75.3,1.4,89.3,-4.2,103.3,-9.7,103.3,-17.5,103.3,-20.4,101.4,-22.9]}},9).to({guide:{path:[101.3,-23,98.1,-27.4,89.3,-30.9,75.3,-36.5,55.5,-36.5,49.6,-36.5,44.2,-36]}},9).to({guide:{path:[44.2,-36,31.5,-34.8,21.8,-30.9,7.8,-25.3,7.8,-17.6,7.8,-16,8.4,-14.5]}},6).wait(1));

	// hotdog
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AH+lTQgGggADgmQAEg2gmgSQhbgrhUBCQguAkgKBSQgCATAAAWQARgDASgBQAUgBARAJAH+lTQAZAUANA1QAXBcAABrQgBBnhBBPQg5BEhDA5QAAABgBABQhBAfg8AWQhHAVgsApQg7A4hGAxQgbATglAIQhqAVhTgXQhWgYg5g9Qg4g9g1haQAeAXAkAPQAeANAkAHQBfARBfgXQBkgZAVhfQAThTBHgnQBdg0A6grQA5grBQg8QBCgwAWhgQAGgZAAgaQA4giAhAbgADylUQAEAAADgBAGlAkQAIgBgCALAD0BnQAPAWAmAIAoVgKQgGhaBIgeQALgEALgFQBNggBpAAQBmAABYgeQBdgfBBguQBIgzBVgLAB0jgQgSAEgSAHQhNAfhZAsQA8AEAqAUAhWiKQgPgBgRAAQhiABhRAeQAQAIANAMAB0jgQAwgJA2AQAkphsQg2gahWAqQg+AfgiAzAnuD7QgRgNgPgRQhBhIAghpQAKgeAQgYABtC6QgVAXA1gHAA0CmQgVAmgYArQgIAPgSAHADwkrQhKAPgyA8");
	this.shape.setTransform(57.1,49.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B9EF70").s().p("AlpFbQBvhNgfhEQCKA0hfA3Qg3AfhEAHgAE2laQBDAEgTApQgNgggjgNg");
	this.shape_1.setTransform(65.6,38.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DC3F03").s().p("AkFGdQhVgXg5g+Qg4g9g1hZQAdAXAkAPQAfAMAjAHQBgASBfgXQBkgZAVhfQAShTBIgnQBdg0A6gsICJhmQBCgxAWhfQAFgZAAgaQA4giAiAbQAZATANA1QAXBcgBBsQAABohCBNQg4BEhDA6IgCABQhBAfg8AXQhHAVgrApQg7A3hFAxQgcAUgmAHQgyAKguAAQgxAAgsgMgAgKCtQgJAQgTAHQATgHAJgQIAshRIgsBRgABnCCIARgBIACAAIgCAAIgRABIgBAAIAAAAQgbAAAPgQIABgBIgBABQgPAQAbAAIAAAAIABAAgAEWA8QglgJgPgVQAPAVAlAJgAGYgaIAAgBQADgKgHAAIgBAAIAAAAIAAAAIgBAAIABAAIAAAAIAAAAIABAAQAHAAgDAKIAAABgAnljMIAVgIQBOghBpAAQBmAABYgdQBdggBAgtQBIgzBWgLQgCATAAAWQhKAOgyA9QgTADgRAHQhMAghaArIggAAQhiAAhRAfQg3gbhVAqQg+AfgiAzQgGhaBIgeg");
	this.shape_2.setTransform(58.9,57.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7AC216").s().p("AlMGQQgkgHgegMQgkgPgegYQgRgNgPgRQhBhIAghoQAKgfARgZQAhgzA/geQBVgqA3AaQBQgeBigBIAhABQBYgrBNggQASgHASgDIACgBIABAAQARgDARAAIAAAAIAAAAQAcAAAdAIIAAAAIADAAIAEACIACAAIgCAAIgEgCIgDAAIAAAAQgdgIgcAAIAAAAIAAAAQgRAAgRADIgBAAIgCABQAyg9BKgOQARgEATAAIACAAIABAAIAAAAIABAAQARAAAPAHQgPgHgRAAIgBAAIAAAAIgBAAIgCAAQgTAAgRAEQAAgWADgUQAJhSAvgkQBUhBBaAqQAmASgEA2QgDAmAHAgQgigag4AiQAAAagGAYQgWBghCAxIiJBlQg6AshdA0QhHAogTBTQgVBehkAZQg2AOg2AAQgpAAgpgIgAj1FJIAAAAQBEgHA3gfQBeg3iKg0QAfBEhuBNgAjuADQgNgMgPgIQAPAIANAMgAAugWQgrgVg6gEQA6AEArAVgAERj5IAHAAIgHAAgAHZk/QATgphDgFQAkAOAMAgg");
	this.shape_3.setTransform(54.1,40.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-24.8,116.2,125.6);


(lib.anim_pizza_slice = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// slice
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AgpgFQACAEgDADQgCAEgFACQgEABgEgDQgEgCgCgEQgBgEACgEQADgEAEgBQAFgBAEACQAEACABAFgAh8gyQAWAsgDAKQAOgJACATQACANAPgCQAEgBAAAGQABAQANAEQAOAFANAEQAFABACAGQAEAOAQgEQAOgCALAHQAGAEAWAiIBbkEIkMBbIgTAHQAuCMCNAtIAJgXABOhDQgCAFgFABQgFABgFgDQgEgCgBgFQgCgFADgEQACgFAFgBQAFgCAFADQAFADABAEQABAFgDAFgAAaghQgCAFgFABQgFABgFgDQgEgCgCgFQgBgFACgEQADgFAFgBQAFgCAFADQAEADACAEQABAFgDAFgAgBAbQAEgBADACQAFACABAEQABAFgCAEQgDADgEACQgEABgDgDQgEgCgBgEQgBgEACgFQACgDAEgBgAA2AZQgBAFgDAAQgCABgDgDQgDgEgCgFQgBgFABgFQABgEACgBQADgBADADQADAEABAFQACAGgBAEg");
	this.shape.setTransform(22.8,43.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgNAxQgDgDgBgEQgBgEACgEQACgEAEgBQAEgBAEACQADADABAEQACAEgDAEQgBAEgEABIgDAAQgDAAgDgBgAAAgaQgEgDgBgFQgBgEACgFQADgEAEgCQAFgBAEACQAFADABAFQACAFgDAEQgDAFgFABIgDABQgDAAgDgCg");
	this.shape_1.setTransform(23.7,43.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DC3F03").s().p("AhhhYIATgHQAVAsgCAKQAOgJACAUQACANAOgDQAEAAABAGQABAPANAEIAaAIQAFACABAGQAEAOARgEQAPgDALAIQAFAEAWAhIgIAXQiNgsguiMg");
	this.shape_2.setTransform(18.2,48.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AAlA4QgDgDgCgGQgBgFABgFQAAgEADgBQADAAADADQADADABAFQACAGgBAEQgBAFgDAAIgBABQgCAAgCgDgAhBAjQgFgDgBgEQgBgFACgEQADgEAEgBQAFgBAEACQAEADABAEQABAEgCAEQgCAFgFABIgDAAIgFgBgAA1giQgEgDgCgFQgBgFADgEQACgFAFgBQAFgBAFACQAEADACAFQABAFgDAEQgCAFgFABIgDABQgEAAgDgCg");
	this.shape_3.setTransform(23.6,40.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF66").s().p("AAQBdQgMgIgOADQgQAEgEgPQgBgFgFgCIgbgIQgNgFgBgPQgBgGgEAAQgOADgCgOQgCgTgOAJQACgKgWgsIEMhaIhbEDQgWghgFgEgAgKAmQgEABgDAEQgCAEABAEQACAFADACQAEACAFgBQAEgBABgEQACgEgBgEQgBgEgDgDIgFgBIgDAAgAAiAQQgDAAgBAEQgBAFACAFQABAGADADQADADADAAQADgBAAgEQABgFgBgFQgBgGgDgDQgDgDgCAAIgBABgAhAgCQgFABgCADQgCAFABAEQABAFAEACQAEACAFgBQAEgBADgEQACgEgBgFQgBgEgFgBQgCgCgDAAIgDAAgAADgoQgEACgDAEQgCAFABAEQABAFAEADQAEADAFgCQAFgBADgFQADgEgCgFQgBgFgFgDQgDgBgDAAIgDAAgAA3hKQgFABgDAFQgCAFABAFQABAFAFACQAEADAFgCQAFgBADgFQADgEgCgFQgBgFgFgCQgDgCgDAAIgDAAg");
	this.shape_4.setTransform(23.8,42.6);

	this.instance = new lib.static_pizza_slice("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(18.2,43.5,1,1,0,0,0,18.2,13.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance}]},12).to({state:[{t:this.instance}]},32).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).to({x:-19.1,y:52.2},32).wait(1));

	// pizzaPie
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(0.1,1,1).p("AEahzQgOgHgHgMQgGgLgJgFQgFgDgGgCQgHgCgCgJQgEgOgPgGQgNgFgCgKQgDgOgNgHQgMgHgMgIQgHgEgFAEQgJgKgSACQgEAAgDAAQgJgFgHgKQgFgHgKgBQgFAAgEAAIgwCHQAEACADACQAFAFAAAIQAAAHgFAFQgFAFgHAAQgDAAgDgBQgEgBgDgDQgDgFAAgHQAAgIADgFQAFgFAIAAQADAAACABIgLAhIgdBXIAAAAgAEkhPQgDgBgCAAQgHAAgFADQgGADAAAFQAAAEAGADQAFAEAHAAQADAAADgBQADgBADgCQAFgDAAgEQAAgFgFgDQgDgBgDgBQgBAAAAAAQgFgCgDgGQgFgNADgPIAhgLQgZgygvgqQhIhBhdgTIgMAiQgJAAgKgBQgNAAgMgFQgHgCgJgBQgQAAgIALQgDAEgEgBQgOgEgOADQgKADgHAHQgJAKgQADQgPADgOACQgHABgEADQgGAGgGgCQgDgBgDAAQgKABgEAIQgHALgNAFQgNAEgGAOQgEAEgDAEQgHAIgGAHQgFAFgFAGQgEAGgDAJQgFABgBAEQgCAFgCADQgDAEgFABQgRACgCAQQgBAPgOAHQgNAGAKAOQALAOgHAMQgHANADAFQAEABADADQAEAEAAAGQAAAFgEAEQgEAEgGAAQgCAAgBAAAA9jdQAAgGAFgEQAEgFAGAAQAGAAAFAFQAEAEAAAGQAAAGgEAFQgFAEgGAAQgGAAgEgEQgFgFAAgGgAA6iOQABgBgGAAQAFgEABgIQAGgJgLgBQgCAAgCAAAAahKQAAgFAGgEQAHgEAJAAQAJAAAHAEQAGAEAAAFQAAAFgGAEQgHAEgJAAQgJAAgHgEQgGgEAAgFgAA2ilQALgBAHgEQgLAAgEgHAC4iXQgCgDAAgEQAAgGAEgEQAEgEAFAAQAEAAADACQgBgFgEgDQgEgFgHAAQgHAAgEAFQgFAFAAAGQAAAHAFAFQAEAEAFAAgADKiqQAAACAAABQAAAHgFAFQgEAFgHAAQgBAAgBgBQAAABABABQAAAAABAAQAEAEAFAAQAGAAAEgEQAEgDAAgGQAAgGgEgEQgCgBgBgBgACLidQgEAFgHAAQgHAAgEgFQgFgEAAgHQAAgHAFgEQAEgFAHAAQAHAAAEAFQAFAEAAAHQAAAHgFAEgACDitQACACAAACQAAACgCACQgBABgDAAQgCAAgBgBQgCgCAAgCQAAgCACgCQABgBACAAQADAAABABgACrg4QgCAEABACQABAAAAAAQAAgCAAgEQABgGACABQACADACABACqgyQgDgEgFgDQAAAGAAACQgEgIgCAIQgCAAgDgCQgDABABAEADTgoQAGgGAJAAQAJAAAGAGQAGAGAAAJQAAAIgGAGQgGAGgJAAQgJAAgGgGQgGgGAAgIQAAgJAGgGgACBAfQgGAIACANQAGgGADgJQAFAGAGAKQABgJACgIQADAGAFAGQACgCAAgGQACAAADABQACgCAAgEQABgCAAgDAC7AuQAHgGALAAQALAAAHAGQAIAGAAAIQAAAJgIAFQgHAGgLAAQgLAAgHgGQgIgFAAgJQAAgIAIgGgABsgMQAJAFAAAHQAAAHgJAGQgKAFgNAAQgOAAgJgFQgKgGAAgHQAAgHAKgFQAJgFAOAAQANAAAKAFgAAxBVQANgJgJARQAFgCAHAAQgDAFgEAGQAFABAHgBQgEAFgCAEQAPAHARAEAARBkQgHAGgIAAQgIAAgGgGQgHgGAAgJQAAgJAHgGQAGgGAIAAQAIAAAHAGQAGAGAAAJQAAAJgGAGgAAtCgQAAgJAGgFQAGgGAIAAQAIAAAGAGQAGAFAAAJQAAAIgGAFQgGAGgIAAQgIAAgGgGQgGgFAAgIgACGCzQAFAEAAAHQAAAHgFAEQgEAFgHAAQgHAAgEgFQgFgEAAgHQAAgHAFgEQAEgFAHAAQAHAAAEAFgAElg7QgBARAKAMQACABAAAEQgBAPADAOQAAACgDAFQAEAEgBAHQAAAFACAEQAFAOgJAJQgBAKgGAHQgIAKAEAQQADAOgMAAQgLABAAAGQgBAHgEAEQgJALgEAOQgCAGgGABQgJABgHAEQgMAFgIAJQgCACgBACIAAAAQgCACgCACQgEADgGAAQgKACgHAFQgFADgGAHQgJALgKAHQgFAEgGAAQgJAAgIAEQgLAGgPgEQgPgEgNAGQgIAEgIgBQgPgBgPACQgHABgDgCQgLgJgQAJQgOAHgOgGQgPgGgMAJQgDACgDAAQgKABgKgDQgLgEgEAFIBckDIAAAAADoDOIABAAQAFgEAEgFQBchTAIhyQABgIAAgJQABAJAAAIIAAAAQAACBhlBaQhlBbiOAAQhFAAg7gWQgwgRgqggAEDANQAAgFADgDQADgDAFAAQAEAAADADQADADAAAFQAAAEgDADQgDADgEAAQgFAAgDgDQgDgDAAgEgADiBlQAFAAADADQADAEAAAEQAAAFgDADQgDAEgFAAQgFAAgDgEQgDgDAAgFQAAgEADgEQADgDAFAAgACug9QgBgCAAgDAFXgRQgDg7gZgyAgsjsQAGAFAAAHQAAAIgGAFQgFAFgHAAQgIAAgFgFQgFgFAAgIQAAgHAFgFQAFgGAIAAQAHAAAFAGgAiVjIQAAgHAFgEQAFgFAHAAQAHAAAEAFQAFAEAAAHQAAAHgFAFQgEAFgHAAQgHAAgFgFQgFgFAAgHgAhli/QgDAEAJgBQgFAEgOAEQAIAAAIAAQgIAFgDAFQgEAGgEAGQADAAADAAAiqhKQgHANANgGQgBAFgDAFQAFgCAEgBAi+iCQgDATARgEQgBAIAFAEQABAHADAAAhUiVQADgDAGAAQAFAAADADQAEAEAAAFQAAAFgEAEQgDADgFAAQgGAAgDgDQgEgEAAgFQAAgFAEgEgAgyhPQgDACgDAAQgEAAgCgCQgCgCAAgDQAAgEACgCQACgCAEAAQADAAADACQACACAAAEQAAADgCACgAj7jSQAFgEAEgEQBlhbCNAAQAoAAAmAHAjziJQAAADgBACQgBAFgDABAkIhbQgKAMgBAPQAEAAAEgEQgBAHAAAKQAGgEAHgFQABAFAAAFQABABADgCQADADADAFAjVhlQAJAAAGAFQAHAFAAAHQAAAHgHAFQgGAFgJAAQgKAAgGgFQgHgFAAgHQAAgHAHgFQAGgFAKAAgAjViyIgmggAjagOQgBAHgDAGQAAgEgEgDQgDADAAAFQAAgFgEgEQgBAFAAABQgJgNgFAOQABgCgCgFAkSAfQAAgFAEgEQADgDAGAAQAFAAAEADQAEAEAAAFQAAAGgEADQgEAEgFAAQgGAAgDgEQgEgDAAgGgAkqgPQgCAAgBAAQgGAAgEAEQgEAEAAAGQAAAFAEAEQADADAEABQgBAHAGAFQAHAGgDAGQgDAFAAAJQAAARAHAJQgNABgGAGQgagugGglQgBgBAAgCQACh4BahXAjaDvQh4h/gFhwQAAgBAAgCAgfgKIAJgDIAAAAAisgHQgCgCAAgDQAAgDACgCQACgCADAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgDAAgCgCgAgwCgQAIgFAMAAQALAAAIAFQAIAGAAAHQAAAIgIAGQgIAFgLAAQgMAAgIgFQgIgGAAgIQAAgHAIgGgAjViyIC/ClAh6ENIAIgXADoDOQhhBSiHAAQhBAAg5gTAk2BTQAiA/BFBQQAoAcAtAPADQC4IAYAWADQC4IjmjF");
	this.shape_5.setTransform(39.5,31);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgoBiQhEhQgjg+QAGgGANAAIEDhYIAJgCIhbECIgIAXQgtgPgogcg");
	this.shape_6.setTransform(22.8,43.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AAACbQhFAAg7gWQgwgRgqggIAAAAQh4h+gFhwIABAAQAGAlAaAuQAiA/BFBPQAoAcAtAPQA5ATBBAAQCHAABhhSIABAAIAJgJQBchSAIhyIACAAQAACBhlBZQhlBbiOAAIAAAAg");
	this.shape_7.setTransform(39.5,46.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCCCCC").s().p("AAAAAIABAAIAAAAg");
	this.shape_8.setTransform(73.8,31);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00CC33").s().p("AAGATQgGAAgDgEIgBgBIACgBQAFAAAFgFQAFgEAAgGIgBgEIADADQAEADAAAGQAAAFgEAEQgEAEgFAAIAAAAgAgOAIQgFgEABgGQgBgHAFgEQAFgFAHAAQAFAAAFAFQADADABAEQgDgBgDAAQgGAAgDAEQgEADAAAGQAAAEACADQgFgBgEgEg");
	this.shape_9.setTransform(58.4,14.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("ABGC0QgGAAgFgFQgFgFAAgGQAAgHAFgFQAFgEAGAAQAHAAAFAEQAEAFAAAHQAAAGgEAFQgFAFgHAAIAAAAgAgBCTQgFgGAAgIQAAgIAFgGQAFgFAIgBQAJABAFAFQAGAGAAAIQAAAIgGAGQgFAGgJAAQgIAAgFgGgACtBhQgFAAgDgDQgDgDAAgFQAAgFADgDQADgDAFAAQAFAAADADQADADAAAFQAAAFgDADQgDADgFAAIAAAAgADSgFQgEgDAAgFQAAgEAEgDQADgDAEAAQAEAAADADQAEADAAAEQAAAFgEADQgDADgEAAQgEAAgDgDgAjcggQgCAAgDgCQgCgCAAgDQAAgDACgCQADgCACAAQADAAACACQACACAAADQAAADgCACQgCACgCAAIgBAAgAgUhbQgGgEAAgFQAAgGAGgEQAHgDAJAAQAIAAAHADQAGAEAAAGQAAAFgGAEQgHAEgIAAQgJAAgHgEgAhthnQgDAAgDgCQgCgCAAgEQAAgDACgDQADgCADAAQADAAADACQACADAAADQAAAEgCACQgDACgDAAIAAAAgAiJieQgEgDABgFQgBgFAEgEQAEgEAFAAQAFAAADAEQAEAEAAAFQAAAFgEADQgDAEgFAAQgFAAgEgEg");
	this.shape_10.setTransform(44.8,33.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00CC00").s().p("AAFDNQgKAAgIgGQgIgFAAgIQAAgIAIgFQAIgGAKABQALgBAIAGQAIAFAAAIQAAAIgIAFQgIAGgLAAIAAAAgAkOAZQgDgBgDgDQgEgEgBgGQABgGAEgEQAEgDAGAAIACAAQAEABAEACQAEAEAAAGQAAAGgEAEQgFAEgFAAIgEAAgAD2ABQgGgFAAgJQAAgIAGgGQAGgGAJgBQAIABAGAGQAGAGABAIQgBAJgGAFQgGAGgIAAQgJAAgGgGgAAqhYIALggQAEABADADQAFAFgBAHQABAHgFAFQgFAFgIAAIAAAAIgFgBgAAjhcQgFgFAAgHQAAgHAFgFQAFgFAHAAIAGABIgLAgQgEgBgDgDgAhtivQgFgFgBgHQABgHAFgFQAEgFAHAAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHAAQgHAAgEgFg");
	this.shape_11.setTransform(36,29.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AAYCuQgJAAgGgGQgHgGAAgJQAAgJAHgGQAGgGAJAAQAIAAAGAGQAHAGAAAJQAAAJgHAGQgGAGgIAAIAAAAgADQCPQgHgGAAgIQAAgJAHgFQAIgGALAAQALAAAHAGQAIAFAAAJQAAAIgIAGQgHAGgLAAQgLAAgIgGgAj5BtQgDgEAAgFQAAgGADgDQAEgEAGAAQAFAAAEAEQAEADAAAGQAAAFgEAEQgEAEgFAAQgGAAgEgEgABrBWQgOAAgKgFQgJgGAAgHQAAgIAJgFQAKgFAOAAQANAAAJAFQAKAFAAAIQAAAHgKAGQgJAFgNAAIAAAAgAi/AAQgKAAgGgEQgHgEAAgHQAAgHAHgFQAGgFAKAAQAJAAAGAFQAHAFAAAHQAAAHgHAEQgGAEgJAAIAAAAgADOhSQgCgEAAgEQAAgGAEgEQAEgDAFAAQAEAAADABIAAAEQAAAGgFAFQgEAFgHAAIgCAAgAgiiKQgIAAgFgFQgFgFAAgHQAAgIAFgFQAFgFAIAAQAHAAAFAFQAGAFAAAIQAAAHgGAFQgFAFgHAAIAAAAgABiiKQgGAAgEgEQgFgEAAgHQAAgGAFgEQAEgEAGAAQAGAAAFAEQAEAEAAAGQAAAHgEAEQgFAEgGAAIAAAAg");
	this.shape_12.setTransform(37.3,24.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ABDA8QgGgDAAgFQAAgEAGgEQAFgDAHAAIAFABIABAAIAGACQAFAEAAAEQAAAFgFADIgGACIgGABIAAAAQgHAAgFgDgAhPgeQgHAAgFgFQgEgEAAgHQAAgHAEgEQAFgFAHAAQAGAAAFAFQAFAEgBAHQABAHgFAEQgFAFgGAAIAAAAgAhPgpIACgBIABgBQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAgBgBQABAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAABABAAQAAABAAAAQAAABAAAAQABABgBAAQABABgBAAQAAABAAAAQAAABAAAAQgBABAAAAIgBABIgCABIgBAAIAAAAIAAAAIAAAAIgCgBIgCgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBIABAAIABAAIAAgBIABAAIABAAIAAAAIAAAAIABAAIACAAIAAABIABAAIgBAAIAAgBIgCAAIgBAAIAAAAIAAAAIgBAAIgBAAIAAABIgBAAIgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAIACABIACABIAAAAIAAAAIAAAAIABAAg");
	this.shape_13.setTransform(60.3,18.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#DC3F03").s().p("AAAErQhBAAg4gTIAIgXQAEgFAKAEQALADAKgBQACAAADgCQANgJAPAGQANAGAOgHQAQgJALAJQADACAIgBQAOgCAPABQAIABAJgEQAMgGAPAEQAPAEAMgGQAHgEAKAAQAGAAAEgEQAKgHAKgLQAGgHAFgDQAGgFAKgCQAHAAADgDIAEgEIAZAWQhiBSiHAAIAAAAgADpDZIgZgWIAAAAIADgEQAIgJAMgFQAIgEAJgBQAFgBACgGQAEgOAJgLQAEgEABgHQAAgGALgBQAMAAgDgOQgEgQAJgKQAFgHABgKQAJgJgFgOQgCgEAAgFQABgHgEgEIADgHQgDgPABgOQAAgEgCgBQgKgMACgRIAFgDQAFgDAAgEQAAgFgFgDIgGgCIgBAAQgFgCgCgGQgFgNADgPQgOgHgHgMQgGgLgKgFIgKgFQgIgCgCgJQgEgOgOgGQgOgFgCgKQgDgOgNgHIgYgPQgHgEgFAEQgIgKgTACIgHAAQgJgFgHgKQgFgHgKgBIgJAAIAMgiQBdATBIBBQAvAqAZAyIggALIAggLQAZAyADA7IAAARQgIByhcBTIgKAJIAAAAgADQDDgAlWALIAAgEQABh3BbhXIAlAgIglggIAIgIQBlhbCNAAQApAAAlAHIgMAiIgTgBQgNAAgMgFQgGgCgKgBQgPAAgJALQgCAEgEgBQgPgEgOADQgKADgHAHQgJAKgQADIgdAFQgGABgFADQgGAGgGgCIgGgBQgJABgFAIQgHALgMAFQgNAEgGAOIgIAIIgNAPIgJALQgFAGgDAJQgFABgBAEIgEAIQgCAEgGABQgRACgBAQQgCAPgNAHQgOAGAKAOQALAOgHAMQgHANADAFIgDAAQgGAAgEAEQgEADAAAGQAAAGAEAEQADADAEABQgBAHAGAFQAHAGgDAGQgDAFAAAJQAAARAHAJQgNABgGAGQgZgugHglg");
	this.shape_14.setTransform(39.5,29.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFF66").s().p("AhlEEQgLgEgEAFIBbkEIABAAIAAAAIAdhWIgdBWIi/ikIC/CkIgBAAIgIADIkEBXQgHgJAAgRQAAgJACgFQAEgGgHgGQgGgFABgHIADAAQAGAAAEgEQAEgEAAgGQAAgGgEgEQgDgDgFAAQgDgFAHgNQAHgMgKgOQgKgOANgGQAOgHABgPQACgQAQgCQAGgBADgEIADgIQACgEAFgBQACgJAFgGIAJgLIAOgPIAHgIQAGgOANgEQAMgFAHgLQAFgIAJgBIAHABQAGACAGgGQAEgDAHgBIAdgFQAQgDAIgKQAIgHAJgDQAPgDAOAEQAEABADgEQAIgLAQAAQAJABAHACQAMAFANAAIATABIAJAAQAJABAGAHQAHAKAJAFIAHAAQASgCAIAKQAGgEAHAEIAYAPQANAHADAOQACAKANAFQAPAGAEAOQACAJAHACIALAFQAJAFAGALQAHAMAOAHIkwBlIDlDGIgDAEQgEADgGAAQgKACgHAFQgFADgGAHQgJALgKAHQgFAEgGAAQgKAAgHAEQgLAGgPgEQgPgEgNAGQgIAEgIgBQgPgBgPACQgHABgDgCQgMgJgQAJQgOAHgNgGQgPgGgMAJQgDACgDAAIgEABQgIAAgIgDgACEDYQAFgEAAgHQAAgHgFgEQgEgFgHAAQgHAAgFAFQgEAEAAAHQAAAHAEAEQAFAFAHAAQAHAAAEgFgAgMDKQAIgGAAgIQAAgHgIgGQgHgFgMAAQgLAAgIAFQgIAGAAAHQAAAIAIAGQAIAFALAAQAMAAAHgFgAAxChQgGAFAAAJQAAAIAGAFQAGAGAIAAQAIAAAGgGQAGgFAAgIQAAgJgGgFQgGgGgIAAQgIAAgGAGgAA+B+QAPAHARAEQgRgEgPgHIAGgJQgHABgFgBIAGgLQgGAAgGACIABAAIAAAAQAFgLgDAAIgCAAIAAAAIgBABIgBABIgCABIAAAAIAAAAIACgBIABgBIABgBIAAAAIACAAQADAAgFALIAAAAIgBAAQAGgCAGAAIgGALQAFABAHgBIgGAJIAAAAgAAOBzQAHgGAAgJQAAgJgHgGQgGgGgIAAQgIAAgHAGQgGAGAAAJQAAAJAGAGQAHAGAIAAQAIAAAGgGgAkRAlQgDAEAAAFQAAAGADADQAEAEAGAAQAFAAAEgEQADgDAAgGQAAgFgDgEQgEgDgFAAQgGAAgEADgAjnAOQAAgFADgDQADADAAAEQAEgGABgHQgBAHgEAGQAAgEgDgDQgDADAAAFQAAgFgEgEIgBAGIAAgBIgBAAIAAAAIAAgBIAAAAIAAAAIgBgBQgDgDgDAAIAAAAIAAAAQgDAAgDAGIAAABIAAAAIAAgBIgBgGIABAGIAAABIAAAAIAAgBQADgGADAAIAAAAIAAAAQADAAADADIABABIAAAAIAAAAIAAABIAAAAIABAAIAAABIABgGQAEAEAAAFgAikAHQACgCAAgDQAAgCgCgCQgCgCgDAAQgDAAgCACQgCACAAACQAAADACACQACACADAAQADAAACgCgAj2gcIgGgIIgBAAIgCABIgBAAIAAAAIgBAAIAAgKIgNAJIAAgCIAAgPIgBABIAAAAIgFADIgBAAIAAAAQABgPAKgMQgKAMgBAPIAAAAIABAAIAFgDIAAAAIABgBIAAAPIAAACIANgJIAAAKIABAAIAAAAIABAAIACgBIABAAIAGAIgAiqgqIAJgDIgJADIAEgKIgCABIAAAAIAAAAIgCABIgBAAIAAAAIgBAAIAAAAQgFAAAEgIIAAAAIAAgBIAAABIAAAAQgEAIAFAAIAAAAIABAAIAAAAIABAAIACgBIAAAAIAAAAIACgBIgEAKIAAAAgAAehEQgGAEAAAFQAAAFAGAEQAHAEAJAAQAJAAAGgEQAHgEAAgFQAAgFgHgEQgGgEgJAAQgJAAgHAEgAjIg5QAHgFAAgHQAAgHgHgFQgGgFgKAAQgJAAgHAFQgGAFAAAHQAAAHAGAFQAHAFAJAAQAKAAAGgFgAg1hAQADgCAAgDQAAgEgDgCQgCgCgDAAQgEAAgCACQgCACAAAEQAAADACACQACACAEAAQADAAACgCgAirhRIAAAAIAAAAQgCAAgBgHQgEgEAAgGIAAgCIgCAAIgEABIAAAAIAAAAQgLgBACgOIAAgBIAAABQgCAOALABIAAAAIAAAAIAEgBIACAAIAAACQAAAGAEAEQABAHACAAIAAAAIAAAAgAgBhyQgFAFAAAIQAAAHAFAFQACADAEABIAFABQAIAAAFgFQAFgFAAgHQAAgIgFgFQgDgCgEgCIAwiHIgwCHIgGgBQgHAAgEAFgAj2h1QgBAFgDABQADgBABgFIABgFIgBAFgAhWiGQgEAEAAAFQAAAFAEAEQADADAFAAQAGAAADgDQAEgEAAgFQAAgFgEgEQgDgDgGAAQgFAAgDADgAA4h/IAAAAQAAgBgFAAIAAAAIAAAAQAFgEABgIIACgFQAAgFgHAAQALgBAHgEIgBAAIAAAAIAAAAIgBAAQgKAAgDgHQADAHAKAAIABAAIAAAAIAAAAIABAAQgHAEgLABIgFAAIAFAAQAHAAAAAFIgCAFQgBAIgFAEIAAAAIAAAAQAFAAAAABIAAAAgADLiGQAEgDAAgGQAAgGgEgEIgDgCQgBgFgEgDQgEgFgHAAQgHAAgFAFQgEAFAAAGQAAAHAEAFQAFAEAFAAIABACIAAAAQAFAEAFAAQAGAAAEgEgACJiOQAEgEAAgHQAAgHgEgEQgFgFgGAAQgHAAgFAFQgEAEAAAHQAAAHAEAEQAFAFAHAAQAGAAAFgFgAh3iPIAGAAIgGAAIAIgMQADgFAIgFIgQAAQAOgEAEgEIgBAAIgBAAIAAAAIgBAAQgBAAAAAAQgBAAgBAAQAAgBAAAAQAAgBAAAAIAAgBIABAAIgBAAIAAABQAAAAAAABQAAAAAAABQABAAABAAQAAAAABAAIABAAIAAAAIABAAIABAAQgEAEgOAEIAQAAQgIAFgDAFIgIAMIAAAAgAiSjEQgFAEAAAHQAAAHAFAFQAFAFAGAAQAHAAAFgFQAFgFAAgHQAAgHgFgEQgFgFgHAAQgGAAgFAFgAgujEQAGgFAAgIQAAgHgGgFQgFgGgHAAQgIAAgFAGQgFAFAAAHQAAAIAFAFQAFAFAIAAQAHAAAFgFgABUjDQAFgFAAgGQAAgGgFgEQgEgFgGAAQgGAAgFAFQgEAEAAAGQAAAGAEAFQAFAEAGAAQAGAAAEgEgADNDHgAgYABIEwhlQgDAPAFANQADAGAEACIgEgBQgHAAgGADQgFAEAAAEQAAAEAFADQAGAEAHAAIAGgBQgCARALAMQACABgBAEQAAAOACAPIgCAHQADAEAAAHQAAAFABAEQAGAOgJAJQgBAKgGAHQgIAKADAQQADAOgMAAQgKABgBAGQAAAHgEAEQgKALgDAOQgCAGgGABQgJABgHAEQgMAFgJAJIgCAEIgBAAgADoCHQADgDAAgFQAAgEgDgEQgEgDgEAAQgFAAgDADQgEAEAAAEQAAAFAEADQADAEAFAAQAEAAAEgEgAC4A9QgHAGAAAIQAAAJAHAFQAIAGALAAQALAAAHgGQAIgFAAgJQAAgIgIgGQgHgGgLAAQgLAAgIAGgACPBEIACgRQAEAGAFAGQACgCAAgGIAAAAIABAAIAAAAIABAAIADABQACgCAAgEIABgEIAAgBIAAABIgBAEQAAAEgCACIgDgBIgBAAIAAAAIgBAAIAAAAQAAAGgCACQgFgGgEgGIgCARIgLgQQgDAJgHAGIAAgGQAAgJAFgGQgFAGAAAJIAAAGQAHgGADgJIALAQgAEEAUQgDADAAAFQAAAEADADQADADAFAAQAEAAADgDQADgDAAgEQAAgFgDgDQgDgDgEAAIAAAAQgFAAgDADgABpAcQAKgGAAgHQAAgIgKgFQgJgEgOAAQgNAAgKAEQgJAFAAAIQAAAHAJAGQAKAFANAAQAOAAAJgFgADRgZQgGAGAAAJQAAAIAGAFQAGAGAJAAQAJAAAFgGQAHgFAAgIQAAgJgHgGQgFgGgJAAQgJAAgGAGgACTgfIAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAIABAAIABABIACAAIABABIAAAAIAAAAQABgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAIAAAAIAAAAIADADIAAABIABgIIAIAHIgIgHIgBAIIAAgBIgDgDIAAAAIAAAAQAAAAgBAAQAAABAAAAQgBABAAAAQAAABgBABIAAAAIAAAAIgBgBIgCAAIgBgBIgBAAQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIAAABgACpgpQgDAEACACIABAAIAAgGQAAgEACgBIAAAAIAAAAIABAAIAAAAIAAAAIAEAEIgEgEIgCgFIACAFIAAAAIAAAAIgBAAIAAAAIAAAAQgCABAAAEgACsguIAAAAgAEYhkIAAAAgAAziAIAAAAgAA0iWIAAAAg");
	this.shape_15.setTransform(39.7,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.2,-1,70.7,64.1);


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
		
		 window.open ("verbNum_Plural.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("verbNum_singular.html","_self");
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


(lib.Content_scene3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{restart:105});

	// timeline functions:
	this.frame_95 = function() {
		/* _root.v2a.start();*/
	}
	this.frame_105 = function() {
		/* _root.v3b.start();*/
	}
	this.frame_207 = function() {
		/* _root.v3b.start();*/
	}
	this.frame_308 = function() {
		this.gotoAndPlay("restart");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(95).call(this.frame_95).wait(10).call(this.frame_105).wait(102).call(this.frame_207).wait(101).call(this.frame_308).wait(1));

	// sentence
	this.instance = new lib.sample_team();
	this.instance.parent = this;
	this.instance.setTransform(140.7,0.4,1,1,0,0,0,128.4,16);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLAJQgEgEAAgFQAAgEAEgEQAGgEAFAAQAHAAAFAEQAEAEAAAEQAAAFgEAEQgGAEgGAAQgFAAgGgEg");
	this.shape.setTransform(344.3,62.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgJBNQgDgEAAgGIAAiGQAAgGADgDQAFgDAEAAQAGAAAEADQAEADAAAGIAACBQAAASgOAAQgFAAgEgDg");
	this.shape_1.setTransform(337.1,55.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIBNQgEgEgBgGIAAiGQABgGAEgDQAEgDAEAAQAGAAAEADQADADAAAGIAACBQAAASgNAAQgFAAgDgDg");
	this.shape_2.setTransform(331.6,55.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgLBHQgEgEAAgFIgBgSIAAgSIABgWIABgVQAAgFAEgEQAEgEAGAAQAEAAAEAEQAEAEAAAFIgBAVIgBAWIAAASIAAASQABAFgEAEQgEAEgFAAQgFAAgEgEgAgIgxQgFgEABgGQgBgGAFgEQAFgFAEAAQAHAAAFAFQAEAEAAAGQAAAGgEAEQgFAEgHAAQgEAAgFgEg");
	this.shape_3.setTransform(326.4,55.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgbAzQgOgGAAgLQAAgJALAAQAEAAAJADQAJACAEABQATAAAAgJQAAgEgNgGIgZgMQgOgKAAgNQAAgVAVgGQAMgEAYAAQAKAAAEADQAGADAAAJQAAASgJgBQgKABgBgJIgIgBQgXABAAAGQAAAEANAHQATAJAIAEQANAJAAANQAAARgPAJQgNAHgRAAQgNAAgLgEg");
	this.shape_4.setTransform(309.7,58.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgMBHQgDgEAAgFIAAgSIgBgSIABgWIABgVQAAgFAEgEQAEgEAFAAQAGAAADAEQAEAEAAAFIgBAVIgBAWIABASIAAASQAAAFgEAEQgEAEgFAAQgGAAgEgEgAgIgxQgEgEgBgGQABgGAEgEQAEgFAGAAQAGAAAFAFQAEAEAAAGQAAAGgEAEQgFAEgGAAQgGAAgEgEg");
	this.shape_5.setTransform(302.4,55.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgIA5QgDgEAAgGQAAgLgDgVQgCgVAAgLIgBgKQgMAGgLAQIgCACIAAAeIAAAHIgBAHQAAAFgEADQgEADgFAAQgJAAgDgHQgCgFAAgLIAAgjIAAgOIgBgPQAAgIAEgHQADgJAHAAQAGAAAEAEQAEAEAAAFIAAAJQAOgRANAAQAPAAAHALQAFgFAIgDQAHgCAIAAQATAAAHATQACAEACAWQADAPAFAlQAAAFgEAEQgEAEgGAAQgLAAgCgLIgEgdIgDgbQgDgSgEAAQgCAAgIAFIgMAHQAAALADAUQACAWAAAKQAAAGgDAEQgEADgGAAQgFAAgEgDg");
	this.shape_6.setTransform(283.1,58.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAYAtQgKAEgHACQgGADgEAAQgYAAgLgNQgMgNAAgZQAAgWARgRQASgRAXAAQAJAAAMAFQAPAHAAAIQAAAEgCACIgBAKIgBAOQAAARADAIIAEAKIAEAKQAAAFgEADQgEAEgGAAQgEAAgJgJgAgNgTQgKAKAAANQAAANAEAHQAFAGAKAAQAFAAAGgCQAFgCAFgEQgDgWAAgLIAAgHIACgKIgEgBIgDAAQgMAAgKAKg");
	this.shape_7.setTransform(269.7,58.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AggAqQgRgMAAgXQAAgXANgRQAOgTAYAAQARAAAMAFQAOAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAGADQAHADAHAAQAOAAAJgGQAIgFAFAAQAKAAAAAKQAAALgRAHQgNAGgQAAQgWAAgOgLgAgNgXQgGAGgEANIAWgKQANgGAHgFQgGgEgLAAQgIAAgHAGg");
	this.shape_8.setTransform(258.3,58.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgIBEQgFgDABgGIAAgLIABgKIgCgyIgTgBQgMgBAAgMQAAgGAEgDQAEgEAFAAIARABIAAgKIgBgKQAAgFAEgEQAEgEAFABQAOgBAAAZIAAAIIAKgBQALAAAEABQAIADAAAKQAAAFgEAEQgEADgFAAIgGAAIgEAAIgJABIABAyIABAFIAAAGQgBAWgOABQgEAAgEgEg");
	this.shape_9.setTransform(248.2,56.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AggAqQgRgMAAgXQAAgXANgRQAOgTAYAAQARAAAMAFQAOAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAGADQAHADAHAAQAOAAAJgGQAIgFAFAAQAKAAAAAKQAAALgRAHQgNAGgQAAQgWAAgOgLgAgNgXQgGAGgEANIAWgKQANgGAHgFQgGgEgLAAQgIAAgHAGg");
	this.shape_10.setTransform(229.1,58.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAXBIQgDgIgCgPIgBgWIAAgIIAAgHIAAgJQgBgEgEAAQgLAAgIAJQgEAFgIAOQAAAjgDAIQgEAIgJAAQgFAAgEgEQgEgEAAgFIABgFIABgbIAAhAIAAgDIABgQIgBgJIgBgIQAAgGAEgEQAEgDAGAAQAJAAAEAKQABAGAAAMIAAAUIgBATQAHgHAJgEQAHgDAJAAQARAAAHAJQAFAHACAOIABAYIACATIADATIAAAEQAAAFgEAEQgEADgFAAQgKAAgDgJg");
	this.shape_11.setTransform(218,55.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgIBEQgFgDAAgGIABgLIABgKIgDgyIgSgBQgMgBAAgMQAAgGADgDQAEgEAGAAIARABIgBgKIAAgKQAAgFAEgEQAEgEAGABQANgBAAAZIAAAIIAJgBQAMAAAEABQAIADAAAKQAAAFgEAEQgDADgHAAIgEAAIgGAAIgJABIACAyIABAFIAAAGQAAAWgPABQgEAAgEgEg");
	this.shape_12.setTransform(207.4,56.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgSBSQgEgDAAgGIAAgCQADgOAAgMIAAgwIgHABIgGAAQgGAAgDgDQgEgEAAgGQAAgJAJgDIARgBIACgLQACgWAJgLQALgNAXAAQASAAAAANQAAANgRAAQgLAAgGAIQgEAGgBANIAAADIASgBQATAAAAAMQAAANgUAAIgSAAIgBAaIABAaQAAASgDAKQgCALgJAAQgGAAgEgEg");
	this.shape_13.setTransform(188.8,55.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgfApQgOgNgBgXQgBgVANgRQAPgUAZAAQAUAAALAQQAKAOAAAVQAAAWgMAQQgNASgWAAQgSAAgNgNgAgNgQQgGAJAAAMQAAAMAHAGQAFAFAHAAQAHAAAHgGQAHgHAAgLQACgfgSAAQgLAAgHALg");
	this.shape_14.setTransform(178.5,58.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00FF00").s().p("AgIBEQgEgDAAgGIAAgLIAAgKIgBgyIgTgBQgMgBAAgMQAAgGAEgDQAEgEAFAAIARABIAAgKIgBgKQAAgFAEgEQAEgEAFABQAOgBAAAZIAAAIIAKgBQALAAAEABQAIADAAAKQAAAFgEAEQgEADgFAAIgGAAIgEAAIgJABIABAyIABAFIAAAGQgBAWgOABQgEAAgEgEg");
	this.shape_15.setTransform(160.1,56.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00FF00").s().p("AAUAtIgDgUIgBgVIAAgHIAAgJIAAgDIABgFQAAgIgEAAQgIAAgIALQgHAKgFAQIgBAJIAAAJIgBAIIgBAJQAAAFgDAEQgEAEgGAAQgGAAgEgEQgEgEAAgFIgBgJIAAgIIABgbIACgZIAAgJIgBgJQAAgGAEgDQAEgEAGAAQAMAAACAPIAAACQAOgPAPAAQASAAAHAQQAFAKAAAVIAAAGIAAAGQAAAHACAMQACAMAAAIQAAAFgEAEQgEAEgGAAQgMAAgBgMg");
	this.shape_16.setTransform(150.3,58);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00FF00").s().p("AghAqQgQgMAAgXQAAgXANgRQAPgTAXAAQARAAAMAFQAOAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAGADQAHADAIAAQANAAAJgGQAIgFAFAAQAKAAAAAKQAAALgQAHQgOAGgPAAQgWAAgQgLgAgMgXQgHAGgEANIAWgKQAMgGAIgFQgHgEgKAAQgIAAgGAGg");
	this.shape_17.setTransform(139.2,58.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00FF00").s().p("AgeArQgPgNAAgVQAAgSAOgVQAPgYAUAAQAKAAAOAFQARAIAAAIQAAAFgEAEQgDADgGAAQgFAAgFgEQgGgEgMgBQgGABgJAPQgJANAAAKQAAAKAIAGQAHAFAKABQAHAAAJgGQAKgEACAAQAGAAADADQAEAFAAAEQAAAIgRAIQgOAGgKAAQgUAAgPgMg");
	this.shape_18.setTransform(128.5,58.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00FF00").s().p("AgmAzQgDgEAAgFIAAg/IAAgJIAAgJQABgGADgDQADgEAGAAQALAAACALQARgNAUAAQAUAAAAAaIAAAHQgBAPgNAAQgMAAAAgNIgBgKQgUAEgKATIAAAwQAAAFgEAEQgDAEgHAAQgFAAgEgEg");
	this.shape_19.setTransform(118.9,58.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00FF00").s().p("AghAqQgQgMAAgXQAAgXANgRQAPgTAXAAQARAAAMAFQAOAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAGADQAHADAIAAQANAAAJgGQAIgFAFAAQAKAAAAAKQAAALgQAHQgOAGgPAAQgWAAgQgLgAgMgXQgHAGgEANIAWgKQAMgGAIgFQgHgEgKAAQgIAAgGAGg");
	this.shape_20.setTransform(108.2,58.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00FF00").s().p("AgoBOQgDgDAAgGIAAglIAAglQgBgVgBgPIgBgTQAAgIAEgHQAEgGAGAAQAGAAAEAEQAEAEAAAFIAAABQAGgEAGgCQAGgCAHAAQAWABAKASQAJAPgBAWQAAAVgMAOQgNAPgWAAQgHAAgJgBIAAAnQAAAGgFADQgEAEgFAAQgGAAgEgEgAgFguQgGADgGAGIABAoQAJACAHAAQAKAAAGgGQAEgHAAgLQABgNgCgFQgCgLgKgBQgGAAgGADg");
	this.shape_21.setTransform(97.5,60.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00FF00").s().p("AgcBLQgEgDAAgGQAAgIAUguQgKgTgYgqIgEgHQgDgFAAgDQAAgGAFgEQADgEAGAAQAGAAAEAFQAOATASAlIAMgcIAOgaQAEgHAHAAQAGAAAEAEQAEADAAAGIgCAGIghBEQgNAagGARIgFASQgEAJgJAAQgGAAgEgEg");
	this.shape_22.setTransform(77.8,60.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00FF00").s().p("AgIBEQgFgDABgGIAAgLIABgKIgCgyIgTgBQgMgBAAgMQAAgGAEgDQAEgEAFAAIARABIgBgKIAAgKQAAgFAEgEQAEgEAGABQANgBAAAZIAAAIIAKgBQALAAAEABQAIADAAAKQAAAFgEAEQgEADgFAAIgGAAIgEAAIgJABIABAyIABAFIAAAGQgBAWgOABQgEAAgEgEg");
	this.shape_23.setTransform(67.7,56.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00FF00").s().p("AAUAtIgDgUIgBgVIAAgHIAAgJIAAgDIABgFQAAgIgEAAQgJAAgGALQgJAKgEAQIgBAJIgBAJIAAAIIgBAJQAAAFgDAEQgFAEgFAAQgGAAgEgEQgDgEgBgFIgBgJIAAgIIABgbIACgZIgBgJIAAgJQAAgGAEgDQAEgEAGAAQAMAAABAPIAAACQAPgPAPAAQASAAAHAQQAFAKAAAVIAAAGIAAAGQAAAHACAMQACAMAAAIQAAAFgEAEQgEAEgFAAQgNAAgBgMg");
	this.shape_24.setTransform(57.9,58);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00FF00").s().p("AghAqQgQgMAAgXQAAgXANgRQAOgTAYAAQARAAALAFQAPAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAHADQAGADAHAAQAOAAAJgGQAIgFAFAAQAKAAAAAKQAAALgQAHQgOAGgQAAQgVAAgQgLgAgNgXQgGAGgEANIAWgKQAMgGAIgFQgHgEgKAAQgIAAgHAGg");
	this.shape_25.setTransform(46.8,58.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00FF00").s().p("AAEAfQgDgJgDgYIgCAFIgQAmQgBAEgCACQgFAHgIAAQgFAAgFgIQgFgJgDgNQgDgMgHgoIgBgNQAAgGAEgDQAEgEAGAAQAKAAADALIACANIABAOIAFAXIAQgwQAEgNAKAAQALAAADAPIAGAaIAEAaIAQg6QABgJALAAQAFAAAEAEQAFAEAAAFIAAADIgVBEQgDAJgHAJQgFAHgHAAQgNgBgGgXg");
	this.shape_26.setTransform(34.6,58.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00FF00").s().p("AgJBHQgEgEAAgFIAAgFIABgEIgBgNIAAgOQAAgNgDgWIgCgjIgFAAQgWAAgNgDQgLgDAAgKQAAgFAEgEQAEgFAGABIAQABIAQACIASgBIAQAAIAXABIAWABQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAIgYgBIgYgBIADAnQACAYAAAPIABAKIAAAKQAAAHgDAGQgEAIgHAAQgFAAgEgEg");
	this.shape_27.setTransform(20.8,55.6);

	this.instance_1 = new lib.sample_hotdogs();
	this.instance_1.parent = this;
	this.instance_1.setTransform(143,-29.1,1,1,0,0,0,144.3,16);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgKAJQgFgEAAgFQAAgEAFgEQAFgEAFAAQAHAAAEAEQAFAEAAAEQAAAFgFAEQgEAEgHAAQgFAAgFgEg");
	this.shape_28.setTransform(362.7,38.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAUAtIgDgUIgBgVIAAgHIABgJIAAgDIAAgFQAAgIgEAAQgJAAgGALQgJAKgEAQIgBAJIgBAJIAAAIIgBAJQAAAFgDAEQgFAEgFAAQgGAAgEgEQgDgEgBgFIAAgJIgBgIIABgbIACgZIgBgJIAAgJQAAgGAEgDQAEgEAGAAQANAAAAAPIAAACQAPgPAOAAQATAAAHAQQAFAKAAAVIAAAGIAAAGQAAAHACAMQACAMAAAIQAAAFgEAEQgEAEgFAAQgMAAgCgMg");
	this.shape_29.setTransform(353.3,33.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AggAqQgRgMAAgXQAAgXANgRQAPgTAXAAQARAAALAFQAPAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAHADQAGADAHAAQAOAAAJgGQAIgFAFAAQAKAAAAAKQAAALgRAHQgNAGgQAAQgVAAgPgLgAgNgXQgGAGgEANIAWgKQANgGAHgFQgGgEgLAAQgIAAgHAGg");
	this.shape_30.setTransform(342.2,33.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgIBEQgEgEgBgFIABgLIAAgKIgBgyIgTgBQgMgBAAgMQAAgFAEgEQADgEAGAAIARACIAAgLIgBgKQAAgFAEgEQAEgDAFAAQAOgBAAAZIAAAIIAKgBQALAAAEACQAIACAAAKQAAAFgEAEQgEADgGAAIgFAAIgEAAIgJABIABAyIAAAFIAAAGQABAWgOABQgFgBgEgDg");
	this.shape_31.setTransform(332.1,32.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgIBEQgFgEABgFIAAgLIABgKIgDgyIgSgBQgMgBAAgMQAAgFADgEQAFgEAFAAIARACIgBgLIAAgKQAAgFAEgEQAEgDAGAAQANgBAAAZIAAAIIAJgBQAMAAAEACQAIACAAAKQAAAFgEAEQgDADgGAAIgFAAIgGAAIgJABIACAyIABAFIAAAGQAAAWgPABQgEgBgEgDg");
	this.shape_32.setTransform(322.7,32.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgmAzQgDgEAAgFIAAg/IAAgJIAAgJQAAgGAEgDQADgEAGAAQALAAACALQAQgNAWAAQATAAAAAaIAAAHQgBAPgNAAQgMAAAAgNIAAgKQgWAEgJATIAAAwQAAAFgDAEQgEAEgGAAQgHAAgDgEg");
	this.shape_33.setTransform(302.9,33.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF0000").s().p("AggAqQgRgMAAgXQAAgXANgRQAOgTAYAAQARAAAMAFQAOAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAGADQAHADAHAAQAOAAAJgGQAIgFAFAAQAKAAAAAKQAAALgRAHQgNAGgQAAQgWAAgOgLgAgNgXQgGAGgEANIAWgKQANgGAHgFQgGgEgLAAQgIAAgHAGg");
	this.shape_34.setTransform(283.5,33.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF0000").s().p("AgmAzQgDgEAAgFIAAg/IAAgJIAAgJQABgGADgDQADgEAGAAQALAAACALQARgNAUAAQAUAAAAAaIAAAHQgBAPgNAAQgMAAAAgNIAAgKQgWAEgJATIAAAwQAAAFgDAEQgFAEgFAAQgHAAgDgEg");
	this.shape_35.setTransform(273.5,33.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF0000").s().p("AAXAtQgIAEgHACQgHADgEAAQgXAAgMgNQgMgNAAgZQAAgWARgRQARgRAYAAQAJAAAMAFQAPAHAAAIQAAAEgCACIgCAKIAAAOQAAARACAIIAFAKIAEAKQAAAFgEADQgEAEgFAAQgFAAgKgJgAgNgTQgKAKAAANQAAANAFAHQAEAGAKAAQAFAAAFgCQAFgCAGgEQgEgWAAgLIABgHIABgKIgDgBIgDAAQgMAAgKAKg");
	this.shape_36.setTransform(263,33.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgbAzQgOgGAAgLQgBgJAMAAQAFAAAIADQAIACAGAAQASABAAgJQAAgFgOgFIgYgMQgOgKAAgNQAAgVAUgGQANgEAYAAQAJAAAFADQAGADABAJQAAARgKAAQgJABgDgJIgHgBQgXABAAAGQAAAEANAGQATAJAHAFQAOAJAAANQAAARgPAJQgMAHgSAAQgNAAgLgEg");
	this.shape_37.setTransform(243.7,33.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgxA/QAAgGADgDQADgEAGABIANABQAIACAGAAQAOAAAHgJQAGgJABgSQgFAEgGADQgGADgHgBQgTAAgMgMQgMgNAAgTQAAgaAQgRQARgRAbAAQAKABAGACQAHACAEAEQAMACAAANQAAAHgCALQgEAXgBAYQgBAhgJAOQgNATggAAQglAAAAgPgAgOgsQgJALAAAPQAAAMAFAGQAEAEAJABQAHgBAIgHQAIgJABgJIAEgeIgGgDIgHAAQgPAAgJAKg");
	this.shape_38.setTransform(233.6,36.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgfApQgOgNgBgXQgBgVANgRQAPgUAZAAQAUAAALAQQAKAOAAAVQAAAWgMAQQgNASgWAAQgSAAgNgNgAgNgQQgGAJAAAMQAAAMAHAGQAFAFAHAAQAHAAAHgGQAHgHAAgLQACgfgSAAQgLAAgHALg");
	this.shape_39.setTransform(223.1,34);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAbBJQgHAFgHABIgNABQgXAAgOgOQgPgOAAgXQAAgZAPgPQAPgRAXAAQAHAAAGABQAGACAEAEQABgiACgMQACgMAKAAQAHAAADAEQADADABAGIgCAqQgDAcAAAOQAAAjADALIAAAEQAAAFgFAEQgDADgGAAQgGAAgEgHgAgTAFQgIAHAAARQABALAHAHQAIAIALAAQAGAAAEgCIAJgGIADgDIAAgkQgDgGgFgCQgGgDgHAAQgNAAgHAIg");
	this.shape_40.setTransform(212,31.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgIBEQgEgEAAgFIAAgLIAAgKIgBgyIgTgBQgMgBAAgMQAAgFAEgEQADgEAGAAIARACIAAgLIgBgKQAAgFAEgEQAEgDAFAAQAOgBAAAZIAAAIIAKgBQALAAAEACQAIACAAAKQAAAFgEAEQgEADgFAAIgGAAIgEAAIgJABIABAyIAAAFIAAAGQABAWgOABQgFgBgEgDg");
	this.shape_41.setTransform(201.6,32.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgfApQgOgNgBgXQgBgVANgRQAPgUAZAAQAUAAALAQQAKAOAAAVQAAAWgMAQQgNASgWAAQgSAAgNgNgAgNgQQgGAJAAAMQAAAMAHAGQAFAFAHAAQAHAAAHgGQAHgHAAgLQACgfgSAAQgLAAgHALg");
	this.shape_42.setTransform(191.5,34);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AggAqQgRgMAAgXQAAgXANgRQAOgTAYAAQARAAAMAFQAOAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAGADQAHADAIAAQANAAAJgGQAIgFAFAAQAKAAAAAKQAAALgQAHQgOAGgPAAQgWAAgPgLgAgMgXQgHAGgEANIAWgKQAMgGAIgFQgHgEgKAAQgIAAgGAGg");
	this.shape_43.setTransform(160.5,33.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAXBIQgDgIgCgPIgBgWIAAgIIAAgHIAAgJQgBgEgEAAQgLAAgIAJQgEAFgIAOQAAAjgDAIQgEAIgJAAQgFAAgEgEQgEgEAAgFIABgFIABgbIAAhAIAAgDIABgQIgBgJIgBgIQAAgGAEgEQAEgDAGAAQAJAAAEAKQABAGAAAMIAAAUIgBATQAHgHAJgEQAHgDAJAAQARAAAHAJQAFAHACAOIABAYIACATIADATIAAAEQAAAFgEAEQgEADgFAAQgKAAgDgJg");
	this.shape_44.setTransform(149.4,31.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgIBEQgEgEgBgFIABgLIAAgKIgCgyIgSgBQgMgBAAgMQAAgFADgEQAEgEAGAAIARACIgBgLIAAgKQAAgFAEgEQAEgDAFAAQAOgBAAAZIAAAIIAJgBQAMAAAEACQAIACAAAKQAAAFgEAEQgDADgHAAIgEAAIgGAAIgJABIACAyIAAAFIAAAGQAAAWgNABQgFgBgEgDg");
	this.shape_45.setTransform(138.8,32.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgfApQgOgNgBgXQgBgVANgRQAPgUAZAAQAUAAALAQQAKAOAAAVQAAAWgMAQQgNASgWAAQgSAAgNgNgAgNgQQgGAJAAAMQAAAMAHAGQAFAFAHAAQAHAAAHgGQAHgHAAgLQACgfgSAAQgLAAgHALg");
	this.shape_46.setTransform(109.9,34);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#00FF00").s().p("AAXBIQgDgIgCgPIgBgWIAAgIIAAgHIAAgJQgBgEgEAAQgLAAgIAJQgEAFgIAOQAAAjgDAIQgEAIgJAAQgFAAgEgEQgEgEAAgFIABgFIABgbIAAhAIAAgDIABgQIgBgJIgBgIQAAgGAEgEQAEgDAGAAQAJAAAEAKQABAGAAAMIAAAUIgBATQAHgHAJgEQAHgDAJAAQARAAAHAJQAFAHACAOIABAYIACATIADATIAAAEQAAAFgEAEQgEADgFAAQgKAAgDgJg");
	this.shape_47.setTransform(90.6,31.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#00FF00").s().p("AgIBEQgFgEAAgFIABgLIAAgKIgCgyIgSgBQgMgBAAgMQAAgFADgEQAFgEAFAAIARACIgBgLIAAgKQAAgFAEgEQAEgDAGAAQANgBAAAZIAAAIIAJgBQAMAAAEACQAIACAAAKQAAAFgEAEQgDADgHAAIgEAAIgGAAIgJABIACAyIAAAFIAAAGQAAAWgNABQgFgBgEgDg");
	this.shape_48.setTransform(80,32.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#00FF00").s().p("AgSBSQgEgDAAgGIAAgCQADgOAAgMIAAgwIgHABIgGAAQgGAAgDgDQgEgEAAgGQAAgJAJgDIARgBIACgLQACgWAJgLQALgNAXAAQASAAAAANQAAANgRAAQgLAAgGAIQgEAGgBANIAAADIASgBQATAAAAAMQAAANgUAAIgSAAIgBAaIABAaQAAASgDAKQgCALgJAAQgGAAgEgEg");
	this.shape_49.setTransform(70,31.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#00FF00").s().p("AgLBHQgEgEAAgFIgBgSIAAgSIABgWIABgVQAAgFAEgEQADgEAHAAQAEAAAEAEQAEAEAAAFIgBAVIgBAWIAAASIAAASQAAAFgDAEQgEAEgFAAQgFAAgEgEgAgIgxQgFgEAAgGQAAgGAFgEQAFgFAEAAQAHAAAEAFQAFAEAAAGQAAAGgFAEQgEAEgHAAQgEAAgFgEg");
	this.shape_50.setTransform(62.5,31.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#00FF00").s().p("AgSBSQgEgDAAgGIAAgCQADgOAAgMIAAgwIgHABIgGAAQgGAAgDgDQgEgEAAgGQAAgJAJgDIARgBIACgLQACgWAJgLQALgNAXAAQASAAAAANQAAANgRAAQgLAAgGAIQgEAGgBANIAAADIASgBQATAAAAAMQAAANgUAAIgSAAIgBAaIABAaQAAASgDAKQgCALgJAAQgGAAgEgEg");
	this.shape_51.setTransform(54.3,31.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#00FF00").s().p("AghAJQgFgDAAgGQAAgEAFgEQAFgCAGAAIAWgBIAXAAQAGAAAFACQAFADAAAGQAAAKgOABIgvABQgGAAgFgDg");
	this.shape_52.setTransform(43.2,33.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#00FF00").s().p("AghAqQgQgMAAgXQAAgXANgRQAOgTAYAAQARAAALAFQAPAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAHADQAGADAHAAQAOAAAJgGQAIgFAFAAQAKAAAAAKQAAALgQAHQgOAGgQAAQgVAAgQgLgAgNgXQgGAGgEANIAWgKQANgGAHgFQgHgEgKAAQgIAAgHAGg");
	this.shape_53.setTransform(31.4,33.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#00FF00").s().p("AAUAtIgDgUIgBgVIAAgHIAAgJIAAgDIABgFQAAgIgEAAQgJAAgGALQgJAKgEAQIgBAJIgBAJIAAAIIgBAJQAAAFgDAEQgEAEgGAAQgGAAgEgEQgDgEgBgFIgBgJIAAgIIABgbIACgZIgBgJIAAgJQAAgGAEgDQAEgEAGAAQAMAAABAPIAAACQAPgPAPAAQASAAAHAQQAFAKAAAVIAAAGIAAAGQAAAHACAMQACAMAAAIQAAAFgEAEQgEAEgFAAQgNAAgBgMg");
	this.shape_54.setTransform(20.9,33.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#00FF00").s().p("AgzA9QgWgSAAgcQAAghAVgbQAXgfAjAAQAiAAARAPQARARAAAfQAAAggTAbQgWAfgjAAQgdAAgUgQgAgfgcQgOATAAAYQAAAPAMALQANAJASABQAUAAAPgWQANgTAAgXQAAgVgJgIQgJgIgWABQgVgBgQAWg");
	this.shape_55.setTransform(7.5,31.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgLAJQgEgEAAgFQAAgEAEgEQAGgEAFAAQAHAAAFAEQAEAEAAAEQAAAFgEAEQgFAEgHAAQgFAAgGgEg");
	this.shape_56.setTransform(362.5,38.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAUAtIgCgUIgCgVIAAgHIABgJIAAgDIAAgFQAAgIgEAAQgJAAgHALQgHAKgFAQIgBAJIAAAJIgBAIIAAAJQAAAFgFAEQgEAEgFAAQgGAAgEgEQgEgEABgFIgBgJIgBgIIACgbIABgZIAAgJIgBgJQAAgGAEgDQAEgEAGAAQANAAABAPIAAACQAOgPAOAAQATAAAHAQQAFAKAAAVIAAAGIAAAGQAAAHACAMQACAMAAAIQAAAFgEAEQgEAEgFAAQgMAAgCgMg");
	this.shape_57.setTransform(353.1,33.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgIBEQgFgEABgFIAAgLIABgKIgCgyIgTgBQgMgBAAgMQAAgFAEgEQAEgEAFAAIARACIAAgLIgBgKQAAgFAEgEQAEgDAFAAQAOgBAAAZIAAAIIAKgBQALAAAEACQAIACAAAKQAAAFgEAEQgEADgFAAIgGAAIgEAAIgJABIABAyIABAFIAAAGQgBAWgOABQgEgBgEgDg");
	this.shape_58.setTransform(331.9,32.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgIBEQgFgEAAgFIABgLIAAgKIgCgyIgSgBQgMgBAAgMQAAgFADgEQAFgEAFAAIARACIgBgLIAAgKQAAgFAEgEQAEgDAGAAQANgBAAAZIAAAIIAJgBQAMAAAEACQAIACAAAKQAAAFgEAEQgDADgHAAIgEAAIgGAAIgJABIACAyIAAAFIAAAGQAAAWgNABQgFgBgEgDg");
	this.shape_59.setTransform(322.5,32.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgmAzQgDgEAAgFIAAg/IAAgJIAAgJQABgGADgDQADgEAGAAQALAAACALQARgNAUAAQAUAAAAAaIAAAHQgBAPgNAAQgMAAAAgNIAAgKQgWAEgJATIAAAwQAAAFgDAEQgFAEgFAAQgHAAgDgEg");
	this.shape_60.setTransform(302.7,33.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FF0000").s().p("AggAqQgRgMAAgXQAAgXANgRQAOgTAYAAQARAAAMAFQAOAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAGADQAHADAIAAQANAAAJgGQAIgFAFAAQAKAAAAAKQAAALgRAHQgNAGgPAAQgWAAgPgLgAgMgXQgHAGgEANIAWgKQAMgGAIgFQgHgEgKAAQgIAAgGAGg");
	this.shape_61.setTransform(283.3,33.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FF0000").s().p("AgmAzQgDgEAAgFIAAg/IABgJIAAgJQAAgGADgDQADgEAGAAQALAAACALQARgNAUAAQAUAAAAAaIAAAHQgBAPgNAAQgMAAAAgNIgBgKQgUAEgKATIAAAwQAAAFgEAEQgDAEgHAAQgFAAgEgEg");
	this.shape_62.setTransform(273.3,33.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF0000").s().p("AAXAtQgJAEgHACQgGADgEAAQgXAAgMgNQgMgNAAgZQAAgWASgRQAQgRAYAAQAJAAANAFQAOAHAAAIQAAAEgCACIgBAKIgBAOQAAARACAIIAFAKIAEAKQAAAFgEADQgEAEgFAAQgFAAgKgJgAgNgTQgKAKAAANQAAANAEAHQAGAGAJAAQAFAAAFgCQAGgCAEgEQgDgWAAgLIABgHIABgKIgDgBIgDAAQgMAAgKAKg");
	this.shape_63.setTransform(262.8,33.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgbAzQgPgGAAgLQAAgJAMAAQAEAAAJADQAIACAGAAQASABAAgJQAAgFgOgFIgZgMQgNgKAAgNQAAgVAUgGQANgEAYAAQAJAAAFADQAHADAAAJQAAARgKAAQgKABgCgJIgIgBQgWABAAAGQAAAEANAGQAUAJAGAFQAOAJABANQAAARgQAJQgNAHgRAAQgNAAgLgEg");
	this.shape_64.setTransform(243.5,33.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAbBJQgHAFgHABIgNABQgXAAgOgOQgPgOABgXQgBgZAPgPQAPgRAXAAQAHAAAGABQAFACAFAEQABgiACgMQABgMALAAQAHAAADAEQAEADAAAGIgDAqQgCAcAAAOQAAAjACALIAAAEQAAAFgEAEQgDADgFAAQgHAAgEgHgAgTAFQgIAHABARQAAALAHAHQAIAIALAAQAGAAAEgCIAJgGIADgDIAAgkQgDgGgGgCQgEgDgIAAQgNAAgHAIg");
	this.shape_65.setTransform(211.8,31.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgIBEQgFgEABgFIAAgLIABgKIgCgyIgTgBQgMgBAAgMQAAgFAEgEQAEgEAFAAIARACIAAgLIgBgKQAAgFAEgEQAEgDAFAAQAOgBAAAZIAAAIIAKgBQALAAAEACQAIACAAAKQAAAFgEAEQgEADgFAAIgGAAIgEAAIgJABIABAyIABAFIAAAGQgBAWgOABQgEgBgEgDg");
	this.shape_66.setTransform(201.4,32.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AghAqQgQgMAAgXQAAgXANgRQAPgTAXAAQARAAALAFQAPAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAHADQAGADAIAAQANAAAJgGQAIgFAFAAQAKAAAAAKQAAALgQAHQgOAGgPAAQgXAAgPgLgAgMgXQgHAGgEANIAWgKQAMgGAIgFQgGgEgLAAQgIAAgGAGg");
	this.shape_67.setTransform(160.3,33.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#009900").s().p("AAXBIQgDgIgCgPIgBgWIAAgIIAAgHIAAgJQgBgEgEAAQgLAAgIAJQgEAFgIAOQAAAjgDAIQgEAIgJAAQgFAAgEgEQgEgEAAgFIABgFIABgbIAAhAIAAgDIABgQIgBgJIgBgIQAAgGAEgEQAEgDAGAAQAJAAAEAKQABAGAAAMIAAAUIgBATQAHgHAJgEQAHgDAJAAQARAAAHAJQAFAHACAOIABAYIACATIADATIAAAEQAAAFgEAEQgEADgFAAQgKAAgDgJg");
	this.shape_68.setTransform(90.4,31.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#009900").s().p("AgIBEQgEgEgBgFIABgLIAAgKIgCgyIgSgBQgMgBAAgMQAAgFADgEQAEgEAGAAIARACIAAgLIgBgKQAAgFAEgEQAEgDAFAAQAOgBAAAZIAAAIIAKgBQALAAAEACQAIACAAAKQAAAFgEAEQgEADgGAAIgEAAIgFAAIgJABIABAyIAAAFIAAAGQABAWgOABQgFgBgEgDg");
	this.shape_69.setTransform(79.8,32.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#009900").s().p("AgSBSQgEgDAAgGIAAgCQADgOAAgMIAAgwIgHABIgGAAQgGAAgDgDQgEgEAAgGQAAgJAJgDIARgBIACgLQACgWAJgLQALgNAXAAQASAAAAANQAAANgRAAQgLAAgGAIQgEAGgBANIAAADIASgBQATAAAAAMQAAANgUAAIgSAAIgBAaIABAaQAAASgDAKQgCALgJAAQgGAAgEgEg");
	this.shape_70.setTransform(69.8,31.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#009900").s().p("AgMBHQgDgEAAgFIAAgSIgBgSIABgWIABgVQAAgFAEgEQADgEAHAAQAFAAADAEQAEAEAAAFIgBAVIgBAWIABASIAAASQgBAFgDAEQgEAEgFAAQgGAAgEgEgAgIgxQgEgEgBgGQABgGAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAGQAAAGgFAEQgEAEgGAAQgFAAgFgEg");
	this.shape_71.setTransform(62.3,31.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#009900").s().p("AgSBSQgEgDAAgGIAAgCQADgOAAgMIAAgwIgHABIgGAAQgGAAgDgDQgEgEAAgGQAAgJAJgDIARgBIACgLQACgWAJgLQALgNAXAAQASAAAAANQAAANgRAAQgLAAgGAIQgEAGgBANIAAADIASgBQATAAAAAMQAAANgUAAIgSAAIgBAaIABAaQAAASgDAKQgCALgJAAQgGAAgEgEg");
	this.shape_72.setTransform(54.1,31.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#009900").s().p("AghAJQgFgDAAgGQAAgEAFgEQAFgCAGAAIAWgBIAXAAQAGAAAFACQAFADAAAGQAAAKgOABIgvABQgGAAgFgDg");
	this.shape_73.setTransform(43,33.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#009900").s().p("AggAqQgRgMAAgXQAAgXANgRQAPgTAXAAQARAAAMAFQAOAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAGADQAHADAHAAQAOAAAJgGQAIgFAFAAQAKAAAAAKQAAALgRAHQgNAGgQAAQgWAAgOgLgAgNgXQgGAGgEANIAWgKQANgGAHgFQgGgEgLAAQgIAAgHAGg");
	this.shape_74.setTransform(31.2,33.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#009900").s().p("AAUAtIgCgUIgCgVIAAgHIABgJIAAgDIAAgFQAAgIgEAAQgJAAgGALQgJAKgEAQIgBAJIgBAJIAAAIIAAAJQAAAFgFAEQgEAEgFAAQgGAAgEgEQgDgEAAgFIgBgJIgBgIIACgbIABgZIgBgJIAAgJQAAgGAEgDQAEgEAGAAQANAAAAAPIAAACQAPgPAOAAQATAAAHAQQAFAKAAAVIAAAGIAAAGQAAAHACAMQACAMAAAIQAAAFgEAEQgEAEgFAAQgMAAgCgMg");
	this.shape_75.setTransform(20.7,33.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#009900").s().p("AgzA9QgWgSAAgcQAAghAVgbQAXgfAjAAQAiAAARAPQARARAAAfQAAAggTAbQgWAfgjAAQgdAAgUgQgAgfgcQgOATAAAYQAAAPAMALQANAJASABQAUAAAPgWQANgTAAgXQAAgVgJgIQgJgIgWABQgVgBgQAWg");
	this.shape_76.setTransform(7.3,31.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgNAaQAAgFAEgEQAFgDAEAAQAPAAAAAWQAAAGgEAEQgEADgGAAQgOAAAAgXgAgJgTQgEgEAAgGIgBgDIAAgDQAAgGAEgDQAEgEAGAAQANAAAAATQAAAGgDAEQgEADgGAAQgFAAgEgDg");
	this.shape_77.setTransform(67.3,-27.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AghAqQgQgMAAgXQAAgXANgRQAOgTAYAAQARAAALAFQAPAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAHADQAGADAHAAQAOAAAJgGQAIgFAFAAQAKAAAAAKQAAALgQAHQgOAGgQAAQgVAAgQgLgAgNgXQgGAGgEANIAWgKQAMgGAIgFQgHgEgKAAQgIAAgHAGg");
	this.shape_78.setTransform(57.1,-25.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgIBNQgFgEAAgGIAAiGQAAgGAFgDQADgDAGAAQAFAAAEADQAEADgBAGIAACBQAAASgNAAQgFAAgDgDg");
	this.shape_79.setTransform(48.8,-28.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgoBOQgDgDAAgGIAAgkIAAgmQAAgVgCgPIgCgUQAAgIAFgFQADgHAIAAQAFAAAEAEQAEADgBAGIAAABQAHgEAHgCQAFgBAHAAQAWAAALASQAHAPABAWQAAAVgNAOQgNAQgWAAQgIAAgIgCIAAAnQgBAGgEADQgDAEgGAAQgGAAgEgEgAgEguQgHADgHAGIACAoQAIACAIAAQAKAAAFgGQAGgHAAgLQgBgNgBgFQgDgMgJABQgHAAgEACg");
	this.shape_80.setTransform(41,-23.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AAYAtQgKAEgGACQgHADgEAAQgYAAgLgNQgMgNAAgZQAAgWARgRQASgRAXAAQAJAAAMAFQAPAHAAAIQAAAEgCACIgBAKIgBAOQAAARADAIIAEAKIAEAKQAAAFgEADQgEAEgGAAQgEAAgJgJgAgNgTQgKAKAAANQAAANAFAHQAEAGAKAAQAFAAAGgCQAFgCAFgEQgDgWAAgLIAAgHIACgKIgEgBIgDAAQgMAAgKAKg");
	this.shape_81.setTransform(14.5,-25.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("Ag0BAQgMgKAAgMQAAgGAEgEQAEgEAGAAQAJAAAEAJQAFAMAUAAQAQAAAQgHQAQgIAAgJQAAgMgKgEQgIgDgUAAQgRgBgNgFQgSgIAAgPQAAgTAUgQQAUgQAXAAQAKAAAOAFQASAFAAAHQAAAGgEADQgEAFgGAAIgOgCIgOgCQgNAAgKAGQgLAGgBAHQAAAEAFACQADADAHABIAYABQAWACAMAKQAOALAAAVQAAAZgcANQgXAKgbAAQgZAAgOgLg");
	this.shape_82.setTransform(1.9,-27.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14,p:{x:178.5,y:58.2}},{t:this.shape_13,p:{x:188.8,y:55.9}},{t:this.shape_12},{t:this.shape_11,p:{x:218,y:55.4}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8,p:{x:258.3,y:58.1}},{t:this.shape_7},{t:this.shape_6,p:{x:283.1,y:58.1}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]},105).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46,p:{x:109.9}},{t:this.shape_13,p:{x:120.2,y:31.7}},{t:this.shape_45},{t:this.shape_44,p:{x:149.4}},{t:this.shape_43},{t:this.shape_11,p:{x:180.8,y:31.2}},{t:this.shape_42,p:{x:191.5}},{t:this.shape_41,p:{x:201.6}},{t:this.shape_40},{t:this.shape_39,p:{x:223.1}},{t:this.shape_38,p:{x:233.6}},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_14,p:{x:312.6,y:34}},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.instance_1}]},102).to({state:[{t:this.shape_82},{t:this.shape_81},{t:this.shape_6,p:{x:27.9,y:-25.9}},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_46,p:{x:109.7}},{t:this.shape_13,p:{x:120,y:31.7}},{t:this.shape_41,p:{x:138.6}},{t:this.shape_44,p:{x:149.2}},{t:this.shape_67},{t:this.shape_11,p:{x:180.6,y:31.2}},{t:this.shape_42,p:{x:191.3}},{t:this.shape_66},{t:this.shape_65},{t:this.shape_39,p:{x:222.9}},{t:this.shape_38,p:{x:233.4}},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_14,p:{x:312.4,y:34}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_8,p:{x:342,y:33.9}},{t:this.shape_57},{t:this.shape_56}]},101).wait(1));

	// arrow
	this.instance_2 = new lib.arrow_motion();
	this.instance_2.parent = this;
	this.instance_2.setTransform(160.1,349.2,0.863,0.863,0,0,180,-19.8,329.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(105).to({_off:false},0).wait(102).to({scaleX:0.78,scaleY:0.78,x:126.4,y:304.2},0).wait(102));

	// Example
	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#00FF00").s().p("Ah/CGQgdg4AAhWQAAhLAmg5QAuhDBOAAQBKAAAqA8QAjAzAABIQAAB0goA6QgoA6hOAAQhXAAgnhKgAg+hhQgWAkAAAxQAAA+AMAjQATA4A0AAQApAAAWgnQAVgnAAhOQAAg+gTgfQgUgfgnAAQgpAAgaAqg");
	this.shape_83.setTransform(169.9,106);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#00FF00").s().p("AhWDIIgJgBQgYAAgIgTQgFgMAAgZQAAgxAWghQARgaAlgZIBFgtQApgeAAgmQAAgKgQgKQgQgKgQAAQgbAAgfAZQgfAYgLAAQgOAAgKgGQgOgJAAgPQAAgQAOgLQAfgcAXgNQAjgSAjAAQAtAAAlAXQApAcAAArQAAAtgVAfQgPAZgjAWIhBApQgxAhgDAqIApgFQA3gDAYAAQAXAAAWAKQAbAMAAATQAAAOgKAKQgKALgPAAIgUgCIgUgDIhMAAQgJAAgVADQgUACgKAAIgIgBg");
	this.shape_84.setTransform(137.5,105.8);

	this.instance_3 = new lib.static_percent_sign("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(213.2,106,0.595,0.595,0,0,0,32.9,48.2);

	this.instance_4 = new lib.static_one_fifth_fraction("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(175,88.4,1,1,0,0,0,40.1,58.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.shape_84},{t:this.shape_83}]},105).to({state:[{t:this.instance_4}]},102).wait(102));

	// rule
	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgNAMQgHgFAAgHQAAgFAHgGQAGgFAHAAQAJAAAGAFQAGAFAAAGQAAAHgGAFQgGAFgJAAQgHAAgGgFg");
	this.shape_85.setTransform(283.7,183.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AAjBgQgJAFgJACQgJABgJAAQgcAAgTgSQgTgTAAgcQAAgiATgUQATgVAfAAQAJAAAHACQAIACAGAEQABgsACgQQACgPAPAAQAHAAAFAFQAEAFAAAHQAAASgCAlQgEAkAAASQAAAuAEAPIAAAEQAAAHgFAFQgFAEgHAAQgJAAgFgIgAgaAGQgIAKgBAWQAAAOALAKQAJAJAOAAQAJAAAFgCQAEgBAHgHIAFgEIAAguQgFgIgGgDQgHgEgJAAQgSAAgKAKg");
	this.shape_86.setTransform(270.4,173.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgqA3QgWgQAAgdQAAggARgWQASgYAfAAQAXAAAOAHQATAJAAAUQAAAOgPALQgIAFgVAIIgpATQAFAHAJADQAJADAKAAQARAAAMgHQAKgGAHAAQANAAAAANQAAAOgVAJQgSAIgUAAQgeAAgSgOgAgQgeQgJAIgFAQIAdgNQAQgHAKgHQgJgFgOAAQgLAAgHAIg");
	this.shape_87.setTransform(255.5,177.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AAaA6IgDgaQgDgOAAgMIABgKIAAgMIABgEIAAgGQAAgLgFAAQgLAAgJAOQgLAOgFAVIgCALIAAAMIgCALIAAALQAAAHgFAFQgFAFgIAAQgIAAgEgFQgFgFgBgHIAAgLIgBgLIACgjIACghIAAgMIgBgLQAAgHAFgFQAFgFAIAAQAQAAACAUIAAABQASgSAUAAQAYAAAJAUQAGANAAAbIAAAJIgBAHQAAAKAEAQQACAPAAAKQAAAHgFAFQgFAFgHAAQgQAAgCgQg");
	this.shape_88.setTransform(241.7,177.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgpA1QgSgRgBgdQgBgcAQgWQATgaAiAAQAZAAAPAVQAOASAAAbQAAAcgQAVQgSAYgcAAQgYgBgRgQgAgSgVQgHAMAAAQQAAAPAJAHQAGAHAKAAQAKAAAIgIQAJgIABgPQABgogXAAIgBAAQgOAAgJAOg");
	this.shape_89.setTransform(227.8,177.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgPBcQgFgEAAgIIgBgYIAAgXIABgcIABgbQAAgHAFgFQAFgFAIAAQAHAAAFAFQAEAFAAAHIgBAbIgBAcIAAAXIABAYQAAAIgFAEQgFAFgHAAQgHAAgFgFgAgLhAQgGgFAAgJQAAgIAGgEQAGgGAHAAQAIAAAGAGQAGAEAAAIQAAAJgGAFQgGAFgIAAQgHAAgGgFg");
	this.shape_90.setTransform(217.8,174.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgKBZQgGgFAAgHIAAgOIAAgNIgChBIgXgCQgRgCABgPQAAgHAEgFQAGgFAHAAIAVACIAAgOIgBgMQAAgHAGgFQAFgFAHAAQASAAAAAgIAAAKIAMgBQAPAAAGACQAJAEABAMQAAAHgGAFQgEAFgIAAIgGgBIgHAAIgMABIACBCIABAGIAAAIQAAAdgTAAQgGAAgEgEg");
	this.shape_91.setTransform(207.7,175.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgxBCQgFgEAAgIIAAhSIABgLIAAgMQAAgHAFgFQAEgFAHAAQAOAAADAPQAWgRAbAAQAZAAAAAiIAAAIQgBAUgRAAQgPAAAAgRIgBgNQgcAFgMAZIAAA+QABAIgGAFQgFAEgHAAQgIAAgEgFg");
	this.shape_92.setTransform(195.6,177.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgpA1QgSgRgBgdQgBgcAQgWQATgaAiAAQAZAAAPAVQAOASAAAbQAAAcgQAVQgSAYgcAAQgYgBgRgQgAgSgVQgHAMAAAQQAAAPAJAHQAGAHAKAAQAKAAAIgIQAJgIABgPQABgogXAAIgBAAQgOAAgJAOg");
	this.shape_93.setTransform(182.1,177.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("Ag0BmQgFgFAAgIIAAgvIAAgxQAAgbgBgUIgCgZQgBgLAFgHQAGgJAJAAQAHAAAFAFQAFAFAAAHIAAABQAIgFAIgCQAIgDAJAAQAdAAANAZQALATgBAdQABAbgRATQgRATgcAAQgKAAgMgCIAAAzQAAAIgFAFQgFAFgHAAQgIAAgFgFgAgGg8QgIAEgJAHQABAaABAaQALADAKAAQANAAAHgIQAHgIgBgPQAAgRgBgGQgEgQgMAAQgIAAgHAEg");
	this.shape_94.setTransform(168.7,180.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AhABRQAAgHADgEQAFgEAIAAIAQACQALACAIAAQARAAAKgMQAIgLACgYQgHAGgIADQgIAEgJAAQgZAAgPgRQgRgQABgZQAAgiAUgWQAXgWAkAAQAMAAAIADQAJADAFAGQAQACAAARQAAAJgDAPQgEAdgCAhQgBApgMASQgRAZgqAAQgwAAAAgUgAgTg5QgKANAAAVQgBAPAGAHQAGAHALAAQAKAAAKgLQAKgMACgLQACgMADgaIgIgEIgIgBQgVAAgMAOg");
	this.shape_95.setTransform(143.3,180.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AAaA6IgEgaQgCgOAAgMIABgKIAAgMIABgEIAAgGQAAgLgFAAQgLAAgKAOQgKAOgGAVIgBALIgBAMIgBALIAAALQAAAHgFAFQgFAFgIAAQgIAAgEgFQgGgFAAgHIAAgLIgBgLIACgjIABghIAAgMIAAgLQAAgHAFgFQAFgFAHAAQARAAABAUIAAABQATgSAUAAQAYAAAIAUQAHANAAAbIAAAJIAAAHQAAAKACAQQADAPAAAKQAAAHgFAFQgFAFgHAAQgQAAgCgQg");
	this.shape_96.setTransform(129.8,177.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgPBcQgFgEAAgIIgBgYIAAgXIABgcIABgbQAAgHAFgFQAFgFAIAAQAHAAAFAFQAEAFAAAHIgBAbIgBAcIAAAXIABAYQAAAIgFAEQgFAFgHAAQgHAAgFgFgAgLhAQgGgFAAgJQAAgIAGgEQAGgGAHAAQAIAAAGAGQAGAEAAAIQAAAJgGAFQgGAFgIAAQgHAAgGgFg");
	this.shape_97.setTransform(119.5,174.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgqA3QgWgQAAgdQAAggARgWQATgYAfAAQAWAAAOAHQAUAJgBAUQAAAOgPALQgIAFgVAIIgqATQAHAHAIADQAJADAKAAQARAAAMgHQALgGAFAAQAOAAAAANQAAAOgWAJQgRAIgUAAQgdAAgTgOgAgQgeQgJAIgFAQIAcgNQARgHAJgHQgIgFgNAAQgMAAgHAIg");
	this.shape_98.setTransform(108.1,177.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AglBgQgEAFgIAAQgGAAgFgFQgFgEAAgHIAAgJIAAgKIAAiOQAAgKAFgHQAFgJAJAAQAOAAAAAPIAAAFIgBAGIAAAwQAKgFAIgDQAIgCAIAAQAdAAATAVQARAUAAAdQAAAdgUAVQgUAVgdAAQgSAAgQgHgAgOgCQgJADgKAIIAAA1QASAIAMAAQAPAAAKgLQAKgLAAgQQABgRgJgLQgJgKgOAAQgGAAgJAEg");
	this.shape_99.setTransform(93.4,173.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgKBKQgFgFAAgHQAAgPgDgcQgDgbAAgPQAAgIgCgFQgPAJgOAUIgDACIAAAoIAAAJIgBAJQAAAHgFAEQgFAEgIAAQgLAAgDgKQgDgGAAgOIAAguIgBgTIAAgSQAAgMAEgJQAFgLAJAAQAHAAAGAFQAFAGAAAGIgBALQATgWARAAQAUAAAIAPQAIgHAJgDQAKgEALAAQAYAAAJAZQACAFAEAdQADAUAGAwQAAAHgFAFQgGAFgHAAQgOAAgDgPIgFglIgEgkQgDgXgGAAQgDAAgKAGIgPAKQAAAPADAaQAEAcAAAOQAAAHgFAFQgFAEgIAAQgGAAgFgEg");
	this.shape_100.setTransform(330.8,139.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgrA3QgVgQAAgdQAAggARgWQASgYAgAAQAVAAAPAHQAUAJAAAUQAAAOgQALQgHAFgWAIIgqATQAHAHAIADQAJADAKAAQARAAAMgHQAKgGAGAAQAOAAAAANQAAAOgWAJQgRAIgUAAQgdAAgUgOgAgRgeQgIAIgFAQIAcgNQAQgHAKgHQgIgFgNAAQgLAAgJAIg");
	this.shape_101.setTransform(313,139.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgLBZQgFgFAAgHIABgOIAAgNIgChBIgYgCQgQgCgBgPQAAgHAGgFQAEgFAIAAIAVACIAAgOIgBgMQAAgHAGgFQAFgFAHAAQASAAAAAgIgBAKIAOgBQAOAAAFACQALAEgBAMQAAAHgEAFQgGAFgHAAIgGgBIgGAAIgNABIADBCIAAAGIAAAIQAAAdgSAAQgGAAgGgEg");
	this.shape_102.setTransform(299.8,136.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgPBcQgFgEAAgIIgBgYIAAgXIABgcIABgbQAAgHAFgFQAFgFAIAAQAHAAAFAFQAEAFAAAHIgBAbIgBAcIAAAXIABAYQAAAIgFAEQgFAFgHAAQgHAAgFgFgAgLhAQgGgFAAgJQAAgIAGgEQAGgGAHAAQAIAAAGAGQAGAEAAAIQAAAJgGAFQgGAFgIAAQgHAAgGgFg");
	this.shape_103.setTransform(290.3,136.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgqA3QgWgQAAgdQAAggARgWQASgYAgAAQAVAAAPAHQAUAJAAAUQAAAOgQALQgIAFgVAIIgqATQAHAHAIADQAJADAKAAQARAAAMgHQALgGAFAAQAOAAAAANQAAAOgWAJQgRAIgUAAQgeAAgSgOgAgRgeQgIAIgFAQIAcgNQAQgHAKgHQgIgFgNAAQgLAAgJAIg");
	this.shape_104.setTransform(267.7,139.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AAeBdQgEgKgCgTQgCgSAAgLIAAgKIAAgKIAAgLQgBgGgGAAQgOAAgKAMQgGAHgKASQAAAugFAJQgEALgLAAQgHAAgGgFQgFgFAAgHIABgGQABgDABggQgBgZABg7IAAgEIABgUIgBgLIgCgMQAAgHAGgFQAFgFAHAAQANAAAEAOQACAHAAAQIAAAaIgBAZQAJgKALgEQAJgFAMAAQAWAAAKANQAHAJABASIACAfIACAZIAFAZIAAAEQAAAHgFAFQgGAFgHAAQgNAAgDgNg");
	this.shape_105.setTransform(253.3,135.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgKBZQgGgFAAgHIAAgOIAAgNIgChBIgYgCQgPgCAAgPQAAgHAEgFQAFgFAIAAIAWACIgBgOIAAgMQAAgHAEgFQAGgFAHAAQASAAAAAgIAAAKIAMgBQAPAAAFACQALAEAAAMQgBAHgEAFQgFAFgIAAIgGgBIgHAAIgLABIABBCIABAGIAAAIQAAAdgTAAQgFAAgFgEg");
	this.shape_106.setTransform(239.5,136.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AAaA6IgEgaQgCgOAAgMIABgKIAAgMIABgEIAAgGQAAgLgFAAQgLAAgKAOQgKAOgFAVIgCALIgBAMIgBALIAAALQAAAHgFAFQgFAFgIAAQgIAAgEgFQgGgFAAgHIAAgLIgBgLIACgjIABghIAAgMIAAgLQAAgHAFgFQAFgFAHAAQARAAABAUIAAABQATgSAUAAQAXAAAJAUQAHANAAAbIAAAJIgBAHQAAAKADAQQADAPAAAKQAAAHgFAFQgFAFgHAAQgQAAgCgQg");
	this.shape_107.setTransform(215.4,138.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgpA1QgSgRgBgdQgBgcAQgWQATgaAiAAQAZAAAPAVQAOASAAAbQAAAcgQAVQgSAYgcAAQgYgBgRgQgAgSgVQgHAMAAAQQAAAPAJAHQAGAHAKAAQAKAAAIgIQAJgIABgPQABgogXAAIgBAAQgOAAgJAOg");
	this.shape_108.setTransform(201.5,139.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("Ag0BmQgFgFAAgIIAAgvIAAgxQAAgbgCgUIgCgZQABgLAEgHQAGgJAJAAQAHAAAFAFQAEAFAAAHIAAABQAJgFAIgCQAIgDAJAAQAdAAAOAZQAJATABAdQgBAbgQATQgQATgdAAQgKAAgMgCIAAAzQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgHg8QgHAEgJAHQABAaAAAaQAMADAKAAQANAAAHgIQAGgIABgPQgBgRgBgGQgEgQgMAAQgIAAgIAEg");
	this.shape_109.setTransform(188.1,142.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AAZA/QgQAGgQAAQgSAAgNgIQgNgIgDgRQgFggAAgYQAAgQAEgVQACgOAPAAQAHAAAFAEQAGAFAAAHIgCARIgCASIABAeQABAOADAIIAGADIAGAAQANAAARgEIAAgWIgBgUQAAgaADgTQACgPAPAAQAIAAAFAEQAFAFAAAHIgDAtIABAZIAAAZIAAAIIABAIQAAAHgGAFQgFAEgHAAQgLAAgFgJg");
	this.shape_110.setTransform(174.1,139.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AhBBRQABgHAEgEQAEgEAHAAIARACQALACAHAAQATAAAIgMQAKgLABgYQgHAGgIADQgIAEgIAAQgaAAgQgRQgQgQAAgZQAAgiAWgWQAWgWAjAAQAMAAAJADQAJADAFAGQARACgBARQAAAJgCAPQgGAdAAAhQgCApgNASQgQAZgpAAQgyAAAAgUgAgTg5QgLANAAAVQAAAPAGAHQAGAHALAAQAJAAALgLQAKgMABgLQADgMADgaIgJgEIgIgBQgUAAgMAOg");
	this.shape_111.setTransform(149.2,142.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AAaA6IgDgaQgCgOAAgMIAAgKIABgMIAAgEIAAgGQAAgLgFAAQgLAAgJAOQgLAOgGAVIgBALIAAAMIgBALIgBALQAAAHgFAFQgFAFgIAAQgHAAgGgFQgEgFAAgHIgBgLIgBgLIACgjIACghIAAgMIgBgLQAAgHAFgFQAFgFAIAAQAQAAACAUIAAABQASgSATAAQAYAAAKAUQAGANAAAbIAAAJIgBAHQABAKADAQQACAPAAAKQAAAHgFAFQgFAFgIAAQgPAAgCgQg");
	this.shape_112.setTransform(135.7,138.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgPBcQgFgEAAgIIgBgYIAAgXIABgcIABgbQAAgHAFgFQAFgFAIAAQAHAAAFAFQAEAFAAAHIgBAbIgBAcIAAAXIABAYQAAAIgFAEQgFAFgHAAQgHAAgFgFgAgLhAQgGgFAAgJQAAgIAGgEQAGgGAHAAQAIAAAGAGQAGAEAAAIQAAAJgGAFQgGAFgIAAQgHAAgGgFg");
	this.shape_113.setTransform(125.4,136.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AAjBgQgIAFgKACQgJABgJAAQgdAAgSgSQgTgTAAgcQAAgiATgUQAUgVAdAAQAKAAAHACQAIACAGAEQABgsACgQQACgPAPAAQAIAAAEAFQAEAFABAHQAAASgDAlQgEAkAAASQAAAuAEAPIAAAEQAAAHgFAFQgFAEgHAAQgJAAgFgIgAgaAGQgIAKgBAWQABAOAJAKQALAJANAAQAJAAAFgCQADgBAIgHIAFgEIAAguQgEgIgHgDQgHgEgJAAQgSAAgKAKg");
	this.shape_114.setTransform(113.7,135.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AAaA6IgEgaQgBgOAAgMIAAgKIAAgMIABgEIAAgGQAAgLgFAAQgLAAgKAOQgKAOgGAVIgBALIgBAMIgBALIAAALQAAAHgFAFQgFAFgIAAQgHAAgFgFQgGgFAAgHIAAgLIgBgLIACgjIABghIAAgMIAAgLQAAgHAFgFQAFgFAHAAQARAAABAUIAAABQATgSATAAQAYAAAJAUQAHANAAAbIAAAJIAAAHQAAAKACAQQADAPAAAKQAAAHgFAFQgFAFgIAAQgPAAgCgQg");
	this.shape_115.setTransform(99.6,138.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgqA3QgWgQAAgdQAAggARgWQATgYAfAAQAWAAAOAHQAUAJgBAUQAAAOgPALQgIAFgVAIIgqATQAHAHAIADQAJADAKAAQARAAAMgHQALgGAFAAQAOAAAAANQAAAOgWAJQgRAIgUAAQgdAAgTgOgAgQgeQgJAIgFAQIAcgNQARgHAJgHQgIgFgNAAQgMAAgHAIg");
	this.shape_116.setTransform(85.2,139.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("Ag0BmQgFgFAAgIIAAgvIAAgxQAAgbgCgUIgBgZQAAgLAEgHQAFgJAKAAQAHAAAFAFQAEAFABAHIAAABQAIgFAJgCQAHgDAJAAQAdAAANAZQALATAAAdQAAAbgQATQgRATgdAAQgKAAgMgCIAAAzQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGg8QgJAEgIAHQACAagBAaQAMADAKAAQANAAAHgIQAHgIAAgPQAAgRgCgGQgDgQgNAAQgIAAgHAEg");
	this.shape_117.setTransform(71.3,142.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgqA3QgWgQAAgdQAAggARgWQASgYAgAAQAVAAAPAHQAUAJgBAUQABAOgQALQgIAFgVAIIgqATQAHAHAIADQAJADAKAAQARAAAMgHQALgGAFAAQAOAAAAANQAAAOgWAJQgRAIgUAAQgeAAgSgOgAgQgeQgJAIgFAQIAcgNQAQgHAKgHQgIgFgNAAQgMAAgHAIg");
	this.shape_118.setTransform(56.7,139.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AAjBgQgIAFgJACQgKABgJAAQgdAAgSgSQgTgTgBgcQABgiATgUQATgVAeAAQAKAAAHACQAIACAFAEQACgsADgQQABgPAPAAQAHAAAFAFQAFAFAAAHQgBASgDAlQgCAkAAASQAAAuACAPIABAEQAAAHgFAFQgFAEgHAAQgJAAgFgIgAgaAGQgJAKABAWQgBAOAKAKQALAJANAAQAJAAAFgCQADgBAJgHIAEgEIAAguQgFgIgGgDQgHgEgJAAQgSAAgKAKg");
	this.shape_119.setTransform(41.8,135.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FF0000").s().p("AgjBCQgTgGAAgPQAAgMAPAAQAGAAALAEQALADAGAAQAZAAAAgLQAAgGgSgHQgZgMgIgEQgSgNAAgSQAAgaAbgIQAQgGAgAAQAMABAHADQAIAEAAAMQAAAXgMAAQgNAAgDgKIgKgCQgeAAAAAJQAAAFASAJQAZALAJAGQASANAAAQQAAAXgUALQgQAJgXAAQgRAAgOgGg");
	this.shape_120.setTransform(326.6,100.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FF0000").s().p("AglBgQgFAFgHAAQgGAAgFgFQgFgEAAgHIAAgJIAAgKIAAiOQABgKAEgHQAFgJAJAAQAOAAAAAPIAAAFIgBAGIAAAwQAKgFAIgDQAJgCAHAAQAeAAASAVQARAUAAAdQAAAdgUAVQgUAVgdAAQgSAAgQgHgAgNgCQgKADgKAIIAAA1QASAIAMAAQAPAAALgLQAKgLgBgQQAAgRgIgLQgIgKgPAAQgGAAgIAEg");
	this.shape_121.setTransform(312.8,97.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FF0000").s().p("AgyBCQgDgEAAgIIAAhSIAAgLIAAgMQAAgHAEgFQAEgFAJAAQAOAAACAPQAWgRAbAAQAZAAABAiIAAAIQgCAUgQAAQgQAAgBgRIAAgNQgcAFgMAZIAAA+QAAAIgEAFQgFAEgIAAQgIAAgFgFg");
	this.shape_122.setTransform(299,100.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FF0000").s().p("AgqA3QgWgQAAgdQAAggARgWQATgYAeAAQAWAAAPAHQATAJAAAUQAAAOgPALQgIAFgVAIIgpATQAFAHAJADQAJADAKAAQARAAAMgHQALgGAFAAQAOAAAAANQAAAOgVAJQgSAIgUAAQgdAAgTgOgAgQgeQgJAIgFAQIAcgNQARgHAJgHQgIgFgOAAQgLAAgHAIg");
	this.shape_123.setTransform(285.1,100.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FF0000").s().p("AgSA5IgqhmIgCgHQABgHAFgFQAGgEAGAAQAMAAAEAKQAIAPAUA4IASgrIALgbQAFgLAKAAQAIAAAFAFQAGAEAAAIQAAAEgVAuIgaA4QgBAGgFAFQgEADgGAAQgNABgFgNg");
	this.shape_124.setTransform(271.9,100.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FF0000").s().p("AgMBkQgEgFAAgIIAAiuQgBgHAGgFQAFgFAHAAQAHAAAEAFQAFAFABAHIAACoQAAAYgSAAQgGAAgGgFg");
	this.shape_125.setTransform(250.4,97.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FF0000").s().p("AAfA6QgMAGgJADQgJADgFAAQgfAAgPgRQgPgQAAghQAAgdAWgWQAXgWAfAAQAMAAAPAHQAUAIAAALQAAAFgDADIgCANIgBARQAAAXADALIAGANIAFAMQAAAHgFAEQgFAFgHAAQgGAAgMgMgAgRgZQgNAOAAAQQAAARAGAJQAGAJAMAAQAHAAAHgDQAHgDAHgFQgEgdAAgPIAAgJIACgMIgEgCIgEAAQgQAAgNANg");
	this.shape_126.setTransform(239.8,100.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FF0000").s().p("AgxBCQgFgEAAgIIAAhSIABgLIAAgMQAAgHAFgFQADgFAIAAQAOAAADAPQAWgRAbAAQAaAAgBAiIAAAIQgBAUgRAAQgQAAAAgRIAAgNQgbAFgNAZIABA+QAAAIgGAFQgEAEgIAAQgIAAgEgFg");
	this.shape_127.setTransform(226.5,100.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FF0000").s().p("AAZA/QgQAGgQAAQgSAAgNgIQgNgIgDgRQgFggAAgYQAAgQAEgVQACgOAPAAQAHAAAFAEQAGAFAAAHIgCARIgCASIABAeQABAOADAIIAGADIAGAAQANAAARgEIAAgWIgBgUQAAgaADgTQACgPAPAAQAIAAAFAEQAFAFAAAHIgDAtIABAZIAAAZIAAAIIABAIQAAAHgGAFQgFAEgHAAQgLAAgFgJg");
	this.shape_128.setTransform(213.2,100.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FF0000").s().p("AgMBkQgEgFgBgIIAAiuQAAgHAGgFQAFgFAGAAQAIAAAFAFQAEAFAAAHIAACoQAAAYgRAAQgHAAgFgFg");
	this.shape_129.setTransform(202.9,97.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FF0000").s().p("Ag0BmQgFgFAAgIIAAgvIAAgxQAAgbgCgUIgCgZQABgLAEgHQAGgJAJAAQAHAAAFAFQAFAFgBAHIAAABQAJgFAIgCQAIgDAJAAQAdAAAOAZQAKATAAAdQgBAbgQATQgQATgdAAQgKAAgMgCIAAAzQAAAIgFAFQgFAFgHAAQgIAAgFgFgAgHg8QgHAEgJAHQACAaAAAaQALADAKAAQANAAAHgIQAGgIABgPQgBgRgBgGQgEgQgMAAQgIAAgIAEg");
	this.shape_130.setTransform(192.7,103.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgyBCQgDgEAAgIIAAhSIAAgLIAAgMQAAgHAEgFQAFgFAIAAQAOAAACAPQAWgRAbAAQAaAAgBAiIAAAIQgBAUgRAAQgPAAgBgRIAAgNQgbAFgNAZIABA+QgBAIgFAFQgEAEgIAAQgIAAgFgFg");
	this.shape_131.setTransform(168.3,100.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgpA1QgSgRgBgdQgBgcAQgWQATgaAiAAQAZAAAPAVQAOASAAAbQAAAcgQAVQgSAYgcAAQgYgBgRgQgAgSgVQgHAMAAAQQAAAPAJAHQAGAHAKAAQAKAAAIgIQAJgIABgPQABgogXAAIgBAAQgOAAgJAOg");
	this.shape_132.setTransform(154.8,101);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FF0000").s().p("AgxBCQgFgEAAgIIAAhSIABgLIAAgMQAAgHAFgFQAEgFAHAAQAOAAADAPQAVgRAcAAQAZAAAAAiIAAAIQgBAUgRAAQgPAAAAgRIgBgNQgcAFgMAZIAAA+QAAAIgEAFQgGAEgHAAQgIAAgEgFg");
	this.shape_133.setTransform(130.9,100.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FF0000").s().p("AAfA6QgMAGgJADQgJADgFAAQgfAAgPgRQgPgQAAghQAAgdAWgWQAXgWAfAAQAMAAAPAHQAUAIAAALQAAAFgDADIgCANIgBARQAAAXADALIAGANIAFAMQAAAHgFAEQgFAFgHAAQgGAAgMgMgAgRgZQgNAOAAAQQAAARAGAJQAGAJAMAAQAHAAAHgDQAHgDAHgFQgEgdAAgPIAAgJIACgMIgEgCIgEAAQgQAAgNANg");
	this.shape_134.setTransform(117.2,100.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FF0000").s().p("AgLBkQgGgFAAgIIAAiuQABgHAFgFQAFgFAGAAQAIAAAEAFQAGAFAAAHIAACoQAAAYgSAAQgHAAgEgFg");
	this.shape_135.setTransform(106.3,97.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FF0000").s().p("AAZA/QgQAGgQAAQgSAAgNgIQgNgIgDgRQgFggAAgYQAAgQAEgVQACgOAPAAQAHAAAFAEQAGAFAAAHIgCARIgCASIABAeQABAOADAIIAGADIAGAAQANAAARgEIAAgWIgBgUQAAgaADgTQACgPAPAAQAIAAAFAEQAFAFAAAHIgDAtIABAZIAAAZIAAAIIABAIQAAAHgGAFQgFAEgHAAQgLAAgFgJg");
	this.shape_136.setTransform(96,100.9);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FF0000").s().p("AhABRQAAgHADgEQAFgEAHAAIARACQALACAHAAQATAAAIgMQAKgLABgYQgGAGgJADQgIAEgJAAQgZAAgQgRQgPgQAAgZQgBgiAVgWQAXgWAkAAQALAAAJADQAJADAFAGQAQACAAARQAAAJgCAPQgFAdgCAhQgBApgMASQgRAZgqAAQgxAAABgUgAgTg5QgLANABAVQgBAPAGAHQAGAHALAAQAJAAALgLQAKgMACgLQACgMADgaIgJgEIgIgBQgUAAgMAOg");
	this.shape_137.setTransform(82.3,104.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FF0000").s().p("AAaA6IgEgaQgBgOAAgMIAAgKIABgMIAAgEIAAgGQAAgLgFAAQgLAAgJAOQgLAOgGAVIgBALIgBAMIAAALIgBALQAAAHgFAFQgFAFgIAAQgHAAgGgFQgEgFAAgHIgBgLIgBgLIACgjIABghIAAgMIAAgLQAAgHAFgFQAFgFAHAAQARAAABAUIAAABQATgSATAAQAYAAAJAUQAHANAAAbIAAAJIAAAHQAAAKACAQQADAPAAAKQAAAHgFAFQgFAFgIAAQgPAAgCgQg");
	this.shape_138.setTransform(68.9,100.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FF0000").s().p("AgPBcQgFgEAAgIIgBgXIAAgYIABgcIABgbQAAgHAFgFQAFgFAIAAQAHAAAFAFQAEAFAAAHIgBAbIgBAcIAAAYIABAXQAAAIgFAEQgFAFgHAAQgHAAgFgFgAgLhAQgGgFAAgIQAAgJAGgEQAGgGAHAAQAIAAAGAGQAGAEAAAJQAAAIgGAFQgGAFgIAAQgHAAgGgFg");
	this.shape_139.setTransform(58.6,97.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FF0000").s().p("AgjBCQgTgGAAgPQAAgMAPAAQAGAAALAEQALADAGAAQAZAAAAgLQAAgGgSgHQgZgMgIgEQgSgNAAgSQAAgaAbgIQAQgGAgAAQAMABAHADQAIAEAAAMQAAAXgMAAQgNAAgDgKIgKgCQgeAAAAAJQAAAFASAJQAZALAJAGQASANAAAQQAAAXgUALQgQAJgXAAQgRAAgOgGg");
	this.shape_140.setTransform(48.1,100.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgxBCQgEgEgBgIIAAhSIABgLIAAgMQAAgHAEgFQAFgFAHAAQAOAAADAPQAVgRAcAAQAaAAAAAiIAAAIQgCAUgQAAQgRAAABgRIgBgNQgbAFgNAZIAAA+QAAAIgEAFQgGAEgHAAQgIAAgEgFg");
	this.shape_141.setTransform(350.1,62.6);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgqA3QgWgQAAgdQAAggARgWQASgYAgAAQAVAAAPAHQAUAJAAAUQAAAOgQALQgIAFgVAIIgqATQAHAHAIADQAJADAKAAQARAAAMgHQALgGAFAAQAOAAAAANQAAAOgWAJQgRAIgUAAQgeAAgSgOgAgQgeQgJAIgFAQIAcgNQAQgHAKgHQgIgFgNAAQgMAAgHAIg");
	this.shape_142.setTransform(336.2,62.6);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AAeBdQgEgKgCgTQgCgSAAgLIAAgKIAAgKIAAgLQgBgGgGAAQgOAAgKAMQgGAHgKASQAAAugFAJQgEALgLAAQgHAAgGgFQgFgFAAgHIABgGQABgDABggQgBgZABg7IAAgEIABgUIgBgLIgCgMQAAgHAGgFQAFgFAHAAQANAAAEAOQACAHAAAQIAAAaIgBAZQAJgKALgEQAJgFAMAAQAWAAAKANQAHAJABASIACAfIACAZIAFAZIAAAEQAAAHgFAFQgGAFgHAAQgNAAgDgNg");
	this.shape_143.setTransform(321.8,59.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgKBZQgGgFAAgHIAAgOIAAgNIgChBIgYgCQgPgCAAgPQAAgHAEgFQAGgFAHAAIAVACIAAgOIAAgMQAAgHAEgFQAGgFAHAAQASAAAAAgIAAAKIAMgBQAPAAAGACQAJAEABAMQgBAHgFAFQgEAFgIAAIgGgBIgHAAIgLABIABBCIABAGIAAAIQAAAdgTAAQgFAAgFgEg");
	this.shape_144.setTransform(308,60.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgPBcQgFgEAAgIIgBgXIAAgYIABgcIABgbQAAgHAFgFQAFgFAIAAQAHAAAFAFQAEAFAAAHIgBAbIgBAcIAAAYIABAXQAAAIgFAEQgFAFgHAAQgHAAgFgFgAgLhAQgGgFAAgIQAAgJAGgEQAGgGAHAAQAIAAAGAGQAGAEAAAJQAAAIgGAFQgGAFgIAAQgHAAgGgFg");
	this.shape_145.setTransform(298.5,59.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgrA3QgVgQAAgdQAAggARgWQASgYAfAAQAXAAAOAHQATAJAAAUQAAAOgPALQgHAFgWAIIgpATQAFAHAJADQAJADAKAAQARAAAMgHQAKgGAHAAQANAAAAANQAAAOgVAJQgSAIgUAAQgdAAgUgOgAgRgeQgIAIgFAQIAdgNQAPgHALgHQgJgFgOAAQgKAAgJAIg");
	this.shape_146.setTransform(287.1,62.6);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgrA3QgVgQAAgdQAAggARgWQASgYAgAAQAVAAAPAHQAUAJAAAUQAAAOgQALQgHAFgWAIIgqATQAHAHAIADQAJADAKAAQARAAAMgHQAKgGAGAAQAOAAAAANQAAAOgWAJQgRAIgUAAQgdAAgUgOgAgRgeQgIAIgFAQIAcgNQAQgHAKgHQgIgFgNAAQgLAAgJAIg");
	this.shape_147.setTransform(261.3,62.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgyBCQgDgEAAgIIAAhSIAAgLIAAgMQAAgHAEgFQAFgFAIAAQAOAAACAPQAWgRAbAAQAZAAABAiIAAAIQgCAUgQAAQgQAAgBgRIAAgNQgcAFgMAZIAAA+QAAAIgEAFQgFAEgIAAQgIAAgFgFg");
	this.shape_148.setTransform(248.2,62.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgPBcQgFgEAAgIIgBgXIAAgYIABgcIABgbQAAgHAFgFQAFgFAIAAQAHAAAFAFQAEAFAAAHIgBAbIgBAcIAAAYIABAXQAAAIgFAEQgFAFgHAAQgHAAgFgFgAgLhAQgGgFAAgIQAAgJAGgEQAGgGAHAAQAIAAAGAGQAGAEAAAJQAAAIgGAFQgGAFgIAAQgHAAgGgFg");
	this.shape_149.setTransform(238.3,59.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AAZA/QgQAGgQAAQgSAAgNgIQgNgIgDgRQgFggAAgYQAAgQAEgVQACgOAPAAQAHAAAFAEQAGAFAAAHIgCARIgCASIABAeQABAOADAIIAGADIAGAAQANAAARgEIAAgWIgBgUQAAgaADgTQACgPAPAAQAIAAAFAEQAFAFAAAHIgDAtIABAZIAAAZIAAAIIABAIQAAAHgGAFQgFAEgHAAQgLAAgFgJg");
	this.shape_150.setTransform(227.5,62.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AANBSIAAgHIAEgkIgKABQgcAAgTgPQgUgQAAgbQAAglAWgXQAXgYAmAAQAHAAAEAEQAFgDAEAAQAIAAAFAFQAFAGAAAGQAAAlgEApIgGAtQgDAaAAAVQAAAHgFAFQgFAFgIAAQgRAAAAgVgAgQgzQgJAOAAATQAAANAIAGQAJAJAOgBQAJAAAEgJQAGgMAAggIACgbIgEAAIgIAAQgUADgLARg");
	this.shape_151.setTransform(213.7,65.7);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgqA3QgWgQAAgdQAAggARgWQATgYAfAAQAWAAAOAHQAUAJgBAUQAAAOgPALQgIAFgVAIIgqATQAHAHAIADQAJADAKAAQARAAAMgHQALgGAFAAQAOAAAAANQAAAOgWAJQgRAIgUAAQgdAAgTgOgAgQgeQgJAIgFAQIAcgNQARgHAJgHQgIgFgNAAQgMAAgHAIg");
	this.shape_152.setTransform(199.9,62.6);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgyBCQgEgEAAgIIAAhSIABgLIAAgMQAAgHAFgFQADgFAJAAQAOAAACAPQAWgRAbAAQAaAAgBAiIAAAIQgBAUgRAAQgQAAAAgRIAAgNQgbAFgNAZIABA+QAAAIgGAFQgEAEgIAAQgIAAgFgFg");
	this.shape_153.setTransform(186.8,62.6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#009933").s().p("AgjBCQgTgGAAgPQAAgMAPAAQAGAAALAEQALADAGAAQAZAAAAgLQAAgGgSgHQgZgMgIgEQgSgNAAgSQAAgaAbgIQAQgGAgAAQAMABAHADQAIAEAAAMQAAAXgMAAQgNAAgDgKIgKgCQgeAAAAAJQAAAFASAJQAZALAJAGQASANAAAQQAAAXgUALQgQAJgXAAQgRAAgOgGg");
	this.shape_154.setTransform(162.6,62.5);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#009933").s().p("AgqA3QgWgQAAgdQAAggARgWQASgYAgAAQAVAAAPAHQAUAJAAAUQAAAOgQALQgIAFgVAIIgqATQAHAHAIADQAJADAKAAQARAAAMgHQALgGAFAAQAOAAAAANQAAAOgWAJQgRAIgUAAQgeAAgSgOgAgQgeQgJAIgFAQIAcgNQAQgHAKgHQgIgFgNAAQgMAAgHAIg");
	this.shape_155.setTransform(149,62.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#009933").s().p("AhABRQAAgHADgEQAFgEAHAAIARACQAKACAIAAQATAAAIgMQAKgLABgYQgGAGgJADQgIAEgIAAQgaAAgQgRQgPgQAAgZQgBgiAWgWQAWgWAjAAQANAAAIADQAJADAFAGQAQACAAARQAAAJgCAPQgGAdgBAhQgBApgMASQgRAZgqAAQgxAAABgUgAgTg5QgLANAAAVQAAAPAGAHQAGAHALAAQAJAAALgLQAKgMACgLQACgMADgaIgJgEIgIgBQgUAAgMAOg");
	this.shape_156.setTransform(134.9,66);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#009933").s().p("AAfA6QgMAGgJADQgJADgFAAQgfAAgPgRQgPgQAAghQAAgdAWgWQAXgWAfAAQAMAAAPAHQAUAIAAALQAAAFgDADIgCANIgBARQAAAXADALIAGANIAFAMQAAAHgFAEQgFAFgHAAQgGAAgMgMgAgRgZQgNAOAAAQQAAARAGAJQAGAJAMAAQAHAAAHgDQAHgDAHgFQgEgdAAgPIAAgJIACgMIgEgCIgEAAQgQAAgNANg");
	this.shape_157.setTransform(120.9,62.6);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#009933").s().p("AgKBZQgGgFAAgHIAAgOIAAgNIgBhBIgZgCQgQgCAAgPQABgHAFgFQAEgFAIAAIAWACIgBgOIAAgMQAAgHAEgFQAGgFAHAAQASAAAAAgIAAAKIAMgBQAPAAAFACQAKAEAAAMQAAAHgEAFQgFAFgIAAIgGgBIgHAAIgLABIABBCIABAGIAAAIQAAAdgTAAQgGAAgEgEg");
	this.shape_158.setTransform(107.5,60.4);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#009933").s().p("AAaA6IgEgaQgCgOABgMIAAgKIAAgMIABgEIAAgGQAAgLgFAAQgLAAgKAOQgKAOgGAVIgBALIgBAMIgBALIAAALQAAAHgFAFQgFAFgIAAQgIAAgEgFQgGgFAAgHIAAgLIgBgLIACgjIABghIAAgMIAAgLQAAgHAFgFQAFgFAHAAQARAAABAUIAAABQATgSAUAAQAYAAAIAUQAHANAAAbIAAAJIAAAHQAAAKACAQQADAPAAAKQAAAHgFAFQgFAFgHAAQgQAAgCgQg");
	this.shape_159.setTransform(94.7,62.4);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#009933").s().p("AgqA3QgWgQAAgdQAAggARgWQATgYAeAAQAWAAAPAHQATAJAAAUQAAAOgPALQgIAFgVAIIgpATQAFAHAJADQAJADAKAAQARAAAMgHQALgGAFAAQAOAAAAANQAAAOgVAJQgSAIgUAAQgeAAgSgOgAgQgeQgJAIgFAQIAcgNQARgHAJgHQgIgFgOAAQgLAAgHAIg");
	this.shape_160.setTransform(80.3,62.6);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#009933").s().p("AgnA4QgUgRAAgbQAAgZASgaQAVgfAZAAQANAAASAGQAVAJABAMQAAAGgFAFQgFAFgGAAQgGAAgIgFQgHgHgQAAQgIABgMASQgLATAAANQAAANAJAHQAKAIAOAAQAIgBAMgGQANgHAEAAQAGABAFAEQAFAFAAAHQAAAKgWAJQgTAJgMAAQgbAAgTgPg");
	this.shape_161.setTransform(66.3,62.6);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#009933").s().p("AgyBCQgDgEAAgIIAAhSIAAgLIAAgMQAAgHAEgFQAFgFAIAAQAOAAACAPQAWgRAbAAQAZAAABAiIAAAIQgCAUgQAAQgQAAgBgRIAAgNQgcAFgMAZIABA+QgBAIgFAFQgEAEgIAAQgIAAgFgFg");
	this.shape_162.setTransform(53.9,62.6);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#009933").s().p("AgrA3QgVgQAAgdQAAggARgWQASgYAfAAQAXAAAOAHQATAJAAAUQAAAOgPALQgIAFgVAIIgpATQAFAHAJADQAJADAKAAQARAAAMgHQAKgGAHAAQANAAAAANQAAAOgVAJQgSAIgUAAQgeAAgTgOgAgQgeQgJAIgFAQIAdgNQAQgHAKgHQgJgFgOAAQgLAAgHAIg");
	this.shape_163.setTransform(39.9,62.6);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#009933").s().p("Ag0BmQgFgFAAgIIAAgvIAAgxQAAgbgCgUIgCgZQABgLAEgHQAGgJAJAAQAHAAAFAFQAEAFAAAHIAAABQAJgFAIgCQAIgDAJAAQAdAAAOAZQAJATABAdQgBAbgPATQgRATgdAAQgKAAgMgCIAAAzQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgHg8QgHAEgJAHQABAaAAAaQAMADAKAAQANAAAHgIQAGgIABgPQgBgRgBgGQgEgQgMAAQgIAAgIAEg");
	this.shape_164.setTransform(26.1,65.6);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AAjBgQgJAFgJACQgJABgJAAQgcAAgTgSQgUgTABgcQgBgiAUgUQATgVAfAAQAJAAAIACQAHACAFAEQACgsACgQQADgPAOAAQAHAAAFAFQAEAFAAAHQAAASgCAlQgDAkgBASQABAuADAPIAAAEQAAAHgFAFQgFAEgHAAQgJAAgFgIgAgZAGQgJAKAAAWQAAAOAKAKQAJAJAOAAQAJAAAFgCQAEgBAHgHIAFgEIAAguQgFgIgGgDQgHgEgJAAQgSAAgJAKg");
	this.shape_165.setTransform(309.2,20.8);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AAaA6IgEgaQgCgOAAgMIABgKIAAgMIABgEIAAgGQAAgLgFAAQgLAAgKAOQgKAOgFAVIgCALIgBAMIgBALIAAALQAAAHgFAFQgFAFgIAAQgIAAgEgFQgGgFAAgHIAAgLIgBgLIACgjIABghIAAgMIAAgLQAAgHAFgFQAFgFAHAAQARAAABAUIAAABQATgSAUAAQAXAAAJAUQAHANAAAbIAAAJIAAAHQgBAKADAQQADAPAAAKQAAAHgFAFQgFAFgHAAQgQAAgCgQg");
	this.shape_166.setTransform(295.1,24.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AAfA6QgMAGgJADQgJADgFAAQgfAAgPgRQgPgQAAghQAAgdAWgWQAXgWAfAAQAMAAAPAHQAUAIAAALQAAAFgDADIgCANIgBARQAAAXADALIAGANIAFAMQAAAHgFAEQgFAFgHAAQgGAAgMgMgAgRgZQgNAOAAAQQAAARAGAJQAGAJAMAAQAHAAAHgDQAHgDAHgFQgEgdAAgPIAAgJIACgMIgEgCIgEAAQgQAAgNANg");
	this.shape_167.setTransform(281,24.4);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#009900").s().p("AgjBCQgTgGAAgPQAAgMAPAAQAGAAALADQALAEAGAAQAZAAAAgLQAAgGgSgHQgZgMgIgEQgSgNAAgSQAAgaAbgIQAQgGAgABQAMAAAHADQAIAEAAAMQAAAXgMAAQgNAAgDgKIgKgCQgeAAAAAJQAAAFASAJQAZALAJAGQASANAAAQQAAAXgUALQgQAJgXAAQgRAAgOgGg");
	this.shape_168.setTransform(255.9,24.3);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#009900").s().p("AAaA6IgEgaQgBgOAAgMIAAgKIABgMIAAgEIAAgGQAAgLgFAAQgLAAgKAOQgKAOgGAVIgBALIgBAMIAAALIgBALQAAAHgFAFQgFAFgIAAQgHAAgFgFQgGgFAAgHIAAgLIgBgLIACgjIABghIAAgMIAAgLQAAgHAFgFQAFgFAHAAQARAAABAUIAAABQATgSATAAQAYAAAJAUQAHANAAAbIAAAJIAAAHQAAAKACAQQADAPAAAKQAAAHgFAFQgFAFgIAAQgPAAgCgQg");
	this.shape_169.setTransform(243.1,24.2);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#009900").s().p("AgpA1QgSgRgBgdQgBgcAQgWQATgaAiAAQAZAAAPAVQAOASAAAbQAAAdgQAUQgSAYgcAAQgYgBgRgQgAgSgVQgHAMAAAQQAAAPAJAHQAGAHAKAAQAKAAAIgIQAJgIABgPQABgogXAAIgBAAQgOAAgJAOg");
	this.shape_170.setTransform(229.2,24.5);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#009900").s().p("AgPBcQgFgEAAgIIgBgYIAAgXIABgcIABgbQAAgHAFgFQAFgFAIAAQAHAAAFAFQAEAFAAAHIgBAbIgBAcIAAAXIABAYQAAAIgFAEQgFAFgHAAQgHAAgFgFgAgLhAQgGgFAAgJQAAgIAGgEQAGgGAHAAQAIAAAGAGQAGAEAAAIQAAAJgGAFQgGAFgIAAQgHAAgGgFg");
	this.shape_171.setTransform(219.2,21.4);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#009900").s().p("AgKBZQgGgFAAgHIAAgOIAAgNIgBhBIgZgCQgQgCAAgPQABgHAFgFQAEgFAIAAIAWACIgBgOIAAgMQAAgHAEgFQAGgFAHAAQASAAAAAgIAAAKIAMgBQAPAAAFACQAKAEAAAMQAAAHgEAFQgGAFgHAAIgGgBIgHAAIgLABIACBCIAAAGIAAAIQAAAdgSAAQgHAAgEgEg");
	this.shape_172.setTransform(209.1,22.2);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#009900").s().p("AgnA4QgUgRAAgbQAAgZASgaQAUgfAaAAQAOAAARAGQAWAJgBAMQABAGgFAFQgEAFgIAAQgFAAgIgFQgIgHgPAAQgJABgLASQgLATAAANQAAANAKAHQAJAIAOAAQAJgBAMgGQAMgHAEAAQAGABAFAEQAFAFAAAHQAAAKgWAJQgTAJgMAAQgbAAgTgPg");
	this.shape_173.setTransform(196.1,24.3);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#009900").s().p("AAfA6QgMAGgJADQgJADgFAAQgfAAgPgRQgPgQAAghQAAgdAWgWQAXgWAfAAQAMAAAPAHQAUAIAAALQAAAFgDADIgCANIgBARQAAAXADALIAGANIAFAMQAAAHgFAEQgFAFgHAAQgGAAgMgMgAgRgZQgNAOAAAQQAAARAGAJQAGAJAMAAQAHAAAHgDQAHgDAHgFQgEgdAAgPIAAgJIACgMIgEgCIgEAAQgQAAgNANg");
	this.shape_174.setTransform(182.5,24.4);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#009900").s().p("AgyBCQgDgEAAgIIAAhSIAAgLIAAgMQAAgHAEgFQAFgFAIAAQAOAAACAPQAWgRAbAAQAaAAgBAiIAAAIQgBAUgQAAQgQAAgBgRIAAgNQgbAFgNAZIABA+QgBAIgFAFQgEAEgIAAQgIAAgFgFg");
	this.shape_175.setTransform(169.2,24.4);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#009900").s().p("AhABlQgFgEAAgIIAAiRIAAgOIAAgQQAAgGAGgFQAEgGAIAAQAFAAAEACQAOgDANAAIAVgBQAOgBAWAHQAcAHAAAJQAAAIgFAFQgFAGgIgBIgGgBQgRgFgXAAIgRABIgWADIAAAqQATgFANAAQAWAAASADQAQABAAAPQAAAIgFAEQgFAFgIAAIgUgBIgSgBQgKAAgWAGIAABPQAAAIgGAEQgGAFgHABQgIgBgEgFg");
	this.shape_176.setTransform(155,21.4);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgRAiQAAgHAFgFQAGgEAGAAQAUAAAAAdQAAAHgGAFQgFAFgIAAQgSAAAAgegAgNgaQgFgEAAgIIAAgEIgBgFQAAgGAGgFQAFgFAHAAQASAAAAAZQAAAIgFAEQgFAFgHAAQgHAAgGgFg");
	this.shape_177.setTransform(130.2,22.7);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("Ag6BhQgOgMAAgpQAAgRACghQADgiAAgRIgCgNIgBgOQAAgTASAAQAFAAAFADIAcgFQANgCALAAQAgAAATAHQAMAFAAALQAAAHgFAFQgFAGgHAAIgGgBQgUgFgUAAIgTABIgXAFIgCAyIAxgFIAfgCQAHAAAGAFQAFAEAAAIQAAAOgQACIgfADIg1AFIgBAaQAAAZADADQACACAOAAIAXgBIAYAAIAHgBIAHAAQAIAAAFAEQAGAEAAAJQAAAOgPADQgNACgnAAQgpAAgMgLg");
	this.shape_178.setTransform(116.6,21.1);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AhDBMIADgnQADg3AAhEQAAgGAFgFQAFgGAIAAQAHAAAFAGQAFAFABAGQAABEgEA4IgDAgQAfgBAugOIAFgBQAIAAAGAFQAEAGAAAHQAAAKgLAFQgPAHgfAFQgcAFgSAAQggAAAAgcg");
	this.shape_179.setTransform(101.4,21.5);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AgzBXQghgaAAg/IABgSIAAgSIABgPIAAgOQAAgKAEgJQAFgMAIAAQAHAAAGAFQAGAFAAAHIgBAVIAAAWIAAASIgBASQAAASAFARQAFATAKAJQAFADAVAAQAgABAMg5QAGgdAAg2QAAgIAEgGQAGgJAKAAQAJAAAEAHQAEAEAAAGQAAAygFAcQgHAqgVAdQgKANgNAIQgQAKgPAAQghAAgQgMg");
	this.shape_180.setTransform(84.1,21.7);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AhEBfQgGgFAAgIIABgcIAAgdIAAhlQAAgIAFgHQAHgJALABIAgADQARACAMAGQA2AbAAApQAAAQgLAMQgMANgWAJQAhATARATQAFAFAAAGQAAAHgGAGQgFAFgHAAQgHAAgGgGQgmgkgtgOIABApQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgnADIAGABQAfAAAOgHQAHgDAFgGQAFgFAAgDQAAgOgSgOQgQgMgTgCIgPgBg");
	this.shape_181.setTransform(66.6,21.1);

	this.instance_5 = new lib.static_rule2("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(187.5,0.6,1,1,0,0,0,0,-96);
	this.instance_5._off = true;

	this.text = new cjs.Text("RULE: Fractions and percentages require either singular or plural verbs depending upon the item being portioned. ", "bold 13px 'Comic Sans MS'");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 371;
	this.text.parent = this;
	this.text.setTransform(131.2,-85.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85}]}).to({state:[{t:this.instance_5}]},95).to({state:[{t:this.text}]},5).wait(209));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(95).to({_off:false},0).to({_off:true,regY:0,x:131.2,y:-85.4,text:"RULE: Fractions and percentages require either singular or plural verbs depending upon the item being portioned. ",font:"bold 13px 'Comic Sans MS'",color:"#000000",textAlign:NaN,lineHeight:20.2,lineWidth:371},5).wait(209));

	// Layer 5
	this.instance_6 = new lib.anim_pizza_slice();
	this.instance_6.parent = this;
	this.instance_6.setTransform(288.1,149.5,1.335,1.335);

	this.instance_7 = new lib.static_pie("single",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-9.9,178.8,0.553,0.553);

	this.instance_8 = new lib.anim_spoiled_hotdog();
	this.instance_8.parent = this;
	this.instance_8.setTransform(247.5,130.6);

	this.instance_9 = new lib.static_hotdog("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(166.8,162.6,0.708,0.708,0,0,0,88,76.9);

	this.instance_10 = new lib.static_hotdog("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(117.6,162.7,0.708,0.708,0,0,0,87.9,77);

	this.instance_11 = new lib.static_hotdog("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(72.5,162.6,0.708,0.708,0,0,0,88,76.9);

	this.instance_12 = new lib.static_hotdog("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(17.2,153.3,0.708,0.708,0,0,0,88,76.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]},207).wait(102));

	// whiteBlock
	this.instance_13 = new lib.static_whitebox("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(189.4,99.3,1.191,1.388,0,0,0,202.5,67.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(95).to({scaleX:1,x:186},0).to({regY:67.5,scaleX:0.07,scaleY:0.1,x:185.9,y:99.2,alpha:0},5).wait(209));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.8,0,482.4,235.1);


// stage content:
(lib.verbNum_singularPlural = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"singular or plural":0,scene3_restart:309});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
		playSound("fractionsandpercentages");
	}
	this.frame_94 = function() {
		playSound("departure");
	}
	this.frame_104 = function() {
		playSound("f_blip");
	}
	this.frame_105 = function() {
		playSound("twentypercentoftheteam");
	}
	this.frame_206 = function() {
		playSound("f_blip");
	}
	this.frame_207 = function() {
		playSound("onefifthofthehotdogs");
	}
	this.frame_308 = function() {
		/* _root.gonow = true;*/
	}
	this.frame_315 = function() {
		this.gotoAndPlay("scene3_restart");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(94).call(this.frame_94).wait(10).call(this.frame_104).wait(1).call(this.frame_105).wait(101).call(this.frame_206).wait(1).call(this.frame_207).wait(101).call(this.frame_308).wait(7).call(this.frame_315).wait(1));

	// content
	this.instance = new lib.Content_scene3();
	this.instance.parent = this;
	this.instance.setTransform(272.5,183.6,1,1,0,0,0,187.5,96.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(316));

	// main
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,53.9,1,1,0,0,0,54,40.5);

	this.instance_1 = new lib.Bk("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275,191);

	this.instance_2 = new lib.Bk();
	this.instance_2.parent = this;
	this.instance_2.setTransform(275,191);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.UI}]}).wait(316));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,200.6,534,398.7);
// library properties:
lib.properties = {
	id: 'F36EBE659BD0C74099C3FD2A1CABE3A4',
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
		{src:"sounds/fractionsandpercentages.mp3", id:"fractionsandpercentages"},
		{src:"sounds/ohbaby.mp3", id:"ohbaby"},
		{src:"sounds/onefifthofthehotdogs.mp3", id:"onefifthofthehotdogs"},
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
		{src:"sounds/twentypercentoftheteam.mp3", id:"twentypercentoftheteam"},
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
an.compositions['F36EBE659BD0C74099C3FD2A1CABE3A4'] = {
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