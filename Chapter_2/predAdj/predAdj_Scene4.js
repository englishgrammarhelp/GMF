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


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF00FF").ss(4,1,1).p("Ai8i7IF5F4");
	this.shape.setTransform(18.9,18.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(4,1,1).p("Ai8i8IF5F5");
	this.shape_1.setTransform(18.9,18.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,41.7,41.7);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAUgFQgCAAgBAAQgIgBgFAAQgGABgKAGQgDADgEAD");
	this.shape.setTransform(82.5,13.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AAbgNQgbAXgTADQgDABgEAA");
	this.shape_1.setTransform(76.8,16.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F9CCC6").s().p("AgrApQAUgEAZgYIAFAPQAAAZggAAQgLgBgHgLgAgtAmQgGgKAAgFIABgZQAFgUAXAAQAPAAAJAjQgZAYgUAEIgCgDgAACANIAAAAgAATABQAKgGAHgBIACAAIABAAIAAAAIABAAIABAAIAGAAIABAAIABABIgBgBIgBAAIgGAAIgBAAIgBAAIAAAAIgBAAIgCAAQgHABgKAGQgEgDgDgLIgEgSQAAgFAGgHQAHgIAHAAQATAAAFAgQAAAIgDAGQgGAJgSAAQgDAAgDgDg");
	this.shape_2.setTransform(79.3,13.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},6).to({state:[]},2).wait(6));

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AgRgOQAHAAAXAAQAyABgKAFQgJAGgKACQgKAAgFgCQgEgDgcALQgdALgIgBQgIgCAJgXIAggFQgJgBANAAg");
	this.shape_3.setTransform(81.5,28.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgyAQQgIgCAJgXIAggGIAeABQAyAAgKAGQgJAGgKABQgKABgFgCQgEgEgcALQgZALgKAAIgCAAg");
	this.shape_4.setTransform(81.5,28.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AAqAKQgMAKgiABQgiABgIgGQgJgGAJgXIAkgGQgXABAmgCQAogCACAKQABAKADACQACABgLAJg");
	this.shape_5.setTransform(81.2,29.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AguAQQgJgGAJgXIAkgGQgXABAmgCQAogCACAKQABAKADACQACABgLAJQgMAKgiABIgLAAQgZAAgGgFg");
	this.shape_6.setTransform(81.2,29.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1).p("AADAQQgGgGgegIIgLgMQAFgIAngCQAngCACAKQABAKADACQACABgLAJQgMAKgHABQgHABgHgGg");
	this.shape_7.setTransform(81.8,29.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AADAQQgGgGgegIIgLgMQAFgIAngCQAngCACAKQABAKADACQACABgLAJQgMAKgHABIgCAAQgGAAgGgFg");
	this.shape_8.setTransform(81.8,29.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).to({state:[]},2).to({state:[{t:this.shape_6},{t:this.shape_5}]},2).to({state:[{t:this.shape_8},{t:this.shape_7}]},2).to({state:[{t:this.shape_4},{t:this.shape_3}]},2).to({state:[]},3).wait(3));

	// Layer 1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("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");
	this.shape_9.setTransform(64.6,96.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFF99").s().p("AiaB7IgJgVQgCgIAAgEQAAgSAJgUIAGgMIAMgaIgMAaQgGgQgOgjQgLgaAHgZQAEgFAAgJQAEAEAKAUQANAUAXAGQASg2A2gsQA5gvA9AAQAnAAAXAJIAEAFQg2gTgyAyIgEAFQAOgHBIgLIA/AAQgVAKgnAKIgOAEQgcAHgLAEIAtgEQAJAAASAGIAOAEIAEAJIgCAAQhwANgVAAIgJAAQAQARA0ATQhEgMgxA0QAOAAAJAJIAEAJQgEAAgRgLQgRgKgMAAQAGAgAVAVIAFAEIgBAAQgRgJgSAAIgIABQgaADgFAXQgCAGAAAIQAAANACAKQACAJADAHQgNgIgLAAIgFABIgDAaQgDAUgIAIQAAgYgLgZgAiTAyIgDgKIADAKgAA8hnIAEAAIAAgBIgEABg");
	this.shape_10.setTransform(63.8,17.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgpAIIAQgMQAMAMAGAUIgIAAQgSAAgIgUgAAcACQgSgGAAgGIADgNQANgEAHAAQAFAJAEANIgNAGIgBABIAAAAg");
	this.shape_11.setTransform(81.2,13.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgsAYIgFgGIAegaQAKAYAXgEIABADQAAAagbAAQgSgBgOgQgAAKgYIgDACIgCgCIAAAAIAAgBIAAgBQgCgGgBgHIADAAQAAAIAFAEQADgFAQgFIAGgCIgDAMQAAAHASAHIAAAAQgWAMgDACQgLgXgEgCg");
	this.shape_12.setTransform(79,15.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F7BBB3").s().p("Ag4AQQAAgRAEgGQAGgKAVAAQALAAAPARIgDADIgPANIgfAaQgIgMAAgOgAAGgPIAGgQIABgBQAKgJAGAAQAQAAAMAWQgIABgMAEIgGACQgQAFgEAEQgFgDAAgJg");
	this.shape_13.setTransform(78.9,12.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF6600").s().p("AkNDoIgBAAIAAgBIgDABIgWgHIgJgDQgSgGgJABQgXgGgIAAQggAAgbgYQgTgRAAgiQAAgPAcg/QAcg+AAgvQgJiAAAgSQAAgYAGgNIAJAPQAjAwAmAQQADABAOANQAJAKANgBQAVgCAQAWQAHAEAiAJQAQAEAOAGQAIAEAJAAIASgCQASAAAaAEIAfgDQAKAAAzAGQAWAAAmgDIApgFQAJAAAgADQAeAABwgrQAVgHAogKIAEgCIABADIASBsQAPA5AOAWIAfAxQAAAHgVAAIgrAPIgBAAQgVADgWAJQgaAHgEAAQgdAJgFAAQglgJgGAAQgsAAgRgDQgPgDgVgKIgUgLIgDAAQgLhrgHgYQAHAYALBrIAAAAIAFArIgBABIgfAQIgaAMQghAQgkAIIgUADQh/AehAAAIgqgDgABqBqIAAAAg");
	this.shape_14.setTransform(61.9,124.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F9CCC6").s().p("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");
	this.shape_15.setTransform(64.6,99.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]}).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,131.1,195.2);


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
		
		 window.open ("predAdj_scene5.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("predAdj_scene3.html","_self");
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
(lib.predAdj_Scene4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene4:0,scene4repeat:132});

	// timeline functions:
	this.frame_0 = function() {
		playSound("diagramformchanges");
	}
	this.frame_131 = function() {
		/* _root.gonow = true;*/
	}
	this.frame_159 = function() {
		/* gotoAndPlay("scene4repeat");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(131).call(this.frame_131).wait(28).call(this.frame_159).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKAJQgEgEAAgFQAAgEAEgEQAFgDAFAAQAHAAAEADQAEADAAAFQAAAFgEAEQgFAEgGAAQgFAAgFgEg");
	this.shape.setTransform(390,165.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgIBEQgFgEAAgFIABgEIAAgEIAAgNIgBgNIgCghIgCgiIgFAAQgVAAgMgDQgKgCAAgKQAAgEADgEQAEgFAGABIAPABIAPABIARAAIAQAAIAVABIAVABQAGAAADADQAEAEAAAFQAAAGgEADQgDAEgGAAIgXgBIgWgBIACAmIACAlIABAJIABAJQAAAHgDAGQgEAHgHAAQgEAAgEgDg");
	this.shape_1.setTransform(379.5,158.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgoA5QgOgPgBgUQABgeAbggQAXgcAXAAIAHABIAGAAQAFgEAFAAQAJAAACALQACAIAAAKQAAAFgDAEQgDAFgGAAQgJAAgEgJQgCgEgCgBQgBgBgGAAQgMAAgOATQgWAYAAAWQAAAKAIAIQAGAHAKAAQAIAAAKgFIANgJQAIgFADAAQAGAAAEAEQADAEABAFQAAAFgGAEQgZAWgZAAQgVAAgOgPg");
	this.shape_2.setTransform(367,158.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgqBHQgKgJAAgeIABgkIACgmIgBgJIgBgJQABgPANAAQAEAAADADIAVgFIARgBQAXAAAOAGQAJACAAAKQAAAEgEAEQgEAEgFAAIgEgBQgPgDgOAAIgOAAIgRAEIgBAkIAjgDIAXgBQAFAAAEADQAEADAAAGQAAAKgMACIgWACIgmADIgBATQgBASADADQABABAKAAIARAAIARAAIAGgBIAFAAQAFAAAEADQAFADAAAGQAAAKgLACQgJACgdAAQgeAAgJgIg");
	this.shape_3.setTransform(355.4,158.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgnBAQgUgNAAgSQAAgPAOAAQAMAAAAAPQAAAFAKAGQAKAHAIAAQADAAACgNIAAgdQACgUAAgfIgBgGIgBAAIgKAAIgLgBQgGAAgDgDQgFgEAAgFQAAgNARAAIAKAAIAIAAIARAAIASgBQAZAAAAAOQAAAFgEAEQgEAEgGAAIgEAAIgGgBIgIAAIAAAHQAABBgKAfQgGAWgRAAQgRAAgRgMg");
	this.shape_4.setTransform(343,159.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgtBGQgEgFAAgFIAAhhIgBgMQAAgHABgGQABgIAPgCQAHgCAQAAQARAAAQALQATANAAAUQAAALgEAHQgDAGgIAGQAJAEAHAJQAIAJAAALQAAAMgNALQgJAHgKAEQgVAIghAAQgFAAgFgFgAgYAyQAQgCASgFQAQgEAAgGQgBgHgKgFQgIgFgHgBIgYAAgAgYgdIAAATQAIACAFgBQAbgDAAgSQAAgGgIgHQgIgGgKAAIgOAAg");
	this.shape_5.setTransform(330.9,158.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgkBAQgZgTAAguIABgNIAAgOIAAgKIAAgLQABgHACgHQAEgIAGAAQAGAAADADQAFADAAAGIAAAQIAAAPIgBAOIAAANQAAANACAMQAEAOAIAGQAEADAOAAQAYABAIgrQAFgUAAgoQAAgFADgFQAFgGAHAAQAGAAADAEQADAEAAAEQAAAlgEAUQgEAfgQAVQgGAJgLAGQgLAHgMAAQgXAAgLgIg");
	this.shape_6.setTransform(317.5,159.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgxA8QgMgIAAgMQAAgGAEgDQAEgEAGAAQAIAAAEAIQAFAMATAAQAPAAAPgHQAPgHAAgJQABgMgLgDQgGgDgUAAQgQgBgMgFQgSgHABgPQAAgSASgPQAUgPAWAAQAJAAANAEQAQAGAAAGQAAAFgCAEQgEAEgGAAIgNgCIgNgCQgNAAgJAGQgLAGAAAHQAAADADACQAEADAGABIAXABQAUABANAKQANALgBATQAAAYgbANQgUAJgaAAQgXAAgOgLg");
	this.shape_7.setTransform(304,159.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgfAoQgQgMAAgVQAAgWAMgRQAPgSAVAAQARAAAKAFQAOAHABAPQgBAKgLAIQgFAEgQAGIgeANQAFAFAFADQAHACAHAAQAMAAAJgFQAIgFAEAAQALAAAAAKQgBAKgPAHQgNAGgPAAQgVAAgOgLgAgMgVQgGAFgEAMIAVgJQALgGAIgFQgHgDgKAAQgHAAgGAGg");
	this.shape_8.setTransform(283.8,161.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAWBEQgCgIgCgNIgCgWIABgHIAAgHIAAgIQgBgEgFAAQgJAAgIAIQgFAFgGANQgBAigDAHQgDAHgJAAQgEAAgFgDQgEgDAAgGIABgFIABgZIAAg9IAAgDIABgOIgBgJIgBgIQABgGADgDQAEgDAFAAQAKAAADAJQABAGABAMIgBASIAAASQAGgGAIgEQAHgDAIAAQAQAAAIAJQAEAHACANIABAWIACATIADASIAAADQAAAFgDAEQgEADgGAAQgJAAgDgJg");
	this.shape_9.setTransform(273.2,158.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgIBBQgEgEAAgFIAAgKIABgKIgCgvIgRgBQgMgCAAgKQAAgGAEgDQADgEAGAAIAPABIAAgKIAAgJQAAgFADgDQAEgEAGAAQAMAAAAAXIAAAIIAKgBIAOABQAIADAAAJQAAAFgEAEQgEADgFAAIgFAAIgEAAIgJABIABAwIAAAEIABAFQAAAWgOAAQgEAAgEgDg");
	this.shape_10.setTransform(263.1,159.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgeAnQgNgNgBgVQAAgUALgQQAPgTAYAAQASAAALAPQAKANAAAUQAAAVgLAPQgNARgVAAQgRAAgNgMgAgMgPQgGAJAAALQAAALAGAGQAFAEAHAAQAHAAAGgFQAHgHAAgKQABgdgQAAIgCAAQgJAAgGAKg");
	this.shape_11.setTransform(245.2,161.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgIBBQgEgEAAgFIAAgKIABgKIgCgvIgRgBQgMgCAAgKQAAgGAEgDQADgEAGAAIAPABIAAgKIAAgJQAAgFADgDQAEgEAGAAQAMAAAAAXIAAAIIAKgBIAOABQAIADAAAJQAAAFgEAEQgEADgFAAIgFAAIgEAAIgJABIABAwIAAAEIABAFQAAAWgOAAQgEAAgEgDg");
	this.shape_12.setTransform(235.9,159.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAWBFQgFgIgJgMIgOgTIgMAIIgBAZQAAAFgEAEQgDADgGAAQgNAAAAgPIABgWIABgWIABgeIAAgeIAAgKIgBgJQAAgGAEgDQADgDAGAAQAFAAAEADQAEADAAAGIAAAKIABAJIgBAaIAAAZQAMgJAZgZQAEgEAFAAQAFAAAEADQAEAEAAAFQAAAEgDAEQgLAMgPANIATAZQAOATAAAGQAAAFgEAEQgEADgFAAQgIAAgDgHg");
	this.shape_13.setTransform(489.7,130);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgcAoQgPgMAAgUQAAgRANgUQAPgWATAAQAJAAANAFQAQAGAAAJQAAAEgDAEQgEADgFAAQgEAAgFgEQgGgEgLAAQgGAAgJAOQgIANAAAJQAAAKAHAGQAHAFAKAAQAGAAAJgFQAJgFADAAQAFAAADAEQAEAEAAAEQAAAHgQAIQgOAGgJAAQgUAAgNgMg");
	this.shape_14.setTransform(479.2,132.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAXArIgQAGQgGACgEAAQgWAAgLgMQgMgMAAgYQAAgVARgQQARgQAVAAQAKAAALAFQAOAGAAAIQAAAEgCACIgBAJIgBANQAAAQADAIIAEAKIAEAJQAAAEgFAEQgDADgFAAQgEAAgJgIgAgMgSQgJAKAAAMQAAAMAEAHQAFAGAIAAQAFAAAFgCQAFgCAFgEQgDgVAAgKIABgHIAAgJIgCgBIgDAAQgLAAgKAJg");
	this.shape_15.setTransform(469.3,132.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgbBHQgDADgFAAQgFAAgEgDQgDgEAAgFIAAgHIAAgHIAAhnQAAgIADgFQAEgGAHAAQAKAAAAALIgBADIAAAFIAAAjQAHgEAGgCQAGgCAFABQAWAAAOAPQAMAOAAAVQAAAWgOAPQgPAPgVAAQgNAAgMgEgAgKgBQgGACgIAFIAAAnQANAGAJAAQALAAAHgIQAIgIAAgMQAAgMgGgIQgHgHgLAAQgEAAgGADg");
	this.shape_16.setTransform(458.3,130.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgkAwQgDgDAAgFIAAg8IAAgIIAAgJQAAgFADgDQAEgEAFAAQALAAACAKQAPgMAUAAQATAAAAAZIAAAGQgBAOgMAAQgMAAAAgMIgBgJQgTADgJASIAAAuQAAAGgEADQgEADgFAAQgGAAgDgEg");
	this.shape_17.setTransform(440,132.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgfAoQgQgMAAgVQAAgWANgRQAOgSAWAAQAQAAALAFQANAHAAAPQAAAKgLAIQgFAEgPAGIgfANQAEAFAGADQAHACAHAAQAMAAAJgFQAIgFAFAAQAKAAAAAKQAAAKgQAHQgNAGgPAAQgVAAgOgLgAgMgVQgGAFgEAMIAVgJQAMgGAHgFQgHgDgJAAQgIAAgGAGg");
	this.shape_18.setTransform(429.9,132.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgQBOQgEgDgBgFIAAgDQADgNAAgLIAAguIgHABIgFAAQgGAAgDgDQgEgDAAgGQAAgIAJgDIARgCIABgKQADgVAIgKQAKgNAWAAQARAAAAANQAAAMgQAAQgLAAgFAIQgEAFgBANIAAACIASgBQAQAAAAAMQAAAMgSAAIgSABIAAAYIAAAZQAAARgCAKQgBAKgJAAQgGAAgDgEg");
	this.shape_19.setTransform(419.7,130.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgfAoQgQgMAAgVQAAgWANgRQAOgSAWAAQAQAAALAFQANAHAAAPQAAAKgLAIQgFAEgPAGIgfANQAEAFAGADQAHACAHAAQAMAAAJgFQAIgFAFAAQAKAAAAAKQAAAKgQAHQgNAGgPAAQgVAAgOgLgAgMgVQgGAFgEAMIAVgJQAMgGAHgFQgHgDgJAAQgIAAgGAGg");
	this.shape_20.setTransform(409.6,132.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgkAwQgDgDAAgFIAAg8IABgIIAAgJQAAgFADgDQADgEAGAAQAKAAACAKQAPgMAUAAQATAAAAAZIgBAGQAAAOgMAAQgMAAAAgMIAAgJQgUADgJASIAAAuQAAAGgDADQgEADgGAAQgFAAgEgEg");
	this.shape_21.setTransform(400,132.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AhABHQgEgDAAgGIAAgLIABgLIAAgQIABgRIgBgRIAAgRIgBgRIgBgQQAAgGAFgEQAFgFAGAAQAGAAAJAMQApA8ApAlIABgOIgBg9IgCgKIAAgKQAAgNANAAQAPAAAAAvIAAAPIgBA5IgCAPQgCAMgLAAQgGAAgJgHQgjgggsg6IgBAdIAAAWIABAWQAAAcgNAAQgIAAgDgFg");
	this.shape_22.setTransform(379.3,130.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgkBAQgZgTAAguIAAgNIABgOIAAgKIAAgLQABgHACgHQAEgIAHAAQAEAAAFADQADADAAAGIAAAQIAAAPIAAAOIgBANQABANACAMQAFAOAHAGQAEADAPAAQAXABAIgrQAFgUAAgoQAAgFADgFQAEgGAIAAQAGAAAEAEQACAEAAAEQAAAlgEAUQgEAfgQAVQgHAJgKAGQgLAHgLAAQgYAAgLgIg");
	this.shape_23.setTransform(364.5,130.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgxA5QgUgRAAgbQAAgeAUgaQAWgdAgAAQAhAAAQAPQAQAOAAAeQAAAfgSAaQgVAdghAAQgbAAgUgQgAgdgbQgOATAAAVQAAAQAMAJQAMAKARAAQAUAAANgUQANgTAAgWQAAgTgJgIQgIgHgWAAQgTAAgPAUg");
	this.shape_24.setTransform(350,130.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AhBBHQgDgDAAgGIABgLIAAgLIABgQIAAgRIAAgRIAAgRIgBgRIgCgQQAAgGAFgEQAFgFAGAAQAGAAAJAMQApA8ApAlIAAgOIgBg9IgBgKIAAgKQgBgNAOAAQAPAAAAAvIgBAPIAAA5IgBAPQgCAMgMAAQgHAAgHgHQgkgggsg6IgBAdIABAWIAAAWQAAAcgOAAQgHAAgEgFg");
	this.shape_25.setTransform(334.7,130.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgqBHQgKgJAAgeIABgkIACgmIgBgJIgBgKQABgOANAAQAEAAADACIAVgDIARgCQAXAAAOAFQAJAEAAAIQAAAFgEAEQgEAEgFAAIgEAAQgPgFgOAAIgOABIgRAEIgBAlIAjgEIAXgCQAFABAEADQAEADAAAGQAAAKgMABIgWACIgmAEIgBATQgBASADACQABACAKAAIARgBIARAAIAGAAIAFgBQAFAAAEADQAFAEAAAGQAAALgLACQgJABgdAAQgeAAgJgIg");
	this.shape_26.setTransform(313.1,130.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgIBEQgFgEAAgFIABgEIAAgEIAAgNIgBgNIgCghIgCgiIgFAAQgVAAgMgDQgKgCAAgKQAAgEADgEQAEgFAGABIAPABIAPABIARAAIAQAAIAVABIAVABQAGAAADADQAEAEAAAFQAAAGgEADQgDAEgGAAIgXgBIgWgBIACAmIACAlIABAJIABAJQAAAHgDAGQgEAHgHAAQgEAAgEgDg");
	this.shape_27.setTransform(300.4,130.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAgA0QgEgKgEgOIgWACIgWABIgPAfQgEAHgHAAQgFAAgEgDQgEgEAAgFQAAgFANgcQgBgCAAgCQAAgFAJgCQANgXAQgYQAXgjAFAAQAKAAAEAMIAFAeIAOA8IAFANQADAIAAAEQAAAFgEAEQgEADgFAAQgHAAgIgSgAgGAIIAMgBIANgBIgGgeIgTAgg");
	this.shape_28.setTransform(286.6,130.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgpA5QgOgPABgUQgBgeAcggQAXgcAXAAIAIABIAFAAQAEgEAGAAQAKAAACALQABAIAAAKQAAAFgCAEQgEAFgGAAQgJAAgEgJQgCgEgBgBQgCgBgGAAQgLAAgPATQgVAYAAAWQAAAKAGAIQAHAHAJAAQAJAAAJgFIAPgJQAGgFAEAAQAGAAAEAEQAEAEAAAFQgBAFgFAEQgZAWgaAAQgUAAgPgPg");
	this.shape_29.setTransform(274,130.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgrBDQgEgDAAgGQAAgFAEgEQAEgEAGABIASgBIAAgrQAAgYACgXIgUABQgGAAgEgEQgEgEAAgFQAAgFAEgDQADgEAFgBIAbAAQARAAAcAEQALABAAAMQAAAFgFAEQgDADgFAAIgXgDQgCASAAAbIAAAqIAZgBQAFAAAEAEQAEAEAAAEQAAAGgEAEQgEADgFAAIgQAAIgQAAIgSADIgSABQgGAAgEgEg");
	this.shape_30.setTransform(262.7,130.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgcBLQgLgCgGgEQgGAAgDgEQgEgEAAgFIABgcIABgcIgBgdIAAgfQAAgFAEgGQAFgFAGAAQADAAAMAGIASAIQAZAJAUASQAXAWAAAaQAAAQgIAOQgIAPgOAJQgPAKgbAAQgHAAgIgCgAggAvQAEADAEABIALABQATAAAJgGQAIgFAFgJQAFgJAAgKQAAgWgbgRQgIgFgegNg");
	this.shape_31.setTransform(251.2,130.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgqBHQgKgJAAgeIABgkIACgmIgBgJIgBgKQAAgOANAAQAFAAADACIAVgDIARgCQAXAAAOAFQAJAEAAAIQAAAFgEAEQgEAEgFAAIgEAAQgPgFgOAAIgOABIgRAEIgBAlIAjgEIAWgCQAGABAEADQAEADAAAGQAAAKgMABIgWACIgmAEIgBATQAAASACACQABACAKAAIARgBIARAAIAGAAIAFgBQAFAAAEADQAFAEAAAGQAAALgLACQgKABgcAAQgeAAgJgIg");
	this.shape_32.setTransform(238.3,130.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgyBFQgEgDABgGIAAgUIAAgVIAAhKQAAgGADgFQAGgGAIAAIAXACQANACAIAEQAnAUAAAeQABAMgJAIQgIAJgRAHQAZAOANAOQADAEAAAEQAAAFgFAEQgDAEgGAAQgEAAgFgEQgcgagggLIABAeQAAAGgEADQgEAEgGAAQgFAAgEgEgAgcADIAEAAQAXAAAKgFQAEgCAFgEQADgEAAgCQABgLgNgJQgMgJgOgCIgLgBg");
	this.shape_33.setTransform(226.2,130.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgpBGQgEgDAAgFIAAgaIACgpIACgrQAAgYAOABIAIgCIAOAAQARAAAQAMQASANAAATQAAAYgTANQgRAMgWAAIgIgBIAAArQAAAFgEADQgDAEgFAAQgGAAgDgEgAgQgkIgCAgIAGABQAOAAAJgHQAKgHAAgMQAAgIgJgGQgJgGgKAAIgFAAIgEAAIAAANg");
	this.shape_34.setTransform(214.9,130);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgfAoQgPgMAAgVQAAgWALgRQAOgSAWAAQARAAAKAFQAPAHAAAPQAAAKgMAIQgFAEgQAGIgeANQAEAFAHADQAGACAHAAQAMAAAKgFQAHgFAEAAQALAAgBAKQAAAKgPAHQgNAGgPAAQgVAAgOgLgAgMgVQgGAFgEAMIAVgJQAMgGAHgFQgGgDgLAAQgHAAgGAGg");
	this.shape_35.setTransform(196.2,132.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAWBEQgDgIgBgNIgCgWIABgHIAAgHIAAgIQgCgEgEAAQgKAAgHAIQgFAFgGANQAAAigEAHQgDAHgJAAQgEAAgFgDQgEgDAAgGIACgFIABgZIAAg9IAAgDIABgOIgBgJIgBgIQAAgGADgDQAEgDAFAAQAKAAADAJQACAGAAAMIgBASIAAASQAGgGAIgEQAHgDAIAAQAQAAAIAJQAEAHABANIABAWIADATIADASIAAADQAAAFgDAEQgFADgFAAQgKAAgCgJg");
	this.shape_36.setTransform(185.6,130.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgIBBQgEgEAAgFIAAgKIABgKIgCgvIgRgBQgMgCAAgKQAAgGAEgDQADgEAGAAIAPABIAAgKIAAgJQAAgFADgDQAEgEAGAAQAMAAAAAXIAAAIIAKgBIAOABQAIADAAAJQAAAFgEAEQgEADgFAAIgFAAIgEAAIgJABIABAwIAAAEIABAFQAAAWgOAAQgEAAgEgDg");
	this.shape_37.setTransform(175.5,131);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAZBGQgGAEgGABQgHABgHAAQgUAAgOgNQgOgOAAgVQAAgZAOgOQAOgPAWAAQAHAAAFABQAGACAEADQABggABgMQACgLALAAQAFAAAEADQADAEAAAFIgCApIgCAnQAAAhACALIAAADQAAAFgEAEQgDADgFAAQgHAAgEgGgAgSAEQgHAIAAAQQAAAKAHAHQAIAHAJAAQAGAAAFgBIAIgGIADgDIAAgiQgDgGgFgCQgFgDgGAAQgOAAgGAHg");
	this.shape_38.setTransform(157.1,130);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AATArIgCgTIgCgTIAAgIIABgIIAAgEIAAgDQAAgJgEAAQgIAAgGALQgIAKgFAOIAAAJIgBAJIAAAIIgBAIQAAAFgDAEQgEADgGAAQgFAAgEgDQgDgEgBgFIAAgIIgBgIIABgaIACgYIgBgIIAAgIQAAgGAEgDQAEgEAFAAQANAAAAAPIAAABQAOgOAOAAQARAAAHAPQAFAJAAAUIAAAHIAAAFQAAAHACAMQABALAAAHQAAAFgDAEQgEADgFAAQgMAAgBgLg");
	this.shape_39.setTransform(146.8,132.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAWArIgPAGQgGACgEAAQgWAAgLgMQgMgMAAgYQAAgVARgQQARgQAVAAQAJAAAMAFQAOAGAAAIQAAAEgCACIgBAJIgBANQAAAQACAIIAFAKIAEAJQgBAEgDAEQgEADgFAAQgEAAgKgIgAgMgSQgKAKAAAMQABAMAEAHQAEAGAJAAQAFAAAFgCQAGgCAEgEQgDgVAAgKIAAgHIABgJIgCgBIgDAAQgMAAgJAJg");
	this.shape_40.setTransform(136.5,132.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgqBHQgKgJAAgeIACgkIABglIgBgKIAAgJQgBgPANAAQAEAAAEACIAVgDIARgCQAXAAAOAFQAJAEAAAJQAAAEgEAEQgEAEgFAAIgEAAQgPgEgOAAIgOABIgRADIgBAkIAjgDIAWgBQAGAAAEADQAEAEAAAFQAAAKgMABIgWADIgmADIgBATQAAASACACQABACAKAAIARgBIARAAIAGAAIAFgBQAFAAAEAEQAFADAAAGQAAALgLABQgKACgcAAQgeAAgJgIg");
	this.shape_41.setTransform(481.3,101.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgTBCQgLgbgOgyIgIgZQgGgSAAgHQAAgEAFgFQAEgDAFAAQAJAAADAJIAEARIAJAdQAHAaAHAUIAVg3IAHgWQAGgNAHgHQADgFAHAAQAFAAAEAEQADADAAAGQAAADgCAEQgFAHgEAKIgHATIgZA/QgEAMgGALQgEAHgHAAQgJAAgEgJg");
	this.shape_42.setTransform(468.8,102);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgrBDQgEgEAAgEQAAgGAEgDQAEgFAGAAIASgBIAAgpQAAgZABgXIgTABQgGAAgEgEQgEgDAAgGQAAgFAEgDQADgEAFgBIAcAAQAQAAAcAEQALABAAALQAAAHgEADQgEADgEAAIgYgDQgCARAAAbIAAAqIAZAAQAGAAAEADQADAFAAAEQAAAGgDADQgEAEgGAAIgQABIgQAAIgSACIgSABQgGAAgEgEg");
	this.shape_43.setTransform(457,102);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgIBEQgFgEAAgFIABgEIAAgEIAAgNIgBgNIgCghIgCgiIgFAAQgVAAgMgDQgKgCAAgKQAAgEADgEQAEgFAGABIAPABIAPABIARAAIAQAAIAVABIAVABQAGAAADADQAEAEAAAFQAAAGgEADQgDAEgGAAIgXgBIgWgBIACAmIACAlIABAJIABAJQAAAHgDAGQgEAHgHAAQgEAAgEgDg");
	this.shape_44.setTransform(445.4,101.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgoA5QgPgPAAgUQAAgeAcggQAXgcAXAAIAHABIAGAAQAEgEAGAAQAJAAACALQADAIAAAKQAAAFgEAEQgDAFgHAAQgIAAgEgJQgCgEgCgBQgBgBgGAAQgMAAgOATQgWAYAAAWQAAAKAHAIQAHAHAKAAQAIAAAKgFIANgJQAHgFAFAAQAFAAAEAEQADAEAAAFQAAAFgEAEQgaAWgZAAQgWAAgNgPg");
	this.shape_45.setTransform(432.9,101.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgqBHQgLgJAAgeIACgkIADglIgCgKIgBgJQAAgPAOAAQAEAAADACIAVgDIARgCQAXAAAOAFQAIAEABAJQgBAEgCAEQgEAEgGAAIgEAAQgPgEgOAAIgOABIgRADIgBAkIAjgDIAXgBQAFAAAEADQAEAEAAAFQAAAKgMABIgWADIgnADIgBATQABASACACQABACALAAIAQgBIARAAIAFAAIAGgBQAGAAAEAEQADADAAAGQAAALgKABQgJACgcAAQgfAAgJgIg");
	this.shape_46.setTransform(421.3,101.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgnBAQgUgNABgSQAAgPAMAAQAOAAAAAPQgBAFAKAGQAJAHAJAAQADAAABgNIABgdQACgUAAgfIgBgGIgBAAIgLAAIgKgBQgGAAgDgDQgFgEAAgFQAAgNARAAIAJAAIAJAAIARAAIARgBQAaAAAAAOQgBAFgDAEQgDAEgHAAIgEAAIgHgBIgHAAIAAAHQAABBgKAfQgGAWgRAAQgRAAgRgMg");
	this.shape_47.setTransform(408.9,102.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgcBLQgLgCgGgEQgGAAgDgEQgEgEAAgFIAAgcIACgcIgBgdIgBgfQABgFAFgGQAEgFAGAAQADAAANAGIARAIQAaAJATASQAXAWAAAaQAAAQgIAOQgIAPgOAJQgPAKgbAAQgHAAgIgCgAggAvQAEADAEABIALABQATAAAJgGQAIgFAFgJQAFgJAAgKQAAgWgbgRQgIgFgegNg");
	this.shape_48.setTransform(396,101.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAgA1QgEgLgEgOIgWABIgWACIgPAgQgEAGgHAAQgFAAgEgEQgEgDAAgFQAAgFANgbQgBgDAAgDQAAgEAJgDQANgVAQgZQAXgjAFAAQAKAAAEAMIAFAeIAOA8IAFANQADAHAAAEQAAAGgEADQgEAEgFAAQgHgBgIgQgAgGAJIAMgCIANgBIgGgfIgTAig");
	this.shape_49.setTransform(381.7,102);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgqBHQgLgJABgeIACgkIABglIAAgKIgBgJQgBgPANAAQAEAAAEACIAUgDIASgCQAXAAAOAFQAJAEgBAJQAAAEgDAEQgDAEgGAAIgEAAQgPgEgOAAIgOABIgRADIgBAkIAkgDIAVgBQAGAAAEADQAEAEAAAFQAAAKgMABIgWADIgmADIgCATQAAASADACQABACAKAAIARgBIARAAIAFAAIAGgBQAGAAADAEQAEADABAGQAAALgLABQgKACgcAAQgeAAgJgIg");
	this.shape_50.setTransform(360.9,101.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgIBEQgFgEAAgFIABgEIAAgEIAAgNIgBgNIgCghIgCgiIgFAAQgVAAgMgDQgKgCAAgKQAAgEADgEQAEgFAGABIAPABIAPABIARAAIAQAAIAVABIAVABQAGAAADADQAEAEAAAFQAAAGgEADQgDAEgGAAIgXgBIgWgBIACAmIACAlIABAJIABAJQAAAHgDAGQgEAHgHAAQgEAAgEgDg");
	this.shape_51.setTransform(348.2,101.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAgA1QgEgLgEgOIgWABIgWACIgPAgQgEAGgHAAQgFAAgEgEQgEgDAAgFQAAgFANgbQgBgDAAgDQAAgEAJgDQANgVAQgZQAXgjAFAAQAKAAAEAMIAFAeIAOA8IAFANQADAHAAAEQAAAGgEADQgEAEgFAAQgHgBgIgQgAgGAJIAMgCIANgBIgGgfIgTAig");
	this.shape_52.setTransform(334.5,102);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgpA5QgOgPAAgUQAAgeAcggQAXgcAXAAIAIABIAFAAQAEgEAGAAQAJAAADALQACAIAAAKQAAAFgEAEQgDAFgHAAQgIAAgEgJQgCgEgBgBQgCgBgGAAQgMAAgOATQgVAYgBAWQABAKAGAIQAHAHAKAAQAIAAAKgFIAOgJQAGgFAFAAQAFAAAEAEQAEAEgBAFQAAAFgEAEQgaAWgZAAQgWAAgOgPg");
	this.shape_53.setTransform(321.9,101.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgrBDQgEgEAAgEQAAgGAEgDQAEgFAGAAIASgBIgBgpQAAgZACgXIgUABQgFAAgEgEQgEgDAAgGQAAgFAEgDQADgEAFgBIAbAAQARAAAcAEQALABAAALQAAAHgEADQgEADgEAAIgZgDQgBARAAAbIAAAqIAZAAQAGAAADADQAEAFAAAEQAAAGgEADQgDAEgGAAIgQABIgQAAIgSACIgTABQgFAAgEgEg");
	this.shape_54.setTransform(310.6,102);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgdBLQgKgCgGgEQgGAAgDgEQgEgEAAgFIAAgcIABgcIAAgdIgBgfQAAgFAGgGQAEgFAGAAQADAAANAGIARAIQAaAJATASQAXAWAAAaQAAAQgIAOQgIAPgOAJQgPAKgbAAQgHAAgJgCgAggAvQAEADAEABIALABQATAAAIgGQAJgFAFgJQAFgJgBgKQAAgWgagRQgIgFgegNg");
	this.shape_55.setTransform(299,101.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgqBHQgLgJAAgeIADgkIACglIgBgKIgBgJQAAgPAMAAQAEAAAEACIAUgDIASgCQAXAAAOAFQAIAEAAAJQAAAEgDAEQgDAEgGAAIgEAAQgPgEgOAAIgOABIgRADIgBAkIAkgDIAVgBQAGAAAEADQAEAEAAAFQAAAKgMABIgWADIgnADIgBATQAAASADACQABACALAAIAQgBIARAAIAFAAIAGgBQAGAAADAEQAEADAAAGQABALgLABQgKACgcAAQgeAAgJgIg");
	this.shape_56.setTransform(286.1,101.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgyBFQgEgDAAgGIAAgUIABgVIAAhKQAAgGAEgFQAEgGAJAAIAXACQANACAIAEQAoAUAAAeQgBAMgHAIQgJAJgRAHQAZAOAMAOQADAEABAEQgBAFgEAEQgDAEgGAAQgFAAgEgEQgcgaghgLIABAeQABAGgEADQgEAEgFAAQgGAAgEgEgAgcADIAEAAQAXAAAKgFIAIgGQAFgEAAgCQgBgLgNgJQgLgJgOgCIgLgBg");
	this.shape_57.setTransform(274.1,101.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgpBGQgEgDAAgFIAAgaIACgpIACgrQAAgYAOABIAIgCIAOAAQARAAAQAMQASANAAATQAAAYgTANQgRAMgWAAIgIgBIAAArQAAAFgEADQgDAEgFAAQgGAAgDgEgAgQgkIgCAgIAGABQAOAAAJgHQAKgHAAgMQAAgIgJgGQgJgGgKAAIgFAAIgEAAIAAANg");
	this.shape_58.setTransform(262.8,101.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgfAoQgQgMAAgVQAAgWANgRQAOgSAWAAQAQAAALAFQANAHAAAPQAAAKgLAIQgFAEgPAGIgfANQAEAFAGADQAHACAHAAQAMAAAJgFQAIgFAFAAQAKAAAAAKQAAAKgQAHQgNAGgPAAQgVAAgOgLgAgMgVQgGAFgEAMIAVgJQAMgGAHgFQgGgDgKAAQgIAAgGAGg");
	this.shape_59.setTransform(244,104.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAWBEQgDgIgBgNIgCgWIAAgHIAAgHIAAgIQgBgEgDAAQgKAAgIAIQgEAFgIANQABAigEAHQgEAHgHAAQgGAAgDgDQgFgDAAgGIABgFIABgZIAAg9IAAgDIACgOIgCgJIgBgIQAAgGAFgDQADgDAGAAQAIAAAEAJQABAGAAAMIAAASIgBASQAIgGAHgEQAHgDAJAAQAQAAAGAJQAGAHABANIAAAWIACATIAEASIAAADQAAAFgEAEQgEADgFAAQgJAAgDgJg");
	this.shape_60.setTransform(233.5,101.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgIBBQgEgEAAgFIAAgKIABgKIgCgvIgRgBQgMgCAAgKQAAgGAEgDQADgEAGAAIAPABIAAgKIAAgJQAAgFADgDQAEgEAGAAQAMAAAAAXIAAAIIAKgBIAOABQAIADAAAJQAAAFgEAEQgEADgFAAIgFAAIgEAAIgJABIABAwIAAAEIABAFQAAAWgOAAQgEAAgEgDg");
	this.shape_61.setTransform(223.4,102.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgfAoQgQgMAAgVQABgWAMgRQAOgSAWAAQAQAAALAFQAOAHgBAPQAAAKgLAIQgFAEgPAGIgfANQAFAFAFADQAHACAHAAQANAAAIgFQAIgFAFAAQAJAAABAKQAAAKgQAHQgNAGgPAAQgVAAgOgLgAgMgVQgGAFgEAMIAVgJQALgGAIgFQgHgDgJAAQgIAAgGAGg");
	this.shape_62.setTransform(205.2,104.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgaAxQgNgGAAgKQAAgJALAAQAEAAAIADQAIACAEAAQASAAAAgHQAAgFgNgGIgXgLQgNgJAAgNQAAgTATgGQAMgEAXAAQAJAAAEACQAHADAAAJQAAARgJAAQgKAAgCgIIgHgBQgVAAAAAHQAAADAMAGQASAJAHAEQANAJAAANQAAAPgPAJQgMAGgQAAQgMAAgLgDg");
	this.shape_63.setTransform(195.3,104);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AATAuQgMAFgMgBQgNABgJgGQgKgGgCgNQgEgXAAgRQAAgMADgPQACgLAKAAQAGAAAEADQADAEAAAFIgBANIgBANIABAWIACAPIAFADIAEAAQAJAAANgDIAAgRIgBgOQAAgTACgOQACgLALAAQAFAAAEADQAEAEAAAFIgCAhIAAASIAAASIABAGIAAAGQAAAFgEADQgEAEgFAAQgIAAgDgHg");
	this.shape_64.setTransform(185.7,104.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAXArIgQAGQgGACgDAAQgXAAgLgMQgLgMAAgXQAAgWAQgQQAQgQAWAAQAKAAALAFQAOAGAAAIQAAADgCACIgCAKIAAANQAAARADAHIAEAKIAEAJQgBAEgEAEQgDADgFAAQgEAAgJgIgAgMgSQgJAKAAAMQgBANAFAGQAEAGAJAAQAFAAAFgCQAGgCAEgDQgDgWAAgKIABgIIABgIIgEgBIgCAAQgLgBgKAKg");
	this.shape_65.setTransform(175.7,104.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgcAoQgPgMAAgUQAAgRANgUQAPgWATAAQAJAAANAFQAQAGAAAJQAAAEgDAEQgEADgFAAQgEAAgFgEQgGgEgLAAQgGAAgJAOQgIANAAAJQAAAKAHAGQAHAFAKAAQAGAAAJgFQAJgFADAAQAFAAADAEQAEAEAAAEQAAAHgQAIQgOAGgJAAQgUAAgNgMg");
	this.shape_66.setTransform(165.3,104.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgfAoQgQgMAAgVQABgWALgRQAOgSAXAAQAQAAALAFQAOAHgBAPQAAAKgLAIQgFAEgPAGIgfANQAFAFAFADQAHACAHAAQANAAAIgFQAIgFAFAAQAJAAABAKQAAAKgQAHQgNAGgPAAQgVAAgOgLgAgMgVQgGAFgEAMIAVgJQALgGAIgFQgHgDgJAAQgIAAgGAGg");
	this.shape_67.setTransform(155.2,104.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgbBGQgDAEgFAAQgFAAgEgEQgDgDAAgFIAAgGIAAgHIAAhpQAAgGADgFQAEgHAHAAQAKAAAAAKIgBAFIAAADIAAAkQAHgEAGgCIALgCQAWAAAOAQQAMAOAAAVQAAAWgOAOQgPAQgVAAQgNAAgMgFgAgKgBQgGABgIAGIAAAnQANAGAJAAQALAAAHgIQAIgIAAgMQAAgMgGgIQgHgHgLAAQgEAAgGADg");
	this.shape_68.setTransform(144.4,101.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgaAxQgNgGAAgKQAAgJALAAQAEAAAIADQAIACAEAAQASAAAAgHQAAgFgNgGIgXgLQgNgJAAgNQAAgTATgGQAMgEAXAAQAJAAAEACQAHADAAAJQAAARgJAAQgKAAgCgIIgHgBQgVAAAAAHQAAADAMAGQASAJAHAEQANAJAAANQAAAPgPAJQgMAGgQAAQgMAAgLgDg");
	this.shape_69.setTransform(467.1,75.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgfAoQgPgMAAgVQAAgWAMgRQANgSAWAAQARAAAKAFQAPAHAAAPQAAAKgMAIQgFAEgQAGIgeANQAEAFAHADQAGACAHAAQAMAAAKgFQAHgFAEAAQALAAgBAKQAAAKgPAHQgNAGgPAAQgVAAgOgLgAgMgVQgGAFgEAMIAVgJQAMgGAHgFQgGgDgLAAQgHAAgGAGg");
	this.shape_70.setTransform(457.2,75.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgvA7QAAgFAEgDQACgDAGAAIAMABQAHACAHAAQAMAAAHgIQAGgJACgSQgFAFgGADQgGACgGAAQgTAAgLgMQgLgMAAgSQAAgZAPgQQAQgQAaAAQAIAAAHACQAGADAEAEQAMABAAANQAAAGgCALQgEAWAAAXQgCAegJANQgMATgdAAQglAAAAgPgAgOgpQgHAJAAAPQAAALAEAGQAEAEAIAAQAHAAAIgIQAHgIABgIIAEgcIgGgDIgGgBQgPAAgJALg");
	this.shape_71.setTransform(446.8,78.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AATArIgCgUIgCgTIAAgHIABgIIAAgEIAAgDQAAgJgEABQgIAAgGAKQgIAKgFAPIAAAIIgBAJIAAAIIgBAHQAAAGgDADQgEAEgGAAQgGAAgDgEQgDgDgBgGIAAgHIgBgIIABgZIACgZIgBgIIAAgJQAAgFAEgEQAEgDAFAAQANAAAAAPIAAABQAOgOAOAAQARAAAHAPQAFAKAAATIAAAHIAAAFQAAAHACALQABAMAAAHQAAAFgDADQgEAEgFAAQgMAAgBgLg");
	this.shape_72.setTransform(437,75.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAWArIgPAGQgGACgEAAQgWAAgLgMQgMgMAAgXQAAgWARgQQARgQAVAAQAJAAAMAFQAOAGAAAIQAAADgCADIgBAJIgBANQAAARACAHIAFAKIADAJQABAFgEADQgEADgFAAQgEAAgKgIgAgMgSQgKAKAAAMQABAMAEAHQAEAGAJAAQAFAAAFgCQAGgCAEgDQgDgWAAgLIAAgHIABgIIgCgBIgDgBQgMAAgJAKg");
	this.shape_73.setTransform(426.7,75.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AAWBEQgDgIgBgNIgCgWIABgHIAAgHIAAgIQgCgEgEAAQgKAAgHAIQgFAFgGANQAAAigEAHQgEAHgIAAQgEAAgFgDQgEgDAAgGIACgFIABgZIAAg9IAAgDIABgOIgBgJIgBgIQAAgGADgDQAEgDAFAAQAKAAADAJQACAGAAAMIgBASIAAASQAGgGAIgEQAHgDAIAAQAQAAAIAJQAEAHABANIABAWIADATIADASIAAADQAAAFgDAEQgFADgFAAQgKAAgCgJg");
	this.shape_74.setTransform(416,73.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgcAoQgPgMAAgUQAAgRANgUQAPgWATAAQAJAAANAFQAQAGAAAJQAAAEgDAEQgEADgFAAQgEAAgFgEQgGgEgLAAQgGAAgJAOQgIANAAAJQAAAKAHAGQAHAFAKAAQAGAAAJgFQAJgFADAAQAFAAADAEQAEAEAAAEQAAAHgQAIQgOAGgJAAQgUAAgNgMg");
	this.shape_75.setTransform(405.3,75.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgHA2QgEgEAAgFQAAgLgCgUIgCgeIgBgKQgLAGgLAPIgCACIAAAcIAAAHIAAAHQAAAFgEADQgEACgGAAQgHAAgDgGQgCgFAAgKIAAgiIgBgNIAAgOQAAgIADgHQAEgIAGAAQAFAAAEAEQAFAEAAAFIgBAIQAOgRAMAAQAPAAAFALQAGgFAHgCQAHgDAIAAQASAAAGASQACAEACAVIAHAyQAAAFgEADQgEAEgFAAQgLAAgCgLIgDgbIgDgaQgDgRgDAAQgDAAgHAFQgIAEgDADQAAALACASQADAVAAAKQAAAFgEAEQgDADgGAAQgFAAgDgDg");
	this.shape_76.setTransform(385.2,75.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgkAxQgDgEAAgFIAAg8IABgJIAAgIQAAgFACgEQAEgDAFAAQALAAACAKQAPgMAUAAQATAAAAAZIAAAGQgBAPgMAAQgMAAAAgNIAAgJQgUADgJATIAAAtQAAAGgEADQgDADgGAAQgGAAgDgDg");
	this.shape_77.setTransform(373.2,75.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgeAnQgNgNgBgVQAAgUALgQQAPgTAYAAQASAAALAPQAKANAAAUQAAAVgLAPQgNARgVAAQgRAAgNgMgAgMgPQgGAJAAALQAAALAGAGQAFAEAHAAQAHAAAGgFQAHgHAAgKQABgdgQAAIgCAAQgJAAgGAKg");
	this.shape_78.setTransform(363.3,75.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgRBOQgDgDAAgFIAAgDQACgNAAgLIAAguIgHABIgEAAQgGAAgEgDQgEgDAAgGQAAgIAJgDIAQgCIACgKQACgVAJgKQAKgNAWAAQARAAAAANQAAAMgQAAQgLAAgFAIQgEAFgBANIgBACIASgBQARAAABAMQAAAMgTAAIgRABIAAAYIAAAZQAAARgCAKQgCAKgKAAQgFAAgEgEg");
	this.shape_79.setTransform(353.5,73.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgHA2QgEgEAAgFQAAgLgCgUIgCgeIgBgKQgLAGgLAPIgCACIAAAcIAAAHIAAAHQAAAFgEADQgEACgGAAQgHAAgDgGQgCgFAAgKIAAgiIgBgNIAAgOQAAgIADgHQAEgIAGAAQAFAAAEAEQAFAEAAAFIgBAIQAOgRAMAAQAPAAAFALQAGgFAHgCQAHgDAIAAQASAAAGASQACAEACAVIAHAyQAAAFgEADQgEAEgFAAQgLAAgCgLIgDgbIgDgaQgDgRgDAAQgDAAgHAFQgIAEgDADQAAALACASQADAVAAAKQAAAFgEAEQgDADgGAAQgFAAgDgDg");
	this.shape_80.setTransform(333.4,75.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AAWArIgOAGQgHACgEAAQgWAAgLgMQgMgMAAgXQAAgWARgQQAQgQAXAAQAIAAAMAFQAOAGAAAIQAAADgCADIgCAJIAAANQAAARACAHIAFAKIADAJQAAAFgDADQgEADgFAAQgEAAgKgIgAgMgSQgKAKAAAMQABAMAEAHQAFAGAIAAQAFAAAFgCQAGgCAEgDQgDgWAAgLIAAgHIABgIIgDgBIgCgBQgMAAgJAKg");
	this.shape_81.setTransform(320.6,75.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgkAxQgDgEAAgFIAAg8IAAgJIAAgIQAAgFADgEQAEgDAFAAQALAAACAKQAPgMAUAAQATAAAAAZIAAAGQgBAPgMAAQgMAAAAgNIgBgJQgTADgJATIAAAtQAAAGgEADQgEADgFAAQgGAAgDgDg");
	this.shape_82.setTransform(310.9,75.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgvA7QAAgFADgDQADgDAGAAIAMABQAIACAFAAQAOAAAGgIQAGgJABgSQgEAFgGADQgGACgGAAQgSAAgMgMQgMgMAAgSQAAgZAQgQQAPgQAbAAQAIAAAHACQAGADAEAEQAMABAAANQAAAGgCALQgEAWAAAXQgBAegJANQgNATgeAAQgkAAAAgPgAgNgpQgIAJAAAPQAAALAEAGQAEAEAJAAQAGAAAIgIQAHgIABgIIAEgcIgGgDIgGgBQgPAAgIALg");
	this.shape_83.setTransform(301,78.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AAWArIgPAGQgGACgEAAQgWAAgLgMQgMgMAAgXQAAgWARgQQARgQAVAAQAJAAAMAFQAOAGAAAIQAAADgCADIgBAJIgBANQAAARACAHIAFAKIADAJQAAAFgDADQgEADgFAAQgEAAgKgIgAgMgSQgKAKAAAMQABAMAEAHQAEAGAJAAQAFAAAFgCQAGgCAEgDQgDgWAAgLIAAgHIABgIIgCgBIgDgBQgMAAgJAKg");
	this.shape_84.setTransform(290.8,75.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgLBEQgDgEgBgFIAAgRIAAgRIABgVIABgUQAAgGAEgDQADgDAGAAQAEAAAEADQADADAAAGIgBAUIgBAVIABARIAAARQAAAFgDAEQgEADgEAAQgGAAgEgDgAgIguQgEgFAAgFQAAgGAEgEQAFgEAEAAQAGAAAFAEQAEAEAAAGQAAAFgEAFQgFADgGAAQgEAAgFgDg");
	this.shape_85.setTransform(283,73.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AAZBGQgGAEgGABQgHABgHAAQgUAAgOgNQgOgOAAgVQAAgZAOgOQAOgPAWAAQAHAAAGABQAFACAEADQABggABgMQACgLALAAQAGAAADADQADAEAAAFIgCApIgCAnQAAAhACALIAAADQAAAFgEAEQgDADgFAAQgHAAgEgGgAgSAEQgHAIAAAQQAAAKAHAHQAHAHAKAAQAHAAADgBIAJgGIADgDIAAgiQgDgGgFgCQgFgDgGAAQgNAAgHAHg");
	this.shape_86.setTransform(274.4,73);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgfAoQgPgMAAgVQgBgWAMgRQAPgSAVAAQARAAAKAFQAOAHABAPQAAAKgMAIQgFAEgQAGIgeANQAFAFAFADQAHACAHAAQAMAAAKgFQAHgFAEAAQAKAAAAAKQAAAKgPAHQgNAGgPAAQgVAAgOgLgAgMgVQgGAFgEAMIAVgJQALgGAIgFQgHgDgKAAQgHAAgGAGg");
	this.shape_87.setTransform(255.3,75.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AAWBEQgCgIgCgNIgCgWIABgHIAAgHIAAgIQgBgEgFAAQgKAAgHAIQgFAFgGANQgBAigDAHQgDAHgJAAQgEAAgFgDQgEgDAAgGIACgFIABgZIAAg9IAAgDIAAgOIAAgJIgBgIQAAgGADgDQAEgDAFAAQAKAAADAJQABAGABAMIgBASIAAASQAGgGAIgEQAHgDAIAAQAQAAAIAJQAEAHABANIACAWIACATIADASIAAADQAAAFgDAEQgFADgFAAQgJAAgDgJg");
	this.shape_88.setTransform(244.8,73.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgIBEQgFgEAAgFIABgEIAAgEIAAgNIgBgNIgCghIgCgiIgFAAQgVAAgMgDQgKgCAAgKQAAgEADgEQAEgFAGABIAPABIAPABIARAAIAQAAIAVABIAVABQAGAAADADQAEAEAAAFQAAAGgEADQgDAEgGAAIgXgBIgWgBIACAmIACAlIABAJIABAJQAAAHgDAGQgEAHgHAAQgEAAgEgDg");
	this.shape_89.setTransform(232.6,73.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgMAZQAAgFAEgEQAEgDAEAAQAOAAAAAVQAAAFgDAEQgEAEgGgBQgNAAAAgVgAgJgTQgDgDAAgGIgBgCIAAgEQAAgFADgEQAFgDAFAAQANABAAARQAAAGgEADQgDAEgGAAQgFAAgEgEg");
	this.shape_90.setTransform(213.7,74.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgqBHQgLgJAAgeIADgkIACgmIgBgJIgBgKQAAgOAMAAQAEAAAEADIAUgFIASgBQAXAAAOAGQAJACgBAJQAAAFgCAEQgEAEgGAAIgEgBQgPgDgOAAIgOAAIgRAEIgBAkIAkgDIAVgBQAGAAAEADQAEADAAAGQAAAKgMACIgWACIgnADIgBATQAAASADADQABABALAAIAQAAIARAAIAFgBIAGAAQAGAAADADQAEADAAAGQABAKgLACQgKACgcAAQgeAAgJgIg");
	this.shape_91.setTransform(203.8,73.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgIBEQgFgEAAgFIABgEIAAgEIAAgNIgBgNIgCghIgCgiIgFAAQgVAAgMgDQgKgCAAgKQAAgEADgEQAEgFAGABIAPABIAPABIARAAIAQAAIAVABIAVABQAGAAADADQAEAEAAAFQAAAGgEADQgDAEgGAAIgXgBIgWgBIACAmIACAlIABAJIABAJQAAAHgDAGQgEAHgHAAQgEAAgEgDg");
	this.shape_92.setTransform(191.1,73.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgxA5QgUgQAAgcQAAgeAUgaQAWgdAgAAQAhAAAQAPQAQAPAAAdQAAAfgSAZQgVAeghAAQgbAAgUgQgAgdgbQgOATAAAVQAAAQAMAKQAMAJARAAQAUAAANgUQANgSAAgXQAAgTgJgIQgIgHgWAAQgTAAgPAUg");
	this.shape_93.setTransform(176.8,73.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AhABHQgEgDAAgGIAAgLIABgLIAAgQIABgRIgBgRIAAgRIgBgRIgBgQQAAgGAFgEQAFgFAGAAQAGAAAJAMQApA8ApAlIABgOIgBg9IgCgKIAAgKQAAgNANAAQAPAAAAAvIAAAPIgBA5IgCAPQgCAMgLAAQgGAAgJgHQgjgggsg6IgBAdIAAAWIABAWQAAAcgNAAQgIAAgDgFg");
	this.shape_94.setTransform(161.5,73.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(160));

	// Layer 7
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(334.6,224.1,1.448,1.31,0,0,0,45,12.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(51).to({_off:false},0).wait(109));

	// Layer 8
	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgjBdQgFAEgGAAQgHAAgFgEQgFgEABgHIAAgJIAAgJIAAiJQAAgJAEgHQAFgJAJAAQANAAAAAPIgBAFIAAAFIAAAvQAJgFAIgDQAJgCAHAAQAcAAASAUQARATAAAcQgBAcgSAUQgVAUgbAAQgRAAgPgGgAgNgCQgJADgKAHIAAA0QARAIAMAAQAOAAAKgLQAKgKAAgQQAAgQgIgKQgIgKgOAAQgGAAgIADg");
	this.shape_95.setTransform(342.8,273.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgvBAQgFgFAAgHIAAhPIABgLIAAgLQAAgHAFgFQADgEAIAAQAOAAACAOQAVgQAaAAQAZAAgBAgIAAAIQgBATgQAAQgPAAAAgQIgBgMQgaAEgMAYIAAA8QAAAHgFAFQgEAEgIAAQgHAAgEgEg");
	this.shape_96.setTransform(329.6,276.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgpA1QgVgPABgdQAAgeAQgVQASgXAeAAQAVAAAOAGQATAKgBASQAAAOgPAKQgHAFgUAIIgoATQAGAFAIAEQAIADAKAAQARAAAKgHQALgGAGABQANAAAAAMQgBANgUAKQgRAGgTAAQgcAAgTgNgAgPgcQgJAHgFAPIAcgLQAPgIAKgHQgIgEgNAAQgLAAgHAIg");
	this.shape_97.setTransform(316.1,276.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgSA2IgnhhQgCgEgBgDQAAgHAGgEQAFgFAHAAQAKAAAFAJQAHAQAUA1IARgpIAKgaQAGgKAKAAQAGAAAGAEQAFAFABAGQgBAFgTAsIgaA2QgBAGgEAEQgFAEgFAAQgMAAgGgNg");
	this.shape_98.setTransform(303.5,276.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FF3FFF").s().p("AgpA1QgVgPABgcQAAgfAQgVQASgXAeAAQAVAAAOAGQATAKgBASQAAAOgPAKQgHAFgUAIIgoATQAGAFAIAEQAIADAKAAQARAAAKgHQALgGAGABQANAAAAALQgBAOgUAKQgRAGgTAAQgcAAgTgNgAgPgcQgJAHgFAPIAcgLQAPgIAKgHQgIgEgNAAQgLAAgHAIg");
	this.shape_99.setTransform(501.5,273.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FF3FFF").s().p("AgSA2IgnhhQgCgEgBgDQAAgHAGgEQAFgFAHAAQAKAAAFAJQAHAQAUA1IARgpIAKgaQAGgKAKAAQAGAAAGAEQAFAFABAGQgBAFgTAsIgaA2QgBAGgEAEQgFAEgFAAQgMAAgGgNg");
	this.shape_100.setTransform(488.9,273.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FF3FFF").s().p("AgPBZQgEgFAAgHIgBgWIAAgXIABgbIABgaQAAgHAFgFQAFgEAHAAQAGAAAFAEQAFAFAAAHIgBAaIgCAbIABAXIAAAWQAAAHgEAFQgFAEgHAAQgHAAgFgEgAgLg9QgFgFAAgIQAAgIAFgFQAGgFAHAAQAIAAAGAFQAFAFAAAIQAAAIgFAFQgGAFgIAAQgHAAgGgFg");
	this.shape_101.setTransform(479.4,270.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FF3FFF").s().p("AgKBVQgGgEAAgHIABgNIAAgNIgCg/IgXgCQgPgBAAgOQAAgHAEgFQAFgFAHAAIAVACIAAgNIgBgMQAAgHAFgFQAFgEAHAAQARAAAAAeIAAAKIAMgBQAOAAAFACQAKADAAAMQAAAHgFAEQgEAFgIAAIgGAAIgGAAIgLABIACA/IAAAGIAAAHQAAAcgSAAQgFAAgFgEg");
	this.shape_102.setTransform(469.7,271.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FF3FFF").s().p("AgmA2QgSgQAAgbQAAgXARgaQATgeAZAAQAMAAARAHQAWAJAAALQAAAGgFAEQgEAFgHAAQgGAAgHgFQgHgGgPAAQgJAAgKASQgLASAAAMQAAANAKAHQAIAHANAAQAJAAALgGQANgGACAAQAHAAAFAFQAEAEABAGQgBAKgUAKQgSAIgNAAQgaAAgSgPg");
	this.shape_103.setTransform(457.1,273.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FF3FFF").s().p("AgpA1QgUgPAAgcQAAgfAQgVQASgXAeAAQAVAAAOAGQATAKAAASQgBAOgPAKQgGAFgVAIIgoATQAFAFAJAEQAIADAKAAQAQAAALgHQALgGAGABQAMAAAAALQAAAOgUAKQgRAGgTAAQgcAAgTgNgAgPgcQgJAHgFAPIAcgLQAPgIAKgHQgIgEgNAAQgLAAgHAIg");
	this.shape_104.setTransform(443.7,273.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FF3FFF").s().p("AgrBWQgCgEAAgEQAAgGAGgFQAEgFAIAAQAHAAAGAJIAJAPQAFAJAEAAQAGAAACgRQAAgNgEg3IgEhAQAAgHAEgGQAFgHAIAAQAFAAAHAEQAFAEAAAFIAFBDIADBJQAAARgLAPQgMARgTAAQgcAAgTgqgAAFhgQgFgFAAgIQAAgHAFgFQAFgGAIAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgIAAgFgGg");
	this.shape_105.setTransform(430.7,274.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FF3FFF").s().p("AAiBcQgJAFgIACQgJABgJAAQgbAAgSgRQgTgSAAgcQAAghATgTQASgUAdAAQAJAAAIACQAHACAFAEQACgqACgQQACgOAOAAQAHAAAEAEQAFAFAAAHQAAASgDAjQgDAjAAARQAAAsADAPIAAADQAAAIgFADQgEAFgHAAQgJAAgEgIgAgYAFQgJALAAAVQAAANAJAJQAKAJANAAQAIAAAFgCQAEgBAIgHIAEgDIAAgsQgEgJgHgCQgGgEgJAAQgRAAgJAJg");
	this.shape_106.setTransform(419.3,270.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FF3FFF").s().p("AAeA5IgVAIQgIACgFAAQgdAAgPgQQgPgQAAgfQABgcAVgVQAWgVAdAAQAMAAAPAHQASAIAAAKQAAAEgDAEIgBAMIgBARQAAAWADAKIAGAMIAEAMQABAHgFAEQgFAEgGAAQgHAAgLgKgAgRgXQgMAMAAAQQAAARAGAIQAGAIAMAAQAGAAAHgDQAGgCAHgEQgEgdAAgOIAAgJIACgLIgEgCIgDgBQgQAAgNAOg");
	this.shape_107.setTransform(405.3,273.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FF3FFF").s().p("AgpA0QgVgOAAgcQAAgfARgVQASgYAdAAQAWAAAOAIQASAJAAATQABANgPAKQgHAFgVAIIgoASQAFAHAJADQAIADAKAAQAQAAAMgHQAKgFAGgBQANABAAAMQAAANgVAJQgRAIgTAAQgcgBgTgOgAgQgdQgIAIgEAQIAbgNQAPgHAKgGQgIgFgOAAQgKAAgIAHg");
	this.shape_108.setTransform(503.1,236.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FF3FFF").s().p("AgKBVQgGgEAAgHIABgNIAAgNIgCg/IgXgCQgPgBAAgOQAAgHAEgFQAFgFAHAAIAVACIAAgNIgBgMQAAgHAFgFQAFgEAHAAQARAAAAAeIAAAKIAMgBQAOAAAFACQAKADAAAMQAAAHgFAEQgEAFgIAAIgGAAIgGAAIgLABIACA/IAAAGIAAAHQAAAcgSAAQgFAAgFgEg");
	this.shape_109.setTransform(490.4,234.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FF3FFF").s().p("AAdA4IgUAIQgIADgFAAQgdAAgPgPQgPgQAAgfQAAgdAWgVQAWgVAdAAQAMAAAPAGQASAJAAAKQAAAEgCADIgCANIgBAQQAAAXADAKIAGANIAEAMQABAGgFAEQgFAEgHAAQgGAAgMgLgAgRgYQgMANAAARQAAAPAGAJQAGAIALAAQAHAAAHgCQAGgDAGgFQgDgcAAgOIAAgJIACgMIgEgBIgEgBQgPAAgNANg");
	this.shape_110.setTransform(477.6,236.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FF3FFF").s().p("AglA2QgUgQABgbQAAgXAQgaQAUgeAZAAQANAAARAHQAUAJAAALQAAAGgEAEQgEAFgHAAQgGAAgHgFQgHgGgPAAQgJAAgLASQgKASAAAMQAAANAJAHQAJAHAOAAQAIAAAMgGQALgGAEAAQAGAAAFAFQAFAEgBAGQAAAKgUAKQgTAIgLAAQgaAAgSgPg");
	this.shape_111.setTransform(463.9,236.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FF3FFF").s().p("AgPBZQgEgFAAgHIgBgWIAAgXIABgbIABgaQAAgHAFgFQAFgEAHAAQAGAAAFAEQAFAFAAAHIgBAaIgCAbIABAXIAAAWQAAAHgEAFQgFAEgHAAQgHAAgFgEgAgLg9QgFgFAAgIQAAgIAFgFQAGgFAHAAQAIAAAGAFQAFAFAAAIQAAAIgFAFQgGAFgIAAQgHAAgGgFg");
	this.shape_112.setTransform(454.5,233.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FF3FFF").s().p("AAiBcQgJAFgIABQgJACgJAAQgbAAgSgSQgTgRAAgcQAAghATgSQASgVAdAAQAJAAAIACQAHACAFAEQACgqACgPQACgPAOAAQAHAAAEAFQAFAFAAAGQAAASgDAkQgDAhAAATQAAArADAPIAAAEQAAAHgFAEQgEAEgHAAQgJAAgEgIgAgYAGQgJAKAAAVQAAANAJAKQAKAJANAAQAIAAAFgCQAEgCAIgGIAEgEIAAgtQgEgHgHgDQgGgEgJAAQgRAAgJAKg");
	this.shape_113.setTransform(443.2,233.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FF3FFF").s().p("AgpA0QgVgOAAgcQAAgfARgVQASgYAdAAQAWAAAOAIQASAJAAATQABANgPAKQgHAFgVAIIgoASQAFAHAJADQAIADAKAAQAQAAAMgHQAKgFAGgBQANABAAAMQAAANgVAJQgRAIgTAAQgcgBgTgOgAgQgdQgIAIgEAQIAbgNQAPgHAKgGQgIgFgOAAQgKAAgIAHg");
	this.shape_114.setTransform(428.8,236.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FF3FFF").s().p("AgwBAQgDgFAAgHIAAhPIAAgLIAAgLQAAgHAEgFQAFgEAHAAQAOAAACAOQAUgQAbAAQAYAAAAAgIAAAIQgBATgQAAQgPAAAAgQIAAgMQgbAEgMAYIAAA8QAAAHgEAFQgGAEgHAAQgIAAgEgEg");
	this.shape_115.setTransform(416.3,236.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FF3FFF").s().p("AgyBiQgFgFAAgHIAAgtIAAgwQAAgagBgTIgCgYQAAgLAEgGQAGgJAJABQAGAAAFAEQAFAFAAAGIAAACQAIgGAIgCQAHgCAJAAQAcAAANAYQAJASAAAdQAAAZgPASQgQASgcABQgJgBgMgCIAAAyQAAAHgFAFQgFAFgHAAQgHAAgFgFgAgGg5QgIADgIAHIABAyQALADAKAAQANAAAGgIQAGgIAAgNIgBgYQgEgOgLAAQgIAAgHAEg");
	this.shape_116.setTransform(403.5,239.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgKBVQgGgEAAgHIABgNIAAgNIgCg/IgXgCQgPgBAAgOQAAgHAEgFQAFgFAHAAIAVACIAAgNIgBgMQAAgHAFgFQAFgEAHAAQARAAAAAeIAAAKIAMgBQAOAAAFACQAKADAAAMQAAAHgFAEQgEAFgIAAIgGAAIgGAAIgLABIACA/IAAAGIAAAHQAAAcgSAAQgFAAgFgEg");
	this.shape_117.setTransform(272.3,274.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgmA2QgSgQgBgbQABgXAQgaQAUgeAZAAQANAAAQAHQAWAJAAALQgBAGgEAEQgEAFgHAAQgFAAgIgFQgHgGgPAAQgIAAgLASQgLASAAAMQAAANAKAHQAIAHANAAQAJAAAMgGQALgGADAAQAHAAAFAFQAEAEABAGQAAAKgVAKQgSAIgNAAQgZAAgTgPg");
	this.shape_118.setTransform(259.8,276.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgpA1QgVgPABgdQAAgeAQgVQASgXAdAAQAWAAAOAGQATAKAAASQgBAOgPAKQgHAFgUAIIgoATQAGAFAIAEQAIADAKAAQARAAAKgHQALgGAGABQANAAAAAMQgBANgUAKQgRAGgTAAQgcAAgTgNgAgPgcQgJAHgFAPIAcgLQAPgIAKgHQgIgEgOAAQgKAAgHAIg");
	this.shape_119.setTransform(246.4,276.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgrBWQgCgEAAgEQAAgGAGgFQAFgFAGAAQAIAAAGAJIAJAPQAFAJAEAAQAHAAABgRQAAgNgEg3IgEhAQAAgHAEgGQAFgHAIAAQAGAAAGAEQAFAEABAFIADBDIAEBJQAAARgLAPQgMARgTAAQgdAAgSgqgAAFhgQgFgFAAgIQAAgHAFgFQAFgGAIAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgIAAgFgGg");
	this.shape_120.setTransform(233.4,277.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgjBdQgFAEgHAAQgGAAgFgEQgFgEABgHIAAgJIAAgJIAAiJQAAgJAEgHQAFgJAJAAQANAAAAAPIgBAFIAAAFIAAAvQAJgFAIgDQAJgCAHAAQAcAAASAUQARATAAAcQgBAcgSAUQgVAUgbAAQgRAAgPgGgAgNgCQgJADgKAHIAAA0QARAIAMAAQAOAAAKgLQALgKgBgQQABgQgJgKQgIgKgOAAQgGAAgIADg");
	this.shape_121.setTransform(222.1,273.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AAYA8QgPAGgQAAQgRAAgMgHQgNgJgDgQQgFgeAAgXQAAgQAEgUQACgOAOAAQAHAAAFAFQAFAEAAAHIgBARIgCARQAAARABAMQABANADAIIAGACIAFABQANAAAQgEIAAgVIgBgUQAAgZADgSQACgPAOAAQAIAAAFAFQAFAEgBAHIgCArIAAAYIAAAZIABAHIAAAIQAAAHgFAEQgFAFgHAAQgKAAgFgKg");
	this.shape_122.setTransform(208,276.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgiBAQgSgHAAgOQAAgMAOAAQAGAAAKAEQALADAGAAQAXAAABgKQAAgGgRgIQgYgLgIgDQgRgNAAgRQAAgYAagJQAQgFAdAAQANAAAFADQAJAEgBAMQAAAWgLAAQgMAAgDgKIgKgBQgcAAAAAIQAAAFARAIQAYALAJAGQARAMAAAQQAAAVgUALQgPAJgWAAQgRAAgNgFg");
	this.shape_123.setTransform(195.4,276.7);

	this.instance_1 = new lib.Symbol9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(369.8,276.1,0.854,0.854,0,0,0,18.9,18.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(4,1,1).p("AqCChIAAlBA6AChIP+AAAaBChMgkDAAA");
	this.shape_124.setTransform(351.3,276);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_124},{t:this.instance_1},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95}]}).wait(160));

	// Layer 3
	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(1,1,1).p("AAuANQgSgFgHAAQgrACgXgW");
	this.shape_125.setTransform(141.5,180.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#F9CCC6").s().p("AhJAoQgfgQAAgYQAAgWAfgRQAfgQAqAAQAsAAAeAQQAfARAAAWQAAAYgfAQQgeAQgsAAQgqAAgfgQgAA7AQIAAgBIgEgBIgBAAIgBAAIgOgDIgEAAIAAAAIgBAAIAAAAIgHAAIAAAAIgBAAQgiAAgUgRIgEgDIAEADQAUARAiAAIABAAIAAAAIAHAAIAAAAIABAAIAAAAIAEAAIAOADIABAAIABAAIAEABIAAABg");
	this.shape_126.setTransform(140.2,180.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(1,1,1).p("AYNJLQqCD2uLAAQkKAAkbgbIpfApICnhmQktg7kChjQqBj2AAlbQAAlcKBj2QKCj2OKAAQOLAAKCD2QKBD2AAFcQAAFbqBD2g");
	this.shape_127.setTransform(313,97.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AvdLpQktg7kChjQqBj2AAlbQAAlcKBj2QKCj2OKAAQOLAAKBD2QKCD2AAFcQAAFbqCD2QqBD2uLAAQkKAAkbgbIpfApg");
	this.shape_128.setTransform(313,97.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_126},{t:this.shape_125}]}).to({state:[]},5).to({state:[{t:this.shape_128},{t:this.shape_126},{t:this.shape_127},{t:this.shape_125}]},107).wait(48));

	// Layer 1
	this.instance_2 = new lib.Symbol8();
	this.instance_2.parent = this;
	this.instance_2.setTransform(127.1,251.5,1,1,0,0,0,64.5,98.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(160));

	// Layer 5
	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(1,1,1).p("AYNJLQqCD2uLAAQkJAAkcgbIpfApICnhmQktg7kChjQqBj2AAlbQAAlcKBj2QKCj2OKAAQOLAAKCD2QKBD2AAFcQAAFbqBD2g");
	this.shape_129.setTransform(313,115);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AvdLpQksg7kDhjQqBj2AAlbQAAlcKBj2QKCj2OKAAQOLAAKBD2QKCD2AAFcQAAFbqCD2QqBD2uLAAQkJAAkcgcIpfAqg");
	this.shape_130.setTransform(313,115);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_130},{t:this.shape_129}]}).wait(160));

	// Layer 4
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,53.9,1,1,0,0,0,54,40.5);

	this.instance_3 = new lib.Back("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(275.5,208.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.UI}]}).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,200.6,534,398.7);
// library properties:
lib.properties = {
	id: 'AB282FB6B6C9A940A50720525035B2C8',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/diagramformchanges.mp3", id:"diagramformchanges"},
		{src:"sounds/wrong_answer.mp3", id:"wrong_answer"},
		{src:"sounds/High_Screaming_Gtr.mp3", id:"High_Screaming_Gtr"},
		{src:"sounds/powersynth.mp3", id:"powersynth"},
		{src:"sounds/bgmPA.mp3", id:"bgmPA"},
		{src:"sounds/salsa_groove.mp3", id:"salsa_groove"},
		{src:"sounds/sexy_sax.mp3", id:"sexy_sax"}
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
an.compositions['AB282FB6B6C9A940A50720525035B2C8'] = {
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