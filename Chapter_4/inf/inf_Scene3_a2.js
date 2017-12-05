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


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKAKQgDgEAAgGQAAgFADgFQAEgEAGAAQAGAAAEAEQAEAFAAAFQAAAGgEAEQgEAFgGgBQgGABgEgFg");
	this.shape.setTransform(365.9,63.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0099").s().p("AAgBaQgHgMgMgQIgUgcIgVAOIgBAkQAAAFgDADQgDADgFAAQgMAAgBgPIACgeIACgdIAAgnIABgpIgBgMIAAgNQAAgFADgDQADgDAFgBQAFABADADQADADAAAFIABANIAAANIgBAlIAAApQAQgNAOgOIAagaQADgEAFAAQAEAAAEADQAEAEAAAFQAAAEgEAEQgOARgVASIAZAjQASAYAAAIQAAAEgDAEQgEAEgEAAQgHgBgDgGg");
	this.shape_1.setTransform(357,54.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC0099").s().p("AgtA2IAAhRIAAgMIABgMQAAgMAKAAQAMAAAAAUQAWgWAaAAQAKAAAFAHQAFAIgBAOIAAAIQAAAPgLAAQgLAAABgMIAAgIIgBgKQgSACgLAJQgKAHgHAQIAAA/QAAAMgMAAQgKAAAAgMg");
	this.shape_2.setTransform(344.4,58.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC0099").s().p("AgiAyQgQgRgBgbQgBgZAOgUQARgYAcAAQAYAAAMAVQAJASAAAYQgBAZgNASQgPAVgYAAQgTAAgOgOgAgUgXQgIANAAAQQAAARAJAKQAIAHAKAAQAMAAAIgIQAKgKACgRQABgsgaAAIgBAAQgQAAgJAQg");
	this.shape_3.setTransform(331.8,58.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC0099").s().p("AAHAiIgEgbIgDgaIgKAWIgSAwQgBAFgDACQgEAHgHAAQgJAAgJgjQgEgSgEgeIgDgSIgBgRQAAgFADgDQAEgEAEAAQAJAAADAKIACARIACARIAHA0QANgjAOgvQADgNAJAAQAJAAAEAOIAHAqQAFAdAEARIAIggIAPg/QACgHAIAAQAFAAAEADQADADAAAFIgBAFQgJAngPAvQgDAKgHAMQgFAGgHAAQgMAAgIggg");
	this.shape_4.setTransform(317.6,58.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC0099").s().p("AgpBQQgRgRAAgZQAAggARgSQAQgSAaAAQAOAAAHAEIALAIQACgyACgRQACgKAIAAQALAAAAALQAAARgEA3IgBAiQgBAnAEAUIAAACQAAAFgDADQgEADgDAAQgIAAgDgKQgJAGgJADQgJADgJAAQgYAAgQgQgAgbACQgJAMAAAXQAAAPAKALQALALAOAAQAJAAAHgEIANgJIADgEIAAgUIAAgOIAAgOQgEgJgHgEQgIgFgLAAQgSAAgKALg");
	this.shape_5.setTransform(295.1,54.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC0099").s().p("AgsA2IAAhRIAAgMIAAgMQAAgMAKAAQALAAABAUQAWgWAaAAQAKAAAFAHQAEAIAAAOIAAAIQAAAPgLAAQgKAAAAgMIAAgIIgBgKQgSACgLAJQgKAHgHAQIAAA/QAAAMgMAAQgKAAABgMg");
	this.shape_6.setTransform(282.7,58.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CC0099").s().p("AAlA8QgFgFgCgEIgUAKQgJADgEAAQgcAAgMgQQgMgOAAgeQAAgcATgTQAUgVAaAAQAKAAANAGQAQAGAAAKQAAADgDACIgBAOIgBAaQAAAOACAIQABAGAGAQIADAFIAAADQAAAEgDADQgDADgEAAQgDAAgGgFgAgTgcQgNAOAAATQAAATAHAJQAGAKAOAAQAKABAIgFQAEgCAIgGQgEgfAAgPIABgLIACgNIgIgDIgFgBQgRAAgNAPg");
	this.shape_7.setTransform(270.4,58.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CC0099").s().p("AAgBYQgDgJgCgSQgCgRAAgLIAAgJIAAgKQAAgVgLABQgOAAgLAMQgGAHgLATQAAAtgDAJQgEAHgHAAQgEAAgEgEQgEgDAAgEIABgGIACgRIAAgSIAAhUIABgUIgBgLQgBgGAAgFQAAgFADgDQAEgDAFAAQAJAAACAKQACALAAAJIgBAaIgBAaIAAAKQAKgNALgGQAKgHAMAAQAUAAAHAMQAFAJABAVIABAWIACAYIAEAZIABADQAAAFgEADQgDAEgFgBQgJAAgCgJg");
	this.shape_8.setTransform(257.5,54.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CC0099").s().p("AggBBQgSgGAAgMQAAgFADgDQAEgDAFAAQAEAAAFAFQADACAKACIANACQAJAAAIgCQALgEgBgHQABgQgXgGIgLgCQgPgEgHgFQgJgFAAgNQAAgZAWgKQAIgDAOgFIAWgHQAFgCAFgBQAGABADADQADADAAAFIACALIABAKQAAAFgDADQgEADgEAAQgHAAgCgEQgCgDgCgKIgbAJQgSAHAAALIAHACQAaAFAOAIQATALAAAYQAAATgRAKQgOAHgUABQgPAAgOgGg");
	this.shape_9.setTransform(237.1,57.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CC0099").s().p("AgLBVQgDgEAAgEIAAgWIgBgVIABgbIACgbQAAgFADgDQADgEAFABQAEgBADAEQAEADAAAFIgCAbIgBAbIABAVIAAAWQAAAEgDAEQgDADgEAAQgGAAgDgDgAgHhAQgEgEAAgFQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAFgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_10.setTransform(228.4,55.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CC0099").s().p("AAdA5IgEgaIgBgZIAAgKIAAgMQAAgZgJAAQgNAAgLAQQgLAOgGAVIgBALIgBALIABALIABALQAAAFgDADQgEADgFAAQgFAAgDgDQgDgDAAgFIgBgLIgBgLIACggIACghIgBgMIAAgLQAAgFADgDQAEgDAEAAQALAAABAPIABAOQATgbAUAAQATAAAHARQAFALABAWIAAALIAAAKQAAAKACAQQADAPAAAJQAAAGgEADQgDADgFAAQgKAAgBgLg");
	this.shape_11.setTransform(211.6,57.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CC0099").s().p("AAaA4QgPAIgSAAQgPAAgKgHQgLgIgCgOQgFgfAAgXQAAgQAEgVQABgKAKAAQAFAAADADQAEADAAAFIgCASIgCASIABAgQACAOACAIIAIAEIAHABQAPAAARgFIAAgYIAAgWQAAgZACgTQACgKAKAAQAFAAADADQAEADgBAFIgCAsIAAAZIAAAZIABAIIAAAIQAAAFgDADQgEADgEAAQgKAAgCgLg");
	this.shape_12.setTransform(198.9,58.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CC0099").s().p("AgtA2IAAhRIAAgMIABgMQAAgMAKAAQALAAABAUQAWgWAaAAQAKAAAFAHQAFAIAAAOIAAAIQgCAPgLAAQgKAAAAgMIAAgIIAAgKQgTACgJAJQgLAHgHAQIAAA/QAAAMgLAAQgLAAAAgMg");
	this.shape_13.setTransform(187.2,58.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CC0099").s().p("AgiAyQgQgRgBgbQgBgZAOgUQARgYAcAAQAXAAANAVQAJASAAAYQgBAZgNASQgPAVgYAAQgTAAgOgOgAgUgXQgIANAAAQQAAARAJAKQAIAHAKAAQAMAAAIgIQAKgKABgRQACgsgaAAIgBAAQgQAAgJAQg");
	this.shape_14.setTransform(167.5,58.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CC0099").s().p("AgIBWQgDgDAAgGIAAgFIABgFIgBgRIgBgSQAAgQgCgeIgEgvIgKAAQgaAAgOgDQgKgDAAgJQAAgFADgEQAEgEAFABIATACIATABIAVAAIAVAAIAbABIAaABQAFAAAEAEQADADAAAFQAAAFgDAEQgEADgFAAIgagBIgbgBIgIAAQAAAQACAkQADAhAAATIABAMIABANQgBAIgCAFQgDAIgHAAQgDAAgFgDg");
	this.shape_15.setTransform(154.3,55.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AggBBQgSgGAAgMQAAgFADgDQAEgDAFgBQAEABAFAFQADACAKACIANACQAJAAAIgDQALgDgBgHQABgQgXgGIgLgDQgPgDgHgFQgJgFAAgOQAAgYAWgKQAIgEAOgEIAWgHQAFgCAFgBQAGABADADQADADAAAGIACAKIABAKQAAAEgDAEQgEADgEAAQgHAAgCgEQgDgDgBgKIgbAIQgSAIAAALIAHACQAaAFAOAIQATALAAAYQAAATgRAKQgOAIgUAAQgPAAgOgGg");
	this.shape_16.setTransform(509.8,22.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAlA8QgFgEgCgFIgUAKQgJADgEAAQgcAAgMgQQgMgOAAgeQAAgcATgTQAUgVAaAAQAKAAANAFQAQAHAAAKQAAADgDACIgBAOIgBAZQAAAPACAJQABAFAGAQIADAGIAAACQAAAEgDADQgDADgEAAQgDAAgGgFgAgTgcQgNAOAAATQAAATAHAJQAGALAOAAQAKAAAIgFQAEgCAIgHQgEgeAAgPIABgLIACgNIgIgDIgFgBQgRAAgNAPg");
	this.shape_17.setTransform(498.1,22.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAgBYQgDgJgCgSQgCgRAAgLIAAgJIAAgKQAAgUgLAAQgOAAgLAMQgGAHgLATQAAAtgDAIQgEAIgHAAQgEAAgEgDQgEgEAAgEIABgGIACgRIAAgSIAAhUIABgUIgBgLQgBgGAAgFQAAgFADgEQAEgCAFAAQAJgBACALQACALAAAJIgBAaIgBAaIAAAJQAKgMALgGQAKgHAMAAQAUAAAHANQAFAIABAVIABAWIACAYIAEAZIABADQAAAFgEADQgDADgFAAQgJAAgCgJg");
	this.shape_18.setTransform(478,19.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AghAzQgRgPAAgZQAAgWAQgaQASgcAUAAQAMAAAOAGQATAGgBAKQAAAFgCADQgDADgFABQgEgBgBgBIgGgFQgGgFgRAAQgKAAgMAVQgKAUAAANQAAAPAKAKQAKAIAPAAQAHAAAHgEIAOgHIAFgCQAEAAADADQADAEABAEQAAAJgSAIQgRAHgJAAQgYAAgQgPg");
	this.shape_19.setTransform(464.8,22.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAaA4QgPAIgSAAQgPAAgKgHQgLgIgCgOQgFgfAAgXQAAgQAEgVQABgKAKAAQAFAAADADQAEADAAAFIgCASIgCASIABAgQACAOACAIIAIAEIAHABQAPAAARgFIAAgYIAAgWQAAgZACgTQACgKAKAAQAFAAADADQAEADgBAFIgCAsIAAAZIAAAZIABAIIAAAIQAAAFgDADQgEADgEAAQgKAAgCgLg");
	this.shape_20.setTransform(452.4,22.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AggBBQgSgGAAgMQAAgFAEgDQADgDAFgBQADABAHAFQACACAKACIANACQAJAAAHgDQAMgDAAgHQgBgQgWgGIgLgDQgQgDgGgFQgKgFAAgOQAAgYAYgKQAGgEAPgEIAWgHQAFgCAGgBQAEABAEADQADADAAAGIABAKIACAKQAAAEgEAEQgCADgGAAQgGAAgDgEQgBgDgBgKIgbAIQgTAIABALIAGACQAaAFANAIQATALAAAYQAAATgQAKQgOAIgUAAQgPAAgOgGg");
	this.shape_21.setTransform(440,22.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgnAyQgTgOABgaQAAgeAOgVQARgWAaAAQATAAAMAGQAPAJAAARQAAALgNAKQgGAEgTAIIgsAVQAHAKAKAFQAJAFAMgBQAJAAALgDQANgDAFgGQAEgHAEAAQAEAAADAEQAEADAAADQAAAOgWAJQgRAIgSAAQgZAAgQgOgAgYgfQgJALgEAWIAkgQQAUgLAIgHQgKgKgRAAQgOAAgKALg");
	this.shape_22.setTransform(420.9,22.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AghAzQgRgPAAgZQAAgWAQgaQASgcAUAAQAMAAAOAGQATAGgBAKQAAAFgCADQgDADgFABQgDgBgDgBIgEgFQgHgFgRAAQgKAAgMAVQgLAUABANQgBAPALAKQAKAIAPAAQAHAAAHgEIAOgHIAFgCQAEAAADADQADAEAAAEQABAJgTAIQgQAHgJAAQgYAAgQgPg");
	this.shape_23.setTransform(408,22.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAdA5IgEgaIgBgZIAAgKIAAgMQAAgZgJAAQgNAAgLAQQgLAOgGAVIgBALIgBALIABALIABALQAAAFgDADQgEADgFAAQgFAAgDgDQgDgDAAgFIgBgLIgBgLIACggIACghIgBgMIAAgLQAAgFADgDQAEgDAEAAQALAAABAPIABAOQATgbAUAAQATAAAHARQAFALABAWIAAALIAAAKQAAAKACAQQADAPAAAJQAAAGgEADQgDADgFAAQgKAAgBgLg");
	this.shape_24.setTransform(395.8,22.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgnAyQgSgOAAgaQgBgeAQgVQAPgWAbAAQATAAAMAGQAPAJAAARQAAALgNAKQgGAEgTAIIgsAVQAHAKAKAFQAJAFANgBQAHAAAMgDQANgDAFgGQAEgHAEAAQAEAAAEAEQADADAAADQgBAOgUAJQgTAIgQAAQgaAAgQgOgAgXgfQgKALgFAWIAkgQQAVgLAIgHQgJgKgSAAQgOAAgJALg");
	this.shape_25.setTransform(382.9,22.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgHBSQgDgDAAgEIAAgNIABgOIgDhDIgagDQgKgBAAgKQAAgFADgEQADgDAFAAIAZACIgBgQIAAgOQAAgGADgCQADgDAFgBQAKAAACARIAAALIAAAGIAAAIIAQgCQANAAADABQAHADAAAIQAAAFgDAEQgDADgFAAIgGAAIgGgBIgQADIADBDIAAAGIAAAGQAAAZgMAAQgEAAgEgDg");
	this.shape_26.setTransform(370.4,20.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAdA5IgEgaIgBgZIAAgKIAAgMQAAgZgJAAQgNAAgLAQQgLAOgGAVIgBALIgBALIABALIABALQAAAFgDADQgEADgFAAQgFAAgDgDQgDgDAAgFIgBgLIgBgLIACggIACghIgBgMIAAgLQAAgFADgDQAEgDAEAAQALAAABAPIABAOQATgbAUAAQATAAAHARQAFALABAWIAAALIAAAKQAAAKACAQQADAPAAAJQAAAGgEADQgDADgFAAQgKAAgBgLg");
	this.shape_27.setTransform(358.8,22.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgnAyQgTgOABgaQgBgeAPgVQARgWAaAAQATAAAMAGQAPAJAAARQAAALgNAKQgGAEgTAIIgsAVQAHAKAKAFQAJAFANgBQAHAAAMgDQANgDAFgGQAEgHAEAAQAEAAADAEQAEADAAADQAAAOgWAJQgRAIgRAAQgaAAgQgOgAgXgfQgKALgFAWIAlgQQAUgLAIgHQgJgKgSAAQgOAAgJALg");
	this.shape_28.setTransform(345.9,22.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AggBBQgSgGAAgMQAAgFADgDQAEgDAFgBQAEABAFAFQADACAKACIANACQAJAAAIgDQALgDgBgHQABgQgXgGIgLgDQgPgDgHgFQgJgFAAgOQAAgYAWgKQAIgEAOgEIAWgHQAFgCAFgBQAGABADADQADADAAAGIACAKIABAKQAAAEgDAEQgEADgEAAQgHAAgCgEQgCgDgCgKIgbAIQgSAIAAALIAHACQAaAFAOAIQATALAAAYQAAATgRAKQgOAIgUAAQgPAAgOgGg");
	this.shape_29.setTransform(332.9,22.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgoAyQgRgOgBgaQABgeAPgVQAQgWAaAAQATAAAMAGQAPAJAAARQAAALgNAKQgGAEgTAIIgrAVQAGAKAKAFQAKAFAMgBQAIAAAKgDQAPgDADgGQAEgHAFAAQAEAAAEAEQACADAAADQAAAOgUAJQgSAIgRAAQgaAAgRgOgAgYgfQgJALgFAWIAkgQQAUgLAKgHQgLgKgRAAQgOAAgKALg");
	this.shape_30.setTransform(313.9,22.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAgBYQgDgJgCgSQgCgRAAgLIAAgJIAAgKQAAgUgLAAQgOAAgLAMQgGAHgLATQAAAtgDAIQgEAIgHAAQgEAAgEgDQgEgEAAgEIABgGIACgRIAAgSIAAhUIABgUIgBgLQgBgGAAgFQAAgFADgEQAEgCAFAAQAJgBACALQACALAAAJIgBAaIgBAaIAAAJQAKgMALgGQAKgHAMAAQAUAAAHANQAFAIABAVIABAWIACAYIAEAZIABADQAAAFgEADQgDADgFAAQgJAAgCgJg");
	this.shape_31.setTransform(300.3,19.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgHBSQgDgDAAgEIAAgNIABgOIgDhDIgagDQgKgBAAgKQAAgFADgEQADgDAFAAIAZACIgBgQIAAgOQAAgGADgCQADgDAFgBQAKAAACARIAAALIAAAGIAAAIIAQgCQANAAADABQAHADAAAIQAAAFgDAEQgDADgFAAIgGAAIgGgBIgQADIADBDIAAAGIAAAGQAAAZgMAAQgEAAgEgDg");
	this.shape_32.setTransform(287.5,20.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgTBkQgDgDAAgFIAAgCQADgPAAgSIgBggIAAghIgSABQgMAAAAgMQAAgLAVgBIALAAIACgSQADgaAKgMQALgPAaAAQARAAAAALQAAALgQAAQgcAAgDAoIgBAHIAagBQATAAAAALQAAAJgKACIgJAAQgFAAgWACIgBAZIABAWIAAAWQAAAWgCANQgBAJgJAAQgFAAgEgDg");
	this.shape_33.setTransform(268.5,20);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgiAyQgQgRgBgbQgBgZAOgUQARgYAcAAQAXAAANAVQAJASAAAYQgBAZgNASQgPAVgYAAQgTAAgOgOgAgUgXQgIANAAAQQAAARAJAKQAIAHAKAAQAMAAAIgIQAKgKABgRQACgsgaAAIgBAAQgQAAgJAQg");
	this.shape_34.setTransform(256.1,22.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgHBSQgDgDAAgEIAAgNIABgOIgDhDIgagDQgKgBAAgKQAAgFADgEQADgDAFAAIAZACIgBgQIAAgOQAAgGADgCQADgDAFgBQAKAAACARIAAALIAAAGIAAAIIAQgCQANAAADABQAHADAAAIQAAAFgDAEQgDADgFAAIgGAAIgGgBIgQADIADBDIAAAGIAAAGQAAAZgMAAQgEAAgEgDg");
	this.shape_35.setTransform(237.2,20.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AghAzQgQgPAAgZQAAgWAPgaQARgcAVAAQAMAAAPAGQARAGABAKQAAAFgDADQgDADgFABQgEgBgCgBIgEgFQgIgFgQAAQgKAAgMAVQgLAUAAANQAAAPALAKQAKAIAOAAQAHAAAJgEIANgHIAFgCQAEAAAEADQACAEAAAEQAAAJgSAIQgPAHgLAAQgXAAgQgPg");
	this.shape_36.setTransform(225.5,22.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgnAyQgSgOAAgaQAAgeAPgVQAPgWAbAAQATAAAMAGQAPAJAAARQAAALgNAKQgGAEgTAIIgsAVQAHAKAKAFQAJAFANgBQAHAAAMgDQAOgDAEgGQADgHAFAAQAEAAAEAEQACADAAADQAAAOgUAJQgTAIgQAAQgaAAgQgOgAgXgfQgKALgFAWIAkgQQAVgLAJgHQgKgKgSAAQgOAAgJALg");
	this.shape_37.setTransform(212.9,22.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AglBUIgBgGQAAgEADgEQAEgDAEAAQAIAAAHAPIAHAMQAEAFAFAAQAFAAAEgHIADgMQAAgOgDg4IgFhAQAAgGAEgEQADgFAFAAQAEAAAEADQAEADABADIADBDIAEBIQgBAQgJANQgLAPgPAAQgYAAgRgngAAHhiQgDgEAAgGQAAgGADgEQAEgEAGAAQAGAAAEAEQAEAEAAAGQAAAGgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_38.setTransform(200.1,23.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgjBYQgEAFgFAAQgFAAgDgDQgDgDAAgFIABgJIAAgJIgBglIAAgkIAAggIAAghQAAgHACgGQAEgHAHAAQAJAAAAAKIgBAFIAAAFIgBAaIAAAeQALgHAIgEQAKgDAHAAQAZAAAQATQAOARAAAbQABAagSATQgRATgYAAQgTAAgOgHgAgSgFIgRALIAAAUIAAASIAAAUIAQAGQAIACAJAAQAPAAAMgMQALgLAAgSQAAgSgKgLQgJgMgQAAQgIAAgLAFg");
	this.shape_39.setTransform(189.5,19.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAaA4QgPAIgSAAQgPAAgKgHQgLgIgCgOQgFgfAAgXQAAgQAEgVQABgKAKAAQAFAAADADQAEADAAAFIgCASIgCASIABAgQACAOACAIIAIAEIAHABQAPAAARgFIAAgYIAAgWQAAgZACgTQACgKAKAAQAFAAADADQAEADgBAFIgCAsIAAAZIAAAZIABAIIAAAIQAAAFgDADQgEADgEAAQgKAAgCgLg");
	this.shape_40.setTransform(176,22.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AggBBQgSgGAAgMQAAgFAEgDQADgDAFgBQAEABAGAFQACACAKACIANACQAJAAAIgDQAKgDABgHQAAgQgXgGIgLgDQgQgDgGgFQgKgFABgOQgBgYAXgKQAIgEAOgEIAWgHQAFgCAFgBQAFABAEADQADADAAAGIACAKIABAKQAAAEgEAEQgDADgEAAQgHAAgCgEQgDgDgBgKIgbAIQgRAIgBALIAHACQAaAFANAIQAUALgBAYQAAATgQAKQgOAIgUAAQgPAAgOgGg");
	this.shape_41.setTransform(163.5,22.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgoAyQgRgOgBgaQABgeAPgVQAPgWAbAAQATAAAMAGQAPAJAAARQAAALgNAKQgGAEgTAIIgsAVQAHAKAKAFQAJAFANgBQAHAAAMgDQAOgDAEgGQADgHAFAAQAEAAAEAEQACADABADQgBAOgUAJQgTAIgQAAQgaAAgRgOgAgXgfQgKALgFAWIAkgQQAVgLAJgHQgKgKgSAAQgOAAgJALg");
	this.shape_42.setTransform(144.5,22.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAgBYQgDgJgCgSQgCgRAAgLIAAgJIAAgKQAAgUgLAAQgOAAgLAMQgGAHgLATQAAAtgDAIQgEAIgHAAQgEAAgEgDQgEgEAAgEIABgGIACgRIAAgSIAAhUIABgUIgBgLQgBgGAAgFQAAgFADgEQAEgCAFAAQAJgBACALQACALAAAJIgBAaIgBAaIAAAJQAKgMALgGQAKgHAMAAQAUAAAHANQAFAIABAVIABAWIACAYIAEAZIABADQAAAFgEADQgDADgFAAQgJAAgCgJg");
	this.shape_43.setTransform(130.9,19.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgHBSQgDgDAAgEIAAgNIABgOIgDhDIgagDQgKgBAAgKQAAgFADgEQADgDAFAAIAZACIgBgQIAAgOQAAgGADgCQADgDAFgBQAKAAACARIAAALIAAAGIAAAIIAQgCQANAAADABQAHADAAAIQAAAFgDAEQgDADgFAAIgGAAIgGgBIgQADIADBDIAAAGIAAAGQAAAZgMAAQgEAAgEgDg");
	this.shape_44.setTransform(118.1,20.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgoAyQgRgOAAgaQAAgeAPgVQAPgWAbAAQATAAAMAGQAPAJAAARQAAALgNAKQgGAEgTAIIgsAVQAHAKAKAFQAJAFANgBQAHAAAMgDQAOgDAEgGQADgHAFAAQAEAAAEAEQACADAAADQAAAOgUAJQgTAIgQAAQgaAAgRgOgAgXgfQgKALgFAWIAkgQQAVgLAJgHQgKgKgSAAQgOAAgJALg");
	this.shape_45.setTransform(99,22.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgjBYQgEAFgFAAQgFAAgDgDQgDgDAAgFIABgJIAAgJIgBglIAAgkIAAggIAAghQAAgHADgGQAEgHAGAAQAJAAAAAKIAAAFIgBAFIAAAaIAAAeQAJgHAJgEQAKgDAHAAQAZAAAQATQAOARAAAbQAAAagRATQgRATgZAAQgSAAgOgHgAgRgFIgRALIgBAUIABASIAAAUIAPAGQAIACAIAAQARAAALgMQAKgLABgSQgBgSgIgLQgKgMgQAAQgIAAgKAFg");
	this.shape_46.setTransform(85.4,19.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAdA5IgEgaIgBgZIAAgKIAAgMQAAgZgJAAQgNAAgLAQQgLAOgGAVIgBALIgBALIABALIABALQAAAFgDADQgEADgFAAQgFAAgDgDQgDgDAAgFIgBgLIgBgLIACggIACghIgBgMIAAgLQAAgFADgDQAEgDAEAAQALAAABAPIABAOQATgbAUAAQATAAAHARQAFALABAWIAAALIAAAKQAAAKACAQQADAPAAAJQAAAGgEADQgDADgFAAQgKAAgBgLg");
	this.shape_47.setTransform(64.8,22.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAlA8QgFgEgCgFIgUAKQgJADgEAAQgcAAgMgQQgMgOAAgeQAAgcATgTQAUgVAaAAQAKAAANAFQAQAHAAAKQAAADgDACIgBAOIgBAZQAAAPACAJQABAFAGAQIADAGIAAACQAAAEgDADQgDADgEAAQgDAAgGgFgAgTgcQgNAOAAATQAAATAHAJQAGALAOAAQAKAAAIgFQAEgCAIgHQgEgeAAgPIABgLIACgNIgIgDIgFgBQgRAAgNAPg");
	this.shape_48.setTransform(52.1,22.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AghAzQgQgPAAgZQAAgWAPgaQARgcAWAAQALAAAPAGQASAGAAAKQAAAFgEADQgDADgEABQgDgBgCgBIgGgFQgGgFgQAAQgLAAgMAVQgLAUAAANQAAAPALAKQAKAIAPAAQAHAAAIgEIANgHIAFgCQAEAAAEADQADAEAAAEQgBAJgRAIQgQAHgKAAQgYAAgQgPg");
	this.shape_49.setTransform(39.9,22.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgHBSQgDgDAAgEIAAgNIABgOIgDhDIgagDQgKgBAAgKQAAgFADgEQADgDAFAAIAZACIgBgQIAAgOQAAgGADgCQADgDAFgBQAKAAACARIAAALIAAAGIAAAIIAQgCQANAAADABQAHADAAAIQAAAFgDAEQgDADgFAAIgGAAIgGgBIgQADIADBDIAAAGIAAAGQAAAZgMAAQgEAAgEgDg");
	this.shape_50.setTransform(20.8,20.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgyBWQgEgDAAgFQAAgGAEgDQACgDAGAAIAZgDQABgKAAgMIgBgTIAAgUQAAgaADgpIgQABIgPAAQgFAAgDgDQgEgEAAgFQABgLAKAAIAkgBQAWAAAkAEQAKACgBALQAAAGgDADQgEACgEABIgTgCIgTgDQgDAiAAAfIAAAUIABAUIgBAUIAlAAQAFAAADAEQAEACAAAGQAAAFgEAEQgDADgFAAIgUAAIgTAAIgWACIgXADQgGgBgCgDg");
	this.shape_51.setTransform(8.7,19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,525.2,108.4);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.812)").s().p("EgsbAHgIAAu/MBY3AAAIAAO/g");
	this.shape.setTransform(284.4,48);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,568.9,96);


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


(lib.ButtonBackground = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(0.1,1,1).p("AEtC6IpZAAIAAlzIJZAAg");
	this.shape.setTransform(31.2,19);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AksC6IAAlzIJZAAIAAFzg");
	this.shape_1.setTransform(31.2,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,-0.6,62.2,39.2);


(lib.Wave2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(3.2,6.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EgkCAEmIgIgMIAAgBQgTgjAAglQAAgZAFgKQAFgKAJgFQAQgIAeAHIAHgwQABgFARgTIANgMQgBgGAEgCQAGgDAwAAQAQAABYAVQgEgPACgMIABgEQAIgYAnAAQAoAAAuAOIAjANQAEgFAGgDIAIgEQAMgNATAAIAJAAIAFggQABgFARgTIANgMQgBgGAEgCQAGgDAwAAQAQAABYAVQgEgPACgMIABgEQAIgYAnAAQAoAAAuAOQAgAMAJACIAEABIAAgBQAMgaAbAAIAQABQAeADASAUQAGAIAGALQAKgLAdgPQAqgXAYAAQAMAAATANQARAKAHAJIAIgVQAFgPAlAAQAgAAANAfQAKgPAIgHQAOgMAjAAQAwAAACAaIAAABQAOgWAMgHQAUgNAnAAQAgAAAKAIQAHAGAHAQQALgRAHgFQAMgIAbAAQAGAAAjAQQAEgKAGgFQAKgKAfAAQAWAAA+AaQACgMAVgPQAagUAkAAQAWAAAJAEQAMAGAHAUQAXgdAmAAQAdAAAOAHIALgCQARAAARAOQAMggBjAAQApAAAEAGIALANQACgNAEgKIADgCIAAgCIAAgCQADgFADgEQADgCAlgHQAngHAQAAIAiAEQAAggA0AAQAWAAARALQAJAGAJAJIARALIAAgDQAAgNAbAAQAnAAAbANQAIgLAiAAQAKAAAnAJQgbgYAAgWQAAgcAyAAQAzAAApARQAoAQADAUQACgNARgOQAYgTAjAAQAfAAAOAJQAIAGAKANQALgWAeAAQAdAAAkAbQAGgKASAAQAYAAAMAMQACgBAHgMQAMgKAbAAQAiAABNAZQgDgOAOgQQAUgWApAAQAbAAAcAMQAZALAHANQAFgIARgKQAVgNATAAQAQAAAQAMIAMAMQADgIAKgJQAPgPATAAQAQAAAiAMIAAgEQAAgHANAAQAZAAAIAGQAcgkA4AAQAhAAALAMQACACAFAOIAIAZQAGgUAtgQQAugQAoAAQAqAAAPAMQAHAGAEAGIAegEIAAAFQgZABgGAGQgLgbgoAAQgwAAgxAUQguASgGARIgCAAIABAGIAAAKQAAAAAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQgJgCgCgDQAIgDAAgGIgLgjQgHgWglAAQgiAAgdAUIgVAUQgFgKgSAAIgSAAIADAJIgBADQAAAAAAABQAAAAAAAAQgBAAAAAAQgBAAAAAAQgugOgKAAQgZAAgLARQgGARgEAAQgDAAgKgJIgGgEQgPgOgKAAQglAAgRAYQgCAbgLAAIgDgBIAAgGIADgMQAAgKgagNQgcgOgdAAQgmAAgRARQgLAKAAAKQAAALARAKQAAADgIAAIglgQIgXgFQgsgMgVAAQgeAAgJANQgEANgEAAQgSgPgHAAQgdAAgCABIABAGIgCAGQgsgfgRAAQgdAAgLANQgGANgCAAQgBAAgNgQQgNgQgmAAQgfAAgVARQgMAJgEAKQgDAcgLAKQgDgCAAgHIACgQQAAgUghgQQgmgTg6AAQggAAgJAKQgDADAAAIQAAARASASIASARIgBADIgEABQgzgMgKAAQggAAgEAGQgCAEAEAJQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQgYgYgeAAIgkACIgCALQAKAHAAADIgTAFIgDgEIAIgEIACAAIgBgBIgvggQgMgIgSAAQgeAAgJALQgEAEAAAHQAAALAKAPIgBAFIgCABQgFAAgBgEQAAgGgBgDQgFgMgjAAQgJAAg0AHQgfAEgGANQgLAXAFAWQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgEAAgGgUQgDgFgFgGQgDgDgDgBIgkgBQgyAAgeAKQgXAHAAAHQAAAFAMAHQANAGAAAEIgBADIgDABIg5ghIgKABIABACQAAABAAAAQgBABAAAAQgBABAAAAQgBAAgBAAIgUgHQgKgEgRAAQgcAAgSAPQgNAMABAKIgDABIgJgVIgGgMQgIgGgbAAQggAAgaAVQgNALgHALIACAIIAAADQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAIgtgYQgTgKgbAAQgfAAgKAPIgJAOQgNgUgdAAQgqAAgLAoQgDgBgMgWQgKgRgiAAQgvAAgTATQgEAEgPAfQgEgEgBgHIgCgNQgGgPgmAAQgoAAgNATQgGAJgEAJQgDAAgKgQQgKgRgaAAQgaAAgGAFQgHAGgEAdQAAAAAAAAQAAAAAAAAQgBABAAAAQgBAAAAAAIgagTQgagSgHAAQgSAAgdAOIgcAOQgWAIgGAMIABADIgDACIAAgBQgCAFABAGIgCABIgDAAIAAgOIACgDIgMgUQgSgVgagCIgGAAQgbAAgKAOIgJAOIgVgHIgYgIQgvgPgaAAQglAAgGAFQgHAEgEAOQgDAMAAAUIgDABQgQAAgigLQgigLgTAAQhZAAgDBKIADABIAAAFIgDgBIgDAAIgCAAQgRABgKAGQgFADgDAEIgJAOIgMgEIgDgBIgGgCIgYgIQgvgPgaAAQglAAgGAFQgHAEgEAOQgDAMAAAUIgDABQgQAAgigLQgigLgTAAQhcAAAABRQAAAFAEAMIgDACQgDAAgCgDQgBgDgmAAQgFAAgEACQgQAIACAlQAAAeAOAeIAFAKIAKAPQAfAoA5AAQAXAAAZgTQAPgLAGgKQAEgGABgGQAAgBAAAAQAAAAAAgBQABAAAAgBQABAAAAAAQADAIAFAHQAKAMASAAQA9AAAYgKIAGgCQAYgMAdgjQgJgGgHgKQgPgVAAgNQAAgaAPAAIACABIACACIgGAJQgHAHAAAHQAAANAPATQAGAIAIAFIABgBIAEAAIAAAFQARAKAYAAQAIAAAIgCQAQgEAQgLQAOgLAFgJIABgBIAAgFQAVAJAbAAQAXAAAZgTQAPgLAGgKQAEgGABgGQAAgBAAAAQAAAAAAgBQABAAAAAAQABgBAAAAQADAIAFAHQAKAMASAAQA9AAAYgKIAGgCQAYgMAdgiQgJgHgHgKQgPgVAAgNQAAgaAPAAIACABIACACIgGAJQgHAHAAAHQAAANAPATQAGAIAIAGIABgCIAEAAIAAAFQARAKAYAAQAIAAAIgCQAQgEAQgLQAPgLAFgKQADgHgCgHIACAAIAEAAIAAAFIgCATQAAAPAKAOQATAYArAAQAiAAAcgOQAcgOAAgOQgIgKAAgJQAAgLAFAAQAIAAABASQACATAWAAQBdAAAOhLIADgBQAHAAgEALQAAAKARATQAVAYAYAAQAbAAAJgFQALgGAKgaQAGADAGAQQAKAMAdAAQArAAAagiQASgiAEAAQACAAAGAMQAIALASAAQA0AAARgWQAHgWAGAAIAMARQAOASAPAAQAUAAAQgbQAPgbAGAAQAGAAANAMQAOAMAVAAQARAAgEgDQAGAAAAAEQAAADgEAFQAAANAcAAQAiAAAWgSQARgOAAgNQAAgwAWAAQAFAAABAQIACAhQAHAxAsAAQAdAAA5giQAVgQgCgWIADgCQADAAAGAOQAJAMAOAAQAQAAAIgQQAHgRAEAAQAFAAAPAWQAOAVAWAAQAYAAAJgWQAKgXAcAAIgEgEIAAgDIACAAIADAAIACgBIADAAIAAADQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBAAQAAABgBAAQAGAlBDAAQA9AAAdgcQAGgGAagtQAFAEAAAPQAAAPAMAJQAMAJARANQARAKApAAQBeAAAXhEQAHAFAJAUQANARAgAAQAtAAA1gvQAEADAAAMQADAKAYAAQAZAAAygYQATgKAKgNQAGgIAKAAQAHAAAcAZQAcAZAsAAQAsAAAkgYQAfgWAAgRIgFgOIAAgHIACgBQAGAAAMAeQAWAeA4AAQAiAAA5gQQA9gRAFgSIAAgEQgDgCAAgCQAAgBAAgBQABAAAAgBQAAAAABAAQAAgBABAAIACgBIADABIAAACQACACAAAEIgBAHQAFAXAnAAQA9AAAqg6IAHAUQAEAMAHAHQAUATBJAAQBhAAAKgXIAAgBIAAAAIABgFIgGgRQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAHAAACATIAAAFQALgBASgIQADgBAFgIQAAgMACgGQAEADAGAKQAMAIAsAAQA+AAAmgEIAAgBIASgCIACAAIAGgBIAhgNIAKgGQASgOAQgWIAHAUQAEAMAHAHQAVATBJAAQBgAAALgXIgBgBIABAAIABgFIgHgRQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAHAAADATIgBAFQALgBASgIQADgBAFgIQAAgMADgGQAEADAFAKQANAIArAAQCkAAAAgeQAAgGgGgJQgIgMgMgDQAngDAKgIQADgDAAgKQAAg2hSAAQgfAAgHAHQgLgbgoAAQgwAAgxAUQgvASgFARIgDAAIACAGIgBAKQAAAAAAAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgKgCgBgDQAHgDAAgGIgLgjQgGgWglAAQgjAAgcAUIgWAUQgEgKgSAAIgSAAIACAJIAAADQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQgtgOgKAAQgaAAgKARIgFAMQgDAFgCAAQgDAAgHgFIgEgDIAAgNIANAMQACgIAKgJQAPgPAUAAQAPAAAjAMIgBgEQAAgHAOAAQAZAAAIAGQAbgkA5AAQAgAAAMAMQACACAFAOIAHAZQAGgUAugQQAugQAoAAQAqAAAPAMQAHAGADAGIAmgEQBXAAAAA7QAAAMgCAEQgJALgfAAQAQANAAAPQAAAjiMAAIhKgBQAEgDgJgGIgMgIQAAAegZAAIgTgBQgKAchmAAQhCAAgZgQQgPgJgJgaQgSAYgGAGQgZAVgkAAIgEAAQggAFgzAAIhKgBQAEgDgIgGIgNgIQABAegaAAIgSgBQgLAchlAAQhCAAgagQQgPgJgIgaQgSAYgGAGQgZAVglAAIgOAAQgZgCgLgGQgGgEgGgLQgOARg0APQg6ARghAAQgmAAgKgFQgIgEgigdQgDAXgrAVQgnATgdAAQgtAAgfgZQgegagEAAQgnAegJAEQgxAWgXAAQgYAAgHgKIgCgMQg8ArgjAAQgdAAgOgMQgKgQgGgGQgIASgRAOQghAdg9AAQg3AAgegbQgXgVACgQQgZBDhdAAQgnAAgWgNQgTgKAAgQIAAgCIgDABQgOACgJAHQgHAFgBALQgRAWgVAAQgWAAgQgVQgNgUgDgDQgDAEgGAPQgIAPgUAAQgRAAgGgIIgGgKQgGAbgxAVQgmARgSAAQgoAAgMgiQgFgPAAglQAAgEgDgGQgKAIgCAQIgDAaQgEANgZAOQgaAOgYAAQgQAAgLgGQgKgGADgJQgcgDgLgFQgOgRgIAAQgBAAgSAcQgSAbgVAAQgWAAgUgeQgSAngzAAQgZAAgJgGIgNgMQgSAcgIAHQgbAcgmAAQgSAAgPgIQgPgHgCgJQgNAeggAAQgzAAgcgvIgTAdQgcAdgvAAQgTAAgHgDQgHgEgGgDQgWAthKAAQgkAAgRgMQgRgLgHgdIgBgEQgXAZgcAGQgIABgIAAQgYAAgSgKQggAbgUAOQgPAKgKADQgNAFg8AAQgFAAgOgIQgNgGgEgEIAAgBIgBABQgHAJgWAPQgeAWgSAAQgbAAgVgJIAAARIgBgFQgXAZgcAGQgIABgIAAQgYAAgSgKQggAbgVAOQgOAKgKADQgNAFg8AAQgFAAgOgIQgNgGgEgEIAAgBIgBABQgHAJgWAPQgeAWgSAAQg/AAgggugAzfB1IABgBIgEgLQAAAIADAEgA9kA0IgGAFIADAAIADABIAAgBIADgGIgDABgA8tAzIABADIgBABg");
	this.shape_1.setTransform(3.2,6.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Wave2, new cjs.Rectangle(-230.2,-27.9,466.9,67.9), null);


(lib.Wave1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(7.3,-2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("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");
	this.shape_1.setTransform(7.6,-1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Wave1, new cjs.Rectangle(-225.3,-34.9,465.9,66), null);


(lib.staticbuffyfArm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6B4E32").ss(0.5,1,1).p("AgdhjQgEAPAAARAh7BSQgBADgBADQAGAHAGAFAB+A3QAAgBAAAA");
	this.shape.setTransform(14.3,30.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6B4E32").ss(0.5,1,1).p("AgEAPQAEgPAFgO");
	this.shape_1.setTransform(99.8,33.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.5,1,1).p("AhjB9QADgDACgCQAXgbAPgnQABgFABgFQADgQAEgOQAKgeARgWQAIgKAJgJQAcgeAogWQAMgHANgGQBKgiAUhJQABgEABgEQACgIADgHAFrggQgKAegLAcQgRArgVAoQgTAjglAdQgjAagoAUQgpAUgsAPAlKAoQAoAKAlANQAUADAUAEQAsAJAhARQADACACABQASAKAOAQQALAKAIANQABABAAABQAPAWAEAWAlqgVQABABAAABQAAAAAAgBAlpgTQANAfASAcQgGgCgGgC");
	this.shape_2.setTransform(63.1,38.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.5,1,1).p("AEBj7QABgCARgtQARguBBgZQADgBADgBQAHgCAHgCQAugKAxAPQAwAPAYAtQAWApgCAwQgBAxgPAuQgPAugtAOQgjAKgYAZAnDitQABgDACgEQARguAxACQAsACgGA4QAQgFATACQA1AFgeA4QgSAhAJA3AolhQQAAgDAAgDQgBglAVgcQAVgdAdABQAMAAANAFAolhQQABAIACAIQACAMAKAGACbD/QgcAWgdATQgaARgcAXQgJAHgIAHQgcAZgnAEQguAFghgaQglgdgdghQgdgigqgYQgpgYgegiQgbgfgjgWQgEgEgFgCQgTgKgSgCQgXgBgVgHQgWgIgUgNQgogaAOgoQgEgGgDgIQgVgqAagm");
	this.shape_3.setTransform(56.4,38);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BE9670").s().p("Ah3FmQglgdgdghQgdgigqgYQgpgYgegiQgbgfgjgWIgJgGQgTgKgSgCQgXgBgVgHQgWgIgUgNQgogaAOgoIgHgOQgVgqAagmIADAQQACAMAKAGQgKgGgCgMIgDgQIAAgGQgBglAVgcQAVgdAdABQAMAAANAFIADABQgDAOAAAPIAAADIAAgDQAAgPADgOIADgHQARguAxACQAsACgGA4QAQgFATACQA1AFgeA4QgSAhAJA3IAAABIABACQAMAfASAbQApALAlANIAoAGQAsAJAhASIAEACQASALAPAPIAEgFQAXgaAOgoIACgKQADgPAFgPQAJgdARgXIARgSQAegeAogXIAYgMQBKgiAVhKIACgIIAEgPIASgvQARguBBgZIAGgCIAOgEQAugKAxAPQAwAPAYAtQAWApgCAwQgBAxgPAuQgPAugtAOQgjAKgYAZIAJgeIgJAeQgKAegLAcQgRArgVAoQgSAjglAdQgjAagpAUQgpAUgrAPQgcAWgdATQgbARgbAXIgRAOQgcAZgnAEIgQABQgkAAgbgWgAgOCVIACACQANAWAFAWQgFgWgNgWIgCgCQgIgMgKgLQAKALAIAMgAkIApIgMgDIAMADgAojAOQAGAHAHAEQgHgEgGgHIADgGIgDAGIAAAAg");
	this.shape_4.setTransform(56.4,38);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.staticbuffyfArm, new cjs.Rectangle(-1,-1,114.9,78), null);


(lib.staticbuffybArm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AiNhwQgOAbgOAaQglBZA8ApQBDAwBlgHQBogIArhQQAYgsgPg8");
	this.shape.setTransform(19.2,42.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AHmgzQACgBABAAQAUgMAUAMQAjAWARAgQACAEACAEQAJAUgOAHQgFgJgIgJQgIgLgKgGQgcgRghARQAAAAgBABQAAgBAAAAQgdghAcgUgAIaCGQAWgFAQgOQAOgMAAgSQABgXgJgUQgBgCgBgDApOA9QAIgNAHgMQAYgqAigjQAhgjAjggQAkghAogbQAogbAlgfQAkgdA1AFQAeACAdABQASABARABQAxADAwAIQAIABAIACQAjAGAjALQApAMAqAOQARAGAQAFQAdAJAcAIQAQAEAPAEQAgAJAbAKQArAQArATQApARAaAeAhzgxQAdABAcABQAdAAAdAAQARAAARgBQAwAAAvAHQAdAEAcAHQATAFATAGQAaAHAWAOQACABABABQABABABABQAPAKAMAOQAFAGAEAGQAFAHADAIAEVAGQAFASgDASQgDAagSAYQgfAsAtAZQAaAPAUARQANAMAVgSQADgDADgDQAeggAMgjQAAgHADgGQgBAFgCAHQAAAAAAABQgBAIACALQAAAAAAAAQAqAAAVAZQAUAXgDAVQANAHARACQAYADAFgQQALgigNgeAHnADQAAAAAAAAQgBAAgBABQgWAOgGAYQgEAOACASQAsgCAcApQAHAKAEALAHIBSQAAgEgBgEQgEAAgFABQgiAFgJAVQAFgfgcALQgmAPgGAnAFgC7QAAAnAdAQQAtAYAlgiQAQgPACgPAkmCCQALgTANgSQAOgRAQgQQAKgJAKgJQAYgXAZgWQAMgLALgKQARgNAQgMQgQgBgRgC");
	this.shape_1.setTransform(64.1,25.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BE9670").s().p("Ao+DkQg8gqAmhZIAcg1IAOgaQAYgpAigkQAhgiAkggQAjghAogbQAogcAmgeQAjgdA1AEIA8AEIAjACQAxACAvAIIAQADQAjAHAjAKQApAMArAPIAhALIA5AQIAeAJQAgAJAcAKQArAQArASQAoASAaAeIADgCQAUgMAUANQAjAVARAiIAEAIQAJATgOAHIACAFQAJATAAAXQgBASgNAMQgRAPgVAFQgFgLgHgKIgBgCQgaglgoAAIgBAAIAAAAIgDAAIgBAAIABAAIADAAIAAAAIABAAQAoAAAaAlIABACQAHAKAFALQAMAegKAhQgFARgYgDQgSgDgNgHIABgFQAAgTgSgUQgVgYgpgBIgBAAIAAAAIgCgNIABgGIAAgBIADgLQgDAFAAAHIgBAGIACANIAAAAIABAAQApABAVAYQASAUAAATIgBAFQgCAQgPAOQgmAjgsgYQgegRAAgnIAGgFQAeggAMgkQgMAkgeAgIgGAFQgVASgNgLQgTgRgbgPQgtgaAggrQARgYADgaQADgSgFgSQAPALAMAMIAKANQAEAHAEAIQgEgIgEgHIgKgNQgMgMgPgLIgCgBIgDgCQgVgPgbgIIglgKQgdgHgcgFQgvgHgxABIgiAAIg5AAIg5gCIghgCIAhACIghAaIgYAVIgxAtIgTASQgRAPgNARQgOASgLAUQALgUAOgSQAPA9gZAtQgqBQhpAIIgZABQhVAAg7gqgAGSBAQgmAOgGAnQAGgnAmgOIAAgBQAHgCAFAAIAAAAIAAAAQANAAgDAVIAAACQAJgWAigEIAJgBIACAIIgCgIIgJABQgiAEgJAWIAAgCQADgVgNAAIAAAAIAAAAQgFAAgHACIAAABIAAAAgAHcA5IAAgNQAAgKACgJQAGgZAWgMIACgCIgCACQgWAMgGAZQgCAJAAAKIAAANgAI6gOQAKAGAJAKQAHAIAFAKQgFgKgHgIQgJgKgKgGQgcgTggATIgCAAIAAAAIABAAIABAAQAQgJAPAAQAPAAAOAJgAH8gOQgPgSAAgNQAAgOAOgJQgOAJAAAOQAAANAPASgAhdhDIAAAAg");
	this.shape_2.setTransform(61.9,26.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.staticbuffybArm, new cjs.Rectangle(-0.2,-1,124.3,55.9), null);


(lib.INFINITIVE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AB4CYIAAkvIG/AAIAAEvg");
	mask.setTransform(56.7,-1.1);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6699").s().p("AgqBHQgKgJgBgeIACgkIACglIgBgKIgBgJQABgPANAAQAEAAADACIAVgDIARgCQAXAAAOAFQAJADAAAKQAAAEgDAEQgFAEgFAAIgEAAQgPgEgOgBIgOACIgRADIgBAkIAjgDIAXgCQAFAAAEAEQAEAEAAAFQAAAKgMABIgWACIgmAEIgBATQgBASADACQABACAKAAIARgBIARAAIAGAAIAFgBQAFAAAFAEQADADABAGQgBALgKACQgJABgcAAQgfAAgJgIg");
	this.shape.setTransform(54.4,-1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6699").s().p("AgTBCQgMgbgOgyIgHgZQgGgSABgHQgBgEAFgFQADgDAGAAQAJAAADAJIAEARIAJAdQAHAaAHAUIAVg3IAIgWQAFgNAHgHQAEgFAFAAQAFAAAEAEQAEADABAGQAAADgDAEQgFAHgEAKIgHATIgZA/QgEAMgGALQgEAHgHAAQgKAAgDgJg");
	this.shape_1.setTransform(41.9,-0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6699").s().p("AgrBDQgEgDAAgFQAAgGAEgDQAEgFAGAAIASgBIgBgqQAAgYACgXIgUABQgFAAgEgEQgEgDAAgGQAAgFAEgDQADgEAFgBIAbAAQARAAAcAEQALABAAALQAAAGgEAEQgEADgEAAIgZgDQgBARAAAbIAAArIAZgBQAGAAAEADQADAFAAAEQAAAGgDADQgEAEgGAAIgQABIgQAAIgSACIgTABQgFAAgEgEg");
	this.shape_2.setTransform(30.1,-0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6699").s().p("AgIBEQgFgEAAgFIABgEIAAgEIAAgNIgBgNIgCghIgCgiIgFAAQgVAAgMgDQgKgCAAgKQAAgEADgEQAEgFAGABIAPABIAPABIARAAIAQAAIAVABIAVABQAGAAADADQAEAEAAAFQAAAGgEADQgDAEgGAAIgXgBIgWgBIACAmIACAlIABAJIABAJQAAAHgDAGQgEAHgHAAQgEAAgEgDg");
	this.shape_3.setTransform(18.5,-1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6699").s().p("AgrBDQgEgDAAgFQAAgGAEgDQAEgFAGAAIASgBIAAgqQAAgYABgXIgTABQgGAAgEgEQgEgDAAgGQAAgFAEgDQADgEAFgBIAcAAQAQAAAcAEQALABAAALQAAAGgEAEQgEADgEAAIgYgDQgCARAAAbIAAArIAZgBQAGAAAEADQADAFAAAEQAAAGgDADQgEAEgGAAIgQABIgQAAIgSACIgSABQgGAAgEgEg");
	this.shape_4.setTransform(6.5,-0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6699").s().p("AhBBHQgDgDAAgGIABgLIAAgLIAAgQIABgRIgBgRIAAgRIAAgRIgCgQQAAgGAFgEQAFgFAGAAQAGAAAJAMQApA8ApAlIAAgOIgBg9IgBgKIgBgKQAAgNAOAAQAPAAAAAvIgBAPIAAA5IgCAPQgBAMgMAAQgHAAgHgHQgkgggsg6IgBAdIABAWIAAAWQAAAcgOAAQgGAAgFgFg");
	this.shape_5.setTransform(-6.3,-0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF6699").s().p("AgrBDQgEgDAAgFQAAgGAEgDQAEgFAGAAIASgBIAAgqQAAgYACgXIgUABQgGAAgEgEQgEgDAAgGQAAgFAEgDQADgEAFgBIAcAAQAQAAAcAEQALABAAALQAAAGgFAEQgDADgFAAIgXgDQgCARAAAbIAAArIAZgBQAFAAAEADQAEAFAAAEQAAAGgEADQgEAEgFAAIgQABIgQAAIgSACIgSABQgGAAgEgEg");
	this.shape_6.setTransform(-19.3,-0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6699").s().p("AgvBLQgDgEAAgGIAAhpIAAgLIAAgLQAAgGAEgDQADgDAGgBIAGABIAUgCIAPgBQALAAAQAEQAUAGAAAHQAAAGgEADQgDAEgGAAIgFgBQgLgEgSABIgMAAIgQACIAAAfQAOgDAJgBQAQABANABQAMACAAALQAAAFgEADQgDADgGAAIgOgBIgOAAQgHAAgQAEIAAA6QAAAGgEADQgFAEgFAAQgFAAgEgDg");
	this.shape_7.setTransform(-30,-0.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF6699").s().p("AhABHQgEgDAAgGIAAgLIABgLIAAgQIABgRIgBgRIAAgRIgBgRIgBgQQAAgGAFgEQAFgFAGAAQAGAAAJAMQApA8ApAlIABgOIgBg9IgCgKIAAgKQAAgNANAAQAPAAAAAvIAAAPIgBA5IgCAPQgCAMgLAAQgGAAgJgHQgjgggsg6IgBAdIAAAWIABAWQAAAcgNAAQgIAAgDgFg");
	this.shape_8.setTransform(-43.7,-0.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF6699").s().p("AgrBDQgEgDAAgFQAAgGAEgDQAEgFAGAAIASgBIgBgqQAAgYACgXIgUABQgFAAgEgEQgEgDAAgGQAAgFAEgDQADgEAFgBIAbAAQARAAAcAEQALABAAALQAAAGgEAEQgEADgEAAIgZgDQgBARAAAbIAAArIAZgBQAGAAAEADQADAFAAAEQAAAGgDADQgEAEgGAAIgQABIgQAAIgSACIgTABQgFAAgEgEg");
	this.shape_9.setTransform(-56.7,-0.7);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(9));

	// Layer 3
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0066").s().p("AgqBHQgKgJgBgeIACgkIACglIgBgKIgBgJQABgPANAAQAEAAADACIAVgDIARgCQAXAAAOAFQAJADAAAKQAAAEgDAEQgFAEgFAAIgEAAQgPgEgOgBIgOACIgRADIgBAkIAjgDIAXgCQAFAAAEAEQAEAEAAAFQAAAKgMABIgWACIgmAEIgBATQgBASADACQABACAKAAIARgBIARAAIAGAAIAFgBQAFAAAFAEQADADABAGQgBALgKACQgJABgcAAQgfAAgJgIg");
	this.shape_10.setTransform(54.4,-1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0066").s().p("AgTBCQgMgbgOgyIgHgZQgGgSABgHQgBgEAFgFQADgDAGAAQAJAAADAJIAEARIAJAdQAHAaAHAUIAVg3IAIgWQAFgNAHgHQAEgFAFAAQAFAAAEAEQAEADABAGQAAADgDAEQgFAHgEAKIgHATIgZA/QgEAMgGALQgEAHgHAAQgKAAgDgJg");
	this.shape_11.setTransform(41.9,-0.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0066").s().p("AgrBDQgEgDAAgFQAAgGAEgDQAEgFAGAAIASgBIgBgqQAAgYACgXIgUABQgFAAgEgEQgEgDAAgGQAAgFAEgDQADgEAFgBIAbAAQARAAAcAEQALABAAALQAAAGgEAEQgEADgEAAIgZgDQgBARAAAbIAAArIAZgBQAGAAAEADQADAFAAAEQAAAGgDADQgEAEgGAAIgQABIgQAAIgSACIgTABQgFAAgEgEg");
	this.shape_12.setTransform(30.1,-0.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0066").s().p("AgIBEQgFgEAAgFIABgEIAAgEIAAgNIgBgNIgCghIgCgiIgFAAQgVAAgMgDQgKgCAAgKQAAgEADgEQAEgFAGABIAPABIAPABIARAAIAQAAIAVABIAVABQAGAAADADQAEAEAAAFQAAAGgEADQgDAEgGAAIgXgBIgWgBIACAmIACAlIABAJIABAJQAAAHgDAGQgEAHgHAAQgEAAgEgDg");
	this.shape_13.setTransform(18.5,-1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0066").s().p("AgrBDQgEgDAAgFQAAgGAEgDQAEgFAGAAIASgBIAAgqQAAgYABgXIgTABQgGAAgEgEQgEgDAAgGQAAgFAEgDQADgEAFgBIAcAAQAQAAAcAEQALABAAALQAAAGgEAEQgEADgEAAIgYgDQgCARAAAbIAAArIAZgBQAGAAAEADQADAFAAAEQAAAGgDADQgEAEgGAAIgQABIgQAAIgSACIgSABQgGAAgEgEg");
	this.shape_14.setTransform(6.5,-0.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0066").s().p("AhBBHQgDgDAAgGIABgLIAAgLIAAgQIABgRIgBgRIAAgRIAAgRIgCgQQAAgGAFgEQAFgFAGAAQAGAAAJAMQApA8ApAlIAAgOIgBg9IgBgKIgBgKQAAgNAOAAQAPAAAAAvIgBAPIAAA5IgCAPQgBAMgMAAQgHAAgHgHQgkgggsg6IgBAdIABAWIAAAWQAAAcgOAAQgGAAgFgFg");
	this.shape_15.setTransform(-6.3,-0.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0066").s().p("AgrBDQgEgDAAgFQAAgGAEgDQAEgFAGAAIASgBIAAgqQAAgYACgXIgUABQgGAAgEgEQgEgDAAgGQAAgFAEgDQADgEAFgBIAcAAQAQAAAcAEQALABAAALQAAAGgFAEQgDADgFAAIgXgDQgCARAAAbIAAArIAZgBQAFAAAEADQAEAFAAAEQAAAGgEADQgEAEgFAAIgQABIgQAAIgSACIgSABQgGAAgEgEg");
	this.shape_16.setTransform(-19.3,-0.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0066").s().p("AgvBLQgDgEAAgGIAAhpIAAgLIAAgLQAAgGAEgDQADgDAGgBIAGABIAUgCIAPgBQALAAAQAEQAUAGAAAHQAAAGgEADQgDAEgGAAIgFgBQgLgEgSABIgMAAIgQACIAAAfQAOgDAJgBQAQABANABQAMACAAALQAAAFgEADQgDADgGAAIgOgBIgOAAQgHAAgQAEIAAA6QAAAGgEADQgFAEgFAAQgFAAgEgDg");
	this.shape_17.setTransform(-30,-0.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0066").s().p("AhABHQgEgDAAgGIAAgLIABgLIAAgQIABgRIgBgRIAAgRIgBgRIgBgQQAAgGAFgEQAFgFAGAAQAGAAAJAMQApA8ApAlIABgOIgBg9IgCgKIAAgKQAAgNANAAQAPAAAAAvIAAAPIgBA5IgCAPQgCAMgLAAQgGAAgJgHQgjgggsg6IgBAdIAAAWIABAWQAAAcgNAAQgIAAgDgFg");
	this.shape_18.setTransform(-43.7,-0.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0066").s().p("AgrBDQgEgDAAgFQAAgGAEgDQAEgFAGAAIASgBIgBgqQAAgYACgXIgUABQgFAAgEgEQgEgDAAgGQAAgFAEgDQADgEAFgBIAbAAQARAAAcAEQALABAAALQAAAGgEAEQgEADgEAAIgZgDQgBARAAAbIAAArIAZgBQAGAAAEADQADAFAAAEQAAAGgDADQgEAEgGAAIgQABIgQAAIgSACIgTABQgFAAgEgEg");
	this.shape_19.setTransform(-56.7,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.9,-16.9,126.1,30.5);


(lib.Bkr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AfRn8IAAP5Mg+hAAAIAAr2");
	this.shape.setTransform(-2.9,77.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AfRkxIAAAAIAAB5AfRiqIAAEWAfRk/IAApDMg+hAAAIAALuAfRB0IgBIDA/QiBIAAAAIAADqIAAMa");
	this.shape_1.setTransform(-2.9,-38.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#78FEE3","#F8DDFF","#FFFFFF"],[0,0.525,1],2.6,-31.9,2.6,28.7).s().p("A/Ql2MA+hAAAIAAJCIgBAAQgFAAgFgCIgFgDQgDgCjMgCIgJAAIgFAAIAAAAQgEgBgGAAIgCAAIgCgCQhXgDgJAJIgvgBIiSAAIgOgFQgHgCgTgLQgigSgiAAIgsABIgJgDIh9AAIgHgCIgSgEQgdgMgHgCQg1gSgdAAQgRABgMAEQgNADgOAAQgSAAgGgFQgGgGgNAAIgEAAIgGgBIgXAAQgZgGg5AAIATgcIAkgvIAegwQANgOAlgjQAvg2AngmIAAA+QgJAOAAADQAAADAFACIAeg1IAAAUQAAAUgKAlQAAAEADABQAUgOALgYIASglQAMAdAFAgIACABQAagWAEgIQACgHAAgaQAAgNgJggQAKAKAkAvQAMAAAAgaQAAgTgGgKQgNgQgMgVQAzgBAAgGQAAgehOAGQAbgOAAgIQAAgIgLAAQgjAAgYAaQAAgtgEAAQgiAygIAAIgBAAQgdg9gnAAQgDAAAAAEQAAAGAnA+QgQgEgxgBQgiAAglANQgfALAAAEIABADIAFABIAsgCQA5AAAgANIAUAJQg4Avh2CJQgQASglA/IgBgBQgig0gJgoIgJg2QgEgdgGgGIAAAAIA7AmQAEAAAAgLQAAgLgCgEIgNgUQgGgIgPgLIgVgQIAIAAQATAEAMARQARAZASAAQAJAAAAgQQAAgwg6gJIADgCIAsgDIAuABQAEABAAgFQAAgFgQgIQgWgLghAAQguAAgkANIAAgBQAGgJAlgbQARgNAQgEQAOgEAXgBQAQAAAAgFQAAgJg0AAQgsAAgjAWQgdASABAMQgIgsgTAAIgDABIAAAHQADAMAAAQQAAAUgHAUQgXgTghAAQgTAAAAADQAAAFAmAeQgVgIgjAiQghAeAAAKIABAEIADABQAEAAAYgQQAfgNAjAGQgwAcAAAuIABAMIADAAQAIAAAcgfQAdggAYgEIgBAAQgmAsAAAXIAAAFQABAFAHAAQAGAAARgRQAQgRAEgHQAEgHAYgPIAIgGQAEArA2CBIACAIIgXAAQgPgFhpgMQgEAAgSgIQgTgIgEgEQgVgVgUAAQgRAEgQgBQgPABgvgVQgwgUgpAAQgbAEghAAQgYAAgSgMQgRgMg4gBQgUgBgjgKIgggKQg5AAgIACIgHACQgFgCgPgCQgZgDgEgFQgNgPgYAAQgSAAgwAPQgZAJgWAJQhHAQggASQhAAbgUAMQg5AghBAAQgZAAgIgEQgIgDgLAAQgOAAgsARQgmAOgRAJQgrAWhOAQQjSAhggAJQgKgIgPABIgSADQgCgagBgEQgFgLgSAAQgPAAgXALQgIgagfAAQgWAAgNAWQgIgHgOAAQgrAAAAApQAAAIACADIgBAAQghABgKAJQgFAGAAANQAAAFAEANQgFgGgZABQghgBgPATIAAgGQAAgZgjgJQApgPAhgJIgCgEQgKgPgRAFQghAIgDAAQAOgKAagNIAdgNQAHgDAAgHQAAgHgIgBQghABg9AdQAGgIAJgPQAKgPASgIQAHgDAYgVQAZgVAAgDIAAgCIgEgBQgDAAggALQghAKgHAEQgOAHgWAbIAAgIIAKgxQAUgwAAgDIAAgDIgDAAQgrAagWAlQgNAVgOAqQgvhAgCAAIgDABIAAAFIAvBsIhfg8IgCABIAAAFIASAvQALAdAfARIg6ABQgJgEgeAAIgUAAQABABAAAAQABABAAAAQAAABAAAAQgBABAAABQAQAJAuAQIAfANIATAPQgJAHgCANQgcgSgLAAQgcAAgIAVQgEALACAMIgCAAQgBgIgEgGQgIgKgXAAQgaAAgJAOQgEAHAAAKIAAAAIgDABQAAgKgPgNQgTgQgbAAQgKAAgPAeIgPgOQgJgHgYAAQgQAAgDAVIAAAZIgbgNQgUgHgUgBQgOAAgiAegAbZDKIAAgCIAHABIgDABg");
	this.shape_2.setTransform(-2.9,-90.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#00FF00","#006600"],[0,1],0,0,0,0,0,17.6).s().p("AidBNIATAAQAMADApAAIAjAAQABAAAAgBQAAAAAAAAQAAgBAAgBQAAAAAAgBQgkgagFgQQgSgngBgEIABgBQAvAbAsAdQAEAAAAgEQgdg/gKgYIAAAAQAFAJAOAPQAPARAEAAQABAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAQAJgqAJgTQARgfAlgaIABABQgWAvAAA1QAAAPADAEIADgBQABgWAVgUQAcgZAygHQgoAggWARQgEACgPAWQgRAVAAADIABAEIACABIAvgaQAMgGArgHIAFAAIAAADQgJAEgoAVQguAZAAAFIABADIACAAQAJAAgEgEQAGgEA6AAQgHABgeAKQggALAAAFIAQABQASAFAFAOQADAHACALQgXgOgLAAQglAAgCAcQgIgIgPAAQgbAAgEAOQgMgEgEAAQgPAAgKAFQgQgOhTghg");
	this.shape_3.setTransform(-152.9,-74.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#00FF00","#006600"],[0,1],0,0,0,0,0,17.2).s().p("Ag/BtQAPgkADgCIASgTQAHgJAPgEIAMgCQAAgDgLAAQgnAAgeAeIgsAoIAAgJQAIggAHgGIATgSIANgIQAbgKAEADIgBgBQhRgBgkANIAAAAQAKgSAOgMQAIgHAPgFQARgIALAAQAFAAAAgDQAAgBgNgOQgOgPgFgDIAXAAQAHADAlAWQAAAAABgBQAAAAAAAAQABAAABgBQAAAAABgBQgDgFAAgDQAHgVAAgKIAAgfQAHAJAMAhQACABAbglQAwgXALAAQAYAAAfADIgBAAQgigBgSAJIgcASQgmAUAAASIAAADQABADAGAAQAGAAALgHQAKgGA2AAQAkAAAIAFIARAKQhmgBAAALQAAAFAiAGQAhAMAAAhQAAAKgFgBQgEAAgXgWQgYgWgTAAQgLAAAAAFQAAAFAXAQQAbAVAKAWIAAAHQgTgIgZgTQgVgPgCAAQgHAAAAAIQAAAJgNAJQgVAPgIAJIgsArg");
	this.shape_4.setTransform(66,-103.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#00FF00","#006600"],[0,1],0,0,0,0,0,17.7).s().p("AAUBBQACgigHAAQgKAAgJAlIgBAAQADgcgBgQQAAgcgNAAIgHACIgCgCIgCABQgTgMgIgCQgmgLgJgBIhDAAQAfgOAFgBQAFgBAoAAQA2AAAHAFIAGAFQAEAAAAgHQAAgUgmgvQApANAUAvQAFAAAQgSQAPgRAFgKIAAAnIAEABQAFAAAQgOQAJgGAZgIIALAAIAAAFIgUAJQgNAGAAAGIACADIAuABIAZAEQALAGAAAHQg3ACAAADQAAACARAWQASAWAAAVQAAAOgFAEQgRgUgIgNIgeggIgDABIAAAFQAOArAAANQAAAogWALQgVhIgFAAIgDACQgDAtggAgQAGgPAAgeg");
	this.shape_5.setTransform(102.3,-107.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FFFF99","#FEB770"],[0,1],-9.6,-41.4,12.8,42.1).s().p("A7FGNQifgCgMgKQgDgCACgEQgDgDgfAAQgFAAgdAIQgVAGgOAHIAAsZIAFAAIAAABIA5AEQAmACCygBQAAAIACgFMA2lAABIAAgFIAAgCIgBgDIAGABQCxAAAtACIAQACIABAEQAAACgHAAIgKAAIAAICIgJAAQgmADgHgDQgFgHgOgDQgZgFh8AAIgHAAIACAIIAAABIgIAAQgYAAgLADQgLgCgHgEQgIgGgHgDQgXgKhcAAIgXAAQhmACgJABIgPADIggAJIgoALQgYAHAAAIIADAMQAAAahCAAQgLAAgigNIgjgPQhNgjgIAAIg/ASQg9ASgnAAIgxgCQgRAAgGAEIgDACQgNAAgNAFQgeAFAAAEIhLgBIgogDIhLgBIgKgBIjrgCQgIgDgIAAQgJAAgCADIgoAOQgcAKgEAJQgDAHgBAQQgBAEgMAEQgFAFgDAAIijABQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBgBIlkAAIgbgCQhAAAgLAGQgHADgDADQgPAFgBAJQABARgmAAIgbgBIgDgCIiWgBIgSgEQhJAAgXADIgNAFQgQABgLAJQgtAbhggCQh4gCgFABQhEANgFAMQgHAOgMAEQgIABgEAFQABAGgEABIhGAAQiAAAgHgDQgGgEhIAAQiFAAhTAQQg6AKgGAKIgIAAQgOAAgCAEgAoBgYQAAAKADAEIADgCIAAgPQAAgMAHgCIAHAAIgBgDIgGAAQgNACAAASgAqWklIAAANQAEAEAFAAQAFAAAAgDQgIgEAAgDQgBgIgCAAIgDABg");
	this.shape_6.setTransform(-2,11.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#996666","#FEB770"],[0,1],-61.2,14.9,-61.2,-10.2).s().p("AXbCxQgMgOg9AAQgUgEg4ABQAEgCgwAAQgDAAgIARIAAgTIgKgBIgBAAQgFgHgQAAQgSAAgIAFIgBgBQAAgfg1AAQgZAAgUAHQgFgRgWAAQgYAAgaATQgNgPgZAAQgYAAgHAEQgEAFgHADIgFgIQgFgFgLAAQgHAAgEADQgCgGgFgEQgIgIgTAAQgLAAgCADQgDADgFAAQgLgPgaAAQgUAAgFAMQgDAHABAHIAAAHIgBgBQgWgKgJAAQgRAAgHAOQgFAIAAAHQAAAHABADIgBAAQgLgLgVAAQgPAAgEADQgEAEgEAAQAAgbgiAAQgUAAgQALQAAgggdAAQgeAAgRAUIgJgIQgJgHgLAAQgtAAgNApQgmgPgYAAIgDgBIgogsQgNgQgVgeQgLgRgKgcIgDgJIACgGQAMABANgDQAmgHAZAFQAcAEAIAAIACgBIAoAKQAOAAALgDQALgEAmAAIBCASQALABAaANIAUADICAACQAIADANAAIAggCQAgAAAfASQAeATBCAAICNAAIABABIAhAAQBAABgaADQAhAAAHgGIABACIAMAAQDFACAHAEIAOAHIABAAIADAAIAAB5QgDgJgFgFgApECvIgRAFQgRgFgQAAQgHACgJAAQgEgGgPAAIgMACQgfgVgLAGQgBgSgRAAIgJABQgCgHgEgIQgJgQgOAAQgLAAgJgIQgIgIgJAAQgFAAgIAHQgOgRgQAAQgZAAAAATQAAAJAEAJQAAAAgBABQAAAAAAAAQgBABAAgBQgBAAgBAAQgWgCgEADQgHAFgPAAQgCgOgEgBIgcgBIAEgKQgNgpgJAAIgVAPQgKgOgRAAQgfAAAAAWQgIgHgUAAQgjAAAAAYQAAAKADAGQgGgGgQAAQgWAAgEAQIgUgCQgQAAgIAFQgGAFgBAAQgFgIgaAAQgzAAAAAYIABALQgegegXAAQgLAAgUAGQABgLgJgKQgLgOgVgBQgCgWgIgGQgGgEgWAAQgbAFgJAAQgEgJgFgGQAhgCBbgVIB0gUQBRgQAhgRQAQgKApgPQAtgSAPAAQALAAAIAEQAIADAZAAQAfAAAOgDIAWgHQARgEAggPQAQgFAYgOQATgGAfgQIAsgUQAMgHAtgGQAUgLAWgHQAjgRAmAAQAWAAANANQAMAOAnAAIAAAAIAKgCIA+gDQANAABMAVQAxACAXANQAWALATAAQAnAAAVgEQAlAAAxAUQAyAVAOAAQATAAAOgEQASAAANAOQAQARAjAJQAUAFAkgBQAegBAbALIAIADIAdACIAEAMQgpBFgBANQgdAAAAATQAAANAEAEQgMgGgMAAIgJAAQgGABAAADIAAACIgBABQgZAXAKAWQgbgWgKAAIgLABIgFgFQgJgKgMAAIgdAJQAAgXgYAAQgQAAgFATQgBgEgWAAQgaAAAAAJIACAHQgGgEgkgCQgHgRgYACQABgIgCgFQgFgLgUAAIgXAHQgCgQgKgDQgDgBgTAAQgvAAAAARQAAADAFASQgGgDgMAAQgKAAgGAFQgEADAAACQgUgJgOAAQgSAAgCAEIgDACQgCgBgZAAQgZAAgKAFQgFAFgDAAQACgDgQAAQgTAAgOAHQgOAGACAHQgOgLgMAAQgHAAgBAHIABAKQgLgIgGAAQgEAAgCAKIgCALQgNgTgKAAQgPAAAAANQAAAJAFAVIgBABQgSgHgJAAgAFQB+QAAglgoAAQgRAFgFAAIgBgBQgCgKgFgGIACgHIACgMQAAgDAMgVIAMgRIAOAcIAYAtIAWAiIgSACg");
	this.shape_7.setTransform(46.5,-76.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#02D22C","#028F01"],[0,1],2.3,-12.2,2.3,23.2).s().p("AbyDvIgFAAIAAADUgDHgADgzfgABIgBADIi2gEIhZgDQgBAAAAAAQgBAAAAABQAAAAAAABQgBAAAAABIABABIgFAAIAAjqIAHAAIABAAQAHAAACgFIAFgMQAJgTAoAAQARAAAMANQANAQAKAHQAEgGgEgdQAAgbAbAAQAJAAANARQAOASADACIAFgCIADgZQAFgRAQAAQATAAAPAQQALASACABQADgDAAgHIADgBIACAPIACAJQADAGADAAQABAAAAAAQABgBAAAAQAAAAABAAQAAAAAAgBIAAgGQgHgIAAgNQAAgKACgDQAHgMAXAAQAVAAAJAQQAKAPACAAQAAAAABAAQABAAAAAAQAAAAABgBQAAAAAAAAQgDgQACgLQAFgXAcAAQALAAAfAWQABAAABAAQAAAAAAAAQABAAAAAAQAAgBAAAAIAAgSQADgGAGgDIACgBQAJgEAPAAQASAAACAKQAAAAABAAQABgBAAAAQAAAAABAAQAAgBAAAAIABgLQAFgHAUAAQAQAAAEALQADAKADAAQABAAAAAAQABgBAAAAQAAAAABAAQAAAAAAAAQgEgNACgJQADgSAfAAQAVAAAIALQAFAGADAJIADgCIADgPQAJgPAjAAQAkAAAFARQABAAAAAAQABAAAAgBQABAAAAAAQAAAAAAAAIAAgEQgMgaAAgFQAAgWAoAAQAUAAAEAFIAEAEQABAAABAAQAAAAAAAAQABAAAAgBQAAAAAAAAQgGgNgSgCQgCgOACgKQAGgWAfAAQATAAABAOIADABQABAAAAAAQABgBAAAAQABAAAAAAQAAAAAAAAQACgdAdAAQAUAAAKAPQAFAIADAKIACAAQAFgFADgIQAFgFAXAAQAUAAAAAZQAAALgJAIQgJAIAAAEQAAAEADABQACgCAIgLQAKgKAVAAQAPAAAMARQAFAIADAMIADgCQAAgEADgCQAHgGAaAAQAfAAABANIADAWIAHgCQAeAAAAAcQAAAGgGADQgHAEAAAEIABAEIADAAQACAAAKgJQAKgKAXAAQAbAAAgAhIADAAIABgEIgDgPQAAgTAsAAQAWAAAGAHIAHAGQACgCAAgHQAFgHAVAAQARAAAEAGIAFAGQABAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAIAAgGQgDgCAAgHQAAgJAVAAQAMAAAHAGQAGAGADAAQAEAAAAgEQgIgNAAgLIACgJQAGgJAVAAQATAAAKAKIAKAJIAEgBIAAgDQgJgOAAgEQAAgMAYAAQAUAAACAKIADAOQADgCAGgKQAHgKAJgDIAOAiQAAAHgOAPIADAEIAGgFQAEgEAPAAQAQAAAAAHQAAAJgPALIAAADIAEABQAEAAAHgJQAHgIAOAAQAGAAAGAIQAFAHAEAAIAEgDQgLgMAAgEIAAgBQAiACAAgFQgIgSAAgEIACgGQAEgHAMAAQAKAAAIAIQAIAGAAAEQAAAMABABQADgCACgLQACgIAJAAQAHAAAIAGQAIAGAAADQAAACgDAFIAFAFIACgGQACgFAIAAQAUAAAEAdIgBACIABADIAAAAQABAHABAGQAFgDAAgKIAHgEQANAAAAARIgEAJQAAAEADABIAFgGQADgFAHAAQANAAAVAVQAEgBAAgIIAOgBQAEAAAHAKQAIAJAEAAIADgBIAAgDQAAgDgHgIIAXAAQAEACANADIADAFQABAEAFAAQAGAAAAgFQAAgFgGgBIACgDIAQAAQAGACAZAKQABAAAAAAQABAAAAAAQABAAAAAAQAAgBAAAAIAAgDQgHgJgCgHQAAgLgDgGIAAgLIALAAIAZAVQAAAAABAAQAAgBABAAQAAAAAAAAQAAAAAAAAIADgWQADABAOAJQAHAAgDgTQAOAGAQANIADgBQgEgbApAAQAOAAgBAGQAAAJADACQAGgFgFgLQADgJAmAAQAaAAABADIADAHQADAAABgIQAAgHARAAQAdAAAGAPIAEgBQgCgFABgEQACgGAOAAQAVAAAJAQIAEgCIgPgmQAAgHAUgDIAUgBQAbAAADAFQACADgEAGQACAPABABIAEgCIgBgIQAFgGAdAAQAJAAAAAOQAAAGgMAGIAAADIADABQADAAATgGQASAAAAAIQAAACgCAEQAAABADADQAJgDAFAAQAaAAAUAOIAFAAIABgDQgMgOgCgFQANgCAHAAQAXAAACAEIADAJQADgDAAgDQgBgGAAgFQACgLAMAAQAQAAACAIQACAEgBAIQgGAEAAACIAHAFIAMgJQAMgIAKAAQATAAgBAMQAAASADAEQADgBAAgLQgBgJAOAAIAxAiQABAAAAAAQABgBAAAAQABAAAAAAQAAAAAAAAIABgEQgKgUAAgGQAAgIAJgPIAHgJQAcAAAEAHQAEAGAEAAQAEAAAAgFQgJgQAAgJIACgHQAFgHAPAAQAQAAAKANQAIAJAAAGQAAAEgDAHIABAIIADAAQAFAAAAgLQAAgMAVAAQAhAAAAAgQAAAHgFAFQgFAEAAADIAAAEIAEABQAFAAAEgKQAEgLATAAIADAAQAFAGABAAQABAAABAAQAAAAAAgBQABAAAAAAQAAAAAAAAIABgDQAIAEAGAHQAFAHAFALQADgBAAgIIgCgLQAAgFAWAAQAjAAAdAWQAEgHAHgRQASgYAaAAQAJAAAKAJQAKAIADAAQACAAAGgLQALgLAYAAQAWAAABAQQACAVADADQAFgTAiAAQAXAAAEAUIADAWIADgBQgCgVAeAAQAVAAAMAQQALAPADAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAIABgDQgMgSAAgNIADgMQAGgLAPAAQAHAAAbAMIAQAHQAEAAABgDIgTgKQgDgJABgGQABgOAXAAQAcAAAEAOIAEAPIADgCQgCgGABgEQADgIATAAQASAAAGAKIAHANIACAAQAAgBAAAAQAAAAABgBQAAgBAAAAQAAgBAAgBQABgDAIAAQAOAAACALQADAOABABIADgCQgCgXApAAQAcAAAGALQADAGADAJIADgBQAAgcAsAAQARAAAFANQAGAOAEAAQAAAAABAAQAAAAABgBQAAAAAAAAQAAAAAAAAIAAgDIgBgHQAGgGAhAAQAxAAAAAXIgFALIAAAFQACAFAFAAIADgCIgBgBIADgIQAGgIATAAQAIAAAFABQAAABgBAAQAAAAgBAAQAAAAgBABQgBAAgBAAQADAWADAGQACAFAGACQAGADAJAAQAEgDABgLQADgKATACQAAAGAEAAIAAAQIAIAAQADgKgFgJQADgEA4AAQADAAACAMQACANAHADIAEgDQAHgQAGgEQAvAAACADQgFATAKADIAUAGQAFAAACgCIAAEWQgugCixgBg");
	this.shape_8.setTransform(-2.9,-51.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABxDsIAJgRQADAAADACQAAAAABAAQABgBAAAAQABAAAAAAQABgBAAAAQAFAAAFAGQAEAGAAADQAAACgIAFQgJAGgJAAQgHAAAAgLgACyDRQAAgJAMgGQACAEABAAQADAAADgCQAQAAAAAIQgKANgMAAQgPAAAAgIgASKCgQAAgEAHgFIAHgFIAAgBIAHgCIADADIAEAAIAAAJQgHAPgKAAQgLAAAAgKgATQCIQAAgIAPgEIABAEIARAGQgGALgWAAQgFAAAAgJgAzwhvIACgJQAFgJAIAAIABAAQADAJARAWIAAAPQgkgJAAgTgAAMiiIAAgFIADgCIAUgCQABgBAAgLQgBgJAGgOQAQABACAKQACAKAIAAQAAAAABAAQAAAAABgBQAAAAAAAAQAAAAAAAAIABACIgBADQAAADAMAKIAAAPQAKARgnAAQgqAAAAgagAB6jAIAEgIQAEAAALAHQALAHAAAEQAAAFgJAAQgVAAAAgPgACxjxQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAABAAQAMAAAEgBIACAHIAGAJQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAIgIAAIgSgOg");
	this.shape_9.setTransform(8.9,64.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0033FF").s().p("AJMCgIACAAIAAAEgApKiWIABgDQgEgFAAgFIAIAAQAKAFAEAAQgOAFgEAFg");
	this.shape_10.setTransform(74.7,61);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#6FC6FF","#0709FF","#00BFF3","#0033FF","#0060EE","#0202FD"],[0,0.243,0.541,0.706,0.933,1],1.7,-33.3,6.9,51.4).s().p("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");
	this.shape_11.setTransform(-2.9,75.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6699FF").s().p("AGcAMIAAgBIAAABgAg3AKIACAAIAAAAgAmbgKIAAgBIADABIgDAAg");
	this.shape_12.setTransform(128.9,-62);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#996600").s().p("AgRDVIgagkQgEgHgTgmIgQghIAKgRIACACQAKAeALAQQA0BOATALQgIABgFADIgEADQgJgKgNgDgAiLCaIAohIIAAgBIADgGQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAgBgBQABgJAIgMIAIgMIAEgDQAdgxATgYQBShsBdhSIACACQADAAADgCIAHAAIAAAGQgaAQgXAeQggAngLAKQgvAqghA3IgiAuQgNATgIAOIAAAAIgLATIABABQgEAIgJAMIAAgBIgFAHIABABIgOARIgTArQgGgEgKgBgAhnAwIgCgHIgihZQgRhEgHgSQAIgGAAgDIABAAIACABQABAIAHAPIADAWQAEAcAEASQAJAmAjA0IACAEIgGAIQgFAFgBAGQgEgKAAgEg");
	this.shape_13.setTransform(84.7,-85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("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AQgMAAgCALQAAAFABAGQAAADgDADIgDgJQgCgEgXAAQgHAAgNACQACAFAMAOIgBADIgFAAQgUgOgaAAQgFAAgJADQgDgDAAgBQACgEAAgCQAAgIgSAAQgTAGgDAAIgDgBIAAgDQAMgGAAgGQAAgOgJAAQgdAAgFAGIABAIIgEACQgBgBgCgPQAEgGgCgDQgDgFgbAAIgUABQgUADAAAHIAPAmIgEACQgJgQgVAAQgOAAgCAGQgBAEACAFIgEABQgGgPgdAAQgRAAAAAHQgBAIgDAAIgDgHQgBgDgaAAQgmAAgDAJQAFALgGAFQgDgCAAgJQABgGgOAAQgpAAAEAbIgDABQgQgNgOgGQADATgHAAQgOgJgDgBIgDAWQAAAAAAAAQAAAAAAAAQgBAAAAABQgBAAAAAAIgZgVIgLAAIAAALQADAGAAALQACAHAHAJIAAADQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQgZgKgGgCIgQAAIgCADQAGABAAAFQAAAFgGAAQgFAAgBgEIgDgFQgNgDgEgCIgXAAQAHAIAAADIAAADIgDABQgEAAgIgJQgHgKgEAAIgOABQAAAIgEABQgVgVgNAAQgHAAgDAFIgFAGQgDgBAAgEIAEgJQAAgRgNAAIgHAEQgBAKgEADQgCgGAAgHIAAAAIgBgDIABgCQgEgdgUAAQgIAAgCAFIgCAGIgFgFQADgFAAgCQAAgDgIgGQgIgGgHAAQgJAAgCAIQgCALgDACQgBgBAAgMQAAgEgIgGQgIgIgKAAQgMAAgEAHIgCAGQAAAEAIASQAAAFgigCIAAABQAAAEALAMIgEADQgEAAgFgHQgGgIgGAAQgOAAgHAIQgHAJgEAAIgEgBIAAgDQAPgLAAgJQAAgHgQAAQgPAAgEAEIgGAFIgDgEQAOgPAAgHIgOgiQgJADgHAKQgGAKgDACIgDgOQgCgKgUAAQgYAAAAAMQAAAEAJAOIAAADIgEABIgKgJQgKgKgTAAQgVAAgGAJIgCAJQAAALAIANQAAAEgEAAQgDAAgGgGQgHgGgMAAQgVAAAAAJQAAAHADACIAAAGQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgFgGQgEgGgRAAQgVAAgFAHQAAAHgCACIgHgGQgGgHgWAAQgsAAAAATIADAPIgBAEIgDAAQggghgbAAQgXAAgKAKQgKAJgCAAIgDAAIgBgEQAAgEAHgEQAGgDAAgGQAAgcgeAAIgHACIgDgWQgBgNgfAAQgaAAgHAGQgDACAAAEIgDACQgDgMgFgIQgMgRgPAAQgVAAgKAKQgIALgCACQgDgBAAgEQAAgEAJgIQAJgIAAgLQAAgZgUAAQgXAAgFAFQgDAIgFAFIgCAAQgDgKgFgIQgKgPgUAAQgdAAgCAdQAAAAAAAAQgBAAAAAAQAAAAgBABQAAAAgBAAIgDgBQgBgOgTAAQgfAAgGAWQgDAKADAOQASACAGANQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgEgEQgEgFgUAAQgoAAAAAWQAAAFAMAaIAAAEQAAAAAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAQgFgRgkAAQgjAAgJAPIgDAPIgDACQgDgJgFgGQgIgLgVAAQgfAAgDASQgCAJAEANQAAAAgBAAQAAAAAAAAQgBAAAAABQgBAAAAAAQgDAAgDgKQgEgLgQAAQgUAAgFAHIgBALQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgCgKgSAAQgPAAgJAEIgCABQgGADgDAGIAAASQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgfgWgLAAQgcAAgFAXQgCALADAQQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgCAAgKgPQgJgQgVAAQgXAAgHAMQgCADAAAKQAAANAHAIIAAAGQAAABgBAAQAAAAAAAAQgBAAAAABQgBAAAAAAQgEAAgCgGgAg5niIACAAIAAgBQgGgVAAgJQAAgNAPAAQALAAANATIABgLQADgKADAAQAGAAALAIIgBgKQAAgHAIAAQAMAAAOALQgCgHAOgGQAOgHASAAQARAAgDADQAEAAAFgFQAJgFAZAAQAZAAADABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAQABAAAAAAQABAAAAgBQABAAAAgBQAAgBABAAQACgEASAAQAOAAAUAJQAAgCADgDQAGgFALAAQALAAAHADQgGgSAAgDQAAgRAvAAQATAAAEABQAJADADAQIAWgHQAUAAAFALQADAFgBAIQAXgCAIARQAjACAGAEIgBgHQAAgJAaAAQAWAAACAEQAEgTARAAQAYAAAAAXIAdgJQALAAAJAKIAGAFIA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");
	this.shape_14.setTransform(-3.2,-9.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Bkr, new cjs.Rectangle(-204.3,-129.4,403.2,258.8), null);


(lib.animbuffyhead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AD1hZQAAAEAAADQADAMAHAKQABABAAABQAaADA0ALQAAABAAABQAPAsgNA0QgWBUhZAeAEAg6QARAYAjAKAkEijQAJgEAKAAQAKABAHAGQAGAHAEAIQAEAJAEAIQABABABABQAAABAAAEQgCgBgBgCQgIgFgHgFQgIgFgJgDQgJgDgKABQgJACgIAEQgJAEgIAFQgIAGgHAGQADgGADgHQADgIAIgGQAGgGAIgFQAIgEAIgEgAk9gOQAHgFAFgGQAAAAAAgBQAJgIAKgFQABAAACgBQACgBADgBQAJgDAKgBQACgBABAAQAGgBAGgBQASgBALAKQgBgVgLgTAk9gOQAAgBAAgBQgFgNABgDQABgDgBgJQAAgJAGgRQAGgRAOgKQAQgMAQAHQAGADACAEAk9gOQACAIADAGQABAEAFALQABACABACQACAFADAGQABgBABgBQALgIANgFQAEgCAEgCQAMgFAMgFQACgBABAAQAKgDAKgEQAEgRgBgQAlJgIQAHgCAFgEAj7CKQgGAEgHACQgGACgFACQgCAAgBAAQgOAGgSABQgYADgFgSQgCgFAAgGQAAgLAFgMQAGgPgBgPQAAgCAAgB");
	this.shape.setTransform(56.1,63.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AkrCNQgQAYgdgPQgtAxgPhHQgKAMgTgaQgegrAIg5QACgMgNgQQg2hEBAguQAQACABAFQgIhdBSgYQAogMAVAZQAOg8AngSQAYgLAiAFQALACAIAEQAGAEAEAGQACgFADgFQAmhJBMgUQAZgGAUAQQALAJAJAAQAOAAAMgKQBPhGA2BQQBjgjA7BQQAHAKgEAHQA7gJAMAmQAMAigRAiQgHANAhABQBGAAgNAyQgIAhgYAXQA6AWg4AyQgGAGgIAAQA5AWg7AqQgSANgPAHQAXA8hLAIQgZADgOgKQgCgBgBgCQgBAAAAgBQAAACAAABAkpBwIAAAAQATADACguQA1AZAEhOQBEArAthJQAFgIALAJQA6ArAvgQQAOgFANgJQgCAlAqgLQgPAZATALQAIghAvAKQAZAFgBAeQAAAXgMAOQABAFAEADQAvAnAKgeQgBgKADgMAkFEeQACgDgBgEQAAgBAAgCQgDgrgTghQgQgcgBgfQAAgCAAgDQAAgLACgNQgIgBgMgKAEmF9QgDgbgRgNQgBgBgCgCQgBAAAAAAQgCgBgBgBQgWAfggAbQgqAkhAgNQgtgKgbgSQAOgLAHgLQAWgigkgUQgrgXgnAeQgcAXgIAeQgOA6gzgeQghgTgVgYAE7CDQgFAagwgCQgrgCgEgZACZBvQgOAQgdAEABWA+QgDAKACAO");
	this.shape_1.setTransform(49.2,42.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#6B4E32").ss(0.1,1,1).p("AgbAfQADAAADAAQASAAAOgHQAPgIACgQQACgTgLgL");
	this.shape_2.setTransform(28.3,61.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BE9670").s().p("AA0DYQgugJgagTQAOgKAHgMQAWgigjgTQgtgYgnAfQgcAWgHAeQgOA7gzgeQghgUgVgYIANgFIgNAFIgLAEIgDAAQgOAGgSACQgYACgFgRQgCgGAAgGQAAgLAFgMQAGgPgBgPIAAgDQACgEAAgDIgBgDQgDgsgTggQgQgcgBgfIAAgEQAAgMACgMIAAAAQATACADguQA1AZADhNQBFAqAthKQAEgHAMAIQA6AsAvgQQAOgFAOgKQgDAmAqgKQgQAYATALQAIggAwAKQAYAFAAAdQgBAXgMAOQABAFAFAEQAuAmAKgeQAEAZAsACQAvACAFgaQAEAMAGAKIABACQAaADA0ALIAAACQAPAsgNA0QgWBUhZAeQgEgcgQgNIgEgCIgBgBIgDgCQgWAfggAcQgfAagqAAQgPAAgRgEgAjmgjIgMABIgDABIgTAFIgFABIgDACQgKAEgJAJIAAAAQgFAGgHAFIAFAOIAGAPIACAEIAFALIACgCQALgIANgFIAIgEIAYgKIADgBIAUgIQAEgQgBgQQgBgVgLgTQALATABAVQgJgJgOAAIgGABgAk7AFQAHgDAFgDIAAgBQgEgMAAgEIAAgBIAAgFIAAgHIAAgBQAAgJAGgQQAGgQAOgKIABgCQAJgGAJAAIABAAIABAAIAIABIACABIABAAQAGADACAEQgCgEgGgDIgBAAIgCgBIgIgBIgBAAIgBAAQgJAAgJAGIgBACQgOAKgGAQQgGAQAAAJIAAABIAAAHIAAAFIAAABQAAAEAEAMIAAABQgFADgHADgAFCgLQgjgKgRgYQARAYAjAKgAA2hFQAdgEAOgQQgOAQgdAEgAj2iVIgQAIQgIAEgGAGQgIAGgDAJQgDAGgDAGIAPgLQAIgGAJgEQAIgEAJgBQAKgCAJADQAJAEAIAFIAPAKIADACIAAgEIgCgDIgIgQQgEgJgGgGQgHgHgKAAQgKAAgJAEgAAdhxIAAgLQAAgHABgHQgBAHAAAHIAAALg");
	this.shape_3.setTransform(54.7,62.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AjzE2IgEgPQAHgFAEgGIABgBQAJgIAJgFIAEgBIAEgCIAUgEQALAKgCAVQgCAQgPAHQgPAIgSgBIgGABIgHgPgAmUDgQgKAMgTgaQgegrAIg5QACgMgNgRQg2hEBAgtQAQACABAFQgIhdBSgYQAogMAVAZQAOg8AngSQAYgLAiAFQALACAIAEQAGAEAEAGIAFgKQAmhJBMgUQAZgGAUAQQALAJAJAAQAOAAAMgKQBPhGA2BQQBjgjA7BQQAHAKgEAHQA7gJAMAmQAMAigRAiQgHANAhABQBGAAgNAyQgIAhgYAXQA6AVg4AyQgGAGgIAAQA5AXg7AqQgSANgPAHQAXA8hLAIQgZADgOgKIgDgDIgBgBIAAADIAAAHQgFAagwgCQgrgCgEgZIAAgFQAAgIACgJQgCAJAAAIIAAAFQgKAdgvgmQgEgDgBgFQAMgOAAgXQABgegZgFQgvgKgIAhQgTgMAPgYQgqALACgmQgNAKgOAFQgvAQg6gsQgLgJgFAIQgtBKhEgrQgEBOg1gZQgCAugTgDIAAAAQgIgBgMgKQAMAKAIABQgCAMAAAMIAAAFQgQAYgdgPQgSAUgNAAQgUAAgJgqgAkpDQIAAAAgAjnCzQADgIAHgGQAHgGAIgFIAQgIQAJgEAJAAQAKABAHAGQAGAHAEAIIAJARIABACIABAFIgEgDIgPgKQgHgFgKgDQgIgDgKABQgJACgJAEQgIAEgIAFIgQAMQAEgGADgHg");
	this.shape_4.setTransform(49.2,32.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.animbuffyhead, new cjs.Rectangle(-1,-1,100.3,86.1), null);


(lib.animbuffyfLeg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AADABQgDAAgCgB");
	this.shape.setTransform(52.8,31.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("Ag8AFQAfgSAZgdQAdgiAkgfQAlggAfghQAhgiAngaQAngcAugSQAsgSAngQQAsgSApgXIAAAAAHJhyQgSARgSARQghAgggAfQggAeghAfQgiAfghAgQghAgggAhQgfAigjAeQgkAfgpAcQgnAcgtAOQgqAOgvACQgZACgXgFQgYgFgVgNQgogYgiggQgkgigbgpQgXgkgKgrQgLgsgLgtQgIgegGgdQABgBABgBQgBABgBAAQAAgBAAgBQACgCADgCQAlggAugPQAtgQAsgTQAkgQAmgNQAEgBADgCQAtgQArgNQAbgIAegHAgui9QABADAAADQABACABADQAJAfABAjQABAygSAqQgGANgEAMQgKAegCAgQgEAmALAj");
	this.shape_1.setTransform(57.8,51);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#6B4E32").ss(0.1,1,1).p("AAFgEQgCADgDACQAAACgCACQgBAAgBAA");
	this.shape_2.setTransform(53.6,31.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#6B4E32").ss(0.1,1,1).p("ADNhSQACAAADgBADNhSQABACAAABQAAADAAADADLhRQAAABABABADGhQQACgBADAAADNhSQgBAAgBABAjMBTQAAAAAAgBQgCABgCABQABgCACgC");
	this.shape_3.setTransform(32.7,39.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CE00FF").s().p("AhKEhQAJgsgYgLIAAgPIgBhFQAqAbAhgcQAJgHAHgLQADgDABgJIAIAAIADggQAIhxgkhMIAAgGQg0AGALg3QAAgFgDgGQgDgJgJgGQAAgIgDgDQgPgaACgvQAPgiArgBIAAAGQBICiAlDIIAFAaIAAAMIABAOQABAQAAANQAEA9gTAkIgOAAQhlgCglA9QAAgJADgFg");
	this.shape_4.setTransform(123,42.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF00FF").s().p("AjWByQgEgYgDghIgCgSIADgRIAGglIAEgUQAGgSAIgSQAIgSAKgQIATgdQAJgOAMgPQALgNAOgNQANgNATgHQARgHASgDQATgCASAAQATAAASABQATACATAGQASAHARAJQARAIAOAOQANANALAPQALAPAKAQIAUAeQALARAFATIAIAhQAEATgCAQQgBAQABAOIgEAGIgEABIgDAAIgFABQgeAHgbAIQgrANgtAQIgHADQgmANgjAQQgsATgtAQQguAPglAgIgFAEIgEADQgCgYgNhUg");
	this.shape_5.setTransform(31.7,26.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#474441").s().p("AgngPIAaAAIANgBIAdAAIALAAQAAAJgCADQgNAVgRAAQgUAAgbggg");
	this.shape_6.setTransform(125.2,84.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CEC8C2").s().p("AgKAsQgUgagEgtIAAgMQAGgJAJgDQAFgDAJAAQgGA0AcATQADADABAJQAIAFAEAJQACAGAAAFIgOABIgZAAQAAgGgGgFg");
	this.shape_7.setTransform(121.7,77.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#ADA59F").s().p("AgjAsQgDgJgJgGQBLAXgHhcIAAgOQA0AlgwA8QgDAGAAAFIgPAAIgKABIgdAAQAAgGgDgFg");
	this.shape_8.setTransform(128.5,77.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BEB6AF").s().p("AAIAJQgBgWgbAJIgPAAIgMAAIAAgPQAuAAAxAFIAAAJQgGAAgGACIgcAXIAAgLg");
	this.shape_9.setTransform(125.8,72.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BAB6B5").s().p("AgEAWQgEgpAAgrQAIAQAFAUQAEAVAAAbIgDAdIABALIgIAAIgDgog");
	this.shape_10.setTransform(111.9,55.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3E3935").s().p("AgSAOIgDgnQAJgjAhgBIAAAHIgOAAIABBRIAAAQIAAABIABANQgJAAgCAEIgDABQgJAAgEgwg");
	this.shape_11.setTransform(118.5,39.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A19D97").s().p("AgbBEQAYgGgJglIgBgMIAAgNIAAAAIAAgQIgBhSIAOgBIAAAOQAgBDgEBkIAAAMQgGAAgJADQgKADgHAAQgbAAAEggg");
	this.shape_12.setTransform(120.7,44);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#221F19").s().p("AAIBvIAAgOIgBgMQAFhkgghCQAGgGADgJQACgFABgJQAjBLgHByIgEAgg");
	this.shape_13.setTransform(122.7,43.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#181512").s().p("Ag1C1IAAgdIAAgLIADgdQAAgcgFgVIA3gWQgEApAtgMQAJgDAFAAIABAOIgPAAIhQACIAAAOIAAAPIABBFIAAAPIgOAAIgBgPgAgphuIAAgPIgBgZIAAgBIACAAQAnAEgHgwIAGAAQgLA3AzgGIAAAGQAAAJgDAFQgCAJgGAGIAAgOIAAgGQgiAAgIAjIACAoIgQABQAAgVgMgig");
	this.shape_14.setTransform(117.9,46.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#44413D").s().p("AAIA4QAAgIgDgGQgUgogHg5IAMANQARAZAMAeQADAJAAAGIABAHIAAAHIAAAOIgIAAIgHAAg");
	this.shape_15.setTransform(111.4,25.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#847B7A").s().p("AgIAQIAAgBQAJgHAEgKIAEgNQAAAJgDAGQgBANgNADg");
	this.shape_16.setTransform(104.1,13.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#201C1A").s().p("AAIA3QAAgGgDgCQgLgSgdAAIAAgHIAAgFQANgDABgOQADgFAAgJIACgJQAAgKgBgIQAFgHAIgDQAFgDAGAAQAAAaARALQAGADAGAAQAAAJgDADQgDACgJAAIgNAAQAGAWACATIABAOg");
	this.shape_17.setTransform(106.9,13.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#423938").s().p("AAEAkQgRgcgHgoQAGgJAJgDQAFgDAFAAQgCAuAPAZQADADAAAJQAAAGgDADQgDADgJAAQAAgGgCgGg");
	this.shape_18.setTransform(114.1,20.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#302C2A").s().p("AgwAUIAAgOQAdgTAcgSQAFgDAFAAIASALQAGADAGAAIAAAOQAAAGgDACQgDADgIAAIgMAAQgigQglAuIAAgPg");
	this.shape_19.setTransform(112.4,4.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#ACA8A3").s().p("AgVAAQAPgFAKgMQADgDAAgGQAGAAADADQAGADgBAGQABAIgDAGQgNAbgJAAQgKAAgIgbg");
	this.shape_20.setTransform(132.9,82.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#261F1A").s().p("AA6BBQAwg9g0gkIAAgJQgygFgtAAIAAAPQgIAAgGADQgJADgFAJIAAALQgGAAgGADIgRALIAAgNIgBgMQAlg9BlACIAOAAQAJAIAGADQAGADAIgBIAPAAIAAAPIAAAOQAJAzgWASIAAAOQAAAGgDADQgMALgOAGQAAgFADgGg");
	this.shape_21.setTransform(125.2,74.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1F1C19").s().p("AgFA4IgChfIAAgdIANgBIABAdIABBgIAAANIgNABIAAgOg");
	this.shape_22.setTransform(134.1,61.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2A2929").s().p("AB2F2QABhVgag2IgBgMIAAgOIgBg4IAeAAIAAA3IACCMIAAAOIABAMgAhplbIgRgLIAAgPQATACARAEIgHAXQgGAAgGgDg");
	this.shape_23.setTransform(126.7,36.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#ABA9A6").s().p("AAABSIAAgNIAAhgIgBgdQAAgFgGgDQgDgGgFAAIAAgLIgBgPIAPAAIAKAAIABAOIAAA3IAAAPIABALQAAAIADAGQAJA9gXAXIAAgPg");
	this.shape_24.setTransform(134.9,60.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AhAE7IARgMQAGgDAGAAQADAvAVAaQAGAFAAAGQAxA8AcgxQADgDgBgJIAPgBQAPA3Aag3QACgGAAgIQAAgGgGgDQgCgDgGAAIgBgOQAXgRgJg0IAAgPQAXgXgJg9QgDgGgBgJQAbA3gCBUIAGAAQAAAJgDAFQgLAjgOAjQAAAJgDADQg1AxgrAAQhEAAgpiAgAhJEeQgPgcgEgmIAPAAQAXAMgIArQgDAGAAAIQgFAAgDgDgACsEQIgCiLIgBg3QAIAaADAdQAJBDgMBTQABADgGAAIAAgOgABmDxQgGgDgJgIQATgkgEg8QAAgOgCgPIAAgPIAOAAQAGAAADAGQAGADAAAFIgPAAIABAeIABBgIAAAOIAAAAQgJAAgFgDgAhOCIIAAgOIAAgPIBQgBIAOAAQAAAIgDADQgIALgIAHQgRAOgTAAQgSAAgVgNgAhsA0QAAgGgDgIQgOg/g5gVIAAgBIgBg0QAbABAbAGIAEABIAAAGQAOgOAMgOIABgCQADgGgBgGIAPAAIAAABIAAAaIABAOQALAjAAAUIARgBQAFA3ALgJQADgDAJAAIAAAMQAJAlgXAGIg4AWQgEgVgKgPgACMBNIAAgNQgBhZgGhDQgajsiXhbIAHgXQCKAfAhCYQAQBMAIBZQAJBRACBbgAgOk1IAAgHQgrABgPAjQgFAAgGADQgJADgGAJQAHAoASAdQADAGgBAGQAJAAADgEQADgCAAgGQAJAGACAIQAEAGAAAFIgGAAQAHAxgogEIgBgBIAAgOIAAgHIAAgHQAAgGgEgJQgLgfgTgYIgLgOQgGAAgDgDQgGgCAAgJIAJAAIgBgOQgCgTgGgWIAOAAQAJAAADgDQADgDgBgJQgFAAgGgDQgSgLAAgaQAlgvAjARIAMAAQAIAAADgDQADgDAAgGQAaAdAPAoIABAMQBXCeAaDXIgQADQgljHhIiig");
	this.shape_25.setTransform(121.8,44.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#444342").s().p("AgEAJIgFgaIAPgCQADAFAAAJIAAAOIABALIgOAAIAAgLg");
	this.shape_26.setTransform(132.3,51.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#BE9670").s().p("Aj4FeQgYgFgVgNQgogYgiggQgkgigbgpQgXgkgKgrIgWhZQgIgegGgdIACgCIgCABIAAgCIAFgEQAlggAugPQAtgQAsgTQAkgQAmgNIAHgDQAtgQArgNQAbgIAegHIABABIAEABIABAAIAAAAIAAAAIgBAAIgEgBIgBgBIAFgBIABADIACAGIACAFQAJAfABAjQABAygSAqIgKAZQAfgSAZgdQAegiAjgfQAlggAfghQAhgiAngaQAngcAugSIBTgiQAsgSApgXIAAAAIAAAHQAdAAAMASQADACAAAGQAAAJAGACQADADAGAAQAGA6AVAoQADAGAAAIQABAGgDAGIgBACQgMAOgOAOIAAgGIgEgBQgbgGgbgBIABA0IgkAiIhBA/QggAeghAfIhDA/IhBBBQgfAigjAeQgkAfgoAcQgoAcgtAOQgqAOgvACIgNABQgSAAgRgEgAhsCMQgIgbAAgcIABgSQACggAKgeQgKAegCAgIgBASQAAAcAIAbg");
	this.shape_27.setTransform(62.1,51);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.animbuffyfLeg, new cjs.Rectangle(9.4,-0.6,130.8,89.3), null);


(lib.animbuffybLeg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AjABQQgKgPgJgPQgZgpgPguQgEgLgIgGQgJgFgBgHQgGgvABgwQAAgbAFgaQADgQAEgQQACgGACgHQAQgvAgglQAegjArgVQAqgUAvgHQAEAAAFgBQArgFAtAJQAtAIAuAGQAhAEAgABQAMAcARAgQAgA9ANBBQAAACABACQAGAjgFAjQgEAWgGAVQgBAFgCAFQgMgBgMgCQgQgDgOgGQgpgSgsgVQgtgVgagmQAHArARAmQATApASAqQAUAsAPAtQAQAwgHAwQgIAwARAtQARAtAYAnQAZAoAYAoQAHAMAGANAi1BgQAMARANAQQAUAZARAa");
	this.shape.setTransform(29.7,43.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AjdjgQAbAtAkAnQADAEAEAEQA9A/BCA7QAxArApA7QAGAIAFAJAjojwQAGAIAFAIADhDqQAAgJAAgJQABgzAGg4QAAgFABgEADhDqQAAAEAAAD");
	this.shape_1.setTransform(33.7,75.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#6B4E32").ss(0.1,1,1).p("ADtAgQkqhFg0AGQg0AGgcgDQgbgDgQAE");
	this.shape_2.setTransform(73.5,6.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC00FF").s().p("ADdDDQijgqirhbIgWgMIgJgHIgLgJQgMgHgLgJQgvgggPgjIAIgKQA+hLgYhAQAHAFACAGQAcAgAWgKIALAIIA0AoQgtAPABAqQAAALADAMQABAEAGAFIgFAHIAXAVQBQBJBNASIAEADQAagrAjApQAEADAGABQAJAEAJgDQAHAFAEgBQAcAFAhAdQARAfgZAhg");
	this.shape_3.setTransform(27.2,93.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF00FF").s().p("AhBC5IgJgBIgJAAQg0ACgygGQgfgDgagwQAMACAMAAIADgKQAGgUAEgWQAFgjgGgjIgBgFQgNhAggg9QgRgfgMgcQAQgFAbADQAcAEA0gGQA0gGEqBGQBDAYAFAnQAEAnALAhQALAigcAmQgdAngqAOQgsAQgmALQgoANgxAEQgXACgZAAIglgBg");
	this.shape_4.setTransform(78,21.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#ACA8A3").s().p("AABAWQgGgEgDgGQgagzAxAWQgEAOACAOQAAAEAFAEQgEAEgEAAIgEABQgDAAgCgCg");
	this.shape_5.setTransform(-9.9,81.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#ADA59F").s().p("AghgDQgDgGgEgDIAIgLIAHgIIARgWQAEADAFABQAIADAKgDQg8ArBIAxIAKAIQgLADgKAAQgoAAgNg5g");
	this.shape_6.setTransform(-4.3,80.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#474441").s().p("AgYAVQgUgxBJgCIgPAUIgIAKIgQAWIgHAIQgHgFAAgEg");
	this.shape_7.setTransform(-5.8,75.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#423938").s().p("AgZgEQgEAAgGgFQgFgEAAgDQgBgEAGgHQAEAEAGABQAfAEAiASQADAJgDAJQgBAGgDAEQgigcgbgEg");
	this.shape_8.setTransform(47,104);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#302C2A").s().p("AgVAtQgEgEgBgEQAAgDAFgHIAGgJQAhgQgNg2IALAJIALAIQgCAigEAfQgBAFgEAFIgRAGQgGADgDAEIgLgIg");
	this.shape_9.setTransform(60.4,111.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#44413D").s().p("AgUAMQgIgDgFgEIgKgHIgLgIIAIgLQAHAFAGABQApAIAvAdIgOAAQgeAAgfgKg");
	this.shape_10.setTransform(45.2,98.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#201C1A").s().p("AACAgQgEADgEAEQgGgFgBgEQAAgEAFgHIAIgKQgbgKgTgPIAFgHQAEAEAEgBIADAAQANAAALgJIAAAGIAAgGQAGgFAEgGIAJAHQgGAMAJAJQADAGAHAFIAGAGQAHAGAHADIABAFQABAGgCAGQgCAGgDAEQgUgPgTAGg");
	this.shape_11.setTransform(56.8,102.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#847B7A").s().p("AgBAFQgJgIAGgMIAAAAIAAABQAAAKAFAKIAGAKQgGgFgCgGg");
	this.shape_12.setTransform(58.7,100.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CC9966").s().p("ABQAWIAKAIQgFAGgFAEIAAgSgAhZgnIAEADIgEABIAAgEg");
	this.shape_13.setTransform(48.2,95.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3E3935").s().p("AAfAsIAIgLIhJg4IgKgJQAFgGgBgEQAAgOArAeIAgAWQAVAZgVAag");
	this.shape_14.setTransform(30.6,96.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#444342").s().p("AAAAKIgKgJIgJgFIAIgLIAJAHIAWALIgHANQgHgBgGgFg");
	this.shape_15.setTransform(13.8,99.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#A19D97").s().p("ABBA5QhDgPhJg+IgIgHQADgEACgJQATgpAbAcQgJAVAhAPIAIAHIAKAIIBLA5IgJALIgLgJg");
	this.shape_16.setTransform(26,94);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#221F19").s().p("AhDgeIgWgWIAFgHIAKAIIAJAIQBIA+BEAPQABAHAFAIQADAFAGAGQhNgShQhIg");
	this.shape_17.setTransform(25,96.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2A2929").s().p("AE4B9QAEgEAFgDIATgHIALAJQgNANgNALgAjigqIhphRIgKgJIgJgHIADgEQA+AzA4ANIAJAGIALAJIAqAhIgSAVIgpggg");
	this.shape_18.setTransform(28.1,104.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#ABA9A6").s().p("AAzA1IgpghIgLgIIgIgHQgHgFgGAAQgygdgEgfIALAIIAKAIIBIA3IAVARQAFAEAFgDQAGACADgFIAJAHIALAJIgIAKIgHAJIgLgIg");
	this.shape_19.setTransform(6.1,96);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1F1C19").s().p("AAaAdIhHg3IgKgIIAIgLIALAIIBHA4IAVARIgIAKIgWgRg");
	this.shape_20.setTransform(5.1,94.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#BEB6AF").s().p("AggAhQADgEABgGIgBgiIAJAHQASAMAJgaIAIgKIAHgJIALAIQgbAiggAhg");
	this.shape_21.setTransform(3.2,82.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CEC8C2").s().p("AgSAHQgEABgGgFQgKADgIgDQgGgBgEgDIAIgKIAQgUQAEADAHgBQAfAAAkAZIAJAGQADAKgDAIQgBAGgFAGQgkgigfAJg");
	this.shape_22.setTransform(0.5,75.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#181512").s().p("ABECFQgGgGgDgFQgFgIgBgHIALAIIAFAEQAUgagVgbIgggWIAKgNQAPAMAhAMIALAIIATAQQgcAbApAYIgEAEQgigpgbArgAhrANIAJgLIAvg8IgLgIIgLgJIg0goIgLgJIAJgLIALAJIAWAQIAIAHIAUAUQAUAQATAJIgRA2QgbgcgTApQgDAIgDAEIgLgIg");
	this.shape_23.setTransform(27.3,89.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#BAB6B5").s().p("AAQAYQgRgJgUgQIgUgTIgJgHIAFgHIAgAXQAgAVAgAZQgRgCgSgJg");
	this.shape_24.setTransform(22.8,80.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AB8DxQhCghhHgvQhBgphGg1IARgVIAKAIQBEA0A1AjQC/B5Ceg7IANATQg8AwhEAAQg1AAg5gdgAEGC4IgJgGQiqgcivhuIAHgNQCqBbCkAqIAFAEQAZghgRgfQADgEABgGQADgIgDgKQgigTgggEQgGgBgEgEQgFAHAAAEQAAAEAFADQgKADgIgDQgGgBgEgDIADgFQgogYAcgbIALAIIAKAJQAFADAIADQAnANAlgDQAEgEADgBQAGgDAGAFIgFAHQAUAPAaALIgIAKQgFAHABAEQAAAEAHAFQADgEAFgDQATgGAUAPQANA3giAQIgGAJQgFAHAAADQABAEAEAEIgMAAQggAAgggLgAjDAqQg3ghg4g5QgCgBADgFIALAJIBoBQIAqAgQgYgKgXgPgAiQAVIAIgKIgVgQIhIg5IgLgIQAFgGAFgDQAGgDAMgBQAPAjAvAhQALAIAMAHIAKAIIgIALQgDAEgGgBIgEABQgDAAgDgCgACFgNIgLgIQghgMgPgMIgJANQgsgdAAANQAAAEgFAHIgJgHQgggPAJgVIAQg2QASAJARABQAEAEAIACQANAHAMADQAqALAngXIAFAEIAiAbQgQATgUAQIgEADIgEgDIAAAEQADASADAPQADAGAEADIgIAKIgUgPgACqhjIgMgRIAMARgAk2hBIgEAEQgGgFgDgFQgTgdgRgfQgHgFgBgEQgMi1DBBKIgBATQgBAGgEAFQgkgZggAAQgHABgFgDQhKABAUAyQABAEAGAGIgIAKQgygVAaA0QADAFAGAFQAFAEAFgDQAEAAADgFIALAJQAAAbAsAYIALAJQAEAfAyAcQAGACAHAFQg5gNg9gzgAhVhIQgDgMAAgLQgBgpAtgPIAKAIIAMAJIgwA9IgIALQgHgGAAgEgAidjeQgDgFgGgFQADgFAEAAQAeAGAeAUIgIALQgGADgGAAQgRAAgVgZg");
	this.shape_25.setTransform(24.4,96.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#261F1A").s().p("AgNBWIgMgJQgsgYABgbIgLgIQgEgEgBgEQgCgOAEgOQAFADACAFQARBIA6gRIAGAFQAhgiAcghIgMgJQAGgGABgGQADgJgDgJIgJgHQAEgEABgGIABgUIALAIIAJAHQAXBAg9BJIgJALQgLACgGADQgFACgFAGIgIALIgKgIg");
	this.shape_26.setTransform(-0.2,81.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#BE9670").s().p("ADlHuQgGgFgGADQgEABgDAEQgvgdgqgJQgGgBgHgFQgEgDgDgGQgEgQgCgRIAEgBIAEgDQAUgQAQgTIgigbQgog6gzgtQhBg6g8g/IgIgIQgRgagUgZIgZghIgLgQIgTgeQgZgpgPgvQgEgKgIgGQgJgGgBgHQgGgvABgwQAAgbAFgZQADgQAEgQIAEgNQAQgvAggmQAegiArgVQAqgUAvgHIAJgBQArgFAtAIQAtAJAuAGQAhAEAgAAQAMAcARAgQAgA9ANBBIABAFQAGAjgFAjQgEAWgGAUIgDAKQgMAAgMgCQgQgDgOgGIhVgoQgtgVgagmQAHAsARAmIAlBTQAUAsAPAuQAQAugHAwQgIAxARAsQARAuAYAnQAZAnAYApIANAYQgFA4gBAzIgBATQgLAJgNAAIgDAAIgBAAQgDAAgEgDg");
	this.shape_27.setTransform(29.7,50.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0000FF").s().p("ADPA8IAAAAIASAGIgSgGgAjghBIAAAAIAFACIgFgCg");
	this.shape_28.setTransform(94.3,6.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.animbuffybLeg, new cjs.Rectangle(-12.4,-0.2,129.2,123.9), null);


(lib.InfinitivecanhaveaSubject = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.INFINITIVE();
	this.instance.parent = this;
	this.instance.setTransform(-114.6,5.8,1.162,1.162,0,0,0,-2.2,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJAJQgDgDAAgGQAAgFADgDQAEgEAFAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgFAAgEgEg");
	this.shape.setTransform(-100.1,79.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgFA/QgDgDAAgFQAAgNgDgZQgDgZAAgNQAAgLgDgGQgHADgIAIIgNAOIgFAHIgCASIgBASIABAJIABAJQAAAEgDADQgDADgFAAQgMAAAAgbIABgUIACgSIgBgRIgBgRQAAgYALAAQAEAAADADQAEAEAAAEIgBAGIAAAHIAAALQAFgLALgJQALgKAIAAQARAAAFARQAGgIAIgEQAIgEALAAQASAAAGAUQACADADAbIAHA8QABAFgEADQgDADgEAAQgJAAgCgKIgEghIgDggQgBgIgDgHQgEgJgEAAQgEAAgLAGIgNAKIAAAVIAEAbQACARAAALQAAAFgDADQgDADgFAAQgEAAgCgDg");
	this.shape_1.setTransform(-111.3,74.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAiA3IgHgIIgSAJQgIACgEAAQgZAAgMgOQgLgNAAgbQAAgZASgTQASgSAYAAQAJAAAMAEQAOAGAAAIQAAADgCADIgBANIgBAXQAAAOACAHIAGATIADAGIABABQAAAFgDADQgDADgEgBQgCAAgGgEgAgRgaQgNAOAAAQQAAASAHAJQAGAJAMAAQAKAAAHgFIALgHQgEgcAAgOIABgKIACgMIgHgDIgFgBQgPABgMANg");
	this.shape_2.setTransform(-125.6,74.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgpAxIAAhKIABgKIAAgLQAAgLAJAAQALAAAAARQAUgTAZAAQAIAAAFAGQAEAHAAANIAAAHQgBAOgKAAQgJAAAAgLIgBgHIAAgJQgRACgJAIQgKAGgGAPIAAA5QAAALgKAAQgKAAAAgLg");
	this.shape_3.setTransform(-136.2,74.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgkBTQgOgCAAgJQAAgJAJAAIANACQAJABALAAQAUAAAIgUQAFgNAAgbQgGALgIAFQgIAFgJAAQgTAAgNgNQgMgNAAgUQAAgdARgSQARgSAdAAQAKAAAGACQAHADAEAFQALAAAAANQAAAHgCANIgDAUIgCAkQgBAVgEAOQgFARgKAIQgNAKgYAAQgOAAgJgCgAgTg1QgKANAAATQAAAQAGAHQAGAHAMAAQAKAAAKgLQAJgLABgLQADgMACgZIgJgEQgEgCgFAAQgUAAgLAOg");
	this.shape_4.setTransform(-147.9,77);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAiA3IgHgIIgSAJQgIACgEAAQgZAAgMgOQgLgNAAgbQAAgZASgTQASgSAYAAQAJAAAMAEQAOAGAAAIQAAADgCADIgBANIgBAXQAAAOACAHIAGATIADAGIABABQAAAFgDADQgDADgEgBQgCAAgGgEgAgRgaQgNAOAAAQQAAASAHAJQAGAJAMAAQAKAAAHgFIALgHQgEgcAAgOIABgKIACgMIgHgDIgFgBQgPABgMANg");
	this.shape_5.setTransform(-159.1,74.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgJBOQgEgDAAgFIAAgTIgBgUIACgZIABgYQAAgFADgDQADgDAFAAQADAAADADQADADAAAFIgBAYIgBAZIAAAUIABATQgBAFgDADQgDADgDAAQgEAAgDgDgAgGg6QgDgEAAgFQAAgFADgEQAEgEAEAAQAFAAAEAEQAEAEgBAFQABAFgEAEQgEADgFAAQgEAAgEgDg");
	this.shape_6.setTransform(-167.6,71.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AglBJQgQgPABgYQAAgcAPgRQAPgRAXAAQANAAAGAEIAKAHQACgtACgPQACgKAIAAQAKAAAAAKQAAAPgFAzIgBAfQAAAjAEATIAAACQgBAFgDADQgCACgFAAQgGAAgDgKQgIAGgIADQgJADgHAAQgXAAgOgPgAgZACQgJAKAAAWQAAANAKAKQAKALAOgBQAHAAAGgCQAFgDAIgGIACgEIAAgTIAAgMIAAgMQgDgJgHgEQgHgEgKAAQgQAAgKAKg");
	this.shape_7.setTransform(-177.4,71.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAiA3IgHgIIgSAJQgIACgEAAQgZAAgMgOQgLgNAAgcQAAgZASgSQASgTAYAAQAJABAMAEQAOAGAAAIQAAADgCADIgBANIgBAXQAAAOACAHIAGATIADAGIABABQAAAFgDADQgDACgEAAQgCABgGgFgAgRgaQgNAOAAAQQAAASAHAIQAGAKAMgBQAKAAAHgDIALgIQgEgcAAgOIABgKIACgLIgHgEIgFgBQgPAAgMAOg");
	this.shape_8.setTransform(182.7,41.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAaA1IgDgYIgBgXIAAgKIAAgKQAAgXgIAAQgMAAgKAOQgKANgGATIgBAKIAAALIAAAJIABAKQAAAFgDADQgDADgFAAQgEAAgDgDQgDgDAAgFIgBgKIAAgJIABgeIACgfIgBgKIAAgKQAAgEADgEQADgDAFAAQAJABABAOIABAMQASgYASAAQARAAAHAPQAEAKABAUIAAALIAAAJQAAAJACAOQACAOAAAJQAAAFgDADQgDADgEAAQgKAAgBgKg");
	this.shape_9.setTransform(165,41.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgKBOQgCgDAAgFIgBgTIAAgUIABgZIABgYQAAgFADgDQADgDAEAAQAEAAADADQADADAAAFIgBAYIgBAZIAAAUIAAATQAAAFgDADQgCADgEAAQgEAAgEgDgAgGg6QgEgEAAgFQAAgFAEgEQAEgEAEAAQAFAAAEAEQADAEAAAFQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_10.setTransform(156.2,38.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgGBLQgDgCAAgFIAAgLIAAgNIgCg9IgYgDQgJgBAAgJQAAgFADgDQADgDAEAAIAXACIgBgPIAAgNQAAgFADgDQADgCAEAAQAJAAACAPIAAAKIAAAGIAAAGIAPgBQALAAAEABQAGACAAAIQAAAFgDADQgDADgEAAIgGAAIgFgBIgPACIACA/IAAAEIABAGQAAAXgMAAQgDAAgDgDg");
	this.shape_11.setTransform(141.1,39.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgKBOQgCgDAAgFIgBgTIAAgUIABgZIABgYQAAgFADgDQADgDAEAAQAEAAADADQADADAAAFIgBAYIgBAZIAAAUIAAATQAAAFgCADQgDADgEAAQgFAAgDgDgAgGg6QgDgEgBgFQABgFADgEQAEgEAEAAQAFAAAEAEQADAEABAFQgBAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_12.setTransform(133.1,38.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgkAvQgQgOAAgYQAAgbANgTQAPgVAYAAQARAAAMAHQANAHAAAPQAAALgMAJQgFAEgSAHIgoATQAGAJAJAFQAJAEALAAQAIAAAKgDQAMgDAEgGQADgGAEAAQAFAAACADQADADAAAEQAAAMgTAIQgQAIgQAAQgXAAgPgMgAgWgcQgJAKgDAUIAggPQATgKAIgHQgJgIgQAAQgNAAgJAKg");
	this.shape_13.setTransform(117.5,41.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgkAvQgQgOAAgYQAAgbANgTQAOgVAZAAQARAAAMAHQANAHAAAPQAAALgMAJQgFAEgSAHIgoATQAGAJAKAFQAIAEALAAQAIAAAKgDQAMgDAEgGQADgGAEAAQAFAAACADQADADABAEQgBAMgTAIQgRAIgPAAQgXAAgPgMgAgWgcQgJAKgDAUIAggPQATgKAIgHQgJgIgQAAQgNAAgJAKg");
	this.shape_14.setTransform(105.4,41.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgdA7QgRgFAAgLQAAgEAEgDQADgEAEAAQAEAAAFAGQACACAJABIANABQAIAAAGgCQAKgCAAgIQAAgOgUgFIgKgCQgOgDgGgFQgJgFAAgMQAAgWAVgKQAGgDAOgEIAUgGQAEgCAGgBQAEABADADQADADAAAEIABAKIACAJQAAAEgDAEQgDADgFAAQgGAAgCgFQgCgCgBgKIgZAIQgQAHAAAKIAGACQAYAEAMAIQARAKAAAVQAAASgPAJQgMAIgSAAQgPAAgMgGg");
	this.shape_15.setTransform(93.5,41.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AggAuQgOgPgBgaQAAgWAMgTQAPgWAaAAQAWAAALAUQAJAPgBAXQAAAXgMAQQgOAUgWAAQgSAAgNgNgAgTgVQgHAMAAAOQAAAQAJAJQAHAHAJAAQALAAAIgIQAJgJAAgQQACgogYAAQgPAAgJAPg");
	this.shape_16.setTransform(76,41.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgGBLQgDgCAAgFIAAgLIAAgNIgCg9IgYgDQgJgBAAgJQAAgFADgDQADgDAEAAIAXACIgBgPIAAgNQAAgFADgDQADgCAEAAQAJAAACAPIAAAKIAAAGIAAAGIAPgBQALAAAEABQAGACAAAIQAAAFgDADQgDADgEAAIgGAAIgFgBIgPACIACA/IAAAEIABAGQAAAXgMAAQgDAAgDgDg");
	this.shape_17.setTransform(65.2,39.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgdA7QgRgFAAgLQAAgEAEgDQADgEAEAAQAEAAAFAGQACACAJABIANABQAIAAAGgCQAKgCAAgIQAAgOgUgFIgKgCQgOgDgGgFQgJgFAAgMQAAgWAVgKQAGgDAOgEIAUgGQAEgCAGgBQAEABADADQADADAAAEIABAKIACAJQAAAEgDAEQgDADgFAAQgGAAgCgFQgCgCgBgKIgZAIQgQAHAAAKIAGACQAYAEAMAIQARAKAAAVQAAASgPAJQgMAIgSAAQgPAAgMgGg");
	this.shape_18.setTransform(47.9,41.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgKBOQgCgDAAgFIgBgTIAAgUIABgZIABgYQAAgFADgDQADgDAEAAQAEAAADADQADADAAAFIgBAYIgBAZIAAAUIAAATQAAAFgCADQgDADgEAAQgFAAgDgDgAgGg6QgDgEgBgFQABgFADgEQAEgEAEAAQAFAAAEAEQADAEAAAFQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_19.setTransform(40,38.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAdBRQgCgJgCgQQgCgPAAgKIAAgJIAAgIQAAgUgKAAQgNAAgKAMQgGAGgJASQAAApgEAHQgDAHgGAAQgFAAgDgDQgDgDAAgEIABgFQABgDAAgNIAAgQIABhNIAAgSIgBgLIgBgKQAAgEADgDQAEgDAEAAQAJAAABAJQACALAAAIIgBAXIAAAYIAAAJQAJgLAKgGQAJgGALAAQASAAAHALQAEAJABASIABAVIACAWQABAMADAKIAAADQAAAFgDADQgDACgFAAQgIAAgCgIg");
	this.shape_20.setTransform(23.9,38.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgeAvQgPgOAAgXQAAgUAOgYQAQgaATABQALAAANAEQAQAGAAAJQAAAFgCADQgDADgEAAQgDAAgCgCIgFgDQgGgGgPAAQgKAAgKAUQgKASAAAMQAAAPAKAHQAJAIANAAQAGAAAHgDIANgHIAFgBQAEAAACACQADAEAAAEQAAAHgQAIQgPAHgJgBQgVAAgPgNg");
	this.shape_21.setTransform(11.8,41.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgkAvQgQgOAAgYQAAgbANgTQAOgVAZAAQARAAALAHQAOAHAAAPQAAALgMAJQgGAEgQAHIgpATQAGAJAKAFQAIAEALAAQAHAAAKgDQANgDAEgGQAEgGAEAAQADAAADADQAEADAAAEQAAAMgUAIQgQAIgQAAQgXAAgPgMgAgWgcQgIAKgEAUIAhgPQASgKAIgHQgJgIgQAAQgNAAgJAKg");
	this.shape_22.setTransform(0.3,41.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgkAvQgRgOAAgYQAAgbAOgTQAPgVAYAAQARAAALAHQAOAHAAAPQAAALgMAJQgGAEgQAHIgpATQAGAJAKAFQAIAEALAAQAHAAAKgDQANgDAEgGQADgGAFAAQADAAAEADQADADAAAEQAAAMgUAIQgQAIgQAAQgXAAgPgMgAgWgcQgIAKgFAUIAigPQASgKAIgHQgJgIgQAAQgNAAgJAKg");
	this.shape_23.setTransform(-11.7,41.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgpBXQgDgDAAgFIAAgrIAAgpIgBgrIgCgWQAAgIADgFQADgGAGAAQAEAAADADQADADAAAEIAAADIgBAHQAJgHAJgDQAIgDAHAAQAWAAAKATQAJAQAAAZQAAAXgNAPQgNAQgWAAQgKAAgNgEIAAAzQAAAFgDADQgDADgFAAQgEAAgDgDgAgKg4QgFADgJAIIABAyQAMAFALAAQANAAAHgKQAGgIAAgOQAAgTgEgKQgFgKgKAAQgJAAgIAFg");
	this.shape_24.setTransform(-23.7,44.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgdA7QgRgFAAgLQAAgEAEgDQADgEAEAAQAEAAAFAGQACACAJABIANABQAIAAAGgCQAKgCAAgIQAAgOgUgFIgKgCQgOgDgGgFQgJgFAAgMQAAgWAVgKQAGgDAOgEIAUgGQAEgCAGgBQAEABADADQADADAAAEIABAKIACAJQAAAEgDAEQgDADgFAAQgGAAgCgFQgCgCgBgKIgZAIQgQAHAAAKIAGACQAYAEAMAIQARAKAAAVQAAASgPAJQgMAIgSAAQgPAAgMgGg");
	this.shape_25.setTransform(-35.4,41.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgQBcQgEgDAAgFIABgCQACgOAAgQIAAgdIAAgeIgRAAQgLABAAgLQgBgLAUAAIAKAAIABgQQADgYAJgMQAKgOAYAAQAPAAAAALQAAALgOAAQgZgBgEAlIAAAGIAYgBQARAAAAALQAAAHgIACIgJABIgZABIgBAYIABAUIAAATQAAAUgCAMQgBAJgIgBQgEAAgDgCg");
	this.shape_26.setTransform(-52.8,39.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AggAuQgOgPgBgaQAAgWAMgTQAPgWAaAAQAWAAALAUQAJAPAAAXQAAAXgNAQQgOAUgWAAQgSAAgNgNgAgTgVQgHAMAAAOQAAAQAJAJQAHAHAJAAQALAAAIgIQAJgJAAgQQACgogYAAQgPAAgJAPg");
	this.shape_27.setTransform(-64.1,41.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgGBLQgDgCAAgFIAAgLIAAgNIgCg9IgYgDQgJgBAAgJQAAgFADgDQADgDAEAAIAXACIgBgPIAAgNQAAgFADgDQADgCAEAAQAJAAACAPIAAAKIAAAGIAAAGIAPgBQALAAAEABQAGACAAAIQAAAFgDADQgDADgEAAIgGAAIgFgBIgPACIACA/IAAAEIABAGQAAAXgMAAQgDAAgDgDg");
	this.shape_28.setTransform(-81.4,39.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgpAyIAAhLIABgLIAAgKQAAgLAJAAQALAAAAASQAUgUAZAAQAIAAAFAGQAEAHAAANIAAAHQgBAOgKAAQgJAAAAgKIgBgIIAAgJQgRACgJAIQgKAGgGAOIAAA7QAAAKgKAAQgKAAAAgKg");
	this.shape_29.setTransform(-91.5,41.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAiA3IgHgIIgSAJQgIACgEAAQgZAAgMgOQgLgNAAgcQAAgZASgSQASgTAYAAQAJABAMAEQAOAGAAAIQAAADgCADIgBANIgBAXQAAAOACAHIAGATIADAGIABABQAAAFgDADQgDACgEAAQgCABgGgFgAgRgaQgNAOAAAQQAAASAHAIQAGAKAMgBQAKAAAHgDIALgIQgEgcAAgOIABgKIACgLIgHgEIgFgBQgPAAgMAOg");
	this.shape_30.setTransform(-102.7,41.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgpBXQgDgDAAgFIAAgrIAAgpIgBgrIgCgWQAAgIADgFQADgGAGAAQAEAAADADQADADAAAEIAAADIgBAHQAJgHAJgDQAIgDAHAAQAWAAAKATQAJAQAAAZQAAAXgNAPQgNAQgWAAQgKAAgNgEIAAAzQAAAFgDADQgDADgFAAQgEAAgDgDgAgKg4QgFADgJAIIABAyQAMAFALAAQANAAAHgKQAGgIAAgOQAAgTgEgKQgFgKgKAAQgJAAgIAFg");
	this.shape_31.setTransform(-114.1,44.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgpAyIAAhLIABgLIAAgKQAAgLAJAAQALAAAAASQAUgUAZAAQAIAAAFAGQAEAHAAANIAAAHQgBAOgKAAQgJAAAAgKIgBgIIAAgJQgRACgJAIQgKAGgGAOIAAA7QAAAKgKAAQgKAAAAgKg");
	this.shape_32.setTransform(-131.6,41.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgkAvQgRgOAAgYQAAgbAOgTQAPgVAYAAQARAAALAHQAOAHAAAPQAAALgMAJQgGAEgQAHIgpATQAGAJAJAFQAJAEALAAQAHAAAKgDQANgDAEgGQAEgGAEAAQADAAAEADQACADAAAEQABAMgUAIQgRAIgPAAQgXAAgPgMgAgVgcQgKAKgEAUIAigPQASgKAIgHQgJgIgQAAQgNAAgIAKg");
	this.shape_33.setTransform(-143,41.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAdBRQgCgJgCgQQgCgPAAgKIAAgJIAAgIQAAgUgKAAQgNAAgKAMQgGAGgJASQAAApgEAHQgDAHgGAAQgFAAgDgDQgDgDAAgEIABgFQABgDAAgNIAAgQIABhNIAAgSIgBgLIgBgKQAAgEADgDQAEgDAEAAQAJAAABAJQACALAAAIIgBAXIAAAYIAAAJQAJgLAKgGQAJgGALAAQASAAAHALQAEAJABASIABAVIACAWQABAMADAKIAAADQAAAFgDADQgDACgFAAQgIAAgCgIg");
	this.shape_34.setTransform(-155.5,38.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgGBLQgDgCAAgFIAAgLIAAgNIgCg9IgYgDQgJgBAAgJQAAgFADgDQADgDAEAAIAXACIgBgPIAAgNQAAgFADgDQADgCAEAAQAJAAACAPIAAAKIAAAGIAAAGIAPgBQALAAAEABQAGACAAAIQAAAFgDADQgDADgEAAIgGAAIgFgBIgPACIACA/IAAAEIABAGQAAAXgMAAQgDAAgDgDg");
	this.shape_35.setTransform(-167.2,39.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AggAuQgOgPgBgaQAAgWAMgTQAPgWAaAAQAWAAALAUQAJAPgBAXQAAAXgMAQQgOAUgWAAQgSAAgNgNgAgTgVQgHAMAAAOQAAAQAJAJQAHAHAJAAQALAAAIgIQAJgJAAgQQACgogYAAQgPAAgJAPg");
	this.shape_36.setTransform(-178.2,41.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgkAvQgQgOAAgYQAAgbANgTQAOgVAZAAQARAAALAHQAOAHAAAPQAAALgMAJQgGAEgQAHIgpATQAGAJAKAFQAIAEALAAQAHAAALgDQAMgDAEgGQAEgGAEAAQADAAADADQAEADAAAEQAAAMgUAIQgQAIgQAAQgXAAgPgMgAgWgcQgIAKgEAUIAhgPQASgKAIgHQgJgIgQAAQgNAAgJAKg");
	this.shape_37.setTransform(102.5,8.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgFA/QgDgDAAgFQAAgNgDgZQgDgZAAgNQAAgLgDgGQgHADgIAIIgNAOIgFAHIgCASIgBASIABAJIABAJQAAAEgDADQgDADgFAAQgMAAAAgbIABgUIACgSIgBgRIgBgRQAAgYALAAQAEAAADADQAEAEAAAEIgBAGIAAAHIAAALQAFgLALgJQALgKAIAAQARAAAFARQAGgIAIgEQAIgEALAAQASAAAGAUQACADADAbIAHA8QABAFgEADQgDADgEAAQgJAAgCgKIgEghIgDggQgBgIgDgHQgEgJgEAAQgEAAgLAGIgNAKIAAAVIAEAbQACARAAALQAAAFgDADQgDADgFAAQgEAAgCgDg");
	this.shape_38.setTransform(87.8,8.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AggAuQgOgQAAgYQgBgXAMgTQAPgWAbAAQAVAAALAUQAJAQgBAWQAAAXgMAQQgOAUgWAAQgSAAgNgNgAgTgVQgHAMAAAPQAAAPAJAJQAHAHAJAAQALAAAIgIQAJgJAAgQQACgogYAAQgPAAgJAPg");
	this.shape_39.setTransform(73.2,9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgdA7QgRgFAAgLQAAgEAEgDQADgEAEAAQAEAAAFAFQACADAJABIANACQAIgBAGgCQAKgCAAgIQAAgOgUgFIgKgCQgOgDgGgFQgJgFAAgMQAAgWAVgKQAGgDAOgEIAUgGQAEgCAGAAQAEAAADACQADADAAAFIABAKIACAJQAAAFgDADQgDACgFAAQgGAAgCgDQgCgEgBgJIgZAIQgQAHAAAKIAGACQAYAFAMAHQARALAAAUQAAASgPAJQgMAHgSAAQgPABgMgGg");
	this.shape_40.setTransform(62,8.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgdA7QgRgFAAgLQAAgEAEgDQADgEAEAAQAEAAAFAFQACADAJABIANACQAIgBAGgCQAKgCAAgIQAAgOgUgFIgKgCQgOgDgGgFQgJgFAAgMQAAgWAVgKQAGgDAOgEIAUgGQAEgCAGAAQAEAAADACQADADAAAFIABAKIACAJQAAAFgDADQgDACgFAAQgGAAgCgDQgCgEgBgJIgZAIQgQAHAAAKIAGACQAYAFAMAHQARALAAAUQAAASgPAJQgMAHgSAAQgPABgMgGg");
	this.shape_41.setTransform(44.7,8.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAiA3IgHgIIgSAIQgIADgEAAQgZAAgMgOQgLgNAAgcQAAgZASgSQASgSAYgBQAJAAAMAFQAOAGAAAIQAAADgCADIgBAOIgBAWQAAAOACAIIAGASIADAGIABABQAAAFgDADQgDADgEAAQgCAAgGgFgAgRgaQgNANAAARQAAASAHAIQAGAJAMAAQAKAAAHgDIALgJQgEgbAAgOIABgKIACgLIgHgDIgFgCQgPAAgMAOg");
	this.shape_42.setTransform(34.1,9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgdA7QgRgFAAgLQAAgEAEgDQADgEAEAAQAEAAAFAFQACADAJABIANACQAIgBAGgCQAKgCAAgIQAAgOgUgFIgKgCQgOgDgGgFQgJgFAAgMQAAgWAVgKQAGgDAOgEIAUgGQAEgCAGAAQAEAAADACQADADAAAFIABAKIACAJQAAAFgDADQgDACgFAAQgGAAgCgDQgCgEgBgJIgZAIQgQAHAAAKIAGACQAYAFAMAHQARALAAAUQAAASgPAJQgMAHgSAAQgPABgMgGg");
	this.shape_43.setTransform(16.2,8.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAdBSQgGgLgLgPIgSgaIgTAPIgCAgQAAAEgDAEQgDADgEAAQgLAAAAgPIABgbIABgaIABglIAAgkIAAgMIgBgMQAAgEAEgEQADgDAEAAQAEAAADADQAEAEAAAEIAAANIABALIgBAjIAAAkQAOgLANgNIAXgYQAEgDAEgBQAEAAADADQAEAEAAAEQAAAEgDADQgOAQgTARIAXAfQARAXAAAHQAAAEgDADQgDAEgFAAQgGgBgDgGg");
	this.shape_44.setTransform(5.9,5.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgpAyIAAhLIABgLIAAgLQAAgKAJAAQALAAAAASQAUgUAZAAQAIAAAFAGQAEAHAAANIAAAHQgBAOgKAAQgJAAAAgKIgBgIIAAgJQgRACgJAHQgKAIgGANIAAA7QAAAKgKAAQgKAAAAgKg");
	this.shape_45.setTransform(-5.7,8.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AggAuQgOgQgBgYQAAgXAMgTQAPgWAaAAQAWAAALAUQAJAQgBAWQAAAXgMAQQgOAUgWAAQgSAAgNgNgAgTgVQgHAMAAAPQAAAPAJAJQAHAHAJAAQALAAAIgIQAJgJAAgQQACgogYAAQgPAAgJAPg");
	this.shape_46.setTransform(-17.2,9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAZA8QgMAAgGgdIgFgZIgCgXIgJAUIgQAsQgCAEgCACQgDAHgIAAQgIAAgHggQgEgRgEgbIgDgQIgBgRQAAgEADgDQADgDAFAAQAIAAACAJIACAQIACAPIAGAwIAZhMQADgMAIAAQAJAAADAOIAHAmIAHAqIAIgeIAOg5QACgHAHAAQAFAAADADQADADAAAFIgBAFQgIAjgOArQgDAKgHAKQgDAFgGAAIgBAAg");
	this.shape_47.setTransform(-30.3,9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AguBTQgLgJAAgjIABgPIAAgSIgBgFQAAgDACgCIACguIgBgMIgBgMQAAgMALAAQAFAAADADQANgEALgCQAMgCAJAAQAaABAPAGQAIADAAAHQAAAFgDADQgDAEgFgBIgDAAQgSgGgRABQgJAAgKACIgWAEIABAMIgCAoIAugEIAagCQAEAAAEADQADADAAAFQAAAJgKABIgaACIgwAFIgBAOIAAANQAAAXADAFQADADAOAAIATAAIAUgBIAHAAIAGgBQALgBAAALQAAAKgJABQgKACghAAQghABgJgJg");
	this.shape_48.setTransform(-50.9,6.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgSBOQgNgggRg9IgIgdQgHgWABgHQgBgFAEgDQADgDAFAAQAHAAADAJIAEASIALAlQAJAnALAdIAAgCIAchNIAJgaQAGgQAHgIQADgFAGAAQAEAAADAEQADADABAFQAAADgCADQgHAKgFALIgIAXIgdBOQgFANgGANQgDAHgGAAQgIAAgDgJg");
	this.shape_49.setTransform(-64.6,6.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgvBPQgCgDAAgFQAAgEACgEQADgDAFAAQAHAAAQgCIABgUIAAgSIgBgSQAAgYADglIgOAAIgOABQgEAAgEgDQgDgEAAgEQAAgKAKgBIAggBQAVAAAgAEQAKACAAAKQAAAFgEADQgDACgEAAIgSgBIgRgCQgDAfABAbIAAATIAAATIAAASIAiAAQAEAAAEADQADADAAAFQAAAEgDADQgEAEgEAAIgSAAIgSAAIgVACIgVACQgFAAgDgDg");
	this.shape_50.setTransform(-78.4,6.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgHBPQgDgDAAgFIAAgFIABgFIgBgQIAAgPQAAgQgDgbQgDgeAAgNIgKAAQgXAAgOgDQgIgCAAgJQAAgEADgEQADgDAFAAIARACIARABIAUAAIASAAIAZABIAZABQAEAAADADQADADAAAFQAAAFgDADQgDADgEAAIgZgBIgYgBIgIAAIADAwQACAeAAARIABALIABAMQAAAHgDAGQgDAHgGAAQgDAAgEgDg");
	this.shape_51.setTransform(-91,6.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AguBPQgEgDAAgFQAAgEAEgEQADgDAEAAQAHAAAQgCIABgUIgBgSIAAgSQAAgYADglIgOAAIgOABQgFAAgDgDQgDgEAAgEQAAgKAKgBIAhgBQAUAAAhAEQAJACAAAKQAAAFgEADQgDACgEAAIgRgBIgSgCQgDAfAAAbIABATIABATIgBASIAhAAQAFAAADADQADADAAAFQAAAEgDADQgDAEgFAAIgSAAIgSAAIgTACIgWACQgEAAgDgDg");
	this.shape_52.setTransform(-105.3,6.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AhHBUQgDgDgBgFIABgOIABgNIAAgUIABgVIgBgUIAAgVIgBgVIgCgUQABgEAEgFQAEgDAGAAQAGAAAHAMQAcAoAUAbQAZAeAfAcIAAgNIAAgOQAAgtgFgcIgCgMQgDgHABgFQAAgMALAAQASAAAABGIAAAjIAAAjIgBASQgCAKgKAAQgGAAgIgHQgsgqg3hNIgBAYIAAAYIAAAaIABAbQAAAdgMAAQgGAAgDgDg");
	this.shape_53.setTransform(-120,6.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgvBPQgDgDAAgFQAAgEADgEQAEgDAEAAQAHAAAQgCIABgUIAAgSIgBgSQAAgYADglIgOAAIgOABQgEAAgEgDQgDgEAAgEQAAgKAKgBIAggBQAVAAAgAEQAKACAAAKQAAAFgEADQgDACgEAAIgSgBIgRgCQgCAfgBAbIABATIAAATIAAASIAiAAQAEAAAEADQACADAAAFQAAAEgCADQgEAEgEAAIgSAAIgSAAIgUACIgWACQgEAAgEgDg");
	this.shape_54.setTransform(-134.9,6.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgzBXQgDgDAAgFIABg/IAAg/IAAgOIAAgOQAAgFADgDQADgEAFAAQADAAADACIAYgDIARgBQANAAAPADQAXAFAAAIQAAAFgDADQgDAEgFAAIgFgBQgNgFgWAAIgPABIgWADIAAAuQAVgFALAAQAPAAASACQAKABAAAKQAAAFgDADQgEACgEAAIgRgBIgPAAQgIAAgYAFIgBBKQAAAFgDADQgDADgEAAQgGAAgCgDg");
	this.shape_55.setTransform(-146.9,6.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AhHBUQgDgDAAgFIABgOIAAgNIABgUIAAgVIAAgUIAAgVIgCgVIgCgUQAAgEAFgFQAEgDAFAAQAGAAAJAMQAbAoAUAbQAZAeAeAcIAAgNIAAgOQAAgtgDgcIgDgMQgCgHgBgFQAAgMAMAAQASAAAABGIAAAjIAAAjIgCASQgCAKgJAAQgGAAgIgHQgsgqg4hNIAAAYIgBAYIABAaIAAAbQAAAdgLAAQgGAAgDgDg");
	this.shape_56.setTransform(-162.9,6.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AguBPQgEgDAAgFQAAgEAEgEQADgDAEAAQAHAAAQgCIABgUIgBgSIAAgSQAAgYADglIgOAAIgOABQgFAAgDgDQgDgEAAgEQAAgKAKgBIAhgBQAUAAAhAEQAJACAAAKQAAAFgEADQgDACgEAAIgRgBIgSgCQgDAfAAAbIABATIABATIgBASIAhAAQAFAAADADQADADAAAFQAAAEgDADQgDAEgFAAIgSAAIgSAAIgTACIgWACQgEAAgDgDg");
	this.shape_57.setTransform(-177.8,6.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AAaA0IgDgXIgBgYIAAgIIAAgLQAAgXgIAAQgMAAgKAOQgKANgGATIgBALIAAAKIAAAKIABAKQAAAEgDADQgDADgFAAQgEAAgDgDQgDgDAAgEIgBgKIAAgKIABgeIACgeIgBgKIAAgLQAAgEADgDQADgDAFgBQAJAAABAOIABANQASgYASAAQARAAAHAPQAEALABATIAAALIAAAJQAAAJACAOQACAOAAAJQAAAFgDACQgDADgEAAQgKAAgBgKg");
	this.shape_58.setTransform(119.3,-23.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAiA3IgHgIIgSAIQgIAEgEAAQgZAAgMgPQgLgNAAgbQAAgaASgSQASgSAYAAQAJgBAMAFQAOAGAAAJQAAADgCACIgBAOIgBAWQAAANACAJIAGASIADAGIABACQAAAEgDADQgDACgEABQgCgBgGgEgAgRgaQgNANAAASQAAARAHAJQAGAIAMABQAKgBAHgEIALgIQgEgbAAgOIABgKIACgMIgHgCIgFgBQgPAAgMANg");
	this.shape_59.setTransform(107.7,-23.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAZA8QgMAAgGgdIgFgZIgCgXIgJAUIgQAsQgCAEgCACQgDAHgIAAQgIAAgHggQgEgRgEgbIgDgQIgBgRQAAgEADgDQADgDAFAAQAIAAACAJIACAQIACAPIAGAwIAZhMQADgMAIAAQAJAAADAOIAHAmQAEAaADAQIAIgeIAOg5QACgHAHAAQAFAAADADQADADAAAFIgBAFQgIAjgOArQgDAKgHAKQgDAFgGAAIgBAAg");
	this.shape_60.setTransform(88,-23.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AggAtQgOgOgBgZQAAgYAMgSQAPgWAaAAQAWAAALAUQAJAPAAAXQAAAXgNARQgOATgWAAQgSAAgNgOgAgTgVQgHAMAAAPQAAAPAJAJQAHAHAJAAQALAAAIgIQAJgJAAgPQACgpgYAAQgPAAgJAPg");
	this.shape_61.setTransform(74.5,-23.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AAdBRQgCgJgCgQQgCgPAAgKIAAgJIAAgIQAAgUgKAAQgNAAgKAMQgGAGgJASQAAApgEAHQgDAHgGAAQgFAAgDgDQgDgDAAgEIABgFQABgDAAgNIAAgQIABhNIAAgSIgBgLIgBgKQAAgEADgDQAEgDAEAAQAJAAABAJQACALAAAIIgBAXIAAAYIAAAJQAJgLAKgGQAJgGALAAQASAAAHALQAEAJABASIABAVIACAWQABAMADAKIAAADQAAAFgDADQgDACgFAAQgIAAgCgIg");
	this.shape_62.setTransform(62.7,-26.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgkAvQgQgOAAgYQAAgbANgTQAOgVAZAAQARAAAMAHQANAHAAAPQAAALgMAJQgGAEgQAHIgpATQAGAJAKAFQAIAEALAAQAHAAALgDQAMgDAEgGQADgGAFAAQADAAADADQAEADAAAEQgBAMgTAIQgQAIgQAAQgXAAgPgMgAgWgcQgIAKgEAUIAggPQATgKAIgHQgJgIgQAAQgNAAgJAKg");
	this.shape_63.setTransform(43.9,-23.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgkAvQgQgOAAgYQAAgbANgTQAOgVAZAAQARAAALAHQAOAHAAAPQAAALgMAJQgGAEgQAHIgpATQAGAJAKAFQAIAEALAAQAHAAALgDQAMgDAEgGQAEgGAEAAQADAAADADQAEADAAAEQAAAMgUAIQgQAIgQAAQgXAAgPgMgAgWgcQgIAKgEAUIAhgPQASgKAIgHQgJgIgQAAQgNAAgJAKg");
	this.shape_64.setTransform(31.8,-23.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgdA8QgRgHAAgKQAAgFAEgDQADgDAEAAQAEAAAFAFQACADAJACIANABQAIAAAGgCQAKgEAAgHQAAgOgUgFIgKgDQgOgCgGgFQgJgFAAgMQAAgWAVgKQAGgDAOgEIAUgHQAEgBAGAAQAEAAADACQADADAAAFIABAJIACAJQAAAFgDADQgDADgFAAQgGAAgCgDQgCgEgBgIIgZAHQgQAHAAAKIAGACQAYAEAMAIQARALAAAUQAAASgPAJQgMAHgSAAQgPAAgMgEg");
	this.shape_65.setTransform(19.9,-24.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgfAtQgPgOgBgZQAAgYAMgSQAPgWAaAAQAWAAALAUQAJAPgBAXQAAAXgMARQgNATgXAAQgRAAgNgOgAgTgVQgHAMAAAPQAAAPAJAJQAHAHAJAAQALAAAIgIQAJgJAAgPQACgpgYAAQgPAAgJAPg");
	this.shape_66.setTransform(2.4,-23.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgGBLQgDgCAAgEIAAgNIAAgMIgCg+IgYgBQgJgBAAgKQAAgFADgDQADgDAEAAIAXACIgBgPIAAgNQAAgEADgDQADgEAEAAQAJAAACAQIAAAKIAAAGIAAAHIAPgCQALAAAEABQAGACAAAIQAAAFgDADQgDADgEAAIgGAAIgFAAIgPABIACA+IAAAGIABAFQAAAXgMABQgDAAgDgEg");
	this.shape_67.setTransform(-8.4,-25.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgcBUQgDgDAAgEQAAgLAXg0IgmhJIgFgHQgDgFAAgEQAAgEADgDQAEgEAEAAQAFAAACAEQATAZAUAvIAQglQAIgTAIgOQADgGAGAAQAEAAAEADQADADAAAFIgBAFIglBPQgOAegGATIgHAVQgDAIgHAAQgFAAgDgDg");
	this.shape_68.setTransform(-26.1,-20.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AAiA3IgHgIIgSAIQgIAEgEAAQgZAAgMgPQgLgNAAgbQAAgaASgSQASgSAYAAQAJgBAMAFQAOAGAAAJQAAADgCACIgBAOIgBAWQAAANACAJIAGASIADAGIABACQAAAEgDADQgDACgEABQgCgBgGgEgAgRgaQgNANAAASQAAARAHAJQAGAIAMABQAKgBAHgEIALgIQgEgbAAgOIABgKIACgMIgHgCIgFgBQgPAAgMANg");
	this.shape_69.setTransform(-37.1,-23.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AAZA8QgMAAgGgdIgFgZIgCgXIgJAUIgQAsQgCAEgCACQgDAHgIAAQgIAAgHggQgEgRgEgbIgDgQIgBgRQAAgEADgDQADgDAFAAQAIAAACAJIACAQIACAPIAGAwIAZhMQADgMAIAAQAJAAADAOIAHAmQAEAaADAQIAIgeIAOg5QACgHAHAAQAFAAADADQADADAAAFIgBAFQgIAjgOArQgDAKgHAKQgDAFgGAAIgBAAg");
	this.shape_70.setTransform(-50.2,-23.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgGBLQgDgCAAgEIAAgNIAAgMIgCg+IgYgBQgJgBAAgKQAAgFADgDQADgDAEAAIAXACIgBgPIAAgNQAAgEADgDQADgEAEAAQAJAAACAQIAAAKIAAAGIAAAHIAPgCQALAAAEABQAGACAAAIQAAAFgDADQgDADgEAAIgGAAIgFAAIgPABIACA+IAAAGIABAFQAAAXgMABQgDAAgDgEg");
	this.shape_71.setTransform(-69.5,-25.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgdA8QgRgHAAgKQAAgFAEgDQADgDAEAAQAEAAAFAFQACADAJACIANABQAIAAAGgCQAKgEAAgHQAAgOgUgFIgKgDQgOgCgGgFQgJgFAAgMQAAgWAVgKQAGgDAOgEIAUgHQAEgBAGAAQAEAAADACQADADAAAFIABAJIACAJQAAAFgDADQgDADgFAAQgGAAgCgDQgCgEgBgIIgZAHQgQAHAAAKIAGACQAYAEAMAIQARALAAAUQAAASgPAJQgMAHgSAAQgPAAgMgEg");
	this.shape_72.setTransform(-80.3,-24.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgkAvQgRgOAAgYQAAgbAOgTQAOgVAZAAQARAAALAHQAOAHAAAPQAAALgMAJQgFAEgSAHIgoATQAGAJAJAFQAJAEALAAQAIAAAJgDQANgDAEgGQAEgGADAAQAFAAADADQACADAAAEQABAMgUAIQgRAIgPAAQgXAAgPgMgAgVgcQgJAKgFAUIAigPQASgKAIgHQgJgIgQAAQgNAAgIAKg");
	this.shape_73.setTransform(-91.2,-23.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgJBOQgDgDAAgFIgBgTIgBgUIACgZIABgYQAAgFADgDQADgDAFAAQADAAADADQADADAAAFIgBAYIgBAZIAAAUIABATQAAAFgDADQgDADgEAAQgEAAgDgDgAgGg6QgDgEAAgFQAAgFADgEQAEgEAEAAQAFAAAEAEQAEAEAAAFQAAAFgEAEQgEADgFAAQgEAAgEgDg");
	this.shape_74.setTransform(-100.3,-26.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgdA8QgRgHAAgKQAAgFAEgDQADgDAEAAQAEAAAFAFQACADAJACIANABQAIAAAGgCQAKgEAAgHQAAgOgUgFIgKgDQgOgCgGgFQgJgFAAgMQAAgWAVgKQAGgDAOgEIAUgHQAEgBAGAAQAEAAADACQADADAAAFIABAJIACAJQAAAFgDADQgDADgFAAQgGAAgCgDQgCgEgBgIIgZAHQgQAHAAAKIAGACQAYAEAMAIQARALAAAUQAAASgPAJQgMAHgSAAQgPAAgMgEg");
	this.shape_75.setTransform(-109.2,-24.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAiA3IgHgIIgSAIQgIAEgEAAQgZAAgMgPQgLgNAAgbQAAgaASgSQASgSAYAAQAJgBAMAFQAOAGAAAJQAAADgCACIgBAOIgBAWQAAANACAJIAGASIADAGIABACQAAAEgDADQgDACgEABQgCgBgGgEgAgRgaQgNANAAASQAAARAHAJQAGAIAMABQAKgBAHgEIALgIQgEgbAAgOIABgKIACgMIgHgCIgFgBQgPAAgMANg");
	this.shape_76.setTransform(-119.9,-23.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgkAvQgRgOAAgYQAAgbAOgTQAPgVAYAAQARAAALAHQAOAHAAAPQAAALgMAJQgGAEgQAHIgpATQAGAJAJAFQAJAEALAAQAHAAAKgDQANgDAEgGQAEgGAEAAQADAAAEADQACADAAAEQABAMgUAIQgRAIgPAAQgXAAgPgMgAgVgcQgKAKgEAUIAigPQASgKAIgHQgJgIgQAAQgNAAgIAKg");
	this.shape_77.setTransform(-131.3,-23.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgkAvQgQgOgBgYQAAgbAOgTQAPgVAYAAQARAAAMAHQANAHAAAPQAAALgMAJQgGAEgRAHIgoATQAGAJAJAFQAJAEALAAQAIAAAKgDQAMgDAEgGQADgGAEAAQAFAAACADQADADAAAEQAAAMgTAIQgRAIgPAAQgXAAgPgMgAgVgcQgJAKgFAUIAhgPQATgKAIgHQgJgIgQAAQgNAAgIAKg");
	this.shape_78.setTransform(-149.9,-23.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AAdBRQgCgJgCgQQgCgPAAgKIAAgJIAAgIQAAgUgKAAQgNAAgKAMQgGAGgJASQAAApgEAHQgDAHgGAAQgFAAgDgDQgDgDAAgEIABgFQABgDAAgNIAAgQIABhNIAAgSIgBgLIgBgKQAAgEADgDQAEgDAEAAQAJAAABAJQACALAAAIIgBAXIAAAYIAAAJQAJgLAKgGQAJgGALAAQASAAAHALQAEAJABASIABAVIACAWQABAMADAKIAAADQAAAFgDADQgDACgFAAQgIAAgCgIg");
	this.shape_79.setTransform(-162.4,-26.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgHBPQgDgDAAgFIAAgFIABgFIgBgQIAAgPQAAgQgDgbQgDgeAAgNIgKAAQgXAAgOgDQgIgCAAgJQAAgEADgEQADgDAFAAIARACIARABIAUAAIASAAIAZABIAZABQAEAAADADQADADAAAFQAAAFgDADQgDADgEAAIgZgBIgYgBIgIAAIADAwQACAeAAARIABALIABAMQAAAHgDAGQgDAHgGAAQgDAAgEgDg");
	this.shape_80.setTransform(-175.4,-26.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.InfinitivecanhaveaSubject, new cjs.Rectangle(-186.4,-44.7,417.3,165.3), null);


(lib.buffyrunanim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frontArm
	this.instance = new lib.staticbuffyfArm();
	this.instance.parent = this;
	this.instance.setTransform(157.3,83.1,1,1,0,0,0,98.9,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:97.4,regY:16.5,scaleX:1,scaleY:1,rotation:13,x:155.8,y:84.1},4).to({regY:16.4,scaleX:1,scaleY:1,rotation:-85,x:155.7,y:84},8).to({regX:98.9,regY:15.6,scaleX:1,scaleY:1,rotation:-12,x:157.3,y:83.2},4).wait(1));

	// head
	this.instance_1 = new lib.animbuffyhead();
	this.instance_1.parent = this;
	this.instance_1.setTransform(140.8,66,1,1,0,0,0,82.7,66);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:82.6,scaleX:1,scaleY:1,rotation:-18,x:140.7},5).to({regX:82.7,scaleX:1,scaleY:1,rotation:23.8,x:140.8,y:66.1},6).to({scaleX:1,scaleY:1,rotation:3.8,y:66},5).wait(1));

	// frontLeg
	this.instance_2 = new lib.animbuffyfLeg();
	this.instance_2.parent = this;
	this.instance_2.setTransform(193.5,145.3,0.995,0.995,113.5,0,0,29.7,22.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:29.8,rotation:26.8,y:145.4},4).to({regX:29.7,rotation:119.1,y:145.3},8).to({regX:29.8,scaleX:0.99,scaleY:0.99,rotation:111.3,y:145.4},4).wait(1));

	// Layer 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ApNAiQDAgRDEggQCwgeCxATQB+AOB9AMQA2AFA2AFQAtAEAiAU");
	this.shape.setTransform(184.6,262.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("Aneg4QAIAAAHgBQgMAAgEAAQABABAAAAgAlng5QgeAAgeAAQgBABAAgBQgBABgBgBQAAABgBgBQAAABgBgBQgBABAAgBQgBABgBgBQAAABgBgBQAAABgBgBQgBABAAgBQgBABAAgBQgBABAAgBQgBABAAgBQgBABAAgBQgBABAAgBQgBABAAgBQgBABAAgBQgBABAAgBQgBABAAgBQgBABAAgBQgBABAAgBQgBABAAgBQgBABAAgBQgBABAAgBIgTAAAxBgbQC3gZC7gCQB4gCB5AAQCpATC+gDQCBgDCCgBQBQAABGARQgpAPg4ALQhRAPhwAHQizAKi0ABQiCABiCAAQHJAeIogGQF9gEE/AA");
	this.shape_1.setTransform(205.6,262.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(17));

	// body
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.1,1,1).p("AAfoCQAGAqgEAlQgKBSgxBDQgxBBgiBZAiooeQgKBEg8AzQg2AuhFAxQhEAwhFA0Ahwh6QgBABgBABAIPCbQgCgEgCgDQg9gFgxgCQgogBgpgCQgIAAgIAAQgxgCgwgMQgwgLgtgFQgwgFgtgIQgtgJgrgJQgCgPgEgQAIPCbQgFAZgDAaQgDAVgCAVQgGAugXAnQgXAoghAfQgHAHgIAGQgbAXgfARQgkAVgfARQgiATgpAQQgsASgvgHQgwgGgpgTQgggQgQguQgPgqgJguQgHgngGgmQgBgJgCgJQgHguAAgxQABgvAGguQAAgCgBgCQAAgBAAgBAIQCeQAAgBgBgCAgzEhQgBgYgBgYQgBgxADgxQABgfgEgdAmRn6QgDgUADgCAoPlWQgEgGA0gI");
	this.shape_2.setTransform(187.4,110.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.1,1,1).p("Ak5lVQARgBASgBQAugDAugDQAFAAAGAAQArgDAqAHQAvAIAtAKQAEABADABQAIABAHADQAhAKAZARQACACADACQAEADADACQAjAVAmAWQAoAYApAVQAqAWAmAeQAmAeAeAnQAcAlAZAnQAJAOAHATQAAACABADQAEAGAEAHQATAdAPAgQAWAsAEAxQAEAxgHAyQgDAYgFAXAh0A8QgCAFgBAFAiOBlQgDAEgDAEQgfAkgrAVQgrAVgwAFQgvAEgvgPQgXgIgSgNQgRgMgOgRQgUgZADgrQADgwgLgsQgBgDAAgDQgIgggLgpQgNgsAEAFQADAFgEgHAhFDvQgBgNgDgNQgMgrgaglQgNgTgSgNAh5BIQgKAPgLAOAmYlQQASABATgCQAdgCAdgCQgCACgBAD");
	this.shape_3.setTransform(188.1,91.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF00FF").s().p("ABtIeQgwgGgpgUQgfgQgRguQgPgqgJguIgNhNIgCgwQgBgwADgxQABgggEgdIgBgEIAAgCQArAKAtAIQAtAIAwAFQAtAFAwAMQAwAMAxABIAQABIBRADQAxACA9AEIAEAHQgFAZgDAaIgFArQgGAtgXAoQgXAoghAeIgPANQgbAXgfARIhDAnQgiATgpAQQggAMgiAAQgNAAgMgBgAmegLQgWgIgTgMQgRgMgOgRQgUgaADgrQADgvgLguIgBgGQBFgzBEgwQBFgyA2gtQA8g0AKhEQArgCAqAHQAvAHAuALIAGABIAPAEQAGAqgEAmQgKBRgxBDQgxBBgiBZIgDAKIgCADIgVAcIgGAIQgfAlgrAVQgrAVgwAEIgVAAQglAAgkgLg");
	this.shape_4.setTransform(188.8,110.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BE9670").s().p("AIKFfIgCgEIgEgHQg9gEgxgCIhRgDIgQgBQgxgBgwgMQgwgMgtgFQgwgFgtgIQgtgIgrgKIgGgeIgBAAQgBgNgDgNQgMgsgaglQgNgTgSgNIAVgcIACgCIAEgKQAhhZAxhBQAxhDAKhRQAEgmgGgqQAhAKAZASIAFAEIAIAFIBIArQAoAXApAVQAqAXAmAeQAmAeAeAnQAcAkAZAoQAJAOAHASIACAGIAIAMQASAeAPAfQAWAtAEAxQAEAxgHAxQgDAZgFAXIgBAAgAoMhsQgNgsAEAFQABABAAAAQAAABAAAAQAAgBAAAAQgBgBgBgCQgEgHA0gIQA0gIAPg9QAPg9gDgUQgEgUADgCQASABATgCIA6gFIAjgCIBcgFIALgBQgKBFg8AzQg2AthFAyQhEAwhFAzQgIgggLgogAk8lQIADgGIgDAGg");
	this.shape_5.setTransform(188.1,91.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(17));

	// backLeg
	this.instance_3 = new lib.animbuffybLeg();
	this.instance_3.parent = this;
	this.instance_3.setTransform(199,141.8,0.998,0.998,-33.1,0,0,89.4,26.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({rotation:-106.1,y:141.7},8).to({regX:89.5,regY:26.3,scaleX:1,scaleY:1,rotation:-63.2,x:198.9},4).wait(1));

	// backArm
	this.instance_4 = new lib.staticbuffybArm();
	this.instance_4.parent = this;
	this.instance_4.setTransform(156.1,66.1,0.999,0.999,24,0,0,9.1,40);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:39.9,scaleX:1,scaleY:1,rotation:-0.8,y:66},4).to({regX:9,regY:40,scaleX:1,scaleY:1,rotation:159.4,x:156},8).to({regX:9.1,regY:39.9,scaleX:1,scaleY:1,rotation:36.3,x:156.1,y:66.1},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(58,0,257.6,278.8);


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


(lib.blank_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.blank_gr("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(32.6,17,1,1,0,0,0,32.5,17);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.blank_1, new cjs.Rectangle(0.1,0,65,34), null);


(lib.Race = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A/FIeIAAw7MA+LAAAIAAQ7g");
	mask.setTransform(-5,33.5);

	// Layer 2
	this.instance = new lib.Wave1();
	this.instance.parent = this;
	this.instance.setTransform(-8,30.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-12,y:11.3},17).to({x:-8,y:30.2},14).to({x:6.8,y:45.8},14).to({x:-11.5,y:12.2},14).to({x:-8,y:30.2},10).wait(1));

	// Layer 3
	this.instance_1 = new lib.Wave2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1.3,64.9);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-2.7,y:51.7},13).to({x:15.7,y:84.5},25).to({x:9.3,y:76.1},11).to({x:6.9,y:73.3},12).to({x:1.3,y:64.9},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-204,-4.7,398.1,92.5);


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
		var bgm = createjs.Sound.play('bgmInf',{loop:-1});
		//var vo = createjs.Sound.play('VO');
		
		//volume vars -----------------------------------------
		var mute= false;
		bgm.volume = 0.5;
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
				bgm.volume += 0.5;
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
		
		 window.open ("intro_Scene3.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("intro_Scene1.html","_self");
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


(lib.InfinSubjLessonIntro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Title
	this.instance = new lib.InfinitivecanhaveaSubject();
	this.instance.parent = this;
	this.instance.setTransform(211.6,70.6,1.39,1.39,0,0,0,-8.2,1.6);

	this.instance_1 = new lib.Symbol2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(221.7,73.7,1,1,0,0,0,262.6,54.1);
	this.instance_1._off = true;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKAKQgEgEABgGQgBgFAEgEQAFgFAFAAQAGAAAEAFQAFAEgBAFQABAGgFAEQgEAFgGgBQgFABgFgFg");
	this.shape.setTransform(114.9,83.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgoAyQgRgOgBgaQABgeAPgVQAQgWAaAAQATAAAMAGQAPAJAAAQQAAAMgNAKQgGAEgTAIIgrAVQAGAKAKAFQAKAFAMgBQAHAAALgDQAPgDADgHQAEgGAFAAQAEAAAEAEQACACAAAEQAAAOgUAJQgTAIgQAAQgaAAgRgOgAgXgfQgKALgFAWIAkgRQAVgKAJgHQgLgKgRAAQgOAAgJALg");
	this.shape_1.setTransform(105.4,77.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AghAzQgQgPAAgZQAAgWAPgaQARgcAWAAQALAAAPAFQASAHAAAKQAAAFgEADQgDADgEAAQgDAAgCgBIgGgFQgGgFgQAAQgLAAgMAVQgLAUAAANQAAAQALAJQAKAIAPAAQAHAAAIgEIANgHIAFgCQAEAAAEAEQADADAAAEQgBAJgRAIQgQAHgKAAQgYAAgQgPg");
	this.shape_2.setTransform(92.5,77.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAdA5IgEgaIgBgZIAAgKIAAgMQAAgZgJAAQgNAAgLAQQgLAOgGAVIgBALIgBALIABALIABALQAAAFgDADQgEADgFAAQgFAAgDgDQgDgDAAgFIgBgLIgBgLIACggIACghIgBgMIAAgLQAAgFADgDQAEgDAEAAQALAAABAPIABAOQATgbAUAAQATAAAHARQAFALABAWIAAALIAAAKQAAAKACAQQADAPAAAJQAAAGgEADQgDADgFAAQgKAAgBgLg");
	this.shape_3.setTransform(80.3,77.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgoAyQgSgOAAgaQAAgeAQgVQAPgWAbAAQATAAAMAGQAPAJAAAQQAAAMgNAKQgGAEgTAIIgrAVQAGAKAKAFQAKAFALgBQAIAAALgDQAOgDAEgHQAFgGAEAAQAEAAAEAEQACACAAAEQABAOgWAJQgSAIgRAAQgZAAgRgOgAgYgfQgJALgEAWIAkgRQATgKAKgHQgLgKgRAAQgOAAgKALg");
	this.shape_4.setTransform(67.4,77.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgHBSQgDgDAAgEIAAgNIABgOIgDhDIgagCQgKgCAAgKQAAgFADgEQADgDAFAAIAZACIgBgQIAAgOQAAgGADgCQADgDAFAAQAKAAACAQIAAALIAAAGIAAAIIAQgCQANAAADABQAHADAAAIQAAAGgDADQgDADgFAAIgGAAIgGAAIgQACIADBDIAAAGIAAAGQAAAagMAAQgEgBgEgDg");
	this.shape_5.setTransform(54.9,75.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAdA5IgEgaIgBgZIAAgKIAAgMQAAgZgJAAQgNAAgLAQQgLAOgGAVIgBALIgBALIABALIABALQAAAFgDADQgEADgFAAQgFAAgDgDQgDgDAAgFIgBgLIgBgLIACggIACghIgBgMIAAgLQAAgFADgDQAEgDAEAAQALAAABAPIABAOQATgbAUAAQATAAAHARQAFALABAWIAAALIAAAKQAAAKACAQQADAPAAAJQAAAGgEADQgDADgFAAQgKAAgBgLg");
	this.shape_6.setTransform(43.3,77.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgoAyQgRgOgBgaQABgeAPgVQAQgWAaAAQATAAAMAGQAPAJAAAQQAAAMgNAKQgGAEgTAIIgrAVQAGAKAKAFQAKAFAMgBQAIAAAKgDQAPgDADgHQAEgGAFAAQAEAAAEAEQACACAAAEQAAAOgUAJQgSAIgRAAQgaAAgRgOgAgYgfQgJALgFAWIAkgRQAUgKAKgHQgLgKgRAAQgOAAgKALg");
	this.shape_7.setTransform(30.4,77.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AggBBQgSgGAAgMQAAgEAEgEQADgDAFgBQADABAHAFQACACAKACIANACQAJAAAHgDQAMgDAAgHQgBgQgWgGIgLgDQgQgDgGgFQgKgFAAgOQAAgYAYgKQAGgDAPgFIAWgHQAFgDAGAAQAEAAAEAEQADADAAAGIABAKIACAKQAAAEgEAEQgCAEgGgBQgGABgDgFQgCgDAAgKIgbAIQgTAIABALIAGACQAaAEAOAJQASALAAAYQAAATgQAJQgOAJgUAAQgPAAgOgGg");
	this.shape_8.setTransform(17.4,77.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AggBBQgSgGAAgMQAAgEADgEQAEgDAFgBQAEABAFAFQADACAKACIANACQAJAAAIgDQALgDgBgHQABgQgXgGIgLgDQgPgDgHgFQgJgFAAgOQAAgYAWgKQAIgDAOgFIAWgHQAFgDAFAAQAGAAADAEQADADAAAGIACAKIABAKQAAAEgDAEQgEAEgEgBQgHABgCgFQgCgDgCgKIgbAIQgSAIAAALIAHACQAaAEAOAJQATALAAAYQAAATgRAJQgOAJgUAAQgPAAgOgGg");
	this.shape_9.setTransform(-1.4,77.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgLBVQgDgEAAgFIAAgUIgBgWIABgbIACgbQAAgFADgDQADgDAFAAQAEAAADADQAEADAAAFIgCAbIgBAbIABAWIAAAUQAAAFgDAEQgDADgEAAQgGAAgDgDgAgHhAQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_10.setTransform(-10.1,74.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAgBZQgDgKgCgSQgCgRAAgLIAAgJIAAgKQAAgUgLAAQgOAAgLAMQgGAHgLATQAAAtgDAIQgEAIgHgBQgEAAgEgCQgEgEAAgEIABgGIACgRIAAgSIAAhUIABgUIgBgLQgBgGAAgGQAAgFADgDQAEgCAFAAQAJgBACAKQACAMAAAJIgBAaIgBAaIAAAJQAKgMALgHQAKgGAMAAQAUAAAHANQAFAIABAUIABAXIACAYIAEAZIABADQAAAFgEADQgDAEgFAAQgJgBgCgIg");
	this.shape_11.setTransform(-20.5,74.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgHBSQgDgDAAgEIAAgNIABgOIgDhDIgagCQgKgCAAgKQAAgFADgEQADgDAFAAIAZACIgBgQIAAgOQAAgGADgCQADgDAFAAQAKAAACAQIAAALIAAAGIAAAIIAQgCQANAAADABQAHADAAAIQAAAGgDADQgDADgFAAIgGAAIgGAAIgQACIADBDIAAAGIAAAGQAAAagMAAQgEgBgEgDg");
	this.shape_12.setTransform(-33.3,75.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgTBkQgDgDAAgFIAAgCQADgPAAgSIgBggIAAghIgSABQgMAAAAgMQAAgLAVgBIALAAIACgSQADgaAKgMQALgPAaAAQARAAAAALQAAALgQAAQgcAAgDAoIgBAHIAagBQATAAAAALQAAAJgKACIgJAAQgFAAgWACIgBAZIABAWIAAAWQAAAWgCANQgBAJgJAAQgFAAgEgDg");
	this.shape_13.setTransform(451.6,39.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgiAyQgQgRgBgbQgBgZAOgUQARgYAcAAQAXAAANAVQAJASAAAYQgBAZgNASQgPAVgYAAQgTAAgOgOgAgUgXQgIANAAAQQAAARAJAKQAIAHAKAAQAMAAAIgIQAKgKABgRQACgsgaAAIgBAAQgQAAgJAQg");
	this.shape_14.setTransform(439.3,42.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgHBSQgDgDAAgEIAAgOIABgNIgDhDIgagCQgKgBAAgLQAAgFADgEQADgDAFAAIAZACIgBgQIAAgOQAAgFADgDQADgDAFAAQAKgBACASIAAAKIAAAGIAAAIIAQgCQANAAADABQAHADAAAIQAAAGgDADQgDADgFAAIgGAAIgGAAIgQACIADBEIAAAFIAAAGQAAAagMAAQgEAAgEgEg");
	this.shape_15.setTransform(420.3,40.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AghA0QgQgQAAgZQAAgWAPgaQARgcAVAAQAMAAAPAFQARAHABAKQAAAFgDADQgDAEgFgBQgEAAgCgBIgEgEQgIgGgQAAQgKAAgMAVQgLAUAAANQAAAPALAKQAKAIAOAAQAHAAAJgEIANgHIAFgCQAEAAAEAEQACADAAAFQAAAIgSAIQgPAHgLAAQgXAAgQgOg");
	this.shape_16.setTransform(408.6,42.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgoAyQgRgOgBgaQABgeAPgVQAPgWAbAAQATAAAMAGQAPAJAAAQQAAAMgNAKQgGAEgTAIIgsAVQAHAKAKAFQAJAFANAAQAHgBAMgDQAOgDAEgHQADgGAFAAQAEAAAEAEQACACABAFQgBANgUAJQgTAIgQAAQgaAAgRgOgAgXgfQgKALgFAVIAkgQQAVgKAJgIQgKgJgSAAQgOAAgJALg");
	this.shape_17.setTransform(396,42.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AglBUIgBgGQAAgEADgEQAEgDAEAAQAIAAAHAPIAHAMQAEAFAFAAQAFAAAEgHIADgMQAAgOgDg4IgFhAQAAgGAEgEQADgFAFAAQAEAAAEADQAEADABADIADBDIAEBIQgBAQgJANQgLAPgPAAQgYAAgRgngAAHhiQgDgEAAgGQAAgGADgEQAEgEAGAAQAGAAAEAEQAEAEAAAGQAAAGgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_18.setTransform(383.2,42.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgjBYQgEAFgFAAQgFAAgDgDQgDgDAAgFIABgJIAAgJIgBglIAAgkIAAggIAAghQAAgHACgGQAEgHAHAAQAJAAAAAKIgBAFIAAAFIgBAaIAAAeQALgHAIgEQAKgDAHAAQAZAAAQATQAOARAAAbQABAagSATQgRATgYAAQgTAAgOgHgAgSgFIgRALIAAAUIAAASIAAAUIAQAGQAIACAJAAQAPAAAMgMQALgLgBgSQABgSgKgLQgJgMgQAAQgIAAgLAFg");
	this.shape_19.setTransform(372.7,39);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAaA4QgPAIgSAAQgPAAgKgHQgLgIgCgOQgFgfAAgXQAAgQAEgVQABgKAKAAQAFAAADADQAEADAAAFIgCASIgCASIABAgQACAOACAIIAIAEIAHABQAPAAARgFIAAgYIAAgWQAAgZACgTQACgKAKAAQAFAAADADQAEADgBAFIgCAsIAAAZIAAAZIABAIIAAAIQAAAFgDADQgEADgEAAQgKAAgCgLg");
	this.shape_20.setTransform(359.1,42.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AggBCQgSgHAAgMQAAgEAEgEQADgDAFgBQAEABAGAFQACADAKABIANACQAJAAAIgDQAKgDABgIQAAgPgXgGIgLgDQgQgDgGgFQgKgFABgOQgBgYAXgKQAIgDAOgEIAWgIQAFgDAFAAQAFAAAEAEQADADAAAGIACAKIABAJQAAAFgEAEQgDAEgEgBQgHABgCgFQgDgDgBgKIgbAIQgRAIgBALIAHACQAaAEANAJQAUALgBAXQAAAUgQAJQgOAJgUgBQgPAAgOgEg");
	this.shape_21.setTransform(346.7,41.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgoAyQgRgOgBgaQABgeAPgVQAPgWAbAAQATAAAMAGQAPAJAAAQQAAAMgNAKQgGAEgTAIIgsAVQAHAKAKAFQAJAFANAAQAHgBAMgDQAOgDAEgHQADgGAFAAQAEAAAEAEQACACAAAFQAAANgUAJQgTAIgQAAQgaAAgRgOgAgXgfQgKALgFAVIAkgQQAVgKAJgIQgKgJgSAAQgOAAgJALg");
	this.shape_22.setTransform(327.6,42.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAgBZQgDgKgCgSQgCgRAAgLIAAgJIAAgKQAAgUgLgBQgOABgLAMQgGAHgLATQAAAtgDAIQgEAIgHgBQgEAAgEgCQgEgEAAgEIABgGIACgRIAAgSIAAhUIABgUIgBgLQgBgFAAgHQAAgEADgEQAEgDAFAAQAJAAACAKQACAMAAAJIgBAaIgBAZIAAAKQAKgMALgHQAKgGAMAAQAUAAAHANQAFAIABAUIABAXIACAYIAEAZIABADQAAAFgEADQgDAEgFAAQgJgBgCgIg");
	this.shape_23.setTransform(314.1,39);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgHBSQgDgDAAgEIAAgOIABgNIgDhDIgagCQgKgBAAgLQAAgFADgEQADgDAFAAIAZACIgBgQIAAgOQAAgFADgDQADgDAFAAQAKgBACASIAAAKIAAAGIAAAIIAQgCQANAAADABQAHADAAAIQAAAGgDADQgDADgFAAIgGAAIgGAAIgQACIADBEIAAAFIAAAGQAAAagMAAQgEAAgEgEg");
	this.shape_24.setTransform(301.3,40.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AggBCQgSgHAAgMQAAgEADgEQAEgDAFgBQADABAGAFQADADAKABIANACQAJAAAHgDQALgDAAgIQAAgPgWgGIgLgDQgQgDgGgFQgKgFAAgOQAAgYAYgKQAHgDAOgEIAWgIQAFgDAGAAQAEAAAEAEQADADAAAGIABAKIACAJQAAAFgDAEQgEAEgFgBQgGABgDgFQgBgDgBgKIgbAIQgTAIABALIAGACQAaAEAOAJQASALABAXQgBAUgQAJQgOAJgUgBQgPAAgOgEg");
	this.shape_25.setTransform(282.4,41.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAlA8QgFgEgCgEIgUAJQgJADgEAAQgcAAgMgQQgMgOAAgeQAAgcATgUQAUgUAaAAQAKAAANAFQAQAHAAAJQAAADgDADIgBAOIgBAZQAAAPACAJQABAFAGAPIADAHIAAACQAAAEgDADQgDADgEAAQgDAAgGgFgAgTgcQgNAPAAASQAAATAHAKQAGAJAOABQAKgBAIgEQAEgCAIgHQgEgeAAgPIABgLIACgNIgIgDIgFgBQgRAAgNAPg");
	this.shape_26.setTransform(270.7,42.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgpBQQgQgRAAgZQAAggAQgSQARgSAZAAQAOAAAHAEIALAIQACgyACgRQACgKAIAAQAMAAAAALQgBARgEA3IgBAiQAAAnADAUIAAACQAAAFgDADQgEADgEAAQgHAAgDgKQgJAGgJADQgJADgJAAQgYAAgQgQgAgbACQgJAMAAAXQAAAPAKALQALALAOAAQAJAAAHgEIANgJIADgEIAAgUIAAgOIAAgOQgEgJgIgEQgHgFgLAAQgSAAgKALg");
	this.shape_27.setTransform(250.3,38.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgoAyQgRgOgBgaQABgeAPgVQAQgWAaAAQATAAAMAGQAPAJAAAQQAAAMgNAKQgGAEgTAIIgrAVQAGAKAKAFQAKAFALAAQAJgBAKgDQAPgDADgHQAEgGAFAAQAEAAAEAEQACACAAAFQAAANgUAJQgSAIgSAAQgZAAgRgOgAgYgfQgJALgFAVIAkgQQAUgKAKgIQgLgJgRAAQgOAAgKALg");
	this.shape_28.setTransform(236.9,42.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AggBCQgSgHAAgMQAAgEAEgEQADgDAFgBQADABAHAFQACADAKABIANACQAJAAAHgDQAMgDAAgIQgBgPgWgGIgLgDQgQgDgGgFQgKgFAAgOQAAgYAYgKQAGgDAPgEIAWgIQAFgDAGAAQAEAAAEAEQADADAAAGIABAKIACAJQAAAFgEAEQgCAEgGgBQgGABgDgFQgCgDAAgKIgbAIQgTAIABALIAGACQAaAEAOAJQASALAAAXQAAAUgQAJQgOAJgUgBQgPAAgOgEg");
	this.shape_29.setTransform(224,41.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAaA4QgPAIgSAAQgPAAgKgHQgLgIgCgOQgFgfAAgXQAAgQAEgVQABgKAKAAQAFAAADADQAEADAAAFIgCASIgCASIABAgQACAOACAIIAIAEIAHABQAPAAARgFIAAgYIAAgWQAAgZACgTQACgKAKAAQAFAAADADQAEADgBAFIgCAsIAAAZIAAAZIABAIIAAAIQAAAFgDADQgEADgEAAQgKAAgCgLg");
	this.shape_30.setTransform(212.3,42.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgoAyQgSgOAAgaQAAgeAPgVQAQgWAbAAQATAAAMAGQAPAJAAAQQAAAMgNAKQgGAEgTAIIgrAVQAGAKAKAFQAKAFALAAQAJgBAKgDQAOgDAEgHQAFgGAEAAQAEAAAEAEQACACAAAFQABANgWAJQgSAIgRAAQgZAAgRgOgAgYgfQgJALgEAVIAkgQQATgKAKgIQgLgJgRAAQgOAAgKALg");
	this.shape_31.setTransform(192.5,42.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgNA2IgRgwIgVg1IgBgEQAAgFAEgEQADgDAFAAQAHAAADAHIAdBRQAIgTAOgjIAKgaQAEgIAGABQAFgBADAEQAEAEAAAEQAAAFgTAtIgYA3QAAAKgKAAQgJAAgEgKg");
	this.shape_32.setTransform(180,42.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgLBVQgDgEAAgFIAAgUIgBgWIABgbIACgbQAAgFADgDQADgDAFgBQAEABADADQAEADAAAFIgCAbIgBAbIABAWIAAAUQAAAFgDAEQgDADgEAAQgGAAgDgDgAgHhAQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_33.setTransform(170.9,39.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgHBSQgDgDAAgEIAAgOIABgNIgDhDIgagCQgKgBAAgLQAAgFADgEQADgDAFAAIAZACIgBgQIAAgOQAAgFADgDQADgDAFAAQAKgBACASIAAAKIAAAGIAAAIIAQgCQANAAADABQAHADAAAIQAAAGgDADQgDADgFAAIgGAAIgGAAIgQACIADBEIAAAFIAAAGQAAAagMAAQgEAAgEgEg");
	this.shape_34.setTransform(161.6,40.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgLBVQgDgEAAgFIAAgUIgBgWIABgbIACgbQAAgFADgDQADgDAFgBQAEABADADQAEADAAAFIgCAbIgBAbIABAWIAAAUQAAAFgDAEQgDADgEAAQgGAAgDgDgAgHhAQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_35.setTransform(152.8,39.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAdA5IgEgaIgBgZIAAgKIAAgMQAAgZgJAAQgNAAgLAQQgLAOgGAVIgBALIgBALIABALIABALQAAAFgDADQgEADgFAAQgFAAgDgDQgDgDAAgFIgBgLIgBgLIACggIACghIgBgMIAAgLQAAgFADgDQAEgDAEAAQALAAABAPIABAOQATgbAUAAQATAAAHARQAFALABAWIAAALIAAAKQAAAKACAQQADAPAAAJQAAAGgEADQgDADgFAAQgKAAgBgLg");
	this.shape_36.setTransform(143.2,42);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgLBVQgDgEAAgFIAAgUIgBgWIABgbIACgbQAAgFADgDQADgDAFgBQAEABADADQAEADAAAFIgCAbIgBAbIABAWIAAAUQAAAFgDAEQgDADgEAAQgGAAgDgDgAgHhAQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_37.setTransform(133.5,39.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgTBkQgDgDAAgFIAAgCQADgPAAgSIgBggIAAghIgSABQgMAAAAgMQAAgLAVgBIALAAIACgSQADgaAKgMQALgPAaAAQARAAAAALQAAALgQAAQgcAAgDAoIgBAHIAagBQATAAAAALQAAAJgKACIgJAAQgFAAgWACIgBAZIABAWIAAAWQAAAWgCANQgBAJgJAAQgFAAgEgDg");
	this.shape_38.setTransform(123.6,39.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAdA5IgEgaIgBgZIAAgKIAAgMQAAgZgJAAQgNAAgLAQQgLAOgGAVIgBALIgBALIABALIABALQAAAFgDADQgEADgFAAQgFAAgDgDQgDgDAAgFIgBgLIgBgLIACggIACghIgBgMIAAgLQAAgFADgDQAEgDAEAAQALAAABAPIABAOQATgbAUAAQATAAAHARQAFALABAWIAAALIAAAKQAAAKACAQQADAPAAAJQAAAGgEADQgDADgFAAQgKAAgBgLg");
	this.shape_39.setTransform(111.7,42);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgLBVQgDgEAAgFIAAgUIgBgWIABgbIACgbQAAgFADgDQADgDAFgBQAEABADADQAEADAAAFIgCAbIgBAbIABAWIAAAUQAAAFgDAEQgDADgEAAQgGAAgDgDgAgHhAQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_40.setTransform(102,39.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAdA5IgEgaIgBgZIAAgKIAAgMQAAgZgJAAQgNAAgLAQQgLAOgGAVIgBALIgBALIABALIABALQAAAFgDADQgEADgFAAQgFAAgDgDQgDgDAAgFIgBgLIgBgLIACggIACghIgBgMIAAgLQAAgFADgDQAEgDAEAAQALAAABAPIABAOQATgbAUAAQATAAAHARQAFALABAWIAAALIAAAKQAAAKACAQQADAPAAAJQAAAGgEADQgDADgFAAQgKAAgBgLg");
	this.shape_41.setTransform(85.3,42);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAlA8QgFgEgCgEIgUAJQgJADgEAAQgcAAgMgQQgMgOAAgeQAAgcATgUQAUgUAaAAQAKAAANAFQAQAHAAAJQAAADgDADIgBAOIgBAZQAAAPACAJQABAFAGAPIADAHIAAACQAAAEgDADQgDADgEAAQgDAAgGgFgAgTgcQgNAPAAASQAAATAHAKQAGAJAOABQAKgBAIgEQAEgCAIgHQgEgeAAgPIABgLIACgNIgIgDIgFgBQgRAAgNAPg");
	this.shape_42.setTransform(72.6,42.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AggBCQgSgHAAgMQAAgEADgEQAEgDAFgBQAEABAFAFQADADAKABIANACQAJAAAIgDQALgDgBgIQABgPgXgGIgLgDQgPgDgHgFQgJgFAAgOQAAgYAWgKQAIgDAOgEIAWgIQAFgDAGAAQAFAAADAEQADADAAAGIABAKIACAJQAAAFgDAEQgDAEgFgBQgHABgCgFQgCgDgBgKIgbAIQgTAIAAALIAHACQAaAEAOAJQASALABAXQAAAUgRAJQgOAJgUgBQgPAAgOgEg");
	this.shape_43.setTransform(53.1,41.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgLBVQgDgEAAgFIAAgUIgBgWIABgbIACgbQAAgFADgDQADgDAFgBQAEABADADQAEADAAAFIgCAbIgBAbIABAWIAAAUQAAAFgDAEQgDADgEAAQgGAAgDgDgAgHhAQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_44.setTransform(44.4,39.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#CC0099").s().p("AAdA5IgEgaIgBgZIAAgKIAAgMQAAgZgJAAQgNAAgLAQQgLAOgGAVIgBALIgBALIABALIABALQAAAFgDADQgEADgFAAQgFAAgDgDQgDgDAAgFIgBgLIgBgLIACggIACghIgBgMIAAgLQAAgFADgDQAEgDAEAAQALAAABAPIABAOQATgbAUAAQATAAAHARQAFALABAWIAAALIAAAKQAAAKACAQQADAPAAAJQAAAGgEADQgDADgFAAQgKAAgBgLg");
	this.shape_45.setTransform(27.7,42);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#CC0099").s().p("AAaA4QgPAIgSAAQgPAAgKgHQgLgIgCgOQgFgfAAgXQAAgQAEgVQABgKAKAAQAFAAADADQAEADAAAFIgCASIgCASIABAgQACAOACAIIAIAEIAHABQAPAAARgFIAAgYIAAgWQAAgZACgTQACgKAKAAQAFAAADADQAEADgBAFIgCAsIAAAZIAAAZIABAIIAAAIQAAAFgDADQgEADgEAAQgKAAgCgLg");
	this.shape_46.setTransform(15,42.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#CC0099").s().p("AgsA2IAAhRIAAgMIAAgMQAAgMAKAAQAMAAAAAUQAWgWAbAAQAJAAAFAHQAFAIAAAOIAAAIQgBAPgMAAQgJAAgBgMIAAgIIAAgKQgTACgJAJQgLAHgHAQIAAA/QAAAMgLAAQgKAAAAgMg");
	this.shape_47.setTransform(3.3,42.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#CC0099").s().p("AgiAyQgQgRgBgbQgBgZAOgUQARgYAcAAQAYAAAMAVQAJASAAAYQgBAZgNASQgPAVgYAAQgTAAgOgOgAgUgXQgIANAAAQQAAARAJAKQAIAHAKAAQAMAAAIgIQAKgKACgRQABgsgaAAIgBAAQgQAAgJAQg");
	this.shape_48.setTransform(-16.5,42.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#CC0099").s().p("AgHBWQgEgDAAgGIAAgFIABgFIgBgRIgBgSQAAgQgCgeIgEgvIgKAAQgaAAgOgDQgKgDAAgJQAAgFADgEQADgEAGABIATACIATABIAVAAIAUAAIAbABIAbABQAFAAAEAEQADADAAAFQAAAFgDAEQgEADgFAAIgbgBIgbgBIgIAAQAAAQADAkQADAhAAATIABAMIABANQgBAIgCAFQgDAIgHAAQgDAAgEgDg");
	this.shape_49.setTransform(-29.7,39.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},49).to({state:[{t:this.instance_1}]},35).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},11).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(48));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({_off:false},0).wait(35).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(11).to({startPosition:0},0).wait(1).to({regX:258.9,regY:37.4,x:218,y:57,alpha:0.75},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(49));

	// diagram
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAfBaQgFgNgNgPIgTgcIgWAOIgBAkQAAAFgDADQgEADgFABQgMAAABgQIABgdIABgeIABgnIAAgpIAAgMIgBgMQAAgGADgDQADgDAGgBQAFABADADQAEADAAAGIAAAMIABANIgBAmIAAAnQAPgMAOgOIAagaQAEgEAEAAQAEAAAFADQADAEAAAFQAAAEgDAEQgPARgVASIAaAjQASAYAAAIQAAAFgEADQgEAEgFAAQgGgBgEgGg");
	this.shape_50.setTransform(342.2,234.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgsA2IAAhRIAAgMIAAgMQAAgMAKAAQAMAAAAAUQAWgWAbAAQAJAAAFAHQAEAIABAOIAAAIQgBAPgMAAQgJAAgBgMIAAgIIAAgKQgTACgKAJQgKAHgHAQIAAA/QAAAMgLAAQgKAAAAgMg");
	this.shape_51.setTransform(329.6,238.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgiAyQgQgRgBgbQgBgZAOgUQARgYAdAAQAWAAANAVQAJASAAAYQgBAZgNASQgPAVgXAAQgUAAgOgOgAgUgXQgIANABAQQgBARAJAKQAIAHALAAQALAAAIgIQAKgKABgRQACgsgaAAIgBAAQgQAAgJAQg");
	this.shape_52.setTransform(317,238.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAHAiIgEgbIgDgaIgKAWIgSAwQgBAFgDACQgEAHgHAAQgJAAgJgjQgEgSgEgeIgDgSIgBgRQAAgFADgDQAEgEAEAAQAJAAADAKIACARIACARIAHA0QANgjAOgvQADgNAJAAQAJAAAEAOIAHAqQAFAdAEARIAIggIAPg/QACgHAIAAQAFAAAEADQADADAAAFIgBAFQgJAngPAvQgDAKgHAMQgFAGgHAAQgMAAgIggg");
	this.shape_53.setTransform(302.8,238.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgrBDQgFgFAFgKQgKgBgJgFQgJgEgHgHQgRgRAAgWQABgXASgSQAWgWAZgCQAZgCASATQAKAKACAIIACAOQAkgiANgLQAJgGAGAGQAIAIgIAIQgMALgqAlIgZAWQgbAcgMAQIgCACQgDADgEAAQgFAAgDgDgAgegxQgPABgQARQgLAKAAAQQAAAOAKAKQAHAHAIADIAQACIAFAAIANgPIALgJIAIgJQAEgKgCgIQgCgJgGgHQgNgNgOAAIgDAAg");
	this.shape_54.setTransform(382.6,299.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AhEAtQgIgHAJgJIA6g5IAIgHIAIgJQAIgIAHAHQAJAIgOAOQAfABATATQAHAGgBAIQgDAJgKAKIgGAGQgKAJgIgIQgHgHAIgIIAGgGIAGgHQgOgLgOgCQgNgCgPAGIgtAtQgEAEgEAAQgEAAgEgEg");
	this.shape_55.setTransform(370.4,287.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgPBCQgBgBgBgIIABgLIgVgIQgIgEgEgEQgTgTACgTQABgTAWgVQAUgUAbgBQAcAAATATQAHAHAGANQAGAQgGAHQgCACgEAAIgLAIIgTASQgLAKgEAIQgDAEgHAPIgCAHIgBACQgCADgFAAQgEAAgEgEgAAFguQgTABgOAOQgNAOgCALQgCALAKAKQAHAHAJADQAFACAJAAQATgYALgKIAIgIIALgHIgEgIIgCgEQgMgMgRAAIgEAAg");
	this.shape_56.setTransform(362.1,282.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgJBiQgGgFAEgJIAPgWQAKgOAIgHIAHgGIAHgIQAPgPgHgHQgLgKgSABQgJABgUAFQggAggIADQgIADgFgFQgDgEAAgFQAAgEADgEIAFgCIAMgMIANgLIA8g9IAOgNIAIgJIAGgIQAEgEAFABQAEAAAEADQAHAIgGAIIgOAPIgSARIgTASIgHAIQAQgCAMADQAMADAJAJQAOANgEAOQgCAKgPAPIgPAQIgQATIgOAVIgCACQgDADgEAAQgFAAgDgEg");
	this.shape_57.setTransform(352.3,270.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AggBBQgSgGAAgMQAAgFAEgDQADgDAFgBQADABAHAFQACACAKACIANACQAJAAAHgDQAMgDAAgHQgBgQgWgGIgLgDQgQgDgGgFQgKgFAAgNQAAgZAYgKQAGgEAPgEIAWgHQAFgCAGgBQAEABAEADQADADAAAGIABAKIACAKQAAAEgEAEQgCADgGAAQgGAAgDgEQgCgDAAgKIgbAIQgTAIABALIAGACQAaAFAOAIQASALAAAYQAAATgQAJQgOAJgUAAQgPAAgOgGg");
	this.shape_58.setTransform(185.7,237.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgLBVQgDgEAAgEIAAgVIgBgWIABgbIACgbQAAgFADgDQADgEAFABQAEgBADAEQAEADAAAFIgCAbIgBAbIABAWIAAAVQAAAEgDAEQgDADgEAAQgGAAgDgDgAgHhAQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_59.setTransform(177,235.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#CC0099").s().p("AAdA5IgEgaIgBgZIAAgKIAAgMQAAgZgJAAQgNAAgLAQQgLAOgGAVIgBALIgBALIABALIABALQAAAFgDADQgEADgFAAQgFAAgDgDQgDgDAAgFIgBgLIgBgLIACggIACghIgBgMIAAgLQAAgFADgDQAEgDAEAAQALAAABAPIABAOQATgbAUAAQATAAAHARQAFALABAWIAAALIAAAKQAAAKACAQQADAPAAAJQAAAGgEADQgDADgFAAQgKAAgBgLg");
	this.shape_60.setTransform(79,184.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#CC0099").s().p("AAaA4QgPAIgSAAQgPAAgKgHQgLgIgCgOQgFgfAAgXQAAgQAEgVQABgKAKAAQAFAAADADQAEADAAAFIgCASIgCASIABAgQACAOACAIIAIAEIAHABQAPAAARgFIAAgYIAAgWQAAgZACgTQACgKAKAAQAFAAADADQAEADgBAFIgCAsIAAAZIAAAZIABAIIAAAIQAAAFgDADQgEADgEAAQgKAAgCgLg");
	this.shape_61.setTransform(66.3,184.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#CC0099").s().p("AgtA2IAAhRIAAgMIABgMQAAgMAKAAQAMAAAAAUQAWgWAaAAQAKAAAFAHQAFAIgBAOIAAAIQAAAPgLAAQgLAAABgMIAAgIIgBgKQgSACgLAJQgKAHgHAQIAAA/QAAAMgMAAQgKAAAAgMg");
	this.shape_62.setTransform(54.6,184.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#CC0099").s().p("AgvAsQgOgOABgVQAAgVATgUQASgTAXgEQAdgGAUAVQARAQgHAYQgFASgRARQgTASgWAEIgKABQgTAAgOgOgAABggQgOAEgMAMQgMAMAAAMQAAALAHAIQAJAIAMABQANAAANgMQAhgegTgSQgIgJgNAAIgJABg");
	this.shape_63.setTransform(20.6,174.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#CC0099").s().p("AhTBXQgEgDgBgFQAAgFAEgDIAEgEIAEgDIAMgNIALgNQANgMATgXQAVgYAJgKIgIgIQgRgSgIgNQgEgJAGgGQADgEAGAAQAFAAADAEIALAPIAMAOIAQAPIAPAPIASAUIASATQADADAAAFQAAAEgDAEQgEAEgEAAQgGAAgDgDIgSgUIgSgTIgGgGIgiAmQgVAagOAOIgIAJIgJAJQgFAGgGACIgGABQgEAAgCgDg");
	this.shape_64.setTransform(15.5,160.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(3,1,1).p("A+MniIG1ABIG0AAAt9BZIAAEVAy1BZIE4AAITeAAIKGAAITlAAAt9kEIAAFdA3XjHIkbEaA+eBZILpAAA3XjHIEiEgAAbjrIFGFEA3XnhIAAEaAPnBZILPLQEgjLgMoIE/E/");
	this.shape_65.setTransform(218,242.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(3,1,1).p("A+MniIG1ABIG0AAAt9BZIAAEVAt9kEIAAFdITeAAIKGAAILPLQAy1BZIE4AAA3XjHIkbEaA3XjHIEiEgA+eBZILpAAAAbjrIFGFEA3XnhIAAEaAPnBZITlAAEgjLgMoIE/E/");
	this.shape_66.setTransform(218,242.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50}]},96).to({state:[{t:this.shape_66},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50}]},6).wait(48));

	// White
	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(255,255,255,0.812)").s().p("EgsbAPZIAA+xMBY3AAAIAAexg");
	this.shape_67.setTransform(221.5,103.8);

	this.instance_2 = new lib.Symbol1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(221.5,50.7,1,1,0,0,0,284.4,48);
	this.instance_2._off = true;

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(255,255,255,0.812)").s().p("EgsbAZyMAAAgzjMBY3AAAMAAAAzjg");
	this.shape_68.setTransform(221.5,167.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_67}]}).to({state:[{t:this.instance_2}]},49).to({state:[{t:this.instance_2}]},36).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_68}]},6).wait(48));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(49).to({_off:false},0).wait(36).to({startPosition:0},0).wait(1).to({scaleY:1.24,y:62.4},0).wait(1).to({scaleY:1.49,y:74.1},0).wait(1).to({scaleY:1.73,y:85.8},0).wait(1).to({scaleY:1.98,y:97.5},0).wait(1).to({scaleY:2.22,y:109.2},0).wait(1).to({scaleY:2.46,y:120.9},0).wait(1).to({scaleY:2.71,y:132.6},0).wait(1).to({scaleY:2.95,y:144.3},0).wait(1).to({scaleY:3.19,y:156},0).wait(1).to({scaleY:3.44,y:167.7},0).to({_off:true},1).wait(54));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.9,5.3,606.8,230.6);


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
(lib.inf_Scene3_a2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene3:0,scene3_repeat:361});

	// timeline functions:
	this.frame_0 = function() {
		
	}
	this.frame_369 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(369).call(this.frame_369).wait(1));

	// content
	this.instance = new lib.InfinSubjLessonIntro();
	this.instance.parent = this;
	this.instance.setTransform(269.8,204,0.814,0.814,0,0,0,216.7,183.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(370));

	// Layer 1
	this.instance_1 = new lib.buffyrunanim();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-56.3,178.1,0.343,0.343,0,0,180,183,139.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:180.8,regY:125.3,x:-39.5,y:172.5},0).wait(1).to({x:-23.4,y:171.8},0).wait(1).to({x:-7.3,y:171},0).wait(1).to({x:8.8,y:170.2},0).wait(1).to({x:24.9,y:169.5},0).wait(1).to({x:40.9,y:168.7},0).wait(1).to({x:57,y:168},0).wait(1).to({x:73.2,y:167.2},0).wait(1).to({x:89.2,y:166.4},0).wait(1).to({x:105.3,y:165.7},0).wait(1).to({x:121.4,y:164.9},0).wait(1).to({x:137.5,y:164.1},0).wait(1).to({x:153.6,y:163.4},0).wait(1).to({x:169.7,y:162.6},0).wait(1).to({x:185.8,y:161.9},0).wait(1).to({x:201.9,y:161.1},0).wait(1).to({x:218,y:160.3},0).wait(1).to({x:234.1,y:159.6},0).wait(1).to({x:250.2,y:158.8},0).wait(1).to({x:266.3,y:158},0).wait(1).to({x:282.4,y:157.3},0).wait(1).to({x:298.5,y:156.5},0).wait(1).to({x:314.6,y:155.7},0).wait(1).to({x:330.6,y:155},0).wait(1).to({x:346.7,y:154.2},0).wait(1).to({x:362.8,y:153.5},0).wait(1).to({x:378.9,y:152.7},0).wait(1).to({x:395,y:151.9},0).wait(1).to({x:411.1,y:151.2},0).wait(1).to({x:427.2,y:150.4},0).wait(1).to({x:443.3,y:149.6},0).wait(1).to({x:459.4,y:148.9},0).wait(1).to({x:475.5,y:148.1},0).wait(1).to({x:491.6,y:147.4},0).wait(1).to({x:507.7,y:146.6},0).wait(1).to({x:523.7,y:145.8},0).wait(1).to({x:539.9,y:145.1},0).wait(1).to({x:556,y:144.3},0).to({_off:true},1).wait(331));

	// Layer 2
	this.instance_2 = new lib.buffyrunanim();
	this.instance_2.parent = this;
	this.instance_2.setTransform(600.8,145.1,0.343,0.343,0,0,0,186,139.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({_off:false},0).wait(1).to({regX:180.8,regY:125.3,x:585.9,y:141.1},0).wait(1).to({x:572.8,y:141.8},0).wait(1).to({x:559.7,y:142.6},0).wait(1).to({x:546.6,y:143.3},0).wait(1).to({x:533.5,y:144.1},0).wait(1).to({x:520.3,y:144.9},0).wait(1).to({x:507.2,y:145.6},0).wait(1).to({x:494.1,y:146.4},0).wait(1).to({x:481,y:147.1},0).wait(1).to({x:467.9,y:147.9},0).wait(1).to({x:454.8,y:148.7},0).wait(1).to({x:441.6,y:149.4},0).wait(1).to({x:428.5,y:150.2},0).wait(1).to({x:415.4,y:151},0).wait(1).to({x:402.3,y:151.7},0).wait(1).to({x:389.2,y:152.5},0).wait(1).to({x:376.1,y:153.2},0).wait(1).to({x:362.9,y:154},0).wait(1).to({x:349.8,y:154.8},0).wait(1).to({x:336.7,y:155.5},0).wait(1).to({x:323.6,y:156.3},0).wait(1).to({x:310.5,y:157},0).wait(1).to({x:297.4,y:157.8},0).wait(1).to({x:284.2,y:158.6},0).wait(1).to({x:271.1,y:159.3},0).wait(1).to({x:258,y:160.1},0).wait(1).to({x:244.9,y:160.9},0).wait(1).to({x:231.8,y:161.6},0).wait(1).to({x:218.7,y:162.4},0).wait(1).to({x:205.5,y:163.1},0).wait(1).to({x:192.4,y:163.9},0).wait(1).to({x:179.3,y:164.7},0).wait(1).to({x:166.2,y:165.4},0).wait(1).to({x:153.1,y:166.2},0).wait(1).to({x:140,y:166.9},0).wait(1).to({x:126.8,y:167.7},0).wait(1).to({x:113.7,y:168.5},0).wait(1).to({x:100.6,y:169.2},0).wait(1).to({x:87.5,y:170},0).wait(1).to({x:74.4,y:170.8},0).wait(1).to({x:61.3,y:171.5},0).wait(1).to({x:48.2,y:172.3},0).wait(1).to({x:35.1,y:173},0).wait(1).to({x:22,y:173.8},0).wait(1).to({x:8.8,y:174.6},0).wait(1).to({x:-4.3,y:175.3},0).wait(1).to({x:-17.4,y:176.1},0).wait(1).to({x:-30.5,y:176.8},0).wait(1).to({x:-43.6,y:177.6},0).wait(1).to({x:-56.8,y:178.4},0).wait(1).to({x:-69.9,y:179.1},0).wait(1).to({x:-83,y:179.9},0).wait(1).to({x:-96.1,y:180.6},0).to({_off:true},1).wait(277));

	// Layer 3
	this.instance_3 = new lib.buffyrunanim();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-56.3,178.1,0.343,0.343,0,0,180,184.5,139.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(93).to({_off:false},0).wait(1).to({regX:180.8,regY:125.3,x:-43.7,y:172.6},0).wait(1).to({x:-32.4,y:172},0).wait(1).to({x:-21,y:171.3},0).wait(1).to({x:-9.6,y:170.7},0).wait(1).to({x:1.8,y:170},0).wait(1).to({x:13.1,y:169.3},0).wait(1).to({x:24.5,y:168.7},0).wait(1).to({x:35.9,y:168},0).wait(1).to({x:47.3,y:167.4},0).wait(1).to({x:58.6,y:166.7},0).wait(1).to({x:70,y:166},0).wait(1).to({x:81.4,y:165.4},0).wait(1).to({x:92.8,y:164.7},0).wait(1).to({x:104.1,y:164},0).wait(1).to({x:115.5,y:163.4},0).wait(1).to({x:126.9,y:162.7},0).wait(1).to({x:138.2,y:162.1},0).wait(1).to({x:149.6,y:161.4},0).wait(1).to({x:161,y:160.7},0).wait(1).to({x:172.4,y:160.1},0).wait(1).to({x:183.7,y:159.4},0).wait(1).to({x:195.1,y:158.8},0).wait(1).to({x:206.5,y:158.1},0).wait(1).to({x:217.9,y:157.4},0).wait(1).to({x:229.2,y:156.8},0).wait(1).to({x:240.6,y:156.1},0).wait(1).to({x:252,y:155.5},0).wait(1).to({x:263.4,y:154.8},0).wait(1).to({x:274.7,y:154.1},0).wait(1).to({x:286.1,y:153.5},0).wait(1).to({x:297.5,y:152.8},0).wait(1).to({x:308.8,y:152.2},0).wait(1).to({x:320.2,y:151.5},0).wait(1).to({x:331.6,y:150.8},0).wait(1).to({x:343,y:150.2},0).wait(1).to({x:354.3,y:149.5},0).wait(1).to({x:365.7,y:148.9},0).wait(1).to({x:377.1,y:148.2},0).wait(1).to({x:388.5,y:147.5},0).wait(1).to({x:399.8,y:146.9},0).wait(1).to({x:411.2,y:146.2},0).wait(1).to({x:422.6,y:145.5},0).wait(1).to({x:434,y:144.9},0).wait(1).to({x:445.3,y:144.2},0).wait(1).to({x:456.7,y:143.6},0).wait(1).to({x:468.1,y:142.9},0).wait(1).to({x:479.4,y:142.2},0).wait(1).to({x:490.8,y:141.6},0).wait(1).to({x:502.2,y:140.9},0).wait(1).to({x:513.6,y:140.3},0).wait(1).to({x:524.9,y:139.6},0).wait(1).to({x:536.3,y:138.9},0).wait(1).to({x:547.7,y:138.3},0).wait(1).to({x:559.1,y:137.6},0).wait(1).to({x:570.4,y:137},0).wait(1).to({x:581.8,y:136.3},0).to({_off:true},1).wait(220));

	// Layer 4
	this.instance_4 = new lib.buffyrunanim();
	this.instance_4.parent = this;
	this.instance_4.setTransform(613.9,142.1,0.343,0.343,0,0,0,185.8,139.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(150).to({_off:false},0).wait(1).to({regX:180.8,regY:125.3,x:601.2,y:138.2},0).wait(1).to({x:590.3,y:139.2},0).wait(1).to({x:579.3,y:140.1},0).wait(1).to({x:568.4,y:141},0).wait(1).to({x:557.5,y:142},0).wait(1).to({x:546.5,y:142.9},0).wait(1).to({x:535.6,y:143.8},0).wait(1).to({x:524.6,y:144.8},0).wait(1).to({x:513.7,y:145.7},0).wait(1).to({x:502.8,y:146.6},0).wait(1).to({x:491.8,y:147.6},0).wait(1).to({x:480.9,y:148.5},0).wait(1).to({x:470,y:149.4},0).wait(1).to({x:459,y:150.4},0).wait(1).to({x:448.1,y:151.3},0).wait(1).to({x:437.1,y:152.2},0).wait(1).to({x:426.2,y:153.2},0).wait(1).to({x:415.3,y:154.1},0).wait(1).to({x:404.3,y:155.1},0).wait(1).to({x:393.4,y:156},0).wait(1).to({x:382.5,y:156.9},0).wait(1).to({x:371.5,y:157.9},0).wait(1).to({x:360.6,y:158.8},0).wait(1).to({x:349.7,y:159.7},0).wait(1).to({x:338.7,y:160.7},0).wait(1).to({x:327.8,y:161.6},0).wait(1).to({x:316.8,y:162.5},0).wait(1).to({x:305.9,y:163.5},0).wait(1).to({x:295,y:164.4},0).wait(1).to({x:284,y:165.3},0).wait(1).to({x:273.1,y:166.3},0).wait(1).to({x:262.1,y:167.2},0).wait(1).to({x:251.2,y:168.1},0).wait(1).to({x:240.3,y:169.1},0).wait(1).to({x:229.3,y:170},0).wait(1).to({x:218.4,y:170.9},0).wait(1).to({x:207.5,y:171.9},0).wait(1).to({x:196.5,y:172.8},0).wait(1).to({x:185.6,y:173.7},0).wait(1).to({x:174.6,y:174.7},0).wait(1).to({x:163.7,y:175.6},0).wait(1).to({x:152.8,y:176.5},0).wait(1).to({x:141.8,y:177.5},0).wait(1).to({x:130.9,y:178.4},0).wait(1).to({x:120,y:179.3},0).wait(1).to({x:109,y:180.3},0).wait(1).to({x:98.1,y:181.2},0).wait(1).to({x:87.1,y:182.1},0).wait(1).to({x:76.2,y:183.1},0).wait(1).to({x:65.3,y:184},0).wait(1).to({x:54.4,y:185},0).wait(1).to({x:43.4,y:185.9},0).wait(1).to({x:32.5,y:186.8},0).wait(1).to({x:21.6,y:187.8},0).wait(1).to({x:10.6,y:188.7},0).wait(1).to({x:-0.3,y:189.6},0).wait(1).to({x:-11.3,y:190.6},0).wait(1).to({x:-22.2,y:191.5},0).wait(1).to({x:-33.1,y:192.4},0).wait(1).to({x:-44.1,y:193.4},0).wait(1).to({x:-55,y:194.3},0).to({_off:true},1).wait(158));

	// Layer 5
	this.instance_5 = new lib.buffyrunanim();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-58.3,203.1,0.343,0.343,0,0,180,185.8,139.3);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(212).to({_off:false},0).wait(1).to({regX:180.8,regY:125.3,x:-43.1,y:196.9},0).wait(1).to({x:-29.6,y:195.6},0).wait(1).to({x:-16.1,y:194.2},0).wait(1).to({x:-2.6,y:192.8},0).wait(1).to({x:10.9,y:191.5},0).wait(1).to({x:24.4,y:190.1},0).wait(1).to({x:37.9,y:188.7},0).wait(1).to({x:51.4,y:187.4},0).wait(1).to({x:64.9,y:186},0).wait(1).to({x:78.4,y:184.6},0).wait(1).to({x:91.9,y:183.3},0).wait(1).to({x:105.4,y:181.9},0).wait(1).to({x:118.9,y:180.5},0).wait(1).to({x:132.4,y:179.2},0).wait(1).to({x:145.9,y:177.8},0).wait(1).to({x:159.4,y:176.5},0).wait(1).to({x:172.9,y:175.1},0).wait(1).to({x:186.4,y:173.7},0).wait(1).to({x:199.9,y:172.4},0).wait(1).to({x:213.4,y:171},0).wait(1).to({x:226.9,y:169.6},0).wait(1).to({x:240.4,y:168.3},0).wait(1).to({x:253.9,y:166.9},0).wait(1).to({x:267.4,y:165.5},0).wait(1).to({x:280.9,y:164.2},0).wait(1).to({x:294.5,y:162.8},0).wait(1).to({x:308,y:161.4},0).wait(1).to({x:321.4,y:160.1},0).wait(1).to({x:335,y:158.7},0).wait(1).to({x:348.5,y:157.3},0).wait(1).to({x:362,y:156},0).wait(1).to({x:375.5,y:154.6},0).wait(1).to({x:389,y:153.2},0).wait(1).to({x:402.5,y:151.9},0).wait(1).to({x:416,y:150.5},0).wait(1).to({x:429.5,y:149.1},0).wait(1).to({x:443,y:147.8},0).wait(1).to({x:456.5,y:146.4},0).wait(1).to({x:470,y:145},0).wait(1).to({x:483.5,y:143.7},0).wait(1).to({x:497,y:142.3},0).wait(1).to({x:510.5,y:141},0).wait(1).to({x:524,y:139.6},0).wait(1).to({x:537.5,y:138.2},0).wait(1).to({x:551,y:136.9},0).wait(1).to({x:564.5,y:135.5},0).wait(1).to({x:578,y:134.1},0).wait(1).to({x:591.5,y:132.8},0).wait(1).to({x:605,y:131.4},0).wait(1).to({x:618.5,y:130},0).wait(1).to({x:632,y:128.7},0).wait(1).to({x:645.6,y:127.3},0).to({_off:true},1).wait(105));

	// Layer 6
	this.instance_6 = new lib.buffyrunanim();
	this.instance_6.parent = this;
	this.instance_6.setTransform(617.9,146.1,0.343,0.343,0,0,0,186,139.3);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(265).to({_off:false},0).wait(1).to({regX:180.8,regY:125.3,x:609.5,y:141.7},0).wait(1).to({x:602.9,y:142.1},0).wait(1).to({x:596.3,y:142.4},0).wait(1).to({x:589.7,y:142.8},0).wait(1).to({x:583.2,y:143.2},0).wait(1).to({x:576.6,y:143.6},0).wait(1).to({x:570,y:143.9},0).wait(1).to({x:563.4,y:144.3},0).wait(1).to({x:556.8,y:144.7},0).wait(1).to({x:550.2,y:145.1},0).wait(1).to({x:543.6,y:145.5},0).wait(1).to({x:537,y:145.8},0).wait(1).to({x:530.4,y:146.2},0).wait(1).to({x:523.9,y:146.6},0).wait(1).to({x:517.3,y:147},0).wait(1).to({x:510.7,y:147.4},0).wait(1).to({x:504.1,y:147.7},0).wait(1).to({x:497.5,y:148.1},0).wait(1).to({x:490.9,y:148.5},0).wait(1).to({x:484.3,y:148.9},0).wait(1).to({x:477.7,y:149.2},0).wait(1).to({x:471.2,y:149.6},0).wait(1).to({x:464.6,y:150},0).wait(1).to({x:458,y:150.4},0).wait(1).to({x:451.4,y:150.8},0).wait(1).to({x:444.8,y:151.1},0).wait(1).to({x:438.2,y:151.5},0).wait(1).to({x:431.6,y:151.9},0).wait(1).to({x:425,y:152.3},0).wait(1).to({x:418.4,y:152.6},0).wait(1).to({x:411.9,y:153},0).wait(1).to({x:405.3,y:153.4},0).wait(1).to({x:398.7,y:153.8},0).wait(1).to({x:392.1,y:154.2},0).wait(1).to({x:385.5,y:154.5},0).wait(1).to({x:378.9,y:154.9},0).wait(1).to({x:372.3,y:155.3},0).wait(1).to({x:365.7,y:155.7},0).wait(1).to({x:359.1,y:156.1},0).wait(1).to({x:352.6,y:156.4},0).wait(1).to({x:346,y:156.8},0).wait(1).to({x:339.4,y:157.2},0).wait(1).to({x:332.8,y:157.6},0).wait(1).to({x:326.2,y:157.9},0).wait(1).to({x:319.6,y:158.3},0).wait(1).to({x:313,y:158.7},0).wait(1).to({x:306.4,y:159.1},0).wait(1).to({x:299.9,y:159.5},0).wait(1).to({x:293.3,y:159.8},0).wait(1).to({x:286.7,y:160.2},0).wait(1).to({x:280.1,y:160.6},0).wait(1).to({x:273.5,y:161},0).wait(1).to({x:266.9,y:161.4},0).wait(1).to({x:260.3,y:161.7},0).wait(1).to({x:253.7,y:162.1},0).wait(1).to({x:247.1,y:162.5},0).wait(1).to({x:240.6,y:162.9},0).wait(1).to({x:234,y:163.2},0).wait(1).to({x:227.4,y:163.6},0).wait(1).to({x:220.8,y:164},0).wait(1).to({x:214.2,y:164.4},0).wait(1).to({x:207.6,y:164.8},0).wait(1).to({x:201,y:165.1},0).wait(1).to({x:194.4,y:165.5},0).wait(1).to({x:187.9,y:165.9},0).wait(1).to({x:181.3,y:166.3},0).wait(1).to({x:174.7,y:166.6},0).wait(1).to({x:168.1,y:167},0).wait(1).to({x:161.5,y:167.4},0).wait(1).to({x:154.9,y:167.8},0).wait(1).to({x:148.3,y:168.2},0).wait(1).to({x:141.7,y:168.5},0).wait(1).to({x:135.1,y:168.9},0).wait(1).to({x:128.6,y:169.3},0).wait(1).to({x:122,y:169.7},0).wait(1).to({x:115.4,y:170.1},0).wait(1).to({x:108.8,y:170.4},0).wait(1).to({x:102.2,y:170.8},0).wait(1).to({x:95.6,y:171.2},0).wait(1).to({x:89,y:171.6},0).wait(1).to({x:82.4,y:171.9},0).wait(1).to({x:75.8,y:172.3},0).wait(1).to({x:69.3,y:172.7},0).wait(1).to({x:62.7,y:173.1},0).wait(1).to({x:56.1,y:173.5},0).wait(1).to({x:49.5,y:173.8},0).wait(1).to({x:43,y:174.2},0).wait(1).to({x:36.4,y:174.6},0).wait(1).to({x:29.8,y:175},0).wait(1).to({x:23.2,y:175.4},0).wait(1).to({x:16.6,y:175.7},0).wait(1).to({x:10,y:176.1},0).wait(1).to({x:3.4,y:176.5},0).wait(1).to({x:-3.2,y:176.9},0).wait(1).to({x:-9.8,y:177.2},0).wait(1).to({x:-16.3,y:177.6},0).wait(1).to({x:-22.9,y:178},0).wait(1).to({x:-29.5,y:178.4},0).wait(1).to({x:-36.1,y:178.8},0).wait(1).to({x:-42.7,y:179.1},0).wait(1).to({x:-49.3,y:179.5},0).wait(1).to({x:-55.9,y:179.9},0).wait(1).to({x:-62.5,y:180.3},0).wait(1).to({x:-69.1,y:180.6},0).wait(1));

	// char
	this.instance_7 = new lib.Race();
	this.instance_7.parent = this;
	this.instance_7.setTransform(279.6,238.8,1.171,1.171);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(370));

	// main
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,53.9,1,1,0,0,0,54,40.5);

	this.instance_8 = new lib.Bkr();
	this.instance_8.parent = this;
	this.instance_8.setTransform(277.3,192,1.171,1.171);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.UI}]}).wait(370));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(173.5,200.6,659.8,398.7);
// library properties:
lib.properties = {
	id: 'C575519F0DF7F844A9BC496C268A4F62',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/bgmusic.mp3", id:"bgmusic"},
		{src:"sounds/bgmInf.mp3", id:"bgmInf"},
		{src:"sounds/_3a.mp3", id:"_3a"},
		{src:"sounds/_4b.mp3", id:"_4b"},
		{src:"sounds/wrong_answer.mp3", id:"wrong_answer"},
		{src:"sounds/SENameofIdea.mp3", id:"SENameofIdea"},
		{src:"sounds/_7a.mp3", id:"_7a"},
		{src:"sounds/highclick.mp3", id:"highclick"},
		{src:"sounds/lowclick.mp3", id:"lowclick"},
		{src:"sounds/parrotmove1.mp3", id:"parrotmove1"},
		{src:"sounds/parrotmove2.mp3", id:"parrotmove2"},
		{src:"sounds/SENameOfPerson.mp3", id:"SENameOfPerson"},
		{src:"sounds/_6b.mp3", id:"_6b"},
		{src:"sounds/_2a.mp3", id:"_2a"}
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
an.compositions['C575519F0DF7F844A9BC496C268A4F62'] = {
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