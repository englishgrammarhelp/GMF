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


(lib.static_Carmen_leg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AA+gIQAAAAgBABQgjAeASA5Qg2AWgYguQgOgZAAgPAgwAQQgag0AZgy");
	this.shape.setTransform(9.1,74.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AJijwQgmA8glAlQgpAqgvAuQguAtgqArQgwAxgqAiQgtAig9AOQg+AOhCAGQhDAGhEAKQhDAKg6AKQg/AKhDAMQhBAMgdAvQgUAigcAVAphEWQAVgRAPgbQAcgzAng0QASgaAjALQAsAOA3AEQBDAGA5gfQA6geAxgjQA3glA8gTQA/gVBEgDQBLgDAZg/QAVg1Ang4QAbgmAXgmQAhg3AngmQANAYAQAVQAXAdAgAVQAfAVAjAOQAbALAcgBAphF9IABAA");
	this.shape_1.setTransform(65.1,38.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC66").s().p("ApNGCQgNgaAAgPIAAAAQgag0AZgzQAVgRAPgaQAcgzAng1QASgaAjALQAsAOA3AFQBDAFA5geQA6gfAxgiQA3glA8gUQA/gUBEgDQBLgDAZg/QAVg2Ang3QAbgnAXglQAhg4AngmQANAZAQAUQAXAeAgAVQAfAUAjAPQAbAKAcgBIAAABQgmA7glAmIhYBYIhYBZQgwAwgqAhQgtAjg9ANQg+APhCAFQhDAGhEAKIh9AUIiCAWQhBAMgdAwQgUAhgcAWIgBAAQgjAgARA5QgRAHgPAAQgeAAgRgfg");
	this.shape_2.setTransform(64.5,41.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.9,-1,125.3,85.3);


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


(lib.header2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHAHQgDgDAAgEQAAgCADgDQADgDAEAAQAFAAADACQADADAAADQAAAEgDADQgEACgEAAQgEAAgDgCg");
	this.shape.setTransform(19.6,35.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AgFAoQgDgDAAgEIgBgXIgCgWIgBgHQgIAFgIALIgBABIAAAVIAAAFIAAAFQAAADgDACQgDACgEAAQgGAAgCgFIgBgLIAAgYIgBgKIAAgKQAAgGACgFQADgGAFAAQAEAAADADQADADAAADIgBAGQAKgMAJAAQALAAAEAIQAEgDAFgCQAFgCAGAAQANAAAFANIADATIAFAkQAAAEgDACQgCADgEAAQgIAAgCgIIgCgUIgCgTQgCgMgDAAIgHADIgJAFIACAWIACAWQAAAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape_1.setTransform(11.3,31.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("AgaAkQgDgDAAgEIAAgrIABgHIAAgGQAAgEADgCQACgDAEAAQAIAAABAIQALgJAOAAQAOAAABASIAAAEQgBALgJAAQgJAAAAgJIAAgHQgPADgGANIAAAhQAAAEgDADQgDACgEAAQgEAAgCgCg");
	this.shape_2.setTransform(2.5,31.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066FF").s().p("AgVAdQgKgJgBgQQAAgOAIgMQALgPARAAQAOAAAIAMQAHAJAAAPQAAAPgIALQgKANgPAAQgMAAgJgJgAgJgLQgEAHAAAIQAAAHAFAFQADAEAFAAQAFAAAFgFQAFgEAAgIQABgWgNAAQgHABgFAHg");
	this.shape_3.setTransform(-4.8,32);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066FF").s().p("AgMA6QgDgDAAgDIAAgCIACgTIAAghIgFABIgEAAQgEAAgDgCQgCgDAAgEQAAgGAGgCIAMgBIABgIQACgPAGgIQAHgJARAAQAMAAAAAJQAAAJgLAAQgJAAgDAGQgDAEgBAJIAAACIANgBQANAAAAAJQAAAJgOAAIgNAAIAAASIAAASQAAANgBAHQgCAHgHAAQgDAAgDgCg");
	this.shape_4.setTransform(-12,30.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066FF").s().p("AgvA1QgCgDgBgEIABgIIAAgJIAAgMIAAgMIAAgMIAAgNIgBgMIgBgMQABgEADgEQADgDAFAAQAFAAAHAJQAdAsAeAbIABgKIgBgtIgBgHIgBgIQAAgJAKAAQALAAAAAiIAAALIAAAqIgBALQgCAJgIAAQgFAAgGgFQgagYghgqIAAAVIAAAQIABAQQAAAVgKAAQgFAAgDgDg");
	this.shape_5.setTransform(-27.2,30.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0066FF").s().p("AgbAvQgSgOAAgiIAAgJIABgKIAAgIIAAgIQAAgFACgFQADgGAEAAQAFAAACACQADADAAAEIAAALIAAAMIAAAJIgBAKQABAJACAJQADALAFAEQAEACAKABQARAAAHgfQADgPAAgdQAAgEACgEQADgEAGAAQAEAAACADQACADAAADQABAbgDAPQgEAWgLAPQgFAHgHAFQgJAFgIAAQgSAAgIgGg");
	this.shape_6.setTransform(-38.1,30.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0066FF").s().p("AgjAqQgQgMAAgUQAAgWAPgTQAQgWAYAAQAYAAAMALQAMALAAAWQAAAWgOATQgPAWgYAAQgUAAgOgMgAgVgUQgKAOAAAQQAAALAJAIQAIAGANAAQAOAAAKgOQAJgOAAgQQAAgOgGgGQgGgFgQAAQgOAAgLAOg");
	this.shape_7.setTransform(-48.8,30.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0066FF").s().p("AgvA1QgCgDgBgEIABgIIAAgJIAAgMIAAgMIAAgMIAAgNIgBgMIgBgMQABgEADgEQADgDAFAAQAFAAAHAJQAdAsAeAbIABgKIgBgtIgBgHIgBgIQAAgJAKAAQALAAAAAiIAAALIAAAqIgBALQgCAJgIAAQgFAAgGgFQgagYghgqIAAAVIAAAQIABAQQAAAVgKAAQgFAAgDgDg");
	this.shape_8.setTransform(-60.1,30.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgaAkQgCgDgBgEIAAgrIABgHIAAgGQAAgEADgCQABgDAFAAQAHAAACAIQALgJAOAAQAOAAABASIAAAEQgBALgJAAQgJAAAAgJIAAgHQgPADgGANIAAAhQAAAEgDADQgCACgFAAQgEAAgCgCg");
	this.shape_9.setTransform(144,10.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgVAdQgKgJgBgRQAAgOAIgMQALgOARABQAOgBAIALQAHALAAAOQAAAPgIALQgKAMgPAAQgMAAgJgIgAgJgKQgEAGAAAHQAAAJAFAEQADAEAFgBQAFAAAFgDQAFgFAAgJQABgUgNAAQgHgBgFAJg");
	this.shape_10.setTransform(136.7,10.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgKAPQgCgDAAgDIAEgJIAGgLQACgFAEAAQAEAAADACQACADAAADIgFAJIgFALQgDAEgEABQgDAAgDgCg");
	this.shape_11.setTransform(123.9,14.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0066FF").s().p("AgvA1QgCgDAAgEIAAgIIAAgJIABgMIAAgMIAAgMIAAgNIgBgMIgCgMQAAgEAEgEQAEgDAEAAQAGAAAGAJQAeAsAeAbIAAgKIgBgtIgBgHIAAgIQAAgJAKAAQAKAAABAiIAAALIgBAqIgBALQgBAJgJAAQgFAAgGgFQgagYgggqIAAAVIAAAQIAAAQQAAAVgKAAQgFAAgDgDg");
	this.shape_12.setTransform(115.4,8.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0066FF").s().p("AgbAvQgRgOAAgiIAAgJIAAgKIAAgIIABgIQAAgFACgFQACgGAFAAQADAAADACQAEADAAAEIAAALIAAAMIgBAJIAAAKQAAAJACAJQADALAGAEQACACALABQARAAAGgfQAEgPAAgdQAAgEACgEQADgEAGAAQAFAAABADQADADAAADQAAAbgDAPQgEAWgLAPQgFAHgHAFQgJAFgIAAQgRAAgJgGg");
	this.shape_13.setTransform(104.5,8.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0066FF").s().p("AgjAqQgQgMAAgUQAAgWAPgTQAQgWAYAAQAYAAAMALQAMALAAAWQAAAWgOATQgPAWgYAAQgUAAgOgMgAgVgUQgKAOAAAQQAAALAJAIQAIAGANAAQAOAAAKgOQAJgOAAgQQAAgOgGgGQgGgFgQAAQgOAAgLAOg");
	this.shape_14.setTransform(93.8,8.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0066FF").s().p("AgvA1QgCgDAAgEIAAgIIAAgJIABgMIAAgMIAAgMIAAgNIgBgMIgCgMQAAgEAEgEQAEgDAEAAQAGAAAGAJQAeAsAeAbIAAgKIgBgtIgBgHIAAgIQAAgJAKAAQAKAAABAiIAAALIgBAqIgBALQgBAJgJAAQgFAAgGgFQgagYgggqIAAAVIAAAQIAAAQQAAAVgKAAQgFAAgDgDg");
	this.shape_15.setTransform(82.5,8.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0066FF").s().p("AgjAqQgQgMAAgUQAAgWAPgTQAQgWAYAAQAYAAAMALQAMALAAAWQAAAWgOATQgPAWgYAAQgUAAgOgMgAgVgUQgKAOAAAQQAAALAJAIQAIAGANAAQAOAAAKgOQAJgOAAgQQAAgOgGgGQgGgFgQAAQgOAAgLAOg");
	this.shape_16.setTransform(71.2,8.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0066FF").s().p("AglAzQgCgDAAgEIAAgPIAAgPIAAg3QAAgEADgEQADgEAHAAIAQACQAKABAGADQAdAPAAAWQAAAJgGAFQgGAHgMAFQASAKAJALQACACAAAEQAAAEgCACQgDADgFAAQgDAAgEgDQgUgTgYgIIABAWQAAAEgDADQgCADgFAAQgDAAgEgDgAgVACIAEAAQARAAAGgDIAHgFQADgDAAgBQAAgIgKgHQgIgHgLgBIgIAAg");
	this.shape_17.setTransform(61.3,8.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0066FF").s().p("AgeA0QgDgDAAgDIAAgTIACgeIABggQAAgSAKABIAGgBIAKgBQANABAMAIQANAKAAAOQAAASgOAJQgMAJgRAAIgFgBIgBAgQAAADgCADQgDACgEAAQgEAAgCgCgAgMgaIgBAXIAEABQAKAAAHgFQAIgFAAgJQAAgGgHgEQgHgFgHAAIgEAAIgDAAIAAAKg");
	this.shape_18.setTransform(53,8.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgJAPQgDgDAAgDIAEgJIAGgLQACgFAEAAQAEAAADACQACADAAADIgFAJIgFALQgDAEgEABQgDAAgCgCg");
	this.shape_19.setTransform(39.9,14.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0066FF").s().p("AgvA1QgDgDABgEIAAgIIAAgJIABgMIAAgMIAAgMIAAgNIgBgMIgBgMQgBgEAEgEQAEgDAEAAQAGAAAFAJQAfAsAdAbIABgKIgBgtIgBgHIAAgIQgBgJALAAQALAAgBAiIAAALIAAAqIgBALQgCAJgIAAQgFAAgGgFQgagYgggqIAAAVIAAAQIAAAQQAAAVgKAAQgFAAgDgDg");
	this.shape_20.setTransform(31.4,8.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0066FF").s().p("AgbAvQgRgOAAgiIAAgJIAAgKIAAgIIABgIQAAgFABgFQADgGAFAAQADAAAEACQACADAAAEIAAALIAAAMIAAAJIAAAKQgBAJADAJQADALAFAEQADACALABQARAAAGgfQAEgPAAgdQAAgEACgEQADgEAGAAQAFAAACADQACADAAADQgBAbgCAPQgEAWgLAPQgFAHgHAFQgJAFgIAAQgRAAgJgGg");
	this.shape_21.setTransform(20.6,8.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0066FF").s().p("AgjAqQgQgMAAgUQAAgWAPgTQAQgWAYAAQAYAAAMALQAMALAAAWQAAAWgOATQgPAWgYAAQgUAAgOgMgAgVgUQgKAOAAAQQAAALAJAIQAIAGANAAQAOAAAKgOQAJgOAAgQQAAgOgGgGQgGgFgQAAQgOAAgLAOg");
	this.shape_22.setTransform(9.8,8.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0066FF").s().p("AgvA1QgDgDABgEIAAgIIAAgJIABgMIAAgMIAAgMIAAgNIgBgMIgBgMQgBgEAEgEQAEgDAEAAQAGAAAFAJQAfAsAdAbIABgKIgBgtIgBgHIAAgIQgBgJALAAQALAAgBAiIAAALIAAAqIgBALQgCAJgIAAQgFAAgGgFQgagYghgqIAAAVIAAAQIABAQQAAAVgKAAQgFAAgDgDg");
	this.shape_23.setTransform(-1.4,8.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AARAfIgLAFIgHACQgRAAgJgJQgIgJAAgSQABgPALgMQAMgMARAAQAGAAAIAEQALAEAAAGQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAIgBAHIAAAKQAAAMACAFIADAIIACAGQAAAEgCACQgDADgEAAQgDAAgGgHgAgJgNQgGAHgBAJQAAAJAEAFQADAEAHAAIAHgBIAGgEIgCgYIABgFIAAgGIgCgBIgBAAQgJAAgHAHg");
	this.shape_24.setTransform(-17,10.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgSAkQgLgEAAgHQAAgIAIABIAKABQAFACAEAAQANABAAgGQAAgEgKgDIgRgJQgKgHAAgJQAAgOAPgFQAIgCARAAQAHAAADACQAEACAAAGQAAAMgGAAQgHABgBgGIgGAAQgPgBAAAFQAAADAJAEQANAGAFADQAKAHAAAJQAAALgLAHQgJAEgMAAQgJABgHgDg");
	this.shape_25.setTransform(-30.5,10.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgTA1QgDgDAAgEQAAgGAOgfIgYgrIgDgFQgCgDAAgDQAAgEADgCQADgDAEAAQAEAAADADQAKANAMAaIAIgUIAKgRQADgFAFAAQAEAAADACQADADAAAEIgBAEIgYAwIgNAdIgEANQgCAGgHAAQgDAAgDgCg");
	this.shape_26.setTransform(-37.8,12.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAQAfIgLAFIgHACQgQAAgJgJQgHgJAAgSQAAgPAMgMQAMgMAPAAQAHAAAJAEQAKAEAAAGQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAIgBAHIgBAKQAAAMACAFIADAIIACAGQAAAEgCACQgDADgEAAQgCAAgIgHgAgJgNQgHAHABAJQAAAJACAFQAEAEAGAAIAHgBIAIgEIgCgYIAAgFIABgGIgDgBIgCAAQgIAAgHAHg");
	this.shape_27.setTransform(-45.4,10.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AACAWIgDgXIgCADIgKAbIgDAEQgDAFgGAAQgDAAgEgGQgDgGgCgJIgHgkIgBgKQAAgDADgDQACgCAFAAQAHAAACAHIABAJIABAKIADAQIAMghQADgJAGAAQAIAAACAKIADASIAEASIALgoQACgGAHAAQADAAAEACQACADAAAEIAAACIgPAvQgCAGgEAHQgDAEgGAAQgJAAgFgQg");
	this.shape_28.setTransform(-54.1,10.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgGA2QgCgDAAgEIAAheQAAgEACgCQADgCAEAAQAEAAACACQACACABAEIAABaQAAANgKAAQgDAAgDgCg");
	this.shape_29.setTransform(-61,8.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAQAfIgLAFIgHACQgQAAgJgJQgHgJgBgSQAAgPANgMQAMgMAPAAQAHAAAJAEQAKAEAAAGQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAIgBAHIgBAKQAAAMACAFIADAIIACAGQAAAEgCACQgDADgEAAQgCAAgIgHgAgJgNQgHAHABAJQAAAJADAFQADAEAGAAIAIgBIAHgEIgDgYIABgFIABgGIgDgBIgCAAQgIAAgHAHg");
	this.shape_30.setTransform(-66.7,10.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgSAkQgLgEAAgHQAAgIAIABIAKABQAFACAEAAQANABAAgGQAAgEgKgDIgRgJQgKgHAAgJQAAgOAPgFQAIgCARAAQAHAAADACQAEACAAAGQAAAMgGAAQgHABgBgGIgGAAQgPgBAAAFQAAADAJAEQANAGAFADQAKAHAAAJQAAALgLAHQgJAEgMAAQgJABgHgDg");
	this.shape_31.setTransform(-80.2,10.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgIAyQgCgDgBgEIAAgMIAAgNIAAgPIABgOQABgEACgDQACgCAFAAQADAAADACQACADAAAEIgBAOIAAAPIAAANIAAAMQAAAEgCADQgDACgDAAQgEAAgDgCgAgFgiQgEgDAAgEQAAgEAEgDQADgDADAAQAEAAADADQAEADAAAEQAAAEgEADQgDADgEAAQgDAAgDgDg");
	this.shape_32.setTransform(-85.2,8.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0066FF").s().p("AgFAyQgEgDAAgEIABgDIAAgDIAAgJIgBgKIgBgYIgCgYIgEAAQgPAAgJgDQgIgBAAgIQAAgDADgDQADgDAEAAIALABIALABIANAAIALAAIAQABIAPAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAIgQgBIgRgBIACAcIABAbIABAHIAAAHQAAAFgCAEQgDAFgFAAQgDAAgCgCg");
	this.shape_33.setTransform(-98.3,8.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0066FF").s().p("AgeAqQgKgLAAgPQAAgWAUgYQARgUARAAIAFAAIAFABQADgDAEAAQAHAAACAIIABAOQAAADgCADQgDADgFAAQgGAAgDgGQAAgBgBgBQAAAAAAgBQgBAAAAAAQAAgBgBAAIgFAAQgJAAgKANQgQASAAAQQAAAIAFAFQAFAFAHAAQAGAAAHgDIAKgHQAGgDACAAQAFAAACADQADACAAAEQAAAEgDADQgTAQgTAAQgPAAgLgLg");
	this.shape_34.setTransform(-107.4,8.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0066FF").s().p("AgfA0QgHgHAAgWIABgaIABgcIAAgHIgBgHQAAgKAKAAQADAAACABIAPgCIANgBQARAAAKADQAGADAAAGQAAAEgCACQgDAEgEAAIgDgBQgLgDgKAAIgKABIgNACIAAAbIAZgCIARgBQAEAAADACQADADAAAEQAAAHgJABIgQACIgdACIAAAOQAAAOABACIAJAAIAMAAIANAAIAEAAIAEgBQAEAAACACQAEADAAAFQAAAHgIACQgHABgVAAQgWAAgHgGg");
	this.shape_35.setTransform(-116,8.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0066FF").s().p("AgcAvQgPgKAAgNQAAgKAKAAQAJAAAAAKQAAAEAHAFQAIAEAFAAQADAAABgJIAAgVIABgmIAAgEIgBAAIgIAAIgIgBQgDAAgDgCQgDgDAAgEQAAgJAMAAIAHAAIAGAAIAMAAIAOgBQASAAAAAKQAAAEgCADQgEADgDAAIgFAAIgEgBIgFAAIgBAFQAAAwgGAWQgFARgNAAQgNAAgLgJg");
	this.shape_36.setTransform(-125.1,9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0066FF").s().p("AggA0QgEgDAAgFIAAhHIgBgJIABgJQABgHALgBQAFgCANAAQALAAAMAJQAOAJAAAPQAAAIgDAFQgCAFgGAEQAHADAFAHQAGAHAAAHQAAAJgKAIQgHAGgHACQgPAGgYABQgFAAgCgEgAgSAlQAMgBANgEQAMgDAAgFQAAgEgHgFQgHgDgEAAIgTgBgAgSgkIAAAPIAAAOIAKABQAUgCAAgOQAAgEgGgFQgGgFgGAAIgMAAg");
	this.shape_37.setTransform(-134.1,8.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0066FF").s().p("AgbAvQgRgOAAgiIAAgJIAAgKIAAgIIABgIQAAgFACgFQACgGAFAAQADAAADACQAEADAAAEIAAALIAAAMIgBAJIAAAKQAAAJACAJQADALAGAEQACACALABQARAAAGgfQAEgPAAgdQAAgEACgEQADgEAGAAQAFAAABADQADADAAADQAAAbgDAPQgEAWgLAPQgFAHgHAFQgJAFgIAAQgRAAgJgGg");
	this.shape_38.setTransform(-143.9,8.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#0066FF").s().p("AgkAtQgIgHAAgIQAAgEACgDQADgDAEAAQAGAAADAGQAEAJAOAAQALAAALgGQALgFAAgGQAAgJgHgCQgFgCgOgBQgMAAgJgEQgNgFAAgKQAAgOAOgLQAOgLAQAAQAHAAAKADQAMAEAAAFQAAADgCADQgDADgFAAIgJgBIgKgCQgJABgHAEQgIAEAAAFQAAADADABIAHADIARABQAPABAJAHQAJAHAAAPQAAARgUAKQgPAGgTAAQgRAAgKgHg");
	this.shape_39.setTransform(-153.8,8.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgXAeQgLgJAAgQQAAgQAJgMQALgNAPAAQANAAAHAEQAKAFAAAKQAAAIgHAGIgQAGIgWALQADADAFACQAFACAEAAQAJAAAHgEQAFgDAEAAQAHAAAAAHQAAAHgLAFQgKAEgLAAQgPAAgLgHgAgIgPQgFAEgDAIIAQgGQAIgEAFgEQgEgDgIAAQgFAAgEAFg");
	this.shape_40.setTransform(-168.8,10.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAQAyQgCgFgBgKIgBgQIAAgFIAAgGIAAgFQgBgDgDAAQgHAAgFAGIgJANQAAAZgCAFQgDAFgGAAQgEAAgDgCQgDgDAAgDIABgEIABgTIAAgsIAAgDIABgKIgBgHIgBgGQAAgEADgCQADgDAEAAQAHAAACAHIABANIAAAOIAAANQAFgFAFgCQAFgDAGAAQAMAAAFAHQAEAFABAJIABARIABANIACAOIABACQAAAEgDADQgDACgEAAQgHAAgCgHg");
	this.shape_41.setTransform(-176.5,8.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgFAyQgEgDAAgEIABgDIAAgDIAAgJIgBgKIgBgYIgCgYIgEAAQgPAAgJgDQgIgBAAgIQAAgDADgDQADgDAEAAIALABIALABIANAAIALAAIAQABIAPAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAIgQgBIgRgBIACAcIABAbIABAHIAAAHQAAAFgCAEQgDAFgFAAQgDAAgCgCg");
	this.shape_42.setTransform(-185.5,8.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.header2, new cjs.Rectangle(-209.1,-3.7,375.2,45.1), null);


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


(lib.Wordsblocks = function(mode,startPosition,loop) {
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
	this.shape.setTransform(95.4,17.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AAVBCQgFgIgIgLIgOgSIgLAIIgBAXQAAAFgEADQgDAEgGAAQgMAAABgPIAAgVIABgVIAAgcIABgdIgBgIIAAgJQAAgGADgDQAEgDAFAAQAGAAADADQADADABAGIAAAJIABAJIgBAZIAAAXQAMgIAXgZQAEgDAFAAQAEAAAFADQADAEAAAFQAAAEgDADQgKALgPANIASAXQAOASAAAGQgBAFgEADQgDADgFAAQgHAAgDgGg");
	this.shape_1.setTransform(86.6,15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgaAnQgOgMgBgTQAAgRANgSQAOgWASABQAJAAAMAEQAPAGAAAIQAAAFgDADQgDAEgFgBQgEAAgFgDQgGgFgKAAQgGAAgIAOQgIAMABAJQgBAJAHAGQAGAEAKAAQAGABAJgFQAIgFACAAQAFAAAEAEQACAEAAAEQABAHgPAGQgOAHgIAAQgTgBgMgKg");
	this.shape_2.setTransform(76.6,17.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgcAlQgNgMAAgVQgBgSALgPQAOgSAWAAQASAAAKAOQAKANAAASQAAATgLAPQgNAQgTAAQgQAAgMgLgAgMgOQgFAIAAAKQAAALAGAGQAFAEAGAAQAHAAAFgFQAHgGAAgKQABgcgQAAQgKAAgGAKg");
	this.shape_3.setTransform(67.4,17.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgIBFQgDgEAAgEIAAh5QAAgGADgDQAEgDAEAAQAFAAADADQAEADAAAGIAABzQAAASgMgBQgFABgDgEg");
	this.shape_4.setTransform(60.2,15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgZBDQgEADgEAAQgFAAgDgDQgEgDAAgFIAAgHIABgGIAAhjQAAgGADgFQADgGAHAAQAJAAAAALIAAADIgBADIAAAiQAHgEAGgBQAGgCAEAAQAVAAANAPQAMANAAAUQAAAVgOAOQgOAOgUAAQgMAAgLgEgAgJgBIgOAHIAAAlQAMAFAJABQAKAAAHgIQAIgHAAgMQAAgMgGgGQgHgIgKABQgDgBgGADg");
	this.shape_5.setTransform(52.5,15.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,147,29.1);


(lib.Wordsthe = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#009900").s().p("AgdAmQgPgLAAgUQAAgVAMgQQANgRAVAAQAPAAALAFQANAHgBAOQABAJgLAIQgFADgPAGIgdAMQAFAFAFACQAGACAIAAQALABAIgFQAHgFAFAAQAJABAAAIQAAAKgOAHQgNAFgNAAQgVAAgNgKgAgLgUQgGAGgEAKIAUgIIASgKQgFgEgKAAQgHAAgGAGg");
	this.shape.setTransform(82.8,17.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("AAVBAQgDgHgBgNIgCgUIAAgHIABgGIgBgIQAAgEgEAAQgKAAgHAIQgEAFgHAMQAAAggDAHQgDAHgIAAQgFAAgEgDQgEgEAAgFIABgEQABgCABgWIAAg6IAAgDIAAgOIAAgIIgBgIQAAgFADgDQAEgDAFAAQAJAAADAJQABAGAAAKIAAASIgBARQAHgGAHgDQAGgDAJAAQAPAAAGAIQAFAHABAMIABAVIACASIADARIABADQAAAFgEADQgEADgFAAQgJAAgCgJg");
	this.shape_1.setTransform(72.9,15.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009900").s().p("AgHA9QgDgDgBgFIAAgJIABgKIgCgsIgQgBQgLgCAAgKQgBgFAEgDQAEgEAEAAIAQABIgBgJIAAgJQAAgFADgDQAEgDAFAAQAMAAAAAWIAAAHIAJgBQAKAAADACQAIACAAAIQgBAFgDAEQgDADgGAAIgEAAIgEAAIgIAAIABAuIAAAEIAAAFQAAAUgNAAQgEAAgDgDg");
	this.shape_2.setTransform(63.3,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,147,29.1);


(lib.Wordsshot = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#009900").s().p("AgHA9QgDgDgBgFIAAgJIABgKIgCgsIgQgBQgMgCAAgKQABgFADgDQADgEAFAAIAQABIgBgJIAAgJQAAgFADgDQAEgDAFAAQAMAAAAAWIAAAHIAJgBQAKAAADACQAIACgBAIQAAAFgDAEQgDADgFAAIgFAAIgEAAIgIAAIABAuIAAAEIAAAFQAAAUgMAAQgFAAgDgDg");
	this.shape.setTransform(87.8,10.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("AgcAlQgNgMAAgVQgBgSALgPQAOgSAWAAQASAAAKAOQAKAMAAATQAAAUgLAOQgNAQgTAAQgQAAgMgLgAgMgOQgFAIAAAKQAAALAGAFQAFAFAGAAQAHAAAFgFQAHgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_1.setTransform(78.7,12.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009900").s().p("AAVBAQgDgHgBgNIgCgUIAAgHIABgGIgBgIQAAgEgEAAQgKAAgHAIQgEAFgHAMQAAAggDAHQgDAHgIAAQgFAAgEgDQgEgEAAgFIABgEQABgCABgWIAAg6IAAgDIAAgOIAAgIIgBgIQAAgFADgDQAEgDAFAAQAJAAADAJQABAGAAAKIAAASIgBARQAHgGAHgDQAGgDAJAAQAPAAAGAIQAFAHABAMIABAVIACASIADARIABADQAAAFgEADQgEADgFAAQgJAAgCgJg");
	this.shape_2.setTransform(69.1,9.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009900").s().p("AgYAuQgNgFAAgKQAAgIAKAAQAEAAAIACQAIADAEAAQARAAAAgHQAAgFgNgFQgRgIgFgDQgMgJAAgMQAAgSASgGQALgEAWAAQAJAAAEADQAGADAAAIQAAAQgJAAQgJAAgBgHIgIgBQgUAAAAAGQAAADAMAGQARAIAHAEQAMAJAAALQAAAPgOAIQgLAHgQAAQgLAAgKgEg");
	this.shape_3.setTransform(59.2,12.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-5.2,147,29.1);


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


(lib.Wordscarmen = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#0066FF").s().p("AASApIgDgSIgBgTIABgGIAAgJIAAgCIAAgFQAAgHgDAAQgIAAgGAJQgHAKgEAOIgBAIIgBAIIAAAIIgBAIQAAAFgDADQgEADgFAAQgFAAgEgDQgDgDAAgFIgBgIIAAgIIABgYIABgWIAAgIIAAgIQAAgFADgEQAEgDAFAAQALAAABAOIAAABQANgNANAAQARAAAGAOQAEAJAAASIAAAHIAAAFQAAAGACALQACALAAAHQAAAFgDADQgEADgFAAQgLAAgBgKg");
	this.shape.setTransform(100.5,17.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AgdAmQgPgLAAgUQAAgVAMgQQANgRAVAAQAPAAALAFQANAHgBAOQAAAJgKAIQgFADgPAGIgdAMQAFAFAGACQAGACAGAAQAMABAIgFQAHgFAFAAQAJABAAAIQAAAKgPAHQgMAFgOAAQgTAAgOgKgAgLgUQgGAGgEAKIAUgIIATgKQgHgEgJAAQgHAAgGAGg");
	this.shape_1.setTransform(90.6,17.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("AgHAzQgDgEAAgFIgCgdIgCgdIgBgIQgLAFgKAOIgBACIgBAbIAAAHIAAAGQAAAEgEADQgEADgFAAQgHAAgDgHQgCgEAAgKIAAgfIAAgNIAAgNQAAgIACgGQAEgIAGAAQAFAAAEAEQAEADAAAFIgBAHQANgPAMAAQAOAAAFAKQAFgEAHgDQAGgCAIAAQARAAAGARQACAEACAUIAGAuQABAFgEAEQgEADgFAAQgKAAgCgKIgDgaIgDgYQgCgQgEAAQgCAAgHAEIgLAHQAAAKADASQACATAAAJQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_2.setTransform(78.8,17.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066FF").s().p("AgiAuQgDgEAAgEIAAg5IAAgIIAAgIQAAgFAEgDQADgEAFAAQAKAAACAKQAOgLATAAQASAAAAAXIAAAGQgBANgMAAQgKAAgBgLIAAgJQgTADgIARIAAAsQgBAFgDADQgDADgFAAQgGAAgDgDg");
	this.shape_3.setTransform(67.5,17.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066FF").s().p("AAVAoIgOAGQgGACgDAAQgWAAgKgLQgLgMAAgWQAAgUAQgPQAPgPAVAAQAJAAALAEQANAGAAAIQAAACgCADIgBAJIgBAMQAAAPACAIIAEAJIAEAIQAAAFgEADQgDADgFAAQgEAAgJgIgAgMgRQgIAJAAAMQAAAMAEAFQAEAHAIAAQAFgBAFgBQAFgCAEgEQgDgUAAgKIABgHIABgIIgDgBIgDAAQgLAAgJAJg");
	this.shape_4.setTransform(58.1,17.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066FF").s().p("AgmA2QgNgOAAgTQAAgcAZgfQAWgaAWAAIAHAAIAGABQADgEAGAAQAJAAACALIABAQQAAAFgCADQgDAGgHAAQgIAAgDgJQgCgEgCgBQgBgBgGAAQgLAAgNASQgVAXAAAVQAAAJAHAHQAGAIAJAAQAIAAAJgGIANgIQAHgEADAAQAGAAADADQAEAEAAAEQAAAGgFADQgYAVgYAAQgUAAgNgOg");
	this.shape_5.setTransform(47.5,15.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

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


(lib.anim_carmen_blocksballdrops = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{start:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		playSound("ball_kick");
	}
	this.frame_9 = function() {
		this.gotoAndPlay("start");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(1));

	// LForearm
	this.instance = new lib.static_carmen_LForearm("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(421.3,82,0.996,0.996,0,164.9,-15.1,4.5,57.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({startPosition:0},0).to({skewX:269.9,skewY:89.9,x:406.6,y:106.1},4).wait(1));

	// RForearm
	this.instance_1 = new lib.static_carmen_RForearm("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(293,58.3,1,1,0,-165,15,59,34);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({startPosition:0},0).to({skewX:-270,skewY:-90,x:308.5,y:95.5},4).wait(1));

	// Layer 7
	this.instance_2 = new lib.static_ball("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(365.9,111.1,1,1,0,0,0,23.1,23.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-1800,guide:{path:[365.8,111.1,379.6,188.6,361.4,234.6]}},5).to({_off:true},1).wait(4));

	// body
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AhbgrQgGAGgFAGQgDAEgCAEQgdAdgnAOQhMAbhLgRQgvgLgagRQAwgQAigiQAwguAZg3QAwinAUgiQAZgrA0giQAsgdAag3QAcg7AfgrQAegnA/gVQA4gSBNANQA6gLA6AdQA3AcAEBMQAEBGgYA2QgbA+AmA3QAXAjAdCTQgEAZgDAWQgCANgCAMQgQBYgXAlQgZAogeAoQgHAJgHAKQgBAAAAABQglAxg+AMQgUAEgRAFQAKgTALgSQAQgcAFgmQApgGAVgoQAagwgBg8QAAgBAAgCQAAgBAAgBQAQjGh2gCQAGgLAHgLQANgCANgFQAlgMAVgdQARgXAPghQABgBAAAAQAAgBAAgBQgDgpgHgjQgHgoAPgfQAFgLAJgLQgCgOgFgOQgEgOgGgNQgXgRgQggQAAgBAAAAQgBgBgCgBQgmgWgwATQgrARgjAVQgcAygaAyQgbA1gTBAQgDAJgCAJQAKAaAbAVQADACACACQAZAUATATQAaAaApAAQAYABAWgEAFLp2QgBgBgCgCAE8m9QgOgLAGgSQgQABgSgEQAAADAAADQAAAxAogWQABgBABAAQANgIAEgPQACgHAAgHQABAAAAAAQANgEAEgJAFPniQgMAGgPACAESndQABgmAbgTQAmAOgFAmACjnjIAAAAQgCgYAMgXQAHgOARgBQAmgBgJA1QgCAHgEAIQgQAFgNgBQgQgBgMgIQAAAAAAAAQgYgHgFgNADcneQgGAMgJANQgFAIgFADQgPAKgLgcQgEgLgCgMAC/naQgJAWANAKACumMQgBgIACgFQANApAjAMQAhAKAogCQAJAAAIAAQgUAOgSANQggAXgegWQgNgKgIgOQgPgYgDgcgAA7lrQgCAGgCAHQgJAfgKAkQgCALgDAKQgRA/gfA3QgaArgtAZQgEASABAPABPkKQgJAjABAyQABBGAmArQAUAWAZgaQAmgnAWg2QAKgaAUglABPkKQAFgQARgeAAkkbQAUADAXAOAhYhMQgMAHgOAGQgtASgwAAAjqEvQAdgJATghQAVggAPgkQAPgkAMgjQAMgiALgjQAKgkAEgkQAJAXAYAaQAYAbAfARQAgARA8AOQA8AOBAALQAXAEATgDAhWgTQgEgLgBgNAF2liQABgBAAgCAFbgXQAAgCAAgDAEUl9QAaAGgCgcACeF6QAeAPAXAcQAVAbAUAgQATAgAVAeQALARAQANQgVgMggAOQggAOgjANQgiANgkAPQggAOgiAGQgEABgEABQgmAHgkAIQglAHglABQgkAAgaAAQgZAAgSAIQgRAJg1gXQg1gXg4hKQgKgSgQggQgRgggZgZQgNgMgPgKQAmADAigPQAigQAbgaQAcgaAagWQAbgWAZgPQAiAAAfAWQAdAVAkAOQAkAOAlAKQAfAIAjABQAEAAAFAAQAogBAlgIQAWgGAPAAgADaDqQgHAMgGAOQgOAdgUAcQgVAcAIAhAAhFqQgQAPASABQAGABAKgB");
	this.shape.setTransform(342.5,89.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AjNHTQg2gWg3hLIgagxQgRghgZgYQgOgNgOgJQAmADAigQQAhgPAcgbQAcgaAagVQAbgXAZgPQAhAAAfAWQAdAVAkAPQAkAOAkAJQAfAIAkABIAJAAQAoAAAlgJQAXgFAPgBQAeAQAWAcQAWAaAUAhQATAfAUAfQALAQAQAOQgVgNgfAOQggAPgjANIhHAcQggANghAHIgJACIhLAOQgkAHglABIg9ABQgaAAgRAIQgFACgHAAQgUAAgmgRgAEZhFQhAgLg8gOQg8gPgggQQghgRgXgbQgXgbgKgYQgEgKgBgNQgBgPAFgSQAsgaAZgrQAhg3AQg+IAGgVQATADAYAOQgJAjAAAyQABBFAnArQATAXAZgaQAngoAVg2QAKgZAVgmQB1ADgPDGIgBACIABADIgBgDIABgCIAAABIAAAEQAAA8gZAxQgWAogoAGIgRABQgMAAgNgCg");
	this.shape_1.setTransform(336.2,109.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhFgLQANAAAQgEQgGAMgJAMQgFAHgFAEQgNgLAJgUgAAvgMQAPgBAMgGIgCANQgFAPgMAHQgOgKAGgSg");
	this.shape_2.setTransform(368.6,43.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaBMQgNgKgIgOQgPgYgDgcQgBgHACgFQANAoAjAMQAgAKAogCIARAAIgmAbQgQAMgQAAQgOAAgPgLgAAihKIAAgGQASAEAQgBQgGASAOALIgCABQgMAHgJAAQgTAAAAgigAhGg/QgEgLgBgMQALAIAQABQgJAWANAKQgEADgEAAQgKAAgIgVg");
	this.shape_3.setTransform(366.5,49.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#993300").s().p("ADKGmQAQgbAFgmQApgHAVgnQAagxgBg8IAAgEIAAgBQAQjGh2gCIANgWQANgCANgEQAlgNAVgdQARgWAQghIAAgCIAAgCQgDgogHgjQgHgoAPgfQAFgMAJgKQgCgOgFgOQgEgPgGgMQgXgSgQggIAAgBIgDgBQgmgXgwATQgrARgjAVIg2BkQgbA1gTBBIgFARIgEANIgSBEIgFAVQgRA9ggA3QgaArgtAaQgMAGgOAGQgtASgwABQAwgBAtgSQAOgGAMgGQgEASABAPIgLAMIgFAHQgdAegnAOQhMAbhLgRQgvgLgagQQAwgSAighQAwguAZg4QAwilAUgjQAZgqA0giQAsgdAag4QAcg7AggqQAdgnA/gVQA4gTBNAOQA6gMA6AdQA3AcAEBMQAEBGgYA2QgbA/AmA2QAXAjAdCSIgHAwIgEAYQgQBagXAlQgZAngeAoIgOATIgBABQglAxg+ANIglAIQAKgTALgSgAh9CVIAAAAgAAAg5IAShEIAEgNQAKAbAbAVIAFAEQgRAdgFARQgXgOgTgDgAEjmXIADABIAAABIgDgCg");
	this.shape_4.setTransform(346.2,67.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC66").s().p("AgoIHQgkgBgggIQgkgJglgOQgjgPgegVQgegWgiAAQAcgIAUghQAUghAPgkQAQgkAMgiQAMgiALgkQAKgjADgmQAKAYAYAbQAYAbAgARQAgAQA7APQA8AOBAALQAXAEATgDQgFAmgQAbQgLASgKATIgNAaQgOAdgVAcQgUAcAIAhQgPABgXAFQgkAJgnAAIgJAAgAgZH4IABAAIgBAAQgJACgGgBQgKAAAAgFQAAgEAIgIQgIAIAAAEQAAAFAKAAQAGABAJgCgAAiA5QgmgrAAhEQgBgyAIgjQAEgRASgdQAZAUATATQAZAZAqABIADAAIADAAIAAAAIABAAQAUAAASgDQgSADgUAAIgBAAIAAAAIgDAAIgDAAQgqgBgZgZQgTgTgZgUIgFgEQgagVgKgbIAEgRQAThBAbg1IA2hkQAjgVArgRQAvgTAnAXIADADQAPAgAXARQAHANAEAOQAEAOADAOQgJAKgGAMQgOAfAHAoQAHAjADAoIgBAEQgPAhgRAWQgWAdgkANQgNAEgOADIgMAVQgUAmgKAZQgWA1gnAoQgNAOgMAAQgKAAgJgLgABhkOQAEAdAPAYQAIAOANAJQAdAXAhgYIAmgbIgRABQgoACghgLQgjgLgOgpQgCAFABAHgADRj9QAQgBgCgXQACAXgQABIAAAAIgBAAIgIgCIAIACIABAAIAAAAgADFleIAAAFQAAAxApgWIACgBQAMgHAEgQIADgNIAAAAQAOgEAEgKQgEAKgOAEIAAAAIAAgHQAAghghgMQgbATgCAmgABdlNQALAcAPgKQAFgEAFgHQAJgNAGgMQgQAEgNAAQgQgBgMgIQACALAEAMgACWlvIgGAQIAGgQIAAgBQAIgygjAAIAAAAIAAAAIgBAAIAAAAIgBAAQgRABgIANQgJATAAAUIAAAIIgBAAQgXgHgFgMQAFAMAXAHIABABIAAgBIAAgIQAAgUAJgTQAIgNARgBIABAAIAAAAIABAAIAAAAIAAAAQAjAAgIAyIAAABgADFleQACgmAbgTQAhAMAAAhIAAAHQgMAGgQABIgIABQgMAAgOgDg");
	this.shape_5.setTransform(350.1,77);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(10));

	// RBicep
	this.instance_3 = new lib.static_carmen_RBicep("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(331.2,68.4,0.997,0.997,17.2,0,0,35.8,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({startPosition:0},0).to({regX:35.9,regY:7.4,rotation:-42.8,x:331.3,y:68.3},4).wait(1));

	// LBicep
	this.instance_4 = new lib.static_carmen_LBicep("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(379.8,78,1,1,0,0,0,6.2,10.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({startPosition:0},0).to({regX:6.3,rotation:30,x:380.2,y:82.1},4).wait(1));

	// moving leg
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.1,1,1).p("AJ3jzQgnA7gkAmQgqAqgvAuQgtAtgrArQgvAxgrAhQgsAjg9ANQg+APhDAFQhDAGhEAKQhDALg5AJQg/AKhEAMQhAAMgdAwQghA3g4AXQgtATgmgYQg/goBIg3QAWgRAQgcQAdgzAmg1QATgaAiALQAsAOA3AFQBDAFA6geQA5gfAygiQA3gmA7gTQBAgUBEgDQBLgDAZg/QAVg2Ang3QAbgnAWglQAig3AmgmQANAYAQAUQAXAeAhAVQAeAUAkAPQAaAKAcAA");
	this.shape_6.setTransform(260.5,182.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC66").s().p("ApYFzQg/goBIg3QAWgRAQgcQAdgzAmg1QATgaAiALQAsAOA3AFQBDAFA6geQA5gfAygiQA3gmA7gTQBAgUBEgDQBLgDAZg/QAVg2Ang3QAbgnAWglQAig3AmgmQANAYAQAUQAXAeAhAVQAeAUAkAPQAaAKAcAAIABAAQgnA7gkAmIhZBYIhYBYQgvAxgrAhQgsAjg9ANQg+APhDAFQhDAGhEAKIh8AUIiDAWQhAAMgdAwQghA3g4AXQgUAIgTAAQgXAAgVgNg");
	this.shape_7.setTransform(260.5,182.3);

	this.instance_5 = new lib.static_Carmen_leg("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(314.6,148.4,1,1,0,0,0,117.1,4.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).to({state:[{t:this.instance_5}]},5).to({state:[{t:this.instance_5}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5).to({_off:false},0).to({regX:114.6,regY:10.6,rotation:-82.8,x:324.5,y:136.9},4).wait(1));

	// Layer 12
	this.instance_6 = new lib.static_ball("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(362,234.6,1,1,0,0,0,23.1,23.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(5).to({_off:false},0).wait(5));

	// planted leg
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.1,1,1).p("ABygvQhQAJiSBWIgBAA");
	this.shape_8.setTransform(360.2,149.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(0.1,1,1).p("AgimLQAVAaARAZQAUAbAUAgQAUAeAcAZQAbAYAiAUQAhATAdAZQAWATAOASQhEAOg1AdQgtAYgvArQgwAtgcAsQgdAtg+AWQg4ATg0AeQgxAcg0AgQhBAmgTAwQAHBRBLgHQBEgGA3AYQAvAUA9AOQAzALA3gCQBGgGgugtQgegfg9ABQghABgigHQhHgPAmhKQAPgdAlgKQA8gOA3gZQA7gbA6gZQA5gYA3gYQA3gYAygmQAwglAUgvQAKgWAOgTQgCgIgCgIQgIgjgIglQgIgjgRgiQgRgjgRgiQgQgfgPghQgPghgPgeQgQgfgZgXQgJgGgOgNQgOgNgMgBAkgEtQgtAMARAu");
	this.shape_9.setTransform(352.3,194.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFCC66").s().p("AhtHiQg8gOgvgUQg4gYhEAGQhLAHgHhRQATgwBAgmIBmg8QA0geA4gTQA/gWAcgtQAcgsAwgtQAvgrAtgYQA1gdBEgOQgOgSgWgTQgdgZghgTQgigUgbgYQgcgZgTgeQgVgggUgbIgmgzIABAAIAAAAQCThWBPgJQAMABAOANQAOANAJAGQAZAXAPAfQAQAeAPAhQAPAhAQAfIAiBFQARAiAIAjIARBIIADAQQgOATgKAWQgUAvgwAlQgzAmg2AYIhwAwIh1A0Qg3AZg7AOQglAKgQAdQglBKBGAPQAiAHAhgBQA9gBAeAfQAuAthHAGIgTAAQgsAAgqgJgAk7FnQgGgNAAgKQAAgaAigJQgiAJAAAaQAAAKAGANg");
	this.shape_10.setTransform(352.3,194.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(196.5,20.2,291.1,224.1);


(lib.anim_carmen_blocksball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"start":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		playSound("ball_bounce");
	}
	this.frame_8 = function() {
		playSound("ball_kick");
	}
	this.frame_9 = function() {
		this.gotoAndPlay("start");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(5).call(this.frame_8).wait(1).call(this.frame_9).wait(1));

	// Layer 7
	this.instance = new lib.static_ball("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(676.4,153.2,1,1,0,0,0,23.1,23.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[676.3,153.1,657.8,157.7,642.7,168.4,627.3,179.2,611.9,190.4,596.4,201.7,580.7,213.1,564,225.3,551,238.7,538.5,251.6,530.2,269.4,528.1,273.8,526.3,279]}},4).to({rotation:-1080,guide:{path:[526.3,279,525.8,259.6,518.5,240.4,511.2,221.3,501.7,204.4,492.1,187.1,482.1,172.1,472.5,157.7,459.4,146.6,445.4,134.7,428.7,127.1,412.6,119.7,394.3,118.2,380.6,117.2,364.3,113.1]}},5).wait(1));

	// body
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AF1nVQgGAGgFAGQgDAEgCAEQgdAegnAOQhMAbhLgRQgwgLgZgRQAvgRAigiQAwguAZg3QAxinAUgiQAZgrA0giQAsgdAag3QAcg7AggrQAdgnA/gVQA5gSBMANQA7gLA5AdQA4AcAEBMQADBGgXA2QgbA+AlA3QAYAjAcCTQgDAZgDAWQgCANgDAMQgQBZgXAlQgYAngeApQgHAJgIAKQAAAAAAABQglAxg+AMQgUAEgRAFQAKgUAKgRQAQgcAGgmQApgGAVgoQAZgwAAg9QAAgCAAgBQAAgBAAgBQAQjGh2gCQAGgLAGgLQAOgDAMgEQAlgMAWgdQARgXAPghQABgBAAAAQAAgBAAgBQgDgpgHgjQgIgoAPgfQAGgLAJgLQgDgOgEgOQgFgOgGgNQgXgRgPggQAAgBgBAAQgBgBgBgBQgngWgwATQgqARgjAVQgcAygaAyQgcA1gTBAQgCAJgDAJQALAaAbAVQACACADACQAZAUATATQAZAaApAAQAZABAVgEAMcwgQgCgCgBgBAMNtnQgOgLAFgSQgPABgTgEQAAADAAADQAAAxApgWQABgBABAAQAMgIAEgPQACgHABgHQAAAAAAAAQAOgEAEgJAMguMQgNAGgPACALiuHQACgmAagTQAmAOgEAmAJ0uNIAAAAQgCgYALgXQAHgOARgBQAmgBgIA1QgCAHgEAIQgQAFgNgBQgQgBgMgIQAAAAgBAAQgYgHgEgNAKtuIQgGAMgJANQgGAIgFADQgPAKgKgcQgFgLgBgMAKQuEQgJAWAMAKAKRsCQgPgYgEgcQgBgIACgFQAOApAjAMQAgAKApgCQAIAAAIAAQgUAOgSANQggAXgegWQgMgKgIgOgAILsVQgCAGgBAHQgJAfgKAkQgDAKgDALQgQA/ghA3QgZAqgtAaQgEASABAPAIgq0QgJAjAAAyQABBGAnArQATAWAZgaQAngnAVg2QALgaAUglAIgq0QAEgQASgeAH1rFQAUADAXAOAF4n2QgMAHgOAGQgtASgxAAADmh6QAcgJAUghQAUghAPgjQAPgkANgjQAMgiAKgjQAKgkAEglQAKAYAYAaQAYAbAgARQAgAQA8APQA8AOBAALQAXAEATgDAF5m9QgEgLAAgNANHsMQAAgCABgBAMsnBQAAgCAAgDALlsnQAZAGgCgcAJvgvQAeAPAWAcQAWAaAUAgQATAgAUAeQAMARAPANQAFAEAFADQAGAFAGAEQAZAXAPAeQAQAeAPAhQAPAhAQAgQARAiARAiQARAiAIAkQAIAlAIAiQACAIABAJQgNATgKAVQgUAwgwAlQgzAmg2AYQg4AYg4AZQg6AZg8AbQg3AYg8APQglAJgPAeQgmBJBHAPQAhAHAiAAQA9gBAfAfQAuAshIAGQg2ADgzgMQg9gOgvgUQg3gXhEAFQhLAHgHhQQATgxBAgmQA1gfAxgcQA0geA4gUQA+gVAdgtQAcgtAxgtQAvgrAtgZQA1gdBEgNQgOgSgWgUQgdgZghgTQgigUgbgYQgcgZgUgdQgUgggUgbQgTgZgUgbQgEABgFABQglAHgmAIQgkAHgmABQgkAAgiAFQgCABgDAAQgKACgJAAQgdABgagLQgkgOgegVQghgVgXgdQgQgVgNgYAMPCSQgUgMggAOQggAOgjANQgjANgkAPQgfANgiAHAKri/QgHAMgGAOQgOAdgVAcQgUAcAIAhQgPAAgXAGQglAIgoABQgEAAgEAAQgkgBgggIQglgKgkgOQgkgOgdgVQgfgWghAAAHxg/QgQAPATABQAGABAKgBAEsD9QgIAJgQgGQgnA8gkAlQgqAqgvAuQgtAtgrAsQguAxgrAiQgsAig9AOQg+AOhDAGQhEAGhEAKQhDAKg5AKQg/AKhEAMQhAAMgdAvQghA3g4AXQgtATgmgXQg/goBIg3QAWgSAQgcQAdgzAmg0QATgaAiALQAsAOA3AEQBDAGA6gfQA5geAygjQA3glA8gUQBAgVBEgDQBLgDAZg/QAVg1Ang4QAbgmAWgmQAhg3AmgmQgFgKgFgKQgQghgZgZQgOgMgNgKQAlADAigPQAhgPAcgaQAcgaAagWQAbgWAZgPAESOYQguANASAu");
	this.shape.setTransform(296,132.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Ai0HZQgkgOgegVQghgVgXgdQgQgVgNgYIgKgUQgQghgZgZQgOgMgOgKQAmADAigPQAhgQAcgaQAcgaAagWQAbgWAZgPQAhAAAfAWQAdAVAkAOQAkAOAkAKQAfAIAkABIAJAAQAogBAlgIQAXgGAPAAQAeAPAWAcQAWAbAUAgQATAgAUAeQALAQAQAOQgVgMgfAOQggAOgjANIhHAcQggANghAHIgJACIhLAPQgkAHglABQgkAAgiAFIgFABIgUACIgDAAQgbAAgYgKgAEZhEQhAgLg8gOQg8gPgggQQghgRgXgbQgXgagKgYQgEgLgBgNQgBgPAFgSQAsgaAZgqQAhg3AQg/IAGgVQATADAYAOQgJAjAAAyQABBGAnArQATAWAZgaQAngnAVg2QAKgaAVglQB1ACgPDGIgBADIABACIgBgCIABgDIAAACIAAADQAAA9gZAwQgWAogoAGIgRABQgMAAgNgCg");
	this.shape_1.setTransform(336.2,109.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhFgLQANAAAQgEQgGAMgJAMQgFAHgFAEQgNgLAJgUgAAvgMQAPgBAMgGIgCANQgFAPgMAHQgOgKAGgSg");
	this.shape_2.setTransform(368.6,43.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaBMQgNgKgIgOQgPgYgDgcQgBgHACgFQANAoAjAMQAgAKAogCIARAAIgmAbQgQAMgQAAQgOAAgPgLgAAihKIAAgGQASAEAQgBQgGASAOALIgCABQgMAHgJAAQgTAAAAgigAhGg/QgEgLgBgMQALAIAQABQgJAWANAKQgEADgEAAQgKAAgIgVg");
	this.shape_3.setTransform(366.5,49.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#993300").s().p("ADKGmQAQgbAFgmQApgHAVgnQAagxgBg8IAAgEIAAgBQAQjGh2gCIANgWQANgCANgEQAlgNAVgdQARgWAQghIAAgCIAAgCQgDgogHgjQgHgoAPgfQAFgMAJgKQgCgOgFgOQgEgPgGgMQgXgSgQggIAAgBIgDgBQgmgXgwATQgrARgjAVIg2BkQgbA1gTBBIgFARIgEANIgSBEIgFAVQgRA9ggA3QgaArgtAaQgMAGgOAGQgtASgwABQAwgBAtgSQAOgGAMgGQgEASABAPIgLAMIgFAHQgdAegnAOQhMAbhLgRQgvgLgagQQAwgSAighQAwguAZg4QAwilAUgjQAZgqA0giQAsgdAag4QAcg7AggqQAdgnA/gVQA4gTBNAOQA6gMA6AdQA3AcAEBMQAEBGgYA2QgbA/AmA2QAXAjAdCSIgHAwIgEAYQgQBagXAlQgZAngeAoIgOATIgBABQglAxg+ANIglAIQAKgTALgSgAh9CVIAAAAgAAAg5IAShEIAEgNQAKAbAbAVIAFAEQgRAdgFARQgXgOgTgDgAEjmXIADABIAAABIgDgCg");
	this.shape_4.setTransform(346.2,67.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC66").s().p("AHFQ6Qg9gOgvgUQg3gYhEAGQhLAHgHhRQATgwBAgmIBmg8QA0geA4gTQA+gWAdgtQAcgsAxgtQAvgsAtgYQA1gdBEgOQgOgSgWgTQgdgZghgTQgigUgbgYQgcgZgUgeQgUgggUgbIgngzQAigHAfgNIBHgcQAjgNAggPQAggOAUANIAKAHIAMAIQAZAXAPAfQAQAeAPAhQAPAhAQAfIAiBFQARAiAIAjIAQBIIADAQQgNATgKAWQgUAwgwAlQgzAmg2AYIhwAwIh2A0Qg3AZg8AOQglAKgPAdQgmBKBHAPQAhAHAigBQA9gBAfAfQAuAthIAGIgTAAQgsAAgqgJgAD2O/QgFgNAAgKQAAgaAhgJQghAJAAAaQAAAKAFANgAu7NUQg/goBIg3QAWgRAQgcQAdgzAmg1QATgaAiALQAsAOA3AFQBDAFA6geQA5gfAygiQA3gmA8gUQBAgUBEgDQBLgDAZg/QAVg2Ang3QAbgnAWglQAhg3AmgmQANAYAQAUQAXAeAhAVQAeAUAkAPQAaAKAdAAIAAAAQgnA7gkAmIhZBYIhYBZQguAxgrAhQgsAjg9ANQg+APhDAFQhEAGhEAKIh8AUIiDAWQhAAMgdAwQghA3g4AXQgUAIgTAAQgXAAgVgNgAH0g0QgkgBgggIQglgJgkgOQgkgPgdgVQgfgWghAAQAcgIAUghQAUghAPgkQAPgkANgiQAMgiAKgkQAKgjAEgmQAKAYAYAbQAYAbAgARQAgAQA8APQA8AOBAALQAXAEATgDQgGAmgQAbQgKASgKATIgNAaQgOAdgVAcQgUAcAIAhQgPABgXAFQglAJgoAAIgIAAgAIDhDIABAAIgBAAQgJACgGgBQgKAAAAgFQAAgEAHgIQgHAIAAAEQAAAFAKAAQAGABAJgCgAI/oCQgngrgBhFQAAgyAJgjQAEgRASgdQAZAUATATQAZAZApABIAEAAIADAAIAAAAIAAAAQAVAAASgDQgSADgVAAIAAAAIAAAAIgDAAIgEAAQgpgBgZgZQgTgTgZgUIgFgEQgbgVgLgbIAFgRQAThBAcg1IA2hkQAjgVAqgRQAwgTAnAXIADADQAPAgAXARQAGANAFAOQAEAOADAOQgJAKgGAMQgPAfAIAoQAHAjADAoIgBAEQgQAhgQAWQgWAdglANQgMAEgOADIgMAVQgUAmgLAZQgVA2gnAoQgNAOgMAAQgKAAgJgLgAJ+tKQAEAdAPAYQAIAOAMAJQAeAXAggYIAmgbIgQABQgpACgggLQgjgLgOgpQgCAFABAHgALus5QAQgBgCgXQACAXgQABIgBAAIAAAAIgIgCIAIACIAAAAIABAAgALiuaIAAAFQAAAxApgWIACgBQAMgHAEgQIADgNIAAAAQAOgEAEgKQgEAKgOAEIAAAAIAAgHQAAghgigMQgaATgCAmgAJ6uJQAKAcAPgKQAFgEAGgHQAJgNAGgMQgQAEgNAAQgQgBgMgIQABALAFAMgAKzurIgGAQIAGgQIAAgBQAHgygiAAIgBAAIAAAAIAAAAIgBAAIgBAAQgRABgHANQgJATAAAUIAAAIIgBAAQgYgHgEgMQAEAMAYAHIABABIAAgBIAAgIQAAgUAJgTQAHgNARgBIABAAIABAAIAAAAIAAAAIABAAQAiAAgHAyIAAABgALiuaQACgmAagTQAiAMAAAhIAAAHQgNAGgPABIgIABQgMAAgOgDg");
	this.shape_5.setTransform(296,134.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(10));

	// LForearm
	this.instance_1 = new lib.static_carmen_LForearm("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(414.7,59.9,0.997,0.997,-55.2,0,0,4.6,57.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,rotation:21,x:421.4,y:82.1},9).wait(1));

	// RForearm
	this.instance_2 = new lib.static_carmen_RForearm("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(310.9,39.6,1,1,105,0,0,59,34);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:15,x:293,y:58.2},9).wait(1));

	// LBicep
	this.instance_3 = new lib.static_carmen_LBicep("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(379.9,77.9,1,1,-30,0,0,6.3,10.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:6.2,rotation:0,x:379.8,y:78},9).wait(1));

	// RBicep
	this.instance_4 = new lib.static_carmen_RBicep("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(331.2,68.4,0.999,0.999,54.1,0,0,35.8,7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:7.5,scaleX:1,scaleY:1,rotation:17.2},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(196.5,-12.7,503.9,257.1);


(lib.anim_carmen_blocks = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"start":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		playSound("carmen_blocks");
	}
	this.frame_2 = function() {
		playSound("carmen_blocks");
	}
	this.frame_14 = function() {
		this.gotoAndPlay("start");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(12).call(this.frame_14).wait(1));

	// body
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AF1nVQgGAGgFAGQgDAEgCAEQgdAegnAOQhMAbhLgRQgwgLgZgRQAvgRAigiQAwguAZg3QAxinAUgiQAZgrA0giQAsgdAag3QAcg7AggrQAdgnA/gVQA5gSBMANQA7gLA5AdQA4AcAEBMQADBGgXA2QgbA+AlA3QAYAjAcCTQgDAZgDAWQgCANgDAMQgQBZgXAlQgYAngeApQgHAJgIAKQAAAAAAABQglAxg+AMQgUAEgRAFQAKgUAKgRQAQgcAGgmQApgGAVgoQAZgwAAg9QAAgCAAgBQAAgBAAgBQAQjGh2gCQAGgLAGgLQAOgDAMgEQAlgMAWgdQARgXAPghQABgBAAAAQAAgBAAgBQgBABAAACANIsPQgDgpgHgjQgIgoAPgfQAGgLAJgLQgDgOgEgOQgFgOgGgNQgXgRgPggQAAgBgBAAQgBgBgBgBQgngWgwATQgqARgjAVQgcAygaAyQgcA1gTBAQgCAJgDAJQgCAGgBAHQgJAfgKAkAMcwgQgCgCgBgBAMEuEQgPABgTgEQAAADAAADQAAAxApgWQABgBABAAQAMgIAEgPQACgHABgHQgNAGgPACQgFASAOALAMguMQAAAAAAAAQAOgEAEgJAMguMQAEgmgmgOQgaATgCAmAJ0uNIAAAAQgCgYALgXQAHgOARgBQAmgBgIA1QgCAHgEAIQgQAFgNgBAJ0uNQAAAAgBAAQgYgHgEgNAKtuIQgGAMgJANQgGAIgFADQgPAKgKgcQgFgLgBgMAKTtkQgMgKAJgWQgQgBgMgIAJ+s2QgBgIACgFQAOApAjAMQAgAKApgCQAIAAAIAAQgUAOgSANQggAXgegWQgMgKgIgOQgPgYgEgcgAILsVQALAaAbAVQACACADACQAZAUATATQAZAaApAAQAZABAVgEAIgq0QgJAjAAAyQABBGAnArQATAWAZgaQAngnAVg2QALgaAUglAIgq0QgXgOgUgDQgDAKgDALQgQA/ghA3QgZAqgtAaQgMAHgOAGQgtASgxAAAI2riQgSAegEAQAF1nVQgBgPAEgSADmh6QAcgJAUghQAUghAPgjQAPgkANgjQAMgiAKgjQAKgkAEglQAKAYAYAaQAYAbAgARQAgAQA8APQA8AOBAALQAXAEATgDAF5m9QgEgLAAgNAMsnBQAAgCAAgDALlsnQAZAGgCgcAJvgvQAeAPAWAcQAWAaAUAgQATAgAUAeQAMARAPANQgUgMggAOQggAOgjANQgjANgkAPQgfANgiAHQgEABgFABQglAHgmAIQgkAHgmABQgkAAgiAFQgCABgDAAQgKACgJAAQgdABgagLQgkgOgegVQghgVgXgdQgQgVgNgYAMPCSQAFAEAFADQAGAFAGAEQAZAXAPAeQAQAeAPAhQAPAhAQAgQARAiARAiQARAiAIAkQAIAlAIAiQACAIABAJQgNATgKAVQgUAwgwAlQgzAmg2AYQg4AYg4AZQg6AZg8AbQg3AYg8APQglAJgPAeQgmBJBHAPQAhAHAiAAQA9gBAfAfQAuAshIAGQg2ADgzgMQg9gOgvgUQg3gXhEAFQhLAHgHhQQATgxBAgmQA1gfAxgcQA0geA4gUQA+gVAdgtQAcgtAxgtQAvgrAtgZQA1gdBEgNQgOgSgWgUQgdgZghgTQgigUgbgYQgcgZgUgdQgUgggUgbQgTgZgUgbAKri/QgHAMgGAOQgOAdgVAcQgUAcAIAhADmh6QAhAAAfAWQAdAVAkAOQAkAOAlAKQAgAIAkABQAEAAAEAAQAogBAlgIQAXgGAPAAAHxg/QgQAPATABQAGABAKgBAEsD9QgIAJgQgGQgnA8gkAlQgqAqgvAuQgtAtgrAsQguAxgrAiQgsAig9AOQg+AOhDAGQhEAGhEAKQhDAKg5AKQg/AKhEAMQhAAMgdAvQghA3g4AXQgtATgmgXQg/goBIg3QAWgSAQgcQAdgzAmg0QATgaAiALQAsAOA3AEQBDAGA6gfQA5geAygjQA3glA8gUQBAgVBEgDQBLgDAZg/QAVg1Ang4QAbgmAWgmQAhg3AmgmQgFgKgFgKQgQghgZgZQgOgMgNgKQAlADAigPQAhgPAcgaQAcgaAagWQAbgWAZgPAESOYQguANASAu");
	this.shape.setTransform(296,132.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Ai0HZQgkgOgegVQghgVgXgdQgQgVgNgYIgKgUQgQghgZgZQgOgMgOgKQAmADAigPQAhgQAcgaQAcgaAagWQAbgWAZgPQAhAAAfAWQAdAVAkAOQAkAOAkAKQAfAIAkABIAJAAQAogBAlgIQAXgGAPAAQAeAPAWAcQAWAbAUAgQATAgAUAeQALAQAQAOQgVgMgfAOQggAOgjANIhHAcQggANghAHIgJACIhLAPQgkAHglABQgkAAgiAFIgFABIgUACIgDAAQgbAAgYgKgAEZhEQhAgLg8gOQg8gPgggQQghgRgXgbQgXgagKgYQgEgLgBgNQgBgPAFgSQAsgaAZgqQAhg3AQg/IAGgVQATADAYAOQgJAjAAAyQABBGAnArQATAWAZgaQAngnAVg2QAKgaAVglQB1ACgPDGIgBADIABACIgBgCIABgDIAAACIAAADQAAA9gZAwQgWAogoAGIgRABQgMAAgNgCgAGajjIAAAAg");
	this.shape_1.setTransform(336.2,109.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhFgLQANAAAQgEQgGAMgJAMQgFAHgFAEQgNgLAJgUgAAvgMQAPgBAMgGIgCANQgFAPgMAHQgOgKAGgSg");
	this.shape_2.setTransform(368.6,43.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaBMQgNgKgIgOQgPgYgDgcQgBgHACgFQANAoAjAMQAgAKAogCIARAAIgmAbQgQAMgQAAQgOAAgPgLgAAihKIAAgGQASAEAQgBQgGASAOALIgCABQgMAHgJAAQgTAAAAgigAhGg/QgEgLgBgMQALAIAQABQgJAWANAKQgEADgEAAQgKAAgIgVg");
	this.shape_3.setTransform(366.5,49.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#993300").s().p("ADKGmQAQgbAFgmQApgHAVgnQAagxgBg8IAAgEIAAgBQAQjGh2gCIANgWQANgCANgEQAlgNAVgdQARgWAQghIAAgCIAAgCQgDgogHgjQgHgoAPgfQAFgMAJgKQgCgOgFgOQgEgPgGgMQgXgSgQggIAAgBIgDgBQgmgXgwATQgrARgjAVIg2BkQgbA1gTBBIgFARQAKAbAbAVIAFAEQgRAdgFARQgXgOgTgDIAShEIAEgNIgEANIgSBEIgFAVQgRA9ggA3QgaArgtAaQgMAGgOAGQgtASgwABQAwgBAtgSQAOgGAMgGQgEASABAPIgLAMIgFAHQgdAegnAOQhMAbhLgRQgvgLgagQQAwgSAighQAwguAZg4QAwilAUgjQAZgqA0giQAsgdAag4QAcg7AggqQAdgnA/gVQA4gTBNAOQA6gMA6AdQA3AcAEBMQAEBGgYA2QgbA/AmA2QAXAjAdCSIgHAwIgEAYQgQBagXAlQgZAngeAoIgOATIgBABQglAxg+ANIglAIQAKgTALgSgAh9CVIAAAAgAEjmXIADABIAAABIgDgCg");
	this.shape_4.setTransform(346.2,67.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC66").s().p("AHFQ6Qg9gOgvgUQg3gYhEAGQhLAHgHhRQATgwBAgmIBmg8QA0geA4gTQA+gWAdgtQAcgsAxgtQAvgsAtgYQA1gdBEgOQgOgSgWgTQgdgZghgTQgigUgbgYQgcgZgUgeQgUgggUgbIgngzQAigHAfgNIBHgcQAjgNAggPQAggOAUANIAKAHIAMAIQAZAXAPAfQAQAeAPAhQAPAhAQAfIAiBFQARAiAIAjIAQBIIADAQQgNATgKAWQgUAwgwAlQgzAmg2AYIhwAwIh2A0Qg3AZg8AOQglAKgPAdQgmBKBHAPQAhAHAigBQA9gBAfAfQAuAthIAGIgTAAQgsAAgqgJgAD2O/QgFgNAAgKQAAgaAhgJQghAJAAAaQAAAKAFANgAu7NUQg/goBIg3QAWgRAQgcQAdgzAmg1QATgaAiALQAsAOA3AFQBDAFA6geQA5gfAygiQA3gmA8gUQBAgUBEgDQBLgDAZg/QAVg2Ang3QAbgnAWglQAhg3AmgmQANAYAQAUQAXAeAhAVQAeAUAkAPQAaAKAdAAIAAAAQgnA7gkAmIhZBYIhYBZQguAxgrAhQgsAjg9ANQg+APhDAFQhEAGhEAKIh8AUIiDAWQhAAMgdAwQghA3g4AXQgUAIgTAAQgXAAgVgNgAH0g0QgkgBgggIQglgJgkgOQgkgPgdgVQgfgWghAAQAcgIAUghQAUghAPgkQAPgkANgiQAMgiAKgkQAKgjAEgmQAKAYAYAbQAYAbAgARQAgAQA8APQA8AOBAALQAXAEATgDQgGAmgQAbQgKASgKATIgNAaQgOAdgVAcQgUAcAIAhQgPABgXAFQglAJgoAAIgIAAgAIDhDIABAAIgBAAQgJACgGgBQgKAAAAgFQAAgEAHgIQgHAIAAAEQAAAFAKAAQAGABAJgCgAI/oCQgngrgBhFQAAgyAJgjQAEgRASgdQAZAUATATQAZAZApABIAEAAIADAAIAAAAIAAAAQAVAAASgDQgSADgVAAIAAAAIAAAAIgDAAIgEAAQgpgBgZgZQgTgTgZgUIgFgEQgbgVgLgbIAFgRQAThBAcg1IA2hkQAjgVAqgRQAwgTAnAXIADADQAPAgAXARQAGANAFAOQAEAOADAOQgJAKgGAMQgPAfAIAoQAHAjADAoIgBAEQgQAhgQAWQgWAdglANQgMAEgOADIgMAVQgUAmgLAZQgVA2gnAoQgNAOgMAAQgKAAgJgLgAJ+tKQAEAdAPAYQAIAOAMAJQAeAXAggYIAmgbIgQABQgpACgggLQgjgLgOgpQgCAFABAHgALus5QAQgBgCgXQACAXgQABIgBAAIAAAAIgIgCIAIACIAAAAIABAAgALiuVQAAAxApgWIACgBQAMgHAEgQIADgNQgNAGgPABQgPACgTgEQACgmAagTQAiAMAAAhIAAAHIAAAAQAOgEAEgKQgEAKgOAEIAAAAIAAgHQAAghgigMQgaATgCAmIAAAFgAJ6uJQAKAcAPgKQAFgEAGgHQAJgNAGgMQgQAEgNAAQgQgBgMgIQABALAFAMgAKzurIgGAQIAGgQIAAgBQAHgygiAAIgBAAIAAAAIAAAAIgBAAIgBAAQgRABgHANQgJATAAAUIAAAIIgBAAQgYgHgEgMQAEAMAYAHIABABIAAgBIAAgIQAAgUAJgTQAHgNARgBIABAAIABAAIAAAAIAAAAIABAAQAiAAgHAyIAAABg");
	this.shape_5.setTransform(296,134.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_5},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_5},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},13).wait(1));

	// LForearm
	this.instance = new lib.static_carmen_LForearm("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(414.7,59.9,0.997,0.997,-55.2,0,0,4.6,57.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:21,x:421.4,y:82.1},9).wait(6));

	// RForearm
	this.instance_1 = new lib.static_carmen_RForearm("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(310.9,39.6,1,1,105,0,0,59,34);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:15,x:293,y:58.2},9).wait(6));

	// LBicep
	this.instance_2 = new lib.static_carmen_LBicep("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(379.9,77.9,1,1,-30,0,0,6.3,10.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:6.2,rotation:0,x:379.8,y:78},9).wait(6));

	// RBicep
	this.instance_3 = new lib.static_carmen_RBicep("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(331.2,68.4,0.999,0.999,54.1,0,0,35.8,7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:7.5,scaleX:1,scaleY:1,rotation:17.2},9).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(196.5,-12.7,225.9,257.1);


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
		
		 window.open ("subject_Summary.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("subject_scene7.html","_self");
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


(lib.Diagramblocks = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"blocks subject":63,"blocks verb":149,"blocks complement":214,"blocks review":325});

	// timeline functions:
	this.frame_4 = function() {
		playSound("thesubjectisalways");
	}
	this.frame_74 = function() {
		playSound("cowbell_3times");
	}
	this.frame_75 = function() {
		playSound("carmen");
	}
	this.frame_150 = function() {
		playSound("cowbell_3times");
	}
	this.frame_151 = function() {
		playSound("carmenblocks");
	}
	this.frame_214 = function() {
		playSound("cowbell_3times");
	}
	this.frame_216 = function() {
		playSound("carmenblockstheshot");
	}
	this.frame_283 = function() {
		playSound("carmen_blocks");
	}
	this.frame_297 = function() {
		playSound("ball_kick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(70).call(this.frame_74).wait(1).call(this.frame_75).wait(75).call(this.frame_150).wait(1).call(this.frame_151).wait(63).call(this.frame_214).wait(2).call(this.frame_216).wait(67).call(this.frame_283).wait(14).call(this.frame_297).wait(89));

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
	this.instance_3.setTransform(-134.9,706,1,1,0,0,0,6.9,17.3);

	this.instance_4 = new lib.Wordsshot();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-161.3,717.2,1,1,0,0,0,73.5,17.7);

	this.instance_5 = new lib.Wordsthe();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-208,717.2,1,1,0,0,0,73.5,22.9);

	this.instance_6 = new lib.Wordsblocks();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-264.3,717.2,1,1,0,0,0,73.5,22.9);

	this.instance_7 = new lib.Wordscarmen();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-336.1,717.2,1,1,0,0,0,73.5,22.9);

	this.instance_8 = new lib.Wordswho();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-430.2,516.5,1,1,0,0,0,51.8,10.4);

	this.instance_9 = new lib.Wordscarmen();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-336.1,717.2,1,1,0,0,0,73.5,22.9);

	this.instance_10 = new lib.Wordsdoes();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-261.2,509.1,1,1,0,0,0,73.5,16);

	this.instance_11 = new lib.Wordsblocks();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-264.3,717.2,1,1,0,0,0,73.5,22.9);

	this.instance_12 = new lib.WordsTowhat();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-83.6,511.4,1,1,0,0,0,51.8,16);

	this.instance_13 = new lib.Wordsshot();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-161.3,717.2,1,1,0,0,0,73.5,17.7);

	this.instance_14 = new lib.Wordsthe();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-208,717.2,1,1,0,0,0,73.5,22.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},51).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_8},{t:this.instance_7,p:{x:-336.1,y:717.2}},{t:this.instance_6,p:{regY:22.9,x:-264.3,y:717.2}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-208,y:717.2}},{t:this.instance_4,p:{regY:17.7,x:-161.3,y:717.2}},{t:this.instance_3}]},12).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_9},{t:this.instance_6,p:{regY:22.9,x:-264.3,y:717.2}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-208,y:717.2}},{t:this.instance_4,p:{regY:17.7,x:-161.3,y:717.2}},{t:this.instance_7,p:{x:-429.2,y:526.4}},{t:this.instance_3}]},12).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{x:-336.1,y:717.2}},{t:this.instance_6,p:{regY:22.9,x:-264.3,y:717.2}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-208,y:717.2}},{t:this.instance_4,p:{regY:17.7,x:-161.3,y:717.2}},{t:this.instance_3}]},11).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{x:-336.1,y:717.2}},{t:this.instance_6,p:{regY:22.9,x:-264.3,y:717.2}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-208,y:717.2}},{t:this.instance_4,p:{regY:17.7,x:-161.3,y:717.2}},{t:this.instance_3},{t:this.instance_8}]},18).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_9},{t:this.instance_6,p:{regY:22.9,x:-264.3,y:717.2}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-208,y:717.2}},{t:this.instance_4,p:{regY:17.7,x:-161.3,y:717.2}},{t:this.instance_7,p:{x:-429.2,y:526.4}},{t:this.instance_3}]},10).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{x:-336.1,y:717.2}},{t:this.instance_6,p:{regY:22.9,x:-264.3,y:717.2}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-208,y:717.2}},{t:this.instance_4,p:{regY:17.7,x:-161.3,y:717.2}},{t:this.instance_3}]},10).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{x:-336.1,y:717.2}},{t:this.instance_6,p:{regY:22.9,x:-264.3,y:717.2}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-208,y:717.2}},{t:this.instance_4,p:{regY:17.7,x:-161.3,y:717.2}},{t:this.instance_3},{t:this.instance_10}]},13).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{x:-336.1,y:717.2}},{t:this.instance_11},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-208,y:717.2}},{t:this.instance_4,p:{regY:17.7,x:-161.3,y:717.2}},{t:this.instance_3},{t:this.instance_6,p:{regY:14.6,x:-265.2,y:513}}]},14).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{x:-336.1,y:717.2}},{t:this.instance_6,p:{regY:22.9,x:-264.3,y:717.2}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-208,y:717.2}},{t:this.instance_4,p:{regY:17.7,x:-161.3,y:717.2}},{t:this.instance_3}]},11).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{x:-336.1,y:717.2}},{t:this.instance_11},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-208,y:717.2}},{t:this.instance_4,p:{regY:17.7,x:-161.3,y:717.2}},{t:this.instance_3},{t:this.instance_6,p:{regY:14.6,x:-265.2,y:513}}]},11).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{x:-336.1,y:717.2}},{t:this.instance_6,p:{regY:22.9,x:-264.3,y:717.2}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-208,y:717.2}},{t:this.instance_4,p:{regY:17.7,x:-161.3,y:717.2}},{t:this.instance_3}]},12).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{x:-336.1,y:717.2}},{t:this.instance_6,p:{regY:22.9,x:-264.3,y:717.2}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-208,y:717.2}},{t:this.instance_4,p:{regY:17.7,x:-161.3,y:717.2}},{t:this.instance_3},{t:this.instance_12}]},20).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{x:-336.1,y:717.2}},{t:this.instance_6,p:{regY:22.9,x:-264.3,y:717.2}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-208,y:717.2}},{t:this.instance_13},{t:this.instance_3},{t:this.instance_4,p:{regY:9.3,x:-85,y:513.3}}]},10).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{x:-336.1,y:717.2}},{t:this.instance_6,p:{regY:22.9,x:-264.3,y:717.2}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-208,y:717.2}},{t:this.instance_4,p:{regY:17.7,x:-161.3,y:717.2}},{t:this.instance_3}]},11).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{x:-336.1,y:717.2}},{t:this.instance_6,p:{regY:22.9,x:-264.3,y:717.2}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-208,y:717.2}},{t:this.instance_4,p:{regY:17.7,x:-161.3,y:717.2}},{t:this.instance_3},{t:this.instance_12}]},10).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{x:-336.1,y:717.2}},{t:this.instance_6,p:{regY:22.9,x:-264.3,y:717.2}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-208,y:717.2}},{t:this.instance_13},{t:this.instance_3},{t:this.instance_4,p:{regY:9.3,x:-85,y:513.3}}]},10).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{x:-336.1,y:717.2}},{t:this.instance_6,p:{regY:22.9,x:-264.3,y:717.2}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-208,y:717.2}},{t:this.instance_4,p:{regY:17.7,x:-161.3,y:717.2}},{t:this.instance_3}]},9).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{x:-336.1,y:717.2}},{t:this.instance_6,p:{regY:22.9,x:-264.3,y:717.2}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-208,y:717.2}},{t:this.instance_4,p:{regY:17.7,x:-161.3,y:717.2}},{t:this.instance_3}]},21).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{x:-336.1,y:717.2}},{t:this.instance_6,p:{regY:22.9,x:-264.3,y:717.2}},{t:this.instance_14},{t:this.instance_4,p:{regY:17.7,x:-161.3,y:717.2}},{t:this.instance_3},{t:this.instance_5,p:{regY:14.6,rotation:45,x:-90.8,y:622}}]},22).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{x:-336.1,y:717.2}},{t:this.instance_6,p:{regY:22.9,x:-264.3,y:717.2}},{t:this.instance_14},{t:this.instance_13},{t:this.instance_3},{t:this.instance_5,p:{regY:14.6,rotation:45,x:-90.8,y:622}},{t:this.instance_4,p:{regY:9.3,x:-85,y:513.3}}]},9).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_9},{t:this.instance_6,p:{regY:22.9,x:-264.3,y:717.2}},{t:this.instance_14},{t:this.instance_4,p:{regY:17.7,x:-161.3,y:717.2}},{t:this.instance_3},{t:this.instance_5,p:{regY:14.6,rotation:45,x:-90.8,y:622}},{t:this.instance_7,p:{x:-429.2,y:526.4}}]},9).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{x:-336.1,y:717.2}},{t:this.instance_11},{t:this.instance_14},{t:this.instance_4,p:{regY:17.7,x:-161.3,y:717.2}},{t:this.instance_3},{t:this.instance_5,p:{regY:14.6,rotation:45,x:-90.8,y:622}},{t:this.instance_6,p:{regY:14.6,x:-265.2,y:513}}]},8).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{x:-336.1,y:717.2}},{t:this.instance_6,p:{regY:22.9,x:-264.3,y:717.2}},{t:this.instance_14},{t:this.instance_4,p:{regY:17.7,x:-161.3,y:717.2}},{t:this.instance_3},{t:this.instance_5,p:{regY:14.6,rotation:45,x:-90.8,y:622}}]},8).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{x:-336.1,y:717.2}},{t:this.instance_6,p:{regY:22.9,x:-264.3,y:717.2}},{t:this.instance_14},{t:this.instance_13},{t:this.instance_3},{t:this.instance_5,p:{regY:14.6,rotation:45,x:-90.8,y:622}},{t:this.instance_4,p:{regY:9.3,x:-85,y:513.3}}]},8).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{x:-336.1,y:717.2}},{t:this.instance_6,p:{regY:22.9,x:-264.3,y:717.2}},{t:this.instance_14},{t:this.instance_4,p:{regY:17.7,x:-161.3,y:717.2}},{t:this.instance_3},{t:this.instance_5,p:{regY:14.6,rotation:45,x:-90.8,y:622}}]},9).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_9},{t:this.instance_6,p:{regY:22.9,x:-264.3,y:717.2}},{t:this.instance_14},{t:this.instance_4,p:{regY:17.7,x:-161.3,y:717.2}},{t:this.instance_3},{t:this.instance_5,p:{regY:14.6,rotation:45,x:-90.8,y:622}},{t:this.instance_7,p:{x:-429.2,y:526.4}}]},6).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_9},{t:this.instance_11},{t:this.instance_14},{t:this.instance_4,p:{regY:17.7,x:-161.3,y:717.2}},{t:this.instance_3},{t:this.instance_5,p:{regY:14.6,rotation:45,x:-90.8,y:622}},{t:this.instance_6,p:{regY:14.6,x:-265.2,y:513}},{t:this.instance_7,p:{x:-429.2,y:526.4}}]},6).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_9},{t:this.instance_11},{t:this.instance_14},{t:this.instance_13},{t:this.instance_3},{t:this.instance_5,p:{regY:14.6,rotation:45,x:-90.8,y:622}},{t:this.instance_4,p:{regY:9.3,x:-85,y:513.3}},{t:this.instance_6,p:{regY:14.6,x:-265.2,y:513}},{t:this.instance_7,p:{x:-429.2,y:526.4}}]},5).wait(20));

	// Layer 25 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AusI8IAAx3IdZAAIAAR3g");
	mask.setTransform(-263.4,523.4);

	// verb section
	this.instance_15 = new lib.anim_carmen_blocksball();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-225.3,523.5,0.362,0.362,0,0,0,448.4,112.1);
	this.instance_15._off = true;

	var maskedShapeInstanceList = [this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(162).to({_off:false},0).to({_off:true},11).wait(12).to({_off:false},0).wait(20).to({_off:true},119).wait(8).to({_off:false},0).to({_off:true},29).wait(25));

	// only thing visible (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AO6NFIAA0TIV+AAIAAUTgEgk3ANEIAA6IISWAAIAAaIg");
	mask_1.setTransform(-252.9,493.7);

	// images
	this.instance_16 = new lib.anim_carmen_blocks();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-429.9,523,0.379,0.379,0,0,0,325.4,112.2);
	this.instance_16._off = true;

	this.instance_17 = new lib.anim_carmen_blocksballdrops();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-62.9,520.4,0.359,0.359,0,0,0,448.4,112.2);

	var maskedShapeInstanceList = [this.instance_16,this.instance_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_16}]},86).to({state:[]},18).to({state:[{t:this.instance_16}]},20).to({state:[{t:this.instance_16}]},14).to({state:[{t:this.instance_16}]},24).to({state:[{t:this.instance_16},{t:this.instance_17}]},64).to({state:[{t:this.instance_16}]},10).to({state:[{t:this.instance_16}]},10).to({state:[{t:this.instance_16},{t:this.instance_17}]},9).to({state:[{t:this.instance_16},{t:this.instance_17}]},21).to({state:[{t:this.instance_16}]},31).to({state:[{t:this.instance_17}]},9).to({state:[{t:this.instance_16},{t:this.instance_17}]},8).to({state:[{t:this.instance_16}]},16).to({state:[{t:this.instance_16},{t:this.instance_17}]},9).to({state:[{t:this.instance_17}]},6).to({state:[]},11).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(86).to({_off:false},0).to({_off:true},18).wait(20).to({_off:false},0).wait(183).to({_off:true},9).wait(8).to({_off:false},0).wait(25).to({_off:true},6).wait(31));

	// pen
	this.pen = new lib.anim_pencil();
	this.pen.parent = this;
	this.pen.setTransform(31.9,-28.2);

	this.timeline.addTween(cjs.Tween.get(this.pen).to({regX:-7.2,regY:352,x:-490.4,y:577.4},4).to({x:-27.9,y:583.8},10).to({x:-378.4,y:472.3},5).to({y:652.6},6).to({x:-173.5,y:474.1},5).to({x:-172,y:583.8},7).to({x:27.8,y:370},7).to({_off:true},1).wait(231).to({_off:false,regX:164.1,regY:174.6,x:251,y:169.9},0).to({x:1,y:407.1},7).to({x:89.4,y:492.5},7).to({x:271.7,y:426.8},7).to({_off:true},1).wait(88));

	// diag bar
	this.instance_18 = new lib.static_bar();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-155.4,580.6,1,1,-30,0,0,-0.1,-1.2);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(283).to({_off:false},0).to({scaleX:1.43,scaleY:45.92,rotation:-43.1,x:-155.8,y:581.2},7).wait(96));

	// right bar
	this.instance_19 = new lib.static_bar();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-166.2,471.3,0.882,0.391,0,0,0,0.1,-1.2);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(30).to({_off:false},0).to({scaleX:1.18,scaleY:45.6,x:-164.7,y:465.4},7).wait(349));

	// left bar
	this.instance_20 = new lib.static_bar();
	this.instance_20.parent = this;
	this.instance_20.setTransform(-371.1,469.4,0.882,0.391,0,0,0,0.1,-1.2);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(19).to({_off:false},0).to({scaleX:1.18,scaleY:75.63,y:465.7},6).wait(361));

	// line1
	this.instance_21 = new lib.static_line("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(-483.2,574.5,0.02,2.236,0,63.4,0,162.5,0.1);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(4).to({_off:false},0).to({regX:164,regY:1.6,scaleX:2.8,skewX:-116.6,x:-22,y:579.3},10).wait(372));

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
(lib.subject_scene8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene8:0,scene8repeat:330});

	// timeline functions:
	this.frame_346 = function() {
		/* gotoAndPlay("scene8repeat");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(346).call(this.frame_346).wait(1));

	// Layer 2
	this.instance = new lib.Diagramblocks();
	this.instance.parent = this;
	this.instance.setTransform(457.9,-14.7,1,1,0,0,0,-66.2,329.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(347));

	// Layer 1
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.instance_1 = new lib.Background("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275,195.5,1.069,1.05);

	this.instance_2 = new lib.header2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(220.7,25,1,1,0,0,0,-5.3,20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.UI}]}).wait(347));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,-172.2,876.8,775.3);
// library properties:
lib.properties = {
	id: 'A764CD98CA8F9D4BB6C68B75459F1770',
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
		{src:"sounds/carmen.mp3", id:"carmen"},
		{src:"sounds/carmen_blocks.mp3", id:"carmen_blocks"},
		{src:"sounds/carmenblocks.mp3", id:"carmenblocks"},
		{src:"sounds/carmenblockstheshot.mp3", id:"carmenblockstheshot"},
		{src:"sounds/cowbell_3times.mp3", id:"cowbell_3times"},
		{src:"sounds/High_Screaming_Gtr.mp3", id:"High_Screaming_Gtr"},
		{src:"sounds/organ_f_chord.mp3", id:"organ_f_chord"},
		{src:"sounds/right_answer.mp3", id:"right_answer"},
		{src:"sounds/thesubjectisalways.mp3", id:"thesubjectisalways"},
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
an.compositions['A764CD98CA8F9D4BB6C68B75459F1770'] = {
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