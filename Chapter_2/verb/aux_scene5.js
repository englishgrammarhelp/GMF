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


(lib.static_risebuildupvisiblemotion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AgpBZIAIgFQg+BJhQA7IgKACQAqhGBmg7gACViwQAPgWASgTQAWBshXB5QgqA8gzAsQBqh8ATiog");
	this.shape.setTransform(29.4,32.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000066").s().p("AFyLZQC3hWDXhbQAYgKAUgaQARgXAagDQhLDKkTAeIhxANIgDABQgJAAgKgHgAKtgCQAMgSAUgDIAAgCQAGCRhmCgQiTDoj+AyQFviqBimKgAlrFzQGihRDvlxIABgDQAOBsh1BzQi5C3jvBBQgfAIgaAAQguAAgcgagAtWh6QA/ghA4goQBPg7A+hJQBNhaAyhxQAZg2AOg5QAEgPASABQgBAigEAhQgTCohqB9QhaBpiaBKQgTAJgQAAQgWAAgRgPgAj/kFQgJgLADgPIAAgJQCjjHATjwIAEAAQAnEUjRDGIgEABIgGgBg");
	this.shape_1.setTransform(85.5,73.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,171,147.1);


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


(lib.example3text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJAIQgEgDAAgFQAAgEAEgDQAEgEAFAAQAGAAAEADQAEAEAAAEQAAAFgEADQgEAEgGAAQgFAAgEgEg");
	this.shape.setTransform(305.3,434.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgQBKQgDgDAAgFIAAgCQACgNAAgLIAAgrIgGABIgFABQgFAAgEgEQgDgDAAgFQgBgIAJgDIAPgBIABgKQADgUAJgJQAIgMAVAAQAQAAABALQAAAMgPAAQgLAAgFAHQgEAGAAALIgBADIARgBQAQAAABALQgBAMgRgBIgRABIAAAXIABAXQAAARgCAJQgDAJgIAAQgFAAgEgDg");
	this.shape_1.setTransform(296.7,428.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgiAuQgDgEAAgEIAAg5IAAgIIAAgIQABgFADgDQADgEAFAAQAKAAABAKQAPgLATAAQASAAAAAXIAAAGQgBANgMAAQgKAAgBgLIAAgJQgTADgJARIAAAsQAAAFgDADQgDADgFAAQgGAAgDgDg");
	this.shape_2.setTransform(288.1,430.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AASAsQgMADgLAAQgMAAgJgEQgJgGgCgMQgEgWAAgRQAAgKADgQQACgJAKAAQAFAAAEADQADADAAAFIgBAMIgBAMIABAVQAAAKACAFIAEACIAEABQAJAAAMgEIAAgPIgBgOQAAgRACgNQABgLALAAQAFAAAEADQAEADgBAGIgBAeIAAARIAAASIAAAFIAAAFQAAAFgDAEQgEADgFAAQgHAAgDgGg");
	this.shape_3.setTransform(278.9,430.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgYAuQgNgFAAgKQAAgIAKAAQAEAAAIACQAIADAEAAQARAAAAgHQAAgFgNgFQgRgIgFgDQgMgJAAgMQAAgSASgGQALgEAWAAQAJAAAEADQAGADAAAIQAAAQgJAAQgJAAgBgHIgIgBQgUAAAAAGQAAADAMAGQARAIAHAEQAMAJAAALQAAAPgOAIQgLAHgQAAQgLAAgKgEg");
	this.shape_4.setTransform(269.8,430.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgcAlQgNgMAAgVQgBgSALgPQAOgSAWAAQASAAAKAOQAKAMAAAUQAAASgLAPQgNAQgTAAQgQAAgMgLgAgMgOQgFAJAAAJQAAALAGAFQAFAFAGAAQAHAAAFgFQAHgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_5.setTransform(252.9,430.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgHA9QgDgDAAgFIAAgJIAAgKIgCgsIgQgBQgLgCAAgKQgBgFAEgDQAEgEAEAAIAQABIgBgJIAAgJQAAgFADgDQAEgDAFAAQAMAAAAAWIAAAHIAJgBQAKAAAEACQAGACABAIQAAAFgEAEQgDADgGAAIgEAAIgEAAIgJAAIACAuIAAAEIAAAFQAAAUgNAAQgDAAgEgDg");
	this.shape_6.setTransform(244.1,429);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AASAoIgDgSIgBgSIABgHIAAgIIAAgDIAAgDQAAgIgDAAQgIAAgGAKQgHAKgEAOIgBAHIgBAIIAAAHIgBAIQAAAFgDAEQgEADgFAAQgFAAgEgDQgDgEAAgFIgBgHIAAgIIABgXIABgYIAAgIIAAgIQAAgEADgEQAEgDAFAAQALAAABAOIAAABQANgNANAAQARAAAGAOQAEAJAAATIAAAGIAAAEQAAAIACAKQACALAAAHQAAAEgDAEQgEADgFAAQgLAAgBgLg");
	this.shape_7.setTransform(227.4,430.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgiAuQgCgEAAgEIAAg5IAAgIIAAgIQAAgFADgDQADgEAFAAQAKAAABAKQAPgLATAAQASAAAAAXIAAAGQgBANgLAAQgMAAAAgLIAAgJQgTADgJARIAAAsQAAAFgDADQgDADgFAAQgGAAgDgDg");
	this.shape_8.setTransform(218.5,430.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAVApIgOAGQgGACgDAAQgWAAgKgMQgLgLAAgXQAAgUAQgPQAPgQAVAAQAJAAALAGQANAFAAAIQAAACgCADIgBAJIgBAMQAAAQACAHIAEAJIAEAJQAAAEgEADQgDAEgFAAQgEgBgJgHgAgMgRQgIAKAAALQAAALAEAHQAEAFAIAAQAFAAAFgCQAFgBAEgDQgDgVAAgKIABgHIABgHIgDgCIgDgBQgLAAgJAKg");
	this.shape_9.setTransform(209,430.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgdAmQgPgLAAgUQAAgWAMgPQANgRAVAAQAPAAAKAFQANAGABAOQAAAKgLAHQgFAEgPAFIgdAOQAFAEAFADQAHACAHAAQALgBAIgEQAIgFAEABQAJgBAAAKQAAAJgOAHQgNAFgNAAQgVAAgNgKgAgLgUQgGAFgEALIAUgJIASgJQgFgDgKAAQgIAAgFAFg");
	this.shape_10.setTransform(198.8,430.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgIBFQgDgDAAgGIAAh4QAAgFAEgDQADgDAEAAQAGAAADADQADADAAAFIAAB0QAAARgMAAQgFAAgDgEg");
	this.shape_11.setTransform(191.4,428.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgcAlQgNgMAAgVQgBgSALgPQAOgSAWAAQASAAAKAOQAKAMAAAUQAAASgLAPQgNAQgTAAQgQAAgMgLgAgMgOQgFAJAAAJQAAALAGAFQAFAFAGAAQAHAAAFgFQAHgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_12.setTransform(176.4,430.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgHA9QgEgDAAgFIAAgJIABgKIgCgsIgQgBQgMgCAAgKQABgFADgDQADgEAFAAIAPABIAAgJIAAgJQAAgFADgDQAEgDAFAAQAMAAAAAWIAAAHIAJgBQAKAAADACQAIACgBAIQAAAFgDAEQgDADgFAAIgFAAIgEAAIgIAAIABAuIAAAEIAAAFQAAAUgMAAQgFAAgDgDg");
	this.shape_13.setTransform(167.5,429);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AgIBAQgEgEAAgFIABgDIAAgEIgBgNIAAgMIgCgfIgCggIgFAAQgUAAgLgCQgKgDAAgJQAAgEADgEQAEgEAGAAIAOACIAOABIAQgBIAPAAIAUABIAUABQAFAAAEADQAEAEAAAFQAAAFgEADQgEAEgFAAIgVgBIgWgBIADAkIACAjIAAAIIABAJQAAAHgDAFQgEAHgGAAQgEAAgEgDg");
	this.shape_14.setTransform(149.4,428.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AAlBDQgEgDAAgFIAAgTIgBgUIAAgJQgNABgUAEIghAGIgCATIAAASQAAAFgEADQgDADgFAAQgGAAgDgDQgDgDAAgFIABgaIACgaIAAggIABghQAAgFADgDQAEgDAFAAQAFAAADADQAEADAAAFIgBAUIAAAUIgBAJIAAAJIAhgHQATgDAOgBIACggQAAgHAEgIQAFgLAGAAQAFAAADADQAEADAAAFIAAADQgCAGAAAFIgBAIIAAAHIgBAZIgBAYIABATIABAUQAAAEgDAEQgEADgFAAQgFAAgEgDg");
	this.shape_15.setTransform(136.3,428.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AgvA8QgLgMAAgZQgBgXALgWQALgYASgPQAMgKANAAQAIAAAQAGQARAHAAAJQAAAEgEAEQgEAEgFAAQgCAAgJgFQgKgFgHAAQgHAAgNARQgUAZAAAcQAAAPAFAEQAEAGANAAQAMAAALgHQAKgJAGgPQgUACgPAGIgFABQgFAAgEgDQgEgEAAgFQABgNAegEQASgDAYAAQAGAAADADQADADAAAFQABAGgGADQgGAbgRAPQgTAQgYAAQgXAAgMgMg");
	this.shape_16.setTransform(123.2,428.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AgiA8QgYgSAAgrIABgNIAAgMIABgKIAAgKQAAgHACgHQAEgHAGgBQAEAAAEAEQAFADgBAFIAAAOIAAAQIgBAMIAAANQAAAMAEALQADAOAHAFQAEADAOABQAWAAAIgoQAEgUAAglQAAgFADgEQAEgHAHAAQAHAAACAFQACADAAAEQAAAjgDATQgEAdgPAUQgGAIgKAHQgLAGgKAAQgWABgLgJg");
	this.shape_17.setTransform(110.2,428.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AguA2QgTgQAAgZQAAgdASgZQAVgbAfAAQAfAAAPAOQAPAOAAAcQAAAdgRAYQgUAcgfAAQgaAAgSgPgAgbgaQgOASAAAVQAAAOAMAKQALAIAQAAQATAAANgTQALgRAAgVQAAgTgIgHQgIgHgUAAQgSAAgOATg");
	this.shape_18.setTransform(96.5,428.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AASAsQgMADgLAAQgMAAgJgEQgJgGgCgMQgEgWAAgRQAAgKADgQQACgJAKAAQAFAAAEADQADADAAAFIgBAMIgBAMIABAVQAAAKACAFIAEACIAEABQAJAAAMgEIAAgPIgBgOQAAgRACgNQABgLALAAQAFAAAEADQAEADgBAGIgBAeIAAARIAAASIAAAFIAAAFQAAAFgDAEQgEADgFAAQgHAAgDgGg");
	this.shape_19.setTransform(76.8,430.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgcAlQgNgMAAgVQgBgSALgPQAOgSAWAAQASAAAKAOQAKAMAAAUQAAASgLAPQgNAQgTAAQgQAAgMgLgAgMgOQgFAJAAAJQAAALAGAFQAFAFAGAAQAHAAAFgFQAHgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_20.setTransform(67.4,430.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgUBDQgFgEABgFQAAgEASggIgTgdIgcgsQgCgDAAgDQAAgFAEgEQAEgDAFAAQAFAAAFAGIAHALIAPAZQAJAQAGAJIATgpIAIgSQAEgIAHAAQAGAAADADQAEAEAAAFQAAADgFAKIgSAoQgLAZgIAOIgOAbQgFAIgHAAQgEAAgEgDg");
	this.shape_21.setTransform(56.8,428.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgJAIQgEgDAAgFQAAgEAEgDQAEgEAFAAQAGAAAEADQAEAEAAAEQAAAFgEADQgEAEgGAAQgFAAgEgEg");
	this.shape_22.setTransform(305.8,407.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAVBAQgDgHgBgNIgCgUIAAgHIABgGIgBgIQAAgEgEAAQgKAAgHAIQgEAFgHAMQAAAggDAHQgDAHgIAAQgFAAgEgDQgEgEAAgFIABgEQABgCABgWIAAg6IAAgDIAAgOIAAgIIgBgIQAAgFADgDQAEgDAFAAQAJAAADAJQABAGAAAKIAAASIgBARQAHgGAHgDQAGgDAJAAQAPAAAGAIQAFAHABAMIABAVIACASIADARIABADQAAAFgEADQgEADgFAAQgJAAgCgJg");
	this.shape_23.setTransform(296.9,401);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgbAnQgOgMAAgTQAAgRANgSQAOgWASAAQAJAAAMAGQAPAGAAAHQAAAFgDADQgDAEgFAAQgEgBgGgEQgEgDgLAAQgGAAgIANQgHAMAAAJQAAAJAGAFQAHAGAJAAQAGgBAIgEQAJgFACABQAFgBADAEQAEADAAAFQAAAGgPAIQgNAFgJAAQgSABgOgLg");
	this.shape_24.setTransform(286.7,403.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAVApIgOAFQgGADgDAAQgWAAgKgMQgLgLAAgXQAAgUAQgPQAPgPAVAAQAJAAALAEQANAGAAAIQAAADgCACIgBAJIgBAMQAAAQACAHIAEAJIAEAIQAAAGgEACQgDAEgFAAQgEgBgJgHgAgMgRQgIAJAAAMQAAALAEAHQAEAFAIAAQAFAAAFgCQAFgBAEgDQgDgVAAgKIABgHIABgIIgDgBIgDgBQgLAAgJAKg");
	this.shape_25.setTransform(277.3,403.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgdAmQgPgLAAgUQAAgWAMgPQANgRAVAAQAPAAAKAFQANAHABANQAAAKgLAHQgFAEgPAFIgdAOQAEAEAGACQAHADAHAAQALAAAIgFQAHgFAFABQAJAAAAAJQAAAJgOAHQgNAFgNAAQgVAAgNgKgAgLgUQgGAFgDALIATgJIASgJQgFgEgKABQgIgBgFAGg");
	this.shape_26.setTransform(267.1,403.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgZBDQgEADgEAAQgFAAgDgDQgEgDAAgFIAAgHIABgGIAAhiQAAgHADgFQADgGAHAAQAJAAAAALIAAADIgBAEIAAAhQAHgEAGgBQAGgCAEAAQAVAAANAPQAMANAAAUQAAAUgOAPQgOAOgUAAQgMAAgLgEgAgJgBIgOAHIAAAlQAMAGAJgBQAKAAAHgHQAIgIAAgLQAAgLgGgIQgHgHgKAAQgDABgGACg");
	this.shape_27.setTransform(256.9,401.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgdAmQgPgLAAgUQAAgWAMgPQANgRAVAAQAPAAAKAFQAOAHAAANQAAAKgLAHQgFAEgPAFIgcAOQAEAEAFACQAGADAIAAQALAAAIgFQAHgFAFABQAJAAAAAJQAAAJgPAHQgMAFgNAAQgVAAgNgKgAgLgUQgGAFgDALIAUgJIASgJQgHgEgJABQgHgBgGAGg");
	this.shape_28.setTransform(238.6,403.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAVBAQgDgHgBgNIgCgUIAAgHIABgGIgBgIQAAgEgEAAQgKAAgHAIQgEAFgHAMQAAAggDAHQgDAHgIAAQgFAAgEgDQgEgEAAgFIABgEQABgCABgWIAAg6IAAgDIAAgOIAAgIIgBgIQAAgFADgDQAEgDAFAAQAJAAADAJQABAGAAAKIAAASIgBARQAHgGAHgDQAGgDAJAAQAPAAAGAIQAFAHABAMIABAVIACASIADARIABADQAAAFgEADQgEADgFAAQgJAAgCgJg");
	this.shape_29.setTransform(228.6,401);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgHA9QgDgDAAgFIAAgJIAAgKIgCgsIgQgBQgMgCAAgKQAAgFAEgDQADgEAGAAIAOABIAAgJIAAgJQAAgFAEgDQADgDAFAAQAMAAAAAWIAAAHIAJgBQAKAAAEACQAGACAAAIQABAFgEAEQgDADgGAAIgEAAIgEAAIgJAAIACAuIAAAEIAAAFQAAAUgMAAQgEAAgEgDg");
	this.shape_30.setTransform(219,401.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AASAoIgDgSIgBgSIABgHIAAgIIAAgCIAAgEQAAgIgDAAQgIAAgGAKQgHAJgEAPIgBAHIgBAIIAAAHIgBAJQAAAEgDAEQgEADgFAAQgFAAgEgDQgDgEAAgEIgBgIIAAgIIABgXIABgYIAAgIIAAgIQAAgEADgEQAEgDAFAAQALAAABAOIAAABQANgNANAAQARAAAGAOQAEAJAAATIAAAGIAAAEQAAAIACAKQACALAAAHQAAAEgDAEQgEADgFAAQgLAAgBgLg");
	this.shape_31.setTransform(202.4,403.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAVApIgOAFQgGADgDAAQgWAAgKgMQgLgLAAgXQAAgUAQgPQAPgPAVAAQAJAAALAEQANAGAAAIQAAADgCACIgBAJIgBAMQAAAQACAHIAEAJIAEAIQAAAGgEACQgDAEgFAAQgEgBgJgHgAgMgRQgIAJAAAMQAAALAEAHQAEAFAIAAQAFAAAFgCQAFgBAEgDQgDgVAAgKIABgHIABgIIgDgBIgDgBQgLAAgJAKg");
	this.shape_32.setTransform(192.6,403.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgdAmQgPgLAAgUQAAgWAMgPQANgRAVAAQAPAAAKAFQAOAHAAANQAAAKgLAHQgFAEgPAFIgdAOQAFAEAFACQAHADAHAAQALAAAIgFQAHgFAFABQAJAAAAAJQAAAJgOAHQgNAFgNAAQgVAAgNgKgAgLgUQgGAFgDALIATgJIASgJQgFgEgKABQgHgBgGAGg");
	this.shape_33.setTransform(182.4,403.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgIBFQgDgEAAgFIAAh4QAAgFADgDQAEgDAEgBQAFABADADQAEADAAAFIAAB0QAAARgMAAQgFAAgDgEg");
	this.shape_34.setTransform(175,401);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgbAnQgOgMABgTQAAgRAMgSQAOgWASAAQAJAAAMAGQAPAGAAAHQAAAFgDADQgDAEgFAAQgEgBgFgEQgGgDgKAAQgGAAgIANQgIAMAAAJQAAAJAHAFQAHAGAJAAQAGgBAJgEQAIgFACABQAFgBAEAEQACADAAAFQAAAGgPAIQgNAFgIAAQgTABgNgLg");
	this.shape_35.setTransform(167.8,403.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF0000").s().p("AgIBAQgEgEAAgFIABgDIAAgEIgBgNIAAgMIgCgfIgCggIgFAAQgUAAgLgCQgKgDAAgJQAAgEADgEQAEgEAGAAIAOACIAOABIAQgBIAPAAIAUABIAUABQAFAAAEADQAEAEAAAFQAAAFgEADQgEAEgFAAIgVgBIgWgBIADAkIACAjIAAAIIABAJQAAAHgDAFQgEAHgGAAQgEAAgEgDg");
	this.shape_36.setTransform(149.4,401.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF0000").s().p("AguA5QgLgIAAgLQAAgFADgEQAEgEAGAAQAHAAAEAIQAFALASAAQANAAAPgGQAPgHAAgIQgBgLgIgEQgHgCgSgBQgQAAgMgFQgQgHAAgNQABgSARgOQASgOAVAAQAJAAANAEQAPAFAAAGQAAAFgDADQgEAEgFAAIgMgCIgNgBQgLAAgKAFQgKAGAAAGQAAADADACQADADAHAAIAVACQAUABALAKQANAJAAATQAAAXgaALQgUAJgYAAQgWAAgNgKg");
	this.shape_37.setTransform(136.9,401.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF0000").s().p("AgjA8QgWgSAAgrIAAgNIAAgMIABgKIAAgLQgBgHADgGQAEgIAFAAQAFAAAEADQAFADAAAGIgBAPIAAAPIgBAMIAAAMQAAANAEALQADAOAHAFQAEADAOABQAWAAAIgoQAEgUAAglQAAgFADgEQAEgHAHAAQAHAAACAFQADADAAAEQAAAigEAUQgEAdgPAUQgHAIgJAHQgKAGgLAAQgXAAgLgIg");
	this.shape_38.setTransform(123.9,401.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF0000").s().p("AAvA5IgFgVQgDgQgGgcIgNAkIgFAQQgDAJgDAHQgGAIgHAAQgIAAgEgKIgFgQQgHgXgFgYIgLAqIgEAUQgDANgKAAQgGAAgDgFQgDgDgBgFQABgOAFgVIAKghIAGgbQAEgSAEgHQAFgGAGAAQAJAAADAIQAEAIAEAYQAEAXAHAZQAJgZAJgfIAFgVQAEgMALAAQAJAAAFAPQACAFACAQQAFAlAIAbIAIAdQgBAFgDAEQgFADgEAAQgKAAgFgOg");
	this.shape_39.setTransform(109.6,401.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgZBEQgEgDAAgFQAAgIATgpIgfg3IgEgHQgDgEAAgDQAAgFAEgDQAEgEAFAAQAGAAADAEQAMARAQAhIALgZIANgXQADgGAHAAQAFAAAEADQAEAEAAAEIgCAGIgeA+IgRAmIgFAQQgDAIgIAAQgFAAgEgDg");
	this.shape_40.setTransform(88.6,405.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgdAmQgPgLAAgUQAAgWAMgPQANgRAVAAQAPAAAKAFQANAHABANQAAAKgLAHQgFAEgPAFIgdAOQAEAEAGACQAHADAHAAQALAAAIgFQAHgFAFABQAJAAAAAJQAAAJgOAHQgNAFgNAAQgVAAgNgKgAgLgUQgGAFgDALIATgJIASgJQgFgEgKABQgIgBgFAGg");
	this.shape_41.setTransform(78.6,403.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAVBAQgDgHgBgNIgCgUIAAgHIABgGIgBgIQAAgEgEAAQgKAAgHAIQgEAFgHAMQAAAggDAHQgDAHgIAAQgFAAgEgDQgEgEAAgFIABgEQABgCABgWIAAg6IAAgDIAAgOIAAgIIgBgIQAAgFADgDQAEgDAFAAQAJAAADAJQABAGAAAKIAAASIgBARQAHgGAHgDQAGgDAJAAQAPAAAGAIQAFAHABAMIABAVIACASIADARIABADQAAAFgEADQgEADgFAAQgJAAgCgJg");
	this.shape_42.setTransform(68.6,401);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgIBAQgEgEAAgFIABgDIAAgEIgBgNIAAgMIgCgfIgCggIgFAAQgUAAgLgCQgKgDAAgJQAAgEADgEQAEgEAGAAIAOACIAOABIAQgBIAPAAIAUABIAUABQAFAAAEADQAEAEAAAFQAAAFgEADQgEAEgFAAIgVgBIgWgBIADAkIACAjIAAAIIABAJQAAAHgDAFQgEAHgGAAQgEAAgEgDg");
	this.shape_43.setTransform(57.2,401.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgJAIQgEgDAAgFQAAgDAEgEQAEgEAFAAQAGAAAEADQAEAEAAAEQAAAFgEADQgEAEgGAAQgFAAgEgEg");
	this.shape_44.setTransform(259.9,353.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AASApIgDgSIgBgTIABgHIAAgIIAAgCIAAgFQAAgHgDAAQgIAAgGAKQgHAJgEAOIgBAIIgBAIIAAAIIgBAIQAAAEgDAEQgEADgFAAQgFAAgEgDQgDgEAAgEIgBgIIAAgIIABgYIABgWIAAgIIAAgJQAAgEADgEQAEgDAFAAQALAAABAOIAAABQANgNANAAQARAAAGAOQAEAJAAATIAAAGIAAAFQAAAHACAKQACALAAAHQAAAFgDADQgEADgFAAQgLAAgBgKg");
	this.shape_45.setTransform(251.5,349.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgdAmQgPgLAAgUQAAgWAMgPQANgRAVAAQAPAAALAFQAMAHAAANQAAAKgKAIQgFADgPAFIgcANQADAFAHACQAGACAGAAQAMABAIgFQAIgFAEAAQAJABAAAIQAAAKgPAHQgMAFgOAAQgTAAgOgKgAgLgUQgGAGgEAKIAVgIIASgKQgHgDgJAAQgIgBgFAGg");
	this.shape_46.setTransform(241.5,349.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgHA9QgDgDAAgFIAAgJIAAgKIgCgsIgQgBQgLgCAAgKQgBgFAEgDQAEgEAEAAIAQABIgBgJIAAgJQAAgFAEgDQADgDAFAAQAMAAAAAWIAAAHIAJgBQAKAAAEACQAGACABAIQAAAFgEAEQgDADgGAAIgEAAIgEAAIgJAAIACAuIAAAEIAAAFQAAAUgNAAQgDAAgEgDg");
	this.shape_47.setTransform(232.4,347.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgtA4QAAgFAEgDQACgDAGAAIALACIANABQANAAAFgIQAHgHAAgRQgEAEgGACQgFADgGAAQgSAAgKgMQgLgLAAgRQAAgYAOgOQAPgQAZAAQAJAAAFACQAGACAEAEQAMACgBAMIgCAQQgEAVAAAVQgBAdgIANQgMARgcAAQgjAAAAgOgAgNgnQgHAJAAAOQAAALAEAFQAEAEAIAAQAGAAAHgHQAHgIABgIIAEgaIgGgDIgGgBQgOAAgIAKg");
	this.shape_48.setTransform(215.5,351.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AASApIgDgSIgBgTIABgHIAAgIIAAgCIAAgFQAAgHgDAAQgIAAgGAKQgHAJgEAOIgBAIIgBAIIAAAIIgBAIQAAAEgDAEQgEADgFAAQgFAAgEgDQgDgEAAgEIgBgIIAAgIIABgYIABgWIAAgIIAAgJQAAgEADgEQAEgDAFAAQALAAABAOIAAABQANgNANAAQARAAAGAOQAEAJAAATIAAAGIAAAFQAAAHACAKQACALAAAHQAAAFgDADQgEADgFAAQgLAAgBgKg");
	this.shape_49.setTransform(206.2,349.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAVApIgOAFQgGACgDAAQgWABgKgMQgLgLAAgXQAAgUAQgPQAPgPAVAAQAJAAALAEQANAGAAAIQAAADgCACIgBAJIgBAMQAAAPACAIIAEAJIAEAIQAAAGgEACQgDADgFAAQgEAAgJgHgAgMgRQgIAJAAAMQAAAMAEAFQAEAHAIgBQAFAAAFgBQAFgCAEgEQgDgUAAgKIABgHIABgIIgDgBIgDgBQgLABgJAJg");
	this.shape_50.setTransform(196.4,349.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAVBAQgDgHgBgNIgCgUIAAgHIABgGIgBgIQAAgEgEAAQgKAAgHAIQgEAFgHAMQAAAggDAHQgDAHgIAAQgFAAgEgDQgEgEAAgFIABgEQABgCABgWIAAg6IAAgDIAAgOIAAgIIgBgIQAAgFADgDQAEgDAFAAQAJAAADAJQABAGAAAKIAAASIgBARQAHgGAHgDQAGgDAJAAQAPAAAGAIQAFAHABAMIABAVIACASIADARIABADQAAAFgEADQgEADgFAAQgJAAgCgJg");
	this.shape_51.setTransform(186.3,346.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF0000").s().p("AgbBHQgKgCgGgEQgFAAgEgDQgDgEAAgFIABgaIABgbIAAgcIgBgdQAAgFAEgFQAFgFAGAAQADAAALAGIARAHQAYAJASARQAWAVAAAYQAAAPgIAOQgHAOgNAIQgOAKgaAAIgPgCgAgeAtQADACAFABIAKABQASAAAIgFQAIgFAEgJQAFgIAAgKQAAgUgZgQQgIgGgcgLg");
	this.shape_52.setTransform(167,347.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF0000").s().p("AgpBAQgDgEAAgEQAAgFADgEQAEgDAFAAIARgCIAAgnQABgXABgWIgTAAQgGAAgDgDQgDgDAAgFQAAgGADgDQADgDAEAAIAbgBQAPAAAbAEQALABAAALQgBAFgEAEQgDACgEAAIgYgCIgBAqIAAAnIAYAAQAGAAADAEQADADABAFQgBAFgDADQgEAEgFAAIgPAAIgQAAIgQACIgSABQgGAAgDgDg");
	this.shape_53.setTransform(155.2,347.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FF0000").s().p("AgbBHQgKgCgFgEQgGAAgDgDQgEgEAAgFIABgaIABgbIAAgcIgBgdQAAgFAEgFQAFgFAFAAQADAAAMAGIARAHQAYAJASARQAWAVAAAYQAAAPgIAOQgHAOgNAIQgOAKgaAAIgPgCgAgeAtQADACAFABIAKABQASAAAIgFQAIgFAFgJQAEgIAAgKQAAgUgagQQgHgGgcgLg");
	this.shape_54.setTransform(144.2,347.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgdAmQgPgLAAgUQAAgWAMgPQANgRAVAAQAPAAALAFQANAHgBANQAAAKgKAIQgFADgPAFIgcANQADAFAHACQAGACAGAAQAMABAIgFQAHgFAFAAQAJABAAAIQAAAKgPAHQgMAFgOAAQgTAAgOgKgAgLgUQgGAGgEAKIAVgIIASgKQgHgDgJAAQgIgBgFAGg");
	this.shape_55.setTransform(124.4,349.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAVBAQgDgHgBgNIgCgUIAAgHIABgGIgBgIQAAgEgEAAQgKAAgHAIQgEAFgHAMQAAAggDAHQgDAHgIAAQgFAAgEgDQgEgEAAgFIABgEQABgCABgWIAAg6IAAgDIAAgOIAAgIIgBgIQAAgFADgDQAEgDAFAAQAJAAADAJQABAGAAAKIAAASIgBARQAHgGAHgDQAGgDAJAAQAPAAAGAIQAFAHABAMIABAVIACASIADARIABADQAAAFgEADQgEADgFAAQgJAAgCgJg");
	this.shape_56.setTransform(114.5,346.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AguA5QgMgIAAgLQAAgFAEgEQADgEAHAAQAHAAAEAIQAFALASAAQAOAAAOgGQAOgHAAgIQAAgLgJgEQgGgCgSgBQgQAAgMgFQgQgHAAgNQAAgSATgOQARgOAVAAQAIAAAOAEQAPAFAAAGQAAAFgDADQgDAEgGAAIgMgCIgNgBQgLAAgJAFQgLAGAAAGQAAADADACQAEADAGAAIAVACQAUABALAKQAMAJAAATQAAAXgaALQgTAJgZAAQgVAAgNgKg");
	this.shape_57.setTransform(102.9,347.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgJAJQgEgEAAgEQAAgEAEgEQAEgEAFAAQAGAAAEAEQAEADAAAFQAAAEgEAEQgEADgGAAQgFAAgEgDg");
	this.shape_58.setTransform(301.3,326.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgdAmQgPgLAAgUQAAgVAMgQQANgRAVAAQAPAAALAFQANAHgBAOQAAAJgKAIQgFADgPAGIgcAMQADAFAHACQAGACAGAAQAMABAIgFQAHgFAFAAQAJABAAAIQAAAKgPAHQgMAFgOAAQgTAAgOgKgAgLgUQgGAGgEAKIAVgIIASgKQgHgEgJAAQgIAAgFAGg");
	this.shape_59.setTransform(292.3,322.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgNAnIgchGIgBgFQAAgEADgEQAEgDAFAAQAIAAADAHIATAxIAMgeIAIgTQAEgHAGAAQAFAAAFAEQADADAAAFQAAADgOAgIgSAmQgBAFgDACQgDADgEAAQgJAAgEgJg");
	this.shape_60.setTransform(283.2,322);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AAVAoIgOAGQgGACgDAAQgWAAgKgLQgLgMAAgWQAAgUAQgPQAPgPAVAAQAJAAALAEQANAGAAAIQAAACgCADIgBAJIgBAMQAAAPACAIIAEAJIAEAIQAAAFgEADQgDADgFAAQgEAAgJgIgAgMgRQgIAKAAALQAAAMAEAFQAEAHAIgBQAFABAFgCQAFgCAEgEQgDgUAAgKIABgHIABgIIgDgBIgDAAQgLAAgJAJg");
	this.shape_61.setTransform(273.7,322.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AADAcQgDgIgCgVIgCAEIgNAiQgCAEgCACQgEAGgHAAQgFAAgEgHQgFgIgDgMQgDgLgFgkIgCgMQAAgFAFgDQADgDAFAAQAKAAACAJIABAMIACANIAEAVIAOgrQAEgMAJAAQAJAAAEANIAFAXIAEAYIAOg1QABgHAKAAQAFAAAEADQADADAAAFIAAADIgTA9QgCAIgHAJQgDAFgHAAQgMAAgGgVg");
	this.shape_62.setTransform(262.6,322.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgZBEQgEgDAAgFQAAgIATgpIgfg3IgEgHQgDgEAAgDQAAgFAEgDQAEgEAFAAQAGAAADAEQAMARAQAhIALgZIANgXQADgGAHAAQAFAAAEADQAEAEAAAEIgCAGIgeA+IgRAmIgFAQQgDAIgIAAQgFAAgEgDg");
	this.shape_63.setTransform(243.5,324.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgiAuQgDgEABgEIAAg5IAAgIIAAgIQAAgFACgDQADgEAGAAQAJAAACAKQAPgLATAAQARAAAAAXIAAAGQAAANgLAAQgLAAAAgLIgBgJQgTADgJARIAAAsQABAFgEADQgDADgGAAQgFAAgDgDg");
	this.shape_64.setTransform(234.4,322.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgdAmQgPgLAAgUQAAgVAMgQQANgRAVAAQAPAAALAFQANAHgBAOQAAAJgKAIQgFADgPAGIgcAMQADAFAHACQAGACAGAAQAMABAIgFQAHgFAFAAQAJABAAAIQAAAKgPAHQgMAFgOAAQgTAAgOgKgAgLgUQgGAGgEAKIAVgIIASgKQgHgEgJAAQgIAAgFAGg");
	this.shape_65.setTransform(224.8,322.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgNAnIgchGIgBgFQAAgEADgEQAEgDAFAAQAHAAAEAHIATAxIAMgeIAIgTQAEgHAGAAQAFAAAEAEQAEADAAAFQAAADgOAgIgSAmQgBAFgDACQgDADgEAAQgJAAgEgJg");
	this.shape_66.setTransform(215.7,322);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgdAmQgPgLAAgUQAAgVAMgQQANgRAVAAQAPAAALAFQAMAHAAAOQAAAJgKAIQgFADgPAGIgcAMQADAFAHACQAGACAGAAQAMABAIgFQAIgFAEAAQAJABAAAIQAAAKgPAHQgMAFgOAAQgTAAgOgKgAgLgUQgGAGgEAKIAVgIIASgKQgHgEgJAAQgIAAgFAGg");
	this.shape_67.setTransform(206,322.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAVBAQgDgHgBgNIgCgUIAAgHIABgGIgBgIQAAgEgEAAQgKAAgHAIQgEAFgHAMQAAAggDAHQgDAHgIAAQgFAAgEgDQgEgEAAgFIABgEQABgCABgWIAAg6IAAgDIAAgOIAAgIIgBgIQAAgFADgDQAEgDAFAAQAJAAADAJQABAGAAAKIAAASIgBARQAHgGAHgDQAGgDAJAAQAPAAAGAIQAFAHABAMIABAVIACASIADARIABADQAAAFgEADQgEADgFAAQgJAAgCgJg");
	this.shape_68.setTransform(188.2,319.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgaAnQgOgMgBgTQAAgRANgSQAOgWASABQAJAAAMAEQAPAGAAAIQAAAFgDADQgDAEgFgBQgEAAgGgDQgEgFgLAAQgGAAgIAOQgHAMAAAJQAAAJAGAGQAGAEAKAAQAGABAIgFQAJgFACAAQAFAAADAEQADAEAAAEQAAAHgOAGQgNAHgJAAQgTgBgMgKg");
	this.shape_69.setTransform(178.1,322.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgHA9QgDgDAAgFIAAgJIAAgKIgCgsIgQgBQgLgCAAgKQgBgFAEgDQAEgEAEAAIAQABIgBgJIAAgJQAAgFAEgDQADgDAFAAQAMAAAAAWIAAAHIAJgBQAKAAAEACQAGACABAIQAAAFgEAEQgDADgGAAIgEAAIgEAAIgJAAIACAuIAAAEIAAAFQAAAUgNAAQgDAAgEgDg");
	this.shape_70.setTransform(169.4,320.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AAVAoIgOAGQgGACgDAAQgWAAgKgLQgLgMAAgWQAAgUAQgPQAPgPAVAAQAJAAALAEQANAGAAAIQAAACgCADIgBAJIgBAMQAAAPACAIIAEAJIAEAIQAAAFgEADQgDADgFAAQgEAAgJgIgAgMgRQgIAKAAALQAAAMAEAFQAEAHAIgBQAFABAFgCQAFgCAEgEQgDgUAAgKIABgHIABgIIgDgBIgDAAQgLAAgJAJg");
	this.shape_71.setTransform(160.2,322.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgbAnQgOgMABgTQAAgRAMgSQAOgWASABQAJAAAMAEQAPAGAAAIQAAAFgDADQgDAEgFgBQgEAAgFgDQgGgFgKAAQgGAAgIAOQgIAMAAAJQAAAJAHAGQAGAEAKAAQAGABAJgFQAIgFACAAQAFAAAEAEQACAEAAAEQABAHgQAGQgNAHgIAAQgTgBgNgKg");
	this.shape_72.setTransform(150.3,322.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FF0000").s().p("AgvA5QgLgIABgLQAAgFADgEQADgEAGAAQAIAAAEAIQAFALARAAQAOAAAPgGQAOgHAAgIQABgLgKgEQgGgCgTgBQgPAAgMgFQgQgHAAgNQABgSARgOQATgOAUAAQAIAAANAEQAQAFAAAGQAAAFgDADQgDAEgGAAIgNgCIgMgBQgMAAgJAFQgKAGAAAGQAAADADACQADADAHAAIAVACQATABAMAKQAMAJAAATQAAAXgaALQgTAJgZAAQgWAAgNgKg");
	this.shape_73.setTransform(131.9,320.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FF0000").s().p("AgoBDQgKgIAAgdIACgiIABgjIAAgJIgBgKQAAgNAMAAQAEAAADACIAUgDIAQgCQAWAAANAFQAJADgBAIQAAAFgCAEQgEAEgFAAIgEgBQgOgEgOAAIgNABIgQADIgBAjIAigDIAUgCQAGAAADAEQAEADABAFQAAAKgMABIgVACIgkADIgBASQAAASACACQABABAKAAIAPAAIARAAIAFgBIAFgBQAFAAAEADQAEAEAAAGQAAAJgLACQgIACgbAAQgcAAgJgIg");
	this.shape_74.setTransform(120.3,319.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FF0000").s().p("AguA2QgTgQAAgZQAAgdASgZQAVgbAfAAQAfAAAPAOQAPAOAAAcQAAAdgRAYQgUAcgfAAQgaAAgSgPgAgbgaQgOASAAAVQAAAOAMAKQALAIAQAAQATAAANgTQALgRAAgVQAAgTgIgHQgIgHgUAAQgSAAgOATg");
	this.shape_75.setTransform(107.2,320.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FF0000").s().p("AgbBHQgKgCgGgEQgFAAgEgDQgDgEAAgFIABgaIAAgbIAAgcIAAgdQAAgFAFgFQAEgFAGAAQACAAAMAGIAQAHQAZAJASARQAWAVAAAYQAAAPgHAOQgIAOgNAIQgPAKgZAAIgPgCgAgeAtQAEACAEABIAKABQASAAAIgFQAIgFAEgJQAFgIAAgKQAAgUgZgQQgIgGgcgLg");
	this.shape_76.setTransform(93.9,320.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgdAmQgPgLAAgUQAAgVAMgQQANgRAVAAQAPAAAKAFQANAHABAOQAAAJgLAIQgFADgPAGIgdAMQAEAFAGACQAHACAHAAQALABAIgFQAHgFAFAAQAJABAAAIQAAAKgOAHQgNAFgNAAQgVAAgNgKgAgLgUQgGAGgDAKIATgIIASgKQgFgEgKAAQgIAAgFAGg");
	this.shape_77.setTransform(74.1,322.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AAlBDQgEgDAAgFIAAgTIgBgUIAAgJQgNABgUAEIghAGIgCATIAAASQAAAFgEADQgDADgFAAQgGAAgDgDQgDgDAAgFIABgaIACgaIAAggIABghQAAgFADgDQAEgDAFAAQAFAAADADQAEADAAAFIgBAUIAAAUIgBAJIAAAJIAhgHQATgDAOgBIACggQAAgHAEgIQAFgLAGAAQAFAAADADQAEADAAAFIAAADQgCAGAAAFIgBAIIAAAHIgBAZIgBAYIABATIABAUQAAAEgDAEQgEADgFAAQgFAAgEgDg");
	this.shape_78.setTransform(62.4,319.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgJAJQgEgEAAgEQAAgFAEgDQAEgEAFAAQAGAAAEAEQAEADAAAFQAAAEgEAEQgEADgGAAQgFAAgEgDg");
	this.shape_79.setTransform(257.9,299.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgPBKQgFgDAAgFIABgCQACgNAAgLIAAgrIgGABIgFABQgGAAgDgEQgDgDAAgFQAAgIAIgDIAQgBIABgKQACgUAJgJQAJgMAUAAQARAAgBALQAAAMgOAAQgLAAgEAHQgFAGgBALIAAADIARgBQARAAAAALQAAAMgSgBIgRABIAAAXIAAAXQAAARgBAJQgCAJgJAAQgFAAgDgDg");
	this.shape_80.setTransform(249.3,293.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgiAuQgDgEABgEIAAg5IAAgIIAAgIQAAgFACgDQADgEAGAAQAJAAACAKQAPgLATAAQARAAAAAXIAAAGQAAANgLAAQgLAAAAgLIgBgJQgTADgJARIAAAsQABAFgEADQgDADgFAAQgGAAgDgDg");
	this.shape_81.setTransform(240.7,295.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AASArQgMAFgLAAQgMgBgJgFQgJgFgCgNQgEgVAAgQQAAgMADgOQACgKAKAAQAFAAAEADQADADAAAFIgBAMIgBANIABAUQAAAJACAHIAEABIAEAAQAJAAAMgCIAAgQIgBgOQAAgRACgOQABgKALAAQAFAAAEADQAEAEgBAEIgBAfIAAARIAAARIAAAGIAAAGQAAAFgDADQgEADgFAAQgHAAgDgHg");
	this.shape_82.setTransform(231.5,295.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgYAuQgNgFAAgKQAAgIAKAAQAEAAAIACQAIADAEAAQARAAAAgHQAAgFgNgFQgRgIgFgDQgMgJAAgMQAAgSASgGQALgEAWAAQAJAAAEADQAGADAAAIQAAAQgJAAQgJAAgBgHIgIgBQgUAAAAAGQAAADAMAGQARAIAHAEQAMAJAAALQAAAPgOAIQgLAHgQAAQgLAAgKgEg");
	this.shape_83.setTransform(222.4,295);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgcAlQgNgMAAgUQgBgTALgPQAOgSAWAAQASAAAKAOQAKANAAASQAAAUgLAOQgNAQgTAAQgQAAgMgLgAgMgOQgFAJAAAKQAAAKAGAGQAFAEAGAAQAHAAAFgFQAHgGAAgKQABgcgQAAQgKAAgGAKg");
	this.shape_84.setTransform(205.5,295.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgHA9QgDgDgBgFIAAgJIABgKIgCgsIgQgBQgMgCAAgKQABgFADgDQADgEAFAAIAQABIgBgJIAAgJQAAgFADgDQAEgDAFAAQAMAAAAAWIAAAHIAJgBQAKAAADACQAIACgBAIQAAAFgDAEQgDADgFAAIgFAAIgEAAIgIAAIABAuIAAAEIAAAFQAAAUgMAAQgFAAgDgDg");
	this.shape_85.setTransform(196.7,293.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgdAmQgPgLAAgUQAAgWAMgPQANgRAVAAQAPAAAKAFQANAGABAPQAAAJgLAIQgFADgPAGIgdAMQAFAFAFACQAGACAIAAQALABAIgFQAIgEAEgBQAJABAAAIQAAAKgOAHQgNAFgNAAQgVAAgNgKgAgLgUQgGAFgDALIATgIIASgKQgFgEgKAAQgIAAgFAGg");
	this.shape_86.setTransform(179.5,295);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgMAnIgdhGIgCgFQABgEAEgEQADgDAFAAQAHAAAEAHIATAxIAMgeIAIgTQADgHAIAAQAEAAAFAEQADADAAAFQAAADgOAgIgTAmQAAAFgDACQgDADgEAAQgJAAgDgJg");
	this.shape_87.setTransform(170.4,294.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgcAlQgNgMAAgUQgBgTALgPQAOgSAWAAQASAAAKAOQAKANAAASQAAAUgLAOQgNAQgTAAQgQAAgMgLgAgMgOQgFAJAAAKQAAAKAGAGQAFAEAGAAQAHAAAFgFQAHgGAAgKQABgcgQAAQgKAAgGAKg");
	this.shape_88.setTransform(161,295.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgIBFQgDgEAAgEIAAh5QAAgFADgEQAEgDAEAAQAGAAADADQADAEAAAFIAABzQAAARgMAAQgEAAgEgDg");
	this.shape_89.setTransform(153.9,292.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FF0000").s().p("AguA2QgTgQAAgZQAAgdASgZQAVgbAfAAQAfAAAPAOQAPAOAAAcQAAAdgRAYQgUAcgfAAQgaAAgSgPgAgbgaQgOASAAAVQAAAOAMAKQALAIAQAAQATAAANgTQALgRAAgVQAAgTgIgHQgIgHgUAAQgSAAgOATg");
	this.shape_90.setTransform(136.5,293);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FF0000").s().p("AgbBHQgKgCgGgEQgFAAgDgDQgEgEAAgFIABgaIABgbIAAgcIgBgdQAAgFAEgFQAGgFAEAAQAEAAALAGIARAHQAYAJASARQAWAVAAAYQAAAPgIAOQgHAOgNAIQgPAKgZAAIgPgCgAgeAtQADACAFABIAKABQASAAAIgFQAIgFAFgJQAEgIAAgKQAAgUgagQQgHgGgcgLg");
	this.shape_91.setTransform(123.2,293);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgpBAQgDgEAAgEQAAgFADgEQAEgDAFAAIARgCIAAgnQAAgXACgWIgTAAQgGAAgDgDQgDgDAAgFQAAgGADgDQADgDAEAAIAbgBQAPAAAbAEQAKABAAALQAAAFgEAEQgDACgEAAIgYgCIgBAqIAAAnIAYAAQAGAAADAEQADADAAAFQAAAFgDADQgEAEgFAAIgQAAIgPAAIgQACIgSABQgGAAgDgDg");
	this.shape_92.setTransform(103.6,293);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgJAJQgEgEAAgEQAAgFAEgDQAEgEAFAAQAGAAAEAEQAEADAAAFQAAAEgEAEQgEADgGAAQgFAAgEgDg");
	this.shape_93.setTransform(286.3,244.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgdAmQgPgLAAgUQAAgVAMgQQANgRAVAAQAPAAALAFQANAHgBAOQAAAJgKAHQgFAEgPAGIgdANQAFAEAGADQAGABAGAAQAMAAAIgEQAHgEAFAAQAJgBAAAJQAAALgOAGQgNAFgOAAQgTAAgOgKgAgLgUQgGAGgEAKIAUgIIATgKQgHgDgJgBQgHABgGAFg");
	this.shape_94.setTransform(277.3,240.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgIBFQgDgDAAgFIAAh5QAAgGAEgDQADgCAEAAQAGAAADACQADADAAAGIAABzQAAARgMABQgEgBgEgDg");
	this.shape_95.setTransform(269.9,238.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AAVAoIgOAHQgGABgDAAQgWABgKgMQgLgMAAgWQAAgUAQgPQAPgQAVAAQAJAAALAGQANAFAAAHQAAADgCADIgBAJIgBAMQAAAQACAHIAEAJIAEAJQAAAEgEAEQgDACgFAAQgEABgJgJgAgMgRQgIAKAAALQAAALAEAHQAEAFAIABQAFAAAFgDQAFgBAEgDQgDgVAAgKIABgGIABgIIgDgCIgDAAQgLgBgJAKg");
	this.shape_96.setTransform(262.5,240.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AAVBAQgDgHgBgNIgCgUIAAgHIABgGIgBgIQAAgEgEAAQgKAAgHAIQgEAFgHAMQAAAggDAHQgDAHgIAAQgFAAgEgDQgEgEAAgFIABgEQABgCABgWIAAg6IAAgDIAAgOIAAgIIgBgIQAAgFADgDQAEgDAFAAQAJAAADAJQABAGAAAKIAAASIgBARQAHgGAHgDQAGgDAJAAQAPAAAGAIQAFAHABAMIABAVIACASIADARIABADQAAAFgEADQgEADgFAAQgJAAgCgJg");
	this.shape_97.setTransform(252.4,238.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AADAcQgDgIgCgVIgCAEIgNAiQgBAEgDACQgEAGgHAAQgFAAgEgHQgEgIgDgMQgDgLgGgkIgBgMQAAgFADgDQAEgDAFAAQAJAAACAJIADAMIABANIADAVIAQgrQADgMAJAAQAJAAAEANIAEAXIAFAYIANg1QADgHAIAAQAGAAADADQAFADAAAFIgBADIgSA9QgDAIgGAJQgFAFgGAAQgLAAgHgVg");
	this.shape_98.setTransform(241,241);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AAVAoIgOAHQgGABgDAAQgWABgKgMQgLgMAAgWQAAgUAQgPQAPgQAVAAQAJAAALAGQANAFAAAHQAAADgCADIgBAJIgBAMQAAAQACAHIAEAJIAEAJQAAAEgEAEQgDACgFAAQgEABgJgJgAgMgRQgIAKAAALQAAALAEAHQAEAFAIABQAFAAAFgDQAFgBAEgDQgDgVAAgKIABgGIABgIIgDgCIgDAAQgLgBgJAKg");
	this.shape_99.setTransform(222,240.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgdAmQgPgLAAgUQAAgVAMgQQANgRAVAAQAPAAAKAFQAOAHAAAOQAAAJgLAHQgFAEgPAGIgcANQAEAEAFADQAHABAHAAQALAAAIgEQAHgEAFAAQAJgBAAAJQAAALgOAGQgNAFgNAAQgVAAgNgKgAgLgUQgGAGgDAKIATgIIASgKQgFgDgKgBQgHABgGAFg");
	this.shape_100.setTransform(204,240.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgdAmQgPgLAAgUQAAgVAMgQQANgRAVAAQAPAAALAFQANAHAAAOQAAAJgLAHQgFAEgPAGIgdANQAFAEAFADQAGABAHAAQAMAAAIgEQAHgEAFAAQAJgBAAAJQAAALgOAGQgNAFgOAAQgUAAgNgKgAgLgUQgGAGgEAKIAUgIIASgKQgFgDgKgBQgHABgGAFg");
	this.shape_101.setTransform(194,240.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgYAuQgNgFAAgKQAAgIAKAAQAEAAAIACQAIADAEAAQARAAAAgHQAAgFgNgFQgRgIgFgDQgMgJAAgMQAAgSASgGQALgEAWAAQAJAAAEADQAGADAAAIQAAAQgJAAQgJAAgBgHIgIgBQgUAAAAAGQAAADAMAGQARAIAHAEQAMAJAAALQAAAPgOAIQgLAHgQAAQgLAAgKgEg");
	this.shape_102.setTransform(184.6,240.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FF0000").s().p("AgIBAQgEgEAAgFIABgDIAAgEIgBgNIAAgMIgCgfIgCggIgFAAQgUAAgLgCQgKgDAAgJQAAgEADgEQAEgEAGAAIAOACIAOABIAQgBIAPAAIAUABIAUABQAFAAAEADQAEAEAAAFQAAAFgEADQgEAEgFAAIgVgBIgWgBIADAkIACAjIAAAIIABAJQAAAHgDAFQgEAHgGAAQgEAAgEgDg");
	this.shape_103.setTransform(166.4,238.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FF0000").s().p("AAlBDQgEgDAAgFIAAgTIgBgUIAAgJQgNABgUAEIghAGIgCATIAAASQAAAFgEADQgDADgFAAQgGAAgDgDQgDgDAAgFIABgaIACgaIAAggIABghQAAgFADgDQAEgDAFAAQAFAAADADQAEADAAAFIgBAUIAAAUIgBAJIAAAJIAhgHQATgDAOgBIACggQAAgHAEgIQAFgLAGAAQAFAAADADQAEADAAAFIAAADQgCAGAAAFIgBAIIAAAHIgBAZIgBAYIABATIABAUQAAAEgDAEQgEADgFAAQgFAAgEgDg");
	this.shape_104.setTransform(153.3,238.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FF0000").s().p("AgvA8QgMgMAAgaQABgWAKgXQAMgXARgPQAMgKANAAQAJAAAOAGQASAHAAAJQAAAEgEAEQgDAEgFAAQgEAAgJgFQgIgFgIAAQgHAAgNARQgUAZAAAbQAAAPAEAFQAFAGANAAQANAAAKgIQAKgHAGgQQgUACgOAGIgGACQgGgBgDgEQgDgDAAgFQAAgNAegFQATgCAXAAQAFgBAEAEQADADAAAEQAAAHgEADQgGAagTAQQgSAQgYAAQgXAAgMgMg");
	this.shape_105.setTransform(140.3,238.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FF0000").s().p("AgpBAQgEgEABgEQAAgFADgEQAEgDAFAAIARgCIAAgnQABgXABgWIgTAAQgGAAgDgDQgEgDABgFQgBgGAEgDQADgDAFAAIAagBQAQAAAaAEQALABAAALQgBAFgEAEQgDACgEAAIgXgCIgBAqIgBAnIAYAAQAFAAAEAEQADADABAFQgBAFgDADQgEAEgFAAIgPAAIgQAAIgQACIgSABQgGAAgDgDg");
	this.shape_106.setTransform(129,238.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FF0000").s().p("AAwA5IgGgVQgEgQgFgcIgMAkIgGAQQgDAJgEAHQgFAIgGAAQgJAAgFgKIgEgQQgHgXgGgYIgLAqIgDAUQgDANgKAAQgGAAgEgFQgCgDAAgFQgBgOAHgVIAJghIAFgbQAEgSAFgHQAEgGAIAAQAIAAAEAIQADAIAEAYQAEAXAHAZQAKgZAIgfIAFgVQAEgMAKAAQAKAAAFAPQACAFACAQQAFAlAIAbIAIAdQgBAFgEAEQgDADgFAAQgKAAgEgOg");
	this.shape_107.setTransform(116.4,238.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AASArQgMAEgLAAQgMAAgJgEQgJgHgCgLQgEgWAAgQQAAgLADgPQACgKAKAAQAFAAAEADQADADAAAFIgBAMIgBANIABAUQAAAJACAHIAEABIAEABQAJAAAMgDIAAgQIgBgOQAAgRACgNQABgLALAAQAFAAAEADQAEAEgBAFIgBAeIAAARIAAARIAAAGIAAAFQAAAGgDADQgEADgFAAQgHAAgDgHg");
	this.shape_108.setTransform(95.7,240.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgcAlQgNgMAAgUQgBgTALgPQAOgSAWAAQASAAAKAOQAKAMAAAUQAAASgLAPQgNAQgTAAQgQAAgMgLgAgMgOQgFAJAAAKQAAAKAGAFQAFAFAGAAQAHAAAFgFQAHgGAAgKQABgcgQAAQgKAAgGAKg");
	this.shape_109.setTransform(86.3,240.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgUBDQgFgEAAgFQABgEASggIgUgdIgbgsQgCgDAAgDQAAgFAEgEQADgDAFAAQAHAAAEAGIAGALIAQAZQAJAQAGAJIAUgpIAHgSQADgIAIAAQAFAAAEADQAEAEAAAFQAAADgFAKIgSAoQgLAZgIAOIgOAbQgFAIgGAAQgFAAgEgDg");
	this.shape_110.setTransform(75.8,238.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgJAIQgEgDAAgEQAAgFAEgDQAEgEAFAAQAGAAAEAEQAEADAAAFQAAAEgEADQgEAEgGAAQgFAAgEgEg");
	this.shape_111.setTransform(311.5,217.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AAVBAQgDgHgBgNIgCgUIAAgHIABgGIgBgIQAAgEgEAAQgKAAgHAIQgEAFgHAMQAAAggDAHQgDAHgIAAQgFAAgEgDQgEgEAAgFIABgEQABgCABgWIAAg6IAAgDIAAgOIAAgIIgBgIQAAgFADgDQAEgDAFAAQAJAAADAJQABAGAAAKIAAASIgBARQAHgGAHgDQAGgDAJAAQAPAAAGAIQAFAHABAMIABAVIACASIADARIABADQAAAFgEADQgEADgFAAQgJAAgCgJg");
	this.shape_112.setTransform(302.6,211.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgHA9QgEgDABgFIAAgJIAAgKIgCgsIgQgBQgMgCABgKQAAgFADgDQAEgEAFAAIAPABIgBgJIAAgJQAAgFAEgDQADgDAFAAQAMAAAAAWIAAAHIAJgBQAKAAAEACQAGACABAIQAAAFgEAEQgDADgGAAIgEAAIgEAAIgJAAIACAuIAAAEIAAAFQAAAUgNAAQgDAAgEgDg");
	this.shape_113.setTransform(293,212.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AASAsQgMADgLAAQgMAAgJgEQgJgHgCgLQgEgWAAgRQAAgKADgPQACgKAKAAQAFAAAEADQADADAAAFIgBAMIgBAMIABAVQAAAJACAHIAEABIAEABQAJAAAMgEIAAgPIgBgOQAAgRACgNQABgLALAAQAFAAAEADQAEAEgBAFIgBAeIAAARIAAARIAAAGIAAAFQAAAGgDADQgEADgFAAQgHAAgDgGg");
	this.shape_114.setTransform(284,213.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgcAlQgNgMAAgUQgBgTALgPQAOgSAWAAQASAAAKAOQAKAMAAAUQAAASgLAPQgNAQgTAAQgQAAgMgLgAgMgOQgFAJAAAKQAAAKAGAFQAFAFAGAAQAHAAAFgFQAHgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_115.setTransform(274.6,213.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgYAuQgNgFAAgKQAAgIAKAAQAEAAAIACQAIADAEAAQARAAAAgHQAAgFgNgFQgRgIgFgDQgMgJAAgMQAAgSASgGQALgEAWAAQAJAAAEADQAGADAAAIQAAAQgJAAQgJAAgBgHIgIgBQgUAAAAAGQAAADAMAGQARAIAHAEQAMAJAAALQAAAPgOAIQgLAHgQAAQgLAAgKgEg");
	this.shape_116.setTransform(265.5,213.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AAYBCQgGAEgGABIgMABQgUAAgNgMQgNgOAAgTQAAgYANgOQANgOAVAAQAGAAAGACIAJADQABgdABgMQACgKAKAAQAFAAADADQADADAAAGIgCAmIgCAlQAAAfACALIABADQAAAEgEAEQgDADgFAAQgHAAgDgGgAgRAEQgHAIAAAOQAAAKAHAHQAHAHAKAAQAFgBAEgBIAIgGIADgCIAAghQgDgFgFgCQgEgDgHABQgMAAgGAGg");
	this.shape_117.setTransform(248.1,211.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgdAmQgPgLAAgUQAAgVAMgQQANgRAVAAQAPAAAKAFQAOAGAAAOQAAAKgLAHQgFAEgPAFIgcAOQAEAEAFADQAHACAHAAQALgBAIgEQAHgEAFAAQAJgBAAAKQAAAKgOAGQgNAFgNAAQgVAAgNgKgAgLgUQgGAGgDAKIATgJIASgJQgFgDgKAAQgHAAgGAFg");
	this.shape_118.setTransform(237.8,213.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgHA9QgDgDgBgFIAAgJIABgKIgCgsIgQgBQgMgCABgKQAAgFADgDQADgEAFAAIAPABIAAgJIAAgJQAAgFADgDQAEgDAFAAQAMAAAAAWIAAAHIAJgBQAKAAADACQAIACgBAIQAAAFgDAEQgDADgFAAIgFAAIgEAAIgIAAIABAuIAAAEIAAAFQAAAUgMAAQgFAAgDgDg");
	this.shape_119.setTransform(228.6,212.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgQBKQgDgDAAgFIAAgCQACgNAAgLIAAgrIgGABIgFABQgFAAgEgEQgEgDAAgFQAAgIAJgDIAPgBIABgKQADgUAIgJQAJgMAWAAQAQAAAAALQAAAMgPAAQgLAAgFAHQgDAGgBALIgBADIARgBQAQAAAAALQAAAMgRgBIgRABIAAAXIABAXQAAARgDAJQgCAJgIAAQgFAAgEgDg");
	this.shape_120.setTransform(219.7,211.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgKBAQgEgDAAgGIAAgPIgBgQIABgUIACgTQAAgFADgEQAEgDAFAAQAEAAAEADQACAEAAAFIAAATIgBAUIAAAQIAAAPQAAAGgDADQgEADgDAAQgGAAgDgDgAgIgsQgDgEAAgFQAAgGADgEQAFgDAEAAQAGAAAEADQAFAEAAAGQAAAFgFAEQgEAEgGAAQgEAAgFgEg");
	this.shape_121.setTransform(212.9,211.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgiAuQgCgEgBgEIAAg5IAAgIIAAgIQAAgFAEgDQADgEAFAAQAKAAACAKQAOgLATAAQARAAABAXIAAAGQgBANgMAAQgLAAAAgLIAAgJQgTADgIARIAAAsQgBAFgDADQgDADgGAAQgFAAgDgDg");
	this.shape_122.setTransform(206,213.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AAYBCQgGAEgGABIgMABQgUAAgNgMQgNgOAAgTQAAgYANgOQANgOAVAAQAGAAAGACIAJADQABgdABgMQACgKAKAAQAFAAADADQADADAAAGIgCAmIgCAlQAAAfACALIABADQAAAEgEAEQgDADgFAAQgHAAgDgGgAgRAEQgHAIAAAOQAAAKAHAHQAHAHAKAAQAFgBAEgBIAIgGIADgCIAAghQgDgFgFgCQgEgDgHABQgMAAgGAGg");
	this.shape_123.setTransform(196.1,211.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgdAmQgPgLAAgUQAAgVAMgQQANgRAVAAQAPAAAKAFQANAGABAOQAAAKgLAHQgFAEgPAFIgdAOQAEAEAGADQAHACAHAAQALgBAIgEQAHgEAFAAQAJgBAAAKQAAAKgOAGQgNAFgNAAQgVAAgNgKgAgLgUQgGAGgDAKIATgJIASgJQgFgDgKAAQgIAAgFAFg");
	this.shape_124.setTransform(178,213.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgMAnIgehGIgBgFQAAgEAFgEQADgDAFAAQAIAAADAHIATAxIAMgeIAIgTQADgHAIAAQAEAAAFAEQADADAAAFQAAADgOAgIgTAmQAAAFgDACQgDADgEAAQgJAAgDgJg");
	this.shape_125.setTransform(168.9,213.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AAVApIgOAGQgGACgDAAQgWAAgKgMQgLgMAAgWQAAgUAQgPQAPgQAVAAQAJAAALAGQANAFAAAHQAAADgCADIgBAJIgBAMQAAAQACAHIAEAJIAEAJQAAAEgEAEQgDADgFAAQgEAAgJgIgAgMgRQgIAKAAALQAAALAEAHQAEAFAIABQAFgBAFgCQAFgBAEgDQgDgVAAgKIABgGIABgIIgDgCIgDgBQgLAAgJAKg");
	this.shape_126.setTransform(159.4,213.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AAVBAQgDgHgBgNIgCgUIAAgHIABgGIgBgIQAAgEgEAAQgKAAgHAIQgEAFgHAMQAAAggDAHQgDAHgIAAQgFAAgEgDQgEgEAAgFIABgEQABgCABgWIAAg6IAAgDIAAgOIAAgIIgBgIQAAgFADgDQAEgDAFAAQAJAAADAJQABAGAAAKIAAASIgBARQAHgGAHgDQAGgDAJAAQAPAAAGAIQAFAHABAMIABAVIACASIADARIABADQAAAFgEADQgEADgFAAQgJAAgCgJg");
	this.shape_127.setTransform(149.3,211.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FF0000").s().p("AgUBDQgFgEAAgFQABgEASggIgUgdIgbgsQgCgDAAgDQAAgFAEgEQADgDAFAAQAHAAAEAGIAGALIAQAZQAJAQAGAJIAUgpIAHgSQADgIAJAAQAEAAAEADQAEAEAAAFQAAADgFAKIgSAoQgLAZgIAOIgOAbQgFAIgGAAQgFAAgEgDg");
	this.shape_128.setTransform(130.2,211.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FF0000").s().p("AAtBCQgHAAgHgQQgFgKgDgOIgWACIgUACQgEAKgKATQgEAHgHAAQgFAAgDgDQgEgEAAgFQAAgEANgaQgCgDABgCQAAgFAIgCIAcgsQAVghAFAAQAKAAADAMIAFAcIANA5IAFALQADAIAAAEQAAAFgEADQgDADgEAAIgBAAgAgGAIIALgBIANgBIgGgdIgSAfg");
	this.shape_129.setTransform(118.1,211.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FF0000").s().p("AAwA5IgFgVQgFgQgFgcIgMAkIgGAQQgDAJgEAHQgFAIgGAAQgJAAgFgKIgEgQQgHgXgGgYIgLAqIgDAUQgDANgKAAQgGAAgEgFQgDgDAAgFQAAgOAHgVIAJghIAFgbQAEgSAFgHQAEgGAIAAQAIAAAEAIQADAIAEAYQAEAXAHAZQAKgZAIgfIAFgVQAEgMAKAAQAKAAAFAPQACAFACAQQAFAlAIAbIAIAdQgBAFgEAEQgDADgFAAQgKAAgEgOg");
	this.shape_130.setTransform(103.8,211.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgZBEQgEgDAAgFQAAgIATgpIgfg3IgEgHQgDgEAAgDQAAgFAEgDQAEgEAFAAQAGAAADAEQAMARAQAhIALgZIANgXQADgGAHAAQAFAAAEADQAEAEAAAEIgCAGIgeA+IgRAmIgFAQQgDAIgIAAQgFAAgEgDg");
	this.shape_131.setTransform(82.8,216.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgdAmQgPgLAAgUQAAgVAMgQQANgRAVAAQAPAAALAFQAMAGAAAOQAAAKgKAHQgFAEgPAFIgcAOQADAEAHADQAGACAGAAQAMgBAIgEQAIgEAEAAQAJgBAAAKQAAAKgPAGQgMAFgOAAQgTAAgOgKgAgLgUQgGAGgEAKIAVgJIASgJQgHgDgJAAQgIAAgFAFg");
	this.shape_132.setTransform(72.8,213.7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AAVBAQgDgHgBgNIgCgUIAAgHIABgGIgBgIQAAgEgEAAQgKAAgHAIQgEAFgHAMQAAAggDAHQgDAHgIAAQgFAAgEgDQgEgEAAgFIABgEQABgCABgWIAAg6IAAgDIAAgOIAAgIIgBgIQAAgFADgDQAEgDAFAAQAJAAADAJQABAGAAAKIAAASIgBARQAHgGAHgDQAGgDAJAAQAPAAAGAIQAFAHABAMIABAVIACASIADARIABADQAAAFgEADQgEADgFAAQgJAAgCgJg");
	this.shape_133.setTransform(62.8,211.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgIBAQgEgEAAgFIABgDIAAgEIgBgNIAAgMIgCgfIgCggIgFAAQgUAAgLgCQgKgDAAgJQAAgEADgEQAEgEAGAAIAOACIAOABIAQgBIAPAAIAUABIAUABQAFAAAEADQAEAEAAAFQAAAFgEADQgEAEgFAAIgVgBIgWgBIADAkIACAjIAAAIIABAJQAAAHgDAFQgEAHgGAAQgEAAgEgDg");
	this.shape_134.setTransform(51.4,211.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgJAIQgEgDAAgFQAAgEAEgDQAEgEAFAAQAGAAAEADQAEAEAAAEQAAAFgEADQgEAEgGAAQgFAAgEgEg");
	this.shape_135.setTransform(318.4,163.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgdAmQgPgLAAgUQAAgWAMgPQANgRAVAAQAPAAAKAFQANAHABANQAAAKgLAHQgFAEgPAFIgdAOQAEAEAGACQAHADAHAAQALAAAIgFQAHgFAFABQAJAAAAAJQAAAJgOAHQgNAFgNAAQgVAAgNgKgAgLgUQgGAFgDALIATgJIASgJQgFgEgKABQgIgBgFAGg");
	this.shape_136.setTransform(309.4,159.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgiAuQgCgEAAgEIAAg5IAAgIIAAgIQAAgFADgDQADgEAFAAQAKAAABAKQAPgLATAAQASAAAAAXIAAAGQgBANgLAAQgMAAAAgLIAAgJQgTADgJARIAAAsQAAAFgDADQgDADgFAAQgGAAgDgDg");
	this.shape_137.setTransform(300.4,159.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgdAmQgPgLAAgUQAAgWAMgPQANgRAVAAQAPAAALAFQANAHAAANQAAAKgLAHQgFAEgPAFIgdAOQAFAEAFACQAGADAHAAQAMAAAIgFQAIgFAEABQAJAAAAAJQAAAJgOAHQgNAFgOAAQgUAAgNgKgAgLgUQgGAFgEALIAUgJIASgJQgFgEgKABQgHgBgGAGg");
	this.shape_138.setTransform(290.7,159.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AAVBAQgDgHgBgNIgCgUIAAgHIABgGIgBgIQAAgEgEAAQgKAAgHAIQgEAFgHAMQAAAggDAHQgDAHgIAAQgFAAgEgDQgEgEAAgFIABgEQABgCABgWIAAg6IAAgDIAAgOIAAgIIgBgIQAAgFADgDQAEgDAFAAQAJAAADAJQABAGAAAKIAAASIgBARQAHgGAHgDQAGgDAJAAQAPAAAGAIQAFAHABAMIABAVIACASIADARIABADQAAAFgEADQgEADgFAAQgJAAgCgJg");
	this.shape_139.setTransform(280.8,157.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgHA9QgDgDAAgFIAAgJIAAgKIgCgsIgQgBQgLgCAAgKQgBgFAEgDQAEgEAEAAIAQABIgBgJIAAgJQAAgFADgDQAEgDAFAAQAMAAAAAWIAAAHIAJgBQAKAAAEACQAHACAAAIQgBAFgDAEQgDADgGAAIgEAAIgEAAIgIAAIABAuIAAAEIAAAFQAAAUgNAAQgEAAgDgDg");
	this.shape_140.setTransform(271.2,158);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AASAoIgDgSIgBgSIABgHIAAgIIAAgDIAAgDQAAgIgDAAQgIAAgGAKQgHAJgEAPIgBAHIgBAIIAAAHIgBAIQAAAFgDAEQgEADgFAAQgFAAgEgDQgDgEAAgFIgBgHIAAgIIABgXIABgXIAAgJIAAgIQAAgEADgEQAEgDAFAAQALAAABAOIAAABQANgNANAAQARAAAGAOQAEAJAAATIAAAGIAAAEQAAAIACAKQACALAAAHQAAAEgDAEQgEADgFAAQgLAAgBgLg");
	this.shape_141.setTransform(254.5,159.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgdAmQgPgLAAgUQAAgWAMgPQANgRAVAAQAPAAALAFQANAHgBANQAAAKgKAHQgFAEgPAFIgcAOQADAEAHACQAGADAGAAQAMAAAIgFQAHgFAFABQAJAAAAAJQAAAJgPAHQgMAFgOAAQgTAAgOgKgAgLgUQgGAFgEALIAVgJIASgJQgHgEgJABQgHgBgGAGg");
	this.shape_142.setTransform(244.6,159.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgdAmQgPgLAAgUQAAgWAMgPQANgRAVAAQAPAAAKAFQAOAHAAANQAAAKgLAHQgFAEgPAFIgcAOQAEAEAGACQAFADAIAAQALAAAIgFQAHgFAFABQAJAAAAAJQAAAJgPAHQgMAFgNAAQgVAAgNgKgAgLgUQgGAFgDALIAUgJIASgJQgHgEgJABQgHgBgGAGg");
	this.shape_143.setTransform(234.5,159.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgZBDQgEADgEAAQgFAAgDgDQgEgDAAgFIAAgHIABgGIAAhiQAAgHADgFQADgGAHAAQAJAAAAALIAAADIgBAEIAAAhQAHgEAGgBQAGgCAEAAQAVAAANAPQAMANAAAUQAAAUgOAPQgOAOgUAAQgMAAgLgEgAgJgBIgOAHIAAAlQAMAGAJgBQAKAAAHgHQAIgIAAgLQAAgLgGgIQgHgHgKAAQgDABgGACg");
	this.shape_144.setTransform(224.3,157.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FF0000").s().p("AgoBDQgJgIgBgdIACgiIABgjIAAgJIgBgKQAAgNAMAAQAEAAADACIAUgDIAQgCQAWAAANAFQAJADgBAIQAAAFgCAEQgEAEgFAAIgEgBQgOgEgOAAIgNABIgQADIgBAjIAigDIAUgCQAGAAADAEQAEADABAFQAAAKgMABIgVACIgkADIgBASQAAASACACQABABAKAAIAPAAIARAAIAFgBIAFgBQAFAAAEADQAEAEAAAGQAAAJgLACQgIACgbAAQgdAAgIgIg");
	this.shape_145.setTransform(205.8,157.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FF0000").s().p("AgSA+QgLgZgNgwIgHgXQgFgRAAgGQAAgFADgEQAEgDAFAAQAIAAAEAJIADAPIAJAdIANArIAUg0IAHgVQAFgMAGgIQAEgEAGAAQAFAAAEADQADAEAAAFQAAAEgCADQgFAHgEAKIgGARIgYA8QgEALgGAKQgDAHgHAAQgJAAgDgJg");
	this.shape_146.setTransform(193.9,157.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FF0000").s().p("AAtBCQgHAAgHgQQgFgKgDgOIgWACIgUACQgEAKgKATQgEAHgHAAQgFAAgDgDQgEgEAAgFQAAgEANgaQgCgDABgCQAAgFAIgCIAcgsQAVghAFAAQAKAAADAMIAFAcIANA5IAFALQADAIAAAEQAAAFgEADQgDADgEAAIgBAAgAgGAIIALgBIANgBIgGgdIgSAfg");
	this.shape_147.setTransform(181.1,157.5);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FF0000").s().p("AAlBDQgEgDAAgFIAAgTIgBgUIAAgJQgNABgUAEIghAGIgCATIAAASQAAAFgEADQgDADgFAAQgGAAgDgDQgDgDAAgFIABgaIACgaIAAggIABghQAAgFADgDQAEgDAFAAQAFAAADADQAEADAAAFIgBAUIAAAUIgBAJIAAAJIAhgHQATgDAOgBIACggQAAgHAEgIQAFgLAGAAQAFAAADADQAEADAAAFIAAADQgCAGAAAFIgBAIIAAAHIgBAZIgBAYIABATIABAUQAAAEgDAEQgEADgFAAQgFAAgEgDg");
	this.shape_148.setTransform(167.8,157.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FF0000").s().p("AgbBHQgKgCgGgEQgFAAgEgDQgDgEAAgFIABgaIABgbIAAgcIgBgdQAAgFAEgFQAFgFAGAAQADAAALAGIARAHQAYAJASARQAWAVAAAYQAAAPgIAOQgHAOgNAIQgOAKgaAAIgPgCgAgeAtQADACAFABIAKABQASAAAIgFQAIgFAEgJQAFgIAAgKQAAgUgZgQQgIgGgcgLg");
	this.shape_149.setTransform(146.8,157.5);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FF0000").s().p("AguA1IACgcQACglAAgvQAAgFAEgDQADgEAFAAQAGAAADAEQAEADAAAFQAAAvgDAnIgBAVQAUAAAggKIAEgBQAFAAAEAEQADAEAAAEQAAAIgIADQgKAFgWAEQgTADgMAAQgWAAAAgTg");
	this.shape_150.setTransform(135.2,157.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FF0000").s().p("AgiA8QgYgSAAgrIABgNIAAgMIAAgKIAAgLQABgHACgGQADgIAGAAQAGAAADADQAEADABAGIgBAOIAAAQIAAAMIgBAMQAAANADALQAEAOAHAFQAEADANABQAXAAAIgoQAEgUAAglQAAgFADgEQAEgHAIAAQAGAAADAFQABADAAAEQAAAigCAUQgGAdgOAUQgHAIgIAHQgMAGgLAAQgWABgKgJg");
	this.shape_151.setTransform(123.3,157.7);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FF0000").s().p("AguA2QgTgQAAgZQAAgdASgZQAVgbAfAAQAfAAAPAOQAPAOAAAcQAAAdgRAYQgUAcgfAAQgaAAgSgPgAgbgaQgOASAAAVQAAAOAMAKQALAIAQAAQATAAANgTQALgRAAgVQAAgTgIgHQgIgHgUAAQgSAAgOATg");
	this.shape_152.setTransform(109.6,157.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FF0000").s().p("AAlBDQgEgDAAgFIAAgTIgBgUIAAgJQgNABgUAEIghAGIgCATIAAASQAAAFgEADQgDADgFAAQgGAAgDgDQgDgDAAgFIABgaIACgaIAAggIABghQAAgFADgDQAEgDAFAAQAFAAADADQAEADAAAFIgBAUIAAAUIgBAJIAAAJIAhgHQATgDAOgBIACggQAAgHAEgIQAFgLAGAAQAFAAADADQAEADAAAFIAAADQgCAGAAAFIgBAIIAAAHIgBAZIgBAYIABATIABAUQAAAEgDAEQgEADgFAAQgFAAgEgDg");
	this.shape_153.setTransform(95.7,157.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FF0000").s().p("AgvA5QgLgIABgLQAAgFADgEQADgEAGAAQAIAAAEAIQAFALARAAQAOAAAPgGQAOgHAAgIQABgLgKgEQgGgCgTgBQgPAAgMgFQgQgHAAgNQABgSARgOQATgOAUAAQAIAAANAEQAQAFAAAGQAAAFgDADQgDAEgGAAIgNgCIgMgBQgMAAgJAFQgKAGAAAGQAAADADACQADADAHAAIAVACQATABAMAKQAMAJAAATQAAAXgaALQgTAJgZAAQgWAAgNgKg");
	this.shape_154.setTransform(82.4,157.7);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AASAsQgMADgLAAQgMAAgJgEQgJgHgCgLQgEgWAAgRQAAgLADgPQACgJAKAAQAFAAAEADQADADAAAFIgBAMIgBAMIABAVQAAAKACAFIAEACIAEABQAJgBAMgDIAAgPIgBgNQAAgSACgOQABgKALAAQAFAAAEADQAEADgBAGIgBAeIAAARIAAASIAAAFIAAAFQAAAFgDAEQgEADgFAAQgHAAgDgGg");
	this.shape_155.setTransform(63.6,159.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgcAlQgNgMAAgVQgBgSALgPQAOgSAWAAQASAAAKAOQAKAMAAAUQAAASgLAPQgNAQgTAAQgQAAgMgLgAgMgOQgFAJAAAJQAAALAGAFQAFAFAGAAQAHAAAFgFQAHgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_156.setTransform(54.2,159.6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgUBDQgEgEgBgFQAAgEATggIgTgdIgcgsQgCgDAAgDQAAgFAEgEQAEgDAEAAQAGAAAFAGIAHALIAPAZQAJAQAGAJIAUgpIAHgSQADgIAJAAQAEAAAEADQAEAEAAAFQAAADgFAKIgSAoQgLAZgIAOIgOAbQgFAIgGAAQgGAAgDgDg");
	this.shape_157.setTransform(43.6,157.5);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgJAIQgEgDAAgFQAAgDAEgEQAEgEAFAAQAGAAAEADQAEAEAAAEQAAAFgEADQgEAEgGAAQgFAAgEgEg");
	this.shape_158.setTransform(340,136.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgdAmQgPgLAAgUQAAgWAMgPQANgRAVAAQAPAAALAFQANAHgBANQAAAKgKAHQgFAEgPAFIgcAOQADAEAHACQAGACAGABQAMAAAIgFQAHgFAFABQAJAAAAAJQAAAJgPAHQgMAFgOAAQgTAAgOgKgAgLgUQgGAFgEALIAVgJIASgJQgHgEgJABQgIgBgFAGg");
	this.shape_159.setTransform(331,132.4);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgNAnIgchGIgBgFQAAgEADgEQAEgDAFAAQAHAAAEAHIATAxIAMgeIAIgTQAEgHAGAAQAFAAAEAEQAEADAAAFQAAADgOAgIgSAmQgBAFgDACQgDADgEAAQgJAAgEgJg");
	this.shape_160.setTransform(321.9,132.3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AAVApIgOAFQgGACgDABQgWAAgKgMQgLgLAAgXQAAgUAQgPQAPgPAVAAQAJAAALAEQANAGAAAIQAAADgCACIgBAJIgBAMQAAAPACAIIAEAJIAEAIQAAAGgEACQgDADgFABQgEgBgJgHgAgMgRQgIAJAAAMQAAALAEAHQAEAFAIAAQAFAAAFgBQAFgCAEgEQgDgUAAgKIABgHIABgIIgDgBIgDgBQgLAAgJAKg");
	this.shape_161.setTransform(312.4,132.5);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AADAcQgDgIgCgVIgCAEIgNAiQgCAEgCACQgEAGgHAAQgFAAgEgHQgFgIgDgMQgDgLgFgkIgCgMQAAgFAFgDQADgDAFAAQAKAAACAJIABAMIACANIAEAVIAOgrQAEgMAJAAQAJAAAEANIAFAXIAEAYIAOg1QABgHAKAAQAFAAAEADQADADAAAFIAAADIgTA9QgCAIgHAJQgDAFgIAAQgLAAgGgVg");
	this.shape_162.setTransform(301.3,132.6);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgHA9QgDgDgBgFIAAgJIABgKIgCgsIgQgBQgLgCAAgKQAAgFADgDQAEgEAEAAIAQABIgBgJIAAgJQAAgFADgDQAEgDAFAAQAMAAAAAWIAAAHIAJgBQAKAAADACQAIACAAAIQgBAFgDAEQgDADgFAAIgFAAIgEAAIgIAAIABAuIAAAEIAAAFQAAAUgNAAQgEAAgDgDg");
	this.shape_163.setTransform(283,130.9);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AAVApIgOAFQgGACgDABQgWAAgKgMQgLgLAAgXQAAgUAQgPQAPgPAVAAQAJAAALAEQANAGAAAIQAAADgCACIgBAJIgBAMQAAAPACAIIAEAJIAEAIQAAAGgEACQgDADgFABQgEgBgJgHgAgMgRQgIAJAAAMQAAALAEAHQAEAFAIAAQAFAAAFgBQAFgCAEgEQgDgUAAgKIABgHIABgIIgDgBIgDgBQgLAAgJAKg");
	this.shape_164.setTransform(273.8,132.5);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AAVBAQgDgHgBgNIgCgUIAAgHIABgGIgBgIQAAgEgEAAQgKAAgHAIQgEAFgHAMQAAAggDAHQgDAHgIAAQgFAAgEgDQgEgEAAgFIABgEQABgCABgWIAAg6IAAgDIAAgOIAAgIIgBgIQAAgFADgDQAEgDAFAAQAJAAADAJQABAGAAAKIAAASIgBARQAHgGAHgDQAGgDAJAAQAPAAAGAIQAFAHABAMIABAVIACASIADARIABADQAAAFgEADQgEADgFAAQgJAAgCgJg");
	this.shape_165.setTransform(263.7,130);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgHA9QgDgDgBgFIAAgJIABgKIgCgsIgQgBQgLgCAAgKQgBgFAEgDQAEgEAEAAIAQABIgBgJIAAgJQAAgFADgDQAEgDAFAAQAMAAAAAWIAAAHIAJgBQAKAAADACQAIACAAAIQgBAFgDAEQgDADgGAAIgEAAIgEAAIgIAAIABAuIAAAEIAAAFQAAAUgNAAQgEAAgDgDg");
	this.shape_166.setTransform(254.1,130.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgHA9QgDgDAAgFIAAgJIAAgKIgCgsIgQgBQgLgCAAgKQgBgFAEgDQAEgEAEAAIAQABIgBgJIAAgJQAAgFADgDQAEgDAFAAQAMAAAAAWIAAAHIAJgBQAKAAAEACQAGACABAIQAAAFgEAEQgDADgGAAIgEAAIgEAAIgJAAIACAuIAAAEIAAAFQAAAUgNAAQgDAAgEgDg");
	this.shape_167.setTransform(237.8,130.9);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AAVBAQgDgHgBgNIgCgUIAAgHIABgGIgBgIQAAgEgEAAQgKAAgHAIQgEAFgHAMQAAAggDAHQgDAHgIAAQgFAAgEgDQgEgEAAgFIABgEQABgCABgWIAAg6IAAgDIAAgOIAAgIIgBgIQAAgFADgDQAEgDAFAAQAJAAADAJQABAGAAAKIAAASIgBARQAHgGAHgDQAGgDAJAAQAPAAAGAIQAFAHABAMIABAVIACASIADARIABADQAAAFgEADQgEADgFAAQgJAAgCgJg");
	this.shape_168.setTransform(228.5,130);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgtA4QABgFADgDQACgDAGAAIALACIANABQAMAAAHgIQAFgHABgRQgEAEgGACQgFADgGAAQgSAAgKgMQgLgLAAgRQAAgYAOgOQAPgQAZAAQAJAAAFACQAHACADAEQAMACAAAMIgDAQQgEAVAAAVQgBAdgIANQgMARgcAAQgjAAAAgOgAgNgnQgHAJAAAOQAAALAEAFQAEAEAIAAQAGAAAHgHQAHgIABgIIAEgaIgGgDIgFgBQgPAAgIAKg");
	this.shape_169.setTransform(218.3,134.8);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AASAsQgMADgLABQgMAAgJgGQgJgGgCgMQgEgVAAgRQAAgLADgPQACgJAKAAQAFAAAEADQADADAAAFIgBAMIgBAMIABAVQAAAKACAFIAEACIAEAAQAJAAAMgDIAAgPIgBgNQAAgTACgNQABgKALAAQAFAAAEADQAEADgBAFIgBAfIAAARIAAASIAAAFIAAAFQAAAFgDAEQgEADgFAAQgHAAgDgGg");
	this.shape_170.setTransform(208.8,132.5);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AAVApIgOAFQgGACgDABQgWAAgKgMQgLgLAAgXQAAgUAQgPQAPgPAVAAQAJAAALAEQANAGAAAIQAAADgCACIgBAJIgBAMQAAAPACAIIAEAJIAEAIQAAAGgEACQgDADgFABQgEgBgJgHgAgMgRQgIAJAAAMQAAALAEAHQAEAFAIAAQAFAAAFgBQAFgCAEgEQgDgUAAgKIABgHIABgIIgDgBIgDgBQgLAAgJAKg");
	this.shape_171.setTransform(199.3,132.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgaAnQgPgMAAgTQAAgRANgSQAOgWASAAQAJAAAMAGQAPAGAAAHQAAAFgDADQgDADgFAAQgEAAgGgDQgEgEgLAAQgGAAgIANQgHAMAAAJQAAAJAGAFQAHAFAJABQAGAAAIgFQAJgFACABQAFgBADAEQADAEABAEQAAAHgPAGQgNAHgJgBQgSABgNgLg");
	this.shape_172.setTransform(189.4,132.4);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FF0000").s().p("AgoBDQgJgIAAgdIABgiIABgjIAAgJIgBgKQAAgNAMAAQAEAAADACIAUgDIAQgCQAWAAANAFQAJADgBAIQAAAFgCAEQgEAEgFAAIgEgBQgOgEgOAAIgNABIgQADIgBAjIAigDIAVgCQAFAAAEAEQADADAAAFQAAAKgLABIgVACIgkADIgBASQAAASACACQABABAKAAIAQAAIAQAAIAFgBIAFgBQAFAAAEADQAEAEAAAGQAAAJgKACQgJACgbAAQgdAAgIgIg");
	this.shape_173.setTransform(171.8,130.2);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FF0000").s().p("AgSA+QgLgZgNgwIgHgXQgFgQAAgHQAAgFADgEQAEgDAFAAQAIAAAEAJIADAPIAJAcIANAsIAUg0IAHgVQAFgMAGgIQAEgEAGAAQAFAAAEAEQADADAAAFQAAAEgCADQgFAHgEAJIgGASIgYA8QgEAKgGALQgDAHgHAAQgJAAgDgJg");
	this.shape_174.setTransform(159.9,130.4);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FF0000").s().p("AAtBCQgHAAgHgQQgFgKgDgOIgWACIgUACIgOAdQgEAHgHAAQgFAAgDgDQgEgEAAgFQAAgEANgaQgCgDABgCQAAgFAIgCIAcgsQAVghAFAAQAKAAADAMIAFAcIANA5IAFALQADAIAAAEQAAAFgEADQgDADgEAAIgBAAgAgGAIIALgBIANgBIgGgdIgSAfg");
	this.shape_175.setTransform(147.1,130.4);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FF0000").s().p("AAlBDQgEgDAAgFIAAgTIgBgUIAAgJQgNABgUAEIghAGIgCATIAAASQAAAFgEADQgDADgFAAQgGAAgDgDQgDgDAAgFIABgaIACgaIAAggIABghQAAgFADgDQAEgDAFAAQAFAAADADQAEADAAAFIgBAUIAAAUIgBAJIAAAJIAhgHQATgDAOgBIACggQAAgHAEgIQAFgLAGAAQAFAAADADQAEADAAAFIAAADQgCAGAAAFIgBAIIAAAHIgBAZIgBAYIABATIABAUQAAAEgDAEQgEADgFAAQgFAAgEgDg");
	this.shape_176.setTransform(133.9,130.2);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FF0000").s().p("AgbBHQgKgCgGgEQgFAAgEgDQgDgEAAgFIABgaIABgbIAAgcIgBgdQAAgFAEgFQAGgFAEAAQAEAAALAGIARAHQAYAJASARQAWAVAAAYQAAAPgIAOQgHAOgNAIQgPAKgZAAIgPgCgAgeAtQADACAFABIAKABQASAAAIgFQAIgFAFgJQAEgIAAgKQAAgUgagQQgHgGgcgLg");
	this.shape_177.setTransform(112.8,130.4);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FF0000").s().p("AguA1IACgcQACglAAgvQAAgFAEgDQADgEAFAAQAGAAADAEQAEADAAAFQAAAvgDAnIgBAVQAUAAAggKIAEgBQAFAAAEAEQADAEAAAEQAAAIgIADQgKAFgWAEQgTADgMAAQgWAAAAgTg");
	this.shape_178.setTransform(101.3,130.4);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FF0000").s().p("AgjA8QgWgSAAgrIAAgNIAAgMIABgLIAAgKQgBgHADgFQAEgJAFABQAFAAAEACQAFAEAAAFIgBAPIAAAPIAAAMIgBAMQAAANAEALQADAOAHAFQAEADANABQAXAAAIgoQAEgUAAglQAAgFADgEQAEgHAIABQAFAAAEADQACAEAAAEQAAAigEAUQgEAdgPAUQgHAJgIAFQgLAIgMgBQgWAAgLgIg");
	this.shape_179.setTransform(89.4,130.6);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FF0000").s().p("AguA2QgTgQAAgZQAAgdASgZQAVgbAfAAQAfAAAPAOQAPAOAAAcQAAAdgRAYQgUAcgfAAQgaAAgSgPgAgbgaQgOASAAAVQAAAOAMAKQALAIAQAAQATAAANgTQALgRAAgVQAAgTgIgHQgIgHgUAAQgSAAgOATg");
	this.shape_180.setTransform(75.6,130.4);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FF0000").s().p("AgmA1QgNgNAAgTQAAgcAZgfQAWgaAWAAIAHAAIAGABQADgEAGAAQAJAAACALIABARQAAAEgCAEQgDAEgHAAQgIAAgDgIQgCgEgCAAQgBgBgGAAQgLAAgNARQgVAXAAAVQAAAKAHAGQAGAIAJgBQAIAAAJgEIANgJQAHgEADgBQAGAAADAFQAEADAAAEQAAAGgFADQgYAVgYAAQgUAAgNgPg");
	this.shape_181.setTransform(63,130.2);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AgdAmQgPgLAAgUQAAgWAMgPQANgRAVAAQAPAAAKAFQANAHABANQAAAKgLAHQgFAEgPAFIgdAOQAEAEAGACQAHACAHABQALAAAIgFQAHgFAFABQAJAAAAAJQAAAJgOAHQgNAFgNAAQgVAAgNgKgAgLgUQgGAFgDALIATgJIASgJQgFgEgKABQgIgBgFAGg");
	this.shape_182.setTransform(44.4,132.4);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AAVBAQgDgHgBgNIgCgUIAAgHIABgGIgBgIQAAgEgEAAQgKAAgHAIQgEAFgHAMQAAAggDAHQgDAHgIAAQgFAAgEgDQgEgEAAgFIABgEQABgCABgWIAAg6IAAgDIAAgOIAAgIIgBgIQAAgFADgDQAEgDAFAAQAJAAADAJQABAGAAAKIAAASIgBARQAHgGAHgDQAGgDAJAAQAPAAAGAIQAFAHABAMIABAVIACASIADARIABADQAAAFgEADQgEADgFAAQgJAAgCgJg");
	this.shape_183.setTransform(34.4,130);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AgvA5QgLgIABgLQAAgFADgEQAEgEAFAAQAIAAAEAIQAFALARAAQAOAAAPgGQAOgHABgIQAAgLgKgEQgGgCgTgBQgPAAgMgFQgQgHAAgNQABgSARgOQATgOAUAAQAJAAAMAEQAQAFAAAGQAAAFgDADQgEAEgFAAIgNgCIgMgBQgMAAgJAFQgKAGAAAGQAAADADACQAEADAGAAIAVACQATABAMAKQANAJAAATQAAAXgaALQgUAJgYAAQgXAAgNgKg");
	this.shape_184.setTransform(22.9,130.6);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AgJAIQgEgDAAgFQAAgDAEgEQAEgEAFAAQAGAAAEADQAEAEAAAEQAAAFgEADQgEAEgGAAQgFAAgEgEg");
	this.shape_185.setTransform(340.9,109.4);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AADAcQgDgIgCgVIgCAEIgNAiQgBAEgDACQgEAGgHAAQgFAAgEgHQgEgIgDgMQgDgLgGgkIgBgMQAAgFADgDQAEgDAFAAQAJAAACAJIADAMIABANIADAVIAQgrQADgMAJAAQAJAAAEANIAEAXIAFAYIANg1QADgHAIAAQAGAAADADQAFADAAAFIgBADIgSA9QgDAIgGAJQgFAFgGAAQgLAAgHgVg");
	this.shape_186.setTransform(331,105.5);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AgcAlQgNgMAAgVQgBgSALgPQAOgSAWAAQASAAAKAOQAKANAAASQAAAUgLAOQgNAQgTAAQgQAAgMgLgAgMgOQgFAIAAAKQAAALAGAGQAFAEAGAAQAHAAAFgFQAHgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_187.setTransform(320,105.4);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AASApIgDgSIgBgTIABgHIAAgIIAAgCIAAgFQAAgHgDAAQgIAAgGAKQgHAJgEAOIgBAIIgBAIIAAAIIgBAIQAAAEgDAEQgEADgFAAQgFAAgEgDQgDgEAAgEIgBgIIAAgIIABgYIABgWIAAgIIAAgIQAAgFADgEQAEgDAFAAQALAAABAOIAAABQANgNANAAQARAAAGAOQAEAJAAATIAAAGIAAAFQAAAHACAKQACALAAAHQAAAFgDADQgEADgFAAQgLAAgBgKg");
	this.shape_188.setTransform(310.8,105.2);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AgZBEQgEgDAAgFQAAgIATgpIgfg3IgEgHQgDgEAAgDQAAgFAEgDQAEgEAFAAQAGAAADAEQAMARAQAhIALgZIANgXQADgGAHAAQAFAAAEADQAEAEAAAEIgCAGIgeA+IgRAmIgFAQQgDAIgIAAQgFAAgEgDg");
	this.shape_189.setTransform(293.1,107.7);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AgZBDQgEADgEAAQgFAAgDgDQgEgDAAgFIAAgHIABgGIAAhjQAAgGADgFQADgGAHAAQAJAAAAALIAAADIgBADIAAAiQAHgEAGgBQAGgCAEAAQAVAAANAPQAMANAAAUQAAAVgOAOQgOAOgUAAQgMAAgLgEgAgJgBIgOAHIAAAlQAMAGAJAAQAKAAAHgIQAIgHAAgMQAAgMgGgGQgHgIgKABQgDgBgGADg");
	this.shape_190.setTransform(282.9,103);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgdAmQgPgLAAgUQAAgWAMgPQANgRAVAAQAPAAAKAFQANAHAAANQABAKgLAIQgFADgPAGIgcAMQADAFAHACQAFACAHAAQAMABAIgFQAIgFAEAAQAJABAAAIQAAAKgPAHQgMAFgOAAQgTAAgOgKgAgLgUQgGAGgDAKIAUgJIASgJQgHgDgJAAQgHgBgGAGg");
	this.shape_191.setTransform(264.6,105.3);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AgiAuQgCgEgBgEIAAg5IAAgIIAAgIQAAgFAEgDQADgEAFAAQAKAAACAKQAOgLATAAQARAAABAXIAAAGQgBANgMAAQgLAAAAgLIAAgJQgTADgIARIAAAsQgBAFgDADQgDADgGAAQgFAAgDgDg");
	this.shape_192.setTransform(255.5,105.4);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgdAmQgPgLAAgUQAAgWAMgPQANgRAVAAQAPAAAKAFQAOAHAAANQAAAKgLAIQgFADgPAGIgdAMQAFAFAFACQAHACAHAAQALABAIgFQAHgFAFAAQAJABAAAIQAAAKgOAHQgNAFgNAAQgVAAgNgKgAgLgUQgGAGgDAKIATgJIASgJQgFgDgKAAQgHgBgGAGg");
	this.shape_193.setTransform(245.9,105.3);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AAVBAQgDgHgBgNIgCgUIAAgHIABgGIgBgIQAAgEgEAAQgKAAgHAIQgEAFgHAMQAAAggDAHQgDAHgIAAQgFAAgEgDQgEgEAAgFIABgEQABgCABgWIAAg6IAAgDIAAgOIAAgIIgBgIQAAgFADgDQAEgDAFAAQAJAAADAJQABAGAAAKIAAASIgBARQAHgGAHgDQAGgDAJAAQAPAAAGAIQAFAHABAMIABAVIACASIADARIABADQAAAFgEADQgEADgFAAQgJAAgCgJg");
	this.shape_194.setTransform(235.9,102.9);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AASApIgDgSIgBgTIABgHIAAgIIAAgCIAAgFQAAgHgDAAQgIAAgGAKQgHAJgEAOIgBAIIgBAIIAAAIIgBAIQAAAEgDAEQgEADgFAAQgFAAgEgDQgDgEAAgEIgBgIIAAgIIABgYIABgWIAAgIIAAgIQAAgFADgEQAEgDAFAAQALAAABAOIAAABQANgNANAAQARAAAGAOQAEAJAAATIAAAGIAAAFQAAAHACAKQACALAAAHQAAAFgDADQgEADgFAAQgLAAgBgKg");
	this.shape_195.setTransform(218.2,105.2);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AgdAmQgPgLAAgUQAAgWAMgPQANgRAVAAQAPAAALAFQAMAHAAANQAAAKgKAIQgFADgPAGIgcAMQADAFAHACQAGACAGAAQAMABAIgFQAIgFAEAAQAJABAAAIQAAAKgPAHQgMAFgOAAQgTAAgOgKgAgLgUQgGAGgEAKIAVgJIASgJQgHgDgJAAQgIgBgFAGg");
	this.shape_196.setTransform(208.2,105.3);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AgdAmQgPgLAAgUQAAgWAMgPQANgRAVAAQAPAAAKAFQAOAHAAANQAAAKgLAIQgFADgPAGIgdAMQAFAFAFACQAHACAHAAQALABAIgFQAHgFAFAAQAJABAAAIQAAAKgOAHQgNAFgNAAQgVAAgNgKgAgLgUQgGAGgDAKIATgJIASgJQgFgDgKAAQgHgBgGAGg");
	this.shape_197.setTransform(198.2,105.3);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AgZBDQgEADgEAAQgFAAgDgDQgEgDAAgFIAAgHIABgGIAAhjQAAgGADgFQADgGAHAAQAJAAAAALIAAADIgBADIAAAiQAHgEAGgBQAGgCAEAAQAVAAANAPQAMANAAAUQAAAVgOAOQgOAOgUAAQgMAAgLgEgAgJgBIgOAHIAAAlQAMAGAJAAQAKAAAHgIQAIgHAAgMQAAgMgGgGQgHgIgKABQgDgBgGADg");
	this.shape_198.setTransform(187.9,103);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FF0000").s().p("AgoBDQgKgIAAgdIACgiIABgjIAAgJIgBgKQAAgNAMAAQAEAAADACIAUgDIAQgCQAWAAANAFQAIADAAAIQAAAFgDAEQgDAEgFAAIgEgBQgOgEgOAAIgNABIgQADIgBAjIAigDIAUgCQAGAAADAEQAFADAAAFQAAAKgMABIgVACIgkADIgBASQAAASACACQABABAKAAIAPAAIARAAIAFgBIAFgBQAFAAAEADQAEAEAAAGQAAAJgLACQgIACgbAAQgdAAgIgIg");
	this.shape_199.setTransform(169.4,103.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FF0000").s().p("AgSA+QgLgZgNgvIgHgYQgFgQAAgHQAAgFADgDQAEgEAFAAQAIAAAEAJIADAPIAJAcIANAsIAUg0IAHgVQAFgNAGgGQAEgFAGAAQAFAAAEAEQADADAAAFQAAADgCAEQgFAHgEAJIgGASIgYA8QgEAKgGALQgDAHgHAAQgJAAgDgJg");
	this.shape_200.setTransform(157.5,103.3);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FF0000").s().p("AAtBCQgHAAgHgQQgFgKgDgOIgWACIgUACIgOAdQgEAHgHAAQgFAAgDgDQgEgEAAgFQAAgEANgaQgCgDABgCQAAgFAIgCIAcgsQAVghAFAAQAKAAADAMIAFAcIANA5IAFALQADAIAAAEQAAAFgEADQgDADgEAAIgBAAgAgGAIIALgBIANgBIgGgdIgSAfg");
	this.shape_201.setTransform(144.7,103.3);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FF0000").s().p("AAlBDQgEgDAAgFIAAgTIgBgUIAAgJQgNABgUAEIghAGIgCATIAAASQAAAFgEADQgDADgFAAQgGAAgDgDQgDgDAAgFIABgaIACgaIAAggIABghQAAgFADgDQAEgDAFAAQAFAAADADQAEADAAAFIgBAUIAAAUIgBAJIAAAJIAhgHQATgDAOgBIACggQAAgHAEgIQAFgLAGAAQAFAAADADQAEADAAAFIAAADQgCAGAAAFIgBAIIAAAHIgBAZIgBAYIABATIABAUQAAAEgDAEQgEADgFAAQgFAAgEgDg");
	this.shape_202.setTransform(131.5,103.1);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FF0000").s().p("AgbBHQgKgCgGgEQgFAAgEgDQgDgEAAgFIABgaIAAgbIAAgcIAAgdQAAgFAFgFQAEgFAGAAQADAAALAGIAQAHQAZAJASARQAWAVAAAYQAAAPgHAOQgIAOgNAIQgOAKgaAAIgPgCgAgeAtQADACAFABIAKABQASAAAIgFQAIgFAEgJQAFgIAAgKQAAgUgZgQQgIgGgcgLg");
	this.shape_203.setTransform(110.4,103.3);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FF0000").s().p("AguA1IACgcQACglAAgvQAAgFAEgDQADgEAFAAQAGAAADAEQAEADAAAFQAAAvgDAnIgBAVQAUAAAggKIAEgBQAFAAAEAEQADAEAAAEQAAAIgIADQgKAFgWAEQgTADgMAAQgWAAAAgTg");
	this.shape_204.setTransform(98.9,103.3);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FF0000").s().p("AgiA8QgYgSAAgrIABgNIAAgNIAAgKIAAgKQABgGACgGQADgJAHABQAFAAADACQAEADAAAGIAAAPIAAAOIAAANIgBAMQAAANADAMQAEANAHAFQAEADANAAQAXABAIgoQAEgUAAglQAAgFADgEQAEgHAIABQAFAAAEADQABAEAAAEQAAAigCAUQgGAdgOAUQgGAJgJAFQgMAIgLgBQgWAAgKgIg");
	this.shape_205.setTransform(87,103.5);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FF0000").s().p("AguA2QgTgQAAgZQAAgdASgZQAVgbAfAAQAfAAAPAOQAPAOAAAcQAAAdgRAYQgUAcgfAAQgaAAgSgPgAgbgaQgOASAAAVQAAAOAMAKQALAIAQAAQATAAANgTQALgRAAgVQAAgTgIgHQgIgHgUAAQgSAAgOATg");
	this.shape_206.setTransform(73.2,103.3);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FF0000").s().p("AASBEQgFgDgBgFQgDgKgBgGIgKg4QgGARgHAOQgJAVgDAMIAAAEQABAGgGADQgEADgFAAQgGAAgFgDQgEgEAAgGIgDgLIgKgoQgFgUgOgnIgBgEQAAgFAFgEQADgCAFAAQAHAAAEAFIAFALQAIAZALAvQAHgRAHgXIAKgbQAJgTAIAAQAIAAAEAJQADAFACAMIABARQACAQAKAmIAZg9IAFgRQACgJAEgGQAEgGAHAAQAGAAADADQADADAAAFIgCAKIgEAJIgFAPIgQAlIgQAlIgHAPQgEAHgIAAQgFAAgEgDg");
	this.shape_207.setTransform(56.8,103.4);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AgdAmQgPgLAAgUQAAgWAMgPQANgRAVAAQAPAAALAFQANAHgBANQAAAKgKAIQgFADgPAGIgcAMQADAFAHACQAGACAGAAQAMABAIgFQAHgFAFAAQAJABAAAIQAAAKgPAHQgMAFgOAAQgTAAgOgKgAgLgUQgGAGgEAKIAVgJIASgJQgHgDgJAAQgHgBgGAGg");
	this.shape_208.setTransform(34.4,105.3);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AAlBDQgEgDAAgFIAAgTIgBgUIAAgJQgNABgUAEIghAGIgCATIAAASQAAAFgEADQgDADgFAAQgGAAgDgDQgDgDAAgFIABgaIACgaIAAggIABghQAAgFADgDQAEgDAFAAQAFAAADADQAEADAAAFIgBAUIAAAUIgBAJIAAAJIAhgHQATgDAOgBIACggQAAgHAEgIQAFgLAGAAQAFAAADADQAEADAAAFIAAADQgCAGAAAFIgBAIIAAAHIgBAZIgBAYIABATIABAUQAAAEgDAEQgEADgFAAQgFAAgEgDg");
	this.shape_209.setTransform(22.8,103.1);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AgJAJQgEgEAAgEQAAgEAEgEQAEgEAFAAQAGAAAEAEQAEADAAAFQAAAEgEAEQgEADgGAAQgFAAgEgDg");
	this.shape_210.setTransform(307.4,55.2);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AgZBEQgEgDAAgFQAAgIATgpIgfg3IgEgHQgDgEAAgDQAAgFAEgDQAEgEAFAAQAGAAADAEQAMARAQAhIALgZIANgXQADgGAHAAQAFAAAEADQAEAEAAAEIgCAGIgeA+IgRAmIgFAQQgDAIgIAAQgFAAgEgDg");
	this.shape_211.setTransform(298.5,53.5);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AAVAoIgOAGQgGACgDAAQgWAAgKgLQgLgLAAgXQAAgUAQgPQAPgPAVgBQAJABALAEQANAGAAAHQAAADgCADIgBAJIgBAMQAAAPACAIIAEAJIAEAIQAAAFgEAEQgDACgFAAQgEABgJgJgAgMgRQgIAKAAALQAAAMAEAFQAEAHAIAAQAFAAAFgCQAFgCAEgEQgDgUAAgKIABgGIABgJIgDgBIgDAAQgLAAgJAJg");
	this.shape_212.setTransform(288.7,51.2);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AAYBCQgGAEgGABIgMABQgUAAgNgNQgNgMAAgUQAAgYANgOQANgOAVAAQAGAAAGACIAJADQABgdABgLQACgLAKAAQAFAAADADQADAEAAAFIgCAmIgCAlQAAAfACALIABADQAAAFgEADQgDADgFAAQgHAAgDgGgAgRAEQgHAHAAAQQAAAJAHAGQAHAIAKgBQAFABAEgCIAIgGIADgDIAAggQgDgFgFgCQgEgCgHgBQgMAAgGAHg");
	this.shape_213.setTransform(278.2,48.7);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AgIBFQgDgEAAgEIAAh5QAAgFADgEQAEgDAEAAQAFAAADADQAEAEAAAFIAABzQAAARgMAAQgFAAgDgDg");
	this.shape_214.setTransform(262.7,48.7);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AgIBFQgDgEAAgEIAAh5QAAgFADgEQAEgDAEAAQAFAAADADQAEAEAAAFIAABzQAAARgMAAQgFAAgDgDg");
	this.shape_215.setTransform(257.8,48.7);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AAVAoIgOAGQgGACgDAAQgWAAgKgLQgLgLAAgXQAAgUAQgPQAPgPAVgBQAJABALAEQANAGAAAHQAAADgCADIgBAJIgBAMQAAAPACAIIAEAJIAEAIQAAAFgEAEQgDACgFAAQgEABgJgJgAgMgRQgIAKAAALQAAAMAEAFQAEAHAIAAQAFAAAFgCQAFgCAEgEQgDgUAAgKIABgGIABgJIgDgBIgDAAQgLAAgJAJg");
	this.shape_216.setTransform(250.4,51.2);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AAYBCQgGAEgGABIgMABQgUAAgNgNQgNgMAAgUQAAgYANgOQANgOAVAAQAGAAAGACIAJADQABgdABgLQACgLAKAAQAFAAADADQADAEAAAFIgCAmIgCAlQAAAfACALIABADQAAAFgEADQgDADgFAAQgHAAgDgGgAgRAEQgHAHAAAQQAAAJAHAGQAHAIAKgBQAFABAEgCIAIgGIADgDIAAggQgDgFgFgCQgEgCgHgBQgMAAgGAHg");
	this.shape_217.setTransform(232.2,48.7);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AgdAmQgPgLAAgUQAAgWAMgPQANgRAVAAQAPAAALAFQANAGgBAPQAAAJgKAIQgFADgPAGIgdAMQAFAFAFACQAGACAIAAQALABAIgFQAIgEAEgBQAJABAAAIQAAAKgOAHQgNAFgNAAQgVAAgNgKgAgLgUQgGAFgEALIAUgIIASgKQgFgEgKAAQgHAAgGAGg");
	this.shape_218.setTransform(221.9,51.1);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AgQBKQgDgDAAgFIAAgCQACgNAAgLIAAgrIgGABIgFABQgGAAgDgEQgDgDgBgFQAAgIAJgDIAQgBIAAgKQADgUAIgJQAJgMAWAAQAPAAAAALQAAAMgOAAQgLAAgFAHQgDAGgBALIgBADIARgBQAQAAAAALQAAAMgRgBIgRABIAAAXIAAAXQAAARgCAJQgCAJgIAAQgFAAgEgDg");
	this.shape_219.setTransform(212.3,49.2);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AgiAuQgCgEgBgEIAAg5IAAgIIAAgIQAAgFADgDQADgEAGAAQAKAAACAKQAOgLATAAQARAAAAAXIAAAGQAAANgMAAQgLAAABgLIgBgJQgTADgIARIAAAsQAAAFgEADQgDADgGAAQgFAAgDgDg");
	this.shape_220.setTransform(203.7,51.2);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AASArQgMAFgLAAQgMgBgJgFQgJgFgCgNQgEgVAAgQQAAgMADgOQACgKAKAAQAFAAAEADQADADAAAFIgBAMIgBANIABAUQAAAJACAHIAEABIAEAAQAJAAAMgCIAAgQIgBgOQAAgRACgOQABgKALAAQAFAAAEADQAEAEgBAEIgBAfIAAARIAAARIAAAGIAAAGQAAAFgDADQgEADgFAAQgHAAgDgHg");
	this.shape_221.setTransform(194.4,51.2);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AgYAuQgNgFAAgKQAAgIAKAAQAEAAAIACQAIADAEAAQARAAAAgHQAAgFgNgFQgRgIgFgDQgMgJAAgMQAAgSASgGQALgEAWAAQAJAAAEADQAGADAAAIQAAAQgJAAQgJAAgBgHIgIgBQgUAAAAAGQAAADAMAGQARAIAHAEQAMAJAAALQAAAPgOAIQgLAHgQAAQgLAAgKgEg");
	this.shape_222.setTransform(185.3,51.1);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FF0000").s().p("AgoBDQgKgIAAgdIACgiIACgjIgBgJIgBgKQAAgNAMAAQAEAAAEACIATgDIAQgCQAWAAAOAFQAHADABAIQAAAFgEAEQgDAEgGAAIgDgBQgPgEgNAAIgNABIgQADIgBAjIAhgDIAWgCQAFAAAEAEQADADAAAFQAAAKgLABIgVACIglADIAAASQAAASACACQABABAKAAIAPAAIARAAIAFgBIAFgBQAFAAAEADQAEAEAAAGQAAAJgKACQgJACgbAAQgcAAgJgIg");
	this.shape_223.setTransform(167.9,48.9);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FF0000").s().p("AgSA+QgLgZgNgvIgHgYQgFgRAAgGQAAgFADgDQAEgEAFAAQAIAAAEAJIADAPIAJAcIANAsIAUg0IAHgVQAFgNAGgGQAEgFAGAAQAFAAAEAEQADADAAAFQAAAEgCADQgFAHgEAJIgGASIgYA8QgEAKgGALQgDAHgHAAQgJAAgDgJg");
	this.shape_224.setTransform(156,49.1);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FF0000").s().p("AAtBCQgHAAgHgQQgFgKgDgOIgWACIgUACIgOAdQgEAHgHAAQgFAAgDgDQgEgEAAgFQAAgEANgaQgCgDABgCQAAgFAIgCIAcgsQAVghAFAAQAKAAADAMIAFAcIANA5IAFALQADAIAAAEQAAAFgEADQgDADgEAAIgBAAgAgGAIIALgBIANgBIgGgdIgSAfg");
	this.shape_225.setTransform(143.2,49.1);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FF0000").s().p("AAlBDQgEgDAAgFIAAgTIgBgUIAAgJQgNABgUAEIghAGIgCATIAAASQAAAFgEADQgDADgFAAQgGAAgDgDQgDgDAAgFIABgaIACgaIAAggIABghQAAgFADgDQAEgDAFAAQAFAAADADQAEADAAAFIgBAUIAAAUIgBAJIAAAJIAhgHQATgDAOgBIACggQAAgHAEgIQAFgLAGAAQAFAAADADQAEADAAAFIAAADQgCAGAAAFIgBAIIAAAHIgBAZIgBAYIABATIABAUQAAAEgDAEQgEADgFAAQgFAAgEgDg");
	this.shape_226.setTransform(130,48.9);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FF0000").s().p("AguA1IACgcQACglAAgvQAAgFAEgDQADgEAFAAQAGAAADAEQAEADAAAFQAAAvgDAnIgBAVQAUAAAggKIAEgBQAFAAAEAEQADAEAAAEQAAAIgIADQgKAFgWAEQgTADgMAAQgWAAAAgTg");
	this.shape_227.setTransform(110.4,49.1);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FF0000").s().p("AguA1IACgcQACglAAgvQAAgFAEgDQADgEAFAAQAGAAADAEQAEADAAAFQAAAvgDAnIgBAVQAUAAAggKIAEgBQAFAAAEAEQADAEAAAEQAAAIgIADQgKAFgWAEQgTADgMAAQgWAAAAgTg");
	this.shape_228.setTransform(100.5,49.1);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FF0000").s().p("AgpBAQgEgEABgEQAAgFADgEQAEgDAFAAIARgCIAAgnQABgXABgWIgTAAQgGAAgDgDQgEgDABgFQgBgGAEgDQADgDAEAAIAbgBQAQAAAaAEQALABAAALQgBAFgEAEQgDACgEAAIgYgCIAAAqIgBAnIAYAAQAFAAAEAEQADADABAFQgBAFgDADQgEAEgFAAIgPAAIgQAAIgQACIgSABQgGAAgDgDg");
	this.shape_229.setTransform(90.3,49.1);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FF0000").s().p("AASBEQgFgDAAgFQgEgKgCgGIgJg4QgGARgGAOQgKAVgEAMIACAEQgBAGgEADQgEADgGAAQgGAAgEgDQgFgEAAgGIgDgLIgJgoQgGgUgOgnIAAgEQAAgFADgEQAEgCAFAAQAHAAAEAFIAFALQAJAZAKAvQAHgRAIgXIAJgbQAJgTAIAAQAJAAAEAJQABAFACAMIADARQACAQAJAmIAZg9IAEgRQADgJAEgGQAEgGAHAAQAFAAAEADQAEADAAAFIgEAKIgDAJIgFAPIgQAlIgQAlIgHAPQgEAHgIAAQgFAAgEgDg");
	this.shape_230.setTransform(76.2,49.2);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AgpBAQgEgEAAgEQABgFAEgEQADgDAGAAIARgCIAAgnQgBgXACgWIgTAAQgFAAgEgDQgEgDAAgFQAAgGAEgDQADgDAFAAIAagBQAPAAAbAEQALABAAALQAAAFgFAEQgDACgFAAIgWgCIgBAqIgBAnIAYAAQAFAAAEAEQAEADAAAFQAAAFgEADQgEAEgFAAIgQAAIgOAAIgRACIgSABQgFAAgEgDg");
	this.shape_231.setTransform(54,49.1);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AgJAJQgEgEAAgEQAAgEAEgEQAEgEAFAAQAGAAAEAEQAEADAAAFQAAAEgEAEQgEADgGAAQgFAAgEgDg");
	this.shape_232.setTransform(326.9,28.1);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AgYAuQgNgFAAgKQAAgIAKAAQAEAAAIACQAIADAEAAQARAAAAgHQAAgFgNgFQgRgIgFgDQgMgJAAgMQAAgSASgGQALgEAWAAQAJAAAEADQAGADAAAIQAAAQgJAAQgJAAgBgHIgIgBQgUAAAAAGQAAADAMAGQARAIAHAEQAMAJAAALQAAAPgOAIQgLAHgQAAQgLAAgKgEg");
	this.shape_233.setTransform(318.5,24);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AgdAmQgPgLAAgUQAAgVAMgQQANgRAVAAQAPAAALAFQAMAGAAAPQABAJgLAIQgFADgPAGIgcAMQADAFAHADQAFABAHAAQAMAAAIgEQAIgEAEgBQAJAAAAAJQAAALgPAGQgMAFgOAAQgTAAgOgKgAgLgUQgGAGgDAKIAUgIIASgKQgHgDgJgBQgHABgGAFg");
	this.shape_234.setTransform(309.1,24);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AgNAnIgdhGIgBgFQABgEADgEQAEgDAFAAQAHAAAEAHIATAxIAMgeIAIgTQAEgHAGAAQAGAAADAEQAFADAAAFQAAADgPAgIgTAmQAAAFgDACQgDADgEAAQgIAAgFgJg");
	this.shape_235.setTransform(300,23.9);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AAVAoIgOAHQgGABgDAAQgWAAgKgLQgLgMAAgWQAAgUAQgPQAPgQAVAAQAJABALAFQANAFAAAHQAAAEgCACIgBAJIgBAMQAAAQACAHIAEAJIAEAJQAAAFgEADQgDACgFAAQgEABgJgJgAgMgRQgIAKAAALQAAAMAEAFQAEAHAIAAQAFAAAFgCQAFgCAEgDQgDgVAAgKIABgGIABgIIgDgCIgDAAQgLAAgJAJg");
	this.shape_236.setTransform(290.5,24.1);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AADAcQgCgIgCgVIgDAEIgNAiQgCAEgCACQgEAGgHAAQgFAAgEgHQgFgIgDgMQgDgLgFgkIgCgMQAAgFAFgDQADgDAFAAQAKAAACAJIABAMIACANIAEAVIAOgrQAEgMAJAAQAKAAADANIAFAXIAEAYIAOg1QABgHAJAAQAFAAAEADQAEADABAFIgBADIgTA9QgCAIgHAJQgDAFgIAAQgLAAgGgVg");
	this.shape_237.setTransform(279.4,24.2);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AASApIgDgSIgBgTIABgGIAAgIIAAgEIAAgEQAAgHgDAAQgIAAgGAJQgHALgEAOIgBAHIgBAIIAAAIIgBAHQAAAGgDADQgEADgFAAQgFAAgEgDQgDgDAAgGIgBgHIAAgHIABgZIABgXIAAgHIAAgIQAAgGADgCQAEgEAFAAQALAAABAOIAAABQANgNANAAQARAAAGAOQAEAJAAASIAAAHIAAAFQAAAGACALQACALAAAHQAAAEgDAEQgEADgFAAQgLAAgBgKg");
	this.shape_238.setTransform(260.8,23.9);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AgdAmQgPgLAAgUQAAgVAMgQQANgRAVAAQAPAAAKAFQAOAGAAAPQAAAJgLAIQgFADgPAGIgdAMQAFAFAFADQAHABAHAAQALAAAIgEQAHgEAFgBQAJAAAAAJQAAALgOAGQgNAFgNAAQgVAAgNgKgAgLgUQgGAGgDAKIATgIIASgKQgFgDgKgBQgHABgGAFg");
	this.shape_239.setTransform(250.8,24);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AgHA9QgDgDgBgFIAAgJIABgKIgCgsIgQgBQgMgCAAgKQABgFADgDQADgEAFAAIAQABIgBgJIAAgJQAAgFADgDQAEgDAFAAQAMAAAAAWIAAAHIAJgBQAKAAADACQAIACgBAIQAAAFgDAEQgDADgFAAIgFAAIgEAAIgIAAIABAuIAAAEIAAAFQAAAUgMAAQgFAAgDgDg");
	this.shape_240.setTransform(241.7,22.5);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AgHA9QgDgDgBgFIAAgJIABgKIgCgsIgQgBQgLgCAAgKQAAgFADgDQAEgEAEAAIAQABIgBgJIAAgJQAAgFADgDQAEgDAFAAQAMAAAAAWIAAAHIAJgBQAKAAADACQAIACAAAIQgBAFgDAEQgDADgFAAIgFAAIgEAAIgIAAIABAuIAAAEIAAAFQAAAUgNAAQgEAAgDgDg");
	this.shape_241.setTransform(225.4,22.5);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AAVBAQgDgHgBgNIgCgUIAAgHIABgGIgBgIQAAgEgEAAQgKAAgHAIQgEAFgHAMQAAAggDAHQgDAHgIAAQgFAAgEgDQgEgEAAgFIABgEQABgCABgWIAAg6IAAgDIAAgOIAAgIIgBgIQAAgFADgDQAEgDAFAAQAJAAADAJQABAGAAAKIAAASIgBARQAHgGAHgDQAGgDAJAAQAPAAAGAIQAFAHABAMIABAVIACASIADARIABADQAAAFgEADQgEADgFAAQgJAAgCgJg");
	this.shape_242.setTransform(216.1,21.6);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AgsA4QAAgFACgDQAEgDAFAAIALACIANABQAMAAAHgIQAFgHACgRQgFAEgGACQgFADgGAAQgSAAgKgMQgLgLAAgRQAAgYAOgOQAPgQAZAAQAJAAAFACQAHACADAEQAMACAAAMIgCAQQgFAVAAAVQgBAdgIANQgMARgcAAQgjAAABgOgAgNgnQgHAJAAAOQAAALAEAFQAEAEAHAAQAHAAAHgHQAHgIABgIIAEgaIgGgDIgFgBQgPAAgIAKg");
	this.shape_243.setTransform(205.9,26.4);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AASArQgMAEgLABQgMgBgJgEQgJgGgCgNQgEgVAAgQQAAgLADgPQACgKAKAAQAFAAAEADQADADAAAFIgBAMIgBANIABAUQAAAJACAHIAEABIAEAAQAJAAAMgCIAAgQIgBgOQAAgRACgNQABgLALAAQAFAAAEADQAEAEgBAEIgBAfIAAARIAAARIAAAGIAAAGQAAAFgDADQgEADgFAAQgHAAgDgHg");
	this.shape_244.setTransform(196.4,24.1);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AAVAoIgOAHQgGABgDAAQgWAAgKgLQgLgMAAgWQAAgUAQgPQAPgQAVAAQAJABALAFQANAFAAAHQAAAEgCACIgBAJIgBAMQAAAQACAHIAEAJIAEAJQAAAFgEADQgDACgFAAQgEABgJgJgAgMgRQgIAKAAALQAAAMAEAFQAEAHAIAAQAFAAAFgCQAFgCAEgDQgDgVAAgKIABgGIABgIIgDgCIgDAAQgLAAgJAJg");
	this.shape_245.setTransform(186.9,24.1);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AgbAmQgNgLAAgTQAAgRAMgSQAOgVASAAQAJAAAMAEQAPAHAAAIQAAAEgDADQgDADgFAAQgEAAgGgDQgEgFgLAAQgGAAgIAOQgHAMgBAJQABAJAGAGQAGAEAKAAQAGABAIgFQAJgEACgBQAFABADADQAEAEAAAEQgBAGgPAIQgMAFgJABQgSAAgOgMg");
	this.shape_246.setTransform(177,24);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FF0000").s().p("AgoBDQgKgIAAgdIACgiIABgjIAAgJIgBgKQAAgNAMAAQAEAAADACIAUgDIAQgCQAWAAANAFQAJADgBAIQAAAFgCAEQgEAEgFAAIgEgBQgOgEgOAAIgNABIgQADIgBAjIAigDIAUgCQAGAAADAEQAEADABAFQAAAKgMABIgVACIgkADIgBASQAAASACACQABABAKAAIAQAAIAQAAIAFgBIAFgBQAFAAAEADQAEAEAAAGQAAAJgLACQgIACgbAAQgcAAgJgIg");
	this.shape_247.setTransform(159.4,21.8);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FF0000").s().p("AgSA/QgLgagNgvIgHgYQgFgRAAgGQAAgFADgDQAEgEAFAAQAIAAAEAJIADAPIAJAcIANAsIAUg0IAHgVQAFgNAGgGQAEgFAGAAQAFAAAEADQADAEAAAFQAAADgCAEQgFAHgEAJIgGASIgYA8QgEALgGAKQgDAHgHAAQgJAAgDgIg");
	this.shape_248.setTransform(147.5,22);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FF0000").s().p("AAtBCQgHAAgHgQQgFgKgDgOIgWACIgUACQgEAKgKATQgEAHgHAAQgFAAgDgDQgEgEAAgFQAAgEANgaQgCgDABgCQAAgFAIgCIAcgsQAVghAFAAQAKAAADAMIAFAcIANA5IAFALQADAIAAAEQAAAFgEADQgDADgEAAIgBAAgAgGAIIALgBIANgBIgGgdIgSAfg");
	this.shape_249.setTransform(134.7,22);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FF0000").s().p("AAlBDQgEgDAAgFIAAgTIgBgUIAAgJQgNABgUAEIghAGIgCATIAAASQAAAFgEADQgDADgFAAQgGAAgDgDQgDgDAAgFIABgaIACgaIAAggIABghQAAgFADgDQAEgDAFAAQAFAAADADQAEADAAAFIgBAUIAAAUIgBAJIAAAJIAhgHQATgDAOgBIACggQAAgHAEgIQAFgLAGAAQAFAAADADQAEADAAAFIAAADQgCAGAAAFIgBAIIAAAHIgBAZIgBAYIABATIABAUQAAAEgDAEQgEADgFAAQgFAAgEgDg");
	this.shape_250.setTransform(121.5,21.8);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FF0000").s().p("AguA1IACgcQACglAAgvQAAgFAEgDQADgEAFAAQAGAAADAEQAEADAAAFQAAAvgDAnIgBAVQAUAAAggKIAEgBQAFAAAEAEQADAEAAAEQAAAIgIADQgKAFgWAEQgTADgMAAQgWAAAAgTg");
	this.shape_251.setTransform(101.9,22);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FF0000").s().p("AguA1IACgcQACglAAgvQAAgFAEgDQADgEAFAAQAGAAADAEQAEADAAAFQAAAvgDAnIgBAVQAUAAAggKIAEgBQAFAAAEAEQADAEAAAEQAAAIgIADQgKAFgWAEQgTADgMAAQgWAAAAgTg");
	this.shape_252.setTransform(92,22);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FF0000").s().p("AAtBCQgHAAgHgQQgFgKgDgOIgWACIgUACQgEAKgKATQgEAHgHAAQgFAAgDgDQgEgEAAgFQAAgEANgaQgCgDABgCQAAgFAIgCIAcgsQAVghAFAAQAKAAADAMIAFAcIANA5IAFALQADAIAAAEQAAAFgEADQgDADgEAAIgBAAgAgGAIIALgBIANgBIgGgdIgSAfg");
	this.shape_253.setTransform(80.1,22);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FF0000").s().p("AAlBDQgEgDAAgFIAAgTIgBgUIAAgJQgNABgUAEIghAGIgCATIAAASQAAAFgEADQgDADgFAAQgGAAgDgDQgDgDAAgFIABgaIACgaIAAggIABghQAAgFADgDQAEgDAFAAQAFAAADADQAEADAAAFIgBAUIAAAUIgBAJIAAAJIAhgHQATgDAOgBIACggQAAgHAEgIQAFgLAGAAQAFAAADADQAEADAAAFIAAADQgCAGAAAFIgBAIIAAAHIgBAZIgBAYIABATIABAUQAAAEgDAEQgEADgFAAQgFAAgEgDg");
	this.shape_254.setTransform(66.9,21.8);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FF0000").s().p("AgvA5QgLgIABgLQAAgFADgEQADgEAGAAQAIAAAEAIQAFALARAAQAOAAAPgGQAOgHAAgIQABgLgKgEQgGgCgTgBQgPAAgMgFQgQgHAAgNQABgSARgOQATgOAUAAQAIAAANAEQAQAFAAAGQAAAFgDADQgDAEgGAAIgNgCIgMgBQgMAAgJAFQgKAGAAAGQAAADADACQAEADAGAAIAVACQATABAMAKQAMAJAAATQAAAXgaALQgTAJgZAAQgWAAgNgKg");
	this.shape_255.setTransform(53.6,22.2);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AgpBAQgEgEAAgEQAAgFAFgEQADgDAGAAIARgCIAAgnQAAgXABgWIgTAAQgGAAgDgDQgEgDAAgFQAAgGAEgDQADgDAFAAIAagBQAPAAAbAEQALABgBALQABAFgFAEQgDACgFAAIgWgCIgCAqIAAAnIAYAAQAFAAAEAEQADADAAAFQAAAFgDADQgEAEgFAAIgQAAIgOAAIgRACIgSABQgGAAgDgDg");
	this.shape_256.setTransform(34.6,22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.example3text, new cjs.Rectangle(-5.7,6.6,372,435.6), null);


(lib.blank_gr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("Aj+CqIAAlTIH9AAIAAFTg");
	this.shape.setTransform(32.5,17,1.275,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65,34);


(lib.anim_topfoambuildup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("ALfL5QgDgDgEgBIgOgaIgEgIIgEgJQAwjODYgmIARgDQASAGgMANIgGAEQi3Acg9CvQgMAgAaAbQAGAHgCAIQgFADgFAAQgIAAgIgJgAF2JgIgXgVQgQkBEIhfQA3gUA5gFIA8gFQARAGgMANQgCACgDACQkGAVhzDeQgxBgBaA1QgKAFgLAAQgUAAgUgRgAgmG4QgdiKCChWQBDgsBMgHQAOAhhCALQg1AJgrAhQhaBFAQBnQCLBHCdAIQguAKgtAAQh4AAhrhIgAl3FHQhchZBBh/QAqhSBTgoQBxg5B4gXQAOAfhAALQi0AghlCMQgZAkgBAsQgBAsARAqQAoAKgDARQgHAMgPAAIgFgBgAnijGQAYgsAugWQBFghBHgWQAMAjhJASQhZAWg9BFQgTA6ARA7QATBBA5AYQgDANgOABIgGABQiBhnBPiNgArQkVQicAqhjhrQgUgUgBgeQgJivClhhQCqhkDGADQC2gdCYBPIAAACQkHg5kPBHQiVAnhmB1QhdBqBcBnQASAVAdABICfAGQAIgVAbgaQB5hyCeglQAxACAnASQABAAAAAAQAAAAAAABQABAAAAABQAAAAAAABQjZgGiYCsQgNAPgEASQgBAJAGAIQAHAJABAJIgCACQgbgQgEgUg");
	this.shape.setTransform(108.9,71.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AF7KGQgBgGABgHQB9htC1AKIANgBQAiAPAZAXQABABAAAAQABAAAAABQAAAAAAABQAAAAABABQhagYhxAMQhsALg4BQIgEABQgIAAgCgJgAGuE6QgQgEgQgCQANARALATIABAEQgTgWgUgTQhggIhRA8QARgsA8gVQAegLAfgBIALAAQhDg3hVgkQgzgWg1AXQgHADgIgBQAbgaAsgIIABAAQAxAJAqATQg0g/g3hMQglgzgxgcQANAXAKAaIAAAEQglgXgmg1Qg4gRhFALQAfgOAlgDQAOgCAJgEIARAFQgug3g7gVIAEAYIAAADQgPgQgOgTQg2gNhBAMQAogfAyABIAKACQgPgagNgfQgVgugtgaQhCglhMACIAOgNQAZgFAVgBIAEABQgigZgigkQgRgTgXgOQheg7hxAeQAKgRAbgHQAXgGAXgDQAaADAZAGQhqhiiIgUIABgEIACgEQAGgJAKABIAAgBQCaARBhB1QABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAIgCAEIgBABQB9AnBSB2QB4AxAmB+QBqAgA7BaQB6A2BGCDQARAhAMAhQBDAgAzA6QCKAHBpBbIAAACQhWgrhpgag");
	this.shape_1.setTransform(147,57.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AHcJ8QA3hbBjglQgUAmg6AjQgbAQgRAcQgpBBgOBLQgUg8ArhFgAM6LVIAcgpQAwgTAzgIIAigEQAxAEAwANIAHADIADAEIAFAJIAFAIQhygfh3AmQgJAJgEANQgJAdgXAAQgJgMAJgPgACKJ7QgSiiCmhCQAGgCAHABQgRAhg2AeQguAZgWAvQgTAqAMApQAIAGADAHIAAADQgGADgGAAQgIAAgGgIgABDBXIA1gPQAhAGAeAOIACADQjxAFiXDLQgFAGgIADQBXiqDIg3gAH2DjQgCgBAIAAQBhAJBHA4IgCACQhcgUhQgugApHh7QgDgKABgKIABgWQBAhKBlgRQAmgGAigNQBZgDBTAdQAAAAAAAAQABAAAAABQAAAAAAABQABAAAAABQi2gbirBXQgYAMgUARIAAAFIgEARQgBAKgGAGQAAgBgBAAQAAgBgBAAQAAAAAAgBQAAAAAAgBgAr5olQBbgnBfgGQBHgDBDARIABADQi5gTilBdQgjAUgcABQAegrA6gYgAv1roQBYgNBXgEQB7gOBhA4IAAACQjHgrjOAwQg4ANgYAqQAEhJBWgOg");
	this.shape_2.setTransform(128.9,64.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape}]},2).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape}]},2).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape}]},2).wait(2));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AOHNwQhCgfAMhlIABgRQg9gYhBgbQhrgtg2hgIABgIQgSgOgQgQQgJgIgEgNIAEgTQgygGg2AAQhsAAg1hJQg3gXg1ghQiMAFh0hhIgJgHIgXgMQgRgJgDgSQANgpAVghQjdAei7hsQgxgcAOg3QARhGA1gnQg2gVgoguIgBgCIAAgBIgBgBQgSgVgPgbQgJgQAFgUQAIgcANgYQh0ABh3hFQgXgOgYgRQgFgDgBgJIAGgPQgfAMgvgIIgkgHQhoAEhYhCQgJgTAAgXQABgZAOgUIADgEQADgRAFgQQAGgWAQgSQAagKAagIIABgBQBZhkCUgoQCZgrCdgLQDLgJB9BuIAJACIAAAAQC2AdBkCCIANAOQANgUAUgCQAZAngSA2QANAbALAfQAJAaAHAcQDIA5BlC7QEyCRDdEAQDODvgQEwQgBAYgMAWIAEAHIATgKIAQgJQAWAGgPARIgBABIgWAFQhAArg1A4IgZAbIAEACQAjADAZARQgcAKgjgLIgOAHQhUgLgmgqgAQWNkIAHAAQAKgOAMgOIgEgDQgLAQgOAPgAnHi2IACgCIgJgCIAHAEgAo7j0QAGAJALAFQgRgPgJgSQACALAHAIgAtqoZIgHAPIAFABIAOgVIgJgEIgDAJg");
	this.shape_3.setTransform(120.9,93.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AOHNwQhCgfAMhlIABgRQg9gYhBgbQhrgtg2hgIABgIQgSgOgQgQQgJgIgEgNIAEgTQgygGg2AAQhsAAg1hJQg3gXg1ghQiMAFh0hhIgJgHIgXgMQgRgJgDgSQANgpAVghQjdAei7hsQgxgcAOg3QARhGA1gnQg2gVgoguIgBgCIAAgBIgBgBQgSgVgPgbQgJgQAFgUQAIgcANgYQh0ABh3hFQgXgOgYgRQgFgDgBgJIAGgPQgfAMgvgIIgkgHQhoAEhYhCQgJgTAAgXQABgZAOgUIADgEQADgRAFgQQAGgWAQgSQAagKAagIIABgBQBZhkCUgoQCZgrCdgLQDLgJB9BuIAJACIAAAAQC2AdBkCCIANAOQANgUAUgCQAZAngSA2QANAbALAfQAKAaAGAcQDIA5BlC7QEyCRDdEAQDODvgQEwQgBAYgMAWIAEAHIATgKIAQgJQAWAGgPARIgBABIgWAFQhAArg1A4IgZAbIAEACQAjADAZARQgcAKgjgLIgOAHQhUgLgmgqgAQWNkIAHAAQAKgOAMgOIgEgDQgLAQgOAPgAnHi2IACgCIgJgCIAHAEgAo7j0QAGAJALAFQgRgPgJgSQACALAHAIgAtqoZIgHAPIAFABIAOgVIgJgEIgDAJg");
	this.shape_4.setTransform(133.1,98.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4,p:{x:133.1,y:98.9}}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4,p:{x:137.2,y:100.6}}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4,p:{x:127.2,y:96.4}}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1).to({x:122.8,y:94.2},0).wait(1).to({x:124.7,y:95.1},0).wait(1).to({x:126.6,y:96.1},0).wait(1).to({x:128.5,y:97},0).wait(1).to({x:130.8,y:98},0).to({_off:true},1).wait(1).to({_off:false,x:135.4,y:99.9},0).wait(1).to({x:137.7,y:100.8},0).wait(1).to({x:140,y:101.8},0).wait(1).to({x:142.3,y:102.8},0).wait(1).to({x:139.8,y:101.7},0).to({_off:true},1).wait(1).to({_off:false,x:134.6,y:99.6},0).wait(1).to({x:132,y:98.5},0).wait(1).to({x:129.4,y:97.4},0).to({_off:true},1).wait(1).to({_off:false,x:125.1,y:95.3},0).wait(1).to({x:123,y:94.3},0).wait(1).to({x:120.9,y:93.3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-5.6,241.8,192.3);


(lib.anim_foam = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ArDGZQAGgEABgHQAHgeAXgTQAYgTAngIQgKg+BSgNQAGAbAWAXQgHhEAygpQAGAngBAyQBAAGA2gtQAZgVAdgDQAUgBANgJQAOgKADgUQAPhJBAAQQAEgZATgBQAygEAygeQgIgMACglQAygKAYhLQgmgqA6giQgPA+BAgWQgcAuA6ANQAZhJBCgEQgKBAA+ghQASgJAEgRQAOgvAkgCQATgBAHgMQAXguAzAPQAignASggQATAvAigfQAmglAmANQASAGAWgfIAbAIQAiA6g6gBQhLgBhFAvQghAWADAoQgoAEgcgHQgXgFgFAXQgUBZhqgBQhegBgEBQQg9AjgRgrQggAkgUAaQghBcgzgxQgSgRgYApQgJAPgHARQgNAdgWguQgFgKgSAVQgYAagDATQgfgFgbAPQgKAFgJAHQhAA1hMAhQhCAAg0AqQgUAQgXgEQhFgNg2A6gAjAjrQA5AHAeg+QAZAMAPABQAjACgTg5QgGgVgNgSQAwAMArAjQAIAFAHgEQAIgFAIgPQAUgmAFglQAkAIAMAbQAPgeAZgLQAKgFALgBQATgDAHAUIAEAPIABAPQgdAFgPAHQgNAGgLAJIgFAEQgkAhgvAYQAPABAJAIQArAig+AXQgJAEgIgBQgWgEgGgtQgYA1gzATQAGgagUgUQgUA9hHAaQgihDgxBOQgkhfBUALg");
	this.shape.setTransform(76.7,43.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ArTGaIgBgBQAGgEADgFQALgTATgCIAOgEQARgEAWgLQAHgMAPgGQACgLAIgHQARgTAagSIAJgHIAcgRIABACIAJADQAEAAAJADQACgJAFgGQAJgLACgSIAAgCIABgCQAGgrAigXIAFAEQAOAKgBAeQAAARgIAKIgEAGIANAKQAhACAEAFQABAEAVgHQAJgEAIgGIABgDQALgYAagEIALAFQASAIAQgHQAHgCAFgFQAFgEADgFIAFgLQAFgPAAgQQAAgKAEgJQAIgPARgIQARgIAOgEIAFgVQACgHADgDIACgCQANgLAegGQASgDAGAFIAOAFIACAAQgEAAAEgHIAKgNIACgCQAYADAUgSQAPgOANgNIAIgHQALgHAIgMQgBgKAAgNQAAgeAfgXIALgIQAEAKADAVQADARAUgCQAOgDAQgHQAAAEACACQAEADAJABQAAgBAIgCQACgMAJgLQAHgJACgLQAFgfAfACQANAAAIAGIAFAEQgDAeAWAFIASAFQAPgEAPgLQANgKAEgPIACgIQAGgaASgRQANgNATgCIACAAQAUgDAHgNQAHgLADgLQAFgPATgDIAogFIAEgFQAFgHAEgIIAEgKQAHgVAJgRQAFgJAHgEIADgCQAVAUAGAOQAFAFAEgDIABAAQATADAcgIIALgCQAEgFAGgBQAJgEATgNQAHgFAHgHIAMgBQgQAOgGAOIgFAGQgDAHgKAIQgJgEgEAHIAAACQAAABAAAAQgBABAAAAQAAAAgBAAQgBAAAAAAQgJAZgEAdIgNAGQgXAJgWAFIgIABIgDABQgRACgJAPIgCADIgHAPQgGAQgNACQgVAYggAJQgOAUgeAIIgPADQgXAEgVABQgPAAgMAEQgeAHgNAfQgFALgDAPQgMAMgIAKQgVATgWgIIgJgFIgGADQgVAMgQAPIgJALIgKATQgFAMgGAKQgTAggaAHQgYAHgagQIgEgBQgYgJgUAiIgBACIgFAHQgJAMgKAIIgCABQgWANgUgSIgEAAIgTASQgJAIgJAEQgPALgJAKIgIgBQgPABgKAHQgMAIgPAHIgVAIIgCAAQgNAFgMAHQgMAJgMALQgPAPgQANQgZATgdAEQgLABgLADQgQABgQAHIgFACIgbAOQgZAQgdAMIgJAEQgRAIgRADIgOACQgKABgJACIgGADQgZALgeAIIgJABQgTAAgVAJIgJAEQgRgKAAgPgAjjiqQgBhDAzAFQAVgKAdgVQAIgGAHgJQAGgHAFgJQAQACAHgFIAGgBQAegCgBgWIABgJQABgPgHgRIgDgGQAWgHAdAFQAMAAANAKQAFAEAEABIAEAAQAHAAAIgHIAOgLQAFgEAEgJQAHgPAFgPIARgBQASgCAMARIABgBQAKgHAHgBQAKgIAKgFQAJgFALgDQAQgEAJAKIAGAGIAAABQACACACAEQgGAAgCACQgFACgEAEIgLASIgEAFIgGAHQgFAGgIAFQgcAPgTAUIgHAIQAFACAEAFIAEAHQAPAVgWAMIgdANQgIADgGABQgKABgFgDQgIgDgFgMIgKAPQgaAlgpAPQgCgNgPgLIgHgEIgEAEIgSASQgIAMgOAIQgWAOgZARIgDABIgLgHQgLgJgKgBQgZgCgfAhIgBACQgEgMADgMgALRlZQgKgBgNgFIgBgBIAKgBIAEAAQARAJgEAAIgDgBgAK4lhIABABIgDAAIACgBgAK5lgIAAAAg");
	this.shape_1.setTransform(75.2,43.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AqqG+QgWgJgZADIgLAAQgXgJAOgUIAJgJQASgPAXAMQAIAEAJAAQAUACAZgOQAAgSAOgJQAGgKAPgEQAdgKAXgYIAJgJQAPgMAMgOIABgBQAHgIABgJQgBgNAKgEQAEgJAKgEQATgGAAgVIAAgDIAAgCQAEg0AlgXIAIAAQAbgBgCAmQgCATgPAHQgFABgEADQgIAFAHAPQApAGgPAUQgMAOAdgFQALgCAJgIIAAgFQADggAfgBIAKALQAPASAUgFQAGgCAHgEIALgJQAEgEACgGQAJgPgHgUQgCgLADgMQAEgRATgMQATgMAJgMQABgNgBgMIAAgOIAAgDQAFgVAlgEQAWgCgBAPQAAAMACAMIAAABQgCAHAJgCQALgBAJADIAEABQAZAJAZgVQARgPASgLQAFgEAFAAQARgBALgLQAHgJAFgQQAIghAfgYQAGgFAGgCQANgBACAeQACAVAVgGQASgEAQgKQAGgDAFgGQALgOgEgIQgHgGADgHQABgNAMgMQAJgKgBgNQgGgpAnANQAPAFACAOQAAAFACAEQgBAeAhACQAJABAKAFQATgGANgNQALgMACgTIACgIQAFgcAVgVQAPgPAVgEIACAAQAYgEAIgNQAGgMAAgPQAAgTAYgCQAZgCASgMIADgFQAGgIADgKIACgMQACgZAIgTQAFgLAKgDIADgBQAeAKgFAeQgCALgCAGIgBACQAOAbAigMIAMgEQgBgJADgHQAGgLAWgMQAJgFAIgGQAOgDAMgGIAFgCQAJgDADgEIADAIQABAFgBAFQAFgGAJgBIAEAAQABAAAAAAQABAAABAAQAAAAABgBQAAAAAAAAQgCAbgJAbIgMALQgVASgXAMIgIAEIgDACQgQAJgNALIgDADQgFAGgDAJQgIATgSgKQgaAYglAIQgHAdgfAPIgOAGQgYAHgagDQgQgBgOAAQgkABgSAgQgIAOgEAPQgJAQgFARQgLAdgeADQgGABgGgBIgHACQgbAGgUAQQgHAEgCAHQgEAMgGAMQgFAMgIALQgWAgghAIQgcAHgfgJIgEgBQgfgFgVAfIgBACIgGAHQgMANgMACIgDAAQggACgTAHIgDAEQgHALgMAKQgLAIgNACQgSAEgQAHIgJAAQgQABgKANQgKAPgRAGQgLAEgOAAIgCAAQgQABgNAHIgBABQgOAHgLAQQgOATgRAQQgZAagjgGQgNgCgMACQgTABgPANIgGAEIgZAVQgbAXgiAGIgLADIgmAJIgPAEQgKADgIAHIgHAFQgXAXgjACIgCABQgFAAgEgCgAjZikQAAhDAxAFQAAgZAhgSQAJgFAIgHQAHgHAEgIQAMgGAAgOIAGgBQAdgGAKABIAFgHQAHgMgEgTIgCgHQALgUAZgLQANgJAMALIAIAHIACACQAHAGAIAAQAIACAIAAQAHAAAGgIQAKgNAHgPIAOgJQAQgNAPAPIACABQALACAEAGIATgLIATgJQAOgHAJgBIAIgCIABAAIAHgBQACgCAEACQADABADAEQAFAGgFAOIgDAGQgBAEgDAEQgFAIgJADQgfAMgKAXIgFAKQADAGAAAFIAAAIQACAWgZAEQgOADgPAGIgNAHIgNAHQgHAHgIAAIgKAPQgcAigoANIgagIIgIgCIgGACQgPAEgHAGQgHAKgPAGQgZAKgUAXIgBABQgFADgJgDQgNgGgKABQgZAEgiAUIgBABQgCgKAIgOgALZmOQgLgOAAgTQADAHAGAIQAKAMgHAHIgBgBgALOmvQgDgHABgFIAEgEQgCAJAAAHIAAAAg");
	this.shape_2.setTransform(74.6,44);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ArhH8QgHgBgGgDQgYgSgegEQgvgGAhgeQAdgZAjAfQAfAdAngZQgMgsAygCQAogCAWgdIAIgMQARgRAKgVQAIgTgDgUQgGgsAigCQAcgBgBgZIAAgDIAAgDQgBhEA2gTQAmgNgEAtQgCAXgXACQghADAEAeQAyAKgiAjQgZAYAlgDQANgBAKgJQgIguAnAAQARA7ApgVQAIgDAFgFQAXgSgPgeQgGgNABgOQACgUAUgPQAhgZgMgoQgCgJgFgIQgIgjAxgDQAagBgIAZQgHAVgFAXQgDAOAQAEQASAEANAMQAeAWAfgZQAUgSAWgIQAGgDAIACQArAJARgpQARglAegZQAjgbABAvQABAZAYgJQAngNASgdQASgegRgSQgfgXAegbQALgJgFgQQgQg0AvAZQARAKgEAWQgKAsA1gCQAKgBALAJQArgQAAgsQACgiAcgdQARgSAYgFQAxgJgKgqQgFgXAdgBQAhgBARgaQAGgJABgMQABgGgBgIQgDgeAIgWQAEgNAOAAQArgDgSAxQgIAUgMAQQAKAzAogRQAGgCAGgEQgSgmApgQQAagKAVgRQAigagUgnQgVgoAfgMQAFAqAnAaQAGAFAFAHQAJAPgIAPQAVglAogHQAOgCAAgPQAGAvgcAlQgTAZgYAVIgMAKQgOAOgRAKQgKAFgFALQgJAVgXgTQgfAXgqAFQABAogfAVQgfAWgmgIQgSgEgQgCQgqgHgYAjQgXAgAAAqQgBAngmAOQgMAFgMAAQggABgZARQgHAEgCAIQgFAdgUAYQgZAfgoAJQgjAIglgDQgmgCgVAcQgDAGgEAEQgQAOgTgFQgtgLgRApQgNAhgjgCQgbgBgcAEQgSADgIASQgOAigqgHQgVgEgPAIIgBAAQgQAIgKATQgOAXgRAUQgbAfgngOQgngOgbAeIgFAFIgZAcQgbAegoABQgcABgaAHQgVAGgOAQIgGAJQgVAgglAAIgEAAgAj5h9QAJgKgCgPQgHgpAwAEQgWgoAlgOQALgEAIgHQAYgRgLgfQAfgPAXAbQAXgJgBgaQgDgoAXgdQASgWAOAZQAOAaAUAMQAIAFAHgIQATgTAOgXQAQgaATARQANALAAAPQAogTAegiQALgNATACQAtADgSAoQgEAIgKACQgjAJgBAcQAAANgFANQgKAfgigDQgjgCgPAiQgLAXgRATQgrAtg+AFIgQAAQgUAAgGACQgHAKgQADQgbAGgPAdQgGAJgKgCQgPgDgLAEQgZAJgkAIQgBgJANgQg");
	this.shape_3.setTransform(78.2,41);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Aq7HMQgXgLgaABIgMAAQgYgJARgVIAAAAIAKgIQAUgPAYAPQAIAFAJABQAVAEAagPQgCgUAOgJQAHgKARgDQAfgIAXgZIAJgKQAPgNALgPIACgCQAHgKAAgMQgBgQAJgGQAFgJALgDQAVgFAAgWIAAgDIAAgCQADg2AmgXIAJgBQAegEgDAnQgBAVgSAFQgFABgEADQgLAFAFASQAsAHgUAXQgPARAfgFQALgCAKgIIgBgFQACgiAggBIAJANQAPAVAUgFQAHgBAHgFIAMgIQAEgFACgFQAJgQgHgUQgEgMADgMQAEgSATgNQATgNAHgOQACgNgCgMQAAgJgCgGIAAgEQACgXAogEQAXgCgDASIgCAdIABABQgDAIALAAQANAAAKAFIAEACQAaALAZgVQATgQASgLQAGgDAGAAQARAAANgKQAJgJAGgRQAKghAegYIAMgIQAQgDACAgQABAWAWgHQATgFAPgKQAIgFAGgIQANgSgHgKQgJgIACgIQAAgNAOgNQAJgJgCgOQgIgsAoARQAQAGAAAPIABALQAAAeAjABQAJAAALAHQATgHANgNQALgNACgUIABgIQAFgcAWgWQAPgQAWgEIACAAQAYgFAIgOQAHgMgBgQQgCgUAagBQAagCARgOIAEgFQAGgJADgKIABgMQAAgbAJgUQAEgLALgCIAEgBQAgAHgJAjQgCAMgFAIIgBADQANAhAjgNIANgFQgDgKADgIQAEgNAYgMIARgKQAOgFANgGIAEgDQAZgLgPgYQgPgVAGgKQACgDAEgCQgEAgAWAWQADADACAHQADAHgCAIQAIgOAPgCIAFgBQAGAAACgEQgCAdgKAbIgMANQgUAUgYAOIgHAFIgEACQgPAKgOALIgDADQgGAGgEAIQgIAUgTgMQgbAXgmAIQgFAggfAQIgOAGQgZAJgagEQgRgCgPAAQglgBgUAhQgIANgEAQQgJARgEASQgIAgggAGQgHABgGAAIgIABQgcAFgVARQgHAEgCAHQgDANgGAMQgGAMgJALQgXAggiAIQgeAHgfgHIgFAAQgggFgVAeIgBACIgGAIQgNAMgNACIgDgBQgigBgTAOIgDAEQgHANgMAKQgLAHgOABQgTADgSAGIgJAAQgRACgJAOQgKAQgRAGQgMAEgOgBIgDAAQgQABgOAHIAAAAQgPAIgLAQQgOAUgRASQgaAagjgIQgOgDgNADQgSABgQAOIgGAEIgZAXQgbAZgjAFIgMACIgmAJIgQAEQgKAEgIAHIgHAHQgXAZgkACQgGAAgFgDgAjhiaQAAhDAwAFQgFgdAigRQAKgFAHgHQAIgGAEgIQALgJgCgPIAGgBQAcgHANAGIAGgGQAJgLgDgUIgCgGQAIgZAYgPQAOgLALAMIAHAHIADADQAHAHAHACQAJAEAIABQAIABAGgIQAKgNAIgOIANgLQAQgPAPAOIADABQALAEADAJIAUgLIASgKQANgIAKgCIAIgFIABAAQAEgCAEgBQADgCAGABQAGABADAEQAIAGgEAPIgCAGIgFAJQgEAHgJADQghALgIAZQgBAFgCAFIABAMIgBAJQgCAVgaADQgOABgOAHIgMAHQgIAFgFAFQgHAIgIAEIgLAOQgcAignANIgegFIgIgBIgGABQgQADgHAFQgHALgQAFQgZAIgTAZIgBABQgFAFgJgDQgNgGgLACQgYAFgjASIgBAAQgBgKAJgOg");
	this.shape_4.setTransform(75.5,43.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ArbGbIAAgBQAFgEAEgFQAOgRAVAFQAHABAJgBQASgBAYgNQADgPAPgHQAEgLALgFQAXgPAZgVIAJgIIAbgVIABAAQAGgDADgEQABgGAJgBQAEgJAHgFQAOgIABgTIAAgDIABgCQAFgvAjgYIAHADQAUAEgBAiQgBASgMAIIgGAFQgDAEAJAMQAlAEgGAMQgGAJAagGQAKgDAIgHIAAgEQAIgcAcgDIALAIQAQANASgFQAHgDAGgEQAFgEAEgFQAEgFACgFQAHgQgEgRQgBgLAEgKQAGgRARgJQASgKAMgJIADgWIACgNIABgCQAJgQAigFQAUgDACAKIAIAPIABAAQgBABAAAAQAAABAAAAQABgBABAAQABgBACgBIAPgFIACgBQAZAHAXgUIAegbQAFgEAFgCQAOgEAKgKQADgKACgPQAEgfAfgYIAMgHQAIAFADAZQACATAVgEQAQgEAQgIQADAAADgCIAKgIQgDgEAFgEQACgNAKgMQAIgJABgMQgBgkAjAHQAOADAFAKIADAHQgCAeAcADIATAFQAQgEAOgMQANgLADgSIABgHQAGgcATgSQAPgPATgDIACAAQAXgDAHgNQAHgMABgNQACgRAWgCQAXgDATgHIADgEQAGgIADgJIADgLQAFgXAIgSQAFgKAJgEIADgBQAZAPABAWIACAJIAAABQARAPAfgJIALgEQABgHAFgEQAIgHAUgNIAQgLIAOgDQgBgPAKgRIgBADQAGAHALAJQANALgWgCIgFACIgLACIACAHIgBAHQAAAFgDAFIgBACIgLA2IgNAJQgWANgXAJIgHADIgDABQgRAFgLANIgCAEQgFAGgDAIQgHASgPgEQgYAYgiAIQgLAZgeALIgPAFQgXAFgYgBQgPAAgNACQghAEgQAfQgHANgDAPQgKAOgHANQgQAZgagDQgFAAgFgDIgHADQgYAJgSAPQgGAFgDAGIgKAWQgFAMgHAKQgUAggeAIQgaAHgcgMIgEgBQgcgIgVAhIgBACIgFAHQgKAMgMAFIgCABQgbAHgTgFIgEACQgGAIgNALQgKAIgLADQgRAIgMAIIgJAAQgPABgKAKQgLALgQAHQgKAEgNACIgCAAQgOADgNAHIAAAAQgNAIgMAOQgOARgRAOQgZAXgggBQgMgBgLADQgSABgPAKIgGADIgaASQgaATgfAJIgKADQgSAHgSADIgPADQgKACgIAFIgHAEQgYARggAFIgKAAQgVgEgXAFIgKADQgUgKAHgRgAjZinQAAhDAxAFQALgSAfgTQAJgGAHgIQAHgHAEgIQAOgCAEgKIAFgBQAegEAFgKIACgIQAEgOgFgRIgCgHQAQgOAagDQAOgEAMALQAEADAFACIADABQAHADAHgDQAIgCAIgDQAGgCAFgIQAIgOAGgPIAPgFQASgHANAQIACgBQAKgCAGACQAJgGAKgFIATgJQAQgGAJAFIAHACIAAAAIAFADQAAgBgBAAQAAAAAAAAQAAABAAAAQAAAAAAABIgBAFQABAHgHAMIgDAGIgFAIQgFAGgIAEQgeAOgOAVIgGAJQADAEADAGIACAHQAIAVgXAIIgdALIgOAGQgIACgGAAQgHACgHgFIgKAOQgbAkgoAOQgGgIgQgIIgHgDIgGADQgMAHgHAHQgIALgPAHQgXAMgWAUIgCABQgFAAgIgEQgMgHgKAAQgZABggAbIgBABQgDgLAFgNg");
	this.shape_5.setTransform(74.4,43.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ArPGaIgBgBQAGgEADgGQAKgUAQgFIAOgFIAmgRQAIgKAPgFQABgMAHgIQAOgUAagRIAKgHIAcgOIABACIAKAJIANAHQABgJAEgGQAHgMACgRIAAgCIABgDQAIgoAggYIAEAGQAMAMgBAdQAAAQgGAMIgDAGIARAHQAfABAIACQAEABAUgIQAIgEAIgGIABgDQANgVAYgEIANACQATAGAPgHQAGgDAFgFIAHgJQADgFABgGQAFgPABgPQABgKAFgIQAIgPARgGQAQgHAQgCQACgMADgJQAEgGAEgDIACgCQAPgIAcgGQAQgEAIACQAJABAJAAIACgBQgEgBADgJIAHgPIABgDQAXABAUgSQAOgMAMgPIAHgHQAKgIAHgOQgDgKAAgMQgDgdAfgXIALgHIAFAeQADARATgCQAOgBAQgHQgCAGABADQACAIANADIALAAQADgMAIgLQAGgJADgKQAIgdAcgBQANgBAJAEIAGADQgDAeATAGQAHADAKABQAPgDAPgLQAOgJAEgOIACgIQAHgaAQgQQANgMATgCIACAAQATgCAHgNQAGgLAEgKQAHgOARgDQAUgEAUAAIADgEIAKgOIAEgKIASgkQAFgIAGgGIADgCIAcAhQAGADAGgEIACgBQATgDAbgHIALgCQAFgDAHAAQAKgCASgOIANgMIAZAAIAEAAQAUAQgKACQgJACgRgEIgDgBQgVALgMAMIgHAGQgFAGgJAHQgNAAgIAJIgCACQgCAEgDABQgLAXgCAdIgNAFQgYAHgWACIgHABIgEAAQgRACgIAOIgCAEIgGAPQgGAQgLAEQgUAYgfAKQgQARgeAGIgOADIgsAEQgOACgMAEQgcAIgMAfQgFALgBAOIgWATQgYASgUgLIgIgHIgGAEQgTANgQAPQgFAFgDAFIgLATQgFALgFAKQgSAggYAHQgXAHgagRIgDgCQgVgKgWAkIgBABIgEAHQgJAMgJAJIgBACQgUAPgVgYIgDgBQgGAEgNANIgRAOQgOAMgIAKIgHAAQgOAAgLAGIgbAOIgUAIIgCABQgMAFgMAHIAAABQgMAIgLAKQgPAOgRAMQgYASgcAGQgLACgKADQgQABgPAGIgGACIgaAMQgaAOgbANIgJAEQgQAKgQACQgHABgIAAQgJAAgJACIgGACIg3ARIgIACQgTADgTAKIgJAFQgQgKgDgOgAjoisQgBhCAzAFQAagGAdgXQAIgGAGgIIALgRQARAEAJgEIAFAAQAfgBgEgcIAAgJQgBgQgHgQIgDgHQAZgCAdAIQANACAMAKQAFAEAFAAIAEAAQAHgBAIgJIANgOQAFgGAEgIQAHgQAEgQIARABQATABALASIABgCQAJgIAJgEQAJgIALgFQAJgFALgCQAQgEAJAMIAFAIIAAACIAEAIQgIAAgEACQgHADgFAEQgGAGgJALIgDAEIgHAHQgFAHgIAEQgbAQgVATIgIAHQAGADAEAEIAGAGQASAWgVANQgLAHgSAHQgJADgGABQgKAAgGgFQgHgFgFgPQgEAIgFAHQgaAmgpAPQgBgPgOgMIgHgGIgEAGIgQATQgJAMgNAJIgwAfIgDABIgKgJQgLgKgKgBQgYgDgfAjIgCADQgEgMACgNg");
	this.shape_6.setTransform(75.6,43.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.9,0,141.6,86.3);


(lib.anim_bottomfoambuildup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AMcNRQgDgEAAgEQgBgEABgFQAyhiBrgaIAZgGQAQAEAHANIAAADQh8APhGBuQgBADgEAAIgDgBgALrIOIAAAAQAVADgFAZIgCAEQh0AQhYBQQAzhlCLgbgADQIjQA4hrB6gNIAHgBQAVAHgLARIgEADQhwANg9BeQAAABAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQgPgCABgOgAiVDtQgCgCgBgDQgDgHAGgFQBKg4BZgSIArgJQAigMAXAUIADAEQAAAAABABQAAAAAAABQAAABAAAAQAAABAAAAQABAHgEAGIgBADIgFAAQgGgCgFgEQh/gFhoBPQgEADgEAAQgEAAgEgDgAkmADQAHgRAagFQAegEAagKQA9AAArAiIADAEQglAHg8gMQgngGgmAPQgFACgEAAQgIAAgFgIgAonj8QAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAAAQAjgVAvgHQANgCALgDQBqgMBaAgIACADQiBgGiNAaIgKABQgOAAgLgIgAqTodQAJgOASgGIAngMQBNgGBMAJQASACASAAIAGAEIAGAIIADAEIADAEQiJgEiJAOIABgDgAtAtQQBEAEAlA2IAAADQg2gfhJAHQhRAGg/AYQA+hJBoAGg");
	this.shape.setTransform(112.4,90.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AMeNHQgDgEgBgEIgCgHIAAgBQAGgPATgPQAkghAmgKQAZgIAcgCIAUgBIATAQIACACQgCADgDAAQgXgBgWAEQhCAIg/BDQgBABgEAAIgDAAgAJeJQQAqgeA4gMIAegEIAPgCIAGACQAFADADAFQADAHgCALIgDAEQhwAChgBKQAUgkAhgYgADMIgQA4hmB2gLQAPACAHAKQADAUgIgDQhpAIg9BWQgFACgGACQgOgCAAgMgAiODuIgDgEIAAgBQgCgFACgDQA+gxBEgQQATgGAVgCIArgGQAhgJAXAVQAFAMgBADIgCAGIgCADIgFAAIgFgCIgGgDIgGAAQh5gRhrBNQgEADgEABQgEAAgEgDgAkhgBQAGgRAYgEQAbgEAYgJQBJACAnAwQggAKg2gLQgigHgjAOIgmgWgAoLj5IgBAAQAAgBAAgBQAAAAABAAQAAgBAAAAQAAAAAAAAQAigWAugHQB+gJBPAoIACACIgPABIgSAAIgKgBQg+gIhHADIgfACIguAIIgLABQgNAAgKgHgAqFobIgIABIABgDQALgMASgFIAogIQBOAABHAUIAZAGIAJABQADABAGAFIAJAJQh6gZiNAKgArVsDIgFgCIgFgDIgCgCIgGgDIgJgFQgngRgwAAQhOAAhDAXQAbggAmgOQAvgRA4AHQA0AHAgAmQAIAJAGALIAAADIgBAAIgGgDg");
	this.shape_1.setTransform(114.2,88.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AMgM+IgGgIQgCgDAAgDIAAgBQAAgLAZgKQAqgaAiABQAWAAAWAEIAQADQAMAPAEADIADACQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAAAQgTgGgRgCQg1gNhIA0QgCABgEAAIgDAAgAJfJTQAtgbA3gGIAdAAIAOABIAHADQAEADACAFQADAHgCALIgDACQhtgMhnBEQAWgjAkgUgADHIcQA5hfBxgJQAbADALAVQgDAQgNgHQhiABg+BOIgRAFQgNgBgCgMgAiHDvIgDgEIgBgCQgBgEABgDQA/gyBHgMQATgFAWgBQAWgDAUAAQAhgGAXAXQAFAMAAADQgBAGgBAAIgCADIgGAAIgEgCIgHgDIgGAAQh3gehwBOQgEADgEAAQgFAAgDgDgAipAcQgfgHgeAMQgRgZglgOQAFgPAWgEQAYgEAVgHQBVADAkA+QgOAEgSAAQgUAAgagFgAkCjkIgJgCQg2gPhCgEQgPgBgQABQgVAFgXAEQgUADgOgJIgBAAIABgDQAfgXAugHQB7AABEAvIACACIgPACIgGAAIgLAAgAp+ocIgIACIABgDQAMgKATgDIAogEQBPAHBDAdIAXAJIAJACIAJAGIAJAGQhvgtiVAEgArNrvIgEgDIgFgDIgCgCIgGgEIgHgGQglgVgugEQhMgGhHAWQAcggAogLQAxgOA1ALQAyALAeApQAIALADAKIAAADIgHgDg");
	this.shape_2.setTransform(116,87.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AO+M8QgMgLgNgIQgmgihVAlQgCACgHgCIgGgGIgEgGIAAgBQgEgFAegHQAwgUAeAOQATAHARAKQAHADAEAEQAIASAFACIADACIABABIgBAAgAJfJNQAwgWA3AAIAbAFIAOACIAGADQAFAEACAFQADAIgDAKIgDABQhqgahuA+QAWgjAogRgADEISQA3haBtgGQAnAEAPAgQgJALgSgMQhbgEg/BFQgLAEgNADQgMgBgBgKgAiADpQgDgCAAgDIgBgBQgBgEACgEQA/gyBIgJQAVgEAVAAQAXgBAUACQAggCAWAXQAGANAAADQAAAFgBABIgDADIgFAAIgGgCIgGgDIgGgBQh2grh0BOQgEADgEABQgFAAgDgDgAicAiQgagGgaAKQgTgog0gRQAEgMAUgEQAVgEASgGQBiAFAfBMQgNAEgQAAQgSAAgWgGgAj2jYIgJgCQgtgXg/gLQgOgCgPgBQgWAGgVAEQgTAEgOgJIgCAAIABgDQAegYAtgHQB4AJA4A1IABACIgMAEIgGAAIgLAAgAl/nkIgJgFIgJgDIgVgNIgQgKQAiAOAdATIgIgCgAp4ojIgIABIACgCQAOgHATgCQAWgBATAAQBGAMA4AfQhTghhvABgArFrjIgFgDIgEgEIgCgCIgEgFQgCgDgEgEQgigZgtgHQhKgNhLAVQAcgfArgIQAzgKAzAOQAwAPAbAsQAHALABALIAAACIgBAAIgGgDg");
	this.shape_3.setTransform(117.7,87.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AOwNLIgDgBQgHgCgEgUQgCgGgFgGQgIgNgNgMQAUAKAJAVQAIANAIAQIgBABIgCgBgAMsMNQgEABgGgCIgHgGIgGgFIAAgBIAagDQA4gNAZAZIAGAGQgfgQg7AOgAJfI5QAygSA4AGIAZAJIAOAEIAFAEQAEAEACAGQADAHgDAKIgDAAQhogoh1A3QAZghArgOgAC/H4QA2hUBpgEQAzAGATArQgOAGgYgQQhUgKhAA8QgOAFgRAEQgKgBgCgJgAh6DUQgDgCgBgEIAAAAQgBgFABgDQBAg0BLgFQAVgCAWAAQAWABAUADQAgACAWAZQAGAMAAADQABAGgBABIgDACIgGAAIgGgBIgGgDIgGgBQh0g4h5BOIgIAEQgFAAgDgDgAiRAaQgVgGgWAIQgVg3hCgTQADgLARgEQASgDARgFQBuAHAaBaQgLAEgNAAQgRAAgUgGgAjsjbIgJgDQgkgeg7gSQgNgEgOgBQgWAHgUAEQgTADgOgIIgBAAIAAgDQAbgZAugHQB0ASAsA8IABACIgKAFIgGAAIgLAAgAl8nfIgJgEQgHgCgCgCIgTgQQgdgZgjgSQBAAXAtArIgGABIgCAAgApyo6IgJABIADgBQAPgFAUAAQAWAAATADQApAJAiARQhAgWhRgCgAq4rjIgHgDIgDgDIgFgFIgBgCIgDgFQgBgEgEgEQgggegrgLQhHgThQAVQAcgfAtgGQA2gGAwASQAvASAYAwQAGAMgBAKIAAACg");
	this.shape_4.setTransform(119.6,88.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AOiNbIgFgBQgHgBgBgWQABgIgDgJQgEgVgOgWQgGgKgIgHQgcgLgrADIgKgBIgIgGIAUABQAtgFAYATQAnAPAGAuQAEATACAVIgCAAIgCAAgAMULiIAGAFIAAAAQgQgCAKgDgAL2JVQhjg2h8AyIgBAAQAagiAugJQA2gPA2AMIAZAOIAMAGIAGAEQAEAFABAFQADAJgEAJIgDgCgAC5HfQA3hOBkgBQA/AHAWA1QgUABgcgUQhOgQhAA0QgSAGgUAEQgJAAgDgIgAh2C/QgBgCgBgEIAAAAQgCgFACgEQBBg0BNgBQAWgCAVACQAXACATAGQAgAEAVAaIAIAQQABAGgCABIgDACIgGABIgGgCIgGgDIgHgBQhwhGiABPIgIAFQgFgBgEgDgAiEARQgTgEgQAGQgXhHhSgVQACgIAQgEQAPgDANgEQB8AJAVBnQgJAEgKAAQgPAAgRgHgAjijeQgEgBgEgDQgbglg4gZQgMgEgOgDQgVAIgTADQgTAEgOgHIgCgBIABgCQAZgaAugIQBwAbAgBCIABADIgJAHIgDAAQgHAAgGgBgAmCncQgHgCgDgDIgQgTQgtgzhCgaQBjAaA2BKQgEAEgEABIgIgEgAptpQQAOgCARABQAWACAUAFIAZAJQgtgNg1gCgAptpQIgFABIgEAAIAJgBgAq4roIgEgDIgEgGIgBgCIgBgGQgBgFgCgEQgfgigpgOQhGgahSAUQAcgfAvgDQA4gDAtAWQAtAXAWAyQAGANgEAKIAAACIgBAAIgHgDg");
	this.shape_5.setTransform(121.5,89.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AOMNrQgIAAADgZQADgKAAgLQABgcgLgdQgRgxhEgBQgugDATgMIAHAFIAKAGIAKABQB2AIgFBhQAAAZgEAaQgCABgFAAIgFgBgALzJSQhhhFiDAsIgBAAQAcghAygFQA4gLA2ASIAXASIAMAIIAGAFQAEAFABAFQADAJgEAJIgEgDgACyHFQA2hHBhABQBJAJAbA/QgagDghgZQhIgVhAAsIgsAKQgJABgDgIgACfCxIgHgDIgHgBQhthTiEBQIgJAEQgFAAgEgDQgCgDAAgEIAAAAQgBgFABgEQBCg1BOAEQAXgCAVAEQAXADAUAHQAfAIAVAcIAIAQQABAFgBABIgEACIgGABIgGgCgAh7AKQgNgEgNAEQgYhXhhgWQABgHAOgEQAMgCAKgDQCIALASB1QgIADgJAAQgNAAgOgGgAjZjgQgFgCgDgDQgTgtg0gfQgLgGgNgDQgUAIgUADQgRAEgOgGIgDgBIABgCQAXgbAtgIQBtAjAVBKIABACIgIAJIgDAAQgHAAgFgBgAmBnVQgHgDgCgDIgQgXQgvhGhVggQgTgGgYgFQCaAWA+BzQgEAHgDABIgJgDgApupkIgEAAIAIgDIAWADQgNgCgNACgAqsrnIgHgDIgEgEIgDgFIgBgEIgBgGQABgFgCgFQgcgmgogSQhDgghXATQAcgfAyAAQA5ABAsAaQAqAaAUA1QAFAPgGAJIgBACg");
	this.shape_6.setTransform(123.6,90.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCCCCC").s().p("AN3N9QgJAAAHgcQAFgMACgNQAGghgHgmQgNg9hKgHQgzgIAXgQIAJAEIAKAFIALACQCBAXgUB2QgEAfgJAfQgDABgHABIgFAAgALrJPQhdhTiKAlIgBAAQAcgfA2gDQA7gHA2AYIAVAXIAMAKIAFAFQAFAGABAGQACAIgEAJIgFgEgAFmGeQhAgbhBAiQgZAIgaAFQgHAAgEgFQA1hDBdAEQBVALAeBKQgfgIgngdgAChCqIgGgDIgHgBQhrhhiKBQIgIAFQgGAAgDgEQgDgCAAgFQgBgEACgEQBCg2BRAGQAXAAAVAEQAYAFAUAJQAdAMAVAdIAJAQQACAGgCABIgEABIgGABIgHgBgAh1ACQgJgCgJAAQgahlhvgZQgBgFANgEIAQgEQCVANANCDQgHADgHAAQgLAAgKgGgAjVjjQgEgBgEgEQgKg0gwgmQgKgIgMgEQgVAJgSADQgRADgOgEIgDgBIABgCQAVgdAtgIQBpAtAKBQIAAACIgGALIgDAAQgHAAgFgCgAmEnOQgHgDgDgEIgNgaQgrhRhVgmQgVgJgXgFQgUgFgTgBIgFgBIAJgBQC8ARA5CUQgDAKgDACIgJgDgAqyrsIgEgEIgDgHIgBgDQAAgEABgDQABgFgBgGQgagqgmgWQhBgmhbASQAcgeA1ACQA7AFApAeQApAeAQA4QAFAPgIAJIgBACIgBAAIgGgDg");
	this.shape_7.setTransform(126.1,91.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCCCCC").s().p("ANiNxQAHgPAFgPQAMgngFgtQgIhJhRgOQg5gLAcgWIAKAEIAMAEIALADQCMAlgiCLQgIAlgPAkQgEACgIABIgFAAIgBAAQgJAAAKgdgALjJLQhahgiRAfIgBAAQAegfA5ABQA+gDA1AeIAUAbIAMAMIAFAGQAEAGAAAGQACAJgEAIIgFgGgAFbGRQg6ghhBAaQgdAIgdAGQgHABgEgFQA1g9BYAHQBhAMAiBVQgkgNgsghgACkCiIgHgCIgHgCQhohtiPBQIgJAFQgGgBgDgDQgDgDAAgEQAAgFABgEQBDg3BTALQAYABAVAFQAXAGAUALQAeAPAUAeIAKARQACAGgCAAIgEACIgHABQgDAAgDgCgAhwgFQgFgCgFgBQgbh2h+gbQgCgCALgEIALgDQChAPAJCSQgGACgFAAQgJAAgHgGgAjRjlQgFgCgDgEQgBg7gsgtQgJgJgMgGQgUAKgSAEQgQACgOgDIgEgBIABgCQATgeAtgIQBmA1gCBXIAAACIgFANIgEAAQgGAAgEgCgAmInHQgHgDgCgEIgMgeQgmhbhXgtQgUgKgYgIQgUgGgVgDIgFgBIAIgCQDFAWAuCoQgDAOgDABIgJgCgAqrrrIgHgDQgDgBgBgDIgDgHIAAgEQAAgEACgDQACgGgBgHQgYgugkgZQg/gtheARQAcgeA3AGQA9AIAnAiQAmAhAPA8QADAQgKAJIgBABg");
	this.shape_8.setTransform(128.6,92.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCCCCC").s().p("AM/OWQAzhCgEhXQgEhVhXgVQg+gPAhgbQDAAtg2CyQgNAqgUApQgJAEgLABIgCAAQgJAAgBgKgAHqHzQAfgeA8AEIAAgBQBCACA0AkIAGAFQAFAOAIAMQAHALAJAKQAEAGAAAGQACAKgFAIQhXh3ieAagAFOGDQgzgmhCARIhBAQQgFABgFgEQA0g3BVAJQBsAOAmBgQAAAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQgpgVgxgmgAClCbIgOgEQhph/iaBaQgLgBgBgLQAAgEABgEQBBg5BYAPQBkAHAxBYIADAFQgGAEgHAAIgIgBgAhsgMIgBgFQgdiFiNgdQgDgBAJgDIAFgCQCuARAECgIgBABIgHACQgGAAgEgHgAjPjnQgEgCgDgFQAIhDgpgzQgIgLgLgGQgmAVgggIQARgjAzgHQBlA7gZByIgCABQgHAAgGgDgAmRnCQgDgBgCgFQgpixi4gtIAJgCQDNAbAjC+QACALgIAGQgHAAgGgEgAqzrvQgDgCgBgDIgCgIIAAgEQABgEACgEQADgGAAgHQg9iMibAaQAdgeA5AIQB9AYAXB+QADASgOAJIgHgDg");
	this.shape_9.setTransform(131.3,93.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

	// Layer 1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ANfPNQgGgGgCgJQACgTAPgOIACgDIgfgJQgngTgUgeQhYADhOgLIgFgJIgDgRIgBgJQAagaAVgfIACgDIAigzQi4hxjYgYQhrgMhzAJQgDgEgBgFQgDgIgBgIIAAgJQAZhVgRg7QgFgHgDgLIgBgFQgeg/hXgZIgmAJQgHACgFgBQgPAAgLgOIgCgLIgGAAQhGgGg3gmQgMgmAbgfQAageAbgdQhVhJh0gxIgIgFQgGgFgDgHIgCgFQgBgSAJgOQANgSAMgUQACgDAAgEQglgcgngbQhCgshKgoQgwAJg4gkQgOgJADgRQgEgmAkgRQAggQAQgfQAKhhhbgtQgzgZg5gHIgQgSQgGgIgFgJQgBgEAAgEQAAgWATgOIALgKQAKgKAFgNQgKgNgMgNQiWhYixgkQgCgBgDgEIABgIIAEgJIAPgGIAAgBIAbAFQgEgJABgKIACgSQAugPAvgNQCWgnCggEQBUAJA4AiQBeA6AMCCQAAAEgBAFIAOAAIADgFQAFgEAGgDIAAgBQBIAJA2AfQAYAKAVANIAWAPQBbBJALCZQABAIgCAHIAEADQASAHAPAIQBDApgIBYQgBATgMAPQARALAPAMQAxAVAdAkQAiArAFBCIABAZQAaABAZACQBPAJBIAgQA6AZA2AqQAYBJgrBCQgQAagKAdQA8AAA0ASQBdAQBKBNQBHgPA+APQBCARA3AzQAaAZAAAhIALALQEvBNhfETQgOAogsARQg9AWg+gBQgOATgSARQgRAPgVAEQgNgHgKgKg");
	this.shape_10.setTransform(116,99);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("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");
	this.shape_11.setTransform(118.2,98.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ANSPPIgFgEQAJgEAHgGQAPgNAKgPQAxABAvgRQAbgKAMgVIAGgNQBJjVjsg7IgJgJQAAgZgVgTQgrgogzgMQgwgMg5AMQg5g7hJgMQgpgOgvAAQAIgWANgUQAZgogGgrIAVAGQAyALAsAaQAoAYAeAlIAAAAQBJgOA9APQBEAQA2A0QAaAZAEAgIAKALQAXAKAUAMQAXANAOAPIAFADQAvAZAiAdQANAQAMAQQArA/gMBaIgBAJQgKAcgPAdQgTAlgrAPIgHACQg7AUg6gHQgOALgRAJIgDACQgSAMgWACQgNgFgLgIgAMtOfQgTgHgRgJIgHgCQgLgGgIgHQgyAKg0gGIgIgCQgWgHgSgJIgHgCIgDgJIgDgRIACgIQAbgZAYgbIADgDIAUgYIAEgHIACgEQiNhUilgSQhUgJhaAIIgEgHIgCgNIgBgHQAJgfACgaIAjAIIAYAIIAjAOIABABIAHADIBVAKQCmARB8BnIAEAFIADAEIgIAOIAHAEIgaAnIgCADQgQAYgUAUIABAGIACAOIAEAHQA+AIBEgCQAQAXAfAOIAZAIIgCABIgDAEIgEgCgAhRE4IgHABIgGAAIgTgBIgJgCQgIgDgGgIIgFgHIgBgLIgFgCIgSgIQgzgSgtggQgQgkANgcIAXgzQg1gig+gWIhggiIgIgEQgGgEgEgGIgDgDQgFgPADgMQAGgQAEgSQABgDgBgDIgJgHIgGgGIgogwIgLgNIgWgbQgTgUgXgVIgWgTQgpgGgzglQgNgKgBgPQgDgQABgMIADgIQACgHAIgFQAPgLAGgcQgBgQgEgQIgBgHIgBgHQBLAWBEAjIAmATIARAUQgEAKgIAIQgDAEgGAEQgOALAAAQQAAAEABACQAEAIAFAGIAMAOQAtAFAoATQBGAjgHBLQgMAYgZAMQgbANADAeQgCANALAGQArAbAmgHQA6AfA0AiQAfAVAcAVQAAADgBADIgUAdQgHALACAOIABAEQADAFAEAEIAHAEQBaAnBDA4IggAjIgcgHgAFsERIAAgIIATgtIABgBQAiASAhAYQAEANACAMQgsgNgxAAgABVgbIgQgFIgBgUIAAgGQgBgWgFgUIgBgHQAlAdgBA1IgMgCgAgzjeIgCgBQgOgLgLgLIgCgCQANgPADgSIACgNQABgMgBgMIAEACQA8AwAQBeQgcgegpgTgAhLlHQgRgKgTgIQgqgYg4gGQgFADgEADIgDAEIgKAAIAAgHQgKhlhJgtQgsgbhCgGQh+ADh1AfQgcAHgbAJIgJgLIgKgKIgLgJQgtggg1gPIgQgSIgBgBQgDgGgCgHIABgGQADgMAMgKIAHgIIALgLIAJgLIAGgNIgGgPIgFgHIgEgFIgPgMIgMgJQg3ghg+gTIhFgUQg5gVgxgWIgEgEIAAgBIAAgIIACgJIAMgIIAAgBIAXgDQgDgJACgJIAEgRIAHgDIA6gbIATgGIAFgBIAzgRQANgEANgCQB1gUB0AIQATADARAEIADACQA5ANAqAeQA0AjAcA6IACAGIACAHIAEAQIABAHIABADQAOAYAHAdQACADgBAEIANADIAFgDIAKgEIAAAAIAJACIAaAIQAiAPAhATIAQAJQAYAMATAQIASASQAbAdAMAnQA0AuAVBYIACAPIADADIAEABQAPAHAMAJQAXAPAQATIAEAHQALAYABAbIgNgKg");
	this.shape_12.setTransform(120.3,97.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ANLPRQgHgEgFgGIgCgJIAAgBQANgLAJgNQAqABAogOQAXgJALgSIAFgLQA+i1jLgzIgIgHQAAgVgSgRQglghgsgLQgqgKgwALQgygzg+gKQgjgMgpAAQAHgTAKgRQAdgrgRgxQgkgbgogRQgwgVg2gFIgigCIgBgRQgEgrgXgcQgUgYghgOIgWgPQAIgJABgNQAEg7gtgaQgKgGgNgEIgCgCQABgFAAgFQgCgRgDgPIAEABQBQAJBJAfQA8AaA4ApQAJAPAGAQQAGAQADAQIgBAIQgBAfgLAfIAAACIgSAuIABAGQA9ABA2ATQAxALAuAbQAoAYAcAnQBJgPA+APQBDARA3A0QAZAYAGAgIALAMQAVAMATAOQAWAPAJAQIAFAEQAvAYAkAcIAYAgQAuA+gKBaIgBAJQgMAbgRAcQgVAigrAPIgHADQg8ATg6gKQgOAIgRAFIgEACQgSAKgWACQgNgFgMgHgAMUO/QgEgEgCgGQABgJAFgHIgbgLIgIgBQgKgDgJgFQgxAOg1gHIgHgDQgVgJgQgLIgFgDIgDgJIgDgSIADgIQAcgXAZgaIADgDIAWgXIACgEQh4hGiNgOQhIgIhOAHIgDgGIgCgLIAAgGQANgtgFgiIADACIAfATIABABIAGADQArAGArACQCqAKB2BxIACAGIACADQgFAKgEAKIgCACIAJAGIgWAiIgCACQgNAUgRARIAAAGIADALIADAGQA1AIA7gDQANAUAcAMIAVAHIgBABIgGAGIAKADIAgAHIAAABQgCAGABAIQgMAJgOADQgIgFgHgGgAM9O+IAAAAgAAlGIIgCgEQgrguhWgNIgIABIgFgCIgQgEQgEgBgDgCQgHgEgFgJIgEgIIgBgKIgEgDIgPgKQgxgXgsghQgSgiAGgaIAFgfQAgASAdgGQAyAbAtAdIAzAkQAAAAAAABQAAAAgBABQAAAAAAABQAAABgBAAIgQAaQgGAJABALIACAEQACAFAEADIAFADQBNAhA6AwIgUAWIgJgKgAl+BDQgwgMgxgPIgIgEQgHgDgEgFIgDgEQgHgNABgLIACgfQAAgDgBgDIgKgHIgFgGQgRgagNgZIgIgOIgNgcQgPgWgUgXIgUgVQglgNgxgnQgMgKgCgOQgFgPgBgMQAAgEABgDQgBgGAFgEQAHgJABgbIgIgeIAAgIIgEgnQgCgNgEgNIgCgGIgNgUIgIgLIgLgJQgpgkgzgSIgRgSIgBgCQgBgFAAgFIABgGQAFgKANgIQACgFAFgEIAJgLIAJgMIAHgNIgDgPIgFgHIgEgGIgOgNIgLgKQg3ghg/gRIhFgTQg6gWgtgbIgDgEIgBgBIAAgIIACgJIAKgKIAAgBQAJgDALgCQgCgJADgKIAFgQIAHgEQAdgOAagQIAUgHIAFgCIAygSQANgFANgCQB3gTBzAOQASADASAGIADABQA4APAqAfQAyAkAdA7IACAGIACAIIACAQIABAGIACAEQAQAVAKAbIACAIIANADIAEgBIAKgCIAAgBIAIADIAaAKIBBAlIAQAKQAXAOARAQQAKAKAHAKQAYAfAGAnQA7AlAcBUIADAOIADACIAEACQAOAIANAJQAWAPARATIAEAHQAPAjgGApIgDANQgEARgNAOIABADQAJAMAPALIACABQAuAXAfAjQALAMAJANIgBAAIgOgKQgOgJgQgHQgkgUgxgFIgHAFIgCADIgKAAIABgGQgJhXg/gmQgmgWg5gGQhtADhlAaQggAIgfALQgBAFABATIgSgDQgFACgIAIIgBAGQAAAAABABQAAAAABABQAAAAAAAAQABABAAAAQBkATBYAsIAgARIAPARQgEAJgGAGIgHAHQgNAJAAAOIABAFQADAHAFAFIAKAMQAnAEAiAQQA9AegGA/QgKAUgVALQgVAKgBAVQgugWg0gOgABIgPIgOgHIgBgUIAAgGQgBgXgEgVIgCgIQgHgPgJgOQAzAoAOBMIgbgCg");
	this.shape_13.setTransform(122.5,96.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ANEPUQgIgEgFgFQgHgLgBgIIAAgBIgMgCQAHgHAGgJQAjABAigMQATgHAIgOIAEgJQA0iXiqgpIgHgGQAAgSgPgNQgfgcglgJQgjgIgoAJQgqgqg1gIQgdgKgiABQAFgQAJgOQAYgkgPgoQgegXghgNQgpgSgtgEIgcgBIgBgOQgEgkgTgYQgRgTgcgMQgIgGgKgGQAGgIABgKQADgxgmgWQgIgEgLgEIgCgBQABgFAAgEQgIhUg0goIgMgIQgMgHgOgGQgfgRgogEIgGAEIgCADIgIAAIAAgFQgHhHg1gfQgggTgwgFQhbADhVAWQgaAGgbAJQgBAFABAPIgPgCQgFACgHAGIAAAFIACACQBTAQBKAjIAcAOIAMAOQgDAHgFAFIgGAGQgLAHABAMIAAAEQADAGAEAEIAIAKQAhADAdAOQAzAYgFA1QgIARgSAJQgTAJACAVQgBAJAIAFQAfATAcgFQAqAVAkAYIArAeIgBAEIgOAVQgEAHABAKIABADIgBgBIgDgEQgwgohVgJIgIABIgFgDIgNgIIgFgFQgGgFgEgJIgDgIIgBgKIgDgEIgNgMQgugdgrggQgUghgBgZQgDgYgEgTQg5gahCgKQgxgIgxgNIgIgEQgHgDgFgEIgDgDQgJgMgCgKIgGgdQAAgCgCgDIgJgHIgFgHQgNgbgIgaIgEgPIgFgdQgKgYgSgZIgRgXQghgUgugoQgNgKgDgOQgGgPgDgLIgBgHQgDgEABgDIgFggIgLgdIAAgIIgBgoQAAgNgCgNIgCgGQgEgLgGgKIgHgMIgJgJQgmgogxgXIgRgRIgBgCIABgJIACgEQAHgJANgHQADgFAEgEIAJgMIAJgMIAHgMIgBgQIgEgIIgEgFIgNgOIgKgMQg2gihBgOQgjgIgjgKQg7gXgoghIgDgDIAAgBIgBgIIABgJIAJgLIAAgBQAIgFAKgEQgBgJADgKIAGgPIAHgFQAdgQAYgSIATgHIAFgCQAagJAZgLQAMgFANgCQB5gSByATQASAEARAGIADABQA3ARAqAhQAyAlAdA7IACAGIACAIIABAQIABAHIACADQASAUAMAZIADAHIANAFQAAAAABgBQAAAAABAAQABAAAAAAQABAAAAAAIAKAAIABAAIAHAEQAMAGANAFQAeAVAhAUIAPALQAXAOAQASQAJAKAHALQAUAgABApQBBAbAjBPIAFAOIADACIADACQAOAIAMAKQAWAPARATIAFAHQANAkgIAoIgDANQgFARgNAOIAAACQAHANAPALIACABQAuAYAgAjQAWAXAQAdIACAJQAEAVABAXIAAAGIAAAUIAMAKIAfADQBQAIBKAgQA9AaA4AoQAKAPAHAPQAIAPAEAPIAAAJQABAfgJAfIAAACQgGAXgLAYIAEAFQA8ABA3ATQAxANAuAbQAoAZAaAoIABAAQBJgPA+APQBEAQA2A1QAaAYAIAgIAKALQAUAOASAQQAUARAEATIAFADQAvAYAmAaIAZAgQAxA/gJBZIgBAIQgOAbgTAaQgYAggqAPIgHADQg9ATg5gNQgPAFgSACIgDABQgTAIgWACIgagKgAJoOsIgIgEQgUgLgNgOIgEgEIgDgJIgCgRIAEgIQAdgXAbgYIADgDIAUgSQhjg3hzgMQg9gHhBAGIgDgFIgBgJIgBgFQANgvgJggIgCgDQAjAEAkAAQCuACBvB8IABAFIABAEQgFAKgEAKIgDAHIgDADIAMAHIgSAcIgBACQgLARgOAOIAAAEIACAKIADAFQAsAGAygCQALAQAYAKIASAFIgCABQgEAFgCAFIgQgFIgIABQgLgBgJgCQghAMgjAAQgQAAgRgDgAEjJ6IgGgEIgBgBQgQgMgKgMIgOgQIgSgIIAKgDQAxAOASAiIAAADIADAHIgPgCgABwIZIgIgNIgEgHQgPhCgqgoQA/AbAvAmIgcAgQgNAPAEATIgEgFg");
	this.shape_14.setTransform(124.7,95.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AM9PXIgOgHQgKgJgEgHIgBgBIgggFIgFgBIADgCQAIgIAHgIQAcAAAbgJQAPgFAHgMIADgHQAoh4iIggIgFgFQgBgOgMgKQgZgWgegHQgcgGghAHQghgggrgHQgYgHgbAAQAEgMAHgLQASgdgLggQgZgRgagLQgigOgkgDQgLgBgMABIAAgMQgEgcgPgTQgOgQgXgIIgPgKQAFgGABgIQACgngfgRQgHgEgIgDIgBgBIAAgHQgHhDgqgfIgKgHQgKgGgLgEQgZgNghgDIgFADIgBACIgGAAIAAgEQgHg5grgZQgagPgngEQhIADhFARIgrAMQgBAEAAANIgNgCQgDABgGAGIgBADIADACQBCALA7AdIAXALIAKALQgCAFgEAEIgFAFQgIAGAAAJIABAEIAEAHIAIAIQAZACAYALQAoATgDAqQgHAOgNAGQgPAHABAPQgxgahJgFIgJABIgEgDIgJgLIgFgHQgEgHgDgJIgCgIIAAgKIgDgEIgKgQIhXhCQgWgggHgWQgKgXgNgQQg5gXhFgEQgygDgxgMIgJgCQgGgDgGgEIgEgDQgKgKgFgJQgHgMgGgPIgDgGIgKgHIgEgGQgJgdgDgaIAAgQQABgQACgOQgFgagPgbIgPgYQgcgdgtgoQgMgLgFgOQgIgNgEgMIgEgFQgFgCgBgDQgKgFgJgXIgOgdIAAgHQAAgWACgTQACgNAAgNIgBgHIgIgVIgGgNIgIgKQgjgrgugbIgRgSIgCgBIAEgHIADgEQAJgHAOgFIAGgKIAIgMIAJgNIAIgMIACgQQgDgEgBgEIgEgGIgMgPIgJgMQg2gkhCgLQgjgHgkgJQg7gYgkgnIgDgEIAAAAIgBgIIABgJIAHgMIAAgBQAGgHAJgGQAAgJADgJIAIgQIAHgFQAcgRAWgUIAUgIIAFgCQAagKAYgLQANgHAMgCQB7gRBwAYIAkAMIACACQA3ASAqAiQAwAnAfA7IACAHIAAAHIABARIAAAGIACADQAVASAPAYIADAHIANAFIAFABIAJABIABABIAHAEQALAHANAFQAcAYAgAWIAQALQAWAQAPATQAIAKAGAMQASAigFApQBHASApBKIAHANIADADIADACIAaATQAVAQASASIAEAIQANAkgKAnIgEANQgGARgNANIgBADQAEANAQAMIACABQAuAYAiAjQAVAXASAcIACAJQADAVABAXIAAAGIAAAUIAKALIAfADQBRAKBKAgQA9AZA5ApQALAOAJAOQAJAOAGAPIABAIQACAggGAfIgBACQgEAZgLAXIAFAEQA8ACA4ATQAxAOAuAbQApAaAYAoIABAAQBJgOA+AOQBFAQA2A1QAZAZALAfIAJAMQATAPARASQASATAAAVIAFADQAuAZAoAYIAaAgQAzA+gGBYIgCAJQgQAagVAYQgaAfgqAOIgHADQg+AUg4gRQgQACgSgCIgDABQgUAGgWABQgOgDgNgFgAAIGXQgGgDAAgHIAAgDIAQAKIADACQAGAGAIAFIADACQgOgCgQgKg");
	this.shape_15.setTransform(126.9,94.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AOjPcQgRgBgSgGIgDABQgVAEgWABIgcgHIgPgFIgUgMIgCgBIgggEQgVgDgUgFIgIAFQgKAFgKACQguAZg3gLIgIgGQgRgQgIgTIgDgFIgBgJIgBgRQADgFADgEIA8gqIAEgCIAGgEIAZANIgKAQIgBABQgGAKgIAJIAAADIABAFIACADQAbAEAfgCQAHAKAQAFIALADIgBABQgEAEgBAGQABADACACIAIAFQAIgBAGgFQAGgGAFgGQAWAAAUgGQALgEAFgIIACgGQAehZhogXIgEgDQAAgKgKgIQgTgQgXgFQgVgEgZAGQgOgNgQgHQgZgXgdgQQAHgRgHgTQgTgNgUgIQgagKgbgCIgSAAIAAgIQgDgWgMgNQgLgMgRgGIgMgHQAEgFAAgGQABgcgXgNIgMgFIgBgBIAAgFQgGgxgggYIgIgFIgQgHQgTgJgZgDIgDADIgCABIgEAAIAAgDQgGgqghgTQgUgLgegDQg4ACg1ANIghAKIgBAMIgIgBIgIAFIAAACIABACQAxAHAtAVIASAHIAIAIQgCAEgDADIgEAEQgGAEABAHIAAADIAEAFIAFAGQAUACASAHQAfAOgBAfQgFAKgKAFQgJAFgBAIIgEgCIgGgGIgKgMIgGgGQgjg4g4gfIgQgJIgEgCQg5gdhVgCIgJABIgDgFIgHgOIgCgIQgDgIgCgKIgCgIIAAgLIgCgEIgHgSQgpgmgqgiQgYgegPgVQgRgVgUgNQg8gThGACQgzABgygKIgIgCIgNgFIgEgDQgNgIgIgIQgKgLgKgPIgEgFIgKgHIgEgHQgFgfADgbIADgQQAFgRAHgOQgBgcgMgdIgMgaQgZgkgqgqQgMgLgHgNIgPgYQgDgEgCAAIgNgDQgRgCgOgXQgJgMgIgPIAAgIQAAgWAFgSQAEgNACgOIgBgHQgCgMgDgKIgFgPIgHgKQgfgugtgfIgRgSIgCgBIAHgGIAEgCQALgGAOgEIAFgKIAIgMIAJgNIAIgNIAFgQQgDgEgBgEIgDgGQgFgJgGgHIgJgOQg1gkhDgKQgkgFgkgJQg8gZgggsIgCgEIAAAAIgBgIIAAgJIAFgNIAAgBQAFgJAIgIQABgJAEgJIAIgPIAIgGQAbgSAUgXIAUgIIAFgCQAagKAYgNQAMgIAMgBQB9gRBwAeIAjANIACACQA2ATAqAlQAvAnAfA8IACAHIABAIIgBAQIAAAHIACACQAYARARAWIAEAGIAMAGIAGACIAJAEIABAAIAHAGQAKAHANAGQAZAbAgAXIAQAMQAWARAOATQAHAMAFAMQAOAjgJArQBNAIAwBGIAIAMIADADIADACIAZAUQAVAQASASQADADACAFQALAmgMAmIgEAMQgHARgOANIgBACQACAPAQALIACABQAtAZAjAjQAWAXATAbIACAJQADAVABAXIAAAGIAAATIAHAPIAgADQBRAKBLAfQA9AaA6AoIAWAaQAKAOAIAOIABAIQAEAggEAgIAAACQgDAagLAXIAHADQA8ADA4ATQAyAOAtAcQAqAaAWAqIABAAQBKgPA+APQBGAQA1A1QAZAYANAgIAJAMQASARAPAUQARAVgFAWIAFAEIBYAuQAMARAOAQQA2A9gFBYIgBAJQgTAZgWAXQgdAcgqAOIgHADQgfAKgeAAQgdAAgcgKgAEeKWIgFgHIgBgBQgKgMgEgNQAjAPAcAVQgWgBgVgCg");
	this.shape_16.setTransform(129.1,94.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AOePgQgRgDgSgJIgEAAQgVACgWABIgdgFIgQgEIgagJIgDAAIgggDIgqgGQgFADgEADQgKAIgKAEQgtAdg4gLIgIgIQgPgSgGgWIgBgGIgBgJIgBgRIAHgIIA8gmQATAGATAJIgHALIgBAAQgDAHgFAFIAAACIABAEIABACQATACAVgBQAFAGAMADIAHACIAAAAQgDADAAAEIACADIAFADQAGAAAEgEIAIgIQAPAAANgDQAHgDADgFIACgEQASg5hGgOIgCgCQgBgHgHgFQgNgKgQgCIgOgBIACgHQhFh1h8gQQgEgJgKgGIgIgCIgBgBIAAgEQgFgggWgPIgGgDIgLgFQgNgGgRgBIgDABIAAACIgEgBIABgBQgFgdgXgMQgOgHgVgBQgnABglAJIgEABQgbgSgcgPIgGgGIgMgLIgGgGQgtgzg/gbIgSgHIgEgCQg+gXhUACIgKABIgCgGIgDgSIgBgKIgDgTIgBgJIABgKIgCgFIgEgUQgngrgpgiQgbgdgVgTQgZgVgcgKQg9gPhIAIQg1AGgxgIIgJgCIgNgEIgFgCQgOgHgKgHQgPgKgNgNIgFgFIgLgHQgCgEgBgDQgBghAJgdIAGgQQAJgSALgPQAEgdgJgfIgKgcQgVgrgogrQgLgLgIgNIgTgXQgEgEgDAAIgSAAQgaAAgTgVQgLgLgJgPIAAgIQABgWAHgTQAGgNAEgNIAAgIIgDgYIgDgPIgGgLQgdgygqgiIgSgSIgCgCIAKgDIAFgCQANgEAPgCQABgGAEgFIAHgNIAIgNIAJgNIAIgQIgEgJIgDgGIgKgRIgIgPQg1glhEgHQgkgDgkgKQg+gagbgxIgBgEIgBgBIgBgIIAAgJIADgOIAAgBQADgLAHgJQACgJAFgJIAJgOIAIgHQAagTATgZIAUgIIAFgDQAagLAXgOQAMgIAMgCQB/gPBvAjQASAHARAIIABABQA2AVAqAmQAuApAfA8QACADAAAEIAAAIIgCARIAAAGIADADQAaAOAUAVIAFAGIAMAHIAFADIAJAFIABABIAGAGQAKAJANAGQAXAeAgAYIAPAMQAWASAMAVQAIAMADANQAMAlgQArQBUgBA3BBIAJAMIADADIADACIAZAUIAnAjQADADABAFQALAngOAlIgFANQgIAQgOAMIgCADQAAAPAQAMIACABQAtAaAkAiQAYAWATAbIACAIIADAtIAAAGIAAAUIAFARIAgADQBRAKBLAfQA/AaA6AoIAZAYQALAMAKAOIABAJQAFAggBAhIAAACQAAAagMAXIAIACQA9ADA4AUQAxAPAvAcQAqAbAUArIABAAQBKgPA+AOQBGAQA2A2QAYAYAQAfIAJAMQAQATAOAWQAQAXgKAYIAEAEQAuAYAsAVQAMARAOAPQA5A9gDBYIgBAJQgVAYgYAVQgfAagqAOIgHADQgdAJgbAAQggAAgfgNgAEbKgIgFgHIgBgBQgKgUgBgTIAAgGQAJABAIADQAWAJAAAUQgDAHgHADQgHAEABAHIgGgBg");
	this.shape_17.setTransform(131.3,94.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AOaPmQgTgHgRgNIgEABIgsAAIgegEIgRgCIgggFIgEAAIghgCIgqgEQgGAEgEAEQgJAKgKAHQgsAhg6gNIgIgIQgOgVgCgYIgBgHIgBgJIAAgRQAEgFAFgDIAkgWIAJAAQAdABAZALIgDAEIAAABIgEAFIABABIAAACIAAABIAWAAQAEADAIABIAEAAIAAAAQAAAAgBABQAAAAAAAAQAAABAAAAQAAABAAAAIAAACIAEABQADAAACgCIAEgEQAJAAAGgBQAEgBABgCIABgCQAHgbglgFIgBAAQgBgDgEgCQgHgEgJgBQgHAAgJACQgIgFgKgCIATgJIACgJQABgLAFgKIADgEIADgIQhTiljAAeQgtAGgqgEIgFgJIgBgBQgJgWADgWQACgQADgPQgyg3g6glIgHgFIgNgLIgHgFQg3guhFgWIgSgGIgEgBQhFgShTAGIgKABIgCgHIAAgVIAAgMIAAgVIAAgIIABgLIgBgGIgCgWQgjgwgqgiQgcgcgcgRQgggTgkgIQg/gLhKAOQg2AKgxgGIgJgBIgOgDIgFgCQgQgFgNgGQgSgJgSgMIgGgFIgKgHQgDgEAAgDQADgiAOgfIAKgRQANgSAPgPQAIgfgGgiQgDgPgEgPQgRgygmgsIgUgXIgXgXQgEgDgEAAIgYADQgiACgYgUQgNgKgKgPIAAgIQABgWALgTIANgbIABgIIgBgYIgCgRIgFgLQgZg1gpgnIgRgSIgCgBIAMgCIAHgBIAdgDQACgGADgGIAGgMQAEgIAFgGIAIgNIAMgRQgDgEgCgEIgCgHQgDgJgFgJQgFgHgDgJQg0gmhGgFQgkgCglgJQg+gcgXg2IgBgEIAAAAIgCgIIgBgJIABgPIAAgBQADgNAGgLQACgJAFgJIAKgOIAJgHQAZgVARgbIAUgJIAFgDQAagLAXgQQANgJALgBQCBgOBtApQATAHARAIIAAACQA1AWArAoQAsAqAhA9IACAHIgBAIIgDARIgBAGIAEACQAcANAWATIAGAGIAMAIIAFAEIAJAHIABABIAGAHQAJAJAOAHQATAhAhAZIAPANQAVATALAWQAHANADAOQAIAmgVAsQBagKA+A8IALAMIADACIACACIAYAWIAoAiQADAEABAEQAJApgPAkIgGAMQgIAQgPAMIgDADQgDAQARAMIACABQAsAaAlAiQAZAXAVAZIACAJQACAWAAAXIAAAGIAAATIACAUIAhADQBRAKBMAfQA/AaA7AoIAbAWQANAMALANIACAJQAHAgACAhIgBACQACAbgMAYIAJABQA9ADA5AUQAxAQAvAdQArAbASAsIABAAQBLgPA9AOQBHAQA2A2QAYAYASAfIAIAMQAPAVANAYQAOAZgOAaIAEAEQAtAYAuATQAMARAPAQQA8A8gCBXIgBAJQgXAYgaATQghAYgqAOIgIADQgaAIgaAAQgiAAgggPg");
	this.shape_18.setTransform(133.5,93.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AIVP7QgFgEgDgFQgNgXAAgbIABgjIAJgHQAwgbA2gXIABgIQAAgPAJgMIAEgIQhMivjDAlQguAJgqgFIgFgJQgIgZAGgaQAEgRAGgRQitjikjAmQgCgEABgEIAHg9QACgZAAgaQh9jIjtA+QiCAhhihCQgDgEABgEQAIguAggnQAQgUAUgOQANghgEgkQgLhwhZhDQgGgDgFABQhWAUgog1IAAgIQACgXAMgSQAJgNAIgPIACgIIABgaIAAgRQgbhPg5g0IA2AAQAGgUANgTQALgQAMgOQgDgEgBgFQgEgNgGgMQgEgIgCgJQg0gnhHgDQglgBglgIQhCgfgQg+QgQg8AugpQAZgWAPgeIAUgJQAdgNAZgTQAMgJALgBQCZgQB6BCIAAACQBqAwBBB5QACADAAAEIgBAJIgEARIgBAGIAEACQA5ATAmAuQAIALANAHQASAkAgAaQBZBJg4BgQBsgWBKBKQAeAeAhAbQADAEABAEQAIAqgRAjQgMAZgXASQgEARATAMQBIAuA7A+IABAIIACA0IAAApQC5APCdB0QAPALAMANIADAIQAIAiAEAjQADAbgMAYQB2ADBrBDQAsAbAQAtQDqgtBqDmQANAbgTAcIAEAEQAtAZAwARQAMARAPAPQA/A8AABXIgBAJQg7A3hPAYQhXAahFg+QhtgIhsgBQgGAEgEAGQglAwg1AAQgPAAgQgEgAJ5OVQgvARgZAbQgDADAAAEQArAEAog4QAAAAABgBQAAAAAAgBQAAAAAAAAQAAgBgBAAIgIAEg");
	this.shape_19.setTransform(135.6,93.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AOZPmQgSgHgSgNIgEAAIgrAAIgegDIgRgDIgigEIgDAAIghgCIgrgDQgFADgEAFQgKAKgKAHQgsAhg5gNIgIgIQgOgVgDgZIAAgGIgBgJIAAgTIAJgHIAegRQAKgCAKABQAaAAAXAJIgCAFIgDAFIAAABIAAABIABABIAUAAQADADAFABIAGgBIAAABIgBACIABACIADABIAFgCIAEgEIANgBQAEAAABgCIAAgCQAHgXgigFIgBAAQgBgDgDgBQgHgEgIAAQgHAAgIACQgJgGgMAAIgHgBIAdgOIACgJQAAgLAGgKIACgFIADgHQhSimjAAeQgtAHgqgFIgFgIIgBgCQgJgWAEgWQABgQAEgPQgyg4g6glIgGgGIgNgKIgIgFQg4guhGgVIgSgGIgEgBQhFgRhTAGIgKABQgCgEAAgDIAAgWIABgMIAAgVIAAgIIABgLIgBgGIgCgXQgjgwgpgiQgdgbgdgSQgggSglgIQg/gKhKAOQg2AKgygFIgIgBIgPgDIgFgCQgPgFgOgGQgTgJgSgMIgGgEIgKgHQgDgFAAgDQADgiAPgfQAFgJAGgIQANgSAQgPQAIgfgGgiQgDgQgEgPQgQgzgmgsIgVgXIgWgXQgFgDgEABIgYACQgjACgZgTQgNgKgKgOIABgJQABgWAKgTQAHgNAGgOIACgIIgBgYIgCgRIgFgLQgYg2gpgnIgSgRIgBgCIAMgCIAHgBIAdgDIAFgLIAGgNIAJgOIAJgMIALgRQgDgEgBgFIgCgGQgEgKgFgIQgEgIgDgIQg0gnhGgEQglgCgkgJQg/gcgWg3IgBgEIgCgIIgBgJIABgQIAAgBQACgMAGgMQADgJAFgJIAKgNIAIgIQAagVARgbIAUgJIAFgDQAagLAXgQQAMgJALgBQCCgOBtApQASAHARAJIABACQA1AWAqAoQAtAqAgA9QACADAAAEIgBAIIgDARIAAAGIADADQAcAMAXATIAGAFIALAJIAGAEIAJAHIABABIAGAHQAJAKANAHQAUAhAgAZIAPANQAWATALAWQAGANADAOQAIAmgVAsQBagLA+A8IAMAMIADACIACACIAYAWIAoAiQADAEABAEQAJApgQAkIgGANQgIAPgPAMIgDADQgDAQARAMIACABQAsAbAlAhQAZAXAWAZIABAJIACAtIAAAGIAAAUIACATIAhADQBRALBMAfQA/AZA7AoIAcAXQANALALANIACAJQAHAgACAiIAAACQABAagMAYIAKABQA8ADA6AUQAxAQAuAdQAsAbARAsIABAAQBLgPA+APQBHAQA1A1QAYAYASAfIAJANQAOAUANAZQAOAZgOAaIADAEQAuAZAuASQAMARAPAQQA8A8gBBXIgBAJQgYAYgaATQgiAYgpANIgIADQgaAIgaAAQgjAAgggPg");
	this.shape_20.setTransform(133.7,93.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AOdPiQgRgFgSgJIgEAAQgVACgWAAIgdgFIgQgDIgcgIIgDgBIgggCIgqgFQgFACgEAEQgKAIgKAFQgtAeg5gMQgEgDgDgEQgQgTgEgXIgCgGIgBgJIAAgSIAHgHIA6gkQAVAGATAKIgGAJIAAABIgIAKIAAACIABADIABACQARACATgBQAFAGAJADIAJAAIAAABQgDACAAAEIACADIAFADQAFgBADgDIAIgHQANAAAMgDQAHgDACgEIACgEQAQgzg/gMIgDgCQAAgGgHgEQgMgJgOgCQgIgCgJABIADgEIABgFIACgHQhFh7iCgNQgGgWgSgLIgFgDIgKgDQgMgGgQgBIgCABIgBABIgCAAIAAgBQgFgagVgKQgNgHgSgBQgeABgdAGQgwgtg3gdIgGgGIgMgLIgHgGQgvgyhAgZIgRgHIgDgCQhBgWhTADIgKABIgDgHIgCgSIgBgKIgCgUIgBgJIABgKIgCgFIgEgVQgmgsgpgiQgbgcgWgTQgbgUgdgKQg+gOhIAJQg1AGgxgHIgJgCIgOgEIgEgBQgPgHgLgHQgPgKgPgNIgFgEIgKgHQgDgFAAgDQAAghAJgdQADgIAFgIQAJgSAMgPQAFgdgJggQgEgPgFgOQgUgtgogqIgUgYIgTgXQgEgEgDAAIgUABQgbAAgUgVQgLgLgJgOIAAgJQAAgWAIgSQAGgNAFgOIAAgIIgDgYIgCgPIgGgLQgcgzgqgjIgSgSIgCgBIALgEIAFgBIAcgGIAFgLIAHgMIAIgOIAJgNIAJgQQgDgEgCgFIgCgGQgEgJgGgIIgIgPQg0glhFgHQgkgDglgJQg9gbgagyIgCgEIAAgBIgBgIIgBgJQABgHACgHIAAgBQADgLAHgKQACgJAEgJIAKgOIAIgHQAagUASgZIAUgIIAFgDQAagLAXgPQANgIALgBQCAgPBuAkQASAHASAIIABACQA1AVAqAmQAuApAgA8QACADAAAEIAAAJIgDAQIAAAGIADADQAaAOAVAUIAFAGIAMAHIAFAEIAJAGIABAAIAHAGQAJAJANAHQAWAeAgAYIAQANQAVASANAVQAHAMADANQALAlgQAsQBUgDA5BAIAJAMIADADIADACIAYAVIAoAiIAEAIQAKAngOAlIgFANQgIAQgOAMIgDADQAAAQARALIACABQAsAaAkAiQAYAXAUAaIACAIQACAXABAWIAAAGIAAAUIAEARIAgADQBRALBMAfQA+AZA7AoIAZAYQAMANAJANIACAJQAGAggBAhIAAACQAAAagMAXIAIADQA9ACA5AUQAxAPAuAdQArAaATArIABAAQBLgOA+AOQBGAQA2A2QAYAXAQAgIAIAMQAQATAOAXQAQAXgLAZIAEADQAuAZAtAUQALARAPAPQA5A9gDBYIgBAJQgVAYgZAUQgfAagqAOIgHADQgdAJgbAAQggAAgfgNg");
	this.shape_21.setTransform(131.7,94.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AOhPdQgRgCgRgGIgEABQgUADgWABIgdgHIgPgEIgWgMIgCAAIghgEIgogHQgFACgEADQgKAGgKADQguAag3gLQgFgCgDgEQgQgRgIgUIgCgFIgBgJIgBgSIAGgIIA9gpIAEgDIADgCQAOAHAOAIIgJAOIgBABIgMAQIAAADIABAFIABADQAZADAcgBQAGAIANAFIAMACIgBABQgEAEAAAFIACAFIAIAEQAHgBAFgEQAGgGAEgFQAUAAASgFQAKgEAFgHIACgGQAahPhegVIgDgCQgBgJgIgHQgSgPgUgDQgTgEgUAEQgigrgrgZQAAgIgDgHQgRgMgTgHQgXgIgZgCIgQAAIAAgIQgDgTgLgMQgJgKgQgGIgKgGQADgEAAgFQABgagWgLIgKgFIgBgBIAAgEQgGgtgdgUIgHgEQgHgEgIgDQgRgJgXgBIgDABIgBACIgEAAIAAgDQgGgmgegQQgSgLgbgCQgzACgwALIgeAJQgBACAAAJIgJgBIgHAFIAAAAIgQgIIgRgJIgDgCQg7gchUAAIgKABIgDgFIgFgQIgDgJIgEgSIgBgIIAAgLIgCgEIgGgSQgogogrghIgpgzQgTgVgXgNQg8gRhHAEQgzACgygJIgIgCIgOgFIgEgCQgMgIgJgIQgMgLgLgOIgEgFIgKgHQgDgEgBgDQgEgfAFgbIAEgRQAGgRAIgPQAAgcgLgeQgFgOgGgMQgYgngpgpQgMgMgHgNIgQgXQgEgEgCgBIgOgBQgUgDgQgVQgJgMgJgPIABgIQAAgWAGgSQAEgNACgOIAAgIIgFgWIgEgPIgHgKQgegwgsggIgSgRIgBgCIAHgFIAFgCQALgFAOgEIAGgKIAHgMIAJgOIAIgMIAGgQIgEgJIgDgGQgEgIgGgIQgFgGgEgIQg1glhDgIQgkgFgkgJQg9gagegtIgCgEIAAgBIgCgIIAAgJIAFgMIAAgBQAEgKAIgIQABgKAEgIIAJgPIAHgHQAbgSAUgXIAUgIIAFgCQAagLAYgNQAMgIAMgBQB+gQBvAfQASAGARAHIACACQA2AUAqAlQAvAoAfA8QACADAAADIAAAIIgBARIAAAHIADACQAYAQASAVIAEAHIAMAGIAGADIAJADIABABIAGAFQALAJANAGQAYAcAgAWIAQAMQAWARANAVQAHALAFANQANAkgLAqQBPAGAyBEIAJANIADACIACACIAaAUQAUAQATASIAEAIQALAngMAlIgFANQgHAQgOANIgCADQACAPAQALIACABQAtAZAjAiQAYAYASAaIACAJQADAWAAAXIAAAFIABAUIAGAPIAgAEQBRAJBLAfQA+AbA6AoIAXAZQAKANAIAOIACAIQAEAhgDAgIAAACQgCAZgLAXIAHADQA8ADA4AUQAyAOAtAcQArAaAVAqIABAAQBKgOA+AOQBGARA1A1QAZAXAOAgIAJAMQARARAPAWQAQAVgGAXIAEAEIBZAtQAMARAOAQQA3A9gEBYIgBAJQgUAZgXAWQgdAcgqAOIgHACQgeAKgdAAQgfAAgdgLg");
	this.shape_22.setTransform(129.7,94.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AOlPZQgQABgSgEIgDACQgUAFgWABIgcgIQgIgDgGgDQgLgJgFgGIgCgBIgggEIgRgDIAIgGQAIgGAGgIQAaAAAYgIQANgFAGgKIADgGQAkhsh7gcIgFgEQAAgNgLgJQgXgUgbgGQgagFgdAHQgfgegmgFQgVgHgZABQAEgMAGgKQAQgZgLgdQgWgPgYgKQgegMghgCQgKgBgLAAIAAgKQgDgagPgQQgMgOgUgIIgOgJQAFgFAAgIQACgigcgQQgGgDgIgCIgBgCIAAgGQgHg8gmgcIgJgGIgTgJQgWgLgegDIgEADIgCACIgFgBIAAgDQgHg0gngWQgXgNgjgEQhCADg/APIgnALQgBAEABALIgMgCIgJAGIAAADIACACQA8AKA1AaIAUAJIAJAKQgCAFgDADIgFAEQgGAGAAAIIAAADIAEAHIAHAHQAXACAVAJQAmASgDAlQgGAMgMAGQgHAEgDAFQgOgMgPgKIgPgKIgEgCQg2ghhVgEIgJABIgEgEIgIgMIgEgIQgDgHgDgJIgCgJIAAgKIgDgEIgIgQIhWhFQgWgfgLgWQgNgWgPgPQg7gVhFgCQgygBgygLIgIgDQgHgCgGgDIgEgDQgLgJgGgJQgIgMgIgPIgDgFIgKgHIgEgHQgIgdAAgbIABgQQACgRAFgOQgEgagOgcIgOgZQgbgggrgpQgMgKgGgOIgNgYIgEgFQgHgCgCgCQgNgEgLgXIgPgcIAAgIQgBgWAEgSQADgNABgOIgBgHIgHgWIgFgNIgIgKQgigtgugcIgRgSIgCgBIAGgHIADgDQAKgGAOgFIAGgKIAIgMIAIgNIAIgMIAEgRIgFgHIgDgGIgLgQIgJgNQg2gjhCgLQgkgGgkgJQg8gZgigpIgCgDIAAgBIgBgIIAAgJIAGgMIAAgBQAGgIAJgHQAAgJAEgJIAHgPIAIgGQAbgRAWgVIAUgIIAFgCQAagKAXgNQANgGAMgCQB8gRBwAbIAkAMIACACQA2ASAqAjQAwAnAfA8IACAGIAAAIIAAARIAAAGIADADQAWARAQAYIADAGIANAGIAFABIAJACIABABIAHAEQALAIANAFQAaAZAhAXIAPALQAWAQAPATQAIALAFAMQAQAigGAqQBJAOAsBJIAIANIADACIACACIAaATQAVAQASATQADADACAEQAMAmgLAmIgEANQgGARgOANIgBACQADAOAQAMIACABQAuAYAiAjQAWAXASAcIACAIQADAWABAXIAAAGIAAAUIAJAMIAfADQBRAKBLAfQA9AaA5AoQALAOAKAOQAJANAHAPIABAIQADAggFAgIgBACQgDAZgLAXIAFAEQA9ACA3ATQAyAOAtAcQAqAZAXApIABAAQBKgOA9AOQBGARA2A1QAYAYAMAfIAJAMQATAQAQATQASAUgCAVIAEAEQAvAYAoAXIAaAhQA1A9gGBZIgCAIQgRAagVAYQgbAdgrAPIgHACQggAKgeAAQgdAAgbgIgAJQPHQgEgCgDgDQgSgPgJgRIgEgFIgBgJIgCgSIAGgIIA6grIAEgCIALgIIAVALIgNATIgBACQgIAMgJAKIAAADIABAHIACAEQAhAEAkgCQAIAMARAHIAPADIgBABQgGAFgBAIQABADACADIgFgCIgIADQgLAEgJAAQghAQgkAAQgQAAgRgDgAEGJpIgIgVIgdgSQAcAOAXASIgMAOIgCgHg");
	this.shape_23.setTransform(127.8,94.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("ANAPVQgHgDgGgFQgIgKgDgHIAAgBIgZgEQAJgIAGgJQAgAAAegKQASgGAHgNIAEgIQAuiIiagkIgFgGQgBgPgNgMQgcgZgigIQgfgHglAIQgmglgvgIQgbgIgeAAQAEgOAIgMQAVghgNgkQgbgUgegMQglgPgpgEIgagBIAAgNQgEgggRgVQgPgSgagKIgQgKQAFgIABgJQADgsgjgTQgHgEgKgDIgBgCIAAgIQgHhLgvgkIgMgHQgKgHgNgEQgcgPgkgEIgGAEIgCACIgHAAIABgEQgIhBgwgcQgcgRgrgDQhSABhNAUQgZAGgXAIQgBAEAAAOIgOgCQgEABgGAGIgBAEIADADQBKANBDAhIAZAMIALAMQgCAGgFAFIgGAFQgJAHAAAKIABAEQACAFAEAEIAIAJQAdADAaAMQAuAVgEAwQgHAPgQAIQgRAIACATQgBAIAHAEQAcASAZgFQAlATAiAWIAnAaIgBAEIgMATQgEAGABAJIABADQABADADACIAEADQA7AYAsAkIgZAdIgCADQgXgJgXgGIgGgHIgIgNIgFgHQgUhAguglQgIgFgGgHIgDgDQgyglhVgIIgJABIgEgDIgLgJIgFgGQgFgGgEgJIgDgIIAAgKIgDgEIgLgOQgtgfgrghQgVgggEgYQgHgXgIgRQg5gZhEgHQgxgGgxgMIgJgDQgHgDgFgEIgDgDQgKgLgEgJIgJgdIgCgGIgKgHIgEgFQgLgdgGgaIgCgPQgBgQAAgOQgIgZgQgaIgQgXQgegZgugoQgMgKgFgOIgKgaIgCgFQgEgEAAgCQgGgGgGgZIgNgdIAAgHQgBgWACgSQABgNgBgNIgCgHIgJgVIgGgNIgJgJQgkgqgwgYIgRgSIgCgCIADgIIADgEQAIgIANgGIAGgJIAJgMIAJgMIAHgNIABgQIgEgHIgEgGIgMgPIgKgMQg2gihBgNQgjgHgkgKQg7gYgmgjIgDgEIAAgBIgBgIIABgJIAIgLIAAgBQAHgGAJgFQAAgJADgKIAHgPIAHgFQAcgQAYgUIATgHIAFgCQAagJAYgMQANgGAMgCQB6gRByAVIAjALIADACQA3ARAqAiQAxAmAeA7IACAGIABAIIAAAQIABAHIACADQAUATANAZIADAGIANAFIAFAAIAJABIABAAIAHAEQAMAHANAFQAcAWAhAWIAQAKQAWAQAQASQAIAKAHALQATAhgCApQBEAXAmBNIAGANIADADIADABIAaATQAVAPASATQADADABAEQANAlgJAnIgDANQgGARgNANIAAADQAFANAQALIACABQAtAYAiAjQAVAYARAcIACAJQADAVABAXIAAAGIABAUIAKAKIAgADQBQAJBKAgQA9AaA5AoQAKAPAIAOQAJAPAFAPIAAAIQABAggHAfIAAACQgGAYgKAXIAEAFQA8ACA3ATQAyANAtAbQApAZAZAoIABAAQBJgOA+AOQBFARA2A0QAZAZAKAfIAJAMQAUAPARARQATASACATIAFAEQAvAYAnAZIAZAgQAyA+gHBZIgCAJQgPAagUAZQgZAfgqAPIgHADQg9ATg5gPQgQAEgRAAIgEABQgTAHgWABIgbgJgAJfO3IgHgFQgTgMgMgQIgEgEIgCgJIgCgSIAFgHIA4guIAEgDIARgOIAPAIIgRAZIgBACQgKAPgMANIAAAEIACAJIACAEQApAGAsgCQALAOAUAKIASAEIgCABQgFAFgCAHIgKgDIgJABQgKABgJgBQghAOglAAQgPAAgRgDgAEhKCIgFgFIgBgBQgLgJgHgJIAIgCQAiAKARAUIgjgEg");
	this.shape_24.setTransform(125.8,95.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("ANHPTQgHgEgGgFQgGgMABgJIAAgBIgDAAIAMgOQAmAAAkgMQAVgIAJgQIAFgKQA3iji3gtIgHgGQAAgTgQgPQghgegpgJQglgJgsAJQgsgtg5gJQgggLgkABQAFgRAKgPQAZgogPgrQghgYgjgPQgsgTgwgFIgfgBIgBgPQgEgngUgaQgTgVgegMQgJgHgLgGQAHgJABgLQAEg1gpgYQgJgFgLgEIgCgBIAAgKQgHhNgpgqQBLAKBFAeQA9AZA3ApQAKAPAHAPQAHAQAEAPIAAAJQgBAfgJAfIgBACQgHAXgKAXIADAGQA8ABA3ATQAxAMAuAbQAoAZAbAnIAAAAQBJgPA+APQBEAQA2A1QAaAYAHAgIALAMQAUANATAPQAUAQAGASIAFADQAvAZAlAaIAZAgQAwA/gJBZIgBAJQgOAbgSAaQgXAhgqAPIgHADQg9AUg5gNQgPAHgRADIgEABQgTAJgVACQgOgFgMgGgALvOhIgIAAQgKgBgJgEQgwAQg1gHIgIgEQgUgKgPgOIgEgDIgDgJIgCgSIAEgHQAcgXAagZIADgDIAWgVQhsg+h9gNQhCgHhGAHIgCgGIgCgKIgBgFQANgsgGgfIAFADQArAFArACQCsAFByB4IACAFIABAEQgFAJgEAKIgDAHIgBABIALAGIgUAeIgCACQgMASgPAQIABAFIACAKIACAFQAxAHA1gCQAMASAYALIAVAFIgCABQgEAEgCAEIgVgHgABPICQgHgWAOgRQAHAUAEAYIADAHQgLgFgKgHgAAuGZQgIgFgGgIIgCgDQgugrhWgLIgIABIgFgCIgOgGIgGgEQgGgFgFgJIgDgIIgBgKIgDgDIgOgMQgvgbgsggQgTgiACgZIgBgsQg4gchCgNQgwgJgxgPIgIgDQgHgDgFgFIgDgDQgIgNgBgKIgCgeIgCgFIgJgHIgFgHQgPgbgKgZIgGgOIgIgdQgMgXgTgYIgSgWQgigSgwgnQgMgLgDgOQgGgOgCgMIAAgHQgCgEADgEQACgIgCgaIgKgdIAAgIIgCgoQgBgNgDgMIgCgHQgFgKgGgKIgIgMIgJgJQgogmgxgVIgRgSIgBgBIAAgKIACgFQAGgJANgIIAGgJIAKgLIAJgMIAHgNIgCgPQgDgEgBgEIgEgFIgOgOIgKgLQg3gihAgPIhFgSQg7gWgqgfIgDgEIgBgBIAAgIIACgJIAJgKIAAgBQAIgFAKgDQgBgJADgKIAGgPIAHgFQAdgPAZgRIATgHIAFgCIAzgTQAMgGANgBQB4gTByARQATAEARAGIADABQA4AQAqAgQAxAlAeA7IACAGIABAIIACAQIABAGIACAEQARAUALAaIADAHIAMAEIAFAAIAKgBIAAgBIAIAEIAZAKIBAAoIAPALQAYAOAQARQAJAKAHAKQAWAgADAoQA+AfAgBRQADAHACAHIADADIADABQAOAIANAKQAWAPARATIAEAHQAOAjgHApIgDANQgFARgNAOIABACQAHANAPALIACABQAuAXAgAjQAWAYAPAdIACAJQAEAVABAWIAAAEQANAFAMAHIANAJQAJAHAHAHIgKgBIgfgDIgMgIIgBgVIAAgCIgDgBQghgTgqgEIgHAEIgCADIgJAAIABgFQgIhOg6giQgigVg0gEQhhAChcAYQgdAHgcAKQgBAFABAQIgRgCQgEACgIAHIAAAFIADADQBZAQBQAoIAdAPIAOAPQgEAIgFAGIgHAGQgLAIAAALIABAFQACAGAEAEIAKALQAjAEAfAPQA3AagFA5QgKATgSAJQgVAKACAXQgBAKAIAFQAiAVAegGQAtAYAoAaQAYAPAVARIgBAEQgGAMgIALQgFAIABAKIACAEQABAEAEADIAFADQBFAdA1ArQgRARgOASIgCACQgOgngagbg");
	this.shape_25.setTransform(123.8,96.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("ANNPRQgHgFgFgGIAAgDIAGgFQANgLAKgOQArABArgPQAYgJALgTQADgFACgGQBCi/jVg1IgJgIQABgWgTgSQgngjgvgLQgrgLgzALQg0g1hBgLQglgMgrAAQAHgUAMgSQAdgugRgzQgmgcgpgSIgOgFQA3ACAyARQAxALAuAbQAnAYAdAmIAAAAQBJgOA+APQBDAQA3A0QAZAZAGAgIAKALQAWAMAUANQAWAOAKAQIAFAEQAvAYAjAcQANAQAMAQQAtA/gKBZIgCAJQgLAcgRAcQgUAjgrAPIgHADQg8AUg5gKQgOAJgSAGIgDACQgTAKgVADQgOgFgLgHgAMcPAQgFgEgBgGQABgKAGgIQgRgGgOgHIgIgBQgKgEgJgGQgxANg1gHIgHgDQgWgIgQgLIgGgCIgDgJIgCgSIACgIQAcgYAZgaIADgDIAVgXIADgGQh/hKiUgQQhLgIhSAHIgDgGIgCgMIAAgGQAMgrgDgiIATALIAhASIABAAIAGAEIBVAIQCpAMB4BvIADAFIACADIgKATIAAABIAIAFIgXAkIgCACQgOAVgSASIABAGIACAMIADAGQA4AIA+gCQAOAVAcANIAXAGIgBABIgFAGIAGACIAgAHIgBABQgEAKADALQgKAHgLACQgJgFgHgHgANBPDIAAAAgABRHWQgxgEgmgaQgJgaASgWIATgWQgpgihHgMIgIABIgFgBIgRgDIgIgDQgHgEgGgJIgEgHIgBgKIgEgDIgQgKQgygWgsggQgRgjAIgaIAMgwIgUgLQARADAQgDQA0AcAvAfQAbASAaATQAAADgBACQgIAOgJANQgGAJABANIABAEQACAEAEAEIAGADQBSAjA7AyIgRATIAQAQIACAEQAFAIAHAGQAVAcAJAmgAFtEXIAAgDIAKAEIgKgBgAl3A+QgvgNgxgQIgIgEQgGgEgFgFIgDgEQgGgOABgKIAFggQAAgDgBgDIgJgHIgGgGIghgyIgJgOIgQgcQgPgVgWgWIgUgVQgmgLgygmQgMgKgCgPQgFgPAAgMIACgHQAAgGAGgEQAJgKADgcIgHgeIgBgIQgCgVgDgSQgCgNgEgNIgDgGQgGgKgIgJIgIgLIgLgJQgqgjg0gRIgQgSIgCgBIgCgMIABgFQAFgLAMgJQADgEAEgFIAKgLIAJgLIAHgNIgEgPIgFgHIgEgGIgPgMIgLgKQg3ghg/gSIhFgTQg5gVgvgbIgDgDIgBgBIABgIIACgJIAKgKIAAgBQAKgDALgBQgCgJACgKIAFgQIAHgEQAegOAagPIATgHIAFgBIAzgSQANgFANgCQB2gTB0AMQASADASAFIADACQA4AOAqAfQAzAkAdA7IACAFIABAIIADAQIABAGIACAEQAPAWAJAcQACADAAAEIANADIAEgCIAKgCIAAgBIAJADIAZAJQAhARAhAUIAQAKQAXANASAQIASATQAYAeAIAoQA5AnAZBVIAEAOIADADIADABQAPAIAMAJQAXAPAQAUIAEAHQAQAigGApIgCANQgEASgNAOIABACIAMAMQgagIgegEIgIAGIgCADIgKAAIABgGQgJhbhDgoQgngYg8gGQhyADhqAcQghAIghALQgBAGABAUIgTgDQgFACgJAIIAAAGQAAABABAAQAAABAAAAQABABAAAAQABAAAAAAQBpAUBcAvIAiASIAPASQgDAJgHAHIgIAHQgNAJAAAPQAAADABADQADAGAFAGIALAMQAoAFAkARQBAAfgGBDQgLAVgWALQgZAMADAaQgBAKAGAGQgagLgcgIgABMgSIgPgHIAAgUIAAgGQgCgXgEgUIgCgJQgOgegVgYQgfgjgvgXIgCgBIgMgLQASAGAPAJQARAHAPAJIAPALQBAAyAJBrIAAAKIgDAAg");
	this.shape_26.setTransform(121.9,96.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("ANTPPIgCgCQAKgEAIgHQAPgNALgQQAyABAxgSQAbgKANgVIAGgNQBLjcjzg9IgJgIQAAgagVgUQgsgpg1gNQgygMg6AMQg7g9hLgMQgpgPgxABQAIgYANgUQAWghAAgkIAXAHQAyALAsAaQAoAYAeAlQBJgPA9APQBEARA2A0QAaAZADAgIALALQAXAKAVALQAXANAOAOIAGAEQAvAYAhAdQAOAQALARQArA/gMBaIgCAIQgJAdgPAeQgSAkgsAQIgGACQg7AUg7gHQgNAMgRAJIgDADQgSAMgWADQgNgGgLgIgAMwOeQgUgHgQgKIgHgDQgLgFgIgIQgzAJgzgGIgIgCQgWgGgTgIIgHgCIgDgJIgDgSIACgIQAagYAYgcIADgDIAUgYIAEgHIADgGQiRhXirgSQhWgKhcAIIgEgHQgCgGgBgHIAAgHQAHgbADgXQAXADAXAGIAZAIIAkANIABAAIAHADIBVAKQClATB+BlIAEAFIADADIgHANIAGAEIgbAoIgCADQgQAZgUAUIAAAHIADAOIADAHQBAAJBGgDQAQAYAgAPIAaAIIgCABIgCADIgHgCgAhcE2IgUAAQgFAAgEgCQgIgCgHgIIgFgIIgBgKIgFgCIgSgHQg0gSgtggQgPgkAOgcQANgcANgYQg0gjg/gYIhfgjIgIgEQgGgEgEgEIgDgFQgEgPAEgMIALgjIAAgGIgJgHIgGgGIgqgvIgMgNIgXgbQgUgUgYgUIgXgSQgpgFgzgmQgOgJAAgQQgEgPADgMQAAgFACgDQADgHAJgGQARgMAHgcQgCgQgDgQIgBgHQgBgRgEgPQA5AUA0AbIAmAUIASAVQgEAKgIAIIgJAIQgPALAAARIABAHQAEAHAFAGIANAPQAuAFApAUQBJAkgIBNQgNAYgZANQgcAOADAeQgCANALAIQAtAcAngHQA7AeA2AkQAfAVAdAWQAAADgBADQgKAQgKAOQgHALABAOIACAFQACAFAFAEIAGAEQBdAoBFA6QgUAVgTAXIgBAAIgHABIgGAAgAHGEbQgrgMgwAAIAAgHIAUgtIABgCIAFgNQAeAQAbAVQAIAVAAAVIAAAAgABHghIgBgUIAAgGQgCgXgEgUIgCgJIgKgVQAjAggFA5QgBAGgBAGIgJgCgAgxjfIgCgBIgZgXIgCgCQAMgOADgSIACgNQADgYgFgVQA3A0ALBgQgWgTgegNgAhNlgIgSgMQgRgLgTgIQgsgYg5gGQgGACgDAEIgDAEIgLgBQABgDAAgEQgLhohLguQgtgbhEgHQiBAEh5AfIg7ARQgngZgugMIgRgSIgBgBQgDgGgCgHIAAgGQAEgNALgKIAIgIQAGgFAEgGIAJgLIAHgMIgHgQIgFgGIgEgGIgQgMIgLgJQg4ggg9gTIhFgVQg5gUgygWIgEgDIAAgBIAAgIIACgJIANgIIAAgBQALgCAMAAQgDgJACgKIAEgQIAGgEIA7gZIATgHIAFgBIAzgQQANgEANgCQB0gVB1AHQATADARAFIADABQA5ANAqAdQA0AjAcA7IACAFIACAHIAEAQIABAHIACAEQANAYAHAdQABADgBAEIAOADIAEgDIAKgFIABAAIAIACIAaAIQAjAOAiATIAPAJQAYAMATAPIATASQAbAdANAnQAzAvATBaIADAOIADADIADABQAPAIANAIQAXAPAPAUIAFAHQAHAOADAQIgOgNg");
	this.shape_27.setTransform(119.9,97.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("ANkPVIgHACQgLgGgJgJQgGgGgCgHQACgSAOgNIgTgFQgTgIgQgLIgHgEQgLgIgIgKQgzAFgzgEIgHgCQgYgDgVgGIgIgCIgEgJIgDgRIABgIQAagaAWgdIADgDIATgaIADgGIAIgMQilhjjBgWQhggLhoAJQgDgEgBgEIgDgPIAAgIIADgMIgngBIgFgIIgEgQIgBgIQAQhRgXg3QgGgHgDgKIgBgEIgKgPQgQgHgSgFIgiAIIgLACQgNgBgKgNIgCgJIgGgBQg/gFgygiQgFgRADgPQAEgQAMgOQAXgbAYgaQgvgog6ghIAGgHQgugjg1gaIgMgHQgtgVgxgSIgIgFQgGgEgEgHIgCgFQgDgQAGgNIATgkQABgDAAgEIgJgHIgHgFIgRgQIghgdIgPgNIgfgaIgrgfIgIgFIgYgRQgtACg2gkQgNgKABgQQgDgQAEgMQACgFADgEQAFgIALgGQAYgOAMgeQAAgQgCgPIAAgCIgBgHQgDgVgHgSQgFgNgIgMIgDgDIgCgDQgIgJgJgIIgLgJIgNgIQgwgdg3gKIgQgSIgCgBQgEgHgDgIIgBgHQABgGACgFQg9gVhAgNQgDAAgCgEIABgIQALgKAGgDQANABAMADQgCgaABgHQAigMAjgJQgwgag1gTQghgMgjgKQg4gTg2gRIgEgDIgBgCIABgIIADgJIAOgHIAAgBQAMAAANACQgEgJABgKIAEgRIAGgDIA9gWIATgGIAFgBIAzgPIAbgGQBygVB2ACIAkAGIAEACQA5AMAqAbQA1AiAcA6IACAFIACAIIAFAPIABAHIACAEQAJAWAFAaIAOAIIAGAEIAJgEIAAgBIAJABIAbAHQAlALAhASIAQAJQAYALAUAOIAVARQAeAbARAmQAcAiAQAwIACACQA4AtAXBQIAIAKIAFAGQARAggCArIgBAHIASAKQAxAdAEA7QABANgBAOQgBARgLAOQAQAJAOALQAXAKASANQARANANAPQALAPAIARIAFAAQBPAJBJAfQA6AaA2ApQAHASADARQADARAAAPIASANQAUA9gfA3QAfAFAdAKQAyAKAtAaQAmAXAhAkQBIgOA+APQBCAQA3A0QAaAZABAgIALALQAZAJAVAJQAZALASANIAGADQAvAYAgAfQANAQALAQQAoBAgNBaIgCAJQgHAdgNAfQgQAngsAQIgGACQg7AUg6gEQgNAPgRAMIgDADQgSANgVAEIgNgIg");
	this.shape_28.setTransform(117.9,98.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_10}]},1).wait(1));

	// Layer 3
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("ANfPNQgGgGgCgJQACgTAPgOIACgDIgfgJQgngTgUgeQhYADhOgLIgFgJIgDgRIgBgJQAagaAVgfIACgDIAigzQi4hxjYgYQhrgMhzAJQgDgEgBgFQgDgIgBgIIAAgJQAZhVgRg7QgFgHgDgLIgBgFQgeg/hXgZIgmAJQgHACgFgBQgPAAgLgOIgCgLIgGAAQhGgGg3gmQgMgmAbgfQAageAbgdQhVhJh0gxIgIgFQgGgFgDgHIgCgFQgBgSAJgOQANgSAMgUQACgDAAgEQglgcgngbQhCgshKgoQgwAJg4gkQgOgJADgRQgEgmAkgRQAggQAQgfQAKhhhbgtQgzgZg5gHIgQgSQgGgIgFgJQgBgEAAgEQAAgWATgOIALgKQAKgKAFgNQgKgNgMgNQiWhYixgkQgCgBgDgEIABgIIAEgJIAPgGIAAgBIAbAFQgEgJABgKIACgSQAugPAvgNQCWgnCggEQBUAJA4AiQBeA6AMCCQAAAEgBAFIAOAAIADgFQAFgEAGgDIAAgBQBIAJA2AfQAYAKAVANIAWAPQBbBJALCZQABAIgCAHIAEADQASAHAPAIQBDApgIBYQgBATgMAPQARALAPAMQAxAVAdAkQAiArAFBCIABAZQAaABAZACQBPAJBIAgQA6AZA2AqQAYBJgrBCQgQAagKAdQA8AAA0ASQBdAQBKBNQBHgPA+APQBCARA3AzQAaAZAAAhIALALQEvBNhfETQgOAogsARQg9AWg+gBQgOATgSARQgRAPgVAEQgNgHgKgKg");
	this.shape_29.setTransform(116,99);

	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,232,198);


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


(lib.anim_risebuildup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ADpP8Qgrg5hDgfQmOi5k7kwIgkg3QhvlelDhxQA1gtAsg3QE4mIgrnMIgEgpIAMgBQAcAYAiAMQDDBBCvBaIABAAIAAAAIACABIABAAQIKENFkHqQAwBCBHAlQBTAqA/A4IAEADIAFAFQBpBgAxCHIgEAIQgRAZgIAbQAAAPAIAKQAHAKAOAFIAFgCQg7DEh6CPQgTAWgUAVQitCwkbBUQgdAIgYAAQg8AAgngygABnI3QAFAEADAAIgBgGIgHACgAkFGqIAAgEIAAAEIAAAAgAlJCoIAFAEIgFgFIAAABgAkusYIAHAAIgHAAIAAAAg");
	mask.setTransform(122.9,121.6);

	// Layer 1
	this.instance = new lib.static_risebuildupvisiblemotion("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(70.3,182.3,1,1,0,0,0,85.5,73.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:198.1,y:35.1},14).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("ADpP8Qgrg5hDgfQmOi5k7kwIgkg3QhvlelDhxQA1gtAsg3QE4mIgrnMIgEgpIAMgBQAcAYAiAMQDDBBCvBaIABAAIAAAAIACABIABAAQIKENFkHqQAwBCBHAlQBTAqA/A4IAEADIAFAFQBpBgAxCHIgEAIQgRAZgIAbQAAAPAIAKQAHAKAOAFIAFgCQg7DEh6CPQgTAWgUAVQitCwkbBUQgdAIgYAAQg8AAgngygABnI3QAFAEADAAIgBgGIgHACgAkFGqIAAgEIAAAEIAAAAgAlJCoIAFAEIgFgFIAAABgAkusYIAHAAIgHAAIAAAAg");
	this.shape.setTransform(122.9,121.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16.8,14.6,212.2,214.1);


(lib.anim_mick_surf_stable = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AMKEjQAGgDAHgCQAVgDAHASQAIATgTAKQgNAIgMgFQgCACgCADQgCACgCABQgEARgFAQQgFASgSAIQgSAJgUACQgTADgTAAQgRAAgSABQgUACgRAJQgRAIgQALQgNAKgPAGQgQAHgSAAQgUAAgLgRQgLgQACgTQABgRAEgQQAEgWATgHQABgBABgBQAJgLAIgSQAPggAMghQAMgigLgiQAAgDgCgDQAAgBAAgBQgNgigCgkQgDgoAXghQAJgNAMgKQAFgEAFgEQAMgIANgFADDn0QAWgWAegKQAlgNAmgCQAogDAkARQAfAPAdAUQAgAXAeAaQAeAZAaAdQAJAOAVgFQAQgEAQgIQASgIASgEQASgEAIAQQAOAAABAPQACAMgMAFQgNAGgsAUQASAAASABQAFABAEAAIABAAQANABANACQAGABgBADQAGAPgVAIQgSAIgSAAQgUAAgRgJQgSgJgTgDQgHABgIABQgFAAgFABQACACABABQAJAHAHAHQAMAKALAMQABAAAAAAQACADAEAFQAMASgdAEQgUADgLgSQgCgBgEgBQgTgGgHgSQgHgRgSgDQgMgCgCAIQgCAGAEAMQAAAEgBAEQgCAOgIAKQgNATgSgLQgFgEgDgKQANgMAKgSQAAgBgBAAQgGgQgEgRQgGgUAVgKQgCgMgNgIQgQgJgPgJQAGgCAGgEAI3lEQAEADAEADAHkliQABAFgBAFAHgkiQACAIgDAIAK8mOQgEgBgEABQgTAFgSAJQgPAIgRAEAKIlUQgTAAgSAGQgFABgFACADDn0QAIAFAHAGAlTmiQAAAAAAgBQAAAAgBAAQgEgGgEgGQgQgZgCghQgCgnAegZQABgBAAAAQAdgaAnAHQAEglAkgVQAjgUAnAGQAoAGAmgGQAmgGAcgZQAFAJABAFQABAFgDAOQAEgCADgCQAQgKAJgQQABgCABgCQABABAAABQARAjgYAfQATgWAIgYQAGAygeAtQgKAOgOAJQgFANgQAAQgaADgdgJQgjgLglgJQgrgJgWAhQgGACgFAAQgIABgHgCAAWnFQAXgcAggVQAggUAlAFQAcAEAVANAAWnFQADgBADAAQAHgBAHAAAhSidQAJgLAJgIQAHgIAIgHQAIgIAJgHQAOgLANgLQAFgFAFgDACvmTQAFAIADAIQABACABADQAHAbgZAUAFAmrQgCAIgHAHQgZAcglAKQgHACgGABQARAWAJAiQAJAngMAmQgIAbAUAQQALAIADAOQAYAUAjAFQAkAFAkgBQAigBAigDQAngFAnADQAKABAEgEQAKAYANANQAagHAhAKQAkALAjAQQAiAOgNAqQgLAhgHAjQgHAkgQAiQgMAagPAZQgFAJgGAIQgVAfgSAgQgUAjgPAiQgKAWACAIQAHAHALACQASAEARgGQATgGAQgNQAPgMAGgTQABgCAAgEQAFgZASAMQgOAJAEAVAG2mIQgeALghgJQgjgKgUgbQADgIgBgIAC5l+QAXAPAcgEAHjAnQgEgCgEgBQgCgBgCgBQgdgNgggGQgjgHgjgEQgmgEgjAGQgiAFgkAKQgKADgJAGAEditQgKAPgGASQgGATgOALQgNAKgOAIQgOAIgPAHQgRAHgRAHQgJAEgJACQgBAAgCABQgEABgGAAQgQADgQABQgRABgSAAQgIgBgJgBQgBAAgBAAQgJgCgJgCQgQgFgQgGQgNgFgIgGQgCgDgCgDQgDgEgDgDQADgIgCgIQgCgHgGgGQgBAAAAgBQgDgDgKgTQAEADAEAEQAHAGAEAGQABABAAAAQABABAAABQAEAFADAGQAAABAAAAQAFAJACALAD+gnQgbARgYAWQgHAGgHAHQgHAGgHAHIAAAAIAAAAQgNANgMAMQgaAagaAYQgdAbgZAfQgdAkgcADQgEgEgEgEQgYAPgSAeQgRAagGAbQgCAJgBAJAB0iLQgEABgDACQgDADAAADQAAAEADAGQACADACACQAGAIAJgBAA9i0QACAKAFAGQACADADACQAEADAGACQAJAEAIgDAgOijQABAKAGAGQAGAGAKACQAMABAJgBQADAAACgBAAih0QgFALADAHQAEAGAMACQAHABAHAAAHWAFQACALADAKQABADABADQADAFADACAJXh0QgsgNgfAZQgeAYgPAiQgMAZADAaQAbAHAfgHQgIANgKALQgRATgKgJAIvAQQgQgEgPgHIAAAAALdEsQAEgPAKgFQABAAAAgBQAFgCAFgBQAQgBAEAQQgKAGgIAKALSEUQAUgLAGAOAipn4QgJgEgJACQgGACgGAEQgBABgCACQgCADgBADQAAACAAACQACAFACAEQACAFAEADQAOAPAUAAQAFAAADAAQAMgCAAgKQAAgFgCgFQgCgGgDgFQgEAHgBACQgEAIgJADQgIADgJgEQgIgDgBgKQgBgJAGgIQAHgJALAEQACAAACABQALAGAGAJAjmn3QADgFAEgEQAAgBAAAAQACgCADgCQADgCADgBIABAAQAAAAABAAQAEgBAEgBQAHAAABAAAgVoMQAVAjgpACQAAAKAAAFQABAFABABQACABABABQAcANAegCAiLl6QALgIAKgJQALgJAJgLQAMgOgBgRQgBgMgHgJQAMgDAMAHAlOoMQAFgIAHgHQATgSAiAEQAMAXASAFQgrgFgUAqQgHAQAAAOQAAABAAABQAAABAAAAQAAABAAABQAAAGABAFQABAGADAFQAAABAAAAQAEAIAGAIQABABAAAAQADAFgDACQgDADgJAAQgSAEgQgTQAAAAgBAAQgRgDgTAGQgkANgfAWQgdAUgcAQQANABAMAEAjxnUQgBgBgCgBQgDgCgDAAQgEgBgEABQgIABgGAMQgBADgBAEQgBAGABAGQACAFADAFQACACACABQABACABABQAPANATgGQALgEACgGQADgHgFgKQgBgDgCgCQgBAFgEAFQgGAJgKACQgKACgGgIQgGgIABgKQABgLAIgCQAEgCAJgBQAHADAGAGQAAAAABABQADADADAGAkinHQABgVAQgMQAIgGAHAGAklmdQAHAEAFAGQAFAHACAKQAEATAMAPQANAPAUAGQADABAEABQANADANgEQAQgEAQgGQAOgFANgHQABAAABAAQAAAAAAgBQACgBACgBQABAAAAAAQAOgJAPgIQAQgJANgMQAOgNAJgQQAKgSgDgTAlNkUQAHgHAHgGAn8jwQAeAUAjADQAqAEAdgcQAUgSATgRQAPgCAPACQAXADAXAJQAPAGANgJAkvkUQAHAkAXAbQAXAaAeAPQAdAPAhADQAmADAmgGIAAAAAi7mfQAHAXAXgLQAQgHgJgPArvAzQgJAGgJAGQgNALgSAEQgFABgEgBQgZgLAagNQARgIAQgKQAQgJAQgGQAEgBADgDQAJgGABgKQACgTALgLQAAgUABgUQACgoAMglQAMgiANgiQANgjAegYQAegZAjgFQAOgkAkgEQAIgBAHAAAqLgjQANAOAPAMQAJAIABAKQACANAQAEQAIACAEgBQAPAGgGANQgJATgXgDQgUgDgMgPQgGAQgDARQgDASgCAXQgBAEgCAEQgBADgBADQgIAUgVgBQgGAAgCgFQgGgMAJgQQAKgRgBgUQAAgBAAgBQgBgQgBgMQgGAMgHANQgJARgJAQQgKARgOAJQgUANgGgaQAAAAgBgBQAIgFAGgKQAJgQAJgRQADgGACgFQAFgLAEgKAoFjfQgGAmgZAaQgaAbgbAYQgeAbgRAkQgCAFgBAFQgBAFAAAEQgBAEAAAFArvAzQACgEACgDAr+B5QgDACgEACIgBAAQgCACgEgCQgXgIAUgTQAOgOAIgQQAFgJAFgIAgnhbQgQANABASQAAABAAABQABADAEADAg8iPQgKgIgMgGAjPDCQgEgGACgLQALgnAPgmQARgpAcgjQASgWAVgSQAQgPANgKQgBgBgBgCQgHgWAZAGAhGgpQACADAEABQAPAFAEADAgVC+QgfgdglABQgkAAgkACQglACgJAcQgWATgQAjQgSAoAYAjQAUAfAiAQQAhAPAlAKQAlAKAgATQAgATAZAaQAKAJAGAKQANAWgCAcQAAAFAAADQgCAIgDgBQgIALgLAKQgOALgOAKQgRAMgTgEQgUgFgMARQgIANATgBQAAADABAEQADAMALgDQAAgEACgEQAHgSATgDAg4KDQgCANATABQABAAABAAQgDgJAKgLQAEgEAFgCQARgFARACAglKRQACAGAFAFQAPAPATgHQATgHALgPQAMgPALgPQAKgPAOgLQAOgMASgDQARgCAQgEQACAAABgBQATgFASgKQAHgEAJgBQASgWgWgYQgYgagigMQgPgGgPgGQgDgCgEgBQAHgGAGgGAglKRQAKAAAEgKAhHJzQgBgQAUADAMPFNQgDgBgDgCAJNFSQgFgGgDgJAIJF4QgNAWAaABACDH6QATALgFAUQgCAFgEADAhWEgQApAHAfAXQAeAYAMAoQAKAlAhAUQAQAKAQAI");
	this.shape.setTransform(82.2,67.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag2AlIgDgDIgDgDQgEgFgBgFQgBgGABgGIACgHQAGgLAIgBQAEgBADABIAHACIADACQgJABgEACQgIACgBAKQgBAKAGAIQAGAIAKgCQAKgCAGgJQADgFACgFIADAFQAFAKgDAHQgDAGgKAEQgGACgGAAQgLAAgLgJgAANgIIgGgIIgEgJIgBgEIAEgGIADgDQAGgEAGgCQAJgCAJAEQgLgEgHAJQgGAIABAJQABAKAIADQAJAEAIgDQAJgDAEgIIAEgJQAEAFACAGQACAFAAAFQAAAJgMACIgIAAQgUAAgOgOg");
	this.shape_1.setTransform(61.3,21.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AFfEPQgDgCgDgFIgCgGQgDgKgBgKQAaAGAfgGQgIAMgKALQgMANgIAAQgEAAgDgDgAmGjJQgGgIABgKQABgMAJgCQAEgCAJgBQAGADAGAGIABABIAGAJQgBAFgEAGQgFAIgKACIgFABQgHAAgFgGgAk6jsQgJgEgBgKQAAgJAGgHQAHgJALADIAEACQAKAFAGAKIgEAIQgFAJgIADIgHABQgFAAgFgCg");
	this.shape_2.setTransform(95.4,44.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AjYCyQgegdglAAQgkAAgkADQglACgJAcQgEgGACgLQALgnAPgmQARgqAcgiQASgVAVgUQAQgOANgKIgCgEQgHgVAZAGIAAACQABACAEADQgEgDgBgCIAAgCQgBgSAQgOIAGAIIAEAGQAIAGANAFIAhAKIASAEIACABIARACQASAAARgBIAggEIAKgCIADAAIASgGIAigOIAcgPIAbgSQAOgLAGgTQAGgSAKgPQAYATAjAGQAkAEAkgBQAiAAAigDQAngFAnADQAKABAEgFQAKAZANANQgsgNgfAZQgeAXgPAjQgMAZADAbQABAJAEAKIACAHIgCADIgEgBQgdgNgggHQgjgFgjgEQgmgEgjAGQgiAEgkAKIgHgJIANgMQAYgWAbgRQgbARgYAWIgNAMIgOAOIAAAAIgBAAIgYAZIg0AyQgdAbgZAeQgdAlgdADIgJgIgAkCgxQAPAFAEACQgEgCgPgFQgEgBgCgDQACADAEABg");
	this.shape_3.setTransform(101.6,69.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF99").s().p("Ai0B6IAAgBIgBgBIgIgLQgQgagCggQgCgnAegZIABAAQAdgaAnAHQAEglAkgVQAjgUAmAGQAoAGAmgGQAmgGAcgZQAEAJACAFQABAFgDAOIAGgEQARgLAKgQIACgDIABACQAQAigXAgQATgWAIgYQAGAygeAtQgKAOgOAIQgGANgQAAQgaADgdgJQgjgKglgJQgqgJgWAgIgMACQgIABgGgCQgSgFgMgWIgEgBIgIAAIAAAAIAAAAQgaAAgPAOQgHAGgFAJQAFgJAHgGQAPgOAaAAIAAAAIAAAAIAIAAIAEABQAMAWASAFQgsgFgTAqQgHAQgBAOIAAACIAAABIAAACIACALIADALIABABQADAIAHAIIABABQADAFgDACQgDACgJABIgGAAQgPAAgNgPg");
	this.shape_4.setTransform(66.3,13.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC99").s().p("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");
	this.shape_5.setTransform(82.2,74.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.1,1,1).p("Ah6m3QgEAAgDgCQgDABgDAAQgXADgDgVQgIgMgJgLQgZgegHgkQgHgoAYghQAWgeAfgTQAigVAogEQALgKAQgJQAQgIARgGQAQgFASAAQAUABANAOQAMANAIAQQACAFADAFQAGAKAHAKQAIALAIAMABWqmQANAIARAEQASAEASgGQAJgEAHgIQACALgDAMQgBAEAAACQAOgKAPgMQANgMALgOQAEAHgBALQgDAlgLAjQAQgDANgKQACgDADgCQAHgGAHgFQgDAKgEAKQgTAtgfAmQARgIAPgKQAGgEAHgDQgDAHgCAGQgNAigaAZQgJAHgIAIQgEAEgFAEQgEAEgDAHQANgBAOAJQAdgPAeALQAqgYAbAiQAdgMAeAKQAdAJABAKQAOgQANgQQAgggAbgeQAlgqAigqQAbAQALAXQALAWgGAcQgCAMgJALQgmAxgyAhQgOAJgPAIACmqLQgCAGgBADAJeoyQAogJASgSQBaA9g4BBQgBABgBABQAgBPhBAvQBJBBhkAiQgnANgigHIAAAAQgDAFgDAEQgvA8hPgWQgNAEgRgEQgJgCgJgEQgVgjgngNQgQgBgRgMQAIAegEAoQAAABAAACQgPATAQARQABAAAAABQACACACACQAAACABACQADAGgBAIQgOAPgLASQgMATgSALQgQAKgQAIQgRAIgRAHQgSAHgUAHQgBABgBAAQgJADgJACQgBAAgCAAQgFACgFAAQgRACgQABQgMABgLAAQgGAAgGAAQgJgBgIgBQgBAAgBAAQgJgCgIgBQgOgFgPgGQgLgFgHgGQAAgEgCgCQgBgEgCgDQAFgJABgHQAAgHgFgGQAAAAgBgBQgBgCgDgLQgBgEgBgFQgIgJgKgFQADgCACgCQAKgIAKgHQAJgIAJgHQADgCACgCQAJgGAJgFQAPgLARgLQAHgFAHgDAKXlPQgEACgDADQggAUgmAIQgRADgSABAEDl4QANgiAggVQAJgGAJgDAGbmnQgKALgLAKQgRAQgSAOAEij6QgGABgHACQgaAEgZgHQgEgCgEgBQgMgGgJgJQgTgkARggQAUgzAmAXQABABABABQAhAWAmAEQAFAAAEAAQAXABARgLAFPkSQgUARgZAHAFDjtQABAAABAAQAmAAASglAIzjmQgMgDgMgFAIzjmIAAAAQgDAFgDAEAGvi3QAhgJAHg6AK4nNQgfAkgrAfQgZARgdAQADQphQgCAIgDAIQgCAGgDgCACmo/QAAgDABgDADHoXQgFAEgEAFQgIAKgKAIQgDAEgFACQgGABgBgBAg4peQAPgEAQgGQAEgBAFgBQAPgDANAEQAJACAGAHQALALAKAMQANAQAUADQAGACAHAAQAGAAAFAAQAEAAAEABQAGAAAHACQAMAEALgDQAJgCAIgNAB2oOQARgEAOgNQAOgNADgTAAboGQABgCABgBQAAgBAAgBQADgJgDgIQgDgHgJgGQgHgEgIAAQgCAAgJAMQAAAAAAAAQgDAYATAHQALADAJgHQgGAOgNAGQgMAGgGgNQgFgMABgNQABgKAEgFAAboGIABAAAg4peQAXgEASgBQAUgBANAOQALANAHARQADAJAFAJQAFAIAGAHQAOAPASgBQAEAAAFgBQAEAAAEgBQAHgBAHgCABgoKQgEAGACALABooLQABASgDATQgBAJgDAJQAAABgBACQgBAGgCAFQACAIABAIQAHAAAHAAQAIABADAHQAGgFAGgEQAJgGAKgEQAHgEAHgBQgGACgHADQgBAAAAAAABhm2QACALgBAMQgBATgPANQgQAMgRAJQgMAEgJAHQgCABgBACQgBAAAAAAQgEADgDACQgRACgPgBQgTgCgTgCQgNgBgLgGQgGgCgFgCQgHgDgHgCQgEgBgEgBQgCAAgBgBQgDgCgDgDIgBAAQgYASgTAZQgWAagLAiQgEAJgCAJQAAADgBACQgDARACAUQAFAeAZAeQAaAgAmAQQAUAAAVgDIAAAAAgqmUQARgCARgCQASgCAPgLQALgJADgJADCm+QgCABgDACQgSALACAOABhnRQAVgBAGgTQAFgSgGgRQgCgEgDgCAgapBQARgMAKAOAh6oqQADgDAEgDQAHgFAIgFQAPgKARAEQAEABAFABAhFoGQABADAAAEQgBALgLADQgGACgFgBQgKgBgHgMQAAAAAAgBQgBgBAAgBQgIgTAMgPQADgEAEAAQACAAACABQAPAFAEAOQADAEACAEQABACAAACgAhiomQgNATAKASQAFAKAHABQAHAAAIgIQAEgEABgEAiLofQADgIADgIQAFgMAGgLQAHgLAHgKQgHADgHAFQgPAKgGAQQgHARAJAQQABgEABgDgAhspbQAIgEAHgCQATgEASAHAiNoYQgBAEgCAEQgBAIgCAIQgBAEAAAFAh6m3QAFgQgJgPQgKgPgDgSQgEgQACgRQABgDABgEAhxltQgLgPgEgSQgBgHAAgHQAAgLAFgLQABgDABgCAiBmcQgnAGgOAFQgIgCgIgCQgngGgnAEQgcAEgVAQQgVABgUAFQgKACAAADQgYgYgXAVQgKAJAAAOQgzgFg0AfQgzAggKAKQgGAFgFAFAg4nPQgQAUAYAGQAPADAMgKAAclfQgCABgCACABSh9QgCAJADAHQACACACACQADAEAGACQAHAEAKgDAB8hUQgDAAgCABQgCABgBABQgDACgCAEQgCAEACAGQABACABADQAEAIAKgBAABhsQgCAKAEAGQAEAGAKACQAKABAHgBQACAAACAAQADgBADAAAAjg9QgJALACAHQABAGAMACQAHABAHAAAC2BaQANgJANgIQALgHALgFIAAAAQAJgFAJgFQAJgGAJgCAh4FEQAdgSAdgTQAhgWAigSQAjgTAZgdQAXgbAbgZQAdgaAegYQAEgEAEgDQAdAdAgAYQAfAXAeAUQAWANAQgBQAIADAIACQAIACAJAAQgIALgOAHQgQAIgKAQQgWAjAFApQAEAoAZAfQAJAJABAOQABAQAHABQAAgVAkgCAgggiQABgLgCgJQAAgBAAAAQgBgGgCgFQgBgBAAgBQAAgBAAAAQgDgGgFgGQgCgEgEgDAgtgkQgUANgFASQgXgGABAVQAAABAAACQACADADABQAOAFADADAhFhmQgWAHgTgDIAAgBAhcANQgQAKgUAPQgLAIgLAJQgPALgOANQgVASgSAVIABAAQgBAAAAAAQAAAAAAAAIAAAAQAAAAABAAQAtgEAXAiQARAagDAeQgBAFAAAEQgCAXAEAWQABABAAACQABAFACAFQADAJgCAJQAEAVAFAOAhGgFQAAABAAABQAAADADACAiGECQgPAQgQALQAEALAFAIQAFAIAHAGQACACADACQAAAAAAAAAiQE+QACACADACQAKAIAGgEQABgBABgBIABAAAEsiIQAiAJAXAYQAXAXAZAWQAbAXAYAbQAaAcAYAeQAYAhAHAqQACAaAIATIAAABAIjCqIABABIgBAAQgFADgFAEAF3DNQAvAMAnABQAoAAAmgHQAAAAAAAAQAAAAAAAAQgMAdgXAUQgUASgZAMQgUAJgNAQQAHAeAeALQAKAEAMABQAPgLALAPQAQgsAPAXQAegpACAoQAAAHgIAEQgJAEgJgBQgDgIgDgFAIbDTQAHgCAJgCQgHgdAAgHQAOgKARgFAHlFpIAAAAQAMgGAOALQAAgBAAAAAGqE7QgJAKgGAOAi2mRQgGACgFADQgMAHgJANAmPkPQgKgKAAgVAoBj2QgPgJgNgNQgDgDgCgDAoJj0QAEgBAEgBAmPkPQgNAYgRAPQgLAKgOgBQgJgBgKgDQgQgFgPgIQgFgDgEgDAo7jqQACgDADAAQAHAAAGgBQANgCATgEQgJACgKACQgGABgHABQgLACgHACgAqHjjQAHAFAJgBQADgBADgCQADgCADgDQACgBABgDQAGgBAGABQAJACAKABQACAAAMgCAjLj0QgIAIgRAEQgTADgTACQgHABgGAAQgHABgHABQgMABgMABQgLAAgMgCQgMgCgKgIQgKgIgKgKQgHgIgKgLAlFmDQgJAIgIALAqGk1QgDgEgCgJQgBgFgBgFQgCgIgCgJQgDgPACgOQgGgOgHAPQgHAMADAMQACABgBACIAAAAQgBAFABAGQAAAEABAHQAAACAAADQABAKADAJQgCAAgCABQgBAAgBgCQgDgFgCgKQgBgDgBgDQgCgJgBgJQgDgOABgOQgHgKgKAJQgHAXAKAVQAAgIAAgIAqEk0QABAAABgBQgBgEgBgGQAAgCgBgDQAAgFAAgEQABgHABgHQAAgEABgFQAAgCAAgBQgBgFADgFQAFgLAIAFQgDAMAAAMQAAAHAAAIQAAAGAAAFQABAHABAFQABADABACQACAAACABQAAgCAAgCQABgHgBgGQAAAAAAgBQAAgHABgGQAEgGAEAAQAAAOACAOQABAHABAFQAIAEAEAMAqileIAAAAQAAAAAAAAAqjlhQABACAAABAqEk0QgBAAgBgBQgHgEgFAKAqEk0QgBgBAAAAIgBAAAqEk0QABABACAGAqKkAQgJgMgJACQgEABgEACQgDACgCAAQgHACgGgDQgCAAgBAAQgIABgFgGQgHAFgBAIQABAPAJAGQAJAGAIgCIABgBIgBABQAAAAAAAAAphkwQgCgEgMAFQgBgDgCgCAq9lJQAAAUAGATQAFAQAJANAqyjmQABAAADAAQABAAABAAQAEAAAWAIQAFABAGgGQAAAAABgBQADgDACgGAjaB2IAAAAAjAEtQgJgOgHgQAjaB2IgEAFQgFAHgGAGQg8BGgYAYQgSATABAaQABACAAABIAAABQAEAkAOAcQARAgAVAeQAWAgAbAdQABABAAAAIACABQASALAPANAjhHUQAJAFAIAGQAJAGAHAHQAGAGAGAFQAJAKAIALQAGAJADAKQAHAWgKAcQgCAFgBADQgEAIgDgCQgMAMgOAKQgRALgRAKQgVAMgSgEQgTgFgRARQgLANATgBAkNLIQAAgKANgKQAFgEAGgCQASgFASACAhEIAQADABADACQANAGANAGQAfAMAPAaQAPAYgZAWQgIABgJAEQgUAKgVAFQgCABgCAAQgRAEgRACQgTADgRAMQgSALgPAPQgPAPgQAPQgQAPgVAHQgWAHgLgPQgEgFABgGQgBAAgBAAQgTgBAFgNQACgEADgEQANgSAUgDAkdK6QgLADABgMQAAgEABgDQADgQAUADAIGF8QAAgBAAAAQgDgIgEgFAIGF8QADAJgIAIQgPANgRgKQgBADgCADQgPAUgWgCQgGgBgGgCAHWF6QgHgEgHgBQgegIgDAqAHhGQQAHgOgSgIAG3GxQgVAhg0gHQgJgPAAgKAjAEtQAKAPAMANQAYAbAOAhQAMAVgBAbQAAAlAbAUQAMAKAOAIQAJgGAIgGAg2IxQAPALgLAUQgEAFgEADAIkFlQgNAYgRgBAilEdQgNAKgOAGAHlFpQgHAFgIAM");
	this.shape_6.setTransform(99.3,62.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgwAbQgLgBgGgMIAAgBIgBgCQgIgSAMgPQADgEAEAAQgNATAKARQAFAKAHABQAHAAAIgIQAEgEABgEIABAHQgBALgLADIgIABIgDAAgAAgASQgFgMABgMQABgKAEgFQgDAXAUAHQALADAJgHQgGAOgNAGIgHACQgIAAgEgJg");
	this.shape_7.setTransform(95,9.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhHG2IAAgBIgGgEQgGgGgFgIQgFgHgEgLQAQgMAPgPIABACIACAKQAEAKgCAJQAEAVAEAOIAAAAIgCACIgEABQgGAAgGgFgAgVmDQgHgBgGgJQgJgSAMgUIAFABQAOAFAFAOQADAEACAFIABAEQgBADgEAFQgIAHgGAAIgBAAgABLmPQgVgHADgXIABgBQAJgMADAAQAIAAAHAFQAIAFADAIQAEAHgDAJIgBACIgBADQgGAFgHAAIgHgBg");
	this.shape_8.setTransform(92.6,50.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AkpDEQACgJgDgKIgDgKIgBgDQgEgWACgXIABgIQADgfgRgaQgXgigtAEIgBAAQASgUAVgRIAdgZIAWgRQAUgPAQgKQACADADACQAOAFADACQgDgCgOgFQgDgCgCgDIAAgDQgBgWAXAGQAFgSAUgNIADAHIACAGQAHAGALAFQAPAHAPAEIARAEIACAAIARACIAMAAIAXgBIAhgDIAKgCIADgBIASgFIACAAIAlgPIAigOIAggSQASgMAMgTQALgRAOgPQABgJgDgGIgBgDQAiAIAXAYQAXAXAZAWQAbAXAYAcQAaAcAYAeQAYAhAHApQACAaAIAUIAAAAIABAAIAHAkIgQAEIAAAAQgmAHgoAAQgngBgvgLQgJgBgIgCQgIgCgIgDQgQABgWgNQgegUgfgXQgggXgdgcQANgKANgIIAWgMIAAAAIASgKQAJgFAJgCQgJACgJAFIgSAKIAAAAIgWAMQgNAIgNAKIgIAFQgdAZgdAZQgbAZgXAbQgZAegjASQgjATghAVIg6AmQgFgOgEgVgAFxBUIAKgHIgKAHgAjrhbQgDgDAAgCIAAgBIAAgCIAAACIAAABQAAACADADg");
	this.shape_9.setTransform(116.1,71.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFF99").s().p("ABZCPIgNAAIgEgQIAEgLQAUAAAGgUQAFgSgGgRQgCgEgCgCQARgEANgNQAPgNACgTQgCATgPANQgNANgRAEIgPADIgHACIgKAAQgSABgOgPQgGgHgFgIQgFgJgDgJQgGgQgLgNQgNgOgVABQgSABgXAEIAfgKIAJgCIAMgBIABAAIAAAAQAIAAAIACIABAAQAIACAGAHIAVAXQANAPATADIAOACIACAAIABAAIABAAIAAAAIADAAIAEAAIAIABIAMACIABABQAGABAHAAIAAAAIAAAAIAKgBQAJgCAHgNIABgGIgBAGQgHANgJACIgKABIAAAAIAAAAQgHAAgGgBIgBgBIgMgCIgIgBIgEAAIgDAAIAAAAIgBAAIgBAAIgCAAIgOgCQgTgDgNgPIgVgXQgGgHgIgCIgBAAQgIgCgIAAIAAAAIgBAAIgMABIgJACIgfAKQgSgHgSAEIgPAGIgPAIQgOAKgHAPQgDAHAAAIQAAAJAFAJIABABQgCAQADAQQAEASAKAPQAIAPgFAQQgEAAgDgCIgGABQgWADgEgVQgHgMgJgLQgZgegHgkQgIgnAYghQAWgeAggTQAigVAngEQALgKAQgJQAQgIARgGQARgFARAAQAUABAOAOQAMANAHAQIAFAKQAGAKAHAKIAQAXIgQgXQgHgKgGgKQANAIASAEQASAEARgGQAKgEAGgIQACALgCAMIgCAHQAOgKAPgNQAOgMAKgOQAEAHgBALQgDAlgLAjQAQgDANgKIAFgFIAOgLQgCAKgEAKQgTAsggAmQARgIAQgKQAGgEAGgDIgFANQgMAigbAZIgQAPIgJAIQgFAEgCAHQgIABgHAEQgKAEgIAGIgNAJQgDgHgIgBgACPBPIAIgGIASgSIAIgJIgIAJIgSASIgIAGIgFABIAAAAIgDgBIAAAAIAAAAIADABIAAAAIAFgBgAilA1IgDAQIgCAJIACgJIADgQIACgIIgCAIgACygHQAAAAABAAQAAAAAAgBQABAAAAgBQABAAAAgBIAAgBIAFgQIgFAQIAAABQAAABgBAAQAAABgBAAQAAABAAAAQgBAAAAAAIAAAAIgBAAIgBAAIAAAAIAAAAIABAAIABAAIAAAAgACNg8IADgIIgDAIgAioAbQAAgIADgHQAHgPAOgKIAPgIQgIAKgGALIgMAWIgGAQIgCAHQgFgJAAgJgAiBgVIAAAAgAhOgYIAAAAg");
	this.shape_10.setTransform(101.5,4.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFCC99").s().p("AkKKWQgEgFABgFIgCAAQgTgBAFgOQgLAEABgMIABgHQgTAAALgMQARgRATAEQASAEAVgLIAigWQAOgJAMgMQADACAEgIIADgJQAKgbgHgWQgDgLgGgJIgRgUIgMgLIgQgNIgRgMIgCAAIgBgBQgbgdgWggQgVgfgRgfQgOgdgEgkIAAAAIgBgDQgBgbASgSQAYgYA8hHIALgMIAEgFIAAAAIABgBQAtgDAXAhQARAagDAfIgBAIQgCAXAEAXQgPAQgQALQgNAJgOAHQgJgPgHgQQAHAQAJAPQAKAOAMANQAYAcAOAhQAMAUgBAcQAAAlAbAUQAMAJAOAIIAGADIAaAMQAfANAPAaQAPAXgZAWQgIACgJAEQgUAKgVAFIgEABIgiAGQgTACgRAMQgSAMgPAOIgfAfQgQAPgVAGQgHADgGAAQgMAAgIgLgAj1JyQgGABgFAEQgNALAAAKQAAgKANgLQAFgEAGgBQANgEAOAAIABAAIAAAAIAEAAIABAAIACAAIABAAIgBAAIgCAAIgBAAIgEAAIAAAAIgBAAQgOAAgNAEIAAAAgAkYJ1IgFAIIAFgIQANgSAUgDQgUADgNASgAkmJuQADgOAPAAIAAAAIAAAAIAFAAIgFAAIAAAAIAAAAQgPAAgDAOgAgyITQgEAGgEACQAEgCAEgGQAEgIAAgHQAAgJgIgHQAIAHAAAJQAAAHgEAIgAFuGPQgJgPAAgKIAAAAQAAgVAkgDQgkADAAAVIAAAAQgHgBgBgRQgBgNgJgKQgZgfgEgoQgFgpAWgjQAKgQAQgHQAOgHAIgLQAvAMAnAAQAoABAmgHIAAAAQgMAdgXAUQgUASgZALQgUAJgNAQQAHAfAeALQAKADAMACIAAAAQAMgHAOALIAAAAQAQgtAPAXQAegoACAnQAAAHgIAEQgJAFgJgCIgGgNIAGANQgNAZgRgCIAAgBQgDgHgEgGQAEAGADAHIAAABQADAJgIAIQgPAOgRgKQACgEAAgDQAAgKgNgGQAIgLAHgFQgHAFgIALQgHgDgHgCIgIgBIAAAAIAAAAQgXAAgCAjQACgjAXAAIAAAAIAAAAIAIABQAHACAHADQANAGAAAKQAAADgCAEIgDAFQgPAVgWgDIgMgDIAMADIgCAJQgRAcgnAAIgRgBgAGbEWQAGgNAJgLQgJALgGANgAG5FrIAAAAgAHWE9IAAAAgAArg4IgRgBIgCgBIgRgEQgOgEgPgGQgLgFgHgHIgCgGIgDgHQAFgIABgHQAAgHgFgGIgBgBQgBgCgDgMIAEgCQAFAGADAHIAAAAIABACIADAMIAAAAIAAAAQACAHAAAIIgBAFIABgFQAAgIgCgHIAAAAIAAAAIgDgMIgBgCIAAAAQgDgHgFgGIgGgHQgIgIgKgGIAFgDIAUgQIASgOIAFgEIASgMIAggWIAOgIIgOAIIggAWIgSAMIgFAEIgSAOIgUAQIgFADIAAAAQgVAEgUAAQgmgRgagfQgZgegFgfQgCgTADgRQgIAIgRADQgTAEgTACIgNABIgOACIgYABQgLABgMgCQgMgCgKgIQgKgIgKgKIgRgUQgKgJAAgWQAAAWAKAJQgNAYgRAQQgLAKgOgCQgJgBgKgCQgQgFgPgJIgJgFQgPgKgNgNIgFgGIAFAGQANANAPAKIgIABIggAHIgNABQgDAAgCACIgOACIgTgCQgGgBgGABIgDAEIgGAFIgGADQgJABgHgFIABgBQADgEACgFQgCAFgDAEIgBABQgGAFgFgBQgWgHgEAAIgCAAIgEAAIgBABQgIACgJgGQgJgGgBgPQABgIAHgFQAFAGAIgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAGADAHgCIAFgCIAIgDIADAAIAAAAIAAAAQAGAAAHAHIAAAAIACABIAAABIAAgBIgCgBIAAAAQgHgHgGAAIAAAAIAAAAIgDAAIgIADIgFACQgJgNgFgQQgGgTAAgUIAAgCIAAgOIAAAOIAAACQgKgVAHgXQAKgJAHAKQgBANADAOIADATIACAGQACAKADAFIACACIAEgCQgDgJgBgKIAAgEIgBgLIAAgLIAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBgBAAQgDgMAHgNQAHgOAGANQgCAPADAOIAEASIACAKQACAJADAEIACAAIACAAIgCgKIgBgFIAAgKIACgNIABgKIAAgCQgBgGADgEQAFgMAIAFQgDAMAAANIAAAOIAAAMIACAMIACAEIAEABIAAgDQABgHgBgGIAAgBIABgOQAEgFAEgBQAAAPACAOIACAMQAIAEAEALQAKgJAzggQA0ggAzAFQAAgNAKgJQAXgWAYAYQAAgCAKgCQAUgFAVgBQgJAIgIAKQAIgKAJgIQAV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");
	this.shape_11.setTransform(99.3,68.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(0.1,1,1).p("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gIANgKALQgRATgKgJAIvAQQgQgEgPgHIAAAAAHWAFQAbAHAfgHALdEsQAEgPAKgFQABAAAAgBQAFgCAFgBQAQgBAEAQQgKAGgIAKALSEUQAUgLAGAOAipn4QgJgEgJACQgGACgGAEQgBABgCACQgCADgBADQAAACAAACQACAFACAEQACAFAEADQAOAPAUAAQAFAAADAAQAMgCAAgKQAAgFgCgFQgCgGgDgFQgEAHgBACQgEAIgJADQgIADgJgEQgIgDgBgKQgBgJAGgIQAHgJALAEQACAAACABQALAGAGAJAjmn3QADgFAEgEQAAgBAAAAQACgCADgCQADgCADgBIABAAQAAAAABAAQAEgBAEgBQAHAAABAAAgVoMQAVAjgpACQAAAKAAAFQABAFABABQACABABABQAcANAegCAiLl6QALgIAKgJQALgJAJgLQAMgOgBgRQgBgMgHgJQAMgDAMAHAjxnUQgBgBgCgBQgDgCgDAAQgEgBgEABQgIABgGAMQgBADgBAEQgBAGABAGQACAFADAFQADADADADQAPANATgGQALgEACgGQADgHgFgKQgBgDgCgCQgBAFgEAFQgGAJgKACQgKACgGgIQgGgIABgKQABgLAIgCQAEgCAJgBQAHADAGAGQAAAAABABQADADADAGAkinHQABgVAQgMQAIgGAHAGAjvoNQgSgFgMgXQgtgGgUAjAklmdQADAFgDACQgDADgJAAQgSAEgQgTQAAAAgBAAQgRgDgTAGQgkANgfAWQgdAUgcAQQANABAMAEAn8jwQAeAUAjADQAqAEAdgcQAUgSATgRQAHgHAHgGAkvkUQAHAkAXAbQAXAaAeAPQAdAPAhADQAmADAmgGIAAAAAkvkUQAXADAXAJQAPAGANgJAlNkUQAPgCAPACAi7mfQAHAXAXgLQAQgHgJgPArvAzQgJAGgJAGQgNALgSAEQgFABgEgBQgZgLAagNQARgIAQgKQAQgJAQgGQAEgBADgDQAJgGABgKQACgTALgLQAAgUABgUQACgoAMglQAMgiANgiQANgjAegYQAegZAjgFQAOgkAkgEQAIgBAHAAAqLgjQANAOAPAMQAJAIABAKQACANAQAEQAIACAEgBQAPAGgGANQgJATgXgDQgUgDgMgPQgGAQgDARQgDASgCAXQgBAEgCAEQgBADgBADQgIAUgVgBQgGAAgCgFQgGgMAJgQQAKgRgBgUQAAgBAAgBQgBgQgBgMQgGAMgHANQgJARgJAQQgKARgOAJQgUANgGgaQAAAAgBgBQAIgFAGgKQAJgQAJgRQADgGACgFQAFgLAEgKAoFjfQgGAmgZAaQgaAbgbAYQgeAbgRAkQgCAFgBAFQgBAFAAAEQgBAEAAAFArvAzQACgEACgDAr+B5QgDACgEACIgBAAQgCACgEgCQgXgIAUgTQAOgOAIgQQAFgJAFgIAgnhbQgQANABASQAAABAAABQABADAEADAg8iPQgKgIgMgGAjPDCQgEgGACgLQALgnAPgmQARgpAcgjQASgWAVgSQAQgPANgKQgBgBgBgCQgHgWAZAGAhGgpQACADAEABQAPAFAEADAgVC+QgfgdglABQgkAAgkACQglACgJAcQgWATgQAjQgSAoAYAjQAUAfAiAQQAhAPAlAKQAlAKAgATQAgATAZAaQAKAJAGAKQANAWgCAcQAAAFAAADQgCAIgDgBQgIALgLAKQgOALgOAKQgRAMgTgEQgUgFgMARQgIANATgBQAAADABAEQADAMALgDQAAgEACgEQAHgSATgDAg4KDQgCANATABQABAAABAAQgDgJAKgLQAEgEAFgCQARgFARACAglKRQAKAAAEgKAglKRQACAGAFAFQAPAPATgHQATgHALgPQAMgPALgPQAKgPAOgLQAOgMASgDQARgCAQgEQACAAABgBQATgFASgKQAHgEAJgBQASgWgWgYQgYgagigMQgPgGgPgGQgDgCgEgBQAHgGAGgGAhHJzQgBgQAUADAMPFNQgDgBgDgCAJNFSQgFgGgDgJAIJF4QgNAWAaABACDH6QATALgFAUQgCAFgEADAhWEgQApAHAfAXQAeAYAMAoQAKAlAhAUQAQAKAQAI");
	this.shape_12.setTransform(82.2,67.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag2AlIgGgGQgEgFgBgFQgBgGABgGIACgHQAGgLAIgBQAEgBADABIAHACIADACQgJABgEACQgIACgBAKQgBAKAGAIQAGAIAKgCQAKgCAGgJQADgFACgFIADAFQAFAKgDAHQgDAGgKAEQgGACgGAAQgLAAgLgJgAANgIIgGgIIgEgJIgBgEIAEgGIADgDQAGgEAGgCQAJgCAJAEQgLgEgHAJQgGAIABAJQABAKAIADQAJAEAIgDQAJgDAEgIIAEgJQAEAFACAGQACAFAAAFQAAAJgMACIgIAAQgUAAgOgOg");
	this.shape_13.setTransform(61.3,21.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AjYCyQgegdglAAQgkAAgkADQglACgJAcQgEgGACgLQALgnAPgmQARgqAcgiQASgVAVgUQAQgOANgKIgCgEQgHgVAZAGIAAACQABACAEADQgEgDgBgCIAAgCQgBgSAQgOIAGAIIAEAGQAIAGANAFIAhAKIASAEIACABIARACQASAAARgBIAggEIAKgCIADAAIASgGIAigOIAcgPIAbgSQAOgLAGgTQAGgSAKgPQAYATAjAGQAkAEAkgBQAiAAAigDQAngFAnADQAKABAEgFQAKAZANANQgsgNgfAZQgeAXgPAjQgMAZADAbQABAJAEAKIACAHIgCADIgEgBQgdgNgggHQgjgFgjgEQgmgEgjAGQgiAEgkAKQgJACgJAHIgDgEIAAAAIAbgaQAYgWAbgRQgbARgYAWIgbAaIAAAAIgBAAIgYAZIg0AyQgdAbgZAeQgdAlgdADIgJgIgAkCgxQAPAFAEACQgEgCgPgFQgEgBgCgDQACADAEABg");
	this.shape_14.setTransform(101.6,69.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCC99").s().p("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");
	this.shape_15.setTransform(82.2,74.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFF99").s().p("AGrFQQAdAFAMgCIgLAIQgPgEgPgHgAm4hXIAAgBIgBAAIgIgMQgQgagCggQgCgnAfgaQAdgaAnAHQAEglAkgVQAjgUAnAGQAoAGAmgGQAmgGAcgZQAFAJABAFQABAFgDAOIAGgEQARgLAKgPIACgEIABACQAQAigXAgQATgWAIgYQAGAygeAtQgKAOgOAJQgGANgQAAQgaADgdgJQgjgLglgJQgrgJgWAhIgMACQgHABgHgCQgSgFgMgXIgBAAIAAAAIgBAAIgKgBIAAAAIAAAAQgjAAgRAcIgBACIABgCQARgcAjAAIAAAAIAAAAIAKABIABAAIAAAAIABAAQAMAXASAFQgsgFgTAqQgHAQgBAOIAAACIAAABIAAACIACALIADALIABABQAEAIAGAIIABABQADAFgDACQgDADgJAAIgGAAQgPAAgNgPg");
	this.shape_16.setTransform(92.3,34.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(0.1,1,1).p("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");
	this.shape_17.setTransform(79.6,66.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("Ai/C8QgngdglABQgkAAgjACQglACAAAcQgDgDgCgFIgCgJIgBgOIAghGIAbhBQANgggEglQADADAFABQAQAFAFADQgFgDgQgFQgFgBgDgDIgDgDQgOgWAbAGIABACQABADAGADQgGgDgBgDIgBgCQgHgSAMgNIAIAHIAGAGQAKAGAPAFIAlALIATAEIACAAIASACQARAAARgBQAQgBAPgDIAJgCIADAAQAJgCAHgEIAdgOQANgHALgIQAMgIAJgKQALgLAAgTQAAgSAFgPQgHgMgLgIIBCADIA+ACQAkABAjAFQAlAGAmAJQAkAIAjANQAaAKAQAKQAKAGAHAGQgOgEgLAAQgWAUgRAYIgXAgIgJATQgMANgJAOQgLASgGAWQgDAMABAfQhUhWi+gCIgBABIgUAaIAAAAIAAAAIgRAZQgRAagSAYQgVAbgOAfQgRAkgcADIgMgIg");
	this.shape_18.setTransform(83.2,68);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFCC99").s().p("AhWLtQgJgHgEgIQgEgHAAgHQAAgHAEgIQAEgFAGgDIABAAIAAAAQAOgFAQAAIABAAIAAAAIAFAAIABAAIAFABIgFgBIgBAAIgFAAIAAAAIgBAAQgQAAgOAFIAAAAIgBAAQgGADgEAFQgEAIAAAHQAAAHAEAHIgCAAQgZgBgEgTQgBgFAAgHQACgXATgFIgFgRQALgCAJgIQAOgOANgRQAKgNAGgRQAFADAAgJQAAgJAHgXQAHgXgvhAQgWgOgXgLQgmgUgogJQgogKgmgQQgogQgegfQgjgjAFgoQAEgjAQgTQgBgcAlgCQAjgCAlAAQAkAAAoAcQgSAPgJAeQgFAQgBAPQApgEAlAKQAnAKAZAfQAZAeARAjQARAiAfAXIAUAOQAVAOAVAMIABAAQAYAJAXAPQgBAIAKAIQAmAigNAfQgMACgHAGQgTAOgWAHIgEABQgUAGgTADQgWADgNARQgNAQgIAVQgHAWgIAVQgIAVgVAJQgIAEgHAAQgQAAgSgPgABQI/QAEgDAAgHIAAgBQgCgcgcgQQAcAQACAcIAAABQAAAHgEADgAjRErIADASIgDgSIgBgOIAAgIIAAAIIABAOgAGPHPQgRgQgEgUQgEgQgCgRQgCgWAQgHIACgCQAFgLACgRQAEggACghQABgjgWgiIgEgGIgBgBQgYgjgOgkQgKgZABgWIAAgCQABgMAEgLIAGgNIAAAAQgWgRgcgEIgIgBQAJgPAMgMIAIgTIAXggQASgYAWgVQALABANADIAGACQAoALAoAPQAmAPABApQAAAhAFAjQAFAlgFAiQgEAagHAYIgFASQgLAegHAhQgJAjgEAiQgCAVAEAIQAJAHAMADQATADAQgFQARgGALgNQALgNAAgSIgBgHQgDgYAWALQgGAFAAAHQAAAIAGAKQgGgKAAgIQAAgHAGgFQAQgKALAOIgBAAQgHAFAAALIAAAEIAAgEQAAgLAHgFIABAAQADgDAGAAQAQgCAIAQQAFgDAHgBQAUgEANASQAOATgPALQgMAHgNgFIgGgDIAGADIgCAFIgDAEIACAgQABATgPAIQgQAIgTADQgSACgTAAQgRAAgRACQgUABgPAJQgOAJgMALQgKAJgNAHQgOAHgRAAQgUAAgRgRgAG/GbQgWgBAAgPIACgIIgCAIQAAAPAWABgAHiFdQgHgGgGgJQAGAJA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FAAgHQAAgGgHgIIgDABIgDAAIgBAAIgGAAIgBAAIAAAAIgBAAIgCAAIgHgBIAHABIACAAIABAAIAAAAIABAAIAGAAIABAAIADAAIADgBQAHAIAAAGQAAAHgJAFgAi8hOIACAAIADAAIgDAAIgCAAIAAAAIgBAAIgEAAIgFAAQgNgCgGgHQgEgFAAgHIABgGIgBAGQAAAHAEAFQAGAHANACIAFAAIAEAAIABAAIAAAAgAh+hhIACAAIAAAAIAAAAIgCAAIAAAAIAAAAQgHAAgGgEIgDgCIgFgGQgGgFAAgFIgBgBQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQACgCAEgCQgEACgCACQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAABIABABQAAAFAGAFIAFAGIADACQAGAEAHAAIAAAAIAAAAgAjwh/IAIgBIgIABIgBAAIgBAAIgCAAIgBAAIgIgBIAAAAQgMgBgHgGQgIgGgFgLQAFALAIAGQAHAGAMABIAAAAIAIABIABAAIACAAIABAAIABAAgAiuiMIAGgBIACgBIgCABIgGABIAAAAIgBAAIgHgCIgCAAQgHgCgFgEIgGgEQgIgHgEgKQAEAKAIAHIAGAEQAFAEAHACIACAAIAHACIABAAIAAAAgAixl5IgBAOQgFAwghAhIgJAHIAJgHQAhghAFgwIABgOQAAgGADgJQgDAJAAAGgAiklqIAFAAIAEgBIACAAIAIgCQAIgDAHgFIAKgGIgKAGQgHAFgIADIgIACIgCAAIgEABIgFAAIgBAAIAAAAIgBAAIgEAAIAEAAIABAAIAAAAIABAAgAnDmTQgFAKgIAJIgQARIAQgRQAIgJAFgKQAEgHAAgIQAAgIgEgJQgEgLgKgKIACAAIAEAAIAAAAIABAAQAIAAAKAEQgKgEgIAAIgBAAIAAAAIgEAAIgCAAQAKAKAEALQAEAJAAAIQAAAIgEAHgAoGmEQAGAAAGgDQAGgEAAgFQAAgGgGgIQAGAIAAAGQAAAFgGAEQgGADgGAAIAAAAIgBAAQgLAAgKgPIAAgBIAAABQAKAPALAAIABAAIAAAAgAp2nNQgIACgBALIAAAHIAAAEIADAIQADAFAGAFIAIAGQAHAFAHACQALAEALgEQAJgDABgHQABgGgIgKIgGgGIgJgJIgBgBQgIgGgHgDIgEgCIgHgCIgFAAIgDAAgAo6nvQgGACgEAEIgCADIgCAGIADAFIAGAJIAJAIQAOALAPADIAKABIAHgBQALgCgDgKQgBgEgEgGIgJgKQgJgKgMgFIgEgCQgHgCgGAAIgGAAgAqQm8QgCgHAAgGQAAgLAIgJQAGgFAJAFQgJgFgGAFQgIAJAAALQAAAGACAHgAltnhQALgTARgQQgRAQgLATgApdn5IgDADIAAABQgDAEgBAFQABgFADgEIAAgBIADgDIAGgEIAAAAIABAAIAIgBIAIgBIgIABIgIABIgBAAIAAAAIgGAEgAjkofIATALIgTgLIgLgFIALAFgAFSonIABAAIAAgBIABAAIABgBQAUgMAXAAIAAAAIAAAAIADAAIABAAIACAAIgCAAIgBAAIgDAAIAAAAIAAAAQgXAAgUAMIgBABIgBAAIAAABIgBAAgAEbpGIAQAKIgQgKIgLgFIALAFgAE6pmQgRAWgYAEQAYgEARgWIAIgLgAEip5IgCANIACgNIABgMIAAgBIAAABIgBAMgAgqp2IAMgDIgMADgAFEqCIAAgFIAAgFIABgeIgBAeIAAAFIAAAFgAnlCUIAAAAgAlEiEIAAAAg");
	this.shape_19.setTransform(81.8,66.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AGcEgQgBgfADgMQAGgVALgSIAJABQAcADAVASIAAAAQgRAOgIAQIAAAAIgFAHQgKAOgRAHQgOAGgFAAQgEAAADgEgAnVjfIgIgGQgFgFgDgFIgDgIQAEgFAFgCQALgEALALQAMALgCAJQgBAGgHAFQgHgCgHgFgAmgkMIgJgIIgGgJQAGgFAGgBQALgCAKAIQAMAJABAJQABAGgDAHQgPgDgOgLg");
	this.shape_20.setTransform(66.8,47.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgdAsQAHgFABgHQACgJgMgKQgLgLgLAEQgFACgEAFIgBgEIAAgHQACgLAIgBQADgBAEABIAHACIAEACQAIADAHAFIABABIAKAJIAFAFQAHAKgBAHQgBAGgIAEQgFACgGAAQgFAAgGgCgAAmAFQADgFgBgGQgBgKgMgIQgKgIgLACQgGABgFAEIgCgEIABgGIACgDQAEgEAFgCQAIgCALAEIAFABQAMAGAJAJIAJALQADAFACAFQADAJgLACIgIAAIgKgBg");
	this.shape_21.setTransform(24.2,21.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFF99").s().p("AiFB6IgBgBIAAgBIgNgLQgYgagMggQgPgnAWgZQAVgaAqAHQgJglAdgVQAdgUApAGQAoAGAlgGQAkgGAUgZQAHAJADAFQADAFACAOIAFgEQANgLAEgQIABgDIACACQAcAigNAgQALgWABgYQAWAygQAtQgFAOgLAIQgBAHgFADQgFADgHAAQgYADgggJQgngKgogJQgtgJgMAgIgKACQgIABgHgCQgUgFgTgWIgBAAIAAAAIgBgBIgKAAIAAAAIAAAAQgkAAgHAdQAHgdAkAAIAAAAIAAAAIAKAAIABABIAAAAIABAAQATAWAUAFQgtgFgGAqQgBAQAEAOIAAACIAAABIABACIAFALIAHALIABABQAGAIAJAIIACABQAEAFgCACQgCACgJABIgGAAQgOAAgTgPg");
	this.shape_22.setTransform(25.8,13.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},2).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_2},{t:this.shape_13},{t:this.shape_12}]},3).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},2).wait(3));

	// Layer 3
	this.instance = new lib.anim_foam();
	this.instance.parent = this;
	this.instance.setTransform(112.6,130.7,1,1,0,0,0,75.9,44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10));

	// surfboard
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(0.1,1,1).p("ANQmqQAFgfgNgWQgbguhCAFQhCAFg+ANQrUF0lIDfQlJDgAAABQgJAIgIAKQgCACgDADQgfAlgWAtQgkBNBKARANQmqIAAABQmaH+x1GnQghAQgmgDQgEAAgEgBQgJgBgIgCQOElALrpvg");
	this.shape_23.setTransform(110.5,120.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#01A321").s().p("AseHaIgIgBIgRgDQOElALrpvIAAAAQmaH/x1GnQgcANgfAAIgMAAg");
	this.shape_24.setTransform(112.9,125.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00CC33").s().p("AtFGpQAWgtAfglIAFgFIARgSIFJjhQFIjfLUl0QA+gNBCgFQBCgFAbAuQANAWgFAfQrrJvuEFAQhKgRAkhNg");
	this.shape_25.setTransform(110.5,120.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,197.5,174.6);


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
		var bgm = createjs.Sound.play('bgmAux',{loop:-1});
		//var vo = createjs.Sound.play('VO');
		
		//volume vars -----------------------------------------
		var mute= false;
		bgm.volume = 0.05;
		var prev_vol = bgm.volume;
		
		//Menu function -----------------------------------------
		function openMenu(){
		
		 window.open ("verb_menu.html","_self");
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
		
		 window.open ("aux_quiz.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("aux_scene4.html","_self");
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


(lib.anim_wave_swellandsurf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.anim_topfoambuildup();
	this.instance.parent = this;
	this.instance.setTransform(179.5,93.1,2.105,1.881,0,0,0,120.9,93.2);

	this.instance_1 = new lib.anim_bottomfoambuildup();
	this.instance_1.parent = this;
	this.instance_1.setTransform(79,271.9,1.995,1.995,0,0,0,116,99);

	this.instance_2 = new lib.anim_risebuildup();
	this.instance_2.parent = this;
	this.instance_2.setTransform(162.7,170.3,2.003,2.003,0,0,0,119.7,115.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.anim_wave_swellandsurf, new cjs.Rectangle(-152.4,-92.9,586.4,562.2), null);


(lib.anim_mick_surfscene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{start:0});

	// timeline functions:
	this.frame_99 = function() {
		this.gotoAndPlay("start");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

	// Layer 8
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("EgnEAX4MBOJAAAMAAAgvvMhOJAAAg");
	this.shape.setTransform(124.9,123.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(100));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgnEAX5MAAAgvxMBOJAAAMAAAAvxg");
	mask.setTransform(124.9,123.3);

	// character
	this.instance = new lib.anim_mick_surf_stable();
	this.instance.parent = this;
	this.instance.setTransform(415.4,-70.5,0.453,0.453);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:317.8,y:-29.6},15).to({x:99.6,y:-16.9},20).to({x:-20.2,y:180.1},36).to({x:-272.6,y:178.3},28).wait(1));

	// wave
	this.instance_1 = new lib.anim_wave_swellandsurf();
	this.instance_1.parent = this;
	this.instance_1.setTransform(405.8,-15.9,1,1,0,0,0,143.7,148.8);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-227.2,y:278.5},99).wait(1));

	// water background
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("EgnEAXwMAAAgvfMBOKAAAMAAAAvfg");
	this.shape_1.setTransform(125,122.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126.7,-30.6,503.3,308.7);


(lib.example3content = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("scroll");
	}
	this.frame_5 = function() {
		playSound("ishallhavecaughttenwaves2");
	}
	this.frame_36 = function() {
		playSound("iwillhavesurfedallday");
	}
	this.frame_73 = function() {
		playSound("scroll");
	}
	this.frame_80 = function() {
		playSound("hewouldhavebeenherebynow");
	}
	this.frame_119 = function() {
		playSound("shecouldhavecaughtthatwave");
	}
	this.frame_154 = function() {
		playSound("youshouldhavebeenthere");
	}
	this.frame_180 = function() {
		playSound("scroll");
	}
	this.frame_188 = function() {
		playSound("theymayhavedriftedsouth");
	}
	this.frame_221 = function() {
		playSound("youmightseeawhale");
	}
	this.frame_254 = function() {
		playSound("scroll");
	}
	this.frame_261 = function() {
		playSound("idolovetosurf3");
	}
	this.frame_291 = function() {
		playSound("hedoescatcheverywave3");
	}
	this.frame_323 = function() {
		playSound("shedidhangten2");
	}
	this.frame_348 = function() {
		playSound("scroll");
	}
	this.frame_354 = function() {
		playSound("theymustcleanthebeach");
	}
	this.frame_380 = function() {
		playSound("yououghttolearntosurf");
	}
	this.frame_416 = function() {
		playSound("scroll");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(4).call(this.frame_5).wait(31).call(this.frame_36).wait(37).call(this.frame_73).wait(7).call(this.frame_80).wait(39).call(this.frame_119).wait(35).call(this.frame_154).wait(26).call(this.frame_180).wait(8).call(this.frame_188).wait(33).call(this.frame_221).wait(33).call(this.frame_254).wait(7).call(this.frame_261).wait(30).call(this.frame_291).wait(32).call(this.frame_323).wait(25).call(this.frame_348).wait(6).call(this.frame_354).wait(26).call(this.frame_380).wait(36).call(this.frame_416).wait(29));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A+nHKIAAuTMA9PAAAIAAOTg");
	mask.setTransform(205,51.5);

	// Layer 3
	this.instance = new lib.example3text();
	this.instance.parent = this;
	this.instance.setTransform(209.8,217.1,1,1,0,0,0,186,134.7);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({y:149},4).wait(68).to({y:55.8},5).wait(102).to({y:-38},6).wait(68).to({y:-133.1},6).wait(88).to({y:-229.8},5).wait(63).to({x:215.5,y:-301.7},4).wait(25));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(4,1,1).p("AeoHKMg9PAAAIAAuTMA9PAAAg");
	this.shape.setTransform(205,51.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.78)").s().p("A+nHKIAAuTMA9PAAAIAAOTg");
	this.shape_1.setTransform(205,51.5);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(445));

	// Layer 1
	this.instance_1 = new lib.anim_mick_surfscene();
	this.instance_1.parent = this;
	this.instance_1.setTransform(83.5,29.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(445));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.2,-227.9,822.8,562.2);


// stage content:
(lib.aux_scene5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene5:0,scene5repeat:427});

	// timeline functions:
	this.frame_443 = function() {
		this.gotoAndPlay("scene5repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(443).call(this.frame_443).wait(1));

	// Layer 2
	this.instance = new lib.example3content();
	this.instance.parent = this;
	this.instance.setTransform(456.9,138.9,1,1,0,0,0,389.7,97.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(444));

	// main
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ag0BAQgMgKAAgMQAAgGAEgEQADgEAHAAQAJAAAEAJQAGAMATAAQAQAAAQgHQAQgIAAgJQAAgMgKgEQgHgDgVAAQgRgBgOgFQgRgIAAgPQAAgTAUgQQAUgQAYAAQAJAAAOAFQARAFAAAHQAAAGgDADQgEAFgGAAIgOgCIgNgCQgNAAgKAGQgMAGAAAHQAAAEAEACQADADAHABIAYABQAVACANAKQAOALAAAVQAAAZgdANQgWAKgaAAQgZAAgPgLg");
	this.shape.setTransform(208.9,25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgvBLQgFgFAAgGIAAhnIgBgNIABgNQABgJAQgCQAHgCASAAQARAAARAMQAUAOAAAUQAAAMgEAHQgEAHgIAGQAKAEAHAKQAJAKAAAKQAAANgPAMQgJAIgKADQgWAJgjAAQgGAAgEgEgAgaA0QARAAATgGQARgFAAgFQAAgIgLgGQgJgEgHgCIgaAAgAgZgfIgBAVIAOAAQAdgCAAgUQAAgHgJgFQgIgIgKABIgQAAg");
	this.shape_1.setTransform(196,24.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("Ag0BJQgFgEAAgGIAAgVIABgWIAAhOQAAgHAEgFQAFgGAIAAIAZACQANACAJAFQAqAVAAAfQAAAMgJAJQgJAKgRAHQAaAOANAPQADAEABAFQgBAGgEAEQgEADgGAAQgFAAgEgEQgegbgigLIABAfQAAAGgEAEQgEAEgGAAQgFAAgEgEgAgeADIAFAAQAXAAALgFQAFgDAFgEQADgEAAgCQAAgLgOgKQgMgKgOgBIgMgBg");
	this.shape_2.setTransform(183.2,24.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgtBLQgKgKgBggIACgmIADgnIgBgKIgCgKQAAgPAOAAQAFAAADACIAVgEIATgBQAZAAAPAFQAIAEABAJQgBAFgDAEQgEAEgGABIgEgBQgQgEgPgBIgPACIgRADIgBAmIAlgDIAXgCQAGAAAEAEQAEAEAAAFQAAALgMACIgYACIgpADIAAAUQAAAUADADQABAAALAAIARAAIASAAIAGAAIAFgBQAGAAAEADQAFADAAAHQAAALgLADQgKABgeAAQggAAgKgIg");
	this.shape_3.setTransform(170.6,24.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgVBFQgLgcgPg1IgIgaQgFgTgBgHQABgFAEgEQAEgDAGAAQAJAAADAJIAEARIAJAfIAPAxIAXg6IAIgXQAGgPAGgHQAFgFAFAAQAHAAADAEQAFAEAAAFQAAAFgDADQgFAIgFAKIgHAUIgaBDQgFAMgGALQgEAIgIAAQgJAAgFgKg");
	this.shape_4.setTransform(157.4,24.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgXBKQgEgEAAgGQAAgEAUgkIgVggIgfgxQgCgDAAgEQAAgFAEgEQAEgEAGAAQAGAAAFAHIAIALIAQAdIARAcIAWguIAJgUQADgJAJAAQAGAAAEAEQAEAEAAAFQAAAEgFALIgUAtQgNAbgJAQIgPAeQgGAJgHAAQgGAAgEgEg");
	this.shape_5.setTransform(135.3,24.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("Ag1BJQgDgEAAgGIAAgVIAAgWIAAhOQAAgHAEgFQAFgGAJAAIAYACQAOACAIAFQAqAVAAAfQAAAMgJAJQgIAKgSAHQAaAOANAPQAEAEAAAFQAAAGgFAEQgEADgGAAQgFAAgEgEQgegbgigLIABAfQAAAGgEAEQgEAEgGAAQgFAAgFgEgAgdADIADAAQAZAAAKgFQAFgDAEgEQAFgEAAgCQAAgLgPgKQgLgKgPgBIgLgBg");
	this.shape_6.setTransform(123,24.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AAiA4QgFgMgEgPQgHABgRABIgWADIgPAgQgFAHgHAAQgGAAgFgEQgDgDgBgGQABgFAOgdIgCgFQABgFAJgDIAfgxQAXglAGAAQALAAADANIAHAgIAOA/IAFANQADAIAAAFQAAAFgEAEQgEAEgFAAQgIgBgIgRgAgHAJIANgBIANgCIgGggIgUAjg");
	this.shape_7.setTransform(109,24.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgtBHQgEgEAAgFQAAgGAEgEQAEgEAGAAIATgBIAAgsQAAgaACgYIgWABQgFAAgEgEQgEgEAAgGQAAgFADgEQAEgDAFgBIAdgBQASAAAdAEQALACAAAMQAAAGgEAEQgEADgEAAIgagDIgBAvIgBAsIAbgBQAGAAAEAEQADAEAAAGQAAAFgDAEQgEAEgGAAIgRAAIgRAAIgTACIgTACQgGAAgEgEg");
	this.shape_8.setTransform(96.1,24.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgzA7IACgfQACgqAAgzQAAgGAEgEQAEgEAGAAQAGAAAEAEQADAEAAAGQAAA0gCAqIgCAYQAXAAAjgLIAFgBQAGAAAEAFQADAEAAAFQAAAIgIAEQgMAFgYAEQgVAEgOAAQgYAAAAgVg");
	this.shape_9.setTransform(85.6,24.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgtBHQgEgEAAgFQAAgGAEgEQAEgEAGAAIATgBIAAgsQAAgaACgYIgWABQgFAAgEgEQgEgEAAgGQAAgFADgEQAEgDAFgBIAdgBQASAAAdAEQALACAAAMQAAAGgEAEQgEADgEAAIgagDIgBAvIgBAsIAbgBQAGAAAEAEQADAEAAAGQAAAFgDAEQgEAEgGAAIgRAAIgRAAIgTACIgTACQgGAAgEgEg");
	this.shape_10.setTransform(74.2,24.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AAdA4IgNgTIgNgRIgdAiIgSATQgFAEgFAAQgGAAgEgEQgEgEAAgFQAAgFADgEIASgTIAiglIgUgZIgLgOQgHgJgGgEQgFgFAAgGQAAgFAEgEQADgEAGAAQAGAAAIAHQAHAGAEAFIAMAQIARAWIAYghQATgXAHAAQAGAAAEAEQAEAEAAAFQAAAFgDAEIgUAYIgYAfIAVAdIAVAbQAEAEAAAFQAAAFgEAEQgEAEgGAAQgKAAgPgWg");
	this.shape_11.setTransform(61.4,24.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgnBCQgZgTAAgxIAAgNIABgPIAAgLIAAgKQAAgJADgGQAEgJAHAAQAFAAAEADQAFAEAAAGIAAAQIgBAQIAAAPIgBANQAAAOAEANQAEAPAIAGQAEAEAPgBQAZABAJgtQAFgVAAgqQAAgGADgFQAFgGAIAAQAGAAAEAFQACADAAAFQAAAngDAVQgGAggQAWQgHAKgKAGQgNAIgMAAQgYAAgNgKg");
	this.shape_12.setTransform(46.9,25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AAiA4QgFgMgEgPQgHABgRABIgWADIgQAgQgEAHgHAAQgGAAgEgEQgFgDAAgGQABgFAOgdIgBgFQAAgFAJgDQAOgXARgaQAXglAGAAQAKAAAEANIAHAgIAOA/IAFANQAEAIgBAFQABAFgFAEQgEAEgFAAQgIgBgIgRgAgHAJIANgBIANgCIgGggIgUAjg");
	this.shape_13.setTransform(32.2,24.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.UI}]}).wait(444));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,13.1,839.3,587.2);
// library properties:
lib.properties = {
	id: '7BB0522207491F4AAAB71C498112F7C4',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/bgmAux.mp3", id:"bgmAux"},
		{src:"sounds/hedoescatcheverywave3.mp3", id:"hedoescatcheverywave3"},
		{src:"sounds/hewouldhavebeenherebynow.mp3", id:"hewouldhavebeenherebynow"},
		{src:"sounds/High_Screaming_Gtr.mp3", id:"High_Screaming_Gtr"},
		{src:"sounds/idolovetosurf3.mp3", id:"idolovetosurf3"},
		{src:"sounds/ishallhavecaughttenwaves2.mp3", id:"ishallhavecaughttenwaves2"},
		{src:"sounds/iwillhavesurfedallday.mp3", id:"iwillhavesurfedallday"},
		{src:"sounds/scroll.mp3", id:"scroll"},
		{src:"sounds/shecouldhavecaughtthatwave.mp3", id:"shecouldhavecaughtthatwave"},
		{src:"sounds/shedidhangten2.mp3", id:"shedidhangten2"},
		{src:"sounds/square_bits.mp3", id:"square_bits"},
		{src:"sounds/theymayhavedriftedsouth.mp3", id:"theymayhavedriftedsouth"},
		{src:"sounds/theymustcleanthebeach.mp3", id:"theymustcleanthebeach"},
		{src:"sounds/youmightseeawhale.mp3", id:"youmightseeawhale"},
		{src:"sounds/yououghttolearntosurf.mp3", id:"yououghttolearntosurf"},
		{src:"sounds/youshouldhavebeenthere.mp3", id:"youshouldhavebeenthere"}
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
an.compositions['7BB0522207491F4AAAB71C498112F7C4'] = {
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