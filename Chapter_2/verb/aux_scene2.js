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


(lib.chartbar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("blips_2times");
	}
	this.frame_7 = function() {
		playSound("blips_2times");
	}
	this.frame_24 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(17).call(this.frame_24).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ae5CSMg9xAAAIAAkjMA9xAAAg");
	this.shape.setTransform(197.7,14.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("A+4CSIAAkjMA9wAAAIAAEjg");
	this.shape_1.setTransform(197.7,14.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("A+4CSIAAkjMA9wAAAIAAEjg");
	this.shape_2.setTransform(197.7,14.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},2).to({state:[{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_2},{t:this.shape}]},2).to({state:[{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_2},{t:this.shape}]},2).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,397.3,31.2);


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
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("EAnFgX3MhOJAAAMAAAAvvMBOJAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#3399FF"],[0,1],0.4,-207.7,-1,217.9).s().p("EgnEAX4MAAAgvvMBOJAAAMAAAAvvg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-251.6,-154.3,503.3,308.7);


(lib.chart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		playSound("theauxillaryverbsare");
	}
	this.frame_39 = function() {
		playSound("maymightmustdo");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(30).call(this.frame_39).wait(181));

	// TheAuxVerbsAre
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgFAsQgCgDAAgEIgBgFIgBgFQAAgEADgDQADgDADAAQALAAAAAUQAAAEgDADQgDACgEAAQgDAAgDgCgAgGgXQgDgCAAgEIAAgEIgBgEQAAgDADgDQADgCAEgBQAJABAAAQQAAAEgDACQgCADgEAAQgEAAgCgDg");
	this.shape.setTransform(65.6,-162.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgfAoQgOgMAAgUQAAgYAMgQQAMgSAVAAQAPAAAKAFQAMAHAAANQAAAJgLAIIgUAJIgiARQAFAIAIAEQAIAEAJAAQAGAAAJgDQALgDADgFQADgFAEAAQADAAADADQACACAAADQAAALgQAHQgPAHgNAAQgUAAgNgLgAgSgYQgIAJgEAQIAdgMQAQgJAHgGQgIgHgOAAQgLAAgHAJg");
	this.shape_1.setTransform(57.8,-161.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgjArIAAhBIAAgJIABgJQAAgJAHAAQAJAAAAAQQASgSAVAAQAIAAADAGQAEAFAAAMIAAAGQAAAMgJAAQgIAAAAgJIAAgGIAAgIQgQACgHAGQgJAGgFAMIAAAyQAAAJgJAAQgIAAAAgJg");
	this.shape_2.setTransform(48.2,-161.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAeAvIgHgGIgPAHQgHADgEAAQgVAAgKgNQgKgLAAgYQAAgWAQgQQAPgQAVAAQAIAAAKAFQANAFAAAHQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABIgCALIAAAUQAAAMABAGIAGAQIACAGIABABQAAAEgDACQgCACgEABQgCAAgEgFgAgPgWQgKAMAAAOQAAAPAFAHQAGAJAKAAQAIgBAGgDQAEgBAGgGQgDgYAAgMIAAgIIACgKIgGgDIgEgBQgNAAgLAMg");
	this.shape_3.setTransform(38.5,-161.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgkBAQgSgIAAgOQAAgEACgCQADgDAFAAQAEAAAEAGQAEAHAEACQAHAFAPAAQAOAAAMgGQAQgIAAgOQAAgMgNgHQgMgFgPgBQgOAAgLgFQgNgIAAgOQAAgQASgOQASgNASAAQAKAAALADQAPAEAAAGQAAAJgJAAIgMgCIgPgCQgNAAgKAHQgLAHAAAKQAAAIAOADIATACQAVACAMAMQALAJAAAQQAAAWgUANQgSAMgXAAQgQAAgOgHg");
	this.shape_4.setTransform(21.5,-163.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgqBHQgEgEAAgEIAAgbIACglIACgmIABgZQAAgFADgCQAMgDAQAAQAQAAAPALQARAMAAAUQAAAXgSANQANAGAHAHQAHAIAAAIQAAALgMAKQgIAIgKAEQgTAIghAAQgEAAgDgEgAgcAkIAAAUQAZgBAOgGQAGgDAGgEQAGgFAAgDQAAgFgMgFQgJgEgIgCIgJgCIgEAAIgDAAIgLAAIgBAUgAgYg3IAAARIgCAkIAOAAQANgBAJgHQAKgIAAgNQAAgJgKgIQgKgHgKgBIgOABg");
	this.shape_5.setTransform(9.2,-164);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgvBGQgDgCAAgFIAAgVIgBgWIACgZIACgZIgBgOIgBgOQAAgFAEgEQADgFAGAAIAWACQANACAIAEQAmAUAAAdQAAAOgOAKQgKAJgPAEQAdAQAOARQACADAAADQAAAEgDADQgCADgEAAQgDAAgDgDQgggfgkgKIABASIAAASQAAAFgCACQgDADgEAAQgEAAgDgDgAgdgpIAAALIgBATIgCARIAFAAIADABQAYAAALgHQAFgCAFgEQAFgFAAgEQAAgNgPgLQgNgKgOgCIgOgBg");
	this.shape_6.setTransform(-2.9,-163.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgoBIQgJgJAAgdIABgOIAAgPIgBgEQAAgDACgCIACgnIgBgKIgBgKQAAgMAJAAQAEAAADADIAVgFIASgBQAWAAAOAGQAGACAAAHQAAADgDADQgCADgEAAIgDAAQgQgFgOAAIgQABIgTAFIAAAKIgBAjIAngEIAWgCQAFAAACADQADACAAAFQAAAHgIABIgXACIgpAEIgBAMIAAAMQAAAUADADQACADAMABIARgBIARgBIAFAAIAGgBQAKAAAAAKQAAAIgIABQgJACgcAAQgdAAgIgHg");
	this.shape_7.setTransform(-14.8,-163.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgQBDQgLgcgOg0IgHgZQgGgUAAgFQAAgFADgCQADgDAEAAQAHAAACAIIADAQIAJAgQAJAhAIAZIABgCIAYhBIAIgYQAFgNAGgHQADgEAEAAQAEAAADADQADADAAADQAAAEgCACQgGAJgDAJIgIAUIgYBDQgFAMgGALQgCAGgFAAQgHAAgDgIg");
	this.shape_8.setTransform(-26.5,-163.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgTBHQgDgDAAgEQAAgDAJgQIALgVQgQgWgGgLQgEgLgJgOIgQgYIgCgFQAAgEADgDQAEgDADAAQAFAAADAFIAIALIAMAUQAHALAEAKQADAIAJAMIAVgzIAKgTQADgHAGAAQAEAAADADQACACAAAFQAAAEgEAJIgGAKIgQAoIgSAmIgLAUIgEAKQgDAGgFAAQgEAAgDgDg");
	this.shape_9.setTransform(-45.3,-163.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgvBGQgCgCAAgFIgBgVIAAgWIABgZIACgZIgBgOIAAgOQAAgFACgEQAEgFAGAAIAXACQAMACAIAEQAlAUAAAdQAAAOgMAKQgLAJgPAEQAdAQAOARQADADgBADQAAAEgCADQgDADgEAAQgDAAgEgDQgegfglgKIABASIABASQAAAFgDACQgDADgEAAQgEAAgDgDgAgdgpIAAALIgBATIgBARIADAAIAFABQAXAAALgHQAGgCAEgEQAFgFgBgEQAAgNgOgLQgNgKgOgCIgOgBg");
	this.shape_10.setTransform(-56.8,-163.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAgAwQgCgJgEgVIgYAGIgYAEIgQAkQgDAFgFAAQgEAAgDgCQgDgDAAgEQAAgEAOgeQgBgDAAgDQAAgHAJgDIAbgsQAVgjAFAAQAHAAADAKIAGAfIAOA/IAFAQIADAKQAAADgDADQgDADgEAAQgIAAgHgWgAgLAHIAhgHIgIgkg");
	this.shape_11.setTransform(-70.1,-163.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgoBEQgDgDAAgEQAAgEADgCQADgDADAAIAUgCIABgSIAAgPIgBgPQAAgVADggIgMABIgMAAQgEgBgDgCQgDgCAAgFQAAgIAJgBIAcgBQASAAAbAEQAJABAAAJQAAAEgEADQgCACgEAAIgPgCIgPgBQgCAaAAAZIAAAPIABAQIgBAQIAdAAQAEAAADACQADADAAAEQAAAFgDADQgDACgEAAIgPAAIgQAAIgRACIgTACQgDAAgDgDg");
	this.shape_12.setTransform(-82.1,-163.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgnBJQgGgEAAgKIACgfQACgpAAg0QAAgEADgDQADgDAEAAQAEAAACADQADADAAAEQAAA0gDAqIgBAOIAAAOQAYAAAkgMIADAAQAEAAACADQADADAAAEQAAAGgGACQgLAFgWAEQgUAEgNAAQgJAAgEgDg");
	this.shape_13.setTransform(-92.3,-163.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgoBEQgDgDAAgEQAAgEADgCQADgDADAAIAUgCIABgSIAAgPIgBgPQAAgVADggIgMABIgMAAQgEgBgDgCQgDgCAAgFQAAgIAJgBIAcgBQASAAAbAEQAJABAAAJQAAAEgEADQgCACgEAAIgPgCIgPgBQgCAaAAAZIAAAPIABAQIgBAQIAdAAQAEAAADACQADADAAAEQAAAFgDADQgDACgEAAIgPAAIgQAAIgRACIgTACQgDAAgDgDg");
	this.shape_14.setTransform(-102.9,-163.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAtBIQgIgHgHgLIgMgTIgPgVIgfAkIgRAUQgDADgDAAQgFAAgDgDQgCgDAAgDQAAgEACgDIARgTIAjgnIgWgcIgLgOQgGgIgGgGQgEgDAAgEQAAgDADgDQACgDAEgBQAJABAMAQIAMAQIASAaIAVgeQAWgdAFAAQAEABADADQADACAAAEQAAADgDADIgTAZIgLARQgHAKgGAGIAVAdQAMASAJALQACAEAAADQAAADgCAEQgDACgEAAQgDAAgDgCg");
	this.shape_15.setTransform(-115.1,-163.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgpA3QgLgNgDgaQgBgMAAgiIAAgWIACgLQACgHAGAAQAJAAAAAQIAAA2QAAA4AmgBQAlAAAAhdIAAgJIAAgIQAAgFACgFQADgFAFgBQAJABAAANIAAALIAAALQAABqg3AAQgcAAgPgQg");
	this.shape_16.setTransform(-128.8,-163.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAgAwQgCgJgEgVIgYAGIgYAEIgQAkQgDAFgFAAQgEAAgDgCQgDgDAAgEQAAgEAOgeQgBgDAAgDQAAgHAJgDIAbgsQAVgjAFAAQAHAAADAKIAGAfIAOA/IAFAQIADAKQAAADgDADQgDADgEAAQgIAAgHgWgAgLAHIAhgHIgIgkg");
	this.shape_17.setTransform(-143,-163.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgfAoQgOgMAAgUQAAgYAMgQQAMgSAVAAQAPAAAKAFQAMAHAAANQAAAJgLAIIgUAJIgiARQAFAIAIAEQAIAEAJAAQAGAAAJgDQALgDADgFQADgFAEAAQADAAADADQACACAAADQAAALgQAHQgPAHgNAAQgUAAgNgLgAgSgYQgIAJgEAQIAdgMQAQgJAHgGQgIgHgOAAQgLAAgHAJg");
	this.shape_18.setTransform(-160.5,-161.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAZBGIgEgWIgBgWIAAgHIAAgHQAAgRgJAAQgLAAgJAKQgEAFgJAQQAAAjgDAHQgCAFgGAAQgEAAgCgCQgDgDAAgEIABgEIABgNIAAgOIAAhDIABgQIgBgJIgBgIQAAgEADgDQACgCAEAAQAIAAABAIIACAQIgBAUQgBAKABALIAAAIQAHgKAJgFQAIgFAJAAQAQAAAFAKQAFAHAAAPIABASIACATIADATIAAADQAAAEgDACQgCADgEAAQgHAAgCgHg");
	this.shape_19.setTransform(-171.3,-164.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgGBEQgDgCAAgEIABgEIAAgFIAAgNIgBgOQAAgNgCgXIgDgmIgIABQgUAAgMgDQgHgCAAgIQAAgDACgDQADgEAEABIAPABIAPABIARAAIAQAAIAVABIAVABQAEAAADADQACADAAAEQAAAEgCACQgDADgEAAIgVgBIgVgBIgHAAQAAANADAdIACAoIAAAKIABAKQAAAGgCAFQgDAGgFAAQgDAAgDgDg");
	this.shape_20.setTransform(-182.5,-164);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(220));

	// Txt
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0000FF").s().p("AgoBIQgJgJAAgdIABgOIAAgPIgBgEQAAgDACgCIACgnIgBgKIgBgKQAAgMAJAAQAEAAADADIAVgFIASgBQAWAAAOAGQAGACAAAHQAAADgDADQgCADgEAAIgDAAQgQgFgOAAIgQABIgTAFIAAAKIgBAjIAngEIAWgCQAFAAACADQADACAAAFQAAAHgIABIgXACIgpAEIgBAMIAAAMQAAAUADADQACADAMABIARgBIARgBIAFAAIAGgBQAKAAAAAKQAAAIgIABQgJACgcAAQgdAAgIgHg");
	this.shape_21.setTransform(195.9,81.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0000FF").s().p("AgQBDQgLgcgOg0IgHgZQgGgUAAgFQAAgFADgCQADgDAEAAQAHAAACAIIADAQIAJAgQAJAhAIAZIABgBIAYhCIAIgXQAFgOAGgHQADgEAEAAQAEAAADADQADADAAADQAAAEgCACQgGAJgDAKIgIATIgYBDQgFAMgGALQgCAGgFAAQgHAAgDgIg");
	this.shape_22.setTransform(184.2,81.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0000FF").s().p("AAgAwQgCgJgEgVIgYAGIgYAEIgQAkQgDAFgFAAQgEAAgDgCQgDgDAAgEQAAgEAOgeQgBgDAAgDQAAgHAJgDIAbgsQAVgjAFAAQAHAAADAKIAGAgIAOA+IAFAQIADAKQAAADgDADQgDADgEAAQgIAAgHgWgAgLAHIAhgHIgIgkg");
	this.shape_23.setTransform(170.3,81.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0000FF").s().p("Ag6BJQgCgCAAgEIACgdIABgeIAAgOIgBgQIABgWIABgWQAAgEADgCQACgDAEAAQAEAAADADQACACAAAEIgBAWIgBAXIABAWIAngGQAXgFARAAIABgoQAAgHACgHQAEgKAFAAQADAAADACQADADAAAEIgBAEQgBADgBAIIABAIIAAAIIgCAcIgBAbIABAVIABAVQAAAEgCADQgDACgEAAQgEAAgDgCQgCgDAAgEIgBgVIgBgVIAAgOQgPAAgXAFIgnAHIgCAYIgBAYQAAAEgCACQgDADgEAAQgEAAgDgDg");
	this.shape_24.setTransform(156.4,81.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0000FF").s().p("AgcBLQgLgDgFgEIgBAAQgEAAgDgCQgCgDAAgEIABgdIAAgeIAAgfIAAggQAAgEAEgEQADgFAEAAQADAAAMAHIARAHQAZAJATATQAVAWAAAZQAAAQgHAPQgIAOgMAJQgPAKgaAAQgGAAgJgCgAgigZIAAAaIgBAzIACABQAIAFAMAAQAUAAAKgGQAJgGAFgLQAGgKAAgLQAAgZgdgTQgIgGgjgPg");
	this.shape_25.setTransform(136.7,81.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0000FF").s().p("AgnBJQgGgEAAgKIACgfQACgpAAg0QAAgEADgDQADgDAEAAQAEAAACADQADADAAAEQAAA0gDAqIgBAOIAAAOQAYAAAkgMIADAAQAEAAACADQADADAAAEQAAAGgGACQgLAFgWAEQgUAEgNAAQgJAAgEgDg");
	this.shape_26.setTransform(124.5,81.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0000FF").s().p("AgpA3QgLgNgDgaQgBgMAAgiIAAgWIACgLQACgHAGAAQAJAAAAAQIAAA2QAAA4AmgBQAlAAAAhdIAAgJIAAgIQAAgFACgFQADgFAFgBQAJABAAANIAAALIAAALQAABqg3ABQgcgBgPgQg");
	this.shape_27.setTransform(112.2,81.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0000FF").s().p("AguA5QgTgQAAgbQAAgeATgbQAVgdAfAAQAeAAAPANQAPAPAAAfQAAAfgRAZQgUAegfAAQgaAAgSgQgAgggfQgPAWAAAXQAAATAOAKQAMALATAAQAWAAAOgXQANgUAAgYQAAgXgJgIQgKgJgWAAQgWAAgQAWg");
	this.shape_28.setTransform(97.6,81.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0000FF").s().p("AgmA5QgMgOAAgUQAAgeAZghQAWgcAWAAIAIABIAGABQAEgFAFAAQAHAAABAJQABAHAAALQAAAEgBADQgDAEgEAAQgGAAgEgHQgCgGgDgCQgCgBgHAAQgNAAgQAVQgWAcAAAXQAAAMAHAJQAJAJALAAQAIAAAKgFIARgLQAEgEADAAQAEAAADADQACADAAAEQAAAEgDADQgZAWgXAAQgUAAgNgPg");
	this.shape_29.setTransform(84.4,81.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0000FF").s().p("AgoBIQgJgJAAgdIABgOIAAgPIgBgEQAAgDACgCIACgnIgBgKIgBgKQAAgMAJAAQAEAAADADIAVgFIASgBQAWAAAOAGQAGACAAAHQAAADgDADQgCADgEAAIgDAAQgQgFgOAAIgQABIgTAFIAAAKIgBAjIAngEIAWgCQAFAAACADQADACAAAFQAAAHgIABIgXACIgpAEIgBAMIAAAMQAAAUADADQACADAMABIARgBIARgBIAFAAIAGgBQAKAAAAAKQAAAIgIABQgJACgcAAQgdAAgIgHg");
	this.shape_30.setTransform(55.7,81.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0000FF").s().p("AgQBDQgLgcgOg0IgHgZQgGgUAAgFQAAgFADgCQADgDAEAAQAHAAACAIIADAQIAJAgQAJAhAIAZIABgBIAYhCIAIgXQAFgOAGgHQADgEAEAAQAEAAADADQADADAAADQAAAEgCACQgGAJgDAKIgIATIgYBDQgFAMgGALQgCAGgFAAQgHAAgDgIg");
	this.shape_31.setTransform(44,81.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0000FF").s().p("AAgAwQgCgJgEgVIgYAGIgYAEIgQAkQgDAFgFAAQgEAAgDgCQgDgDAAgEQAAgEAOgeQgBgDAAgDQAAgHAJgDIAbgsQAVgjAFAAQAHAAADAKIAGAgIAOA+IAFAQIADAKQAAADgDADQgDADgEAAQgIAAgHgWgAgLAHIAhgHIgIgkg");
	this.shape_32.setTransform(30.1,81.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0000FF").s().p("Ag6BJQgCgCAAgEIACgdIACgeIgBgOIgBgQIACgWIABgWQAAgEACgCQADgDAEAAQADAAADADQADACAAAEIgBAWIgCAXIABAWIAngGQAYgFAQAAIABgoQAAgHACgHQADgKAGAAQADAAADACQADADAAAEIgBAEQgCADAAAIIABAIIAAAIIgCAcIgBAbIABAVIABAVQAAAEgDADQgDACgDAAQgEAAgCgCQgDgDAAgEIgBgVIgBgVIAAgOQgPAAgXAFIgmAHIgDAYIgBAYQAAAEgCACQgDADgEAAQgEAAgDgDg");
	this.shape_33.setTransform(16.2,81.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0000FF").s().p("AgcBLQgLgDgFgEIgBAAQgEAAgDgCQgCgDAAgEIABgdIAAgeIAAgfIAAggQAAgEAEgEQADgFAEAAQADAAAMAHIARAHQAZAJATATQAVAWAAAZQAAAQgHAPQgIAOgMAJQgPAKgaAAQgGAAgJgCgAgigZIAAAaIgBAzIACABQAIAFAMAAQAUAAAKgGQAJgGAFgLQAGgKAAgLQAAgZgdgTQgIgGgjgPg");
	this.shape_34.setTransform(-3.5,81.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0000FF").s().p("AgnBJQgGgEAAgKIACgfQACgpAAg0QAAgEADgDQADgDAEAAQAEAAACADQADADAAAEQAAA0gDAqIgBAOIAAAOQAYAAAkgMIADAAQAEAAACADQADADAAAEQAAAGgGACQgLAFgWAEQgUAEgNAAQgJAAgEgDg");
	this.shape_35.setTransform(-15.7,81.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0000FF").s().p("AgpA3QgLgNgDgaQgBgMAAgiIAAgWIACgLQACgHAGAAQAJAAAAAQIAAA2QAAA4AmgBQAlAAAAhdIAAgJIAAgIQAAgFACgFQADgFAFgBQAJABAAANIAAALIAAALQAABqg3ABQgcgBgPgQg");
	this.shape_36.setTransform(-28,81.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0000FF").s().p("AguA5QgTgQAAgbQAAgeATgbQAVgdAfAAQAeAAAPANQAPAPAAAfQAAAfgRAZQgUAegfAAQgaAAgSgQgAgggfQgPAWAAAXQAAATAOAKQAMALATAAQAWAAAOgXQANgUAAgYQAAgXgJgIQgKgJgWAAQgWAAgQAWg");
	this.shape_37.setTransform(-42.6,81.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0000FF").s().p("AAVBJQgEgDAAgEQgEgLgBgHIgIgoIgFgnQgIAegKAUQgLAZgDAOIABAEQAAAEgDADQgEACgEAAQgNAAAAgLIgCgMIgLgtQgGgWgOgrIgBgEQAAgIAKAAQAGAAADAGIAHATQAFARAGAYIAJAoQAKgXAKggIAJgcQAIgVAHAAQAHAAACAHQAEAIADAeQACAPAEAVIAIAkQANgeASgyIAFgRQADgLAEgGQADgFAFAAQAKAAAAAJIgDAJIgEAKIgFARIgcBCQgDALgKAVQgDAGgHAAQgEAAgDgCg");
	this.shape_38.setTransform(-59.7,81.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#0000FF").s().p("AgoBIQgJgJAAgdIABgOIAAgPIgBgEQAAgDACgCIACgnIgBgKIgBgKQAAgMAJAAQAEAAADADIAVgFIASgBQAWAAAOAGQAGACAAAHQAAADgDADQgCADgEAAIgDAAQgQgFgOAAIgQABIgTAFIAAAKIgBAjIAngEIAWgCQAFAAACADQADACAAAFQAAAHgIABIgXACIgpAEIgBAMIAAAMQAAAUADADQACADAMABIARgBIARgBIAFAAIAGgBQAKAAAAAKQAAAIgIABQgJACgcAAQgdAAgIgHg");
	this.shape_39.setTransform(-92.8,81.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#0000FF").s().p("AgQBDQgLgcgOg0IgHgZQgGgUAAgFQAAgFADgCQADgDAEAAQAHAAACAIIADAQIAJAgQAJAhAIAZIABgBIAYhCIAIgXQAFgOAGgHQADgEAEAAQAEAAADADQADADAAADQAAAEgCACQgGAJgDAKIgIATIgYBDQgFAMgGALQgCAGgFAAQgHAAgDgIg");
	this.shape_40.setTransform(-104.5,81.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#0000FF").s().p("AAgAwQgCgJgEgVIgYAGIgYAEIgQAkQgDAFgFAAQgEAAgDgCQgDgDAAgEQAAgEAOgeQgBgDAAgDQAAgHAJgDIAbgsQAVgjAFAAQAHAAADAKIAGAgIAOA+IAFAQIADAKQAAADgDADQgDADgEAAQgIAAgHgWgAgLAHIAhgHIgIgkg");
	this.shape_41.setTransform(-118.4,81.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#0000FF").s().p("Ag6BJQgCgCAAgEIACgdIACgeIgBgOIgBgQIACgWIABgWQAAgEACgCQADgDAEAAQADAAADADQADACAAAEIgBAWIgCAXIABAWIAngGQAYgFAQAAIABgoQAAgHACgHQADgKAGAAQADAAADACQADADAAAEIgBAEQgCADAAAIIABAIIAAAIIgCAcIgBAbIABAVIABAVQAAAEgDADQgDACgDAAQgEAAgCgCQgDgDAAgEIgBgVIgBgVIAAgOQgPAAgXAFIgmAHIgDAYIgBAYQAAAEgCACQgDADgEAAQgEAAgDgDg");
	this.shape_42.setTransform(-132.3,81.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#0000FF").s().p("Ag+BIQgCgDAAgEIABgLIAAgMIAAgRIAAgSIAAgRIAAgTIgBgRIgBgRQAAgFADgDQAEgEAFAAQAFAAAHALQAXAjASAXQAWAaAaAZIAAgMIgBgMQAAgogDgYIgCgJIgCgKQAAgLAKAAQAQAAAAA8IgBAeIAAAfIgBAOQgCAKgIAAQgFAAgHgHQgmgkgwhCIAAAVIgBAUIABAXIAAAYQAAAZgKAAQgEAAgEgEg");
	this.shape_43.setTransform(-152.9,81.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#0000FF").s().p("AAgAwQgCgJgEgVIgYAGIgYAEIgQAkQgDAFgFAAQgEAAgDgCQgDgDAAgEQAAgEAOgeQgBgDAAgDQAAgHAJgDIAbgsQAVgjAFAAQAHAAADAKIAGAgIAOA+IAFAQIADAKQAAADgDADQgDADgEAAQgIAAgHgWgAgLAHIAhgHIgIgkg");
	this.shape_44.setTransform(-167.7,81.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#0000FF").s().p("AgmA5QgNgOAAgUQAAgeAaghQAXgcAVAAIAIABIAHABQADgFAFAAQAHAAABAJQACAHAAALQAAAEgDADQgCAEgEAAQgHAAgCgHQgDgGgDgCQgCgBgHAAQgOAAgPAVQgWAcAAAXQAAAMAHAJQAIAJALAAQAJAAAKgFIAQgLQAGgEACAAQAEAAADADQADADgBAEQAAAEgDADQgZAWgYAAQgSAAgOgPg");
	this.shape_45.setTransform(-180,81.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#0099CC").s().p("AglBAQgRgIAAgOQAAgEADgCQADgDADAAQAFAAADAGQAFAHADACQAJAFAPAAQANAAANgGQAPgIAAgOQAAgMgNgHQgLgFgQgBQgPAAgKgFQgNgIAAgOQAAgQATgOQARgNATAAQAIAAAMADQAPAEAAAGQAAAJgIAAIgNgCIgOgCQgOAAgKAHQgKAHAAAKQAAAIANADIATACQAVACAMAMQALAJAAAQQAAAWgVANQgRAMgWAAQgSAAgOgHg");
	this.shape_46.setTransform(65.6,53.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0099CC").s().p("AAgAwQgCgIgEgVIgYAEIgYAGIgQAjQgDAFgFAAQgEAAgDgCQgDgDAAgEQAAgFAOgdQgBgCAAgDQAAgIAJgCIAbgtQAVgjAFAAQAHAAADAKIAGAfIAOA/IAFAPIADAKQAAAFgDACQgDADgEAAQgIAAgHgWgAgLAGIAhgGIgIgkg");
	this.shape_47.setTransform(51.8,53.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0099CC").s().p("Ag5BJQgDgCAAgEIACgdIACgeIgBgOIAAgQIABgWIABgWQgBgEADgCQACgDAFAAQADAAADADQACACABAEIgBAWIgBAXIAAAWIAngGQAYgFAQAAIABgoQAAgHACgHQAEgKAFAAQAEAAACACQADADAAAEIgBAEQgBADAAAIIAAAIIAAAIIgCAcIgBAbIABAVIABAVQAAAEgDADQgDACgDAAQgEAAgCgCQgDgDAAgEIgBgVIgBgVIAAgOQgQAAgWAFIgmAHIgDAYIgBAYQAAAEgDACQgCADgEAAQgEAAgCgDg");
	this.shape_48.setTransform(37.9,53);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#0099CC").s().p("AgoBHQgJgHAAgeIABgOIAAgOIgBgFQAAgCACgDIACgoIgBgKIgBgKQAAgLAJABQAEgBADADIAVgEIASgCQAWAAAOAGQAGACAAAGQAAAEgDADQgCADgEAAIgDAAQgQgFgOAAIgQACIgTAEIAAAJIgBAkIAngEIAWgCQAFAAACADQADADAAAEQAAAHgIABIgXACIgpAEIgBANIAAALQAAAUADAEQACADAMAAIARgBIARAAIAFgBIAGAAQAKAAAAAJQAAAIgIACQgJABgcAAQgdAAgIgIg");
	this.shape_49.setTransform(-9.4,52.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#0099CC").s().p("AgQBDQgLgcgOg0IgHgZQgGgTAAgGQAAgEADgDQADgDAEABQAHAAACAHIADAQIAJAgQAJAhAIAZIABgCIAYhBIAIgYQAFgNAGgHQADgEAEAAQAEAAADADQADADAAAEQAAACgCADQgGAJgDAJIgIAVIgYBCQgFAMgGAMQgCAFgFAAQgHAAgDgIg");
	this.shape_50.setTransform(-21.2,53.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#0099CC").s().p("AAgAwQgCgIgEgVIgYAEIgYAGIgQAjQgDAFgFAAQgEAAgDgCQgDgDAAgEQAAgFAOgdQgBgCAAgDQAAgIAJgCIAbgtQAVgjAFAAQAHAAADAKIAGAfIAOA/IAFAPIADAKQAAAFgDACQgDADgEAAQgIAAgHgWgAgLAGIAhgGIgIgkg");
	this.shape_51.setTransform(-35,53.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#0099CC").s().p("Ag5BJQgDgCAAgEIACgdIACgeIgBgOIAAgQIABgWIABgWQgBgEADgCQACgDAFAAQADAAADADQACACABAEIgBAWIgBAXIAAAWIAngGQAYgFAQAAIABgoQAAgHACgHQAEgKAFAAQAEAAACACQADADAAAEIgBAEQgBADAAAIIAAAIIAAAIIgCAcIgBAbIABAVIABAVQAAAEgDADQgDACgDAAQgEAAgCgCQgDgDAAgEIgBgVIgBgVIAAgOQgQAAgWAFIgmAHIgDAYIgBAYQAAAEgDACQgCADgEAAQgEAAgCgDg");
	this.shape_52.setTransform(-49,53);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#0000FF").s().p("AgGBEQgDgCAAgEIABgEIAAgFIAAgNIgBgOQAAgNgCgXIgDgmIgIABQgUAAgMgDQgHgCAAgIQAAgDACgDQADgEAEABIAPABIAPABIARAAIAQAAIAVABIAVABQAEAAADADQACADAAAEQAAAEgCACQgDADgEAAIgVgBIgVgBIgHAAQAAANADAdIACAoIAAAKIABAKQAAAGgCAFQgDAGgFAAQgDAAgDgDg");
	this.shape_53.setTransform(132.3,24.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#0000FF").s().p("Ag6BJQgCgCAAgEIACgdIABgeIAAgOIgBgQIABgWIABgWQABgEACgCQACgDAEAAQAEAAADADQADACgBAEIgBAWIgBAXIABAWIAngGQAXgFARAAIABgoQAAgHACgHQADgKAGAAQADAAADACQADADAAAEIgBAEQgBADgBAIIABAIIAAAIIgBAcIgCAbIABAVIABAVQAAAEgCADQgEACgDAAQgEAAgDgCQgCgDAAgEIgBgVIgBgVIABgOQgQAAgXAFIgnAHIgBAYIgCAYQAAAEgDACQgCADgEAAQgEAAgDgDg");
	this.shape_54.setTransform(117.9,24.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#0000FF").s().p("AgvA/QgLgMAAgaQAAgYALgZQALgZATgQQALgKAMAAQAJAAAOAFQARAHAAAIQgBAEgCADQgDADgEAAQgCAAgEgCQgOgJgKAAQgGAAgHAHQgEADgHAKQgVAdgBAgQABASAFAHQAGAHAPAAQAQAAAMgLQANgLAFgUQgZABgRAJIgFABQgEAAgDgDQgCgEAAgDQAAgGAFgCQATgLAxAAQAEAAACACQADACAAAEQAAAGgFADQgFAcgTARQgTARgYAAQgWAAgMgNg");
	this.shape_55.setTransform(104.2,24.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#0000FF").s().p("AgpA3QgLgOgDgaQgBgLAAgjIAAgUIACgMQACgHAGAAQAJAAAAAQIAAA2QAAA3AmABQAlAAAAheIAAgKIAAgHQAAgFACgFQADgGAFABQAJgBAAANIAAAMIAAAMQAABqg3AAQgcAAgPgRg");
	this.shape_56.setTransform(90.7,24.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#0000FF").s().p("AguA6QgTgRAAgaQAAgfATgbQAVgdAfAAQAeAAAPAOQAPAOAAAfQAAAfgRAZQgUAegfAAQgaAAgSgPgAgggeQgPAUAAAZQAAARAOALQAMALATAAQAWAAAOgWQANgVAAgYQAAgWgJgKQgKgIgWAAQgWAAgQAXg");
	this.shape_57.setTransform(76.1,24.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#0000FF").s().p("AgcBLQgLgDgFgEIgBAAQgEAAgDgCQgCgDAAgEIABgdIAAgeIAAgfIAAggQAAgEAEgEQADgFAEAAQADAAAMAHIARAHQAZAJATATQAVAWAAAZQAAAQgHAPQgIAOgMAJQgPAKgaAAQgGAAgJgCgAgigZIAAAaIgBAzIACABQAIAFAMAAQAUAAAKgGQAJgGAFgLQAGgKAAgLQAAgZgdgTQgIgGgjgPg");
	this.shape_58.setTransform(27.7,24.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#0000FF").s().p("AgnBJQgGgEAAgKIACgfQACgpAAg0QAAgEADgDQADgDAEAAQAEAAACADQADADAAAEQAAA0gDAqIgBAOIAAAOQAYAAAkgMIADAAQAEAAACADQADADAAAEQAAAGgGACQgLAFgWAEQgUAEgNAAQgJAAgEgDg");
	this.shape_59.setTransform(15.5,24.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#0000FF").s().p("AgpA3QgLgOgDgaQgBgLAAgjIAAgUIACgMQACgHAGAAQAJAAAAAQIAAA2QAAA3AmABQAlAAAAheIAAgKIAAgHQAAgFACgFQADgGAFABQAJgBAAANIAAAMIAAAMQAABqg3AAQgcAAgPgRg");
	this.shape_60.setTransform(3.2,24.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#0000FF").s().p("AguA6QgTgRAAgaQAAgfATgbQAVgdAfAAQAeAAAPAOQAPAOAAAfQAAAfgRAZQgUAegfAAQgaAAgSgPgAgggeQgPAUAAAZQAAARAOALQAMALATAAQAWAAAOgWQANgVAAgYQAAgWgJgKQgKgIgWAAQgWAAgQAXg");
	this.shape_61.setTransform(-11.4,24.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#0000FF").s().p("AgmA5QgNgOAAgUQAAgeAaghQAWgcAWAAIAIABIAHABQADgFAFAAQAHAAABAJQABAHABALQAAAEgCADQgDAEgEAAQgHAAgCgHQgDgGgDgCQgCgBgHAAQgNAAgQAVQgWAcAAAXQAAAMAHAJQAJAJAKAAQAJAAAKgFIAQgLQAGgEACAAQAEAAADADQACADAAAEQABAEgEADQgYAWgZAAQgTAAgNgPg");
	this.shape_62.setTransform(-24.6,24.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#0000FF").s().p("Ag+BIQgDgDAAgEIABgLIABgMIAAgRIAAgSIAAgRIAAgTIgBgRIgBgRQAAgFADgDQAEgEAFAAQAFAAAHALQAXAjASAXQAWAaAaAZIAAgMIAAgMQgBgogDgYIgCgJIgCgKQAAgLAKAAQAQAAAAA8IAAAeIAAAfIgCAOQgCAKgIAAQgFAAgHgHQgmgkgwhCIAAAVIgBAUIABAXIAAAYQAAAZgKAAQgEAAgEgEg");
	this.shape_63.setTransform(-89.3,24.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#0000FF").s().p("AAgAwQgCgJgEgUIgYAEIgYAFIgQAkQgDAFgFAAQgEAAgDgDQgDgCAAgEQAAgEAOgeQgBgDAAgDQAAgHAJgDIAbgsQAVgjAFAAQAHAAADAKIAGAgIAOA/IAFAOIADALQAAAEgDACQgDADgEAAQgIAAgHgWgAgLAHIAhgHIgIgjg");
	this.shape_64.setTransform(-104.1,24.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#0000FF").s().p("AgmA5QgNgOAAgUQAAgeAaghQAWgcAWAAIAIABIAHABQADgFAFAAQAHAAABAJQABAHABALQAAAEgCADQgDAEgEAAQgHAAgCgHQgDgGgDgCQgCgBgHAAQgNAAgQAVQgWAcAAAXQAAAMAHAJQAJAJAKAAQAJAAAKgFIAQgLQAGgEACAAQAEAAADADQACADAAAEQABAEgEADQgYAWgZAAQgTAAgNgPg");
	this.shape_65.setTransform(-116.4,24.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#0099CC").s().p("AgcBLQgLgDgFgEIgBAAQgEAAgDgCQgCgDAAgEIABgdIAAgeIAAgfIAAggQAAgEAEgEQADgFAEAAQADAAAMAHIARAHQAZAJATATQAVAWAAAZQAAAQgHAPQgIAOgMAJQgPAKgaAAQgGAAgJgCgAgigZIAAAaIgBAzIACABQAIAFAMAAQAUAAAKgGQAJgGAFgLQAGgKAAgLQAAgZgdgTQgIgGgjgPg");
	this.shape_66.setTransform(83.3,-4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#0099CC").s().p("AgnBJQgGgEAAgKIACgfQACgpAAg0QAAgEADgDQADgDAEAAQAEAAACADQADADAAAEQAAA0gDAqIgBAOIAAAOQAYAAAkgMIADAAQAEAAACADQADADAAAEQAAAGgGACQgLAFgWAEQgUAEgNAAQgJAAgEgDg");
	this.shape_67.setTransform(71.1,-3.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#0099CC").s().p("AgpA3QgLgNgDgaQgBgMAAgiIAAgWIACgLQACgHAGAAQAJAAAAAQIAAA2QAAA4AmgBQAlAAAAhdIAAgJIAAgIQAAgFACgFQADgFAFgBQAJABAAANIAAALIAAALQAABqg3AAQgcAAgPgQg");
	this.shape_68.setTransform(58.8,-4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#0099CC").s().p("AguA5QgTgQAAgbQAAgeATgbQAVgdAfAAQAeAAAPANQAPAPAAAfQAAAfgRAZQgUAegfAAQgaAAgSgQgAgggfQgPAWAAAXQAAATAOAKQAMALATAAQAWAAAOgXQANgUAAgYQAAgXgJgIQgKgJgWAAQgWAAgQAWg");
	this.shape_69.setTransform(44.2,-3.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#0099CC").s().p("AAVBJQgEgDAAgEQgEgLgBgHIgIgoIgFgnQgIAegKAUQgLAZgDAOIABAEQAAAEgDADQgEACgEAAQgNAAAAgLIgCgMIgLgtQgGgWgOgrIgBgEQAAgIAKAAQAGAAADAGIAHATQAFARAGAYIAJAoQAKgXAKggIAJgcQAIgVAHAAQAHAAACAHQAEAIADAeQACAPAEAVIAIAkQANgeASgyIAFgRQADgLAEgGQADgFAFAAQAKAAAAAJIgDAJIgEAKIgFARIgcBCQgDALgKAVQgDAGgHAAQgEAAgDgCg");
	this.shape_70.setTransform(27.1,-3.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#0099CC").s().p("AgnBJQgGgEAAgKIACgfQACgpAAg0QAAgEADgDQADgDAEAAQAEAAACADQADADAAAEQAAA0gDAqIgBAOIAAAOQAYAAAkgMIADAAQAEAAACADQADADAAAEQAAAGgGACQgLAFgWAEQgUAEgNAAQgJAAgEgDg");
	this.shape_71.setTransform(-28.1,-3.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#0099CC").s().p("AgnBJQgGgEAAgKIACgfQACgpAAg0QAAgEADgDQADgDAEAAQAEAAACADQADADAAAEQAAA0gDAqIgBAOIAAAOQAYAAAkgMIADAAQAEAAACADQADADAAAEQAAAGgGACQgLAFgWAEQgUAEgNAAQgJAAgEgDg");
	this.shape_72.setTransform(-38.6,-3.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#0099CC").s().p("AgoBEQgDgDAAgEQAAgEADgCQADgDADAAIAUgCIABgSIAAgPIgBgPQAAgVADggIgMABIgMAAQgEgBgDgCQgDgCAAgFQAAgIAJgBIAcgBQASAAAbAEQAJABAAAJQAAAEgEADQgCACgEAAIgPgCIgPgBQgCAaAAAZIAAAPIABAQIgBAQIAdAAQAEAAADACQADADAAAEQAAAFgDADQgDACgEAAIgPAAIgQAAIgRACIgTACQgDAAgDgDg");
	this.shape_73.setTransform(-49.2,-3.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#0099CC").s().p("AAVBJQgEgDAAgEQgEgLgBgHIgIgoIgFgnQgIAegKAUQgLAZgDAOIABAEQAAAEgDADQgEACgEAAQgNAAAAgLIgCgMIgLgtQgGgWgOgrIgBgEQAAgIAKAAQAGAAADAGIAHATQAFARAGAYIAJAoQAKgXAKggIAJgcQAIgVAHAAQAHAAACAHQAEAIADAeQACAPAEAVIAIAkQANgeASgyIAFgRQADgLAEgGQADgFAFAAQAKAAAAAJIgDAJIgEAKIgFARIgcBCQgDALgKAVQgDAGgHAAQgEAAgDgCg");
	this.shape_74.setTransform(-63.9,-3.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#0000FF").s().p("AgcBLQgLgDgFgEIgBAAQgEAAgDgCQgCgDAAgEIABgdIAAgeIAAgfIAAggQAAgEAEgEQADgFAEAAQADAAAMAHIARAHQAZAJATATQAVAWAAAZQAAAQgHAPQgIAOgMAJQgPAKgaAAQgGAAgJgCgAgigZIAAAaIgBAzIACABQAIAFAMAAQAUAAAKgGQAJgGAFgLQAGgKAAgLQAAgZgdgTQgIgGgjgPg");
	this.shape_75.setTransform(84.5,-32.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#0000FF").s().p("AgnBJQgGgEAAgKIACgfQACgpAAg0QAAgEADgDQADgDAEAAQAEAAACADQADADAAAEQAAA0gDAqIgBAOIAAAOQAYAAAkgMIADAAQAEAAACADQADADAAAEQAAAGgGACQgLAFgWAEQgUAEgNAAQgJAAgEgDg");
	this.shape_76.setTransform(72.3,-32.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#0000FF").s().p("AgpA3QgLgOgDgaQgBgLAAgiIAAgVIACgMQACgHAGAAQAJAAAAAPIAAA3QAAA4AmAAQAlAAAAheIAAgKIAAgHQAAgGACgEQADgGAFAAQAJAAAAAOIAAALIAAALQAABqg3AAQgcAAgPgQg");
	this.shape_77.setTransform(60,-32.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#0000FF").s().p("AguA5QgTgQAAgaQAAggATgaQAVgdAfAAQAeAAAPANQAPAPAAAfQAAAfgRAaQgUAdgfAAQgaAAgSgQgAgggfQgPAWAAAYQAAARAOAMQAMAKATAAQAWAAAOgXQANgUAAgYQAAgWgJgJQgKgJgWAAQgWAAgQAWg");
	this.shape_78.setTransform(45.4,-32.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#0000FF").s().p("Ag6BJQgCgCAAgEIACgdIACgeIgBgOIgBgQIACgWIABgWQAAgEACgCQADgDAEAAQADAAADADQADACAAAEIgBAWIgCAXIABAWIAngGQAYgFAQAAIABgoQAAgHACgHQADgKAGAAQADAAADACQADADAAAEIgBAEQgCADAAAIIABAIIAAAIIgCAcIgBAbIABAVIABAVQAAAEgDADQgDACgDAAQgEAAgCgCQgDgDAAgEIgBgVIgBgVIAAgOQgPAAgXAFIgmAHIgDAYIgBAYQAAAEgCACQgDADgEAAQgEAAgDgDg");
	this.shape_79.setTransform(30.6,-32.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#0000FF").s().p("AglBAQgRgIAAgOQAAgEADgCQACgDAEAAQAFAAADAGQAFAHADACQAJAFAPAAQANAAANgGQAPgIAAgOQAAgMgNgHQgLgFgQgBQgPAAgKgFQgNgIAAgOQAAgQATgOQARgNATAAQAJAAALADQAPAEAAAGQAAAJgIAAIgNgCIgOgCQgOAAgKAHQgLAHAAAKQAAAIAOADIATACQAVACAMAMQALAJAAAQQAAAWgVANQgRAMgWAAQgRAAgPgHg");
	this.shape_80.setTransform(16.7,-32.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#0000FF").s().p("AgnBJQgGgEAAgKIACgfQACgpAAg0QAAgEADgDQADgDAEAAQAEAAACADQADADAAAEQAAA0gDAqIgBAOIAAAOQAYAAAkgMIADAAQAEAAACADQADADAAAEQAAAGgGACQgLAFgWAEQgUAEgNAAQgJAAgEgDg");
	this.shape_81.setTransform(-17.8,-32.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#0000FF").s().p("AgnBJQgGgEAAgKIACgfQACgpAAg0QAAgEADgDQADgDAEAAQAEAAACADQADADAAAEQAAA0gDAqIgBAOIAAAOQAYAAAkgMIADAAQAEAAACADQADADAAAEQAAAGgGACQgLAFgWAEQgUAEgNAAQgJAAgEgDg");
	this.shape_82.setTransform(-28.3,-32.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#0000FF").s().p("AAgAwQgCgIgEgVIgYAEIgYAGIgQAjQgDAFgFAAQgEAAgDgCQgDgDAAgEQAAgFAOgdQgBgCAAgDQAAgIAJgCIAbgtQAVgjAFAAQAHAAADAKIAGAfIAOA/IAFAPIADAKQAAAFgDACQgDADgEAAQgIAAgHgWgAgLAGIAhgGIgIgkg");
	this.shape_83.setTransform(-40.8,-32.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#0000FF").s().p("Ag6BJQgCgCAAgEIACgdIABgeIAAgOIgBgQIABgWIABgWQAAgEADgCQACgDAEAAQAEAAADADQACACAAAEIgBAWIgBAXIABAWIAngGQAXgFARAAIABgoQAAgHACgHQADgKAGAAQADAAADACQADADAAAEIgBAEQgBADgBAIIABAIIAAAIIgCAcIgBAbIABAVIABAVQAAAEgCADQgDACgEAAQgEAAgDgCQgCgDAAgEIgBgVIgBgVIABgOQgQAAgXAFIgnAHIgCAYIgBAYQAAAEgCACQgDADgEAAQgEAAgDgDg");
	this.shape_84.setTransform(-54.8,-32.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#0000FF").s().p("AglBAQgRgIAAgOQAAgEACgCQAEgDADAAQAFAAADAGQAFAHAEACQAHAFAPAAQAOAAAMgGQAQgIAAgOQAAgMgNgHQgMgFgPgBQgPAAgKgFQgNgIAAgOQAAgQASgOQATgNASAAQAIAAAMADQAPAEAAAGQAAAJgIAAIgNgCIgOgCQgOAAgKAHQgKAHAAAKQAAAIANADIATACQAVACAMAMQALAJAAAQQAAAWgVANQgRAMgXAAQgRAAgOgHg");
	this.shape_85.setTransform(-68.7,-32.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#0099CC").s().p("AgkBAQgSgIAAgOQAAgEACgCQAEgDAEAAQAEAAAEAGQAEAHAEACQAHAFAPAAQAOAAAMgGQAQgIAAgOQAAgMgNgHQgMgFgPgBQgOAAgLgFQgNgIAAgOQAAgQASgOQATgNARAAQAJAAAMADQAPAEAAAGQAAAJgJAAIgMgCIgPgCQgNAAgKAHQgLAHAAAKQAAAIAOADIATACQAVACAMAMQALAJAAAQQAAAWgUANQgSAMgXAAQgQAAgOgHg");
	this.shape_86.setTransform(95.8,-60.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#0099CC").s().p("AgoBHQgJgIAAgeIABgMIAAgQIgBgEQAAgCACgDIACgnIgBgLIgBgKQAAgKAJgBQAEABADACIAVgEIASgCQAWAAAOAFQAGADAAAGQAAAEgDADQgCADgEAAIgDgBQgQgEgOAAIgQABIgTAFIAAAKIgBAjIAngEIAWgCQAFAAACADQADADAAAEQAAAHgIABIgXACIgpAEIgBAMIAAALQAAAVADAEQACACAMAAIARAAIARgBIAFAAIAGgBQAKAAAAAKQAAAIgIABQgJACgcAAQgdAAgIgIg");
	this.shape_87.setTransform(83.5,-61.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#0099CC").s().p("AguA6QgTgRAAgaQAAgfATgbQAVgdAfAAQAeAAAPAOQAPAOAAAfQAAAfgRAZQgUAegfAAQgaAAgSgPgAgggeQgPAUAAAZQAAARAOALQAMALATAAQAWAAAOgWQANgVAAgYQAAgWgJgKQgKgIgWAAQgWAAgQAXg");
	this.shape_88.setTransform(69.8,-60.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#0099CC").s().p("AgcBLQgLgDgFgEIgBAAQgEAAgDgCQgCgDAAgEIABgdIAAgeIAAgfIAAggQAAgEAEgEQADgFAEAAQADAAAMAHIARAHQAZAJATATQAVAWAAAZQAAAQgHAPQgIAOgMAJQgPAKgaAAQgGAAgJgCgAgigZIAAAaIgBAzIACABQAIAFAMAAQAUAAAKgGQAJgGAFgLQAGgKAAgLQAAgZgdgTQgIgGgjgPg");
	this.shape_89.setTransform(55.6,-61);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#0099CC").s().p("AgcBLQgLgDgFgEIgBAAQgEAAgDgCQgCgDAAgEIABgdIAAgeIAAgfIAAggQAAgEAEgEQADgFAEAAQADAAAMAHIARAHQAZAJATATQAVAWAAAZQAAAQgHAPQgIAOgMAJQgPAKgaAAQgGAAgJgCgAgigZIAAAaIgBAzIACABQAIAFAMAAQAUAAAKgGQAJgGAFgLQAGgKAAgLQAAgZgdgTQgIgGgjgPg");
	this.shape_90.setTransform(7.7,-61);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#0099CC").s().p("AgoBEQgDgDAAgEQAAgDADgEQADgCADAAIAUgCIABgRIAAgQIgBgQQAAgUADggIgMABIgMAAQgEAAgDgDQgDgDAAgEQAAgIAJgCIAcAAQASAAAbAEQAJABAAAJQAAAEgEADQgCACgEAAIgPgBIgPgCQgCAaAAAYIAAAQIABARIgBAQIAdgBQAEAAADADQADACAAAFQAAADgDADQgDADgEAAIgPAAIgQABIgRABIgTACQgDAAgDgDg");
	this.shape_91.setTransform(-4.7,-60.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#0099CC").s().p("AgcBLQgLgDgFgEIgBAAQgEAAgDgCQgCgDAAgEIABgdIAAgeIAAgfIAAggQAAgEAEgEQADgFAEAAQADAAAMAHIARAHQAZAJATATQAVAWAAAZQAAAQgHAPQgIAOgMAJQgPAKgaAAQgGAAgJgCgAgigZIAAAaIgBAzIACABQAIAFAMAAQAUAAAKgGQAJgGAFgLQAGgKAAgLQAAgZgdgTQgIgGgjgPg");
	this.shape_92.setTransform(-16.4,-61);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#0099CC").s().p("AguA6QgTgRAAgaQAAgfATgbQAVgdAfAAQAeAAAPAOQAPAOAAAfQAAAfgRAZQgUAegfAAQgaAAgSgPgAgggeQgPAUAAAZQAAARAOALQAMALATAAQAWAAAOgWQANgVAAgYQAAgWgJgKQgKgIgWAAQgWAAgQAXg");
	this.shape_93.setTransform(-65.3,-60.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#0099CC").s().p("AgcBLQgLgDgFgEIgBAAQgEAAgDgCQgCgDAAgEIABgdIAAgeIAAgfIAAggQAAgEAEgEQADgFAEAAQADAAAMAHIARAHQAZAJATATQAVAWAAAZQAAAQgHAPQgIAOgMAJQgPAKgaAAQgGAAgJgCgAgigZIAAAaIgBAzIACABQAIAFAMAAQAUAAAKgGQAJgGAFgLQAGgKAAgLQAAgZgdgTQgIgGgjgPg");
	this.shape_94.setTransform(-79.5,-61);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#0000FF").s().p("AgGBEQgDgCAAgEIABgEIAAgFIAAgNIgBgOQAAgNgCgXIgDgmIgIABQgUAAgMgDQgHgCAAgIQAAgDACgDQADgEAEABIAPABIAPABIARAAIAQAAIAVABIAVABQAEAAADADQACADAAAEQAAAEgCACQgDADgEAAIgVgBIgVgBIgHAAQAAANADAdIACAoIAAAKIABAKQAAAGgCAFQgDAGgFAAQgDAAgDgDg");
	this.shape_95.setTransform(108.5,-89.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#0000FF").s().p("AglBAQgRgIAAgOQAAgEACgCQAEgDADAAQAFAAADAGQAFAHADACQAIAFAQAAQANAAANgGQAPgIAAgOQAAgMgNgHQgMgFgPgBQgPAAgKgFQgNgIAAgOQAAgQATgOQARgNATAAQAJAAALADQAPAEAAAGQAAAJgIAAIgNgCIgOgCQgOAAgKAHQgKAHAAAKQAAAIANADIATACQAVACAMAMQALAJAAAQQAAAWgVANQgRAMgWAAQgSAAgOgHg");
	this.shape_96.setTransform(94.8,-89.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#0000FF").s().p("AgpA3QgLgNgDgaQgBgMAAgiIAAgWIACgLQACgHAGAAQAJAAAAAQIAAA2QAAA4AmgBQAlAAAAhdIAAgJIAAgIQAAgFACgFQADgFAFgBQAJABAAANIAAALIAAALQAABqg3AAQgcAAgPgQg");
	this.shape_97.setTransform(81.2,-89.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#0000FF").s().p("AA5BGQgDgEgCgLIgDgQQgEgPgIgxIgTA3IgGASQgDAKgEAHQgEAGgFABQgGgBgDgFIgDgKIgDgKQgKgigGgkIgEARIgLAwIgGAZQgCAIgHAAQgEAAgDgEQgCgDAAgDQAAgQAHgXIAJgkIAGgdQAEgVAFgGQADgGAGAAQAFABAEAGQADAJAFAZQAEAfALAiQAMgjALgmIACgOQACgIADgFQADgHAHAAQAHAAAFAPIAEAWQAFAqAIAdIAFAQIADAQQAAAEgDADQgDACgDAAQgGAAgDgFg");
	this.shape_98.setTransform(65.8,-89.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#0000FF").s().p("AgGBEQgDgCAAgEIABgEIAAgFIAAgNIgBgOQAAgNgCgXIgDgmIgIABQgUAAgMgDQgHgCAAgIQAAgDACgDQADgEAEABIAPABIAPABIARAAIAQAAIAVABIAVABQAEAAADADQACADAAAEQAAAEgCACQgDADgEAAIgVgBIgVgBIgHAAQAAANADAdIACAoIAAAKIABAKQAAAGgCAFQgDAGgFAAQgDAAgDgDg");
	this.shape_99.setTransform(34.6,-89.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#0000FF").s().p("Ag5BJQgDgCAAgEIACgdIABgeIAAgOIAAgQIAAgWIABgWQABgEACgCQADgDADAAQAEAAADADQADACgBAEIgBAWIAAAXIAAAWIAngGQAYgFAQAAIABgoQAAgHACgHQADgKAGAAQADAAADACQADADAAAEIgBAEQgCADABAIIAAAIIAAAIIgBAcIgCAbIABAVIABAVQAAAEgCADQgDACgEAAQgEAAgDgCQgCgDAAgEIgBgVIgBgVIABgOQgRAAgWAFIgnAHIgBAYIgCAYQAAAEgDACQgCADgEAAQgEAAgCgDg");
	this.shape_100.setTransform(20.2,-89.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#0000FF").s().p("AgvA/QgLgMAAgaQAAgYALgYQALgaATgQQALgKAMAAQAJAAAOAGQARAGAAAIQAAAEgDADQgDADgEAAQgCAAgEgDQgNgIgLAAQgGAAgHAHQgEAEgHAJQgWAcAAAhQABARAFAIQAGAHAPAAQAQAAAMgKQANgLAFgWQgZACgSAIIgEABQgEAAgDgCQgCgEAAgEQAAgFAEgDQAUgLAxABQAEgBADADQACACAAAEQAAAGgFADQgFAcgTARQgSARgZAAQgXAAgLgNg");
	this.shape_101.setTransform(6.4,-89.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#0000FF").s().p("AgoBEQgDgDAAgEQAAgEADgCQADgDADAAIAUgCIABgSIAAgPIgBgPQAAgVADggIgMABIgMAAQgEgBgDgCQgDgCAAgFQAAgIAJgBIAcgBQASAAAbAEQAJABAAAJQAAAEgEADQgCACgEAAIgPgCIgPgBQgCAaAAAZIAAAPIABAQIgBAQIAdAAQAEAAADACQADADAAAEQAAAFgDADQgDACgEAAIgPAAIgQAAIgRACIgTACQgDAAgDgDg");
	this.shape_102.setTransform(-5.4,-89.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#0000FF").s().p("AA5BGQgDgEgCgLIgEgQQgDgPgJgxIgSA3IgGASQgDAKgDAHQgFAGgFABQgFgBgDgFIgEgKIgDgKQgJgigIgkIgDARIgMAwIgEAZQgDAIgGAAQgFAAgDgEQgCgDAAgDQAAgQAGgXIALgkIAFgdQAEgVAEgGQAEgGAFAAQAHABACAGQAEAJAEAZQAFAfALAiQANgjAJgmIAEgOQABgIACgFQAEgHAGAAQAJAAAEAPIADAWQAGAqAIAdIAEAQIAEAQQAAAEgDADQgDACgEAAQgFAAgDgFg");
	this.shape_103.setTransform(-18.8,-89.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#0000FF").s().p("AgTBHQgDgDAAgEQAAgDAJgQIALgVQgQgWgGgLQgDgLgKgOIgQgYIgBgFQAAgEACgDQADgDAEAAQAFAAADAFIAIALIAMAUQAHALAEAKQADAIAJAMIAVgzIAKgTQADgHAGAAQAEAAADADQADACgBAFQAAAEgEAJIgGAKIgQAoIgSAmIgLAUIgEAKQgDAGgGAAQgDAAgDgDg");
	this.shape_104.setTransform(-62.1,-89.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#0000FF").s().p("AAgAwQgCgJgEgVIgYAGIgYAEIgQAkQgDAFgFAAQgEAAgDgCQgDgDAAgEQAAgEAOgeQgBgDAAgDQAAgHAJgDIAbgsQAVgjAFAAQAHAAADAKIAGAfIAOA/IAFAQIADAKQAAADgDADQgDADgEAAQgIAAgHgWgAgLAHIAhgHIgIgkg");
	this.shape_105.setTransform(-75,-89.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#0000FF").s().p("AA5BGQgDgEgCgLIgEgQQgDgPgJgxIgSA3IgGASQgDAKgDAHQgFAGgFABQgGgBgDgFIgDgKIgDgKQgJgigHgkIgEARIgMAwIgEAZQgDAIgGAAQgFAAgDgEQgCgDAAgDQAAgQAGgXIAKgkIAGgdQAEgVAEgGQAEgGAFAAQAGABADAGQAFAJAEAZQAEAfALAiQAMgjAKgmIAEgOQABgIACgFQAFgHAFAAQAJAAAEAPIAEAWQAFAqAIAdIAFAQIADAQQAAAEgDADQgDACgEAAQgFAAgDgFg");
	this.shape_106.setTransform(-90,-89.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]}).wait(220));

	// Highlighter
	this.instance = new lib.chartbar();
	this.instance.parent = this;
	this.instance.setTransform(6.6,-90.4,1,1,0,0,0,197.7,14.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).wait(23).to({y:-61.6},0).wait(22).to({y:-31.6},0).wait(17).to({y:-4.1},0).wait(20).to({y:23.4},0).wait(25).to({y:53.4},0).wait(22).to({x:6.1,y:81.3},0).to({_off:true},36).wait(16));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Egv9gIlIAAjbMA+FAAAIAADbg");
	var mask_graphics_1 = new cjs.Graphics().p("A/CBtIAAjZMA+FAAAIAADZg");
	var mask_graphics_2 = new cjs.Graphics().p("A/CBtIAAjZMA+FAAAIAADZg");
	var mask_graphics_3 = new cjs.Graphics().p("A/CBtIAAjZMA+FAAAIAADZg");
	var mask_graphics_4 = new cjs.Graphics().p("A/CBtIAAjZMA+FAAAIAADZg");
	var mask_graphics_5 = new cjs.Graphics().p("A/CBtIAAjZMA+FAAAIAADZg");
	var mask_graphics_6 = new cjs.Graphics().p("A/CBtIAAjZMA+FAAAIAADZg");
	var mask_graphics_7 = new cjs.Graphics().p("A/CBtIAAjZMA+FAAAIAADZg");
	var mask_graphics_8 = new cjs.Graphics().p("A/CBtIAAjZMA+FAAAIAADZg");
	var mask_graphics_9 = new cjs.Graphics().p("A/CBtIAAjZMA+FAAAIAADZg");
	var mask_graphics_10 = new cjs.Graphics().p("A/CBtIAAjZMA+FAAAIAADZg");
	var mask_graphics_11 = new cjs.Graphics().p("A/CBtIAAjZMA+FAAAIAADZg");
	var mask_graphics_12 = new cjs.Graphics().p("A/CBtIAAjZMA+FAAAIAADZg");
	var mask_graphics_13 = new cjs.Graphics().p("A/CBtIAAjZMA+FAAAIAADZg");
	var mask_graphics_14 = new cjs.Graphics().p("A/CopIAAjbMA+FAAAIAADbg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-307,y:-76.9}).wait(1).to({graphics:mask_graphics_1,x:-385.2,y:-142.9}).wait(1).to({graphics:mask_graphics_2,x:-355.1,y:-142.9}).wait(1).to({graphics:mask_graphics_3,x:-325,y:-143}).wait(1).to({graphics:mask_graphics_4,x:-294.9,y:-143.1}).wait(1).to({graphics:mask_graphics_5,x:-264.8,y:-143.1}).wait(1).to({graphics:mask_graphics_6,x:-234.6,y:-143.2}).wait(1).to({graphics:mask_graphics_7,x:-204.5,y:-143.2}).wait(1).to({graphics:mask_graphics_8,x:-174.4,y:-143.3}).wait(1).to({graphics:mask_graphics_9,x:-144.3,y:-143.4}).wait(1).to({graphics:mask_graphics_10,x:-114.2,y:-143.4}).wait(1).to({graphics:mask_graphics_11,x:-84.1,y:-143.5}).wait(1).to({graphics:mask_graphics_12,x:-54,y:-143.6}).wait(1).to({graphics:mask_graphics_13,x:-23.8,y:-143.6}).wait(1).to({graphics:mask_graphics_14,x:6.3,y:-77.3}).wait(206));

	// Line
	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(3,1,1).p("A9lAAMA7LAAA");
	this.shape_107.setTransform(5.9,-146);

	var maskedShapeInstanceList = [this.shape_107];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_107).wait(220));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-191.9,-179.9,395.5,275.8);


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
		
		 window.open ("aux_scene3.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("aux_scene1.html","_self");
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
(lib.aux_scene2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene2:0,scene2repeat:215});

	// timeline functions:
	this.frame_231 = function() {
		this.gotoAndPlay("scene2repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(231).call(this.frame_231).wait(1));

	// Layer 2
	this.instance = new lib.chart();
	this.instance.parent = this;
	this.instance.setTransform(272.5,229.2,1,1,0,0,0,9.1,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(232));

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

	this.instance_1 = new lib.Bk("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275,194.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.UI}]}).wait(232));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.6,201.6,892.1,398.7);
// library properties:
lib.properties = {
	id: 'BED83FC52EE11D4896000597C14EF742',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/blips_2times.mp3", id:"blips_2times"},
		{src:"sounds/bmgAux.mp3", id:"bmgAux"},
		{src:"sounds/High_Screaming_Gtr.mp3", id:"High_Screaming_Gtr"},
		{src:"sounds/maymightmustdo.mp3", id:"maymightmustdo"},
		{src:"sounds/square_bits.mp3", id:"square_bits"},
		{src:"sounds/theauxillaryverbsare.mp3", id:"theauxillaryverbsare"}
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
an.compositions['BED83FC52EE11D4896000597C14EF742'] = {
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