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


(lib.staticperiod = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLAKQgGgEAAgGQAAgFAGgEQAFgFAGABQAIAAAFADQAFAFAAAFQAAAGgGAEQgFAFgHAAQgGAAgFgFg");
	this.shape.setTransform(6.7,25.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13.8,34.7);


(lib.static_line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#660099").ss(1,1,1).p("AM8AAI53AA");
	this.shape.setTransform(82.8,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,167.6,2);


(lib.static_carmen_RForearm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AFABSQgLgCgLgDQgggTgjgOQgigNglgKQgmgLglgKQgigJgkgMQgjgLgegQQgggRgEggQgEgXgEgYQgDgOgCgPQgEgRgGgJQgmATAEAoQACAVgBAOQgWgLgQgFQgjgKghgOQghgOgVASQgMAKAPAEQAlAKAkAMQAcAKASAFQgjAFgogDQgkgDgcANQANAZAbgCQAogDAnAAQATAAAJAAQgOABgOACIAAAAQgdAEgZAIQglANgBAbQAmAPAjgSQACgBABgBQALgGAIgFQAJgGAKgEQgRAPgPAPQgHAIgGAIQgLAPANACQAnAIAdgZQAggZAkARQAfAOAjAQQAhAQAhARQAhAQAeASQAgATAiAQQAjAPAfAOQAbAMAQAHQARAIASAD");
	this.shape.setTransform(32,20);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC66").s().p("AEdC9IgrgTIhCgdQgigQgggTQgegSghgQQghgRghgQIhCgeQgkgRggAZQgdAZgngIQgNgCALgPIANgQQAPgPARgPQgKAEgJAGIgTALIgDACQgjASgmgPQABgbAlgNQAZgIAdgEIAAAAIAcgDIgcAAQgnAAgoADQgbACgNgZQAcgNAkADQAoADAjgFIgugPQgkgMglgKIgDgOQAVgSAhAOQAhAOAjAKQAQAFAWALQABgOgCgVQgEgoAmgTQAGAJAEARIAFAdIAIAvQAEAgAgARQAeAQAjALIBGAVIBLAVQAlAKAiANQAjAOAgATIAWAFIAAB2QgSgDgRgIg");
	this.shape_1.setTransform(32,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,66.1,42);


(lib.static_carmen_RBicep = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AjPBJQARACASgBQAngEAmgDQAngDAlgGQAkgGAlADQARABAQABQATABATACQAlACAgAAQABAAAAAAQATgrgJg2QgHgwhDANQglAGgoAIQgkAHglAEQglAEgnAAQgmgBgnABQgSAAgRgD");
	this.shape.setTransform(20.8,7.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC66").s().p("AjPBJIAAh1QARADASAAIBNAAQAnAAAlgEQAlgEAkgHIBNgOQBDgNAHAwQAJA2gTArIgBAAQggAAglgCIgmgDIghgCQglgDgkAGQglAGgnADIhNAHIgOAAIgVgBg");
	this.shape_1.setTransform(20.8,7.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,43.6,16.9);


(lib.static_carmen_LForearm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AkxDGQARgMANgOQAIgIAHgIQABgBAAgBQAOgPAPgRQAIgIAIgJQAagaAagZQAagaAZgYQAagZAZgWQAVgTAEgVQAEgWADgUQACgRAJgMQAYgfgPglQgUgsAxADQAGABACAIQADAKACAKQACAJABAJQADAdAagDQASghASgeQATghAXgXQAkgkARAlQAFALgJAIQgbAZgWAbQgiAqArAEQANACALgKQAZgZAcgWQAdgXADArQABALgLAHQgcARgkASQgTAKAMAFQAOAHAOgEQAkgKAigMQAogNgVApQgDAGgMACQgkAEglAEQgoAEARATQAwgKAdAUQAIAGgKAHQgfAVgngJQgQgDgQACQgnAHgUAYQgWAagdANQgFAEgFADQgDADgDACQgFAFgGAGQglAlgiA5QgdAwgrAyQguAzgvAkQgIAGgJAFQgOAIgQAFQgHACgIACQgOADgQAA");
	this.shape.setTransform(30.6,32.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC66").s().p("AkxDGQARgMANgOIAPgQIABgCIAdggIAQgRIA0gzIAzgyQAagZAZgWQAVgTAEgVIAHgqQACgRAJgMQAYgfgPglQgUgsAxADQAGABACAIIAFAUIADASQADAdAagDIAkg/QATghAXgXQAkgkARAlQAFALgJAIQgbAZgWAbQgiAqArAEQANACALgKQAZgZAcgWQAdgXADArQABALgLAHQgcARgkASQgTAKAMAFQAOAHAOgEQAkgKAigMQAogNgVApQgDAGgMACIhJAIQgoAEARATQAwgKAdAUIgCANQgfAVgngJQgQgDgQACQgnAHgUAYQgWAagdANIgKAHIgGAFIgLALQglAlgiA5QgdAwgrAyQguAzgvAkIgRALQgOAIgQAFIgPAEQgOADgQAAg");
	this.shape_1.setTransform(30.6,32.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,63.1,67.5);


(lib.static_carmen_LBicep = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("ADkBsQgOABgOgBQhCgFg+gPQg/gOg4gNQgFgBgFgBQhCgPhLAJQgBAAgCAAQgTgvgGg6QgCgcAGgYQA9gJBUARIABAAQAnAXA+AMQBCAMA6APQAnALAmAEQABgBABAA");
	this.shape.setTransform(22.7,10.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC66").s().p("ADIBsQhCgFg+gPIh3gbIgKgCQhCgPhLAJIgDAAQgTgvgGg6QgCgcAGgYQA9gJBUARIABAAQAnAXA+AMQBCAMA6APQAnALAmAEIACgBIAACAIgKAAIgSAAg");
	this.shape_1.setTransform(22.7,10.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,47.5,23.7);


(lib.static_carmen_fall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("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");
	this.shape.setTransform(98.6,111);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Ai0HZQgkgOgegVQghgVgXgdQgQgVgNgYIgKgUQgQghgZgZQgOgMgOgKQAmADAigPQAhgQAcgaQAcgaAagWQAbgWAZgPQAhAAAfAWQAdAVAkAOQAkAOAkAKQAfAIAkABIAJAAQAogBAlgIQAXgGAPAAQAeAPAWAcQAWAbAUAgQATAgAUAeQALAQAQAOQgVgMgfAOQggAOgjANIhHAcQggANghAHIgJACIhLAPQgkAHglABQgkAAgiAFIgFABIgUACIgDAAQgbAAgYgKgAEZhEQhAgLg8gOQg8gPgggQQghgRgXgbQgXgagKgYQgEgLgBgNQgBgPAFgSQAsgaAZgqQAhg3AQg/IAGgVQATADAYAOQgJAjAAAyQABBGAnArQATAWAZgaQAngnAVg2QAKgaAVglQB1ACgPDGIgBADIABACQAAA9gZAwQgWAogoAGIgRABQgMAAgNgCgAGZjgIABgDIAAACIAAADIgBgCgAGajjIAAAAg");
	this.shape_1.setTransform(138.8,88.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA5ARIgBgBQgJgRgUgGIAEgMQAZgGAUAAQALANgCAVIgDANQgEAPgMAIQgDgRgGgLgAgxAQQgKgcgZgJQACgJAFgJIADgFQAXATAdAMIgBALIgHAPQgFALgJAOQgCgMgDgKg");
	this.shape_2.setTransform(170.1,19.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag/BGQAAgIAIgIIABAAQAFgJAGgFQAQgOAYAQQAAAJgCAJQgCAIgEAIQgFALgLAFIAAAAQgMAGgIAAQgRAAABgcgAAig5IAAgFQABgMADgKQAUAGAJASIABABQAGAMADAQIgCABQgNAHgJAAQgTAAAAgigAhFgtQgFgMgBgLIAAgBQgCgOAEgOQAZAJAKAcQADAKACAMQgGAHgFAEQgEACgEAAQgKAAgHgUg");
	this.shape_3.setTransform(169,27);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC66").s().p("AHFQ6Qg9gOgvgUQg3gYhEAGQhLAHgHhRQATgwBAgmIBmg8QA0geA4gTQA+gWAdgtQAcgsAxgtQAvgsAtgYQA1gdBEgOQgOgSgWgTQgdgZghgTQgigUgbgYQgcgZgUgeQgUgggUgbIgngzQAigHAfgNIBHgcQAjgNAggPQAggOAUANIAKAHIAMAIQAZAXAPAfQAQAeAPAhQAPAhAQAfIAiBFQARAiAIAjIAQBIIADAQQgNATgKAWQgUAwgwAlQgzAmg2AYIhwAwIh2A0Qg3AZg8AOQglAKgPAdQgmBKBHAPQAhAHAigBQA9gBAfAfQAuAthIAGIgTAAQgsAAgqgJgAD2O/QgFgNAAgKQAAgaAhgJQghAJAAAaQAAAKAFANgAu7NUQg/goBIg3QAWgRAQgcQAdgzAmg1QATgaAiALQAsAOA3AFQBDAFA6geQA5gfAygiQA3gmA8gUQBAgUBEgDQBLgDAZg/QAVg2Ang3QAbgnAWglQAhg3AmgmQANAYAQAUQAXAeAhAVQAeAUAkAPQAaAKAdAAIAAAAQgnA7gkAmIhZBYIhYBZQguAxgrAhQgsAjg9ANQg+APhDAFQhEAGhEAKIh8AUIiDAWQhAAMgdAwQghA3g4AXQgUAIgTAAQgXAAgVgNgAH0g0QgkgBgggIQglgJgkgOQgkgPgdgVQgfgWghAAQAcgIAUghQAUghAPgkQAPgkANgiQAMgiAKgkQAKgjAEgmQAKAYAYAbQAYAbAgARQAgAQA8APQA8AOBAALQAXAEATgDQgGAmgQAbQgKASgKATIgNAaQgOAdgVAcQgUAcAIAhQgPABgXAFQglAJgoAAIgIAAgAIDhDIABAAIgBAAQgJACgGgBQgKAAAAgFQAAgEAHgIQgHAIAAAEQAAAFAKAAQAGABAJgCgAI/oCQgngrgBhFQAAgyAJgjQAEgRASgdQAZAUATATQAZAZApABIAEAAIADAAIAAAAIAAAAQAVAAASgDQgSADgVAAIAAAAIAAAAIgDAAIgEAAQgpgBgZgZQgTgTgZgUIgFgEQgbgVgLgbIAFgRQAThBAcg1IA2hkQAjgVAqgRQAwgTAnAXIADADQAPAgAXARQAGANAFAOQAEAOADAOQgJAKgGAMQgPAfAIAoQAHAjADAoIgBAEQgQAhgQAWQgWAdglANQgMAEgOADIgMAVQgUAmgLAZQgVA2gnAoQgNAOgMAAQgKAAgJgLgAKUszQgGAFgFAJIAAABQgJAHAAAIQgBAqAlgUIAAAAQALgFAFgLQAEgIACgIQACgJAAgJQgNgIgKAAQgKAAgHAGgALus5QAQgBgCgXQACAXgQABIgBAAIAAAAIgIgCIAIACIAAAAIABAAgALqu8IgEAMQgDAKgBAMIAAAFQAAAxApgWIACgBQAMgHAEgQIADgNQACgVgLgOIAJgJIgJAJQgIgLgRgGQgNAJgHAOIAAAAgAJ0ugQABALAFAMQAKAcAPgKQAFgEAGgHQAJgNAGgMIAGgQIABgLQgdgLgWgUQAHgIANgBIACAAIAAAAIABAAQAfAAgDAoQADgogfAAIgBAAIAAAAIgCAAQgNABgHAIIgNgMIANAMIgEAFQgEAKgDAJQgDAOABAOIgBAAIABABgAM1vbQgHgbgggFQAgAFAHAbgALGwBQgHgGgKAAIAAAAIAAAAIgLACIAAAAIgBAAIAAAAIgBAAIABAAIAAAAIABAAIAAAAIALgCIAAAAIAAAAQAKAAAHAGIAAAAgAL+vTQARAGAIALQgUAAgZAGQAHgOANgJgAMXvCIAAAAg");
	this.shape_4.setTransform(98.6,113);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#993300").s().p("ADKGmQAQgbAFgmQApgHAVgnQAagxgBg8IAAgEIAAgBQAQjGh2gCIANgWQANgCANgEQAlgNAVgdQARgWAQghIAAgCIAAgCQgDgogHgjQgHgoAPgfQAFgMAJgKQgCgOgFgOQgEgPgGgMQgXgSgQggIAAgBIgDgBQgmgXgwATQgrARgjAVIg2BkQgbA1gTBBIgFARIgEANIgSBEIgFAVQgRA9ggA3QgaArgtAaQgMAGgOAGQgtASgwABQAwgBAtgSQAOgGAMgGQgEASABAPIgLAMIgFAHQgdAegnAOQhMAbhLgRQgvgLgagQQAwgSAighQAwguAZg4QAwilAUgjQAZgqA0giQAsgdAag4QAcg7AggqQAdgnA/gVQA4gTBNAOQA6gMA6AdQA3AcAEBMQAEBGgYA2QgbA/AmA2QAXAjAdCSIgHAwIgEAYQgQBagXAlQgZAngeAoIgOATIgBABQglAxg+ANIglAIQAKgTALgSgAh9CVIAAAAgAAAg5IAShEIAEgNQAKAbAbAVIAFAEQgRAdgFARQgXgOgTgDgAEjmXIADABIAAABIgDgCgAEjmXIAAAAg");
	this.shape_5.setTransform(148.7,45.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,199.1,224.1);


(lib.static_bar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660099").s().p("AgOAUIAAgnIAdAAIAAAng");
	this.shape.setTransform(0,0.1,1,0.637);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.static_bar, new cjs.Rectangle(-1.5,-1.2,3,2.6), null);


(lib.static_ball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("ADngFQgBAAABgBQgDhOgvg7QgJgKgJgJQgPgPgQgLQgBgBgBgBIgbgCIgTA5IgEANIBXAKIABgCIgBACIAAAAIgvBAIAGgCIAgANIAcAtgAC6AIIABADIgsAjIg4gMIgBgBIglgoIAYghIAvgIACiCkQAAgBABAAQBEhDAAhgQAAgCAAgDAgXiqIADACIA1gcIAHgeQgTgEgVAAQgOAAgOACIgVAoIAaASIgIAjIg3AnIAAAFIAAABIgHA5IgBAKIA2AgIADgCIAyg5IAAAAIAFgrIgRgOIgggcABUiHIhTAcACCi+QgpgcgxgIAiUivQAAAAgBABQgHAGgGAGQgRARgNATIAQAiIAogFIAEgLIANgpIgdgaQA0gtBEgIAhdghIgTApIADAFIARAkIgnA3AjfA7IBHgvIArABAjAh+QgmA4AABGQAAAfAHAcQAIAeAQAbIBBgJIADgDIBJASIADgEIAXgtIABAAIAEABIgKhDAhWhbIgugRAg3B2IADAFIgGgBAjHB0QAPAZAWAWQAfAfAlARIBHgjIACAAIA4AOIAgg0IgGgIIAJACIBcAgABWAhIAAABIg3A7IAeAlAAfBdIgCgBIg4gSABDCKIADgGAg0B7IAeA0IABABAheDTQArAUAzAAQBfAABDhDAC1iPIgNAd");
	this.shape.setTransform(23.1,23.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgDDEIgBgBIgdgzIgEgGIAXgsIABgBIAEABIA5ASIABACIAdAkIAHAIIggA0gAjMBPIBGgvIArABIARAlIgnA2IgCAEIhCAIQgQgbgHgegABpA2IgBAAIglgqIAZgfIAugIIAGgCIAgAMIAcAuIABADIgrAigAhMgDIABgKIAHg5IAAAAIAAgFIA3goIAhAcIAQAOIgFArIAAAAIgyA5IgDADgAiuhqQANgTARgRIANgMIABgBIAdAaIgNApIgEALIgnAGgABhhlIAFgOIATg4IAbABIACACQAQAMAPAOIASAUIgNAcIgBADgAgFiWIgagSIAVgoQANgBAPAAQAVAAATADIgHAfIg1Acg");
	this.shape_1.setTransform(21.3,21);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AheDSIBHgjIACAAIA4AOIAgg0IADgFIBcAfQhDBDhfAAQgzAAgrgUgAiiCiQgWgWgPgZIBCgIIACgEIAng2IgRglIgDgFIATgpIgTApIADAFIgrgBIhGAvQgIgcAAgeQABhHAlg4IARAjIAngGIAEgLIAuASIAAAAIgHA5IgBAKIA2AhIADgDIAyg5IAAAAIAFgrIgQgOIBSgcIhSAcIghgcIAIgjIADADIA1gcIAHgfQAxAIApAcIgbgBIgTA4IgFAOIBYAKIAAAAIABgDIANgcQAvA7ACBOIAAABIgsANIAsgNIAAAFQAABfhDBDIgBABIhcgfIgKgDIgdgkIA3g7IABgBIA5AMIArgiIgBgDIgcguIgggMIgGACIAvhAIgvBAIguAIIgZAgIAlApIAAABIg3A7IgBgCIg5gSIgKhDIAKBDIgEgBIgBABIgXAsIgDAEIAHACIAdAzIgBABIhHAjQglgRgfgfgAg6B5IhJgSgABWAigAhWhbIgugSIANgpIgdgaQA0gtBEgIIgVAoIAaASIgIAjIg3AoIAAAFg");
	this.shape_2.setTransform(23.1,23.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,48.1,48.1);


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
	this.shape.graphics.f("#000000").s().p("AAcAIIgDgLIgFAKQgDAJgEAAQAAAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBgBIgBgJIgCgHQgGATgDAAIgDgBIgBgDIABgCQAEgEABgHIADgMQAAgBABAAQAAAAAAgBQABAAAAAAQABAAABAAQADAAACAIIADALIADgGIACgJQADgFACAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABIADAKIACAHIADAIIAAABIAAADIgCABQgEAAgCgJgAgUANIAAgIIgBgGIgBgHIgFAAIgGgBQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAAAIAGAAIAEAAIAPAAIADAAIAEAAQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAABQAAABAAABQAAAAgBABQAAAAAAAAQgBAAAAAAIgOABIAAAHIAAAHIABAEIABADIgBADIgDAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAgBg");
	this.shape.setTransform(58,2.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgLAYQgHgCAAgEIABgDQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAIAEACIAEACIAGABIAFgBQAEgCAAgCQAAgGgIgCIgEgCIgIgCQgDgCgBgFQAAgJAJgEIAHgDIAJgDIADAAIAEABIABADIAAAEIABADIgBAEIgDABQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBIgBgEIgKADQgGACAAAFIACAAQAKACAEADQAIAEAAAJQAAAHgHADQgFADgGAAQgGAAgFgCg");
	this.shape_1.setTransform(51.7,5.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgMATQgGgGAAgJQAAgIAGgJQAHgLAHAAQAEAAAGACQAGADAAADIgBADQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAgBAAIgCgBIgBgCQgDgCgGAAQgDAAgFAIQgEAIAAAEQAAAGAEADQAEADAFAAIAFgBIAFgDIACgBIADACIABADQAAADgHADQgFADgEAAQgIAAgHgGg");
	this.shape_2.setTransform(47.4,5.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgDAgQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAgIIAAgIIABgKIAAgKQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAIADgBIACABQABAAAAABQAAAAAAABQABAAAAABQAAAAAAAAIgBAKIAAAKIAAAIIAAAIQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAIgCABIgDgBgAgCgXQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAgBQAAAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_3.setTransform(43.9,4.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AALAVIgBgJIgBgKIAAgDIAAgEQAAgKgDAAQgFABgEAFQgEAGgCAGIAAAFIgBAEIABAEIAAAEIgBAEIgDABIgEgBIgBgEIAAgEIAAgEIAAgMIABgMIAAgEIAAgEIABgEIADgBQAEABAAAFIABAFQAHgJAHgBQAHAAADAHQABAEABAIIAAAFIAAACIABAKIAAAJIgBAEIgDABQgEAAAAgFg");
	this.shape_4.setTransform(40.3,5.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAOAXIgDgEIgHAEIgFABQgKAAgFgGQgEgGAAgLQAAgKAHgHQAIgIAJAAQAEAAAEADQAGACAAADIgBACIAAAGIgBAJIABAIIADAIIABACIAAABIgBAEIgDABIgDgCgAgGgKQgFAGAAAGQAAAHACADQADAEAFAAQADAAADgBIAEgEIgBgQIAAgEIABgFIgDgBIgCgBQgFABgFAFg");
	this.shape_5.setTransform(35.5,5.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAMAiIgCgLIgBgKIABgEIAAgDQAAgIgFABQgFAAgEADIgGALQAAAQgCADQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAIgBgDIABgCIAAgGIAAgHIAAggIABgGIgBgFIAAgEQAAgBAAAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAABAAQAAgBABAAQADAAAAAFIABAHIAAAKIAAAKIAAADQADgEAEgDQAEgDAEABQAIAAACAEQACAEABAHIAAAIIABAJIABAJIABACQAAAAgBAAQAAABAAAAQAAABAAAAQgBAAAAAAIgDABQgDAAgBgCg");
	this.shape_6.setTransform(30.7,4.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMATQgGgGAAgJQAAgIAGgJQAHgLAHAAQAEAAAGACQAGADAAADIgBADQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAgBAAIgCgBIgBgCQgDgCgGAAQgDAAgFAIQgEAIAAAEQAAAGAEADQAEADAFAAIAFgBIAFgDIACgBIADACIABADQAAADgGADQgGADgEAAQgIAAgHgGg");
	this.shape_7.setTransform(25.8,5.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgOATQgHgFAAgKQAAgLAGgHQAGgJAJAAQAHAAAFACQAFADAAAHQAAAEgFAEIgJAEIgQAHQADAEADACQAEACAEAAIAHgBQAFgCACgCQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIADABIABADQAAAEgIAEQgHADgGAAQgJAAgGgFgAgIgLQgEAEgCAIIAOgGQAHgEADgDQgDgDgHAAQgFAAgDAEg");
	this.shape_8.setTransform(21,5.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAbAhIgCgHIgCgIQgCgGgEgYIgJAaIgCAJIgEAIQgBADgCAAQgDAAgCgDIgBgFIgCgEIgIghIgBAIIgGAXIgCAMQgBADgDAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBIgBgDQAAgHAEgLIAEgQIADgPQACgJACgDQABgDADAAQADAAACAEQACADABANQADAOAEAPQAGgPAEgTIACgGIACgGQACgEADAAQAEAAACAIIACAKQACATAEAOIACAHIABAIQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAIgDABQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_9.setTransform(14.6,4.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgQAUIAAgeIAAgEIAAgEQAAgFAEAAQAEAAAAAIQAIgJAKAAQAEAAABADQACADAAAFIAAADQAAAGgEAAQgEAAAAgFIAAgDIAAgDQgHAAgEAEQgDACgDAGIAAAXQAAAFgEAAQgEAAAAgFg");
	this.shape_10.setTransform(5.8,5.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAOAXIgDgEIgHAEIgFABQgKAAgFgGQgEgGAAgLQAAgKAHgHQAIgIAJAAQAEAAAEADQAGACAAADIgBACIAAAGIgBAJIABAIIADAIIABACIAAABIgBAEIgDABIgDgCgAgGgKQgFAGAAAGQAAAHACADQADAEAFAAQADAAADgBIAEgEIgBgQIAAgEIABgFIgDgBIgCgBQgFABgFAFg");
	this.shape_11.setTransform(1.2,5.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgCAaQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAIgBgQIgBgPQAAgEgBgDQgEABgDAEIgFAFIgCADIgBAHIAAAIIAAADIABAEQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAIgCABQgGAAAAgLIABgIIAAgHIAAgHIgBgHQABgKAEAAIADABQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABIAAACIAAADIAAAFQADgFAEgEQAEgEAEAAQAGAAACAHQACgDADgCQAEgBAEAAQAIAAACAIIACAMIAEAYIgCADIgDABQgDAAgBgDIgCgOIgBgNIgCgGQAAgBgBgBQAAAAAAgBQgBAAAAAAQgBgBAAAAIgGADIgFAEIAAAIIABALIAAAMIAAADIgDABQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_12.setTransform(-4.5,5.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgCAaQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAIgBgQIgBgPQAAgEgBgDQgEABgDAEIgFAFIgCADIgBAHIAAAIIAAADIABAEQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAIgCABQgFAAgBgLIABgIIAAgHIAAgHIgBgHQAAgKAFAAIADABQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABIAAACIAAADIAAAFQACgFAFgEQAFgEADAAQAGAAACAHQADgDADgCQADgBAEAAQAHAAAEAIIABAMIADAYIgBADIgDABQgDAAgCgDIgBgOIgBgNIgCgGQAAgBgBgBQAAAAAAgBQgBAAAAAAQgBgBAAAAIgGADIgGAEIAAAIIACALIAAAMIgBADIgCABQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_13.setTransform(-11.5,5.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAOAXIgDgEIgHAEIgFABQgKAAgFgGQgEgGAAgLQAAgKAHgHQAIgIAJAAQAEAAAEADQAGACAAADIgBACIAAAGIgBAJIABAIIADAIIABACIAAABIgBAEIgDABIgDgCgAgGgKQgFAGAAAGQAAAHACADQADAEAFAAQADAAADgBIAEgEIgBgQIAAgEIABgFIgDgBIgCgBQgFABgFAFg");
	this.shape_14.setTransform(-17.4,5.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgQAUIAAgeIAAgEIAAgEQAAgFAEAAQAEAAAAAIQAIgJAKAAQAEAAABADQACADAAAFIAAADQAAAGgEAAQgEAAAAgFIAAgDIAAgDQgHAAgEAEQgDACgDAGIAAAXQAAAFgEAAQgEAAAAgFg");
	this.shape_15.setTransform(-21.7,5.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgVAeQgGgGAAgMQAAgMAGgLQAEgLAJgIQAGgFAFAAQAEAAAHADQAHADAAADIgBAEIgDABIgCgBQgIgEgEAAQgDAAgDAEIgFAFQgKAOAAAPQAAAIACAEQADADAHAAQAHAAAHgFQAFgFADgKQgMAAgIAFIgCAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBIgBgDQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAIgFAYAAIADABIABADQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgDAOgJAIQgJAIgLAAQgKAAgFgGg");
	this.shape_16.setTransform(-26.9,4.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgOAhIgBgDIADgIIAKgXQAFgPAHgHIABgBIgVgBIgKAAQgEAAAAgEQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAQAAgBAAAAQABAAAAAAIARABIAPAAIAIAAQAFAAAAADQAAACgDADIgEAFQgFAHgFAJIgIARIgDAKIgEAKQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgDgCg");
	this.shape_17.setTransform(-35.5,4.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgTAXQgFgJAAgOQAAgNAGgKQAIgLALAAQAMAAAGAKQAGAJAAAMQAAASgHALQgGAJgMAAQgNAAgGgMgAgLgRQgEAHAAAJQAAANAEAIQAEAHAHAAQAJAAAEgLQADgHAAgLQAAgLgEgHQgEgFgHAAQgHAAgFAIg");
	this.shape_18.setTransform(-41.1,4.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgTAXQgFgJAAgOQAAgNAGgKQAIgLALAAQAMAAAGAKQAGAJAAAMQAAASgHALQgGAJgMAAQgNAAgGgMgAgLgRQgEAHAAAJQAAANAEAIQAEAHAHAAQAJAAAEgLQADgHAAgLQAAgLgEgHQgEgFgHAAQgHAAgFAIg");
	this.shape_19.setTransform(-46.6,4.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AANAhIgDgBIgGABIgGAAIgFAAIgFABIgCAAIgBAAQgDAAgBgDIgBgGQAAgKAGgGQADgDALgHIAHgGQAEgFAAgFQAAgDgEgCQgDgCgDAAQgDAAgEACIgGAFIgDABQgEAAAAgDQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAFgFAEgCQAFgDAFAAQAHAAAGAEQAGAEAAAHIgBAJIgEAGQgDADgIAFQgIAFgCADQgFAFAAAHIAJAAIAMgBIAHABQAEACAAACQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgCABIgEgBg");
	this.shape_20.setTransform(-52,4.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgfABQABgLAKgKQAMgJAMAAQANAAAHAIQAIAIgBAMQABAKgKAKQgJALgMAAIgBAAQgfAAAAgdgAgOgPQgJAHAAAJQAAALAHAFQAFAFAMAAQAJAAAHgJQAGgIAAgHQAAgJgDgFQgFgFgJAAIgCAAQgLAAgHAGgAgLAJQgFgEAAgFQAAgHAHgFQAGgEAGAAQABAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAABAAABQAAAAgBABQAAAAgBAAQgBAAgBAAIgBAAIgCAAQgDAAgEACQgFADABADQAAACADABIAEACQADAAADgDIAFgCIACABIABADQAAADgEADQgFADgFAAQgFAAgFgEg");
	this.shape_21.setTransform(-58.4,3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64,-4.3,128.1,16.5);


(lib.Background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6600CC").ss(3,1,1).p("EglvgWPMBLfAAAMAAAAsfMhLfAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FEFE78","#FEB367"],[0,1],-0.2,199.3,549.7,199.3).s().p("EglvAWQMAAAgsfMBLfAAAMAAAAsfg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-243.1,-143.9,486.2,287.8);


(lib.Wordswho = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,flash:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.gotoAndPlay("flash");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("AgJBHQgEgEAAgFIAAgFIABgEIgBgNIAAgOQAAgNgDgWIgCgjIgFAAQgWAAgNgDQgLgDAAgKQAAgFAEgEQAEgFAGABIAQABIAQACIASgBIAQAAIAXABIAWABQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAIgYgBIgYgBIADAnQACAYAAAPIABAKIAAAKQAAAHgDAGQgEAIgHAAQgFAAgEgEg");
	this.shape.setTransform(91.5,16.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AgrA7QgOgPAAgVQAAggAcgiQAZgcAYAAIAIAAIAGABQAEgFAGAAQAKABACAKQACAJAAALQAAAEgDAFQgDAFgHAAQgJAAgEgKQgCgDgCgBIgIgBQgMAAgPATQgXAaAAAXQAAAKAHAIQAHAIAKAAQAJAAAKgFIAPgKQAHgFAEAAQAGAAAEAEQAEAFAAAEQAAAHgFADQgbAXgbAAQgWAAgPgQg");
	this.shape_1.setTransform(78.4,16.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("AgtBKQgKgJgBgfIACgnIADgnIgBgKIgCgKQAAgPAOAAQAFAAADACIAVgEIATgBQAZAAAPAFQAIAEABAJQgBAFgDAEQgEAFgGgBIgEgBQgQgDgPAAIgPABIgRADIgBAnIAlgEIAXgCQAGAAAEAEQAEADAAAGQAAALgMACIgYABIgpAFIAAAUQAAASADADQABABALAAIARAAIASAAIAGgBIAFAAQAGAAAEADQAFAEAAAGQAAALgLACQgKACgeAAQggAAgKgJg");
	this.shape_2.setTransform(66.2,16.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066FF").s().p("AgpBDQgVgNABgTQAAgQANAAQAOAAAAAPQAAAGAKAHQAJAGAKAAQADAAABgNIACgeQABgVAAghIAAgHIgCAAIgLAAIgLAAQgHAAgDgEQgFgDAAgHQAAgNASAAIAJAAIAKABIASgBIATgBQAZAAAAAPQAAAFgDAEQgEAEgGAAIgGAAIgGAAIgHAAIAAAHQgBBFgJAfQgIAYgRAAQgTAAgRgNg");
	this.shape_3.setTransform(53.1,17.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066FF").s().p("AgvBKQgFgEAAgGIAAhmIgBgOIABgMQABgKAQgCQAHgCASAAQARAAARAMQAUAOAAAUQAAAMgEAHQgEAHgIAGQAKAFAHAJQAJAKAAALQAAANgPALQgJAIgKAEQgWAIgjAAQgGAAgEgFgAgaA1QARgBATgGQARgFAAgFQAAgIgLgGQgJgEgHgBIgagBgAgZgfIgBAVIAOABQAdgCAAgVQAAgHgJgFQgIgIgKAAIgQAAg");
	this.shape_4.setTransform(40.4,16.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066FF").s().p("AgnBCQgZgUAAgvIAAgPIABgNIAAgMIAAgLQAAgHADgHQAEgJAHAAQAFAAAEADQAFAEAAAGIAAAQIgBARIAAANIgBAPQAAANAEANQAEAPAIAGQAEAEAPAAQAZAAAJgsQAFgXAAgpQAAgFADgGQAFgGAIAAQAGAAAEAEQACAEAAAFQAAAngDAVQgGAggQAWQgHAKgKAGQgNAIgMAAQgYAAgNgKg");
	this.shape_5.setTransform(26.2,17.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0066FF").s().p("Ag0BAQgMgKAAgMQAAgGAEgEQAEgEAGAAQAJAAAEAJQAFAMAUAAQAQAAAQgHQAQgIAAgJQAAgMgKgEQgIgDgUAAQgRgBgNgFQgTgIABgPQAAgTAUgQQAUgQAYAAQAJAAAOAFQARAFAAAHQAAAGgDADQgEAFgGAAIgOgCIgNgCQgNAAgLAGQgMAGABAHQAAAEADACQAEADAHABIAYABQAVACANAKQAOALAAAVQAAAZgdANQgVAKgbAAQgaAAgOgLg");
	this.shape_6.setTransform(12.1,17.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.1,0,97.4,31.9);


(lib.WordsTowhat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"flash":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.gotoAndPlay("flash");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AgJBHQgEgEAAgFIAAgFIABgEIgBgNIAAgOQAAgNgDgWIgCgjIgFAAQgWAAgNgDQgLgDAAgKQAAgFAEgEQAEgFAGABIAQABIAQACIASgBIAQAAIAXABIAWABQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAIgYgBIgYgBIADAnQACAYAAAPIABAKIAAAKQAAAHgDAGQgEAIgHAAQgFAAgEgEg");
	this.shape.setTransform(115.1,16.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("AhEBLQgEgDAAgGIABgMIABgMIAAgRIAAgRIAAgSIAAgTIgBgRIgBgRQAAgHAEgEQAGgEAGAAQAHAAAJAMQArA/ArAoIAAgQIgBg/IAAgLIgBgLQAAgOAOAAQAPAAAAAyIAAAPIAAA9IgCAQQgCAMgMAAQgHAAgIgIQgmgigvg7IAAAdIAAAYIABAXQAAAdgOAAQgHgBgFgEg");
	this.shape_1.setTransform(100,16.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009900").s().p("AgtBKQgKgJgBgfIACgnIADgnIgCgKIgBgKQAAgPAOAAQAFAAADACIAVgEIATgBQAZAAAPAFQAIAEABAJQAAAFgEAEQgEAFgGgBIgEgBQgQgDgPAAIgPABIgRADIgCAnIAmgEIAXgCQAGAAAEAEQAEADAAAGQAAALgMACIgXABIgqAFIAAAUQAAASACADQACABALAAIARAAIASAAIAGgBIAFAAQAGAAAEADQAFAEAAAGQAAALgMACQgJACgeAAQggAAgKgJg");
	this.shape_2.setTransform(85.9,16.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009900").s().p("AA1BAIgFgYQgFgSgGgfIgOAoIgGASIgHARQgGAKgIgBQgJABgFgMIgFgRQgIgZgHgbIgLAuIgFAXQgEANgKAAQgGABgEgFQgEgEAAgFQAAgQAHgXIAKglIAHgeQAEgUAFgIQAFgHAIAAQAJABAEAIQAEAJAFAaQADAaAJAcQAKgbAKgkIAFgWQAFgOAMAAQAKAAAGARQABAGADASQAFApAKAdIAIAhQAAAFgFAEQgEAEgGAAQgKAAgFgPg");
	this.shape_3.setTransform(70.7,17);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009900").s().p("AgtBKQgKgJgBgfIACgnIADgnIgCgKIgBgKQAAgPAOAAQAFAAADACIAVgEIATgBQAZAAAPAFQAIAEABAJQAAAFgEAEQgEAFgGgBIgEgBQgQgDgPAAIgPABIgRADIgCAnIAmgEIAXgCQAGAAAEAEQAEADAAAGQAAALgMACIgXABIgqAFIAAAUQAAASACADQACABALAAIARAAIASAAIAGgBIAFAAQAGAAAEADQAFAEAAAGQAAALgMACQgJACgeAAQggAAgKgJg");
	this.shape_4.setTransform(55.7,16.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#009900").s().p("AgzA7IACgfQACgqAAgzQAAgGAEgEQAEgEAGAAQAGAAAEAEQADAEAAAGQAAA0gCAqIgCAYQAXAAAjgLIAFgBQAGAAAEAFQADAEAAAFQAAAIgIAEQgMAFgYAEQgVAEgOAAQgYAAAAgVg");
	this.shape_5.setTransform(44,17);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#009900").s().p("AgsBKQgDgEAAgFIAAgbIACgsIACgtQAAgZAOABIAJgCIAOAAQATAAAQANQATAOAAATQAAAZgUAOQgSANgWAAIgJgBIAAAtQAAAFgEAEQgEAEgFAAQgGAAgEgEgAgSglIgBAhIAHABQAOAAAJgHQAMgIAAgNQAAgIgLgGQgKgHgKAAIgGAAIgEAAIAAAPg");
	this.shape_6.setTransform(32.9,16.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#009900").s().p("AA1BAIgGgYQgEgSgGgfIgPAoIgFASIgIARQgFAKgIgBQgJABgFgMIgGgRQgHgZgGgbIgNAuIgDAXQgEANgLAAQgHABgEgFQgDgEAAgFQAAgQAHgXIALglIAFgeQAFgUAFgIQAFgHAIAAQAIABAFAIQAEAJAEAaQAFAaAIAcQAKgbAKgkIAGgWQAFgOAKAAQALAAAFARQACAGADASQAGApAIAdIAJAhQAAAFgEAEQgFAEgFAAQgLAAgFgPg");
	this.shape_7.setTransform(18.9,17);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#009900").s().p("AgzA9QgWgSAAgdQAAggAVgbQAXgfAjAAQAiAAARAQQARAPAAAfQAAAhgTAbQgWAfgjAAQgdAAgUgQgAgfgcQgOAUAAAWQAAARAMAJQANAKASAAQAUABAPgWQANgTAAgYQAAgUgJgIQgJgIgWAAQgVAAgQAWg");
	this.shape_8.setTransform(1.9,17);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#009900").s().p("AgrA7QgOgPAAgVQAAggAcgiQAZgcAYAAIAIAAIAGABQAEgFAGAAQAKABACAKQACAJAAALQAAAEgDAFQgDAFgHAAQgJAAgEgKQgCgDgCgBIgIgBQgMAAgPATQgXAaAAAXQAAAKAHAIQAHAIAKAAQAJAAAKgFIAPgKQAHgFAEAAQAGAAAEAEQAEAFAAAEQAAAHgFADQgbAXgbAAQgWAAgPgQg");
	this.shape_9.setTransform(-12.1,16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.5,0,144.6,31.9);


(lib.Wordsdoes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"flash":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.gotoAndPlay("flash");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgvBKQgFgEAAgGIAAhmIgBgOIABgMQABgKAQgCQAHgCASAAQARAAARAMQAUAOAAAUQAAAMgEAHQgEAHgIAGQAKAFAHAJQAJAKAAALQAAANgPALQgJAIgKAEQgWAIgjAAQgGAAgEgFgAgaA1QARgBATgGQARgFAAgFQAAgIgLgGQgJgEgHgBIgagBgAgZgfIgBAVIAOABQAdgCAAgVQAAgHgJgFQgIgIgKAAIgQAAg");
	this.shape.setTransform(93.3,16.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("Ag1BJQgEgEAAgGIAAgVIABgWIAAhOQAAgHAEgFQAFgGAIAAIAZACQANACAJAFQAqAVAAAfQAAAMgJAJQgIAKgSAHQAaAOANAPQADAEABAFQgBAGgEAEQgEADgGAAQgFAAgEgEQgegbgigLIABAfQAAAGgEAEQgEAEgGAAQgFAAgFgEgAgdADIADAAQAYAAALgFQAFgDAEgEQAFgEAAgCQgBgLgOgKQgMgKgOgBIgLgBg");
	this.shape_1.setTransform(80.5,16.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgtBKQgKgJgBgfIACgnIADgnIgCgKIgBgKQAAgPAOAAQAFAAADACIAVgEIATgBQAZAAAPAFQAIAEABAJQAAAFgEAEQgEAFgGgBIgEgBQgQgDgPAAIgPABIgRADIgCAnIAmgEIAXgCQAGAAAEAEQAEADAAAGQAAALgMACIgXABIgqAFIAAAUQAAASACADQACABALAAIARAAIASAAIAGgBIAFAAQAGAAAEADQAFAEAAAGQAAALgMACQgJACgeAAQggAAgKgJg");
	this.shape_2.setTransform(67.9,16.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgVBFQgMgcgOg1IgIgaQgFgSAAgHQAAgHAEgDQAEgDAFgBQAKAAAEAKIADARIAJAgIAQAwIAWg6IAIgYQAFgNAHgIQAFgFAFAAQAGAAAEAEQAEAEABAGQAAAEgDADQgFAIgFAKIgHAUIgaBCQgFAMgGAMQgFAIgGAAQgKAAgFgKg");
	this.shape_3.setTransform(54.7,17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,147,31.9);


(lib.Wordsverb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"flash":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.gotoAndPlay("flash");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgcBLQgFgEABgFQAAgIADgFQAFgHAIAAQAGAAAEAFQADAEAAAGQAAAFgDAGQgEAGgIABQgFgBgFgDgAgWAiQgEgEAAgGQAAgIANgKIAVgPQANgKAAgHQAAgKgJgHQgJgIgJAAQgFAAgJAGQgKAGgEAAQgFAAgFgFQgDgEAAgFQAAgKARgIQAOgHAKABQAUAAARAPQASAPAAAVQAAAUgVAOIgQALIgOANQgEAGgGgBQgGAAgEgDg");
	this.shape.setTransform(73.6,16.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgbAzQgPgFAAgMQAAgJAMAAQAFAAAIADQAJADAEAAQATgBAAgHQAAgGgOgFIgZgMQgNgKAAgNQAAgUAVgHQAMgEAYAAQAJAAAFACQAHAEgBAJQABASgKAAQgKgBgCgHIgIgBQgWAAAAAGQAAAEANAHQAUAIAGAFQAPAKAAANQAAAQgQAJQgMAHgSAAQgNAAgLgEg");
	this.shape_1.setTransform(63,19.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AggAqQgRgMAAgXQAAgXANgRQAOgTAYAAQARAAAMAFQAOAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAGADQAHADAIAAQANAAAJgGQAIgFAFAAQAKAAAAAKQAAALgRAHQgNAGgPAAQgWAAgPgLgAgMgXQgHAGgEANIAWgKQAMgGAIgFQgHgEgKAAQgIAAgGAGg");
	this.shape_2.setTransform(52.5,19.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgfApQgOgNgBgXQgBgVANgRQAPgUAZAAQAUAAALAQQAKAOAAAVQAAAWgMAQQgNASgWAAQgSAAgNgNgAgNgQQgGAJAAAMQAAAMAHAGQAFAFAHAAQAHAAAHgGQAHgHAAgLQACgfgSAAQgLAAgHALg");
	this.shape_3.setTransform(41.7,19.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgeBPQgLgDgHgEQgFAAgEgEQgEgEAAgFIABgdIABgeIgBgfIAAghQAAgFAFgFQAFgGAGAAQADAAANAGQAPAIADAAQAcAKAUATQAYAXAAAbQAAARgIAPQgJAQgOAJQgQALgdAAQgHAAgJgCgAghAyQADACAFABQAFACAGAAQAUAAAKgGQAIgGAFgJQAFgKAAgKQAAgXgcgSQgIgGgfgNg");
	this.shape_4.setTransform(29.7,16.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(20.1,0,61.3,31.9);


(lib.Wordshits = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"flash":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.gotoAndPlay("flash");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgYAuQgNgFAAgKQAAgIAKAAQAEAAAIACQAIADAEAAQARAAAAgHQAAgFgNgFQgRgIgFgDQgMgJAAgMQAAgSASgGQALgEAWAAQAJAAAEADQAGADAAAIQAAAQgJAAQgJAAgBgHIgIgBQgUAAAAAGQAAADAMAGQARAIAHAEQAMAJAAALQAAAPgOAIQgLAHgQAAQgLAAgKgEg");
	this.shape.setTransform(85.4,17.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgHA9QgDgDgBgFIAAgJIABgKIgCgsIgQgBQgLgCAAgKQAAgFADgDQAEgEAEAAIAQABIgBgJIAAgJQAAgFADgDQAEgDAFAAQAMAAAAAWIAAAHIAJgBQAKAAADACQAIACAAAIQgBAFgDAEQgDADgFAAIgFAAIgEAAIgIAAIABAuIAAAEIAAAFQAAAUgNAAQgEAAgDgDg");
	this.shape_1.setTransform(76.9,16);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgKBAQgDgEgBgEIAAgQIAAgRIAAgUIABgSQABgFADgDQADgDAFAAQAFAAADADQAEADAAAFIgBASIgBAUIABARIAAAQQAAAEgEAEQgDADgFAAQgFAAgDgDgAgHgsQgFgDAAgGQAAgFAFgEQAEgEAFAAQAFAAAFAEQADAEAAAFQAAAGgDADQgFAEgFAAQgFAAgEgEg");
	this.shape_2.setTransform(70.3,15.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AAVBAQgDgHgBgNIgCgUIAAgHIABgGIgBgIQAAgEgEAAQgKAAgHAIQgEAFgHAMQAAAggDAHQgDAHgIAAQgFAAgEgDQgEgEAAgFIABgEQABgCABgWIAAg6IAAgDIAAgOIAAgIIgBgIQAAgFADgDQAEgDAFAAQAJAAADAJQABAGAAAKIAAASIgBARQAHgGAHgDQAGgDAJAAQAPAAAGAIQAFAHABAMIABAVIACASIADARIABADQAAAFgEADQgEADgFAAQgJAAgCgJg");
	this.shape_3.setTransform(62.5,15.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,147,29.1);


(lib.Wordscomplement = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"flash":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.gotoAndPlay("flash");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AgcBLQgFgEAAgFQAAgIAEgFQAFgHAIAAQAGAAAEAFQADAEAAAGQAAAFgDAGQgEAGgIABQgFgBgFgDgAgWAiQgEgEAAgGQAAgIANgKIAVgPQANgKAAgHQAAgKgJgHQgJgIgJAAQgGAAgIAGQgKAGgEAAQgFAAgFgFQgDgEAAgFQAAgKARgIQAOgHAKABQAUAAARAPQARAPABAVQAAAUgVAOIgQALIgOANQgEAGgGgBQgGAAgEgDg");
	this.shape.setTransform(77.1,16.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("AgIBEQgEgEgBgFIABgKIAAgLIgCgyIgSgBQgMgCAAgLQAAgFADgEQAEgEAGAAIARABIAAgKIgBgKQAAgFAEgEQAEgDAFAAQAOAAAAAYIAAAIIAJgBQAMAAAEABQAIADAAAKQAAAFgEAEQgDADgHAAIgEAAIgGAAIgJABIACAzIAAAEIAAAGQAAAWgNAAQgFAAgEgDg");
	this.shape_1.setTransform(66.8,17.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009900").s().p("AAYAtQgKAEgHACQgGADgEAAQgYAAgLgNQgMgNAAgZQAAgWASgRQAQgRAYAAQAJAAANAFQAOAHAAAIQAAAEgCACIgBAKIgBAOQAAARACAIIAFAKIAEAKQAAAFgEADQgEAEgFAAQgFAAgJgJgAgNgTQgKAKAAANQAAANAEAHQAGAGAJAAQAFAAAFgCQAFgCAFgEQgCgWAAgLIAAgHIABgKIgDgBIgDAAQgMAAgKAKg");
	this.shape_2.setTransform(56.6,19.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009900").s().p("AAXBIQgDgIgCgPIgBgWIAAgIIAAgHIAAgJQgBgEgEAAQgLAAgIAJQgEAFgIAOQAAAjgDAIQgEAIgJAAQgFAAgEgEQgEgEAAgFIABgFIABgbIAAhAIAAgDIABgQIgBgJIgBgIQAAgGAEgEQAEgDAGAAQAJAAAEAKQABAGAAAMIAAAUIgBATQAHgHAJgEQAHgDAJAAQARAAAHAJQAFAHACAOIABAYIACATIADATIAAAEQAAAFgEAEQgEADgFAAQgKAAgDgJg");
	this.shape_3.setTransform(45.4,16.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009900").s().p("AATBMQgFgDAAgGQgFgLgBgIIgKg9QgHASgIAQQgKAXgDAOIAAAEQAAAGgFAEQgFADgGAAQgGAAgFgDQgGgEAAgHIgCgMIgLgtQgHgWgPgrIgBgFQABgGAEgDQAEgDAGAAQAHAAAEAGQADADADAJQAJAcAMA0QAIgTAJgZQAGgVAEgJQAKgWAJAAQAJAAAFALQACAFACANIADAUQACAQAKAsQAKgYASgtIAFgSQADgLAEgGQAEgHAJAAQAGAAAEAEQADADAAAGIgDAKIgEAKIgFARIgSApIgSAqIgIAQQgEAIgJAAQgGAAgFgDg");
	this.shape_4.setTransform(29.1,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},3).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16.6,0,68.3,31.9);


(lib.WordsCarmen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"flash":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.gotoAndPlay("flash");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AASAoIgDgSIgBgSIABgHIAAgIIAAgCIAAgFQAAgHgDAAQgIAAgGAKQgHAJgEAOIgBAIIgBAIIAAAIIgBAIQAAAEgDAEQgEADgFAAQgFAAgEgDQgDgEAAgEIgBgIIAAgIIABgXIABgXIAAgJIAAgIQAAgFADgDQAEgDAFAAQALAAABAOIAAABQANgNANAAQARAAAGAOQAEAJAAATIAAAGIAAAEQAAAIACAKQACALAAAHQAAAFgDADQgEADgFAAQgLAAgBgLg");
	this.shape.setTransform(100.5,12.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("AgdAmQgPgLAAgUQAAgWAMgPQANgRAVAAQAPAAALAFQANAHgBANQAAAKgKAHQgFAEgPAFIgdAOQAFAEAGACQAGACAGABQAMAAAIgFQAHgFAFABQAJAAAAAJQAAAJgPAHQgMAFgOAAQgTAAgOgKgAgLgUQgGAFgEALIAUgJIATgJQgHgEgJABQgHgBgGAGg");
	this.shape_1.setTransform(90.6,12.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009900").s().p("AgHAzQgDgEAAgFIgCgdIgCgdIgBgIQgLAFgKAOIgBACIgBAbIAAAHIAAAGQAAAEgEADQgEADgFAAQgHAAgDgHQgCgEAAgKIAAgfIAAgNIAAgNQAAgIACgGQAEgIAGAAQAFAAAEAEQAEADAAAFIgBAHQANgPAMAAQAOAAAFAKQAFgEAHgDQAGgCAIAAQARAAAGARQACAEACAUIAGAuQABAFgEAEQgEADgFAAQgKAAgCgKIgDgaIgDgYQgCgQgEAAQgCAAgHAEIgLAHQAAAKADASQACATAAAJQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_2.setTransform(78.8,12.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009900").s().p("AgiAuQgDgEAAgEIAAg5IAAgIIAAgIQAAgFAEgDQADgEAFAAQAKAAACAKQAOgLATAAQASAAAAAXIAAAGQgBANgMAAQgKAAgBgLIAAgJQgTADgIARIAAAsQgBAFgDADQgDADgFAAQgGAAgDgDg");
	this.shape_3.setTransform(67.5,12.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009900").s().p("AAVApIgOAFQgGACgDABQgWAAgKgMQgLgLAAgXQAAgUAQgPQAPgPAVAAQAJAAALAEQANAGAAAIQAAADgCACIgBAJIgBAMQAAAPACAIIAEAJIAEAIQAAAGgEACQgDADgFABQgEgBgJgHgAgMgRQgIAJAAAMQAAALAEAHQAEAFAIAAQAFAAAFgCQAFgBAEgEQgDgUAAgKIABgHIABgIIgDgBIgDgBQgLAAgJAKg");
	this.shape_4.setTransform(58.1,12.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#009900").s().p("AgmA1QgNgNAAgTQAAgcAZgfQAWgaAWAAIAHAAIAGABQADgEAGAAQAJAAACALIABARQAAAEgCAEQgDAEgHAAQgIAAgDgIQgCgEgCAAQgBgBgGAAQgLAAgNARQgVAXAAAVQAAAKAHAGQAGAIAJgBQAIAAAJgEIANgJQAHgEADgBQAGAAADAFQAEADAAAEQAAAGgFADQgYAVgYAAQgUAAgNgPg");
	this.shape_5.setTransform(47.5,10.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-5.2,147,29.1);


(lib.Wordssubject = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"flash":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.gotoAndPlay("flash");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("AgcBLQgEgEAAgFQAAgIADgFQAFgHAIAAQAHAAADAFQADAEAAAGQAAAGgDAFQgFAGgGAAQgGABgFgEgAgWAhQgEgEAAgFQAAgIANgKIAWgPQAMgJAAgIQAAgJgJgIQgJgIgJAAQgFAAgKAGQgJAGgDAAQgHAAgDgEQgFgFAAgFQAAgJASgJQAOgGAKAAQAUAAARAPQARAPAAAVQAAAUgTAOIgRAMIgOAMQgFAGgFAAQgGAAgEgFg");
	this.shape.setTransform(91.5,46.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AgIBEQgFgDABgGIAAgLIABgKIgCgyIgTgBQgMgBAAgMQAAgGAEgDQAEgEAFAAIARABIgBgKIAAgKQAAgFAEgEQAEgEAGABQANgBAAAZIAAAIIAKgBQALAAAEABQAIADAAAKQAAAFgEAEQgEADgFAAIgGAAIgEAAIgJABIABAyIABAFIAAAGQgBAWgOABQgEAAgEgEg");
	this.shape_1.setTransform(81.2,47.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("AAXAtQgIAEgHACQgHADgEAAQgYAAgLgNQgMgNAAgZQAAgWARgRQARgRAYAAQAJAAAMAFQAPAHAAAIQAAAEgCACIgCAKIAAAOQAAARADAIIAEAKIAEAKQAAAFgEADQgEAEgGAAQgEAAgKgJgAgNgTQgKAKAAANQAAANAFAHQAEAGAKAAQAFAAAGgCQAEgCAGgEQgEgWAAgLIABgHIACgKIgEgBIgDAAQgMAAgKAKg");
	this.shape_2.setTransform(71,49.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066FF").s().p("AAXBIQgDgIgCgPIgBgWIAAgIIAAgHIAAgJQgBgEgEAAQgLAAgIAJQgEAFgIAOQAAAjgDAIQgEAIgJAAQgFAAgEgEQgEgEAAgFIABgFIABgbIAAhAIAAgDIABgQIgBgJIgBgIQAAgGAEgEQAEgDAGAAQAJAAAEAKQABAGAAAMIAAAUIgBATQAHgHAJgEQAHgDAJAAQARAAAHAJQAFAHACAOIABAYIACATIADATIAAAEQAAAFgEAEQgEADgFAAQgKAAgDgJg");
	this.shape_3.setTransform(59.7,46.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066FF").s().p("AAUBMQgFgDgBgGQgFgLAAgIIgMg9QgGASgHAQQgLAXgEAOIABAEQAAAGgFAEQgFADgFAAQgHAAgGgDQgEgEAAgHIgEgMIgKgtQgHgWgOgrIgBgFQgBgGAFgDQAEgDAFAAQAIAAAFAGQACADADAJQAJAcANA0QAIgTAHgZQAHgVAEgJQAKgWAJAAQAJAAAFALQACAFACANIADAUQABAQALAsQALgYARgtIAFgSQADgLAEgGQAFgHAHAAQAHAAADAEQAFADAAAGIgEAKIgEAKIgGARIgRApIgSAqIgHAQQgFAIgKAAQgFAAgEgDg");
	this.shape_4.setTransform(43.4,47);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066FF").s().p("AgmAzQgDgEAAgFIAAg/IABgJIAAgJQgBgGAEgDQADgEAGAAQALAAACALQAQgNAWAAQATAAAAAaIAAAHQgBAPgNAAQgMAAAAgNIgBgKQgVAEgJATIAAAwQAAAFgEAEQgDAEgHAAQgFAAgEgEg");
	this.shape_5.setTransform(19.7,49.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0066FF").s().p("AgfApQgOgNgBgXQgBgVANgRQAPgUAZAAQAUAAALAQQAKAOAAAVQAAAWgMAQQgNASgWAAQgSAAgNgNgAgNgQQgGAJAAAMQAAAMAHAGQAFAFAHAAQAHAAAHgGQAHgHAAgLQACgfgSAAQgLAAgHALg");
	this.shape_6.setTransform(9.4,49.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0066FF").s().p("AgfApQgOgNgBgXQgBgVANgRQAPgUAZAAQAUAAALAQQAKAOAAAVQAAAWgMAQQgNASgWAAQgSAAgNgNgAgNgQQgGAJAAAMQAAAMAHAGQAFAFAHAAQAHAAAHgGQAHgHAAgLQACgfgSAAQgLAAgHALg");
	this.shape_7.setTransform(66.8,19.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0066FF").s().p("AAXBIQgDgIgCgPIgBgWIAAgIIAAgHIAAgJQgBgEgEAAQgLAAgIAJQgEAFgIAOQAAAjgDAIQgEAIgJAAQgFAAgEgEQgEgEAAgFIABgFIABgbIAAhAIAAgDIABgQIgBgJIgBgIQAAgGAEgEQAEgDAGAAQAJAAAEAKQABAGAAAMIAAAUIgBATQAHgHAJgEQAHgDAJAAQARAAAHAJQAFAHACAOIABAYIACATIADATIAAAEQAAAFgEAEQgEADgFAAQgKAAgDgJg");
	this.shape_8.setTransform(56.1,16.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0066FF").s().p("AATBMQgFgDAAgGQgEgLgCgIIgKg9QgHASgIAQQgKAXgDAOIAAAEQAAAGgFAEQgFADgGAAQgHAAgEgDQgGgEAAgHIgCgMIgLgtQgGgWgQgrIgBgFQABgGAEgDQAEgDAGAAQAHAAAEAGQADADADAJQAKAcALA0QAJgTAIgZQAGgVAEgJQAKgWAJAAQAJAAAFALQACAFACANIACAUQADAQAKAsQALgYARgtIAFgSQACgLAFgGQAEgHAJAAQAFAAAFAEQADADAAAGIgDAKIgEAKIgFARIgSApIgSAqIgIAQQgEAIgKAAQgFAAgFgDg");
	this.shape_9.setTransform(39.8,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},3).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.2,0,97,61.8);


(lib.Wordsit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"flash":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.gotoAndPlay("flash");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("AgHA9QgEgDAAgFIAAgJIABgKIgCgsIgQgBQgMgCAAgKQABgFADgDQADgEAFAAIAPABIAAgJIAAgJQAAgFADgDQAEgDAFAAQAMAAAAAWIAAAHIAJgBQAKAAADACQAIACgBAIQAAAFgDAEQgDADgFAAIgFAAIgEAAIgIAAIABAuIAAAEIAAAFQAAAUgMAAQgFAAgDgDg");
	this.shape.setTransform(78.4,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AgpBAQgEgEAAgEQAAgFAFgEQADgDAGAAIARgCIAAgnQAAgXABgWIgTAAQgGAAgDgDQgEgDAAgFQAAgGAEgDQADgDAFAAIAagBQAPAAAbAEQALABgBALQABAFgFAEQgDACgFAAIgWgCIgCAqIAAAnIAYAAQAFAAAEAEQADADAAAFQAAAFgDADQgEAEgFAAIgQAAIgOAAIgRACIgSABQgGAAgDgDg");
	this.shape_1.setTransform(69.2,15.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,147,29.1);


(lib.anim_pencil = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{notinuse:0,inuse:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(2));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("ASr7RQhLAqg7BpQgUAZgaAdQgJgUguAKQAHAcAIAbQAWgYASgVAPysfQBJgXBTgTQCdhwB1ipQgLgeA6g6QAOgNCMiTQgFgohmifQhlifjugRAPysfQBFhHBJhMAWgxiQhMAVgmgSQgPgHgOgHQjxh9hRjxAPA4SQiaCViCCPQgEA8AgBAQizC8idCmQgwAyguAwQweRShJAxQj9Cvi9DZQgRBDgBA9QAAABgBABQgsAfgeAgQhCBHAGBJQAGBSBeBUQANAMAQAMQBeBLBgAhQAAAAAAAAQBhAWBZiRQCekLDEjzQANgQASgVQA8hFBxh4Qh6ghgzhOQAsiHCRgxQBHgYBOgUQgNBeA/AWQBIhKBUhWQCmipGqm3QBUhWBfhiQB2h6CHiLAJCliQlfA4AvmEAFwsQQA+FVFHhfAmBJ9QAogqAugwQA7g+BGhHAkrIjQhCg7gig7AouM6Qgmi3Amh1A0iPfQABgBAAAAQAAAAAAABQgCDYDICQQBMA3BgghA0hPdIAAABA2oSuQh8ERgnC3QgMA6gRAiQAAAAABAAQGVicBpheAjcEqQBhgZBtgTAZp1aQl5hNhFkq");
	this.shape.setTransform(164.1,174.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFCC").s().p("A5LZ2QAni3B8kRQAGBSBeBUQhZEUjKBqIgBAAQARgiAMg6gASr7RQDuARBlCfQBmCfAFApQl5hOhFkqg");
	this.shape_1.setTransform(164.1,174.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEFE49").s().p("AAki+IAdAYQBfBMBfAgQhpBdmUCcQDLhqBXkTg");
	this.shape_2.setTransform(25.6,330);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AsORzIgBAAQhfghhfhLIgcgYQhfhUgGhSQgFhJBChHQAdggAtgfIABAAQgCDYDICRQBLA3BgghQhNB9hTAAQgNAAgMgDgAjTCpQAriHCRgwQBGgYBOgUQgCAQAAANQAABEA0ASIiACFQhCg6gig7QAiA7BCA6IhVBaQh7ghgyhOQAyBOB7AhQhyB4g7BFQgni3Anh1gAB7gdQAAgNACgQQBigZBsgSIicCeQg0gSAAhEgAJtwTIBdhiQA+FVFHhfIiyC5QgsAHgmAAQkIAAAqlUg");
	this.shape_3.setTransform(129.4,210.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEFD85").s().p("AASE1IgdgOQjwh9hRjwIAogtIAtg2QA8hqBLgpQBFEqF4BMIiaCgQg7A5ALAfQgoALgeAAQgaAAgRgIg");
	this.shape_4.setTransform(294.9,31.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AyaWcQjIiRACjYIAAgBIAAAAQABg9ARhDQC9jaD9iuQBJgyQexSQgvGEFfg3QmqG2imCqQhtAShhAZQhOAUhHAYQiRAxgsCHQgmB2AmC2IgfAmQjEDzieELQgkAMghAAQg4AAgvgigAExq8IFQlhQgghAAEg9QCCiOCaiVQAHAcAIAaQBRDyDxB8IAdAPQAmASBMgVQh1CoidBwQhTAThJAXICOiSIiOCSIj9EFQhIAVg6AAQjTAAgwkLg");
	this.shape_5.setTransform(170.4,166.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.1,1,1).p("AUv5oQDuAQBmCfQBkCfAGApQl5hOhFkpQhLApg8BqQgUAYgZAeQgSAVgWAXQgIgagHgcQAtgLAKAVART1zQBQDyDyB8QAOAIAPAHQAmARBMgUQgMgfA8g6QANgNCMiSARE2pQiaCViCCOQgEA9AfBAQixC7ifCmAGXpGQAtgwAvgyQA/FWFHhgQhfBihUBXQlgA3AxmEgAR2q3QBEhHBKhLAR2q3QBJgXBSgTQCehwB1ioAN5myQB3h6CGiLAhZGSQgMBeA+AWQhFBIg7A9QhDg6gig7AmqJ2QAriHCRgxQBHgYBOgUQBhgZBtgSAmqOiQgTAVgNARQjDDzifELQhgAhhLg3QjIiRACjYQAAgBAAAAQAAAAgBABQABgBAAAAQABg9AQhDQC9jaD+iuQBIgyQgxSAinKLQguAwgoAqQhyB4g7BFQgni2Anh2Aj9LlQh7gggyhPAydRGIAAAAAssXGQhYCQhhgWIgBAAQhEA9nbgeQgiADgfgEQgogFgjgQQgzgYgogwQCpgnBWgNQBXgMBxiqQAEA5AxA7QgSBehvA0QiAA8iggQAzwWLQAUAYAcAZQANAMAPAMQBfBMBfAgA0lUXQgFhKBChHQAeggAsgfALGj5QmrG2imCqQhUBVhIBK");
	this.shape_6.setTransform(150.9,184.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEFE49").s().p("AjIBlQgjADgegEQgpgFgjgQQCgAQCAg8QBvgzARheQAUAYAcAZIAcAYQBfBLBfAgQgtApjlAAQhvAAicgKg");
	this.shape_7.setTransform(16.9,337.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AsPRzIAAAAQhfgghfhMIgdgYQgcgZgUgYQgwg7gEg5QgGhKBDhHQAdggAsgfIACAAQgCDYDHCRQBMA3BgghQhNB9hTAAQgNAAgNgDgAjUCpQAsiHCRgwQBGgYBOgUQgCAQAAAOQAABDA0ASIiACFQhCg6gig7QAiA7BCA6IhVBaQh7gggzhPQAzBPB7AgQhyB4g7BFQgni2Amh2gAB7gcQAAgOACgQQBhgZBtgSIicCeQg0gSAAhDgAJtwTIBdhiQA+FWFHhgIizC5QgsAGglAAQkIABAqlUg");
	this.shape_8.setTransform(129.5,230.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEFD85").s().p("AASE1IgdgPQjxh8hQjxIAogsIAtg2QA8hqBLgpQBFEpF4BNIiaCfQg7A6ALAfQgoALgeAAQgaAAgRgIg");
	this.shape_9.setTransform(294.9,51.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AyaWcQjHiRACjYIAAgBIAAAAQAAg9ARhDQC9jaD9iuQBJgyQfxSQgwGEFfg3QmqG2imCqQhtAShhAZQhOAUhHAYQiRAxgsCHQgmB2AnC2QgTAVgNARQjEDzieELQgkAMghAAQg4AAgvgigAExq8IFQlhQgghAAEg9QCCiOCaiVQAHAcAJAaQBQDyDxB8IAdAPQAmARBMgUQh1CoidBwQhTAThJAXICOiSIiOCSIj9EFQhHAVg7AAQjTAAgwkLg");
	this.shape_10.setTransform(170.4,186.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFCC").s().p("A6RZYQgzgYgogxQCpgnBXgMQBWgNByiqQAEA5AwA7QgRBehwA1QhlAvh6AAQgfAAgigDgAUv5aQDuARBlCfQBlCfAGAoQl5hNhFkqg");
	this.shape_11.setTransform(150.9,182.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,330.2,351.2);


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


(lib.anim_carmen_ishitfalls = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_5 = function() {
		playSound("carmen_falls");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(5).call(this.frame_5).wait(6));

	// Layer 9
	this.instance = new lib.static_ball("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(335.8,2.2,1,1,0,0,0,23.1,23.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},1).to({scaleX:0.67,scaleY:0.67,guide:{path:[335.8,2.1,337.6,-27.7,346.4,-53.7,355.7,-80.9,373.8,-106.8,391.9,-132.8,416.5,-147.1,421.4,-149.9,427.4,-150.1]}},9).wait(1));

	// LBicep
	this.instance_1 = new lib.static_carmen_LBicep("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(379.2,76.9,0.999,0.999,0,171.2,171,6.2,10.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:6.3,skewX:173.5,skewY:173.2,x:379.1},1).to({regX:6.2,regY:10.8,scaleX:1,scaleY:1,skewX:180,skewY:180,y:76.7},3).to({x:388.2,y:173.8},6).wait(1));

	// LForearm
	this.instance_2 = new lib.static_carmen_LForearm("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(339.5,78.2,0.993,0.993,0,-28.6,151.4,4.7,57.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:57.2,scaleX:0.99,scaleY:0.99,skewX:-25.1,skewY:154.9,x:339.2,y:76.6},1).to({regX:4.6,regY:57.3,scaleX:1,scaleY:1,skewX:-15.2,skewY:164.8,x:338.4,y:72.1},3).to({x:345.5,y:167.9},6).wait(1));

	// body
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("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");
	this.shape.setTransform(296,132.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Ai0HZQgkgOgegVQghgVgXgdQgQgVgNgYIgKgUQgQghgZgZQgOgMgOgKQAmADAigPQAhgQAcgaQAcgaAagWQAbgWAZgPQAhAAAfAWQAdAVAkAOQAkAOAkAKQAfAIAkABIAJAAQAogBAlgIQAXgGAPAAQAeAPAWAcQAWAbAUAgQATAgAUAeQALAQAQAOQgVgMgfAOQggAOgjANIhHAcQggANghAHIgJACIhLAPQgkAHglABQgkAAgiAFIgFABIgUACIgDAAQgbAAgYgKgAEZhEQhAgLg8gOQg8gPgggQQghgRgXgbQgXgagKgYQgEgLgBgNQgBgPAFgSQAsgaAZgqQAhg3AQg/IAGgVQATADAYAOQgJAjAAAyQABBGAnArQATAWAZgaQAngnAVg2QAKgaAVglQB1ACgPDGIgBADIABACIgBgCIABgDIAAACIAAADQAAA9gZAwQgWAogoAGIgRABQgMAAgNgCg");
	this.shape_1.setTransform(336.2,109.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA5ARIgBgBQgJgRgUgGIAEgMQAZgGAUAAQALANgCAVIgDANQgEAPgMAIQgDgRgGgLgAgxAQQgKgcgZgJQACgJAFgJIADgFQAXATAdAMIgBALIgHAPQgFALgJAOQgCgMgDgKg");
	this.shape_2.setTransform(367.5,40.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag/BGQAAgIAIgIIABAAQAFgJAGgFQAQgOAYAQQAAAJgCAJQgCAIgEAIQgFALgLAFIAAAAQgMAGgIAAQgRAAABgcgAAig5IAAgFQABgMADgKQAUAGAJASIABABQAGAMADAQIgCABQgNAHgJAAQgTAAAAgigAhFgtQgFgMgBgLIAAgBQgCgOAEgOQAZAJAKAcQADAKACAMQgGAHgFAEQgEACgEAAQgKAAgHgUg");
	this.shape_3.setTransform(366.4,48.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC66").s().p("AHFQ6Qg9gOgvgUQg3gYhEAGQhLAHgHhRQATgwBAgmIBmg8QA0geA4gTQA+gWAdgtQAcgsAxgtQAvgsAtgYQA1gdBEgOQgOgSgWgTQgdgZghgTQgigUgbgYQgcgZgUgeQgUgggUgbIgngzQAigHAfgNIBHgcQAjgNAggPQAggOAUANIAKAHIAMAIQAZAXAPAfQAQAeAPAhQAPAhAQAfIAiBFQARAiAIAjIAQBIIADAQQgNATgKAWQgUAwgwAlQgzAmg2AYIhwAwIh2A0Qg3AZg8AOQglAKgPAdQgmBKBHAPQAhAHAigBQA9gBAfAfQAuAthIAGIgTAAQgsAAgqgJgAD2O/QgFgNAAgKQAAgaAhgJQghAJAAAaQAAAKAFANgAu7NUQg/goBIg3QAWgRAQgcQAdgzAmg1QATgaAiALQAsAOA3AFQBDAFA6geQA5gfAygiQA3gmA8gUQBAgUBEgDQBLgDAZg/QAVg2Ang3QAbgnAWglQAhg3AmgmQANAYAQAUQAXAeAhAVQAeAUAkAPQAaAKAdAAIAAAAQgnA7gkAmIhZBYIhYBZQguAxgrAhQgsAjg9ANQg+APhDAFQhEAGhEAKIh8AUIiDAWQhAAMgdAwQghA3g4AXQgUAIgTAAQgXAAgVgNgAH0g0QgkgBgggIQglgJgkgOQgkgPgdgVQgfgWghAAQAcgIAUghQAUghAPgkQAPgkANgiQAMgiAKgkQAKgjAEgmQAKAYAYAbQAYAbAgARQAgAQA8APQA8AOBAALQAXAEATgDQgGAmgQAbQgKASgKATIgNAaQgOAdgVAcQgUAcAIAhQgPABgXAFQglAJgoAAIgIAAgAIDhDIABAAIgBAAQgJACgGgBQgKAAAAgFQAAgEAHgIQgHAIAAAEQAAAFAKAAQAGABAJgCgAI/oCQgngrgBhFQAAgyAJgjQAEgRASgdQAZAUATATQAZAZApABIAEAAIADAAIAAAAIAAAAQAVAAASgDQgSADgVAAIAAAAIAAAAIgDAAIgEAAQgpgBgZgZQgTgTgZgUIgFgEQgbgVgLgbIAFgRQAThBAcg1IA2hkQAjgVAqgRQAwgTAnAXIADADQAPAgAXARQAGANAFAOQAEAOADAOQgJAKgGAMQgPAfAIAoQAHAjADAoIgBAEQgQAhgQAWQgWAdglANQgMAEgOADIgMAVQgUAmgLAZQgVA2gnAoQgNAOgMAAQgKAAgJgLgAKUszQgGAFgFAJIAAABQgJAHAAAIQgBAqAlgUIAAAAQALgFAFgLQAEgIACgIQACgJAAgJQgNgIgKAAQgKAAgHAGgALus5QAQgBgCgXQACAXgQABIgBAAIAAAAIgIgCIAIACIAAAAIABAAgALqu8IgEAMQgDAKgBAMIAAAFQAAAxApgWIACgBQAMgHAEgQIADgNQACgVgLgOIAJgJIgJAJQgIgLgRgGQgNAJgHAOQAHgOANgJQARAGAIALQgUAAgZAGgAJ0ugQABALAFAMQAKAcAPgKQAFgEAGgHQAJgNAGgMIAGgQIABgLQADgogfAAIgBAAIAAAAIgCAAQgNABgHAIIgNgMIANAMQAHgIANgBIACAAIAAAAIABAAQAfAAgDAoQgdgLgWgUIgEAFQgEAKgDAJQgDAOABAOIgBAAIABABgAM1vbQgHgbgggFQAgAFAHAbgALGwBQgHgGgKAAIAAAAIAAAAIgLACIAAAAIgBAAIAAAAIgBAAIABAAIAAAAIABAAIAAAAIALgCIAAAAIAAAAQAKAAAHAGIAAAAg");
	this.shape_4.setTransform(296,134.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#993300").s().p("ADKGmQAQgbAFgmQApgHAVgnQAagxgBg8IAAgEIAAgBQAQjGh2gCIANgWQANgCANgEQAlgNAVgdQARgWAQghIAAgCIAAgCQgDgogHgjQgHgoAPgfQAFgMAJgKQgCgOgFgOQgEgPgGgMQgXgSgQggIAAgBIgDgBQgmgXgwATQgrARgjAVIg2BkQgbA1gTBBIgFARIgEANIgSBEIgFAVQgRA9ggA3QgaArgtAaQgMAGgOAGQgtASgwABQAwgBAtgSQAOgGAMgGQgEASABAPIgLAMIgFAHQgdAegnAOQhMAbhLgRQgvgLgagQQAwgSAighQAwguAZg4QAwilAUgjQAZgqA0giQAsgdAag4QAcg7AggqQAdgnA/gVQA4gTBNAOQA6gMA6AdQA3AcAEBMQAEBGgYA2QgbA/AmA2QAXAjAdCSIgHAwIgEAYQgQBagXAlQgZAngeAoIgOATIgBABQglAxg+ANIglAIQAKgTALgSgAh9CVIAAAAgAAAg5IAShEIAEgNQAKAbAbAVIAFAEQgRAdgFARQgXgOgTgDgAEjmXIADABIAAABIgDgCg");
	this.shape_5.setTransform(346.2,67.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.1,1,1).p("AF1nVQgGAGgFAGQgDAEgCAEQgdAegnAOQhMAbhLgRQgwgLgZgRQAvgRAigiQAwguAZg3QAxinAUgiQAZgrA0giQAsgdAag3QAcg7AggrQAdgnA/gVQA5gSBMANQA7gLA5AdQA4AcAEBMQADBGgXA2QgbA+AlA3QAYAjAcCTQgDAZgDAWQgCANgDAMQgQBZgXAlQgYAngeApQgHAJgIAKQAAAAAAABQglAxg+AMQgUAEgRAFQAKgUAKgRQAQgcAGgmQApgGAVgoQAZgwAAg9QAAgCAAgBQAAgBAAgBQAQjGh2gCQAGgLAGgLQAOgDAMgEQAlgMAWgdQARgXAPghQABgBAAAAQAAgBAAgBQgDgpgHgjQgIgoAPgfQAGgLAJgLQgDgOgEgOQgFgOgGgNQgXgRgPggQAAgBgBAAQgBgBgBgBQgngWgwATQgqARgjAVQgcAygaAyQgcA1gTBAQgCAJgDAJQgCAGgBAHQgJAfgKAkQgDAKgDALQgQA/ghA3QgZAqgtAaQgEASABAPgAMcwgQgCgCgBgBALmudQgDAKgBAMQAAADAAADQAAAxApgWQABgBABAAQgCgRgHgMQAAAAAAAAQgKgSgUgHQACgGACgGQAHgOANgJQARAGAIALQgUABgZAFAK0uiQAAAFgBAGQgCAHgEAIQgGAMgJANQgGAIgFADQgPAKgKgcQgFgLgBgMIAAAAQgBgPADgOQADgJAEgJQACgDACgCQAWATAdAMQADgqgiABQgNABgHAJQgHgGgGgGAMNtnQAMgIAEgPQACgHABgHQACgVgLgOQAIgHABgBAMOvnQAgAFAHAbAJ0uNQAAAAgBAAAKetvQgCgMgDgJQgKgdgZgJAKJsRQgJAIAAAIQgBApAlgTIAAAAQALgFAFgLQAEgIACgIQACgKAAgIQgYgQgQANQgGAFgFAKgAILsVQALAaAbAVQACACADACQAZAUATATQAZAaApAAQAZABAVgEAIgq0QgJAjAAAyQABBGAnArQATAWAZgaQAngnAVg2QALgaAUglAIgq0QAEgQASgeAH1rFQAUADAXAOAF4n2QgMAHgOAGQgtASgxAAADmh6QAcgJAUghQAUghAPgjQAPgkANgjQAMgiAKgjQAKgkAEglQAKAYAYAaQAYAbAgARQAgAQA8APQA8AOBAALQAXAEATgDAF5m9QgEgLAAgNANHsMQAAgCABgBAMsnBQAAgCAAgDALlsnQAZAGgCgcAKovxQASgGAMAJAJvgvQAeAPAWAcQAWAaAUAgQATAgAUAeQAMARAPANQAFAEAFADQAGAFAGAEQAZAXAPAeQAQAeAPAhQAPAhAQAgQARAiARAiQARAiAIAkQAIAlAIAiQACAIABAJQgNATgKAVQgUAwgwAlQgzAmg2AYQg4AYg4AZQg6AZg8AbQg3AYg8APQglAJgPAeQgmBJBHAPQAhAHAiAAQA9gBAfAfQAuAshIAGQg2ADgzgMQg9gOgvgUQg3gXhEAFQhLAHgHhQQATgxBAgmQA1gfAxgcQA0geA4gUQA+gVAdgtQAcgtAxgtQAvgrAtgZQA1gdBEgNQgOgSgWgUQgdgZghgTQgigUgbgYQgcgZgUgdQgUgggUgbQgTgZgUgbQgEABgFABQglAHgmAIQgkAHgmABQgkAAgiAFQgCABgDAAQgKACgJAAQgdABgagLQgkgOgegVQghgVgXgdQgQgVgNgYAMPCSQgUgMggAOQggAOgjANQgjANgkAPQgfANgiAHAKri/QgHAMgGAOQgOAdgVAcQgUAcAIAhQgPAAgXAGQglAIgoABQgEAAgEAAQgkgBgggIQglgKgkgOQgkgOgdgVQgfgWghAAAHxg/QgQAPATABQAGABAKgBAEsD9QgIAJgQgGQgnA8gkAlQgqAqgvAuQgtAtgrAsQguAxgrAiQgsAig9AOQg+AOhDAGQhEAGhEAKQhDAKg5AKQg/AKhEAMQhAAMgdAvQghA3g4AXQgtATgmgXQg/goBIg3QAWgSAQgcQAdgzAmg0QATgaAiALQAsAOA3AEQBDAGA6gfQA5geAygjQA3glA8gUQBAgVBEgDQBLgDAZg/QAVg1Ang4QAbgmAWgmQAhg3AmgmQgFgKgFgKQgQghgZgZQgOgMgNgKQAlADAigPQAhgPAcgaQAcgaAagWQAbgWAZgPAESOYQguANASAu");
	this.shape_6.setTransform(296,132.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC66").s().p("AHFQ6Qg9gOgvgUQg3gYhEAGQhLAHgHhRQATgwBAgmIBmg8QA0geA4gTQA+gWAdgtQAcgsAxgtQAvgsAtgYQA1gdBEgOQgOgSgWgTQgdgZghgTQgigUgbgYQgcgZgUgeQgUgggUgbIgngzQAigHAfgNIBHgcQAjgNAggPQAggOAUANIAKAHIAMAIQAZAXAPAfQAQAeAPAhQAPAhAQAfIAiBFQARAiAIAjIAQBIIADAQQgNATgKAWQgUAwgwAlQgzAmg2AYIhwAwIh2A0Qg3AZg8AOQglAKgPAdQgmBKBHAPQAhAHAigBQA9gBAfAfQAuAthIAGIgTAAQgsAAgqgJgAD2O/QgFgNAAgKQAAgaAhgJQghAJAAAaQAAAKAFANgAu7NUQg/goBIg3QAWgRAQgcQAdgzAmg1QATgaAiALQAsAOA3AFQBDAFA6geQA5gfAygiQA3gmA8gUQBAgUBEgDQBLgDAZg/QAVg2Ang3QAbgnAWglQAhg3AmgmQANAYAQAUQAXAeAhAVQAeAUAkAPQAaAKAdAAIAAAAQgnA7gkAmIhZBYIhYBZQguAxgrAhQgsAjg9ANQg+APhDAFQhEAGhEAKIh8AUIiDAWQhAAMgdAwQghA3g4AXQgUAIgTAAQgXAAgVgNgAH0g0QgkgBgggIQglgJgkgOQgkgPgdgVQgfgWghAAQAcgIAUghQAUghAPgkQAPgkANgiQAMgiAKgkQAKgjAEgmQAKAYAYAbQAYAbAgARQAgAQA8APQA8AOBAALQAXAEATgDQgGAmgQAbQgKASgKATIgNAaQgOAdgVAcQgUAcAIAhQgPABgXAFQglAJgoAAIgIAAgAIDhDIABAAIgBAAQgJACgGgBQgKAAAAgFQAAgEAHgIQgHAIAAAEQAAAFAKAAQAGABAJgCgAI/oCQgngrgBhFQAAgyAJgjQAEgRASgdQAZAUATATQAZAZApABIAEAAIADAAIAAAAIAAAAQAVAAASgDQgSADgVAAIAAAAIAAAAIgDAAIgEAAQgpgBgZgZQgTgTgZgUIgFgEQgbgVgLgbIAFgRQAThBAcg1IA2hkQAjgVAqgRQAwgTAnAXIADADQAPAgAXARQAGANAFAOQAEAOADAOQgJAKgGAMQgPAfAIAoQAHAjADAoIgBAEQgQAhgQAWQgWAdglANQgMAEgOADIgMAVQgUAmgLAZQgVA2gnAoQgNAOgMAAQgKAAgJgLgAKUszQgGAFgFAJIAAABQgJAHAAAIQgBAqAlgUIAAAAQALgFAFgLQAEgIACgIQACgJAAgJQgNgIgKAAQgKAAgHAGgALus5QAQgBgCgXQACAXgQABIgBAAIAAAAIgIgCIAIACIAAAAIABAAgALqu8IgEAMQgDAKgBAMIAAAFQAAAxApgWIACgBQAMgHAEgQIADgNQACgVgLgOIAJgJIgJAJQgIgLgRgGQgNAJgHAOIAAAAgAJ0ugQABALAFAMQAKAcAPgKQAFgEAGgHQAJgNAGgMIAGgQIABgLQADgogfAAIgBAAIAAAAIgCAAQgNABgHAIIgNgMIANAMQAHgIANgBIACAAIAAAAIABAAQAfAAgDAoQgdgLgWgUIgEAFQgEAKgDAJQgDAOABAOIgBAAIABABgAM1vbQgHgbgggFQAgAFAHAbgALGwBQgHgGgKAAIAAAAIAAAAIgLACIAAAAIgBAAIAAAAIgBAAIABAAIAAAAIABAAIAAAAIALgCIAAAAIAAAAQAKAAAHAGIAAAAgAL+vTQARAGAIALQgUAAgZAGQAHgOANgJgAMXvCIAAAAg");
	this.shape_7.setTransform(296,134.2);

	this.instance_3 = new lib.static_carmen_fall("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(296.1,132.3,1,0.999,0,13.3,14.6,98.5,111);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_7},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape_6}]},1).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_3}]},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({_off:false},0).to({regX:98.7,regY:111.1,scaleY:1,rotation:60,skewX:0,skewY:0,y:132.4},5).wait(1));

	// RForearm
	this.instance_4 = new lib.static_carmen_RForearm("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(294.2,64.8,0.999,0.999,6.5,0,0,59,34.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:9.3,x:293.7,y:62.6},1).to({regY:34,scaleX:1,scaleY:1,rotation:15,x:293,y:58.2},2).to({x:334.8,y:125.3},7).wait(1));

	// RBicep
	this.instance_5 = new lib.static_carmen_RBicep("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(331.6,69.3,0.997,0.997,8.8,0,0,35.8,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:35.9,scaleX:1,scaleY:1,rotation:11.5,y:68.9},1).to({regX:35.8,scaleX:1,scaleY:1,rotation:17.2,x:331.2,y:68.4},2).to({x:372,y:134.3},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(196.5,-21.9,199.1,266.2);


(lib.anim_carmen_ishit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_5 = function() {
		playSound("ball_bounce");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(5).call(this.frame_5).wait(8));

	// Layer 9
	this.instance = new lib.static_ball("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-329.1,-187.9,3.333,3.333,180,0,0,23,23.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[-329,-187.6,-332.1,-188,-335.3,-188.4]}},1).to({regX:23.1,scaleX:1,scaleY:1,rotation:0,x:335.8,y:2.2},5).to({scaleX:0.67,scaleY:0.67,rotation:2880,guide:{path:[335.8,2.1,337.6,-27.7,346.4,-53.7,355.7,-80.9,373.8,-106.8,391.9,-132.8,416.5,-147.1,421.4,-149.9,427.4,-150.1]}},6).wait(1));

	// LBicep
	this.instance_1 = new lib.static_carmen_LBicep("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(379.1,76.7,1,1,150,0,0,6.2,10.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,rotation:0,skewX:153.1,skewY:153},1).to({scaleX:1,scaleY:1,skewX:180,skewY:180},9).wait(3));

	// LForearm
	this.instance_2 = new lib.static_carmen_LForearm("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(342.1,92.5,0.996,0.996,0,-60.2,119.8,4.6,57.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:4.7,scaleX:0.99,scaleY:0.99,skewX:-55.7,skewY:124.3,x:341.7,y:90.5},1).to({regX:4.6,regY:57.3,scaleX:1,scaleY:1,skewX:-15.2,skewY:164.8,x:338.4,y:72.1},9).wait(3));

	// body
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("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");
	this.shape.setTransform(296,132.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Ai0HZQgkgOgegVQghgVgXgdQgQgVgNgYIgKgUQgQghgZgZQgOgMgOgKQAmADAigPQAhgQAcgaQAcgaAagWQAbgWAZgPQAhAAAfAWQAdAVAkAOQAkAOAkAKQAfAIAkABIAJAAQAogBAlgIQAXgGAPAAQAeAPAWAcQAWAbAUAgQATAgAUAeQALAQAQAOQgVgMgfAOQggAOgjANIhHAcQggANghAHIgJACIhLAPQgkAHglABQgkAAgiAFIgFABIgUACIgDAAQgbAAgYgKgAEZhEQhAgLg8gOQg8gPgggQQghgRgXgbQgXgagKgYQgEgLgBgNQgBgPAFgSQAsgaAZgqQAhg3AQg/IAGgVQATADAYAOQgJAjAAAyQABBGAnArQATAWAZgaQAngnAVg2QAKgaAVglQB1ACgPDGIgBADIABACIgBgCIABgDIAAACIAAADQAAA9gZAwQgWAogoAGIgRABQgMAAgNgCg");
	this.shape_1.setTransform(336.2,109.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag/BGQAAgIAIgIIABAAQAFgJAGgFQAQgOAYAQQAAAJgCAJQgCAIgEAIQgFALgLAFIAAAAQgMAGgIAAQgRAAABgcgAAig5IAAgFQABgMADgKQAUAGAJASIABABQAGAMADAQIgCABQgNAHgJAAQgTAAAAgigAhFgtQgFgMgBgLIAAgBQgCgOAEgOQAZAJAKAcQADAKACAMQgGAHgFAEQgEACgEAAQgKAAgHgUg");
	this.shape_2.setTransform(366.4,48.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA5ARIgBgBQgJgRgUgGIAEgMQAZgGAUAAQALANgCAVIgDANQgEAPgMAIQgDgRgGgLgAgxAQQgKgcgZgJQACgJAFgJIADgFQAXATAdAMIgBALIgHAPQgFALgJAOQgCgMgDgKg");
	this.shape_3.setTransform(367.5,40.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#993300").s().p("ADKGmQAQgbAFgmQApgHAVgnQAagxgBg8IAAgEIAAgBQAQjGh2gCIANgWQANgCANgEQAlgNAVgdQARgWAQghIAAgCIAAgCQgDgogHgjQgHgoAPgfQAFgMAJgKQgCgOgFgOQgEgPgGgMQgXgSgQggIAAgBIgDgBQgmgXgwATQgrARgjAVIg2BkQgbA1gTBBIgFARIgEANIgSBEIgFAVQgRA9ggA3QgaArgtAaQgMAGgOAGQgtASgwABQAwgBAtgSQAOgGAMgGQgEASABAPIgLAMIgFAHQgdAegnAOQhMAbhLgRQgvgLgagQQAwgSAighQAwguAZg4QAwilAUgjQAZgqA0giQAsgdAag4QAcg7AggqQAdgnA/gVQA4gTBNAOQA6gMA6AdQA3AcAEBMQAEBGgYA2QgbA/AmA2QAXAjAdCSIgHAwIgEAYQgQBagXAlQgZAngeAoIgOATIgBABQglAxg+ANIglAIQAKgTALgSgAh9CVIAAAAgAAAg5IAShEIAEgNQAKAbAbAVIAFAEQgRAdgFARQgXgOgTgDgAEjmXIADABIAAABIgDgCg");
	this.shape_4.setTransform(346.2,67.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC66").s().p("AHFQ6Qg9gOgvgUQg3gYhEAGQhLAHgHhRQATgwBAgmIBmg8QA0geA4gTQA+gWAdgtQAcgsAxgtQAvgsAtgYQA1gdBEgOQgOgSgWgTQgdgZghgTQgigUgbgYQgcgZgUgeQgUgggUgbIgngzQAigHAfgNIBHgcQAjgNAggPQAggOAUANIAKAHIAMAIQAZAXAPAfQAQAeAPAhQAPAhAQAfIAiBFQARAiAIAjIAQBIIADAQQgNATgKAWQgUAwgwAlQgzAmg2AYIhwAwIh2A0Qg3AZg8AOQglAKgPAdQgmBKBHAPQAhAHAigBQA9gBAfAfQAuAthIAGIgTAAQgsAAgqgJgAD2O/QgFgNAAgKQAAgaAhgJQghAJAAAaQAAAKAFANgAu7NUQg/goBIg3QAWgRAQgcQAdgzAmg1QATgaAiALQAsAOA3AFQBDAFA6geQA5gfAygiQA3gmA8gUQBAgUBEgDQBLgDAZg/QAVg2Ang3QAbgnAWglQAhg3AmgmQANAYAQAUQAXAeAhAVQAeAUAkAPQAaAKAdAAIAAAAQgnA7gkAmIhZBYIhYBZQguAxgrAhQgsAjg9ANQg+APhDAFQhEAGhEAKIh8AUIiDAWQhAAMgdAwQghA3g4AXQgUAIgTAAQgXAAgVgNgAH0g0QgkgBgggIQglgJgkgOQgkgPgdgVQgfgWghAAQAcgIAUghQAUghAPgkQAPgkANgiQAMgiAKgkQAKgjAEgmQAKAYAYAbQAYAbAgARQAgAQA8APQA8AOBAALQAXAEATgDQgGAmgQAbQgKASgKATIgNAaQgOAdgVAcQgUAcAIAhQgPABgXAFQglAJgoAAIgIAAgAIDhDIABAAIgBAAQgJACgGgBQgKAAAAgFQAAgEAHgIQgHAIAAAEQAAAFAKAAQAGABAJgCgAI/oCQgngrgBhFQAAgyAJgjQAEgRASgdQAZAUATATQAZAZApABIAEAAIADAAIAAAAIAAAAQAVAAASgDQgSADgVAAIAAAAIAAAAIgDAAIgEAAQgpgBgZgZQgTgTgZgUIgFgEQgbgVgLgbIAFgRQAThBAcg1IA2hkQAjgVAqgRQAwgTAnAXIADADQAPAgAXARQAGANAFAOQAEAOADAOQgJAKgGAMQgPAfAIAoQAHAjADAoIgBAEQgQAhgQAWQgWAdglANQgMAEgOADIgMAVQgUAmgLAZQgVA2gnAoQgNAOgMAAQgKAAgJgLgAKUszQgGAFgFAJIAAABQgJAHAAAIQgBAqAlgUIAAAAQALgFAFgLQAEgIACgIQACgJAAgJQgNgIgKAAQgKAAgHAGgALus5QAQgBgCgXQACAXgQABIgBAAIAAAAIgIgCIAIACIAAAAIABAAgALqu8IgEAMQgDAKgBAMIAAAFQAAAxApgWIACgBQAMgHAEgQIADgNQACgVgLgOIAJgJIgJAJQgIgLgRgGQgNAJgHAOIAAAAgAJ0ugQABALAFAMQAKAcAPgKQAFgEAGgHQAJgNAGgMIAGgQIABgLQADgogfAAIgBAAIAAAAIgCAAQgNABgHAIIgNgMIANAMIgEAFQgEAKgDAJQgDAOABAOIgBAAIABABgAM1vbQgHgbgggFQAgAFAHAbgALGwBQgHgGgKAAIAAAAIAAAAIgLACIAAAAIgBAAIAAAAIgBAAIABAAIAAAAIABAAIAAAAIALgCIAAAAIAAAAQAKAAAHAGIAAAAgAKBvVQAHgIANgBIACAAIAAAAIABAAQAfAAgDAoQgdgLgWgUgAL+vTQARAGAIALQgUAAgZAGQAHgOANgJgAMXvCIAAAAgAKBvVIAAAAgAKBvVIAAAAg");
	this.shape_5.setTransform(296,134.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.1,1,1).p("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");
	this.shape_6.setTransform(296,132.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC66").s().p("AHFQ6Qg9gOgvgUQg3gYhEAGQhLAHgHhRQATgwBAgmIBmg8QA0geA4gTQA+gWAdgtQAcgsAxgtQAvgsAtgYQA1gdBEgOQgOgSgWgTQgdgZghgTQgigUgbgYQgcgZgUgeQgUgggUgbIgngzQAigHAfgNIBHgcQAjgNAggPQAggOAUANIAKAHIAMAIQAZAXAPAfQAQAeAPAhQAPAhAQAfIAiBFQARAiAIAjIAQBIIADAQQgNATgKAWQgUAwgwAlQgzAmg2AYIhwAwIh2A0Qg3AZg8AOQglAKgPAdQgmBKBHAPQAhAHAigBQA9gBAfAfQAuAthIAGIgTAAQgsAAgqgJgAD2O/QgFgNAAgKQAAgaAhgJQghAJAAAaQAAAKAFANgAu7NUQg/goBIg3QAWgRAQgcQAdgzAmg1QATgaAiALQAsAOA3AFQBDAFA6geQA5gfAygiQA3gmA8gUQBAgUBEgDQBLgDAZg/QAVg2Ang3QAbgnAWglQAhg3AmgmQANAYAQAUQAXAeAhAVQAeAUAkAPQAaAKAdAAIAAAAQgnA7gkAmIhZBYIhYBZQguAxgrAhQgsAjg9ANQg+APhDAFQhEAGhEAKIh8AUIiDAWQhAAMgdAwQghA3g4AXQgUAIgTAAQgXAAgVgNgAH0g0QgkgBgggIQglgJgkgOQgkgPgdgVQgfgWghAAQAcgIAUghQAUghAPgkQAPgkANgiQAMgiAKgkQAKgjAEgmQAKAYAYAbQAYAbAgARQAgAQA8APQA8AOBAALQAXAEATgDQgGAmgQAbQgKASgKATIgNAaQgOAdgVAcQgUAcAIAhQgPABgXAFQglAJgoAAIgIAAgAIDhDIABAAIgBAAQgJACgGgBQgKAAAAgFQAAgEAHgIQgHAIAAAEQAAAFAKAAQAGABAJgCgAI/oCQgngrgBhFQAAgyAJgjQAEgRASgdQAZAUATATQAZAZApABIAEAAIADAAIAAAAIAAAAQAVAAASgDQgSADgVAAIAAAAIAAAAIgDAAIgEAAQgpgBgZgZQgTgTgZgUIgFgEQgbgVgLgbIAFgRQAThBAcg1IA2hkQAjgVAqgRQAwgTAnAXIADADQAPAgAXARQAGANAFAOQAEAOADAOQgJAKgGAMQgPAfAIAoQAHAjADAoIgBAEQgQAhgQAWQgWAdglANQgMAEgOADIgMAVQgUAmgLAZQgVA2gnAoQgNAOgMAAQgKAAgJgLgAKUszQgGAFgFAJIAAABQgJAHAAAIQgBAqAlgUIAAAAQALgFAFgLQAEgIACgIQACgJAAgJQgNgIgKAAQgKAAgHAGgALus5QAQgBgCgXQACAXgQABIgBAAIAAAAIgIgCIAIACIAAAAIABAAgALqu8IgEAMQgDAKgBAMIAAAFQAAAxApgWIACgBQAMgHAEgQIADgNQACgVgLgOIAJgJIgJAJQgIgLgRgGQgNAJgHAOQAHgOANgJQARAGAIALQgUAAgZAGgAJ0ugQABALAFAMQAKAcAPgKQAFgEAGgHQAJgNAGgMIAGgQIABgLQADgogfAAIgBAAIAAAAIgCAAQgNABgHAIIgNgMIANAMQAHgIANgBIACAAIAAAAIABAAQAfAAgDAoQgdgLgWgUIgEAFQgEAKgDAJQgDAOABAOIgBAAIABABgAM1vbQgHgbgggFQAgAFAHAbgALGwBQgHgGgKAAIAAAAIAAAAIgLACIAAAAIgBAAIAAAAIgBAAIABAAIAAAAIABAAIAAAAIALgCIAAAAIAAAAQAKAAAHAGIAAAAg");
	this.shape_7.setTransform(296,134.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_7},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape_6}]},1).wait(12));

	// RForearm
	this.instance_3 = new lib.static_carmen_RForearm("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(297.9,87.3,1,1,-22.6,0,0,59,34.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,scaleY:1,rotation:-18.3,x:297.4,y:84},1).to({regY:34,scaleX:1,scaleY:1,rotation:15,x:293,y:58.2},8).wait(4));

	// RBicep
	this.instance_4 = new lib.static_carmen_RBicep("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(333.1,72.1,0.999,0.999,-20.9,0,0,35.8,7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1,scaleY:1,rotation:-16.6,x:332.9,y:71.7},1).to({regY:7.5,scaleX:1,scaleY:1,rotation:17.2,x:331.2,y:68.4},8).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-407.1,-265.5,802.7,509.9);


(lib.anim_carmen_is = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		playSound("ball_kick");
	}
	this.frame_8 = function() {
		playSound("ball_kick");
	}
	this.frame_12 = function() {
		playSound("ball_kick");
	}
	this.frame_16 = function() {
		playSound("ball_kick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(4).call(this.frame_8).wait(4).call(this.frame_12).wait(4).call(this.frame_16).wait(5));

	// Layer 9
	this.instance = new lib.static_ball("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(359.6,18.9,1.554,1.554,0,0,0,23.1,23.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-1080},1).to({scaleX:1,scaleY:1,guide:{path:[359.4,18.9,386.4,56.5,405.7,107.8]}},4).to({scaleX:0.66,scaleY:0.66,rotation:1800,guide:{path:[405.7,107.9,405.7,107.9,405.7,107.9,366.3,146.8,354.3,194.9,347.1,223.5,338.5,241,338.5,241,338.5,241]}},4).to({scaleX:1.51,scaleY:1.51,rotation:3600,guide:{path:[338.5,241,311.2,213.8,278.8,178.6,249.5,146.6,202.9,136.1,171.6,129.1,143.6,135.4,143.6,135.4,143.6,135.4]}},4).to({scaleX:0.34,scaleY:0.34,rotation:2520,guide:{path:[143.5,135.5,183.3,167,199.6,202.3,212.6,230.1,213.9,273.6]}},4).to({scaleX:2.9,scaleY:2.9,rotation:3600,guide:{path:[214,273.6,223.6,246,225.9,220.8,228.1,196.4,235.5,173.3,243.8,147.8,251.1,122.1,258.3,96.8,265.1,72.1,271.8,48,280.8,24.7,289.8,1.3,297.6,-22.6,305.7,-47.8,323,-69.6,338.3,-89,357.9,-103.8,378.3,-119.4,397.8,-135.9,418.7,-153.5,443.5,-157.8,450.6,-159,457.5,-159.5]}},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(322.7,-18,73.6,73.6);


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
		var bgm = createjs.Sound.play('bgmSub',{loop:-1});
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
		
		 window.open ("subject_scene8.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("subject_scene6.html","_self");
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

}).prototype = getMCSymbolPrototype(lib.UI, new cjs.Rectangle(-486.5,-13,534.3,401.8), null);


(lib.Diagramhits = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"hits subject":63,"hits verb":147,"hits complement":217,"hits review":277});

	// timeline functions:
	this.frame_6 = function() {
		playSound("thesubjectitisapronoun");
	}
	this.frame_74 = function() {
		playSound("cowbell_3times");
	}
	this.frame_75 = function() {
		playSound("it");
	}
	this.frame_175 = function() {
		playSound("cowbell_3times");
	}
	this.frame_176 = function() {
		playSound("ithits");
	}
	this.frame_242 = function() {
		playSound("cowbell_3times");
	}
	this.frame_243 = function() {
		playSound("ithitscarmen");
	}
	this.frame_249 = function() {
		playSound("cowbell_3times");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(6).call(this.frame_6).wait(68).call(this.frame_74).wait(1).call(this.frame_75).wait(100).call(this.frame_175).wait(1).call(this.frame_176).wait(66).call(this.frame_242).wait(1).call(this.frame_243).wait(6).call(this.frame_249).wait(96));

	// textClips
	this.instance = new lib.Wordsverb();
	this.instance.parent = this;
	this.instance.setTransform(-261.9,430.1,1,1,0,0,0,50.7,14.6);

	this.instance_1 = new lib.Wordscomplement();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-86,430.1,1,1,0,0,0,50.7,14.6);

	this.instance_2 = new lib.Wordssubject();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-434.9,431.8,1,1,0,0,0,50.7,19.7);

	this.instance_3 = new lib.staticperiod("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-183.4,706.5,1,1,0,0,0,6.9,17.3);

	this.instance_4 = new lib.WordsCarmen();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-224.7,717.6,1,1,0,0,0,73.5,17.7);

	this.instance_5 = new lib.Wordshits();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-282.6,717.6,1,1,0,0,0,73.5,22.9);

	this.instance_6 = new lib.Wordsit();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-317.3,718.1,1,1,0,0,0,73.5,22.9);

	this.instance_7 = new lib.Wordswho();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-431.6,521.5,1,1,0,0,0,51.8,10.4);

	this.instance_8 = new lib.Wordsit();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-317.3,718.1,1,1,0,0,0,73.5,22.9);

	this.instance_9 = new lib.Wordsdoes();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-272.9,518.4,1,1,0,0,0,73.5,16);

	this.instance_10 = new lib.Wordshits();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-282.6,717.6,1,1,0,0,0,73.5,22.9);

	this.instance_11 = new lib.WordsTowhat();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-84.5,515.4,1,1,0,0,0,51.8,16);

	this.instance_12 = new lib.WordsCarmen();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-224.7,717.6,1,1,0,0,0,73.5,17.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("AgHA9QgDgDAAgFIAAgJIAAgKIgCgsIgQgBQgLgCAAgKQgBgFAEgDQAEgEAEAAIAQABIgBgJIAAgJQAAgFADgDQAEgDAFAAQAMAAAAAWIAAAHIAJgBQAKAAAEACQAGACABAIQAAAFgEAEQgDADgGAAIgEAAIgEAAIgJAAIACAuIAAAEIAAAFQAAAUgNAAQgDAAgEgDg");
	this.shape.setTransform(-433.2,516.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AgpBAQgDgEAAgEQAAgFADgEQAEgDAFAAIARgCIAAgnQAAgXACgWIgTAAQgGAAgDgDQgDgDAAgFQAAgGADgDQADgDAEAAIAbgBQAPAAAbAEQAKABAAALQAAAFgEAEQgDACgEAAIgYgCIgBAqIAAAnIAYAAQAGAAADAEQADADAAAFQAAAFgDADQgEAEgFAAIgPAAIgQAAIgQACIgSABQgGAAgDgDg");
	this.shape_1.setTransform(-442.4,516.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgYAuQgNgFAAgKQAAgIAKAAQAEAAAIACQAIADAEAAQARAAAAgHQAAgFgNgFQgRgIgFgDQgMgJAAgMQAAgSASgGQALgEAWAAQAJAAAEADQAGADAAAIQAAAQgJAAQgJAAgBgHIgIgBQgUAAAAAGQAAADAMAGQARAIAHAEQAMAJAAALQAAAPgOAIQgLAHgQAAQgLAAgKgEg");
	this.shape_2.setTransform(-255.5,514.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgHA9QgEgDAAgFIAAgJIABgKIgCgsIgQgBQgMgCAAgKQABgFADgDQADgEAFAAIAPABIAAgJIAAgJQAAgFADgDQAEgDAFAAQAMAAAAAWIAAAHIAJgBQAKAAADACQAIACgBAIQAAAFgDAEQgDADgFAAIgFAAIgEAAIgIAAIABAuIAAAEIAAAFQAAAUgMAAQgFAAgDgDg");
	this.shape_3.setTransform(-264,512.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgKBAQgEgEAAgFIAAgQIgBgPIABgVIABgSQAAgFAEgEQADgCAGgBQAEABAEACQACAEAAAFIAAASIgBAVIABAPIAAAQQgBAFgDAEQgDADgEAAQgGAAgDgDgAgHgsQgEgEgBgFQABgGAEgEQAEgDAEAAQAGAAAEADQAEAEABAGQgBAFgEAEQgEAEgGAAQgEAAgEgEg");
	this.shape_4.setTransform(-270.6,512.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AAVBAQgDgHgBgNIgCgUIAAgHIABgGIgBgIQAAgEgEAAQgKAAgHAIQgEAFgHAMQAAAggDAHQgDAHgIAAQgFAAgEgDQgEgEAAgFIABgEQABgCABgWIAAg6IAAgDIAAgOIAAgIIgBgIQAAgFADgDQAEgDAFAAQAJAAADAJQABAGAAAKIAAASIgBARQAHgGAHgDQAGgDAJAAQAPAAAGAIQAFAHABAMIABAVIACASIADARIABADQAAAFgEADQgEADgFAAQgJAAgCgJg");
	this.shape_5.setTransform(-278.4,511.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},51).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7},{t:this.instance_6,p:{x:-317.3,y:718.1}},{t:this.instance_5,p:{regY:22.9,x:-282.6,y:717.6}},{t:this.instance_4,p:{regY:17.7,x:-224.7,y:717.6}},{t:this.instance_3}]},12).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_8},{t:this.instance_5,p:{regY:22.9,x:-282.6,y:717.6}},{t:this.instance_4,p:{regY:17.7,x:-224.7,y:717.6}},{t:this.instance_6,p:{x:-429.6,y:535.2}},{t:this.instance_3}]},12).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_6,p:{x:-317.3,y:718.1}},{t:this.instance_5,p:{regY:22.9,x:-282.6,y:717.6}},{t:this.instance_4,p:{regY:17.7,x:-224.7,y:717.6}},{t:this.instance_3}]},11).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_6,p:{x:-317.3,y:718.1}},{t:this.instance_5,p:{regY:22.9,x:-282.6,y:717.6}},{t:this.instance_4,p:{regY:17.7,x:-224.7,y:717.6}},{t:this.instance_3},{t:this.instance_7}]},21).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_8},{t:this.instance_5,p:{regY:22.9,x:-282.6,y:717.6}},{t:this.instance_4,p:{regY:17.7,x:-224.7,y:717.6}},{t:this.instance_6,p:{x:-429.6,y:532.3}},{t:this.instance_3}]},10).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_6,p:{x:-317.3,y:718.1}},{t:this.instance_5,p:{regY:22.9,x:-282.6,y:717.6}},{t:this.instance_4,p:{regY:17.7,x:-224.7,y:717.6}},{t:this.instance_3}]},8).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_6,p:{x:-317.3,y:718.1}},{t:this.instance_5,p:{regY:22.9,x:-282.6,y:717.6}},{t:this.instance_4,p:{regY:17.7,x:-224.7,y:717.6}},{t:this.instance_3}]},22).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_6,p:{x:-317.3,y:718.1}},{t:this.instance_5,p:{regY:22.9,x:-282.6,y:717.6}},{t:this.instance_4,p:{regY:17.7,x:-224.7,y:717.6}},{t:this.instance_3},{t:this.instance_9}]},7).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_6,p:{x:-317.3,y:718.1}},{t:this.instance_5,p:{regY:22.9,x:-282.6,y:717.6}},{t:this.instance_4,p:{regY:17.7,x:-224.7,y:717.6}},{t:this.instance_3}]},9).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_6,p:{x:-317.3,y:718.1}},{t:this.instance_10},{t:this.instance_4,p:{regY:17.7,x:-224.7,y:717.6}},{t:this.instance_3},{t:this.instance_5,p:{regY:14.6,x:-268.5,y:510.3}}]},13).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_6,p:{x:-317.3,y:718.1}},{t:this.instance_5,p:{regY:22.9,x:-282.6,y:717.6}},{t:this.instance_4,p:{regY:17.7,x:-224.7,y:717.6}},{t:this.instance_3}]},9).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_6,p:{x:-317.3,y:718.1}},{t:this.instance_10},{t:this.instance_4,p:{regY:17.7,x:-224.7,y:717.6}},{t:this.instance_3},{t:this.instance_5,p:{regY:14.6,x:-268.5,y:510.3}}]},12).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_6,p:{x:-317.3,y:718.1}},{t:this.instance_5,p:{regY:22.9,x:-282.6,y:717.6}},{t:this.instance_4,p:{regY:17.7,x:-224.7,y:717.6}},{t:this.instance_3}]},7).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_6,p:{x:-317.3,y:718.1}},{t:this.instance_5,p:{regY:22.9,x:-282.6,y:717.6}},{t:this.instance_4,p:{regY:17.7,x:-224.7,y:717.6}},{t:this.instance_3}]},13).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_6,p:{x:-317.3,y:718.1}},{t:this.instance_5,p:{regY:22.9,x:-282.6,y:717.6}},{t:this.instance_4,p:{regY:17.7,x:-224.7,y:717.6}},{t:this.instance_3},{t:this.instance_11}]},7).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_6,p:{x:-317.3,y:718.1}},{t:this.instance_5,p:{regY:22.9,x:-282.6,y:717.6}},{t:this.instance_4,p:{regY:17.7,x:-224.7,y:717.6}},{t:this.instance_3}]},9).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_6,p:{x:-317.3,y:718.1}},{t:this.instance_5,p:{regY:22.9,x:-282.6,y:717.6}},{t:this.instance_12},{t:this.instance_3},{t:this.instance_4,p:{regY:9.3,x:-86.9,y:511.3}}]},10).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_6,p:{x:-317.3,y:718.1}},{t:this.instance_5,p:{regY:22.9,x:-282.6,y:717.6}},{t:this.instance_4,p:{regY:17.7,x:-224.7,y:717.6}},{t:this.instance_3}]},7).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_6,p:{x:-317.3,y:718.1}},{t:this.instance_5,p:{regY:22.9,x:-282.6,y:717.6}},{t:this.instance_12},{t:this.instance_3},{t:this.instance_4,p:{regY:9.3,x:-86.9,y:511.3}}]},10).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_6,p:{x:-317.3,y:718.1}},{t:this.instance_5,p:{regY:22.9,x:-282.6,y:717.6}},{t:this.instance_4,p:{regY:17.7,x:-224.7,y:717.6}},{t:this.instance_3}]},5).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_8},{t:this.instance_5,p:{regY:22.9,x:-282.6,y:717.6}},{t:this.instance_4,p:{regY:17.7,x:-224.7,y:717.6}},{t:this.instance_3},{t:this.instance_6,p:{x:-429.6,y:535.2}}]},12).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_6,p:{x:-317.3,y:718.1}},{t:this.instance_5,p:{regY:22.9,x:-282.6,y:717.6}},{t:this.instance_4,p:{regY:17.7,x:-224.7,y:717.6}},{t:this.instance_3}]},8).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_6,p:{x:-317.3,y:718.1}},{t:this.instance_5,p:{regY:22.9,x:-282.6,y:717.6}},{t:this.instance_12},{t:this.instance_3},{t:this.instance_4,p:{regY:9.3,x:-86.9,y:511.3}}]},9).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_6,p:{x:-317.3,y:718.1}},{t:this.instance_5,p:{regY:22.9,x:-282.6,y:717.6}},{t:this.instance_4,p:{regY:17.7,x:-224.7,y:717.6}},{t:this.instance_3}]},8).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_8},{t:this.instance_5,p:{regY:22.9,x:-282.6,y:717.6}},{t:this.instance_4,p:{regY:17.7,x:-224.7,y:717.6}},{t:this.instance_3},{t:this.instance_6,p:{x:-429.6,y:535.2}}]},10).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_8},{t:this.instance_10},{t:this.instance_4,p:{regY:17.7,x:-224.7,y:717.6}},{t:this.instance_3},{t:this.instance_6,p:{x:-429.6,y:535.2}},{t:this.instance_5,p:{regY:14.6,x:-268.5,y:510.3}}]},7).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_6,p:{x:-317.3,y:718.1}},{t:this.instance_5,p:{regY:22.9,x:-282.6,y:717.6}},{t:this.instance_4,p:{regY:17.7,x:-224.7,y:717.6}},{t:this.instance_3},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},6).wait(20));

	// only thing visible (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("APNNEIAA6HIVSAAIAAaHgEgkeANEIAA6HISWAAIAAaHg");
	mask.setTransform(-255.4,493.7);

	// first pic
	this.instance_13 = new lib.anim_carmen_is();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-497.3,467.5,0.326,0.326,0,0,0,31.6,-38.8);
	this.instance_13._off = true;

	this.instance_14 = new lib.anim_carmen_ishitfalls();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-226,481.2,0.417,0.417,0,0,0,5.7,14.8);

	this.instance_15 = new lib.Wordshits();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-268.5,510.3,1,1,0,0,0,73.5,14.6);

	this.instance_16 = new lib.WordsCarmen();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-86.9,511.3,1,1,0,0,0,73.5,9.3);

	var maskedShapeInstanceList = [this.instance_13,this.instance_14,this.instance_15,this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_13}]},86).to({state:[]},21).to({state:[{t:this.instance_13}]},18).to({state:[{t:this.instance_13}]},22).to({state:[{t:this.instance_13}]},16).to({state:[{t:this.instance_13}]},13).to({state:[{t:this.instance_13}]},9).to({state:[{t:this.instance_13}]},12).to({state:[{t:this.instance_13}]},7).to({state:[{t:this.instance_13}]},13).to({state:[{t:this.instance_13},{t:this.instance_14}]},16).to({state:[{t:this.instance_13}]},10).to({state:[{t:this.instance_13},{t:this.instance_14}]},7).to({state:[{t:this.instance_13}]},10).to({state:[{t:this.instance_13},{t:this.instance_14}]},5).to({state:[{t:this.instance_14}]},12).to({state:[{t:this.instance_13},{t:this.instance_14},{t:this.instance_15}]},8).to({state:[{t:this.instance_13}]},9).to({state:[{t:this.instance_13},{t:this.instance_14}]},8).to({state:[{t:this.instance_14}]},10).to({state:[{t:this.instance_14}]},7).to({state:[{t:this.instance_16}]},6).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(86).to({_off:false},0).to({_off:true},21).wait(18).to({_off:false,regY:-38.9,scaleX:0.37,scaleY:0.37,x:-517,y:461.2},0).wait(140).to({_off:true},12).wait(8).to({_off:false},0).wait(17).to({_off:true},10).wait(33));

	// pen
	this.pen = new lib.anim_pencil();
	this.pen.parent = this;
	this.pen.setTransform(31.9,-28.2);

	this.timeline.addTween(cjs.Tween.get(this.pen).to({regX:-7.2,regY:352,x:-490.4,y:577.4},4).to({x:-27.9,y:583.8},10).to({x:-378.4,y:472.3},5).to({y:652.6},6).to({x:-173.5,y:474.1},5).to({x:-172,y:583.8},7).to({x:27.8,y:370},7).to({_off:true},1).wait(300));

	// only thing visible (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EgchAtDIAA6JIfBAAIAAaJg");
	mask_1.setTransform(-182.6,288.3);

	// first pic
	this.instance_17 = new lib.anim_carmen_ishit();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-318.1,482.6,0.3,0.3,0,0,0,-77.8,-34.6);
	this.instance_17._off = true;

	this.instance_18 = new lib.WordsCarmen();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-86.9,511.3,1,1,0,0,0,73.5,9.3);

	var maskedShapeInstanceList = [this.instance_17,this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_17}]},163).to({state:[]},13).to({state:[{t:this.instance_17}]},9).to({state:[]},12).to({state:[{t:this.instance_17}]},7).to({state:[{t:this.instance_17}]},13).to({state:[{t:this.instance_17}]},16).to({state:[{t:this.instance_17}]},10).to({state:[{t:this.instance_17}]},7).to({state:[{t:this.instance_17}]},10).to({state:[{t:this.instance_17}]},5).to({state:[{t:this.instance_17}]},12).to({state:[]},8).to({state:[{t:this.instance_17}]},9).to({state:[{t:this.instance_17}]},8).to({state:[{t:this.instance_17}]},10).to({state:[]},7).to({state:[{t:this.instance_18}]},6).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(163).to({_off:false},0).to({_off:true},13).wait(9).to({_off:false},0).to({_off:true},12).wait(7).to({_off:false},0).wait(73).to({_off:true},8).wait(9).to({_off:false},0).wait(18).to({_off:true},7).wait(26));

	// right bar
	this.instance_19 = new lib.static_bar();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-166.2,471.3,0.882,0.391,0,0,0,0.1,-1.2);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(30).to({_off:false},0).to({scaleX:1.18,scaleY:45.6,x:-164.7,y:465.4},7).wait(308));

	// left bar
	this.instance_20 = new lib.static_bar();
	this.instance_20.parent = this;
	this.instance_20.setTransform(-371.1,469.4,0.882,0.391,0,0,0,0.1,-1.2);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(19).to({_off:false},0).to({scaleX:1.18,scaleY:75.63,y:465.7},6).wait(320));

	// line1
	this.instance_21 = new lib.static_line("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(-483.2,574.5,0.02,2.236,0,63.4,0,162.5,0.1);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(4).to({_off:false},0).to({regX:164,regY:1.6,scaleX:2.8,skewX:-116.6,x:-22,y:579.3},10).wait(331));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(31.8,-28.2,328.3,349.3);


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


// stage content:
(lib.subject_scene7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene7:0,scene7repeat:300});

	// timeline functions:
	this.frame_316 = function() {
		this.gotoAndPlay("scene7repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(316).call(this.frame_316).wait(1));

	// Layer 2
	this.instance = new lib.Diagramhits();
	this.instance.parent = this;
	this.instance.setTransform(457.9,-14.7,1,1,0,0,0,-66.2,329.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(317));

	// New Title
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("Ag+BIQgCgDAAgEIABgLIAAgMIABgRIAAgSIAAgRIgBgTIgBgRIgBgRQAAgFADgDQAEgEAFAAQAFAAAHALQAXAjASAXQAVAaAbAZIAAgMIgBgMQAAgogCgYIgDgJIgCgKQAAgLAKAAQAQAAAAA8IgBAeIAAAfIgBAOQgCAKgIAAQgFAAgHgHQgmgkgwhCIAAAVIAAAUIAAAXIAAAYQAAAZgJAAQgFAAgEgEg");
	this.shape.setTransform(298.8,28);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AgpA3QgLgNgDgaQgBgMAAgiIAAgWIACgLQACgHAGAAQAJAAAAAPIAAA3QAAA3AmAAQAlAAAAhdIAAgJIAAgIQAAgFACgFQADgFAFgBQAJABAAANIAAALIAAALQAABqg3AAQgcAAgPgQg");
	this.shape_1.setTransform(284.2,28.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("AguA5QgTgQAAgbQAAgfATgaQAVgdAfAAQAeAAAPANQAPAPAAAfQAAAfgRAaQgUAdgfAAQgaAAgSgQgAgggfQgPAVAAAYQAAATAOALQAMAKATAAQAWAAAOgXQANgUAAgYQAAgXgJgIQgKgJgWAAQgWAAgQAWg");
	this.shape_2.setTransform(269.6,28.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066FF").s().p("Ag9BIQgDgDgBgEIACgLIAAgMIABgRIAAgSIAAgRIgBgTIgBgRIgBgRQAAgFAEgDQADgEAFAAQAFAAAHALQAXAjASAXQAVAaAbAZIAAgMIgBgMQAAgogCgYIgDgJIgCgKQAAgLAKAAQAQAAAAA8IAAAeIAAAfIgCAOQgBAKgJAAQgFAAgHgHQgmgkgwhCIAAAVIAAAUIAAAXIAAAYQAAAZgJAAQgGAAgCgEg");
	this.shape_3.setTransform(254.5,28);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066FF").s().p("AguA5QgTgQAAgbQAAgfATgaQAVgdAfAAQAeAAAPANQAPAPAAAfQAAAfgRAaQgUAdgfAAQgaAAgSgQgAgggfQgPAVAAAYQAAATAOALQAMAKATAAQAWAAAOgXQANgUAAgYQAAgXgJgIQgKgJgWAAQgWAAgQAWg");
	this.shape_4.setTransform(239.3,28.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066FF").s().p("AguBGQgEgCAAgFIAAgVIgBgWIACgZIACgZIgBgOIgBgOQABgFADgEQADgFAGAAIAWACQANACAIAEQAmAUAAAdQgBAOgNAKQgJAJgQAEQAcAQAPARQADADAAADQAAAEgEADQgCADgEAAQgDAAgDgDQgfgfglgKIABASIAAASQAAAFgDACQgCADgEAAQgEAAgCgDgAgdgpIABALIgBATIgDARIAFAAIADABQAYAAALgHQAFgCAFgEQAEgFABgEQAAgNgPgLQgMgKgPgCIgOgBg");
	this.shape_5.setTransform(225.9,27.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0066FF").s().p("AgnBHQgCgCAAgEIAAgbIACgmIACgmIAAgNIABgNQACgIAHABIAIgCIAOAAQAQAAAPAMQAQAMAAASQAAAXgRANQgQAMgVAAIgLgBIgBAxQAAAEgCACQgDADgDAAQgEAAgDgDgAgUg3IAAARIgCAlIAKABQAPAAAKgHQAMgJAAgPQAAgKgLgIQgKgGgLAAIgIAAIgFAAg");
	this.shape_6.setTransform(214.8,27.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAeAvIgHgGIgPAHQgHACgEABQgVgBgKgMQgKgLAAgYQAAgWAQgQQAPgQAVAAQAIAAAKAFQANAFAAAHQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABIgCALIAAAUQAAAMABAGIAGAQIACAGIABABQAAAEgDACQgCACgEABQgCAAgEgFgAgPgWQgKAMAAAOQAAAPAFAHQAGAJAKgBQAIAAAGgDQAEgBAGgGQgDgYAAgMIAAgIIACgKIgGgDIgEgBQgNAAgLAMg");
	this.shape_7.setTransform(199.2,30.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgZA0QgOgFAAgKQAAgDADgDQACgDAEAAQADAAAFAEQACADAIABIAKABQAHAAAGgCQAIgCAAgGQAAgNgRgEIgJgDQgMgCgFgEQgIgEAAgLQAAgTASgIIARgGIASgGQADgCAFAAQAEAAADADQACACAAAFIABAIIABAHQAAAFgCACQgDADgEAAQgFAAgCgEQgBgCgBgIIgWAHQgOAGAAAJIAGABQAUAEAKAGQAQAJAAATQAAAPgOAIQgKAGgQAAQgMAAgLgEg");
	this.shape_8.setTransform(183.8,29.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgIBDQgDgCABgFIgBgQIAAgRIABgWIABgUQgBgFADgCQADgDAEAAQACAAADADQACACABAFIgBAUIgBAWIAAARIABAQQgBAFgCACQgCADgDAAQgFAAgCgDgAgFgyQgDgEgBgEQABgEADgEQADgDADAAQAFAAADADQADAEAAAEQAAAEgDAEQgDADgFAAQgDAAgDgDg");
	this.shape_9.setTransform(176.9,27.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0066FF").s().p("AALAcQgDgCABgEIAAgjIACgLQACgFAFAAQAEAAACACQACADAAADIAAAEIAAAEIgBAjQAAAJgIAAQgEAAgCgDgAgZAOIAAgRIAAgSQAAgEACgCQADgDADAAQAEAAACADQADACAAAEIgBARIAAARIAAAFIABAEQAAAEgDACQgCACgEAAQgIAAAAgQg");
	this.shape_10.setTransform(164,23.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0066FF").s().p("AgFBBQgDgCAAgEIABgKIAAgLIgCg1IgVgCQgIgBAAgIQAAgEADgDQACgCAEAAIATABIAAgMIgBgMQAAgEAEgCQACgDAEAAQAHAAABAOIABAIIgBAFIAAAGIAOgBQAJAAADABQAGABAAAHQAAAEgCADQgDADgEAAIgFAAIgEgBIgNACIACA2IAAAEIAAAEQAAAVgJAAQgDAAgDgDg");
	this.shape_11.setTransform(155.8,28.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0066FF").s().p("AgoBEQgDgCAAgEQAAgFADgCQADgDADAAIAUgCIABgSIAAgPIgBgPQAAgVADggIgMAAIgMAAQgEAAgDgCQgDgCAAgFQAAgIAJgBIAcgBQASAAAbAEQAJABAAAJQAAAEgEADQgCACgEAAIgPgCIgPgBQgCAbAAAYIAAAQIABAPIgBAQIAdAAQAEAAADACQADAEAAADQAAAEgDAEQgDACgEAAIgPAAIgQAAIgRACIgTACQgDAAgDgDg");
	this.shape_12.setTransform(146.2,28.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0066FF").s().p("AALAcQgDgCABgEIAAgjIACgLQACgFAFAAQAEAAACACQACADAAADIAAAEIAAAEIgBAjQAAAJgIAAQgEAAgCgDgAgZAOIAAgRIAAgSQAAgEACgCQADgDADAAQAEAAACADQADACAAAEIgBARIAAARIAAAFIABAEQAAAEgDACQgCACgEAAQgIAAAAgQg");
	this.shape_13.setTransform(136.6,23.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgFBBQgDgCAAgEIABgKIAAgLIgCg1IgVgCQgIgBAAgIQAAgEADgDQACgCAEAAIAUABIgBgMIAAgMQAAgEADgCQACgDAEAAQAHAAACAOIAAAIIAAAFIAAAGIANgBQAJAAAEABQAFABAAAHQAAAEgCADQgDADgEAAIgEAAIgFgBIgNACIACA2IAAAEIAAAEQABAVgKAAQgDAAgDgDg");
	this.shape_14.setTransform(122.7,28.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgaApQgNgMAAgUQAAgSANgUQANgWARAAQAJAAALAEQAOAFAAAIQAAAEgCADQgCACgEAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAIgEgEQgGgEgMAAQgJAAgJARQgIAPAAALQAAAMAIAHQAIAHALAAQAGAAAGgDIALgGIAEgCQADAAADADQACADAAADQAAAHgOAHQgNAFgIAAQgSAAgNgLg");
	this.shape_15.setTransform(113.4,30.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgfAoQgOgMAAgUQAAgYAMgQQAMgSAVAAQAPAAAKAFQAMAHAAANQAAAJgLAIIgUAJIgiARQAFAIAIAEQAIAEAJAAQAGAAAJgDQALgDADgFQADgFAEAAQADAAADADQACACAAADQAAALgQAHQgPAHgNAAQgUAAgNgLgAgSgYQgIAJgEAQIAdgMQAQgJAHgGQgIgHgOAAQgLAAgHAJg");
	this.shape_16.setTransform(103.5,30.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgdBCIgBgEQAAgEADgCQACgDAEAAQAGAAAGAMIAFAJQADAFAEAAQAEAAADgGIADgKIgDg3IgDgyQAAgFACgEQADgDAEAAQADAAADACQADACABADIADA0IACA5QAAANgIALQgIALgMAAQgTAAgNgfgAAGhOQgDgDAAgEQAAgFADgDQADgDAFAAQAEAAADADQAEADAAAFQAAAEgEADQgDADgEAAQgFAAgDgDg");
	this.shape_17.setTransform(93.4,30.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgcBGQgDAEgEAAQgDAAgCgCQgDgDAAgEIAAgHIAAgHIAAgeIgBgcIABgaIAAgaQAAgFACgFQADgFAFAAQAHAAAAAIIgBAEIAAADIAAAVIgBAXQAJgFAHgDQAHgCAGAAQATAAANAPQAMANAAAVQAAAWgOAOQgOAPgTAAQgOAAgMgFgAgOgEIgNAIIgBAQIAAAPIABAPIANAFQAFACAHAAQANAAAJgJQAIgKAAgOQAAgNgHgKQgHgJgNAAQgHAAgIAEg");
	this.shape_18.setTransform(85.1,27.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAVAsQgMAGgOAAQgMAAgIgFQgJgGgCgLQgDgZAAgSQAAgNADgQQABgIAHAAQAEAAADACQADADAAAEIgBAOIgCAOIABAZQABALACAHIAGADIAGABQAMAAANgEIAAgTIAAgRQAAgUACgPQABgJAIAAQAEAAADADQACADAAAEIgCAjIAAATIABAUIAAAGIAAAGQAAAEgDADQgCACgEAAQgHAAgCgJg");
	this.shape_19.setTransform(74.3,30.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgZA0QgOgFAAgKQAAgDADgDQACgDAEAAQADAAAFAEQACADAIABIAKABQAHAAAGgCQAIgCAAgGQAAgNgRgEIgJgDQgMgCgFgEQgIgEAAgLQAAgTASgIIARgGIASgGQADgCAFAAQAEAAADADQACACAAAFIABAIIABAHQAAAFgCACQgDADgEAAQgFAAgCgEQgBgCgBgIIgWAHQgOAGAAAJIAGABQAUAEAKAGQAQAJAAATQAAAPgOAIQgKAGgQAAQgMAAgLgEg");
	this.shape_20.setTransform(64.4,29.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgfAoQgOgMAAgUQAAgYAMgQQAMgSAVAAQAPAAAKAFQAMAHAAANQAAAJgLAIIgUAJIgiARQAFAIAIAEQAIAEAJAAQAGAAAJgDQALgDADgFQADgFAEAAQADAAADADQACACAAADQAAALgQAHQgPAHgNAAQgUAAgNgLgAgSgYQgIAJgEAQIAdgMQAQgJAHgGQgIgHgOAAQgLAAgHAJg");
	this.shape_21.setTransform(49.3,30.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAZBGIgEgWIgBgWIAAgHIAAgHQAAgRgJAAQgLAAgJAKQgEAFgJAQQAAAjgDAHQgCAFgGAAQgEAAgCgCQgDgDAAgEIABgEIABgNIAAgOIAAhDIABgQIgBgJIgBgIQAAgEADgDQACgCAEAAQAIAAABAIIACAQIgBAUQgBAKABALIAAAIQAHgKAJgFQAIgFAJAAQAQAAAFAKQAFAHAAAPIABASIACATIADATIAAADQAAAEgDACQgCADgEAAQgHAAgCgHg");
	this.shape_22.setTransform(38.6,27.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgGBEQgDgCAAgEIABgEIAAgFIAAgNIgBgOQAAgNgCgXIgDgmIgIABQgUAAgMgDQgHgCAAgIQAAgDACgDQADgEAEABIAPABIAPABIARAAIAQAAIAVABIAVABQAEAAADADQACADAAAEQAAAEgCACQgDADgEAAIgVgBIgVgBIgHAAQAAANADAdIACAoIAAAKIABAKQAAAGgCAFQgDAGgFAAQgDAAgDgDg");
	this.shape_23.setTransform(27.3,27.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(317));

	// Layer 1
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.instance_1 = new lib.Background("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275,195.5,1.069,1.05);

	this.instance_2 = new lib.Background("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(275,195.5,1.069,1.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.UI}]}).wait(317));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,-172.2,876.8,775.3);
// library properties:
lib.properties = {
	id: '87B0867FF409DE4E9A3D5527CFE7A052',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/bgmSub.mp3", id:"bgmSub"},
		{src:"sounds/ball_bounce.mp3", id:"ball_bounce"},
		{src:"sounds/ball_kick.mp3", id:"ball_kick"},
		{src:"sounds/carmen_falls.mp3", id:"carmen_falls"},
		{src:"sounds/cowbell_3times.mp3", id:"cowbell_3times"},
		{src:"sounds/High_Screaming_Gtr.mp3", id:"High_Screaming_Gtr"},
		{src:"sounds/it.mp3", id:"it"},
		{src:"sounds/ithits.mp3", id:"ithits"},
		{src:"sounds/ithitscarmen.mp3", id:"ithitscarmen"},
		{src:"sounds/organ_f_chord.mp3", id:"organ_f_chord"},
		{src:"sounds/right_answer.mp3", id:"right_answer"},
		{src:"sounds/thesubjectitisapronoun.mp3", id:"thesubjectitisapronoun"},
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
an.compositions['87B0867FF409DE4E9A3D5527CFE7A052'] = {
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