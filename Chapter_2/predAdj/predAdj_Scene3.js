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


(lib.Tween25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AA8gZIAAhmIjMD/IEhgzIhDg3");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AA8h/IAABmIAGgCIgBAOIAIAIIAFARIAFAIIgFACIBDA3IkhAzg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-13.7,31.1,27.5);


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


(lib.Back = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("EAnJAWlMhORAAAMAAAgtJMBORAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FEDB4E","#FFFFDD"],[0,1],-0.6,-128.4,0.6,128.5).s().p("EgnIAWlMAAAgtJMBORAAAMAAAAtJg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-251.9,-146,504,292);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("ABTlDQgwAJgvAcQhhA3gBBbQgBAxAiAjQAWAXA2AcQA6AeASAOQAjAeABAnQABAngkAiQgVATg7AlQg6AkgXAXQgEAEgDAEQgJAKgGAK");
	this.shape.setTransform(15.1,61.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(4,1,1).p("AgjlGQhEAzgCBNQgBAxAiAiQAXAXA0AcQA7AfASAPQAkAcABAnQABAoglAiQgUATg8AlQg6AjgXAYQglAlABAtQAAAEAAAD");
	this.shape_1.setTransform(14.6,60.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(4,1,1).p("AhZlCQgPAegBAkQgBAxAiAjQAXAXA0AcQA7AfASAOQAkAeABAnQABAmglAiQgUATg8AlQg6AkgXAXQglAmABAsQAAAgATAd");
	this.shape_2.setTransform(14.7,60.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(4,1,1).p("AholGQAAACgBADQgBAxAiAiQAXAXA0AcQA7AfASAPQAkAdABAnQABAoglAhQgUATg8AlQg6AjgXAYQglAlABAtQAAAsAlAmQATAUArAc");
	this.shape_3.setTransform(14.7,60.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(4,1,1).p("AhZlGQAHAMAKAKQAXAXA0AcQA7AfASAPQAkAdABAnQABAoglAiQgUATg8AlQg6AigXAYQglAlABAtQAAAsAlAmQAXAYA4AkQAaAQASAOQAVAOALAK");
	this.shape_4.setTransform(14.8,61.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(4,1,1).p("AgSlCQAKAGALAGQA7AgASAOQAkAeABAmQABAoglAiQgUATg8AlQg6AkgXAXQglAlABAsQAAAtAlAmQAXAXA4AkQA7AmAVAUQAZAXAIAa");
	this.shape_5.setTransform(14.8,60.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(4,1,1).p("ABQlEQAkAeABAnQABAnglAiQgUATg8AlQg6AkgXAXQglAmABArQAAAtAlAmQAXAXA4AkQA7AmAVAUQAkAjABAoQAAASgCAS");
	this.shape_6.setTransform(14.8,60.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(4,1,1).p("AB0lIQABAEAAAEQABAnglAiQgUATg8AlQg6AkgXAXQglAmABAsQAAAtAlAlQAXAXA4AkQA7AmAVAUQAkAjABAoQABA8gYAt");
	this.shape_7.setTransform(14.9,61);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(4,1,1).p("ABjlEQgHAKgLAKQgUATg8AlQg6AjgXAYQglAlABAtQAAAsAlAmQAXAYA4AjQA7AmAVATQAkAjABAoQABBYgzA4QgHAIgJAH");
	this.shape_8.setTransform(14.9,60.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(4,1,1).p("AARlHQgIAFgIAFQg6AkgXAXQglAmABAsQAAAtAlAmQAXAXA4AkQA7AlAVAUQAkAjABAoQABBXgzA4QgvA0hkAj");
	this.shape_9.setTransform(15,61.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,26.7,26.3,68.9);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgtBGQgEgFAAgFIAAhhIgBgMQAAgHABgGQABgIAPgCQAHgCAQAAQARAAAQALQATANAAAUQAAALgEAHQgDAGgIAGQAJAEAHAJQAIAJAAALQAAAMgNALQgJAHgKAEQgVAIghAAQgFAAgFgFgAgYAyQAQgCASgFQAQgEAAgGQgBgHgKgFQgIgFgHgBIgYAAgAgYgdIAAATQAIACAFgBQAbgDAAgSQAAgGgIgHQgIgGgKAAIgOAAg");
	this.shape.setTransform(284.1,47.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgyBFQgDgDgBgGIAAgUIABgVIAAhKQAAgGAEgFQAEgGAJAAIAXACQANACAIAEQAnAUAAAeQAAAMgHAIQgJAJgQAHQAYAOANAOQACAEAAAEQAAAFgDAEQgEAEgFAAQgGAAgDgEQgdgagggLIABAeQgBAGgDADQgEAEgFAAQgGAAgEgEgAgcADIAEAAQAXAAAKgFQAFgCADgEQAEgEABgCQAAgLgOgJQgLgJgOgCIgLgBg");
	this.shape_1.setTransform(272,47.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgqBHQgLgJAAgeIADgkIACgmIgBgJIgBgKQAAgOAMAAQAEAAAEADIAUgFIASgBQAXAAAOAGQAJACgBAJQAAAFgDAEQgDAEgGAAIgEgBQgPgDgOAAIgOAAIgRAEIgBAkIAkgDIAVgBQAGAAAEADQAEADAAAGQAAAKgMACIgWACIgnADIgBATQAAASADADQABABALAAIAQAAIARAAIAFgBIAGAAQAGAAADACQAEAEAAAGQABAKgLACQgKACgcAAQgeAAgJgIg");
	this.shape_2.setTransform(260,47.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgUBCQgLgbgOgyIgHgZQgFgSgBgGQABgGAEgDQAEgDAFgBQAJABAEAIIADAQIAJAfQAHAZAHAVIAUg3IAIgXQAGgNAGgHQAFgFAGAAQAEAAAFAEQAEADAAAGQgBADgCAEQgFAIgEAJIgHATIgZA/QgEALgGALQgEAIgHAAQgJAAgFgJg");
	this.shape_3.setTransform(247.5,47.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgqBHQgKgJAAgeIABgkIACgmIgBgJIgBgKQABgOANAAQAEAAADADIAVgFIARgBQAXAAAOAGQAJACAAAJQAAAFgEAEQgEAEgFAAIgEgBQgPgDgOAAIgOAAIgRAEIgBAkIAjgDIAXgBQAFAAAEADQAEADAAAGQAAAKgMACIgWACIgmADIgBATQgBASADADQABABAKAAIARAAIARAAIAGgBIAFAAQAFAAAEACQAFAEAAAGQAAAKgLACQgJACgdAAQgeAAgJgIg");
	this.shape_4.setTransform(227.1,47.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgpA5QgOgPABgUQgBgeAcggQAXgcAXAAIAIABIAFAAQAEgEAGAAQAKAAACALQABAIAAAKQAAAFgCAEQgEAFgGAAQgJAAgEgJQgCgEgBgBQgCgBgGAAQgLAAgPATQgWAYABAWQgBAKAIAIQAGAHAJAAQAJAAAJgFIAPgJQAHgFADAAQAGAAAEAEQAEAEAAAFQgBAFgFAEQgZAWgaAAQgVAAgOgPg");
	this.shape_5.setTransform(215.2,47.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AhABHQgEgDAAgGIAAgLIABgLIAAgQIABgRIgBgRIAAgRIgBgRIgBgQQAAgGAFgEQAFgFAGAAQAGAAAJAMQApA8ApAlIABgOIgBg9IgCgKIgBgKQAAgNAOAAQAPAAAAAvIAAAPIgBA5IgCAPQgCAMgLAAQgGAAgJgHQgjgggsg6IgBAdIAAAWIABAWQAAAcgNAAQgIAAgDgFg");
	this.shape_6.setTransform(201.5,47.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgqBHQgLgJAAgeIACgkIACgmIgBgJIgBgKQABgOANAAQAEAAADADIAVgFIARgBQAXAAAOAGQAJACAAAJQAAAFgDAEQgFAEgFAAIgEgBQgPgDgOAAIgOAAIgRAEIgBAkIAjgDIAXgBQAFAAAEADQAEADAAAGQAAAKgMACIgWACIgnADIAAATQgBASADADQABABAKAAIARAAIARAAIAGgBIAFAAQAFAAAFACQADAEAAAGQAAAKgKACQgJACgcAAQgfAAgJgIg");
	this.shape_7.setTransform(188.1,47.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgIBEQgFgEAAgFIABgEIAAgEIAAgNIgBgNIgCghIgCgiIgFAAQgVAAgMgDQgKgCAAgKQAAgEADgEQAEgFAGABIAPABIAPABIARAAIAQAAIAVABIAVABQAGAAADADQAEAEAAAFQAAAGgEADQgDAEgGAAIgXgBIgWgBIACAmIACAlIABAJIABAJQAAAHgDAGQgEAHgHAAQgEAAgEgDg");
	this.shape_8.setTransform(175.4,47.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgxA8QgLgIAAgMQgBgGAEgDQAEgEAFAAQAJAAAEAIQAGAMASAAQAPAAAPgHQAPgHAAgJQAAgMgKgDQgGgDgUAAQgQgBgNgFQgRgHAAgPQABgSASgPQAUgPAVAAQAKAAANAEQAQAGAAAGQAAAFgDAEQgDAEgGAAIgNgCIgOgCQgLAAgKAGQgLAGAAAHQAAADADACQADADAIABIAWABQAUABAMAKQANALAAATQAAAYgbANQgUAJgaAAQgXAAgOgLg");
	this.shape_9.setTransform(162.1,48);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgrBDQgEgEAAgFQAAgFAEgEQAEgDAGAAIASgBIAAgqQAAgZACgXIgUABQgGAAgEgEQgEgEAAgFQAAgGAEgDQADgDAFAAIAbgBQARAAAcAEQALACAAALQAAAGgFADQgDADgFAAIgXgDQgCARAAAcIAAApIAZAAQAFAAAEAEQAEADAAAGQAAAFgEAEQgEADgFAAIgQAAIgQAAIgSACIgSACQgGAAgEgEg");
	this.shape_10.setTransform(150.2,47.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AAbA1IgMgSIgMgQIgcAfIgRATQgEAEgFAAQgGAAgEgEQgEgEAAgFQAAgEAEgEIAQgSIAhgjIgUgYIgKgOIgMgMQgFgEAAgGQAAgFAEgDQADgEAGgBQAFABAIAGQAGAFAEAGIAMAPIAQAUIAXgeQASgXAHAAQAFAAAEAEQAEAEAAAFQAAAEgEAFIgSAWQgHALgQATIATAbQAMAQAJAKQAEAEAAAFQAAAEgEAFQgEADgGAAQgJABgPgWg");
	this.shape_11.setTransform(138,47.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgqBHQgLgJAAgeIACgkIADgmIgBgJIgCgKQAAgOAOAAQADAAAEADIAVgFIARgBQAXAAAOAGQAIACAAAJQAAAFgCAEQgFAEgFAAIgEgBQgPgDgOAAIgOAAIgRAEIgBAkIAjgDIAXgBQAFAAAEADQAEADAAAGQAAAKgMACIgWACIgnADIgBATQABASACADQABABALAAIAQAAIARAAIAFgBIAGAAQAFAAAFACQADAEAAAGQAAAKgKACQgJACgcAAQgfAAgJgIg");
	this.shape_12.setTransform(125.7,47.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AATArIgCgUIgCgTIAAgHIAAgIIAAgEIABgDQAAgJgEABQgIAAgHAKQgHAKgFAPIAAAIIAAAJIgBAIIgBAHQAAAGgEADQgDAEgGAAQgGAAgDgEQgDgDAAgGIgBgHIAAgIIABgZIABgZIAAgIIAAgJQAAgFADgEQAEgDAFAAQAMAAABAPIABABQANgOAOAAQASAAAGAPQAFAKgBATIAAAHIAAAFQAAAHACALQADAMAAAHQAAAFgEADQgEAEgGAAQgLAAgBgLg");
	this.shape_13.setTransform(106.4,49.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAXArIgQAGQgGACgDAAQgXAAgLgMQgLgMAAgXQAAgWAQgQQAQgQAWAAQAKAAALAFQAOAGAAAIQAAADgCADIgBAJIgBANQAAARADAHIAEAKIAEAJQAAAFgFADQgDADgFAAQgEAAgJgIgAgMgSQgJAKAAAMQgBAMAFAHQAFAGAIAAQAFAAAFgCQAFgCAFgDQgDgWAAgLIABgHIABgIIgDgBIgDgBQgLAAgKAKg");
	this.shape_14.setTransform(96.1,50);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgaAxQgNgGAAgKQAAgJALAAQAEAAAIADQAIACAEAAQASAAAAgHQAAgFgNgGIgXgLQgNgJAAgNQAAgTATgGQAMgEAXAAQAJAAAEACQAHADAAAJQAAARgJAAQgKAAgCgIIgHgBQgVAAAAAHQAAADAMAGQASAJAHAEQANAJAAANQAAAPgPAJQgMAGgQAAQgMAAgLgDg");
	this.shape_15.setTransform(77.8,49.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AADAdQgDgIgCgWIgCAEIgOAkQgBADgDADQgFAGgHABQgEgBgFgHQgGgJgDgMQgCgLgHgmIgBgNQAAgFAEgDQAEgEAGAAQAJAAADAKIACANIABAMIAEAXQAHgRAJgcQADgNAKAAQALAAADAOIAEAZIAFAZIAOg4QADgIAJAAQAFAAAFAEQADADAAAFIAAADQgJAkgLAdQgCAIgHAJQgEAGgHAAQgMAAgHgXg");
	this.shape_16.setTransform(66.9,50.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgeAnQgNgNgBgVQAAgUALgQQAPgTAYAAQASAAALAPQAKANAAAUQAAAVgLAPQgNARgVAAQgRAAgNgMgAgMgPQgGAJAAALQAAALAGAGQAFAEAHAAQAHAAAGgFQAHgHAAgKQABgdgQAAIgCAAQgJAAgGAKg");
	this.shape_17.setTransform(55.1,50);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgIBJQgEgEAAgFIAAh/QAAgGAEgDQAEgDAEAAQAGAAADADQAEADAAAGIAAB6QAAARgNABQgFAAgDgEg");
	this.shape_18.setTransform(47.6,47.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgIBJQgEgEAAgFIAAh/QAAgGAEgDQAEgDAEAAQAGAAADADQAEADAAAGIAAB6QAAARgNABQgFAAgDgEg");
	this.shape_19.setTransform(42.4,47.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgeAnQgNgNgBgVQAAgUALgQQAPgTAYAAQASAAALAPQAKANAAAUQAAAVgLAPQgNARgVAAQgRAAgNgMgAgMgPQgGAJAAALQAAALAGAGQAFAEAHAAQAHAAAGgFQAHgHAAgKQABgdgQAAIgCAAQgJAAgGAKg");
	this.shape_20.setTransform(34.7,50);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgRBOQgDgDAAgFIAAgDQACgNAAgLIAAguIgHABIgEAAQgHAAgDgDQgEgDAAgGQAAgIAJgDIAQgCIACgKQACgVAJgKQAKgNAWAAQARAAAAANQAAAMgQAAQgLAAgFAIQgEAFgBANIAAACIASgBQAQAAABAMQAAAMgTAAIgRABIAAAYIAAAZQAAARgCAKQgDAKgJAAQgFAAgEgEg");
	this.shape_21.setTransform(24.9,47.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF00FF").s().p("AgqBHQgKgJAAgeIACgkIABgmIgBgJIAAgKQgBgOANAAQAEAAAEACIAVgDIARgCQAXAAAOAFQAJAEAAAIQAAAFgEAEQgEAEgFAAIgEAAQgPgFgOAAIgOABIgRAEIgBAlIAjgEIAWgCQAGABAEADQAEADAAAGQAAAKgMABIgWACIgmAEIgBATQAAASACACQABACAKAAIARgBIARAAIAGAAIAFgBQAFABAEACQAFAEAAAGQAAALgLACQgKABgcAAQgeAAgJgIg");
	this.shape_22.setTransform(285.5,19.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF00FF").s().p("AgTBCQgLgbgOgyIgIgZQgGgRAAgIQAAgFAFgEQAEgCAFAAQAJgBADAKIAEAQIAJAeQAHAZAHAUIAVg2IAHgXQAGgNAHgHQADgFAHAAQAFAAAEAEQADADAAAGQAAAEgCADQgFAIgEAKIgHASIgZA/QgEAMgGAKQgEAIgHAAQgKAAgDgJg");
	this.shape_23.setTransform(273,19.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF00FF").s().p("AgrBDQgEgDAAgGQAAgFAEgEQAEgDAGAAIASgBIAAgrQAAgYABgXIgTABQgGAAgEgEQgEgEAAgFQAAgFAEgDQADgEAFgBIAcAAQAQAAAcAEQALABAAAMQAAAFgEAEQgEADgEAAIgYgDQgCASAAAbIAAAqIAZgBQAGAAAEAEQADAEAAAFQAAAFgDADQgEAEgGAAIgQAAIgQAAIgSADIgSABQgGAAgEgEg");
	this.shape_24.setTransform(261.2,19.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF00FF").s().p("AgIBEQgFgEAAgFIABgEIAAgEIAAgNIgBgNIgCghIgCgiIgFAAQgVAAgMgDQgKgCAAgKQAAgEADgEQAEgFAGABIAPABIAPABIARAAIAQAAIAVABIAVABQAGAAADADQAEAEAAAFQAAAGgEADQgDAEgGAAIgXgBIgWgBIACAmIACAlIABAJIABAJQAAAHgDAGQgEAHgHAAQgEAAgEgDg");
	this.shape_25.setTransform(249.6,19);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF00FF").s().p("AgoA5QgPgPAAgUQAAgeAcggQAXgcAXAAIAHABIAGAAQAEgEAGAAQAJAAACALQADAIAAAKQAAAFgEAEQgDAFgHAAQgIAAgEgJQgCgEgCgBQgBgBgGAAQgMAAgOATQgVAYgBAWQAAAKAHAIQAHAHAKAAQAIAAAKgFIANgJQAHgFAFAAQAFAAAEAEQADAEAAAFQAAAFgEAEQgaAWgZAAQgWAAgNgPg");
	this.shape_26.setTransform(237.2,19.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF00FF").s().p("AgqBHQgLgJAAgeIACgkIADgmIgCgJIgBgKQAAgOAOAAQAEAAADACIAVgDIARgCQAXAAAOAFQAIAEAAAIQAAAFgCAEQgEAEgGAAIgEAAQgPgFgOAAIgOABIgRAEIgBAlIAjgEIAXgCQAFABAEADQAEADAAAGQAAAKgMABIgWACIgnAEIgBATQABASACACQABACALAAIAQgBIARAAIAFAAIAGgBQAGABAEACQADAEAAAGQAAALgKACQgJABgcAAQgfAAgJgIg");
	this.shape_27.setTransform(225.5,19.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF00FF").s().p("AgnBAQgUgNABgSQAAgPAMAAQAOAAAAAPQgBAFAKAGQAJAHAJAAQADAAABgNIABgdQACgUAAgfIgBgGIgBAAIgLAAIgKgBQgGAAgDgDQgFgEAAgFQAAgNARAAIAJAAIAJAAIARAAIARgBQAaAAAAAOQgBAFgDAEQgDAEgHAAIgEAAIgHgBIgHAAIAAAHQAABBgKAfQgGAWgRAAQgRAAgRgMg");
	this.shape_28.setTransform(213.1,19.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF00FF").s().p("AgcBLQgLgCgGgEQgGAAgDgEQgEgEAAgFIAAgcIACgcIgBgdIgBgfQABgFAEgGQAFgFAGAAQADAAANAGIARAIQAaAJATASQAXAWAAAaQAAAQgIAOQgIAPgOAJQgPAKgbAAQgHAAgIgCgAggAvQAEADAEABIALABQATAAAJgGQAIgFAFgJQAFgJAAgKQAAgWgbgRQgIgFgegNg");
	this.shape_29.setTransform(200.2,19.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF00FF").s().p("AAgA0QgEgKgEgOIgWACIgWABIgPAfQgEAHgHAAQgFAAgEgDQgEgEAAgFQAAgFANgcQgBgCAAgCQAAgFAJgCQANgXAQgYQAXgjAFAAQAKAAAEAMIAFAeIAOA8IAFANQADAIAAAEQAAAFgEAEQgEADgFAAQgHAAgIgSgAgGAIIAMgBIANgBIgGgeIgTAgg");
	this.shape_30.setTransform(185.9,19.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF00FF").s().p("AgqBHQgLgJABgeIACgkIABgmIAAgJIgBgKQgBgOANAAQAFAAADACIAUgDIASgCQAXAAAOAFQAJAEgBAIQAAAFgDAEQgDAEgGAAIgEAAQgPgFgOAAIgOABIgRAEIgBAlIAkgEIAVgCQAGABAEADQAEADAAAGQAAAKgMABIgWACIgmAEIgCATQAAASADACQABACALAAIAQgBIARAAIAFAAIAGgBQAGABADACQAEAEABAGQAAALgLACQgKABgcAAQgeAAgJgIg");
	this.shape_31.setTransform(165.2,19.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF00FF").s().p("AgIBEQgFgEAAgFIABgEIAAgEIAAgNIgBgNIgCghIgCgiIgFAAQgVAAgMgDQgKgCAAgKQAAgEADgEQAEgFAGABIAPABIAPABIARAAIAQAAIAVABIAVABQAGAAADADQAEAEAAAFQAAAGgEADQgDAEgGAAIgXgBIgWgBIACAmIACAlIABAJIABAJQAAAHgDAGQgEAHgHAAQgEAAgEgDg");
	this.shape_32.setTransform(152.5,19);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF00FF").s().p("AAgA0QgEgKgEgOIgWACIgWABIgPAfQgEAHgHAAQgFAAgEgDQgEgEAAgFQAAgFANgcQgBgCAAgCQAAgFAJgCQANgXAQgYQAXgjAFAAQAKAAAEAMIAFAeIAOA8IAFANQADAIAAAEQAAAFgEAEQgEADgFAAQgHAAgIgSgAgGAIIAMgBIANgBIgGgeIgTAgg");
	this.shape_33.setTransform(138.7,19.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF00FF").s().p("AgpA5QgOgPAAgUQAAgeAcggQAXgcAXAAIAIABIAFAAQAEgEAGAAQAJAAADALQACAIAAAKQAAAFgEAEQgDAFgHAAQgIAAgEgJQgCgEgBgBQgCgBgGAAQgMAAgOATQgVAYgBAWQABAKAGAIQAHAHAKAAQAIAAAJgFIAPgJQAGgFAFAAQAFAAAEAEQAEAEgBAFQAAAFgEAEQgaAWgZAAQgWAAgOgPg");
	this.shape_34.setTransform(126.1,19.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF00FF").s().p("AgrBDQgEgDAAgGQAAgFAEgEQAEgDAGAAIASgBIgBgrQAAgYACgXIgUABQgFAAgEgEQgEgEAAgFQAAgFAEgDQADgEAFgBIAbAAQARAAAcAEQALABAAAMQAAAFgEAEQgEADgFAAIgYgDQgBASAAAbIAAAqIAZgBQAGAAAEAEQADAEAAAFQAAAFgDADQgEAEgGAAIgQAAIgQAAIgSADIgTABQgFAAgEgEg");
	this.shape_35.setTransform(114.8,19.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF00FF").s().p("AgdBLQgKgCgGgEQgGAAgDgEQgEgEAAgFIAAgcIABgcIAAgdIgBgfQAAgFAGgGQAEgFAGAAQADAAANAGIARAIQAaAJATASQAXAWAAAaQAAAQgIAOQgIAPgOAJQgPAKgbAAQgHAAgJgCgAggAvQAEADAEABIALABQATAAAIgGQAJgFAFgJQAFgJgBgKQAAgWgagRQgIgFgegNg");
	this.shape_36.setTransform(103.3,19.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF00FF").s().p("AgqBHQgLgJAAgeIADgkIACgmIgBgJIgBgKQAAgOAMAAQAEAAAEACIAUgDIASgCQAXAAAOAFQAJAEgBAIQAAAFgCAEQgEAEgGAAIgEAAQgPgFgOAAIgOABIgRAEIgBAlIAkgEIAVgCQAGABAEADQAEADAAAGQAAAKgMABIgWACIgnAEIgBATQAAASADACQABACALAAIAQgBIARAAIAFAAIAGgBQAGABAEACQADAEAAAGQABALgLACQgKABgbAAQgfAAgJgIg");
	this.shape_37.setTransform(90.4,19.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF00FF").s().p("AgyBFQgEgDAAgGIAAgUIABgVIAAhKQAAgGAEgFQAEgGAJAAIAXACQANACAIAEQAoAUAAAeQgBAMgHAIQgJAJgRAHQAZAOAMAOQADAEABAEQgBAFgEAEQgDAEgGAAQgFAAgEgEQgcgaghgLIABAeQABAGgEADQgEAEgFAAQgGAAgEgEgAgcADIAEAAQAXAAAKgFIAIgGQAFgEAAgCQgBgLgNgJQgLgJgOgCIgLgBg");
	this.shape_38.setTransform(78.3,19.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF00FF").s().p("AgpBGQgEgDAAgFIAAgaIACgpIACgrQAAgYAOABIAIgCIAOAAQARAAAQAMQASANAAATQAAAYgTANQgRAMgWAAIgIgBIAAArQAAAFgEADQgDAEgFAAQgGAAgDgEgAgQgkIgCAgIAGABQAOAAAJgHQAKgHAAgMQAAgIgJgGQgJgGgKAAIgFAAIgEAAIAAANg");
	this.shape_39.setTransform(67,18.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgfAoQgQgMAAgVQAAgWANgRQAOgSAWAAQAQAAALAFQANAHAAAPQAAAKgLAIQgFAEgPAGIgfANQAEAFAGADQAHACAHAAQAMAAAJgFQAIgFAFAAQAKAAAAAKQAAAKgQAHQgNAGgPAAQgVAAgOgLgAgMgVQgGAFgEAMIAVgJQAMgGAHgFQgGgDgKAAQgIAAgGAGg");
	this.shape_40.setTransform(48.3,21.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAWBEQgDgIgBgNIgCgWIAAgHIAAgHIAAgIQgBgEgDAAQgKAAgIAIQgEAFgIANQABAigEAHQgEAHgHAAQgGAAgDgDQgFgDAAgGIABgFIABgZIAAg9IAAgDIACgOIgCgJIgBgIQAAgGAFgDQADgDAGAAQAIAAAEAJQABAGAAAMIAAASIgBASQAIgGAHgEQAHgDAJAAQAQAAAGAJQAGAHABANIAAAWIACATIAEASIAAADQAAAFgEAEQgEADgFAAQgJAAgDgJg");
	this.shape_41.setTransform(37.7,18.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgIBEQgFgEAAgFIABgEIAAgEIAAgNIgBgNIgCghIgCgiIgFAAQgVAAgMgDQgKgCAAgKQAAgEADgEQAEgFAGABIAPABIAPABIARAAIAQAAIAVABIAVABQAGAAADADQAEAEAAAFQAAAGgEADQgDAEgGAAIgXgBIgWgBIACAmIACAlIABAJIABAJQAAAHgDAGQgEAHgHAAQgEAAgEgDg");
	this.shape_42.setTransform(25.6,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,3.1,310,59), null);


(lib.sickdog = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0000FF").ss(1,1,1).p("AABAAQgBAAAAAA");
	this.shape.setTransform(29.6,36.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AjICOQAAAAAAAAQAAgDABgBQADg8AkgyQASgZBLhIQATgSBXghQANgJBmgMQANAAAMAIQAGADAKAGQADACADAC");
	this.shape_1.setTransform(25.5,16.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AhRJPQgEATAAALQAAASBBAKQAtAIAjAAQAOAABygTQBygTAjgJQB5gbAKgEQBcgeAAgvQAAgQgZgXQgUgRgNgFQAbgcBKhAQA/g+AMg6IAAgfIgOAAQhKBchYBTQAagqAPhOQAOhGAAhDQAAh7gmhvQgph7hLg/QgcgXhBgiQhBggghgdQg5hCgdgNQhWgagZgVIgIgEQAIANgEADQgEgIgCgHQAAAAAAgBQgEgLgBgKQgHhTiBAAQhTAkgIADAALoYQAEAJAFAKQAUAlADALQAGAWAFBHQAAAxhUAsQgMAHgLAFQg1AYgaAAQhHAAAAiVQAAgeAPgzQAGgUAIgXQADgIAEgJAkwpBQAdgGAhAVQAcASADAKAlhoHQA8gKAmANQAPAGAIAHQAIAIACAIAlMjMQAdgRAbgDQAIgBAHAAQAUAAAQAVQAAASgWAUIgBABQgYgqgDgLAmJmYQApgoAPAAQAjAAAUAWQARAUAAAaQAAAUgUAUQgggUgLgHQgCADgCADQgJAOgGAAQgdAAAAgaQAEgMACgIQATAMAXAOApvleIgEgBQgZAAgOAWQgLARAAATQAAAgAWAZQAPARASAGQAEA/AhAqQAYAgBKAQQAWgSAfggQAVgUAYgbQAEgFAFgFQAZgXAXgOQADAUARAKQALAHATAKApvliQBLAAAABFQAABKg5AAQgJAAgIgCAkdlUQgNAMgWANQgjAUgZAGAm0lVQgBgBAAgCQAAgCABgCQADgWAogmIAAAAQAKAHANAIAl+kgQgHgBgHgBAkwhRQAIAMAIAZQABAEABADQgtAGgQAKQgkAVAABHQAAAoAHAMQAKAOAlAAQBEAABBgcQAWgJAWgMQABgBAAAAQALACAQAAQBVAABWguQBhgyAAhEQAAgcgOgLQgOgLghAAQgWAAgfAYQAQghAIglAmChWQgJAEgKAEIgHAAQAEACADABQATALAKAAQAbAAArgRQABAAABAAAmFidQAGAFAKAHQAXARAKADAmuhrQAIAFAMAEQAHACARAKAkeglQAMgCAOgBQBFgGAmgXQAAAAABAAQA8gjAjhZAiZhFQgZgbgIgHAh8izQgNALgZAPQgDACgDACQgZAOgjATQgrAWghANAjEBtQgbAegUA5QgSAwAAARQAABhBYAoQAdAOAwALQAaAFAuAKQhYAMhAAQQh8AeAAAyQAAAoAzAKQARADBIAAIBPgIQABACACgDQAIgUAVgVQARgQAvgRQB+gqAegEQASAFATACIAHAAQgegHgKAAQgBAAgDAAQg/gPgwgqQhJhBAAhoQAAhiBRhAQBKg7BbACAiXBXQAggSAfgZQBRhBAlhQAj4ilQgmAihkAt");
	this.shape_2.setTransform(67.8,65.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#99CD8F").s().p("AksD6QghgrgEg+QAIACAJAAQA5AAAAhKQAAhGhLAAQADg6AkgyQASgZBLhJQATgSBZghQAMgJBmgMQAMAAANAIIAPAJIBcgnQCBAAAIBTQABAKAEALIAAABIAGAPIAJATQAUAlADALQAGAWAFBHQAAAwhWAsIgWALQg1AZgaAAQhIAAAAiUQAAgeAPgzIAPgrIAGgRIgGARIgPArQgPAzAAAeQAACUBIAAQAaAAA1gZQgMAWgkAoQgkApgZAQIgDgBIgDAFQgZAOgkATQgqAWggANIgCAAQgrARgbAAQgKAAgTgLIAAgDIATgIQBkgtAlgjIAAAAQAXgVAAgRQgQgVgUAAIgPABQgaADgdARQgYAOgYAXIgJAKIgtAvQgfAggWASQhKgQgYgggAhsgxIAAAAQgoAmgDAVIgBAEIABADQgNAqA1AJIAOACIACgBQAZgGAjgUQAWgNANgMIgsgaIgpgaIgXgPQAogoAQAAQAiAAATAWQASAUAAAaQAAAUgTATQATgTAAgUQAAgagSgUQgTgWgiAAQgQAAgoAoIAAAAgAAdidQAOAGAJAHQAIAHACAJQgCgJgIgHQgJgHgOgGQgWgHgcAAIgBAAIAAAAQgVAAgZAEQAZgEAVAAIAAAAIABAAQAcAAAWAHIAAAAgAApjLQAcASAEAKQgEgKgcgSIgCgCIAAAAQgYgOgUAAIgBAAIAAAAIgMABIgBAAIABAAIAMgBIAAAAIABAAQAUAAAYAOIAAAAIACACIAAAAgAA+j+IgGgEIAGAEg");
	this.shape_3.setTransform(39.3,29.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhNCVQgNgEgHgFIgEgDIAtgvIAQAMQAXARAKADQgKgDgXgRIgQgMIAJgKQAYgXAXgOQADAUARAKIAdARIgdgRQgRgKgDgUQAdgRAbgDIAPgBQAUAAAQAVQAAASgXAUIAAABQgZgqgCgLQACALAZAqQgmAihjAtQgRgKgHgCgAg/gqQg1gJANgqIABgFIgBgCQADgWAogmIAAAAIAXAPIgGAUQAAAaAdAAQAGAAAIgOIADgGIAsAbQgOAMgVANQgiAUgZAGIgCABIgOgCg");
	this.shape_4.setTransform(34.5,40.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ah3BZQgSgGgPgRQgVgZAAggQAAgSALgRQAOgWAZAAIAEABIAAgBIAAgEQBLAAAABFQAABKg5AAQgJAAgJgCgAB/hGIAFgUIAqAaIgDAGQgJAOgGAAQgdAAAAgag");
	this.shape_5.setTransform(17.4,35.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC9900").s().p("AiMJVQhBgLAAgRQAAgLAEgTIAAAAIAAAAIABABIAAAAIAAAAIAAAAIAAAAIABgCIAAAAQAJgUAVgVQAQgQAwgRQB+gqAegEQg+gPgwgqQhKhAAAhpQAAhiBShAIACgCIAAAAQBGg2BXAAIAAAAIAAAAIACAAIAAAAIADAAIgDAAIAAAAIgCAAIAAAAIAAAAQhXAAhGA2IAAAAIgCACQhSBAAABiQAABpBKBAQAwAqA+APQgeAEh+AqQgwARgQAQQgVAVgJAUIAAAAIgBACIAAAAIAAAAIAAAAIAAAAIgBgBIAAAAIAAAAIhPAIQhIAAgSgEQgygJAAgnQAAgzB8geQBAgQBYgMIhIgPQgwgLgegOQhXgoAAhhQAAgRARgvQAVg5AbgfQAWgJAWgMIABgBIgBABQgWAMgWAJQhCAchDAAQglAAgKgOQgHgMAAgnQAAhGAkgXQAPgKAugGIgCgHQgJgZgHgMQAhgNAqgWQAkgTAZgOIAGgEQAZgPAMgKQgMAKgZAPQAZgQAkgoQAkgpAMgVIAWgMQBWgrAAgyQgFhHgGgWQgDgLgUglIgJgTQADgCgHgNIAHADQAaAVBVAaQAdAOA4BBQAiAdBAAhQBCAhAbAXQBLA/AqB7QAlBvAAB8QAABCgOBGQgPBOgZAqQBXhTBKhcIAPAAIAAAfQgNA6g/A/QhJBAgbAbQAMAEAVASQAZAXAAAQQAAAvhdAeQgKADh4AcQgkAIhxAUQhxASgPABQgigBgugHgAAzGiQASAFATACIAHAAQgfgHgJAAIgEAAgAj1AmQBWgBBWgsQBgg0AAhDQAAgdgOgLQgMgLgiAAQgVABgfAYQAQgiAIglQgIAlgQAiQAfgYAVgBQAiAAAMALQAOALAAAdQAABDhgA0QhWAshWABQgQAAgKgDQAKADAQAAgAjRgHQgeAYggASQAggSAegYQBShCAmhPQgmBPhSBCgAkRh5IAAAAQgnAXhEAGIgaADIAagDQBEgGAngXIAAAAQA9gjAjhZQgjBZg9AjgAkRh5IghgiIAhAigAhZiYIAAAAgAkdjOIADABIgGAEgAkajNIAAAAgAotmLIACgDIgCAFIAAgCg");
	this.shape_6.setTransform(79.8,70.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.sickdog, new cjs.Rectangle(-1,-1,137.6,133.3), null);


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


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Tween25("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(80.5,19.3,0.998,0.998,53.2,0,0,6.6,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:7,regY:-0.1,scaleX:1,scaleY:1,rotation:0,x:12.6,y:13.5},12).wait(5));

	// Layer 9
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgtgZQAFACADACQAEACADACQA5AdASAO");
	this.shape.setTransform(73.4,18.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AAjAWQgbgWgrgV");
	this.shape_1.setTransform(77.7,14.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AAdAqQgSgPg5gcIgHgEIgIgEIAAggIA1AAQAqAVAcAWIAAAog");
	this.shape_2.setTransform(75,16.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AAwAAQgXgTgigRQgCgCgDgBAgvACQAGADAGADQAlAVAOAL");
	this.shape_3.setTransform(76.4,16.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AAQAoQgOgLglgVIgMgGQATgTAOgWIAFADQAiARAXATIAAAog");
	this.shape_4.setTransform(76.4,16.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AA/ALQgfgagzgWQgGgDgGgCQgEgCgEgCQgFgCgFgCAg+gCQAEACAFACQAEACAEACQA5AeATAP");
	this.shape_5.setTransform(74.9,15.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AAfAzQgTgPg5geIgIgEIgJgEIADgVIABAAIAJgbIAKAEIAIAEIAMAFQAzAWAfAaIAAAog");
	this.shape_6.setTransform(74.9,15.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1).p("ABuAYQgfgZg0gXQg2gZhBgOAhtgXQAtAKAhAPQBWAsAXAS");
	this.shape_7.setTransform(70.2,14.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("ABOBAQgXgShWgsQghgPgtgKIAHgRIAKgXQBBAOA2AZQA0AXAfAZIAAAog");
	this.shape_8.setTransform(70.2,14.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("AB5AbQgggagzgWQhEgfhVgOAh4gZQA7ALAoATQBWAsAXAS");
	this.shape_9.setTransform(69.1,14.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("ABYBDQgXgShVgsQgpgTg7gKIACgOIADgcQBVAOBEAfQAzAWAgAaIAAAog");
	this.shape_10.setTransform(69.1,14.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1).p("ACYAgQgggbgzgWQhfgqh9gLAiPgbQBfAJA5AcQBXArAXAS");
	this.shape_11.setTransform(66.1,13.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AB3BHQgXgShXgrQg5gchfgJIgCgPIgFgcQB8ALBfAqQAzAWAfAbIAAAng");
	this.shape_12.setTransform(66.1,13.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(1,1,1).p("AC6AiQgfgbg0gWQh4g1iogEAi2gdQCTACBPAnQBWArAYAS");
	this.shape_13.setTransform(62.6,13.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("ACZBJQgXgShWgrQhPgniTgCIgCggIgBgLQCoAEB4A1QA0AWAfAbIAAAng");
	this.shape_14.setTransform(62.6,13.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(1,1,1).p("ADjAiQgfgbg0gWQiDg6i5AAQgbAAgbACAjXgcQAYgBAYAAQCmgBBWAqQBXArAXAT");
	this.shape_15.setTransform(58.5,13.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("ADDBKQgXgThXgrQhWgqimABIgvABQgDgZgJgSQAbgBAbgBQC5AACDA7QA0AVAfAbIAAAog");
	this.shape_16.setTransform(58.5,13.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(1,1,1).p("AEGAiQgfgbg0gWQiDg6i5AAQhAAAg8AIAj0gWQA1gHA8AAQCkgBBXAqQBXArAXAT");
	this.shape_17.setTransform(55,13.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("ADmBKQgXgThXgrQhXgqikABQg8AAg1AHIgCgFQgGgUgJgSQA8gHBAgBQC5AACDA7QA0AVAfAbIAAAog");
	this.shape_18.setTransform(55,13.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(1,1,1).p("AErAiQgfgbg0gWQiEg6i4AAQhnAAhfAVAkbgIQBWgUBmgBQClgBBXAqQBWArAXAT");
	this.shape_19.setTransform(51.3,13.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AEKBKQgXgThWgrQhXgqilABQhmABhWAUIgDgUQgDgNgJgLQBfgUBngBQC4AACEA7QA0AVAfAbIAAAog");
	this.shape_20.setTransform(51.3,13.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(1,1,1).p("AFdAiQgfgbg0gWQiEg6i4AAQieAAiMAxAlMAXQB5gzCmgBQClgBBXAqQBWArAYAT");
	this.shape_21.setTransform(46.3,13.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AE8BKQgXgThWgrQhXgqilABQimABh4AzIgRguQCMgyCeAAQC5AACDA7QA0AVAfAbIAAAog");
	this.shape_22.setTransform(46.3,13.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_22},{t:this.shape_21}]},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(56.3,9.4,34.7,22.2);


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
		var bgm = createjs.Sound.play('bgmPA',{loop:-1});
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
		
		 window.open ("predAdj_scene4.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("predAdj_scene2.html","_self");
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
(lib.predAdj_Scene3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene3:0,scene3repeat:72});

	// timeline functions:
	this.frame_3 = function() {
		playSound("Cowbell");
	}
	this.frame_8 = function() {
		playSound("thatdogsmellsbad");
		playSound("high_blip");
	}
	this.frame_27 = function() {
		playSound("quick_pad_chord");
	}
	this.frame_46 = function() {
		playSound("funky_lead");
	}
	this.frame_71 = function() {
		/* _root.gonow = true;*/
	}
	this.frame_99 = function() {
		/* gotoAndPlay("scene3repeat");
		stopAllSounds();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(5).call(this.frame_8).wait(19).call(this.frame_27).wait(19).call(this.frame_46).wait(25).call(this.frame_71).wait(28).call(this.frame_99).wait(1));

	// Title
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(275.3,63.4,1,1,0,0,0,155,33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgRAPQgIgHAAgIQAAgHAIgHQAIgHAJAAQALABAHAGQAIAGAAAIQAAAIgIAHQgHAGgLAAQgJAAgIgGg");
	this.shape.setTransform(433.8,330.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AArB2QgKAHgMACQgLABgLAAQgjAAgXgWQgYgXAAgjQAAgqAYgZQAXgaAmAAQALAAAKADQAJACAHAFQACg2ACgTQADgTASAAQAJAAAGAGQAFAGAAAJQAAAWgDAuQgEAsAAAXQAAA4AEASIAAAGQAAAIgGAFQgGAGgJAAQgLAAgGgKgAgfAHQgMANAAAbQAAARANAMQAMAMARAAQALAAAGgDQAEgCAKgIIAFgEIAAg6QgFgKgIgDQgIgGgMABQgWgBgLANg");
	this.shape_1.setTransform(417.3,319.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAmBIQgPAHgLADQgLAEgGAAQgmAAgTgUQgSgUAAgpQAAgkAbgbQAcgbAmAAQAPAAATAIQAYALAAANQAAAFgEAFIgCAPIgBAWQAAAdAEANIAHAQIAGAPQAAAIgGAFQgGAGgIAAQgIAAgPgOgAgVgfQgQARAAAVQAAAVAHAKQAIALAPAAQAIAAAJgDQAJgEAHgGQgEgkAAgTIABgLIACgPIgGgCIgEgBQgUAAgQARg");
	this.shape_2.setTransform(399.3,323.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AguB3QgFAFgJAAQgIAAgGgFQgGgGAAgIIAAgMIABgLIAAiwQAAgLAFgJQAGgLAMAAQAQAAAAASIAAAGIgBAHIAAA8QAMgHAKgDQALgDAJAAQAlAAAWAbQAVAYAAAjQAAAkgYAaQgZAZgkAAQgWAAgUgHgAgRgDQgLAEgNAKIAABCQAWAJAPAAQATAAANgNQAMgOAAgUQAAgUgKgNQgLgNgSAAQgHAAgLAEg");
	this.shape_3.setTransform(380.8,319.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgrBRQgYgJAAgRQAAgPASAAQAIAAAOAFQANAEAIAAQAeAAAAgNQABgIgXgJQgfgOgJgGQgWgQAAgVQAAggAigLQATgGAmAAQARAAAHAEQAKAGAAAOQAAAcgPAAQgQAAgDgNIgMgBQglAAAAALQAAAFAVALQAfAOAMAIQAWAQAAAUQAAAbgZAOQgUALgcAAQgVAAgRgHg");
	this.shape_4.setTransform(349.4,323.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgOB7QgHgGABgJIAAjXQAAgJAGgGQAHgGAHAAQAKAAAGAGQAFAGABAJIAADOQgBAegVAAQgJAAgFgGg");
	this.shape_5.setTransform(337.3,319.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgPB7QgFgGAAgJIAAjXQgBgJAHgGQAGgGAIAAQAJAAAHAGQAFAGAAAJIAADOQAAAegVAAQgIAAgHgGg");
	this.shape_6.setTransform(328.6,319.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag1BEQgagUAAgkQAAgmAVgcQAXgeAmAAQAbAAASAJQAYALAAAZQAAARgTANQgJAGgaALIg0AXQAHAIALAEQALAEAMAAQAVAAAPgIQANgIAIAAQAQAAAAAQQAAASgaALQgWAJgZAAQgkAAgYgRgAgVglQgKAKgGAUIAjgQQAUgJANgIQgLgGgRAAQgNAAgLAJg");
	this.shape_7.setTransform(315.1,323.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgNBbQgGgGAAgKQAAgRgEgjQgEghAAgSQAAgKgBgGQgTALgSAXIgDAEIAAAwIAAANIgBALQAAAHgHAFQgGAFgJAAQgNAAgFgLQgDgJAAgQIAAg6IgBgWIgBgXQAAgOAFgMQAGgOAMABQAIgBAHAIQAHAGAAAIIgBAOQAXgbAVAAQAYgBALATQAJgJAMgEQALgEAOAAQAeAAALAeQADAGAEAkIALBUQABAJgHAGQgHAFgJABQgSAAgDgSIgFguIgGgsQgEgdgGAAQgEAAgNAIQgNAHgGAFQAAASAFAgQAEAjAAAQQAAAKgGAGQgGAFgKAAQgIAAgGgFg");
	this.shape_8.setTransform(294.3,323.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgrBRQgYgJAAgRQAAgPASAAQAIAAAOAFQANAEAHAAQAfAAABgNQAAgIgXgJQgfgOgJgGQgWgQAAgVQAAggAigLQATgGAmAAQARAAAHAEQAKAGAAAOQAAAcgPAAQgPAAgEgNIgNgBQgkAAAAALQAAAFAVALQAgAOALAIQAWAQAAAUQAAAbgZAOQgUALgdAAQgUAAgRgHg");
	this.shape_9.setTransform(273.6,323.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhQBkQABgIAFgGQAGgFAIAAQAHAAANACQANADAKAAQAXAAALgOQAKgOACgfQgHAJgLAEQgKAEgKAAQggAAgTgUQgUgUAAgfQAAgrAbgaQAbgbAsAAQAPAAALAEQAKADAHAHQATADABAVQAAALgDASQgIAkAAAoQgCAzgPAXQgVAegzAAQg8AAgBgYgAgYhGQgNAQABAZQgBATAIAJQAGAJAPAAQAMgBANgOQAMgOABgOIAHguIgKgFIgKgCQgaAAgPASg");
	this.shape_10.setTransform(243.4,327.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgzBCQgWgWgCgkQgBgiAUgbQAYgfApAAQAgAAASAYQARAXAAAiQAAAigUAaQgVAdgkAAQgdgBgVgTgAgWgaQgJAPAAATQAAASAKAKQAJAJALgBQANABAKgKQALgKABgTQACgxgdgBQgSAAgLASg");
	this.shape_11.setTransform(226.4,323.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AArB2QgKAHgMACQgLABgLAAQgjAAgXgWQgYgXAAgjQAAgqAYgZQAXgaAmAAQALAAAKADQAJACAHAFQACg2ACgTQADgTASAAQAJAAAGAGQAFAGAAAJQAAAWgDAuQgEAsAAAXQAAA4AEASIAAAGQAAAIgGAFQgGAGgJAAQgLAAgGgKgAgfAHQgMANAAAbQAAARANAMQAMAMARAAQALAAAGgDQAEgCAKgIIAFgEIAAg6QgFgKgIgDQgIgGgMABQgWgBgLANg");
	this.shape_12.setTransform(208.6,319.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgNBtQgIgGABgIIAAgRIAAgRIgChQIgegCQgTgCAAgTQAAgIAGgGQAGgHAJAAIAbACIgBgQIgBgQQABgIAFgGQAHgGAJAAQAWAAAAAnIAAANIAQgCQASAAAHADQAMAEAAAPQAAAJgGAGQgGAFgJAAIgIAAIgIAAIgPABIADBSIAAAHIAAAJQAAAkgXAAQgHAAgGgFg");
	this.shape_13.setTransform(178,320.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAmBIQgPAHgLADQgLAEgGAAQgmAAgTgUQgSgUAAgpQAAgkAbgbQAcgbAmAAQAPAAATAIQAYALAAANQAAAFgEAFIgCAPIgBAWQAAAdAEANIAHAQIAGAPQAAAIgGAFQgGAGgIAAQgIAAgPgOgAgVgfQgQARAAAVQAAAVAHAKQAIALAPAAQAIAAAJgDQAJgEAHgGQgEgkAAgTIABgLIACgPIgGgCIgEgBQgUAAgQARg");
	this.shape_14.setTransform(161.6,323.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAlByQgEgMgDgXQgDgWAAgPIABgLIAAgMIAAgNQgCgIgHAAQgRAAgNAPQgIAIgMAWQAAA5gGAMQgGANgNgBQgIABgHgHQgHgFAAgJIABgIQABgEABgnQAAgfABhIIAAgFIABgZIgCgOIgBgPQAAgJAHgFQAGgGAJAAQAQAAAFARQADAJgBAUIAAAfIgBAfQAMgLANgGQAMgGAOAAQAbAAALAPQAKALABAXIACAmIADAfIAFAfIABAFQAAAJgGAFQgHAGgJAAQgQAAgEgQg");
	this.shape_15.setTransform(143.7,319.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgOByQgIgHAAgJIABgGIABgHIgBgWIgBgWQAAgVgDgjIgFg4IgIAAQgjAAgUgFQgRgEgBgRQAAgIAGgGQAHgIAKABIAZADIAZABIAdAAIAcAAIAjACIAkABQAJAAAHAGQAFAGAAAJQAAAJgFAGQgHAGgJAAIgmgBQgagCgNAAIAFBAQADAnAAAXIABAQIABAQQAAAMgEAJQgHAMgMAAQgHAAgHgFg");
	this.shape_16.setTransform(123.2,319.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},8).wait(92));

	// Layer 8
	this.instance_1 = new lib.Symbol7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(392.5,164.4,0.354,0.354,0,0,0,13.7,51.4);

	this.instance_2 = new lib.Symbol7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(412.6,172.7,0.429,0.429,0,0,0,15.3,43.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},3).wait(97));

	// Layer 7
	this.instance_3 = new lib.sickdog();
	this.instance_3.parent = this;
	this.instance_3.setTransform(386.2,222,0.651,0.651,0,0,0,67.8,65.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).wait(97));

	// Layer 3
	this.instance_4 = new lib.Symbol5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(282.7,82.4,1.694,1.533,0,0,0,45,12.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(46).to({_off:false},0).wait(54));

	// Layer 2
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF3FFF").s().p("AgxB+QgSgEgKgHQgJAAgHgGQgFgGAAgJIABgvIABgvIgBgzIAAg0QAAgIAIgJQAJgIAJAAQAFAAAVAJIAdANQAsAPAhAfQAmAlABAsQAAAbgOAZQgNAYgYAPQgZARgvAAQgLAAgPgDgAg2BPQAGAEAIACQAIACAJAAQAhAAAPgJQAOgJAIgPQAIgQAAgQQAAgmgtgcQgOgKgygUg");
	this.shape_17.setTransform(427.8,125.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF3FFF").s().p("ABQB2QgNgBgMgcQgJgTgFgYQgMACgaACIglAEQgHARgSAjQgHALgMAAQgJAAgHgGQgHgGAAgJQAAgIAXguQgCgFAAgEQABgIAPgEQAWglAbgpQAmg8AJAAQARAAAGAVIAKAyIAXBmIAIAVQAGANAAAHQAAAJgHAGQgGAGgIAAIgBAAgAgLAPIAVgDIAWgCIgLgzIggA4g");
	this.shape_18.setTransform(403.8,125.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF3FFF").s().p("AhMB3QgIgIAAgJIAAilIgBgVQAAgMABgIQACgPAZgDQAMgEAcAAQAcAAAbATQAgAXAAAhQAAASgGAMQgGALgMAKQAPAHALAPQAOARAAAQQAAAUgXAUQgPAMgRAGQgjANg4AAQgJAAgHgHgAgpBUQAbgCAegIQAbgJAAgIQAAgNgSgJQgNgIgMgBIgpgBgAgpgxIAAAgQAOACAHgBQAvgEAAgfQAAgLgOgLQgOgKgQAAIgYAAg");
	this.shape_19.setTransform(382.7,125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhwB0QgGgGgBgIQAAgKAGgHIAFgDIAFgFIAPgQIAPgQQAOgPAYgbIAjgqIgEgGQgZgZgLgRQgJgQALgLQAGgGAIgBQAKgBAHAJIAPATQAJAMAHAHIAVAUIAUAUIAYAaQAQARAIAIQAHAHAAAJQAAAIgGAGQgHAHgIAAQgJAAgHgHIgagcIgZgbIgpAvQgaAfgRAQIgKAMIgKAMQgJAJgKADIgIABQgHAAgGgGg");
	this.shape_20.setTransform(201,213.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAFBoQgIAAgGgGQgJgJAMgdQAGgTANgVIgdgYQgSgQgLgHIg2ASQgNAEgIgJQgGgGgBgJQgBgJAGgGQAGgGAwgRQACgEAEgDQAGgFANAHQAqgLAwgLQBFgNAGAGQAMAMgKATIgdAqIg4BYIgJAVQgFANgFAEQgGAGgIAAIgBAAgAgBgnIAQAOIARAOIAegtIg/ARg");
	this.shape_21.setTransform(179.8,204.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgcCSQgHgHgBgIQAAgKAGgGIAYgYIAWgZIALgLQgSgRgdgVIgyghIgZAVQgQANgJAKQgFAFgJAAQgIgBgGgGQgHgGAAgJQAAgIAGgFIAigfQAYgUAKgLIArgoIApgpQAGgGAIAAQAIAAAHAHQAGAGABAIQgBAJgGAGIgZAZIgZAYIgLAKIgMALIAxAiQAdAUATARIApgmQAKgIAQgHQATgHAIAIQAGAGAAAIQABAJgGAFIgEADQgKAGgGAGIgKAJIgLAJQgKALgWATIggAeIgXAaIgXAZQgFAGgIAAQgJAAgGgGg");
	this.shape_22.setTransform(165.1,183.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AhwB0QgGgGgBgIQAAgKAGgHIAFgDIAFgFIAPgQIAPgQQAOgPAYgbIAjgqIgEgGQgZgZgLgRQgJgQALgLQAGgGAIgBQAKgBAHAJIAPATQAJAMAHAHIAVAUIAUAUIAYAaQAQARAIAIQAHAHAAAJQAAAIgGAGQgHAHgIAAQgJAAgHgHIgagcIgZgbIgpAvQgaAfgRAQIgKAMIgKAMQgJAJgKADIgIABQgHAAgGgGg");
	this.shape_23.setTransform(151.4,164);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("AhUBmQgTgPAAgTQAAgKAGgHQAGgGALAAQAOAAAGAOQAJAUAgAAQAZAAAagMQAagMAAgPQAAgTgRgHQgLgEgigBQgbAAgVgJQgdgNAAgYQABgfAggZQAggZAlAAQAQAAAWAHQAcAIAAAMQAAAIgGAGQgGAHgKAAQgHAAgPgDQgOgDgIAAQgUAAgRAKQgTAJAAAMQAAAGAGAEQAGADALACIAnACQAjADAUARQAWARAAAhQAAApguAVQgjAPgsAAQgoAAgXgRg");
	this.shape_24.setTransform(317.9,125.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0000").s().p("AhTBeIAEgxQADhDAAhTQABgJAGgGQAGgHAKAAQAJAAAGAHQAGAGAAAJQAABTgEBFIgDAmQAlAAA5gSIAHgBQAKAAAGAHQAFAHABAIQAAANgOAGQgTAIgmAHQgiAGgXAAQgnAAAAgig");
	this.shape_25.setTransform(298.5,125.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF0000").s().p("AhTBeIAEgxQADhDAAhTQABgJAGgGQAGgHAJAAQAKAAAGAHQAGAGABAJQgBBTgEBFIgDAmQAlAAA5gSIAHgBQAKAAAGAHQAFAHABAIQAAANgOAGQgTAIgmAHQgiAGgXAAQgnAAAAgig");
	this.shape_26.setTransform(280.8,125.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF0000").s().p("AhIB3QgRgPAAgyQAAgVADgpQADgqAAgVIgCgQIgBgQQAAgYAWAAQAHAAAFAEIAjgHQAQgCAOAAQAnAAAYAJQAOAGAAAOQAAAIgGAGQgGAHgJAAIgHAAQgZgHgYAAQgMAAgMACQgOABgPAEIgBA+IA8gGIAmgDQAJAAAGAGQAHAGAAAKQAAARgUADIglADIhCAGIgBAgQAAAeADAFQACACASAAIAcgBIAdAAIAKgBIAJgBQAJAAAGAFQAIAGAAAKQAAASgTADQgPADgxAAQgzAAgPgOg");
	this.shape_27.setTransform(262,125.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF0000").s().p("ABUBmIgIgmQgIgcgIg0IgYBBIgJAdQgGARgGALQgIAOgOAAQgPAAgHgRIgJgdQgMgogLgrIgTBLIgGAjQgGAXgRAAQgLAAgGgIQgFgGgBgJQAAgZALgkIARg8IAJgwQAIghAIgLQAIgLAMAAQAPAAAHAOQAFAOAIAqQAHApAOAuQAQguAPg3IAJgkQAJgWARAAQARAAAJAaQADAKAEAdQAJBBAOAwQAOAwAAAEQAAAJgIAHQgHAFgIAAQgRAAgJgYg");
	this.shape_28.setTransform(237.7,125.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF0000").s().p("AhUBmQgTgPAAgTQAAgKAGgHQAGgGALAAQAOAAAGAOQAJAUAgAAQAZAAAagMQAagMAAgPQAAgTgRgHQgLgEgigBQgbAAgVgJQgdgNAAgYQABgfAggZQAggZAlAAQAQAAAWAHQAcAIAAAMQAAAIgGAGQgGAHgKAAQgHAAgPgDQgOgDgIAAQgUAAgRAKQgTAJAAAMQAAAGAGAEQAGADALACIAnACQAjADAUARQAWARAAAhQAAApguAVQgjAPgsAAQgoAAgXgRg");
	this.shape_29.setTransform(212.2,125.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AhUBqQgVgWAAgsQAAgoAUgpQATgqAggaQAVgSAYAAQAPAAAaALQAfANAAAOQAAAJgGAHQgGAGgKAAQgEAAgRgJQgPgJgOAAQgNAAgYAfQgjAsAAAyQAAAaAIAKQAIAKAXAAQAXAAASgOQAUgOAIgcQgjADgbAMQgEACgFAAQgKAAgGgHQgGgGAAgJQAAgYA4gIQAfgFArAAQAJAAAHAGQAGAGAAAIQAAALgJAGQgLAvggAcQghAcgrAAQgpAAgVgWg");
	this.shape_30.setTransform(169.6,125.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AhTBgQgigcAAgtQAAg0AhgsQAmgxA3AAQA3AAAbAZQAbAZAAAyQAAA0gfArQgjAyg3AAQgvAAghgbgAgxguQgYAfAAAmQABAaATAQQAUAPAeAAQAgABAXgiQAWgfAAgmQAAghgPgMQgOgNgkAAQghAAgZAig");
	this.shape_31.setTransform(145.6,125.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgxB+QgRgEgLgHQgJAAgHgGQgFgGgBgJIACgvIACgvIgBgzIgBg0QAAgIAIgJQAJgIAJAAQAFAAAVAJIAdANQAtAPAfAfQAoAlAAAsQAAAbgOAZQgNAYgXAPQgbARgtAAQgMAAgPgDgAg2BPQAGAEAIACQAIACAKAAQAgAAAPgJQAOgJAIgPQAIgQAAgQQAAgmgtgcQgOgKgygUg");
	this.shape_32.setTransform(122,125.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(4,1,1).p("AIWrdIF5F5IPYAAAr7lkIAAl5A9mlkIBuAAIP9AAA74lkIRCRCAOPlkI6KAA");
	this.shape_33.setTransform(271.5,179.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},27).wait(73));

	// Layer 1
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,53.9,1,1,0,0,0,54,40.5);

	this.instance_5 = new lib.Back("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(275.5,208.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.UI}]}).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,200.6,534,398.7);
// library properties:
lib.properties = {
	id: 'D62C8FC753D07D4D9B484373B74D1BEC',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/Cowbell.mp3", id:"Cowbell"},
		{src:"sounds/wrong_answer.mp3", id:"wrong_answer"},
		{src:"sounds/funky_lead.mp3", id:"funky_lead"},
		{src:"sounds/high_blip.mp3", id:"high_blip"},
		{src:"sounds/High_Screaming_Gtr.mp3", id:"High_Screaming_Gtr"},
		{src:"sounds/powersynth.mp3", id:"powersynth"},
		{src:"sounds/quick_pad_chord.mp3", id:"quick_pad_chord"},
		{src:"sounds/bgmPA.mp3", id:"bgmPA"},
		{src:"sounds/salsa_groove.mp3", id:"salsa_groove"},
		{src:"sounds/sexy_sax.mp3", id:"sexy_sax"},
		{src:"sounds/thatdogsmellsbad.mp3", id:"thatdogsmellsbad"}
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
an.compositions['D62C8FC753D07D4D9B484373B74D1BEC'] = {
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