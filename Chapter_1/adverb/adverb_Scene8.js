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


(lib.ScoreboardBackground = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgNAbQgHgDAAgEQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAIAEgBIAEACIAFACIAFABIAHgCQAEgBAAgDQAAgGgJgDIgEgBQgHgBgCgDQgEgBAAgFQAAgLAJgEIAJgDIAJgEIAEgBQABAAAAABQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIABAEIAAAEQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAAAIgCgFIgLADQgHADAAAFIADABQAKACAGADQAIAFAAAJQAAAIgHAEQgGAEgIAAQgGAAgGgDg");
	this.shape.setTransform(22.2,-9.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgMAmQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgFAKgXIgSghIgCgEIgBgDQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABABQAAAAABAAQAIAMAIAVIAIgRIAHgPQAAAAABgBQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAIgBADIgRAjIgIAXIgEAJQAAAEgDAAQgBAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape_1.setTransform(17.2,-8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgOAVQgGgHgBgMQAAgKAGgIQAHgKALAAQAKAAAFAJQAEAHAAAKQgBAKgFAIQgGAJgKAAQgIAAgGgGgAgIgJQgDAFAAAGQAAAIAEADQADAEAEAAQAEAAAEgEQAEgEAAgHQABgSgLAAIgBAAQgFAAgEAHg");
	this.shape_2.setTransform(12.1,-9.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgWAmIgCgFIAAgOIABgTIABgUIABgNQAAgBAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAQAHgDAIAAQAIAAAIAGQAJAHAAAKQAAAMgKAGQAHADAEAFQAEAEAAAEQAAAGgHAFQgEAEgFACQgKAEgRAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgAgOATIAAAKQANAAAHgDQADgCADgDIADgDQAAgDgGgDIgJgCIgEgBIgCAAIgCAAIgGgBIAAALgAgMgUIgBATIAHABQAHgBAEgEQAFgFAAgGQAAgFgFgEQgFgEgFAAIgHAAg");
	this.shape_3.setTransform(6.6,-10.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgNAbQgHgCAAgGQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAIAEgBIAEACIAFACIAFAAIAHgBQAEgBAAgDQAAgHgJgCIgEgBQgHgCgCgCQgEgBAAgGQAAgKAJgEIAJgEIAJgDIAEAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAAAIABAFIAAAEQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAIgCgFIgLADQgHAEAAAEIADAAQAKADAGADQAIAFAAAJQAAAIgHAEQgGADgIAAQgGAAgGgCg");
	this.shape_4.setTransform(-5.6,-8.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgEAjIAAgRIABgSIAAgRIAAgRQAAgFAEAAQAEAAABAFIAAARIgBARIAAAYIgBALQgBAFgDAAQgEAAAAgFg");
	this.shape_5.setTransform(-9.3,-10);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgSAWIAAghIAAgFIAAgEQAAgGAFAAQAEAAAAAJQAJgKALABQAEAAACACQACADAAAGIAAAEQAAAGgFAAQgEAAgBgFIAAgDIAAgEQgHABgEADQgEADgDAGIAAAaQAAAGgFgBQgEABAAgGg");
	this.shape_6.setTransform(-12.9,-8.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgEAjQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIAAgJIgBgIIABgMIAAgLQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAIAAALIgBAMIAAAIIAAAJIgBADIgCABIgEgBgAgCgaQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAIADgCQAAABABAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQgBAAAAAAIgDgBg");
	this.shape_7.setTransform(-16.8,-9.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgYAhQgGgGAAgOQAAgNAGgMQAGgNAJgJQAGgFAHAAQAEAAAHADQAJADAAAFQAAAAAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAIgDgBQgIgEgEAAQgEAAgDADIgGAIQgMAPAAAQQAAAJADAEQAEAEAIAAQAHAAAHgFQAHgHACgKQgNABgIAEIgDABQgBAAAAgBQAAAAgBAAQAAAAgBgBQAAAAgBgBIgBgDQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQAKgFAZAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAAAQAAAAABABQAAAAAAABQAAAAAAAAQAAAEgCABQgEAPgJAJQgKAJgMAAQgMAAgGgHg");
	this.shape_8.setTransform(-21.6,-9.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(2,1,1).p("AAAhGIAACN");
	this.shape_9.setTransform(0.6,-9.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1.8,1,1).p("AEOgwIAAiOIkNAAIkOAAIAACOIAADvIENAAIEOAAgAAAgwIABAAIENAAAAAC/IAAjvAkNgwIENAA");
	this.shape_10.setTransform(0.5,2.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAAC/IAAjvIkNAAIENAAIAADvIkNAAIAAjvIAAiOIEOAAIAACOIAAiOIENAAIAACOIkNAAIgBAAIABAAIENAAIAADvgAAAgwgAABi+g");
	this.shape_11.setTransform(0.5,2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ScoreboardBackground, new cjs.Rectangle(-27.5,-19.9,56,42.3), null);


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


(lib.Thinkingbubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("Adverb8_howwav");
	}
	this.frame_14 = function() {
		this.stop();
		playSound("Adverb8_howdShewav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(26));

	// Text and final bubble
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("AgRAtQgDgCAAgDQABgEACgEQADgEAEAAQAEAAADADQABACABADQAAAEgCADQgDAEgFAAQgCAAgEgCgAgNAUQgDgCAAgDQAAgFAIgGIANgJQAIgGAAgEQAAgFgGgGQgGgEgEAAQgDAAgGADQgFAEgDAAQgEAAgCgDQgCgCAAgDQAAgGAKgFQAJgEAGAAQAMAAAJAJQALAKAAAMQAAAMgMAIIgKAHIgIAHQgDAEgDAAQgDgBgDgCg");
	this.shape.setTransform(45.7,15.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6600").s().p("AgQAtQgDgCAAgDQAAgFANgbIgVglIgDgFIgBgEQAAgEACgCQADgDADABQAEAAACACQAIAMAKAWIAIgRIAIgPQADgFAEABQADgBADADQACACAAADIgBAEIgUApIgLAZIgDALQgCAGgGgBQgDAAgCgCg");
	this.shape_1.setTransform(38.9,18.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6600").s().p("AgFAuQgCgCAAgEIAAhQQAAgDACgCQACgCADAAQADAAADACQACACAAADIAABNQAAALgIAAQgCAAgDgCg");
	this.shape_2.setTransform(34,15.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6600").s().p("AAOAsQgDgGgGgHIgIgMIgIAFIAAAQQAAADgDADQgCACgDAAQgJAAAAgKIABgOIAAgOIAAgSIABgTIgBgGIAAgGQAAgEACgCQADgCAEAAQADAAACACQACACABAEIAAAGIAAAGIAAAQIAAAQIAWgWQAEgCACAAQAEAAADACQACACAAAEQAAACgCADIgRAPIAMAQQAJALAAAEQAAAEgCACQgDACgDAAQgFAAgCgEg");
	this.shape_3.setTransform(29.3,15.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6600").s().p("AgRAaQgKgIAAgMQAAgLAJgNQAJgOALAAQAHAAAIADQAKAEAAAGQAAADgCACQgDACgDABQgCAAgEgDQgDgDgIAAQgDAAgFAIQgFAJAAAGQAAAFAEAEQAEAEAGgBQAEAAAGgDIAHgCQADAAACACQADACAAADQAAAEgKAFQgJAEgGAAQgMAAgIgHg");
	this.shape_4.setTransform(22.7,16.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6600").s().p("AgGAqQgDgCAAgDIAAgLIAAgKIAAgNIABgNQAAgDACgCQADgCADgBQADABACACQACACAAADIAAANIgBANIAAAKIAAALQAAADgCACQgCADgDAAQgDAAgCgDgAgEgdQgDgDAAgDQAAgDADgDQACgDADAAQAEAAADADQACADAAADQAAADgCADQgDADgEgBQgDABgCgDg");
	this.shape_5.setTransform(18.2,15.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF6600").s().p("AAMAdQgIADgHAAQgIAAgGgEQgGgEgBgHQgDgPAAgKQAAgIACgKQABgGAHAAQADAAADACQACACAAADIgBAIIAAAIIAAAOIACAKIADABIACAAQAGAAAIgCIAAgKIgBgJIABgUQABgHAHAAQAEAAACACQADACAAADIgBAVIAAALIAAAMIAAADIAAAEQAAADgCACQgDACgDAAQgFAAgCgEg");
	this.shape_6.setTransform(13.2,17);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6600").s().p("AAGAmIAAgDIACgRIgFAAQgMAAgJgGQgJgIAAgMQAAgRAKgLQALgKARgBQADAAACACIAEgBQAEAAACACQACADAAADQAAAQgCAUIgCAUIgCAWQAAADgCACQgCADgEAAQgIAAAAgKgAAHggQgJACgFAHQgEAHAAAIQAAAGAEACQAEAFAGAAQAEgBACgEQADgFAAgPIABgMIgCAAIgDAAIgBAAg");
	this.shape_7.setTransform(6.9,18.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF6600").s().p("AgSAZQgJgIAAgOQgBgMAIgKQAJgMAPAAQALAAAHAJQAGAJAAAMQAAANgHAJQgIALgNAAQgKAAgIgHgAgHgJQgEAGAAAGQAAAHAEAEQADADAEAAQAEAAAEgEQAEgEABgHQABgRgLgBQgGAAgEAHg");
	this.shape_8.setTransform(-4.4,17);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF6600").s().p("AgQAfQgJgEAAgGQAAgGAIAAIAIACIAHABQALAAAAgEQAAgDgIgEIgPgHQgIgGAAgHQAAgNANgDQAHgDAOAAQAFAAADACQAEACABAFQgBALgFAAQgGAAgBgGIgFAAQgNABAAADQAAACAHAEQAMAGAEACQAJAGAAAIQAAAKgKAFQgIAEgJAAQgIAAgHgCg");
	this.shape_9.setTransform(-10.5,16.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgEApQgDgCAAgDIAAgHIAAgGIgBgdIgLgBQgHgBAAgHQAAgEACgCQACgCAEAAIAKABIgBgHIAAgFQABgEACgCQACgCADAAQAIAAAAAPIAAAEIAGAAQAHAAACABQAFACAAAFQAAADgDADQgCACgDAAIgDAAIgDAAIgGAAIABAeIAAADIAAADQAAAOgIAAQgCAAgCgCg");
	this.shape_10.setTransform(-21.3,16);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAOAbIgKAEIgGABQgOAAgGgHQgIgIAAgPQAAgNAKgKQALgKANAAQAGAAAHADQAJADAAAGQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABIgBAFIAAAJQAAAJABAFIADAGIADAGQgBADgCACQgDACgDAAQgCAAgGgFgAgHgLQgHAHABAGQAAAJACADQADAFAGAAQADgBADgBQADgBADgDIgCgUIAAgDIABgGIgCgBIgCAAQgGAAgGAGg");
	this.shape_11.setTransform(-27.4,17);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAOArIgDgNIgBgOIAAgEIAAgFIAAgFQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgGAAgFAFIgHALQAAAWgCAEQgCAFgFAAQgDAAgDgDQgDgCAAgDIABgDIABgQIAAgmIAAgCIAAgJIAAgGIgBgFQAAgDADgCQACgDADAAQAGAAACAHIABAKIAAAMIAAAMQAEgFAFgCQAEgCAFAAQAKAAAFAGQADAEABAIIAAAOIABAMIACALIABACQAAAEgDACQgCACgEAAQgFAAgCgGg");
	this.shape_12.setTransform(-34.2,15.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgEApQgDgCAAgDIAAgHIABgGIgCgdIgLgBQgHgBAAgHQAAgEACgCQADgCADAAIAKABIgBgHIAAgFQAAgEADgCQACgCADAAQAIAAAAAPIAAAEIAGAAQAHAAACABQAFACAAAFQAAADgDADQgCACgDAAIgDAAIgDAAIgGAAIABAeIAAADIAAADQABAOgJAAQgCAAgCgCg");
	this.shape_13.setTransform(-40.6,16);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgSAZQgJgIAAgOQgBgMAIgKQAJgMAPAAQALAAAHAJQAGAJAAAMQAAANgHAJQgIALgNAAQgKAAgIgHgAgHgJQgEAGAAAGQAAAHAEAEQADADAEAAQAEAAAEgEQAEgEABgHQABgRgLgBQgGAAgEAHg");
	this.shape_14.setTransform(32.5,0.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AAQAtIgIACIgIABQgNAAgJgIQgJgJABgNQAAgPAJgKQAIgJANAAIAIABQAEABADABIABgbQABgHAHAAQAEAAABADQADACAAADIgCAZIgBAZIABAcIABACQAAADgDACQgCACgDAAQgFAAgCgDgAgLADQgFAFAAAKQAAAGAFAEQAFAFAGAAIAGgBIAFgEIACgBIAAgWQgBgDgEgCQgDgBgEAAQgIgBgEAFg");
	this.shape_15.setTransform(25.8,-1.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgTAZQgKgHAAgOQAAgNAIgLQAIgLAOAAQAKAAAHADQAJAFAAAJQAAAGgHAFIgNAGIgTAJQADADAEABQAEACAEAAQAIAAAFgEQAFgCADAAQAGAAAAAGQAAAGgKAEQgIAEgJAAQgNAAgJgHgAgHgNQgEADgCAIIANgGIALgHQgDgCgHAAQgEAAgEAEg");
	this.shape_16.setTransform(13.7,0.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AAOArIgDgNIgBgOIAAgEIAAgFIAAgFQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgGAAgFAFIgHALQAAAWgCAEQgCAFgFAAQgDAAgDgDQgDgCAAgDIABgDIABgQIAAgmIAAgCIAAgJIAAgGIgBgFQAAgDADgCQACgDADAAQAGAAACAHIABAKIAAAMIAAAMQAEgFAFgCQAEgCAFAAQAKAAAFAGQADAEABAIIAAAOIABAMIACALIABACQAAAEgDACQgCACgEAAQgFAAgCgGg");
	this.shape_17.setTransform(7.1,-1.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AgQAeQgIgDgBgGQAAgGAHAAIAJACIAHACQALAAAAgGQAAgDgIgDIgPgHQgIgGAAgIQAAgLANgFQAHgCAOAAQAFAAADABQAFACAAAGQAAAKgHAAQgFAAgBgEIgFAAQgNgBAAAEQAAACAHAFQAMAEAEADQAJAGAAAHQAAALgKAFQgHAEgKAAQgIAAgHgDg");
	this.shape_18.setTransform(0.5,0.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF6600").s().p("AAQAtIgIACIgIABQgNAAgJgIQgJgJAAgNQAAgPAJgKQAJgJAOAAIAIABQADABACABIACgbQABgHAHAAQAEAAACADQABACAAADIgBAZIgBAZIABAcIAAACQAAADgCACQgDACgDAAQgEAAgCgDgAgLADQgFAFABAKQgBAGAFAEQAFAFAGAAIAGgBIAGgEIABgBIAAgWQgCgDgDgCQgDgBgEAAQgIgBgEAFg");
	this.shape_19.setTransform(-11.1,-1.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF6600").s().p("AgFARQgCgBAAgDIABgXQABgEABgCQACgCADAAQADAAACACQACACAAADIAAACIAAACIAAAUQAAADgDABQgCACgDAAQgDAAgCgCg");
	this.shape_20.setTransform(-17.2,-4.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF6600").s().p("AAOAhQgHAAgFgOIgDgTIgBACIgJAXIgCAEQgDAEgFAAQgDAAgDgFQgDgFgCgIIgGgfIgBgIQABgDACgDQACgCAEAAQAGAAACAHIABAIIABAIIACAOIAKgdQADgIAFAAQAGAAACAJIAEAQIADAPIAJgjQABgFAGAAQADAAADADQACACABADIAAACQgHAWgGASQgCAGgDAFQgDAEgEAAIgBAAg");
	this.shape_21.setTransform(-23.8,0.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF6600").s().p("AgSAZQgJgIAAgOQgBgMAIgKQAJgMAPAAQALAAAHAJQAGAJAAAMQAAANgHAJQgIALgNAAQgKAAgIgHgAgHgJQgEAGAAAGQAAAHAEAEQADADAEAAQAEAAAEgEQAEgEABgHQABgRgLgBQgGAAgEAHg");
	this.shape_22.setTransform(-31.2,0.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF6600").s().p("AAZAtQgCgDAAgDIgBgNIAAgMIAAgGIgWADIgWAEIgBAMIgBANQAAADgCACQgCACgEAAQgDAAgCgCQgDgDAAgDIABgRIABgRIABgVIAAgWQAAgDACgDQADgCADAAQADAAADACQACADAAADIAAANIgBAOIAAAFIAAAGIAWgEIAWgDIABgVQAAgFACgGQAEgHAEAAQADAAACACQADACAAAEIAAACIgBAHIgBAFIAAAFIgBARIAAAPIAAANIABANQAAADgCADQgDACgDAAQgDAAgDgCg");
	this.shape_23.setTransform(-38.7,-1.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(2,1,1).p("ABui0IjvAAAh1C1IAIAAIAWgBIChAAIA4AA");
	this.shape_24.setTransform(25.7,7.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(2,1,1).p("AFUC1IAvAAQAEAAAEgBQBFgCAygyQA1g1AAhLIAAAAQAAhKg1g1Qg0g1hLAAIgMAAACbC1IAXAAACIi0IoKAAQhKAAg1A1Qg1A1AABKIAAAAQAABLA1A1QA1A1BKAAIIWAA");
	this.shape_25.setTransform(-0.8,7.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AFTC1IAAgBIA4AAIg4AAIiiAAIgWABIgIAAIoUAAQhLAAg1g1Qg1g1AAhLIAAAAQAAhKA1g1QA1g1BLAAIIJAAIDvAAIAMAAQBLAAA0A1QA1A1AABKIAAAAQAABLg1A1QgyAyhFACIgIABgACbC1IAWgBIAAABgACxC0g");
	this.shape_26.setTransform(-0.8,7.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},14).wait(26));

	// Second Bubble
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(1.5,1,1).p("AAbAaQgLAMgQAAQgOAAgLgMQgMgLAAgPQAAgPAMgLQALgLAOAAQAQAAALALQALALAAAPQAAAPgLALg");
	this.shape_27.setTransform(-3.9,34.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgaAaQgLgLAAgPQAAgOALgMQAMgLAOABQAPgBALALQALAMAAAOQAAAPgLALQgLALgPAAQgOAAgMgLg");
	this.shape_28.setTransform(-3.9,34.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_28},{t:this.shape_27}]},9).wait(31));

	// First Bubble
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(1.5,1,1).p("AASgRQAHAHAAAKQAAAKgHAIQgIAHgKAAQgKAAgHgHQgHgIAAgKQAAgKAHgHQAHgHAKAAQAKAAAIAHg");
	this.shape_29.setTransform(5.7,49);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgRARQgHgGAAgLQAAgKAHgHQAHgHAKAAQALAAAGAHQAIAHAAAKQAAALgIAGQgGAIgLAAQgKAAgHgIg");
	this.shape_30.setTransform(5.7,49);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_30},{t:this.shape_29}]},4).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Net = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#090909").s().p("AgIAMIACgKIAOgCIACAKIgIAAQgEAFgHABIABgEgAgEgOIABgBIAAABg");
	this.shape.setTransform(4.3,14.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#191919").s().p("AgfCSIgmgYIgCALQgIgFgGgHQgLgBgIgLQgEgHgDgIQgGgNgEgOIgFgVIgBgEIgBAAIgGgJIAEgBIgBgDIAAAAIgJgWQgFgRgEgRQgCgIgEgHIgHgNIAAgDIgCgBIgBgCQgLgWgDgYIABgBQALgPARgFIAZgGIARAAQAFgBACAFIgBADIgCAEIgFAGIgHgBQgHAAgFACQgHABgFADQgEAEACAGIADABIAcACIAPABIAMAAIAqAAQANAAAOgCIAqgKQAXgEAXgBIAVgFIARgHQAIgEAFgHIgEAAQgKgCAEgLQADgEAEAAQAOgCALAFIADgBQAHAAAGABQAFAEABAGQAEAOgBAOQABAEgBAHQgEAKACALQAEAdgCAeIAAAHIAGAEIACgBIABAAIAAAAIAAADIAAAFIAAAJQgBAUgFAUIgBAIIgBAJQgDACgBAFQgBALADAKIABAIQACASgJAQQgGAIgKABQgTAAgTACIglACIgCAAIgEABIgPACIgZAAQgHAHgJADIgqgLgAAkBdQgKACgJADIgHAEIAIANIAIAPIADABIAAACIAYgDIABAAIABAAIAAgBIABgKQAAgFgBgDIAAgVQgLABgIACgABCCAIAJgBIABgFIABgFIACgIIgBAAIgDgCIgHgHgABgBsQAAAGgCAGIgBAFIAAABIARAAIAUgBQAJAAAIgCQACgBACgDQAEgJAAgJQgDgDACgHIABgDIgBgFIgBgDIgFAAQgXACgXAAQgFANgBANgAgqBsQAEAIAHAFQAFAEAGABQAKAAAJgFIABgCQgEgHgHgDQgJgBgGgFQgEABgFAAIgKgDIADAHgAhKBoQAAAAABAAQAAAAABABQAAAAABAAQABAAABAAIADgCQAGgFAAgFQACgPgKgLIAAgBIgBgEQAAgDgCgBQgFgIgMABIgBAAIAAgDIgMgFIgJgCIAEAUIABAGIADAIIAMAYIAAADIADABIAMABgAgZBUIALADQAGgTgJgPQgTgCgNALQgCAKACAKIAAAAIAOAEIAAAAIAAgCIAEgBIAGABgAAKAgQgBATACATIABACQALAFAOgBQANgEAJgJQAFgMgJgLQgEgFgHgBQgKgDgKgBIgOACgAB4ANIAAABIgDACIgBAAIgIABIgBABQgEADgBADQgBAJAAAJQgBANANABQASACAQgBQADAAACgEQADgJAAgJQABgGgEgFQgIgGgKABIAAgBQgEgFgGAAIgEAAgAgxArIADABQAFABAFgCQAEgEgBgFIACgDIgCAAIAAAAQgDgIgGgGQgEgEgFgBQgJgHgMgBQgUgEgUgJIgRgIQADAKAEAKQACAEAFAFQAHAHAKABIADACQACAJAMAEIAFADQAHAEAGAAQAGACAIgBgAhog9IgZAEQAAARANAKQARANAUgBIAKAAQADgHgBgHQgBgKgEgIQgBgEgEgCQgKgFgOAAIgDAAgAgngvQgEABgEAFIgCAEIACAKQAPAHARABIABABIAMAAQAQAAAPgEQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAgBQAJgLgDgQQgBgDgDgBQgOgFgPAAIgCABQgIAAgDAGIgQAAQgIACgHAFgABchMIgBAAIgCAEIgEAKQgEAPALAKIACABQALABAJgCQAOgDALgIIAFgGQADgMgGgLQgBgDgEgBIgUgBQgHAAgGAFIgBAAIgFgBIgFACg");
	this.shape_1.setTransform(-1.6,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC9900").s().p("AAAAAIAAAAIAAAAg");
	this.shape_2.setTransform(-19.6,-11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Net, new cjs.Rectangle(-19.6,-15.8,36,31.8), null);


(lib.Howaboutthat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_50 = function() {
		this.stop();
		playSound("Adverb8_howAboutDatwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(50).call(this.frame_50).wait(26));

	// Text and final bubble
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgPAsQAAgBgBAAQAAgBAAAAQgBAAAAgBQAAgBAAAAQAAgEACgDQACgDAEAAQAFAAAAAHQAAADgBACQgCADgDAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAgAgLAVQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgEAHgGIANgJQAIgHAAgFQAAgHgGgGQgHgFgFAAQgEAAgGADIgHAEQAAAAgBAAQAAAAgBAAQgBAAAAgBQAAAAgBgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgFAJgEQAIgEAGAAQAKAAAKAJQAKAJAAAMQAAAIgGAGQgDAEgJAGQgJAHgDAEQgCACgCAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape.setTransform(30.2,5.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgDApQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIAAgHIAAgHIgCghIgMgBQgFgBgBgFQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAIAMABIAAgIIgBgHQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAAAgBQABAAAAgBQABAAAAAAQABAAAAAAQAFAAABAJIAAAFIAAAEIAAADIAIgBIAIAAQADACABAEQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgDAAIgDAAIgIAAIABAiIAAADIABADQgBANgGAAQAAAAAAAAQAAAAgBAAQgBgBAAAAQgBAAAAgBg");
	this.shape_1.setTransform(24.5,6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AATAeIgEgFIgKAFIgGACQgOAAgGgIQgGgHAAgQQAAgMAKgKQAJgKANAAQAFAAAGACQAIADAAAFIgBACIgBAIIAAAMIABAMIADAKIACADIAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBABAAAAIgEgDgAgJgOQgHAIAAAIQAAAKAEAEQADAFAHABQAFAAADgDIAGgEIgCgXIABgFIABgGIgEgCIgCAAQgJAAgGAHg");
	this.shape_2.setTransform(18.6,7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAQAsIgCgNIgCgOIABgFIAAgEQAAgKgGAAQgHAAgFAFIgIANQAAAXgCAEQgCAEgDAAQgBAAAAAAQgBgBgBAAQAAAAAAAAQgBgBAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAgBAAAAIAAgDIABgIIAAgJIAAgqIABgKIgBgFIAAgGQAAAAAAgBQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAFAAABAGIABAKIAAANIgBAMIAAAGQAFgHAGgDQAEgDAGAAQAKAAAEAGQACAFABAJIAAALIABAMIACANIAAABQAAABAAAAQAAABAAABQAAAAgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAQgEAAgBgFg");
	this.shape_3.setTransform(12.1,5.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgDApQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAAAIAAgHIAAgHIgBghIgMgBQgGgBAAgFQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAIAMABIAAgIIgBgHQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAgBQABAAAAAAQABAAABAAQAEAAAAAJIABAFIAAAEIgBADIAJgBIAIAAQAEACAAAEQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgDAAIgDAAIgIAAIABAiIAAADIABADQAAANgHAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBg");
	this.shape_4.setTransform(5.7,6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgDApQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgHIAAgGIgCghIgMgBQgFgBgBgFQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAIAMABIAAgIIgBgHQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAFAAABAJIAAAFIAAADIAAAEIAIgBIAIABQADABABAEQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgDAAIgDAAIgIABIABAiIAAACIABADQgBANgGAAQAAAAAAAAQAAAAgBgBQgBAAAAAAQgBgBAAAAg");
	this.shape_5.setTransform(58.7,-10.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AANAcQgHAEgJAAQgHAAgFgEQgGgDgBgIQgCgPAAgLIABgTQABgEAFgBQAAAAABABQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAABAAAAQABABAAAAQAAABAAAAIgBAJIgBAJIABAQIACALIAEABIADABQAHAAAJgDIAAgLIAAgKIABgXQAAgFAFAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAIgBAXIAAALIAAANIABAEIAAAEQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBABAAAAQgFgBgBgFg");
	this.shape_6.setTransform(52.8,-9.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgRAZQgHgIgBgOQAAgMAHgKQAIgMAOAAQALAAAGALQAFAIAAAMQAAANgHAJQgHAKgMAAQgJAAgIgHgAgKgLQgDAHAAAHQAAAJAEAEQAEAEAFAAQAFAAAFgEQAFgFAAgIQABgWgNAAQgIAAgFAIg");
	this.shape_7.setTransform(46.4,-9.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgRAsQgCADgDAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgEIAAgFIAAgSIAAgSIAAgQIAAgRQAAgDABgCQACgFAEAAQAEABAAAFIAAACIgBACIAAAOIAAAOIAKgFIAHgBQANgBAIAKQAHAIAAANQAAAOgIAJQgJAKgMAAQgJAAgHgEgAgIgCIgJAFIAAAKIAAAKIAAAJIAIADQAEABAEAAQAIAAAFgFQAGgHAAgJQAAgJgFgFQgEgFgJAAQgDgBgFADg");
	this.shape_8.setTransform(40,-11.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AATAeIgEgEIgKAEIgGABQgOAAgGgHQgGgIAAgOQAAgNAKgLQAJgKANAAQAFABAGACQAIADAAAFIgBADIgBAHIAAAMIABALIADALIACADIAAABQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAIgEgCgAgJgOQgHAIAAAIQAAAKAEAFQADAEAHAAQAFAAADgBIAGgFIgCgWIABgGIABgGIgEgCIgCgBQgJAAgGAIg");
	this.shape_9.setTransform(33.2,-9.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF6600").s().p("AAOAhQgIAAgEgOIgCgTIgCACIgJAXIgDAEQgCAEgFAAQgCAAgDgFQgEgFgCgIIgFgfIgBgIQAAgDACgDQADgCADAAQAGAAABAHIACAIIABAIIACAOIAKgdQADgIAFAAQAHAAACAJIADAQIADAPIAJgjQABgFAGAAQADAAADADQACACAAADIAAACQgFAWgHASQgBAGgFAFQgCAEgEAAIgBAAg");
	this.shape_10.setTransform(22.5,-9.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF6600").s().p("AgSAZQgJgIAAgOQgBgMAIgKQAJgMAPAAQALAAAHAJQAGAJAAAMQAAANgHAJQgIALgNAAQgKAAgIgHgAgHgJQgEAGAAAGQAAAHAEAEQADADAEAAQAEAAAEgEQAEgEABgHQABgRgLgBQgGAAgEAHg");
	this.shape_11.setTransform(15.1,-9.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF6600").s().p("AAZAtQgCgDAAgDIgBgNIAAgMIAAgGIgWADIgWAEIgBAMIgBANQAAADgCACQgCACgEAAQgDAAgCgCQgDgDAAgDIABgRIABgRIABgVIAAgWQAAgDACgDQADgCADAAQADAAADACQACADAAADIAAANIgBAOIAAAFIAAAGIAWgEIAWgDIABgVQAAgFACgGQAEgHAEAAQADAAACACQADACAAAEIAAACIgBAHIgBAFIAAAFIgBARIAAAPIAAANIABANQAAADgCADQgDACgDAAQgDAAgDgCg");
	this.shape_12.setTransform(7.6,-11.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(2,1,1).p("ADmi0InKAAQhLAAg1A1Qg1A1AABKIAAAAQAABLA1A1QA1A1BLAAIHKAAQBLAAA0g1QA1g1AAhLIAAAAQAAhKg1g1Qg1g1hKAAg");
	this.shape_13.setTransform(29.8,-2.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AjkC0QhKAAg2g0Qg0g2AAhKIAAAAQAAhKA0g1QA2g1BKAAIHKAAQBKAAA1A1QA1A1AABKIAAAAQAABKg1A2Qg1A0hKAAg");
	this.shape_14.setTransform(29.8,-2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},50).wait(26));

	// Layer 4
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(1.5,1,1).p("AAAglQANAAAKAIQACACABACQAMALAAAOQAAAQgMALQgLALgPAAQgPAAgLgLQgLgLAAgQQAAgOALgLQACgCACgCQAKgIAMAAg");
	this.shape_15.setTransform(15.1,26.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgaAbQgKgMgBgPQABgPAKgKIAFgEQAJgIAMAAQANAAAKAIIADAEQALAKAAAPQAAAPgLAMQgLAKgPABQgOgBgMgKg");
	this.shape_16.setTransform(15.1,26.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_16},{t:this.shape_15}]},45).wait(31));

	// Layer 5
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(1.5,1,1).p("AgYAAQAAgKAHgHQAHgHAKAAQALAAAHAHQAHAHAAAKQAAAKgHAIQgHAHgLAAQgKAAgHgHQgHgIAAgKg");
	this.shape_17.setTransform(25.6,34.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgRARQgHgGAAgLQAAgKAHgHQAHgHAKAAQALAAAGAHQAIAHAAAKQAAALgIAGQgGAIgLAAQgKAAgHgIg");
	this.shape_18.setTransform(25.6,34.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_18},{t:this.shape_17}]},40).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.BasketballStill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0E0E0E").s().p("AAAAFIgBgDIAAgBIAAgBIAAAAIAAgBIABgBIAAgBIABgBIABAAIgCAJg");
	this.shape.setTransform(14.3,4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C46200").s().p("AgcBfQgfgCALgpQAngLAggNQADgBAFABQArACARAWQgFAogsAFIgLAAQgeAAgdgCgAhYBJQgfgYgJgvQAKgTAPgPQAFgFAJAEQAuAUAfgnQAMgRAKgSQALgTAUATQBlAKgQB3IgFAAQgIANgWgXQgbgcg+AMIgLAEQgTAHgUAFQgPAZgUAUgAhihDQAhgaAyABIACAAIgCAGQgIAdgaAHQgLADgJAAQgXAAgGgUg");
	this.shape_1.setTransform(-0.3,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#090909").s().p("AgoBqQgggFgdgNIgFgDIgDgCIgLgGIgCgCQgCgNgIgGQgQgLABggQAAgcAGgUIAOgXIABgCIAGgLQAEgHAHgEIAAgBIADgCIABgBIABAAIADgCIADgCIABgBIABgBIABgBIABAAIAagIQANgBAMgEIAPgCIAXgEQATgBATACQAVACARAIQAzAWAQA1QAMAXgCAYQgBADAAADIgCAJIgBgBIgBABIgBABIgBABIAAABIAAACIAAABIAAABIACACIAAACIgCAFIgBACIgBAFIgBAAIgCAEQgDABgCACQgfAdgqASQgyAAgwgHgAAUAdQggANgnALQgLApAfACQAeACAdAAIALAAQAsgFAFgoQgRgWgrgCIgDgBIgFABgAhqgfQgPAPgKATQAJAvAfAYIAFAEQAUgUAPgZQAUgFATgHIAMgEQA9gMAbAcQAWAXAIgNIAFAAQAQh3hlgKQgUgTgLATQgKASgMARQgfAngugUIgHgCQgEAAgDADgAhlhCQAIAcApgLQAagHAIgdIACgGIgCAAIgEAAQgvAAggAZg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BasketballStill, new cjs.Rectangle(-14.8,-11.3,29.7,22.6), null);


(lib.AnimatedScoreboardText = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_15 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(15).call(this.frame_15).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ag7A/QgNgaAAgpQAAgiASgbQAVgfAkAAQAjgBATAdQAQAYAAAhQAAA2gTAbQgSAbgkAAQgpAAgSgigAgcgtQgLARAAAXQAAAdAGAPQAJAbAYAAQATgBAKgRQAKgTAAgjQAAgdgJgPQgJgPgTAAQgSABgMATg");
	this.shape.setTransform(20.2,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("Ag7A/QgNgbAAgoQAAgjASgZQAVghAkAAQAjABATAcQAQAXAAAjQAAA1gTAbQgSAcgkAAQgpgBgSgigAgcgtQgLARAAAWQAAAdAGAQQAJAaAYAAQATAAAKgSQAKgSAAgkQAAgcgJgPQgJgOgTAAQgSAAgMATg");
	this.shape_1.setTransform(-20.5,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgjBYQgTgJgGgRIgBgGQAAgGAFgFQAGgEAGAAQAIAAAEAGIAJAMQAIAFAPAAQALABAIgIQAJgGAAgKQAAgegogEQgSgCAAgNQAAgKAOgFIAZgFQAJgDADgEQAFgEAAgGQAAgSgcAAQgJAAgMAHQgLAIgEAAQgHgBgFgFQgEgEgBgHQABgLAUgKQASgJALAAQAcAAAQAMQASAOAAAYQABANgGAJQgEAKgLAFQAZAOAAAeQAAAagTARQgSARgZAAQgUAAgPgIg");
	this.shape_2.setTransform(-20.6,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.1,-19.5,60.2,39.1);


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


(lib.Basketball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_17 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(17).call(this.frame_17).wait(1));

	// Ball
	this.instance = new lib.BasketballStill();
	this.instance.parent = this;
	this.instance.setTransform(3.8,-3.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[3.9,-3.6,3.9,-3.6,3.9,-3.7,3.9,-4.1,3.9,-4.4,3.9,-4.8,4,-5.1,4.1,-5.6,4.4,-5.9,5.6,-7.2,6.4,-8.9,9.4,-10,11.9,-11.7,24.8,-20,36.6,-30.2,50.2,-34.6,63.8,-38.4,75.9,-41.8,87.6,-45.2,107.8,-47.8,125.7,-41.8,127.6,-41.1,129,-39.7,129.1,-39.6,129.3,-39.5,131,-39.2,132.7,-38.9,133.1,-38.6,133.5,-38.2,133.7,-37.9,134,-37.7,134.1,-37.6,134.2,-37.4,135.5,-37.2,136.7,-36.8,142.9,-35,148.4,-31.6,150.4,-30.3,152.7,-29.9,153.1,-29.6,153.5,-29.1,153.7,-28.8,153.9,-28.4,154.1,-28.1,154.3,-27.7,154.5,-27.3,154.7,-26.9,155.7,-26.4,156.5,-25.7,162.2,-20.3,165.8,-13.7,168,-9.4,171,-5.7,171.1,-5.3,171.2,-4.9,171.2,-4.6,171.2,-4.2,171.2,-3.8,171.2,-3.4,171.6,-3.1,171.9,-2.6,172.2,-1.9,172.5,-1.2,173.7,2,173.2,5.6,173.6,5.9,174,6.3,174.1,6.7,174.2,7.1,174.2,7.4,174.2,7.8,174.2,8.2,174.2,8.6,174.2,8.9,174.2,9.3,174.5,9.7,174.7,10.1,175,10.4,175.2,10.8,175.2,11.2,175.2,11.6,174.8,14.8,175.5,17.7,176.5,22.1,177.2,26.6,177.6,26.9,178,27.3,178.1,27.7,178.1,28.1,178.2,32.2,178.9,36.2,179.8,41.6,179.3,47.5,179.2,47.8,179.2,48.2,179.5,48.6,179.7,49,180,49.3,180.2,49.7,180.2,50.1,180.2,50.5,180.2,55,180.2,59.5,180.2,65.8,180.2,72.2,180.5,72.6,180.7,73,181,73.3,181.2,73.7,181.2,78.2,181.2,82.7,181.2,94.2,181.1,105.6,179,109,181.1,112.2,181.1,112.6,181.1,113,181.3,112.8,181.4,112.6,181.6,112.9,181.8,113.2,182.9,113.2,184,113.2,185.3,112.6,185.5,111.1,185.7,109.2,187.2,108,194.1,102.5,203.3,103.4,204.4,104.2,205.7,105.1,210.5,108.2,210.7,113.6,211,118.6,215.5,119.2,216.8,118.5,217,117.2,217.4,114.9,218.5,112.8,218.5,112.7,218.6,112.5,218.8,112.3,219.1,112.2,225.1,109.8,231.6,109.8,232.1,109.9,232.5,110.1,232.9,110.4,233.3,110.7,235.2,111.8,236.9,113.3,237.9,114.2,239.2,114.3,242.5,117.1,245,120.6,245.5,121.2,245.2,122,245,122.4,244.9,122.6,244.6,122.4,244.3,122.2]}},17).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-15,29.7,22.6);


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
		
		 window.open ("adverb_Scene9.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("adverb_Scene7.html","_self");
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


(lib.Main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Howaboutthat();
	this.instance.parent = this;
	this.instance.setTransform(-118.5,-51.1);

	this.instance_1 = new lib.Net();
	this.instance_1.parent = this;
	this.instance_1.setTransform(95.1,-56.5);

	this.instance_2 = new lib.Basketball();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-75.5,-63.5);

	this.instance_3 = new lib.Thinkingbubble();
	this.instance_3.parent = this;
	this.instance_3.setTransform(6,-102.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AC6AAIkrAAIhHAA");
	this.shape.setTransform(-4,114.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("AXSxcQABADABACIAADMIAACtIAADRIAAAKIAADnIAAErIAADHIAAAAIAAAKIAAA7IAAA5IAALyIAAAMIAAAUAXQxwIycABIgSAAQgSAAgRAAQgSAAgSAAQgSAAgRAAQgSAAgSAAQgSAAgSAAQgSAAgSAAQgSAAgSAAQgTAAgSAAQgSAAgSAAQgTAAgSAAQgTAAgSAAQgTAAgSAAQgTAAgSAAQgTAAgSAAQgSAAgSAAQgTAAgSAAQgTAAgSAAQgTAAgSAAQgTAAgSAAQgTAAgSAAQgTAAgSAAQgTAAgSAAQgSAAgSAAQgTAAgSAAQgTAAgSAAQgTAAgSAAQgTAAgSAAQgTAAgSAAQgOAAgOAAQgDAAgEAAADERyIUQAAAsQxvIqFgCIg2AAIAATPIAAQDAiuRyIgiAAQhGgChHACIhlAAIsZAAIgQAAIi2AAIgyAA");
	this.shape_1.setTransform(-5.1,1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("AkRBpIACAAIIUg1IANgBAkOgyIEGgaIAMgBID5gZIAVgC");
	this.shape_2.setTransform(96.8,-84.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FBFBFB").s().p("AglAEIABgEIAFAEgAAkgCIABgBIAAACg");
	this.shape_3.setTransform(-57.8,8.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#202020").s().p("Ag3gHIAAgKQAigQAtgIQAFgBACABQAUALgRADQg3AIBBAFQAXACgXADQgtAGgEAjIAJAAIAUAAIAAAKIgKAAIgDAAQg5AAgJgxg");
	this.shape_4.setTransform(-21.9,2.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#996633").s().p("Ah1BJIgCgRIAHgGQALgMADgNIAGgWIAEgaIAIgCIAXgIIASgKQAagPAbgNQAEgCAFABQAMAEAGANIBPACIgEAEQgGAGgJABQgLADgLgBQgMgDgIAEIgEALQgTgHgSADIgPADQgLADgIAIQgQASgWAKIgPgNIgRAgIgWAoQgDAEgEAAIgCAAg");
	this.shape_5.setTransform(-33.5,-28.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000099").s().p("AgJCuQgQgBgQgDIgGgCQgSAAgQgEIgrgOIgtgLIgYgDIglgFQgUgCgTgBIABgQIABgiIABggIgCggIgCgdIgEgcIgCgPIgGgaQgFgSgCgTIAcAEIAPgBIANgFIAKgGIAEgEQAFgIADgIIAIgZQAJABAJADQAOADANAGIAMAGIAPAIIANAFIALAEIAMAEIANADIAZAIQAUAEATAFIAkAKIAmAGIApAEIArAAIAogDIAngHIAGgDIARgJQASgJAUgGIAAAOIgBAdIgBAbIgBAbIAAAhIABATIACAUIAIAgIACAIIgTAQIgTAQIgJAIIgKAIIgJAJIgJAIQgDACgEABQgDACgFAAIgjAAQgXgCgWADQgIgCgGgFQgGgEgCgIQgEgJABgKQABgQACgPIADgiIADgiIgBgHIgDgMQgCgIgIgGQgEAIgCAJQgEASgBAUQgCAWABAXIABAUIgCAUIgCATIAAADIgCACIgCAFIgIAOQgFAFgEADQgFADgFABIgWABIgfgBg");
	this.shape_6.setTransform(-28.5,49.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#080808").s().p("AhWCgIAAgKQBAg5AWhdQAMgwAWgnIAEgJQAFgIAJgHQAegXgdgZIAAgKIAKAAQADARAQAGQAGACgBABQgRAdgVAbIgQASQgIAWgFAbQgFAfgJAcQgcBThAAwIAAgKg");
	this.shape_7.setTransform(13.2,75.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#111111").s().p("AgJCHQAWgbgDg1QgDgvgHgqQgEAAgBgCQgggygqgmQAEAAADgDQADgDAAgEQAwAvAuAwQAFAFAKAAQAdABALATQhagGAwA5QACADAAAFQgIAvgUAiIgCAHIAAACg");
	this.shape_8.setTransform(14.5,2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#009900").s().p("AvFE4QAIghAPgfQATgEATACQAQABAPAEQAaAJAcAHIBcAWIgBAAQgFAHgJACQg4APg/gBQgDgFgFgEIgDgEIghAAIgBAAIAAAAQgbANgeAAIgCAAgA1ND4QAAAAgBABQAAAAAAAAQAAAAgBABQAAAAAAAAIgEABQAAgNgEgNIgIgoIgGggIgBgMIAAgNIAOgLQANgLAMgNQANgOASABQATAEASgDIAVgGQATgHAIgSQAFgOgBgOIAXgDQAAADADAEQAQAegGAPQgKAXgPAOQgfAhgKArQgEATgMARIgPATIgMAPIg9gGgAuDCkIgCgBQgBAAAAgFIADAAQAjgDARgXQATgZATASQAsAlAhAuQhPgZhYgTgAT9CyQgLgEgIgGQgKgHgLABIgTAEIgSABQgKABgKgFIgMgFIgLgEIgPAAIgPAAIgPACIgPABIgHAAIgHAAIgMgFIgLgDQgTgEgQAIIgWAJQgWAIgYgCIgBgxIAAgZIAAgMIgBgNIAAgMIAAgNIAAgMIgBgNIAAgMIgBgMQgEgugBgsQgBg6AAg6IARAOIAOAPQAFAGAIABQATACARgIIAsAjIAHgEQAZgVAdAZIAFAAQAigEAUAOQAAAAAAAAQABgBAAAAQAAgBAAgBQAAgBAAgBQAAgFgFgFQgHgqAvACIADgJQAMgxAnAhIABgFQAAgFgCgGQgDgJAAgKQAKgTARAZQADAEAFgFQAFgFgCgJQgDgLAAgKQAAgFAFgFIAEAIIAJALQAEAGAHADQAIAEAIAAQAIAAAGAFIABAQIADAlIABAmIACAlIgBAmIAAAlQAABoAFBpIABAAIAAAKIgCAEIgEABIgpgDQgLgCgPAGQgLAEgLAAIgGABIgFgBgALUCoIgEgGIgCgBIgDgBIgDAAIgEABIgSAEIgRACIgPAAIgGgBIgGgCIgigFIgPAAIgMADIgQACIgLgHIgNgGQgIgFgLAAIgOADIgVAIIgNAFIgGACIgFAEIgEgIIgEgGIgHgEIgGgEQgIAAgHADQgMABgKADQgIADgKABIgjAJIgIADIgEAAIgCAAIgCgBIgDgKIAGgJIAIgIIALgEQAKgCAKgEIAGgBIARgJIAPgJIAegVQAOgLANgMIAagYQAVgVARgXQAKgMAHgOIAHgOIAGgPIAGgQQgLgSgNgRQgOgRgQgNQgQgOgTgLQgJgGgKgEIgWgIIgKgCIgMgUIgNgTIgPgSIgPgSIAPgPIATAEIAQAEIAPAGIAKAGIAFgGQAEgEAFgDIAIgFIAJACQAFABAFADIATAMIAUAKIAAgtIAFAAIAPAJQALgCACgLQACgLALgFQAGgDAIgCQAEAPANAHQAIAFAIgFQAFgDAFAAQAGgCAFADQAGABAEADQAKAGAHAIQAGAGAGAAQAHgCACgHIACgGIAFACIAIAIQAHAIALABIAJgEQADgDABgDIADgHIAJgVIAKAFIAIAGIAIAGIAGAIIAEAKQAEALADAMIABAMIACAVIACAXIADAuIACAtIACAuQABAuADAuIABAvIAAAXIAAAXIAAAXIgWgCIgkAEIgOAEIgJAEIgDACgAv4g8QgRgFgJgQIAIgLQAKgLALgJQATgNAHgVIAAAGQADAPgHAMQgFAIgIAGIgLALQgIAIAFAJIACAAQAFgBAEgFIAJgLQAFgHAIgCIABABQAGAMABAMQABAIgHACQgJAFgJABQgIgBgHgDgAwuhUQgQgDgLgJIgbgYIgcgYIgTgPIADgFIgBAAQAHgBAJgEIADgDIAAgBIADAAIADgDIASgCQACAKAKgHIACAEIAOAPQACAEACAGIgIAPIAOAAIALgEQAIgDACgIIAHgSQAEgIAHgHQAHgHAJgGIARgNQAFgEAEAAIgBAFIgGAMIgJALIgbAcQgPAPgNARIgEAAIgBAGIgBAEIABAEIACAEIAmgCIABADIgBAEIgBAEQgEAHgEADIgDAAIgPAAg");
	this.shape_9.setTransform(5.8,6.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhoCTIgDgDIgBgCIgBAAIgCgCIgCgCQgEgbAVgNIABgBIgBAEQgBAOAOAHIALAAIACgDQABAIgEAJQgBADgDACIgDAAQgEAGgJABIgKAAIgBgBgAi7B/IgHAAIgEgDIgMgFIgCgBQgDgBgCgDIAAgUQgBgLAIgIIABgEQADgFAHgCIABAAIACAAIAAAXIARAOIAJAAIgGAXIgCAAQgEACgEABIgBAAgAD3AeQgIgEgBgJQgCgRAJgNIALgNIAKABQgKALAEANIAFANIAIABIAIADIAIgBIABAAIABABIgBAFQgEAEgFAEQgJAFgKAAQgIAAgHgEgAFxACQgNgJAFgPQACgEAEgEQgDAJAGAJQAJALAOgDIAEgFIgDASIgDACIgFACQgKgFgHgGgAskgkIgBgCIgGgIIgIgMQgHgJACgJQADgKAKgCIAJACIAHADIgGgBQgEACgDAFQgKAQAQAKIANAAQAEgCACgFIACgEQAEAKgEAJIgKAIgALhhNIgJghIAHgEIANAcIAZACIAHgFIAFAJIgDAKIgHADIgVABgArrhFQgIgGgGgKQgBgFACgFQABgEAEgDIAOgBQgGAEAAAIQAAAIAHACQAGACAEgDIAFgFQADAHgEAIQgEAAgFACQgEACgDAAQgCAAgDgBgAMhh6QADgNAEgMIACABIABAFIAAAOIAMAJIACAEIgJADg");
	this.shape_10.setTransform(-59,-24.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#669900").s().p("AU5CRIABAJQABAVgBAWIgBAGgAz2g/QgEgRgGgPQgEgJgGgJIgLgQIgVggQgFgKgEgJIgHgWQA0AmApAxQACADAFAAQARARgWAbQgCADAAAEIgYADIgBgFg");
	this.shape_11.setTransform(10.4,14.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00CC33").s().p("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gCIAaAAIAhACIAeADQAVACAUADQApAIAngIIAEACIADAEIABAEIABAEQAMADAIAKQAFAHABAJIAAA5IgCAgIgBAlIAAAlIAAAfIAAAsIgDBJQgCAXAFAYIACAPIAAADIAAAbIAAAcIgBAqIgCBiQgBAlABAiQABAVgBAVIgBAcIAAAqQAAAcgBAcIAAAKIgaAAIggAAIghAAIggAAIghAAIggAAIghAAIggAAIghAAIggAAIghAAIggAAIghAAIggAAIghAAIggAAIgjAAIgkABIglAAIglAAIglAAIglABIglAAIglAAIglABIgkAAIglAAIglAAIglABIglAAIglABIglAAIgeABIgcAAIgjgBIgegCIgeAAIgCAAIgcACQgTAAgTABQgTACgTAAQgTACgSgCIgmABQgSABgTgCQgTAAgSgBIgngCIgVAAIgVABIgVAAIgVABIgWAAIgVABIgWAAIgVABIgWAAIgXABIgYAAIgXABIgYAAIAAAAIgXABIgYAAIgXAAIgnABIgeAAIgeABIgeAAIgPAAIgYgBgAL7jKQgJAsgfAOQAPAYALgZQAOghAMANQALANACgFIgBgGQgEgVgPgPQgDgDgBAAIgBAAgA3DGXQgJgMACgPIAEgoQACgYAAgaIAAgZIAOgIQAPgKARACQASAEAIAQIANAdQAMARgCATQgBAOgJAHQgSANgOAOIgYAVQgGAFgHACIgGABQgGAAgDgEgADzD+QglgGgNghQAegZAcgbQACgDAAgFIAAgKQAagRAPgcIAEgKIABAGQAGA4gTAoIgEAJQgNAbgQAbIgKgBgABJD1IgKAAQgTAAgLgKIgBgDIgEgEIgEgHQgCgEAAgEQAAgFABgGIAHgUQAGgOADgQIAGgeIABgNIADgcIACgbIABgOIAAgYQgBgIgCgHIgFgNIgCgGQgJgWAAgYIAGgGIAKgNQAEgHADgHIAEgPIAAgIQgBgNgDgNIgJgeIgCgIIgBgaIACgiIACggIAFgwIAGAMIALAZIAFAMQAHAUAJAUIARAjQAJARAHASQAJAUAAAVIAjALIAiAMQAOAGAHALQAeAZgfAYQgJAGgEAIIgFAJQgVAmgNAxQgXBehAA4IAAAKIAAAKIgKAAgA2ti4IgMAAIgBhkIAQAZIAOAZQAIARgCAQIgBAEIgBADIgCADQgHAGgHABIgFAAgAzzlYQAggIAggDIgRASIgWAWIgLALIgNAKIgBgygAXHnGIAEABIgEAJg");
	this.shape_12.setTransform(-3.8,68);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Az2F7QgPgKAJgQQADgEAFgDIAFABQAIABADAEIAEAEQACAFgDAIIgBADQgCAFgFACIgNAAgAEXF4QgOgEgGgMQgKgSgBgTIAAgVIAUAAQAeACARAYIAIAQQAFALgJAHQgIAHgJAFQgIADgHAAIgIgBgAEFFAIAJAhIAQALIAWgBIAHgCIADgLIgGgIIgHAEIgZgCIgMgcgAy4FdQgHgCAAgIQAAgIAHgEIAGgBIAAAAQATAHgKALIgFAEQgCACgDAAIgFgBgARdEQQgDgBgCgBQgEgEABgHQADgVABgVQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAIABgBIADgBQAKAEgBALIAAACIgBANQAAAMgDALIAAAAIgCAFQAAAAAAABQgBAAAAABQgBAAAAAAQgBAAAAAAIgCAAgAPID+QgCgCAAgEIAAgFIAAgGIgBgGIAAgIIACgOIACgSIgBgpIgCAAIgXADQgGAAgGgBQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQABgKALAAIAZgCIAogFIANgBQACgCAEAAIAJgBQgBACABAEQAAAEAEABIANABQAZAAAYgCQALgCAIACIAAAFIgBASIAAApQgEgDABgHIAAgPQgCgPACgOIABgKIgSACQgTACgTAAIgEAAIgXAAQgCAEgEABIgkADQABgKgJgDQgDgBgDADIAAABQgDAdABAcIABAGQACAJAIgEIgBANQgCALABALIABAIQABAJgIAAQgFAAgCgDgARvCAQADgMgMABIgLABIABgHQAAgJAIgBQAKAEgCALQAZgGAbgBQANgBAMgEIAagGIAHgCIABgBIAHAAIABAAIABgBIAAAAIAKgCIABAAQANAAgDAMQgBAEgFACIgBAAIgFABQgHAEgJABQgHABgEgEIgMAFQgGACgHABIgIABIgsAGIgGABIgRADIABgEgAS6kqQgIgFgKgCIgDgFQgGgIgBgJIgBgEIgEgJIACgFIARgSIADgDQAIgBAHgEQAJgDAGgEQAaADAaAFIgBADQgaAEgcAJIgSAGIgEAEIgGAJIAAAFIAEAJIADgBQAEgKALgHIADgCIAaABQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABQACAJAAAIIAAAFQAAAHgCAGQgKAJgLAAQgJAAgKgGg");
	this.shape_13.setTransform(-12.3,-67.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFF99").s().p("AhwB+QgDgJgEgIIgCgDQgFggACgiIABgFIADgCIAEgBIAFACIACACQABArAJAqIgBAEQgDADgDAAQgDAAgDgCgAAUBoIANgFIAHgDQgBALADAJIAHAEIgLAEQgRgDgBgRgAA4BkIACgFQADgFgBgFQAGgFAGgGIAFgGQAGAVAOATQgHgCgIABIgJADIgRgKgABbArIAIgKIAAAEIACADIAEAHIAGACIABAAQAFAKAIADQABALgGALQAAAFgCACIgDACQgFgbgTgXgAhthpQAGgPAPgHIACACQAEAFgCAFIgBAcIgBApQAAAOACANQABARAFAPQADAJgEAKIgKACQgWhEAChHg");
	this.shape_14.setTransform(-137.5,-21.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C6FFFF").s().p("AWpG8QgOgEgPgCIgKgKQgUgTACAXIgcgDQgegEgcgIIgLgFIgEgDIgJgFQgTgIgSgKIgEgCQgbgTgegMQgNgFgLgIQgfgWghgPIgOgHQgQgKgRgIIgDAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIgEgCIgBgNIgDAAQADgLAAgMIABgNIAAgCIABgCQACgRAAgRIAAgeQAAgNACgMIABgEIARgDIAGgBIAsgGIAIgBQAHgBAGgDIAMgFQAEAFAHgBQAJgCAHgDIAGgCIAAACIABAAQASgGASgDIAlgGIAaAAQAHAAAHgCQADAAACgBIACgLIAGgLQALgSgCgVIgEguQgBgbAAgcQgBgegDgbIgCgbIgBggIgBggIgCggIgCghIgBgIIgBgYIgCghIgDgfIgCgSIgJgBIgFgIQgIgNgPgCIgXgCIgdAFIgiAIIgZAEIgbACIgdABIgeADIgTACIgFgBQgIgSAQgOQAHgFAIgDQARgFAQAAIAmADQAUADASAAIAlAAIAiAAIAiAAIAiAAIAhAAIAiAAIAiAAIAiAAIAhAAIAACTIAABJIAAAKIAACWQAABtAFBuIgFAKIAADmIAAAKIAAAoQgKgDgLgBgAP4EqIABgBIAAABgAM9DTQgngDgYgNIgYgMQg+gehQgQQg2gKgvgPIg9gTQg8gSg7gPQgsgMgsgNIgMgEQg7gSg6gTQipg6ichLIAAAAIAAgCIAAgCIgCgFIgBgCIgFgCQhAgchAgaIACgBQgGgCgGgFIgFADIgTgIIgOgHIgFgDIAAgBIAAgCIgBgCQgegVgjgJIgIgEQgggOgigEIgHgFQiEgHhQAsQhPAqhZAfIAAAKQhFAag/AfQhLAkhKAmQh6A+h1BCQAAAFACADQADACAFAAQAAAFgDADQgHAHgKAFIAAi6IgFgGQAAgNADgMIADgVIAEgoIAAgBIgBgKIAAgUIgBgUIgBgUIAAgUIgBgUIAAgUIAAgDIgBgRIAAgQIgDgGIgBgEIgBgdIADgEIABgCIgCgGIgBgJQgBgGABgFQAEgRAAgQICzAAIACgCIAFgCIABgBIAVAFIACAAIgBAAQAcAGAcgBIABAAQAPgDAOAAQAOgCAOAAQASgBATABIAGACIAnAAIAAgBIAFgBIATAAIASAAIATAAIASAAIATAAIASAAIATAAIASAAIATAAIASAAIATAAIASAAIATAAIASAAIASAAIASAAIATAAIASAAIATAAIASAAIATAAIASAAIATAAIASAAIAlAAIAlAAIAlAAIA3AAIAlAAIASAAIATAAIASAAIAlAAIAlAAIBKAAIAkAAIAlAAIAlAAIAlAAIAlAAIAkAAIAlAAIAlAAIAkAAIAmAAIAlAAIAmAAIAlgBIAZABIAxgCIAagCIAYABIAaAAIAZAAIAjgDIAngDIAlgBIAiABIAfAEIAaAAIAgAAIAhgBIAgAAIAhABIAgABIAgABIAgACIAQABIALAUIgMATQgDAFgEADIgLAGIgMAEIgOACIgQAAIgTgCIgSgBIgSgBIgRAAIgRABIgBAAIgDABIgBAAIgNACIgBADQgDAUAAAUIAAAGIgBAcIAAABIAAARIgCAdQgBAmgDAkQgEAlADAlIABAcQAGAEAAAKIgBAHIAAABIAAAAQABAIgBAHQACAFAAAJQABBWAMBJQAAAFACADQADACAFAAQAGANALAFQARAIARgGQATgHARgIIAOgFIgCgCIAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABABAAQAGABAGAAIAXgDIADgBIAAApIgCASIgBAPIAAAIQgUgNgdgDg");
	this.shape_15.setTransform(-3.5,-67.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFCC33").s().p("AgKIcQgGgCgFgGIgLgIQgGgGgHAAIgGAEIgOAJQgHAFgHgDIgHgRQAKgCAHgIQAFgGACgHIAGgQIADgKIA4gBIACgEIAAgEIAAgDIgBgEIgBgBIgEgCIgVABIgPgBQgMgCgHgKQAEgFAFgDQAOgKASAEIAUAFQAMADAKgEQAEgCACgEQADgEgDgIIgfABQgIgBgJgDQgHgBgHgDQgJgDgCgIQADgGAFgDQAGgEAIABQAMACALAFQALAFAJgBIANgFQAMgFAIgIQgWABgVgCQgLgCgJgEQgJgDgJgFQgIgEgDgHIABgDIAEgRQAFgNgCgQQAGgHAIgEQAIgFAIgCQgIgEgEgIQgEgGgBgHQgEgNABgOQAMAEALACQASAFASADQAUAAASgDIABAJQgDAIgEAIQgEAGgHAEQgIAFgJABQgLADgMAAIANADIAkAEIAHADIADAEIAAADIgCAEIgCAEIgDAGIgCACIgCACIgJABIgXABQgLAAgKgDQgSgDgRgGQAFAHAGAGQAFAGAIADIAUAFIAagCQAJAAAJACQAGABAFADQADAGgCAGIgGATQgCAJAAAJIgBAnQgBAQgDAQQgCAOgGAOQgFALgHAMIgEgDIgIgYQgEgNgMgJQgCABgCACIgJANIgHALIABAUQABAMgCAJIgDAJQAAAFgEABIgGgCgAAEDcQgLgBgDgLQgDgJAAgJQgCgaAZgCQAOAAAPACIAMAAIAJAAIAHAAIAAgBIgOgHIgCgLQgBgEgEgBQgFgDgFgBIgPAEIgUAFIgDAAIgJgFQgBgFABgFQABgKADgKIABgBIAEABQAJAFALADIAKgEQAIgDAHgGIAFgEIAAgBQgHgEgHACQgPAAgOACIgLgEQgMgHADgNQACgGAEgFQADgFAGgDQAHgDAJACIAQADIAMgBQAEgCACgDQADgEAAgGIAAgHQgQAEgPgCQgQgBgLgKIgKgMQgEgGgCgIQgCgGgBgIIgCgKIAYAIIAYAGIAfgBIATgGIAIABQAHAMAAAOIgDBGIgCAtIgEAtIgFAsIAAABIgCAAQgdgCgcAGIgKAAgAAegVQgRgCgOgIQgIgEgFgGQgGgGgCgHQgFgSABgVIAVAIQAfAKAgACIAQADIAAAVQAAAOgLAJQgIAGgLAAIgOgBgAADhiQgIgBgIgEQgHgDgDgHQgJgSAGgWQARADATAAQAJgCAJgDQAPgDAKgKIAAgFIgJAFIgTAFQgVABgRgJQgJgDgFgHQgEgFgCgHQgCgMADgLIAGADIA7AAIgIgGQgUgLgVABQgJgDgIgFQgIgDgDgHQgJgWAHgYQAGADAHACQAgAKAegMQgFgHgHACIgWgCIgTAAQgHgCgFgDQgJgEgBgKIgBgRQgDgPAJgLIAFgBIAMADQAJADAIAFQAMAGAOAAQARAAAKgLIgHgBQgNABgOAAIgTgCQgLgCgKgJQgGgFgDgGQgOgZADgdIgFgEQAAgKABgLIACgOIABAAIABgCQADgVgBgUQAAgGABgFIAAgDIAjgEQAFgBACgDIAWAAIADAAQATAAATgCIATgDIgBAKQgDAPACAPIAAAOQAAAHADADIABAPQgBABAAAAQAAAAgBABQAAAAAAAAQAAABAAAAQgCAWgDAVQgBAHAEADQgGADgHAAQAEAMABASIABAAIAAAAQgCAbABAbIABATQAFAkABAlIgBATIAAAAIgCgDIABARIAAAFQgCAGAEADIADASQACAOAAAOQgBAPgJALQgHAIgJADIgOADIgEAAQgRAAgRgEg");
	this.shape_16.setTransform(91.2,-0.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0000FF").s().p("AiNDaQgPgWgMgXIgZgvIgQghIAJAAIAGgCIAEgCIAEgDIAAgDIgBgEIgDgEIgEgHIATgJQANAGgBAOQAAAMABAMQABAFAEADIAYAWIAYAUIAWAEQAuAGAuAEQAZACAYABQANgCANAAQABANgEAMQgCAGgFAEQgCADgDABIgEgBQgPgIgQgEIgrAFQgVAFgTAHQgSAFgRAJQgQAIgPAKQgMgMgKgNgADNhMQhfgHg/gkQgMgHgOgEIhHgVQglgMAIg1QAggXAvgCIAJAAQAwgHgBAgIgCALQgGAfAWgWQARgRAYAbIBeBpIAFAFIgFAAg");
	this.shape_17.setTransform(-104.5,28.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFCC99").s().p("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gMABQgIAHgDANQgBAGgDAFQgCAEAFADQAEADADgFQAFgHACgIIAEgJgAu2ncIgCgFQgMgCgIgHQgNgNgBgSIgBgVQgDgrABgrQAAgTgGgSIAHgOQAEAAAFgBQAPADgEgKIABgBIADgEQAFgDAHgCIACABIACACIA4ACIAEABQAFAAgCAFIgTAFIgHAMQgBADACADIAPAXIAUAGQANABAHgJIAMAVQAIARgFARIgBABQgCACAAAEQACAOgFAMQgJASgTAFQgWAGgQgRQgMACgDAMIADADIAMALQAYAVAWgXQAIgJAMgEQACAFgBAGQgCAMgIAMQgFAKgIAGQgOANgUACQgaAAgWgNgAtZpoIgEAFIgLAUQgNAPAagOIAAAAIAAgBIACgFQACgGAEgFQACgEAAgEIABAAIAAgBIAAgBIAAgDIgCgDIgDAAIgBAAQgCgDgEgBIgBAAIgCAAIgEgBIgBgBIAAAAIgCAAIgBgBIgDAAQgEAAgFAAIAAABIgBAAIAAABIgDAAIgBgBIAAAAIgDAAIABADIACAGIAFAAQAMAAAOAEgAvGqXQgHASAHATQAGAOALAJQAGAFAJAAQAFgDAEgEQAJgHAMgEQgGgRgHgMIgCgDIgDgEQgGgIgJgHIgGgBIgIgBQgJAAgGAGg");
	this.shape_18.setTransform(-45.2,32.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFF00").s().p("ArLEKQg9gBg0gbQAJgHALgEIApgUQAVgKAVAAQAOACAFAOQACAJAFgCQAGgNAAgMQAAgGAGgDIADgBQAMAAAKAFIAJAKIANANQAMALgDAPIgCADQgFAGgGADQgJAHgMADQgWAFgYAAIgEAAgAJ0h1QAVgigdgOIAHgDQAUgJgPgLQgCgCAAgFQAfgJAWgRQAHgEAJgDQAGgCAFgFQAbggAIAbIAGgEQATgLAUgKQAFAKANAEQALgBAHAEIADAHIAAAGIAAAFQgGAHgLAAQgQAAgQgCQABAIgCAJQgBAEgCADIgDAFIgegDIgHAGQgIAFgGAHQgKAMgGANQgEAJgDAKIgBAHIgCAOQABALgFAJQgIAKgNgDQgLgCgIAFQgNAHgJAOIAAAUQgYgjAWglg");
	this.shape_19.setTransform(-62.5,-19.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AhECkIgUgHIgGgEIgGgEIgFgGQgEgHgCgHIgGgTQgBgFgDgFQgLgSgKgSQgig+gFhHQARgMALgQQASgZAGgeIAEgRIADABIASAHQARAIATAGQAgAMAiABQAeAEAggDQAJgDAIgFQAGgEAGgCIAEAAIAIAEIAHAEIAHAPIAGAPIAKAfIASA5QAFANAHALQALAYAIAZQAEARgDAPIgBACIgMAGQgHAFgGAHQgLAMgPADIgPAAIgGAAIgFgFQgFgGgDgHQgJgTgIgTIAAAAQgPgngOgnIgIgYQgGgPgRgFIAFAcQADAUAHASIAFALIALAVIAFALIAFAJQAEALACALIAEAUIACAQQABAJgEAGQgEAFgFAEIgIAEIgeANQgLAFgKACIgVAFIgEAAQgXAAgUgGg");
	this.shape_20.setTransform(21.7,38.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CC9966").s().p("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");
	this.shape_21.setTransform(-7.8,14.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CC9900").s().p("AkAETQgFAAgDgDQgCgCAAgFQAggDgPgvIgDgLIgHhKIgDgZIgDgtIIUg1IACAmIABAeIAAAeIgBAnIgBAZQgBAUgRAJQgIAEgJADIgWACIgVAEIgNACIABABIgBAAIgKACIAAAAIgBABIgBAAIgHAAIAAABIgIACIgaAGQgMAEgNABQgaABgaAGQADgLgLgEQgIABAAAJIgBAHQgKABgLADIgogBQgIAAgHAAQgFABgBADIgKABQgEAAgCACIgNABIgoAFIgZACQgLAAgBAKQAAAAAAABQAAAAAAABQAAABABAAQAAABAAAAIAAAAIgEgGQgMACgMAAQgWAFgXADIgagBgAi9CwIAAAAIgBgDIgBgBIgBgCIADAGgAkLA8IgCgUIAAgoQgBgiADgkQADgMgBgMIAAgBQgBgMACgMIACgWIAAgLIAAgLIAAgFIAAgEIABABIADADIAFADIAHABIAAhHQAfADAhgDIAfgBIAegCIAegDIAdgDIAdgDIAbgFIAdgDIAegFIAfgDIAfgEIAfgDIAggBIAggCIAhgBQAMANABATIACAbIAAAZIAAAWIAAAHIAAAPIAJCZIoUA1gAkJhfIEGgagAAAh/IgDAGIANgBID4gYIj4AYQgCgHgFgGQAAAFgDADgACBj5QgHAEgIABIgDADIgRASIgCAFIAEAJIABAEQABAJAGAIIADAFQAKACAIAFQAVANATgQQACgGAAgHIAAgFQAAgIgCgJQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIgagBIgDACQgLAHgEAKIgDABIgEgJIAAgFIAGgJIAEgEIASgGQAcgJAagEIABgDQgagFgagDQgGAEgJADgAELAHg");
	this.shape_22.setTransform(96.2,-79.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#6A6A6A").s().p("ACCAIIgTgBIgtgBQhGgChHACIhlAAQgUgEgNgJIGjAAQgPAJgYAEQgOACgQAAIgLAAgABjAGIBIAAIhIAAIghAAgAiwAGIBlAAIhAACIgJAAQgQAAgMgCgAiwAGg");
	this.shape_23.setTransform(-32.5,114.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#6E6E6E").s().p("ACWAFIk1AAIAAgJIE/AEIAAAFIgKAAg");
	this.shape_24.setTransform(-78.5,114);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#171717").s().p("AgPAhIgCAAQgoAWgNgmQALgIAIgIQAJgIAHgJQAAgBgGgDQgEgCgFAAIgKAAIAAgKQAhgMAcgOQAZgKgNAXQgEAIgIAIQgoAkAuggQARgMAZgGQAHgBAFAAQANACgFAUIgEACIgRAKIgnAbIAAAQIAHAFIANgBQgDARgQAGQgGACgEAAQgmgBAXgcg");
	this.shape_25.setTransform(-99.4,32.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1A1A1A").s().p("AhwBfQgJAAgEgEQgVgfgZAZQgGAFgDgBQgbgGgPAMQAAgEgCgDQgDgDgFAAIAKgKQAFgFAAgCQgTgoguAbQgEAeAjgFIAAAFQgLABgLAEIgJACIgEAAIgCgCIgEgFQAAgPACgPQACgRANgJQAXgPgogJIAAgJIAKAAQALAIAUABIAKAAQALAQAhgBQAFAFAHABQAHAAAGACIAFACIAIADQAKAHAOABIAIAGQALAHAEALIABABQAIAjAfgbQAGgEAFgBQBFgNg8gNIgJgCIgJgBIgbgIIgCgCIgCgCIgKgHIgGgEIgEgCIgBAAQgdghAfgYQAcgWAVgeQgBAFADACQADADAFAAQgBAFgCACQgcAcgeAZQANAfAmAHIAKABIAJAAIAHAAIADAAQAeAeA7AAQAUgBANgDQARgFALAJQAKAJATABQAVAUARgkQACgEALACQAkAFANgRQhOgGhGgSQgBgBAAgEQAFAAACgCQADgDAAgFQAfAIAdAFQAtAGArgHQAbgEAPALQAEAFAAAFIAAAKQgBAwgsACQAAAFgBABQhSAThCgtQgPAAgPADQgLACgJgBQgrgCgRASQgEAFgGAAQgbAAgTAHQgHAEgGAEIgfAAg");
	this.shape_26.setTransform(27.8,92);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FCFCFC").s().p("AAAgBIABABIAAACg");
	this.shape_27.setTransform(-120.9,50.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#151515").s().p("AgfAXQAfgOAHgrQABgCAFAFQAPAPAEAUIAAAGQgBAFgMgNQgLgMgNAgQgGANgHAAQgGAAgHgMg");
	this.shape_28.setTransform(71.7,51.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#626262").s().p("AgBBpIgBAAQgFhpAAhoIAGAKIAADHIAAjHIABAEQAFAMACAMQACAPgCASIgCAiIgCAjIgBAjIAAAigAgBheIAAAAg");
	this.shape_29.setTransform(144.3,12);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FEFEFE").s().p("AgBAAIgBAAIABAAIAAAAIAAAAIAEAAIAAABgAgBAAg");
	this.shape_30.setTransform(144.3,22.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#090909").s().p("ApsMqQgSgKgZABIgIgBQghgOgTAKQgFAAgFgCQgmgKAIg6QAFgKAIgEQAjgTgVgjQgUgigRgmIAAgKIAAhGQAFAAACgDQADgCAAgFQAEAAADADQADADAAAEIAABGIAAAKIAiBJQAGAMADAOIACALQACARgcgCQgEAAgDAGQgCAEAAAFQgPAUAWAgQAIAMALgaQAEgIAFgFIAFAFQAKAPANAKQAHAFAGgFQAbgXAPAiQACAEAKAAIAeAAQAAAEgDADQgDADgEAAQgKAAgJADIgGABIgCAAgAhJhdQA3goAugwQADgCAFAAQgiBHhLAYgALhqOQAHAAAGgCQACACADAAQAEABABgDIACgEIADgBIABAOIgGgDIAAABIgCAAIgBAAQgDADABAEQACAFAEACIgCACIgDABQgCgEgFgDQgFABgBAFIAAAIIAAABIgBAAIgBABQAAgSgEgNgAL1rJIgDABIgBAAIAAgPIAAgoIABgTIAAgFQgIgBgLABQgYADgZgBIgNgBQgEgBAAgDQgBgFACgCQABgDAFAAQAHgBAIAAIApABQALgDAKgBIALgBQAMgBgDAMIgBAEIgBAEQgCAMAAAOIAAAeQAAARgCARIgBACQABgMgKgDgAJjrWIgBgFQgBgdADgcIAAgCQADgCADAAQAJADAAALIgBADQgBAFABAFQAAAVgCAUIgBACIgBABIgFABQgEAAgCgGg");
	this.shape_31.setTransform(23.9,24.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#747474").s().p("AgHBuIAAjlIAGAAIAADmIAAjmIADAAIAAAUIABAUIAAAUIABAUIAAAUIABATIABAUIABAhQABAQgCARQgBANgGAMIgGAJIAAgKgAgBh3IAAAAg");
	this.shape_32.setTransform(144.3,-38.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#737373").s().p("AgBBuIgBAAQgFhuAAhtIAGALIAADQIAAjQIABADQAIAQgBASIgBAXIgBAmIgBAjIgBAmIgBAlgAgBhiIAAAAg");
	this.shape_33.setTransform(144.3,-62.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#161616").s().p("Ag2AVIAAAAQATgVAXgQQAZgTAggLQAFgCAFAAQgMAhgkANQgaAJgOAZIgFAJQgFAIgEAAQgHAAAAgcg");
	this.shape_34.setTransform(24,-24.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#4A4A4A").s().p("AgGBpIAAhJIAAiSIADAJIADAFIAADLIAAjLIACALQADAKACAKIAAALIgBArIgCAhIgBAOIgBAVQgBAagBAYIgBAEIgFAIIAAgKg");
	this.shape_35.setTransform(144.2,-100);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#141414").s().p("AhHA3ICDh0QADgDAFAAQAQAVgtAMQgGACgFAFQgrA4g4Ahg");
	this.shape_36.setTransform(-68.3,-70);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#070707").s().p("AHEN1IgHAAIgKAAQAQgbANgbIAEgJQATgogHg4IAAgGIgEAKQgPAcgaARIAAAKQgFAAgCgCQgDgDAAgFIAAgKQAdggAXglIAOgXIAHgQIAPgoIAWg+IAAgKIAKAAIAAAKQgCAigJAcQgJAhgUAZIAAAKQAMCDg+A7IAAAKIgDAAgAkhs1QgUgigZALQgJAKgFATQgBAGgFABQgXAEgIgPQgFgJABgQQAAgFgEABQgfAJgeAPQAAgUgFgPIgGADQguAUghAgIAAgKIAAgKQAtgeAvgcQADgCAFAAQAEA1AegoQASgWAKAdQAMAiAUgcQAJgNARgCIARgBQgBAGAFADIABABIgCAAQAUAZAXAWQACADAFAAQAAAFgDACQgCADgFAAQgRgDgIgOg");
	this.shape_37.setTransform(-22,5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0A0A0A").s().p("ACdD2IAAgEQgaABAGgaQAogGAlgNQADgBABgLQAEgjARAiQADAGAFAGIAAAKQgFAEgGACQgJADgGAFQgXAQgfAJIgKAAgAj2jzIAFgDQAFAGAHABIgDABIgOgFg");
	this.shape_38.setTransform(-16.2,-64.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#0B0B0B").s().p("AkxPVQgPgDgDgRQAmhIAfhOQABgFABgFQADAAAEADQADADAAAEQgBAFgBAFQgUA7gdAzQgGAgARAHQAEABAGAAQAAAFgDADQgCACgFAAIgLABIgDAAIgJgBgAAip0QAAgIgCgGQABgHgBgHIgBgBIABgBIABgHQAAgKgGgEIgBgcQgDglAEglQADgkAAgmIADgdIAAgRIAAgBIAAgcIABgGQgBgUAEgUIAAgDIAOgCQADAFgCAHIgBAJIAAA3IAAAEIAAAFIAAALIgBALIgCAVQgBANABAMIAAAAQAAANgDAMQgCAjABAkIAAAnIABAUIACAAIAEAuIADAZIAHBKIACALQAQAughADQgLhJgBhXgAE6tcQADgDgBgFQAGAGABAHIgNABIAEgGg");
	this.shape_39.setTransform(64.9,-6.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F8F8F8").s().p("AgqANQgHgOgBgZIAAgKIAOAIQAgARAqAKQAYAEgVANQgMAHgKAKQgOAEgKAAQgaAAgLgYg");
	this.shape_40.setTransform(-77.4,-3.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#121212").s().p("AgiBAQgOgFgKgJQgkggAMhOQAVgNASATIAIAKQADAEAFAFQAbAXA5gGQAugEgbAfIgJAKQggAdgoAPQgJADgJAAQgGAAgFgCgAg+gUQABAZAHAPQAQAjAtgQQAKgKAMgHQAVgNgYgFQgqgIgggRIgOgJIAAAKg");
	this.shape_41.setTransform(-76.2,-4.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F2F2F2").s().p("AAAgDIAAgBIAAAJg");
	this.shape_42.setTransform(99.3,24);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#101010").s().p("ApeCJQgDgDAAgEIAAgKQApgcAjglQAEgFAJgDQAGgCADgGQAKgQAhACQAJAAAGgIQAMgRAWgJQAAAFADADQACABAFAAIgoAoQgFAFgFAAQgnABgVAPIgOAMIgBABQgjAegeAkQgEAAgDgDgAIShPIAAgKQAYgaAhgSQAbgPgPASQgVAXAggCIAAAKQgUAKgTAMIgGADQgIgagbAfIAAgKg");
	this.shape_43.setTransform(-44.5,-36.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#1C1C1C").s().p("ASoCOIAFgFQgYALgLgQQAigQAYgaQACgDAAgFIAAgKQAtAUggAqQgDADAAAFIgdAVQgGAEgFABIgDAAQgbAAAegagAzYCHQgDgDgEAAIAAgKQAzgYAjgpIA8hEQAQgTAZgNQAPgIgMgaIgLgMQgdgjAdgkIAEgEQACgDAFAAIAKAAQAAAFgCADQgIAHgKAFQAAAuAXAWQACACAFAAQAJAkgIAFQgTALgQANIgLAKIgnAnQg4A3g8AyQAAgEgDgDg");
	this.shape_44.setTransform(3.3,-31.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F5F5F5").s().p("AgBgCIADACIgCADg");
	this.shape_45.setTransform(96.1,50.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#181818").s().p("AE/EQQgHgVgRgIIAHgCIAFgCIABgCIACgOIAFAAQADAgAfgcQAcgaAWAbIgEAAQg2ABgQAiIAAAKQgFAAgBgBgAExCjIAAgKQAzgdA7gTQAFgCAFAAQgFAjgtAAQgFAAgFAGQgWAbgmACgAmUiIQAAgKgFgHQgRgeAXgWQAWgWAVgXQgXAPgfAJIgKAAIAAgKIBJgiQAOgHgFAWQgDAQAUADQABAAgDAJQgCAGgFAFIgKAKQgFAAgEACQgGADgFAFQAFAkAVgfQAEgFAIAEQACABAAAFQgFAAgEACQgGADAAAFQAGApgfgBQgFgKABgJQADhCgnAZQAGAeAJAWQAEAKgIAAIgLgCg");
	this.shape_46.setTransform(-60,-25.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0E0E0E").s().p("AyZMUQgIgEgFAFQgkAgABgvQAXgrATgtQAOgjANglQABgFAAgFIAUAAQgMANgFAaIgHAhIgDAKQgMAkgVAWQgCAhAgACQAUABAOAJQAGAFAKADQAKACAKAFQAAAEgDADQgDADgEAAQgogJgggRgANUifIgFgDQgEgDACgGIABgFIABgOIAAgTQgBglgFgkIgBgTQgBgbACgbIAAgBIAAAAIABgIQAAgGAGAAQAEACACAEQACAFgCAHIgBAGQgBAkADAjIADApIACAlIAAAOIgDAQIgCAGQAAABAAAAQgBAAAAABQAAAAAAAAQgBAAAAAAIgBAAgAihjXQACg8gRAHIgJADQAAgeANgdIACgGQgbAOACgdQASgEAMgKQAIgGAFgHQACgDAFAAIAKAAQAAAFADACQAOALgTAJIgIADQAdAPgVAiQgWAkAYAjIAAAKQAAAFgCAEQgDAGgFABIgDAAQgOAAABgQgARsjfQgFABgHgDIgEgDIgFgEQgJgDgHgFQgGgBgFgEIAAAAIgVgJIgBgBIgrgZIgTgKQgWgJgTgOQgQgLgSgIIgggQIgDgBIgXgPQgEAAgEgDQgEgCgBgFQgCgEAEgCIABgBIACAAIAAAAIAFACIAEACQAAAAABABQAAAAAAAAQABAAAAABQAAAAABAAIACAAQASAIAQAKIANAHQAiAPAfAWQALAIANAFQAeAMAaATIAEACQASAKATAIIAJAFIAFACIALAGQAcAIAdAEIAdACIAGABIABABIABACIABABIAAABIgBACIgCADIgFAAIgNAAQgmAAgjgMgAKtmiQgbgKgigFQgxgHgigSIgXgNQgcgOgkgGQhJgKg4gaQgGgDgGgBQgTgEgRgHQhMgdhhgPQghgFgcgJQjghCjBheIgLgFQAFAFADAGQACAEAAAFQAKAPAEARQABADgEAAIg+gKQhHgMg6gVQgVgIAEAQIAFAVQACAJgBAAQglAEgWgYQAFAAADgCQACgDAAgFQAxAegigsQgFgGADgJQAHgUAXAPQATAMAbAHQA8AQBHAJQAAgKgEgHIgLgQQgKgRgQgFQgJgDgIgFQAYAJAZAEIADgEIACgEQCcBLCqA6QA6AUA6ASIAMAEQAsANAtAMQA7APA8ASIA8ATQAwAPA1AKQBQAQA/AeIAYAMQAXANAoADQAcADAUANIAAAGIABAFQgJAAgJgDgAunrMQgDggALgcQAJgUgPAGQg6AYg2AfIAAgFQgVACABgRIAKAAQBFgVA2giQAHgFAJADQASAFgKAfIgEAMQgJAVAQgCIAAAKIgKAKQgFAFgGACIgIACIgBAAg");
	this.shape_47.setTransform(14.1,-1.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#222222").s().p("ABnFuQgJgBgHgGQgQgQAJgYIADgGQAJgMAMgHIAFgBQAGgBADACQACACgBAEIgDAAIgBAAQgGACgEAGIgBAEQgIAHABALIABAUQACADADACIACABIAMAFIgHAEIgDABIgEAAgAArBzQgCgCAAgFQAAgFACgEIADgGQgcAMglAKQgJADgDgFQgKgRgRgIQAfABgGgqQAAgEAGgDQAEgCAFAAQAAgFgCgBQgIgEgEAEQgWAggEgkQAFgFAGgDQAEgCAFAAQAngPAngRQAGgCAEAAQAhAHgbAWQgFAFgKAAQAAAFgCAAQgqAPgPAoQAAAxAggkQAcgfAYAXQAFAFgDAJQgCAGgFAFIgKAKQgFAAgDgDgAhEkFQAzgnAcgzIgIAEQgZARgkAJIAAgFQgoAJgUgOIAogJIAKgBQA5gIAsgQQABAAAAAAQABAAAAAAQAAABABABQAAABAAABQAAAZgRALQgTAMgIAWIgKAAQgBAQAUgBIAAAFQgEAFgGACQgJADgFAFQgQAPgKAAQgNAAgGgUg");
	this.shape_48.setTransform(-90.6,-48.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#0D0D0D").s().p("AgTJJQgKAAgGgFQgSgPAdgaQAlggAvgWIAKgBQA9gEAtALIAOAEQgFgKgIgEIgYgMQgVgLgfgHIgMgDQg/gOg2gVQgigOgbAkIAAAKQgEAAgDgDQgDgDAAgEQAQgPAKgXQAGgOgRgfQgCgDAAgEQAAgDACgDQAWgbgRgRQgFAAgCgDQgpgxg0gmIgBgEIgHgPIgVgeIABAAIABAAQAEgCAAgFIgCgPIADgCQACgCAAgFIAKAAQABAxAdAWQA0AlAmA0QBBAABAAEQAKABAKAFQAFAKAIAEQACABAGgBQAtgGgUAaIADAHQAaAsAhAlQAMANARAHQAPAGASACQAKgPAVgEQAJgBAHAFQA1AoAyAtQAFAFAGAAQAtADgaAWQgFAFgFAAIgKgBQgZgEgXgGQgkgKgtgHIgVgEIgwgHQgrgFgtgCIgCAAQgjAAglABQAAAFgCAAQgvAUgeAjQAKAXAOgVQABgCAEAAIAKAAQgBALgIAFQgFAEgLAAIgEAAgAEJHLQgQAWgjADIgEABQAAAFABAAIACAAQBZATBOAaQghgvgsglQgIgHgIAAQgLAAgLAPgADcHRIgEgGIhfhpQgXgagSARQgWAVAGgfIACgKQABgggvAGIgKABQgvACggAXQgIA1AlALIBHAWQAOAEAMAGQA/AkBfAHIAFABIAAAAgAm0k9QgDgCAAgFQB2hDB5g+QBKgmBLglQA+geBFgaQAFAAADACQACADAAAFIgKAAIAAAKIgKABIgoAJQAUAOAogJIAAAFIgJABQg0ANgmAaQgFAAgEABQgaAJgZgKQguAagvAZIgtAXIgsAWQhaAuhYAwQgFAAgCgDg");
	this.shape_49.setTransform(-105.5,-26);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#0F0F0F").s().p("AEvBEIgYgLQgkgSgmgMIgIgCIgBgBQgHgJgNABIgBAAIgCAAIAAgBQgEgJgIgBIgHABIgVgNIgPgFQgKAAgOgKIgPgJQgWgKgXgIQgLgDgLgBIgDgDIgBgCIgCgCQgUgFgXgEQiqAoiEBNQgDACgFAAQAAgFgDgCQgCgDgFAAIAAgKQBZgeBPgqQBQgsCDAHIAHAFQAiAEAgAOIAHAEQAkAKAeAUIABACIAAACIAAABIAFADIAOAHIATAHIAOAFQBBAaBAAcIAFACIABACIACAFIAAACIAAACIAAABIgCADIgEAEQgYgDgZgJg");
	this.shape_50.setTransform(-61.7,-88.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FAFAFA").s().p("AnkOkIAKABIgHAEgAEJrqQgFAAgCgDQgXgWgUgZIACAAIgBgBQgFgDABgGIgRABQgRACgJANQgUAcgMgiQgKgdgSAWQgeAogEg1QgFAAgDACQgvAcgsAeIAAAKQgQABAJgUIAEgMQAKgfgSgGQgJgCgHAEQg3AihEAWQAJgWATgLQASgLgBgaQAAgBAAgBQAAgBgBAAQAAgBgBAAQAAAAgBAAQgtAQg5AIIAAgKIAKAAQAFAAADgCQCEhOCpgoQAXADAWAFIABADIABACIADACQALACALADQAXAIAWAKIAPAJQAOAKAKAAIAPAFIAVAOIAIgBQAHABAEAJIABAAIABABIABAAQANgBAIAJIAAABIAIACQAnAMAjARIAZALQAHAEAKADQAQAGAKARIALAQQAEAHAAAKQhHgJg8gQQgbgHgTgMQgXgPgHAUQgDAJAFAGQAUAagJAAQgGAAgUgMg");
	this.shape_51.setTransform(-74,-1.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#0C0C0C").s().p("AAOBcQgTgOgiAEIgFAAQgdgZgZAVIgHAEIgsgjQAEAAADgDQADgDAAgEQAXAcAngMQADgBAGAEQAVAOAngLQAPgFgKgUQgBgCAFgCQAagLADgfIABAAQA0AMAAggQAAgaAcAFQAOACgCgRIAGAAIABgDIABgCIAAgBIAAgBIgBgCIgCgBIgGgBQgCgWAUATIAKAKQAAAEgDADQgDADgEAAQgFAFAAAFQAAAKADALQACAJgFAFQgFAFgDgEQgRgZgKATQAAAKADAJQACAFAAAFIgBAFQgngggMAwIgDAJQgvgCAHAqQAFAFAAAFQAAABAAABQAAABAAABQAAAAAAAAQgBABAAAAIAAAAg");
	this.shape_52.setTransform(123.5,-16.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FDFDFD").s().p("AkECVIABgCQACAAADADgAmoCQIACgBQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAABgAGliLIgGAAIAFgKIABAAIAAAKIAAgKIAEAAIAAAKIgEAAgAGliVg");
	this.shape_53.setTransform(102,-36.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#191919").s().p("A15R3IgQAAIgWAAIgQgDIC2AAIgQABIggAAIgwACIggAAgAz5R0Ii2AAIgDAAQgIgDgHgEQgIgCgGgFIgDgEIgCgFIAAgWIgBgXIAAgWIgBgXIAAgWIAAgXIAAgWIgBgXIAAgWIABgtIABhEIABgtIABgZIABggIABggIAAgKIAAgWIABggIAAggIABgwIAAggIACgvIgBggQAAgZABgXIACgwIAAgwIABggQAAgdgCgcQgDgrgKgoQALgNACgQIACgTIABgWIAAgjIgBglIAAglIgBglIAAglIgBglIAAglIgBglIAAgkIgBglIAAghIAAgEIAAglIgBglIAAglIAAglIAAglIAAgiIAAgiIAAgiIABgjIAAgWIAAgMIAAgjIAAgiIABgjIAAgiIAAgiIAAgiIABgjIAAgCIAAggIABgjIAAgiQABgSACgRQAAgFAEgEQAFgFAIgCIAVgGIANgDIAkABIAcABIAbABIAcAAIAbAAIAcAAIApgBIAbgBIAKAAIAPAAIAtAAIAlABIAlAAIAlABIAlAAIAlABIAlAAIAlAAIAkAAIAYAAIANABIACAAIAHAAIAcAAIAlAAIAlAAIAlAAIAlAAIAlAAIAkAAIAlAAIAlAAIAlAAIAlAAIAlAAIAlAAIAlAAIAkAAIAlAAIAlAAIAlAAIAlAAIAlAAIAlAAIAkAAIAkAAIAkAAIAkAAIAkAAIAjAAIAkAAIAjAAIASAAIScgBIABAAQAIAGAEAJQAHARACARQACALAAALIAAAlIgBAlIAAAMIgBAZIAAAlIgBAlIAAAlIgBAlIAAAkIgBAlIAAAlIAAAlIgBAlIAAAlIAAAlIAAAlIAAAkIAAAjIAAAiIAAAjIAAAiIABAjIAAAiIAAAiIAAAiIABAjIAAAiIABAjIAAAiIABAjIABAhIAAAzIAAAZIAAAMIAAASIAAAWIgBAYIAAAXIgBAXIAAAXIAAAXIAAAXIAAAXIAAAXIAAAYIAAAXIAAAXIABAXIAAAXIABAuIAAArIAAASIgBAmIgBAgIgBAfIAAAMIAAATIAAAfIAAAgQAAAXABAXIAAArIAAAcIAAAoQAAAUgCASIgCAlIgCAmIgBAZQgCAfgFAfIgDAAIAAryIAAgHQACgVgBgVIgBgJIAAg6IAEgJIAAgBIAAgjIABgjIACgjIACgjQACgRgCgPQgCgMgGgNIgBgDIAAkqIAAEqIgGgKIAAgkIAAgmIgBglIgCgmIgCglIgBgRQgGgFgIAAQgIAAgIgDQgHgEgFgFIgJgLIgDgIQAEAAADgDQADgDAAgEQAPABAOAEQALABAKAEIAAgoIAGgJQAGgMABgNQACgRAAgQIgBghIgBgUIgBgUIgBgUIAAgUIgBgUIAAgUIAAgUIAAgKIAAglIABgmIABglIACgmIABgWQAAgTgIgPIgBgDIAAitIAACtIgGgLIAAiWIAFgIIABgEQACgZABgZIABgWIABgNIACgjIABgqIAAgMQgCgKgDgJIgDgLIgCgFIgEgJIghAAIgiAAIgiAAIgiAAIghAAIgiAAIgiAAIgiAAIglgBQgSAAgUgCIgmgEQgQAAgRAFQgIADgHAGQgQANAIASIAFACIATgDIAegCIAdgCIAbgCIAZgEIAigIIAdgFIAXADQAPACAIANIAFAIIAJABIACARIADAgIACAgIABAYIABAIIACAhIACAgIABAhIABAgIACAaQADAcABAdQAAAcABAbIAEAwQACAVgLASIgGALIgCAKQgCACgDgBQgHADgHAAIgaAAIglAFQgSAEgSAFIgBAAIAAgBQAFgBABgFQADgMgNABIAAgBIgBgBIANgCIAVgDIAWgDQAJgDAIgEQARgIABgUIABgaIABgnIAAgeIgBgeIgCgmIAMgBIgMABIgJiaIAVgCIgVACIAAgOIAAgIIAAgVIAAgZIgCgcQgBgSgMgOIghABIggACIggACIgfACIgfAEIgfADIgeAFIgeADIgbAFIgdADIgdAEIgeACIgeACIgfABQghADgfgCIAABGIgHgBIgFgDIgDgDIgBgBIAAg2IABgJQACgIgDgEIABgBIADgBIABAAIARgBIARAAIASACIASABIATACIAQgBIAOgBIAMgFIALgFQAEgEADgEIAMgTIgLgUIgQgBIgggCIgggBIgggBIghgBIggAAIghAAIggAAIgaAAIgfgDIgigBIglAAIgnADIgjADIgZAAIgaAAIgYgBIgaACIgxACIgZAAIglAAIgmABIglAAIgmAAIgkAAIglAAIglAAIgkAAIglAAIglAAIglAAIglAAIgkAAIhKAAIglAAIglAAIgSAAIgTAAIgSAAIglAAIg3AAIglAAIglAAIglAAIgSAAIgTAAIgSAAIgTAAIgSAAIgTAAIgSAAIgTAAIgSAAIgSAAIgSAAIgTAAIgSAAIgTAAIgSAAIgTAAIgSAAIgTAAIgSAAIgTAAIgSAAIgTAAIgSAAIgTAAIgFAAIAAACIgnAAIgGgCQgTgCgSACQgOAAgOABQgOABgPACIgBAAQgcABgcgFIABAAIgCAAIgVgFIgBABIgFACIgCACIizAAQAAAQgEAQQgBAGABAFIABAJIACAGIgBACIgDAEIABAeIABAEIADAGIAAAQIABAQIAAAEIAAAUIABAUIAAAUIABAUIABAUIAAATIABALIAAABIgEAnIgDAWQgDAMAAAMIAFAGIAAC8IAAAWIAAAVIABAVIAAAVIABAVIABAVIABAVIACAWIADgBIALgIIAKgIIAMgFIAMgFIANgCIAOgBQAYADAZAAIAegDIARANIAQAOIAQAPIAGAHIAHAJIAHAKIAGAKIAEANQAIAfgFAdQgFAgATAcQAFAIAHAGQAGAFAHAEIAJgEQAEAAADADQADADAAAEIgBAEQgMAQgRAMIgKAIIgKAAQAGgKgBgMQgIgDgGgKIgBAAIgFgCIgFgHIgBgDIAAgDIgJAJQAUAXAFAbIACAPQAAAFgEACIgCAAIAAAAIAUAeIAIAPIABAEIAHAWQADAJAFAJIAVAgIAMAQQAFAJAEAJQAGAPAEAQIABAGQACAOgFANQgIASgTAIIgVAGQgSACgTgEQgSgBgNAPQgMAMgNAMIgOALIAAANIABALIAGAgIAIApQADAMABANIADgBQABAAAAAAQAAAAABAAQAAAAAAgBQABAAAAAAIA9AFIAMgOIAPgUQALgRAFgTQAKgqAfghQAAAEADADQADADAEAAIgRAcIgQAfQgEAJABALQABAHgBAIQgDAQgLAKIgBAfQABAOADANQAHAgAeAPQAoAVAtgBIAeAAIAtAAQATAAATgFQAIgBAGgDQADgCABgDQAEgGACgHQACgJABgJIABgTIACgHIAFgDIAHgBIADgKIACgIIAAgFIgBgFIgGAFIgPANQgPANgSAHIgOABIgHgFIABgQIAmgcIASgKIAEgCIAegCIAegCIASABIALAAIAVACIAUADIAUAFIAgAJIAkAKQASAGAUAEIAcAFIAfAGIAcAEQASABAPgBQASgCAQgJIgFgaQgDgMgFgLIgKgXIgGgKIgHgLIgKgMIgXgaIgmglQgTgUgVgQIgbgVQgLgHgLgFIgXgIQgTgDgTAEIgWAGQgKADgKgGQgEgCgBgEQgCgGAAgHIABgFIgJgFIgFgDIgbgMIgQgLIgHgHIgMgQIgCgDIgBgBIgJADQgIAFgIABQgIADgIAAIgIgBIgIgDIgJgFIgGgCIgIgIQgIgHgKgDQgLgGgLgDIgOgCIgPABIgRABIgEgVQgDgJgFgIQgFgIgGgFIgHgHIgJgEQgIgEgHgGQgOgKgMgNQgGgHgEgIIAYgdIAXgdIAXgeIALgPIAMgOIADgCIAEgBQAAAEADADQADADAEAAIgBAEIhZBgQADAIAEAIQALgGANgCIAEgDIACgDQATADAJgIIAGACIACACIAAAHIAAAAIABAAQAHgDAEgGQADgGABgHQACgIgBgIIAAgKQAHgEAHgHIADgDIABgDIABgDIgDgOIAFgEIARgQQAJgIAHgJQALgNAJgPIAGgLQAVgIAWgEQAOgDANgFIAggFQAIgCAJABIAYAFIARgBIASAAIANAFQAGADAEAFIABAAIADAEQAOgDANABQAJACAIADQAHADAFAGQAFAGAEAHIADAFQAFADAGAAIALgBIAOgDIANAAQAIAAAGAGIAQANIAaASQAQAKAQAMQAKAIAJALIAIAKIAFAEQAJAAAIgGQAGgFAHgDQADgCAFAAQAFgJABgMQABgIgBgIIgDgLQgEgEgGAAIgXACIARgaIgCgJIgLAFIgEABIgDAAIgDgBIgDgEIgBgCIAAgEQALgSARgLQALgJANgGQAPgHAPgFIARgEQgBgDgDgCIgOgIIgLgHQAPgKARgEIAcgBIAaABIAYgDQAQgDAOgHIAVgKIAKgFIANgDIACABQgCAIgHAHIgHAJQAEAFAIACQAEACAGAAIAMgCIAVgHIATgEQAIgDAFADQAFAHgFAGIgMAPIATAFIAkALIAGANIAAADQgDAFgIgBIgRgEIgCAAQgDASAFARIAGATQADAJAGAHQAIAJAKAHQASANAXAJQAWAJAYAIIAnAPIAeAKIAQACQAOgDAIgJIAOgQQALgBAIgHIADgCIACgDIgEgHIgFgFQgKAAgIACQgJACgJgCQgIAAgGgFQgHgFgEgGIgEgJIgKgCIAAgKIAAgUQAJgOANgHQAHgFALACQAOADAHgKQAGgJgBgLIABgOIACgHQACgKAFgJQAGgNAKgMQAGgHAHgFIAIgGIAeADIADgFQACgDABgEQACgJgBgIQAPACARAAQALAAAGgHIAAgFIAAgGIgDgHQgIgEgKABQgNgEgFgKIAAgKIAAgKIAegLIAdgMIALgCIANABIAFADIgFAEIgNAHIgNAIIgFAEIBTADIgPAKQgJAFgKADIgUAJQgGACgFAEIgCAFQgCAGAAAHQgBAJACAIQACAKADAJIAGANIAEALIAOAQQAFAGAIACIAPABIAFABQAKAFAHAIQATARAEAbQACANgBANQgBAMgFAMQgFAMgGALIgDAIIBpADQAUgRAZADQAPAEAPABQAHAAAHgDIARgGQAIgCAIACQAGABAGAEIAJAGIAFABIABgCIgBgGIgCgJIgBgKQAMgHANgCQAMgDANACIAFgHQAGgGAIgCQAKgEALgBIARALQATAJAVAHQANAFAPADIAIgJIAHgFQADAAADABIAQAKIALAHIAEgCQAEgEACgFQAEgFACgGIADgHIAaABIADAEIgBAPQAKgLADgNQADgRgBgUIgCgiIgCgjIgBgjIAAgYQACADAFAAQAIAAgBgJIgBgIIAFADQgEAdAOAZQAEAHAFAFQALAIALACIATADQAOAAAOgCIAGABQgJAMgRAAQgPAAgNgHQgIgEgIgDIgNgDIgFABQgIAKACAQIACARQABAJAIAEQAGAEAHACIASgBIAYADQAHgCAFAGQggANgggLQgGgBgGgDQgIAXAKAWQADAHAHAEQAIAEAKAEQAWgCAUALIAIAHIg8AAIgHgEQgDALADAMQABAIAFAFQAFAGAIAEQASAJAWgBIATgGIAJgEIgBAEQgJAKgPAEQgJADgKABQgTAAgRgCQgGAWAJASQADAGAHADQAIAEAJACQATAEATgBIAOgDQAJgDAGgHQAJgMABgOQABgOgDgOIgCgSIAEACQABABABAAQAAAAAAgBQABAAAAAAQAAgBAAAAIACgHIACAIQAEASAQAJQALAFAKAIIAKAKQAOgDAPADQAIABAIAEQAAAEgDADQgDADgEAAQgRAIgTgDQgIAAgFgGIgPgPIgQgOQAAA6ABA5QABAsAEAtIABANIAAAMIABANIAAAMIAAANIAAAMIABANIAAAMIAAAZIABAyQAXABAXgHIAVgJQARgIASADIALAEIANAEI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AAIAgAAIAhAAIAgAAIAhAAIAgAAIAhAAIAgAAIAaAAIAGABIAGACIABACIADAFIACADIABACIAAACIAAACIgCABIgLABIAAgUIAAAUQgOABgNgBIgfAAIgfAAIgggBIgfAAIgfAAIgfAAIggAAIgkAAIglAAIglAAIglAAIglAAIglAAIglAAIglAAIgkAAIglAAIglAAIglAAIglAAIglAAIglAAIglAAIgkAAIglAAIglAAIglAAIglABIglAAIglAAIglABIgkAAIglAAIglAAIglABIgDAAIgiAAIglABIglAAIglABIgegCIgiAFQgRABgSAAQgRgDgNgGImkAAIgKACIgkAHIgVACIgXgBIAAgFIlAgFIAAAKIgfAAIggAAIggAAIggABIggAAIggAAIggAAIggAAIgfABIggABIggAAgAwmRdIAyAEQAUAEAUABIAOgBIALgCQAHgCAFgGQANgSgFgUIAtACIAkADIAmgBIAhgGQAVgFARgNQgXgXgagVIgjgbQgcgTgegQQgPgJgPgHQgUgJgWgHIgYgKIgjgNQgkgOgggRIg4geIgNgIQgGgZgEgZIgFgjQgDgbgCgdIgBgcIgBgNQAAgcADgdIAGgjIAEgZIABgFQgLgDgKAHIgVANIgkAQIgYALQgLAMgFARQgEAQgDAQQgCAMAAANIAAAFIgBAXIgCAaQgDATgEARIgJAhQgFAUAFAUIAEALQAIARAPAKQANAIAOAHIAbAMQALAFAMADQALACAMABQAOAAALAKIgBAEIgGALIgBAEIgCABIglAKQgaAFgbgGQgRgCgQgFQgMgEgMgDQgDgCgCABQAAADACADQAHAOALALQAHAIAJAGQAIAGAKAFIATAHIALAGIADAIQgDALgHAGQgTAPgSARQgPANgRANIgXAPQgSAMgTAHIgOAFIAKAFIAjABIA1ACIAjABQAaABAaAAIAjAAIAjAAIAYgBIAkABgAzeGGQgPAGgPAIIgdAQIgdAQQgVAMgUANIgaATIgbATIgaATIgNAJIAAEYIAFABQAKAUAJAVQAFANAHANIANAZQAJARANASIAXAgIARAUIAJAKIgBAEQgNASgRAPIgfAaIghAZIgjAWQAEAKAKACIAMADIAOgBQARgBAQgIQAOgHANgJIAmgZIAkgaIAlgaIASgQIgegTQgOgJgMgL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HAFgLIAUAAIgBAEQgMAOgRAMQAdANAhAIIAUAFIAUAFIATAEIAMADIAMABIAKAAIARgFQAHgEAFgFIAGgFIADgBQAKgEAHgHIADgEIADgEIABgEIAAgEIgCgFIgDgLQgBgIABgIQABgDACgDQAGgGABgIQACgOAHgOQAIgSALgRIASgcQAQgZgNgZQgFgKgGgIQgIANgPAGIgJAEIgIADIgHABIgFAAIgEAAIgBAAQAEgFADgCIAJgFIAHgGIAIgGIAGgHIAGgIIAEgJQAEgKACgKIAEgTQAMABALAKIAEAFIADAGIAAAGIgCAHIgCAIQAAALAIAHIAHAIIAIAHIAIAHIAKAFIAKAGIALADIAVAFIAIAFQAAAGgIABIgIACIgLACIgMAEIgLAEIgJAHIgIAGQgHAWgLAVIgHAMIgIAMIgIAMIgJALIgKAKIgFAEQgFAEgDAGQgEAGAAAJIABAMIgFAIIgJALQgBARAFAPIADAFIAEAEIAEABIAFgCIAHgEIADgGQAJgHABgLQABgFgBgDIgCgFIgDgEIAhgLIATgIIASgJIARgJIARgKIAQgKIAPgMQAOgMANgNQANgNALgPQAMgPAKgQQARgZAKgaQgPgbgXgUIgQgOIgRgLIgSgKIgUgIIgWgJIgJgBQgGgTgLgPIgJgKIgIgJIgLgIIgLgGIgNgGIgMgFIgTgGQgigGgjAGQgFABgDAFIgDAIIgOgHQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBgBIgCgEQACgJAIgFIAIgGIAFgEIAEgGIAEgGIACgJIADgMIAEgdQACgXgOgQQgHgHgJgFQgMgHgMAGQgOAHgJAMIgGAEIgCACIgDgBIgBgBIgBgDQgCgHAGgFIAFgEIAGgCIAFgEIADgDIACgCIABgDIgEgFIgEgDIgGgKIgFADIgDACIgCAFIgDAHIgBABQgEAAgCgDIgHgGIgFgHIgEgHIgDgIIgCgHIAAgIIACgRQgTADgPAHIgLAHIgKAIIgUAAIAAAUIgXAAQgHAEgCAFIgEAQQgFAUgDAUIgCAOIgBAFQgDADgDgBQgHgEgHABQgKAEgIAIIgFAFQABAXAVAGQAGACAGgCIAJgDQAYAKAPAUQALAPAHATQgNgMgRgDQgWgDgIASQgPADgHAMQgDAFACAFQACAIAFAGIALAKIAFABQAAAEgDADQgDADgEAAIgggTIgXgNIgYgLIgigPIgXgKIgWgLIgagLIgDAlQgCAYgJAXQgHAUgOAQIAJAHQAGAFALACIAiACQAaADAYAKIALAHIAXAOQAIAGAKAEIARAJQAHADAGAFQALAJAEAPIACAIIgigWQgagRgdgNQgdgPgggKIgwgMIgXgDIgvgBIgvAIIgYAGIAAAKIgFAAIgCANIgBADIgFACIgHACQgQAAgKAMIgNARQgHAIgIAGQgNAMgOAFIgYAJQgQADgQAGQgQAEgQAIQgOAHgMAKQgNAJgMALQgHAHgJAFQgDACgDAAIgDgBQgEgCADgIIAKghIAAgCIgBACQgEAJgIADIgDgBIgEgGIgEgNQgMgJgPACQgGgBgEACQADAHAFAGQADAFABAHIgCAMIgCAFQgKgJgGgMIgFgEIgBADQAAAMgJAHQgGAFgIgEQgDgMgGgKQgCgFgFgCQgIgFgJAAIgDAAgAMqDbIADAAIABACIAFAFIAJACIADgCIAJgDIAOgFIAkgDIAWACIAAgXIAAgYIAAgXIgCgvQgCgugBguIgCgtIgCguIgDguIgCgXIgCgUIgCgNQgCgMgEgLIgFgKIgFgHIgIgGIgIgHIgKgEIgJAUIgDAIQgBADgDACIgJAFQgLgBgHgIIgIgJQgCgDgDAAIAAACIgCAGQgDAGgGACQgGABgGgGQgHgIgKgGQgEgEgGgBQgGgCgFACQgFAAgFADQgIAEgIgEQgNgIgEgOQgIABgHADQgKAFgCALQgCALgLADIgPgJQgBgBAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAIgBABIAAAuIgUgLIgTgMQgFgCgFgBIgJgDIgIAFQgFADgEAFIgFAGIgLgHIgOgGIgQgDIgTgEIgPAPIAPARIAPASIANATIAMAVIAJABIAXAIQAKAFAJAGQATALAQAOQAQANAOARQAMAQAMATIgGAOIgGAQIgHAOQgIANgJANQgRAYgVAUIgbAYQgNANgOAKIgdAVIgQAJIgQAKIgGABQgKADgKACIgLAFIgIAHIgGAKIACAJIACACIADAAIADAAIAJgEIAjgJQAJAAAJgDQAKgEALgBQAIgCAIAAIAGAEIAGADIAFAHIAEAIIAFgEIAGgDIANgFIAVgHIAOgDQALgBAIAFIAMAHIAMAHIAPgDIANgCIAOgBIAiAGIAHACIAGAAIAPAAIAQgCIASgEIAFAAIADAAgA1uiPQgEAFgCAGQgEAJgCAKIgFAdQgEAQgHAPQgGANgJALQgKALgMAIIgMAIIAAB3QANAOAMAPIAYAgQAIAMALALQALAKAMAIQALAIALgFQAMgDAKgIQARgNAOgQQAPgPANgRQAMgSALgTIANgaQgFABgDACQgPAJgOAKIgcATIgcATQgNAKgPAIIgDABIgMgUIgUgmIgVglIgVglIgMgVIAEgGIAGAAIAJACIAFACIACAAIAWgLQAKgHALgGIAKgEIARAAQAKgCADgKQACgHAAgHIgBgJIASACIAOAEIAHACIAFgDQAJgGAJgCQAJAAAJADIACAGQAQAMAPAOQAOANANAOIgDATIgCAVIgFAYQgDAOgGANIgJAUIgBAFIADACIAdgFQANgCANgDQAIgCAHgFQAEgCACgEQADgEAAgGQABgFgBgFQgCgMgFgLQgGgQgIgOIgRgbIgRgZIgQgbQgNgVgJgVQgNgFgMAAQgNAAgMAGIgOAGIgMAEQgLAAgHgGIgGgFQgBgLgDgLQgCgGgEgEQgIgHgJgFQgHgFgIgCIgGgBIgFABgAO+CZQgaABACAbQABAJACAIQADALAMABIAKABQAdgHAcADIACAAIAAgBIAFgsIAEgtIADgtIAChHQAAgNgHgMIgHgBIgTAGIgfABIgagGIgXgIIABAJQABAIADAIQACAHAEAGIAKAMQALAKARABQAPABAQgDIAAAHQgBAFgCAEQgDAEgEABIgMACIgQgEQgJgBgIADQgFACgEAFQgDAFgCAHQgEANAMAHIANAEQAOgDAOAAQAHgCAIAEIgBACIgFAEQgHAFgIAEIgKADQgKgCgKgFIgEgBIgBABQgEAJgBAKQAAAFABAFIAJAGIADgBIAUgFIAQgDQAFAAAEADQAEACACAEIACALIAOAHIgBABIgHAAIgIAAIgMgBQgMgBgMAAIgGAAgA1HBYQgOADgMAGIAHASQADAIAFAHIAFAHIAVgMIAqgWQAHgFAGgGIAEgFIgJgEIgfgBQgSACgQAEgAnkANQgHAAgGAEQAMASACAWQABAKAGAFQAJADAGgFQAOgJANgHQAMgHAMgFQAVgJAUgDIAggDQACgMAHgKQAIgKALgJIAwgrQAPgOAVgGQArgMAtAHQABgLAHgIQAJgJAEgMQAFgOACgOQACgRABgQQABgXgRgPIgSgPIgLAHQgHAEgHgBIgQgFQgOgHgJgMQgMgOADgSIACgEQgDgGgIgEQgRgFgPAAIgQADIgDAEQgCAMAIAJIANAPIAFAIIABAIQAAAFgDAGQgFAMgNAGQgKAFgJABQgSADgMgOQgJgJABgNQAAgOgEgNIgBgBQgFAFgCAGQgDAJgGAJIgHAIQgGAFgKAAIgHgBIgFAAIgjA3QAFADAGABQATAFATAEQALACAKAGIACABIgEAFQgCADgDABIgIAEIgEAZIgEgBIgCgDIgCgGIgDgKQgSgFgOgIQgSgLgUgDQgGgCgFACQgKACgJAFQANAPgHAWIgGANQAQACAQAHQAIAFAHAHQADAFACAFQADAJAAAJQABAPgGAQQgDAJgCALIAAAEQgLAHgDAKIgHATIgDAGQgEAAgBgEQgCgLgFgJQgDgFgEgDIgEAAIgFABgA1LAAIgpAUQgLAEgKAHQA1AbA9ABQAZAAAZgFQAMgDAJgHQAGgDAEgGIADgDQADgPgMgLIgNgMIgJgKQgKgFgMAAIgEABQgFADAAAGQAAALgGANQgFACgCgJQgFgNgOgCIgCAAQgUAAgUAJgAr3jFIgFABQgMAHgJAMIgZABIgDAhQgBAYgRAOQgIAHgIAGQgCAaACAaQADAkATAbQAIAMAKAMIASAEQAkAFAhgPQAUgJATgKQAdgPAZgWQAZgXASggIAHgOQACgGABgGQABgEgBgEIgDgIQAFgGgEgHIgLgRIgLgRIgCgDIgIgJIAAAAIgHAAQgPgJgPgMQgBAAAAgBQAAAAAAAAQAAgBgBgBQAAAAAAgBIADgEIABAAIAHABQgQgLgSgEIgMgFQgIACgFAHQgGAHgIgDIgMgEIgMgEIgDgCIgIgCIgBgBIgCgBIgFANIAEAAQAPABALALIABABQAHANgBAPIAAAJQABAPgHAKIgMAOQgGAHgMAAIgMgEIgDgBIgDgCQgGgEgEgFIgCgEQAHAGAJABIAEAAIADgBIAHgEIAEACIAGAAIABAAQAFAAAEgCIACgBIAGgXIgKAAIgQgNIAAgYQABgEgCgCIgEgBIgFAAgAuWg1QgLAJgKAKIgIAMQAJAPARAGQAHABAHABQAKAAAJgEQAHgDgBgHQgBgMgGgNIgBgBQgIACgGAHIgIALQgFAFgEACIgCgBQgGgIAJgJIALgKQAIgGAFgIQAHgNgDgPIAAgFQgIAUgSAOgAw2hlIACABIATAOIAcAYIAbAZQALAJAQACIAOABIADgBQAFgDAEgGIABgFIABgDIgBgDIgmABIgCgEIgBgEIABgEIABgFIAEgBQANgQAPgQIAbgcIAJgKIAFgMIACgGQgEABgFAEIgRANQgJAGgHAHQgHAGgEAJIgHASQgDAIgHADIgLAEIgOAAIAIgPQgCgGgDgFIgNgPIgCgDQgKAHgCgKIgSABIgDABIgDADIAAAAIgEAEQgIAEgHAAQgFABgEgCIAFAGgAOehAQACAIAFAGQAGAGAHAEQAPAHASADIANAAQALAAAIgGQAMgJgBgNIAAgWIgPgDQgggCgggJIgVgIQgCAUAGASgA2yjBIgDACIgBAFQgCAiAFAgIABADQAFAIADAJQAGAEAFgFIABgEQgJgqgBgrIgCgCIgEgCIgEABgA0Zh/IgMAFQABARARADIALgEIgHgEQgDgJAAgKIgHACgAzxiYQgGAGgHAFQACAFgDAFIgCAFIARAKIAIgDQAIgBAHACQgNgTgGgVIgFAGgA2DlZQAGARAAATQAAAsACAqIACAWQABARAMANQAIAIANABIACAGQAVAMAaAAQAUgBAPgNQAHgHAGgKQAHgMADgMQABgGgCgFQgMAEgJAKQgVAXgZgWIgLgKIgDgEQACgMANgBQAQAQAWgGQATgEAIgTQAFgMgBgOQgBgDACgCIABgCQAFgRgIgQIgLgVQgIAIgNgBIgTgFIgQgYQgCgCACgEIAHgMIASgFQACgFgFAAIgDAAIg4gCIgCgDIgDgBQgGACgFADIgEAEIgBACQAFAKgQgEQgEACgFgBgA2nlMQgCBHAWBFIAJgCQAEgKgCgJQgFgQgCgRQgBgNAAgOIAAgpIABgcQACgFgEgFIgCgCQgOAHgGAPgAkcloQgbANgaAPIgTAKIgWAIIgIACIgFAbIgFAWQgDANgMAMIgGAGIACARQAFACAEgGIAWgoIARghIAPAOQAWgLAQgSQAHgIAMgDIAQgDQARgDAUAHIADgLQAJgEAMADQALABALgDQAIgBAHgGIAEgEIhQgCQgFgNgMgEIgCAAQgEAAgEABgAk0kLQgJANACASQABAJAIAEQARAJASgLQAFgDADgFIABgFIgBgBIAAAAIgJABIgHgDIgIgBIgFgOQgEgMAKgLIgKgBgAjAkUQgFAPANAKQAIAGAKAEIAFgCIADgBIACgUIgEAFQgOAEgIgMQgGgIACgKQgEAEgCAFgA0IlnIgGABIgOACQgEADgCAEQgBAFABAFQAFAJAJAGQAFAEAGgEQAFgDAEAAQAFgHgDgHQAJgLgTgHgAD/mRQgFALgDANIAPALIAKgCIgCgFIgMgIIgBgOIgBgGIgBAAIAAAAgAsextIqEgBgA2vR0gAXGRogAXGRJIgGAAQABgdgBgbIABgqIABgcQABgVgBgVQgCgjABgkIAChiIABgqIAAgcIABgcIAAgEIgCgPQgFgXABgXIADhKIAAgrIAAgfIAAgmIACglIACgfIAALygAXGDjgArFhXQgSgDABgPQAAgFAEgCIAFAAQABABAAAAQABAAAAABQABAAAAABQAAAAAAABIAAAEQAEADAGACIAAAAIAHgBIAAgBIARABIABABIACAEIAAACQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABQgGAAgHADIgQgBgAqlh6QgFgFABgEQAEgPAGgPIACgCQADgEAEgDQATgMASARIAFAIIAFAHQAKAQgIANIgBADQAAADgCACIgCACIgBACIgJAGQgPALgLAAQgSAAgFgegAqVhwIAAADIADACIACACIAKgBQAIgBAFgFIACAAQADgCACgDQAEgJgBgJIgDADIgKAAQgOgGABgPIAAgDIAAAAQgWANAFAbIACADIABABIABAAIABAAgAi9jQIgDgKIgPgCIgDAJQgDAHgEAHQgDAFgFgDQgFgDADgEQADgFABgGQACgMAIgIIANgBQAIABAHAFIAGAGQACAKgDAIQgDAGgEAGIgCgQgAP+jcIACADIAAAAIgBANIgBgQgA0HkQIALgTIAEgGQgSgFgOABIgBgGIgBgDIADAAIAAABIABAAIACAAIABAAIAAgBIABAAQAEgBAFAAIADABIABAAIABABIABAAIAAAAIAEABIADAAIABAAQADACACACIABABIAEAAIABACIABADIAAABIgBABIAAAAQgBAEgCAEQgDAFgCAHIgCAEIAAABIAAAAQgMAHgEAAQgEAAAHgIgA1UkcQgMgJgFgOQgIgTAIgSQAJgIANAEIAGABQAKAGAGAIQgEgEgIgBIgGgDIgKgBQgKABgCAKQgCAKAGAJIAIAMIAGAIIABACIANAAIAKgIQAFgJgFgJQADgHgCgFIABACQAHAMAGARQgLAEgJAIQgEADgGADIgBAAQgIAAgFgFgAL3oCQgLgGgGgMIAaABQAXgCAWgFQAMgBAMgCIAEAGIACADIgOAEQgRAJgTAGQgHADgIAAQgJAAgKgEgAMpp3IgDgFIABACIABABIABACgAE4xtIAjAAIAkAAIAkAAIAkAAIAjAAIAkgBIAjAAQAcAAAagBIAZgBIAZAAIAkAAIAlgBIAlgBIAlAAIAlgBIAlAAIAlgBIAkAAIAlgBIAlAAIAlAAIAlAAIAlgBIAlAAIAlAAIA2ABIAmAAIAZAAQATgBASABIAmADIAyABQAIAAAGAEIycABIASgBgAXCxtIAAAAg");
	this.shape_54.setTransform(-3.7,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Main, new cjs.Rectangle(-155.7,-114.1,301.9,230.5), null);


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
(lib.adverb_Scene8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Buttons
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("AgnBpQgHgFAAgIQAAgKAGgIQAGgJALAAQAKAAAEAHQAEAFABAIQAAAJgFAHQgFAJgLAAQgHAAgHgFgAgfAvQgGgGAAgHQAAgLASgOIAfgWQASgNAAgLQAAgNgNgLQgNgLgNAAQgIAAgMAJQgNAIgFAAQgJAAgFgGQgGgGABgHQAAgOAXgLQAVgKANAAQAdAAAYAWQAXAWABAcQAAAcgcAVIgXAQQgNAJgHAIQgGAIgJAAQgHAAgGgGg");
	this.shape.setTransform(302.6,362.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6600").s().p("AAFAsQgEgNgEghIgEAHIgUA0QgCAGgEAEQgGAJgMAAQgGAAgHgLQgIgMgEgTQgFgRgIg4IgCgTQAAgIAFgFQAGgFAIAAQAPAAADAPIADATIACATIAGAiQAKgbANgpQAGgSAOAAQAPAAAFAUIAHAkIAHAmIAVhTQADgLAPAAQAHAAAGAFQAGAFAAAHIAAAEQgPA2gOArQgEAMgKANQgGAJgLAAQgRAAgKghg");
	this.shape_1.setTransform(285.2,365.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6600").s().p("AgsA6QgUgUgBgfQgBgdASgYQAUgcAlAAQAbAAAQAWQAOAUAAAdQAAAfgQAWQgTAZgfAAQgaAAgSgRgAgTgWQgIAMAAARQAAARAJAIQAIAHAKAAQAKAAAJgIQAKgJABgQQACgrgZgBIgCAAQgPAAgJAQg");
	this.shape_2.setTransform(268,365.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6600").s().p("AA6BoQgGgFAAgHIgBgeIgBgeIABgOQgWABgeAGIg1AJIgCAdIgBAeQAAAHgGAEQgFAFgIAAQgIAAgFgFQgFgFAAgHQAAgOACgbIACgoIABgyIABg0QAAgHAFgFQAGgFAIAAQAIAAAFAFQAFAFAAAIIgBAfIAAAfIgBANIgBAOIA1gKQAdgFAXgBIABgyQABgKAGgOQAHgRAKAAQAHAAAGAFQAGAFAAAIIgBAEQgCAKAAAHIgBAMIgBAMIgBAnIgCAlIACAeIACAeQAAAIgGAFQgFAFgIAAQgIAAgGgFg");
	this.shape_3.setTransform(250.4,362);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.UI}]}).wait(1));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A/vbTMAAAg2lMA/fAAAMAAAA2lg");
	mask.setTransform(274.4,179.5);

	// Main
	this.instance = new lib.AnimatedScoreboardText();
	this.instance.parent = this;
	this.instance.setTransform(436.5,324.6);

	this.instance_1 = new lib.ScoreboardBackground();
	this.instance_1.parent = this;
	this.instance_1.setTransform(431,310,1.348,1.348);

	this.instance_2 = new lib.Main();
	this.instance_2.parent = this;
	this.instance_2.setTransform(280.5,193.9,1.341,1.341);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,201.6,534,398.7);
// library properties:
lib.properties = {
	id: '660AC905F691A143A89B3B72D197B1C4',
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
		{src:"sounds/Adverb8_howwav.mp3", id:"Adverb8_howwav"},
		{src:"sounds/Adverb8_howAboutDatwav.mp3", id:"Adverb8_howAboutDatwav"},
		{src:"sounds/Adverb8_howdShewav.mp3", id:"Adverb8_howdShewav"},
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
an.compositions['660AC905F691A143A89B3B72D197B1C4'] = {
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